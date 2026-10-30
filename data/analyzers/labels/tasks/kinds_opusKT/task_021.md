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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0021.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00535 | INT. MERIDIAN PLANETARIUM - DOME CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): ZELDA NAKASHIMA-HOLT, MONTY, ABERNATHY, RAJESH SUBRAMANIAN, SABINE DELACROIX-ODUYA, CRISPIN
* 1 A ¶ A hemisphere of white plaster, the ceiling curved like the inside of an egg.
* 2 A In the center, a Zeiss star projector crouches on its pedestal like a patient insect.
* 3 A Rows of reclined seats fan out below, empty, dark.
4 A ¶ ZELDA NAKASHIMA-HOLT, 40s, black coveralls, a tool roll slung across her shoulder, stands at the base of the projector with a micrometer and a face like a surgeon's.
5 A MONTGOMERY "MONTY" ABERNATHY, 60s, a former curator in a cardigan, shuffles up the aisle carrying a lantern and a clipboard he has no use for.
6 A RAJESH SUBRAMANIAN, 30s, a hacker with a backpack of laptops, kneels beside a panel in the wall.
7 A SABINE DELACROIX-ODUYA, 30s, a safecracker in a pencil skirt, taps along a seam in the plaster with a stethoscope.
8 A CRISPIN, 12, Monty's grandson, in a school blazer, sits in the front row with his chin on his knees and watches them all.
9 D ZELDA (low): Raj. Status.
10 D RAJESH: Motion sensors off. Cameras are looping the last four minutes of Tuesday.
11 D ZELDA: Monty?
12 D MONTY: It's in the cupola, Zelda. Behind the Pleiades. The Director insisted on that. A little theatre.
13 D SABINE: Of course he did.
14 A ¶ She presses her ear to the plaster.
15 A Smiles.
16 D SABINE [CONT'D]: Found it. Seam runs vertical, eighteen inches off the Southern Cross.
17 A ¶ Zelda crosses to the projector.
18 A Checks a gauge.
19 A Wipes dust off the lens with her sleeve.
* 20 A The star field on the dome flickers once.
21 D CRISPIN: Grandpa, is it supposed to do that?
22 D MONTY (to himself): God help us, no.
23 A ¶ Rajesh freezes.
* 24 A A single red LED on his laptop blinks.
* 25 A Then another.
* 26 A Then every screen at once.
27 D RAJESH: Somebody just opened a remote session.
28 D ZELDA: Whose?
29 D RAJESH: Mine.
30 A ¶ He slams the lid.
* 31 A The dome flares.
* 32 A Stars wheel, sweep, collapse into a single white point, and then Monty's own recorded voice, thirty years younger, booms through the speakers like the voice of God:
33 D MONTY [V.O.] (recorded, decades younger): Welcome to the Meridian Planetarium. Tonight's program is: THE NIGHT SKY OVER AN UNSUSPECTING CITY.
34 A ¶ Sabine drops the stethoscope.
35 A Monty drops the lantern.
* 36 A The lantern rolls across the aisle and goes out.
* 37 A The room falls to starlight.
38 D ZELDA: Rajesh, kill it.
39 D RAJESH: I'm trying!
40 D SABINE: Is this part of the plan?
41 D MONTY: It's the Director's idea of a joke.
42 A ¶ Crispin raises his hand like a good student.
43 D CRISPIN: I think I know where the switch is.
44 A ¶ All four adults turn.
45 A The boy gets up, walks to a wall panel behind the front row, lifts a flap that none of them noticed, and flips a lever.
* 46 A ¶ The dome fades to black.
* 47 A The voice dies.
* 48 A A long beat of silence.
* 49 A ¶ Then the projector begins to turn on its own.
* 50 A A new star field spins up.
* 51 A It is not the northern hemisphere.
* 52 A It is a drawing: a long line of gold pinpricks tracing the outline of a vault door.
53 D MONTY (whispering): Oh, Henry. You clever old man.
54 D SABINE: He mapped it.
55 D ZELDA: He mapped it on the ceiling.
56 A ¶ Rajesh scrambles for his camera.
57 A Sabine runs for the cupola ladder.
58 A Zelda grabs Monty by the arm and hauls him after her.
59 A Crispin lingers in the aisle, face turned up, lit gold.
60 D CRISPIN (softly): Grandpa. That one's you.
61 A ¶ He points at a single star, slightly brighter than the rest.
62 D MONTY (voice cracking): So it is.
* 63 A ¶ Footsteps in the corridor outside.
* 64 A Real ones.
* 65 A Multiple.
* 66 A Heavy shoes on marble.
* 67 A A radio crackles.
68 A ¶ Zelda and Sabine and Rajesh freeze mid-stride, then scatter: Zelda behind the projector, Sabine flat against the cupola wall, Rajesh down between two rows of seats with a laptop clutched to his chest.
69 A ¶ Monty stands in the middle of the aisle, alone and lit with gold, and does the only brave thing he has done in thirty years.
70 A He turns toward the door and smiles.
71 D MONTY [CONT'D] (loud, cheerful): Gentlemen! You're just in time for the show.

### SCENE s00536 | INT. REQUISITIONED OPERA HOUSE - FIELD HEADQUARTERS - DAY
Detected names (may be incomplete or contain aliases): MAJOR PATRICK HALLORAN, CAPTAIN LUCIEN BEAUMONT, LIEUTENANT THOMAS DUPREE, SERGEANT GRISWOLD, PRIVATE WIGGINS
* 1 A ¶ Gilded boxes, a chandelier wrapped in burlap, a stage covered with maps.
* 2 A Plaster cherubs peer down at a long table of officers.
* 3 A Somewhere, a piano is out of tune.
4 A ¶ MAJOR PATRICK HALLORAN, 50s, silver at the temples, stands at the center of the stage with a pointer.
5 A CAPTAIN LUCIEN BEAUMONT, 40s, a trim moustache and a brigade tie, sits stiffly at his left.
6 A LIEUTENANT THOMAS DUPREE, 20s, pale, writes everything down.
7 A SERGEANT GRISWOLD, 40s, a boxer's nose, leans on a velvet curtain with arms crossed.
8 D HALLORAN: We hold the bridge until dawn. After that, it isn't ours.
9 D BEAUMONT: He'll never hold until dawn, Major.
10 D DUPREE: Which he, sir?
11 D HALLORAN (to Dupree): He means me.
12 D BEAUMONT (to Halloran): I mean the man you've put at the east end.
13 D GRISWOLD: He's mine, sir. He's the best I've got.
14 D BEAUMONT: Then God help the rest.
* 15 A ¶ The door at the back bangs open.
* 16 A A scrap of daylight cuts the aisle.
17 A ¶ PRIVATE WIGGINS, 18, a mud-streaked messenger with a satchel, runs down the carpet at full tilt and salutes, panting.
18 D WIGGINS: Major, sir. The bridge is gone.
* 19 A ¶ Silence.
* 20 A A cherub's plaster smile hangs over them.
21 D HALLORAN: How gone?
22 D WIGGINS: Blown, sir. From our side.
23 A ¶ Beaumont slowly stands.
24 A Halloran lowers his pointer.

### SCENE s00537 | EXT. ROADSIDE DRIVE-IN THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): ANNELIESE VOSKUIJLEN, CORINNE VASQUEZ-LEE, GABRIEL ACHTERBERG, TAKESHI NAKAMURA
* 1 A ¶ Rain on a field of parked cars.
* 2 A A giant screen, torn at one corner, shows a black-and-white kiss in forty-foot faces.
* 3 A Speakers hang on posts like mourners.
* 4 A Windshield wipers keep time.
5 A ¶ At the back of the lot, under the sagging eaves of the projection booth, ANNELIESE VOSKUIJLEN, 30s, a bride in a rain-soaked gown and borrowed denim jacket, stands with a lit cigarette she is not smoking.
6 A Her sister-in-law-to-be CORINNE VASQUEZ-LEE, 30s, a maid of honor with a ruined updo, holds a stolen bottle of champagne by the neck.
* 7 A ¶ Between them, the rain.
* 8 A Between them, everything.
9 D CORINNE: You can't just walk out of your own wedding.
10 D ANNELIESE: I walked out of my own wedding.
11 D CORINNE: The caterer is crying.
12 D ANNELIESE: The caterer is always crying.
13 A ¶ Corinne laughs, wet, despite herself.
14 A Hands over the bottle.
15 A Anneliese drinks.
16 A Hands it back.
17 D ANNELIESE [CONT'D]: He's good, Corinne.
18 D CORINNE: He's wonderful.
19 D ANNELIESE: So why does it feel like a cage?
20 D CORINNE (gently): Maybe because it's a cage you picked.
21 A ¶ A silhouette appears at the edge of the lot, umbrella tilted.
22 A GABRIEL ACHTERBERG, 30s, a groom in a ruined waistcoat, jogs toward them through the puddles, the umbrella useless.
23 D GABRIEL (calling): Anna! Anna, I'm not here to --
24 D ANNELIESE: Gabe.
25 D CORINNE: I'll be in the car.
26 A ¶ Corinne retreats, taking the champagne.
27 A Gabriel arrives, drenched, breathless.
28 A He stops three feet away.
29 D GABRIEL: Your mother is giving a speech to the empty chairs.
30 D ANNELIESE: That sounds like her.
31 D GABRIEL: I told her you needed air.
32 D ANNELIESE: I needed this.
33 A ¶ She gestures at the lot: the rain, the cars, the screen.
* 34 A On it, the silent couple kiss again.
35 D GABRIEL: I never knew you liked the pictures.
36 D ANNELIESE: I came here with my father. Every Friday. Until he sold the Chevy.
37 D GABRIEL: You never told me.
38 D ANNELIESE: You never asked.
39 A ¶ The sting lands.
40 A He takes it, nods.
41 D GABRIEL: Fair.
42 A ¶ TAKESHI NAKAMURA, 70s, the projectionist, leans out of the booth window with a thermos and a skeptical eyebrow.
43 D TAKESHI: Folks, you are blocking the exit.
44 D ANNELIESE: Sorry.
45 D GABRIEL: Sorry!
46 D TAKESHI: You two the runaway wedding?
47 D ANNELIESE: Probably.
48 D TAKESHI: Good. Come in. Better view from up here.
49 A ¶ Gabriel and Anneliese look at each other, uncertain, then climb the iron stair into the booth.
* 50 A It smells of warm dust and film.
* 51 A A single projector clatters in the dark, throwing a beam through a square window.
52 A ¶ The old man pours three paper cups from the thermos.
53 D TAKESHI [CONT'D]: My wife and I watched this one thirty-one years ago. She said, "He's going to leave her."
54 D GABRIEL: Does he?
55 D TAKESHI: Watch.
* 56 A ¶ On the screen, the man walks into the rain.
* 57 A The woman does not call after him.
* 58 A The camera holds on her face.
59 A ¶ Anneliese reaches for Gabriel's hand, does not take it, rests her fingers an inch from his.
60 D ANNELIESE (quietly): She's going to let him.
61 D TAKESHI: Only in this version.
* 62 A ¶ The reel clatters.
* 63 A The picture jumps.
* 64 A In the splice, a frame goes white and then, impossibly, the man turns around.
65 A ¶ Gabriel's breath catches.
66 A Anneliese's hand closes over his.
67 D GABRIEL: Is that...
68 D TAKESHI: Different print. Spliced it myself, the winter she died. I couldn't stand the ending either.
* 69 A ¶ Rain on the roof.
* 70 A Three paper cups.
* 71 A The woman on the screen takes one step toward the man.
72 D ANNELIESE (whispering): Takeshi. You're a terrible projectionist.
73 D TAKESHI: And you are a terrible bride.
74 A ¶ Gabriel starts to laugh.
75 A Then Anneliese.
76 A The old man joins them, wheezing, coughing, shaking his head.
77 A ¶ Outside, in the car, Corinne watches the window of the booth glow like a lantern and finishes the champagne alone.

### SCENE s00538 | INT. BRIGHTWAVE SYNERGY SOLUTIONS - OPEN-PLAN FLOOR - MORNING
Detected names (may be incomplete or contain aliases): TRIP HALVERSEN, LEAN, LAKSHMI PILLAI, GUS ABERNETHY, DEBORAH-LYNN FOSTER, VP, BEIGE MAN, BEIGE SUIT, KENT
* 1 A ¶ Standing desks, kombucha taps, a neon sign that reads GOOD VIBES ONLY.
* 2 A In the center of the floor, a bounce house shaped like a giant inflatable castle wobbles under fluorescent light.
3 A ¶ TRIP HALVERSEN, 30s, "Chief Happiness Officer," in a vest that says LEAN IN, stands on a cube with a wireless mic.
4 A LAKSHMI PILLAI, 30s, a project manager, sits at her desk with a laptop, headphones, and a thousand-yard stare.
5 A GUS ABERNETHY, 50s, a senior accountant, stands at the water cooler, holding a paper cone.
6 A DEBORAH-LYNN FOSTER, 40s, the VP of People, arranges lanyards on a folding table.
7 D TRIP (into mic): Good morning, Brightwavers! Today's wellness initiative: Synergy Jump!
* 8 A ¶ No one moves.
9 A Lakshmi turns a page.
10 D TRIP [CONT'D]: Everybody grab a partner and bounce toward your quarterly goals!
11 D GUS (to the cooler): I have goals. They're not in a castle.
12 D DEBORAH-LYNN: Gus, participation is a core value.
13 D GUS: Participation is a hostage situation.
14 D LAKSHMI (not looking up): Deborah-Lynn, I have a deadline.
15 D DEBORAH-LYNN: Everyone has a deadline, Lakshmi.
16 D TRIP: Great energy! Love the energy!
* 17 A ¶ The castle's blower sputters.
* 18 A A cough of air.
* 19 A One turret sags.
20 A ¶ Lakshmi finally pulls off her headphones.
21 D LAKSHMI: Is that structurally sound?
22 D TRIP: It's rated for three hundred pounds.
23 D GUS: Rated by whom?
24 D TRIP: By... the rental company.
25 A ¶ A MAN IN A BEIGE SUIT, 50s, no lanyard, no smile, steps out of the elevator carrying a briefcase.
26 A He moves through the floor like a shark through kelp.
* 27 A Nobody stops him.
28 D DEBORAH-LYNN (whispering to Trip): Who is that?
29 D TRIP (whispering back): I thought he was yours.
30 A ¶ The man in the beige suit stops at the castle.
31 A Looks up at it.
32 A Looks at the mic.
33 A Looks at Trip.
34 D BEIGE MAN: Mr. Halversen?
35 D TRIP: Halverson. Trip.
36 D BEIGE MAN: Halverson. I'm from the insurance carrier.
* 37 A ¶ The blower sputters again.
* 38 A Another turret sags.
39 A Gus sips his water.
40 D DEBORAH-LYNN: We're in the middle of a team-building --
41 D BEIGE MAN: Yes. I can see.
42 A ¶ Lakshmi starts typing again, smiling now.
43 D TRIP: Sir, with respect, this is a culture initiative --
44 D BEIGE MAN: My name is Kent. Kent Aldrich-Bowman. And I am here to tell you that your policy lapsed Monday.
* 45 A ¶ Silence.
* 46 A The castle exhales.
* 47 A Nobody speaks.
48 D TRIP: That's... that can't be right.
49 D KENT: Which is why I brought the paperwork.
50 A ¶ He opens the briefcase.
51 A Takes out a stack of forms, each tabbed with little yellow flags.
52 D DEBORAH-LYNN (brightly): Great! We love paperwork! Trip, give Kent a lanyard.
53 D TRIP (into mic, shaky): Everyone, please welcome Kent from... Risk.
54 D GUS (to Lakshmi): It's a trap.
55 D LAKSHMI (under her breath): It's a rental.
* 56 A ¶ The castle's front wall folds inward with a long, sad hiss.
57 A Trip, still clutching his mic, topples slowly into the collapsing fabric and vanishes.
58 D KENT (calmly, to the room): Please note the time.
59 D DEBORAH-LYNN: It's 9:14.
60 D KENT: Thank you. 9:14.
61 A ¶ He writes it on a form.
62 D LAKSHMI: Does that cover the kombucha?
63 D KENT: Nothing covers the kombucha.
64 A ¶ Gus raises his paper cone, solemn, as to a toast.
65 D GUS: To synergy.

### SCENE s00539 | INT. ST. ELMO'S HOSPITAL - HYPERBARIC CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): NIAMH FENWICK, NURSE ILSE BRANDTNER, IGOR DOBROVOLSKY
* 1 A ¶ A steel cylinder the size of a bus, portholes glowing amber.
* 2 A Gauges tick.
* 3 A Pumps breathe.
* 4 A A cot is bolted to the floor inside; its occupant lies under a clear oxygen hood.
* 5 A The room smells of rubber and warm metal.
6 A ¶ DR. NIAMH FENWICK, 50s, short grey hair, scrubs washed pale, sits on a stool beside the cot.
7 A She keeps one hand on a pressure dial.
8 A NURSE ILSE BRANDTNER, 30s, ponytail, tired eyes, checks a drip bag.
9 A MR. IGOR DOBROVOLSKY, 70s, the patient, thin as a rake, a diver's tattoo on his forearm, lies back with a hissing mask over his mouth.
10 A ¶ She watches the dial.
11 A He watches the ceiling.
12 A They both know the dive was a long time ago.
13 D DOBROVOLSKY (muffled by mask): Doctor. How long?
14 D FENWICK: Forty more minutes, Mr. Dobrovolsky.
15 D DOBROVOLSKY: You said that an hour ago.
16 D FENWICK: I was optimistic.
17 A ¶ He chuckles.
18 A It becomes a cough.
19 A Ilse leans in and adjusts the hood.
20 D ILSE: Easy, Mr. D. Slow breaths.
21 D DOBROVOLSKY: I have been breathing for seventy-two years.
22 D ILSE: Then you should be good at it.
23 A ¶ He closes his eyes, smiling faintly.
24 A She checks the line.
25 A Then glances at Fenwick.
26 A A look passes between them: this one is not going well.
27 A ¶ Fenwick rises.
28 A Crosses to the porthole.
29 A Stares out at the dark corridor.
30 D FENWICK (low): Ilse. His carboxy levels?
31 D ILSE: Fourteen. Down from nineteen.
32 D FENWICK: That's good.
33 D ILSE: It's slow.
34 A ¶ Fenwick rubs the bridge of her nose.
35 A She says nothing.
* 36 A Behind them the old man's chest rises and falls under the plastic.
37 D DOBROVOLSKY: Doctor Fenwick?
38 D FENWICK: Yes?
39 D DOBROVOLSKY: You are not telling me something.
40 A ¶ She turns.
41 A Comes back to the cot.
42 A Sits.
43 D FENWICK: No. I'm not.
44 D DOBROVOLSKY: Good. I like honesty. Say it.
45 D FENWICK: The damage to your lungs is more extensive than we thought.
46 A ¶ He nods slowly.
47 A His hand finds hers on the rail.
48 D DOBROVOLSKY: Is it the sea?
49 D FENWICK: It's the years of it.
50 D DOBROVOLSKY: Ah. Then I cannot complain. She was always generous.
51 A ¶ Ilse turns away, adjusting a monitor that doesn't need adjusting.
52 D DOBROVOLSKY [CONT'D]: Nurse Brandtner. Do not cry in front of a Russian.
53 D ILSE (wiping her eye): I'm not.
54 D DOBROVOLSKY: You are. It is all right. We cry also. We just hide it in vodka.
55 A ¶ Fenwick laughs.
56 A A real one, helpless, short.
57 A She presses the back of her wrist to her mouth.
58 D FENWICK: Mr. Dobrovolsky, you are impossible.
59 D DOBROVOLSKY: It is my best quality.
* 60 A ¶ The pressure dial ticks down.
* 61 A A soft chime.
* 62 A The pumps slow.
63 A He watches the needle fall, calm, like a man watching tide.
64 D DOBROVOLSKY [CONT'D]: When I came up the first time... nineteen seventy-nine. Off Sakhalin. The light was the color of this room. I thought: I will never see anything more beautiful.
65 D FENWICK: And now?
66 D DOBROVOLSKY: Now I think the same. But I am not afraid.
67 A ¶ Ilse takes his other hand.
68 A He squeezes it.
69 D ILSE: Do you want us to call anyone?
70 D DOBROVOLSKY: There is a daughter in Vladivostok. She has not spoken to me in nine years.
71 D FENWICK: We'll call her.
72 D DOBROVOLSKY: She will not answer.
73 D FENWICK: Then we'll leave a message.
74 A ¶ He thinks about it.
* 75 A The gauges tick.
76 D DOBROVOLSKY: Tell her... the sea says hello.
77 A ¶ Ilse nods.
78 A Fenwick nods.
* 79 A The dial reaches zero.
* 80 A ¶ A long hiss as the chamber decompresses.
* 81 A The hatch unseals.
* 82 A Cool air rolls in, and the light from the corridor falls across his face, pale and ordinary.
83 A ¶ He opens his eyes.
84 A Looks at the doorway.
85 A Smiles.
86 D DOBROVOLSKY [CONT'D] (whispering): There it is.

### SCENE s00540 | EXT. LIFE RAFT - SOUTHERN OCEAN - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN HAAKON LUNDQVIST, MBEKI NTULI, LUCIANA FARIAS, PIP
* 1 A ¶ A yellow canopy bobbing on a swell the color of slate.
* 2 A Fog lies in the troughs.
* 3 A The sea has gone, for the first time in nine days, almost still.
4 A ¶ CAPTAIN HAAKON LUNDQVIST, 60s, a beard crusted with salt, sits at the hatch with a flare gun across his knees.
5 A MBEKI NTULI, 30s, the first mate, bails with a plastic cup, steady as a metronome.
6 A LUCIANA FARIAS, 20s, the cook, huddles in a foil blanket, lips cracked.
7 A PIP, 16, the cabin boy, lies asleep with his head in her lap.
8 D HAAKON: It's flat.
9 D MBEKI: It's flat.
10 D LUCIANA: Is that good?
11 D HAAKON: It means the storm's gone.
12 D MBEKI: It means the storm's behind us.
13 D LUCIANA: Is that different?
14 D MBEKI: Ask me tomorrow.
15 D HAAKON: Water?
16 D LUCIANA: Half a cup each. I measured.
17 D HAAKON: Split Pip's.
18 D MBEKI: He's nine days younger than the rest of us.
19 D HAAKON: Give him less, then.
20 D LUCIANA: No. I'm giving him more.
21 D HAAKON: Luciana --
22 D LUCIANA: He told me his mother's name. Last night. He thought I was asleep. He kept saying it. Over and over. Adelheid. Adelheid.
23 D MBEKI: Captain, the boy's all right.
24 D HAAKON: The boy's fine.
25 D LUCIANA: You keep saying that like it's a prayer.
26 D HAAKON: It's a log entry.
27 D MBEKI: It's both.
28 A ¶ Pip stirs.
29 A Murmurs.
30 A Luciana strokes his forehead.
31 A All three wait for him to settle.
32 D HAAKON (low): Mbeki. Last night. Did you hear it?
33 D MBEKI: The engine?
34 D HAAKON: Not an engine.
35 D LUCIANA: What are you two talking about?
36 D MBEKI: A low sound. Like a drum, far off.
37 D HAAKON: I thought I dreamed it.
38 D MBEKI: We didn't both dream it.
39 D LUCIANA: Could it be a ship?
40 D HAAKON: Ships don't sound like that.
41 D LUCIANA: Then what?
42 D HAAKON: Whales. Or ice. Or --
43 A ¶ He stops.
* 44 A The fog parts.
* 45 A In the trough ahead, a wall of white rises, hundreds of feet high, glittering.
46 D MBEKI: Iceberg.
47 D LUCIANA: It's beautiful.
48 D HAAKON: It's moving toward us.
49 D MBEKI: Everything moves toward us, Captain.
50 A ¶ Pip sits up.
51 A Rubs his eyes.
52 A Looks at the berg and the three adults, all staring, none speaking.
53 D PIP: Is it breakfast?
54 A ¶ Luciana laughs, ragged, helpless, near tears.
55 A Mbeki lowers his bailing cup.
56 A Haakon lifts the flare gun, aims into the gray sky, and fires.
* 57 A ¶ A red star blooms above them.
58 A Four faces turn up to it, lit crimson, silent.

### SCENE s00541 | INT. SHUTTERED BOWLING ALLEY - IMPROVISED ARBITRATION HALL - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR ODETTE MARCHAND, COUNSEL ELLIOT VESPER, KHALID RAHMAN
* 1 A ¶ Lanes polished to a dull glow.
* 2 A A folding table placed at the foul line, three chairs, a pitcher of water.
* 3 A Behind them, the pin deck, bare.
* 4 A Dust floats in light from the high windows.
5 A ¶ ARBITRATOR ODETTE MARCHAND, 60s, in a charcoal suit, sits at the head with a fountain pen and a legal pad.
6 A She hasn't blinked in a minute.
7 A ¶ COUNSEL ELLIOT VESPER, 40s, sleeves rolled, stands at the lane's edge with a stack of exhibits.
8 A His client sits across from him: KHALID RAHMAN, 50s, a contractor's work boots and a clean white shirt, hands folded.
9 D VESPER: Mr. Rahman, you signed the original contract in March.
10 D RAHMAN: Yes.
11 D VESPER: And you understood that it covered the demolition and remediation of the east wing.
12 D RAHMAN: I understood that it covered what I was told it covered.
13 D VESPER: Told by whom?
14 D RAHMAN: By you.
15 A ¶ Marchand's pen scratches.
16 A Vesper smiles thinly.
17 D VESPER: Mr. Rahman, we have a signature on page nineteen.
18 D RAHMAN: You have a signature on page nineteen. You do not have a signature on page twenty. Because page twenty does not exist.
19 A ¶ Vesper's smile stays.
20 A His shoulders tighten.
21 D VESPER: Madam Arbitrator, the witness is characterizing.
22 D MARCHAND: Overruled. Continue.
23 D VESPER: Mr. Rahman. Is it your testimony that the contract was never finalized?
24 D RAHMAN: It's my testimony that the contract you handed me was a draft, and the one you filed with this panel is a forgery.
* 25 A ¶ The word drops into the lane like a ball.
* 26 A Nothing rolls.
27 D MARCHAND (quietly): Counsel, that is a serious accusation.
28 D VESPER: Madam Arbitrator, I must --
29 D RAHMAN: Seven years I have built hospitals. Seven. I have never once been accused of cutting corners. And you come here with a paper that says I did.
30 D VESPER: Sit down, Mr. Rahman.
31 D RAHMAN: I am sitting.
32 D VESPER: Then be quiet.
33 D RAHMAN: Or what?
34 A ¶ Vesper leans over the table, close.
35 A Marchand puts down her pen with a click that rings off the pins.
36 D MARCHAND: Counsel. Step back.
37 A ¶ He steps back.
38 A Slow.
39 A He adjusts his cuffs, a tic.
40 D MARCHAND [CONT'D]: Mr. Vesper. How long have you been practicing?
41 D VESPER: Eighteen years.
42 D MARCHAND: And in those eighteen years, have you ever once been handed a document that you knew to be incomplete?
43 D VESPER: Never, Madam.
44 D MARCHAND: Then why does the metadata on exhibit twelve show it was created on Tuesday?
45 A ¶ Vesper does not answer.
46 A Rahman looks at him, then at the arbitrator, then at his own hands.
47 D RAHMAN: I did not want to say.
48 D MARCHAND: Say it.
49 D RAHMAN: I do not care about the money. I care that he is not ashamed.
50 A ¶ Marchand folds her hands.
* 51 A The high windows glow.
* 52 A A single bowling ball, stranded on the return rack, catches the light.
53 D MARCHAND: Mr. Vesper. I am suspending this hearing. I am referring exhibit twelve to the bar.
54 D VESPER (barely): Yes, Madam.
55 A ¶ He gathers his papers.
56 A They shake.
* 57 A The sound of paper is the loudest thing in the building.

### SCENE s00542 | INT. ORBITAL HYDROPONICS RING - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): KESTREL ODUYA, IXCHEL TORRES-WAI, BRAM VANDERHOEK, OMAR EL-SAYED
* 1 A ¶ Rows of green under violet LEDs.
* 2 A Nutrient mist.
* 3 A Tomatoes on vines the length of a bus.
* 4 A Everything is damp and humming.
5 A ¶ KESTREL ODUYA, 30s, a botanist in a stained lab coat, pinches leaves between her fingers.
6 A Cuts a sample.
7 A Bags it.
8 A IXCHEL TORRES-WAI, 20s, her junior, trails with a tablet, scribbling.
9 A BRAM VANDERHOEK, 40s, a station tech, jogs down the central aisle, wrench in hand.
10 D BRAM: Kes. The mist valves are fluctuating.
11 D KESTREL: How badly?
12 D BRAM: Row twelve is flooding.
13 A ¶ She runs.
14 A Ixchel follows.
* 15 A The mist thickens as they go, and the LEDs flicker, a violet strobe.
* 16 A ¶ Row twelve.
* 17 A A tomato plant slumps, roots exposed, water pooling at its base.
18 A Bram kneels, jams the wrench under the manifold.
19 A He grunts.
20 A Pulls.
* 21 A ¶ The pipe bursts.
* 22 A Water jets across the aisle.
23 A Ixchel yelps.
24 A Kestrel ducks.
25 A Bram swears and falls backward onto the deck, drenched.
26 D KESTREL: Shut it off!
27 D BRAM: I'm trying!
28 A ¶ They scramble.
29 A Kestrel finds the valve.
30 A She yanks it.
* 31 A The spray dies.
32 A The three of them stand soaked and breathless.
33 A ¶ OMAR EL-SAYED, 40s, a surveyor in a grey jumpsuit, appears at the end of the row, a sealed data case in one hand and a badge on a lanyard.
34 A ¶ He doesn't smile.
35 A He holds out the badge.
36 D OMAR: Station Authority. Section audit.
37 D KESTREL: Tonight?
38 D OMAR: Tonight.
39 A ¶ He walks down the row, stepping over puddles.
40 A His eyes find the broken pipe.
41 A The slumped plant.
42 A The sample bag.
43 A Kestrel steps in front of it.
44 D BRAM (whispering to Ixchel): That's not on the schedule.
45 D IXCHEL (whispering back): It never is.
46 D OMAR: Dr. Oduya. You've been logging Row twelve as nominal for six months.
47 D KESTREL: Because it was.
48 D OMAR: Your yield numbers say otherwise.
49 A ¶ He opens the case.
* 50 A A screen flares to life.
* 51 A Columns of numbers, red.
52 A ¶ Ixchel grabs Bram's sleeve.
53 A Bram sets down his wrench.
54 A Slowly, Kestrel picks up the sample bag and holds it behind her back.
55 D KESTREL: The plant's mutated.
56 D OMAR: I know.
* 57 A ¶ Silence.
* 58 A The mist hisses.
59 D OMAR [CONT'D]: So does the Council. They sent me to see if it's dangerous.
60 D KESTREL: And?
61 A ¶ He crouches.
62 A Touches a root.
* 63 A It wriggles.
64 A All four step back at once.
65 D OMAR (softly): Doctor. Is it supposed to do that?
* 66 A ¶ The root coils around his finger.
67 A ¶ Ixchel screams.
68 A Bram lunges.
69 A Kestrel grabs her scalpel.
70 A Omar yanks back, but the root holds, and the plant lifts, slowly, from the soil, a green fist rising out of the dark.
71 D KESTREL: Everybody out. Now.
72 A ¶ They run, boots slapping through water, the violet lights flashing behind them, the plant unfolding into the aisle like a waking god.

### SCENE s00543 | EXT. PARKING GARAGE ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): FRANCINE OYELOWO, LENNY
* 1 A ¶ Sodium lights.
* 2 A Oil stains.
* 3 A One car left, a faded blue sedan with a flat front tire.
* 4 A The city glows beyond the low concrete wall.
5 A ¶ FRANCINE OYELOWO, 40s, a dental hygienist's scrubs under a trench coat, kneels at the flat with a jack and a lug wrench.
6 A Her younger brother LEONARD "LENNY" OYELOWO, 30s, a rumpled courier's jacket, leans against the wall with a cigarette he hasn't lit.
7 A ¶ She wrestles a lug nut.
8 A It doesn't budge.
9 D LENNY: Want me to?
10 D FRANCINE: No.
11 D LENNY: It's been twenty minutes.
12 D FRANCINE: Then it's been twenty minutes.
13 A ¶ He pockets the cigarette.
14 A Watches.
15 A She grunts, adjusts her grip, tries again.
16 D LENNY: Fran.
17 D FRANCINE: Don't.
18 D LENNY: I didn't say anything.
19 D FRANCINE: You said "Fran" like you were going to say something.
20 A ¶ He lets that sit.
* 21 A Wind carries the faint sound of a siren from the street.
22 D LENNY: Mom called.
23 A ¶ She stops.
24 A The wrench hangs from her hand.
25 D FRANCINE: When?
26 D LENNY: This morning. She asked if you were coming Sunday.
27 D FRANCINE: And what did you say?
28 D LENNY: I said I'd ask.
29 D FRANCINE: Why would you ask me?
30 D LENNY: Because you won't answer her.
31 A ¶ She resumes.
32 A Harder.
* 33 A The wrench scrapes.
* 34 A The lug nut turns half a rotation.
35 D FRANCINE: She's been telling people I'm "away on business."
36 D LENNY: It's easier than saying you left.
37 D FRANCINE: I didn't leave. I moved.
38 D LENNY: Four hundred miles is leaving.
39 A ¶ She rocks back on her heels.
40 A Looks up at him.
41 A Her face is wet, but her voice is level.
42 D FRANCINE: You want to talk about leaving? You sent a postcard for two years.
43 D LENNY: It was a good postcard.
44 D FRANCINE: It said, "Weather's nice."
45 D LENNY: It was.
46 A ¶ A brittle laugh escapes her.
47 A He allows himself a half smile.
48 A Then it fades.
49 D LENNY [CONT'D]: I should've called.
50 D FRANCINE: Yes.
51 D LENNY: I should've come.
52 D FRANCINE: Yes.
53 D LENNY: I'm here now.
54 D FRANCINE: You're here because my car broke down.
55 D LENNY: No. I'm here because I got the text.
56 A ¶ She stares.
57 A He takes the wrench from her hand, kneels, fits it on the lug nut.
58 A Braces.
59 A Leans his full weight.
* 60 A ¶ It gives with a crack.
61 D FRANCINE (quietly): Show-off.
62 D LENNY: Always.
63 A ¶ He keeps going.
* 64 A Four nuts, a flat, the spare.
65 A She hands him each tool before he asks.
66 A They work in silence for a long minute, side by side, in the rhythm of two people who learned this from the same father.
67 D FRANCINE: Dad hated the way you held the wrench.
68 D LENNY: Dad hated everything I held.
69 D FRANCINE: That isn't true.
70 D LENNY: He hated the way I held you. When you cried.
71 A ¶ She freezes.
72 D FRANCINE: You remember that?
73 D LENNY: Every day.
74 A ¶ She turns away, looks out over the wall at the lit city.
75 A Her shoulders shake once.
76 A He doesn't touch her.
77 A He keeps working.
78 D FRANCINE: Why now?
79 D LENNY: Because Mom's sick, Fran.
* 80 A ¶ The words hang.
81 A She does not turn.
82 D FRANCINE: How sick?
83 D LENNY: Sick.
84 A ¶ She closes her eyes.
85 A Presses both hands against the cold concrete.
86 D FRANCINE: You waited till the rooftop to tell me.
87 D LENNY: You wouldn't have heard it anywhere else.
88 A ¶ She nods.
* 89 A Slowly.
90 A A man's hand and a woman's hand finally touch on the wrench, and neither moves.
91 D FRANCINE: Sunday.
92 D LENNY: Sunday.
93 A ¶ She takes the wrench.
94 A Finishes the last nut herself.

### SCENE s00544 | EXT. DRAINED BACKYARD POOL - DAY
Detected names (may be incomplete or contain aliases): MOSES AGYEMAN, JAI KAPOOR
* 1 A ¶ Cracked blue paint.
* 2 A Leaves in the deep end.
* 3 A Two boards leaned against the lip.
* 4 A Heat bends the air.
5 A ¶ MOSES AGYEMAN, 15, hoodie, scabbed knees, stands at the top of the transition.
6 A JAI KAPOOR, 15, a cap on backward, a stolen helmet, grips the coping with both hands.
7 A ¶ He drops in.
8 A He wobbles.
9 A He rolls out.
10 A ¶ He grins.
11 A He doesn't see the other one.
12 A ¶ He drops in too, harder, faster, and clips the edge of the first board.
13 A Both skate out and slam into the shallow end together, a tangle of wheels and limbs.
14 A ¶ He laughs first.
15 A Then he does.
16 A Then neither can breathe.
17 A ¶ He pulls himself up.
18 A He pulls him up.
* 19 A Blood on a palm.
* 20 A Dust on a cheek.
21 D MOSES: You see that?
22 D JAI: I felt that.
23 D MOSES: That was clean.
24 D JAI: That was a car crash.
25 D MOSES: Again?
26 D JAI: Again.
27 A ¶ They climb the ladder.
28 A Side by side.
* 29 A Neither says it.
30 A Both are too happy to say it.

### SCENE s00545 | INT. HARROWGATE MUSEUM OF NATURAL CURIOSITIES - TAXIDERMY HALL - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR ALDOUS BLYTHE, ROSALIND PEMBERTON-SHAW, CONSTABLE HARGROVE, ARCHIBALD FITCH
* 1 A ¶ Glass cases in rows, and in every case a creature caught in the middle of a thought: a fox mid-pounce, an owl with one wing half raised, a stoat frozen beside a nest of china eggs.
* 2 A The gaslamps hiss.
* 3 A The floor smells of beeswax and arsenic.
4 A ¶ PROFESSOR ALDOUS BLYTHE, 60s, in a velvet jacket and a monocle, strolls along the cases with a candle, humming, while ROSALIND PEMBERTON-SHAW, 30s, the junior curator, trails him with a notebook, writing and sneezing, and CONSTABLE HARGROVE, 40s, a heavy man in a cape, stands with his hands behind his back, studying a stuffed heron as though it has insulted him.
5 D BLYTHE: You see, Constable, the trick of the thing is not the skin. It is the eyes.
6 D HARGROVE: Glass, ain't they?
7 D BLYTHE: Glass, certainly. But placed by a hand that knew the animal.
8 D ROSALIND: Professor, with respect, the Constable is here about the missing curator.
9 D BLYTHE: Ah, yes. Dear Mr. Fitch. He did so love the badgers.
10 D HARGROVE: Last seen Thursday?
11 D BLYTHE: Thursday evening. Closing time. He went down to oil the hinges on the Great Elk.
12 A ¶ The three of them turn toward the end of the hall.
* 13 A The Great Elk stands in its alcove, antlers spread like a cathedral window, glass eyes catching the candle.
* 14 A ¶ Something shifts behind the elk.
15 A ¶ ARCHIBALD FITCH, 50s, in a rumpled waistcoat, steps from behind the elk, alive, pale, holding an oil can.
16 A He looks at them like a man waking from a dream.
17 D FITCH: I fell asleep.
* 18 A ¶ Silence.
19 D ROSALIND: Mr. Fitch! We thought you were dead!
20 D FITCH: For four days?
21 D BLYTHE (smoothly): Well. It was a very long afternoon.
22 A ¶ Hargrove frowns.
23 A He looks at the elk.
24 A At Fitch.
25 A At Blythe, whose candle has begun to shake.
26 D HARGROVE: Professor. There's a piece of tweed in that elk's antlers.
27 A ¶ Everyone looks up.
* 28 A A scrap of grey cloth.
* 29 A Wet, dark at one end.
30 D BLYTHE: That is... decorative.

### SCENE s00546 | INT. NORTHERN LIGHTS CURLING CLUB - SHEET THREE - NIGHT
Detected names (may be incomplete or contain aliases): SKIP BRITTA LINDGREN-KOWALSKI, MURDOCH FINLAY, YUKI TANAKA-REID, TERRENCE ODUMODU, OLUWASEUN ADEBAYO
* 1 A ¶ Pebbled ice, white and hard under flat lights.
* 2 A Red and yellow rings painted beneath the surface.
* 3 A A scoreboard ticks.
4 A The crowd, forty fans in parkas, hushes.
5 A ¶ SKIP BRITTA LINDGREN-KOWALSKI, 40s, a wool toque and a steady squint, crouches in the house with her broom held like a rudder.
6 A At the hack, MURDOCH FINLAY, 50s, her veteran lead, gathers a stone.
7 A At the sideline, YUKI TANAKA-REID, 20s, the youngest on the team, grips a broom and bites her lip.
8 A TERRENCE ODUMODU, 30s, the vice-skip, in a quilted vest, watches the scoreboard like a hawk.
9 D BRITTA: Hurry hard!
10 A ¶ Murdoch releases.
* 11 A The stone glides.
12 A The broom crew sprints alongside it.
13 D YUKI: Hard! Hard!
14 D TERRENCE: Hard!
15 D BRITTA: HARD!
* 16 A ¶ The stone slides, hovers at the edge of the button.
* 17 A Nothing moves.
* 18 A Forty parkas hold their breath.
* 19 A ¶ Then it curls.
* 20 A A gentle arc.
* 21 A A sliver of daylight.
* 22 A It nudges the opponent's stone aside and settles dead center.
23 A ¶ The crowd explodes.
24 A Yuki jumps and flings her broom in the air.
25 A Terrence hugs Murdoch so hard he lifts him.
26 A Britta stays crouched, forehead on her broom handle, shaking.
27 A ¶ A woman in an official's jacket strides across the ice, clipboard in hand.
28 A ¶ OLUWASEUN ADEBAYO, 50s, the head official, wears a tight bun and a sour look.
29 A She inspects the stone with a tape measure.
30 D OLUWASEUN: Measure's confirmed. Team Lindgren takes the end.
31 A ¶ Britta looks up.
32 A Eyes wide.
33 D BRITTA: We won?
34 D OLUWASEUN: You won the end. The match is Thursday.
35 A ¶ Britta laughs, helpless.
36 A The crowd roars again.
37 D TERRENCE (to Yuki): Was that real?
38 D YUKI (breathless): I think so.

### SCENE s00547 | INT. NIGHT TRAIN "ALBATROSS" - SLEEPER CAR - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR ABEL STROM, MADAME VALENTINE ROUX, HESTER PRYCE, PORTER GILES
* 1 A ¶ A narrow corridor of polished mahogany and brass fixtures.
* 2 A Curtains drawn over the windows.
* 3 A Beyond them, the dark rushes by.
* 4 A The carriage sways in a long steady pulse.
5 A ¶ INSPECTOR ABEL STROM, 50s, a hat too small for his head, a ticket punch in one hand, walks the corridor slowly, checking doors, listening.
6 A At each cabin he pauses.
7 A At the third he knocks.
* 8 A ¶ A door opens a crack.
9 A MADAME VALENTINE ROUX, 60s, a silk robe and a cold cream mask, peers out with an eye like a coin.
10 D ROUX: Yes?
11 D STROM: Madame. A disturbance reported. Did you hear anything?
12 D ROUX: I hear the train. I hear my own pulse. I hear a gentleman in the corridor who will not let a woman sleep.
13 D STROM: My apologies. Have you seen anyone pass?
14 A ¶ She considers him.
* 15 A Behind her, a light flicks on in the next compartment.
16 D ROUX: Only the doctor.
17 D STROM: Which doctor?
18 D ROUX: The one in four.
19 A ¶ She shuts the door.
20 A He moves on.
* 21 A Cabin four.
22 A He raises his hand to knock, hesitates, listens.
* 23 A A soft murmur inside, a woman's voice.
24 A He taps.
* 25 A ¶ The door opens.
26 A DR. HESTER PRYCE, 40s, a black medical bag in one hand and a wet handkerchief in the other, regards him with sleepless composure.
27 D PRYCE: Inspector.
28 D STROM: Doctor. I'm told you were attending someone.
29 D PRYCE: A porter. A faint. Nothing serious.
30 D STROM: Which porter?
31 D PRYCE: The young one. Giles.
32 D STROM: Ah.
33 A ¶ He peers past her shoulder.
* 34 A The compartment is dim.
* 35 A A figure lies on the lower berth, motionless under a blanket.
36 A ¶ PORTER GILES, 20s, in a half-buttoned uniform, one hand pressed to his temple, lifts his head and gives a weak, apologetic smile.
37 D GILES: Sorry for the fuss, sir.
38 D STROM: Nothing to apologize for, my boy. Rest.
39 A ¶ He steps back.
40 A Pryce eases the door half closed.
41 A For a moment their eyes hold.
42 A She is calm.
43 A He is polite.
* 44 A Neither blinks.
45 D STROM [CONT'D]: Doctor, a curious thing. The ticket in your name was bought in Vienna.
46 D PRYCE: It was.
47 D STROM: And yet the conductor reports you boarded in Prague.
48 D PRYCE: He's mistaken.
49 D STROM: He rarely is.
50 A ¶ She smiles.
51 A It is a small, tired smile.
52 D PRYCE: Inspector, would you care for tea?
53 D STROM: I would like the truth, Doctor.
54 D PRYCE: Over tea.
55 A ¶ He thinks.
56 A Nods once.
57 A She opens the door wider.
58 A He enters.
* 59 A The compartment smells of lavender and iodine.
60 A ¶ On the lower berth, Giles has gone still.
61 A His eyes are open.
62 A He is not looking at the Inspector.
63 A He is looking at Pryce.
64 D STROM (gently): Doctor. Your patient is not breathing.
65 A ¶ Pryce does not turn.
66 D PRYCE: I know.
67 A ¶ She closes the door.
* 68 A The latch clicks.
69 A In the corridor, Madame Roux's door opens again, an inch, and a single coin-bright eye peers out.
70 A It watches the door of cabin four for a long time.
71 A Then, quietly, it shuts.

### SCENE s00548 | INT. WILLOWBROOK CRICKET PAVILION - RAIN DELAY - DAY
Detected names (may be incomplete or contain aliases): BHASKAR VENKATARAMAN, LORD WILLOUGHBY, FANSHAWE, FLORENCE OKONKWO-BEAUFORT
* 1 A ¶ Dark wood.
* 2 A A bar with brass taps.
* 3 A Team photographs from a century of afternoons.
* 4 A Rain hammers the tin roof so hard the room rings.
* 5 A Through the long window, the pitch is a lake.
6 A ¶ BHASKAR VENKATARAMAN, 40s, the home captain, in whites stained green at the knee, stands at the window, arms crossed.
7 A He is silent.
8 A He has been silent for forty minutes.
9 A ¶ LORD WILLOUGHBY "BILLY" FANSHAWE, 60s, the visiting captain, a blazer and a cravat, sits in a leather armchair with a tumbler of whisky and a newspaper.
10 A He turns a page.
11 A He sips.
12 D WILLOUGHBY: Awful weather.
13 D BHASKAR: Mm.
14 D WILLOUGHBY: Might be a draw.
15 D BHASKAR: Mm.
16 D WILLOUGHBY: I say, are you going to say anything other than "Mm"?
17 D BHASKAR: I am conserving words.
18 D WILLOUGHBY: For what?
19 D BHASKAR: For when you apologize.
20 A ¶ Willoughby lowers the paper.
21 A Studies him over his glasses.
22 D WILLOUGHBY: Apologize? For what, pray?
23 D BHASKAR: For the run-out.
24 D WILLOUGHBY: Ah. That.
25 D BHASKAR: Yes. That.
26 D WILLOUGHBY: It was a perfectly legal run-out.
27 D BHASKAR: It was a gentleman's agreement. We had it. You broke it.
28 D WILLOUGHBY: Gentlemen's agreements are a bit rich, aren't they? Between you and me?
* 29 A ¶ Rain thunders.
* 30 A Somewhere a gutter overflows.
31 A ¶ FLORENCE OKONKWO-BEAUFORT, 70s, the club umpire, in a white coat and a flat cap, pushes in through the side door with a golf umbrella that is not helping.
32 A She stamps her boots.
33 D FLORENCE: Gentlemen! Ground's unplayable. I've called it.
34 D BHASKAR: Thank you, Florence.
35 D WILLOUGHBY: Dreadful, Florence. Utterly dreadful.
36 D FLORENCE: Don't you "dreadful" me, Billy Fanshawe. I saw that run-out.
37 D WILLOUGHBY: Madam --
38 D BHASKAR: She saw it.
39 D WILLOUGHBY: Thank you, Bhaskar, I can speak for myself --
40 D FLORENCE: I've umpired for thirty-one years. I've seen every kind of foul play. But I've never seen a man do it with such a smile.
41 D WILLOUGHBY (stiffly): It was an honest mistake.
42 D BHASKAR (to Florence): It wasn't.
43 D FLORENCE (to Bhaskar): It wasn't.
44 A ¶ Willoughby sets down his glass.
* 45 A The ice clinks.
46 A He stands, too fast, and knocks his knee against the table.
47 D WILLOUGHBY: Very well! I concede! It was a bad piece of sportsmanship!
* 48 A ¶ Silence.
* 49 A Rain.
* 50 A The old photographs watch from the walls.
51 D BHASKAR: And?
52 D WILLOUGHBY: And... I apologize.
53 D BHASKAR: To whom?
54 D WILLOUGHBY (through his teeth): To you, Captain Venkataraman.
55 D BHASKAR: And?
56 D WILLOUGHBY: And to Florence.
57 D FLORENCE: And?
58 D WILLOUGHBY: And... to the game.
* 59 A ¶ The tin roof crackles.
60 A Bhaskar's mouth twitches.
61 A Florence shakes her umbrella, spraying them both.
62 D BHASKAR: Thank you.
63 D FLORENCE: Tea?
64 D WILLOUGHBY: Whisky.
65 D FLORENCE: Tea.
66 A ¶ She pours three cups from a brown pot.
67 A They sit around the table, three old foes in damp white, listening to the water drown the pitch.

### SCENE s00549 | INT. LUNAR RADIO OBSERVATORY - CONTROL ROOM - DAY
Detected names (may be incomplete or contain aliases): COMMANDER NATHANIEL ASHBY, PRIYAMVADA LUTHRA, PETROVSKY, MISS ELLINGTON, TECH DOYLE
* 1 A ¶ A cramped steel room lit by banks of green screens.
* 2 A Out the porthole, a grey plain of regolith and a dish the size of a stadium tilting toward the stars.
* 3 A The air tastes of recycled coffee.
4 A ¶ COMMANDER NATHANIEL ASHBY, 50s, a command jacket and a weary jaw, sits in the center seat.
5 A DR. PRIYAMVADA LUTHRA, 40s, in a lab coat, stands at the main console.
6 A MR. PETROVSKY, 60s, the old engineer, eats from a tube.
7 A MISS ELLINGTON, 30s, a communications officer with a headset.
8 A TECH DOYLE, 20s, a freckled intern, hugs a clipboard.
9 D ASHBY: Dr. Luthra. Report.
10 D LUTHRA: Three signals. Same source. Same frequency. Same pattern every eleven minutes.
11 D ELLINGTON: It repeats exactly.
12 D PETROVSKY: No natural source repeats exactly.
13 D DOYLE: Could it be a pulsar?
14 D LUTHRA: Pulsars drift. This doesn't.
15 D ASHBY: Origin?
16 D LUTHRA: Sagittarius. Forty light years.
17 D PETROVSKY: So whoever sent it, sent it forty years ago.
18 D ELLINGTON: Or they're still sending.
19 D DOYLE: Does it say anything?
20 D LUTHRA: It's a prime sequence. Two, three, five, seven, eleven. Then a gap. Then --
21 D ASHBY: Then?
22 D LUTHRA: Then our own coordinates.
* 23 A ¶ Silence.
* 24 A The dish groans outside, a long metallic sound.
25 D PETROVSKY: Our coordinates. The Moon's.
26 D LUTHRA: The Moon's. Down to the meter.
27 D ELLINGTON: Somebody knows we're here.
28 D DOYLE: Or somebody always did.
29 A ¶ Ashby stands.
30 A Looks at the screens.
31 A Looks at the porthole.
* 32 A The dish turns another degree.
33 D ASHBY: Send nothing. Log everything. Nobody leaves this room.

### SCENE s00550 | INT. MUSEUM OF LOCKS AND KEYS - GALLERY OF CURIOSITIES - NIGHT
Detected names (may be incomplete or contain aliases): CLEO ANTONOPOULOS, BARNABY SOUTHWORTH, GUARD ENOCH BALOGUN
* 1 A ¶ Glass cases glow under museum spots.
* 2 A Padlocks shaped like hearts, a chastity belt, a Houdini handcuff, a Chubb detector from 1818.
* 3 A The marble floor is clean enough to eat from.
4 A ¶ CLEO ANTONOPOULOS, 30s, in a cleaner's grey uniform, pushes a mop bucket along the aisle.
5 A Slow.
6 A Humming.
7 A Wringing the mop, slopping water.
* 8 A At the far end of the gallery a vault door waits, painted gold.
* 9 A Fake.
* 10 A Almost.
11 A ¶ BARNABY SOUTHWORTH, 50s, the curator, in a cardigan and bow tie, sits at the security desk with a crossword.
12 A He is happy.
* 13 A The room is quiet.
* 14 A A radio plays softly.
15 D BARNABY: Seven letters. "Opener of doors."
16 D CLEO: Key?
17 D BARNABY: Too short.
18 D CLEO: Skeleton?
19 D BARNABY: Nine.
20 D CLEO: Master.
21 D BARNABY: Six.
22 A ¶ Cleo smiles.
23 A Wrings the mop.
* 24 A Water pools near a floor drain by the case of antique keys.
25 D BARNABY [CONT'D]: You're very diligent, Cleo.
26 D CLEO: It's a good floor.
27 D BARNABY: Most of the staff would've gone home.
28 D CLEO: Most of the staff aren't paid by the hour.
29 A ¶ He laughs.
30 A She pushes the bucket another yard.
* 31 A The wheels squeak.
32 A He doesn't look up.
33 A She taps a button on the handle of the mop.
* 34 A A quiet click.
* 35 A ¶ The security camera in the corner swivels, slow, until it faces the wall.
36 D BARNABY (still filling the crossword): "Skeleton" doesn't fit, does it?
37 D CLEO: No.
38 D BARNABY: Well, I'm stuck.
39 D CLEO: I'll help.
40 A ¶ She sets down the mop.
41 A Walks to the golden vault door and, from her bucket, produces a stethoscope and a small brass pick.
42 A She presses her ear to the cold gold.
43 A Turns a tumbler.
44 A Another.
45 A ¶ GUARD ENOCH BALOGUN, 40s, a thick neck and a creaking belt, rounds the corner with a flashlight, whistling.
46 A He stops.
47 A Looks at Cleo.
48 A Looks at the open bucket.
49 A Looks at the camera facing the wall.
50 D ENOCH: Ma'am.
51 D CLEO (without turning): Evening, Enoch.
52 D ENOCH: That's not on the schedule.
53 D CLEO: No.
54 A ¶ Barnaby finally looks up, sees the guard, sees Cleo, sees the pick.
55 A His pencil stops.
56 D BARNABY: Oh, dear.
57 A ¶ Enoch's hand drifts toward his radio.
58 A Cleo's hand does not leave the vault.
* 59 A Tumbler clicks.
* 60 A A heavy thunk.
61 D CLEO: Enoch. Put the radio down.
62 D ENOCH: Ma'am --
63 D CLEO: Please.
64 A ¶ He considers.
65 A The radio comes down.
66 A He steps aside, and with a courtly gesture, motions toward the vault.
67 D ENOCH: After you.
68 A ¶ Cleo pulls.
* 69 A The door swings open on an empty velvet chamber with a single card: GONE FISHING.
70 A She stares.
71 D BARNABY (softly): Seven letters. "Opener of doors."
72 D ENOCH: Trickster.
73 D BARNABY: Yes, that's it.

### SCENE s00551 | INT. ARCTIC SEAFOOD COLD STORAGE - LOADING BAY - NIGHT
Detected names (may be incomplete or contain aliases): SOLEDAD RIVERA, WYATT PRUITT, LINH TRAN, IGNATIUS OKORO, FERN HALLORAN-BOSE, BOONE DAKOTA
* 1 A ¶ Minus twenty-five.
* 2 A Breath fogs the air like cigar smoke.
* 3 A Pallets of frozen cod stacked ten feet high, shrink-wrapped, glittering with frost.
* 4 A A forklift sleeps beside a hanging scale.
* 5 A Strip lights hum.
6 A ¶ Six figures in white parkas move through the aisle with the quiet efficiency of a crew that has done this before.
7 A ¶ SOLEDAD RIVERA, 40s, the planner, leads, carrying a blueprint rolled in a tube.
8 A WYATT PRUITT, 30s, the driver, gnaws a toothpick and watches the door.
9 A LINH TRAN, 30s, the safecracker, drags a rolling case with a plasma cutter.
10 A IGNATIUS OKORO, 50s, the inside man, in a foreman's hard hat, jingles a ring of keys.
11 A FERN HALLORAN-BOSE, 20s, a hacker, cradles a laptop in gloved hands.
12 A BOONE DAKOTA, 40s, the muscle, carries a duffel in each fist.
13 D SOLEDAD (quietly): Remember. We're out in twelve.
14 D WYATT: Van's at the dock.
15 D FERN: Cameras are looped.
16 D LINH: Vault's behind the tuna. Third freezer.
17 D IGNATIUS: That's the one with the red tag.
18 D SOLEDAD: Boone. Door.
19 D BOONE (low): On it.
20 A ¶ He sets the duffels down and shoulders a heavy steel door, the hinge shrieking in the cold.
21 A They enter a smaller freezer.
* 22 A Hanging halves of beef sway.
23 A Linh crouches at a steel panel in the back wall.
24 D LINH: Here.
25 A ¶ She flips a switch.
* 26 A The plasma cutter hisses, blue-white, and begins to draw a circle on the steel.
* 27 A Sparks fall like snow.
28 A Fern stands guard with the laptop open, tapping.
29 D FERN (muttering to herself): Come on, come on, stay dumb...
30 D WYATT: Twelve minutes.
31 D SOLEDAD: Eleven.
32 D IGNATIUS: Is it always this cold?
33 D BOONE: It's a freezer.
34 D IGNATIUS: I meant the vault.
35 D LINH: The vault's not cold. It's a safe room. It has a heater.
36 D IGNATIUS: Why would it have a heater?
37 D LINH: Because someone puts a person in it.
38 A ¶ They all look at her.
39 A She doesn't look up.
* 40 A The cutter sputters.
41 D SOLEDAD (to the group): Let's keep our heads. Boone, how's the watch?
42 D BOONE: Quiet.
43 D WYATT (to himself): Quiet is bad.
* 44 A ¶ Fern's laptop chirps.
* 45 A A red banner scrolls across the screen.
46 A Her face drains.
47 D FERN: Sol.
48 D SOLEDAD: What?
49 D FERN: The loop broke.
50 A ¶ Linh kills the cutter.
* 51 A The silence is enormous.
52 D SOLEDAD: How long?
53 D FERN: Ninety seconds.
54 D IGNATIUS: That's impossible. I set the loop.
55 D BOONE: Somebody else did.
56 A ¶ They freeze.
* 57 A Down the corridor, far off, boots on concrete.
* 58 A Several pairs.
* 59 A Unhurried.
60 D SOLEDAD: Positions.
61 A ¶ Wyatt slides behind a pallet.
62 A Boone pulls the door shut.
63 A Linh unsnaps a pocket.
64 A Fern closes her laptop and puts it on the floor, very gently.
65 A Ignatius backs against a hanging side of beef.
66 D SOLEDAD [CONT'D] (whispering): Ignatius. Who knew about this?
67 D IGNATIUS: Just us.
68 D SOLEDAD: Just us.
69 A ¶ She stares at him.
70 A Slowly, his hand goes to his hard hat.
71 A He removes it, as if to scratch his head, and the strip light catches a small black earpiece in his ear.
72 D LINH (very quietly): Oh, Ignatius.
* 73 A ¶ The freezer door swings open on its own.
* 74 A Beyond it, only the dark corridor and the sound of boots, closer.
75 D FERN (under her breath): It's a trap.
76 D SOLEDAD: Of course it's a trap, Fern. It's always a trap.
77 A ¶ Boone raises a fist.
78 A Wyatt cocks a pistol.
79 A Linh lifts the cutter like a lance.
* 80 A The boots stop outside, and the frost between them seems to hold its breath.

### SCENE s00552 | INT. HOSPITAL CORRIDOR - VENDING ALCOVE - 4 A.M.
Detected names (may be incomplete or contain aliases): AGNES PRZYBYLSKI, WALTER OKAFOR
* 1 A ¶ A narrow nook off the oncology ward.
* 2 A A humming vending machine with half its snacks sold out, a stained couch, a wall clock that has lost its minute hand.
* 3 A Fluorescent light falls flat across everything.
4 A ¶ AGNES PRZYBYLSKI, 70s, in a cardigan buttoned wrong, feeds a dollar bill into the machine.
* 5 A The machine spits it back.
6 A She smooths it on the glass.
7 A Feeds it again.
* 8 A It spits it back.
9 A WALTER OKAFOR, 70s, in a hospital gown and a pair of borrowed slippers, shuffles in with an IV pole, and settles onto the couch, wincing, and watches her fail a third time.
10 D WALTER: It doesn't like that one.
11 D AGNES: It's a dollar.
12 D WALTER: Not that dollar.
13 A ¶ She tries a different bill.
* 14 A The machine takes it.
* 15 A A coil turns.
* 16 A A bag of pretzels falls.
17 D AGNES: Thank you.
18 D WALTER: You're welcome.
19 D AGNES: I wasn't talking to you.
20 D WALTER: I know.
21 A ¶ She retrieves the pretzels and sits on the other end of the couch.
22 A She opens the bag.
23 A Offers him one without looking.
24 A He takes it.
25 D AGNES: My husband's in 412.
26 D WALTER: Mine's in 414.
27 D AGNES: Your husband?
28 D WALTER: My wife. I misspoke. It's the hour.
29 D AGNES: Mm.
30 A ¶ They chew.
* 31 A The vending machine hums.
* 32 A A cart rattles somewhere down the hall.
33 D WALTER: What's he got?
34 D AGNES: Lungs.
35 D WALTER: Mine's a pancreas.
36 D AGNES: That's a bad one.
37 D WALTER: It is.
38 D AGNES: Mine too, I suppose.
39 D WALTER: You suppose.
40 A ¶ She turns the empty bag in her hands, folds it into a precise little triangle.
41 D AGNES: I'm supposed to be strong. He's the one in the bed. But I'm the one who needs to be told what to eat.
42 D WALTER: I eat nothing. I just carry the pole around.
43 D AGNES: Does it help?
44 D WALTER: Somewhat. It gives me something to hold.
45 A ¶ She laughs, a real, small laugh.
46 A He smiles.
47 A They sit with that for a minute.
* 48 A The clock without a minute hand shows 4:00, as it has for years.
49 D AGNES: What's her name?
50 D WALTER: Delia.
51 D AGNES: Delia. That's pretty.
52 D WALTER: It is.
53 D AGNES: And does she know you're out here?
54 D WALTER: She's asleep.
55 D AGNES: Does yours?
56 D WALTER: Walter?
57 D AGNES: No. I'm Agnes. Your wife.
58 D WALTER: I know who you are.
59 D AGNES: You called me Delia.
60 A ¶ He stops.
* 61 A A beat.
62 A He looks at his own hand, the cuff of the gown, the IV.
63 A He looks at her.
64 A His whole face collapses and reassembles itself.
65 D WALTER: Agnes.
66 D AGNES: Yes.
67 D WALTER: You're the one in 414.
68 D AGNES: I'm the one in 412. You're 414.
69 D WALTER: Then who's in 412?
70 D AGNES: My husband.
71 D WALTER: Who's your husband?
72 D AGNES: You, Walter.
73 A ¶ He nods slowly.
74 A His eyes fill.
75 A She takes his hand, the one without the IV, and holds it in both of hers.
76 D AGNES [CONT'D]: It's four in the morning. Let's go back.
77 D WALTER: Can I have a pretzel first?
78 A ¶ She hands him the empty bag.
79 A He holds it like a relic.
80 D WALTER [CONT'D]: They're all gone.
81 D AGNES: We'll get more.
82 A ¶ She feeds the machine another dollar.

### SCENE s00553 | INT. STRIKE ZONE LANES - LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): COACH WENDELL HUXLEY, DEXTER MALONE-ADEYEMI, ROMEO BALDERRAMA
* 1 A ¶ Dented lockers.
* 2 A A bench scarred with initials.
* 3 A A single bulb swings over a pile of bowling bags.
* 4 A The sound of the league championship, the other team cheering, drifts through the wall like a taunt.
5 A ¶ COACH WENDELL HUXLEY, 60s, in a polyester team jacket and bifocals, sits on an upturned bucket, clipboard on his knee.
6 A He does not look at it.
7 A DEXTER MALONE-ADEYEMI, 30s, a gangling anchor bowler, sits on the bench, hands hanging between his knees.
8 A ROMEO BALDERRAMA, 20s, a rookie, paces in front of the lockers, rolling a ball from palm to palm.
9 D HUXLEY: Gentlemen.
10 D ROMEO: Don't say it.
11 D HUXLEY: I will say it.
12 D DEXTER: He's going to say it.
13 D HUXLEY: We lost.
14 D ROMEO (to himself): We lost by six pins.
15 D DEXTER: Seven.
16 D HUXLEY: Seven. Thank you, Dexter.
17 D ROMEO: It was the tenth frame.
18 D DEXTER: It was always going to be the tenth frame.
19 D HUXLEY: Nothing is always going to be the tenth frame.
20 D ROMEO: Coach, I left the seven pin standing.
21 D HUXLEY: I know.
22 D ROMEO: I had it. I had the whole lane.
23 D HUXLEY: You had a lane. You didn't have the whole lane. Nobody has the whole lane.
24 D DEXTER (to the room): Does anyone have a beer?
25 D HUXLEY: No.
26 D DEXTER: Because I would like a beer.
27 D HUXLEY: Dexter, you're thirty-four. Behave.
28 D DEXTER: I'm behaving. I'm behaving like a man who just threw a four-ten split in front of his mother.
29 D ROMEO: She was clapping.
30 D DEXTER: She was clapping out of pity.
31 D HUXLEY: She was clapping because you're her son.
32 D DEXTER: Same thing.
* 33 A ¶ A beat.
34 A Romeo laughs, short and ugly.
35 A Dexter starts too.
36 A Huxley fights it.
37 A Fails.
38 D HUXLEY: All right. All right. Listen. Both of you. I have coached this team for twenty-two years.
39 D ROMEO: Twenty-three.
40 D HUXLEY: Twenty-three. And I have never once lost a championship by less than ten pins.
41 D DEXTER: So this is progress.
42 D HUXLEY: This is the closest we've ever been.
43 D ROMEO: That's supposed to make me feel better?
44 D HUXLEY: No. It's supposed to make you angry.
45 D ROMEO: It does.
46 D HUXLEY: Good. Hold that.
47 A ¶ He stands.
48 A Hands each of them a towel from a pile.
49 A Dexter wipes his face.
50 A Romeo hangs his around his neck like a boxer.
51 D HUXLEY [CONT'D] (to the room, as to a crowd): Next season, we come back. And we do not say sorry. We say hello.
52 D DEXTER: Hello.
53 D ROMEO: Hello.
54 D HUXLEY: Louder.
55 D DEXTER: HELLO!
56 D ROMEO: HELLO!
* 57 A ¶ Beyond the wall, the cheering dies.
58 A A janitor starts a floor-buffer.
59 A Huxley picks up his clipboard, crosses out something, and writes, in pencil: NEXT YEAR.

### SCENE s00554 | INT. ST. AMBROSE BAKERY - OVEN TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): ODILE LAFARGE-MENDOZA, MARCELLUS TREMAINE, TOBIAS GR, NEWALD
* 1 A ¶ A brick vault, black with a century of smoke.
* 2 A Iron doors, cooling racks, the slow smell of yesterday's bread.
* 3 A At the far end, a hole in the wall where the old coal chute used to be, just wide enough for a crouching man.
4 A ¶ ODILE LAFARGE-MENDOZA, 40s, in a baker's apron over a black jumpsuit, kneels at the wall with a chisel and a mallet, coaxing a brick loose with a baker's patience.
5 A MARCELLUS TREMAINE, 60s, flour on his forearms, stands guard at the tunnel mouth, ear cocked toward the street.
6 A TOBIAS GRÜNEWALD, 20s, the apprentice, hugs a lantern and a tray of rolls for cover.
7 D ODILE: Marcellus. Time.
8 D MARCELLUS: Eleven past.
9 D ODILE: Then we have until half.
10 D TOBIAS: What happens at half?
11 D MARCELLUS: The delivery truck.
12 D TOBIAS: I thought it came at four.
13 D MARCELLUS: It does. But the driver likes to sit and smoke.
14 D ODILE: Which gives us twenty minutes.
15 D TOBIAS: To do what?
16 D ODILE: To go through a wall.
17 A ¶ Tobias swallows.
18 A Sets down the tray.
* 19 A The tunnel is hot and the lantern is trembling.
20 A Odile pries the brick free.
* 21 A It falls with a soft cough.
* 22 A Beyond: dark, a draft of cold air, a faint metallic gleam.
23 D MARCELLUS: That's it.
24 D ODILE: That's it.
25 D TOBIAS: What is?
26 D MARCELLUS: The bank vault.
27 D TOBIAS: The bank is on the other side of the street.
28 D ODILE: And the bakery is on this side. And the tunnel crosses under.
29 D TOBIAS: You never said it was a bank.
30 D MARCELLUS: We said it was bread.
31 D TOBIAS: This is not bread!
32 D ODILE: Hush.
33 A ¶ She puts a finger to her lips.
* 34 A They listen.
* 35 A The tunnel breathes.
* 36 A Somewhere above them, a car passes, tires hissing on wet cobbles.
37 D ODILE [CONT'D]: Tobias. You've worked here three years.
38 D TOBIAS: Yes.
39 D ODILE: Have we ever been late with a loaf?
40 D TOBIAS: No.
41 D ODILE: Have we ever been short?
42 D TOBIAS: No.
43 D ODILE: So do you trust me?
44 D TOBIAS: ...Yes.
45 D ODILE: Then hold the lantern.
46 A ¶ He holds it.
47 A His hand stops shaking.
48 A She crawls into the hole.
49 A Marcellus passes her the mallet, then the chisel, then a long, thin steel probe.
50 A She disappears into the dark.
* 51 A ¶ A scrape.
* 52 A A tap.
* 53 A A silence.
* 54 A A long, long silence.
55 D TOBIAS (whispering): What's she doing?
56 D MARCELLUS: Listening.
57 D TOBIAS: To what?
58 D MARCELLUS: To the lock.
59 D TOBIAS: Locks don't talk.
60 D MARCELLUS: Everything talks, lad. You just have to be quiet enough.
* 61 A ¶ A click.
* 62 A A heavy mechanical sigh.
63 A Odile's voice drifts out of the hole, muffled and amused.
64 D ODILE [O.S.]: Gentlemen. We're in.
65 A ¶ Marcellus and Tobias exchange a look.
66 A Tobias laughs, a cracked, delighted laugh, and covers his mouth with a flour-white hand.
67 A Marcellus claps him on the back.
* 68 A The lantern swings, throwing gold across the old brick.
69 D MARCELLUS: Twenty minutes, Odile.
70 D ODILE [O.S.]: Eighteen.
71 D TOBIAS: What do we do?
72 D MARCELLUS: We bake.

### SCENE s00555 | INT. DEEP-SEA RESEARCH STATION "ABYSSAL ONE" - OBSERVATION DOME - NIGHT
Detected names (may be incomplete or contain aliases): ARUNDHATI SENGUPTA, LIEUTENANT KAVEH MORTAZAVI
* 1 A ¶ A glass bubble on the ocean floor, three thousand meters down.
* 2 A Beyond the curved glass: black water, drifting snow, a lamp throwing a lonely cone.
* 3 A Pipes sweat.
* 4 A A kettle ticks on a hot plate.
5 A ¶ DR. ARUNDHATI SENGUPTA, 50s, a thermal sweater and wire-rimmed glasses, sits cross-legged on the deck with a thermos.
6 A LIEUTENANT KAVEH MORTAZAVI, 30s, in a naval jumpsuit, stands at the glass, one palm flat against it.
7 D KAVEH: Did you see that?
8 D SENGUPTA: See what?
9 D KAVEH: Something moved.
10 D SENGUPTA: Something always moves, Lieutenant. It's the deep sea.
11 D KAVEH: Not like that.
12 D SENGUPTA: Describe it.
13 D KAVEH: Big. Slow. Pale. It went across the lamp and then, nothing.
14 D SENGUPTA (to herself): Anglerfish. Or a squid. Or the reflection of your own eyelid.
15 D KAVEH: It was not my eyelid.
16 D SENGUPTA: Then it was a sperm whale.
17 D KAVEH: Not at this depth.
18 D SENGUPTA: No.
19 A ¶ She unscrews the thermos.
20 A Pours.
21 A Offers him a cup.
22 A He doesn't take it.
23 D SENGUPTA [CONT'D]: Kaveh. When did you last sleep?
24 D KAVEH: I don't remember.
25 D SENGUPTA: Thirty-one hours. I counted.
26 D KAVEH: You counted?
27 D SENGUPTA: I count everything. It's a scientific disorder.
28 A ¶ He almost laughs.
* 29 A Then the lamp flickers.
* 30 A The water beyond the glass shifts and the snow swirls into a vortex.
* 31 A Kaveh steps back.
32 D KAVEH: There. There it is.
33 A ¶ Sengupta rises.
34 A Joins him.
* 35 A A vast pale shape, a flank, a curve, slides across the glass, brushing it, so close its skin leaves a smear in the silt.
36 A For a long moment the two of them simply stare.
37 D SENGUPTA (whispering): Oh.
38 D KAVEH: What is it?
39 D SENGUPTA (to herself): I have no name for it.
40 D KAVEH: You always have a name.
41 D SENGUPTA: Not for this.
* 42 A ¶ The shape rolls.
* 43 A An eye the size of a dinner plate regards them through the glass, wet and black, ancient, unhurried.
44 D KAVEH: It's looking at us.
45 D SENGUPTA: Yes.
46 D KAVEH: Is it dangerous?
47 D SENGUPTA (softly): I think it's curious.
48 D KAVEH: Is that better?
49 D SENGUPTA: It depends on what it's curious about.
* 50 A ¶ A low hum builds in the station walls, a vibration they feel in their teeth.
* 51 A The kettle rattles on the hot plate.
* 52 A The creature presses a flipper against the dome, and the glass creaks.
53 D KAVEH (low): Doctor.
54 D SENGUPTA: I know.
55 D KAVEH: That's a stress fracture.
56 D SENGUPTA: I know.
57 D KAVEH: We should seal the dome.
58 D SENGUPTA: No. Wait.
59 A ¶ She lifts one hand and, slowly, places her palm on the glass opposite the creature's flipper.
* 60 A The hum falls.
* 61 A The creak stops.
62 A The great eye blinks, and the creature drifts back, and back, until it is only a pale suggestion in the dark.
63 A ¶ Kaveh lets out a breath that fogs the glass.
64 A Sengupta lowers her hand, picks up the thermos, and pours herself a cup that shakes in her grip.
65 D KAVEH: You were right.
66 D SENGUPTA: About what?
67 D KAVEH: Curious.
68 D SENGUPTA (smiling, tired): I do hate being right at depth.

### SCENE s00556 | INT. THE GILDED MIC KARAOKE BAR - TUESDAY NIGHT
Detected names (may be incomplete or contain aliases): JOSEFINA OLIVEIRA, DARREN FITZWILLIAM, MEI-LING CHOW, CHUKS, EZEKWESILI, ANDRE BEAUCHAMP, BETTINA KOWALSKI, DJ
* 1 A ¶ Sticky booths.
* 2 A A disco ball missing half its mirrors.
* 3 A A screen the size of a billboard scrolls lyrics in karaoke-blue.
4 A Six strangers share one corner table, an enormous plate of fries between them.
5 A ¶ JOSEFINA OLIVEIRA, 30s, a leather jacket and a cautious smile, clutches a song binder.
6 A DARREN FITZWILLIAM, 30s, a shirt with too many buttons undone, leans back, king of the booth.
7 A MEI-LING CHOW, 20s, cat-eye glasses, sips a mocktail, eyes darting.
8 A CHUKWUEMEKA "CHUKS" EZEKWESILI, 30s, in a bright print shirt, drums the table with his thumbs.
9 A ANDRE BEAUCHAMP, 40s, quiet, nursing a ginger ale.
10 A BETTINA KOWALSKI, 50s, a sequined cardigan, waves her arm at the DJ.
11 D BETTINA (to the table): All right, kids. Who's going first?
12 D DARREN: Ladies first.
13 D JOSEFINA: That's sexist.
14 D DARREN: It's chivalrous.
15 D MEI-LING (muttering): It's a trap.
16 D CHUKS: I'll go.
17 D ANDRE: Chuks, you've been dying to go since we sat down.
18 D CHUKS: Because I have a gift, Andre. A gift.
19 D BETTINA: Do you have a number?
20 D CHUKS: Eleven. "Dancing Queen."
21 D DARREN: Abba. Brave.
22 D JOSEFINA: He'll destroy it.
23 D CHUKS: I'll honor it.
24 A ¶ He bounds to the stage.
* 25 A The screen lights.
* 26 A A familiar piano riff.
27 A He grips the mic like a torch.
28 A Sings the first line, loud, glorious, a note short of flat.
29 A The table roars.
30 D BETTINA: Go on, baby!
31 D MEI-LING (softly): Oh, he's actually good.
32 D JOSEFINA: He's terrible.
33 D MEI-LING: He's terrible and good.
34 D DARREN (leaning toward Josefina): You should do one next.
35 D JOSEFINA: I don't sing.
36 D DARREN: Everyone sings.
37 D JOSEFINA: I sing in the shower.
38 D DARREN: Well, there's no shower here.
39 D JOSEFINA (dry): Thank God.
40 D ANDRE (to Mei-Ling, quietly): Do you want to go?
41 D MEI-LING: I'd rather die.
42 D ANDRE: I'll go with you.
43 A ¶ She stares at him.
44 A A small, astonished smile.
45 D MEI-LING: You would?
46 D ANDRE: Duet. Whatever you pick.
47 D MEI-LING: ...Something slow.
48 D ANDRE: Slow's good.
49 D BETTINA (to the whole table): Look at this! Two matches and a marching band!
50 D DARREN (under his breath): Bettina, you're a menace.
51 D BETTINA: That's the nicest thing you've said all night, Darren.
52 A ¶ On stage, Chuks hits the chorus.
53 A The whole bar sings along, shouting, tipsy, joyous.
54 A Josefina, in spite of herself, mouths the words.
55 A Darren sees.
56 A He grins.
57 A She catches him and glares, then laughs.

### SCENE s00557 | INT. CONVERTED SCHOOL BUS BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE NWOSU
* 1 A ¶ A decommissioned yellow bus, parked on cinder blocks in an overgrown field.
* 2 A Inside, the seats are gone.
* 3 A A mattress on the floor, a milk crate for a nightstand, string lights stapled to the ceiling.
* 4 A A cassette recorder sits on the crate, a red light blinking.
* 5 A ¶ No one is here.
* 6 A Rain ticks on the roof.
* 7 A ¶ The recorder clicks and begins to play.
8 A A girl's voice, young, bright, trying hard to sound older.
9 D ADAEZE [V.O.] (recorded, tinny): Test, test. Okay. It's July the ninth. I'm fourteen. I'm recording this for me. For the older me. If you're hearing it, you're, like, thirty or something.
* 10 A ¶ The bus door creaks open.
* 11 A A gust of wet air.
12 A ¶ ADAEZE NWOSU, 17, a duffel bag slung over one shoulder, a high-school graduation tassel still pinned to her jacket, climbs the steps, pushing wet braids from her face.
13 A She does not see the recorder.
14 A She drops the duffel on the mattress and sits.
15 D ADAEZE [V.O., CONT'D] (recorded): So here are my predictions. Number one. You live somewhere with a window that opens. Number two. You're not scared of anything.
16 A ¶ Adaeze stops.
17 A Looks at the crate.
18 A Looks at the recorder.
19 D ADAEZE (whispering): No way.
20 D ADAEZE [V.O.] (recorded): Number three. You've called Mom.
* 21 A ¶ The words hang.
22 A Adaeze sits very still.
23 D ADAEZE [CONT'D] (to the recorder): I haven't.
24 D ADAEZE [V.O.] (recorded): Number four. You've forgiven Dad.
25 A ¶ She turns the volume down with a finger.
* 26 A The room goes soft.
27 D ADAEZE [CONT'D] (quietly): That one's harder.
28 A ¶ She pulls her knees up.
29 A Opens the duffel.
30 A Takes out a folded letter with a college seal.
31 A She turns it over twice.
32 A Tucks it back in.
33 D ADAEZE [V.O.] (recorded): Number five. You still have this tape, which means you didn't throw away anything good.
34 A ¶ She picks up the recorder.
35 A Holds it like a bird.
36 D ADAEZE (softly): I kept it.
37 A ¶ She rewinds a few seconds.
38 A Plays it again.
39 D ADAEZE [V.O.] (recorded): Number five. You still have this tape...
40 A ¶ Adaeze presses record.
* 41 A The little red light glows.
42 A She clears her throat, speaks into it, steady and careful.
43 D ADAEZE [CONT'D]: Test, test. It's June the second. I'm seventeen. I'm recording this for the girl I used to be.
44 A ¶ She stops.
45 A Her voice cracks, then settles.
46 D ADAEZE [CONT'D]: Here's what happened. I got in. I'm going. I'm scared. And I called Mom.
47 A ¶ She laughs, and it breaks, and she leans her forehead against the cold metal wall of the bus.
48 D ADAEZE [CONT'D]: She said you were right about number three.
* 49 A ¶ Rain eases.
* 50 A The string lights shiver.
51 A She holds the recorder close to her mouth and whispers the last line, so that only the tape and the bus can hear.
52 D ADAEZE [CONT'D]: Number four: I'm working on it.
53 A ¶ She clicks the recorder off.

### SCENE s00558 | INT. CAPE ROSS TELEGRAPH OFFICE - NIGHT - 1889
Detected names (may be incomplete or contain aliases): CLARENCE PENHALLOW, MABEL PENHALLOW, HOLLINGSWORTH
* 1 A ¶ A stone hut at the edge of a cliff.
* 2 A A potbellied stove, a battered desk, a brass key under a green-shaded lamp.
* 3 A Wind howls around the shutters.
* 4 A A storm lantern swings from a hook.
5 A ¶ CLARENCE PENHALLOW, 40s, a telegraph operator in sleeve garters and a worn waistcoat, taps the key steadily, one eye on a log book.
6 A Beside him on a stool sits MABEL PENHALLOW, 10, his daughter, bundled in a shawl and chewing a pencil, copying out letters in a copybook.
7 D CLARENCE (muttering): Dash-dot-dash... dash-dash...
8 D MABEL: What does it say, Papa?
9 D CLARENCE: Ship in distress. Off the Skerries.
10 D MABEL: Is she sinking?
11 D CLARENCE: She's calling.
* 12 A ¶ A bell rings above the door.
13 A Clarence picks up the telephone receiver, wired to a grey box on the wall, and holds it to his ear.
14 D HOLLINGSWORTH [V.O.] (over telephone, crackling): Penhallow. This is Hollingsworth at Lloyd's. Do you read me?
15 D CLARENCE: I read you, sir.
16 D HOLLINGSWORTH [V.O.] (over telephone): The Admiralty has authorized the lifeboat. They want the coordinates relayed to Falmouth. Immediately.
17 D CLARENCE: Coordinates, sir. Fifty degrees, four minutes north. Five degrees, nineteen west.
18 D HOLLINGSWORTH [V.O.] (over telephone): Repeat.
19 D CLARENCE: Fifty, four, north. Five, nineteen, west.
* 20 A ¶ A pause.
* 21 A Static.
22 D HOLLINGSWORTH [V.O.] (over telephone): Good man. Stay on the wire.
23 A ¶ Clarence hangs up and begins to tap at the key, fast, sure, fingers dancing.
24 A Mabel watches, wide-eyed.
* 25 A The wind howls.
* 26 A The lantern sways.
27 D MABEL: Papa, will they be in time?
28 D CLARENCE (without stopping): Not if I stop to talk.
29 A ¶ Mabel nods.
30 A Bends over her copybook.
* 31 A The key chatters on into the dark.

### SCENE s00559 | INT. DR. FEINBERG'S DENTAL OFFICE - WAITING ROOM - EVENING
Detected names (may be incomplete or contain aliases): SURPRISE, GRANDMA ROSEMARY, GLENDA PRZYBYLSKI, MARVIN, SKYLER, LAZLO KERESZTES, THADDEUS FEINBERG
* 1 A ¶ Beige chairs, a fish tank, a wall of laminated posters of cheerful molars.
* 2 A The lights are dim.
* 3 A A banner above the receptionist's desk reads, in glitter: SURPRISE, GRANDMA!
4 A ¶ Six conspirators crouch behind furniture.
5 A GLENDA PRZYBYLSKI, 40s, in a party hat, ducks behind the water cooler holding a cake; her husband MARVIN, 50s, behind the ficus with a stack of paper cups, while their teenage daughter SKYLER, 16, hides under the receptionist's desk, filming on her phone; LAZLO KERESZTES, 30s, the nervous nephew, slips behind the coat stand with a party horn, and THADDEUS FEINBERG, 60s, the dentist, in scrubs and a pointy hat, sits on the reception counter, stifling a laugh, while everyone whispers, shushes, and knocks into everyone else.
* 6 A ¶ The front door chimes.
7 A ¶ Everyone freezes.
* 8 A A chair creaks.
* 9 A Lazlo's horn squeaks.
10 A Marvin drops a paper cup.
11 A Glenda hisses at both of them.
* 12 A Skyler's phone beeps.
* 13 A The door opens.
* 14 A Nobody enters.
15 D THADDEUS (whispering): Where is she?
16 D GLENDA (whispering back): She's coming.
17 D MARVIN (whispering): My knee is stuck.
18 D LAZLO (whispering): Mine too.
* 19 A ¶ The door chimes again.
* 20 A Nobody enters.
* 21 A Wind moves a magazine.
22 D GLENDA: Well, that's the worst possible timing.
23 D LAZLO: It's okay. She'll be here. She always is.
* 24 A ¶ The lights flip on.
25 A Everyone stands.
26 A In the doorway, in a flowered coat, is GRANDMA ROSEMARY, 80s, who looks at the banner, the cake, the party hats, and the open mouth of the dentist, and says, quite calmly:
27 D GRANDMA ROSEMARY: I thought the appointment was tomorrow.

### SCENE s00560 | INT. NEON PAWN & LOAN - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IRENA VALDEZ, SNOW
* 1 A ¶ Barred windows, glass counters, a wall of guitars.
* 2 A A buzzing OPEN sign paints everything red.
3 A ¶ DETECTIVE IRENA VALDEZ, 40s, a blazer and a tired stare, leans over the counter with a pistol held low and steady, while behind it SNOW, 30s, a bleached-blond pawnbroker in a Hawaiian shirt, backs toward a shelf of cameras with a baseball bat in one hand and a phone in the other, and a guitar slides off its hook, hits the floor, and both of them flinch, aim, freeze.
4 D VALDEZ: Drop it.
5 D SNOW: You first.
6 D VALDEZ: I'm the one with the badge.
7 D SNOW: I'm the one with the lease.
8 A ¶ Neither moves.
* 9 A The sign buzzes.
10 D VALDEZ: Where's the ring?
11 D SNOW: What ring?
12 D VALDEZ: The one that came in at nine.
13 D SNOW: Lots of rings come in at nine.
14 A ¶ Snow sets the bat on the counter.
15 A Valdez lowers the pistol.
16 A Both exhale.

### SCENE s00561 | INT. PETALS & STEM FLORIST - COLD ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): ELEANOR WYNDHAM-ROSS, THEO BRANDVOLD, MIRABEL SOUZA, JUDE ASANTE, WOMAN IN YELLOW, YELLOW RAINCOAT, SERAPHINA
* 1 A ¶ A walk-in cooler, white and humming, banked with buckets of peonies, ranunculus, and dusty-blue hydrangeas.
* 2 A The air smells of cut stems and cold iron.
* 3 A Condensation beads the glass door.
4 A ¶ ELEANOR WYNDHAM-ROSS, 60s, in a long apron, trims stems at a steel table with a hooked knife.
5 A THEO BRANDVOLD, 20s, her assistant, ties ribbons with painstaking slowness.
6 A MIRABEL SOUZA, 30s, a bride in a cardigan over her wedding dress, drifts from bucket to bucket, touching petals.
7 A JUDE ASANTE, 30s, her groom, tucks a stray hair behind her ear.
8 D ELEANOR: Peonies don't love the cold.
9 D THEO: But they keep better.
10 D MIRABEL: Everything keeps better in the cold.
11 D JUDE: Even us?
12 D MIRABEL: Especially us.
* 13 A ¶ The door opens.
14 A A WOMAN IN A YELLOW RAINCOAT, 40s, drips on the threshold.
15 A She looks at the four of them, at the flowers, at the clock.
16 D WOMAN IN YELLOW: I'm sorry. I think I'm early.
17 D ELEANOR: For what, dear?
18 D WOMAN IN YELLOW: My sister's wedding.
19 D THEO: That's us.
20 D MIRABEL: That's me. You're Seraphina?
21 D SERAPHINA (tearfully): I took the wrong train.
22 D MIRABEL: You look like Mama.
23 A ¶ Seraphina crosses the cold room in four steps.
24 A They fold into one another, the flowers shivering around them.

### SCENE s00562 | INT. NET SHED - HARBOR DOCK - DAWN
Detected names (may be incomplete or contain aliases): AUGUSTINE MORROW, LOTTE MORROW, DOMINIC SALVATORE
* 1 A ¶ A long timbered shed that smells of tar and brine.
* 2 A Nets hang from rafters like drying ghosts.
* 3 A Sunlight cuts through the cracks in thin gold blades.
* 4 A A kettle sings on a cast-iron stove.
5 A ¶ AUGUSTINE MORROW, 60s, a weathered fisherman in an oilskin, sits on an upturned crate with a netting needle, mending a rip.
6 A His daughter LOTTE MORROW, 30s, in a fisherman's sweater, sets two tin mugs on a barrel.
7 A She pours.
* 8 A Steam rises.
9 D LOTTE: Drink.
10 D AUGUSTINE: I'm working.
11 D LOTTE: You're sulking.
12 D AUGUSTINE: That too.
13 A ¶ She puts the mug in his free hand.
14 A He sips.
* 15 A The net rustles.
* 16 A Gulls cry outside.
17 D LOTTE: The boat's fine, Pa.
18 D AUGUSTINE: The boat's mortgaged.
19 D LOTTE: So? We mortgage everything. It's tradition.
20 D AUGUSTINE: Your mother would've said --
21 D LOTTE: Mama would've said "Eat your eggs."
22 A ¶ He nearly smiles.
* 23 A The kettle whistles.
24 A She lifts it.
25 D LOTTE [CONT'D]: I got the loan. Three more seasons.
26 D AUGUSTINE: Where from?
27 D LOTTE: A man in town.
28 D AUGUSTINE: What man?
29 D LOTTE: A man who liked the boat.
30 A ¶ Augustine sets down the needle.
* 31 A The tension in the shed changes, thick and slow.
32 D AUGUSTINE: Lotte. Which man?
* 33 A ¶ The door scrapes open.
* 34 A A rectangle of light.
35 A DOMINIC SALVATORE, 50s, a long camel coat, polished shoes, and a hat in his hand, steps in, carefully avoiding a coil of rope.
36 D DOMINIC: Morning, Captain.
37 A ¶ Augustine stands.
* 38 A The crate falls.
* 39 A The needle skitters across the planks.
40 A Lotte steps between them, pours a third mug, and holds it out.
41 D LOTTE: Dominic. Tea?
42 D DOMINIC: Kind of you.
43 A ¶ He takes it.
44 A Sips.
45 A Nods.
46 A Looks at Augustine.
47 D DOMINIC [CONT'D]: Your daughter tells me you're a stubborn man.
48 D AUGUSTINE: She tells me you're a thief.
49 D DOMINIC: She hasn't told you I hold the paper on every boat in this harbor.
50 A ¶ Augustine's face closes like a door.
51 A He grabs the nearest thing, the netting needle, and Dominic does not blink.
52 A Lotte seizes her father's wrist.
53 A All three freeze, tea steaming, needle poised, the whole shed hanging on a breath.
54 D AUGUSTINE (quietly): Get out of my shed.
55 D DOMINIC (setting down the mug): Three seasons, Captain. Think on it.
56 A ¶ He goes.
* 57 A The door bangs.
* 58 A The nets sway.
59 A Lotte lets go of her father's wrist.
60 D LOTTE: You're welcome.
61 D AUGUSTINE (slowly): You knew.
62 D LOTTE: I knew.
63 A ¶ She picks up the fallen crate, sets it upright, sits.
64 A After a long moment, he sits beside her.
65 A Neither drinks.
* 66 A The gulls go on screaming.

### SCENE s00563 | INT. GRAND CALDERON HOTEL - STALLED ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): HARLOW BENNETT, PERPETUA ADEYEMI, RUSSELL KOVACS
* 1 A ¶ A mirrored brass cage, lights flickering.
* 2 A The floor indicator is frozen between 11 and 12.
* 3 A A tinny recording of a hotel jingle loops through a speaker.
4 A ¶ HARLOW BENNETT, 40s, a rumpled suit, clutches a leather briefcase.
5 A PERPETUA ADEYEMI, 30s, a sharp black dress and silver heels, stares at her phone: no bars.
6 A RUSSELL KOVACS, 50s, a maintenance uniform, kneels at the control panel with a screwdriver.
7 D HARLOW: How long is this going to take?
8 D RUSSELL: Depends.
9 D HARLOW: On what?
10 D RUSSELL: On whether you want the truth.
11 D PERPETUA: We want the truth.
12 D RUSSELL: Then forty minutes. Maybe an hour.
13 D HARLOW: An hour!
14 D PERPETUA: Harlow, breathe.
15 D HARLOW: Don't tell me to breathe, Perpetua, you know what's in this case.
16 D PERPETUA (sharp): Quiet.
17 D RUSSELL: What's in the case?
18 D HARLOW: Paperwork.
19 D RUSSELL: Paperwork that ticks?
* 20 A ¶ Silence.
21 A Harlow's grip tightens.
* 22 A The light flickers.
23 A Perpetua glances at the briefcase, then at Harlow, then at the screwdriver in Russell's hand.
24 D RUSSELL [CONT'D] (gently): It's been ticking since the lobby, friend.
25 D PERPETUA: Oh, Harlow.
26 D HARLOW: It's a watch.
27 D RUSSELL: It's a bomb.
28 D HARLOW: It's a watch!
* 29 A ¶ The ticking is loud now.
* 30 A Regular.
* 31 A Quick.
32 D PERPETUA (very low): Russell. Can you open the hatch?
33 D RUSSELL: I can.
34 D PERPETUA: Do it.

### SCENE s00564 | EXT. RAILROAD CROSSING - FIELD TRIP BUS - DAY
Detected names (may be incomplete or contain aliases): ROSCOE LANGSTON, PHOEBE ABERNATHY-LIU
* 1 A ¶ A yellow school bus idles at a country crossing.
* 2 A Barn-red freight cars clatter by, one after another, endless.
* 3 A Heat shimmers over the tracks.
* 4 A The bus is empty but for two.
5 A ¶ ROSCOE LANGSTON, 13, in a buttoned-up shirt and a tie his mother chose, sits alone in the back with a field-trip permission slip folded in his fist.
6 A Across the aisle PHOEBE ABERNATHY-LIU, 13, in a denim vest with a patch for every band she has not heard, sprawls with her boots on the seat.
* 7 A ¶ The train rattles on.
8 A Neither speaks.
9 A He steals a look.
10 A She steals one back.
11 D ROSCOE: Where's everyone?
12 D PHOEBE: Museum.
13 D ROSCOE: Why aren't we at the museum?
14 D PHOEBE: Because I threw up.
15 D ROSCOE: And me?
16 D PHOEBE: Because you volunteered to stay with me.
17 D ROSCOE: I did?
18 D PHOEBE: You raised your hand.
19 A ¶ He thinks about this.
20 A His ears go red.
21 D ROSCOE: Oh.
22 A ¶ She grins.
23 A Props her chin on her fist.
24 A He fiddles with his tie.
* 25 A The train keeps coming.
26 D PHOEBE: Have you ever counted them?
27 D ROSCOE: The cars?
28 D PHOEBE: Yeah.
29 D ROSCOE: No.
30 D PHOEBE: Want to?
31 D ROSCOE: Okay.
32 A ¶ They press their faces to the glass.
33 A Their lips move.
34 A Two voices, soft, almost in unison.
35 D ROSCOE [CONT'D]: Forty-one. Forty-two.
36 D PHOEBE: Forty-three.
37 D ROSCOE: Forty-four.
38 A ¶ She leans her shoulder against his.
39 A He freezes.
40 A Does not pull away.
* 41 A The train goes on and on.
42 D PHOEBE: Sixty.
43 D ROSCOE: Sixty-one.
44 D PHOEBE: Roscoe.
45 D ROSCOE: Yeah?
46 D PHOEBE: Don't lose count.
47 A ¶ He doesn't.
* 48 A The train thunders past, the whole bus trembles, and a line of sunlit boxcars flickers over their faces like a film.
49 D ROSCOE: Eighty-eight.
50 D PHOEBE: Eighty-nine.
51 A ¶ Her hand finds his on the seat.
52 A He turns his over.
53 A She laces her fingers with his.
54 A Neither looks away from the window.
55 D ROSCOE: Ninety.
56 D PHOEBE: Ninety-one.
* 57 A ¶ The last car passes.
* 58 A Silence rolls in behind it, long and bright.
* 59 A A crossing bell stops.
* 60 A Gates rise.
61 D ROSCOE: Ninety-three.
62 D PHOEBE: Ninety-three.
63 A ¶ She does not let go.
* 64 A The bus engine coughs.
65 A The driver, offscreen, honks twice.
66 A They stay where they are a moment longer.

### SCENE s00565 | INT. SILVERADO HOTEL - BATHHOUSE - DAY
Detected names (may be incomplete or contain aliases): ABNER CALLOWAY, CALEB DREWRY, HESPER VANCE, ISAIAH RUTHERFORD
* 1 A ¶ Steam.
* 2 A Brass taps, a copper tub, white tile gone yellow with age.
* 3 A A kettle simmers on a wood stove.
* 4 A A pocket-watch lies on a stool, ticking too loud.
5 A ¶ ABNER CALLOWAY, 50s, a grey mustache and a hat he won't take off, sits in the tub with his arms along the rim, eyes shut.
6 A His younger partner CALEB DREWRY, 30s, rolls up his sleeves at the stove, sloshing a pot of water.
7 D ABNER: You're slow.
8 D CALEB: You're hot.
9 D ABNER: That's the point of a bath, son.
10 A ¶ Caleb pours.
* 11 A Steam billows.
12 A Abner exhales, sinks lower.
13 D CALEB: He's here.
14 D ABNER: Who?
15 D CALEB: Isaiah.
16 A ¶ Abner opens one eye.
17 D ABNER: Where?
18 D CALEB: Downstairs. Drinking.
19 D ABNER: Alone?
20 D CALEB: With Hesper.
21 D ABNER: Hm.
22 A ¶ HESPER VANCE, 20s, in a pressed shirt and a leather vest, leans in the doorway with a cup of coffee, a silver star on her chest.
23 A ISAIAH RUTHERFORD, 40s, in a black coat, steps in behind her, hat low, holding a short shotgun by the barrel.
24 D HESPER: Don't get up, Calloway.
25 D ABNER: Wasn't planning on it.
26 D ISAIAH: You boys been busy.
27 D CALEB: Not as busy as you.
28 D ISAIAH: Hm.
29 A ¶ He stands very still.
* 30 A The kettle sings.
31 A Hesper sips.
* 32 A The pocket-watch ticks.
33 A Abner moves one hand, slow, under the soapy water.
34 D HESPER: Whatever's under there, leave it.
35 D ABNER: It's a bar of soap.
36 D HESPER: Leave the soap.
37 A ¶ Abner raises his hand, empty.
38 A A grin splits his beard.
39 D ABNER: Sheriff, you're a hard woman.
40 D HESPER: Marshal.
41 D ABNER: Beg your pardon.
42 D ISAIAH: Calloway. You know why I'm here.
43 D ABNER: Money.
44 D ISAIAH: Yes.
45 D ABNER: It's in the stove.
46 A ¶ Caleb drops the pot.
47 A Hesper's eyes flick to the fire.
48 A Isaiah steps toward it.
49 A In one smooth motion, Abner lunges up, soaking wet, a pistol in his fist, and fires.
* 50 A ¶ The lamp explodes.
* 51 A Darkness.
* 52 A Steam.
* 53 A A scream, a crash of copper, a gunshot, another.
* 54 A ¶ When the smoke clears, the tub is empty.
* 55 A The window is open.
* 56 A Curtains lift.
57 A Hesper stands at the sill, coffee spilled down her vest.
58 A Isaiah picks the shotgun up off the tile.
59 D ISAIAH: He took the soap.

### SCENE s00566 | EXT. RUINED WINDMILL - MINEFIELD - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT PETER GARRITY, LUCA FERRANTE, ANSELM VOGT
* 1 A ¶ A stone tower, sails broken and hanging.
* 2 A A field of tall grass ringed with rusted wire.
* 3 A Fog clings to the ground.
* 4 A A crow lands on the wire and shakes itself.
5 A ¶ SERGEANT PETER GARRITY, 40s, a bandaged ear, crouches in the mill doorway with a rifle.
6 A LUCA FERRANTE, 20s, a radioman, hunches beside him, dials tuning, mouth open.
7 A ANSELM VOGT, 30s, a sapper with a prod and a headlamp, kneels in the grass ten yards out, probing the soil with infinite care.
8 D GARRITY: Anselm. Talk to me.
9 D ANSELM: Clear for two meters.
10 D GARRITY: Move.
11 D ANSELM: Two meters. Don't rush me.
12 A ¶ He edges forward.
13 A Prods.
14 A Prods.
* 15 A The grass whispers.
16 A Luca checks the radio, jiggles a knob, curses.
17 D LUCA: No signal.
18 D GARRITY: Keep trying.
19 D LUCA: It's the fog.
20 D GARRITY: It's always the fog.
21 A ¶ Anselm stops.
22 A His prod hits something.
* 23 A A soft metallic knock.
24 A He freezes.
25 A Garrity and Luca freeze too.
* 26 A A breath held by three men.
27 D ANSELM (very quietly): Contact.
28 D GARRITY: Type?
29 D ANSELM: Bounding. S-mine.
30 D GARRITY: Leave it.
31 D ANSELM: I'm going around.
32 D GARRITY: Anselm.
33 D ANSELM: I'm going around.
34 A ¶ He shifts, belly down, wiggles past the mine, a hand's breadth at a time.
35 A Garrity watches.
36 A Luca crosses himself with the hand not holding the radio.
* 37 A Fog rolls across the field.
* 38 A ¶ A SOUND.
* 39 A The crow bursts off the wire in a clatter of wings.
40 A Anselm flinches.
41 A His elbow lands on a loose stone, the stone rocks, and a bootlace pulls taut.
42 D ANSELM [CONT'D]: No. No, no, no --
43 D GARRITY: Down!
44 A ¶ Garrity and Luca drop flat.
45 A Anselm throws himself backward.
* 46 A The mine leaps from the soil, a black can on a column of dust, and detonates in the air with a crack that tears the dawn.
* 47 A ¶ Silence.
* 48 A Ringing.
* 49 A Smoke.
50 A Garrity lifts his head.
51 A Luca gasps.
52 A Anselm lies on his back in the grass, headlamp askew, staring up at the grey sky, bleeding from one forearm.
53 D ANSELM (laughing, appalled): I'm still here.
54 D GARRITY (sprinting to him): Don't move!
55 D LUCA: Medic! MEDIC!
56 A ¶ Garrity kneels, rips a sleeve, presses a field dressing to the gash.
57 A Luca stumbles through the grass, trips on a wire, falls.
* 58 A The radio flies from his hand.
* 59 A It lands in the weeds and crackles to life.
60 A ¶ Luca scrambles for it, shaking, grinning, weeping.
* 61 A Garbled static resolves into a hiss of carrier tone.
62 D LUCA (into radio): This is Fox Two! Anyone! We're alive!
