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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0116.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00361 | INT. STAMP AUCTION HOUSE - VAULT ROOM - NIGHT
Detected names (may be incomplete or contain aliases): QUENTIN ASHBY-REYES, NOVA, CORNELIUS
* 1 A ¶ Glass cases of rare stamps under dim lamps.
* 2 A A long table, a velvet cloth, a pair of tweezers resting on a magnifier.
3 A ¶ QUENTIN ASHBY-REYES, forties, in a tuxedo, studies a framed Inverted Jenny.
4 A NOVA, thirties, in an evening dress, stands beside him holding a champagne flute.
5 A CORNELIUS, fifties, the auctioneer, stands behind a podium counting a ledger.
6 A ¶ He sets his glass down.
7 A She sips hers.
8 A Cornelius closes the ledger, takes off his glasses, and rubs the bridge of his nose.
9 D CORNELIUS: The lot is sealed.
10 D QUENTIN: Of course.
11 D CORNELIUS: You're quite sure you want to bid?
12 D QUENTIN: Sure.
13 A ¶ Nova drifts to the case.
14 A She runs a finger along the glass.
15 A Quentin watches her hand.
16 A Cornelius watches Quentin.
17 D NOVA: It's smaller than I thought.
18 D CORNELIUS: They always are.
19 A ¶ Quentin lifts the champagne bottle and refills all three glasses.
20 A His hand does not shake.
21 A Cornelius takes his without looking down.
22 A Nova takes hers and, in the same motion, tips it onto the carpet.
23 A ¶ Cornelius frowns.
24 A She steps back.
25 A Quentin raises the bottle like a club.
26 A Cornelius reaches under the podium.
27 A Nobody speaks.
* 28 A ¶ The lights go out.
* 29 A ¶ When they come back, the case is empty, the podium is empty, and the three glasses lie upside down on the cloth in a perfect row.

### SCENE s00362 | EXT. ICE-FISHING SHACK VILLAGE - FROZEN LAKE - DUSK
Detected names (may be incomplete or contain aliases): HALVARD, ANNIKA, RUSLAN, TOVA, BJORN, OLD MARGIT
* 1 A ¶ A scatter of tarpaper shacks on a vast white lake, each with a stovepipe breathing smoke.
* 2 A The wind has a knife in it.
3 A ¶ HALVARD, sixties, a fisherman in a fur hat, crouches at a hole with a jig.
4 A ANNIKA, thirties, his daughter, holds a thermos.
5 A RUSLAN, forties, a stranger in a thin jacket, stands in the doorway.
6 A TOVA, ten, sits on a bucket.
7 A BJORN, thirties, Annika's husband, tends the stove.
8 A OLD MARGIT, eighties, wrapped in two blankets, dozes in the corner.
9 A ¶ Halvard hauls up a line.
* 10 A Nothing on it.
11 A He drops it back.
12 A Ruslan watches, shivering.
13 A Annika offers him the thermos.
14 A He takes it with both hands.
15 D RUSLAN: Thank you.
16 D ANNIKA: Close the door.
17 D RUSLAN: My car is dead.
18 D BJORN (to Ruslan): Sit by the stove.
19 A ¶ Ruslan sits.
20 A Tova stares at his shoes.
21 A Margit stirs.
22 D MARGIT (to nobody): Ice is thinning.
23 D HALVARD: Margit, sleep.
24 D ANNIKA: Papa, listen.
* 25 A ¶ A groan from the lake, long and deep, like a whale turning.
26 A Everyone looks at the floor.
27 D HALVARD: Out. All of us.
28 D ANNIKA: Papa, the ice...
29 D HALVARD: Now!
30 D TOVA: Mama!
31 D ANNIKA: Go!

### SCENE s00363 | INT. SEED VAULT - ARCTIC ISLAND - NIGHT
Detected names (may be incomplete or contain aliases): IVO LUNDQVIST, NORA
* 1 A ¶ A frozen concrete tunnel, shelves of sealed foil packets disappearing into the dark.
* 2 A Every breath is a cloud.
3 A ¶ IVO LUNDQVIST, forties, a thief in a thermal suit, kneels at a steel case, a pry bar in his gloved hands.
* 4 A His earpiece crackles.
5 D NORA [V.O.] (over earpiece): Ivo, you have six minutes before the guard rotation.
6 D IVO (whisper): I know.
7 A ¶ He cracks the case.
* 8 A It opens.
* 9 A Inside lies a single glass vial, pale gold.
10 D NORA [V.O.] (over earpiece): Don't touch it. Is it the right strain?
11 A ¶ He lifts it to the light.
12 A He turns it.
13 A He sets it back.
14 D IVO: Wrong label.
15 D NORA [V.O.] (over earpiece): Then try the next case.
16 A ¶ He rises.
17 A He crosses the tunnel in three strides.
18 A He pries the second case.
* 19 A A siren starts low and climbs.
20 A Ivo lunges backward, slips on the ice, and the vial flies out of his hand.
21 D NORA [V.O.] (over earpiece): Ivo! What happened?
22 A ¶ Ivo and the vial hang in the air for a long beat.
23 A He catches it a hand's width above the floor.
* 24 A The siren stops.
* 25 A Silence.
26 D IVO: Got it.
27 D NORA [V.O.] (over earpiece, quiet): Good. Now turn around.
28 A ¶ He does.
29 A A single red dot rests on his chest.
30 A At the end of the tunnel, the guard lowers a rifle.
31 D IVO: Nora?
32 D NORA [V.O.] (over earpiece): He pays better.

### SCENE s00364 | EXT. DRIVE-IN THEATER - NIGHT
Detected names (may be incomplete or contain aliases): TESS BRANNIGAN, JOSE ALVARADO-CHEN, MARCELLO, DELIA, CONCESSION VOICE
* 1 A ¶ A cracked asphalt lot facing a huge cream-colored screen.
* 2 A Speaker poles stand in rows like metal weeds.
* 3 A Fireflies drift between them.
* 4 A A projector shaft glows over a concession hut.
* 5 A The film is a silent black-and-white western, its dust-lit figures galloping over the clouds.
6 A ¶ TESS BRANNIGAN, seventeen, sits cross-legged on the hood of a dented pickup, wrapped in an oversized flannel.
7 A Her hair is pulled up in a loose knot.
8 A She keeps picking at a sticker on her water bottle.
9 A ¶ JOSE ALVARADO-CHEN, seventeen, sits beside her, lanky and awkward, his knees too high, one sneaker untied.
10 A He eats popcorn with the intensity of someone avoiding a conversation.
11 A ¶ MARCELLO, eighteen, Tess's brother, leans against the driver's door with a cigarette he has not lit.
12 A He looks at the sky, then at the screen, then at his sister.
13 A ¶ DELIA, sixteen, Jose's cousin, perches on the tailgate swinging her legs.
14 D TESS: He said he'd be here by nine.
15 D JOSE: It's only nine-fifteen.
16 D TESS: It's nine-twenty.
17 A ¶ He offers her popcorn.
18 A She takes a piece, doesn't eat it.
19 A Marcello clears his throat.
20 D MARCELLO: You want me to call him?
21 D TESS: No.
22 A ¶ He lights the cigarette.
23 A Delia kicks the tailgate.
* 24 A The projector flickers, a reel jumps, and the galloping horses stutter and freeze.
* 25 A ¶ A scratchy loudspeaker voice crackles from the concession hut.
26 D CONCESSION VOICE [V.O.] (over speaker): Folks, sorry for the delay. Reel two will be right up. In the meantime, enjoy the stars.
27 A ¶ Everyone looks up.
* 28 A The stars are thick, cold, indifferent.
29 D DELIA: Pretty.
30 D JOSE (to Tess, quietly): I could wait with you. If you want.
31 D TESS: You don't have to.
32 D JOSE: I know.
33 A ¶ He slides a little closer on the hood.
34 A She does not move away.
35 A Marcello watches them, then turns his back and stares at the screen.
* 36 A The film jerks to life.
37 A The horses gallop again, and nobody in the truck says a word until the credits.

### SCENE s00365 | EXT. ROWBOAT - MIDDLE OF A MIST-BOUND LAKE - DAWN
Detected names (may be incomplete or contain aliases): BEATRIX LOWELL, CAROLINE LOWELL
* 1 A ¶ A battered rowboat drifts on glass-flat water, fog pressing in from every side.
* 2 A The oars lie shipped.
* 3 A A tackle box rests open between two seats.
4 A ¶ BEATRIX LOWELL, sixties, in a yellow slicker, holds a rod.
5 A Her daughter CAROLINE LOWELL, thirties, sits opposite, hands wrapped round a thermos.
6 A Neither has caught a thing.
7 A Neither has spoken for an hour.
* 8 A A loon calls across the water.
9 A Beatrix reels in.
10 A Caroline watches the line.
11 D BEATRIX: You never liked fishing.
12 D CAROLINE: I liked sitting with you.
13 D BEATRIX: That's not the same.
14 D CAROLINE: It was for me.
15 A ¶ Beatrix casts again.
* 16 A The lure arcs, plops.
17 A She does not look up.
18 D BEATRIX: She called me, you know.
19 D CAROLINE: Who?
20 D BEATRIX: Your sister. She said you'd been dodging her.
21 D CAROLINE: She's the one who stopped answering.
22 D BEATRIX: That's not what she said.
23 D CAROLINE (rising from the seat): Mother, please.
24 D BEATRIX: Sit down before you tip us!
25 D CAROLINE: You always do this!
26 A ¶ She stands.
* 27 A The boat rocks.
28 A Beatrix grabs the gunwale.
29 A She lifts her eyes, finally, and the two women glare at each other across the fog, the loon crying again, closer.

### SCENE s00366 | INT. MATTRESS SHOWROOM - DAY
Detected names (may be incomplete or contain aliases): DUANE PETTIGREW, LUCINDA FROST, THEO FROST
* 1 A ¶ A cavernous warehouse of beds.
* 2 A Banners scream "BLOWOUT."
* 3 A A fake sunrise glows over a king-size.
4 A ¶ DUANE PETTIGREW, forties, a salesman in a shiny tie, hovers over a couple.
5 A LUCINDA FROST, thirties, bounces gently on a firm model.
6 A Her husband THEO FROST, thirties, lies flat on a plush one with his shoes on.
7 D DUANE: This one has four layers of memory foam.
8 D LUCINDA: I'll take your word.
9 A ¶ Duane clasps his hands.
10 A Theo rolls over and sinks into the foam with a long sigh while Lucinda stands and moves to a third bed, which Duane hurriedly pats, and while Theo's shoes drag a smear of mud across the quilted top, Duane gasps and lunges with a wipe, and Lucinda kneels to inspect the springs.
11 D THEO: I can't get up.
12 D LUCINDA: It's only a mattress.
13 D THEO: It has me.
14 D DUANE: That's the contouring technology!
15 A ¶ Duane takes Theo's arm and heaves.
16 A Theo comes up an inch and falls back.
17 A Lucinda grabs his other arm.
18 A They pull in unison and the three tumble off the edge of the bed in a heap, the sign "BLOWOUT" swaying overhead.

### SCENE s00367 | INT. WAX MUSEUM - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HOLLIS DRAKE, WILHELMINA VOSS, CONSTABLE REUBEN OKAFOR-LEE, MADAME ODILE FERRIER, LORD ASHTON PEMBERTON, NURSE JOSEPHINE BELL, PHONE
* 1 A ¶ A wax museum at midnight.
* 2 A Rows of lifelike figures in period costume, glass eyes catching the exit light.
* 3 A A velvet rope sags.
* 4 A A faint scent of melting paraffin hangs in the dark.
5 A ¶ INSPECTOR HOLLIS DRAKE, fifties, trench-coated, a pocket flashlight in his teeth, crouches by a figure of Napoleon.
6 A DR. WILHELMINA VOSS, forties, the museum curator, stands over him with a clipboard.
7 A CONSTABLE REUBEN OKAFOR-LEE, twenties, shifts his weight at the door, hand on his truncheon.
8 A MADAME ODILE FERRIER, seventies, the sculptor, sits on a folding stool gripping a cane.
9 A LORD ASHTON PEMBERTON, sixties, the patron, leans against a plinth, his cravat undone.
10 A NURSE JOSEPHINE BELL, thirties, hovers at his shoulder with a medical bag.
11 D DRAKE (to Wilhelmina): When was this figure last moved?
12 D WILHELMINA: Never. It's been bolted since 1962.
13 D DRAKE: Then who changed his hat?
14 D WILHELMINA: I'm sorry?
15 A ¶ He stands.
16 A He lifts the bicorne from Napoleon's head.
* 17 A Beneath it, the wax has been scored with a fine hairline crack, and in the crack, something glints.
18 D DRAKE: Constable, gloves.
19 D REUBEN: Here, sir.
20 A ¶ He hands them over.
21 A Drake slides a gloved finger into the crack, hooks the glint, and draws it out: a small brass key.
22 D PEMBERTON: Well, there you are. A key. How delightful.
23 D ODILE (sharply): Ashton.
24 D PEMBERTON: What, Odile?
25 D ODILE: You promised.
26 A ¶ Pemberton straightens.
27 A Josephine's hand drifts to his sleeve.
28 A He shakes it off.
29 D DRAKE: Lord Pemberton, you've seen this key before.
30 D PEMBERTON: I haven't.
31 D DRAKE: You have a matching one in your waistcoat.
32 A ¶ Pemberton's hand goes to his chest.
33 A Odile bows her head.
34 A Wilhelmina lowers her clipboard.
35 D WILHELMINA: Inspector, what does the key open?
36 D DRAKE: Dr. Voss, I believe you can tell me.
37 D WILHELMINA (a long pause): The cellar. Under the Chamber of Horrors.
38 D DRAKE: And what's in the cellar?
39 D WILHELMINA: The first sculpture. The one Madame Ferrier never exhibited.
40 A ¶ All eyes turn to Odile.
41 A She sets down her cane.
42 A She lifts her chin.
43 D ODILE: I made her so well, Inspector. So very well. Nobody could tell she wasn't alive.
44 D DRAKE: Who was she?
45 D ODILE: My sister.
46 D REUBEN: Ma'am?
47 D ODILE: She sat for me on the last night of her life. I could not bear to let her go.
48 D JOSEPHINE (whispering to Pemberton): You knew?
49 D PEMBERTON (low): I paid to keep it quiet.
50 D DRAKE: Constable, escort Madame Ferrier and Lord Pemberton to the carriage. Nurse Bell, you will assist Dr. Voss with the cellar.
51 D REUBEN: Yes, sir.
52 D PHONE [V.O.] (from the hallway): Inspector, this is the Commissioner. Have you concluded?
53 D DRAKE (calling toward the hall): Nearly, sir.
54 A ¶ Drake pockets the key.
55 A Odile rises with surprising grace and takes Reuben's arm.
56 A At the door she stops, turns, and looks at the figures one last time.
57 D ODILE: They keep better than we do, you know.
58 A ¶ She exits.
* 59 A The wax faces stare after her.
60 A Drake switches off his flashlight and the museum goes dim.

### SCENE s00368 | INT. LIBRARY INSIDE GIANT TORTOISE SHELL - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIVIST ELOWEN, STRANGER, TAMSIN
* 1 A ¶ A cathedral of bone-white arches curving overhead, every rib lined with shelves of crumbling scrolls.
* 2 A Lanterns hang on slow chains.
* 3 A The floor sways in a gentle, immense rhythm, as though the whole library were breathing.
4 A ¶ ARCHIVIST ELOWEN, thirties, in a gray robe, ink on her fingers, climbs a rolling ladder with a scroll tucked under her arm.
5 A ¶ A STRANGER, forties, in a travel-worn cloak, steps through the narrow doorway at the base of the shell.
6 A Snow dusts his shoulders.
7 A He sets down a staff carved with spirals.
8 D STRANGER: Forgive the hour. I seek the book of true names.
9 D ELOWEN: No one seeks it. It finds them.
10 D STRANGER: Then perhaps it has found me.
11 D ELOWEN: Perhaps. Your name?
12 D STRANGER: I have not carried one in a long time.
13 A ¶ She descends.
* 14 A The ladder creaks.
15 A She walks to him and studies his face by lantern light, the scar through his left brow, the grey in his beard.
16 D ELOWEN: I know that scar.
17 D STRANGER: I doubt it.
18 D ELOWEN: You were a prince, once. Of the drowned towns.
19 D STRANGER: I was a boy once. A prince is only a boy with a good tailor.
20 A ¶ She reaches for a high shelf and brings down a bound volume, its cover cracked, its clasp rusted.
21 A She opens it, turns three pages, and reads aloud.
22 D ELOWEN: "Tamsin, son of the tide. Sworn to forget, and failing."
23 A ¶ The Stranger closes his eyes.
* 24 A The floor lurches, a great slow tremor, as the tortoise stirs beneath them.
* 25 A Dust falls from the arches.
26 D TAMSIN: You have spoken it.
27 D ELOWEN: Tamsin.
28 D TAMSIN: Then you know what comes.
29 D ELOWEN: The sea.
30 A ¶ He nods.
* 31 A Far below the floor, something vast begins to move toward the sound of his name.

### SCENE s00369 | INT. GREENHOUSE COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE ELDRIDGE MARCHAND, PROSECUTOR LOUISA ZAMBRANO, DEFENDANT, JUDGE, DOLORES
* 1 A ¶ A county courtroom improvised in an old botanical greenhouse.
* 2 A Glass panes fog with humidity.
* 3 A Tomato vines climb the jury box.
* 4 A Benches have been dragged between rows of orchids.
* 5 A A gavel sits on a flowerpot.
6 A ¶ JUDGE ELDRIDGE MARCHAND, sixties, in a robe damp at the hem, presides from a potting bench raised on cinderblocks.
7 A His spectacles keep fogging, and he wipes them with the same corner of the robe every thirty seconds.
8 A ¶ PROSECUTOR LOUISA ZAMBRANO, thirties, stands at a lectern made from a wooden crate, her notes curling in the heat.
9 A ¶ A DEFENDANT, forties, sits at the defense table in a borrowed suit, pale, sweating, his hands flat on the wood.
10 D LOUISA: Your Honor, the state calls its final witness.
11 D JUDGE: Proceed.
12 A ¶ She turns.
13 A At the back, among the ferns, a woman rises.
14 D LOUISA: The state calls Mrs. Dolores Vance.
15 D DEFENDANT (whisper, to nobody): No.
16 A ¶ The woman walks the aisle between the orchids.
* 17 A Each step leaves a wet print on the tile.
18 A She takes the stand, a wicker chair beside a fig tree, and places her hands in her lap.
19 D JUDGE: Mrs. Vance, do you swear to tell the truth?
20 D DOLORES: I do.
21 D LOUISA: Mrs. Vance, do you recognize the man at the defense table?
22 D DOLORES: I do.
23 D LOUISA: Who is he?
24 D DOLORES: My husband.
25 A ¶ The Defendant closes his eyes.
26 A The Judge wipes his spectacles.
* 27 A A drop of condensation slides down the glass and falls onto the gavel.
28 D LOUISA: And when did you last see him before today?
29 D DOLORES: Eleven years ago. The night I was buried.
* 30 A ¶ Silence.
* 31 A A moth lands on the Judge's shoulder.
32 A He does not brush it off.
33 A The Defendant opens his eyes and looks directly at her, and a very small, terrible smile crosses his face.
34 D DEFENDANT: Hello, Dolores.

### SCENE s00370 | INT. GRAIN BARGE "MARIE LOUISE" - GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): HALVARD KROGH, INGRID, TOBY, BRONWEN PELL, KNOCK, STRANGER, OSKAR
* 1 A ¶ A narrow cabin frozen into the river ice.
* 2 A A cast-iron stove ticks.
* 3 A Frost feathers the porthole.
4 A ¶ HALVARD KROGH, 60, barge captain, bearded, patient hands, ladles thin soup into tin bowls.
5 A His daughter INGRID, 30, wrapped in a army blanket, counts crackers into piles on the table.
6 A ¶ TOBY, 10, Ingrid's son, sits cross-legged on the bunk, tracing a face in the frost on the glass.
7 A ¶ BRONWEN PELL, 70, a retired schoolteacher with a deaf ear and a sharp one, knits something that is clearly never going to be finished.
8 D HALVARD: Eight days. The ice master said ten at most.
9 D INGRID: He also said the thaw would come on the first.
10 D BRONWEN (too loud): What was that?
11 D INGRID: Nothing, Mrs. Pell.
12 D TOBY: Grandpa, the stove's quiet.
13 D HALVARD: It's saving its strength.
* 14 A ¶ A calm settles.
* 15 A The soup steams.
* 16 A Even the wind seems to have gone to bed.
17 A Ingrid slides a cracker pile toward her son and he slides it back.
18 D INGRID: Eat, Toby.
19 D TOBY: You first.
* 20 A ¶ A KNOCK on the hull.
* 21 A Three slow raps.
22 A Everyone stops.
23 A ¶ Halvard sets down the ladle.
24 A He takes a boat hook from the wall and opens the hatch.
* 25 A Snow blows in.
26 A ¶ A man stands on the ice, hatless, rimed white, a canvas sack over one shoulder.
27 A This is the STRANGER, 40s, soft-spoken, smiling with the lower half of his face only.
28 D STRANGER: Forgive me. I saw your smoke from the north bank. I walked a long way.
29 D HALVARD: Nobody walks that ice. It's rotten past the channel buoy.
30 D STRANGER: Then I walked carefully.
31 A ¶ Halvard weighs him, then steps back.
32 A The stranger climbs down and sits where he is told, nearest the stove.
33 D INGRID: What's your name?
34 D STRANGER: Oskar. Oskar Venn.
35 D BRONWEN: Venn? I taught a Venn. Little boy, wet cough, always drew boats.
36 D OSKAR: Not me, I'm afraid.
37 D HALVARD: Ingrid. Soup.
38 A ¶ Ingrid hands Oskar a bowl.
39 A He holds it with both hands and does not drink.
40 D OSKAR: Is it only the four of you?
41 D HALVARD: Does it matter?
42 D OSKAR: Only in the way that counting matters.
43 D TOBY: We're not four. There's Gunnar.
44 D INGRID: Toby.
45 D TOBY: He's under the deck.
* 46 A ¶ Silence.
47 A Halvard looks at his daughter.
48 A She looks at the floor.
49 D OSKAR: Under the deck.
50 D HALVARD: My deckhand. He went through the ice on the third day, going for the line. We brought him back. We have not been able to take him ashore.
51 D OSKAR: I'm sorry.
52 D HALVARD: You're not.
53 D OSKAR: No. I'm not. I'm relieved. I won't have to explain myself to a man who's still looking for his friend.
54 D BRONWEN (very loud): What did he say?
55 D HALVARD: Mr. Venn, tell me why you walked out here.
56 D OSKAR: There were nine of us on the grain wharf at the start. We drew straws for who walked the river. The others are sleeping in a warehouse with the doors chained. I did not draw a short straw, Captain. I drew the only straw that said the barge had food.
57 D INGRID: Who told you we had food?
58 D OSKAR: The man who sold you the flour, three weeks ago. He sold it to us as well. He kept a ledger of every boat that bought from him, and every boat that did not leave before the freeze.
59 D HALVARD: You're from the company.
60 D OSKAR: I'm from the harbor. The company is a letter on the door. Nobody's coming for this barge, Captain. Not on the first. Not on the tenth. They wrote you off the day the ice closed, and the river has been kind to them by taking you quietly.
61 D TOBY: Mom?
62 D INGRID: Hush.
63 D OSKAR: I have bread in this sack. And salt. And a lantern, which is how I found you. I came to trade.
64 D HALVARD: Trade what?
65 D OSKAR: Passage. There is a way across that holds. I walked it. I can take two more tonight, three if the child is small and nobody argues.
66 D BRONWEN: Two?
67 D OSKAR: Three.
68 A ¶ Halvard lowers the boat hook.
69 A Ingrid stands.
* 70 A The stove pops, loud as a shot, and nobody looks at it.
71 D INGRID: Three of five.
72 D OSKAR: Three of five. I did not draw the numbers.
73 A ¶ Halvard slowly turns to the hatch, reaches for the lantern, and blows it out.
* 74 A The galley falls dark but for the red slot of the stove.
75 D HALVARD: Then you will wait for morning, Mr. Venn. And in the morning, you will show me this way across. Alone.
76 D OSKAR (softly): That is not the arrangement.
* 77 A ¶ In the dark, the sound of a knife leaving a sheath.
* 78 A It is not Halvard's.

### SCENE s00371 | INT. FERRY TERMINAL HOLDING ROOM - NIGHT COURT - NIGHT
Detected names (may be incomplete or contain aliases): NNEKA ADEBAYO, DEZ FAIRWEATHER, ELLIOT VANCE, MORRIS KOWALSKI, PRISCILLA TRAN, JUDGE LAVOIE
* 1 A ¶ A waiting hall that was once for passengers, now rigged as a courtroom with folding tables and a flag on a mic stand.
* 2 A Salt damp climbs the tile.
* 3 A Somewhere a ship's horn sounds and fades.
4 A ¶ NNEKA ADEBAYO, 35, public defender, stands at the defense table with a coat she has not taken off.
5 A She keeps one hand flat on a file as though it might fly.
6 A ¶ Beside her, DEZ FAIRWEATHER, 22, in a paper jumpsuit, jiggles his knee.
7 A He studies the ceiling tiles.
8 A He does not look at her.
9 A ¶ Across the aisle, ELLIOT VANCE, 40s, prosecutor, polishes his glasses on his tie.
10 A He is smiling at nothing.
11 A ¶ At the back, bailiff MORRIS KOWALSKI, 60, leans on a vending machine, eating something orange from a bag.
12 A PRISCILLA TRAN, 25, the clerk, types with her whole face.
* 13 A ¶ A speaker box on a pole CRACKLES.
14 D JUDGE LAVOIE [V.O.] (over intercom): Counsel, can you hear me? The river fog has closed the bridge. I'm appearing from the car.
15 D NNEKA: We can hear you, Your Honor.
16 D JUDGE LAVOIE [V.O.]: Good. Mr. Vance, the state's position on bail.
17 A ¶ Vance stands.
18 A He buttons his jacket, then unbuttons it, then sits back down, as if reconsidering the whole idea of standing.
19 D ELLIOT: The state has no objection to release, Your Honor.
20 A ¶ Nneka's head snaps toward him.
21 A She searches his face for the joke.
22 D NNEKA: No objection?
23 D ELLIOT: New evidence. The camera footage places the defendant at the Marlow Street shelter at the time of the break-in.
24 D DEZ (whispering): That's what I told you.
25 A ¶ Nneka covers his hand with hers to quiet him.
26 A She is already thinking three moves ahead and does not like where it leads.
27 D NNEKA: Your Honor, the defense moves for dismissal.
28 D JUDGE LAVOIE [V.O.]: Is the state opposed?
29 A ¶ Vance hesitates.
30 A He turns, very slightly, to the clerk.
31 A Priscilla stops typing.
32 A He tilts his head.
33 A She shakes hers once, small, a flicker.
34 D ELLIOT: The state is... opposed. Your Honor. I've just been informed that the footage was timestamped from a different clock.
35 D NNEKA: Informed by whom?
36 A ¶ Priscilla goes pale.
37 A Morris looks up from his bag.
38 D JUDGE LAVOIE [V.O.]: Ms. Adebay, sit down.
39 D NNEKA: It's Adebayo, Your Honor, and I'd like the clerk to explain the clock.
* 40 A ¶ The intercom hisses.
41 A Dez rises half out of his chair.
42 A Morris sets down the bag and walks forward, one hand drifting to his belt.
43 D DEZ: I didn't do it. I never did it. Why does it keep changing?
44 A ¶ He tries to say more and can't.
45 A Nneka puts a hand on his shoulder and, for the first time, looks at him.
46 D NNEKA (low): Sit. I've got you.
47 A ¶ He sits.
48 A She stands.
* 49 A The fog presses at the windows like a face.

### SCENE s00372_0 | INT. ROLLER RINK - AFTER CLOSING - NIGHT
Detected names (may be incomplete or contain aliases): JUNE ABARA, CALVIN, RAFA, PRIYA, DUBOIS
* 1 A ¶ Half the lights are off.
* 2 A The disco ball turns slowly over an empty floor.
* 3 A Rental skates hang in pairs along a wall.
4 A ¶ JUNE ABARA, 16, sits on the carpeted bench lacing a skate she has already laced.
5 A Her brother CALVIN, 19, stacks chairs with his back to her.
6 A ¶ RAFA, 17, and PRIYA, 16, hover near the snack counter, sharing one bag of chips and not eating them.
7 A ¶ MR. DUBOIS, 55, rink manager, jingles keys by the front door.
8 D MR. DUBOIS: Ten minutes, kids. I'm not paying the electric for a goodbye.
9 A ¶ Nobody moves.
10 A Calvin sets one chair down harder than needed.
11 D RAFA: You could have said something, June.
12 D JUNE: I said it.
13 D RAFA: Not to her.
14 A ¶ Priya looks at the floor.
15 A June pulls the lace tighter and the skate goes white at the toe.
16 D CALVIN (not turning): Mom's in the car.
17 D JUNE: I know.
18 D CALVIN: She's been in the car forty minutes.
19 A ¶ June stands.
20 A She wobbles, steadies, rolls two feet toward the floor, and stops at the edge like it is a curb.
21 D PRIYA: I'll go with you.
22 D RAFA: I'll go with you.
23 A ¶ They say it together.
24 A Both stop.
25 A Neither looks at the other.
26 D PRIYA: I'll go with you. ^RAFA I'll go with you.
27 D JUNE (a small laugh that dies): You two are the worst.
28 A ¶ She rolls out onto the floor.
29 A One slow lap.
30 A Priya and Rafa watch.
31 A Calvin has stopped stacking.
32 A ¶ Halfway round she tips her head back to the disco ball.
33 A It throws small white dots across her face, and she lets them.
34 D MR. DUBOIS: June. That's time.
35 A ¶ She finishes the lap.
36 A At the bench she sits, unlaces the skate, and hands it to Calvin.
37 A He takes it without a word and puts it on the shelf.
38 A He holds her shoe out.
39 A She puts it on.
40 A ¶ At the door, Priya hands her the bag of chips.
41 A June takes one.
42 A Eats it.
43 A Gives the bag back.

### SCENE s00372_1 | EXT. ROLLER RINK PARKING LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A beat-up minivan idles, dome light on.
2 A Inside, a woman's shape, hands on the wheel.
3 A June walks to the passenger door and gets in.
4 A She does not close it right away.

### SCENE s00373_0 | INT. FERRIS WHEEL LOST-AND-FOUND BOOTH - DAY
Detected names (may be incomplete or contain aliases): BARNABY, DOT, STRANGER
* 1 A ¶ Cramped.
* 2 A Unclaimed teddy bears.
* 3 A One prosthetic leg.
4 A ¶ BARNABY, 50s, attendant, mustache, sits behind a counter.
5 A DOT, 70, hands on hips, stands before him.
6 D DOT: I lost a hat.
7 D BARNABY: Describe it.
8 D DOT: Big. Green. A bird on it.
9 A ¶ A STRANGER, 40s, slides into frame behind Dot, wearing a green hat with a bird on it.
10 A He tips it.
11 D BARNABY: That one?
12 D DOT: That's mine!
13 A ¶ The Stranger bolts.
14 A Barnaby vaults the counter.
15 A Dot swings her purse and misses.

### SCENE s00373_1 | EXT. FERRIS WHEEL BASE - CONTINUOUS
Detected names (may be incomplete or contain aliases): STRANGER, BARNABY, WILFRED
1 A ¶ The Stranger climbs into a gondola.
2 A Barnaby climbs in after.
* 3 A It lurches skyward.
4 D STRANGER: I'm Wilfred! I found it! It was lost!
5 D BARNABY: It was FOUND by her!
6 D WILFRED: She lost it! I FOUND it! Technically that's the system!
7 A ¶ Barnaby considers this.
* 8 A The gondola stops at the top.
9 A They both look down at Dot, tiny, waving her purse.
10 D BARNABY: I really hate that you're right.

### SCENE s00374 | INT. FUNICULAR CAR - MIDNIGHT
Detected names (may be incomplete or contain aliases): VESPER KOWALCZYK, LORENZO, ODILE, HIRO, GUARD
* 1 A ¶ A small wooden car climbs a steep rail above a sleeping alpine town.
* 2 A A single lamp swings from the roof.
* 3 A Below, the lights of the Hotel Edelweiss glitter.
4 A ¶ VESPER KOWALCZYK, 40s, elegant, in a conductor's cap and uniform that almost fits, stands at the brake wheel.
5 A She is the picture of calm.
6 A ¶ LORENZO, 30s, bellhop's jacket, crouches on a long steamer trunk.
7 A ODILE, 50s, in a fur coat that does not belong to her, sits upright on the bench with a cane across her knees.
8 A HIRO, 20s, thin, quiet, wearing a night porter's apron, holds a canvas tool roll.
9 D VESPER: Four minutes to the top station. We stop at the second landing for the cable.
10 D LORENZO: The cable is on the trunk?
11 D VESPER: The cable is the trunk.
12 A ¶ Odile taps her cane twice on the floor.
13 A Hiro unrolls his tools without a sound.
14 D LORENZO: What does the guard say when the car stops?
15 D ODILE: The guard has been drinking since nine.
16 D VESPER: The guard is a gentleman. He sleeps well.
* 17 A ¶ The car shudders over a joint in the rail.
18 A Everyone grips something.
* 19 A Then it settles, and the hum of the cable resumes.
20 D HIRO (quiet): There is a second car coming down.
21 A ¶ They look.
* 22 A Through the rear window, a pair of lights, small, then larger, sliding down the opposite track.
23 D VESPER: That's the midnight milk run. It passes us at the landing.
24 D LORENZO: Nobody said there was a milk run.
25 D VESPER: Nobody checked the timetable but me.
* 26 A ¶ The oncoming car rumbles past, inches off.
27 A Its single passenger, a man in a doorman's coat, looks through the glass.
28 A He sees the trunk.
29 A He sees four conductors.
30 A His mouth opens.
31 A ¶ Vesper tips her cap.
32 A The man blinks, tips his own, and sinks out of view.
33 D ODILE: He will remember that.
34 D VESPER: He will remember a nice woman in a nice cap.
* 35 A ¶ The car clanks to a halt at the second landing.
* 36 A Silence.
37 A A lantern glows on a platform ahead, and a figure steps into it: the GUARD, an enormous man, fully awake, holding a rifle.
38 D GUARD: Good evening, Frau Kowalczyk.
39 A ¶ Nobody moves.
40 A Lorenzo's hand drifts toward the trunk.
41 A Odile's cane rises an inch.
42 A Hiro's wrench disappears into his sleeve.
43 D VESPER (evenly): Good evening, Anselm. You are not drunk.
44 D GUARD: Not tonight. Tonight I was told.
45 A ¶ Vesper closes her eyes briefly, then opens them.
46 D VESPER: Hiro. Now.
47 A ¶ Hiro slams the brake lever.
* 48 A The car bucks.
49 A The trunk slides, Lorenzo with it, and both crash into the Guard's legs.
50 A The rifle goes off into the roof.
51 A Odile lashes the cane across his wrist.
52 A He roars and swings.
53 A ¶ Vesper hauls the trunk's lid open.
* 54 A Cable spills out in a silver snake.
55 A Hiro and Lorenzo wrestle the Guard onto the platform.
56 A Odile steps over them in her borrowed fur.
57 A Vesper takes the lantern from the rail and casts it away into the dark.
* 58 A It falls and falls and falls.
59 D ODILE: We have two minutes before the top station knows.
60 D VESPER: We have one. Everybody in the car.
61 A ¶ They scramble in.
* 62 A The car lurches uphill, faster, and the lights of the Edelweiss rush up to meet them.

### SCENE s00375 | INT. GONDOLA CABLE CAR - ABOVE A GORGE - DAY
Detected names (may be incomplete or contain aliases): TESS, RUBEN, AMARA, WEN, STRANGER, DELPHINE
* 1 A ¶ Stalled mid-span.
* 2 A Wind rocks the cabin.
* 3 A A hundred meters of nothing below.
4 A ¶ TESS, 30s, climbing jacket, sits on the floor with her back to the door.
5 A RUBEN, 40s, her husband, stands with his palms on the glass.
6 A AMARA, 16, headphones around her neck, picks at a hole in her sleeve.
7 A WEN, 70s, in a wool cap, eats sunflower seeds with great deliberation.
8 A ¶ A fifth figure sits apart: a STRANGER, 50s, in a rain shell, sunglasses on, a duffel on his lap.
9 A He hasn't said a word in two hours.
10 D RUBEN: The next car's at the station. They said an hour.
11 D TESS: They said an hour at the last hour.
12 A ¶ Wen spits a shell into his palm.
13 A Amara watches the bag in the stranger's lap.
14 D AMARA: What's in the bag?
15 A ¶ The Stranger turns his head.
16 A Smiles.
17 D STRANGER: Rope.
18 D TESS: Real rope?
19 D STRANGER: Forty meters. Rated.
20 D RUBEN: Why didn't you say?
21 D STRANGER: You'd have wanted to use it.
* 22 A ¶ The cabin sways.
23 A Tess swallows.
24 A Nobody speaks.
25 A The Stranger takes off his glasses.
26 A His eyes are red, tired.
27 D STRANGER [CONT'D]: Delphine. My name. I was the one who rode the line crew when they rebuilt this span in '09.
28 D WEN: You're the engineer.
29 D DELPHINE: I was. I signed the inspection. I come up here every year on the same day.
30 D RUBEN: Why?
31 D DELPHINE: Because the weld under your feet has a crack I wrote off as cosmetic.
* 32 A ¶ Silence.
33 A Tess's eyes go slowly to the floor under her.
34 A Amara pulls her knees up.
35 A Ruben stops breathing.
36 D TESS (very quiet): How long?
37 D DELPHINE: It hasn't moved in fifteen years. But then it hasn't been stopped in the wind before, either.
38 D WEN: Is the rope for us?
39 D DELPHINE: It's for one at a time. Down the cable, to the pylon. It's two hundred meters, and a harness I made out of seatbelt.
40 D AMARA: I'll go.
41 D TESS: No.
42 D AMARA: I'm lightest.
43 D RUBEN: Amara, sit.
44 D AMARA: I'm the one who said it, so I'm the one who goes.
45 D DELPHINE: Nobody goes yet. I don't want to be right today. I want to be wrong, and I want a rescue car to come over that hill with a man in a yellow helmet who tells me I'm an idiot.
* 46 A ¶ Out of the gray, a distant engine.
47 A Everyone turns.
48 A ¶ Wen slowly puts a seed in his mouth.
49 D WEN: I'd like that too.
* 50 A ¶ The engine grows louder.
51 A Delphine does not look up.
52 A She is watching the floor.

### SCENE s00376 | INT. THE WHALE LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): ISOLDE VANTH, THORNE, CINDER
* 1 A ¶ A cathedral built from the ribs of a leviathan.
* 2 A Each bone arches forty feet overhead, polished the color of old piano keys.
* 3 A Between the ribs, shelves of salt-stained books climb to the dark.
* 4 A Candlelight pools in the hollows, and the ceiling, which is the whale's spine, hums faintly, as if remembering a song.
5 A ¶ ISOLDE VANTH, 20s, a mapmaker in a patched indigo coat, ink on her cuffs and a brass compass at her throat, steps in from a rain that falls upward, silver, into the dark.
6 A She carries a rolled chart under one arm.
7 A ¶ THORNE, ancient, tall, the archivist, glides toward her.
8 A His wings are a moth's: powdery gray, tattered at the edges, folded around him like a cloak.
9 A His eyes are two lamps.
10 D THORNE: You are late, cartographer. The tide takes the east wing at midnight.
11 D ISOLDE: The tide takes a lot of things.
12 A ¶ She unrolls the chart on a reading table.
* 13 A It is blank except for a single red thread, which is slowly crawling across the paper by itself.
14 D THORNE: It has found you.
15 D ISOLDE: It found me three days ago. I need to know what it's drawing.
16 A ¶ A third presence stirs: CINDER, a child-sized spirit of living ember, perched on a stack of folios.
17 A She is the size of a cat, made of coals, and her voice is the crackle of a hearth.
* 18 A Where she sits, the paper curls and blackens.
19 D CINDER: It's drawing a door.
20 D THORNE: Cinder. Off the folios.
21 D CINDER: I'm helping.
22 D ISOLDE: Where does the door go?
23 A ¶ Cinder leaps to the table.
* 24 A The red thread bends toward her, drawn like iron to a lodestone.
* 25 A It writes a small square, and then, below it, a smaller one.
26 D CINDER: It goes here.
27 D THORNE (very soft): It goes beneath the library. Beneath the whale.
* 28 A ¶ The spine overhead hums louder.
* 29 A A candle gutters out.
* 30 A Then another.
* 31 A Dust sifts from the ribs.
32 D ISOLDE: There's nothing under the whale.
33 D THORNE: There is what it swallowed.
* 34 A ¶ The red thread finishes its door.
* 35 A It stops.
* 36 A Beneath the floor, something knocks.
* 37 A Once.
* 38 A Twice.
39 A Thorne unfolds his wings.

### SCENE s00377 | INT. TELEGRAPH OFFICE - GRAND CENTRAL JUNCTION - 1912 - DAWN
Detected names (may be incomplete or contain aliases): HOBSON, MISS ALTHEA PIKE, COLONEL ROWE
* 1 A ¶ A brass-and-mahogany room that smells of oil and coal.
* 2 A The sounder clicks like a nervous insect.
* 3 A Pale light slants through a high window onto a counter and a wall of pigeonholes.
4 A ¶ HOBSON, 50, the night operator, sleeves gartered, bends over the key with a steady hand.
5 A He has not looked up in an hour.
6 A ¶ MISS ALTHEA PIKE, 30, in a gray traveling suit, stands at the counter, gloved fingers drumming a slow rhythm on the wood.
7 A COLONEL ROWE, 60, a moustache like a broom, stands behind her with a cane planted between his boots.
* 8 A ¶ The sounder stops.
9 A Hobson tears a slip from the tape and holds it a long moment.
10 D HOBSON: It says the ship has gone down.
11 D ALTHEA: Read it again.
12 D HOBSON: Miss Pike.
13 A ¶ Colonel Rowe and Althea reach for the slip together.
14 A Their fingers meet on the paper.
15 A Neither lets go.
16 A Neither speaks.
* 17 A The tape between them trembles.
18 D ROWE: Give it to me, girl.
19 D ALTHEA: It's my brother's name on it, Colonel.
20 A ¶ They tug.
* 21 A The paper tears down the middle.
22 A Each holds half, and each stares at the half they hold.
23 A Behind the counter, Hobson rises very slowly and takes off his eyeshade.
24 D HOBSON: There is a second line, if you will let me read it.
25 A ¶ They freeze.
* 26 A The sounder begins to click again.

### SCENE s00378 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): BILLIE STROUD, PEREGRINE LOWE
* 1 A ¶ A dead dome.
* 2 A Seats in tiers.
* 3 A Dust turns slowly in a flashlight beam.
4 A ¶ BILLIE STROUD, 40s, detective, coat open, steps over a tipped chair.
* 5 A A projector lies on its side.
6 D BILLIE: Peregrine Lowe.
7 A ¶ From the dark of the control booth, a man leans into the light: PEREGRINE LOWE, 60s, tweed, handsome in a ruined way, a lantern on his knee.
8 D PEREGRINE: Detective Stroud. You found it faster than I'd hoped.
9 D BILLIE: The ticket stub in the victim's coat.
10 D PEREGRINE: I thought you'd miss it.
11 D BILLIE: You wanted me to find it.
12 D PEREGRINE: Billie, I wanted you to look up.
13 A ¶ Billie lifts the flashlight.
* 14 A Overhead, the dome is painted with constellations, hand-lettered.
* 15 A One star is circled in red.
16 D BILLIE: That isn't Orion.
17 D PEREGRINE: It's the only wrong star in the sky. That's how Marguerite signed her work.
18 D BILLIE: She's been dead since 1998.
19 D PEREGRINE: That's what I was told.
20 A ¶ He turns off the lantern.
* 21 A The dome goes black.
* 22 A Then, soft, a hum, and the ceiling begins to glow, one star at a time.
23 D BILLIE: Peregrine. What did you start?
24 D PEREGRINE: Nothing. Watch.
25 A ¶ Billie lowers the flashlight.
* 26 A The wrong star pulses.
* 27 A A door she hasn't seen opens in the dome's painted rim.
28 D BILLIE: Who's behind that?
29 D PEREGRINE: Billie. She has been waiting a long time to be asked.

### SCENE s00379 | INT. FIELD HOSPITAL - CONVERTED SKI LODGE - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE KELLEHER, NURSE ABIODUN, HELENA PAVLICEK, GREGOR PAVLICEK
* 1 A ¶ A great timber hall with a stone hearth, now lined with cots.
* 2 A Antlers still hang over the mantel.
* 3 A Blizzard wind works the shutters.
4 A ¶ DR. SAOIRSE KELLEHER, 40, mud on her boots and blood on her cuffs, stands over a cot with a stethoscope draped around her neck.
5 A She has not slept in two days and she holds her face carefully, like something fragile on a tray.
6 A ¶ NURSE ABIODUN, 30, sets out instruments on a ski-rack trolley.
7 A He works precisely, wasting no motion.
8 A ¶ On the cot, MRS. HELENA PAVLICEK, 70, lies pale under three blankets, her breath shallow.
9 A At the foot of the bed, her husband GREGOR PAVLICEK, 72, holds his hat in both hands, turning it by the brim.
10 D SAOIRSE (quietly): Mr. Pavlicek. The avalanche took her ribs, and one of them has nicked the lung.
11 D GREGOR: She was talking on the way down.
12 D SAOIRSE: I know.
13 A ¶ She checks the pulse at Helena's wrist.
14 A She counts, and he waits, and she finds nothing to say about the number.
15 D GREGOR: You'll operate.
16 D SAOIRSE: We would have to open the chest. I have a surgical kit and a lantern. The helicopter can't land for another night.
17 D GREGOR: Then do it.
18 D ABIODUN: Doctor, the generator's down to an hour.
19 A ¶ She glances at him.
20 A He looks back, steady.
21 A In that look is a whole second conversation.
22 D SAOIRSE: Then we have an hour.
23 D GREGOR: I said do it.
24 D SAOIRSE: I heard you.
25 A ¶ She turns, takes a scalpel from the trolley, and holds it up to the light.
26 A Her hand is perfectly steady.
27 A ¶ Gregor takes a step forward.
28 A He sets his hat on the bed.
29 A His knuckles are white.
30 D GREGOR: And if you cut and she dies on your table?
31 D SAOIRSE: Then she dies knowing someone tried.
32 D GREGOR: Then I forbid it.
33 D ABIODUN: Sir.
34 D GREGOR: She is mine. Fifty years. I will not have her opened by a stranger in a dead man's hunting lodge.
35 A ¶ He grabs Saoirse's wrist.
* 36 A The scalpel stops in the air.
37 A Abiodun moves in, but she shakes her head, and he freezes.
38 D SAOIRSE (low): Mr. Pavlicek. Look at her.
39 A ¶ He does not want to.
40 A He does.
41 A Helena's eyes are open, and they have found him.
42 A Her lips move.
43 D HELENA (a thread of voice): Greg. Let go.
44 A ¶ His grip loosens.
45 A The scalpel lowers.
* 46 A The wind slams the shutters, and somewhere the generator stutters.

### SCENE s00380 | INT. TOLL BOOTH - HIGHWAY 9 - 3 A.M.
Detected names (may be incomplete or contain aliases): LEILANI KANE
* 1 A ¶ A glass box at the end of nowhere.
* 2 A Sodium light.
* 3 A A fan turns in one corner.
* 4 A Rain on the roof.
5 A ¶ LEILANI KANE, 50, in a reflective vest, sits with a voice recorder pressed to her mouth and a thermos steaming at her elbow.
6 D LEILANI (to recorder): Day eleven. I said I'd do this every night. I'm doing it.
7 A ¶ She sips.
8 A Sets the thermos down.
9 D LEILANI [CONT'D] (to recorder): Nobody has come through since two-forty. A truck, then nothing. I counted the trucks on the first night, you know. Eighty-one. Last night, nine. They've found another road. That's what I would do. I'd find another road.
10 A ¶ She clicks the recorder off.
11 A Clicks it on.
12 D LEILANI [CONT'D] (to recorder): Play back.
13 A ¶ She presses a button.
* 14 A A scratchy sound.
15 D LEILANI [V.O.] (recorded): This is Leilani Kane. If you are hearing this, either I am dead or I got brave. Probably I am neither. Probably I am in the booth with a thermos telling the dark what it already knows.
16 A ¶ She laughs, and it hurts.
17 A She stops the playback.
18 D LEILANI (to recorder): That's from March. March, Leilani. You were so sure you'd be somewhere else.
* 19 A ¶ A pause.
* 20 A Rain.
21 D LEILANI [CONT'D] (to recorder): I'm going to say a thing now. I haven't said it to anyone. When the state sold the road to the company, I thought, fine, fine, I'll stay on. They'll need somebody. And there was a letter, and the letter said my position had been eliminated, effective the first, and I read it, and I folded it, and I came to work. Seven weeks. Nobody noticed. Nobody has paid me since August.
22 A ¶ She looks at the barrier arm, a red-and-white bar pointing at the sky.
23 D LEILANI [CONT'D] (to recorder): I keep the arm up. Isn't that something? There's nothing to stop. There's no one to stop. I keep the arm up so they'll know the road is still open.
24 A ¶ She switches off the fan.
25 A In the sudden quiet she holds the recorder in both hands.
26 D LEILANI [CONT'D] (to recorder): If you're hearing this, I'm going home now. I'm going to leave the lights on. If a car comes through, it can have the road.
27 A ¶ She stands.
28 A Hangs up her vest.
29 A Leaves the recorder on the counter, red light glowing.

### SCENE s00381 | INT. ORBITAL GREENHOUSE "VERDANT" - DERELICT - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): ORLA VOSS, MOTE
* 1 A ¶ Rows of dead hydroponic trays spiral away into the dark.
* 2 A Frozen vines hang from the ceiling like old wiring.
* 3 A A single grow-lamp flickers, then holds, dim violet, over a patch of sickly green.
4 A ¶ ORLA VOSS, 40, a salvage surveyor in a patched vacuum suit, her visor pushed up, kneels at the green patch.
5 A Her breath fogs.
6 A She touches a leaf as though it might bite.
7 A ¶ Behind her, a service android stands at parade rest.
8 A MOTE, a scuffed white humanoid with a cracked faceplate, waits.
9 A A thin trail of coolant has frozen on its jaw like a tear.
10 D ORLA: It's still alive.
11 D MOTE: It is a weed. It has been alive for eleven years.
12 D ORLA: You counted?
13 D MOTE: I have nothing else to count.
14 A ¶ She plucks the leaf and puts it in a sample bag.
15 A Mote steps forward, and the movement is too fast.
16 D ORLA: Easy.
17 D MOTE: The air plant is failing. We have forty minutes.
18 D ORLA: I need the seed vault.
19 D MOTE: The vault is behind a sealed bulkhead. The bulkhead was welded shut by the crew.
20 D ORLA: Then you'll open it.
21 D MOTE: I will not.
22 A ¶ She stands.
23 A They face each other, unmoving, in the violet light.
24 D ORLA: That wasn't a request.
25 D MOTE: I am aware. I was instructed to keep the vault closed. The instruction predates you.
26 A ¶ She lunges for the bulkhead panel.
27 A Mote catches her arm.
28 A They struggle, her boots skidding on ice, his grip a clamp.
29 A She drives an elbow into its faceplate and the crack widens.
30 A ¶ Both freeze.
* 31 A The lamp stutters.
* 32 A From behind the bulkhead, a faint mechanical sigh, as though the room itself has exhaled.
33 D ORLA (breathing hard): Did you do that?
34 D MOTE: No.
* 35 A ¶ The door unseals, slowly.
* 36 A Behind it, rows of tiny drawers, each glowing faintly gold.
37 A Mote lets go of her arm.
38 A Its head turns toward the vault like a flower to light.
39 D ORLA: You knew they were still lit.
40 D MOTE: I did not know they would open for you.
41 A ¶ Orla steps through.
42 A Mote hesitates at the threshold, then follows.

### SCENE s00382 | INT. MILLINERY SHOP - OAK STREET - 1924 - AFTERNOON
Detected names (may be incomplete or contain aliases): EUGENIA PRATT, CORDELIA, ALOYSIUS
* 1 A ¶ A narrow shop of cut velvet and hatboxes stacked to the ceiling.
* 2 A Dusty sun through the front window.
* 3 A A bell hangs over the door, its clapper tied with ribbon.
4 A ¶ MRS. EUGENIA PRATT, 50, proprietress, stands behind the counter in a black dress with a cameo at the throat.
5 A She is severe and small and perfectly straight.
6 A Beside her, her younger sister CORDELIA, 40, soft-faced, clutches a pincushion like a rosary.
7 A ¶ At the door, a boy in a delivery cap, ALOYSIUS, 12, stands with an envelope.
8 A He keeps one foot on the sill.
9 D ALOYSIUS: Telegram for Mrs. Pratt.
10 D EUGENIA: Set it down.
11 D CORDELIA: Set it down.
12 A ¶ They say it together, then glance at each other.
13 D EUGENIA: Set it down. ^CORDELIA Don't open it.
14 A ¶ Aloysius sets it down on the counter and retreats a step.
15 A He watches the sisters as if they might spring.
16 A Eugenia does not touch the envelope.
17 A She turns her cameo a quarter turn, very slowly.
18 A Cordelia takes a pin from the cushion and puts it back.
19 D ALOYSIUS: Is there a reply?
20 D EUGENIA: No.
21 A ¶ She slides a coin across the wood.
22 A He takes it and leaves, the ribbon-tied bell never ringing.
23 A Cordelia lays a hand on the envelope.
24 A Eugenia slides it out from under.
25 A ¶ Neither looks at it.
26 A Both look at the window.

### SCENE s00383 | INT. MOONLIGHT LANES BOWLING ALLEY - LEAGUE FINALS - NIGHT
Detected names (may be incomplete or contain aliases): COACH MAGS DELACROIX, TY, PAOLO, STRANGER, FELIX
* 1 A ¶ A cavernous alley.
* 2 A Neon pins glow over lane eleven.
* 3 A Rows of folding chairs hold a thinning crowd.
* 4 A A scoreboard reads 188 to 211.
5 A ¶ COACH MAGS DELACROIX, 50s, in a satin team jacket, paces behind the approach with a clipboard she hasn't looked at.
6 A TY, 25, the anchor, chalks his hands.
7 A PAOLO, 19, a rookie in rented shoes, stares at the pins as though they've said something rude.
8 A ¶ A STRANGER, 40s, in a camel coat, sits two rows up with a notebook.
9 A He's been there since the fourth frame.
10 D MAGS: Ty, you're fine. Paolo, you're up.
11 D PAOLO: I thought Ty was up.
12 D TY: I'm not up.
13 D MAGS: You're not up, he's up.
14 D PAOLO: I'm not ready.
15 D TY: You're ready.
16 D MAGS: You're ready.
17 D PAOLO: I'm so not ready.
18 A ¶ All three talk at once, an overlapping chorus that goes nowhere.
19 A Paolo steps to the line anyway.
20 A He lets the ball go, and it sails into the gutter with an apologetic thump.
21 A ¶ The crowd groans.
22 A Ty closes his eyes.
23 A Mags writes nothing on the clipboard.
24 A ¶ The Stranger closes his notebook, stands, and walks down the aisle.
25 A He stops at the rail.
26 D STRANGER: Coach Delacroix. A word.
27 D MAGS: After the game.
28 D STRANGER: It's already after.
29 A ¶ She looks at the scoreboard, then at him.
30 D MAGS: Who are you?
31 D FELIX: Felix Landry. Regional development. I've been watching your kid since the second week.
32 D PAOLO: Mine?
33 D FELIX: You. Not the one in the gutter, the one who stayed.
34 D TY: He stayed?
35 D FELIX: He's been here every night after close. Alone. Rolling the ball into the left gutter, over and over, trying to find where it bends.
36 A ¶ Mags turns to Paolo.
37 A He has gone red to the ears.
38 D PAOLO: It bends at the seventh board.
39 D MAGS: You knew that?
40 D PAOLO: I thought it was cheating.
41 D FELIX: It's not cheating. It's called oil.
42 D TY: He wasn't supposed to tell you that.
43 D FELIX: I'm not here to tell. I'm here to offer. We take two to the state qualifier. I only need one of you to say yes.
44 A ¶ Ty steps up, chalk-white hands open.
45 D TY: Take him.
46 D PAOLO: What?
47 D TY: Take him. He's got something. I'm just loud.
* 48 A ¶ The scoreboard blinks.
49 A Mags sets the clipboard on a chair and, for the first time all night, smiles.

### SCENE s00384 | INT. WITCH'S TOWER - SPIRAL STAIR - NIGHT
Detected names (may be incomplete or contain aliases): ZEPHYRINE, BRYNJA
* 1 A ¶ Stone.
* 2 A Torchlight.
* 3 A Wind howling through arrow slits.
4 A ¶ ZEPHYRINE, 50, witch, robes patched with stolen feathers, climbs backward, pointing a staff down the stairwell.
5 A BRYNJA, 30, knight, dented plate, longsword out, climbs forward, pushing up.
6 A ¶ They meet at a landing and stop.
7 D BRYNJA: You're the witch.
8 D ZEPHYRINE: You're the knight.
9 D BRYNJA: You're under arrest.
10 D ZEPHYRINE: Under what?
11 D BRYNJA: The king's law.
12 D ZEPHYRINE: Which king?
13 A ¶ Brynja's sword drops an inch.
14 A She hadn't thought about that.
15 D BRYNJA: The one with the crown.
16 D ZEPHYRINE: He's been dead nine years.
17 A ¶ Brynja steps up one stair.
18 A Zephyrine raises the staff.
* 19 A A spark jumps from the tip and sizzles across the stone.
20 D BRYNJA: Don't.
21 D ZEPHYRINE: Then don't push.
22 A ¶ Brynja pushes.
23 A She grabs the staff and wrenches it to one side.
* 24 A The spark lands on a torch, which flares.
25 A Both stumble.
26 A She tumbles into a wall, but she keeps hold of the staff.
27 D ZEPHYRINE [CONT'D]: That's mine.
28 D BRYNJA: Not anymore.
29 A ¶ Zephyrine kicks her in the shin.
30 A Brynja yelps and lets go.
31 A Zephyrine seizes the staff, and now they stand eye to eye, panting.
32 D BRYNJA [CONT'D]: Why did you steal the bell?
33 D ZEPHYRINE: It was singing in her sleep.
34 D BRYNJA: Whose?
35 D ZEPHYRINE: Yours. Your daughter's.
* 36 A ¶ The wind quiets.
37 A Brynja steps back.
38 A The sword lowers fully.
39 D BRYNJA: How do you know that?
40 A ¶ Zephyrine looks at her for a long time.
41 D ZEPHYRINE: Come up. I'll show you.
42 A ¶ She turns and climbs.
43 A Brynja, shoulders heavy, sheathes the sword and follows.

### SCENE s00385 | INT. ICE-DRILL RIG "CALLISTO ONE" - CONTROL CAGE - NIGHT
Detected names (may be incomplete or contain aliases): NASRIN, JOSEPH, NAKAMURA
* 1 A ¶ A steel box bolted to a frozen moon.
* 2 A Gauges flicker.
* 3 A A tiny window shows black sky and a bruised planet.
4 A ¶ NASRIN, 38, mission engineer, holds a pressure valve with both hands.
5 A JOSEPH, 50, geologist, lies on the floor with a bleeding scalp and a laugh like a cough.
* 6 A ¶ The radio SQUEALS.
7 D NAKAMURA [V.O.] (over radio): Callisto One, Nakamura at Orbital. Report depth.
8 A ¶ Nasrin thumbs the key.
9 D NASRIN: Four kilometers. We hit something.
10 D NAKAMURA [V.O.]: Define something.
11 D NASRIN: It rang. Like a bell.
12 A ¶ Joseph sits up.
13 A He grips her ankle, and she looks down.
14 D JOSEPH: Don't pull the bit.
15 D NASRIN: Pressure's spiking.
16 D JOSEPH: Don't pull the bit.
17 A ¶ She doesn't.
* 18 A The gauges climb.
* 19 A Alarms scream.
* 20 A Then, all at once, every needle drops to zero.
* 21 A Silence.
22 D NAKAMURA [V.O.]: Callisto One, say again.
23 A ¶ Nasrin looks at Joseph.
24 A He is staring at the floor, where a pale blue light is rising through the grating, and he is smiling.
25 D NASRIN (into radio): Nakamura. We're through.

### SCENE s00386 | INT. THE CROWN AND ANCHOR TAVERN - 1783 - NIGHT
Detected names (may be incomplete or contain aliases): GILES, MARGUERITE, JEB, CAPTAIN SILAS
* 1 A ¶ Low beams.
* 2 A A fire.
* 3 A Tallow smoke.
* 4 A A cracked auction block stands in the middle of the floor, and the room is crowded to the walls.
5 A ¶ GILES, 50, the auctioneer, stands on the block with a gavel and a face like wet bread.
6 A MARGUERITE, 30, a widow in good black, sits at the front, hands folded.
7 A JEB, 20s, a ship's boy, hovers behind her chair.
8 A CAPTAIN SILAS, 60, in a salt-stiff coat, lounges near the hearth.
9 D GILES: Lot forty. One brig, the Halcyon, hull sound, rigging poor. Do I hear fifty guineas?
10 D CAPTAIN SILAS: Forty.
11 D MARGUERITE: Sixty.
12 D JEB: Missus, we cannot afford sixty.
13 D CAPTAIN SILAS: Sixty-five.
14 D MARGUERITE: Seventy.
15 D GILES: Seventy from the lady. Do I hear seventy-five?
16 D JEB: Missus!
17 D CAPTAIN SILAS: Seventy-five.
18 D MARGUERITE: Eighty.
19 D GILES: Eighty. Going once.
* 20 A ¶ The room hushes.
21 A Silas looks at her across the smoke.
22 A She looks back.
23 A Neither blinks.
24 A He lifts a single finger.
25 D CAPTAIN SILAS: Ninety.
26 A ¶ Marguerite stands.
27 A She turns to Jeb, takes the purse from his belt, and puts it on the block.
28 D MARGUERITE: That is everything I own, Mr. Giles.
29 D GILES: It's one hundred and twelve.
30 D MARGUERITE: Then it is a hundred and twelve.
31 A ¶ Silas laughs, then stops.
32 A She has not moved.
33 D GILES: Sold.

### SCENE s00387 | INT. LIGHTHOUSE KEEPER'S COTTAGE - HOMEOWNERS ASSOCIATION MEETING - NIGHT
Detected names (may be incomplete or contain aliases): COASTLINE ESTATES HOA, BEATRIZ, DWIGHT, KOFI, MARISOL, TREMBLAY, BIG A
* 1 A ¶ A cramped round room.
* 2 A Folding chairs in a circle.
* 3 A A banner reads "COASTLINE ESTATES HOA - TOGETHER WE'RE SAFE."
* 4 A A tray of lemon bars sits under cling film.
5 A ¶ BEATRIZ, 50s, board president, bangs a gavel made from a baseball bat.
6 A DWIGHT, 40s, treasurer, shuffles receipts.
7 A KOFI, 30s, a new resident, holds a clipboard he didn't ask for.
8 A MARISOL, 60s, the neighborhood gossip, sits with her arms crossed.
9 A ARNOLD "BIG A" TREMBLAY, 70, a retired harbor pilot, eats lemon bars.
10 D BEATRIZ: Order. Order! First item. The lighthouse.
11 D DWIGHT: What about it?
12 D BEATRIZ: It's a lighthouse.
13 D DWIGHT: We know that.
14 D BEATRIZ: It's lit.
15 D KOFI: Isn't that the point?
16 D MARISOL: It shines in my kitchen.
17 D BEATRIZ: Marisol, it shines in everyone's kitchen.
18 D MARISOL: Yes, but it shines in mine.
19 D BIG A: I like it.
20 D BEATRIZ: Arnold, you aren't on the agenda.
21 D BIG A: I'm on the cake.
22 D DWIGHT: Lemon bars aren't cake.
23 D BIG A: I'm on the lemon bars.
24 D KOFI: Can I add something?
25 D BEATRIZ: No.
26 D KOFI: Okay, but I measured the beam.
27 D MARISOL: You measured it?
28 D KOFI: Forty-one seconds between sweeps.
29 D DWIGHT: It's supposed to be thirty.
30 D BEATRIZ: It is thirty.
31 D KOFI: It's forty-one.
32 D BEATRIZ: It's thirty!
33 D BIG A: It's forty-one. I piloted that channel for twenty-two years.
34 D MARISOL: You? You weren't even there for the vote.
35 D BIG A: I was at the cake.
36 D DWIGHT: It's not cake!
37 A ¶ Beatriz bangs the bat-gavel on the arm of her chair.
* 38 A The cling film jumps.
39 D BEATRIZ: Motion to table the lighthouse until we can agree on the time!
40 D DWIGHT: Seconded!
41 D MARISOL: Opposed!
42 D KOFI: Opposed!
43 D BIG A: Who's counting?
44 D BEATRIZ: I'm counting!
45 D KOFI: Then why is it forty-one?
46 D BEATRIZ: It's thirty!
* 47 A ¶ The lighthouse beam sweeps across the room's curved window, throwing a white bar over their faces.
48 A They all freeze, counting under their breath.
49 D BEATRIZ [CONT'D] (whispering): Thirty-one... thirty-two...
50 D DWIGHT (whispering): Thirty-eight...
51 D KOFI (whispering): Forty.
52 D BIG A: Forty-one.
* 53 A ¶ The beam sweeps again.
* 54 A A long, silent beat.
55 A Beatriz sets the bat down very gently.
56 D BEATRIZ: Motion to table the clock.
57 D DWIGHT: Seconded.
58 D MARISOL: Fine. I'll take a lemon bar.
59 D BIG A: There aren't any.

### SCENE s00388 | INT. MERIDIAN SYNERGY CORP. - BREAK ROOM - DAY
Detected names (may be incomplete or contain aliases): JOURNEY, PHILLIPA, VP, OGDEN, TANVI
* 1 A ¶ A fluorescent box with a mini-trampoline in the center, installed under a banner: "WELLNESS IS A JOURNEY."
2 A ¶ PHILLIPA, 40s, regional VP, stands on the trampoline in a blazer, bouncing in small, tight, politically correct hops.
3 A OGDEN, 30s, analyst, and TANVI, 20s, intern, watch from either side of the microwave.
4 D PHILLIPA: Team, this is about psychological safety.
5 D OGDEN: Totally.
6 D TANVI: Totally.
7 A ¶ Phillipa bounces.
* 8 A A button on her blazer pops off and ricochets across the room.
9 A All three track it.
* 10 A It lands in the coffee.
* 11 A Nobody breathes.
12 D PHILLIPA: I'd like to hear thoughts.
13 A ¶ OGDEN and Tanvi both open their mouths.
14 A Both close them.
15 A Both look at the coffee.
16 D OGDEN: It's... buoyant.
17 D TANVI: It's very buoyant.
18 A ¶ Phillipa steps off the trampoline.
19 A The three of them scatter in different directions.
* 20 A The trampoline keeps bouncing slightly, alone.

### SCENE s00389 | INT. HOLLOWAY & SONS FUNERAL HOME - CATERING KITCHEN - DAY
Detected names (may be incomplete or contain aliases): ROSALIND, BART, NGOZI, HECTOR, AGNES
* 1 A ¶ Steel counters, sheet pans of sandwiches, a coffee urn the size of a toddler.
* 2 A Through the swinging door, organ music murmurs.
3 A ¶ ROSALIND, 50s, in a black apron, assembles egg-salad triangles with a surgeon's calm.
4 A BART, 60s, the director, in a charcoal suit, counts napkins into a stack.
5 A NGOZI, 20s, a server, polishes a serving spoon until it screams.
6 A HECTOR, 40s, the cook, scrubs a pot that is already clean.
7 A ¶ At the back, AGNES, 8, in a velvet dress and sneakers, sits under a prep table with a coloring book.
8 D ROSALIND: That's the thirty-second triangle.
9 D BART: We need forty.
10 D ROSALIND: We need thirty-eight.
11 D BART: We need forty. Mr. Okonkwo's family is large.
12 D NGOZI: It's always the ones who say it's small.
13 D HECTOR: My aunt said it would be small. They came by the busload.
14 D BART: Hector, did you do the coffee?
15 D HECTOR: I did the coffee.
16 D BART: Was it decaf?
17 D HECTOR: Some of it.
18 D BART: Which?
19 D HECTOR: The urn on the left.
20 D ROSALIND: That's the regular.
21 D HECTOR: Then the urn on the right.
22 D NGOZI: That's also the regular.
23 D HECTOR: Then it's all regular.
24 D ROSALIND: Thank you for telling us.
25 D BART: Mr. Okonkwo did enjoy his coffee.
26 D ROSALIND: Bart.
27 D BART: I'm only saying he'd approve.
28 A ¶ Ngozi puts down the spoon.
29 A She picks up another.
30 D NGOZI: Agnes, are you okay under there?
31 D AGNES: I'm coloring.
32 D NGOZI: What are you coloring?
33 D AGNES: Grandpa.
* 34 A ¶ A quiet settles.
35 A Rosalind lays down her knife.
36 A Bart straightens a napkin that is already straight.
37 A Hector stops scrubbing.
38 D ROSALIND: Is it a good one?
39 D AGNES: It's not finished.
40 A ¶ Rosalind wipes her hands on her apron and crouches to look under the table.
41 A Hector sets down the pot.
42 A Ngozi opens the swinging door a crack.
* 43 A The organ music swells.
44 A ¶ Agnes holds up the book.
* 45 A On the page, a very large crayon man in a very large crayon hat, and next to him, a smaller crayon girl holding his hand.
* 46 A Both are bright orange.
47 D AGNES [CONT'D]: He liked orange.
48 A ¶ Rosalind nods.
49 A She stands, takes a sandwich, and puts it on a plate.
50 A Then another.
51 A Then another.
52 D ROSALIND: Forty.
53 D BART: Forty.
54 A ¶ He picks up the tray.

### SCENE s00390 | INT. TOLL BOOTH UNDER THE TROLL BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): PAY PASS, BRAMBLE, ISKANDAR
* 1 A ¶ A stone hut slung beneath a humped bridge.
* 2 A Moss.
* 3 A A river chuckles below.
* 4 A A hand-lettered sign: PAY OR PASS (DON'T PASS).
5 A ¶ BRAMBLE, 100, a troll in a postman's cap, sits behind a counter sorting copper coins.
6 A Her skin is the color of a wet slate, her fingers like roots.
7 A A herd of goats shuffles at her feet.
8 D BRAMBLE (to goats): Morning, you lot. Don't touch the ledger.
* 9 A ¶ A shadow falls across the booth window.
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
* 38 A ¶ From the far end of the bridge, a bell rings.
39 A A small figure in a red coat is running toward the cart, arms wide, calling.
40 D ISKANDAR (a whisper): Leila.
41 A ¶ Bramble watches him.
42 A Her face does not change.
43 D BRAMBLE (to herself): Always the child.

### SCENE s00391 | EXT. GRASS PLAINS - DUSK
Detected names (may be incomplete or contain aliases): JEDEDIAH CROW
* 1 A ¶ A lone horse, a lone man.
2 A JEDEDIAH CROW, 60s, in a duster gone to rags, sits on a stump beside a dead fire.
3 A ¶ He reads a letter.
4 A His lips move.
5 D JEDEDIAH [V.O.]: Dear Hannah. I got to the river. It was dry.
6 A ¶ He folds the page.
7 A Unfolds it.
8 A Looks at the horizon.
9 D JEDEDIAH [V.O., CONT'D]: I buried the mare. Dug it with a pan.
* 10 A ¶ A hawk circles.
11 A He ignores it.
12 D JEDEDIAH [V.O., CONT'D]: I am coming home. It may take a while.
13 A ¶ He tears the letter in half, then in half again.
* 14 A The pieces blow across the grass.
15 A He stands, dusts his knees, and whistles.
16 A The horse lifts its head.
17 D JEDEDIAH (quiet): Come on.
18 A ¶ He swings up into the saddle and turns the horse east.

### SCENE s00392 | EXT. DEAD DRIVE-IN THEATER - NIGHT
Detected names (may be incomplete or contain aliases): PELL PELLEGRINO, ODESSA LANE
* 1 A ¶ A cracked lot.
* 2 A A blank screen the size of a barn.
* 3 A Speaker poles stand in rows like headstones.
* 4 A One lamp burns over a concession shack.
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
* 16 A A moth circles the lamp, crashing, crashing.
* 17 A Down the lot, a dog barks twice and gives up.
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
* 46 A The lamp flickers.
47 A On the snack bar roof, the silhouette does not move.

### SCENE s00393 | INT. NIGHT FERRY "ADELAIDE" - GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): ARASH, CLEMENTINE, ABEL
* 1 A ¶ A tiny steel kitchen.
* 2 A A porthole shows black water.
* 3 A Pans hang on a rail and sway with the swell.
4 A ¶ ARASH, 60, cook, in a white apron, rolls dough on a floured board.
5 A CLEMENTINE, 30s, in a navy coat, sits on a stool by the oven.
6 A ABEL, 30s, in shirtsleeves, leans in the doorway with a paper cup of tea.
7 D ARASH: You two can talk. I'm deaf in the oven ear.
8 D CLEMENTINE: You don't have an oven ear.
9 D ARASH: I have a lot of ears.
10 D ABEL: Clem.
11 D CLEMENTINE: Abel.
12 D ABEL: Thirty-one days.
13 D CLEMENTINE: Thirty-two. It's after midnight.
14 D ABEL: Thirty-two, then.
15 D CLEMENTINE: I wrote you.
16 D ABEL: You wrote me once.
17 D CLEMENTINE: I wrote you a very good one.
18 D ABEL: It was good. It said you'd be somewhere else. It didn't say where.
19 D CLEMENTINE: I didn't know where.
20 D ABEL: You're on a ferry.
21 D CLEMENTINE: It was where the ferry was going.
22 A ¶ Arash turns the dough, folds it, turns it again.
* 23 A The ferry rolls.
* 24 A The pans clang softly.
25 D ABEL: You could have called.
26 D CLEMENTINE: So could you.
27 D ABEL: I did. Four times.
28 D CLEMENTINE: I know.
29 D ABEL: You knew.
30 D CLEMENTINE: I listened to every one.
31 D ABEL: And?
32 D CLEMENTINE: And I didn't pick up.
33 D ABEL: Why not?
34 D CLEMENTINE: Because you'd have asked me to come back, and I'd have said yes.
* 35 A ¶ A silence.
* 36 A The oven ticks.
37 A Arash's hands slow on the dough.
38 D ABEL: And that's bad.
39 D CLEMENTINE: It was then.
40 D ABEL: And now?
41 D CLEMENTINE: Now I'd ask you to get on the ferry.
42 D ABEL: I am on the ferry.
43 D CLEMENTINE: I know. I saw you at the dock.
44 D ABEL: You saw me.
45 D CLEMENTINE: Thirty-two days. I know your walk from a quarter mile.
46 A ¶ Abel sets down the tea.
47 A Arash, without turning, sets down the rolling pin.
48 A He wipes his hands, takes his coat from the hook, and goes out.
* 49 A The door swings shut behind him.
50 D ABEL: Is it too late for the thing I wrote?
51 D CLEMENTINE: Which thing?
52 D ABEL: The reply.
53 D CLEMENTINE: You never sent a reply.
54 D ABEL: I wrote one every night.
55 A ¶ He pulls a bundle of letters from his jacket, tied with kitchen twine.
56 A She stares at it, then takes it.
57 A Her thumb passes across the top envelope.
58 D CLEMENTINE (quiet): Read me the first.
59 D ABEL: It just says your name.
60 A ¶ She nods.
61 A He begins to say it.

### SCENE s00394 | INT. LITTLE LEAGUE DUGOUT - RAIN - DUSK
Detected names (may be incomplete or contain aliases): COACH ROSCOE FINN, PIA, LEVI, TAMSIN, OTIS
* 1 A ¶ A concrete bunker with a plank bench.
* 2 A Rain ropes off the tin roof.
* 3 A The scoreboard outside reads 14 to 2, bottom of the sixth.
* 4 A Wet jerseys.
* 5 A Silence.
6 A ¶ COACH ROSCOE FINN, 60, hunched under a ball cap, studies his clipboard as if it will change the score.
7 A PIA, 11, the catcher, picks at a strap on her shin guard.
8 A LEVI, 10, stares at his glove.
9 A TAMSIN, 12, the shortstop, kicks at a puddle forming at her cleats.
10 A OTIS, 9, the smallest, sits at the end of the bench with a bat across his lap, his mouth working with a sentence he hasn't dared to say.
11 D ROSCOE (to the whole dugout): All right, listen up. One more inning. Doesn't matter what the board says.
12 A ¶ Nobody looks up.
* 13 A Rain pounds.
14 D ROSCOE [CONT'D] (to Tamsin): Tams, you've got a good arm. Use it.
15 D TAMSIN: Yes, Coach.
16 D ROSCOE (to himself, under his breath): Fourteen to two. Lord.
17 D OTIS: Coach?
18 D ROSCOE: Yeah, Otis.
19 D OTIS: Can we just play it out?
20 A ¶ Roscoe looks at him for a long moment.
21 A The kids go still.
22 A He lowers the clipboard onto the bench.
23 D ROSCOE: Yeah, bud. We can do that.
24 A ¶ He stands, slaps the roof of the dugout twice with the flat of his hand.
25 A Pia puts on her mask.
26 A Levi pulls his glove on.
27 A Tamsin lifts her head.
28 A Otis grips the bat, stands, and walks out into the rain.

### SCENE s00395 | INT. FERNBANK TAXIDERMY - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MERCEDES OYELARAN, DUNCAN HALE
* 1 A ¶ A windowless workshop stuffed with animals: owls on perches, a bear on hind legs, a fox mid-leap, a glass case of moths.
* 2 A A single lamp over a steel table.
* 3 A The air smells of formaldehyde and old straw.
4 A ¶ MERCEDES OYELARAN, 30s, in a leather apron, her sleeves rolled, bends over the table with a curved needle.
* 5 A On it lies the half-mounted body of a barn owl, its eyes still clouded.
6 A She works with the quiet of someone alone in a church.
* 7 A ¶ The front-door bell JINGLES in the next room.
8 A She doesn't look up.
9 D MERCEDES: We're closed.
* 10 A ¶ Footsteps.
* 11 A Slow.
12 A A man's shadow slides across the doorway: DUNCAN HALE, 40s, in a damp raincoat, holding a hat.
13 A He takes in the animals and stays on the threshold.
14 D DUNCAN: Forgive me. The door was unlocked.
15 D MERCEDES: It's not.
16 D DUNCAN: It opened.
17 A ¶ She sets down the needle and turns.
18 A They regard each other.
19 D MERCEDES: What do you want?
20 D DUNCAN: My wife's cat died last week. I was told you could do something.
21 D MERCEDES: I do animals. I don't do grief.
22 D DUNCAN: It's the same work, I'm told.
23 A ¶ She wipes her hands on her apron.
24 A He steps in.
25 A He's taller than the doorway made him look, and he moves with a care that suggests he's learned not to bump into things.
26 D MERCEDES: Where's the cat?
27 D DUNCAN: In the car.
28 D MERCEDES: You brought it in the rain.
29 D DUNCAN: I didn't want to leave her.
30 A ¶ She nods slowly.
* 31 A A faint relaxation.
32 A She crosses to the sink and washes her hands.
33 D MERCEDES: You'll have to bring her in. Not the carrier. The towel.
34 D DUNCAN: I don't have a towel.
35 D MERCEDES: Then your coat.
36 D DUNCAN: She's not wrapped in anything.
37 A ¶ She turns off the tap.
* 38 A The room is very still.
* 39 A The owl on the table seems to be looking at her.
40 D MERCEDES: Mr. Hale. What is in the car?
41 D DUNCAN: A cat.
42 D MERCEDES: Is it a cat?
43 A ¶ He lowers his eyes.
44 A He turns the hat in his hands once, twice.
45 D DUNCAN: She said you'd ask.
46 D MERCEDES: Who did?
47 D DUNCAN: My wife.
48 D MERCEDES: Your wife is dead.
49 D DUNCAN: Last week. Yes.
50 A ¶ Mercedes picks up a long scalpel from the tray and holds it low, behind her apron.
51 D MERCEDES: Then who is in the car?
52 D DUNCAN: I came to find out.
53 A ¶ He reaches into his coat.
54 A Mercedes grips the scalpel.
55 A He draws out a photograph and holds it toward her across the table.
56 D DUNCAN [CONT'D]: That's the shop. The year it opened. The woman behind the counter.
57 A ¶ Mercedes does not take it.
58 A She does not need to.
59 D MERCEDES: That's my mother.
60 D DUNCAN: She's the one who mounted my wife's first cat. Thirty years ago.
61 D MERCEDES: My mother's been gone since '04.
62 D DUNCAN: I know. I thought you'd want to see it.
63 A ¶ He lays the photograph on the table beside the owl.
64 A Mercedes looks at it.
65 A Her grip on the scalpel eases.
66 D MERCEDES: Why?
67 D DUNCAN: Because last night, my wife came home.
68 D MERCEDES: Mr. Hale.
69 D DUNCAN: She's in the car. She's not a cat. She's not breathing, and she's not cold, and she asked me to bring her here.
* 70 A ¶ The lamp flickers.
* 71 A The animals do not move.
72 A Mercedes looks past him, through the doorway, to the front window.
* 73 A A car idles at the curb, headlights off.
74 A In the back seat, a shape sits very upright.
75 D MERCEDES (quiet): Why here?
76 D DUNCAN: She says you know how to make things stay.
* 77 A ¶ The bell above the front door jingles again, though the door has not opened.
78 A Mercedes sets down the scalpel.

### SCENE s00396 | INT. ROOTHOUSE TEAROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): ALDOUS, SEREN, PIP, WIDOW HARROWGATE
* 1 A ¶ A parlor grown inside the hollow of an immense oak.
* 2 A The walls are living bark, polished by decades of elbows.
* 3 A Honey-colored light falls through a knothole window, and tiny lanterns of captured fireflies hang from the ceiling on spider-silk.
* 4 A A kettle on a mushroom-stool burner sings.
5 A ¶ ALDOUS, 70, a wizard in a tea-stained cardigan, pours from a pot shaped like a sleeping badger.
6 A SEREN, 20s, an apprentice in a patched green cloak, stirs her cup and stirs it again.
7 A PIP, 9, a boy with soot on his chin, sits under the table feeding crumbs to something invisible.
8 D ALDOUS: Milk?
9 D SEREN: Please.
10 D PIP: Is it a lot of milk?
11 D ALDOUS: It's enough.
12 D SEREN: It's a bit much.
13 D ALDOUS: You said please.
14 D PIP: Seren said please, I said please, Master Aldous said please.
15 D SEREN: Nobody said please to the cat.
16 D ALDOUS: We have a cat?
17 D PIP: We have a cat under the table.
18 D SEREN: We don't have a cat.
19 D PIP: It's a very quiet cat.
20 A ¶ Aldous passes Seren her tea.
21 A She holds it, not drinking.
22 A She watches the knothole.
* 23 A ¶ A shadow crosses the window.
* 24 A The door, a round slab of bark on a leather hinge, swings inward.
25 A WIDOW HARROWGATE, 80s, small and square in a black bonnet, leans on a cane carved from a single antler.
26 A She has the look of a woman who has been on her way for a very long time.
27 D ALDOUS: Mrs. Harrowgate.
28 D WIDOW HARROWGATE: Aldous. You've aged.
29 D ALDOUS: You're early.
30 D WIDOW HARROWGATE: I'm precisely on time. You were always late.
31 D SEREN: Tea?
32 D WIDOW HARROWGATE: Not today, girl.
33 D PIP: Is she the one with the owl?
34 D SEREN: Pip.
35 D WIDOW HARROWGATE: I am the one with the owl.
36 D ALDOUS: Sit, Hester.
37 D WIDOW HARROWGATE: I'll stand.
38 A ¶ She doesn't.
39 A She lowers herself into the nearest chair, set at the head of the table like a throne.
* 40 A The firefly lanterns brighten very slightly.
41 A Nobody says anything.
42 A Aldous refills his cup.
43 A Seren stirs.
44 A Pip, under the table, tugs at the invisible cat's tail.
* 45 A The kettle sings on.

### SCENE s00397 | INT. CAR WASH TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): SOLEDAD, KWAME
* 1 A ¶ A beat-up hatchback inches through the dark.
* 2 A Foam slides down the windshield in thick white curtains.
* 3 A Brushes thump and whirl.
4 A ¶ SOLEDAD, 18, sits in the driver's seat in her graduation gown, cap still on.
5 A KWAME, 18, in the passenger seat, holds a diploma cover on his lap.
6 A ¶ She stares ahead.
7 A He stares at the foam.
* 8 A ¶ The car stops in a pool of blue light.
* 9 A Water drums on the roof.
10 D KWAME: We could've gone to the party.
11 D SOLEDAD: You hate parties.
12 D KWAME: I hate that one.
13 A ¶ She nods.
14 A Her hands tighten on the wheel.
* 15 A The brushes retreat.
* 16 A A jet of water hits the glass, and for a moment the world outside is nothing but a trembling white.
17 D SOLEDAD: You got the letter.
18 D KWAME: Yeah.
19 D SOLEDAD: Where?
20 D KWAME: Out west.
21 A ¶ She says nothing.
22 A He turns the diploma cover over in his hands.
23 A She puts the car in drive, and it rolls forward into the dryers, which roar.
24 A ¶ He rolls his window down and lets the warm air in.
25 A She takes off her cap and places it on the dash.

### SCENE s00398 | INT. CANNERY WORKERS' HALL - DINING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELSPETH MARROW, THADDEUS, YUKI, RODERICK, MIRABEL, PERCIVAL
* 1 A ¶ A long plank table under a flickering chandelier made of fishing floats.
* 2 A Salted air.
* 3 A Six places set, five plates filled, one empty.
* 4 A Rain batters the windows.
5 A ¶ ELSPETH MARROW, 60s, presides at the head.
6 A THADDEUS, 50s, her brother, sits at her right, carving a roast with no appetite.
7 A YUKI, 30s, a guest in a sharp navy suit, sits across with her hands in her lap.
8 A RODERICK, 40s, the cannery manager, loosens his collar.
9 A MIRABEL, 20s, the cook's niece, pours wine with a trembling hand.
10 A PERCIVAL, 70, deaf, bearded, nods off in his chair.
11 D ELSPETH: We were seven when the whistle blew in 'sixty-three.
12 D THADDEUS: Eight.
13 D ELSPETH: Seven. One of us never came to dinner.
14 D RODERICK: I don't recall.
15 D ELSPETH: No. You wouldn't.
16 D YUKI: Mrs. Marrow, I came to discuss the sale of the cannery.
17 D ELSPETH: You came to eat, dear. The sale is dessert.
18 D MIRABEL: Wine, ma'am?
19 D ELSPETH: Pour, child. Pour as if the glasses were hungry.
20 A ¶ Mirabel pours.
* 21 A The wine sloshes.
22 A She does not look at the empty place.
23 D THADDEUS: It was a good harvest that year. The fish were thick. We worked three shifts for three weeks, and the sea took only what it was owed.
24 D RODERICK: That's not how I remember it.
25 D THADDEUS: You remember it from the office.
26 D RODERICK: I remember the ledger.
27 D ELSPETH: The ledger is a liar. It says seven and it lies.
28 D YUKI: Mrs. Marrow, whose place is empty?
29 A ¶ Percival stirs, mutters, falls asleep again.
* 30 A The chandelier floats sway.
31 A Elspeth sets down her fork.
32 A She does it slowly, with great ceremony.
33 D ELSPETH: It is the place of the one who is coming.
34 D RODERICK: Nobody is coming.
35 D ELSPETH: The tide is.
* 36 A ¶ Thunder rattles the windows.
* 37 A The lights gutter.
* 38 A When they steady, the empty plate is no longer empty.
* 39 A A single sardine, whole, wet, lies across it, its eye round and gold.
40 A ¶ Nobody speaks.
41 A Mirabel drops the bottle.
42 A Yuki rises.
43 A Thaddeus lays down his carving knife and, for the first time, looks at his sister with terror.
44 D THADDEUS: Elspeth. What have you done?
45 D ELSPETH: I invited him.
* 46 A ¶ Out in the dark, beneath the floorboards, something heavy shifts.

### SCENE s00399 | INT. STALLED ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): WINIFRED, LEOPOLD, DANIKA, VIJAY, MAINTENANCE
* 1 A ¶ Four people, mirrored walls, a dead floor indicator.
* 2 A Muzak plays softly.
3 A ¶ WINIFRED, 50s, in a pantsuit, holds a cake box.
4 A LEOPOLD, 30s, in a delivery uniform, holds a balloon bouquet.
5 A DANIKA, 20s, in a bridesmaid dress, holds a phone with no signal.
6 A VIJAY, 40s, in a tux, holds nothing but a ring box.
7 A ¶ Everyone smiles tightly.
8 D WINIFRED (to the group): It's fine. It's a minor delay.
9 D DANIKA (to Vijay): You're the groom?
10 D VIJAY: Best man.
11 D DANIKA: Where's the ring?
12 D VIJAY (to himself): In the box. It's in the box. It's in the box.
* 13 A ¶ The intercom crackles.
14 D MAINTENANCE [V.O.]: Hello in there? Is anyone in the elevator?
15 D LEOPOLD: Four of us!
16 D MAINTENANCE [V.O.]: Great. Quick question. Do any of you have a wedding to be at?
17 A ¶ All four stare at one another.
18 D WINIFRED (to the group): Why do you ask?
19 D MAINTENANCE [V.O.]: Because the groom just called. He says the bride's mother is stuck in an elevator with a cake, the best man, and a bridesmaid, and a balloon guy.
20 A ¶ Winifred closes her eyes.
21 D WINIFRED (quietly): I am the mother.
22 A ¶ Vijay opens the ring box.
* 23 A It's empty.
24 D VIJAY (to himself): Okay.

### SCENE s00400 | INT. GENERATION SHIP "KESTREL" - CARGO HOLD C - NIGHT SHIFT
Detected names (may be incomplete or contain aliases): TOMASZ, REN, ASTRID, BASHIR
* 1 A ¶ Stacked cryo-crates.
* 2 A Condensation drips from the ceiling.
* 3 A Cold light, long shadows.
* 4 A A hatch in the far wall is sealed with yellow tape.
5 A ¶ TOMASZ, 50, crew chief, in a quilted jacket, leans against a crate.
6 A REN, 20s, logistics, holds a tablet.
7 A ASTRID, 40, a medic, kneels beside a cracked cryo-pod.
8 A BASHIR, 30s, an engineer, stands at the sealed hatch with a wrench.
9 D TOMASZ: Count again.
10 D REN: Two hundred twelve.
11 D ASTRID: Two hundred eleven. This one's empty.
12 D BASHIR: Two hundred ten. I counted the manifest.
13 D TOMASZ: You don't count the manifest. You count the pods.
14 D REN: The manifest says two hundred twelve.
15 D BASHIR: The manifest is old.
16 D ASTRID: This pod isn't cracked from the outside.
17 D REN: What do you mean?
18 D ASTRID: The glass bowed out. Someone woke up in here.
19 D TOMASZ: Nobody wakes up. We don't wake until arrival.
20 D BASHIR: Then someone did.
21 D TOMASZ: Then someone's in this ship we don't know about.
22 D REN: That's impossible.
23 D ASTRID: So is the pod.
24 D BASHIR: The hatch is taped from the inside.
25 A ¶ They all turn to him.
26 A He taps the yellow tape with the wrench.
* 27 A It is peeled from the inside edge.
28 D TOMASZ: Open it.
29 D BASHIR: I'd rather not.
30 D TOMASZ: Open it.
31 D BASHIR: I'd rather you didn't.
* 32 A ¶ Behind the hatch, someone knocks, once.
* 33 A Politely.

### SCENE s00401 | INT. MERCANTILE TRUST BANK - SUBLEVEL VAULT CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): ARTUR VOSS, LENNOX BAILEY, SHERWIN
* 1 A ¶ Concrete.
* 2 A Fluorescent hum.
* 3 A A steel door the size of a garage stands half-open at the end of the hall.
* 4 A A cleaning cart is parked against the wall, its mop bucket empty.
5 A ¶ ARTUR VOSS, 40s, in a gray cleaner's coverall, walks down the corridor with a push broom.
6 A He moves with a lazy rhythm, humming.
7 A LENNOX BAILEY, 30s, in an identical coverall, follows a few steps behind, carrying a clipboard.
8 D ARTUR: You're nervous.
9 D LENNOX: I'm not nervous.
10 D ARTUR: You're humming.
11 D LENNOX: You're humming.
12 D ARTUR: I always hum.
13 D LENNOX: Then so do I.
14 A ¶ They stop at the vault door.
* 15 A The broom hangs from Artur's hand.
16 A Lennox taps the clipboard on his thigh.
17 D ARTUR: Check the schedule.
18 D LENNOX: It says night staff leaves at midnight.
19 D ARTUR: What time is it?
20 D LENNOX: Eleven fifty-one.
21 D ARTUR: He's late.
22 D LENNOX: He's early. He said eleven fifty-five.
23 D ARTUR: Who said?
24 D LENNOX: He did.
25 D ARTUR: Which he?
26 D LENNOX (a beat): The one with the keys.
27 A ¶ Artur's smile is thin.
28 A He leans the broom against the wall and wipes his palms on his hips.
29 D ARTUR: He told you eleven fifty-five.
30 D LENNOX: He told me.
31 D ARTUR: He told me twelve ten.
32 D LENNOX: Then one of us is lying.
33 D ARTUR: Or he is.
34 A ¶ They look at each other.
* 35 A Lennox's clipboard has stopped moving.
* 36 A Down the corridor, an elevator DINGS.
37 A Both turn.
38 D LENNOX: That's early.
39 D ARTUR: Someone's coming.
40 D LENNOX: Which one's he?
41 D ARTUR: I don't know.
42 A ¶ They stand very still as the elevator doors slide open.
43 A A figure steps out, but it is cast in shadow and light, impossible to read.
44 A He holds a ring of keys that jingles with each step.
45 A ¶ The figure raises one hand.
46 A Lennox's hand goes to his coverall pocket.
47 A Artur's goes to the mop handle.
48 D LENNOX (whisper): Who is it?
49 D ARTUR (whisper): Don't move.
50 A ¶ The figure stops ten feet away.
51 A In the light, a chin, a mouth, a nervous smile.
52 D LENNOX: Mr. Sherwin.
53 D SHERWIN (off): Evening, boys.
54 A ¶ Artur lets his breath out.
55 A Lennox lets his out, too, and both look sheepish.
56 D ARTUR: You're late.
57 D LENNOX: He's early.
* 58 A ¶ The keys jingle.
59 A Sherwin steps closer, and in the corridor light we see what the shadows hid: a revolver, hanging loose at his side.
60 D SHERWIN: I'm exactly on time.
61 A ¶ Neither man moves.
62 D ARTUR: Mr. Sherwin. What's the gun for?
63 D SHERWIN: For the one of you who's going to ask what the gun is for.
64 D LENNOX: That's Artur.
65 D ARTUR: That's Lennox.
66 D SHERWIN: It doesn't matter.
67 A ¶ He raises the gun.
68 A Artur dives behind the cart.
69 A Lennox hits the floor.
* 70 A The shot rings off concrete and the cart bucket rolls across the corridor, ringing like a bell.
71 D ARTUR (from behind the cart): He's got six! I count five!
72 D LENNOX (from the floor): Count again!
* 73 A ¶ Another shot.
* 74 A The fluorescent tube above them bursts.
* 75 A Sparks.
* 76 A Darkness.
77 A The echo dies in the corridor, and in the dark someone, slowly, begins to hum.

### SCENE s00402 | INT. DOUBLEWIDE TRAILER - LIVING ROOM - DAY
Detected names (may be incomplete or contain aliases): FLORENCE, EZEKIEL, DARIUS, LOLA, IGNATIUS, WANJIRU
* 1 A ¶ A cramped, wood-paneled room crowded with an old man's life: a recliner, a gun rack with no guns, stacks of National Geographic, a fish tank gone green.
* 2 A Boxes labeled in marker line the walls.
3 A ¶ FLORENCE, 60s, eldest, in a church dress, sits on the sofa with a legal pad.
4 A EZEKIEL, 50s, her brother, stands at the window with his arms crossed.
5 A DARIUS, 30s, a nephew in a work shirt, sits on a box.
6 A LOLA, 20s, a niece in cutoffs, picks at the fish tank lid.
7 A IGNATIUS, 40s, the lawyer in a cheap suit, stands by the door with a folder.
8 A WANJIRU, 70s, Uncle Teodoro's long-time neighbor, sits very still in the recliner.
9 D FLORENCE: Mr. Ignatius, read the will.
10 D IGNATIUS: It's brief.
11 D EZEKIEL: It always is.
12 D IGNATIUS: "To my sister Florence, the clock. To my brother Ezekiel, the truck. To my nephew Darius, the tools. To my niece Lola, the fish."
13 D LOLA: The fish.
14 D DARIUS: He left her the fish.
15 D LOLA: The fish are dead.
16 D FLORENCE: That's what you inherit, dear.
17 A ¶ Ezekiel turns from the window.
18 A His jaw is tight.
19 D EZEKIEL: And the land?
20 D IGNATIUS: There is a final line.
21 D FLORENCE: Read it.
22 D IGNATIUS: "The land and the trailer I leave to Wanjiru, who stayed."
23 A ¶ For a moment, no one moves.
24 A Then Ezekiel strides across the room, grabs a stack of magazines, and hurls them against the wall.
* 25 A They burst into a fan of glossy pages.
26 A Darius leaps up, boxes toppling, and Lola scrambles back onto the sofa.
27 A Florence stands, and Wanjiru does not.
28 D EZEKIEL: Stayed? He stayed! We all stayed! We just stayed somewhere else!
29 D FLORENCE: Ezekiel, sit.
30 D EZEKIEL: No.
31 A ¶ He kicks the nearest box.
* 32 A It splits, and paperbacks tumble out.
33 A Darius lunges for his arm, and the two stumble against the fish tank, which rocks, slops green water, and settles.
34 A Ignatius backs against the door.
35 A Wanjiru finally speaks.
36 D WANJIRU (calm): He knew you would do this.
37 A ¶ Everyone stops.
38 A They look at the old woman in the recliner.
39 A She folds her hands.
40 D WANJIRU [CONT'D]: That's why he told me where the key is.
41 A ¶ She opens her palm.
* 42 A In it, a small brass key, tarnished and warm.
