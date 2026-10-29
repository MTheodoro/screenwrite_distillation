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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0137.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01200 | INT. RAILWAY LOST-PROPERTY OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR WILHELMINA TOLLIVER, PERCIVAL ODUYA
* 1 A ¶ Shelves of umbrellas, odd gloves, trombone cases.
* 2 A A brass bell sits on the counter.
* 3 A One desk lamp.
4 A ¶ INSPECTOR WILHELMINA TOLLIVER (50s, grey tweed) enters, shakes rain off her hat, and drops it on the counter.
5 A PERCIVAL ODUYA (60s, cardigan, sleeve garters) looks up from a ledger.
6 A ¶ She rings the bell.
7 A He flinches.
8 D TOLLIVER: Mr. Oduya.
9 D PERCIVAL: Inspector.
10 D TOLLIVER: Tell me about the green suitcase.
11 D PERCIVAL: Which green suitcase?
12 D TOLLIVER: The one handed in on the fourteenth. Lock engraved with a swan.
13 D PERCIVAL: Ah. That one.
14 D TOLLIVER: You remember it, then.
15 D PERCIVAL: I remember everything that's handed in. It's a vice.
16 D TOLLIVER: And who handed it in?
17 D PERCIVAL: A man in a brown coat. He said it was his sister's.
18 D TOLLIVER: His sister's.
19 D PERCIVAL: That's what he said.
20 D TOLLIVER: And did you open it?
21 D PERCIVAL: Regulations forbid it.
22 D TOLLIVER: That isn't what I asked.
23 D PERCIVAL: No. It isn't.
24 D TOLLIVER: Mr. Oduya, a woman has been missing since the fourteenth. Her sister was seen at this station the same afternoon.
25 D PERCIVAL: Perhaps the same sister.
26 D TOLLIVER: Perhaps. Or perhaps the man in the brown coat was no brother at all.
27 D PERCIVAL: You think I helped him.
28 D TOLLIVER: I think you saw him.
29 D PERCIVAL: I see everyone, Inspector. I see their umbrellas. I see their gloves. I don't see faces, only what they leave.
30 D TOLLIVER: Then tell me what he left.
31 D PERCIVAL: The suitcase.
32 D TOLLIVER: Where is it?
33 D PERCIVAL: Collected.
34 D TOLLIVER: By whom?
35 D PERCIVAL: By you. Yesterday. You signed the ledger.
* 36 A ¶ A long silence.
* 37 A The lamp hums.
38 D TOLLIVER: I did not.
39 D PERCIVAL: Then the ledger is mistaken.
40 D TOLLIVER: Show me.
41 D PERCIVAL: Gladly.
42 A ¶ He turns the ledger toward her.

### SCENE s01201 | INT. SLEEPER TRAIN - COMPARTMENT - NIGHT
Detected names (may be incomplete or contain aliases): IGNATIUS FELLOWES, PHIL, ACHTERBERG, MORDECAI VANTONGEREN
* 1 A ¶ Two bunks, a fold-down table, a window streaked with rain.
* 2 A The train clatters through a tunnel.
* 3 A A lamp swings.
4 A ¶ IGNATIUS FELLOWES (60s, silk dressing gown, nightcap) sits upright on the lower bunk with a book.
5 A PHILOMENA "PHIL" ACHTERBERG (30s, trench coat, boots still on) leans against the door.
6 A MORDECAI VANTONGEREN (40s, wire glasses, medical bag) stands by the window.
7 D IGNATIUS: Phil, would you sit? You're making the lamp nervous.
8 D PHIL: Ignatius, I'm not leaving the door.
9 D MORDECAI: Phil, with respect, it's a train. The door isn't going anywhere.
10 D PHIL: Neither are we.
* 11 A ¶ The lamp flickers.
* 12 A Something knocks softly from the ceiling.
13 A All three look up.
14 D IGNATIUS: Mordecai, did you hear that?
15 D MORDECAI: I did. It's the luggage rack.
16 D PHIL: It's not the luggage rack.
17 D IGNATIUS (muttering): Third time since Prague.
18 D MORDECAI (to Ignatius): Sir, you must rest.
19 D IGNATIUS (to the room): I will rest when someone tells me what we shipped in the baggage car.
20 D PHIL (over him): Nobody shipped anything.
21 D MORDECAI (over her): The manifest says medical supplies.
22 D IGNATIUS: Mordecai, you wrote the manifest!
23 D MORDECAI: Ignatius, I wrote what I was told.
24 D PHIL: By whom?
* 25 A ¶ Three knocks, slow, from the ceiling.
* 26 A The train enters another tunnel.
* 27 A The lamp dies.
* 28 A In the dark, a fourth knock comes from inside the door, right beside Phil's ear.
29 D PHIL [CONT'D] (very quiet): Don't anybody move.
30 D IGNATIUS (whisper): Mordecai. Say something.
31 D MORDECAI (whisper): Phil, if you'd open the door...
32 D PHIL: Mordecai, no.
* 33 A ¶ The knocking stops.
* 34 A The train bursts into moonlight.
35 A In the sudden pale glow they see the door handle slowly turning down.

### SCENE s01202 | INT. FLOODED CHAPEL - NIGHT
Detected names (may be incomplete or contain aliases): BROTHER ANSELM, BROTHER THADDEUS
* 1 A ¶ Black water to the pews' seat-backs.
* 2 A A shattered rose window lets moonlight lay a ragged pattern on the surface.
* 3 A Candles in sconces burn, though nothing should light them.
* 4 A The altar rises like an island.
5 A ¶ BROTHER ANSELM (50s, cassock hitched at the waist, a lantern in one hand) wades down the nave.
6 A BROTHER THADDEUS (50s, same cassock, same lantern) wades behind him.
* 7 A Between them, floating, a coffin.
8 D THADDEUS: Slowly. Slowly.
9 D ANSELM: I am going slowly.
* 10 A ¶ The coffin bumps a pew.
* 11 A Water laps.
12 A Anselm reaches for it.
13 A Thaddeus catches the handle at the same moment.
14 A They steady it between them.
15 D THADDEUS: He's heavier than he should be.
16 D ANSELM: He's wet.
17 D THADDEUS: He was never wet. We kept him in the crypt.
18 A ¶ Anselm pauses.
19 A He turns his lantern on the coffin lid.
* 20 A A dark stain is seeping up through the wood.
21 D ANSELM: That's from the flood.
22 D THADDEUS: That's from the inside.
* 23 A ¶ A low rhythmic knock begins within the coffin.
* 24 A Not violent.
* 25 A Patient.
26 A Anselm lets go.
27 A Thaddeus does not.
28 D ANSELM: Brother. Release it.
29 D THADDEUS (whisper): It's him.
30 D ANSELM: It isn't.
31 D THADDEUS: It's the abbot. He's calling.
32 D ANSELM: Thaddeus, the abbot was buried in the spring.
33 D THADDEUS: Then who's knocking?
* 34 A ¶ The knocking stops.
* 35 A In the silence, water drips from the broken window.
36 A Thaddeus lifts the lid half an inch.
37 A Anselm lunges and slams it shut.
38 A The two struggle; the lantern tips from Anselm's hand and hisses out in the water.
* 39 A ¶ Darkness.
* 40 A Only the candles.
* 41 A The knocking begins again, fast now, frantic, from the altar behind them.
42 D ANSELM [CONT'D] (whisper): That isn't the coffin.
43 A ¶ They turn.
44 A On the altar, a figure kneels, face hidden, hands clasped, water running from its habit.
45 A It lifts its head.
46 A Anselm and Thaddeus freeze.
47 A It has no face at all, only smooth pale skin.
48 D THADDEUS: Dear God.
49 D ANSELM (shaking): He answers.
50 A ¶ The figure rises, dripping, and holds out a hand to each of them.
* 51 A Behind them, the coffin lid opens with a groan.
52 D THADDEUS: Brother. What do we do?
53 D ANSELM: We kneel.
54 A ¶ They kneel, waist-deep in black water, as the candles flare high.
55 A The figure steps down from the altar and walks across the surface of the flood.
56 D THADDEUS (praying, trembling): Our Father, who art in heaven...
57 A ¶ The figure stops before him and lays its hand on his head.
58 A Anselm squeezes his eyes shut.
59 A A long exhale, as of a very old furnace.
60 D ANSELM (whisper): Hallowed be thy name.
* 61 A ¶ The candles go out, one by one.
* 62 A ¶ Silence.
* 63 A Then the soft knocking begins again, and from every pew, a dozen more hands rise up through the water to answer.

### SCENE s01203 | INT. PAWN SHOP - EVENING
Detected names (may be incomplete or contain aliases): ODETTE BRIDGEWATER-LANE, MARCELINO FARRELL
* 1 A ¶ Glass cases of watches, guitars hung on the wall, a neon OPEN sign buzzing in the window.
* 2 A The register drawer is half out.
3 A ¶ ODETTE BRIDGEWATER-LANE (60s, widow's black, handbag hugged to her ribs) stands at the counter.
4 A A wedding ring sits on a velvet pad between her and MARCELINO FARRELL (40s, shirtsleeves, loupe pushed up on his forehead), who turns it under a lamp.
5 D MARCELINO: Thirty dollars.
6 D ODETTE: Eighty.
7 D MARCELINO: It's a plain band, Mrs. Bridgewater-Lane.
8 D ODETTE: It's forty-one years.
9 A ¶ He sets the loupe down.
10 A She does not blink.
11 A He slides the ring an inch toward her, then an inch back, then taps the glass case and, with a sigh, opens the register, counts out bills, closes it, and counts them again.
12 D MARCELINO: Fifty. And I'm robbing myself.
13 D ODETTE (to the room): Everyone's been robbed by somebody.
14 A ¶ She takes the money.
15 A Slips it into the handbag.
16 A Then, without a word, she lifts the ring from the pad and puts it back on her finger.
17 D MARCELINO: Ma'am.
18 D ODETTE: I'm sorry. I changed my mind.
19 D MARCELINO: Keep the fifty.
20 D ODETTE: No.
21 A ¶ She lays the bills on the counter, squares them neatly, and walks out.
* 22 A The bell on the door rings once.

### SCENE s01204 | INT. MARITIME ARCHIVE - TIDE-TABLE ROOM - DAY
Detected names (may be incomplete or contain aliases): DETECTIVE SOLEDAD MARQUEZ-OYELARAN, ARCHIVIST, AUGUSTINE FEATHERSTONE
* 1 A ¶ Floor-to-ceiling shelves of cloth-bound almanacs.
* 2 A A reading ladder on rails.
* 3 A A long oak table under a green-shaded lamp.
* 4 A Rain on skylights.
5 A ¶ DETECTIVE SOLEDAD MARQUEZ-OYELARAN (40s, blazer, notebook) sits at the table with three almanacs open before her.
6 A At the far end, the ARCHIVIST, AUGUSTINE FEATHERSTONE (60s, bow tie, cotton gloves), shelves a volume on the ladder.
7 D SOLEDAD: Mr. Featherstone, you said the logs for June are missing.
8 D AUGUSTINE: Not missing. Misfiled.
9 D SOLEDAD: Which is different how?
10 D AUGUSTINE: Misfiled means they exist, but where they ought to be, they are not.
11 A ¶ She lifts a volume.
12 A Flips a page.
13 A Puts it down.
14 A Her eyes track a column of numbers.
15 D SOLEDAD: These tides don't match the harbor master's report.
16 D AUGUSTINE: They wouldn't. Harbor masters report what they hope.
17 A ¶ She laughs, once, short.
18 A He climbs down the ladder, one rung at a time.
19 A She stands.
20 A They both reach for the same almanac on the table; her hand covers his.
21 A They stop.
22 D SOLEDAD: Sorry.
23 D AUGUSTINE: Quite all right.
24 A ¶ They each pull back an inch.
25 A He dusts the cover with his glove.
26 A She turns the book to face him.
27 D SOLEDAD: June the ninth. High water at 3:12. Yet the dock log has her ship leaving at 2:50.
28 D AUGUSTINE: She'd have grounded on the bar.
29 D SOLEDAD: Unless she didn't leave at 2:50.
30 D AUGUSTINE: Or the log is wrong.
31 D SOLEDAD: Or somebody wants it to be.
* 32 A ¶ A long pause.
* 33 A Rain.
34 A He removes his gloves, folds them, lays them on the table.
35 A She watches his hands.
36 D AUGUSTINE: Detective, I've kept these tables for thirty-four years. Not once has a number been altered.
37 D SOLEDAD: Not by you.
38 D AUGUSTINE: Not by me.
39 D SOLEDAD: Then by whom?
40 A ¶ He crosses to a shelf and takes down a slim volume with a black spine.
41 A He carries it to her and lays it open to a page where one entry has been scraped away and rewritten in a different ink.
42 D AUGUSTINE: Her.
43 D SOLEDAD: Who?
44 D AUGUSTINE: The previous archivist. She left in July.
45 A ¶ Soledad reads the entry.
46 A Then looks at him, and he at her, both of them leaning over the page, and neither of them moves for a long moment.

### SCENE s01205 | INT. AUCTION HOUSE - CLOAKROOM - NIGHT
Detected names (may be incomplete or contain aliases): BARONESS ISADORA KELLERMAN-OYE, HUGO LINDENBAUM, INSPECTOR FELICITY ANGWIN
* 1 A ¶ Rows of coat hooks, a long counter, brass tickets in a bowl.
* 2 A Muffled applause through the wall.
* 3 A A marble clock ticks.
4 A ¶ BARONESS ISADORA KELLERMAN-OYE (60s, fur stole, emerald choker) stands at the counter.
5 A HUGO LINDENBAUM (30s, tuxedo, cloakroom attendant's bow tie slightly crooked) holds up a coat.
6 A INSPECTOR FELICITY ANGWIN (40s, dark overcoat) leans against the far wall, notebook open.
7 D ISADORA: Hugo, I gave you the ticket at nine.
8 D HUGO: Baroness, you gave me a ticket at nine. I assumed it was for the stole.
9 D ISADORA: The stole is on my shoulders.
10 D FELICITY: Baroness, may I ask what was in the coat?
11 D ISADORA: A letter.
12 D HUGO: A letter, ma'am?
13 D FELICITY: Hugo, let her answer.
14 D ISADORA: A letter from my late husband, to be read aloud this evening at the sale, which is why I was so careful about the ticket.
15 D HUGO (overlapping): I gave it back to a gentleman.
16 D FELICITY (overlapping): Which gentleman?
17 D ISADORA (overlapping): What gentleman?
18 D HUGO: Tall. Beard. Blue ribbon in his lapel.
19 D ISADORA: That is the auctioneer!
20 D FELICITY: He's been on the dais all night.
21 D HUGO: Then it was someone dressed as him.
22 D ISADORA: Hugo, you gave my husband's last words to an impostor!
23 D HUGO: Ma'am, in my defence, he was very convincing.
24 D FELICITY: Baroness, was the letter in an envelope?
25 D ISADORA: Cream. Sealed with green wax. My initials in the corner.
26 D FELICITY: And what did the letter say?
27 D ISADORA: That is none of your concern.
28 D FELICITY: It may be of great concern. A man was found in the carriage house this evening. In his pocket, a cream envelope.
29 D ISADORA (sharp breath): Dead?
30 D FELICITY: Yes.
* 31 A ¶ A long silence.
* 32 A Applause through the wall again, rising, then falling away.
33 A Hugo puts down the coat.
34 D HUGO: Ma'am. I swear I didn't know.
35 D ISADORA (low): Of course you didn't.
36 D FELICITY: Baroness, do you know the man?
37 D ISADORA: No. I never saw him before in my life.
38 D FELICITY: Then why are you crying?
39 D ISADORA: Because he has my husband's face.
40 A ¶ Felicity closes the notebook.
41 A Hugo picks up the tuxedo coat and holds it out like a shield.

### SCENE s01206 | EXT. FERRIS WHEEL - TOP CABIN - NIGHT
Detected names (may be incomplete or contain aliases): FENELLA, RAUL, ABIOLA, NOLAN
* 1 A ¶ The wheel has stopped at its peak.
* 2 A The city glitters below.
* 3 A Wind rocks the cabin.
* 4 A A duffel bag lies open on the bench.
5 A ¶ FENELLA (30s, black turtleneck) is hunched over a thermal drill.
6 A RAUL (40s, sunglasses even now) peers out of the window, scanning the ground.
7 A ABIOLA (20s, headset) mutters coordinates into a radio.
8 A NOLAN (50s, ex-operator's jacket) sits slumped with his feet on the duffel.
9 A ¶ She jabs the drill at the floor.
10 A He jerks the curtain.
11 A She curses.
12 A He snaps his fingers.
13 D FENELLA: Hold it still.
14 D RAUL: I'm holding.
15 D ABIOLA: Wind's rising. Four knots.
16 D NOLAN: We said sixty seconds.
17 D FENELLA: We said sixty seconds yesterday.
18 D RAUL: We said sixty seconds before you spilled the thermite.
19 D ABIOLA: Everyone, quiet. Security's on the midway.
20 A ¶ They freeze.
* 21 A Beneath them the wheel creaks.
22 A She taps her earpiece.
23 A He holds his breath.
24 A They all lean toward the window as a flashlight beam sweeps the base of the wheel.
25 D NOLAN (whisper): Don't breathe.
26 D FENELLA (whisper): Then who's talking?
27 D RAUL (whisper): You are.
* 28 A ¶ The beam passes.
* 29 A The wheel jolts.
* 30 A The cabin begins, very slowly, to descend.

### SCENE s01207 | INT. PENCIL FACTORY - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): AUGUSTA MALOUF-PRIOR, QUENTIN BOWDEN-AKINTOLA, LORETTA GRUNDY, SIMEON PELL
* 1 A ¶ A mezzanine office above the production floor.
* 2 A Sawdust sifts through the floor grating.
* 3 A Fifty identical desks, each with a cup of sharpened pencils.
* 4 A A banner overhead reads: "WE'RE ALL POINT PEOPLE."
* 5 A ¶ The air smells of cedar and stale coffee.
6 A ¶ AUGUSTA MALOUF-PRIOR (50s, pearls, reading glasses on a chain) sits at the head of the room under a framed poster of a pencil.
* 7 A Her desk is clear except for a single yellow No. 2.
8 A ¶ At the next desk, QUENTIN BOWDEN-AKINTOLA (30s, short-sleeved dress shirt, tie with tiny pencils on it) types with two fingers.
9 A Across the aisle, LORETTA GRUNDY (60s, cardigan, thermos shaped like a pencil) reads a printout without moving her lips.
10 A At the back, in a corner no one has assigned, sits SIMEON PELL (20s, headphones around his neck, pencil behind each ear), the only person who has ever seen the factory floor in person.
11 D AUGUSTA: Team, a quick update.
12 A ¶ Nobody looks up.
13 A She taps the pencil against the desk.
14 D AUGUSTA [CONT'D]: Management has decided to eliminate the red pencils.
15 D QUENTIN: All of them?
16 D AUGUSTA: All of them, Quentin.
17 D LORETTA: Augusta, we've sold red pencils since 1952.
18 D AUGUSTA: And we'll continue selling them until the stock runs out.
19 D SIMEON: So we don't make them anymore.
20 D AUGUSTA: Simeon, we make them differently.
21 D SIMEON: How differently?
22 D AUGUSTA: Without the red.
* 23 A ¶ A silence.
* 24 A Sawdust drifts.
25 A Loretta turns a page.
26 D QUENTIN: Does that mean they're no longer red pencils?
27 D AUGUSTA: It means they're pencils.
28 D LORETTA (muttering): They were always pencils.
29 D AUGUSTA: Loretta, this is an exciting transition.
30 D LORETTA: Augusta, I've seen four transitions. They all ended in lunch.
31 A ¶ Simeon lifts a pencil from behind his ear and turns it in his fingers.
32 A He looks at the tip.
33 A Quentin resumes typing.
34 D SIMEON: Do the blue ones stay?
35 D AUGUSTA: The blue ones are under review.
36 D SIMEON: And the green?
37 D AUGUSTA: We don't discuss green.
38 D QUENTIN (whisper): What happened to green?
39 D LORETTA (whisper): Don't ask.
* 40 A ¶ The banner overhead flaps in a draft from the floor.
41 A Augusta sets the pencil down in the exact center of her desk, aligns it with the edge, and smiles at the room as though it had applauded.
42 D AUGUSTA: Wonderful. Let's circle back after lunch.

### SCENE s01208 | INT. TEA HOUSE - 1893 - AFTERNOON
Detected names (may be incomplete or contain aliases): LADY BEATRIX HALLORAN-SATO, MISS PHILIPPA ROOK, EMERIC CAULFIELD, TAKEO, OTOMO
* 1 A ¶ Lacquered screens, a low table, steam curling from a cast-iron kettle.
* 2 A Rain taps the paper windows.
3 A ¶ LADY BEATRIX HALLORAN-SATO (40s, silk kimono over a Western corset) pours tea with deliberate grace.
4 A Across from her, MISS PHILIPPA ROOK (30s, travelling suit, gloves in her lap) watches the cups.
5 A Beside her, DR. EMERIC CAULFIELD (50s, wing collar) turns his spoon.
6 A Two servants kneel by the door: TAKEO (20s, precise) and OTOMO (20s, hands folded).
7 A ¶ She pours Miss Rook's cup last.
8 A Miss Rook accepts it.
9 A Neither speaks.
10 D DR. CAULFIELD: A fine blend.
11 D LADY BEATRIX: My late husband's.
12 A ¶ Miss Rook lifts the cup.
13 A Lady Beatrix watches her lips touch the rim.
14 A Takeo's eyes dart to Otomo.
15 A Otomo's hands tighten.
16 D MISS ROOK: It has a faint bitterness.
17 D LADY BEATRIX: So does his memory.
18 A ¶ Miss Rook sets the cup down.
19 A She smooths her gloves.
20 A Dr. Caulfield sips and sets his cup to one side.
21 D DR. CAULFIELD: I'm sure it is nothing.
22 A ¶ Miss Rook rises.
23 A She crosses to the window and slides it open an inch.
24 A Rain mists her face.
25 A Lady Beatrix does not turn, but her shoulders loosen by a fraction.
* 26 A The kettle sings.
27 A Otomo bows low and does not rise.

### SCENE s01209 | EXT. GLASS FOREST - DAWN
Detected names (may be incomplete or contain aliases): KESTREL AYODELE-VANCE, BARROW, THE LADY IMOGEN, PIP
* 1 A ¶ Trees of translucent crystal rise in endless columns, trunks like frozen waterfalls.
* 2 A Light bends through them, scattering rainbows across a floor of powdered quartz.
* 3 A The air chimes.
4 A ¶ KESTREL AYODELE-VANCE (20s, scout's leathers, a bow slung across her back) steps through the trunks, careful of each footfall.
5 A BARROW (50s, dwarf, bearded, hammer at his belt) trundles behind her.
6 A THE LADY IMOGEN (ageless, pale cloak, sword of white metal) walks last, one hand tracing the trees.
7 A And between them, trotting at Kestrel's heels, a small fox-faced creature named PIP (appears to be a child of seven, ears slightly too pointed).
8 D PIP: Is it true the trees sing?
9 D KESTREL: Only when they're angry.
10 D BARROW: Which is always.
* 11 A ¶ A deep thrum shakes the forest.
* 12 A Crystals tremble.
13 A Pip clutches Kestrel's hand.
14 A Imogen halts and raises her blade.
15 A Kestrel nocks an arrow; Barrow swings the hammer from his belt; they form a rough triangle around the child, backs to the trunks.
16 D THE LADY IMOGEN: Stay close. Do not look at your reflection.
17 D BARROW (muttering): Easy for her to say. She hasn't got one.
* 18 A ¶ The thrum rises to a chord.
19 A From between the trees, a shape, tall, many-limbed, assembled from shards, glides forward.
20 A It tilts.
21 A Its glittering face turns toward Pip.
22 D KESTREL: Barrow, left!
23 A ¶ Barrow charges.
24 A The creature swats him aside; he tumbles into a trunk, which rings like a bell.
25 A Kestrel looses an arrow.
* 26 A It shatters on the creature's chest.
27 A Imogen lunges and her blade sinks to the hilt.
28 A The creature shrieks, a sound like glass breaking underwater.
29 A It lashes out and sweeps Imogen off her feet, then Kestrel, then Barrow, who has staggered back into the fight.
30 D PIP (shouting): Stop!
* 31 A ¶ Everything freezes.
32 A Kestrel on her back.
33 A Barrow half-risen.
34 A Imogen with her sword pinned.
35 A The creature, towering, turns to the child.
36 A Pip steps forward.
37 A He holds out both hands.
38 D PIP [CONT'D] (quietly): I know your song.
39 A ¶ He hums three notes.
40 A The creature sways.
* 41 A Its shards soften from white to gold.
42 A It kneels, slowly, until its face is level with the boy's.
43 D KESTREL (whisper): Pip.
44 D PIP: It's all right. It's only lonely.
45 A ¶ Imogen lowers the blade.
46 A Barrow lowers the hammer.
47 A The creature reaches out one shard-fingered hand and touches Pip's forehead, and a single rainbow bursts through the canopy and floods the clearing in color.
48 D THE LADY IMOGEN (softly): Of course.
49 D BARROW (rising, to no one): Always the small ones.
* 50 A ¶ The forest begins, very softly, to sing.

### SCENE s01210 | INT. AFFINAGE CAVE - CHEESE VAULT - NIGHT
Detected names (may be incomplete or contain aliases): MARISKA DELACROIX-ODUYA, BEN, ANGOLA, CASPER TREMAINE-LIU
* 1 A ¶ A limestone tunnel lined with wooden racks of aging wheels, each stamped with a date.
* 2 A Cool mist hangs in the lamplight.
* 3 A Water drips somewhere deep.
4 A ¶ MARISKA DELACROIX-ODUYA (40s, white coat, hairnet) crouches at a rack with a cheese iron, extracting a core sample.
5 A Her partner, BENEDICT "BEN" ANGOLA (50s, tailored suit under a borrowed apron), holds a flashlight.
6 A A boy of twenty, CASPER TREMAINE-LIU (20s, security guard's cap), stands rooted at the tunnel mouth, jaw slack.
7 A ¶ She taps a wheel.
8 A He lifts the lamp.
9 A She pulls out a plug.
* 10 A Inside, wrapped in wax paper, a slim steel tube.
11 D MARISKA: There it is.
12 D BEN: There it is.
13 D CASPER (approaching): Hey. Hey, that's not allowed.
14 A ¶ Mariska pockets the tube.
15 A Ben swings the lamp up.
16 A Casper stops and raises both hands, and they stare at one another across eight feet of fog.
17 D CASPER [CONT'D] (a little desperate): I'm only the night guard.
18 D BEN: We're only the night shift.
19 A ¶ Mariska takes a wheel off the rack, hefts it, and rolls it down the tunnel.
* 20 A It gathers speed, thunders off into the dark.
21 A Casper turns to watch it go.
22 D CASPER: That was a forty-year Gruyere.
23 D MARISKA: Ben, go.
24 D BEN (at the same time): Mariska, go.
25 A ¶ They run.
26 A Casper lowers his hands, looks at the empty rack, and then, very slowly, at his own radio.

### SCENE s01211 | EXT. PUBLIC BOCCE COURT - TWILIGHT
Detected names (may be incomplete or contain aliases): NONNA ALBERTINA FERRANTE-OKOYE, SAL HAND, DRUMMOND, WALTER BRENNAN-ISHIDA, CLEMENTINE
* 1 A ¶ A crushed-oyster-shell lane between two wooden rails.
* 2 A String lights droop from a mulberry tree.
* 3 A A cooler of beer rests on a bench.
* 4 A ¶ The last frame of a long match.
5 A Four players stand at the near end.
6 A ¶ NONNA ALBERTINA FERRANTE-OKOYE (70s, apron over Sunday dress) holds a red ball, rolling it in her palm.
7 A Her partner, SALVATORE "SAL THE HAND" DRUMMOND (60s, straw hat, cigar unlit) leans on his cane.
8 A Their rivals: WALTER BRENNAN-ISHIDA (60s, golf visor) stands rigid with a green ball, and his daughter CLEMENTINE (30s, headphones around her neck) chews a toothpick and watches the pallino sitting at the far end.
9 D ALBERTINA: Everybody quiet.
10 D SAL: We're quiet.
11 D WALTER: I'm not breathing.
12 D CLEMENTINE (to Walter): Dad, you're breathing.
13 A ¶ Albertina steps to the line.
14 A Bends her knees.
15 A Swings.
* 16 A The red ball rolls, wobbles, bumps a rail, slows, and kisses the pallino.
* 17 A A hush.
* 18 A Then it rolls on, a quarter inch, and drifts to a stop precisely against it.
19 D SAL (to the group): Did you see that? Did you all see that?
20 D WALTER: I saw it.
21 D CLEMENTINE: We all saw it.
22 A ¶ Walter lays his green ball gently on the bench.
23 A He pulls off his visor, wipes his forehead with the back of his wrist, and puts it on again, backward.
24 D ALBERTINA: Walter. Fine game.
25 D WALTER: Albertina. Fifty years I've wanted to say that to you.
26 D ALBERTINA: Say what?
27 D WALTER: Fine game.
28 A ¶ They shake hands.
29 A Sal lights the cigar at last.
30 A Clementine looks at the pallino, at the red ball against it, at her father's backward visor, and begins, helplessly, to laugh.

### SCENE s01212 | INT. COURTROOM 4B - POWER OUTAGE - DAY
Detected names (may be incomplete or contain aliases): ADVOCATE LEONARD OSEI-BANKS, PROSECUTOR NADINE TOLLIVER-REEVES, JUDGE FAIRCHILD
* 1 A ¶ Emergency lights bleed amber across empty benches.
* 2 A The air conditioner has died with a wheeze.
* 3 A The judge's bench looms.
4 A ¶ ADVOCATE LEONARD OSEI-BANKS (50s, double-breasted suit) stands at the defense table.
5 A PROSECUTOR NADINE TOLLIVER-REEVES (40s, sleek braid) stands at hers.
* 6 A The judge's bench is a dark shape; only a voice comes from it.
7 D LEONARD: Your Honor, with the lights out, I move to adjourn.
8 D NADINE: Your Honor, the State opposes.
9 D JUDGE FAIRCHILD [V.O.] (over bench intercom): Order! Counsel, I can hear you perfectly well.
10 D LEONARD: Your Honor, I cannot see my client.
11 D NADINE: ^Your Honor, he can see his client perfectly.
12 D LEONARD (overlapping): I do not...
13 D NADINE (overlapping): ...he has been looking at him for ten minutes...
14 D JUDGE FAIRCHILD [V.O.] (over both): Quiet!
15 D JUDGE FAIRCHILD [V.O.] (over bench intercom, crackling): Building says generators in five minutes. We will wait.
16 A ¶ Leonard lowers his hand.
17 A Nadine folds her arms.
18 D LEONARD: Your Honor, may I use the time to confer with my client?
19 D JUDGE FAIRCHILD [V.O.]: By all means.
20 D NADINE: Your Honor, with respect, the client has no idea where we are.
21 D LEONARD (to Nadine): Miss Tolliver-Reeves, none of us do.
* 22 A ¶ The emergency lights flicker.
* 23 A Then, all at once, the courtroom blazes with full, merciless brightness.

### SCENE s01213 | INT. ACCORDION REPAIR SHOP - NIGHT
Detected names (may be incomplete or contain aliases): OSWALDO PRENTISS-LAMB, TEDDY, ASANTE
* 1 A ¶ Hanging bellows.
* 2 A Open instruments on workbenches, reeds spread like sleeping insects.
* 3 A A single lamp.
* 4 A The smell of glue and old felt.
5 A ¶ OSWALDO PRENTISS-LAMB (50s, rolled sleeves, magnifying visor) bends over a half-disassembled accordion.
6 A In the doorway, rain on her coat, stands THEODORA "TEDDY" ASANTE (40s, a black case in her hand), who hasn't been here in years.
7 D OSWALDO: We're closed.
8 D TEDDY: You never close.
9 A ¶ He takes off the visor.
10 A Sets it down.
11 A She sets the case on the counter and clicks it open: an accordion, scarred, one strap mended with fishing line.
12 D OSWALDO: You kept it.
13 D TEDDY: I kept everything.
14 A ¶ He crosses to her slowly, wipes his hands on his apron, and lifts the instrument with both hands, turning it over like an infant.
15 A Teddy folds her arms, then unfolds them, then reaches out and touches the keys without pressing.
16 D OSWALDO: The left side's wheezing.
17 D TEDDY: It always wheezed.
18 D OSWALDO: Not like this.
19 A ¶ He presses the bellows.
* 20 A A long, tired breath.
21 A They both listen.
* 22 A A chord, soft and sour, hangs between them.
23 A Teddy closes her eyes.
24 A Oswaldo sets it down and hesitates, hands hovering.
25 D TEDDY: Can you fix it?
26 D OSWALDO: I could.
27 D TEDDY: But?
28 D OSWALDO: It's a better sound broken.
29 A ¶ She laughs, a short, wet laugh, and wipes her eyes with her coat sleeve.
30 A He offers a rag.
31 A She takes it and does not use it.
* 32 A Rain drums the window.
33 A She picks up the case and shuts it, gently, over the instrument.
34 D TEDDY: I'll come back for it.
35 D OSWALDO: You said that before.
36 D TEDDY: I know.
37 A ¶ She walks out.
* 38 A The bell over the door rings.
39 A He stands at the counter with the open lid, listening to the last note fade from the felt.

### SCENE s01214 | INT. CALL CENTER IN A FORMER CHURCH - DAY
Detected names (may be incomplete or contain aliases): BLESSING, DESMOND PEMBERTON-AGYEMAN, LAVINIA OKORO-HALVERSEN, WORLD'S OKAYEST AGENT
* 1 A ¶ Cubicles fill the nave.
* 2 A Gothic arches overhead, fluorescent panels bolted to the vaulted ceiling.
* 3 A Where the altar stood, a standing desk with a headset-wearing mannequin.
* 4 A Stained glass casts blue and amber light on rows of identical monitors.
* 5 A A hand-lettered banner above the apse reads: "YOUR CALL IS A BLESSING."
6 A ¶ At a long table once used for communion, DESMOND PEMBERTON-AGYEMAN (40s, gray suit, lanyard) stands holding a cardboard box of personal effects.
7 A Across from him sits LAVINIA OKORO-HALVERSEN (50s, floral blouse, reading glasses pushed up on her head), the floor manager, a clipboard in her lap.
8 D LAVINIA: Desmond. Sit.
9 D DESMOND: I'd rather stand, Lavinia.
10 D LAVINIA: It's not a sermon.
11 D DESMOND: It feels like one.
12 A ¶ She pats the pew-bench beside her.
13 A He doesn't move.
* 14 A A phone rings somewhere in the nave and is picked up on the second ring.
15 D LAVINIA: Fourteen years, Desmond.
16 D DESMOND: Fifteen in March.
17 D LAVINIA: Fifteen. Well, you've done admirable work.
18 D DESMOND: Is this the part where you tell me why I'm leaving?
19 D LAVINIA: It isn't a leaving. It's a reallocation.
20 D DESMOND: Of what?
21 D LAVINIA: Of you.
22 D DESMOND: To where?
23 D LAVINIA: Upstairs.
24 D DESMOND: We have an upstairs?
25 D LAVINIA: The bell tower.
26 A ¶ He looks up.
* 27 A Far overhead, a narrow staircase vanishes into the rafters.
* 28 A Dust turns in a shaft of colored light.
29 D DESMOND: What's in the bell tower?
30 D LAVINIA: The new quality-assurance team.
31 D DESMOND: How many on it?
32 D LAVINIA: One.
33 D DESMOND: Who?
34 D LAVINIA: You.
35 A ¶ Desmond sets the box on the table.
36 A Rummages in it, finds a mug that reads "WORLD'S OKAYEST AGENT," holds it for a long moment, and places it carefully on the desk.
37 D DESMOND (to the nave): Everyone. A moment, please.
* 38 A ¶ The call center falls silent.
39 A Forty heads in forty cubicles rise above forty partitions.
40 D DESMOND [CONT'D] (to the room): I'm being promoted to the bell tower.
* 41 A ¶ Silence.
* 42 A Somewhere, a headset clatters to the floor.
43 A Somewhere in the back, someone begins to clap, stops, and thinks better of it.
44 D LAVINIA (low, to Desmond): Please don't make a scene.
45 D DESMOND (low, to Lavinia): I'm only making an announcement.
46 D LAVINIA: That's how scenes begin.
47 A ¶ He lifts the box.
48 A Turns toward the staircase.
49 A Pauses at the foot of it, one hand on the rail.
50 D DESMOND (to himself): Fifteen years. Finally, a view.
51 A ¶ He climbs.
* 52 A The stairs creak.
53 A Lavinia lowers the clipboard onto the communion table and gazes up after him, her face unreadable in the colored light.
54 D LAVINIA (quietly, to no one): Do you know, I think he'll do very well up there.
* 55 A ¶ A bell rings, once, from high above.
* 56 A All forty headsets chime at the same instant: "Thank you for calling.
* 57 A Your call is a blessing."

### SCENE s01215 | EXT. SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): BRONWYN ACHEBE-TULLY
* 1 A ¶ An infinite white plain.
* 2 A Heat shimmers off the crust.
* 3 A The horizon is a thin, wavering line.
* 4 A A dead jeep sits tilted on a collapsed tire, doors open.
* 5 A A rusted antenna leans from its roof.
* 6 A Sky the color of old bone.
7 A ¶ BRONWYN ACHEBE-TULLY (40s, sun-cracked lips, cotton scarf wrapped around her head, a backpack with its straps cut) sits in the jeep's shade, knees to her chest.
8 A She holds a battered voice recorder.
* 9 A A canteen hangs empty from the mirror.
10 A ¶ She turns the recorder on.
* 11 A A red light blinks.
12 D BRONWYN: Day four. Or five. I've lost the count.
13 A ¶ She lays her head against the door.
14 D BRONWYN [CONT'D]: Water's gone. Last of the crackers went yesterday. The tire is flat and the spare is flatter. The radio died on day two.
15 A ¶ She lifts the antenna in her hand and lets it drop.
16 D BRONWYN [CONT'D]: They told me this place has no sound. They were wrong. It ticks. Like a clock somewhere underground.
17 A ¶ She wipes salt from her eyes.
18 D BRONWYN [CONT'D]: If anyone finds this, tell my sister the key is under the geranium. The one with the red pot. She'll know.
19 A ¶ She stops.
20 A Presses stop.
21 A Rewinds.
* 22 A The tape whirs.
23 D BRONWYN [V.O.] (from recorder, tinny): ...Day four. Or five. I've lost the count.
24 A ¶ She listens to her own voice for a time.
25 A She smiles a little.
26 A She presses stop again, then record.
27 D BRONWYN [CONT'D] (softer): I'm not afraid. That's the odd thing. I thought I'd be afraid.
28 A ¶ She watches the horizon.
* 29 A A shape wavers there, a mirage, a pillar of shimmer.
30 D BRONWYN [CONT'D]: There's something out there. A person, maybe. Or the heat. It's walking.
31 A ¶ She stands, unsteady, one hand on the roof.
32 D BRONWYN [CONT'D]: I'll go meet it. If that's all right.
33 A ¶ She sets the recorder on the jeep's hood, still running, and starts across the white plain.
34 D BRONWYN [V.O.] (from recorder, fading): ...if that's all right.
* 35 A ¶ The light blinks.
* 36 A The wind scours the plain.
* 37 A Her footprints are the only mark.

### SCENE s01216 | INT. HOTEL BALLROOM - FIRE DRILL - DAY
Detected names (may be incomplete or contain aliases): BARCLAY PENHALLOW-DIOP, ROSAMUND TAKAHASHI-FINN, WINSTON ABERNATHY-KOH
* 1 A ¶ A chandeliered room set for a banquet no one will attend.
* 2 A Round tables, white cloths, a podium.
* 3 A An alarm klaxon whoops overhead.
4 A ¶ BARCLAY PENHALLOW-DIOP (50s, regional director, bluetooth earpiece) stands on a chair waving a laminated evacuation map.
5 A ROSAMUND TAKAHASHI-FINN (30s, safety warden, high-vis vest over a pantsuit) points a megaphone at the exits.
6 A WINSTON ABERNATHY-KOH (60s, accountant, gripping his briefcase) sits calmly at a table, peeling an orange.
7 D BARCLAY: Everybody remain calm and form an orderly line!
8 D ROSAMUND (through the megaphone): Sir, please step down from the chair.
9 D BARCLAY: I'm elevated for visibility!
10 D ROSAMUND: You're elevated for liability!
11 A ¶ Winston peels a long ribbon of orange.
12 A Barclay jumps down, stumbles, and knocks over a centerpiece.
13 A Rosamund rushes to catch it, collides with Barclay, and both go down in a heap of tablecloth and carnations.
* 14 A The klaxon whoops.
15 A Winston places an orange segment in his mouth.
16 D WINSTON: Is it a real fire?
17 D ROSAMUND (muffled, from the floor): It's a drill!
18 D WINSTON: Then why are you on the floor?
19 D BARCLAY (also from the floor): Realism.
* 20 A ¶ The klaxon cuts off.
* 21 A Silence settles over the ballroom like a bad dream.
22 A Winston finishes the orange.
23 A Rosamund and Barclay untangle slowly.
24 A Barclay straightens his earpiece.
25 D BARCLAY [CONT'D]: Good. Excellent. Very instructive.
26 D ROSAMUND: Sir, you failed.
27 D BARCLAY: I failed instructively.

### SCENE s01217 | INT. FLORIST'S COLD ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IMANI BRAITHWAITE-SOTO, TOBY, ABERNETHY-KWON, SERAFINA MOREAU-ODE, CALLUM DRAYTON
* 1 A ¶ Buckets of white lilies, rows of roses in plastic sleeves.
* 2 A Breath fogs.
* 3 A A compressor hums.
4 A ¶ DETECTIVE IMANI BRAITHWAITE-SOTO (40s, long coat) stands at the doorway, gun lowered.
5 A Across the aisle, TOBIAS "TOBY" ABERNETHY-KWON (30s, florist's apron, shears in hand) stands motionless among the lilies.
6 A Behind him, half hidden by a rack, SERAFINA MOREAU-ODE (30s, wedding dress under a parka) crouches.
7 A And in the corner, CALLUM DRAYTON (50s, wet suit jacket), the groom, lies on the floor, hand pressed to his side.
8 D IMANI: Put down the shears.
9 D TOBY: I'm not holding them against anyone.
10 D SERAFINA (from behind the rack): He's telling the truth.
11 D IMANI: Then who stabbed him?
12 D CALLUM (through his teeth): She did.
13 A ¶ Everyone looks at the rack.
14 A Serafina rises slowly, empty-handed.
15 A Toby steps in front of her.
16 D TOBY: He came at her. She was defending herself.
17 D IMANI: Mr. Abernethy-Kwon, step aside.
18 D TOBY: No.
19 D IMANI (to Serafina): Ms. Moreau-Ode, is that true?
20 D SERAFINA: Yes.
21 D CALLUM (to Imani): She's lying.
22 D IMANI: Mr. Drayton, don't move. Help is coming.
23 A ¶ Callum lets his head fall back among the lilies.
24 A Toby lowers the shears and lays them on a bucket.
25 A He takes Serafina's hand.
26 A Imani holsters her gun and kneels beside Callum, pressing her palm over his hand to hold the wound.
27 D IMANI [CONT'D] (quietly): Stay with me.
* 28 A ¶ Far off, a siren rises.

### SCENE s01218 | INT. ORBITAL LAUNDROMAT - ZERO-G - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): DOROTHY OKONKWO-REYES, LUDWIG ABDELKADER, KALINDA ROSENBAUM-PRICE, THADDEUS MWANGI-COLE
* 1 A ¶ A ring-shaped station module lined with front-loading machines.
* 2 A Wet clothes drift in loose clouds.
* 3 A Each dryer window glows green.
* 4 A A hand-stamped sign reads: "NO SOCKS IN THE VENT."
5 A ¶ DOROTHY OKONKWO-REYES (40s, mag-boots, plaid shirt tucked in) sits strapped to a bench.
6 A LUDWIG ABDELKADER (60s, quilted vest) floats upside down above the folding table.
7 A KALINDA ROSENBAUM-PRICE (20s, a cloud of dark hair held down by a net) clings to a handhold by the change machine.
8 A And a big, quiet man, THADDEUS MWANGI-COLE (50s, a toolbelt, a single sock stuck to his forehead), hovers by the airlock.
9 D DOROTHY: Who put the red one in with the whites?
10 D LUDWIG: It wasn't me.
11 D KALINDA: It wasn't me.
12 D DOROTHY: Then who?
13 D LUDWIG: Dorothy, we are four people on a ring in orbit. It was one of us.
14 D KALINDA: Or the ring.
15 D DOROTHY: The ring doesn't do laundry.
16 D LUDWIG: It does everything else.
17 D THADDEUS (peeling the sock from his forehead): It was me.
18 A ¶ All three turn.
19 A Thaddeus holds up the red shirt.
* 20 A Pink cloth drifts around it like a nebula.
21 D DOROTHY: Thaddeus.
22 D THADDEUS: I thought it would blend.
23 D KALINDA: It blended.
24 D LUDWIG: Everything is now the color of a salmon.
25 D DOROTHY: Our uniforms were white!
26 D THADDEUS: They're coral now.
27 D KALINDA (whisper): It's not a bad look.
28 D LUDWIG: Kalinda!
29 D KALINDA: What? It isn't.
30 A ¶ Dorothy unclips from the bench, kicks off, and sails across the module to the nearest dryer.
31 A She slaps it.
* 32 A The drum slows.
* 33 A Pink socks and shirts tumble in the green glow.
34 D DOROTHY (softly): Nobody mention this at the briefing.
35 D LUDWIG: Agreed.
36 D KALINDA: Agreed.
37 D THADDEUS: Agreed.
* 38 A ¶ The dryer chimes.
* 39 A A single white sock floats free.

### SCENE s01219 | INT. SLEEP CLINIC - OBSERVATION ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HORTENSE ADEWALE-SUMNER, TECHNICIAN BARNABAS QUILL-MENDOZA
* 1 A ¶ A dim control room.
* 2 A A bank of monitors shows a bedroom set on the other side of a glass wall: a narrow bed, a nightstand, a patient in sensor wires.
* 3 A Green EEG traces scroll across the screens.
4 A ¶ DR. HORTENSE ADEWALE-SUMNER (50s, cardigan, reading glasses) sits at the console with a pencil behind her ear.
5 A Beside her, TECHNICIAN BARNABAS QUILL-MENDOZA (20s, scrubs, a tiny plant on his desk) watches the traces with his chin on his hand.
6 D HORTENSE: Delta waves are steady.
7 D BARNABAS: He's gone deep.
8 D HORTENSE: Since eleven.
9 A ¶ She sips tea.
10 A Sets the cup down.
11 A Writes a note.
12 A Barnabas shifts in his chair and swivels half-turn toward her.
13 D BARNABAS: Doctor, may I ask something?
14 D HORTENSE: You may ask.
15 D BARNABAS: Does anyone ever really sleep in here?
16 D HORTENSE: Everyone sleeps. That's the problem.
17 A ¶ On the monitor, the sleeping patient rolls over.
* 18 A A wire tugs loose.
* 19 A The trace stutters, flattens, and spikes.
20 A Hortense and Barnabas lean forward at the same moment, shoulders bumping.
21 D HORTENSE [CONT'D]: Check the electrode.
22 D BARNABAS: Left temple.
23 A ¶ He stands.
24 A She stands.
25 A They both reach for the door at the same time, stop, and she gestures for him to go first.
26 A He does.
27 A She hesitates, watching the monitor, then follows.
28 A ¶ Through the glass, Barnabas crosses the bedroom, adjusts the wire, and smooths the sleeper's hair.
29 A Hortense stays in the doorway with her arms folded.
30 A The patient murmurs something.
31 A The two of them freeze, then look at each other.
32 D BARNABAS (whisper): What did he say?
33 D HORTENSE (whisper): Something about a window.
34 A ¶ They wait.
35 A The sleeper's breathing lengthens.
36 A Barnabas backs away on tiptoe, brushes the plant, and catches it before it falls.
37 D HORTENSE [CONT'D] (whisper): Good catch.
38 D BARNABAS (whisper): Thanks.
39 A ¶ They return to the console.
* 40 A The traces settle into long green waves.
41 A Hortense picks up the tea, finds it cold, and drinks it anyway.

### SCENE s01220 | INT. GRAIN ELEVATOR CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TOMASZ KOWALCZYK, ODALYS REYES-MBEKI, BRANKA ILI, PETROS ANAGNOS, WILLEM
* 1 A ¶ A glass booth bolted to the side of a concrete silo.
* 2 A Dust on every surface.
* 3 A Gauges tick.
* 4 A A wall of dead monitors, one live.
5 A ¶ TOMASZ KOWALCZYK (50s, shift supervisor, cardigan over a hi-vis vest) pours coffee into four mugs.
6 A Doesn't spill a drop.
7 A ¶ ODALYS REYES-MBEKI (30s, auditor, grey blazer, laptop bag still on her shoulder) watches the pour.
8 A ¶ BRANKA ILIĆ (40s, maintenance, oil-stained thumbs) sits on an overturned bucket, eating sunflower seeds.
9 A ¶ PETROS ANAGNOS (20s, scale operator, headphones around his neck) stares at the live monitor.
10 A ¶ WILLEM (teen, intern, too-big boots) stands by the door like he's waiting to be sent home.
11 D TOMASZ: Milk's off. Sorry.
12 D ODALYS: I don't take milk.
13 D BRANKA: She doesn't take anything.
14 D TOMASZ: Everybody takes something.
15 A ¶ Odalys sets down her bag.
16 A Sits.
17 A Opens the laptop.
* 18 A The fan whirs loud in the quiet.
19 D PETROS: Truck four's late.
20 D BRANKA: Truck four's always late.
21 D ODALYS: Truck four logged two loads Tuesday. The scale shows one.
22 A ¶ Nobody moves.
23 A Branka cracks a seed.
24 A Spits the husk into her palm.
25 D TOMASZ: Scale drifts.
26 D PETROS: It doesn't drift. I calibrate it.
27 D BRANKA: Every Friday.
28 D PETROS: Every Friday.
29 D ODALYS: Then it's eleven tons of wheat that went somewhere.
30 D TOMASZ: Eleven. Is that the number?
31 D ODALYS: Eleven point four.
32 A ¶ Tomasz slides a mug toward her.
33 A She doesn't touch it.
34 A He slides one toward Willem too.
35 A Willem takes it with both hands.
36 D WILLEM: Thanks, Mr. Kowalczyk.
37 D TOMASZ: Tomasz.
38 D BRANKA: Don't encourage him.
39 D PETROS (to Odalys): You looked at the weighbridge camera?
40 D ODALYS: It's been offline since March.
41 D BRANKA: Since February.
42 D TOMASZ: March.
43 D BRANKA: February. I filed the ticket.
44 D TOMASZ: You filed it in March.
45 A ¶ Branka shrugs.
46 A Another seed.
47 A Petros pulls his headphones up over one ear, then lets them drop again.
48 D ODALYS: Somebody wants to say something?
* 49 A ¶ Silence.
* 50 A Outside, a conveyor belt shifts and groans.
* 51 A The mugs steam.
52 D WILLEM: Truck four's here.
* 53 A ¶ Headlights sweep across the glass.
54 A Everyone turns.
55 A Nobody stands.
56 D TOMASZ: Let him wait.
57 D PETROS: He'll honk.
58 D BRANKA: He won't.
* 59 A ¶ A long beat.
* 60 A No honk.
61 D ODALYS: That's what I thought.
62 A ¶ She types something.
63 A Tomasz drinks his coffee.
64 A His hand is perfectly steady.
65 D TOMASZ: You drove four hours for this?
66 D ODALYS: Five. Traffic.
67 D BRANKA: Petros, show her the book.
68 D PETROS: What book?
69 D BRANKA: The paper book.
70 D PETROS (too fast): There isn't a book.
71 A ¶ Branka looks at him.
72 A Cracks a seed.
73 A Looks at Tomasz.
74 D TOMASZ: There's a book.
75 A ¶ Petros opens a drawer.
76 A Takes out a battered green ledger.
77 A Doesn't hand it over.
78 A Holds it flat on his knees.
79 D ODALYS: I'll need that.
80 D TOMASZ: In the morning.
81 D ODALYS: Now.
82 D TOMASZ: The morning, Ms. Reyes-Mbeki. Coffee first. Sleep. Then the book.
83 A ¶ Odalys closes the laptop halfway.
84 A Studies each face in turn.
85 A Willem looks at the floor.
86 A Branka looks at the ceiling.
87 A Petros looks at the ledger.
88 A ¶ Tomasz smiles, mild as milk that isn't off.
89 D ODALYS: Fine.
90 A ¶ She picks up the mug.
91 A Drinks.
92 A Makes a small face.
93 D ODALYS [CONT'D]: It's cold.
94 D TOMASZ: It was hot when I poured it.
* 95 A ¶ Outside, the headlights go out.
96 T FADE OUT.

### SCENE s01221 | INT. LIGHTHOUSE KEEPER'S COTTAGE - KITCHEN - DUSK
Detected names (may be incomplete or contain aliases): HANNELORE VOSS, INGRID VOSS, DESMOND OKAFOR, RADIO, ^INGRID
* 1 A ¶ A stove, a table, a window full of grey sea.
* 2 A A radio crackles on the shelf.
3 A ¶ HANNELORE VOSS (60s, retired keeper, sleeves rolled) peels potatoes.
4 A Her daughter INGRID VOSS (30s, city coat still on) hasn't sat down.
5 A ¶ Across the table, DESMOND OKAFOR (40s, estate agent, folder in hand) waits with a patient smile.
6 D HANNELORE: Tea?
7 D DESMOND: We're fine, thank you.
8 D HANNELORE: Ingrid?
9 D INGRID: Mum, sit down.
10 A ¶ Hannelore keeps peeling.
* 11 A The skin curls into the sink.
12 D DESMOND: The valuation is generous, Mrs. Voss. The Trust will keep the light running.
13 D HANNELORE: It's been running since 1894.
14 D INGRID: It's been failing since 2009.
15 D DESMOND: The structural report was quite specific.
16 A ¶ Hannelore sets down the knife.
17 A Wipes her hands, slowly, on a cloth.
18 D HANNELORE: She read the report before I did. She always was quick.
19 A ¶ Ingrid looks away.
20 D INGRID: Mum.
21 D HANNELORE: Your father painted that railing every spring. She remembers.
* 22 A ¶ The radio hisses.
23 D RADIO [V.O.] (crackling): Coastguard to Skerry Light. Weather warning. Gale force nine from the northwest by twenty hundred. Over.
24 A ¶ Nobody moves.
25 A Hannelore doesn't reach for the handset.
26 D DESMOND: Shouldn't someone answer that?
27 D HANNELORE: It's a recording. They stopped sending real people years ago.
28 D INGRID: Sign it, Mum.
29 D HANNELORE: She wants me gone before the storm.
30 D INGRID: I want you warm.
31 D HANNELORE: I was warm when she left for London.
32 A ¶ Ingrid's jaw sets.
33 A Desmond slides the folder an inch closer.
34 D HANNELORE [CONT'D]: Don't push that at me.
35 D DESMOND: Mrs. Voss, I only--
36 D INGRID: Just let her breathe.
37 D HANNELORE: Stop talking for me!
38 D DESMOND: It's a standard form!
39 A ¶ Both speak at once.
40 D HANNELORE: You sold the house in Kiel.
41 D ^INGRID: You buried Dad here.
* 42 A ¶ Silence.
* 43 A The wind finds the window frame.
44 D HANNELORE: He wanted the sea.
45 D INGRID: He wanted you to leave. He told me. In the hospital.
46 A ¶ Hannelore hurls the potato.
* 47 A It strikes the wall, bursts, slides down the paint.
48 D HANNELORE: Liar!
49 A ¶ Ingrid doesn't flinch.
50 A Desmond stands.
51 A Nobody sits again.
52 D RADIO [V.O.] (crackling): Coastguard to Skerry Light. Do you copy? Over.
53 A ¶ Hannelore crosses to the shelf.
54 A Picks up the handset.
55 A Looks at it.
56 A Puts it down.
* 57 A ¶ The pen lies on the folder.
58 A She takes it.
59 T FADE OUT.

### SCENE s01222 | INT. FIELD HOSPITAL TENT - FLOODED VILLAGE - DAY
Detected names (may be incomplete or contain aliases): ADAEZE NWOSU, NURSE BARTEK, LAKSHMI, FENN
* 1 A ¶ Rain drums on canvas.
* 2 A Cots in rows, mud at the edges.
3 A ¶ DR. ADAEZE NWOSU (40s, scrubs under a rain poncho) kneels by a cot where a small boy sleeps.
4 A She checks his pulse, counts silently.
5 A ¶ NURSE BARTEK (30s, big, gentle) holds a drip bag high.
6 A He shifts it when she nods.
7 A ¶ The boy's mother, LAKSHMI (30s, soaked sari), grips the cot rail.
8 A She hasn't blinked in minutes.
9 A ¶ OLD MR. FENN (70s, ham-radio volunteer) hovers at the flap with a clipboard.
10 D ADAEZE: His pulse is steady, Lakshmi.
11 D LAKSHMI: He's so cold.
12 D ADAEZE: He will be for a while. That's the water.
13 A ¶ She pulls a foil blanket over the boy and tucks it under his chin.
14 D BARTEK: Colour's coming back, Doc.
15 D LAKSHMI: Ravi. Ravi, beta.
16 A ¶ She lowers her forehead to the rail and breathes out.
17 A Her shoulders drop.
18 D MR. FENN: Doctor Nwosu, the boat's here for the next group.
19 D ADAEZE: Tell them ten minutes, Mr. Fenn.
20 A ¶ He nods and leaves.
21 A Bartek lowers the drip bag onto a hook.
22 D BARTEK: You want me on the next cot, Doc?
23 D ADAEZE: Tea first, Bartek. You've been standing for six hours.
24 A ¶ He grins, tired.
25 A She stands, knees cracking, and lays a hand on Lakshmi's back.
26 T FADE OUT.

### SCENE s01223 | EXT. SALT FLAT - MIDDAY
Detected names (may be incomplete or contain aliases): BELLAMY, JUNIOR AKINTOLA, OLD DASH, CORAZÓN
* 1 A ¶ White to every horizon.
* 2 A The heat doesn't shimmer so much as hum.
* 3 A A pickup truck lies on its side, one wheel still turning, as if the world hadn't told it to stop.
4 A ¶ Three figures sit in the narrow shadow of the chassis, barely a hand's width of shade.
5 A ¶ CORAZÓN BELLAMY (50s, geologist, wide hat, lips cracked white) holds a canteen to the light and shakes it.
* 6 A Almost nothing sloshes.
7 A ¶ JUNIOR AKINTOLA (20s, driver, one sleeve torn off and wrapped around a swollen wrist) rocks in place, breathing through his teeth.
8 A ¶ OLD DASH, a woman of seventy known to everyone as DASH (rancher's daughter, braided silver hair, eyes narrowed to cracks), cuts a strip from her shirt with a pocketknife and does not look up.
9 D JUNIOR: It's six miles.
10 D DASH: It's nine.
11 D CORAZÓN: It's eleven if we drift north.
12 D JUNIOR: We can do eleven.
13 D DASH: You can't do three.
14 A ¶ He opens his mouth.
15 A Closes it.
16 A The wrapped wrist twitches against his chest.
17 D CORAZÓN: We wait for dusk.
18 D JUNIOR: Dusk, we're dead.
19 D DASH: Dusk, we're alive and walking.
20 D JUNIOR: Dusk, nobody comes. Nobody even knows.
21 D CORAZÓN: Somebody knows.
* 22 A ¶ A silence in which the metal ticks.
23 A Dash ties the strip around his wrist in a tight, practical knot.
24 A He yelps.
25 A She pats the knot twice, as if it were a dog.
* 26 A ¶ A sound.
* 27 A High, thin.
* 28 A Not wind.
* 29 A Not metal.
30 A ¶ All three go still.
* 31 A The sound again, rising.
* 32 A A pinprick of glare on the horizon, moving.
33 D JUNIOR (whispers): Is that...
34 D CORAZÓN: Don't.
35 D DASH: Mirror. Corazón, your mirror.
36 A ¶ Corazón scrabbles in her vest.
37 A Pulls out a cracked compact.
38 A Flips it open.
* 39 A Catches the sun and throws a white coin of light across the flat.
40 D JUNIOR: Left. Left, left!
41 D CORAZÓN: I know!
42 D DASH: Slow. Don't flash it. Hold it steady.
* 43 A ¶ The glare grows.
* 44 A A quad bike, kicking a plume of white.
* 45 A It slows.
* 46 A Stops fifty yards off.
47 A A hand rises from the rider.
48 A ¶ Junior breaks.
49 A Laughs, a wet cracked sound.
50 A Slides down against the wheel and lets his head fall back.
51 A ¶ Corazón lowers the mirror.
52 A Her hand is shaking now, finally.
53 A Dash lays her palm over it, firm, and holds it there.
54 D DASH [CONT'D]: Good girl.
55 D CORAZÓN: Don't call me that.
56 D DASH (almost a smile): Drink.
57 A ¶ She passes the canteen.
58 A Corazón drinks the last of it.
59 A Hands it to Junior first.
60 T FADE OUT.

### SCENE s01224 | INT. ABANDONED CARNIVAL HOUSE OF MIRRORS - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL QUINTANA, CATALINA QUINTANA, LIAM FAIRWEATHER
* 1 A ¶ Cracked glass everywhere.
* 2 A A flashlight beam jitters across a hundred reflections.
3 A ¶ MARISOL QUINTANA (20s, hoodie, camera on a strap) walks backward, panning.
4 A Her sister CATALINA QUINTANA (20s, same hoodie, different colour) holds the light.
5 A ¶ Between them, LIAM FAIRWEATHER (20s, rental-car keys in a fist) steps on glass and swears under his breath.
6 D MARISOL: Stay close.
7 D CATALINA: I am close.
8 D LIAM: She's closer than you.
* 9 A ¶ Something thumps on the other side of the glass.
10 A All three freeze.
11 A Catalina swings the light.
* 12 A Nothing.
* 13 A Only their own faces, split into pieces.
14 D MARISOL (whispering): Count.
15 D CATALINA: Three.
16 D LIAM: Count the reflections.
17 A ¶ She does.
18 A Her lips move.
19 A She gets to a number and stops.
* 20 A ¶ A breath, not theirs, fogs the mirror at the end of the corridor.
21 A A shape steps out of it that is not one of them.
22 A ¶ Marisol lifts the camera.
23 A Her hands don't shake.
24 A She presses record.
25 A ¶ Liam drops the keys.
* 26 A They ring on the floor like a bell.
* 27 A ¶ The light dies.
28 T CUT TO BLACK.

### SCENE s01225 | INT. DRIVING SCHOOL CAR - PARKING LOT - DAY
Detected names (may be incomplete or contain aliases): GRETCHEN LUND, GUSTAVO PEREIRA, GUSTAVO'S MOTHER, TIMA, FÁTIMA
* 1 A ¶ A dented Corolla with a roof sign and a dual brake pedal.
* 2 A Cones in a tight figure-eight.
3 A ¶ GRETCHEN LUND (60s, instructor, clipboard, whistle) rides shotgun.
4 A GUSTAVO PEREIRA (30s, nervous student) grips the wheel.
5 A In the back seat, GUSTAVO'S MOTHER, DONA FÁTIMA (60s, handbag on her lap), watches both.
6 D GRETCHEN: Mirror, signal, ease off.
7 D GUSTAVO: Mirror, signal...
8 D FÁTIMA: Signal, filho.
9 A ¶ He nudges the stalk.
* 10 A Wipers start.
11 A He tries again.
* 12 A Washer fluid sprays.
13 D GRETCHEN: Other one.
14 D FÁTIMA: Your father also never knew his stalks.
15 D GRETCHEN: Ma'am, I'd ask you not to comment.
16 A ¶ Fátima presses her lips together.
17 A Gustavo finds the indicator.
* 18 A It ticks.
19 A ¶ He takes the first cone.
20 A Clips it.
* 21 A It rolls under the bumper with a thunk.
22 D GRETCHEN [CONT'D]: That's a fail. Reset.
23 D FÁTIMA: It was a very small cone.
24 D GRETCHEN: It was a regulation cone!
25 A ¶ She snaps the clipboard against her knee.
26 A He flinches.
27 A His foot slips off the clutch.
* 28 A The Corolla bucks, stalls.
* 29 A ¶ Silence.
* 30 A The indicator ticks.
31 A He leans his forehead against the wheel.
32 D FÁTIMA (sweetly): Maybe I should drive.
33 A ¶ Both look at her.
34 A She smiles.
35 A Gretchen slowly takes a whistle from her mouth.
36 T FADE OUT.

### SCENE s01226 | INT. COACHING INN - COMMON ROOM - NIGHT - 1817
Detected names (may be incomplete or contain aliases): INNKEEPER SILAS PRYCE, WOMAN, DRIPPING TRAVELLING CLOAK, YOUNG SOLDIER, STRANGER, HALE
* 1 A ¶ A low room, black beams, a hearth coughing smoke.
* 2 A Rain beats the shutters.
* 3 A A single tallow candle gutters on a long table scarred with a century of knives.
4 A ¶ INNKEEPER SILAS PRYCE (50s, bald, apron stiff with grease) wipes the same tankard he has wiped for an hour.
5 A He is a man who has learned to be furniture.
6 A ¶ At the far end, a WOMAN IN A DRIPPING TRAVELLING CLOAK (30s, pale, gloves the colour of wet slate) sits very upright, her hands folded.
7 A She has not removed her bonnet.
* 8 A Rain runs from its ribbons onto her collar.
9 A ¶ By the fire, a YOUNG SOLDIER (20s, red coat unbuttoned, one boot off) toasts his stockinged foot and does not look at either of them.
10 D SILAS (to the room): Last coach was due at nine. Roads are drowned between here and Dunstable. Nobody leaves tonight.
11 A ¶ The soldier grunts.
12 A The woman does not move.
13 D SILAS [CONT'D] (to the woman): Ma'am, will you be wanting a room?
14 D STRANGER: I will want to sit.
15 D SILAS: Sit as long as you please, then.
16 A ¶ He goes back to the tankard.
* 17 A The fire pops.
* 18 A A log collapses.
19 D YOUNG SOLDIER (muttering, to the flames): God rot this country. God rot these roads.
20 A ¶ The stranger turns her head, slowly, toward him.
21 A Studies the unbuttoned coat.
22 A The bare foot.
23 D STRANGER: You are far from your regiment, sir.
24 D YOUNG SOLDIER (not turning): I'm where I'm sent.
25 D STRANGER: By whom?
26 A ¶ He does not answer.
27 A His heel rubs the hearthstone, up and down.
28 D SILAS: Leave the lad be, ma'am. He's had a hard road.
29 D STRANGER: We all have. It is why we are here.
30 A ¶ She rises.
* 31 A The chair legs scrape.
32 A She crosses the room at a measured pace and stops by the table, close enough to the candle that her face is lit from below for the first time: a long jaw, grey eyes, a scar that bisects one eyebrow.
33 D STRANGER [CONT'D]: Landlord. How many guests do you keep?
34 D SILAS (guarded): Three tonight, now. Yourself, the lad, and me.
35 D STRANGER: Four, I think. Counting the one in the cellar.
36 A ¶ Silas's tankard stops.
37 A The cloth hangs in his hand.
38 D SILAS: There's none in my cellar.
39 D YOUNG SOLDIER (finally turning): Captain Hale.
40 A ¶ The stranger looks at him.
41 A Something in her face releases, like a hand opening.
42 D HALE: You know me, then.
43 D YOUNG SOLDIER: Everyone knows you. They said you'd hanged.
44 D HALE: They said that of my husband.
45 A ¶ Silas sets the tankard down at last.
46 D SILAS (to himself, barely audible): Lord. Lord, forgive an old fool.
47 D HALE (to the whole room): Nobody will be hurt. I have come for what is in the cellar, and then I shall go back into the rain.
48 A ¶ The soldier shakes his head.
49 A He reaches for the boot he has taken off, and for the sword beside it.
50 D YOUNG SOLDIER: I can't let you.
51 D HALE: No. I know. That is why I wore the gloves.
52 A ¶ She raises her hands.
* 53 A The wet slate gloves are stitched, at the knuckles, with something small and bright.
* 54 A ¶ The candle flares.
* 55 A The shutters bang open on the storm.
56 A ¶ SMASH CUT TO BLACK.

### SCENE s01227 | INT. UNDERGROUND CURLING CLUB - SHEET THREE - NIGHT
Detected names (may be incomplete or contain aliases): KOLYA, ARSENIEV, PADMA IYENGAR, TEDDY, BRAVO, JUNE ASHBY-LANE, REFEREE OKONKWO, ^JUNE
* 1 A ¶ A converted subway platform.
* 2 A Tile walls, strip lights, a stripe of imported ice laid down over concrete.
* 3 A Condensation drips from the ceiling in a slow clock.
* 4 A The air smells of coffee and old wool.
5 A ¶ Four players and a referee stand at the hog line, brooms in hand.
6 A ¶ NIKOLAI "KOLYA" ARSENIEV (50s, skip, cardigan, spine like a steel rod) crouches at the house, tapping the ice with his broom.
7 A ¶ PADMA IYENGAR (30s, lead, ponytail, scrappy) is on the far hack, stone ready.
8 A ¶ TEODORO "TEDDY" BRAVO (40s, second, sweaty, gold chain on top of his jersey) hovers behind her, nervous as a bridegroom.
9 A ¶ JUNE ASHBY-LANE (20s, vice, lean, focused in a way that seems to cost her) holds her broom like a rifle.
10 A ¶ Off to the side, REFEREE OKONKWO (60s, whistle, immaculate blazer) writes on a clipboard.
11 D KOLYA: Padma. Draw to the button. Light.
12 D PADMA: Light, Kolya.
13 D KOLYA: Don't throw it like it owes you money.
14 D PADMA: It does owe me money.
15 D TEDDY: It owes all of us, Padma. Throw the thing.
16 A ¶ She slides.
* 17 A The stone leaves her hand with a long grinding hum.
18 A Kolya and June sweep in step, their brooms hissing.
* 19 A The stone rolls, curls, drifts into the rings.
20 D JUNE: Hard! Hard! Hard!
21 D TEDDY: Off, off, it's fine, let it go!
* 22 A ¶ The stone dies.
* 23 A Sits on the edge of the button.
* 24 A Perfect.
25 A ¶ Padma rises out of her slide, grinning.
26 A Teddy claps his hands once, then covers his mouth, as if he'd been caught laughing in church.
27 D OKONKWO (not looking up): Measure.
28 A ¶ He kneels and lays a plastic gauge across the stone.
* 29 A A hush.
* 30 A Drops of condensation tick on the ice.
31 D KOLYA (quietly): That is the match.
32 D OKONKWO: Eleven millimetres to the opposition.
33 A ¶ Kolya exhales.
34 A Teddy turns in a circle.
35 A June does not smile.
36 A She stares at her teammates and the smile she can't produce seems to push at the corners of her eyes.
37 D JUNE: Teddy.
38 D TEDDY: What?
39 D JUNE: You touched the stone.
40 A ¶ Everyone stops.
41 D TEDDY: I didn't.
42 D JUNE: Your sleeve. Your sleeve brushed the stone as it passed.
43 D TEDDY: Kolya, tell her.
44 D KOLYA: Teodoro.
45 D TEDDY (high): It was the draught!
46 D OKONKWO (rising, clipboard lifted): Sheet three, burned stone. It comes off.
47 D PADMA: You cannot be serious.
48 D ^JUNE: Then take it off.
49 A ¶ They speak together, flat and angry, over each other.
50 A Okonkwo does not blink.
51 A He picks the stone up with both hands and carries it off the ice.
52 A ¶ Kolya takes off his glasses.
53 A Folds them.
54 A Slips them into the cardigan pocket as though he were closing a funeral.
55 D KOLYA: Five years of Thursdays.
56 A ¶ He turns and walks the length of the sheet.
* 57 A The brooms fall one by one behind him.
* 58 A Teddy's is the last, and it makes the loudest sound.
59 T FADE OUT.

### SCENE s01228 | INT. REHEARSAL STUDIO - FORMER BELL FOUNDRY - AFTERNOON
Detected names (may be incomplete or contain aliases): OZZIE, TREMBLAY, DELPHINE MARCHAND, HIRO TANABE, MARGIT
* 1 A ¶ A long brick hall that smells of cold metal and dust.
* 2 A Sunlight slants through high windows onto a row of bronze bells hung on a rack like sleeping bats.
* 3 A A single upright piano, lid open.
4 A ¶ OSWALDO "OZZIE" TREMBLAY (60s, choirmaster, silk scarf, a frail dignity) stands at the piano, turning pages of a score that does not need turning.
* 5 A ¶ Three chairs.
* 6 A Only two are filled.
7 A ¶ DELPHINE MARCHAND (30s, soprano, beautiful in a distracted way) hums a scale under her breath.
8 A ¶ HIRO TANABE (30s, baritone, sleeves rolled, forearm tattoo of a tide chart) studies his phone.
* 9 A ¶ The third chair is empty.
10 A Ozzie glances at it.
11 A Glances away.
12 D OZZIE: Shall we start from the Agnus Dei?
13 D DELPHINE: Ozzie, Margit isn't here.
14 D OZZIE: She's running late.
15 D HIRO: She's been running late for six weeks.
16 D OZZIE: Hiro.
17 D HIRO: I'm only saying.
18 D DELPHINE: She texted me. She said she'd be here.
19 D OZZIE: There. You see?
20 A ¶ He sets the score on the piano.
21 A Presses a chord.
* 22 A It rings in the hall for a long moment and slowly dies against the bronze.
23 D DELPHINE: It's nice. The light. It's nice in here today.
24 D OZZIE: It is.
25 A ¶ He smiles at her.
26 A It is a kind smile and it takes nearly everything he has.
* 27 A ¶ The telephone at the back of the hall rings.
* 28 A An old black rotary.
29 A Everyone looks.
30 A Nobody rises.
* 31 A It rings six times.
32 A Ozzie crosses at last and lifts the receiver.
33 D OZZIE [CONT'D]: Foundry. Yes.
34 A ¶ He listens.
35 A His hand tightens on the cord.
36 D MARGIT [V.O.] (through the receiver, thin): Ozzie. It's me. I'm at the hospital.
37 D OZZIE: Where, Margit?
38 D MARGIT [V.O.]: St. Anne's. They said it's... They said it's quiet. They said you'd want to know before the others.
39 D OZZIE (softly): Thank you, my dear.
40 A ¶ He hangs up.
41 A For a moment he doesn't turn.
42 A Then he does, and the two of them look at his face, and they know.
43 D HIRO: Ozzie?
44 D DELPHINE: Who was it?
45 D OZZIE: The thing about a bell is that it doesn't ring because you strike it.
46 D HIRO: Ozzie.
47 D OZZIE: It rings because of what it's shaped like on the inside.
48 A ¶ He takes a mallet from the rack.
49 A Lifts it.
50 A The largest bell swings gently, and he strikes it once.
51 A The note fills the hall, enormous and golden, and the two singers stand slowly as it fades.
52 T FADE OUT.

### SCENE s01229 | INT. HARBOUR PILOT STATION - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE INSPECTOR RAKESH MALHOTRA, ANSELM DRUMMOND, HARBOUR CLERK BIRGITTA STRAND
* 1 A ¶ A cramped prefab office on stilts above a container yard.
* 2 A Radar sweeps on a small green screen.
* 3 A A kettle, three mugs, a corkboard of tide tables.
* 4 A Rain on a tin roof.
5 A ¶ DETECTIVE INSPECTOR RAKESH MALHOTRA (50s, creased raincoat, thorough rather than clever) sits on a plastic chair.
6 A His notebook is open on his knee.
7 A He has been here for two hours.
8 A ¶ Opposite him, harbour pilot ANSELM DRUMMOND (50s, navy jersey, neat grey beard) fills the kettle from a bottle.
9 A His hands are slow and exact.
10 A ¶ At the desk, HARBOUR CLERK BIRGITTA STRAND (20s, headset, laminated lanyard) taps keys on a battered keyboard.
11 A She is crying, but only in the way her throat works.
12 D MALHOTRA: You said you didn't see the container.
13 D DRUMMOND: I said I didn't see it come off the ship.
14 D MALHOTRA: And you didn't see it sit on the quay.
15 D DRUMMOND: It sat on the quay all week. Everyone saw it.
16 D MALHOTRA: Birgitta?
17 D BIRGITTA (not looking up): Container 4471. Customs hold on the fourteenth. Released on the sixteenth.
18 D MALHOTRA: Who released it?
19 D BIRGITTA: The system.
20 D MALHOTRA: The system did that on its own?
21 D BIRGITTA: Somebody clicked something.
22 A ¶ Drummond sets the kettle on its base and flicks the switch.
* 23 A The element begins to tick.
24 A He folds his arms and leans on the counter.
25 D DRUMMOND: Inspector, I've been piloting ships into this harbour for twenty-six years. I bring in tankers the length of the high street through a channel two hundred feet wide. I do not click things.
26 D MALHOTRA: I'm not saying you did.
27 D DRUMMOND: You are saying something.
28 A ¶ Malhotra turns a page.
* 29 A The paper rustles.
30 A He reads a line to himself, then looks at the corkboard, where the tide table for the fifteenth has a pencil mark in the margin.
31 D MALHOTRA: Whose handwriting is that?
32 D BIRGITTA (quickly): Mine.
33 D DRUMMOND: Hers.
34 D MALHOTRA: Neither of you looked.
35 A ¶ Birgitta swallows.
36 A Drummond rubs his beard with the back of one hand.
* 37 A The kettle starts to roar.
* 38 A Steam beads on the window.
39 D MALHOTRA [CONT'D]: At 2:10 on the fifteenth, a pilot cutter left this station with one man aboard. The log says it went out for a routine inspection of a buoy.
40 D DRUMMOND: It did.
41 D MALHOTRA: The buoy has been missing since March.
* 42 A ¶ Silence.
* 43 A The kettle clicks off.
44 A Nobody moves to pour.
45 D BIRGITTA (very quiet): It's my fault.
46 D DRUMMOND: Birgitta.
47 D BIRGITTA: I released the hold. He told me it was paperwork. He said the owners would say thank you.
48 D MALHOTRA: Who?
49 A ¶ She presses her fingers hard against her mouth.
50 A Drummond looks at her for a long time.
* 51 A The ticking of the cooling kettle fills the room.
52 A Then he sits, heavily, on the stool beside her, and takes her hand off the keyboard, and holds it in both of his.
53 D DRUMMOND: It was me, Inspector.
54 D MALHOTRA: I thought it might be.
55 D DRUMMOND: She was frightened. I told her what to click.
56 D MALHOTRA: That's what she'll say in court, as well?
57 D DRUMMOND: It's what happened.
58 A ¶ Malhotra closes the notebook.
59 A Slides it into his coat.
60 A Stands, bones popping.
61 A He goes to the counter, takes the kettle, and pours three mugs of water over three bare teabags.
62 A He sets the first before Birgitta, the second before Drummond, and holds the third himself.
63 D MALHOTRA: Drink it while it's hot. The car's at the gate. It'll wait.
64 D DRUMMOND: Thank you.
65 D MALHOTRA: Don't thank me yet.
66 A ¶ Drummond lifts the mug.
67 A His hands shake for the first time.
* 68 A A little tea spills onto the tide table, spreading across the pencil mark in a brown stain.
69 A ¶ Birgitta lays her head on his shoulder.
* 70 A Outside, a ship's horn sounds, long and low, from beyond the breakwater.
* 71 A It is the sound of something coming home.
72 T FADE OUT.

### SCENE s01230 | INT. NATURAL HISTORY MUSEUM - TAXIDERMY COLD STORE - NIGHT
Detected names (may be incomplete or contain aliases): YEVGENY BRODSKY, BASIL ACHTERBERG
* 1 A ¶ A walk-in freezer the size of a school gym.
* 2 A Steel racks of stuffed animals wrapped in clear plastic: a bear, a pair of okapi, a flock of sealed albatrosses.
* 3 A The hum of the compressors is constant.
4 A ¶ YEVGENY BRODSKY (40s, quilted jacket, frost on his eyebrows) kneels at a floor safe.
5 A A stethoscope hangs around his neck.
6 A He turns the dial a quarter click at a time.
7 A ¶ BASIL ACHTERBERG (60s, museum night guard's uniform, crisp, keys at his belt) stands over him with a thermos.
8 A He pours tea into the cap and offers it down.
9 D YEVGENY: I'm good.
10 D BASIL: It's minus eighteen. You're shivering.
11 D YEVGENY: I'm concentrating.
12 A ¶ Yevgeny doesn't look up.
13 A Basil sips the tea himself.
14 A Looks at a polar bear in its plastic shroud, nods to it like an old neighbour.
15 D BASIL: You like the quiet?
16 D YEVGENY: I like it when nobody talks.
17 D BASIL: He used to say that. Your father.
18 A ¶ Yevgeny's hand stops.
* 19 A Just for a heartbeat.
* 20 A The dial doesn't move.
21 D YEVGENY: You said you didn't know him.
22 D BASIL: I said I didn't know him well.
23 A ¶ He screws the cap back on the thermos.
24 A His expression is mild, neighbourly.
25 A Yevgeny resumes the dial.
* 26 A Click.
* 27 A Click.
* 28 A Click.
* 29 A ¶ The safe clunks open.
* 30 A Inside, a velvet bag.
31 A Yevgeny lifts it, weighs it, loosens the drawstring.
* 32 A A heavy stone slides into his glove: a rough diamond the size of a plum.
33 D YEVGENY [CONT'D] (low): There you are.
34 D BASIL: It's smaller than I thought.
35 D YEVGENY: It's always smaller.
36 D BASIL: Put it back.
37 A ¶ Yevgeny looks up.
38 A The thermos is still in Basil's right hand.
39 A In his left, steady as a stone, is a small black pistol.
40 D YEVGENY: Basil.
41 D BASIL: Put it back in the bag. Pull the string. Slide the bag back on the shelf. Close the door.
42 D YEVGENY: We said sixty-forty.
43 D BASIL: We did.
44 D YEVGENY: You said you were retiring.
45 D BASIL: I am. Tonight.
46 A ¶ Yevgeny draws the string slowly.
47 A Laying the bag in the safe, his hand lingers.
* 48 A Frost creeps up his sleeve.
49 D YEVGENY: How long have you known?
50 D BASIL: He told me what you'd come for. Before he died. He asked me to stand here.
51 A ¶ Yevgeny closes the safe door.
* 52 A The sound is small and final.
53 A He sits back on his heels, hands visible on his knees.
54 D YEVGENY: He said that?
55 D BASIL: He said, my boy will want to be a thief. Be there when he does.
* 56 A ¶ A long silence.
* 57 A The compressors hum.
58 A ¶ Basil lowers the pistol.
59 A Sets it on the nearest rack, next to the polar bear.
60 A Unscrews the thermos.
61 A Pours another cap of tea.
62 A ¶ He holds it out.
63 A This time Yevgeny takes it.
64 T FADE OUT.

### SCENE s01231 | INT. PARLOUR - SPEKE HOUSE - DAY - 1894
Detected names (may be incomplete or contain aliases): WOMAN, EVELINE ASHCROFT
* 1 A ¶ Shuttered.
* 2 A Sheets thrown over the furniture like drowned ghosts.
* 3 A A single shaft of light picks out a brass phonograph on a side table, its horn pointing at the door.
* 4 A ¶ No one.
* 5 A The clock on the mantel has stopped at twenty past four.
* 6 A ¶ The front door opens somewhere in the house.
* 7 A Footsteps.
* 8 A They cross a hall.
* 9 A Slow, then slower.
10 A ¶ A WOMAN steps into the parlour.
11 A EVELINE ASHCROFT (40s, black mourning silk, travelling veil thrown back, face closed like a locked drawer).
12 A She holds a leather satchel against her chest.
13 A ¶ She stands in the light and doesn't take it in.
14 A Her eyes go to the sheets, the clock.
15 A Then to the phonograph.
16 A ¶ She crosses and lifts the dust cloth from it.
* 17 A Beneath, a wax cylinder sits on the spindle, labelled in a young hand: For E. — Michaelmas.
18 A ¶ She sets down the satchel.
19 A Wipes her glove across the horn and winds the crank.
* 20 A Twelve turns.
21 A She sets the needle.
* 22 A ¶ A hiss, then a crackle.
* 23 A Then a voice, warm and bright, drifting in from a decade ago.
24 D EVELINE [V.O.] (young, laughing): Is it recording? Is it? Oh, Papa, say something to it.
* 25 A ¶ A pause on the cylinder.
26 A Eveline is frozen, one hand on the horn.
27 D EVELINE [V.O., CONT'D] (still laughing): Very well, I shall say something. I shall say that I am eighteen, and the house is mine for the summer, and I shall never, ever leave it.
* 28 A ¶ The recording hisses and breaks into laughter.
29 A Real Eveline's mouth moves, almost a smile, almost not.
30 A ¶ She takes the glove off, finger by finger.
31 A Touches the horn with her bare palm.
32 D EVELINE (quietly): Liar.
33 A ¶ She lifts the needle.
* 34 A The room goes silent.
35 A She sits on a sheeted chair, and the dust stirs up around her in the light like smoke.
36 A ¶ She doesn't weep.
37 A She looks at the clock.
38 A She stands and crosses to it, opens the glass, and with one finger, restarts the pendulum.
* 39 A ¶ It ticks.
40 T FADE OUT.

### SCENE s01232 | INT. FERRY TERMINAL WAITING ROOM - IMPROVISED COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE ZUZANNA PRZYBYLSKA, ATTORNEY CASSIUS WREN, CANCELLED
* 1 A ¶ Plastic chairs.
* 2 A Vending machines unplugged.
* 3 A A folding table with a flag taped to its front.
* 4 A Ferry schedules still on the wall.
5 A ¶ JUDGE ZUZANNA PRZYBYLSKA (60s, robe over a parka) taps a gavel made from a ship's wrench.
* 6 A Rain on the glass.
7 A ¶ ATTORNEY CASSIUS WREN (30s, wet suit jacket, bag of files) stands alone at the counter where tickets were once sold.
8 D JUDGE PRZYBYLSKA: All rise.
* 9 A ¶ Nobody else is present.
10 A Wren stays standing.
11 A The judge sits, unbothered.
12 D JUDGE PRZYBYLSKA [CONT'D] (to the empty chairs): Be seated. Ferry's cancelled. Court is in session.
13 A ¶ Wren sets down the files.
* 14 A They slide.
15 A He catches them with a forearm, a small rescue.
16 D WREN: Your Honour. My client's absent.
17 D JUDGE PRZYBYLSKA: Where?
18 D WREN: The ferry.
19 D JUDGE PRZYBYLSKA: Of course.
20 A ¶ She writes.
21 A Wren shuffles a sheet.
* 22 A Behind him the departures board flickers: CANCELLED, CANCELLED, CANCELLED.
23 D WREN (muttering): Two hours of driving for this.
24 D JUDGE PRZYBYLSKA: Counsel?
25 D WREN: Nothing, Your Honour.
26 D JUDGE PRZYBYLSKA: Proceed.
27 A ¶ He clears his throat and addresses the empty rows as if a jury sat there.
28 D WREN: Ladies and gentlemen, the question today is simple.
29 D JUDGE PRZYBYLSKA: There's no jury, Mr. Wren.
30 D WREN: Habit.
31 D JUDGE PRZYBYLSKA: Break it.
32 A ¶ Wren nods.
33 A He takes a long breath.
34 A His shoulders drop.
35 A The fight leaves him like air from a tyre.
36 A The judge sets down her pen, takes off her glasses, and rubs the bridge of her nose.
37 D JUDGE PRZYBYLSKA [CONT'D]: Motion granted. Default stays. Go home, son.
38 D WREN: That's it?
39 D JUDGE PRZYBYLSKA: That's it.
40 A ¶ He gathers the files, drops one, picks it up, drops another.
41 A She waits until he is at the door.
42 D JUDGE PRZYBYLSKA [CONT'D] (to herself, soft): Good lawyer. Terrible week.
43 A ¶ He pauses in the doorway.
44 A Doesn't turn.
45 D WREN: I heard that.
46 D JUDGE PRZYBYLSKA: You were meant to.
47 A ¶ He goes out into the rain.
48 A She turns the wrench-gavel over in her hands, then sets it carefully back on its cradle and stares at the board: CANCELLED.
49 T FADE OUT.

### SCENE s01233 | INT. COURTHOUSE - EMPTY COURTROOM 4B - NIGHT
Detected names (may be incomplete or contain aliases): NADIRA SULTANOVA, ELIAS THORNQUIST
* 1 A ¶ A mid-size municipal court, the kind with fake wood panelling and a drop ceiling.
* 2 A Fluorescent tubes buzz.
* 3 A Half the lights are off, leaving the jury box in gloom and the bench in a pool of white.
* 4 A ¶ Chairs are stacked in the gallery.
* 5 A A cleaning cart stands abandoned by the door, its mop bucket still steaming.
6 A ¶ NADIRA SULTANOVA (40s, sharp tailoring gone limp after a fourteen-hour day, hair clipped up with a pen) stands in the well of the court with a legal pad.
7 A She faces the empty jury box.
8 A ¶ She is alone with the room.
9 A Or she thinks she is.
10 D NADIRA (to the jury box): Ladies and gentlemen, the state will tell you that my client is a liar.
11 A ¶ She waits.
* 12 A Silence.
* 13 A The jury box regards her.
14 D NADIRA [CONT'D] (to the jury box): They will tell you he lied about the ledger, about the date, about the signature.
15 A ¶ She turns a page.
16 D NADIRA [CONT'D] (muttering): Too long. Cut the signature.
17 A ¶ She crosses out a line with her pen.
18 A Behind her, a soft cough.
19 A ¶ She spins.
20 A In the back row, half-hidden by the stacked chairs, sits ELIAS THORNQUIST (70s, retired bailiff, grey cleaners' overalls, thick glasses held together with tape).
* 21 A A paperback lies on his knee.
22 A He is not reading it.
23 D NADIRA [CONT'D] (to Elias): How long have you been there?
24 D ELIAS: Since the second part.
25 D NADIRA: Which part is that?
26 D ELIAS: The part where you said "ledger" like it was a bad word.
27 A ¶ Nadira studies him.
* 28 A The tube above her flickers and settles.
29 D NADIRA: I'm rehearsing. The trial starts at nine.
30 D ELIAS: I know. I'll be sitting at the back.
31 D NADIRA: You're a bailiff?
32 D ELIAS: Was. Thirty-one years. Now I clean the brass.
33 D NADIRA (to the room, dry): Wonderful. A critic.
34 A ¶ Elias grins, a quick crooked flash.
35 D ELIAS: You want a critique?
36 D NADIRA: I want a jury.
37 D ELIAS: Not got one. Got me.
38 A ¶ She exhales through her nose.
39 A Takes a step toward him, the legal pad hanging at her side.
40 D NADIRA: Fine. Tell me.
41 D ELIAS: You open with the word "liar." Don't.
42 D NADIRA: It's the state's word.
43 D ELIAS: It's still your first word. They'll remember it.
44 A ¶ She stops.
45 A Absorbs this.
46 A Looks back at the jury box as if seeing it for the first time.
47 D NADIRA (muttering): He's right.
48 D ELIAS: I'm always right. It's the curse of the cleaning staff.
49 D NADIRA (to Elias): What would you open with?
50 D ELIAS: I'd open with the weather.
51 D NADIRA: The weather.
52 D ELIAS: Thirty-one years, I never saw a juror hear a word in the first minute. They're looking for their umbrellas. Give them something to hold. Say it rained that night.
53 D NADIRA: It did rain.
54 D ELIAS: Then say that.
55 A ¶ She turns to the empty jury box.
56 A Draws a breath.
57 A Straightens her spine.
58 D NADIRA (to the jury box): It rained on the night of the fourteenth.
59 A ¶ Elias nods once.
* 60 A Behind him the mop bucket gives a final hiss.
61 D NADIRA [CONT'D] (to the jury box): It rained, and a man went to a bank, and he signed his name.
62 D ELIAS: Better.
63 D NADIRA (to Elias): Shut up. I'm working.
64 A ¶ He mimes zipping his lips.
65 A She almost smiles.
66 A She goes on, quieter, rolling each phrase slowly, and he follows her with his eyes, lips moving a half-second behind her words like an old pew regular who has heard the liturgy a thousand times.
67 A ¶ She finishes.
* 68 A Silence.
* 69 A The tubes buzz.
70 D ELIAS (softly): Ladies and gentlemen.
71 D NADIRA (to the jury box): Ladies and gentlemen.
72 A ¶ She bows her head.
* 73 A The empty box does not applaud.
74 A Elias stands, tucks his paperback under his arm, picks up the mop, and begins on the floor by the door.
75 D NADIRA [CONT'D] (muttering): Weather.
76 T FADE OUT.

### SCENE s01234 | INT. ROOFTOP BOXING RING - BETWEEN ROUNDS - NIGHT
Detected names (may be incomplete or contain aliases): DELROY, STANTON, ISAURA CAMPOS, RN HALVORSEN, BJÖRN
* 1 A ¶ A ring bolted to a car-park roof.
* 2 A City glare behind the ropes.
* 3 A Wind flaps a banner.
4 A ¶ DELROY "BLACKJACK" STANTON (30s, boxer) slumps on the stool, chest heaving, one eye swollen.
5 A ISAURA CAMPOS (50s, trainer, towel over her shoulder) crouches in front of him.
6 A BJÖRN HALVORSEN (60s, cutman, glove-stained thumbs) works on the eye.
7 D ISAURA: Look at me.
8 D BJÖRN: Hold still.
9 D DELROY: I'm fine.
10 D ISAURA: You're not fine. You're dropping the left.
11 D BJÖRN: Don't talk. I've got a hole here.
12 D DELROY: She keeps coming in under.
13 D ISAURA: Then step back and counter. Step back.
14 D BJÖRN: Chin up.
15 A ¶ She slaps the water bottle into his hand.
16 A He rinses, spits into the bucket.
17 A Björn swabs.
* 18 A A bell rings.
19 A Delroy rises.
20 A Isaura pushes him into the ring.
21 D ISAURA: Left hand, Jack!
22 D BJÖRN: Go, go, go!
23 T FADE OUT.

### SCENE s01235 | INT. COIN LAUNDRY - NIGHT
Detected names (may be incomplete or contain aliases): FRANKIE DOLAN, MEI-LING WONG, OBI NWANKWO, SABINE ARCAND, RUFUS BELL, TAMSIN PRICE, ^RUFUS
* 1 A ¶ Dryers tumble.
* 2 A Plastic chairs.
* 3 A A vending machine hums.
4 A ¶ Six regulars huddle around a folding table.
5 A They're holding a wake for the shop's owner.
* 6 A He's laid out in a framed photo between the detergent boxes.
7 A ¶ FRANKIE DOLAN lifts a paper cup.
8 A MEI-LING WONG nods.
9 A OBI NWANKWO wipes his eyes.
10 A SABINE ARCAND folds a towel without looking.
11 A RUFUS BELL stares at the floor.
12 A The youngest, TAMSIN PRICE, taps her phone.
13 D FRANKIE: To Gus.
14 D MEI-LING: To Gus.
15 D OBI: Sixty years of quarters.
16 D RUFUS: He never gave me change once.
17 D SABINE: He gave me change twice.
18 D TAMSIN: He gave me a free sock.
19 A ¶ They all look at her.
20 D OBI: A sock?
21 D TAMSIN: One. He said the other would turn up.
22 D FRANKIE: It always does.
23 D MEI-LING: Never.
24 A ¶ They laugh, quietly, then stop.
* 25 A The dryers keep turning.
26 D FRANKIE: I'll miss him.
27 D ^RUFUS: I'll miss him.
28 A ¶ They glance at one another, startled by the echo.
29 A She puts her phone away.
30 A He swallows.
* 31 A The vending machine thuds out a bag of chips.
32 T FADE OUT.

### SCENE s01236 | INT. AUCTION HOUSE - FREIGHT ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS CARMICHAEL-REEVE, TRINH VO, ALOUETTE PICARD, GUARD, ^ALOUETTE
* 1 A ¶ A caged industrial lift with a scarred wooden floor.
* 2 A A control panel with a brass key switch.
* 3 A The elevator descends slowly, cables creaking, between concrete shaft walls.
4 A ¶ Three figures in grey janitorial coveralls stand in the car.
* 5 A A rolling mop bucket sits in the corner.
6 A ¶ HOLLIS CARMICHAEL-REEVE (50s, crew boss, bifocals on a cord) reads a clipboard like a recipe.
7 A ¶ TRINH VO (30s, wiry, hair under a cap) crouches by the bucket and checks the wringer for something that isn't water.
8 A ¶ ALOUETTE PICARD (40s, grim, gloves tight) presses her palm against the elevator wall and counts the seconds under her breath.
9 D HOLLIS: Sub-basement in forty.
10 D TRINH: Thirty-eight.
11 D HOLLIS: Thirty-eight.
12 D ALOUETTE: Camera's looping. Twenty minutes, maybe twenty-two.
13 D TRINH: Maybe?
14 D ALOUETTE: Twenty.
15 D HOLLIS: Say twenty.
* 16 A ¶ Silence.
* 17 A The cables squeal.
* 18 A The lift lurches and settles.
* 19 A Somewhere above, a muffled bell rings the hour.
20 D HOLLIS [CONT'D]: When the doors open, we are cleaners. We move slow. We do not look at the vault.
21 D TRINH: We look at the floor.
22 D HOLLIS: We look at the floor.
23 D ALOUETTE: What if there's a guard?
24 D HOLLIS: There's a guard.
25 D ALOUETTE: What if he's awake?
26 D HOLLIS: He's awake. He's always awake. Four weeks, he's seen us.
27 D TRINH: He likes us.
28 D ALOUETTE: He likes your biscuits.
29 D TRINH (blushing): They're my mother's.
* 30 A ¶ The elevator slows, and the cables go quiet.
* 31 A A soft ding.
* 32 A ¶ The doors slide open on a concrete corridor lit in sickly green.
* 33 A At the far end, a lone guard's desk with a lamp, a thermos, and a newspaper.
* 34 A The chair is empty.
35 A ¶ Nobody moves.
36 D TRINH [CONT'D] (whispering): That's not right.
37 D HOLLIS: Move.
38 A ¶ They shuffle out, bucket first.
* 39 A The wheels squeak on the concrete.
* 40 A Halfway down the corridor, the lamp on the desk clicks off.
* 41 A The corridor goes darker.
42 D ALOUETTE: Hollis.
43 D HOLLIS: Keep moving.
44 D TRINH: Twenty minutes, he said. He doesn't go to the bathroom.
45 A ¶ They stop.
* 46 A In the dark, a steel door at the corridor's end is open a hand's width.
* 47 A A strip of cold light falls on the floor.
48 A ¶ Hollis lifts the clipboard.
49 A Reads it again.
50 A Lowers it.
51 D HOLLIS: Right. New plan.
52 D TRINH: We have a plan?
53 D HOLLIS: We have a mop.
54 A ¶ He lifts the mop out of the bucket.
55 A Taps the vault door open with its handle.
* 56 A It swings wide.
* 57 A Inside, rows of locked cases line the walls under blue light.
58 A And in the middle, sitting cross-legged on a crate with a flask in one hand and his cap tilted back, is the GUARD (60s, leathery, content), eating one of Trinh's mother's biscuits.
59 D GUARD: Evening, team.
60 A ¶ Nobody breathes.
61 D GUARD [CONT'D]: You're early. I wasn't expecting you till two.
62 D TRINH (squeaking): We had a cancellation.
63 D GUARD: Hm.
64 A ¶ He chews.
65 A Swallows.
66 A Gestures with the biscuit toward the cases.
67 D GUARD [CONT'D]: Mind the lemon polish. The Tiffany lamp's sensitive.
68 D HOLLIS: Of course.
69 D ^ALOUETTE: Of course.
70 D TRINH: Not a problem.
71 A ¶ They file in.
72 A The guard watches them go by, one eyebrow raised.
73 A As Alouette passes, he catches her sleeve.
74 D GUARD [CONT'D] (low): Whatever you've planned, do it tonight. I retire at dawn.
75 D ALOUETTE (low): Understood.
76 A ¶ She pulls her sleeve free.
77 A Trinh begins to laugh, a high sound, and Hollis clamps a hand over his mouth.
78 A The guard offers the biscuit tin.
79 D GUARD [CONT'D]: Anyone?
* 80 A ¶ The lights in the corridor behind them go out.
* 81 A Then, one by one, the lights in the vault.
82 D HOLLIS (to the room): Nobody panic.
83 D GUARD: Oh, that's just me.
84 D TRINH (muffled, under the hand): Mm?
85 D GUARD (in the dark): The sale starts at nine. Lot forty-one's a Tiffany lamp.
* 86 A ¶ A match flares.
87 A The guard lights a candle on the crate.
88 A His grin glows orange.
89 D GUARD [CONT'D]: Shall we?
90 T FADE OUT.

### SCENE s01237 | EXT. DRIVE-IN THEATRE - SNACK BAR PATIO - DUSK
Detected names (may be incomplete or contain aliases): BITE, BEEBE, CARRUTHERS, LOUISE TOLLIVER, SOUR-FACED BOY, MOTHER, ORVILLE
* 1 A ¶ Summer evening, 1962.
* 2 A The screen is a white rectangle against a pink sky.
* 3 A A neon sign says GRAB A BITE.
* 4 A Cars idle in rows.
* 5 A Crickets.
6 A ¶ TWO TEENAGERS lean on the rail: BEATRICE "BEEBE" CARRUTHERS (16, ponytail, saddle shoes) and her best friend LOUISE TOLLIVER (16, sunglasses, her father's jacket).
7 A Neither looks at the other.
8 A ¶ Behind the counter, a SOUR-FACED BOY in a paper hat (17, freckles, glaring at a milkshake machine).
9 A ¶ At the window of a nearby station wagon, a MOTHER (40s, curlers under a headscarf) smokes and watches them like a hawk.
10 D BEEBE: He's looking at you.
11 D LOUISE: He's looking at you.
12 D BEEBE: He's looking at her. She's the one with the jacket.
13 D LOUISE: He's looking at the jacket.
14 A ¶ The sour-faced boy slides two milkshakes across the counter without a word.
15 D BOY: Four bits.
16 D BEEBE: That's a quarter more than last week.
17 D BOY: Prices go up.
18 D LOUISE: So do tempers.
19 A ¶ He flicks his eyes at her, then away.
20 A His ears go red.
21 D BEEBE (to Louise, low): Ask his name.
22 D LOUISE: You ask his name.
23 D BEEBE: He'd answer you.
24 D LOUISE: He'd answer anyone.
25 D BEEBE: He wouldn't answer me.
26 A ¶ Louise sighs.
27 A Pushes her sunglasses up into her hair.
28 D LOUISE: What do they call you?
29 D BOY: They don't.
30 D LOUISE: We'll call you something.
31 D BOY: Orville.
32 D BEEBE: Orville?
33 D ORVILLE: It's a family name.
34 D LOUISE: It's a terrible name.
35 D ORVILLE (unsmiling): My grandfather flew a biplane in the first war.
36 D BEEBE: Oh!
37 D LOUISE: Oh.
38 A ¶ The two girls exchange a glance.
39 A Orville slides a napkin across the counter, then another.
40 D ORVILLE [CONT'D]: They're free.
41 D BEEBE (taking hers): Thanks, Orville.
* 42 A ¶ The screen flickers.
* 43 A A film leader counts down.
44 A The Mother's cigarette glows.
45 A She says nothing, but her gaze drifts to the Boy at the counter.
46 A ¶ Orville wipes the counter.
47 A His hand shakes slightly.
48 D ORVILLE [CONT'D] (low, to Beebe): Saturday. If you're free.
49 D BEEBE: She's not free.
50 D LOUISE: She's free.
51 D BEEBE: Louise.
52 D LOUISE: She'd love to.
53 A ¶ She nudges the other girl hard.
* 54 A The napkin flutters to the pavement.
55 A In the station wagon, the Mother turns away with a small, private smile and flicks ash out the window.
* 56 A ¶ The first scene of the movie begins on the screen, lighting their faces in silver.
57 T FADE OUT.
