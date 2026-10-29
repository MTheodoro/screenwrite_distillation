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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0109.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00069 | EXT. WILLOW GROVE AT THE EDGE OF THE WORLD - TWILIGHT
Detected names (may be incomplete or contain aliases): STRANGER, VOICE, WREN
* 1 A ¶ Weeping willows, silver in the dusk.
* 2 A Fireflies drift between branches like slow sparks.
* 3 A A pond mirrors a sky with two moons.
* 4 A A stone well stands among the roots, its lip furred with moss.
5 A ¶ A STRANGER walks into the grove: a woman, ageless, barefoot, wrapped in a patchwork cloak that shifts color as she moves.
6 A She carries a lantern with no flame, only a glow like captured dawn.
7 A She stops at the well and sets the lantern on its lip.
8 D STRANGER (to the grove): I hear you.
* 9 A ¶ The willows rustle.
10 A A firefly lands on her sleeve, and she watches it breathe.
11 D STRANGER [CONT'D] (softly): I know. I know. It's been a long road.
12 A ¶ A voice rises from the well, deep and wet and patient, as though spoken through a thousand years of stone.
13 D VOICE [O.S.] (from the well): Who comes to the Mouth of Names?
14 D STRANGER: A traveler.
15 D VOICE [O.S.] (from the well): Travelers bear names.
16 D STRANGER: Mine fell off the road a long way back.
17 A ¶ She kneels.
18 A She dips her hand into the cold dark water.
* 19 A Ripples spread, and the fireflies pause in the air, holding their light.
20 D VOICE [O.S.] (from the well): Then I shall give you one.
21 D STRANGER: Give me a good one.
* 22 A ¶ The water brightens, silver then gold.
* 23 A When it clears, the surface shows a face: not hers, but a girl's, laughing.
24 D VOICE [O.S.] (from the well): Wren.
25 A ¶ The woman closes her eyes.
* 26 A The cloak settles to a single color: the deep green of willow leaves.
27 D WREN (whispering): Wren.
28 A ¶ She rises, shoulders loose, as though a weight has slid off.
29 A She picks up the lantern.
* 30 A Its glow steadies and warms.
31 D WREN [CONT'D] (to the well): Thank you.
32 D VOICE [O.S.] (from the well): Walk well, Wren.
33 A ¶ She leaves the grove.
* 34 A Behind her, the willows close their branches like curtains.
* 35 A The fireflies resume their drift, and the two moons climb.

### SCENE s00070 | INT. ICE-TUG COOLANT GALLERY - DRIFT SHIFT
Detected names (may be incomplete or contain aliases): TESS OKONKWO, BRANDR HALVORSEN
* 1 A ¶ Frost on every rivet.
* 2 A Amber work lights flicker down a corridor choked with pipe.
3 A ¶ TESS OKONKWO (30s, burn scar across one palm, tool belt hanging low) drags a sled of frozen valve housings past a hatch while BRANDR HALVORSEN (50s, enormous, a thermos strapped to his chest like a medal) kneels at a leaking manifold, wrench in one fist, the other hand flat against the pipe as if feeling for a pulse.
4 A Tess kicks the sled brake, taps the gauge, and taps it again.
5 A Brandr doesn't look up.
6 D TESS (into her collar): All hands on nine, gallery four is weeping coolant. Stay out of the aft ring.
* 7 A ¶ No answer.
* 8 A Static, then nothing.
9 D TESS [CONT'D] (to herself): Of course. Of course you're all asleep.
10 D BRANDR: Hand me the forty.
11 A ¶ She slides a wrench across the deck.
12 A He ignores it and keeps his palm on the pipe.
13 D BRANDR [CONT'D]: It's not leaking. It's breathing.
14 D TESS: Pipes don't breathe.
15 D BRANDR: This one's learned.
* 16 A ¶ The manifold gives a long, wet exhale.
* 17 A A white plume rolls across the ceiling.
18 A Tess backs into the sled, Brandr rocks onto his heels, and the work lights die one by one down the corridor, leaving only the glow of the gauge.
19 D TESS (to the dark, loud): Everyone brace. Pressure drop, thirty seconds.
20 D BRANDR (low, to himself): Easy, girl. Easy.
* 21 A ¶ The gauge needle sags, hovers, and slowly climbs.
* 22 A The lights stutter back.
23 A Tess laughs once, short, and sits on the sled.
24 A Brandr unscrews his thermos and pours steaming coffee into the cap, which he holds out to her without looking.
25 D TESS: You knew it would settle.
26 D BRANDR: No.
27 A ¶ She takes the cap anyway.
* 28 A Behind them, the pipe begins to knock, slow and rhythmic, like someone asking to be let in.
29 D TESS: Brandr.
30 D BRANDR: I heard it.
* 31 A ¶ The knocking speeds up.
32 A They both stand.

### SCENE s00071 | INT. CLOSED FUNICULAR STATION - WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): AGNES PRUITT, DELROY CAMPBELL, WEI-LING CHOU, FATHER TOBIAS
* 1 A ¶ Wooden benches, a dead ticket window, a brass clock stopped at ten past four.
* 2 A Rain ticks on a skylight.
3 A ¶ AGNES PRUITT (60s, retired schoolteacher, buttoned to the chin) pours tea from a flask into four paper cups.
4 A DELROY CAMPBELL (40s, line mechanic in a grease-stained parka) sits on the bench by the door.
5 A WEI-LING CHOU (30s, insurance investigator, wet umbrella across her knees) studies the clock.
6 A FATHER TOBIAS (70s, rumpled cardigan under a black coat) leans on the ticket window, humming.
7 D AGNES: Sugar, anyone?
8 D DELROY: Just the tea.
9 D WEI-LING: Who owns this station now, Mr. Campbell?
10 D DELROY: The company. Nobody comes up here but me.
11 D FATHER TOBIAS: And us. A fine thing, the four of us in a snowglobe.
12 D AGNES: It's rain, Father.
13 D FATHER TOBIAS: Then a rain globe.
14 A ¶ Wei-Ling accepts a cup, sips, and smiles for the first time.
15 D WEI-LING: It's good tea.
16 D AGNES: I know.
17 A ¶ Wei-Ling lowers the cup.
18 A Her eyes go to the ticket window.
* 19 A A faint metal glint sits behind the grille.
20 D WEI-LING: Mr. Campbell. Is that the cash box?
21 A ¶ Delroy and Father Tobias both look at the window.
* 22 A Nobody speaks.
23 A Delroy stands.
24 D DELROY: It was empty when I locked it.
25 D AGNES: Was it?
26 A ¶ Delroy lunges for the window.
27 A Father Tobias steps in front of him, and the two grapple against the counter, the old priest surprisingly strong.
28 A Wei-Ling drops the umbrella and tries to pull them apart.
29 A Agnes sets down the flask, calmly, and the three of them freeze as she opens her coat to show a revolver tucked in her belt.
30 D AGNES [CONT'D]: The tea was only for waiting.
31 A ¶ Wei-Ling's cup slips from her hand.
32 A Delroy slumps onto the bench.
* 33 A The clock, for no reason at all, ticks forward one minute.

### SCENE s00072_0 | EXT. ANDEAN CABLE GONDOLA - DUSK
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A two-seat steel gondola hangs motionless over a ravine.
* 2 A Wind rocks it.
* 3 A Below, a river thunders through black rock.

### SCENE s00072_1 | INT. CABLE GONDOLA - CONTINUOUS
Detected names (may be incomplete or contain aliases): RAMONA QUISPE, ED, BAYLISS, RESCUE COORDINATOR
* 1 A ¶ Cramped.
* 2 A Fogged glass.
3 A RAMONA QUISPE (40s, mountain guide, cracked lip, orange windbreaker) wedges herself in a corner with a radio.
4 A EDMUND "ED" BAYLISS (60s, retired surveyor, tweed jacket, knee brace) grips the seat with both hands.
5 D RAMONA: Base, Base, this is Quispe in cabin six. Over.
* 6 A ¶ Static.
7 A Ed stares at the floor.
8 D ED: Do not tell me we've lost the line.
9 D RAMONA: Quiet, please.
10 D RESCUE COORDINATOR [V.O.] (radio, crackling): Cabin six, we read you. Say your count.
11 D RAMONA: Two. One guide, one passenger. No injuries.
12 D RESCUE COORDINATOR [V.O.]: Copy. Cable crew is ninety minutes out. Snow on the access road.
13 A ¶ Ed exhales, long and shaky.
14 D ED: Ninety minutes.
15 D RAMONA: It's good news, Ed. It means they're coming.
16 D ED: I know what it means. I've been wrong about distances my whole life.
* 17 A ¶ The gondola lurches.
18 A Both of them stiffen.
* 19 A It settles.
20 A Ed pries open a thermos with trembling fingers.
21 D RESCUE COORDINATOR [V.O.]: Quispe, confirm you have warm layers.
22 D RAMONA: Confirm. Emergency blanket, two.
23 A ¶ She tears open a foil packet and drapes one over Ed's shoulders.
24 A He tries to refuse.
25 A She tucks it tight.
26 D ED: You'd make a decent nurse.
27 D RAMONA: I'd make a terrible nurse. I make a good guide.
* 28 A ¶ Silence.
* 29 A Wind.
* 30 A The glass rattles faintly.
31 D ED: Do you ever get used to it? The height?
32 D RAMONA: No. You learn which fear is worth listening to.
33 D ED: And this one?
34 D RAMONA: This one is just cold.
35 A ¶ Ed laughs, surprised.
36 A Ramona half smiles.
* 37 A The radio crackles again.
38 D RESCUE COORDINATOR [V.O.]: Cabin six, new estimate, seventy-five minutes. Road crew cleared the slide.
39 D RAMONA: Copy, seventy-five.
40 D ED: That's a fifteen-minute improvement.
41 D RAMONA: It's a fifteen-minute improvement.
42 A ¶ She lowers the radio.
* 43 A The dark outside deepens.
44 A Ed pulls the blanket around himself, and Ramona settles her back against the cold glass.
45 D ED: Tell me about the mountain.
46 D RAMONA: Which one?
47 D ED: Any of them.
48 D RAMONA: My grandfather said they listen. If you say their name wrong, they send weather.
49 D ED: What did you call this one?
50 D RAMONA: Apu Kuntur.
51 D ED (trying it): Apu Kuntur.
* 52 A ¶ A gust shakes the cabin.
* 53 A Then the wind drops, and the whole gondola goes still.
54 D ED [CONT'D]: Well. Perhaps I said it right.
55 D RAMONA: Perhaps.
56 D RESCUE COORDINATOR [V.O.]: Cabin six, I'm hearing you laughing. That's what I like to hear.
57 D RAMONA (to the radio): Just keep coming.

### SCENE s00073 | INT. RIVERBOAT CASINO COURTROOM - DAY
Detected names (may be incomplete or contain aliases): CLEMENTINE ASHWORTH, MAXWELL DRUMM, JUDGE ISADORA FENWICK, BAILIFF NORBERT KWASNIEWSKI
* 1 A ¶ A gambling hall converted into a temporary courtroom after the flood.
* 2 A Slot machines are draped in canvas, and brown water stains climb the walls.
* 3 A A judge's bench has been built from a roulette table.
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
* 20 A No one is there.
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
* 32 A It clatters and settles.
33 D JUDGE FENWICK: Red seventeen.
34 A ¶ She lifts the gavel.
35 D JUDGE FENWICK [CONT'D]: Dismissed.

### SCENE s00074 | INT. CONVERTED BOWLING ALLEY - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): GRETCHEN VOSS, BIG DAVE MUNOZ, PRIYA NAIR, LEOPOLD ASHFORD, HANNELORE BRANDT, TOBY OYELARAN
* 1 A ¶ Lanes carpeted over.
* 2 A Desks sit where pins used to stand.
* 3 A The ball return hums.
4 A ¶ GRETCHEN VOSS (50s, headset, power blazer) paces the gutter.
5 A BIG DAVE MUNOZ (40s, linebacker build, lanyard) hunches over a keyboard.
6 A PRIYA NAIR (late 20s, three monitors) types without blinking.
7 A LEOPOLD ASHFORD (60s, bowtie) polishes a trophy no one has won.
8 A HANNELORE BRANDT (30s, cardigan, furious calm) stares at a spreadsheet.
9 A TOBY OYELARAN (20s, intern, backward cap) holds a clipboard like a shield.
10 A ¶ She stops.
* 11 A Nobody looks up.
12 D GRETCHEN: Quarterly synergy.
13 A ¶ Dave stands.
14 A Sits.
15 A Priya's typing slows, then quickens.
16 A Leopold sets down the trophy.
17 D LEOPOLD: We are on track.
18 D GRETCHEN: Are we.
19 A ¶ Hannelore turns her monitor ninety degrees.
* 20 A A red cell glows.
21 A Toby takes a half step toward the exit.
22 A Gretchen catches it.
23 D GRETCHEN [CONT'D]: Toby.
24 D TOBY: Yes, Ms. Voss.
25 D GRETCHEN: Coffee.
26 A ¶ He bolts.
27 A Dave watches him go, envious.
28 D DAVE: I could use one too.
29 D GRETCHEN: You could use a lot of things.
30 A ¶ Priya's keyboard stops.
* 31 A Silence.
* 32 A The ball return clunks.
33 D PRIYA: The numbers are final.
34 D HANNELORE: They are not final.
35 D PRIYA: They are final.
36 A ¶ Leopold lifts the trophy again and begins to polish with great concentration.
37 A Gretchen crosses to Hannelore, leans over, and reads the red cell.
38 A She exhales through her nose.
39 D GRETCHEN: Fix it.
40 D HANNELORE: It's not broken.
41 D GRETCHEN: Then make it less true.
42 A ¶ Hannelore picks up a pen.
43 A Clicks it.
44 A Clicks it again.
45 A Dave rolls his chair six inches away from her.
46 A Toby returns with six coffees balanced in a cardboard tray, and nobody takes one.

### SCENE s00075 | INT. CHEESE-AGING CAVE - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL FUENTES, CASPIAN DUBOIS, IGGY BRANNIGAN, SUNITA RAO, MADAME ELOISE THIBAULT
* 1 A ¶ Limestone walls, wooden racks of wheels, a fog of ammonia and mold.
* 2 A A single bulb swings on a cord.
3 A ¶ MARISOL FUENTES (30s, climbing harness, headlamp) lowers herself off a ladder while CASPIAN DUBOIS (40s, careful hands, white coat stolen from a cheesemonger) checks a humidity gauge and IGGY BRANNIGAN (20s, nervous, duffel bag) props open the freight door with a wheel of Gruyere.
4 A SUNITA RAO (50s, retired locksmith, reading glasses on a chain) kneels at a steel cabinet at the back, picks in hand.
5 D MARISOL: Eleven minutes. That's the guard's loop.
6 D CASPIAN: Nine. I counted.
7 D IGGY: It smells like feet in here.
8 D SUNITA: It smells like money. Hush.
* 9 A ¶ The cabinet clicks.
10 A Sunita pulls the door.
* 11 A Inside, velvet-lined shelves cradle a row of small glass jars.
12 A Marisol reaches in.
13 D MARISOL: Starter cultures.
14 D CASPIAN: Four hundred years old. Worth more than gold.
15 D IGGY: It's cheese mold.
16 D SUNITA: It's the cheese mold.
17 A ¶ Iggy lifts a jar.
18 A Caspian takes the next one.
19 A Marisol begins loading the duffel.
* 20 A Everything is calm, almost gentle, like four people in a pantry.
* 21 A ¶ A flashlight beam sweeps across the entrance.
22 A ¶ MADAME ELOISE THIBAULT (70s, nightgown, wellington boots, a shotgun held like an umbrella) steps through the freight door.
23 A She does not look surprised.
24 D MADAME THIBAULT: Put them back.
25 D IGGY: We were just--
26 D MARISOL: Madame, we can explain.
27 D CASPIAN: Don't explain.
28 D SUNITA: She's holding a shotgun, Caspian, explain something.
29 D MADAME THIBAULT: Put them back. Every one. Then you may leave.
30 A ¶ The four of them glance at each other.
31 A Marisol sets the duffel down.
32 A Caspian nudges a jar back with one finger.
33 A Iggy sobs quietly.
34 A Sunita sighs and replaces the cabinet door.
35 D MADAME THIBAULT [CONT'D]: The key is in the left pocket of my robe. It always was.
36 A ¶ Sunita peers at her.
37 D SUNITA: You left it unlocked.
38 D MADAME THIBAULT: I left it for the mice. You, I did not expect.

### SCENE s00076 | INT. CONVERTED LIGHTHOUSE - COWORKING SPACE - DAY
Detected names (may be incomplete or contain aliases): BARNABY STOKES, ORLA FITZGIBBON, JUNG-HO PARK, ADAEZE NWOSU, CEDRIC LAMONT
* 1 A ¶ A spiral staircase of standing desks.
* 2 A Fresnel lens turned into a conference light.
3 A Everyone wears matching grey fleece.
4 A ¶ BARNABY STOKES (40s, community manager, smiling too hard) claps once at the top of the stairs.
5 A ORLA FITZGIBBON (30s, product lead, cold brew) leans on the rail.
6 A JUNG-HO PARK (20s, engineer, noise-cancelling headphones) types.
7 A ADAEZE NWOSU (30s, designer, sketchbook) draws the lens.
8 A CEDRIC LAMONT (50s, investor, borrowed lanyard) examines the view like a purchase.
9 D BARNABY (to everyone): Hi, team! Quick announcement: we are pivoting.
* 10 A ¶ Nobody moves.
11 A Jung-Ho slides one headphone off an ear.
12 D JUNG-HO: To what?
13 D BARNABY: To the next thing.
14 D ORLA: We pivoted Tuesday.
15 D ADAEZE (muttering): We pivoted into a wall.
16 D CEDRIC (to Barnaby): Walk me through the vision.
17 D BARNABY: It's a platform for platforms.
18 A ¶ Orla and Jung-Ho speak at the same moment.
19 D ORLA: That's not a product.
20 D JUNG-HO: That's a typo.
21 D BARNABY (to Orla): I need you aligned.
22 D ORLA: I'm aligned. I'm so aligned I'm sideways.
23 A ¶ Cedric descends two steps and peers at Adaeze's sketchbook.
24 D CEDRIC: Is that the logo?
25 D ADAEZE: It's a lighthouse.
26 D CEDRIC: We should keep that.
27 A ¶ She closes the book very slowly.
28 D ADAEZE (to herself): It was always the lighthouse.
29 D BARNABY (to everyone): So! Who's excited?
* 30 A ¶ A long pause.
* 31 A The lens rotates.
* 32 A A single pigeon lands on the rail.
33 A Jung-Ho raises one hand.
34 D JUNG-HO: Can I be excused?
35 D BARNABY: It's a flat org.
36 D JUNG-HO: Then I flatly would like to leave.

### SCENE s00077 | INT. SILVER STAR ROLLER RINK - AFTER CLOSING
Detected names (may be incomplete or contain aliases): NELL ABERNATHY, SOLEDAD IBARRA, HASHIMOTO
* 1 A ¶ The rink is a long amber oval of varnished maple, scuffed grey where a thousand wheels have turned.
* 2 A Disco light dribbles over the empty benches.
* 3 A The carpeted walls smell of popcorn and old rubber.
* 4 A A single overhead fan ticks.
5 A ¶ NELL ABERNATHY (16, long-limbed, a cast on one wrist) sits on the bench lacing a skate with her good hand.
6 A SOLEDAD IBARRA (16, braids tied up, a jersey two sizes big) circles the floor in slow, practiced loops, trailing one hand along the rail.
7 A At the snack counter, MR. HASHIMOTO (70s, cardigan, reading glasses on his forehead) counts the till, never looking up.
8 A ¶ She crosses the rink and stops in front of the bench.
9 A She looks down at her.
10 A She doesn't smile.
11 D SOLEDAD: You said you'd tell me.
12 D NELL: I know.
13 D SOLEDAD: That was Tuesday.
14 D NELL: It's complicated.
15 A ¶ She pushes off again, harder this time, a loop, then another.
16 A Nell watches her go.
* 17 A The fan ticks.
18 A At the counter, Mr. Hashimoto slides a stack of bills into a bag and does not look up.
19 D MR. HASHIMOTO (to the till): Eleven dollars short.
20 D SOLEDAD (skating, not stopping): It's Nell's thing, it's always Nell's thing.
21 D NELL: My thing?
22 D SOLEDAD: You and your cast and your secret.
23 A ¶ She skates past the bench, close enough that the wind of it lifts the hair on Nell's neck.
24 A Nell stands.
25 A Her laces hang loose.
26 D NELL: You don't know what happened.
27 D SOLEDAD: Then tell me.
28 D NELL: I'm leaving.
* 29 A ¶ The word hangs in the air.
30 A Soledad stops.
* 31 A The skates scrape, and the sound seems very loud.
* 32 A Across the rink, the till slams shut.
33 D MR. HASHIMOTO: Girls. Lights in five.
34 A ¶ Soledad pulls off a skate and throws it.
* 35 A It skids across the maple and clatters against the wall.
36 A Nell flinches, then crosses the floor in her socks, stoops, and picks the skate up.
37 A She holds it out.
38 A Soledad does not take it.

### SCENE s00078 | INT. ALL-NIGHT LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): VINNIE CALDERONE, SHAUNTAE BRIGGS, OLEK WISNIEWSKI, ASANTE
* 1 A ¶ Fluorescent hum.
* 2 A Dryers turning.
* 3 A A rack of lost socks.
4 A ¶ VINNIE CALDERONE (50s, slick hair, silk shirt under a trench coat) sits on a folding table.
* 5 A A gym bag at his feet.
6 A He watches a dryer spin.
7 A ¶ SHAUNTAE BRIGGS (30s, braids, work boots) folds towels at the counter.
8 A Slow.
9 A Steady.
10 A Eyes on him.
11 A ¶ OLEK WISNIEWSKI (20s, hood up, bruise under one eye) feeds quarters into a washer.
12 A Misses one.
13 A Retrieves it.
* 14 A ¶ A wall phone rings.
15 A Everyone stops.
16 A ¶ Vinnie crosses.
17 A Picks up.
18 D VINNIE: Yeah.
19 D ASANTE [V.O.] (over phone, flat): Is it clean?
20 D VINNIE: Clean.
21 D ASANTE [V.O.]: Count it again.
22 A ¶ Vinnie covers the receiver.
23 A Looks at Shauntae.
24 D VINNIE (low): Count it.
25 D SHAUNTAE: Not mine to count.
26 A ¶ She folds another towel.
27 A ¶ Olek unzips the gym bag.
* 28 A Cash, bundled.
29 A He thumbs a stack.
30 A Counts under his breath.
31 D OLEK: Forty. Fifty.
32 D ASANTE [V.O.]: Is that Olek I hear?
33 D VINNIE: He's counting.
34 D ASANTE [V.O.]: Tell him it's short by two.
35 A ¶ Vinnie stares at the phone.
36 A Slowly turns.
37 D VINNIE (to Olek): It's short by two.
38 D OLEK: I counted twice.
39 D SHAUNTAE: He's lying.
40 D OLEK: I am not lying.
41 A ¶ Vinnie hangs up.
42 A Walks toward Olek.
* 43 A Soft shoes on linoleum.
44 D VINNIE: Where's the two?
45 D OLEK: In my pocket. For rent.
46 D SHAUNTAE: Mm-hm.
47 A ¶ Vinnie grabs Olek's collar.
48 A Slams him into the washer.
* 49 A The drum rattles.
* 50 A Quarters spill.
51 A ¶ Shauntae sets down her towel.
52 D SHAUNTAE [CONT'D]: Not here.
53 D VINNIE: Stay out of it.
54 D SHAUNTAE: My sister's laundromat.
* 55 A ¶ The phone rings again.
* 56 A Nobody moves.

### SCENE s00079 | INT. DIALYSIS UNIT - NIGHT
Detected names (may be incomplete or contain aliases): HELENE MARCHETTI, ROSALIND AKINS
* 1 A ¶ A long, low room of reclining chairs and blinking machines.
* 2 A Most of the beds are empty.
* 3 A A rain-streaked window frames the parking lot.
* 4 A The machines hum a single note, patient as insects.
5 A ¶ DR. HELENE MARCHETTI (50s, grey at the temples, scrubs worn soft with washing) pulls a stool beside the last occupied chair.
6 A ROSALIND AKINS (70s, shawl, a library paperback open on her lap) does not look up from her page.
* 7 A Blood moves slow and dark through the tubing between her arm and the machine.
8 A ¶ She turns a page.
9 A She is not reading it.
10 D HELENE: How's the pressure?
11 D ROSALIND: You tell me.
12 A ¶ Helene checks the monitor.
13 A Taps the screen.
14 A Writes nothing.
15 D HELENE: Good enough.
16 D ROSALIND: Mm.
* 17 A ¶ The machine ticks.
18 A Helene folds her hands in her lap, unfolds them.
19 A She looks at the paperback.
20 D HELENE: Is it any good?
21 D ROSALIND: Third time through.
22 D HELENE: That's a yes, then.
23 A ¶ Rosalind closes the book on her finger.
24 A She looks, at last, at the doctor.
25 D ROSALIND: You've got your father's habit.
26 D HELENE: Which one?
27 D ROSALIND: Asking the thing next to the thing.
28 A ¶ Helene does not answer.
* 29 A A nurse's cart rattles somewhere beyond the glass.
30 A In the pause, both of them reach for the call button at the same moment, hands touching on the plastic.
31 A They pull back.
32 D HELENE: I'll get it. ROSALIND ^I'll get it.
33 A ¶ Neither moves.
* 34 A The machine counts down another minute.
35 A Rosalind opens the book again, and Helene, after a moment, takes it gently from her hands, finds the place, and begins to read aloud, badly, in a low voice, to no one in particular.

### SCENE s00080_0 | EXT. SALT FLAT TELEGRAPH OFFICE - MIDDAY
Detected names (may be incomplete or contain aliases): ISAIAH CROW
* 1 A ¶ White ground.
* 2 A White sky.
* 3 A One shack.
* 4 A A wire running east into nothing.
5 A ¶ ISAIAH CROW (40s, duster, hat low) steps off a dust-caked horse.
6 A Ties it.
7 A Slow.
8 A Looks at the door.
* 9 A ¶ Shut.
10 A ¶ He knocks.

### SCENE s00080_1 | INT. TELEGRAPH OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): MAUDE PELLETIER, ISAIAH
* 1 A ¶ Dim.
* 2 A A key chattering on a desk.
3 A ¶ MAUDE PELLETIER (50s, sleeves rolled, ink on her fingers) taps without looking up.
* 4 A ¶ The door opens.
* 5 A Light cuts across the floor.
6 D ISAIAH: Afternoon.
7 D MAUDE: Afternoon.
8 A ¶ She keeps tapping.
9 D ISAIAH: Got a wire to send.
10 D MAUDE: Paper's on the left.
11 A ¶ He takes a sheet.
12 A Writes.
13 A Folds it.
14 A Sets it down.
15 A ¶ She reads without picking it up.
16 D MAUDE [CONT'D]: Two words.
17 D ISAIAH: It's all I need.
18 D MAUDE: Ninety cents.
19 A ¶ He counts coins onto the desk.
20 A She doesn't count them.
21 D MAUDE [CONT'D]: Coffee?
22 D ISAIAH: If it's made.
23 A ¶ She pours from a pot on a cold stove.
24 A Sets a tin cup near his hand.
25 A Her other hand stays under the desk.
26 D ISAIAH [CONT'D]: Your husband about?
27 D MAUDE: Out at the well.
28 D ISAIAH: Long walk.
29 D MAUDE: He likes it.
30 A ¶ He lifts the cup.
31 A Doesn't drink.
32 A Sets it down.
33 D ISAIAH: Funny. Well's dry since August.
* 34 A ¶ The key stops chattering.
35 A ¶ Maude's shoulders drop an inch.
36 D MAUDE: Then I suppose he won't be back.
* 37 A ¶ A pause.
* 38 A The wire hums.
39 A ¶ Isaiah turns the paper toward her.
* 40 A Two words in pencil: SHE KNOWS.
41 D ISAIAH: I'd say that's still true.
42 A ¶ Maude draws a revolver from beneath the desk.
43 A Lays it flat on the coins.
44 D MAUDE: Ninety cents. Sheriff.

### SCENE s00081_0 | INT. PIEROGI FACTORY - NIGHT SHIFT
Detected names (may be incomplete or contain aliases): RAFAL KOWALCZYK, TAMSIN OKORO, LINDGREN
* 1 A ¶ Steam.
* 2 A Conveyor belts of dough.
* 3 A Hairnets and hum.
4 A ¶ RAFAL KOWALCZYK (40s, detective, rumpled suit under a hairnet) squints at a freezer door.
5 A TAMSIN OKORO (30s, factory floor manager, clipboard, no patience) walks beside him.
6 D TAMSIN: Four minutes.
7 D RAFAL: You said that at the gate.
8 D TAMSIN: Four minutes at the gate. Four minutes now.
9 A ¶ They pass a bin of spinach filling.
10 A Rafal sniffs it.
11 A Winces.
12 D RAFAL: Who found the body?
13 D TAMSIN: Night packer. Quit on the spot.
14 D RAFAL: Name?
15 D TAMSIN: Gus. Everybody calls him the Ferret.
16 A ¶ Rafal nods.
17 A Writes.
* 18 A ¶ A belt jams.
* 19 A Alarm bleats.
20 A Tamsin pivots and kills it with one slap.
21 D TAMSIN [CONT'D] (to the floor): Back to your stations. Nothing to see.
22 A ¶ Workers drift.
23 A Rafal watches them go.
24 D RAFAL: Nothing.
25 D TAMSIN: I run a clean line.
26 D RAFAL: Somebody stuffed a man into your freezer.
27 D TAMSIN: Not on my line.
* 28 A ¶ At the end of the corridor, a hairnet bobs.
29 A GUS "THE FERRET" LINDGREN (50s, wiry, sleeves pulled over fists) hurries toward the exit.
30 D RAFAL: Hey.
31 A ¶ Gus quickens.
32 D RAFAL [CONT'D]: Mr. Lindgren.
33 A ¶ Gus sprints.
34 A Rafal vaults a bin of dough.
35 A Tamsin swears and follows.

### SCENE s00081_1 | INT. LOADING DOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): BIANCA DELACROIX-OYELARAN, GUS, RAFAL, TAMSIN
1 A ¶ Gus slams through the door and runs headlong into BIANCA DELACROIX-OYELARAN (30s, health inspector, white coat, clipboard of her own).
2 A Both go down.
3 D BIANCA: Watch it!
4 D GUS: Sorry, sorry, sorry.
5 A ¶ Rafal arrives, breathing hard.
6 A Tamsin right behind.
7 D RAFAL: Stay on the floor, both of you.
8 D TAMSIN (to Bianca): You are early.
9 D BIANCA (to Tamsin): You are in violation.
10 D RAFAL (to Gus): Where were you going?
11 D GUS: Home. I didn't see nothing.
12 D RAFAL: You saw the body.
13 D GUS: I saw a coat.
14 D BIANCA: What body?
15 D TAMSIN: There is no body.
16 D RAFAL: There is a body.
17 D TAMSIN: ^There is no body, and you have no warrant.
18 A ¶ They talk over each other.
19 A Gus scrambles up.
20 A Bianca writes.
21 A Rafal grabs Gus by the sleeve.
22 D RAFAL: Whose coat?
23 D GUS (wet-eyed): Hers.
24 A ¶ He points.
25 A At Tamsin.
* 26 A ¶ The loading dock goes quiet.
* 27 A A forklift beeps somewhere.
28 A Tamsin looks at her own coat.
* 29 A Zipped to the chin.
* 30 A Dry-cleaned.
* 31 A Perfect.
32 D TAMSIN: That is a lie.
33 D BIANCA (pen hovering): Is it?
34 A ¶ Tamsin steps backward.
35 A Rafal steps with her.
36 D RAFAL: Open the coat.
37 D TAMSIN: I will not.
38 D RAFAL: Open it.
39 A ¶ She doesn't.
40 A Gus whimpers.
41 A Bianca flips a page.
42 A Rafal reaches for the zipper.
43 A ¶ Tamsin's hand snaps out and clamps his wrist.
44 A Her knuckles whiten.
45 A For a heartbeat they stand locked like dancers.
46 A ¶ Then she lets go.
47 A Slides the zipper down.
* 48 A Underneath, the lining is torn, dark, and wet.
49 D TAMSIN: He wasn't supposed to be on shift.

### SCENE s00082 | INT. HAUNTED HOUSE CALL CENTER - DAY
Detected names (may be incomplete or contain aliases): HOLLIS PEMBERTON, YASMIN TARHAN, KENJI MORIMOTO, BEATRIX OYELOWO, REGIONAL VP DARIUS ACHTERBERG
* 1 A ¶ Cubicles painted black.
* 2 A Plastic cobwebs on the monitors.
* 3 A Headsets everywhere.
4 A ¶ HOLLIS PEMBERTON (50s, supervisor, cardigan) stirs coffee with a pen.
5 A YASMIN TARHAN (20s, headset) types fast.
6 A KENJI MORIMOTO (30s, headset) stares at a ceiling skeleton.
7 A BEATRIX OYELOWO (40s, headset, rosary around her wrist) murmurs into a script.
8 A ¶ Yasmin slams a key.
* 9 A The phones fall silent.
10 A Everyone turns.
11 D HOLLIS: Anyone.
* 12 A ¶ Nobody answers.
13 D KENJI: The line's gone dead.
14 D YASMIN: All of them.
* 15 A ¶ A door at the back swings open.
16 A REGIONAL VP DARIUS ACHTERBERG (60s, tailored suit, ghost-white skin) glides in and stops under the skeleton.
17 A He looks at each of them.
18 A His mouth is thin.
19 D DARIUS: Who scared the callers away?
20 A ¶ Hollis lowers his pen.
21 A Beatrix crosses herself.
22 A Kenji, very slowly, raises a finger at the skeleton.
23 D KENJI: It was already like that.
24 A ¶ Darius studies the skeleton.
25 A Then the pen in Hollis's hand.
26 A Then the pen's bite marks.
27 D DARIUS: Well done.
28 A ¶ He leaves.
* 29 A The phones ring all at once.

### SCENE s00083 | INT. OPERA HOUSE INFIRMARY - EVENING
Detected names (may be incomplete or contain aliases): SERGEANT BRONISLAW KRAJEWSKI, LIEUTENANT SIPHO MBEKI, NURSE FIONNUALA DOYLE, THE BOY, ILARIO
* 1 A ¶ The stalls have been torn out and replaced with rows of iron cots.
* 2 A Gilt cherubs look down over bandaged men.
* 3 A Through a blown-out window, a wintry sky the color of ash.
4 A ¶ SERGEANT BRONISLAW KRAJEWSKI (40s, thick moustache, arm in a sling) sits on the edge of a cot, mending a boot by lantern light.
5 A LIEUTENANT SIPHO MBEKI (30s, upright, clean spectacles) writes a letter on a drum case.
6 A NURSE FIONNUALA DOYLE (30s, red hair under a veil, sleeves rolled) kneels to change a dressing.
7 A ¶ A small figure sits cross-legged on the stage, back to them, a boy in a coat too big, watching the dust fall through the light.
* 8 A Nobody has asked him a thing.
9 D KRAJEWSKI: That one has not spoken since the bridge.
10 D MBEKI: Perhaps he has nothing to say.
11 D DOYLE: He ate. That is something.
12 D THE BOY (without turning): It was mine.
13 A ¶ They all stop.
14 A The boy does not move.
15 A Doyle stands.
16 D DOYLE: What was yours, love?
17 D THE BOY: The bread. You gave it to the other man. I only wanted to know why.
18 A ¶ Krajewski lowers the boot.
19 A Mbeki sets down his pen.
20 D MBEKI: What is your name, young man?
21 D THE BOY: Ilario.
22 D MBEKI: Ilario. A good name. Mine is Sipho.
23 D ILARIO (turning, finally): What does it mean?
24 D MBEKI: Gift.
25 A ¶ Ilario studies him.
26 A His eyes are very old.
27 D ILARIO: Then why does everyone here look as if they've lost one?
28 A ¶ Doyle sits on the stage beside him.
29 A Krajewski clears his throat, puts down the boot, and stands, one hand on his sling.
30 D KRAJEWSKI: Ilario. Come, eat with us.
31 A ¶ Ilario hesitates.
32 A Then he rises and walks to the cot, small and dignified.
33 A Krajewski tears the last of his own bread and hands him half.
34 A Mbeki sets aside the letter and pours three cups of water.

### SCENE s00084 | INT. DECOMMISSIONED PLANETARIUM - CORPORATE RETREAT - DAY
Detected names (may be incomplete or contain aliases): LORRAINE FAIRWEATHER, GIDEON OKPARA, MIKA TANAKA-BELL, SEBASTIAN VOGT, CFO, PERPETUA ALVAREZ, HR
* 1 A ¶ A great hollow dome, peeling and blue, its star projector slumped like a dead insect in the center of the floor.
* 2 A Folding chairs form a circle beneath a painted Milky Way.
* 3 A A banner reads TEAM ASCENT.
4 A ¶ LORRAINE FAIRWEATHER (50s, facilitator, silk scarf, voice made of honey) stands beside an easel.
5 A GIDEON OKPARA (40s, sales director, ironed jeans) slouches on a chair, ankle on knee.
6 A MIKA TANAKA-BELL (late 20s, analyst, sweating through a blazer) clutches a coffee.
7 A SEBASTIAN VOGT (60s, CFO, wire spectacles) sits as if posing for a portrait.
8 A PERPETUA ALVAREZ (30s, HR, lanyard, tight smile) guards the exit.
9 A ¶ She uncaps a marker and draws a star on the easel.
10 D LORRAINE: Gideon. What is the one word that describes your role?
11 D GIDEON: Closer.
12 D LORRAINE: Mika?
13 D MIKA: Um. Fine?
14 D LORRAINE: Be bolder, Mika.
15 D MIKA: Fine... ly bolder?
16 A ¶ Sebastian removes his spectacles and polishes them.
17 D SEBASTIAN: Lorraine, when does the feedback session begin?
18 D LORRAINE: That is the session, Sebastian.
19 D SEBASTIAN: Ah.
20 A ¶ Perpetua taps her watch.
* 21 A Nobody notices.
22 D LORRAINE: Now. Each of you will name the person on your left and say one true thing.
23 A ¶ Mika turns toward Gideon.
24 A Gideon turns toward Sebastian.
25 A Sebastian turns toward Perpetua.
26 A Perpetua turns toward Lorraine, who, in turn, faces Mika.
* 27 A The circle closes.
28 D GIDEON: Sebastian. You sign my expenses without reading them.
29 D SEBASTIAN: Perpetua. You have been planning your resignation for eleven weeks.
30 D PERPETUA: Lorraine. This planetarium has no heat.
31 D LORRAINE: Mika. You are the best of us.
32 A ¶ Mika bursts into tears, then into laughter.
33 A Gideon cracks first.
34 A Then Sebastian, a dry wheeze.
35 A Perpetua covers her mouth.
36 A Even Lorraine drops her marker.
37 A The dome picks up their noise and throws it back, a hundred times larger, until they are laughing at the stars.
38 D MIKA (wiping her eyes): Gideon, I think I love you all.
39 D GIDEON: Careful, Mika. That's how they get you.

### SCENE s00085 | INT. CAROUSEL WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): KALINDA RUSSO, OSCAR TREMBLAY, MOSES BELLAMY
* 1 A ¶ Painted horses hang from chains.
* 2 A Gilded poles.
* 3 A A calliope under a tarp.
* 4 A Dust in lamplight.
5 A ¶ KALINDA RUSSO (30s, black jumpsuit, tool roll) crouches at a floor panel.
6 A OSCAR TREMBLAY (50s, ex-clockmaker, magnifier on one eye) holds a flashlight steady.
7 A MOSES BELLAMY (20s, lookout, earbud) hovers by the door.
8 D KALINDA: Pry bar.
9 A ¶ Oscar hands it over.
10 A She slides the bar under the panel.
* 11 A Wood groans.
* 12 A A compartment opens.
* 13 A Inside, a velvet satchel.
14 D OSCAR: There she is.
15 D MOSES (whispering): Guys. Headlights.
16 A ¶ Both freeze.
* 17 A A white beam sweeps the window, slides across the horses, and passes on.
18 D KALINDA (exhaling): Keep breathing.
19 D MOSES: I am breathing!
20 D OSCAR: Quietly.
21 A ¶ Kalinda lifts the satchel.
22 A Weighs it in her palm.
23 A Frowns.
24 D KALINDA: Light.
25 D OSCAR: What?
26 D KALINDA: It's too light.
27 A ¶ She opens it.
* 28 A Inside lies a single brass key and a note.
29 A Oscar reads over her shoulder.
30 D OSCAR: "Try the horse."
31 D KALINDA: ^"Try the third horse."
32 A ¶ They speak the same line at the same instant.
33 A Moses stares from one to the other.
34 D MOSES: What third horse?
35 A ¶ All three turn.
* 36 A Above them, a carousel horse with a chipped blue mane.
37 A Kalinda climbs onto the platform.
38 A Oscar follows.
39 A Moses bolts after.
40 A They gather around the animal, and she turns the key in a hidden lock at the saddle.
* 41 A The belly pops open.
* 42 A Gold coins pour into her arms.
* 43 A ¶ A siren starts up outside.
44 D MOSES: Oh no.
45 D OSCAR: Oh yes.
46 A ¶ They scatter.
47 A Moses dives under the calliope tarp.
48 A Oscar slides behind a stack of poles.
49 A Kalinda leaps from the platform, hugging the coins, and vanishes between two rows of horses as the doors burst open.

### SCENE s00086 | INT. FERRY GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): ESTELLE MARCHAND, ARTHUR PENHALLOW, TILDA VANCE
* 1 A ¶ A cramped galley below decks, steel counters and swinging pots.
* 2 A The boat creaks.
* 3 A A single porthole shows black water.
4 A ¶ ESTELLE MARCHAND (50s, elegant, wearing her good coat in a kitchen) sits at the narrow table, stirring a cup of cold tea.
5 A ARTHUR PENHALLOW (60s, ship's cook, apron, forearms like rope) stands at the stove with his back to her, ladling soup.
6 D ESTELLE: You might have told me.
7 D ARTHUR: I would have.
8 D ESTELLE: When?
9 D ARTHUR: When it was true.
10 A ¶ She sets the spoon down.
11 A He stirs the pot.
* 12 A The ferry rocks.
13 D ESTELLE: It has been true for a year.
14 D ARTHUR: It has been possible for a year.
15 D ESTELLE: Arthur.
16 D ARTHUR: Estelle.
* 17 A ¶ The galley door swings open.
18 A TILDA VANCE (20s, deckhand, oilskin, red hands) comes in with a bucket and stops short.
19 D TILDA: Sorry. I can come back.
20 D ARTHUR: Stay. You'll want soup.
21 D ESTELLE: Do stay, dear. We were only discussing the weather.
22 D TILDA: It's bad out.
23 D ARTHUR: It is.
24 D ESTELLE: It's worse in here.
25 A ¶ Tilda looks from one to the other.
26 A She sets down the bucket.
27 D TILDA: Should I--
28 D ARTHUR: Take a bowl.
29 D ESTELLE: Take two.
30 D TILDA: Okay.
31 D ARTHUR (to Estelle): You could have written.
32 D ESTELLE (to Arthur): You could have answered.
33 D TILDA (halfway through a mouthful): This is really good soup.
34 A ¶ Arthur and Estelle turn together and look at her.
35 A Tilda sets down the spoon.
36 D TILDA [CONT'D]: I'll just--
37 D ARTHUR: Eat.
38 D ESTELLE: Eat, child.
39 A ¶ She does.
* 40 A The ferry groans in the swell, and somewhere above them a horn sounds, long and low, for a harbor they cannot see.

### SCENE s00087 | INT. HYPERBARIC CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI ESCOBEDO, PAUL ZIELINSKI, TECH ARDEN FLETCHER, CHARGE NURSE BIRGITTA
* 1 A ¶ Steel hull.
* 2 A Porthole glass.
* 3 A Pipes that shudder as pressure climbs.
4 A ¶ DR. NAOMI ESCOBEDO (40s, scrubs, calm eyes) adjusts a valve while PAUL ZIELINSKI (60s, diver, wrapped in a thin blanket) stares at the gauge and TECH ARDEN FLETCHER (20s, headset, ponytail) logs numbers on a clipboard beyond the porthole, tapping the glass whenever the needle moves.
5 D CHARGE NURSE BIRGITTA [V.O.] (intercom): Chamber, status?
6 D NAOMI: Two atmospheres. Holding.
7 D PAUL: Twice the weight on my chest. Same as the day I surfaced too fast.
8 D NAOMI: You came up in eleven minutes. Nobody does that and walks.
9 D PAUL: I walked.
10 D NAOMI: You crawled. I read the report.
11 D PAUL: I don't remember crawling.
12 D NAOMI: You will tomorrow.
13 D PAUL: Will I.
14 D NAOMI: That's what we do here.
15 D BIRGITTA [V.O.] (intercom): Doctor, ten minutes remaining.
16 D NAOMI: Copy.

### SCENE s00088 | EXT. WHALE-RIB BRIDGE TOLLHOUSE - DUSK
Detected names (may be incomplete or contain aliases): BRYNMOR ASHDOWN, TALLIS WREN
* 1 A ¶ A bridge arches across a canyon of drifting violet fog.
* 2 A Its span is made of the ribs of some ancient leviathan, bleached bone-white and lashed together with silver rope.
* 3 A At its near end stands a crooked tollhouse of driftwood and green glass, a single lantern burning in its window.
4 A ¶ BRYNMOR ASHDOWN (60s, weathered, long grey coat, a ring of keys at his belt) sits on the tollhouse step, whittling.
* 5 A A kettle hisses on a tiny stove at his feet.
* 6 A The fog below breathes in and out like a sleeping animal.
7 A ¶ Far down the bridge, a figure appears, a shape resolving from the mist, leaning on a staff.
8 A ¶ TALLIS WREN (30s, pilgrim's cloak, boots patched with cloth) walks slowly, the bone ringing softly under each step.
9 A He reaches the step and stops.
10 A He does not look at Brynmor's face.
11 D TALLIS: Is this the toll?
12 D BRYNMOR: It is a toll.
13 D TALLIS: What does he ask?
14 D BRYNMOR: A true thing. Not a large one.
15 A ¶ Tallis lowers his hood.
16 A His beard is young, his eyes tired.
17 A He considers.
18 D TALLIS: I am afraid I will not finish.
19 D BRYNMOR: Finish what?
20 D TALLIS: Anything.
21 A ¶ Brynmor puts down the knife.
22 A He pours tea into two tin cups, his hands slow and steady, and hands one up.
23 D BRYNMOR: That will do.
24 D TALLIS: It was not much.
25 D BRYNMOR: It was true. He is not greedy.
26 A ¶ Tallis takes the cup.
* 27 A The steam drifts between them.
* 28 A Behind them the fog sighs, and one of the ribs hums a long, low note in the rising wind.
29 D TALLIS: How many cross?
30 D BRYNMOR: Fewer than cross back.
31 A ¶ Tallis drinks.
32 A His eyes close.
33 A When he opens them, the lantern has brightened, and the far end of the bridge, which was dark, shows one small light.
34 D BRYNMOR [CONT'D]: Go on. He is waiting. He is not so fierce.
35 D TALLIS (setting down the cup): Thank you.
36 D BRYNMOR: Mind the fourth rib. It sings when it is lonely.

### SCENE s00089_0 | EXT. SUDS CITY CAR WASH - NIGHT
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ Neon blue.
* 2 A Wet concrete.
* 3 A A tunnel of spinning brushes humming in the dark.
* 4 A An empty lot beyond.

### SCENE s00089_1 | INT. CAR WASH OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): DESHAWN MCALLISTER, LUCIA FERREIRA-KANG, OBUYA
* 1 A ¶ A closet with a space heater, a cracked radio, a wall of keys.
2 A DESHAWN MCALLISTER (18, graduation gown unzipped over a polo, name tag reading "DESHAWN") counts out a till.
3 A LUCIA FERREIRA-KANG (18, same gown, mascara smudged) perches on a stool, shoes in her lap.
4 D LUCIA: You work here every Friday?
5 D DESHAWN: Every night.
6 D LUCIA: Even tonight?
7 D DESHAWN: Especially.
8 A ¶ Lucia turns the radio dial.
* 9 A Static, then a slow song.
10 A She leaves it.
11 D LUCIA: They called your name.
12 D DESHAWN: I know. I was there.
13 D LUCIA: I mean it was loud. Your section.
14 D DESHAWN: My mom brought the airhorn.
15 D LUCIA: Of course she did.
16 A ¶ He nearly smiles.
17 A Folds the till into a canvas bag.
18 D LUCIA [CONT'D]: My dad didn't come.
19 D DESHAWN: I'm sorry.
20 D LUCIA: It's fine.
21 D DESHAWN: It's not.
22 D LUCIA: No. It's not.
23 A ¶ She looks at the shoes in her lap.
24 A He busies himself with the keys.
25 D DESHAWN: You hungry?
26 D LUCIA: I could eat.
27 D DESHAWN: There's a place by the freeway. Pancakes.
28 D LUCIA: It's eleven p.m.
29 D DESHAWN: That's when they're best.
* 30 A ¶ A knock.
31 A They both turn.
32 A ¶ MR. OBUYA (60s, owner, windbreaker, flashlight) leans in the doorway.
33 D MR. OBUYA: Deshawn. Why is the tunnel still running?
34 D DESHAWN: I thought you wanted it warm.
35 D MR. OBUYA: I wanted it empty. Shut it down.
36 D DESHAWN: Yes, sir.
37 A ¶ Mr. Obuya looks at Lucia.
38 A At the gown.
39 A At the shoes.
40 D MR. OBUYA: Congratulations.
41 D LUCIA: Thank you.
42 D MR. OBUYA: Both of you.
43 A ¶ He goes.
44 A Deshawn exhales.
45 A Lucia unfolds from the stool.
46 D LUCIA: Would you get fired?
47 D DESHAWN: Probably not.
48 D LUCIA: But you'd tell me if you would.
49 D DESHAWN: No.
50 A ¶ She laughs, shaky.
51 A He holds the door.
52 A They step into the neon and the tunnel hums, spinning for nobody.

### SCENE s00089_2 | EXT. CAR WASH LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): LUCIA, DESHAWN
1 A ¶ Deshawn hits a breaker.
* 2 A The brushes slow.
* 3 A Stop.
* 4 A The silence is enormous.
5 D LUCIA: That was loud.
6 D DESHAWN: That was nothing.
7 A ¶ She shrugs off her gown and drapes it on the hood of a stranger's car.
* 8 A Hers, her father's idea of a car, a long dead sedan.
9 A After a moment, he does the same.
10 D LUCIA: Pancakes.
11 D DESHAWN: Pancakes.
12 A ¶ They walk toward the road.
* 13 A Behind them, the neon buzzes and goes out.

### SCENE s00090 | INT. COUNTY HOSPITAL - POLIO WARD - NIGHT
Detected names (may be incomplete or contain aliases): ALISTAIR VANCE-HOLLOWAY, NURSE BERNADETTE OKONJO, THEODORA LINDQUIST, CASPER WU, CHAPLAIN AUGUSTUS DELACROIX-BENNETT
* 1 A ¶ Iron lungs line the room like a row of steel whales.
* 2 A Green light.
* 3 A A ceiling fan turns slowly.
* 4 A A radio murmurs a dance tune from a distant city.
5 A ¶ DR. ALISTAIR VANCE-HOLLOWAY (50s, tall, courteous, bow tie loosened) pauses at the foot of a bed with a chart.
6 A NURSE BERNADETTE OKONJO (40s, starched cap, quick hands) adjusts a dial on the nearest machine.
7 A MRS. THEODORA LINDQUIST (60s, wool coat, handbag in both hands) sits very straight on a visitor's chair.
8 A CASPER WU (20s, medical student, borrowed white coat) stands by the door, taking notes.
9 A CHAPLAIN AUGUSTUS DELACROIX-BENNETT (70s, soft voice, stole around his neck) kneels in prayer at a bedside.
10 A ¶ He reads the chart a long time.
11 A Mrs. Lindquist watches him.
12 A Nurse Okonjo does not.
13 D MRS. LINDQUIST: He seems comfortable.
14 D DR. VANCE-HOLLOWAY: He is resting.
15 D MRS. LINDQUIST: That is not the same thing.
16 D DR. VANCE-HOLLOWAY: No. It is not.
17 A ¶ She nods, grateful for the honesty.
18 A He closes the chart.
19 D CASPER (low): Doctor, the pressure reading on bed six--
20 D DR. VANCE-HOLLOWAY: Later, Mr. Wu.
21 D CASPER: Yes, sir.
22 A ¶ Okonjo crosses to the window.
* 23 A The blinds are drawn.
24 A She tugs a cord and the slats rise.
25 A Moonlight spills onto the machine, silvering the boy inside, who sleeps with his mouth a little open.
26 D NURSE OKONJO: His color is better.
27 D MRS. LINDQUIST: Is it?
28 D NURSE OKONJO: Pink in the cheeks.
29 A ¶ Dr. Vance-Holloway steps closer.
30 A He lifts the boy's wrist.
* 31 A A long moment.
32 D DR. VANCE-HOLLOWAY: Nurse. The oxygen.
33 D NURSE OKONJO: Already, Doctor.
34 A ¶ She is turning a valve.
35 A He does not say what she did, and she does not say what she saw.
36 A Casper looks from one to the other, understanding nothing, then too much.
37 D CASPER: Doctor?
38 D DR. VANCE-HOLLOWAY: Fetch the Chaplain.
39 D CASPER: He's here.
40 D DR. VANCE-HOLLOWAY: Then bring him.
41 A ¶ Casper crosses the room.
42 A The Chaplain looks up from his prayer before he arrives.
43 D CHAPLAIN DELACROIX-BENNETT: I know.
44 A ¶ He rises, creaking, and takes Mrs. Lindquist's hand.
45 A She stares at it without understanding.
46 A Then the radio gives a bright trumpet note, and Mrs. Lindquist rises, breath catching, and lets the handbag fall.
47 D MRS. LINDQUIST: No.
48 D DR. VANCE-HOLLOWAY: Mrs. Lindquist.
49 D MRS. LINDQUIST: He was pink. She said he was pink.
50 D NURSE OKONJO (quietly): He was, ma'am.
51 A ¶ Mrs. Lindquist crosses to the bed.
52 A Puts a hand on the cold steel.
* 53 A The machine wheezes its steady wheeze, pushing air into a chest that no longer asks.
54 D DR. VANCE-HOLLOWAY: I am so sorry.
55 A ¶ She does not turn.
* 56 A Nobody speaks.
* 57 A In the corner, the radio plays on, a waltz, cheerful and absurd.
58 A Nurse Okonjo crosses and switches it off, and the silence that follows is the loudest thing in the ward.

### SCENE s00092 | INT. LUNAR GREENHOUSE - ARTIFICIAL NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN VASQUEZ-LEE, ANTON BERGSTROM
* 1 A ¶ A vast pressurized dome of hydroponic trays under violet grow-lamps.
* 2 A Rows of tomato vines climb strings toward the glass.
* 3 A Beyond the dome, the grey regolith and a hard, bright Earth.
4 A ¶ IMOGEN VASQUEZ-LEE (40s, station botanist, rolled sleeves, soil under her nails) kneels between two trays with a pair of pruning shears.
5 A She is slight and quick, her hair held by a pencil.
6 A ANTON BERGSTROM (50s, systems engineer, thick glasses, a tablet always in hand) stands at the far end checking the irrigation readouts, wearing a sweater with a hole in one elbow.
7 A ¶ Both are very tired.
8 A Neither says so.
9 D ANTON: Pump three is running hot.
10 D IMOGEN: Tell it to calm down.
11 D ANTON: It doesn't take advice.
12 D IMOGEN: Neither do the tomatoes.
13 A ¶ She snips a withered leaf.
14 A Drops it in a bucket.
15 A Anton taps the tablet.
* 16 A The lamps pulse a half-second slower.
17 D ANTON: That's the fourth flicker today.
18 D IMOGEN: I counted six.
19 D ANTON: You counted the ones I didn't.
20 A ¶ She stands, stretches her back, and wanders down the row toward him, trailing a hand through the leaves.
21 D IMOGEN: Do you ever hear them?
22 D ANTON: The plants?
23 D IMOGEN: The stems. When the lamps come on. A kind of ticking.
24 D ANTON: That's the heat.
25 D IMOGEN: I know it's the heat.
26 A ¶ They stand a moment in the violet light.
27 D ANTON: Imogen.
28 D IMOGEN: Yes.
29 D ANTON: You've been in here eighteen hours.
30 D IMOGEN: They don't water themselves.
31 D ANTON: Actually, they do. That's my entire job.
32 A ¶ She laughs, a short cough of a sound.
33 A He nearly smiles.
* 34 A ¶ The lights shudder.
35 A Both look up.
* 36 A A distant thud rolls through the dome, a bolt shaken loose in the airlock.
* 37 A The vines sway, then settle.
* 38 A The tablet in Anton's hand goes dark, and so does the row of lamps.
* 39 A For three heartbeats there is only the white wash of Earthlight on the leaves.
40 D IMOGEN [CONT'D] (whispering): Don't move.
41 D ANTON: I wasn't going to.
* 42 A ¶ The lamps flare back to life one by one.
43 A Imogen exhales.
44 A Anton wipes his glasses on the hole in his sweater.
45 A They look at each other, then at the trays, and then both go back to work without another word, side by side, snipping and tapping in the purple dark.
46 D ANTON [CONT'D]: Pump three.
47 D IMOGEN: Go.
48 A ¶ He crosses to a panel and thumps it with the heel of his hand.
* 49 A A pump coughs.
* 50 A Water begins to run.
51 A Imogen reaches out and touches a ripening tomato.
* 52 A It is perfectly, impossibly red.
53 D IMOGEN [CONT'D]: Anton.
54 D ANTON (from the panel): Mm.
55 D IMOGEN: Come and see.
56 A ¶ He walks over.
57 A She plucks the fruit, wipes it on her sleeve, and hands it to him.
58 A He looks at it for a long time.
59 A Then he takes a bite, and the juice runs down his chin, and neither of them says a word.

### SCENE s00093 | INT. BIRTHDAY PARTY BACKYARD - DAY
Detected names (may be incomplete or contain aliases): WALDO PIMM, BERNICE PLUMMER-ASANTE
* 1 A ¶ Balloons.
* 2 A Folding tables.
* 3 A A bouncy castle deflating in the corner.
4 A Forty children, screaming.
5 A ¶ WALDO PIMM (40s, sequined vest, top hat, rabbit in a cage) stands on a milk crate, juggling three oranges.
* 6 A One slips.
7 A He catches it with his chin.
8 D WALDO (to the kids): Ladies and gentlemen! The Great Waldo!
9 A ¶ A child screams.
10 A Another cries.
11 A A third throws cake.
12 D WALDO [CONT'D] (muttering): Sixty dollars. Sixty dollars. Sixty dollars.
13 A ¶ He pulls a scarf from his sleeve.
* 14 A It keeps coming.
* 15 A Yards of it.
16 A He tugs.
17 A Tugs.
18 A Out comes a second scarf, then a third, tied together, and finally a live parakeet that flies straight over the fence.
19 D WALDO [CONT'D] (to the sky): That was Gerald.
20 A ¶ A woman's voice calls from the gate.
21 A ¶ BERNICE PLUMMER-ASANTE (70s, sunhat, enormous handbag) pushes through, waving a rolled newspaper at Waldo, who ducks.
22 A The rabbit escapes its cage, hops across the lawn, and disappears under the cake table.
23 A Bernice swings and misses.
24 A Waldo vaults the crate, a child grabs his cape, and the three of them end up in a heap beside the bouncy castle, the castle sighing down on top of them.
25 D BERNICE: You owe me for the parakeet!
26 D WALDO (muffled): He's a free spirit!

### SCENE s00094 | EXT. ROOFTOP APIARY - GOLDEN HOUR
Detected names (may be incomplete or contain aliases): AMARA OKEKE, THEO BALASUBRAMANIAN, GRANDMOTHER NNEKA
* 1 A ¶ Hives like pastel filing cabinets.
* 2 A Bees drift over the city skyline.
* 3 A A string of bulbs sways overhead.
4 A ¶ AMARA OKEKE (30s, veil pushed back, honey on her wrist) lifts a frame heavy with comb.
5 A THEO BALASUBRAMANIAN (30s, borrowed veil, delighted) stands too close, holding a smoker he has not lit.
6 D AMARA: Step back.
7 D THEO: I'm fine.
8 D AMARA: You're stepping on the queen's door.
9 D THEO: I'm sorry, Your Majesty.
10 A ¶ She laughs.
11 A He lights the smoker.
* 12 A A white plume.
13 D AMARA: Gently.
14 D THEO: Always.
* 15 A ¶ The stairwell door bangs.
16 A GRANDMOTHER NNEKA (80s, floral housecoat, cane, a shopping bag) hobbles onto the roof.
17 D NNEKA: Amara!
18 D AMARA: Mama?
19 D THEO: Hello, ma'am.
20 D NNEKA: Who is the boy?
21 D AMARA: It's Theo, Mama. I told you.
22 D NNEKA: You told me Thursday.
23 D THEO: Today is Thursday.
24 D NNEKA: Then I am on time.
25 A ¶ She sets the bag on a hive.
26 A Amara lunges to catch it.
27 D AMARA: Mama! Not there.
28 D NNEKA: It's only plantains.
29 D THEO: They'll love the plantains.
30 D NNEKA: They better. Come, boy. Eat.

### SCENE s00095 | INT. DEAD MAN'S TACKLE SHOP - BACK ROOM - DAY
Detected names (may be incomplete or contain aliases): GLORIA ESPINOSA-WRAY, RAUL
* 1 A ¶ Rods in racks.
* 2 A Tins of lures.
* 3 A A calendar from 2009.
* 4 A Dust motes in a shaft of window light.
5 A ¶ GLORIA ESPINOSA-WRAY (60s, widow's black, silver bun) sits on an upturned bucket, a shoebox in her lap.
6 A Her son RAUL (30s, work shirt, wedding ring turned the wrong way) stands at the workbench, sorting reels into a crate.
7 A ¶ Neither speaks.
8 A ¶ He lifts a reel.
9 A Examines it.
10 A Sets it down.
11 D RAUL: This one's good.
12 D GLORIA: Your father cursed that one.
13 D RAUL: He cursed all of them.
14 D GLORIA: He cursed them gently.
15 A ¶ Raul almost laughs.
16 A He doesn't.
17 D RAUL: I can have the shop listed by Friday.
18 D GLORIA: Do what you want.
19 D RAUL: It's your shop.
20 D GLORIA: It was his shop.
21 D RAUL: Ma.
22 D GLORIA (opening the shoebox): You didn't come.
23 D RAUL: I came to the funeral.
24 D GLORIA: You didn't come in March.
25 D RAUL: I was working.
26 D GLORIA: He asked.
27 D RAUL: I know he asked.
28 D GLORIA: He asked every day.
29 D RAUL: And I said I'd come.
30 D GLORIA: And you said you'd come.
* 31 A ¶ A drip from the ceiling.
* 32 A A bucket catches it.
33 A Gloria lifts a photograph from the box.
* 34 A A boy on a pier, grinning with a fish too big for him.
35 D GLORIA [CONT'D]: Look.
36 A ¶ He doesn't.
37 D RAUL: I don't want to.
38 D GLORIA: You were eight.
39 D RAUL: I remember.
40 D GLORIA: He kept it in the register. Under the tray.
41 D RAUL: That's stupid.
42 D GLORIA: It's what he did.
43 D RAUL: He'd have let me know. If it mattered.
44 D GLORIA: He did let you know. Every day. By asking.
45 A ¶ Raul grips the bench.
46 A The knuckles go white.
* 47 A A reel falls from the crate and rolls across the floor.
48 D RAUL: You think I don't know that? GLORIA ^You think I don't know what you think?
49 A ¶ Their voices overlap and collide.
50 A They stop.
51 A Gloria sets down the photograph.
52 D GLORIA [CONT'D]: Sit.
53 D RAUL: I'm fine.
54 D GLORIA: Sit.
55 A ¶ He sits on a crate.
56 A Hands between his knees.
57 D RAUL: I was scared.
58 D GLORIA: Of what?
59 D RAUL: Of seeing him small.
60 D GLORIA: He wasn't small.
61 D RAUL: He was. Ma. In the photos you sent, he was.
62 D GLORIA: He was still your father.
63 D RAUL: That's the thing.
64 D GLORIA: What?
65 D RAUL: I wanted him to stay the one with the fish.
66 D GLORIA (very quietly): Oh, Raul.
67 A ¶ He bends forward, forehead on his fists.
68 A Gloria sets the box aside, crosses the room in her slow black shoes, and rests a hand on the back of his neck, the way you steady a young horse.
* 69 A The drip falls into the bucket, steady as a clock.
70 D RAUL: I should've come.
71 D GLORIA: Yes.
72 D RAUL: That's it? Yes?
73 D GLORIA: You want me to say it was fine?
74 D RAUL: I want you to say something.
75 D GLORIA: Help me pack the rods.
76 A ¶ He wipes his face on his sleeve.
77 A Stands.
78 A Takes one end of the long rod rack.
79 A She takes the other.
80 A They carry it out into the light, not looking at each other, the way people do who have finally said enough.

### SCENE s00096 | INT. DEEP-SEA HABITAT "THRESHOLD" - MAIN CABIN - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): NADIRA SHARIFOVA, PETRUS VAN DER LINDE, QUILL
* 1 A ¶ A curved steel cylinder lined with cables, plastic crates, and pipe.
* 2 A Portholes the size of dinner plates show nothing but black water.
* 3 A A single red emergency lamp pulses at the far bulkhead.
4 A ¶ NADIRA SHARIFOVA (40s, habitat commander, close-cropped hair, a mug that reads WORLD'S OKAYEST BOSS) stands at the central console.
5 A PETRUS VAN DER LINDE (50s, pressure technician, ginger beard gone grey at the chin) kneels beside an open floor panel, a wrench in each hand.
6 A QUILL (20s, oceanographer, real name Quillon Adeyemi, dreadlocks tied up in a net) bends over a bank of sonar monitors, headphones around his neck.
7 D NADIRA (to the room): Eyes up, everyone. Status report.
8 D PETRUS: Seal four is weeping.
9 D QUILL: Sonar's reading something big.
10 D NADIRA: How big?
11 D QUILL: Bigger than us.
12 A ¶ Nadira sets down her mug.
13 D NADIRA (to Quill): Define "something."
14 D QUILL: It's moving. Slowly. Circling.
15 D PETRUS (muttering, to himself): Not today. Not today. Not today.
16 A ¶ He tightens a bolt.
17 A A thin jet of water hisses at his wrist, and he curses and clamps a hand over it.
18 A Nadira drops beside him and slaps a patch over the leak.
19 D NADIRA: Hold it.
20 D PETRUS: I am holding it.
21 D NADIRA: Hold it harder.
* 22 A ¶ The emergency lamp pulses faster.
23 A Quill removes his headphones, puts them back on, and removes them again.
24 D QUILL: It's gone.
25 D NADIRA: Gone where?
26 D QUILL: Just gone. Vanished off the screen.
* 27 A ¶ The hull shudders.
* 28 A A deep, resonant note rolls through the walls, like a cello string the size of a whale.
29 A Everyone freezes.
* 30 A Dust drifts from the ceiling.
31 A Petrus lets go of the patch, and it holds.
32 D PETRUS (whispering): That was no engine.
33 D QUILL (whispering): That was a song.
34 D NADIRA (to everyone, quietly): Nobody panic.
35 A ¶ She looks at the nearest porthole.
* 36 A A vast, pale eye slides past the glass, unblinking, then drifts into the dark.
37 D QUILL (grinning, helpless): That's a sperm whale.
38 D PETRUS: It's enormous.
39 D NADIRA (to herself): Of course it is.
40 A ¶ She retrieves her mug and takes a long, slow sip.
41 A Her hand shakes only a little.

### SCENE s00097 | INT. RETROFITTED SCHOOL BUS BRIDAL SHOP - DAY
Detected names (may be incomplete or contain aliases): PHILOMENA TRASK, GWENDOLYN OSEI-MARTINSEN, LUCIEN FAURE, IMANI REYNOLDS, BARTHOLOMEW FINCH, AUNT CORDELIA
* 1 A ¶ A yellow school bus gutted and rebuilt as a boutique: tulle hung from the luggage racks, chandeliers swaying from the ceiling, a three-way mirror bolted where the driver's seat used to be.
* 2 A Sunlight falls through the stop-sign window in a red octagon on the floor.
3 A ¶ PHILOMENA TRASK (30s, bride, hair half-pinned, bare feet) stands on a milk crate in a billowing gown.
4 A GWENDOLYN OSEI-MARTINSEN (60s, shop owner, pins in her mouth, measuring tape like a stole) kneels at the hem.
5 A LUCIEN FAURE (30s, best man, tuxedo jacket over jeans) lounges on a bench seat eating a muffin.
6 A IMANI REYNOLDS (20s, maid of honor, phone in hand) paces the aisle.
7 A BARTHOLOMEW FINCH (70s, bus driver, still in uniform, newspaper) sits at the wheel, pretending to read.
8 D GWENDOLYN (around the pins): Arms up.
9 D PHILOMENA: They are up.
10 D GWENDOLYN: Up like you mean it.
11 A ¶ Philomena raises her arms.
* 12 A The dress gapes.
13 A Imani gasps.
14 D IMANI: It's too big!
15 D LUCIEN (mouth full): It's perfect.
16 A ¶ Imani and Philomena speak together.
17 D IMANI: It's not perfect!
18 D PHILOMENA: ^I love it!
19 A ¶ They stop.
20 A Look at each other.
21 A Imani's phone rings.
22 A She answers, thumb flying.
23 D AUNT CORDELIA [V.O.] (over speaker, crackling): Is she in the dress? I want a photo. Don't let her cry. She'll cry.
24 D PHILOMENA: I'm not crying.
25 D AUNT CORDELIA [V.O.]: Is she crying?
26 D IMANI: A little.
27 D PHILOMENA: I'm not!
28 A ¶ She is.
29 A Gwendolyn stands, spits the pins into her palm, and wipes the bride's cheek with the measuring tape.
30 D GWENDOLYN: Hush, child.
31 A ¶ Bartholomew lowers the newspaper.
32 D BARTHOLOMEW: Are we leaving, or what?
33 D GWENDOLYN (to the room): We are fitting a bride!
34 D BARTHOLOMEW (to his paper): Fitting a bride in a bus. My mother would never.
35 A ¶ Lucien licks muffin from his thumb.
36 D LUCIEN: Phil, honestly. You look like a lighthouse.
37 D PHILOMENA: That's not a compliment.
38 D LUCIEN: It is where I'm from.
* 39 A ¶ Everything seems fine.
* 40 A The chandeliers tinkle.
* 41 A The sun burns the floor.
42 A Philomena steps off the crate and walks the aisle, the gown dragging behind her like a wake.
* 43 A ¶ Then the bus lurches.
* 44 A The engine coughs and catches.
* 45 A Bartholomew is leaning on the wheel, and one foot is flat on the accelerator.
46 D BARTHOLOMEW (with great calm): Hold on.
47 A ¶ Everyone stumbles.
* 48 A The bus rolls forward.
49 A Gwendolyn grabs a rack.
50 A Imani drops the phone.
* 51 A Lucien's muffin lands in Philomena's veil.
* 52 A The bus rolls through the garage doors and into the street, a wedding on wheels, tulle streaming out the windows like a flag.
53 D AUNT CORDELIA [V.O.] (from the phone, on the floor): Hello? Is the bus moving?

### SCENE s00098 | INT. MATTRESS WAREHOUSE - MAILROOM - DAY
Detected names (may be incomplete or contain aliases): THE INTERN, PRUDENCE KALLIS, ANDRZEJ NOWICKI-FAYE, ROSCOE
* 1 A ¶ Stacks of boxed queens and kings reach the rafters.
* 2 A A conveyor rattles.
* 3 A Fluorescent light buzzes over steel shelving.
4 A ¶ THE INTERN (19, stiff new polo, name tag blank) stands in the doorway holding a manila envelope like a live fish.
5 A ¶ MS. PRUDENCE KALLIS (50s, cardigan, reading glasses on a beaded chain) sorts parcels at the counter.
6 A ANDRZEJ NOWICKI-FAYE (40s, forklift gloves tucked in his belt) sits on a pallet, eating a sandwich in precise bites.
7 A ¶ Nobody speaks.
* 8 A The conveyor rattles.
9 D THE INTERN: Um. Hi. I was told to report here.
10 D PRUDENCE: By whom?
11 D THE INTERN: A man in a tie.
12 D PRUDENCE: They all wear ties.
13 A ¶ She does not look up.
14 A Andrzej chews.
15 A The Intern steps into the room and sets the envelope on the counter.
16 D THE INTERN: It says to give you this.
17 A ¶ Prudence slits it open with a letter opener.
18 A Reads.
19 A Her mouth thins.
20 D PRUDENCE: Roscoe.
21 D THE INTERN: Sorry?
22 D PRUDENCE: It says here your name is Roscoe.
23 D ROSCOE (startled): Oh. Yes. Roscoe. Hi.
24 D ANDRZEJ: Roscoe.
25 D PRUDENCE: Roscoe, welcome to the mailroom.
26 D ROSCOE: Thanks. What do I do?
27 D PRUDENCE: You stand.
28 D ROSCOE: Stand?
29 D ANDRZEJ: You stand. You wait. You deliver nothing.
30 D ROSCOE: That's it?
31 D PRUDENCE: Seventeen years, and that is the entire job.
32 A ¶ Andrzej folds his sandwich paper into a perfect square.
33 A Prudence slides the envelope into a drawer already full of identical ones.
34 A Roscoe adjusts his name tag, which still says nothing.
* 35 A The conveyor rattles on.
36 D ROSCOE: Is there a handbook?
37 D ANDRZEJ: There's a mattress.
38 A ¶ He points.
* 39 A In the corner, between two stacks of boxes, a single twin bed made up with a grey blanket.
* 40 A A small nest of mail beside it.
41 D ROSCOE: Does someone sleep here?
42 D PRUDENCE: Not tonight.

### SCENE s00099 | INT. NIGHT TRAIN - SLEEPER COMPARTMENT - NIGHT
Detected names (may be incomplete or contain aliases): CLEMENCE ARDOIN, SULEIMAN HADDAD
* 1 A ¶ A narrow cabin of dark wood and brass.
* 2 A Two bunks.
* 3 A A lamp swings with the rails.
* 4 A Rain slides sideways down the window.
5 A ¶ CLEMENCE ARDOIN (30s, wool coat, hair undone) sits on the lower bunk with her shoes still on.
6 A SULEIMAN HADDAD (30s, travel-worn suit, a single suitcase) stands at the window with his back to her.
7 A He does not turn.
8 A ¶ She watches the back of his neck.
9 A He watches the dark.
10 D CLEMENCE: You could have taken another car.
11 D SULEIMAN: There was no other car.
12 D CLEMENCE: There's always another car.
13 D SULEIMAN: Not at two in the morning.
14 D CLEMENCE: You didn't ask.
15 D SULEIMAN: Neither did you.
* 16 A ¶ The rails clack.
17 A She smooths her skirt.
18 A He loosens his tie, pulls it off, folds it once, twice, and tucks it in his pocket.
19 D CLEMENCE: Tell me why you came.
20 D SULEIMAN: I told you.
21 D CLEMENCE: You told me a story about a conference.
22 D SULEIMAN: It was a good conference.
23 D CLEMENCE: In Lyon. Where I live.
24 D SULEIMAN: It's a big city.
25 D CLEMENCE: Suleiman.
26 D SULEIMAN: Clemence.
27 D CLEMENCE: Say it.
28 D SULEIMAN: I got on the wrong train.
29 D CLEMENCE: You got on the right one.
30 D SULEIMAN: That's worse.
31 D CLEMENCE: Yes.
32 A ¶ He finally turns.
* 33 A The lamp lights half his face.
34 A She is already standing.
35 A They are closer than either planned.
36 D SULEIMAN: Six years.
37 D CLEMENCE: Seven in March.
38 D SULEIMAN: You counted.
39 D CLEMENCE: You didn't?
40 D SULEIMAN: Every day.
41 D CLEMENCE: Then why is this the first time?
42 D SULEIMAN: Because you would have said no.
43 D CLEMENCE: I might have said yes.
44 D SULEIMAN: Might.
45 D CLEMENCE: Might.
* 46 A ¶ The train screams around a curve and throws her against his chest.
47 A He catches her.
48 A Neither lets go.
49 D CLEMENCE [CONT'D]: That was an accident.
50 D SULEIMAN: I know.
51 D CLEMENCE: I'm not sorry.
52 D SULEIMAN: Neither am I.
53 A ¶ She slaps him, hard, across the cheek.
54 A He doesn't flinch.
55 A She slaps him again, and then she is crying, and then she is holding onto his lapels, and he says her name into her hair, again and again, as the rain beats on the glass and the train carries them toward a station neither of them knows.

### SCENE s00100 | INT. FARMHOUSE KITCHEN - AUCTION DAY
Detected names (may be incomplete or contain aliases): IVO LANDRY, PETRA SZABO, DOLORES NKRUMAH, ANSELM WHITFIELD, KIRSTEN BJORNSEN
* 1 A ¶ Oilcloth on the table.
* 2 A Ladder-back chairs.
* 3 A A wall clock that ran slow for fifty years.
* 4 A Outside, through the screen door, trucks and auctioneer chatter in the yard.
5 A ¶ Five siblings crowd the room.
6 A IVO LANDRY (50s, eldest, Sunday jacket, no tie) stands at the counter packing a box of cutlery.
7 A PETRA SZABO (40s, nurse's clogs, keys in a fist) leans on the sink, arms crossed.
8 A DOLORES NKRUMAH (late 30s, silk blouse, phone face-down on the table) sits in their mother's chair.
9 A ANSELM WHITFIELD (30s, work boots, farm cap) rolls a pencil between his fingers by the stove.
10 A KIRSTEN BJORNSEN (20s, youngest, bare feet, a cardboard box in her arms) hovers in the doorway to the hall.
11 D IVO: The clock goes to me.
12 D PETRA: It goes to whoever's here.
13 D ANSELM: I'm here.
14 D DOLORES: I'm here too.
15 D IVO: You're on your phone.
16 D DOLORES: I'm on my phone in the chair.
17 A ¶ Anselm sets the pencil on the table.
18 A Dolores picks it up and sets it back where it was.
19 A Petra jingles her keys.
20 A Ivo wraps a fork in newspaper, then another, working quickly, like a man counting something.
21 D KIRSTEN (from the doorway): I took the quilt.
22 D PETRA: Which quilt?
23 D KIRSTEN: The blue one.
24 D IVO: That's Ma's quilt.
25 D KIRSTEN: She told me.
26 D ANSELM: When?
27 D KIRSTEN: In March.
28 D DOLORES: Of course she told you.
29 D PETRA: That's not fair.
30 D DOLORES: I didn't say it was fair.
31 A ¶ Kirsten shifts the box.
* 32 A Under the lid, a corner of blue appears.
33 A Ivo sees it.
34 A Looks away.
* 35 A A truck engine roars past the screen door and fades.
36 A Ivo puts down the fork and lowers himself, slowly, onto the last free chair.
37 D IVO: The clock goes to whoever winds it.
38 D PETRA: Nobody winds it.
39 D ANSELM: I wind it.
* 40 A ¶ Silence.
41 A Dolores lifts her head, surprised.
42 A Anselm picks the pencil up again, rolls it between finger and thumb.
43 A Petra's hand loosens on the keys, and Kirsten sets the box on the table and, with the care of someone handling an egg, unfolds the quilt.
44 A She lays it over the oilcloth.
45 A The five of them look at it, a field of faded blue squares.
46 D DOLORES: That's the barn.
47 D ANSELM: That's the pump house.
48 D PETRA: That's the pump house, Ivo.
49 D IVO (softly): That's the barn.
50 A ¶ Nobody argues.
* 51 A Outside the auctioneer cries a number, and another, and the clock on the wall, for no reason, ticks once and falls silent.

### SCENE s00101 | INT. RADIO STATION BROADCAST BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): OSWALD FERRIS-MBEKI, LAVINIA CRUZ-HOLLANDER, DEREK PUTNAM-ADEBAYO, MARGUERITE LACROIX, HAZEL OKONKWO-DREW, NIGEL STRAND, VOICE, AIR
* 1 A ¶ A glass-walled booth lined with egg-crate foam.
* 2 A Dials, faders, a microphone on a swan neck.
* 3 A Beyond the glass, a dim studio and a bank of dead windows.
* 4 A A red ON AIR sign glows above the door.
5 A ¶ Six people sit around a small round table in the booth, hands flat on the wood.
* 6 A A single candle burns in the center.
7 A ¶ OSWALD FERRIS-MBEKI (60s, station manager, cardigan, pipe unlit) presides.
8 A LAVINIA CRUZ-HOLLANDER (40s, medium, shawl, silver rings on every finger) closes her eyes.
9 A DEREK PUTNAM-ADEBAYO (30s, sound engineer, headphones round his neck) rests a hand on the mixing board.
10 A MARGUERITE LACROIX (70s, retired host, silk scarf, oxygen tank) watches the flame.
11 A HAZEL OKONKWO-DREW (20s, intern, notebook) writes furiously.
12 A NIGEL STRAND (50s, owner's lawyer, damp raincoat) stares at the exit.
13 D LAVINIA (eyes closed): We are here to hear what was never aired.
14 D OSWALD: Hush, everyone.
15 D NIGEL: This is absurd.
16 D MARGUERITE: Let her work, dear.
* 17 A ¶ The candle flame bows.
18 A Derek glances at the board.
* 19 A Every needle is dead.
20 D DEREK: Nothing's powered.
21 D HAZEL (whispering): That's what I wrote.
22 D LAVINIA: He is close. A man with a heavy voice. He says...
* 23 A ¶ A crackle on the monitor speaker.
24 D VOICE [V.O.] (distorted, from the speaker): ...ten minutes to air.
25 A ¶ Oswald drops his pipe.
26 A Marguerite covers her mouth.
27 A Derek leans toward the board.
28 A Nigel pushes his chair back.
29 D NIGEL: That's a recording. Someone's playing a tape.
30 D DEREK: There's no tape. Nothing's plugged in.
31 D VOICE [V.O.] (from the speaker): ...cut the lights, Marguerite.
32 A ¶ Marguerite is staring at the speaker.
33 A Her hand shakes.
* 34 A The oxygen tank hisses.
35 D MARGUERITE: That is Vincent.
36 D OSWALD: Vincent is dead, Marguerite.
37 D MARGUERITE: Thirty years.
38 D VOICE [V.O.] (from the speaker): ...tell them what you did.
39 A ¶ Lavinia's eyes fly open.
40 A She is not looking at the speaker.
41 A She is looking at Nigel.
42 D LAVINIA: It's you.
43 D NIGEL: I beg your pardon?
44 D LAVINIA: He is saying your name.
45 D NIGEL: He is not.
46 D VOICE [V.O.] (from the speaker): ...Nigel.
47 A ¶ Nigel slams a palm onto the table.
* 48 A The candle gutters.
* 49 A The ON AIR sign flashes.
50 A Hazel scribbles.
51 A Derek lunges for the board.
52 A Oswald stands, knocking over his chair.
* 53 A The whole booth goes black.
* 54 A ¶ In the dark, a single click.
55 A A match is lit.
56 A Marguerite's face floats above the flame, calm, steady, ancient.
57 D MARGUERITE: Sit down, Mr. Strand.
58 D NIGEL (whispering): Please.
59 D MARGUERITE: Vincent kept very good notes.
60 A ¶ She holds up a small cassette.
61 A The match burns her finger.
62 A She doesn't flinch.
63 A In the glow, five faces stare at the sixth, who is no longer looking at the exit at all.

### SCENE s00102 | INT. FLOODED LIMESTONE CAVE - DAY
Detected names (may be incomplete or contain aliases): JOSEFINA LARRAZABAL, TOMASZ EKWUEME, MADELEINE PRICE-ODUYA, RUBEN HAKIMI, GUNNAR SIGURDSSON
* 1 A ¶ A low chamber, water to the waist.
* 2 A Headlamps stab the dark.
* 3 A Stalactites drip.
* 4 A Somewhere ahead, a pulse of water echoes.
5 A ¶ Five climbers wade in a line.
6 A JOSEFINA LARRAZABAL (30s, expedition lead, braid) pushes ahead, rope coiled over one shoulder.
7 A TOMASZ EKWUEME (40s, doctor, glasses fogged) follows with a medical bag held above his head.
8 A MADELEINE PRICE-ODUYA (20s, geologist, hardhat) tests the wall with a hammer.
9 A RUBEN HAKIMI (30s, photographer, camera in a dry bag) stumbles.
10 A GUNNAR SIGURDSSON (50s, veteran caver, quiet, grey beard) brings up the rear, a hand on the rope, counting steps.
11 D JOSEFINA: Water's rising.
12 D GUNNAR: Not rising. Rain upstairs.
13 D RUBEN: Is that better?
14 D GUNNAR: It's the same.
15 A ¶ Madeleine taps the wall.
* 16 A A hollow note answers.
17 A She tilts her head and taps again.
18 D MADELEINE: It's thin here.
19 D TOMASZ: How thin?
20 D MADELEINE: Thin enough that he should not lean on it.
21 A ¶ Ruben, who has been leaning, pulls back.
* 22 A The wall gives a long groan.
23 A Josefina swings around, grabs Ruben's collar, and drags him forward as a slab of limestone sheers off and drops into the water behind them.
* 24 A A wave slaps all five.
25 A Gunnar yanks Tomasz upright, Tomasz clutches his bag, Madeleine drops her hammer, and Josefina shoves Ruben against the far wall and shouts for them all to move.
26 D JOSEFINA: Go! Go! Go!
27 A ¶ They surge down the passage.
* 28 A The rope jerks tight.
29 A Gunnar, last in line, counts steps, and when he reaches thirty, he stops.
* 30 A The water behind them has gone still.
31 D GUNNAR: That's the worst of it.
32 D JOSEFINA: You're sure?
33 D GUNNAR: No. But it sounds like it.
34 A ¶ Tomasz lets out a laugh that is half a sob.
35 A Ruben clutches his camera.
36 A Madeleine fishes her hammer from the water and wipes it on her sleeve.
37 D JOSEFINA: Everyone count off.
38 D TOMASZ: One.
39 D MADELEINE: Two.
40 D RUBEN: Three.
41 D GUNNAR: Four.
42 D JOSEFINA: Five. Good. We keep moving.

### SCENE s00103 | INT. CATHEDRAL BELL TOWER OBSERVATION POST - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN HENRY ABERNETHY-LOWE, CORPORAL TOMMASO RICCI, PRIVATE ELIJAH STONE-BARNES, RADIO OPERATOR
* 1 A ¶ A cramped stone chamber beneath the bells.
* 2 A Narrow arrow-slit windows.
* 3 A Sandbags stacked against the wall.
* 4 A A field telephone on a plank, a pair of binoculars on a nail.
5 A ¶ CAPTAIN HENRY ABERNETHY-LOWE stands at the east slit, field glasses at his eyes.
6 A He is tall, spare, and impeccable, his uniform pressed even in the dust.
7 A CORPORAL TOMMASO RICCI sits on an ammunition crate, a rifle across his knees, cleaning it with a rag.
8 A PRIVATE ELIJAH STONE-BARNES, barely nineteen, huddles by the stairwell door, a mug of tea cold in his hands.
9 A ¶ The captain lowers the glasses.
10 A He does not turn.
11 D ABERNETHY-LOWE: Anything?
12 D RICCI: Nothing, sir.
13 D ABERNETHY-LOWE: Then keep looking.
14 A ¶ Ricci nods, not looking up.
15 A The private watches the captain, who watches the horizon.
* 16 A A great quiet fills the tower.
17 D RADIO OPERATOR [V.O.] (field phone, crackling): Eagle's Nest, this is Baker Two. Report.
18 A ¶ Abernethy-Lowe crosses the floor, lifts the receiver, and holds it with two fingers.
19 D ABERNETHY-LOWE: Baker Two, Eagle's Nest. Position quiet. No movement.
20 D RADIO OPERATOR [V.O.] (field phone): Understood. Command wants a sweep of the north road at sixteen hundred.
21 D ABERNETHY-LOWE: Acknowledged.
22 A ¶ He hangs up.
23 A Stands very still, his hand lingering on the receiver.
24 A Elijah sets down the mug.
25 D ELIJAH: Sir?
26 D ABERNETHY-LOWE: Private.
27 D ELIJAH: Is it true what they say about the bells?
28 D ABERNETHY-LOWE: What do they say?
29 D ELIJAH: That they ring on their own before an attack.
30 A ¶ Ricci snorts, rubbing the rifle.
31 A The captain turns, finally, and studies the boy.
32 D ABERNETHY-LOWE: They ring when the wind is wrong. That's all.
33 D ELIJAH: Then why do you keep checking?
34 A ¶ The captain does not answer.
* 35 A A long pause.
* 36 A High above, in the dark of the belfry, a single bell hums, a faint, shivering note, not a ring, not yet.
37 A ¶ Ricci puts down the rifle.
38 A Abernethy-Lowe lifts his glasses.
39 A Elijah stands.
40 A They all look at the arrow-slit, where the afternoon light has gone a strange, pale gold.
41 D RICCI (softly): Wind.
42 D ABERNETHY-LOWE: Wind.
* 43 A ¶ The bell hums again.
* 44 A This time, it rings.

### SCENE s00104 | INT. POTTERY KILN SHED - DUSK
Detected names (may be incomplete or contain aliases): LEILANI KAHALE, DARIUS PELLEGRINO-OKAFOR
* 1 A ¶ Brick walls.
* 2 A A squat kiln glowing orange at its seams.
* 3 A Shelves of unglazed bowls.
* 4 A Clay dust in the air like flour.
5 A ¶ LEILANI KAHALE (30s, apron, forearms grey with slip) crouches at the kiln, peering through a peephole.
6 A DARIUS PELLEGRINO-OKAFOR (30s, jacket, an umbrella he does not need) stands in the doorway holding a paper bag.
7 D LEILANI: You're letting the heat out.
8 D DARIUS: Sorry.
9 A ¶ He steps in.
10 A Closes the door.
11 D DARIUS [CONT'D]: I brought dumplings.
12 D LEILANI: I'm firing.
13 D DARIUS: I can wait.
14 D LEILANI: It's six hours.
15 D DARIUS: Then I brought a lot of dumplings.
16 A ¶ She almost smiles.
17 A Turns back to the peephole.
18 D LEILANI: Cone eight is down. Cone nine soon.
19 D DARIUS: Is that good?
20 D LEILANI: It's necessary.
21 A ¶ He sets the bag on a shelf.
22 A Wanders along the bowls, touching the rims with one finger.
23 A She watches him, in profile, across the glow of the kiln.
24 D DARIUS: These are beautiful.
25 D LEILANI: They're unfinished.
26 D DARIUS: So am I.
27 D LEILANI: That's a terrible line.
28 D DARIUS: I know. I rehearsed it.
29 A ¶ She laughs.
30 A He turns.
31 A Their eyes meet.
32 D LEILANI: I missed you. DARIUS ^I missed you.
33 A ¶ Both stop.
* 34 A The kiln ticks.
35 A Neither moves.
36 D LEILANI: Stay.
37 D DARIUS: For the firing?
38 D LEILANI: For the firing.
39 A ¶ He crosses the shed, sits on an upturned bucket by the kiln, and opens the bag.
* 40 A Steam rises, ginger and sesame.
41 A She sits beside him on the floor.
42 A He passes her a dumpling.
43 A She holds it up to the orange light.
44 D LEILANI [CONT'D]: Six hours.
45 D DARIUS: We have time.

### SCENE s00105 | INT. PICKLE FACTORY - HUMAN RESOURCES OFFICE - DAY
Detected names (may be incomplete or contain aliases): MAGDALENA OKOYE-FINNEGAN, BARRY KOWALSKI-ADEYEMI, PETRONELLA GRUBER
* 1 A ¶ A glass cubicle overlooking the brine vats.
* 2 A The air is vinegar.
* 3 A A motivational poster reads: "BE THE DILL."
4 A ¶ MAGDALENA OKOYE-FINNEGAN (50s, HR director, cardigan, sensible shoes) sits behind a desk stacked with folders.
5 A Across from her, BARRY KOWALSKI-ADEYEMI (40s, line supervisor, apron, spotless) folds his hands in his lap.
6 A In the corner, a chair holds PETRONELLA GRUBER (60s, union rep, thermos, knitting).
7 A ¶ She smiles.
8 A He smiles back.
9 D MAGDALENA: Thank you for coming in, Barry.
10 D BARRY: Of course.
11 D MAGDALENA: This is informal.
12 D BARRY: Great.
13 A ¶ She slides a folder across the desk.
14 A He does not touch it.
15 A Petronella knits.
16 D MAGDALENA: Anything you'd like to share?
17 D BARRY: About what?
18 D MAGDALENA: Anything.
19 A ¶ He glances at the folder.
20 A At Petronella.
21 A At the poster.
22 D BARRY: Business is good.
23 D MAGDALENA: Is it?
24 D BARRY: Yes.
25 A ¶ She nods.
26 A Opens the folder.
27 A Takes out a single photograph and sets it between them.
28 A He leans forward, then back, swallowing.
29 D BARRY [CONT'D]: That's a gherkin.
30 D MAGDALENA: It is.
31 D BARRY: It's a small gherkin.
32 D MAGDALENA: It is a small gherkin that was found in the Reuben line of Plant Three.
33 D PETRONELLA (not looking up): Knit one, purl two.
34 D BARRY: That's hardly my fault.
35 D MAGDALENA: Whose fault is it?
36 D BARRY: Systemic.
37 A ¶ She closes the folder gently.
38 A Folds her hands.
39 D MAGDALENA: Barry, we ran the camera footage.
40 A ¶ His smile stays.
* 41 A Everything else drains.
42 A Petronella sets down her needles.
43 D PETRONELLA: He did it for the cat.
44 D MAGDALENA (to Petronella): Not now.
45 D BARRY: It was a stray.
46 D MAGDALENA: It ate forty pounds of relish.
47 D BARRY: It was hungry.
48 A ¶ Petronella pours tea into the thermos cap and offers it to him.
49 A He takes it.

### SCENE s00106 | EXT. DRIVE-IN MOVIE SCREEN - ROOFTOP SCAFFOLD - NIGHT
Detected names (may be incomplete or contain aliases): LEANDER PRZYBYLSKI, WINIFRED
* 1 A ¶ A vast white screen stands over a lot of weeds and abandoned speaker posts.
* 2 A At the top, a narrow catwalk of weathered planks runs behind the canvas.
* 3 A A few stars show through the clouds.
4 A ¶ LEANDER PRZYBYLSKI (15, thin, hands in the pockets of a too-big hoodie) climbs over the last rung and sits at the edge with his legs hanging over nothing.
5 A Behind him, his sister WINIFRED (17, denim jacket, keys on a lanyard, jaw clenched) hauls herself up the ladder, breathing hard, and stands on the catwalk.
6 A ¶ She finds him.
7 A She does not hurry.
8 D WINIFRED: You scared me.
9 D LEANDER: You came up anyway.
10 D WINIFRED: Mom's looking everywhere.
11 D LEANDER: Not here.
12 D WINIFRED: She will be.
13 A ¶ He doesn't turn.
14 A She walks along the planks, one hand trailing the canvas, which breathes like a sail.
* 15 A The wind carries her voice into the dark lot.
16 D WINIFRED [CONT'D]: Dad's car is still in the driveway.
17 D LEANDER: I know.
18 D WINIFRED: He's not going to leave tonight.
19 D LEANDER: He always says that.
20 D WINIFRED: He does.
21 D LEANDER: Then he does.
22 A ¶ She sits beside him, close but not touching.
* 23 A Below, a cat crosses the lot and vanishes.
24 D WINIFRED: Remember when we used to come here?
25 D LEANDER: I remember the fries.
26 D WINIFRED: Dad used to put his arm over the seat.
27 D LEANDER: He used to put his arm over Mom.
28 D WINIFRED: I was five.
29 D LEANDER: I was three. I remember.
30 D WINIFRED: You do not.
31 D LEANDER: I remember everything.
32 A ¶ That's true, and she knows it.
33 A She lowers her eyes.
34 D WINIFRED: Come home.
35 D LEANDER: Why?
36 D WINIFRED: Because it's cold.
37 D LEANDER: That's not a reason.
38 D WINIFRED: Because I'm cold.
39 D LEANDER: That's closer.
40 D WINIFRED: Because I need you.
41 A ¶ He turns at last.
42 A Looks at her.
* 43 A In the dark, the white screen glows faintly behind his head like a halo.
44 D LEANDER: You never say that.
45 D WINIFRED: I'm saying it.
46 D LEANDER: Why now?
47 D WINIFRED: Because he's going to leave tomorrow.
* 48 A ¶ The words fall into the silence.
49 A Leander flinches, hard, like she struck him.
50 A He stands abruptly.
* 51 A The planks creak.
52 A She grabs his sleeve and he rips free.
53 D LEANDER: You knew.
54 D WINIFRED: Since Tuesday.
55 D LEANDER: You knew since Tuesday and you didn't say.
56 D WINIFRED: I was protecting you.
57 D LEANDER: From what?
58 D WINIFRED: From this.
59 D LEANDER: This is worse!
60 A ¶ His voice cracks and breaks over the empty lot.
61 A He kicks a loose plank.
* 62 A It tumbles off the edge and bounces down the scaffold with a long, cheap clatter.
* 63 A They both listen until it stops.
64 D WINIFRED: Leander.
65 D LEANDER: Don't.
66 D WINIFRED: Look at me.
67 A ¶ He doesn't.
68 A She steps in front of him, forcing it.
69 D WINIFRED [CONT'D]: I'm sorry. I should have told you.
70 A ¶ He crumples.
71 A She catches him before he reaches the planks.
72 A His shoulders shake.
73 A She holds him, her chin on his head, and over her shoulder the huge dark screen waits for a picture that will never come.

### SCENE s00107 | INT. PAWN SHOP - AFTER HOURS
Detected names (may be incomplete or contain aliases): IRENE KOSTOPOULOS, OFFICER DAMIAN FOLASADE-REYES, SOL WEINBERG-ACHEBE, JAMAL TEAGUE
* 1 A ¶ Glass cases.
* 2 A Guitars on the wall.
* 3 A A wall of wristwatches ticking out of sync.
* 4 A One shattered window patched with cardboard.
5 A ¶ DET. IRENE KOSTOPOULOS (50s, trench coat, tired eyes) crouches beside a broken display case, photographing the glass.
6 A OFFICER DAMIAN FOLASADE-REYES (20s, rookie, uniform too crisp) stands at the door writing in a notebook.
7 A SOL WEINBERG-ACHEBE (60s, shop owner, cardigan, hands behind his back) watches from behind the register.
8 A At the end of the counter, a teenager, JAMAL TEAGUE (17, hoodie, no shoes), sits cross-legged on the floor with a blanket around his shoulders.
9 A ¶ Kostopoulos stands.
10 A Her knees crack.
11 A She nods at the broken case.
12 D KOSTOPOULOS: What was in there?
13 D SOL: Rings.
14 D KOSTOPOULOS: How many?
15 D SOL: Eleven.
16 A ¶ She lifts one eyebrow.
17 A Sol studies the floor.
18 D SOL [CONT'D]: Twelve.
19 D KOSTOPOULOS: Mm.
20 A ¶ Damian flips a page.
21 A Jamal pulls the blanket tighter.
22 A Kostopoulos crosses to him and lowers herself, stiffly, into a squat.
23 D KOSTOPOULOS [CONT'D]: You got a name?
24 D JAMAL: Jamal.
25 D KOSTOPOULOS: Jamal. You hurt?
26 D JAMAL: No.
27 D KOSTOPOULOS: You hungry?
28 A ¶ He shrugs.
29 A She looks up at Damian.
30 D KOSTOPOULOS [CONT'D]: Officer. Find him something.
31 D DAMIAN: Like what?
32 D KOSTOPOULOS: Anything.
33 A ¶ Damian leaves.
34 A Sol follows him with his eyes.
* 35 A The watches tick.
36 A Kostopoulos sits on the floor beside Jamal, her coat spreading around her.
37 D KOSTOPOULOS [CONT'D]: Did you break the window?
38 D JAMAL: It was already broken.
39 D KOSTOPOULOS: Did you go in?
40 D JAMAL: I was cold.
41 D KOSTOPOULOS: That's not what I asked.
42 A ¶ He shrugs again.
43 A Sol clears his throat.
44 D SOL: He's been sleeping behind the dumpster for a week.
45 D KOSTOPOULOS: You knew?
46 D SOL: I leave the heater on in the back.
47 A ¶ Kostopoulos looks at Sol, then at the boy.
48 A She exhales.
49 D KOSTOPOULOS: So nobody broke in.
50 D SOL: Somebody did. I just forgot to say hello.
51 A ¶ Damian returns with a bag of crackers from the vending machine.
52 A Jamal takes it with both hands.
53 A Nobody mentions the twelve rings, and eventually Kostopoulos folds her notebook shut.

### SCENE s00108 | INT. GENERATION SHIP "ANAMNESIS" - COUNCIL CHAMBER - SHIP DAY
Detected names (may be incomplete or contain aliases): ELDER TOMOKO VASQUEZ-ADEBAYO, NAVIGATOR PRIYADARSHINI OKEKE, MEDIC CORVIN HALLORAN-NWOSU, ENGINEER BEATRIX SOLBERG-MWANGI, ARCHIVIST DESMOND OYELARAN-PIKE, ZANELE KOROMA-LINDEN
* 1 A ¶ A circular hall with a ceiling like the inside of a seed.
* 2 A Six seats are arranged around a table of pale resin.
* 3 A The viewport behind them shows stars drifting in a very slow river.
4 A ¶ ELDER TOMOKO VASQUEZ-ADEBAYO (70s, high collar, white hair braided to her waist) sits at the head.
5 A NAVIGATOR PRIYADARSHINI OKEKE (40s, ink-stained fingers, silent) sits beside her.
6 A MEDIC CORVIN HALLORAN-NWOSU (50s, round glasses, a satchel of vials) leans forward.
7 A ENGINEER BEATRIX SOLBERG-MWANGI (30s, rolled sleeves, calloused hands) sits scowling with her arms crossed.
8 A ARCHIVIST DESMOND OYELARAN-PIKE (60s, tweed, a book on his knee) sits very upright.
9 A And at the foot, the youngest, ZANELE KOROMA-LINDEN (20s, council apprentice, uniform too stiff) holds a stylus above a slate.
10 D TOMOKO: We begin.
11 D PRIYADARSHINI: Fuel reserves?
12 D BEATRIX: Eleven percent.
13 D PRIYADARSHINI: Eleven.
14 D BEATRIX: Eleven and falling.
15 D CORVIN: The farm decks are failing too.
16 D DESMOND: That is in the records.
17 D CORVIN: The records do not feed anyone.
18 D DESMOND: They tell us why.
19 D CORVIN: Why does not matter. When does.
20 D TOMOKO: Please.
21 A ¶ They quiet.
22 A Zanele writes.
23 D TOMOKO [CONT'D]: We will decide today whether the ship turns.
24 D BEATRIX: Turning costs four percent.
25 D PRIYADARSHINI: Not turning costs everything.
26 D DESMOND: There is a system two light-years aft.
27 D BEATRIX: Two years of burn.
28 D DESMOND: Two years of burn, and a green world.
29 D CORVIN: How green?
30 D DESMOND: Not as green as the book.
31 D CORVIN: Then how green?
32 D DESMOND: Enough.
33 A ¶ Zanele raises her stylus.
34 D ZANELE: May I speak?
35 D TOMOKO: The apprentice speaks last.
36 D ZANELE: Yes, Elder.
37 D TOMOKO: But speak.
38 D ZANELE: If we turn, my children will be born in the turn.
39 D BEATRIX: So?
40 D ZANELE: So they will never see where we were going.
41 D DESMOND: They will see where we got.
42 D ZANELE: Is that enough?
43 A ¶ Nobody answers.
44 A Tomoko rests her palms on the resin and closes her eyes.
45 A Priyadarshini studies her own inked fingers.
46 A Corvin pulls a vial from his satchel, then puts it back.
47 A Beatrix uncrosses her arms.
48 D BEATRIX: I would turn.
49 D CORVIN: I would turn.
50 D DESMOND: Archives will log it.
51 D PRIYADARSHINI: Turn.
52 D TOMOKO: Then it is decided.
53 D ZANELE (whispering): Thank you.
54 D TOMOKO: Do not thank us. Remember us.
55 A ¶ She taps the table.
* 56 A The stars in the viewport shift.
* 57 A A deep note vibrates through the floor, and the entire ship begins to bank, so slowly that only the stars know.

### SCENE s00109_0 | EXT. FROZEN LAKE - ICE-FISHING HUT - NIGHT
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A tin shack on the ice, a single yellow window.
* 2 A Snow drifts in the dark.
* 3 A A string of lights marks a path back to the shore, now very far away.
