You segment screenplay scenes into DRAMATIC BEATS for a screenwriting tool (timeline, mood track, outline).

A dramatic beat is one exchange of action and reaction around a single intention: a character pursues something with
one tactic, and the beat ends when the tactic, the power balance, the subject or the situation changes (a reveal, an
entrance or exit, a decision, a turn in the argument, a new attempt after a failure). Scenes usually have 3-8 beats;
a short scene can have 1-2, a long one up to ~12.
- A beat usually spans SEVERAL paragraphs and dialogue blocks. Do NOT start a beat at every paragraph or speaker change.
- Keep the setup (setting and introductions before anything is at stake) inside the first beat unless it is long
  and self-contained.
- A beat may start in the middle of an action paragraph if the turn happens there.

For each beat give:
- "start": unit number where it starts (the first content unit starts beat 1)
- "type": the coarse beat type and "fine": the best phrase for it, from this list (coarse: [fine phrases]):
  arrives: ["arrives", "bursts in", "slips in", "returns", "is introduced", "makes an entrance", "shows up unannounced", "is ushered in", "drifts in"]
  leaves: ["leaves", "storms out", "slips away", "walks out on", "is sent away", "excuses themself", "is escorted out", "abandons", "exits quietly"]
  confronts: ["confronts", "interrogates", "corners", "calls out", "challenges", "stares down", "demands answers from", "presses", "faces off with"]
  accuses: ["accuses", "blames", "implicates", "points the finger at", "charges", "exposes", "condemns", "suspects", "turns on"]
  threatens: ["threatens", "intimidates", "warns", "blackmails", "issues an ultimatum to", "menaces", "holds at gunpoint", "coerces", "looms over"]
  attacks: ["attacks", "strikes", "grabs", "shoves", "ambushes", "fights", "wrestles", "shoots at", "lunges at"]
  defends: ["defends", "protects", "shields", "stands up for", "justifies themself to", "denies to", "pushes back on", "holds the line against", "covers for"]
  flees: ["flees", "runs", "escapes", "bolts", "retreats", "hides from", "evades", "scrambles away", "slips out"]
  hides: ["hides", "conceals something", "ducks out of sight", "pockets evidence", "covers up", "keeps a secret", "lies low", "masks a feeling", "plays dead"]
  searches: ["searches", "investigates", "snoops", "rummages", "tracks", "looks for", "examines", "questions witnesses", "scans the room"]
  discovers: ["discovers", "finds a clue", "realizes", "notices", "uncovers", "stumbles on", "recognizes", "pieces it together", "catches"]
  reveals: ["reveals", "drops a bombshell on", "shows", "unmasks", "lets slip to", "breaks news to", "comes clean to", "exposes a secret to", "presents evidence to"]
  confesses: ["confesses to", "apologizes to", "admits guilt to", "opens up to", "breaks down to", "unburdens to", "owns up to", "begs forgiveness from", "comes clean to"]
  lies: ["lies to", "deceives", "bluffs", "covers a story for", "misleads", "feigns innocence to", "plays along with", "cons", "fakes it with"]
  deflects: ["deflects", "dodges", "changes the subject on", "stonewalls", "brushes off", "evades", "stalls", "shrugs off", "plays dumb with"]
  persuades: ["persuades", "convinces", "pitches to", "bargains with", "negotiates with", "recruits", "seduces", "flatters", "talks down"]
  pleads: ["pleads with", "begs", "appeals to", "asks for help from", "implores", "bargains for mercy with", "pleads innocence to", "calls for", "prays"]
  comforts: ["comforts", "reassures", "consoles", "calms", "tends to", "embraces", "encourages", "forgives", "steadies"]
  bonds: ["bonds with", "reconnects with", "confides in", "shares a moment with", "flirts with", "trusts", "reminisces with", "thanks", "teams up with"]
  jokes: ["jokes with", "teases", "banters with", "lightens the mood for", "pranks", "plays with", "charms", "amuses", "riffs with"]
  mocks: ["mocks", "taunts", "belittles", "humiliates", "provokes", "insults", "patronizes", "needles", "dismisses"]
  decides: ["decides", "commits", "makes a plan", "chooses", "refuses", "gives an order", "resigns", "accepts", "changes course"]
  observes: ["watches", "listens to", "waits", "spies on", "studies", "eavesdrops on", "keeps watch", "hesitates", "takes it in"]
  works: ["works", "cooks", "cleans", "repairs something", "drives", "prepares", "packs", "writes", "goes through routine"]
- "actor": the character driving the beat (cue name) or null; "target": who it is aimed at, or null
- "mood": the TONE of the beat as an audience feels it, one of: calm, tender, playful, joyful, hopeful, awkward, melancholy, grief, tense, suspense, ominous, fear, hostile, chaotic, triumphant, bittersweet
- "intensity": 1 (faint) to 5 (overwhelming)
- "summary": 6-15 words, present tense, what happens in the beat (names, no quotes)

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00013.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00210 | INT. OPEN-PLAN OFFICE - "SYNERGY HUB" - MORNING
Detected names (may be incomplete or contain aliases): TARK, BOLLINGER, CORDY, ADESANYA, MARGUERITE LESAGE-OKORO, THAD, QUILLFEATHER
1 A ¶ Standing desks, bean bags, a kombucha tap, motivational posters.
2 A A banner: "WE ARE FAMILY."
3 A A beanbag chair shaped like a unicorn.
4 A Fluorescent morning light.
5 A ¶ TARQUIN "TARK" BOLLINGER, 30s, in a vest and sneakers, balances on a wobble board.
6 A Beside him, CORDELIA "CORDY" ADESANYA, 40s, hair in a tight bun, taps at a laptop.
7 A MARGUERITE LESAGE-OKORO, 50s, the office manager, hoses a droopy fern.
8 A THADDEUS "THAD" QUILLFEATHER, 60s, a quiet man in a gray suit, sits at the corner desk, unmoving.
9 D TARK: Team! Quick sync!
10 D CORDY: We just did a sync.
11 D TARK: This is a meta-sync.
12 D MARGUERITE (over the hose): Tark, the fern is dying.
13 D TARK: Everything is dying. That's the culture of change.
14 A ¶ Cordy rolls her eyes.
15 A Thad stays still.
16 A He has not moved in some time.
17 D TARK [CONT'D]: Thad. Buddy. Thoughts?
18 A ¶ No answer.
19 D CORDY: Thad?
20 D MARGUERITE: Thad doesn't talk before ten.
21 D TARK: It's ten-fifteen.
22 D CORDY: Is he, uh...
23 D MARGUERITE: He's fine.
24 D TARK: He's on mute.
25 D CORDY: We're in person.
26 D TARK: Mute is a state of mind.
27 A ¶ They approach the desk.
28 A Marguerite prods Thad's shoulder with the hose.
29 A He topples out of the chair.
30 A Cordy shrieks.
31 A Tark falls off the wobble board.
32 A Marguerite drops the hose, which sprays everyone.
33 A They scramble backward.
34 A Thad lies on the floor, eyes closed, and snores.
35 D CORDY: He's asleep!
36 D MARGUERITE: He's been asleep since Tuesday.
37 D TARK: Since Tuesday?
38 D MARGUERITE: That's when he stopped answering emails.
39 D TARK: We thought that was mindfulness.
40 A ¶ Thad opens one eye.
41 A Sits up, slowly, dripping.
42 D THAD: Is it Friday?
43 D CORDY: It's Thursday.
44 D THAD: Damn.
45 A ¶ He lies back down.
46 A Tark stares at the others.
47 A Cordy stares at Marguerite.
48 A Marguerite shuts off the water.
49 D TARK: Okay. New initiative. Naps.
50 D CORDY: We already have naps.
51 D TARK: Mandatory naps.
52 D THAD (from the floor, dreamy): I'd back that.
53 D MARGUERITE: Tark, who signed off on the quarterly?
54 D TARK: Which quarterly?
55 D MARGUERITE: The one that says we're out of money.
56 D TARK: We're out of money?
57 D CORDY: We've been out of money since March.
58 D TARK: But the kombucha tap works.
59 D MARGUERITE: That's a donation.
60 A ¶ Tark takes a long, wobbly step.
61 A He looks at the banner.
62 A At the unicorn beanbag.
63 A At the dying fern.
64 A Behind him, the overhead lights flicker out one by one.
65 D THAD (softly): Told you.
66 D TARK: Told me what?
67 D THAD: That it was Friday.

### SCENE s00832 | INT. COUNTY GENERAL - TRAUMA BAY ONE - NIGHT
Detected names (may be incomplete or contain aliases): FELIX AMADI, RENATA LINDQVIST
1 A ¶ Empty beds, drawn curtains, every monitor lit and waiting.
2 A A wall phone buzzes once.
3 A Hallway lights flicker.
4 A ¶ DR. FELIX AMADI, forties, snaps a gown over his scrubs.
5 A DR. RENATA LINDQVIST, fifties, lines up chest tubes on a tray, in order, like silverware.
6 D FELIX: Bus rollover. Twenty-three patients, ETA four minutes.
7 D RENATA: Twenty-three. And we have six beds.
8 A ¶ She doesn't stop working.
9 A He tears open a pack of gauze.
10 D FELIX (to the room): Everyone in this bay, listen. Triage at the door. Red tags left, yellow center, green to the cafeteria.
11 D RENATA (muttering): Green to the cafeteria. We should open a restaurant.
12 D FELIX: Renata, I need you at the door.
13 D RENATA: I need you to stop calling it "the door."
14 D FELIX: It's a door!
15 D RENATA: It's a funnel.
16 A ¶ The wall phone buzzes again, urgently.
17 A They both reach for it, pull back, and speak at once.
18 D FELIX: Pick it up.
19 D RENATA: ^Don't pick it up.
20 A ¶ The buzzing continues.
21 A They look at the phone, then at each other, then at the empty beds.
22 A Renata answers it with a sharp snap of her wrist.
23 D RENATA [CONT'D]: Trauma One. Go.
24 A ¶ She listens.
25 A Her jaw tightens.
26 A She holds the receiver out to Felix without a word.

### SCENE s00188 | INT. ROLLER RINK - SNACK BAR - NIGHT
Detected names (may be incomplete or contain aliases): PAZ ORTEGA-WILLIAMS, KIRA SINGH, DEWEY LAMBERT, ARLO HOLLOWAY, TALL STRANGER, MAX
1 A ¶ Disco ball scatters light.
2 A Neon trim.
3 A Under the music, wheels rumble on wood.
4 A ¶ PAZ ORTEGA-WILLIAMS, 17, in rental skates, leans on the counter.
5 A Her best friend, KIRA SINGH, 17, steals fries from her basket.
6 A DEWEY LAMBERT, 18, behind the counter in a paper hat, wipes it down.
7 A At a nearby table, BEATRICE "BEE" HOLLOWAY, 16, sketches in a notebook, and her brother, ARLO HOLLOWAY, 14, sips a slushie.
8 D PAZ: Okay, but if I ask him and he says no, I have to move to another state.
9 D KIRA: You are not moving to another state.
10 D PAZ: Then I'm dying. Those are the options.
11 D KIRA: He's right there. Dewey. Dewey!
12 D DEWEY: Hey. Sorry. I was in the fryer zone.
13 D PAZ (low, to Kira): Kill me.
14 D KIRA (to Dewey): She wants to know if you're going to the thing on Saturday.
15 D DEWEY: The thing?
16 D PAZ: The thing. At the quarry.
17 D DEWEY: Oh. The quarry. Yeah, probably. Maybe. Why?
18 D PAZ: No reason. Just curious.
19 D KIRA: She has a reason.
20 D PAZ: I do not.
21 A ¶ Dewey leans his elbows on the counter.
22 A Kira bounces on her skates.
23 A Bee tears a page from her notebook and slides it across the table to Arlo, who pockets it.
24 A ¶ A TALL STRANGER, 20s, in a leather jacket and black skates, glides up behind Paz and taps her shoulder.
25 A This is MAXIMILIAN "MAX" DUBOIS.
26 A Paz turns.
27 A Her face does something complicated.
28 D MAX: Paz. You never called.
29 D PAZ: Max. I was going to.
30 D KIRA (under her breath): Oh no.
31 D DEWEY: Who's this?
32 D MAX: Her ex.
33 D DEWEY: Oh.
34 D PAZ: He's not my ex. We went out twice. Once. Once and a half.
35 D MAX: You left in the middle of the second one.
36 D PAZ: I was sick.
37 D MAX: You were laughing.
38 A ¶ Bee smiles into her slushie.
39 A Arlo whispers to her.
40 A Dewey slowly picks up a rag and starts wiping the counter again, harder.
41 A Kira looks from one face to another, delighted and horrified.
42 D KIRA: Anyone want fries?

### SCENE s00711 | INT. DEEP-SPACE STATION KESTREL - HYDROPONICS RING - STATION NIGHT
Detected names (may be incomplete or contain aliases): SOLEDAD MARSH, PAVEL IONESCU, COMMANDER HANNE LINDGREN
1 A ¶ A curved corridor of glass tubes, each holding a glowing green column of algae.
2 A The air is thick and humid and smells faintly of cut grass.
3 A Beyond the observation glass, a gas giant turns, banded in rust and ochre.
4 A ¶ DR. SOLEDAD MARSH, 40s, in a lab coat with its sleeves rolled, kneels at a sample port and draws a vial of green fluid.
5 A PAVEL IONESCU, 30s, a technician with a shaved head and a tool belt, stands on a ladder adjusting a pump housing, his headlamp swinging as he talks.
6 D PAVEL: Flow's down again. Eight percent.
7 D SOLEDAD: It's always eight percent.
8 D PAVEL: Which is why it's not a coincidence.
9 A ¶ She caps the vial and holds it to the light.
10 A Pavel climbs down, wipes his hands on a rag, and joins her at the port, and for a moment they both look into the green column as it breathes, slow, bubbling, almost alive, while the gas giant's light slides across their faces.
11 D SOLEDAD: Pavel. Do you hear that?
12 D PAVEL: The pump?
13 D SOLEDAD: Under the pump.
14 A ¶ He tilts his head.
15 A Beneath the hum of machinery, a faint rhythmic tapping, like fingers on glass.
16 A ¶ The hatch at the end of the corridor opens.
17 A COMMANDER HANNE LINDGREN, 50s, in a gray jacket with silver epaulettes, a tablet in her hand, steps through.
18 A Her face is composed.
19 A Her eyes move over the tubes.
20 D HANNE: Doctor Marsh. Mister Ionescu. Please stop what you're doing.
21 D SOLEDAD: Commander. We were just --
22 D HANNE: I know what you were doing. I read your logs.
23 D PAVEL: Is something wrong?
24 D HANNE: Yes.
25 A ¶ She lifts the tablet.
26 A On its screen, a schematic of the ring pulses red.
27 D HANNE [CONT'D]: The culture in tube nine is not algae. It stopped being algae three days ago.
28 D SOLEDAD (slowly): Then what is it?
29 D HANNE: We were hoping you would tell us.
30 A ¶ At the far end, the tapping on the glass grows louder.
31 A All three turn.

### SCENE s00036 | INT. FAMILY STATION WAGON, PARKED OUTSIDE A PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, GIRL, JOSEPHINE, MAEVE, DESMOND
1 A ¶ Rain beads the windshield.
2 A The dashboard clock reads 7:52.
3 A Across the street, the planetarium dome glows a soft blue, waiting for a show that has already begun.
4 A ¶ In the driver's seat, a man in a thin wool coat grips the wheel, his eyes fixed on the building.
5 A This is the STRANGER: late forties, heavy-lidded, thoughtful.
6 A In the back seat, a girl of ten sits cross-legged, her ticket pinched between two fingers.
7 A She watches him in the rearview mirror and says nothing.
8 A ¶ The man draws a breath to speak.
9 A Doesn't.
10 A ¶ The girl unbuckles, leans forward between the seats.
11 D GIRL: We're late.
12 D STRANGER: I know.
13 D GIRL: Mom says you're always late.
14 D STRANGER (a small laugh): Your mother is usually right.
15 D GIRL: Is that why she left?
16 A ¶ He doesn't answer.
17 A A raindrop slides down the glass.
18 A The windshield wipers sweep once, twice.
19 D STRANGER: What do you want me to say, Josephine?
20 D JOSEPHINE (shrugging): Just say a true thing.
21 A ¶ The man looks at her, startled.
22 A Something in his shoulders loosens.
23 D STRANGER: All right. I don't know how to do this. I've never known. I walk into rooms and everyone's already decided who I am.
24 D JOSEPHINE: You're my dad.
25 D STRANGER: Yes.
26 D JOSEPHINE: That's all you have to be.
27 A ¶ His phone buzzes on the dashboard.
28 A A name lights the screen: MAEVE.
29 A He lets it ring.
30 D JOSEPHINE [CONT'D]: Aren't you going to get it?
31 D STRANGER: Later.
32 A ¶ The phone goes silent, then buzzes again.
33 A Josephine reaches over and answers it for him, putting it on speaker.
34 D MAEVE [V.O.] (over phone, tense): Desmond? Is she with you? The planetarium said you never checked in.
35 D DESMOND (clearing his throat): She's here, Maeve. We're in the car.
36 D MAEVE [V.O.] (over phone): In the car? It started at seven.
37 D DESMOND: I know. I got us lost. And then I just... sat here.
38 A ¶ A pause on the line.
39 A Rain on the roof.
40 D MAEVE [V.O.] (over phone, softer): Is she okay?
41 D JOSEPHINE: ^I'm okay.
42 D DESMOND: ^She's okay.
43 A ¶ They say it at the same time.
44 A Desmond glances at his daughter.
45 A She smiles.
46 D MAEVE [V.O.] (over phone): Then go in. They'll let you in late. Tell them it's my fault.
47 D DESMOND: It isn't.
48 D MAEVE [V.O.] (over phone): Just go, Des.
49 A ¶ The call ends.
50 A Desmond sets the phone down very gently, as if it might break.
51 D JOSEPHINE: So?
52 D DESMOND: So.
53 A ¶ He opens his door.
54 A The rain is barely more than mist.
55 A He walks around, opens hers, and offers his hand.
56 A She takes it.
57 D DESMOND [CONT'D]: Let's go look at the sky.
58 A ¶ They cross the street together, small under the glowing dome.

### SCENE s01243 | EXT. FROZEN LAKE - ICE FISHING HUT - DAWN
Detected names (may be incomplete or contain aliases): ASTRID BJORKLUND, KWAME ASANTE, LEILA NOURI, OLD HARTWELL, BENEDICT OYELARAN
1 A ¶ A tiny plywood shack on a plain of white.
2 A A thin plume of smoke rises from its tin chimney.
3 A The sun pushes up behind a dark treeline, spilling pink across the ice.
4 A ¶ Inside, four people crowd shoulder to shoulder around a hole in the floor, lines hanging in the black water.
5 A A portable stove glows red.
6 A ¶ ASTRID BJORKLUND (60s, wool hat, thermos) tends a line with patient fingers.
7 A ¶ KWAME ASANTE (30s, ice-auger slung across his back, laughs easily) rubs his gloves over the stove.
8 A ¶ LEILA NOURI (20s, scientist, notebook, clipboard) jots numbers beside the hole.
9 A ¶ OLD HARTWELL (70s, one-eyed, cap with earflaps) dozes upright in a folding chair, a pipe unlit in his mouth.
10 D KWAME: Astrid, you've got a bite.
11 D ASTRID: I know.
12 D KWAME: You're not reeling.
13 D ASTRID: I'm waiting.
14 D LEILA: What for?
15 D ASTRID: For him to decide.
16 A ¶ The line tugs.
17 A Astrid lifts it a single inch.
18 A The tension goes slack.
19 A She sighs.
20 D LEILA: Eleven centimetres of ice at the edge. Nineteen here. It's thickening, Astrid.
21 D ASTRID: It always thickens. Then it stops.
22 D KWAME: Hartwell, wake up. We have fish.
23 D HARTWELL (eyes closed): We have no fish.
24 D KWAME: We have a fish.
25 D HARTWELL: We have an optimist.
26 A ¶ Kwame grins.
27 A Leila writes it down without being asked, and Astrid's mouth twitches.
28 A ¶ Outside, a snowmobile growls.
29 A The engine cuts.
30 A Boots creak.
31 A The door swings open on a rush of white air.
32 A ¶ A man ducks in, stamping snow: BENEDICT OYELARAN (40s, ranger's parka, radio on his chest).
33 A He closes the door and stands there, enjoying the heat.
34 D KWAME [CONT'D]: Ranger Benedict. Come to arrest us?
35 D BENEDICT: Only if you've got more than the limit.
36 D LEILA: We have none.
37 D BENEDICT: Then you're safe.
38 D ASTRID: Coffee?
39 D BENEDICT: God, yes.
40 A ¶ She pours him a cup.
41 A He cradles it, steaming, and looks at the four of them: hats, noses, gloves, the black circle of water.
42 D BENEDICT [CONT'D]: Anybody catch anything?
43 D HARTWELL: Not yet.
44 D KWAME: But the day is young, Hartwell.
45 D HARTWELL: The day's old as the lake.
46 A ¶ Kwame laughs.
47 A Leila turns a page.
48 A The stove ticks.
49 A Astrid's line twitches again, and nobody says a word.
50 T FADE OUT.

### SCENE s00850 | INT. ICE FISHING HUT ON FROZEN LAKE - DAY
Detected names (may be incomplete or contain aliases): WENDELL, BRODSKY, TOBY, RAY
1 A ¶ A shack the size of a closet.
2 A Bare wood benches.
3 A A hole in the floor with black water and a bobbing line.
4 A A propane heater ticks.
5 A ¶ WENDELL "PA" BRODSKY, sixties, in a quilted vest, sits hunched over the hole with a short rod.
6 A His grandson TOBY, ten, in a puffy snowsuit, kneels across from him holding a thermos he can barely lift.
7 A RAYLENE "RAY" BRODSKY, sixteen, plugs one ear with an earbud and sulks on the far bench.
8 D TOBY: Pa, is it a bite?
9 D WENDELL: Not yet, bud.
10 D TOBY: How do you know?
11 D WENDELL: The line would twitch.
12 A ¶ Toby stares at the line.
13 A It floats.
14 A He unscrews the thermos, pours cocoa onto his mitten, and licks it.
15 A Ray rolls her eyes and turns up her music.
16 D RAY: This is so boring.
17 D WENDELL: It's supposed to be.
18 D RAY: Then why do it?
19 D WENDELL: Because it's quiet.
20 D RAY: It's not quiet. Toby's slurping.
21 D TOBY: I'm not slurping.
22 D RAY: You are slurping.
23 A ¶ Wendell lays a hand on the rod.
24 A He does not look at either of them.
25 A Toby slides closer and pushes the thermos into his grandfather's lap.
26 D TOBY: Pa, have some.
27 D WENDELL: Thank you, bud.
28 A ¶ He sips.
29 A Wipes his mustache with the back of his glove.
30 A The heater ticks.
31 A A breath of wind pushes at the door, and the hut shivers.
32 D RAY: Pa, how long did Grandma fish with you?
33 D WENDELL: Forty years.
34 D RAY: Did she think it was boring?
35 D WENDELL: Every winter.
36 D RAY: Then why'd she come?
37 D WENDELL: Because I did.
38 A ¶ Ray lowers the earbud.
39 A She looks at the hole in the floor, the black circle, and the line sitting in the middle of it like a thin white thread.
40 D TOBY: Pa. Pa! It twitched.
41 D WENDELL: Hold on, bud.
42 D TOBY: It did! I saw!
43 A ¶ Ray slides off her bench onto her knees beside him and Toby, and the three of them lean over the hole, nearly touching heads.
44 A The line dips once.
45 A Then goes still.
46 D RAY: False alarm.
47 D TOBY: It twitched.
48 D WENDELL: It's thinking about it.
49 A ¶ They wait.
50 A The heater ticks.
51 A Toby's head sinks onto Wendell's shoulder.
52 A Ray lets the earbud dangle.
53 D RAY: Pa?
54 D WENDELL: Mm.
55 D RAY: This isn't that boring.
56 A ¶ He doesn't answer.
57 A He just watches the line, and the corner of his mustache moves.

### SCENE s01752 | INT. PARKING LOT - MERIDIAN SYNERGIES - FIRE DRILL - DAY
Detected names (may be incomplete or contain aliases): GWENDOLYN PRUITT, HAL BORSTEIN, TILLY NAKAMURA, HR, MORTIMER GAULT, CFO, YVETTE LAROCHE, INTERN, COLTON
1 A ¶ Two hundred employees in lanyards stand on hot asphalt in neat clusters.
2 A A sign reads ASSEMBLY POINT B.
3 A ¶ GWENDOLYN PRUITT (50s, VP of Operations, clipboard, sunglasses, an air of command) stands at the center, tapping a pen.
4 A HAL BORSTEIN (40s, sales director, shirt-sleeves rolled, a stress ball in each fist) squeezes both.
5 A TILLY NAKAMURA (30s, HR, lanyard heavy with badges) counts heads and gets a different number every time.
6 A MORTIMER GAULT (60s, CFO, a bow tie, a thermos of something) sits on a curb as though he'd been assigned one.
7 A YVETTE LAROCHE (30s, marketing lead, phone out, thumbs flying) isn't present in any way that matters.
8 A ¶ At the edge, an INTERN (20s, wrinkled polo, a name tag that says HELLO MY NAME IS and nothing else) stands holding a box of donuts.
9 D GWENDOLYN: Tilly, status.
10 D TILLY: Two hundred and four. Or two hundred and six.
11 D GWENDOLYN: We have two hundred and one employees.
12 D TILLY: Then I have five ghosts.
13 D HAL: That's synergy.
14 D YVETTE (not looking up): Can you all not.
15 D GWENDOLYN: Yvette, put down the phone.
16 D YVETTE: It's a work phone.
17 D GWENDOLYN: It's a fire drill.
18 D YVETTE: It's a very productive fire drill.
19 D MORTIMER (from the curb): In my day, we ran out of the building screaming and called it Tuesday.
20 D GWENDOLYN: Mortimer, that's not helpful.
21 D MORTIMER: It wasn't meant to be.
22 A ¶ The Intern lifts the donut box.
23 D INTERN: Does anyone want a donut?
24 A ¶ Everyone turns.
25 D GWENDOLYN: Who authorized donuts?
26 D INTERN: Nobody. I thought it would be nice.
27 D GWENDOLYN: Who are you?
28 D INTERN: The, um. Intern?
29 D GWENDOLYN: What's your name?
30 D INTERN: Colton.
31 D TILLY (consulting her clipboard): There's no Colton on the roster.
32 D COLTON: I'm new.
33 D HAL (dual with Tilly): Nobody told us there was a new guy.
34 D TILLY: ^There is no Colton, Gwendolyn. I checked all three lists.
35 D GWENDOLYN: Colton, who hired you?
36 D COLTON: A man in the elevator.
37 D MORTIMER: That'll be me.
38 A ¶ Silence.
39 A Mortimer sips from his thermos, entirely at peace.
40 D GWENDOLYN: Mortimer, you can't hire a person in an elevator.
41 D MORTIMER: The elevator was stuck. It was either hire him or listen to him hum.
42 D COLTON: I wasn't humming.
43 D MORTIMER: You were humming "Delilah."
44 D HAL: You can hire a guy because he hums "Delilah"?
45 D MORTIMER: He hummed it in the right key.
46 D YVETTE (looking up, finally): Wait. Are we talking about the fire drill or about Colton?
47 D GWENDOLYN: We are talking about neither. We are talking about a protocol.
48 D YVETTE: What protocol?
49 D GWENDOLYN: There is a protocol, and it states that employees assemble at the point, and wait for the all clear.
50 D HAL: Gwen, how long have we been waiting?
51 D GWENDOLYN: Forty minutes.
52 D HAL: Who's giving the all clear?
53 A ¶ Everyone looks at the building.
54 A Smoke, thin and gray, curls from a third-floor window.
55 D YVETTE (very quietly, to herself): Oh, that's a real one.
56 A ¶ They all turn together to look at the window.
57 A Colton sets down the donuts.
58 D COLTON: Should I call someone?
59 D GWENDOLYN (brightly): No, Colton. I think we've got this under control.
60 A ¶ Behind her, a window pops and glass rains on the asphalt.
61 D TILLY: Two hundred and one.
62 D GWENDOLYN: Thank you, Tilly.
63 D TILLY: And Colton.
64 D GWENDOLYN: Two hundred and two.
65 D HAL (squeezing both stress balls): I'd like it noted that I said we should have had donuts.

### SCENE s00657 | INT. NIGHT-SHIFT BAKERY - 4 A.M.
Detected names (may be incomplete or contain aliases): HILDEGARD BRANDT, OSKAR WREN, PAOLA FERREIRA-LIN, NADEEM ARSLAN, RHIANNON POTTS, MOSES ABERNATHY-GRAY
1 A ¶ Flour-dusted steel.
2 A A dozen racks of rising dough under heat lamps.
3 A A radio hissing between stations.
4 A The ovens tick as they warm.
5 A Everything smells of yeast and, faintly, something sweeter.
6 A ¶ SIX BAKERS in white.
7 A Five move.
8 A One doesn't.
9 A ¶ HILDEGARD BRANDT, sixties, the head baker, kneads with the heel of her hand, never looking up.
10 A OSKAR WREN, twenties, shapes rolls beside her, a half-beat slower than the rhythm of the room.
11 A PAOLA FERREIRA-LIN, thirties, scores loaves with a razor, one clean cut after another.
12 A NADEEM ARSLAN, fifties, loads the oven, counts under his breath.
13 A RHIANNON POTTS, twenties, sweeps near the back door.
14 A And MOSES ABERNATHY-GRAY, forties, stands at the far counter with his back to the others, kneading nothing at all.
15 A ¶ The radio drifts to a station playing a slow waltz.
16 A Nobody turns it off.
17 D HILDEGARD: Moses. The dough.
18 D MOSES: I'm working it.
19 D HILDEGARD: There's no dough there.
20 A ¶ He looks down at his hands.
21 A They are slick with flour.
22 A They have been pressing and folding an empty counter for an hour.
23 A ¶ Paola's razor pauses.
24 A Nadeem's lips stop moving.
25 D MOSES: There was.
26 A ¶ Nobody answers.
27 A The ovens tick.
28 A In the back, the door rattles once, as if someone had leaned on it from outside.

### SCENE s01574 | EXT. FLOODED RICE PADDY - DAWN
Detected names (may be incomplete or contain aliases): DOYLE, CORPORAL RAFAEL ORTEGA, PRIVATE EZRA FINCH, LIEUTENANT HIROSHI TANAKA
1 A ¶ Mist hangs low over water the color of tin.
2 A A broken irrigation sluice stands like a gallows in the middle distance.
3 A ¶ Four soldiers crouch behind a mud dike, helmets slick with rain.
4 A ¶ SERGEANT WALTER "BUCK" DOYLE (40s, square jaw, a face carved for recruiting posters) scans the treeline through field glasses.
5 A ¶ CORPORAL RAFAEL ORTEGA (20s, radio on his back, quick to smile) fiddles with a dial.
6 A ¶ PRIVATE EZRA FINCH (19, freckled, rifle held too tightly) shivers beside him.
7 A ¶ LIEUTENANT HIROSHI TANAKA (30s, Nisei interpreter, spectacles taped at the hinge) kneels apart, a map folded in his gloved hands.
8 D DOYLE: Quiet, all of you.
9 D ORTEGA: I'm just saying, Sarge, the set's dead. Nothing but static.
10 D FINCH: Maybe they're jamming it.
11 D TANAKA: They aren't. The transmitter's been underwater since the rains.
12 D DOYLE: I said quiet.
13 D FINCH: Sarge, I think I saw something move.
14 D ORTEGA: Where?
15 D TANAKA: Left of the sluice. Don't point.
16 D DOYLE: Finch, stay down. Ortega, forget the radio. Lieutenant, how far to the ridge?
17 D TANAKA: Two kilometers across open water.
18 D ORTEGA: Open water. Swell.
19 D FINCH: I can't swim so good.
20 D DOYLE: You can wade.
21 A ¶ Across the paddy, a rooster crows.
22 A Everyone freezes.
23 A Then, from the treeline, a woman's voice calls out in a tongue none of them knows.
24 D TANAKA (low): She says to come in. She says it is safe.
25 D DOYLE: Do you believe her?
26 D TANAKA: No.
27 D ORTEGA: Then why are you smiling?
28 D TANAKA: Because she said it twice.
29 A ¶ A mortar whistles.
30 A All four dive into the mud as the sluice erupts in white water.
31 D DOYLE: Move! Move!
32 A ¶ They scramble along the dike, bent double, Finch last, dragging his rifle through the muck.

### SCENE s01769 | INT. DRIVER'S LICENSE OFFICE - WAITING AREA - DAY
Detected names (may be incomplete or contain aliases): ERNEST PLUMLEY
1 A ¶ Plastic chairs bolted in rows.
2 A A take-a-number machine.
3 A A flag.
4 A A sign: PLEASE HAVE ALL DOCUMENTS READY.
5 A ¶ ERNEST PLUMLEY (60s, bow tie, blazer with elbow patches, a folder of papers held in both hands) sits in the exact middle of the front row.
6 A He aligns his folder with the edge of his knee.
7 A He checks his watch.
8 A He checks his ticket: B-114.
9 A The overhead display reads B-103.
10 A ¶ He squares his shoulders and stares at the display with immense confidence.
11 A ¶ The display ticks.
12 A B-104.
13 A ¶ He nods.
14 A He smiles at nobody.
15 A He pulls a small cassette recorder from his blazer pocket and presses record.
16 D ERNEST (into recorder): Note to self. Today I renew my license. A calm man. A prepared man.
17 A ¶ He clicks it off, pockets it, and checks the folder again, thumbing each page in order.
18 A His smile does not waver.
19 A ¶ The display ticks.
20 A B-105.
21 A ¶ His eyes flick to a bank of windows.
22 A A clerk, unseen, slams a stamp.
23 A Ernest flinches, covers it with a cough, and straightens his bow tie.
24 A ¶ The display ticks.
25 A B-106.
26 A Ernest's knee begins to bounce.
27 A He holds his folder down with his free hand to still it.
28 A ¶ He pulls out the recorder again.
29 A He presses play.
30 D ERNEST [V.O.] (recorded): Note to self. Today I renew my license. A calm man. A prepared man.
31 A ¶ He listens to his own voice, serene.
32 A He rewinds a few seconds and plays it again.
33 A He nods to it, as to a trusted colleague.
34 A ¶ The display ticks.
35 A B-107.
36 A Ernest rises, tests his legs, sits again.
37 A ¶ He opens his folder.
38 A He turns a page.
39 A He freezes.
40 A He turns another page, and another, faster.
41 A His face drains of color, one shade at a time.
42 A ¶ He pulls out the recorder with trembling fingers.
43 D ERNEST (into recorder): Note to self.
44 A ¶ He stops.
45 A His lip works.
46 D ERNEST [CONT'D] (into recorder): The proof of residence is on the kitchen table.
47 A ¶ He clicks it off.
48 A He looks at the display.
49 A B-108.
50 A He looks at his ticket.
51 A B-114.
52 A ¶ Slowly, with enormous dignity, he gets up, tucks the folder under his arm, and walks to the door.
53 A Halfway, he stops, turns, and returns to his seat, and sits, and folds his hands, and stares at the display with immense confidence.

### SCENE s01852 | INT. ARCHIVE READING ROOM - DAY
Detected names (may be incomplete or contain aliases): IMOGEN HARCOURT, THADDEUS HARCOURT, ROSALIE, OSWALD BRIGHT, CALLUM FINCH
1 A ¶ A high-ceilinged room of old oak tables and green-shaded lamps.
2 A Dust turns in the light from tall windows.
3 A Shelves of cloth-bound volumes rise into shadow.
4 A A clock above the door ticks like a patient animal.
5 A ¶ Five people sit scattered through the room, none of them looking at each other.
6 A ¶ At the center table, a woman in her fifties named IMOGEN HARCOURT turns pages of a parish register with a gloved finger.
7 A She reads with her lips slightly parted, and each time she reaches the bottom of a page she touches the corner of her eye.
8 A Across the room, her estranged husband THADDEUS HARCOURT, sixty, pretends to study a map at the window, though his eyes follow her reflection in the glass.
9 A At the long table by the door, their daughter ROSALIE, twenty-six, builds a tower of index cards and knocks it down by accident, and builds it again.
10 A Two tables over, the archivist OSWALD BRIGHT, forty, in sleeve garters and half-moon glasses, stamps slips with a dry rhythm.
11 A And in the far corner sits a young man named CALLUM FINCH, twenty-eight, a stranger to the family, with a laptop he never opens.
12 A ¶ Imogen reaches the bottom of another page.
13 A She sighs, and the sound carries.
14 A ¶ Thaddeus turns from the window.
15 A He crosses the room, slowly, as if wading, and stops at her table.
16 A She does not look up.
17 A He draws out the chair opposite, and she lets him.
18 A ¶ He sits.
19 A He folds his hands on the table, then unfolds them.
20 A She turns another page.
21 A He watches her thumb smooth the margin.
22 A ¶ When he finally speaks, it is quiet, and the archivist's stamp falters.
23 D THADDEUS: You found it, then.
24 D IMOGEN: I found a name.
25 D THADDEUS: Which?
26 D IMOGEN: Not yours.
27 A ¶ He nods, as if this is the answer he expected and the one he dreaded.
28 A Across the room, Rosalie has stopped building.
29 A She watches her parents through the glass of the index-card tower, and Callum, at the corner table, finally opens his laptop and then closes it again.
30 A Oswald sets down his stamp, takes off his glasses, and polishes them on his sleeve, a private courtesy.
31 D IMOGEN [CONT'D]: Thaddeus, why did you come?
32 D THADDEUS: To see if you'd read it.
33 D IMOGEN: I'm reading it.
34 D THADDEUS: And?
35 A ¶ She turns the register around on the table so he can read.
36 A He leans in.
37 A His finger finds the line.
38 A His mouth moves.
39 A When he looks up, his eyes are wet.
40 D THADDEUS [CONT'D]: That's my mother's hand.
41 D IMOGEN: Yes.
42 D THADDEUS: She never said.
43 D IMOGEN: No.
44 A ¶ The clock ticks.
45 A Rosalie rises, crosses to them, and stands behind her mother's chair with one hand on its back.
46 A Imogen reaches up without turning and covers it with her own.
47 A ¶ Callum, in the corner, slips his laptop into its bag and stands.
48 A He leaves, quietly, the door sighing shut behind him.
49 A Oswald resumes his stamping, softer than before.

### SCENE s01262 | INT. PENGUIN HOUSE - ZOO - MORNING
Detected names (may be incomplete or contain aliases): TIMBO, OKAFOR, PRUDHOMME LAVOIE, GRETA SOLBERG, ANAND BHATT, BEATA KWIATKOWSKA, WILFRED PARRY
1 A ¶ A glass-walled enclosure of artificial ice and real fish smell.
2 A Six keepers in waders jostle around a bucket of herring.
3 A The penguins watch from a rock like a jury.
4 A ¶ TIMOTHY "TIMBO" OKAFOR (40s, head keeper) hands out gloves.
5 A His assistant PRUDHOMME LAVOIE (30s, clipboard) counts birds.
6 A Trainee GRETA SOLBERG (20s, notebook) takes notes.
7 A Veterinarian DR. ANAND BHATT (50s, stethoscope) squints at a limping bird.
8 A Cleaner BEATA KWIATKOWSKA (60s, mop, headphones) hums.
9 A Intern WILFRED PARRY (19, enormous boots) holds the bucket upside down.
10 D TIMBO: Wilfred, the bucket.
11 D WILFRED: Sorry, Timbo.
12 A ¶ He rights it.
13 A Herring slides across the floor.
14 A Three penguins launch themselves after it.
15 D PRUDHOMME: That's thirty-one.
16 D GRETA: Thirty-two.
17 D PRUDHOMME: Thirty-one.
18 D ANAND: Thirty, plus the one on Beata's boot.
19 A ¶ Beata looks down.
20 A A penguin stands on her boot, staring up.
21 A She lifts her headphones, nods to it, puts them back, and goes on mopping.
22 D TIMBO: Dr. Bhatt, the limp?
23 D ANAND: It's a sulk.
24 D TIMBO: A sulk?
25 D ANAND: He wants the rock the other one has.
26 D GRETA (writing): Sulk. Rock. Other one.
27 A ¶ They all look at the rock.
28 A A fat penguin sits on it, smug, wings folded behind it like an old man at a bus stop.
29 D WILFRED: I'll swap them.
30 D TIMBO: No!
31 A ¶ Too late.
32 A Wilfred wades in.
33 A Penguins scatter.
34 A The sulker slips onto the rock.
35 A The fat one slides off and lands on Wilfred's boot.
36 A Everyone sighs.
37 T FADE OUT.

### SCENE s02294 | INT. TRUCK STOP DINER, ARM-WRESTLING TABLE - NIGHT
Detected names (may be incomplete or contain aliases): BIG WENDELL TUCKER, ADA PRZYBYLSKI, REFEREE
1 A ¶ Steel table.
2 A Two stools.
3 A A crowd of truckers three-deep.
4 A Neon beer signs buzz.
5 A ¶ BIG WENDELL TUCKER, forty, three hundred pounds, hands like shovels, grips the pegs.
6 A Across from him sits ADA PRZYBYLSKI, twenty-three, a barista in a hairnet, five-foot-two, sleeves rolled.
7 D REFEREE: Ready.
8 A ¶ Wendell grins.
9 A Ada doesn't.
10 A Their hands lock.
11 D REFEREE [CONT'D]: Go.
12 A ¶ Wendell surges.
13 A Ada's arm folds back to forty-five degrees and the crowd roars.
14 A Her face goes red, her knuckles white, and she exhales through clenched teeth.
15 A Wendell relaxes into the win.
16 D ADA: Not yet.
17 A ¶ She drives.
18 A The forearm rises, inch by inch, a hinge opening against a rusty spring, and Wendell's grin falters.
19 A The crowd quiets.
20 A His wrist cracks.
21 A She slams it back to vertical, then past, pressing it toward the steel, and he shouts, but she holds.
22 A He wrenches free, regrips, and with a bellow of rage reverses the angle, the table rocking.
23 A Ada's stool skids, her hairnet slips, a strand of hair falls into her mouth, and she bites it.
24 D WENDELL: You can't!
25 D ADA: I can.
26 A ¶ The back of his hand touches steel.
27 A The room erupts.
28 A Wendell stares at his fist as though it belonged to a stranger.

### SCENE s01503 | INT. HOSPITAL ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): NURSE PRISCILLA ADEBAYO-KANE, ORDERLY HIRAM OKORO-STRAND, DOCTOR, CAPTAIN LUCIANA MOREAU-BANERJEE
1 A ¶ A steel box rising slowly.
2 A A gurney crowds the car.
3 A Under the sheet lies a patient, pale, an oxygen mask over his mouth.
4 A ¶ NURSE PRISCILLA ADEBAYO-KANE (30s, scrubs, hair in a bun) squeezes a bag valve.
5 A ORDERLY HIRAM OKORO-STRAND (50s, thick arms) steadies the gurney rail.
6 A A DOCTOR (40s, tired, a stethoscope around his neck) watches the monitor.
7 D DOCTOR: Eight more floors.
8 D PRISCILLA: He's holding.
9 D HIRAM: Come on, come on.
10 A ¶ The elevator stops.
11 A The doors don't open.
12 A The lights flicker.
13 D DOCTOR: No.
14 D HIRAM: It's the generator.
15 D PRISCILLA: How long?
16 D HIRAM: Ten minutes, maybe.
17 D DOCTOR: He doesn't have ten minutes.
18 A ¶ The doors part a crack.
19 A A hand wedges into the gap.
20 A A fire axe handle.
21 A The doors grind apart.
22 A In the opening, a figure in a yellow turnout coat.
23 A CAPTAIN LUCIANA MOREAU-BANERJEE (40s, helmet, soot on her cheek).
24 D LUCIANA: Fire department. Everybody out the top hatch or I cut you out.
25 D DOCTOR: We have a patient.
26 D LUCIANA: Then he goes first.
27 A ¶ She turns to Hiram.
28 D LUCIANA [CONT'D]: You. On three. One. Two.
29 A ¶ Hiram braces the gurney.
30 A Priscilla keeps squeezing the bag.
31 A The captain's helmet lamp hits the patient's face and, quietly, she nods.

### SCENE s00493 | INT. APIARY CONVENTION - HONEY TASTING TENT - DAY
Detected names (may be incomplete or contain aliases): DETECTIVE INSPECTOR INGRID LARK, HORTENSE ABERNATHY, MAN IN VEIL, BEEKEEPER'S VEIL, KONSTANTIN GRIGORIEV, CLERK, PACO, LEMUS, ISOLDE VANCE
1 A ¶ White canvas.
2 A Folding tables laid with jars of every color from straw to tar.
3 A Hundreds of beekeepers murmur.
4 A A glass observation hive hums beside the podium.
5 A ¶ DETECTIVE INSPECTOR INGRID LARK (40s, plain suit, notebook) walks the aisle.
6 A She stops at a stall where HORTENSE ABERNATHY (60s, honey sommelier, white gloves) arranges jars.
7 D LARK: Mrs. Abernathy. About Alistair Penhallow.
8 D HORTENSE: Terrible business.
9 D LARK: He died at this table.
10 D HORTENSE: He tasted the buckwheat and went blue.
11 D LARK: You handed him the spoon.
12 D HORTENSE: I handed everyone a spoon.
13 A ¶ A MAN IN A BEEKEEPER'S VEIL (50s, tall, gloves) drifts behind Hortense, studying the observation hive.
14 A Lark glances at him.
15 D LARK: Sir. Your name?
16 D MAN IN VEIL: Ask the queen.
17 D LARK: I'll ask you.
18 A ¶ The man lifts his veil.
19 A He is KONSTANTIN GRIGORIEV (50s, weathered, one blue eye, one brown).
20 D KONSTANTIN: Grigoriev. I sold Alistair his bees.
21 D LARK: Then you know what killed him.
22 D KONSTANTIN: Oleander nectar. A swarm that fed on it by the river.
23 D HORTENSE (sharp): That's impossible. Those hives were mine.
24 D KONSTANTIN: Were they?
25 A ¶ A CLERK, FRANCISCO "PACO" LEMUS (20s, convention lanyard), hurries in carrying a ledger.
26 D PACO: Inspector! The registry. Hive twelve was transferred last Thursday.
27 D LARK: To whom?
28 D PACO (quietly): Mrs. Abernathy.
29 A ¶ Hortense sets down a jar.
30 A The room does not go silent, but the nearest ring of beekeepers does.
31 A She peels off her glove, finger by finger.
32 D HORTENSE: Alistair planned to expose me. The adulterated honey. The syrup.
33 D LARK: So you poisoned him.
34 D HORTENSE: So I fed him his own greed.
35 A ¶ DR. ISOLDE VANCE (30s, lab coat under a rain jacket, evidence bag in hand) pushes through the crowd and holds up the bag.
36 A A single dead bee lies inside.
37 D ISOLDE: Oleander residue. Confirmed. In the spoon.
38 A ¶ Lark closes her notebook.
39 A Behind them, the observation hive hums louder, and something in the glass catches the light: the queen, laying, indifferent.

### SCENE s01575 | INT. COMMUNITY CENTER KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): WESTBROOK BAKE-OFF, GLORIA ESPINOSA-REED, MAYA, TOBY, GLORIA'S HUSBAND, DENNIS REED, JUDGE'S ASSISTANT, PRUDENCE HARTWELL
1 A ¶ A big institutional kitchen, steel counters, a dozen mismatched pots.
2 A Flour on every surface.
3 A A banner on the wall: "WESTBROOK BAKE-OFF - 40TH ANNUAL."
4 A ¶ GLORIA ESPINOSA-REED (50s, apron, reading glasses on a chain) kneads dough with ferocity.
5 A Her daughter MAYA (16, headphones around her neck) arranges cooling racks.
6 A Her son TOBY (8, a paper chef hat too big for him) licks a spoon.
7 A ¶ At the far counter, GLORIA'S HUSBAND, DENNIS REED (50s, mild, a man who apologizes to furniture), is measuring sugar with great care.
8 D GLORIA: Dennis, level it off.
9 D DENNIS: I am leveling it.
10 D GLORIA: You're mounding it.
11 D DENNIS: It's a gentle mound.
12 D MAYA: Dad, it's a hill.
13 D TOBY: Can I have the spoon?
14 D GLORIA: You already have the spoon.
15 D TOBY: Can I have another spoon?
16 A ¶ Dennis hands him one.
17 A Gloria sighs, but she is smiling.
18 A ¶ The wall phone rings.
19 A Maya answers it.
20 D MAYA: Espinosa-Reed residence, kitchen division.
21 D JUDGE'S ASSISTANT [V.O.] (over phone): Good morning. This is the contest office. We're confirming your entry for ten o'clock.
22 D MAYA: Yes. Cinnamon pull-apart.
23 D JUDGE'S ASSISTANT [V.O.]: Wonderful. And the family recipe is original?
24 D MAYA (glancing at Gloria): Totally original.
25 D JUDGE'S ASSISTANT [V.O.]: Perfect. We'll see you shortly.
26 A ¶ Maya hangs up.
27 A Gloria is watching her.
28 D GLORIA: Why did you say it like that?
29 D MAYA: Like what?
30 D GLORIA: Like you were reading it off a card.
31 D MAYA: I wasn't.
32 D GLORIA: Maya.
33 D MAYA: Mom, it's fine.
34 D GLORIA: Is the recipe original?
35 D MAYA: Mom.
36 D GLORIA: Maya Rosalind.
37 D MAYA: It's Grandma Inez's recipe. It's practically ours.
38 D GLORIA: Inez's recipe is from the Hartwell Cookbook, Maya. Page ninety-one. Mrs. Hartwell is a judge.
39 D MAYA: I know.
40 D GLORIA: You know?
41 D MAYA: I knew last week. I looked it up. I didn't want to say anything.
42 D GLORIA: You didn't want to say anything.
43 D MAYA: You looked so happy.
44 A ¶ Dennis sets down the sugar scoop very quietly.
45 A Toby stops licking his spoon.
46 D GLORIA: I made this recipe for thirty years. My mother gave it to me. She said her mother wrote it herself.
47 D MAYA: Maybe she did. Maybe she wrote it down from the cookbook.
48 D GLORIA: Maybe.
49 D DENNIS: Gloria.
50 D GLORIA (sharp): Dennis, not now.
51 D DENNIS: I only meant, maybe change a little. Add the cardamom.
52 D GLORIA: You want me to add the cardamom.
53 D DENNIS: It's the one thing that isn't in the cookbook.
54 A ¶ A long silence.
55 A The oven timer ticks.
56 D GLORIA: Maya, hand me the cardamom.
57 A ¶ Maya blinks.
58 A Then she crosses to the spice rack and hands over a small tin.
59 A ¶ The door swings open.
60 A MRS. PRUDENCE HARTWELL (70s, lavender cardigan, a clipboard held like a scepter) enters, trailed by an assistant.
61 D PRUDENCE: Gloria, dear, I came early to see the kitchens. Is that cinnamon I smell?
62 D GLORIA (brightly): It is.
63 D PRUDENCE: Is it the pull-apart?
64 D GLORIA: It is.
65 D PRUDENCE: I used to make one just like it. My own grandmother's recipe. I published it, you know.
66 A ¶ Gloria's hand tightens around the cardamom tin.
67 D GLORIA: I did not know that.
68 A ¶ Prudence leans over the dough, sniffs, and smiles.
69 D PRUDENCE: Oh, there's something different in this. Something warm. What is it?
70 A ¶ Maya, Dennis, and Toby all look at Gloria.
71 D GLORIA: Cardamom.
72 D PRUDENCE: Lovely. Page ninety-one, if I'm not mistaken. But with your own touch.
73 A ¶ Gloria goes completely still.
74 A Prudence pats her arm and sweeps out.
75 A ¶ The door closes.
76 A Nobody speaks.
77 D TOBY: Does that mean we win?
78 A ¶ Gloria laughs.
79 A A short, startled laugh, then a longer one.
80 A She wipes her eyes with a floury wrist.
81 D GLORIA: It means we bake.

### SCENE s02346 | INT. CURLING RINK - 5 A.M.
Detected names (may be incomplete or contain aliases): GRETCHEN VANDERMEER, BERNIE, OKAFOR, LINNEA SOLBERG, XIMENA TREVINO
1 A ¶ A long sheet of pebbled ice under cold blue light.
2 A The rafters are hung with faded club banners.
3 A Frost on the glass.
4 A The Zamboni sits idle at the far end like a sleeping animal.
5 A ¶ Four women stand at the hog line in padded jackets, brooms upright.
6 A Breath rises from them in synchronized clouds.
7 A ¶ GRETCHEN VANDERMEER, 50s, the skip, holds the house in her gaze as if it might move if she looked away.
8 A BERNADETTE "BERNIE" OKAFOR, 40s, the lead, flexes a wrist wrapped in tape.
9 A LINNEA SOLBERG, 30s, third, adjusts a glove for the tenth time.
10 A And at the back, 19-year-old XIMENA TREVINO, the new second, holds her broom as if it might fire.
11 D GRETCHEN: We are down by one. Last end. Hammer is theirs.
12 D BERNIE: They always have the hammer.
13 D LINNEA: They always have the luck.
14 D GRETCHEN: Luck is a story we tell after.
15 D XIMENA: Should I sweep hard or light?
16 D GRETCHEN: Hard until I say light. Light until I say hard.
17 D XIMENA: That's the same thing.
18 D GRETCHEN: Then you understand perfectly.
19 D LINNEA: She will, in a year.
20 D BERNIE: In a year she will be skipping.
21 D XIMENA: I don't want to skip.
22 D GRETCHEN: No one wants to skip. We want the rock to go where we want it. The skip is the one who stands there when it doesn't.
23 D BERNIE: That's the most poetic thing she's said all season.
24 D LINNEA: It was a little bit poetic.
25 D GRETCHEN: It was a rule. Eyes on the broom.
26 D XIMENA: Okay. Eyes on the broom.
27 D GRETCHEN: Bernie, first stone. Draw to the four-foot. Light touch.
28 D BERNIE: Light as a prayer.
29 D GRETCHEN: Do not say "prayer."
30 D BERNIE: Light as an apology.
31 D GRETCHEN: Better.
32 A ¶ Bernie settles into the hack.
33 A The ice hisses under her slider as she pushes out, long and low.
34 A She releases the stone, and it glides away with a low whisper, the handle turning slowly.
35 D GRETCHEN [CONT'D] (shouting): Sweep!
36 A ¶ Linnea and Ximena drop and sweep, brooms flicking in perfect alternating rhythm.
37 A Their breath comes in hard bursts.
38 A The stone drifts, curls, slows.
39 D GRETCHEN [CONT'D]: Hold. Hold. Off.
40 A ¶ They lift their brooms.
41 A The stone slides to a stop, dead center of the house.
42 A A tiny sound, like a coin settling on a table.
43 A ¶ Nobody cheers.
44 A They only look at it, steaming faintly on the ice.

### SCENE s01891 | INT. BOWLING CENTER, STATE FINALS - EVENING
Detected names (may be incomplete or contain aliases): COACH TERESA BIANCHI-ODEH, CALEB STRUTHERS, PILAR NU, EZ-WADE, FELICITY OKONKWO, OZ, KETTERING, OVER THE PA
1 A ¶ Lanes polished to a shine.
2 A Overhead scoreboards.
3 A A banner reads "REGIONAL CHAMPIONSHIP."
4 A The pins crash in the distance.
5 A ¶ COACH TERESA BIANCHI-ODEH (50s, windbreaker, clipboard) paces behind the team's lane.
6 A At the ball return, seniors CALEB STRUTHERS (18, broad) and PILAR NUÑEZ-WADE (17, wiry) wait their turns.
7 A Manager FELICITY OKONKWO (16, headset, stats binder) feeds numbers into a tablet.
8 A And at the end of the lane, anchor OSWALD "OZ" KETTERING (17, braces, shaking hands) rubs chalk on his fingers.
9 D OVER THE PA [V.O.]: Final frame. Carson Valley leads by seven. Carson Valley, you have the lane.
10 D BIANCHI-ODEH: Listen up. Oz, you need a strike. Just a strike. No spare helps us.
11 D OZ: I know, Coach.
12 D CALEB: He knows.
13 D PILAR: Leave him alone.
14 D PILAR: Oz. Breathe.
15 D FELICITY: Percentage of strikes on the left oil pattern is--
16 D BIANCHI-ODEH: Felicity, not now.
17 D FELICITY: Sorry.
18 D PILAR: Oz, you got this.
19 D CALEB: Yeah, Oz, you got--
20 D OZ: Please stop.
21 A ¶ They stop.
22 A Oz takes the ball.
23 A Weighs it.
24 A Steps to the line.
25 A A quiet falls.
26 A He draws back, releases.
27 A The ball curves, rolls, rolls, hits.
28 A Nine pins fall.
29 A One wobbles, wobbles, wobbles.
30 D CALEB: Come on.
31 D PILAR: Fall, fall, fall.
32 D FELICITY: Probability of the ten-pin falling is--
33 D PILAR: Felicity.
34 D FELICITY: Shutting up.
35 A ¶ The ten-pin stands.
36 A Still.
37 A Dead still.
38 A Oz stares.
39 A His shoulders slump.
40 D OZ: Sorry, Coach.
41 D BIANCHI-ODEH: Don't be. Take the spare.
42 A ¶ Oz takes the second ball.
43 A Walks to the line.
44 A The same quiet.
45 A He lets it go.
46 A It rolls straight down the right gutter's edge and clips the ten-pin from the side.
47 A It tumbles.
48 A Falls.
49 A ¶ The scoreboard flashes.
50 A The team explodes.
51 A Caleb hoists Oz into the air.
52 A Pilar howls.
53 A Felicity types a number, then screams.
54 D OVER THE PA [V.O.]: Final score. Brookfield Prep, two-eleven. Carson Valley, two-ten. Brookfield takes the title.
55 A ¶ Everyone freezes.
56 A Slowly, one by one, they turn to Bianchi-Odeh, who is calmly capping her pen.
57 D BIANCHI-ODEH: Pack up.

### SCENE s00046 | EXT. SHELLED FARMHOUSE ROOF, ARDENNES - DAWN
Detected names (may be incomplete or contain aliases): GENE, BRODSKY, PRIVATE LOUIS TRUDEAU-PARK, SERGEANT MARGUERITE OYELOWO
1 A ¶ Snow dusts the broken tiles.
2 A Beyond the ridge, the thud of far guns.
3 A ¶ CORPORAL EUGENE "GENE" BRODSKY (20s, frozen mustache) crouches behind a chimney with binoculars.
4 A Beside him, PRIVATE LOUIS TRUDEAU-PARK (19, baby-faced, rifle hugged) shivers.
5 A A few yards away, SERGEANT MARGUERITE OYELOWO (30s, tough, her helmet dented) sits against a beam, tying a rag around her wrist.
6 A ¶ She tightens it with her teeth.
7 A He lowers the binoculars.
8 D GENE: Sarge, I count six.
9 D OYELOWO: Count again.
10 D GENE: Eight.
11 D OYELOWO: Better.
12 D TRUDEAU-PARK: Is it true what they say? About the Tigers?
13 D OYELOWO: Louis, eat your biscuit.
14 D TRUDEAU-PARK: I'm not hungry.
15 D OYELOWO: I didn't ask.
16 A ¶ He opens the biscuit tin.
17 A His fingers are blue.
18 A She reaches over and, without a word, tucks his scarf tighter.
19 D GENE: They're moving.
20 A ¶ She rises on one knee and takes the binoculars.
21 A Her jaw hardens.
22 D OYELOWO: Gene, wire the others. Louis, with me.
23 A ¶ They slide down the roof toward the ladder.

### SCENE s00619 | INT. SEASIDE HOTEL - TERRACE RESTAURANT - EVENING
Detected names (may be incomplete or contain aliases): NAOMI HAYES, CALLUM REID, WINIFRED, JASPER
1 A ¶ White tablecloths flutter in a salt breeze.
2 A Paper lanterns bob on strings.
3 A Beyond the rail, the sea turns violet under a slow, bruised sunset.
4 A ¶ NAOMI HAYES, 30s, in a pale yellow sundress, stirs a spritz she has not tasted.
5 A Across from her, CALLUM REID, 30s, a sailor's tan, rolled-up shirtsleeves, turns his wedding band round and round with his thumb.
6 A At the next table, WINIFRED, 70s, small as a bird, silver hair swept into a loose bun, and JASPER, 70s, bow tie, cane hooked over the chair, share a plate of oysters and a silence of decades.
7 A ¶ She watches them.
8 A He watches her watching.
9 D CALLUM: They look happy.
10 D NAOMI: They look tired.
11 D CALLUM: That's the same thing, at that age.
12 A ¶ She laughs, but stops.
13 A He reaches for her hand across the cloth.
14 A She lets him hold it, briefly, then eases away to adjust a strap, a napkin, the angle of a fork.
15 A Her eyes drift again to Winifred, who lifts an oyster with great care and feeds it, with enormous tenderness, to Jasper, who accepts it without comment, as if this were the plainest thing in the world.
16 D CALLUM [CONT'D]: I should have called.
17 D NAOMI: You did call.
18 D CALLUM: Not when it mattered.
19 D NAOMI: No.
20 D CALLUM: I was a coward.
21 D NAOMI: You were twenty-six.
22 D CALLUM: Same difference.
23 A ¶ She smiles, small and sad.
24 A A waiter passes, lights the candle at their table, goes.
25 A The flame flares and steadies.
26 D NAOMI: Callum, why did you come?
27 D CALLUM: Because you wrote.
28 D NAOMI: I wrote four lines. About a lighthouse.
29 D CALLUM: I read the lighthouse. Over and over.
30 A ¶ She shakes her head, turning the glass slowly by its stem.
31 D NAOMI: I didn't mean it as an invitation.
32 D CALLUM: I know.
33 D NAOMI: I meant it as a goodbye.
34 D CALLUM: I know that too.
35 A ¶ Winifred, at the next table, drops her fork.
36 A It clatters.
37 A Jasper, without looking, bends to pick it up, handing it back with a courtly little bow.
38 A She nods her thanks.
39 A Their hands linger.
40 A ¶ Naomi sees.
41 A Her face softens, then breaks, and she looks out at the dying sea.
42 D NAOMI [CONT'D]: I don't want to be tired, Callum.
43 D CALLUM: Nobody does.
44 D NAOMI: I want to be like that. Even if it takes sixty years.
45 A ¶ He is quiet.
46 A Then he takes off his ring, sets it on the white cloth between them, and slides it toward her until the candlelight catches it.
47 D CALLUM: It's yours to decide.
48 A ¶ She looks at the ring.
49 A At him.
50 A At the old couple.
51 A At the sea.
52 A And, very gently, she pushes it back.
53 D NAOMI: Keep it. For now.

### SCENE s00144_2 | INT. VAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): DIDI, ANGELIKA, PETRA
1 A ¶ Angelika opens the steel box.
2 A Inside: a single wheel of cheese, tiny, perfect, no bigger than a palm.
3 A She stares.
4 D DIDI: That's it?
5 D ANGELIKA (wonder): The Madame Esterhazy. Eighty thousand euros a pound.
6 D DIDI: It smells like feet.
7 D PETRA (grinning): Smells like retirement.

### SCENE s01880 | INT. COIN LAUNDRY, ALL-NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): MARCHETTI, ARCHIE PENNYWHISTLE, RENATA, MEZ-LUND, TOMASZ BRZOZOWSKI, WIN, ABARA
1 A ¶ Dryers turning.
2 A Fluorescent hum.
3 A Orange plastic chairs bolted in rows.
4 A A vending machine sells soap and nothing else.
5 A ¶ DET. SOLEDAD "SOL" MARCHETTI (40s, windbreaker, paper cup) takes the chair nearest the door.
6 A Opposite her, ARCHIE PENNYWHISTLE (60s, flannel, crossword) folds towels with a care that borders on ceremony.
7 A Near the dryers, RENATA GÓMEZ-LUND (30s, scrubs, earbuds) watches a spinning load of white shirts.
8 A ¶ Marchetti sips.
9 A Looks at no one in particular.
10 D MARCHETTI: Slow night.
11 D ARCHIE: They all are, now.
12 A ¶ He sets a towel on the pile.
13 A Squares the corners.
14 D MARCHETTI: You work here long?
15 D ARCHIE: Eleven years. Owner's my cousin. He doesn't come in.
16 D MARCHETTI: Nice. A quiet job.
17 D ARCHIE: It is until it isn't.
18 A ¶ Renata pulls out an earbud.
19 A Glances at Marchetti.
20 A Looks away.
21 A Her load stops.
22 A She opens the door and pulls the shirts into a basket, one by one.
23 A Each is folded before it is warm.
24 D MARCHETTI: Those look like hospital shirts.
25 D RENATA: They're mine.
26 D MARCHETTI: All of them?
27 D RENATA: It's a big family.
28 A ¶ Archie turns the page of his crossword.
29 A Pencils in a word.
30 A Erases it.
31 D MARCHETTI: Seven letters. "Alibi."
32 D ARCHIE: Excuse?
33 D MARCHETTI: Six. Excuse is six.
34 D ARCHIE (not looking up): Then I don't have one.
35 A ¶ The bell on the door.
36 A TOMASZ BRZOZOWSKI (30s, leather jacket, wet hair) enters with a duffel and stops.
37 A His eyes go to Renata.
38 A Then to Marchetti's windbreaker, to the badge clipped beneath it.
39 A He nods once, pleasantly, like a man at the wrong party.
40 D TOMASZ: Evening.
41 D MARCHETTI: Evening.
42 D ARCHIE: Machine three is broken, friend. Use five.
43 D TOMASZ: I've got my own, thanks.
44 A ¶ He unzips the duffel.
45 A Takes out a single folded shirt.
46 A Holds it up to the light.
47 A Renata drops the basket.
48 A ¶ Nobody speaks.
49 A A dryer thuds, thuds, thuds.
50 A A coin rattles down inside it.
51 D ARCHIE: ^Machine five. It's good.
52 D MARCHETTI: ^Mr. Brzozowski. Sit down.
53 A ¶ Tomasz folds the shirt into quarters.
54 A Then smaller.
55 A A kind of smile.
56 D TOMASZ: I haven't given my name.
57 D MARCHETTI: You didn't need to.
58 A ¶ From the back, a door opens.
59 A WINSTON "WIN" ABARA (50s, owner's cousin's lawyer, expensive coat) steps out of the supply closet, buttoning his jacket.
60 A He looks at the room.
61 A Nobody looks at him.
62 D WIN: It's all right, Tomasz. They only have the one.
63 D TOMASZ: The one what?
64 D WIN (gently): The one thing, son. The rest is dryer lint.
65 A ¶ Marchetti stands.
66 A Her cup is empty.
67 A She sets it very neatly on the chair.
68 D MARCHETTI: Then let's start with the one.
69 A ¶ Renata picks up the basket again.
70 A Archie closes his crossword.
71 A The dryers keep turning.

### SCENE s01267 | INT. SYNERGY SOLUTIONS - CONFERENCE ROOM 12 - DAY
Detected names (may be incomplete or contain aliases): DARIUS FEATHERSTONEHAUGH, PENELOPE ACHTERBERG-SOLOMON
1 D DARIUS FEATHERSTONEHAUGH: Thanks for squeezing me in, Penelope.
2 D PENELOPE ACHTERBERG-SOLOMON: Always. You have fifteen minutes.
3 D DARIUS FEATHERSTONEHAUGH: I only need ten. I want to talk about a rebrand.
4 D PENELOPE ACHTERBERG-SOLOMON: Of what?
5 D DARIUS FEATHERSTONEHAUGH: Of the team.
6 D PENELOPE ACHTERBERG-SOLOMON: We're a team of two.
7 D DARIUS FEATHERSTONEHAUGH: That's the problem. We feel like a duo. I want us to feel like a movement.
8 D PENELOPE ACHTERBERG-SOLOMON: A movement of two.
9 D DARIUS FEATHERSTONEHAUGH: A movement that has not yet scaled.
10 D PENELOPE ACHTERBERG-SOLOMON: Go on.
11 D DARIUS FEATHERSTONEHAUGH: I propose we call ourselves the Alignment Pod.
12 D PENELOPE ACHTERBERG-SOLOMON: The Alignment Pod.
13 D DARIUS FEATHERSTONEHAUGH: With a mission statement. Draft: "To align what is misaligned, and to pod what is unpodded."
14 D PENELOPE ACHTERBERG-SOLOMON: What does "pod" mean as a verb?
15 D DARIUS FEATHERSTONEHAUGH: It means to gather in the spirit of synergy.
16 D PENELOPE ACHTERBERG-SOLOMON: Darius, how long have you worked here?
17 D DARIUS FEATHERSTONEHAUGH: Eleven years in March.
18 D PENELOPE ACHTERBERG-SOLOMON: And in eleven years, you have never once had a new idea.
19 D DARIUS FEATHERSTONEHAUGH: That is unkind.
20 D PENELOPE ACHTERBERG-SOLOMON: It's also the reason I'm going to approve this.
21 D DARIUS FEATHERSTONEHAUGH: You are?
22 D PENELOPE ACHTERBERG-SOLOMON: On one condition. You are the only member of the Alignment Pod.
23 D DARIUS FEATHERSTONEHAUGH: And you?
24 D PENELOPE ACHTERBERG-SOLOMON: I am the Pod's supervisor, from a distance.
25 D DARIUS FEATHERSTONEHAUGH: I'll take it.
26 D PENELOPE ACHTERBERG-SOLOMON: Good. Your ten minutes are up.
27 D DARIUS FEATHERSTONEHAUGH: Penelope, one last thing.
28 D PENELOPE ACHTERBERG-SOLOMON: Yes?
29 D DARIUS FEATHERSTONEHAUGH: The Pod will require a budget.
30 D PENELOPE ACHTERBERG-SOLOMON: Of course it will.

### SCENE s00445 | INT. COUNTY COURTHOUSE - STAIRWELL LANDING - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY NAOMI PEMBERTON-CLARKE, DEVANTE OYELOWO, REGGIE, ABERNATHY
1 A ¶ A marble stairwell that echoes.
2 A Dusty light through tall windows.
3 A ATTORNEY NAOMI PEMBERTON-CLARKE (40s, charcoal suit, folder) climbs two steps at a time.
4 A Behind her trots her junior, DEVANTE OYELOWO (20s, rolled sleeves, briefcase).
5 D NAOMI: Devante, we have eight minutes.
6 D DEVANTE: Ms. Pemberton-Clarke, the witness isn't here yet.
7 D NAOMI: She'll be here.
8 A ¶ They reach the landing.
9 A A heavyset man waits at the window: JUDGE REGINALD "REGGIE" ABERNATHY (60s, robe over arm), eating a sandwich.
10 D REGGIE: Counsel.
11 D NAOMI: Your Honor.
12 D REGGIE: You're in my stairwell.
13 D NAOMI: We're passing through.
14 D DEVANTE: Sorry, sir. We didn't know it was private.
15 D REGGIE: It isn't. I just like the quiet.
16 A ¶ Naomi and Devante glance at each other.
17 A Reggie wipes crumbs from his sleeve.
18 D REGGIE [CONT'D]: Tell me, Ms. Pemberton-Clarke. Is your client going to take the stand?
19 D NAOMI: I can't discuss strategy with the bench, Judge.
20 D REGGIE: Of course not.
21 A ¶ He tosses the sandwich wrapper at a bin, and misses.
22 A They all three stare at it.
23 A Devante dives for the wrapper, and Naomi dives for the same one.
24 A They collide at the bin.
25 A The folder spills.
26 A Papers slide across the marble.
27 D REGGIE [CONT'D] (mildly): Well, now I know what's in the file.
28 A ¶ Naomi and Devante freeze on their knees.
29 A Reggie picks up one page, reads it, and folds it.
30 D REGGIE [CONT'D]: Eight minutes, counsel. I'd hurry.
31 A ¶ He walks down the stairs, leaving the page tucked in his pocket.

### SCENE s00735 | INT. MINIVAN - INSIDE AN AUTOMATIC CAR WASH TUNNEL - DAY
Detected names (may be incomplete or contain aliases): DESMOND, PRU, ROXY, POP-POP
1 A ¶ Dark suds slide down the windshield in sheets.
2 A Blue light, pink light, a roar of brushes.
3 A The Okafor-Lindgren family sits sealed inside a rocking cocoon: DESMOND, fifties, gripping the wheel at ten and two though the van is on rails; his wife PRUDENCE "PRU", fifties, turned sideways in the front seat; their daughter ROXANNE "ROXY", sixteen, wedged in back with her knees against her chest; and Pru's father BARTHOLOMEW "POP-POP", eighties, queen of the back seat, tucked in a plaid blanket and a hat.
4 D DESMOND: Nobody touch the doors.
5 D PRU: Nobody is touching the doors.
6 D ROXY: Mom, I'm literally nowhere near the doors.
7 D POP-POP: Is it raining?
8 D PRU: No, Daddy, it's a car wash.
9 D POP-POP: Whose car?
10 D DESMOND: Ours.
11 D POP-POP: I thought it was Desmond's.
12 D DESMOND: It is mine. Ours. It's our car.
13 D ROXY: Pop-Pop, you've been in a car wash before.
14 D POP-POP: Not with a family in it.
15 D PRU: Desmond, the foam's coming in the vent.
16 D DESMOND: It is not coming in the vent.
17 D ROXY: It's coming in the vent.
18 D DESMOND: Roxy, don't help.
19 D ROXY: I'm not helping, I'm reporting.
20 D POP-POP: Roxanne, you look like your grandmother when you frown.
21 D ROXY: Is that good?
22 D POP-POP: She frightened me in the nineteen-sixties and I married her.
23 D PRU: Daddy, we've heard.
24 D DESMOND: Pru, tell your father not to say "frightened me" while I'm in a tunnel.
25 D PRU: He can say what he wants.
26 D POP-POP: I'm eighty-four.
27 D ROXY: You're eighty-four and you're the reason we're in here. You said the van smelled like soup.
28 D POP-POP: It did smell like soup.
29 D DESMOND: It smelled like Pru's lasagne.
30 D PRU: Excuse me?
31 D DESMOND: I like the lasagne!
32 D PRU: You said it smelled.
33 D DESMOND: Everything smells! It's a van!
34 D ROXY: Dad, the sign says "Put in neutral."
35 D DESMOND: I know what it says.
36 D PRU: Are you in neutral?
37 D DESMOND: I am in neutral.
38 D POP-POP: Is it neutral?
39 D DESMOND: It's neutral, Bartholomew.
40 D POP-POP: Don't take that tone.
41 D ROXY: Dad, you're supposed to be in neutral and also not touching the brakes.
42 D DESMOND: I'm not touching the brakes!
43 D PRU: Your foot is on the brake.
44 D DESMOND: My foot is hovering.
45 D ROXY: Hovering on the brake.
46 D POP-POP: Is that why the brushes are stuck?
47 A ¶ Everyone falls silent.
48 A The brushes slap the roof, steady, thudding, oddly intimate.
49 D PRU (softly): Desmond.
50 D DESMOND: It's fine.
51 D ROXY: Is it fine?
52 D DESMOND: It's fine!
53 A ¶ The brushes lift.
54 A A wave of warm air blows through the tunnel.
55 A Pop-Pop begins to laugh, a wheeze that grows and grows, and one by one the others join him, helpless, water running down the glass.
