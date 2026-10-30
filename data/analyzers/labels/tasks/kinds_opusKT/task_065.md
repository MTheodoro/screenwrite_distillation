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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0065.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02200 | INT. COUNTY COURTHOUSE - WITNESS STAND - DAY
Detected names (may be incomplete or contain aliases): JUDGE ODETTE MARCHAND, ATTORNEY RUPERT KLINE, NURSE GWENDOLYN ASARE
* 1 A ¶ An old courtroom of dark oak and brass, high windows letting in a smear of grey light.
* 2 A The gallery is half full.
* 3 A A clock above the door ticks louder than anyone would like.
4 A ¶ JUDGE ODETTE MARCHAND (60s, white hair in a tight bun, reading glasses on a chain) sits behind the bench, hands steepled.
5 A At the prosecution table, ATTORNEY RUPERT KLINE (40s, sharp suit, a habit of straightening his cuffs) rises with a folder.
6 A And on the witness stand, with her hands flat on her knees, sits NURSE GWENDOLYN ASARE (50s, grey cardigan, wedding band worn thin).
7 A ¶ She stares straight ahead.
8 A He crosses slowly toward her.
9 D KLINE: Ms. Asare, thank you for being here.
10 D ASARE: I was subpoenaed.
11 D KLINE: So you were.
12 A ¶ He smiles a little.
13 A She doesn't.
14 A The judge removes her glasses, polishes them on her sleeve, and puts them back.
15 D KLINE [CONT'D]: You were on shift the night of March the ninth.
16 D ASARE: Yes.
17 D KLINE: Alone on the ward?
18 D ASARE: With two aides. One went home sick at midnight.
19 D KLINE: And the patient in bed four, Mr. Fennimore. He was your responsibility.
20 D ASARE: He was.
21 D KLINE: You administered his medication at three a.m.
22 D ASARE: At ten past three.
23 A ¶ Kline pauses.
24 A He had not expected correction.
25 A He glances at the judge.
26 A She gives him nothing.
27 D KLINE: Ten past three. Thank you for the precision.
28 D ASARE: I always chart the time.
29 A ¶ He walks back to his table, lifts a single sheet from the folder, and holds it between two fingers like something dead.
30 D KLINE: This is the medication record. It lists the dose as fifty milligrams.
31 D ASARE: It does.
32 D KLINE: The pharmacy log says five.
33 D ASARE: It says five.
34 D KLINE: So which is right?
35 A ¶ She is silent.
* 36 A The clock ticks.
37 A Judge Marchand leans forward very slightly.
38 A In the gallery, someone coughs.
39 D KLINE [CONT'D]: Ms. Asare?
40 D ASARE: Both.
41 D KLINE: Both?
42 D ASARE: The pharmacy sent five. I gave fifty.
43 A ¶ A murmur sweeps the room.
44 A Kline sets the sheet down.
45 A He is no longer smiling.
46 D KLINE: Why?
47 D ASARE: Because Dr. Whitfield wrote fifty.
48 D KLINE: And the pharmacy?
49 D ASARE: Made a mistake.
50 D KLINE: And you followed the doctor's order over the pharmacy's.
51 D ASARE: I always do.
52 D KLINE: Even when the numbers disagree?
53 D ASARE: Mr. Kline, I have been a nurse for thirty-one years. When a doctor writes an order, I do not second-guess it.
54 D KLINE: Even when it kills a man?
55 A ¶ She flinches.
56 A Her hand rises, a fraction, then falls back to her knee.
57 D JUDGE MARCHAND: Mr. Kline.
58 D KLINE: Withdrawn, Your Honour.
59 D JUDGE MARCHAND: Ms. Asare, would you like a recess?
60 D ASARE: No, Your Honour.
61 A ¶ She draws a long breath.
62 A Then she raises her eyes, finds the back of the courtroom, and speaks to someone nobody else can see.
63 D ASARE [CONT'D]: I knew when I gave it. I felt the weight of the syringe. I knew.
* 64 A ¶ The room has gone entirely quiet.
65 A Judge Marchand removes her glasses again and does not polish them this time.
66 D KLINE (gently): Then why did you do it?
67 D ASARE: Because if I questioned him, I would have been wrong. And if I was right, he would have been wrong. And no one wins that.
68 A ¶ She stops.
69 A Her whole body seems to loosen.
70 A The tension of weeks drops out of her shoulders like a coat.
71 D KLINE: Thank you.
72 D ASARE: Is that all?
73 D KLINE: That is all.
74 A ¶ He nods to the judge and sits.
75 A Asare stays where she is for a moment, hands in her lap, and then slowly rises.
76 A Her legs are unsteady.
77 A She walks down from the stand, past the table, past the gallery, to the back door.
78 A ¶ She pushes it open herself.
* 79 A Light spills in.
80 A She goes out into it.
81 A ¶ Judge Marchand watches the empty doorway.
82 A She picks up her gavel, then sets it down without striking.
83 D JUDGE MARCHAND: We will adjourn until two.

### SCENE s02201 | INT. PRESBYTERY KITCHEN - 1347 - EARLY MORNING
Detected names (may be incomplete or contain aliases): BROTHER AUGUSTINE, SISTER HILDEGARD, BROTHER BERNARD, ELIAS
* 1 A ¶ A low stone room.
* 2 A Smoke blackens the beams.
* 3 A A pot of barley hangs over the fire.
4 A ¶ BROTHER AUGUSTINE (50s, tonsured, gentle) stirs.
5 A Beside him, SISTER HILDEGARD (40s, wimple, strong forearms) kneads dough on a board.
6 A At the table, an old monk, BROTHER BERNARD (70s, blind, hands folded), listens.
7 A By the door, a servant boy, ELIAS (12, ragged smock), hugs a bundle of firewood.
8 D AUGUSTINE: The harvest is poor.
9 D HILDEGARD: The harvest is always poor.
10 D BERNARD: It was better when I could see it.
11 D AUGUSTINE: Brother, you could not see it then.
12 D BERNARD: I could see it in my mind.
13 D HILDEGARD: That is not seeing.
14 D BERNARD: It is the only kind that lasts.
15 A ¶ Elias sets the firewood down near the hearth, careful not to wake the embers.
16 A He glances at the pot.
17 A Hildegard breaks off a piece of dough, rolls it, and sets it in his hand without looking.
18 D ELIAS: Thank you, Sister.
19 D HILDEGARD: Eat it before the prior sees.
20 A ¶ Augustine tastes the barley and nods.
21 A Bernard breathes in the smoke and the yeast, the old man's face softening.

### SCENE s02202 | INT. ORBITAL ELEVATOR CAR - MID-ASCENT - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE OSEI, TOMAS VELASCO, HANA IWASAKI, NAVIN BHATT, COLLIN FAIRWEATHER, ROZ, TEAGUE
* 1 A ¶ A glass-walled cylinder rising through darkness.
* 2 A Below, the curve of a blue-black Earth.
* 3 A The car hums.
* 4 A A status panel reads 22,000 KM AND CLIMBING.
5 A ¶ Six passengers share the car.
6 A MARGUERITE OSEI (50s, mission commander, grey crop) grips the handrail.
7 A TOMAS VELASCO (30s, pilot, flight suit) leans on the wall.
8 A DR. HANA IWASAKI (40s, biologist) holds a sealed specimen case.
9 A NAVIN BHATT (20s, engineer, thick gloves) kneels at an access panel.
10 A COLLIN FAIRWEATHER (60s, corporate observer, tie loosened) sits on the floor.
11 A And ROSALIND "ROZ" TEAGUE (30s, medic) checks a handheld.
* 12 A ¶ The car shudders.
13 A All six stop talking.
14 D OSEI: What was that?
15 D NAVIN: Tether tension.
16 D TOMAS: That's not tension, that's a stutter.
17 D HANA: Is the case secure?
18 D ROZ: It's secure. Is Collin secure?
19 D COLLIN: I'm fine.
20 D ROZ: You're sweating.
21 D COLLIN: It's warm.
22 D OSEI: It's minus ten.
* 23 A ¶ The panel flickers.
* 24 A The ascent counter drops a number, then climbs again.
25 A Navin's head jerks up from the access panel.
26 D NAVIN: We slipped.
27 D OSEI: We what?
28 D NAVIN: Forty metres. We dropped forty metres.
29 D TOMAS: Commander, I'm reading a cable fault on the line.
30 D HANA: How bad?
31 D TOMAS: Bad enough to ask.
32 D OSEI: Navin, can you reach the manual brake?
33 D NAVIN: If someone holds the lamp.
34 D COLLIN: I'll hold it.
35 D ROZ: You will not. Hana.
36 D HANA: Me?
37 D ROZ: You've got the steadiest hands.
38 A ¶ Hana sets the case on the seat and picks up the lamp.
39 A Her hand does shake.
40 A She sees it and steadies it with the other.
41 A Navin pulls a lever.
* 42 A The brake groans.
* 43 A The car jolts and holds.
44 D TOMAS: We're locked.
45 D OSEI: Everyone breathe.
46 A ¶ They do.
* 47 A For a moment, only the sound of six people inhaling.
* 48 A Then the panel chimes: FAULT ISOLATED.
* 49 A HOLD POSITION.
50 D OSEI: Tomas, confirm.
51 D TOMAS: Confirmed. We're not going anywhere.
52 A ¶ Osei lets go of the rail.
53 A Her fingers have gone white.
54 A She looks around the car at each of them in turn: Tomas calm, Hana trembling, Navin sweating, Collin ashen, Roz watching Collin.
55 D ROZ (low, to Osei): He knows something.
56 D OSEI (low): I know he does.
57 A ¶ Collin looks away.

### SCENE s02203 | INT. SHUTTERED OBSERVATORY - DOME ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELSPETH COURTENAY, LACHLAN MURRAY, OKSANA PETRENKO, HAMZA YILMAZ, CECILIA ROSSI
* 1 A ¶ A giant telescope under a retractable roof.
* 2 A The slit is open; a sliver of starry sky shows.
* 3 A Wooden floors creak underfoot.
* 4 A A single reading lamp glows.
5 A ¶ Five people sit in a rough circle of folding chairs, bags at their feet.
6 A ¶ ELSPETH COURTENAY (50s, ex-intelligence, tweed jacket) holds a silver thermos.
7 A LACHLAN MURRAY (30s, analyst, rumpled shirt) taps a laptop.
8 A OKSANA PETRENKO (40s, courier, fingerless gloves) stares at the floor.
9 A HAMZA YILMAZ (50s, broker, wool coat) picks at his cuticles.
10 A And CECILIA ROSSI (20s, junior, very new) sits on the edge of her chair like someone about to be called on.
11 A ¶ Nobody is talking.
* 12 A Then:
13 D ELSPETH: Let's be clear about why we're here.
14 D LACHLAN: Because someone leaked.
15 D ELSPETH: Because someone is about to.
16 D HAMZA: You can't know that.
17 D ELSPETH: I know what I can prove and I know what I can feel.
18 D OKSANA (muttering): Feelings. Wonderful.
19 D ELSPETH: Oksana, if you have a comment, make it to the room.
20 D OKSANA: I said, feelings are not evidence.
21 D ELSPETH: No. But they're how I've stayed alive.
22 D CECILIA: Excuse me, may I ask something?
23 D ELSPETH: You may.
24 D CECILIA: Why are we meeting in an observatory?
25 D LACHLAN: Nobody listens in an observatory.
26 D HAMZA: Nobody comes to an observatory.
27 D OKSANA: Nobody knows where it is.
28 D ELSPETH: All three.
29 D CECILIA: But the roof is open.
30 D ELSPETH: It always is.
31 D LACHLAN (to himself): That's actually a point.
32 D ELSPETH: Lachlan, your laptop. Is it on the network?
33 D LACHLAN: Offline.
34 D ELSPETH: Prove it.
35 D LACHLAN: Mm. Sure.
36 A ¶ He turns the screen outward.
* 37 A Airplane mode, no Wi-Fi bars, no Bluetooth.
38 A She nods.
39 D ELSPETH: Hamza. Phone.
40 D HAMZA: In the car.
41 D ELSPETH: Oksana.
42 D OKSANA: Faraday bag.
43 D ELSPETH: Cecilia.
44 D CECILIA: I, um. I left mine at home.
45 D ELSPETH: Good girl.
46 D ELSPETH: Now. To business.
47 D HAMZA: I have a question first.
48 D LACHLAN: I have a question first.
49 D ELSPETH: Make it quick.
50 D HAMZA: If the leak is among us, how do we find it?
51 D ELSPETH: We don't find it. We feed it.
52 D LACHLAN: Feed it what?
53 D ELSPETH: Something false.
54 D OKSANA: And watch where it surfaces.
55 D ELSPETH: Exactly.
56 D CECILIA: But what if we're wrong?
57 D ELSPETH: Then the false information surfaces nowhere and we have wasted a night.
58 D HAMZA: And if we're right?
59 D ELSPETH: Then someone in this room will be very unhappy by dawn.
* 60 A ¶ A long pause.
* 61 A The telescope creaks overhead as the dome shifts a few degrees in the wind.
* 62 A A thin blade of starlight slides across Cecilia's face.
63 A She flinches.
64 D LACHLAN: Who writes the false information?
65 D ELSPETH: I do.
66 D OKSANA: And who delivers it?
67 D ELSPETH: You do. Tomorrow. To three different contacts.
68 D OKSANA: One for each of us?
69 D ELSPETH: Exactly one for each of you.
70 D HAMZA: And me?
71 D ELSPETH: You'll get a different story. A better one.
72 D HAMZA: Why better?
73 D ELSPETH: Because you are more careful than the others.
74 D HAMZA (muttering): I don't know whether to be flattered.
75 D ELSPETH: Don't be.
76 D LACHLAN: Elspeth, how long until dawn?
77 D ELSPETH: Seven hours.
78 D CECILIA: Can we leave before dawn?
79 D ELSPETH: No.
80 D CECILIA: Not even to use the restroom?
81 D ELSPETH: You may use the restroom. Take Oksana.
82 D OKSANA: Why me?
83 D ELSPETH: Because you're the only one who won't talk to her.
84 D OKSANA (to herself): Tremendous.
85 A ¶ She stands.
86 A Cecilia stands.
87 A The two cross the dome room, their footsteps echoing, and exit through a door at the far end.
88 A ¶ The three remaining watch them go.
* 89 A The lamp flickers.
90 D HAMZA (very low): She doesn't suspect, does she?
91 D ELSPETH: Cecilia?
92 D HAMZA: Oksana.
93 D ELSPETH: Oksana suspects everyone. That is why I trust her.
* 94 A ¶ Overhead, a single shooting star crosses the open slit of sky.
95 A Nobody sees it but Lachlan, who watches until it is gone.

### SCENE s02204 | INT. AMBULANCE BAY - RURAL HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): AMARA NWOSU, BEN, HOLLOWAY, PARAMEDIC FIONA GALLAGHER, MARCEL DUPRE, DISPATCH
* 1 A ¶ Sodium lights, wet pavement.
* 2 A The bay doors yawn open to a rainy road.
* 3 A Gurneys and oxygen tanks line the wall.
* 4 A A radio on a shelf murmurs static.
5 A ¶ DR. AMARA NWOSU (40s, ER attending, damp scrubs) paces.
6 A NURSE BENEDICT "BEN" HOLLOWAY (30s, steady hands) checks a crash cart.
7 A PARAMEDIC FIONA GALLAGHER (30s, reflective jacket) stands by the doors, watching the road.
8 A ¶ Ben spots lights on the wet road.
9 A He nods at Fiona.
10 D BEN: They're here.
* 11 A ¶ An ambulance backs in, rear doors swinging.
* 12 A A gurney comes out fast.
13 A On it lies MARCEL DUPRE (50s, farmer, soaked flannel), pale and sweating.
* 14 A ¶ A radio on Fiona's shoulder crackles.
15 D DISPATCH [V.O.]: Unit Four, status on your patient? Over.
16 D FIONA (into radio): Unit Four. Arrived. Transferring now.
17 D DISPATCH [V.O.]: Copy, Four.
18 D AMARA: Fiona, what do you have?
19 D FIONA: Fifty-one-year-old male, chest pain, diaphoretic. BP eighty over fifty. Nitro given. No relief.
20 D AMARA: Ben, get a twelve-lead.
21 D BEN: On it, Doctor.
22 A ¶ He attaches the leads in four fast movements.
* 23 A The monitor shows a ragged line.
24 D BEN [CONT'D]: He's in V-fib.
25 D AMARA: Charge to two hundred.
26 D BEN: Charging.
27 D AMARA: Everybody clear.
28 D FIONA: Everybody clear.
29 A ¶ The shock lifts Marcel's back off the gurney.
* 30 A The monitor squeals.
* 31 A Flat.
32 D AMARA: Again.
33 D BEN: Charging. Three hundred.
34 D AMARA: Clear!
* 35 A ¶ Another shock.
36 A Marcel convulses.
* 37 A The monitor shows nothing.
* 38 A Then a blip.
* 39 A Another.
* 40 A The line settles into a ragged rhythm.
41 D BEN: We have a pulse.
42 D AMARA: Ben, breathe.
43 D BEN: I am breathing.
44 D AMARA: Then stop saying it out loud.
45 A ¶ Fiona, hands on her knees, lets out a short laugh.
46 A Ben wipes his forehead.
* 47 A The radio crackles again.
48 D DISPATCH [V.O.]: Unit Four, we have another call, motor vehicle collision, route nine. Can you respond? Over.
49 A ¶ Fiona looks at Amara.
50 A Amara looks at Fiona.
51 A Neither says anything.
* 52 A Rain drums on the bay roof.
53 D FIONA (into radio): Dispatch, Unit Four. Responding.
54 D AMARA: Fiona, you've been up thirty hours.
55 D FIONA: Thirty-one. Who's counting?
56 D AMARA: Ben is. Aren't you, Ben?
57 D BEN: Thirty-two, actually.
58 A ¶ Fiona grins, tired.
59 A She grabs her kit and jogs for the ambulance.
* 60 A The doors slam.
* 61 A The siren wails.
* 62 A The headlights swing across the bay and are gone.
63 A ¶ Amara turns to the gurney.
64 A Marcel's eyes flutter open.
65 A He grips her sleeve.
66 D MARCEL (faint): I'm sorry for the trouble.
67 D AMARA: No trouble, Mr. Dupre.
68 A ¶ She nods to Ben.
69 A Together they wheel him inside.

### SCENE s02205 | INT. WEDDING CAKE BAKERY - BACK KITCHEN - DAY
Detected names (may be incomplete or contain aliases): CORKY, BANKS, PRIYANKA SHAH-WILLIAMS, DEMI, OKORO, VALENTINA CRESPO
* 1 A ¶ Flour in the air.
* 2 A Sheet pans, piping bags, a six-tier cake in the middle of the floor leaning ever so slightly to the left.
* 3 A A clock says 2:14.
* 4 A The wedding is at 3:00.
5 A ¶ CORNELIUS "CORKY" BANKS (50s, head baker, flour-dusted apron) holds his head in his hands.
6 A His sous-chef PRIYANKA SHAH-WILLIAMS (30s, hairnet, eyes of steel) circles the cake with a ruler.
7 A Their apprentice DESMOND "DEMI" OKORO (teen, oversized chef whites) holds a piping bag like a weapon.
8 A And the bride's mother, MRS. VALENTINA CRESPO (60s, hat the size of a hubcap), stands in the doorway with her arms crossed.
9 D CORKY: It's fine. It's totally fine.
10 D PRIYANKA: It's leaning, Corky.
11 D CORKY: Everything leans. The Tower of Pisa leans.
12 D PRIYANKA: The Tower of Pisa isn't going to be eaten by two hundred guests.
13 D MRS. CRESPO: Is something wrong with my daughter's cake?
14 D CORKY: No, Mrs. Crespo.
15 D PRIYANKA: Yes.
16 D CORKY (to Priyanka): Stop helping.
17 D DEMI: Chef, I can fix it.
18 D CORKY: No, Demi.
19 D DEMI: With dowels.
20 D PRIYANKA: He's actually right.
21 D CORKY: Demi has never used a dowel in his life.
22 D DEMI: I've used toothpicks.
23 D CORKY: Toothpicks are not dowels.
24 A ¶ Mrs. Crespo marches in.
25 A She stops at the cake, takes off her hat, puts it on the counter, and rolls her sleeves.
26 D MRS. CRESPO: Show me where the dowels are.
27 D CORKY: Mrs. Crespo, please.
28 D MRS. CRESPO: Cornelius. I raised four children and buried two husbands. I can handle a dowel.
29 A ¶ Priyanka hands her a bundle.
30 A Corky sits down on a flour sack and puts his head back in his hands.
31 A Demi steps in, holds the cake steady with both palms, and braces his feet.
32 D DEMI: Is this how they do it in movies?
33 D PRIYANKA: No.
34 D DEMI: What do they do?
35 D PRIYANKA: They hire a better apprentice.
36 A ¶ He grins.
37 A She grins back, almost.
38 A Mrs. Crespo drives the first dowel through the top three tiers with a surgeon's precision.
* 39 A The cake groans.
* 40 A Settles.
* 41 A Straightens.
42 A All four of them hold their breath.
43 D MRS. CRESPO: There.
44 D CORKY (not looking up): Is it straight?
45 D PRIYANKA: It's straight.
46 D CORKY: Tell me honestly.
47 D DEMI: It's very straight, Chef.
48 A ¶ Corky lifts his head.
* 49 A The cake stands tall and perfect.
50 A He lowers his hands, stunned.
51 D CORKY: Mrs. Crespo, I owe you my career.
52 D MRS. CRESPO: You owe me a slice.
53 D PRIYANKA: That's actually the bride's slice.
54 D MRS. CRESPO: Then you owe me two.
* 55 A ¶ The clock ticks to 2:20.
56 A Priyanka claps once, sharply.
57 D PRIYANKA: Frosting touch-ups. Demi, the roses. Corky, the transport van.
58 D CORKY: The van is in the shop.
59 D PRIYANKA: You told me it was fixed.
60 D CORKY: I told you it was fixed in my heart.
* 61 A ¶ Silence.
62 A Mrs. Crespo lifts her hat from the counter, puts it back on her head, and picks up her car keys.
63 D MRS. CRESPO: I have a station wagon.
64 D CORKY: Mrs. Crespo, it's a six-tier cake.
65 D MRS. CRESPO: Cornelius, I have a very large station wagon.
66 A ¶ He looks at her.
67 A At the cake.
68 A At Priyanka, who shrugs, and at Demi, who is already carrying a tray of roses toward the back door.
69 D CORKY: Fine. We're doing this.
70 D PRIYANKA: We're doing this.
71 D DEMI: We're doing this!
72 D MRS. CRESPO: Somebody open the door.

### SCENE s02206 | EXT. ABANDONED SKATE PARK - SUNSET
Detected names (may be incomplete or contain aliases): WILLA PRZYBYLSKI, MATEO ARROYO-BELL
* 1 A ¶ Cracked concrete bowls.
* 2 A Graffiti.
* 3 A A single streetlamp flickers on.
* 4 A The sky is the colour of a bruise going yellow.
5 A ¶ WILLA PRZYBYLSKI (16, buzzcut, borrowed jacket) sits on the lip of a bowl, a board across her knees.
6 A Below, MATEO ARROYO-BELL (17, tall, band-aids on his elbows) rolls a loose wheel with one finger.
7 D WILLA: You're leaving tomorrow.
8 D MATEO: Bus is at seven.
9 D WILLA: Don't say goodbye.
10 D MATEO: I wasn't going to.
11 D WILLA: Good.
12 A ¶ He kicks up the board and drops into the bowl.
13 A Rolls up the far wall and hangs, weightless, for one second.
14 A Comes down.
15 A She watches, lips pressed.
16 D MATEO: Ride with me.
17 D WILLA: I'm not wearing pads.
18 D MATEO: Nobody's watching.
19 A ¶ She stands and drops in.
20 A Wobbles.
21 A Recovers.
22 A They carve opposite walls, passing in the middle, never colliding.
23 D WILLA: Don't forget me.
24 D MATEO: Don't forget me.
25 A ¶ They stop at the bottom, boards ticking, and neither speaks.

### SCENE s02207 | INT. DEEP-SPACE HABITAT - COMMON ROOM - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): MAYA THORNQUIST, AMBROSE BEAUMONT, TARIQ SALEH, LINNEA SORENSEN, KOFI MENSAH, GRIGORI PETROV
* 1 A ¶ Dim amber lighting.
* 2 A A long table bolted to the floor, six mugs, a hydroponic wall of drooping lettuce.
* 3 A A viewport shows a black field of stars.
* 4 A Outside, nothing.
5 A ¶ MAYA THORNQUIST (40s, station chief, ponytail) pours coffee substitute.
6 A DR. AMBROSE BEAUMONT (60s, botanist, cardigan) pokes at a lettuce leaf.
7 A TARIQ SALEH (30s, engineer, wrench in his belt) stares at his tablet.
8 A LINNEA SORENSEN (20s, comms officer) eats a protein bar.
9 A KOFI MENSAH (30s, medic, stethoscope) sketches in a notebook.
10 A And GRIGORI PETROV (50s, security, arms folded) leans on the wall.
11 D MAYA: Morning, everyone.
12 D LINNEA: It's night cycle.
13 D MAYA: Morning for me.
* 14 A ¶ Light chuckles.
15 A Tariq doesn't look up from his tablet.
16 A Kofi turns a page.
17 A Grigori's jaw works.
18 D TARIQ: Maya, the coolant readings are off again.
19 D MAYA: How off?
20 D TARIQ: Point three. Same as yesterday.
21 D MAYA: Same as yesterday is fine.
22 D TARIQ: Same as yesterday is a trend.
23 D MAYA (to the room): Tariq thinks we're going to explode.
24 D AMBROSE: We might.
25 D LINNEA: Ambrose, don't.
26 D AMBROSE: It's a statistical possibility.
27 D KOFI: Everything is.
28 A ¶ Grigori pushes off the wall and crosses to the table.
29 A He sits.
30 A He doesn't speak.
31 D MAYA: Grigori, you're quiet.
32 D GRIGORI: Am I?
33 D MAYA: You're always quiet.
34 D GRIGORI: Then I'm normal.
35 A ¶ Linnea snorts.
36 A Ambrose smiles, pleased.
37 A Tariq finally sets down his tablet.
38 D TARIQ: Maya. I need to say something.
39 D MAYA: Go ahead.
40 D TARIQ: I think someone's been tampering with the cooling loop.
* 41 A ¶ The room stills.
42 A Kofi's pencil stops.
43 A Ambrose lowers his leaf.
44 D MAYA: Someone.
45 D TARIQ: Someone on board.
46 D GRIGORI: That's a serious accusation.
47 D TARIQ: It's a serious loop.
48 D MAYA (to the room): Does anyone know anything about this?
49 A ¶ Nobody answers.
* 50 A The lights pulse, dim, brighten.
51 A Linnea's bar crumbles in her fist.
* 52 A Grigori's chair creaks.
53 D MAYA [CONT'D] (to herself): Of course.
54 D KOFI: Maya?
55 D MAYA: Nothing.
* 56 A ¶ A low tone rings through the hull.
* 57 A Not an alarm.
* 58 A Deeper.
* 59 A The amber lights flicker to red.
60 D LINNEA: That's the pressure alert.
61 D TARIQ: That's not the pressure alert. That's the coolant.
62 D AMBROSE: Is it the end?
63 D MAYA: It's not the end.
64 D GRIGORI (softly): It might be.
65 A ¶ Everyone turns to look at him.
66 A His hand has found something in his pocket.

### SCENE s02208 | INT. OFFICE PARKING LOT - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): AUDREY KOLLMAN, NATHANIEL PARK, BO, LAFAYETTE, PRUDENCE TRAN, HR
* 1 A ¶ Rows of cars.
* 2 A A cloud of exhaust.
* 3 A An orange sunset hits the glass tower above.
* 4 A A corporate banner reads SYNERGY AWAITS.
5 A ¶ AUDREY KOLLMAN (50s, VP of Operations, severe bun) sits in her sedan with the window down, a cardboard box in the passenger seat.
6 A Next to the car, her former assistant NATHANIEL PARK (20s, lanyard, nervous) holds a sad potted fern.
7 A In the next row, security guard BEAUREGARD "BO" LAFAYETTE (60s, reflective vest) leans on his golf cart.
8 A And PRUDENCE TRAN (40s, HR, cardigan) walks up, clipboard in hand.
9 D PRUDENCE: Audrey. I'm sorry.
10 D AUDREY: Don't be sorry. Be efficient.
11 D NATHANIEL: I brought your fern.
12 D AUDREY: Thank you, Nathaniel.
13 D BO: Ma'am, is there anything I can carry?
14 D AUDREY: No. Thank you, Beauregard.
15 D BO: It's Bo.
16 D AUDREY: Bo. Of course.
17 A ¶ Nathaniel sets the fern on the roof of her car.
18 A Prudence flips a page on her clipboard.
19 D PRUDENCE: There are a few forms.
20 D AUDREY: There are always forms.
21 D NATHANIEL: I can fill them out for you.
22 D PRUDENCE: Nathaniel, no.
23 D NATHANIEL: Sorry.
24 D BO (low): It's a shame.
25 D PRUDENCE: It's company policy.
26 D BO: I know. It's still a shame.
27 A ¶ Audrey starts the engine.
* 28 A It idles.
29 A She doesn't put the car in gear.
30 A The four of them stand in the long amber light, none of them moving.
31 D AUDREY: Well. This has been a long twelve years.
32 D NATHANIEL: It was an honour.
33 D AUDREY: Was it?
34 D NATHANIEL: It was a lot of things.
35 A ¶ She laughs, a quick, surprised sound.
36 A Prudence smiles.
37 A Bo tips his cap.
38 A Audrey puts the car in gear, takes the fern from the roof, and sets it on the passenger seat on top of the box.
39 D AUDREY [CONT'D]: Water it on Thursdays.
40 D NATHANIEL: It's yours.
41 D AUDREY: It was always yours.
42 A ¶ She drives away.
43 A They watch her go, three small figures in the light.

### SCENE s02209 | EXT. DRY-DOCK SHIPYARD - ROWING TANK - DAWN
Detected names (may be incomplete or contain aliases): NAOMI BERENSON, COACH ILSE VORHEES
* 1 A ¶ A vast concrete basin, drained and refilled with grey-green water, used by the old shipyard for hull testing and now, secretly, as a rowing course.
* 2 A Rusted cranes loom like skeletal herons.
* 3 A Mist lies on the surface.
* 4 A ¶ A racing shell sits at the dock, a single scull, polished cedar.
5 A Beside it stands NAOMI BERENSON (30s, Olympic hopeful, lean, hair cropped) in a rain jacket, hands on hips, studying the water.
6 A Her breath fogs.
7 A Her calf muscles twitch.
8 A She is alone, and she has been alone for a long time.
9 A ¶ She crouches, tests the water with two fingers, wipes them on her thigh.
10 A She sets the scull in the water and lowers herself into it with one fluid movement.
* 11 A The oars dip.
12 A ¶ She begins to row.
* 13 A ¶ The scull glides across the basin.
14 A Her stroke is long and exact.
* 15 A The mist parts, closes behind her.
* 16 A A gull cries.
* 17 A Somewhere beyond the cranes a siren is heard and fades.
18 A ¶ She reaches the far end, turns the shell with two pulls, and comes back.
19 A Faster now.
* 20 A The oars bite deeper.
21 A Her shoulders flare, her breath hitches, and the water boils behind the blades.
22 A ¶ At the dock, a figure has appeared.
23 A A woman in a heavy wool coat, thermos in hand, standing absolutely still.
24 A This is COACH ILSE VORHEES (60s, grey crop, stern as a gravestone).
25 A She watches the scull approach.
26 A ¶ Naomi sees her.
27 A Her stroke falters.
28 A The right oar catches the water at a bad angle and the boat veers.
29 A She corrects it.
30 A Her breath is ragged.
31 D COACH VORHEES (calling): Don't stop.
32 D NAOMI (between breaths): I'm not stopping.
33 D COACH VORHEES: Then why are you slowing?
34 D NAOMI: I'm not.
35 D COACH VORHEES: Look at the clock.
36 A ¶ Naomi glances at the waterproof watch strapped to the bow.
37 A Her face falls.
* 38 A Six minutes fifty.
* 39 A Not good enough.
40 D NAOMI: I'm having an off day.
41 D COACH VORHEES: You've been having an off day for a year.
* 42 A ¶ The scull glides the last twenty metres.
43 A Naomi ships the oars, lets the boat drift to the dock, and sits there gasping.
44 A Vorhees crouches, extends a hand.
45 A Naomi takes it and is hauled out onto the concrete.
46 A She sits against a bollard, chest heaving.
47 D NAOMI: Why are you here?
48 D COACH VORHEES: To tell you that Beijing is eleven weeks away.
49 D NAOMI: I know when Beijing is.
50 D COACH VORHEES: Do you? Because you row like someone who has forgotten.
51 A ¶ Naomi stares at the water.
* 52 A The scull rocks gently at its mooring.
53 A Vorhees unscrews the thermos and pours tea into the cap.
54 A She hands it over.
55 D COACH VORHEES [CONT'D]: Drink.
56 A ¶ Naomi drinks.
* 57 A The steam rises between them.
58 D NAOMI: I think I'm done.
59 D COACH VORHEES: You think.
60 D NAOMI: I know.
61 D COACH VORHEES: Then say it properly.
62 A ¶ Naomi looks at her.
63 A Looks away.
* 64 A The cranes, the mist, the grey water.
65 D NAOMI: I can't do it anymore.
* 66 A ¶ Silence.
67 A The thermos cap trembles in her hands.
68 A Vorhees does not speak for a long time.
69 A Then she sits down on the concrete beside her, heavily, like a woman putting down a load she has carried too long.
70 D COACH VORHEES: Do you know why I came this morning?
71 D NAOMI: To tell me I'm slow.
72 D COACH VORHEES: To tell you that I stopped timing you in March.
73 A ¶ Naomi turns, slowly.
74 D COACH VORHEES [CONT'D]: Every split since March was a lie. I wrote down numbers I knew you'd hit. You've been faster than you think for months.
75 D NAOMI: That's not funny.
76 D COACH VORHEES: I'm not laughing.
77 D NAOMI: Why?
78 D COACH VORHEES: Because you needed someone to lie to you.
* 79 A ¶ The sun breaks over the cranes.
* 80 A Light floods the basin.
* 81 A The mist burns off in a single rolling wave, and the water flashes gold.
82 A Naomi starts to laugh.
83 A It turns into something between laughing and weeping.
84 A Vorhees puts an arm around her.
85 A Neither of them looks at the other.
86 D NAOMI: You're awful.
87 D COACH VORHEES: I'm your coach.
88 A ¶ Naomi wipes her face with her sleeve.
89 A She looks at the scull, already steaming in the sun.
90 D NAOMI: Again?
91 D COACH VORHEES: Again.

### SCENE s02210 | INT. FUNERAL PARLOUR - SIDE ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): MAEVE FINNEGAN, DECLAN, BRENDAN, AOIFE, THADDEUS KRANE
* 1 A ¶ A narrow room of dusty velvet.
* 2 A A tea urn steams in the corner.
* 3 A The funeral next door has just ended; muffled organ music drifts through the wall.
* 4 A On a cloth-draped table, a photograph of an elderly man in a fishing hat.
5 A ¶ Five mourners remain.
6 A ¶ MAEVE FINNEGAN (70s, widow, black dress, chin high) stands at the photograph, straightening it for the third time.
7 A Her sons: DECLAN (40s, suit too tight, tie pulled loose) leans on the urn and drinks from a styrofoam cup, and BRENDAN (40s, rumpled, red-eyed) sits on a folding chair staring at his shoes.
8 A Their cousin AOIFE (30s, bright scarf) pours milk into her tea with great concentration.
9 A And a stranger, a man in a rain-darkened trench coat, lingers by the door: MR. THADDEUS KRANE (60s, thin, polite).
10 A ¶ Nobody speaks.
11 D DECLAN: Ma. Sit down.
12 D MAEVE: I'm fine standing.
13 D DECLAN: You've been on your feet since seven.
14 D MAEVE: So has he.
15 A ¶ She nods at the photograph.
16 A Declan lowers the cup.
17 A Brendan lets out a small, wet laugh and wipes his nose with his wrist.
18 D AOIFE: Would anyone like a biscuit?
19 D BRENDAN: I would.
20 D DECLAN: They're stale.
21 D BRENDAN: I don't care.
22 A ¶ She brings him the plate.
23 A He takes one, holds it, doesn't eat.
24 A Maeve turns from the photograph and looks at the stranger by the door.
25 D MAEVE: You're not family.
26 D KRANE: No, madam.
27 D MAEVE: Then who are you?
28 D KRANE: I worked with your husband. Years ago. At the shipyard.
29 D MAEVE: Frank never said.
30 D KRANE: He wouldn't have. We weren't friends.
31 D DECLAN: Then why are you here?
32 D KRANE: Because he did me a kindness once. And I never repaid it.
33 A ¶ Maeve crosses the room, slowly, shoes clicking.
34 A She stops in front of him, studies his face, and takes his hands in both of hers.
35 D MAEVE: Take your coat off. You'll catch your death.
36 D KRANE: Madam, I really should go.
37 D MAEVE: You'll have tea.
* 38 A ¶ It isn't a question.
39 A Krane lets her pull the coat off his shoulders.
40 A She hands it to Aoife, who hangs it carefully.
41 A Declan and Brendan exchange a glance.
42 A Then Brendan, abruptly, pushes the plate of biscuits across the table toward the stranger.
43 D BRENDAN: They're stale.
44 D KRANE (a small smile): So I understand.
45 A ¶ He takes one.
46 A Maeve pours a cup, hands it to him, and for a moment the only sound is the muffled organ from next door, carrying one slow chord after another, and the clink of five spoons in five cups.
* 47 A ¶ Then the music stops.
* 48 A A door opens somewhere in the building.
* 49 A Footsteps, voices, laughter.
* 50 A The funeral is over.
51 A They stand in the quiet and do not go out.

### SCENE s02211 | EXT. DESERT CANYON FLOOR - DAY
Detected names (may be incomplete or contain aliases): RIGO, SALAZAR, WOMAN, BLUE BLAZER, HEAVYSET MAN, GIRL, TESS, IMANI
* 1 A ¶ Orange rock, white sky.
* 2 A A dry wash cuts the canyon floor.
* 3 A A crashed single-engine plane lies nose-down in the sand, one wing bent.
4 A ¶ Four survivors sit in the narrow shade of the other wing.
5 A ¶ RIGOBERTO "RIGO" SALAZAR (40s, pilot, blood-crusted shirt) tears a seat cushion for padding.
6 A A WOMAN IN A BLUE BLAZER (30s, torn sleeve) rations water into a tin cap.
7 A A HEAVYSET MAN (50s, glasses cracked) stares at the horizon.
8 A A teenage GIRL (15, headphones around her neck) draws in the dust with a stick.
9 A ¶ The woman hands the cap to the man.
10 A He sips and passes it to the girl.
11 A She drinks, hesitates, and offers it to Rigo, who shakes his head.
12 D RIGO: Keep it.
13 D WOMAN: You haven't had any.
14 D RIGO: I'm fine.
15 D WOMAN: You're bleeding.
16 D RIGO: It's old blood.
17 A ¶ She takes the cap back.
18 A He looks at the others and clears his throat.
19 D RIGO [CONT'D]: We stay with the plane. They look for planes.
20 D HEAVYSET MAN: Who's they?
21 D RIGO: Search and rescue.
22 D HEAVYSET MAN: They know we're down?
23 D RIGO: They will.
24 A ¶ The girl scratches a circle in the sand.
25 A The woman watches it.
26 A The man in glasses looks at the girl, and then at the sky, and then at his hands.
27 D WOMAN: He's lying.
28 D HEAVYSET MAN: Who?
29 D WOMAN: The pilot.
30 D RIGO: I'm Rigo.
31 D WOMAN: You're lying, Rigo.
32 D RIGO: I'm telling the truth as I know it.
33 A ¶ The Heavyset Man lowers his head.
* 34 A A single dust devil rises from the wash, spins across the canyon floor, and dies against the wreck.
35 A Nobody moves.
36 D GIRL (very quiet): My name's Tess.
37 A ¶ Everyone looks at her.
38 D TESS: In case it matters.
39 D WOMAN: It matters, Tess.
40 D TESS: It's just. Nobody asked.
41 A ¶ The Heavyset Man lifts his head.
42 D HEAVYSET MAN: I'm Gideon.
43 A ¶ The Woman in the Blue Blazer closes her eyes.
44 D WOMAN (after a moment): Imani.
45 A ¶ The four of them sit in the narrow shade, strangers with names.
46 D IMANI: Rigo. How far to the road?
47 D RIGO: Far enough.

### SCENE s02212 | INT. FERRY TERMINAL - IMPROVISED TRIAGE BAY - NIGHT
Detected names (may be incomplete or contain aliases): YUSUF ADEYEMI, NURSE PILAR GUZMAN, CORMAC DOYLE
* 1 A ¶ A waiting hall turned field hospital.
* 2 A Plastic chairs shoved to the walls, a departures board stuck on CANCELLED.
* 3 A Camp cots in rows.
* 4 A Generator hum, the slap of waves against the pier beyond the glass.
5 A ¶ DR. YUSUF ADEYEMI (50s, trauma surgeon, bloody gloves) bends over a cot.
6 A Opposite him, NURSE PILAR GUZMAN (30s, ponytail, steady as granite) holds a surgical lamp.
7 A Between them lies CORMAC DOYLE (40s, ferry deckhand, soaked, grey-lipped), his shirt cut open, a deep gash across his abdomen packed with gauze.
8 D YUSUF: Pressure?
9 D PILAR: Ninety over sixty. Holding.
10 D YUSUF: It won't hold.
11 D PILAR: It's holding now.
12 D YUSUF: Now is not a plan.
13 A ¶ He peels back the gauze.
* 14 A A seep of dark blood.
15 A Cormac groans, eyes rolling.
16 A Pilar steadies the lamp.
17 D YUSUF [CONT'D] (to the room): I need a clamp, a suction, and someone who isn't afraid of blood.
* 18 A ¶ Nobody answers.
* 19 A The hall is empty but for the three of them and rows of vacant cots.
20 A Pilar looks at him.
21 D PILAR: There's no one else, Doctor.
22 D YUSUF: Then you.
23 D PILAR: I'm holding the lamp.
24 D YUSUF: Put the lamp on the cot.
25 A ¶ She sets it down.
* 26 A The beam angles up across their faces.
27 A Yusuf takes a clamp from the tray and pushes it into the wound.
28 A Pilar takes the suction, slides it in beside his hand.
29 A Both lean in.
30 A Both are still.
* 31 A A heartbeat passes.
* 32 A Another.
33 D CORMAC (weak, muttered): Mam?
34 D PILAR: He's talking.
35 D YUSUF: That's good. That's very good.
36 D PILAR: Is it?
37 D YUSUF (to himself): It better be.
38 A ¶ Cormac's eyes open, unfocused, searching the ceiling.
39 D CORMAC: Is the boat sinking?
40 D YUSUF: No. The boat's fine.
41 D CORMAC: I can hear the water.
42 D YUSUF: That's the pier. Lie still.
43 D CORMAC: My mam's waiting at the dock.
44 D PILAR (gently): Cormac. Look at me.
45 A ¶ He turns his head.
46 A His gaze finds her.
47 D PILAR [CONT'D]: You're in good hands.
48 D CORMAC: Are you the doctor?
49 D PILAR: I'm the one who keeps him honest.
50 A ¶ Cormac smiles, a weak twitch.
51 A Yusuf glances at Pilar over the clamp, and something almost like humour crosses his face.
* 52 A ¶ The generator coughs.
* 53 A The lights flicker once, twice, and then go out.
* 54 A Total dark.
* 55 A Waves slam the pier.
* 56 A Somewhere in the black, a monitor begins to alarm.
57 D YUSUF [O.S.]: Pilar. The lamp.
58 D PILAR [O.S.]: I have it.
* 59 A ¶ The battery lamp flares up, small and harsh.
60 A Cormac's face is white.
61 A His chest is not moving.
62 D YUSUF (to himself): No, no, no.
63 A ¶ He drops the clamp and begins compressions, hard and fast, his whole body pumping.
64 A Pilar takes over the lamp and the bag, squeezing air into Cormac's lungs.
65 A They work in a silent rhythm, shoulder to shoulder.
66 D PILAR: Come on, Cormac.
67 D YUSUF: Come on.
68 D PILAR: Come on.
69 D YUSUF: How long?
70 D PILAR: Two minutes.
71 D YUSUF: Keep going.
72 D PILAR: I am.
73 A ¶ Sweat drips from Yusuf's chin onto Cormac's chest.
74 A His arms tremble.
75 A Pilar glances at him.
76 D PILAR [CONT'D]: Switch with me.
77 D YUSUF: No.
78 D PILAR: You're done.
79 D YUSUF: I'm not.
80 D PILAR: Yusuf.
81 A ¶ He stops.
82 A His hands hover.
83 A She bends over Cormac and listens.
* 84 A A long beat.
85 A Then she lifts her head and her face changes.
86 D PILAR [CONT'D]: There.
* 87 A ¶ Faint on the monitor, a single beep.
* 88 A Another.
* 89 A A rhythm.
90 D YUSUF (whispering): Thank God.
91 D PILAR: Don't thank him yet. Keep that clamp in.
92 A ¶ He picks it up.
93 A His hand shakes.
94 A She steadies it with her own.
95 A Both of them stay like that, hands clasped around cold steel, while the water slaps outside.
96 D CORMAC (barely audible): Mam?
97 D YUSUF: She's coming.
98 D PILAR (softly): Hold on, Cormac.

### SCENE s02213 | INT. DEPARTMENT STORE - SERVICE ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): TEDDY, ROYCE, BASTIEN NOVAK, MOTH
* 1 A ¶ A cargo lift, steel-lined, scarred by trolleys.
* 2 A One bare bulb.
* 3 A The floor indicator is stuck between 3 and 4.
4 A ¶ THEODORA "TEDDY" ROYCE (50s, night cleaner, bucket at her feet) sits on an overturned crate, holding a rosary.
5 A Opposite her, BASTIEN NOVAK (20s, security guard, uniform askew) leans against the wall, torch dead in his hand.
6 A In the corner, a girl in a nightgown, MOTH (9, bare feet, huge eyes), hugs a stuffed rabbit.
7 D TEDDY: How long have we been in here?
8 D BASTIEN: Forty minutes.
9 D TEDDY: It feels like four hours.
10 D BASTIEN: It feels like forty minutes, Teddy.
11 D TEDDY: You counted?
12 D BASTIEN: I looked at my watch.
13 D TEDDY: Your watch stopped.
14 D BASTIEN: It didn't stop.
15 D TEDDY: Show me.
16 A ¶ He turns his wrist.
* 17 A The second hand is frozen at 11:47.
18 A He stares at it.
19 A Looks up.
20 A Then his face gives away nothing at all.
21 D BASTIEN: It's the battery.
22 D TEDDY: It's the elevator.
23 D BASTIEN: Elevators don't stop watches.
24 D TEDDY: This one does.
25 D MOTH: Teddy, I'm cold.
26 D TEDDY: I know, sweetheart.
27 D MOTH: Can we go home?
28 D BASTIEN: Where's home, kid?
29 D MOTH: Down.
30 D BASTIEN: Down where?
31 D MOTH: Down below the basement.
* 32 A ¶ Silence.
33 A Teddy lowers her rosary.
34 A Bastien's mouth opens, then closes.
35 D BASTIEN: There's no below the basement.
36 D MOTH: There is.
37 D TEDDY: Moth, stop.
38 D MOTH: You said I could tell.
39 D TEDDY: I said you could tell me. Not him.
40 D BASTIEN: Tell me what?
41 D MOTH: That's where they keep the ones who stay.
42 D BASTIEN: Stay where?
43 D MOTH: Stay in the store.
44 D BASTIEN: This is a department store, kid.
45 D MOTH: After closing.
46 A ¶ Teddy puts a hand on Bastien's arm.
47 A He shakes it off.
48 D BASTIEN: Teddy. Who is she?
49 D TEDDY: She's. A friend.
50 D BASTIEN: Whose friend?
51 D TEDDY: She was here before the store was.
52 D BASTIEN: Before the store?
53 D TEDDY: This was a farm. Her family's. Her father sold it. Her mother wouldn't leave.
54 D BASTIEN: That was a hundred years ago.
55 D TEDDY: One hundred and eleven.
56 D MOTH: I'm nine.
57 D BASTIEN: You're nine.
58 D MOTH: Always nine.
* 59 A ¶ The bulb dims.
60 A Bastien backs into the corner, torch up like a club.
61 A Teddy doesn't move.
62 A Moth looks at him, tilts her head, and takes a step.
* 63 A ¶ The bulb pops.
* 64 A Dark.
* 65 A In the black, the elevator groans and begins to descend.
* 66 A The only sound is the rabbit being squeezed, a thin squeak, and a girl's voice humming a lullaby that is somehow older than anything in the building.
* 67 A ¶ Bastien's torch clicks on, flickers, shows the lift empty but for the bucket and the crate.
* 68 A Teddy's rosary lies on the floor.
* 69 A A small wet footprint beside it, bare and tiny.
* 70 A Another, leading to the doors.
* 71 A ¶ The lift stops.
72 A The doors open on a long dark corridor, floor tiled in black and white, and at the end of it, a little girl waving.

### SCENE s02214 | INT. LOCKED PENTHOUSE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): KENNETH ADLER-MOSS, NADINE CRUZ, VOICE
* 1 A ¶ Glass walls over a rain-slick city.
* 2 A A desk the size of a pool table.
* 3 A A bank of five monitors, three dark.
* 4 A On the carpet, a spilled glass of scotch and a pair of reading glasses, one lens cracked.
5 A ¶ KENNETH ADLER-MOSS (60s, tycoon, silk shirt open at the throat) sits behind the desk with a phone gripped in both hands.
6 A Sweat beads at his hairline.
* 7 A A pistol lies on the blotter, six inches from his right hand.
8 A He has not touched it.
9 A ¶ Across the desk, in the visitor's chair, a woman.
10 A NADINE CRUZ (30s, black coat, patient eyes) rests her chin on folded hands.
11 A She hasn't spoken in minutes.
* 12 A ¶ A speakerphone on the desk crackles.
13 D VOICE [V.O.]: Mr. Adler-Moss? Mr. Adler-Moss, it's the front desk. We have police in the lobby.
14 D ADLER-MOSS: Tell them. Tell them to come up.
15 D VOICE [V.O.]: Sir, the elevator is out. They'll take the stairs.
16 D ADLER-MOSS: How many floors?
17 D VOICE [V.O.]: Forty-one, sir.
18 D ADLER-MOSS: Forty-one. Christ.
19 A ¶ Nadine unfolds her hands.
20 A Adler-Moss flinches.
21 A She reaches into her coat, slowly, and pulls out a folded sheet of paper.
22 A She slides it across the desk.
23 A He doesn't take it.
24 D NADINE: Read it.
25 D ADLER-MOSS: What is it?
26 D NADINE: Your signature.
27 D ADLER-MOSS: I don't sign things I haven't read.
28 D NADINE: You signed this one.
29 A ¶ He picks it up with two fingers.
30 A Reads.
31 A His colour drains.
32 A He reads it again.
33 D ADLER-MOSS: This is forged.
34 D NADINE: It's notarised.
35 D ADLER-MOSS: By whom?
36 D NADINE: By a man who's very sorry.
* 37 A ¶ The speakerphone crackles.
38 A The lobby voice is shaking now.
39 D VOICE [V.O.]: Sir? Sir, are you there?
40 D NADINE (to the phone, calm): He's here.
41 D VOICE [V.O.]: Who is that?
42 D NADINE: The reason you won't need the police.
43 A ¶ She lifts her hand, finger hovering over the disconnect key.
44 A Adler-Moss lunges for the pistol.
45 A Nadine slams the button.
* 46 A Static.
* 47 A The line goes dead.
48 A ¶ The pistol is in his hand, shaking.
49 A She doesn't move.
50 D ADLER-MOSS: I'll shoot.
51 D NADINE: You won't.
52 D ADLER-MOSS: I will.
53 D NADINE: You can't. It isn't loaded.
54 A ¶ He stares at the gun.
55 A Checks the chamber.
* 56 A Empty.
57 A Checks the magazine.
* 58 A Empty.
59 D NADINE [CONT'D]: I took them out at seven.
60 D ADLER-MOSS: You were here at seven?
61 D NADINE: I've been here since lunch.
* 62 A ¶ Below them, very faintly, boots on concrete.
* 63 A A distant door slamming.
* 64 A Voices.
* 65 A Coming up.
66 A ¶ Nadine stands, buttons her coat, and for the first time smiles.

### SCENE s02215 | INT. UNDERGROUND SQUASH COURT - NIGHT
Detected names (may be incomplete or contain aliases): CITY SQUASH LEAGUE FINALS, COACH WINIFRED BAPTISTE, TOMMIE, VAUGHN, LENORE ASHCROFT
* 1 A ¶ A glass-backed court under a bare basement vault.
* 2 A Brick pillars, pipes, one hanging fluorescent.
* 3 A A banner on the back wall: CITY SQUASH LEAGUE FINALS - TIED 2-2.
4 A ¶ COACH WINIFRED BAPTISTE (50s, weathered, towel around her neck) kneels at the sidewall, tying a young player's shoe.
5 A TOMASINA "TOMMIE" VAUGHN (20s, wiry, headband) bounces a ball against the front wall, thwack, thwack, thwack.
6 D COACH BAPTISTE (to the court): Fifteen minutes. Hydrate.
7 D TOMMIE: Coach, I'm fine.
8 D COACH BAPTISTE: I wasn't talking to you.
9 D TOMMIE: Then who?
10 D COACH BAPTISTE: The universe.
11 A ¶ Tommie laughs.
* 12 A The ball rebounds.
13 A She catches it one-handed.
14 D COACH BAPTISTE [CONT'D]: Tommie. Listen.
15 D TOMMIE: I'm listening.
16 D COACH BAPTISTE: She hits down the wall on every second serve. You know it.
17 D TOMMIE: I know it.
18 D COACH BAPTISTE: Cut it off at the T.
19 D TOMMIE: At the T.
20 D COACH BAPTISTE: And don't go chasing winners. Wait for her to give you one.
21 A ¶ The glass door at the back of the court swings open.
22 A A tall woman in a navy tracksuit enters, bag over one shoulder, the quiet confidence of someone who has never lost in this building.
23 A This is LENORE ASHCROFT (40s, former national champion, silver in her hair).
24 D LENORE: Winnie.
25 D COACH BAPTISTE (without turning): Lenore.
26 D LENORE: Heard you had a final.
27 D COACH BAPTISTE: Heard you were retired.
28 D LENORE: I am. I'm here to watch.
29 D COACH BAPTISTE: Sit anywhere. Not in my line of sight.
30 A ¶ Lenore smiles and takes a seat in the gallery, high up in the dark.
31 A Tommie looks from one to the other.
* 32 A The ball stops.
33 D TOMMIE: Who's that?
34 D COACH BAPTISTE: My old partner.
35 D TOMMIE: She looks like she's judging me.
36 D COACH BAPTISTE: She is.
37 D TOMMIE (muttering): Great. Great.
38 D COACH BAPTISTE (to the court): Fifteen minutes. Hydrate.
39 D LENORE (calling from the gallery): Hit the wall, Tommie. Not the ball.
40 A ¶ Tommie looks up.
* 41 A A long pause.
42 A Then she turns to the front wall and lets the ball go.

### SCENE s02216 | EXT. SALT-LICK CORRAL - DAWN
Detected names (may be incomplete or contain aliases): OLD BASIL TREADWELL, JUNIPER TREADWELL, SEVERIN KOZLOWSKI
* 1 A ¶ A split-rail corral at the edge of the badlands.
* 2 A A single bare cottonwood.
* 3 A Pink light climbing a ridge.
* 4 A Frost on the rails.
* 5 A In the middle, a rangy bay horse tosses its head, tethered to a post.
6 A ¶ Three people.
7 A ¶ OLD BASIL TREADWELL (70s, rancher, leather vest, white whiskers) stands at the rail, rolling a cigarette.
8 A His grown daughter JUNIPER TREADWELL (30s, braid under a battered hat, rifle on her back) crouches at the horse's hoof, pretending to inspect it.
9 A And a hired hand, SEVERIN KOZLOWSKI (30s, quiet, one blue eye and one brown) leans on the post, coiling a lariat.
10 A ¶ Nobody speaks.
11 A Basil licks the paper.
12 A Juniper runs a thumb over the horse's fetlock.
13 D BASIL: Got a stone in there?
14 D JUNIPER: Not yet.
15 D BASIL: Then why're you looking?
16 D JUNIPER: Habit.
17 A ¶ Severin lets the rope fall.
* 18 A The horse stamps.
* 19 A Frost smokes off the ground.
20 D BASIL: Your mother loved this animal.
21 D JUNIPER: I remember.
22 D BASIL: She'd have fed it sugar every morning.
23 D JUNIPER: I remember that too.
24 A ¶ Severin shifts his weight.
25 A Basil does not look at him.
26 A Juniper does.
27 D BASIL: Severin, fetch my saddle.
28 D SEVERIN: It's in the barn, sir.
29 D BASIL: I know where it is.
30 A ¶ Severin doesn't move.
* 31 A The horse tugs at the tether.
32 D JUNIPER: Pa.
33 D BASIL: Don't Pa me.
34 D JUNIPER: He doesn't have to go.
35 D BASIL: He's a hired hand.
36 D JUNIPER: He's staying.
37 A ¶ Basil finally looks at Severin.
* 38 A A long moment.
39 A The old man's eyes are wet but it could be the cold.
40 D BASIL: Fine.
41 A ¶ He finishes rolling the cigarette.
42 A Strikes a match on the rail.
* 43 A The flame trembles in the dawn light.
44 A He lights it.
* 45 A Smoke curls up past the cottonwood.
46 D JUNIPER: You never answered me.
47 D BASIL: About what?
48 D JUNIPER: About the letter.
49 D BASIL: What letter?
50 D JUNIPER: The one you wrote and didn't send.
51 A ¶ Basil takes a long drag.
52 A Severin takes a step toward the horse.
53 A Juniper rises.
54 D BASIL (very quietly): Burn it.
55 D JUNIPER: I read it.
56 D BASIL: Then you know.
57 D JUNIPER: I know you sold the north pasture.
* 58 A ¶ Silence.
* 59 A The horse breathes steam.
60 A Severin takes the lariat and slings it over his shoulder.
61 A Basil hurls the cigarette to the dirt and grinds it under his heel.
62 D BASIL: To him.
63 A ¶ He doesn't point.
64 A He doesn't need to.
65 A Severin looks at the ground.
66 A Juniper looks at Severin.
67 A Then at her father.
* 68 A A thin wind rattles the frost off the cottonwood leaves.
69 D JUNIPER: You sold it to the hired man.
70 D BASIL: It was fair.
71 D JUNIPER: It was my mother's land.
72 D BASIL: It was my land.
73 D JUNIPER: She gave it to you.
74 D BASIL: And I gave it to him. Because he asked.
75 A ¶ Severin lifts his head.
76 A Juniper lunges.
77 A He sidesteps; she slams into the post, hand on his shirt, knuckles white.
* 78 A The horse shies, ropes snapping taut.
79 A Basil steps between them, one arm up, the old man suddenly very strong.
80 D BASIL [CONT'D]: Enough!
81 A ¶ They freeze: Juniper with her fist in Severin's shirt, Severin with both hands raised, Basil with his arm between.
* 82 A The horse screams and settles.
83 A Nobody breathes.
84 D JUNIPER (low, to Severin): You didn't tell me.
85 D SEVERIN: He asked me not to.
86 D JUNIPER (to her father): Why?
87 D BASIL: Because you'd have fought. Like you're fighting now.
88 A ¶ She lets go of the shirt slowly, one finger at a time.
89 A Steps back.
90 A Wipes her mouth.
91 A Looks at the pink light cresting the ridge.
92 D JUNIPER (muttering): Four generations.
93 D BASIL: Five, if you stay.
94 A ¶ She doesn't answer.
95 A She unslings the rifle, props it against the post, and goes to the horse.
96 A She puts her cheek against its neck.
97 A Basil and Severin stand there, apart, while the sun lifts over the ridge and floods the frozen yard.

### SCENE s02217 | INT. VETERINARY HOSPITAL - SURGERY SUITE - 2 A.M.
Detected names (may be incomplete or contain aliases): ISADORA KEMP, TECH PRESTON LI, ARTHUR BELL
* 1 A ¶ Stainless steel, a hush of oxygen.
* 2 A On the table, a golden retriever under anaesthesia, chest rising slow.
* 3 A A heart monitor chirps in a calm rhythm.
4 A ¶ DR. ISADORA KEMP (40s, surgeon, mask down) scrubs at the sink.
5 A TECH PRESTON LI (20s, scrubs with cartoon dogs) prepares instruments.
6 A OWNER MR. ARTHUR BELL (70s, cardigan, trembling) watches from the window of the observation room, his palm flat against the glass.
7 D ISADORA: Preston, ready?
8 D PRESTON: Ready.
9 D ISADORA: Blade.
10 A ¶ He hands it over.
11 A She works without ceremony, a quick incision.
* 12 A The retriever's belly opens clean.
13 A She examines the field, brow furrowing.
14 D PRESTON: How's it look?
15 D ISADORA: Better than the X-ray.
16 D PRESTON: Good.
17 D ISADORA (to herself): Much better.
18 A ¶ She reaches in.
19 A Withdraws a twisted length of blue cloth, glistening.
20 A Holds it to the light.
21 D ISADORA [CONT'D] (to the room): Everyone, we found it.
* 22 A ¶ The intercom crackles.
23 A Mr. Bell's voice, thin and anxious, from the observation room.
24 D MR. BELL [O.S.]: Is that.
25 D ISADORA: A sock, Mr. Bell.
26 D MR. BELL [O.S.]: It's blue.
27 D ISADORA: It is.
28 D MR. BELL [O.S.]: It's Margaret's.
29 D ISADORA: Margaret's sock?
30 D MR. BELL [O.S.]: She left them. When she died. I couldn't throw them away.
31 A ¶ Isadora stops.
32 A Preston looks at her.
33 A She lowers the sock into the tray, quietly, as if it were glass.
34 D ISADORA: Mr. Bell, we'll clean it.
35 D MR. BELL [O.S.]: Please.
36 D ISADORA: Preston, put it in a bag.
37 D PRESTON: Yes, Doctor.
38 D ISADORA: A clean bag.
39 D PRESTON: A very clean bag.
* 40 A ¶ The monitor chirps.
* 41 A The retriever sighs in her sleep.
42 D ISADORA (to herself, almost): Who eats a sock.
43 D PRESTON: A dog in grief.
44 D ISADORA: I think so, yes.
45 A ¶ She resumes.
* 46 A The incision closes under her hands, stitch after stitch.
47 A Preston wipes his eyes with the back of his glove.

### SCENE s02218 | INT. COUNTY JAIL - ATTORNEY VISITING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): CORA WINSLOW-ABBOTT, LILY, MARSTON
* 1 A ¶ A grey cinderblock cell, steel table bolted to the floor, two plastic chairs.
* 2 A A one-way window in the far wall.
* 3 A A fluorescent light buzzes.
4 A ¶ CORA WINSLOW-ABBOTT (30s, defence attorney, rolled sleeves, legal pad) sits with a pen clicking.
5 A Across from her, in an orange jumpsuit, sits LILLIAN "LILY" MARSTON (30s, accountant, cuffed hands, composed face).
6 A Neither has blinked in a while.
7 D CORA: Lily. Start at the beginning.
8 D LILY: I'd rather start in the middle.
9 D CORA: That's not how it works.
10 D LILY: It's how I work.
11 A ¶ Cora sets her pen down.
12 A Folds her hands.
13 D CORA: Where were you at nine on the night of the fourteenth?
14 D LILY: At the office.
15 D CORA: Alone?
16 D LILY: With Brenda. She was in the next room.
17 D CORA: Brenda says she wasn't.
18 D LILY: Brenda says a lot of things.
19 D CORA (to the window): For the record, the client is being difficult.
20 D LILY: I'm not difficult. I'm precise.
21 D CORA: You were precise when you moved four million dollars.
22 D LILY: I was precise when I moved it back.
23 D CORA: Back?
24 D LILY: She took it first.
25 D CORA: Who did?
26 D LILY: Brenda.
27 D CORA: She says you did.
28 D LILY: She lies.
29 D CORA (muttering): They both do.
30 D LILY: What was that?
31 D CORA: Nothing. Notes to myself.
32 A ¶ She scrawls on the legal pad.
33 A Lily watches the pen.
34 D LILY: You think I'm guilty.
35 D CORA: I think you're interesting.
36 D LILY: That's not an answer.
37 D CORA: It's the only honest one I have.
38 D LILY: Fine.
39 A ¶ She leans back.
* 40 A The chain between her wrists clinks against the table.
41 A Cora meets her eyes.
42 D CORA: Here's what I know. She says you stole it. You say she stole it. One of you is right.
43 D LILY: One of us is.
44 D CORA: Or neither.
45 D LILY: Then who?
46 D CORA: That's what I intend to find out.
47 A ¶ She stands, gathers the pad.
48 A Lily looks at her hands.
49 D LILY: Cora.
50 D CORA: Yes?
51 D LILY: She took the accounts at eight-fifteen. I have the logs.
52 D CORA: Where?
53 D LILY: In my head.
54 A ¶ Cora stops with her hand on the door.
55 D CORA (to herself): Of course.

### SCENE s02219 | INT. LAUNDROMAT - DAWN
Detected names (may be incomplete or contain aliases): MARTHA OYELARAN-COLE, KAYLA, ARTURO VEGA, DESIREE BLANCHARD, OKONKWO-PRICE, SOLANGE DELACROIX
* 1 A ¶ Humming machines, a bank of dryers.
* 2 A A flickering neon sign reads OPEN 24 HRS.
* 3 A Rain-streaked windows.
* 4 A A vending machine glows in the corner.
5 A ¶ MARTHA OYELARAN-COLE (60s, thick glasses, cardigan) folds sheets with practised precision.
6 A At the next table, her granddaughter KAYLA (16, headphones, school hoodie) sorts socks without looking up.
7 A Beside them, ARTURO VEGA (40s, delivery driver, wet jacket) feeds quarters into a washer.
8 A DESIREE BLANCHARD (30s, nurse in scrubs) dozes in a plastic chair.
9 A And the attendant, MR. OKONKWO-PRICE (70s, bowtie, name tag), mops by the door.
* 10 A ¶ Quiet.
* 11 A Only machines.
12 D MARTHA: You'll want the warm cycle for those.
13 D KAYLA: They're socks, Gran.
14 D MARTHA: Warm.
15 A ¶ Kayla pulls out an earbud and drops a bundle into the machine.
16 A Arturo glances at her, then at Martha.
17 D ARTURO (to Martha): I'm sorry, is this machine free?
18 D MARTHA: That one's broken.
19 D ARTURO: It took my quarters.
20 D MARTHA: It does that.
21 D MR. OKONKWO-PRICE (from the door): I'll refund you, sir.
22 D ARTURO: Thank you.
* 23 A ¶ The bell above the door jingles.
24 A A woman in a black dress and mud-streaked heels enters, a garbage bag of clothing in her arms, mascara tracks on her cheeks.
25 A This is SOLANGE DELACROIX (30s, composed but wrecked).
26 A Everyone looks at her and then pretends they didn't.
27 D SOLANGE: Is there a free machine?
28 D MARTHA: Number six.
29 D SOLANGE: Thank you.
30 A ¶ She crosses to number six.
31 A Loads the bag.
32 A Pours detergent from a bottle she takes out of her purse.
33 A Starts it with a shaking hand.
34 A Stands there, watching it fill.
35 A ¶ Desiree stirs.
36 A Her eyes open on the dress, on the heels.
37 D DESIREE: Rough night?
38 D SOLANGE: Rough morning.
39 D DESIREE: I'm sorry.
40 D SOLANGE: Don't be.
41 A ¶ Kayla puts the earbuds in her pocket.
42 A Martha folds a pillowcase, then another.
43 A She places one on top of Solange's bag, quietly.
44 D MARTHA: For your head.
45 A ¶ Solange stares at it.
46 A Then at Martha.
47 A She sits on the bench beside her, folds her hands, and for the first time looks up, directly at the old woman.
48 D SOLANGE: Thank you.
49 D MARTHA: Everyone ends up in a laundromat eventually.
* 50 A ¶ The machines hum.
* 51 A Somewhere a dryer buzzes, and no one moves to open it.

### SCENE s02220 | EXT. WHALEBONE TOLL BRIDGE - DUSK
Detected names (may be incomplete or contain aliases): BRANNOCH, STRANGER, TAVI, ILSEWYN
* 1 A ¶ A bridge made from the ribs of a dead sea-beast arches over a grey gorge.
* 2 A A tin lantern hangs at the midpoint.
3 A ¶ BRANNOCH, fifties, broad, in a patched toll-keeper's coat, sits on a stool beside a rope barrier.
4 A He counts copper coins into a bowl.
5 A ¶ A STRANGER in a travel-stained cloak walks up from the east road.
6 A Hood up.
7 A A staff in one hand.
8 D BRANNOCH: Toll is two coppers. Four if you've a cart.
9 D STRANGER: No cart.
10 A ¶ Brannoch holds out a hand.
11 A The Stranger drops two coins in it.
12 A Brannoch bites one.
13 D BRANNOCH: Good. Name for the ledger?
14 D STRANGER: Do I need one?
15 D BRANNOCH: Ledger likes a name. Keeps the dead from being counted twice.
16 A ¶ The Stranger thinks.
17 A Pushes the hood back.
18 A A young woman, weathered, a scar through one eyebrow.
19 D STRANGER: Tavi.
20 A ¶ Brannoch writes it in a thick book.
21 D BRANNOCH: Tavi. Where to?
22 D TAVI: Over. Then the salt towns.
23 D ILSEWYN [O.S.] (from below the bridge): Brannoch! The rope's slipped again!
24 A ¶ Brannoch sighs and leans over the rail.
25 D BRANNOCH: Hold it, then! I'm busy!
26 D ILSEWYN [O.S.]: I am holding it! It's holding me!
27 D BRANNOCH (to Tavi): My sister. She keeps the ferry cables.
28 D TAVI: She sounds tired.
29 D ILSEWYN [O.S.]: I am! And I can hear you!
30 D BRANNOCH: She's been tired since our mother died.
31 A ¶ Brannoch lifts the rope barrier.
32 A Tavi steps toward the span, then stops.
33 D TAVI: Is it true the ribs sing at night?
34 D BRANNOCH: When the wind comes from the north.
35 D ILSEWYN [O.S.]: It does not sing, Brannoch, it whistles.
36 D BRANNOCH: It sings, and always has.
37 D ILSEWYN [O.S.]: It whistles, and always has.
38 A ¶ Tavi looks from one to the other, almost smiling.
39 D TAVI: Then I'll listen on the way across.
40 A ¶ She walks onto the bridge.
41 A Brannoch watches her go, then sits and takes up the coins again.
42 D BRANNOCH: Mind the third rib. It's loose.

### SCENE s02221 | INT. ABANDONED BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): DOT, FITZ, OGUNLEYE, GUNNY, INTERCOM, PRU
* 1 A ¶ Dead neon.
* 2 A Lane 6 still has pins.
* 3 A A birthday banner droops: HAPPY 40TH, KEVIN.
4 A ¶ DOT, forties, event planner, clipboard clamped to her chest, shoves a cake onto the ball return while FITZ, thirties, in a rented shark costume, trips over his own fin and takes down a rack of house shoes and OGUNLEYE, "GUNNY" to all, sixties, a retired lane mechanic with a toolbox, drops to one knee to catch the cake before it slides off, and the ball return rumbles, and the cake shoots down Lane 6 like a torpedo.
* 5 A ¶ Silence.
* 6 A A single pin wobbles.
7 D DOT: Nobody saw that.
8 D FITZ (muffled, in the shark head): I saw it. I'm a shark. We see everything.
9 D GUNNY: That cake had eighty dollars of fondant on it.
10 D DOT: Kevin arrives in ten minutes. Ten.
11 A ¶ Fitz yanks the shark head off, sweaty, hair plastered.
12 D FITZ: I can't breathe in this thing. Why am I a shark?
13 D DOT: Kevin loves sharks.
14 D FITZ: Kevin loves SHARKS. Not men inside sharks.
15 A ¶ Gunny walks down the lane, picks up the ruined cake with both hands like an infant, and carries it back, frosting to the elbows.
16 D GUNNY: I can fix it. Give me a spatula and a prayer.
17 D DOT: I have neither. I have a clipboard.
* 18 A ¶ An INTERCOM crackles overhead.
19 D PRU [V.O.] (over intercom, bored): Attention, party in Lane 6. Your guest of honor is in the parking lot and he's on the phone with his mother.
20 D DOT: How long?
21 D PRU [V.O.]: His mother is Greek. I'd say forty minutes.
22 A ¶ Dot exhales for the first time in an hour.
23 A She sits on the ball return.
24 D FITZ: So we have time.
25 D DOT: We have time.
26 D GUNNY (scraping frosting): Then somebody hand me a spatula.
27 A ¶ Fitz offers a bowling shoe.
28 A Gunny takes it, considers it, and uses it.
29 D PRU [V.O.] (over intercom): For the record, the shark is good.
30 A ¶ Fitz bows.
31 A His fin knocks over the last pin.

### SCENE s02222 | INT. RESTAURANT WALK-IN FREEZER - NIGHT
Detected names (may be incomplete or contain aliases): VIC SALERNO, DOLORES KWAN
* 1 A ¶ Racks of frozen fish and crates of lemons.
* 2 A Breath fogs.
* 3 A A single bulb swings.
4 A ¶ VIC SALERNO, fifties, camel-hair coat, sits on an upturned crate.
5 A DOLORES KWAN, forties, apron over a black dress, stands at the door with a revolver held loosely at her side.
6 D VIC: You'd have done better with the knife.
7 D DOLORES: The knife is for fish.
8 D VIC (a thin smile): I taught you that.
9 A ¶ She lowers the gun an inch.
10 D DOLORES: You taught me the books too. Both sets.
11 D VIC: Then you know why I came.
12 D DOLORES: I know why you think you did.
13 A ¶ They speak at the same moment.
14 D VIC: It was never personal.
15 D DOLORES: It was always personal.
* 16 A ¶ A long beat.
17 A Vic stands, slow, rubbing his hands against the cold.
18 D VIC: Open the door, Dolores. I'm freezing.
19 D DOLORES: It locks from the outside, Vic.
20 A ¶ She sets the revolver on a shelf of frozen lemons, steps out, and the heavy door thuds shut behind her.

### SCENE s02223 | EXT. FLOODED RICE PADDY DYKE - DAWN
Detected names (may be incomplete or contain aliases): CORPORAL HARUTO MIZUNO, PRIVATE EMEKA OBI
* 1 A ¶ Mist hangs over the water.
* 2 A A broken dyke, a line of mud, a burned-out ox cart half sunk.
3 A ¶ CORPORAL HARUTO MIZUNO, twenties, helmet strap loose, sits on the cart's axle cleaning a rifle bolt with a rag.
4 A Beside him, PRIVATE EMEKA OBI, nineteen, thin, holds a tin cup of tea with both hands.
5 D OBI: It's quiet.
6 D MIZUNO: It's been quiet since yesterday.
7 D OBI: Is that good?
8 D MIZUNO: It's quiet.
9 A ¶ Obi sips.
10 A Grimaces.
11 D OBI: This tastes like smoke.
12 D MIZUNO: Everything tastes like smoke.
13 A ¶ Mizuno reassembles the bolt, slides it home, works the action once.
14 D OBI: My mother says the fog is the spirits of the rice.
15 D MIZUNO: My mother says it's the river breathing.
16 D OBI: They would get along.
17 D MIZUNO: They would argue.
18 D OBI (smiling): Yes. About the rice.
* 19 A ¶ Distant, a cock crows.
20 A Both men look up toward the sound.
21 D MIZUNO: That's a good sign.
22 D OBI: Or the farm still has someone in it.
23 A ¶ They answer the same moment, quiet.
24 D MIZUNO: We should check.
25 D OBI: We should check.
26 A ¶ They stand.
27 A Mizuno shoulders the rifle.
28 A Obi pours the last of the tea into the water and follows him along the dyke into the mist.

### SCENE s02224 | INT. COUNTY COURTHOUSE - COURTROOM 3B - DAY
Detected names (may be incomplete or contain aliases): JUDGE IMELDA CARDENAS, WENDELL PRATT, SOO-JIN HAN, BARTY, QUILL
* 1 A ¶ A cramped room under a failing skylight.
* 2 A Radiators clank.
3 A ¶ JUDGE IMELDA CARDENAS, sixties, silver braid, presides.
4 A WENDELL PRATT, fifties, rumpled prosecutor.
5 A SOO-JIN HAN, thirties, sharp defense counsel in a navy suit.
6 A In the box, BARTHOLOMEW "BARTY" QUILL, seventies, a retired beekeeper in a borrowed tie.
7 D SOO-JIN: Mr. Quill, you've kept bees how long?
8 D BARTY: Fifty-one years, Ms. Han.
9 D WENDELL: Objection. Relevance.
10 D JUDGE CARDENAS: Mr. Pratt, you've been relevant to nothing since lunch. Overruled.
11 D WENDELL: Your Honor, with respect--
12 D JUDGE CARDENAS: I said overruled, Wendell.
13 D SOO-JIN: Mr. Quill, on the night of the fourteenth, you saw a van near the apiary.
14 D BARTY: Gray van. No plates. Engine running.
15 D WENDELL: Leading!
16 D SOO-JIN: He's describing, Your Honor.
17 D JUDGE CARDENAS: He is describing. Sit, Mr. Pratt.
18 D WENDELL: I am sitting, Judge.
19 D JUDGE CARDENAS: You are hovering. Sit lower.
20 D BARTY: Can I say something about the bees?
21 D SOO-JIN: Please, Barty.
22 D WENDELL: Mr. Quill, you don't have to--
23 D BARTY: I want to. They go quiet when strangers come. That night, they went quiet at ten, not nine. Somebody was at the hive an hour before the van.
24 D SOO-JIN: An hour before.
25 D BARTY: Right, Ms. Han. Which means the van wasn't the first.
26 D WENDELL: That's speculation.
27 D JUDGE CARDENAS: It's beekeeping, Wendell, and it's more than you've given me all week.
28 D SOO-JIN: Mr. Quill, who else keeps hives within a mile?
29 D BARTY: Just the Pellegrino boy and me.
30 D WENDELL: Your Honor, this is a fishing expedition.
31 D JUDGE CARDENAS: It is a honey expedition, and I'll allow it.
32 D SOO-JIN: And the Pellegrino boy, Barty, does he drive a gray van?
33 D BARTY: He drives a bicycle.
34 D WENDELL: Thank you!
35 D BARTY: But his uncle drives a gray van.
36 D WENDELL: Objection!
37 D JUDGE CARDENAS: Overruled. Go on, Mr. Quill.
38 D BARTY: Uncle Dario. Owes me forty dollars since March.
39 D SOO-JIN: Nothing further, Your Honor.
40 D JUDGE CARDENAS: Mr. Pratt, cross?
41 D WENDELL (a long pause): Mr. Quill, about that forty dollars.
42 D BARTY: Yes, Mr. Pratt?
43 D WENDELL: You hold a grudge, don't you?
44 D BARTY: I hold bees, Mr. Pratt. Grudges just sting.
45 D JUDGE CARDENAS: Court is in recess until two. Ms. Han, bring me honey.
46 D SOO-JIN: Your Honor?
47 D JUDGE CARDENAS: Jar of it. My cold's back.

### SCENE s02225 | INT. FUNICULAR CAR MIDWAY UP A MOUNTAIN - NIGHT
Detected names (may be incomplete or contain aliases): REUBEN FAIRCHILD, KASIMIR VOSS, ODALYS
* 1 A ¶ A wooden cable car, stopped dead on a steep track.
* 2 A Wind rattles the windows.
* 3 A Below, a hotel's lights glitter in the valley.
4 A ¶ REUBEN FAIRCHILD, forties, gray tuxedo, kneels by a floor panel with a pry bar.
5 A KASIMIR VOSS, thirties, black tuxedo, holds a flashlight and watches the track behind them.
6 A Each wears a small earpiece.
7 D KASIMIR: Cable's steady. We have maybe six minutes.
8 D REUBEN: Four, if she's right.
9 A ¶ He pries the panel.
* 10 A It lifts.
* 11 A Beneath it, a steel lockbox bolted to the frame.
12 D ODALYS [V.O.] (in their earpieces, calm): Gentlemen, the hotel's night manager just left his office. He's walking to the lift station.
13 D KASIMIR: How long to get here?
14 D ODALYS [V.O.]: Walking? Ten minutes. If he notices the car's stopped, he'll run.
15 D REUBEN: Then let's not make him notice.
16 A ¶ Reuben takes a thin case from his jacket and opens it.
* 17 A Lockpicks, a stethoscope.
18 A He hangs the stethoscope around his neck and presses the diaphragm to the box.
19 D KASIMIR: You said it was a four-digit lock.
20 D REUBEN: It's a six-digit lock.
21 D KASIMIR: You said four.
22 D REUBEN: I said four minutes.
23 A ¶ Kasimir lets that go.
24 A He turns the flashlight off.
* 25 A Darkness, then the pale blue of mountain night.
26 D ODALYS [V.O.]: I'm watching the manager. He's stopped. He's looking up at the track.
27 D KASIMIR: Stopped?
28 D ODALYS [V.O.]: Stopped. Pulling out a phone.
29 A ¶ Reuben's hands freeze on the dial.
30 A Kasimir leans toward the window, one hand on his gun.
31 D REUBEN: Odalys. Is he calling the lift station?
32 D ODALYS [V.O.]: Hold on.
* 33 A ¶ A long silence.
* 34 A Wind.
* 35 A The car creaks.
* 36 A Reuben's breath fogs the glass.
37 D KASIMIR (whispering): He's seen the car. He knows.
38 D REUBEN: He doesn't know.
39 D KASIMIR: He has a phone in his hand.
40 D REUBEN: He has a phone. That's all he has.
41 A ¶ Reuben turns the dial again.
* 42 A A click.
* 43 A Another.
44 D ODALYS [V.O.]: He's dialing. Oh, he's dialing the front desk, not the lift. The front desk.
45 D KASIMIR: That's a different thing?
46 D ODALYS [V.O.]: It's a sleepy clerk with a cold. That's a very different thing.
* 47 A ¶ Click.
* 48 A Click.
49 A Reuben's face.
* 50 A The lock drops.
51 A He lifts the lid.
* 52 A ¶ Inside, a velvet pouch.
53 A He opens it.
* 54 A A stone the size of a plum catches the blue light.
55 D KASIMIR: That is the ugliest diamond I have ever seen.
56 D REUBEN: It's a spinel. Worth three diamonds.
57 D ODALYS [V.O.]: Boys, the manager's put the phone away. He's shrugging. He's walking back to the hotel.
58 A ¶ Kasimir lets out a laugh he's been holding.
59 A Reuben closes the lid, slides the pouch inside his coat, drops the panel back into place.
60 D KASIMIR: And that's it?
61 D REUBEN: That's it.
* 62 A ¶ The car lurches.
* 63 A Starts to move again, upward, humming.
64 D ODALYS [V.O.]: Somebody just turned the power back on. You've got ninety seconds to the top station.
65 D KASIMIR: Ninety seconds to look like we belong at a gala.
66 A ¶ Reuben straightens his bow tie.
67 A Kasimir slicks his hair.
* 68 A The car glides on up the mountain toward the lights.
69 D REUBEN: Nobody ever looks at the men in the funicular.
70 D ODALYS [V.O.]: I'm looking at you.
71 D REUBEN: Nobody but you.

### SCENE s02226 | EXT. SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): NGAIO, TOMASZ, LUPE
* 1 A ¶ White to the horizon.
* 2 A Heat shimmers.
* 3 A The wreck of a Land Cruiser sits on its roof, tires blown, one door off.
4 A ¶ Under a tarp rigged from the open hatch sit three survivors.
5 A ¶ NGAIO, fifties, a Maori geologist, cracked lips, a wide-brimmed hat held on with a scarf.
6 A TOMASZ, thirties, the driver, sunburned face, an arm in a makeshift sling.
7 A LUPE, nineteen, a student, barefoot, her boots set neatly beside her.
8 A ¶ Ngaio unscrews a canteen.
* 9 A A mouthful of water for each of them.
* 10 A No more.
11 D NGAIO: One sip. Hold it. Count to ten.
12 D TOMASZ: Give me two sips. I'm bigger than the girl.
13 D LUPE: I'm right here, Tomasz.
14 D TOMASZ: I know you're here.
15 D NGAIO: You get the same as the rest of us. That's the rule.
16 D TOMASZ: Whose rule?
17 D NGAIO: Mine. I've got the canteen.
18 A ¶ Tomasz grunts.
19 A Takes his sip.
20 A Holds it.
21 A His eyes close.
22 D LUPE (whispering): Do you think they know we're missing?
23 D NGAIO: The lodge expects us at six tonight.
24 D TOMASZ: They'll look tomorrow.
25 D LUPE: That's too late, isn't it?
26 D NGAIO: Not if we're careful with the water.
27 D TOMASZ: And the heat.
28 D NGAIO: And the heat. We walk at dusk. East, toward the ridge. The salt is hard there, you won't sink.
29 D LUPE: How far?
30 D TOMASZ: Twenty kilometers.
31 D NGAIO: Twenty-two.
32 D TOMASZ: Twenty-two.
33 D LUPE (low): Okay. Okay.
* 34 A ¶ A wind rises, spinning a small white devil of salt.
* 35 A It passes.
* 36 A The tarp snaps.
37 D NGAIO: There. See that? Wind means weather turning. By dark, it'll cool.
38 D TOMASZ: You say that like you've done this.
39 D NGAIO: Thirty years of fieldwork. I've been lost on flats before.
40 D LUPE: Were you scared?
41 D NGAIO: Every time.
42 A ¶ Lupe laughs, a small cracked sound.
43 A Tomasz almost smiles.
44 D TOMASZ: Then what's the trick?
45 D NGAIO: You stop looking at the horizon. It lies. You look at your feet and the next step.
46 D TOMASZ: That's a lousy trick.
47 D NGAIO: It's the only one.
48 D LUPE: Can I try the canteen again?
49 D NGAIO: No.
50 D LUPE: Tomasz?
51 D TOMASZ: She said no, Lupe.
52 D LUPE: I'm just asking!
53 D NGAIO: Both of you. Sit. Rest. We have eight hours.
54 A ¶ They settle.
55 A Lupe lays her head on her knees.
56 A Tomasz studies his sling.
57 A Ngaio watches the white horizon, unmoving.
58 D NGAIO [CONT'D]: Eight hours. Then we walk.

### SCENE s02227 | INT. CANDLELIT SALON - 1790S PARIS - NIGHT
Detected names (may be incomplete or contain aliases): JOSEPHINE LAURENT, CALLOWAY
* 1 A ¶ A narrow room of mirrors.
* 2 A One candelabrum.
* 3 A Shutters closed against the street.
4 A ¶ JOSEPHINE LAURENT, thirties, dressed in mourning black, stands at a writing desk.
5 A MR. CALLOWAY, fifties, an English banker in a travel coat, waits by the door, hat in hand.
6 A ¶ He clears his throat.
7 A She doesn't turn.
8 D CALLOWAY: Madame.
9 A ¶ She finishes sealing a letter.
10 A Presses the wax.
11 A Sets the signet down.
12 D JOSEPHINE: You are late.
13 D CALLOWAY: The barricades, Madame.
14 D JOSEPHINE: You are English. You could have walked through them.
15 A ¶ He permits himself a small smile.
16 A She turns at last, studies him.
17 D CALLOWAY: You have it?
18 A ¶ She slides open a drawer.
19 A Takes out a leather folio.
20 A Holds it against her chest.
21 D JOSEPHINE: First, my passage.
22 A ¶ He pulls a folded paper from his coat.
23 A She takes it, reads.
24 A Her shoulders loosen a fraction.
25 A Then she tightens again.
26 D JOSEPHINE [CONT'D]: This is for one.
27 D CALLOWAY: It is.
28 D JOSEPHINE: I have a daughter.
29 A ¶ He says nothing.
30 A His jaw works.
31 A She lifts the folio, as if to put it back in the drawer.
32 D CALLOWAY: Madame.
33 D JOSEPHINE: You said two.
34 D CALLOWAY: I said I would try.
35 A ¶ She closes the drawer on the folio.
36 A Turns her back.
37 A He crosses the room in three strides, grips her elbow, then thinks better of it and lets go.
38 D CALLOWAY [CONT'D]: Forgive me.
39 D JOSEPHINE (without turning): Get out.
40 A ¶ He doesn't move.
* 41 A Shouts rise in the street.
* 42 A A bell.
* 43 A Candles gutter.
44 A She flinches.
45 A He steps toward her and, this time, stops short, hat crushed in his hands.
46 D CALLOWAY: I will find a second passage.
47 D JOSEPHINE: When?
48 D CALLOWAY: Three days.
49 D JOSEPHINE: We do not have three days.
50 A ¶ He takes out his pocketbook.
51 A Counts notes onto the desk.
* 52 A A lot of them.
53 A She watches them stack.
54 D CALLOWAY: For the second ticket. Buy it from whoever you must.
55 A ¶ She looks at the money.
56 A At him.
57 A Slowly, she opens the drawer again and hands him the folio.
58 A ¶ He tucks it inside his coat.
59 A She pockets the notes.
60 A For a moment neither moves.
61 D CALLOWAY [CONT'D]: Thank you.
62 D JOSEPHINE: Do not thank me. Be quick.
63 A ¶ He bows, stiff.
64 A Goes to the door.
65 A Hesitates with a hand on the latch.
66 D CALLOWAY: She will be safe.
67 D JOSEPHINE: She will be if you are honest.
68 A ¶ He nods once and slips out.
69 A She blows out the candles, one by one, until only the glow of the street shows through the shutters.

### SCENE s02228 | INT. FLOODED PARISH CRYPT - NIGHT
Detected names (may be incomplete or contain aliases): DESSA OYELARAN, BARN, HOLLIS
* 1 A ¶ Knee-deep black water.
* 2 A Stone coffins break the surface like islands.
* 3 A A lantern bobs on a plank.
4 A ¶ DESSA OYELARAN, thirties, soaked, clutches a crowbar.
5 A Beside her, BARNABY "BARN" HOLLIS, forties, a church sexton, grips the lantern with a shaking hand.
6 D BARN: Dessa, don't move.
7 D DESSA: I'm not moving.
8 D BARN: Something touched my leg.
9 D DESSA: That's the plank.
10 D BARN: The plank is under my other leg.
* 11 A ¶ The water ripples.
12 A Both freeze.
13 A A pale hand rises from the nearest coffin lid, fingers spread, and lowers again.
14 D DESSA: Barn, run.
15 A ¶ They bolt.
* 16 A The lantern swings.
* 17 A The water erupts behind them.
18 A A tall, pale shape surges after, its mouth open.
19 A Dessa swings the crowbar and catches it across the jaw.
20 A Barn grabs her sleeve, drags her up the steps.
21 A They tumble through the iron door together and slam it.
* 22 A ¶ Silence.
* 23 A Water laps behind the door.
24 D BARN [CONT'D]: Dessa. That was the vicar.
25 D DESSA: Yes, Barn. I know.

### SCENE s02229 | INT. GLASSHOUSE CAFE - ORCHID CONSERVATORY - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): WREN ACHTERBERG, ANSELM DUPREE, OKAFOR, BAO, ROSALIND
* 1 A ¶ Mist pools under the glass roof.
* 2 A Hanging orchids drip.
* 3 A A small iron table sits between a fig tree and a fogged window, laid for tea that has long gone cold.
4 A ¶ WREN ACHTERBERG, thirties, a botanist with ink on her fingers, sits with her coat still buttoned, as though she means to leave.
5 A Across from her, ANSELM DUPREE, late thirties, his tie loosened, turns a teaspoon over and over, as if it might yield an answer.
6 A ¶ Behind them, the staff: MRS. OKAFOR, sixties, upright, in a green apron, polishes the same cup she has been polishing for a minute.
7 A BAO, twenty, a waiter with an unsure grip on a tray, hovers near the fig tree and pretends to adjust a label.
8 D ANSELM: I brought the seeds back.
9 D WREN: I know. You said in your letter.
10 D ANSELM: Four hundred of them. From the Andes.
11 D WREN: That's a lot of seeds.
12 D ANSELM: It's a lot of months.
13 A ¶ She looks at the spoon in his fingers.
14 A He sets it down.
15 D ANSELM [CONT'D]: I should have written more.
16 D WREN: You wrote enough.
17 D ANSELM: Wren.
18 D WREN: I'm tired, Anselm. I've spent two years learning to be fine.
19 A ¶ Mrs. Okafor sets down the cup.
20 A Bao shifts the tray from one hand to the other.
21 D MRS. OKAFOR (softly, to Bao): More hot water.
22 D BAO: They haven't touched the first.
23 D MRS. OKAFOR: Then more hot water, Bao.
24 A ¶ Bao nods and flees toward the kitchen.
* 25 A A door swings open on the far side of the conservatory.
26 A ¶ A girl of nine steps in, ROSALIND, her coat buttoned wrong, a muddy satchel against her hip.
27 A She stands under the dripping orchids and looks only at Anselm.
28 D ROSALIND: Papa?
29 A ¶ Wren's hand goes still on the table.
30 A Anselm rises, the chair scraping the tile.
31 D ANSELM: Rosalind. You were meant to wait with Aunt Hester.
32 D ROSALIND: She fell asleep. I came by myself. I know the way.
33 A ¶ Wren looks at the child.
34 A At the buttons.
35 A At Anselm.
36 A Something in her face eases and breaks at once.
37 D WREN (quietly): You didn't say you had a daughter.
38 D ANSELM: I was afraid to.
39 A ¶ Rosalind crosses to the table and studies Wren with grave attention.
40 D ROSALIND: Are you the lady with the plants?
41 D WREN: I suppose I am.
42 D ROSALIND: Papa said you know all their names.
43 A ¶ Wren reaches out and, slowly, fixes the girl's top button.
44 A Her fingers are not quite steady.
45 D WREN: Not all. But I could teach you some.
46 A ¶ Mrs. Okafor, from across the room, sets the cup down at last and folds her cloth.
47 A Bao returns with a copper pot, sees the table, and stops where he is, and does not speak.

### SCENE s02230 | INT. WINE CELLAR BENEATH A CASINO - NIGHT
Detected names (may be incomplete or contain aliases): TEO, FERRIS, LEV, NADIA, WOMAN IN GREEN, IMANI, KESSLER
* 1 A ¶ Brick arches.
* 2 A Oak racks.
* 3 A A security camera in a corner, its red light dead.
4 A ¶ TEO crouches at a steel vault door with a thermal lance.
5 A FERRIS stands lookout at the stairs.
6 A LEV unrolls a canvas bag.
7 A NADIA reads a tablet.
8 A ¶ A WOMAN IN GREEN, thirties, silk dress, heels in her hand, comes down the stairs.
9 A She is not part of the crew.
10 A Everyone sees it.
11 A ¶ He draws a pistol.
12 A She raises her free hand.
13 D WOMAN IN GREEN: Don't. I'm the one who killed the camera.
14 A ¶ Nadia shrugs at Teo.
15 A He keeps working.
16 D FERRIS: Who sent you?
17 D WOMAN IN GREEN: Nobody. I work upstairs.
18 D NADIA: Upstairs as in--
19 D WOMAN IN GREEN: Cage cashier. Eleven years.
20 A ¶ He stops unrolling the bag and studies her.
21 D LEV: Why help us?
22 D WOMAN IN GREEN: Because the owner is walking down these stairs in four minutes.
23 A ¶ Ferris's jaw tightens.
24 A He lowers the pistol.
25 D NADIA: Name.
26 D WOMAN IN GREEN: Does it matter?
27 D NADIA: It does to me.
28 A ¶ She sets her shoes on a barrel.
29 D IMANI: Imani.
30 A ¶ Nadia nods once.
* 31 A Teo's lance sputters and dies.
32 A He sits back.
33 D TEO: Door's open.
* 34 A ¶ The vault swings out.
* 35 A Inside, stacked bills.
36 A Lev starts loading.
37 A Ferris backs toward the stairs, listening.
38 D IMANI: You have three minutes.
39 D FERRIS (quiet): Faster.
40 A ¶ Lev doubles his pace.
41 A She drops the tablet and helps.
42 A Teo takes the door.
* 43 A Footsteps above.
* 44 A A cough.
* 45 A A chair scrapes.
46 D KESSLER [O.S.] (from the stairwell, old and wheezing): Imani? Is that you down there?
47 A ¶ She freezes.
48 A So does everyone.
49 D IMANI: Yes, Mr. Kessler. Counting the reserve.
50 D KESSLER [O.S.]: At this hour?
51 D IMANI: Audit.
52 A ¶ Ferris raises the pistol toward the stairs.
53 A She puts a hand on his wrist.
54 D IMANI [CONT'D] (whispering): No guns. He's old. He'll have a heart attack and then we all hang.
55 D FERRIS: What do you suggest?
56 D IMANI: I'll talk to him.
57 A ¶ She picks up her shoes, straightens her dress, and climbs.
58 A Behind her, the crew holds still.
59 A He listens as she greets the old man in a voice honey-smooth.
60 A ¶ Lev zips the bag.
61 A They trade a look.
62 A Ferris does not lower the gun.
63 D LEV (whispering): She'd better be good.
64 D TEO: She's very good.
* 65 A ¶ Above, a door closes.
* 66 A Muffled laughter, an old man's.
* 67 A Then nothing.
68 A ¶ Ferris exhales and waves the others toward the service tunnel.
69 A They go, the bag swinging, as footsteps fade overhead.

### SCENE s02231 | INT. HALVORSEN-BRAND INC. - OPEN-PLAN OFFICE, "SYNERGY POD" - DAY
Detected names (may be incomplete or contain aliases): WE ARE FAMILY, HALVORSEN, BRENDA, CHIP, DUTCH, GWEN, NEW HIRE, PRIYA
* 1 A ¶ Rows of beige desks.
* 2 A A foosball table nobody uses.
* 3 A A banner reads "WE ARE FAMILY (TERMS APPLY)."
4 A ¶ MR. HALVORSEN, fifties, in a vest and a tie with tiny fish, stands at a whiteboard.
5 A BRENDA, forties, his office manager, stands beside him with a laser pointer.
6 A CHIP, thirties, loud, and DUTCH, forties, soft-spoken, share a desk.
7 A GWEN, twenties, scribbles in a notebook.
8 A ¶ A NEW HIRE, twenties, a laptop bag on one shoulder, hovers by the door with a lanyard around her neck.
9 D MR. HALVORSEN: Team! Team! Please welcome our latest synergist.
* 10 A ¶ Scattered applause.
11 A Chip whoops.
12 D CHIP: Welcome to the family!
13 D BRENDA (under her breath): Terms apply.
14 D MR. HALVORSEN: And you are?
15 D NEW HIRE: Priya.
16 D MR. HALVORSEN: Priya! A name like a poem. Where do you want to sit?
17 D PRIYA: Wherever there's an outlet.
18 D CHIP: The outlets are communal, Priya.
19 D DUTCH: We're sharing three between thirty.
20 D PRIYA: How do you charge anything?
21 D DUTCH: We rotate. It builds trust.
22 D GWEN (without looking up): It builds bruises. Steve's still limping from Tuesday.
23 D MR. HALVORSEN: Gwen, we agreed on positivity.
24 D GWEN: I'm positive he's limping.
25 D BRENDA: Mr. Halvorsen, the onboarding packet?
26 D MR. HALVORSEN: Right. Priya, you'll receive a binder, a mug, and a mission statement.
27 D PRIYA: I'd rather have a desk.
28 D MR. HALVORSEN: The desk is earned.
29 D PRIYA: How?
30 D CHIP: Three quarters of exceeding metrics.
31 D PRIYA: What are the metrics?
32 D DUTCH: Nobody knows.
33 D BRENDA (sharp): Dutch.
34 D DUTCH: Sorry. They're confidential.
35 D PRIYA: To whom?
36 D MR. HALVORSEN: To me, mostly.
37 A ¶ Priya looks around.
38 A The team looks at the floor.
* 39 A The foosball table creaks as no one touches it.
40 D PRIYA: So I show up for two years, to a job I can't define, for a desk I can't have.
41 D MR. HALVORSEN: It's a journey.
42 D CHIP: A beautiful journey.
43 D BRENDA: She doesn't have to say yes, Chip.
44 D GWEN (still writing): She does. They all do.
45 A ¶ Priya laughs, short, appalled.
46 A She slides the laptop bag off her shoulder and sets it on the foosball table.
47 D PRIYA: Fine. I'll stand.
48 D MR. HALVORSEN: Wonderful!
49 D DUTCH: You can use my outlet, Priya. Mondays.
50 D PRIYA: Thank you, Dutch.
51 D CHIP: Look at that! Already a family.
52 D BRENDA: Terms apply, Chip.
53 A ¶ Mr. Halvorsen beams at the whiteboard, where somebody has drawn a lopsided tree.
54 D MR. HALVORSEN: Now, who wants to hear about our Q3 vision?
55 A ¶ Nobody does.
56 A Everyone nods anyway.

### SCENE s02232 | INT. ROLLER RINK, ABANDONED - AFTERNOON
Detected names (may be incomplete or contain aliases): DESMOND, MIRELA, UNCLE FERENC
* 1 A ¶ A cavernous room.
* 2 A Wood floor warped into waves.
* 3 A Mirror ball cracked and dull.
* 4 A Light slants through boarded windows.
5 A ¶ DESMOND, sixteen, lanky, wearing his late father's denim jacket two sizes too big, sits on a bench lacing up scuffed skates.
6 A MIRELA, seventeen, shaved head, a silver ring in her eyebrow, leans against the rail holding a boombox.
7 A UNCLE FERENC, sixties, wiry, a flat cap, a cigarette unlit between his lips, stands at the far end by the dead organ.
* 8 A ¶ Dust motes drift.
9 D MIRELA: You said you could skate.
10 D DESMOND: I said I used to.
11 A ¶ He stands.
12 A Wobbles.
13 A She watches, arms crossed.
14 D MIRELA: Used to when?
15 D DESMOND: Six. With my dad.
16 A ¶ She doesn't answer.
17 A He pushes off.
18 A His legs go sideways.
19 A He catches the rail, laughs, ashamed.
20 D UNCLE FERENC (calling out): Knees, boy! Bend your knees!
21 D DESMOND: I'm bending them!
22 D UNCLE FERENC: You're bending your back!
23 A ¶ Mirela sets the boombox down.
24 A Presses play.
* 25 A A scratchy waltz fills the rink.
26 A Desmond stops mid-wobble.
27 D DESMOND: What is this?
28 D MIRELA: Ferenc's. He ran this rink in the eighties.
29 D UNCLE FERENC: Nineteen eighty-one to ninety-four. Best waltz night in Budapest-on-the-Hudson.
30 D DESMOND: That's not a place.
31 D UNCLE FERENC: It was a state of mind.
32 A ¶ Ferenc takes off his cap.
33 A Straightens.
34 A For a second, he looks twenty years younger.
35 A He steps onto the floor in his street shoes and glides, light, impossible, a hand tucked behind his back.
36 A ¶ Desmond stares.
37 A Mirela's mouth twitches toward a smile.
38 D MIRELA: Told you.
39 D DESMOND: Your uncle can dance.
40 D MIRELA: He can do a lot of things.
41 D UNCLE FERENC (passing them): Watch my feet, boy. Not my face.
42 A ¶ Desmond watches.
43 A Tries.
44 A Pushes, glides, a foot slips, but he doesn't fall.
45 A He grins.
46 A Mirela whoops, the first honest sound she's made.
47 D MIRELA: Again!
48 A ¶ He pushes off a second time.
* 49 A Better.
50 A Ferenc spins back around, arms out, steadying him without touching.
51 D UNCLE FERENC: That's it. Don't think. Your father didn't think.
52 D DESMOND: You knew my dad?
53 D UNCLE FERENC: Every Friday for six years. Worst skater I ever saw.
54 D DESMOND (small smile): He'd have said the same about me.
55 D UNCLE FERENC: He'd have lied. He loved watching you.
56 A ¶ Desmond looks down.
57 A Mirela cranks the volume.
* 58 A The waltz swells in the empty hall.
59 D MIRELA: Okay, Des. Stop crying and skate.
60 D DESMOND: I'm not crying.
61 D MIRELA: You're a little bit crying.
62 A ¶ He wipes his face with a sleeve.
63 A Pushes forward.
64 A Ferenc takes his left, Mirela comes onto the floor and takes his right.
65 A The three of them make a slow, crooked circle under the dead mirror ball.

### SCENE s02233 | EXT. SCHOOL BUS STOP - BACK OF A DRIVE-IN THEATER - NIGHT
Detected names (may be incomplete or contain aliases): ZUZU, HOBART, LINDIWE, PABLO, MARGUERITE
* 1 A ¶ A cracked screen looms behind them.
* 2 A Moths circle a lone streetlight.
3 A ¶ ZUZU, fifteen, grips a stolen bottle of cider.
4 A HOBART, fifteen, holds a flashlight.
5 A LINDIWE, sixteen, perches on a car hood.
6 A PABLO, fourteen, hugs his knees.
7 A MARGUERITE, sixteen, in a prom dress, shivers.
8 D ZUZU: Hobart, put the light out.
9 D HOBART: Marguerite's cold.
10 D MARGUERITE: I'm fine. Lindiwe, give me your jacket.
11 D LINDIWE: Pablo, share yours.
12 D PABLO: It's a hoodie. It's too small.
13 D ZUZU: Everybody shut up. Headlights.
* 14 A ¶ A car passes on the road.
* 15 A Slows.
* 16 A Speeds up.
17 A They breathe.
18 D PABLO (whispering): Was it my dad?
19 D LINDIWE: No, Pablo. Your dad drives a Buick.
20 A ¶ Marguerite starts laughing.
21 A Then Zuzu.
22 A Then all of them, helplessly, until Hobart drops the flashlight and it rolls under the car.

### SCENE s02234 | EXT. SALOON ROOF - HIGH NOON
Detected names (may be incomplete or contain aliases): SHERIFF AMOS TEAGUE, EZEKIEL, TWO-FINGER MAGGIE, CHEN WEI, RAFAEL, HOLLIS
* 1 A ¶ Heat.
* 2 A Dust.
* 3 A A rain barrel on a flat tin roof.
4 A ¶ SHERIFF AMOS TEAGUE crouches behind a chimney, rifle ready.
5 A EZEKIEL, teenager, deputy, hugs the roofline.
6 A TWO-FINGER MAGGIE, fifties, a bartender, pulls a shotgun from her apron.
7 A CHEN WEI, thirties, a railway cook, grips a cleaver.
8 A RAFAEL, forties, a horse trader, holds a pistol.
9 A HOLLIS, sixty, the town drunk, flops on his back, a bottle on his chest.
* 10 A ¶ Hooves below.
11 A A gang enters Main Street.
12 D TEAGUE: Hold fire.
13 D EZEKIEL: They're coming.
14 D TEAGUE: I said hold.
15 D MAGGIE: They'll see us, Amos!
16 D CHEN WEI: They won't look up.
17 D RAFAEL: They always look up!
* 18 A ¶ Guns crack.
* 19 A Dust jumps.
20 A Hollis lifts the bottle, toasts the sky, and drinks.
