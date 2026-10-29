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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0168.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02441 | INT. DRIVE-THROUGH TAXIDERMY SHOP - DAY
Detected names (may be incomplete or contain aliases): CLERK, CUSTOMER, DARNELL, HORTENSE, KEVIN, IMPATIENT DRIVER
* 1 A ¶ A window with a menu board: "MOUNTS WHILE YOU WAIT."
* 2 A Behind it, shelves of glassy-eyed squirrels.
3 A ¶ CLERK (19, headset, name tag hidden by a lanyard) leans out of the window.
4 A A CUSTOMER (60s, sunglasses, trucker cap) idles at the curb holding a shoebox.
5 D CLERK: Welcome to Stuff It. What can I stuff for you?
6 D CUSTOMER: My cat.
7 D CLERK: Is he deceased?
8 D CUSTOMER: She is. Hortense.
9 D CLERK: Sorry for your loss. I'm Darnell.
10 A ¶ Darnell takes the shoebox.
11 A Peeks inside.
12 A Winces.
13 D DARNELL: Rigor?
14 D HORTENSE: Three days.
* 15 A ¶ A phone rings behind the counter.
16 A Darnell grabs it.
17 D KEVIN [V.O.] (over phone, shouting): Darnell, did you tell the customer about the surcharge?
18 D DARNELL: What surcharge?
19 D KEVIN [V.O.]: The cat surcharge! Forty dollars!
20 A ¶ Darnell holds the phone out the window.
21 A Hortense stares at it.
22 D HORTENSE: Forty dollars to stuff my cat?
23 D DARNELL: Per whisker.
24 D HORTENSE: That's not funny.
25 D DARNELL: No, ma'am. It's company policy.
* 26 A ¶ A horn blares behind the truck.
27 D IMPATIENT DRIVER [O.S.]: Hey! Some of us have raccoons waiting!
28 A ¶ Hortense does not move.
29 A Neither does Darnell.

### SCENE s02442 | EXT. HOT-AIR BALLOON BASKET - TETHERED - MORNING
Detected names (may be incomplete or contain aliases): RUTHERFORD PLUM, BLANCHE KOWALCZYK, INSPECTOR OKONJO
* 1 A ¶ A striped balloon strains at its ropes ten feet above a county fair.
* 2 A Crowd noise below.
* 3 A The basket creaks.
4 A ¶ RUTHERFORD PLUM (50s, ballooning blazer, goggles) works the burner.
5 A BLANCHE KOWALCZYK (40s, bridal veil whipped by wind) clings to the rail.
6 D BLANCHE: You said it would be romantic!
7 D RUTHERFORD: It is romantic!
8 D BLANCHE: We're not moving!
9 D RUTHERFORD: That's the romance!
10 D BLANCHE: Rutherford, I'm getting married at noon!
11 D RUTHERFORD: And I'm going to marry you off at noon!
* 12 A ¶ A megaphone squawks from below.
13 A Then INSPECTOR OKONJO enters the basket's edge, hauling himself up the ladder.
14 A Clipboard in teeth.
15 A Reflective vest.
16 A Tired eyes.
17 D OKONJO: Gentlemen. Ma'am. You do not have a permit.
18 D RUTHERFORD: We have an understanding!
19 D BLANCHE: We have a groom waiting!
20 D OKONJO: You have a violation.
* 21 A ¶ The burner roars.
* 22 A The basket tilts.
23 A All three grab the rail.

### SCENE s02443 | INT. NIGHT TRAIN - DINING CAR - SNOWSTORM
Detected names (may be incomplete or contain aliases): WOMAN, CALLUM FAIRBROTHER, GIORGOS ANAGNOSTOU, NADIA, ELDERLY COUPLE, HEDDA LINDQVIST-ROSE, AMBROSE
* 1 A ¶ White-clothed tables, brass lamps, windows frosted from outside.
* 2 A The car sways.
* 3 A A candle gutters in every glass.
* 4 A At the far end, a tarnished samovar steams.
* 5 A ¶ Only a handful of passengers remain.
6 A A WOMAN (30s, trench coat, damp hair) sits alone at a two-top, a closed book in front of her.
7 A She hasn't turned a page in twenty minutes.
8 A ¶ CALLUM FAIRBROTHER (30s, rumpled suit, tie loosened) stands at the doorway, scanning for a seat.
* 9 A The car is nearly empty and every table is free.
10 A He walks to hers anyway.
11 D CALLUM: Is this taken?
12 D WOMAN: There are fourteen empty tables.
13 D CALLUM: I can count.
14 A ¶ She almost smiles.
15 A Gestures to the chair.
16 A He sits.
17 A ¶ GIORGOS ANAGNOSTOU (50s, waiter, white jacket, impeccable mustache) glides over with a menu.
18 D GIORGOS: Madam, sir. Tonight we have lamb or lamb.
19 D CALLUM: Lamb.
20 D WOMAN: The same.
21 D GIORGOS: A wise choice. Wine?
22 D CALLUM: Red.
23 D WOMAN: Whatever he's having.
24 A ¶ Giorgos nods and withdraws.
25 A Callum straightens his cutlery.
26 A She watches him do it.
27 D WOMAN [CONT'D]: You're nervous.
28 D CALLUM: I'm on a train in a blizzard with a stranger.
29 D WOMAN: Nadia.
30 D CALLUM: Pardon?
31 D NADIA: My name. Nadia Haddad. Now I'm not a stranger.
32 D CALLUM: Callum.
33 D NADIA: That's a Scottish name.
34 D CALLUM: My mother was Scottish. My father was an accountant.
35 D NADIA: And you?
36 D CALLUM: Also an accountant.
37 D NADIA: Ah. That explains the cutlery.
38 A ¶ They both laugh.
* 39 A The train lurches.
* 40 A Candles flicker.
41 A A glass slides and Callum catches it without looking, almost gracefully.
42 A ¶ Behind them, an ELDERLY COUPLE enters: HEDDA LINDQVIST-ROSE (70s, pearls, cane) and AMBROSE (70s, bow tie, a flask) bickering softly in tandem.
43 D HEDDA: Ambrose, you promised no more than one.
44 D AMBROSE: I promised no more than one at a time.
45 D HEDDA: That's not what a promise is.
46 D AMBROSE: It's what a promise is when you've been married fifty years.
47 A ¶ They pass the table.
48 A Hedda stops.
49 D HEDDA: My dears, you make a handsome pair.
50 D CALLUM: Oh, we're not--
51 D NADIA: We just met.
52 D AMBROSE: That's how it starts.
53 D HEDDA: That's exactly how it starts.
54 A ¶ They settle at the table behind them, still murmuring.
55 A Nadia lowers her voice.
56 D NADIA: They're adorable.
57 D CALLUM: They're terrifying.
58 A ¶ Giorgos returns with wine.
59 A Pours two glasses, then pauses over the third table.
60 D GIORGOS: Sir, madam, may I recommend the plum tart? It is the only thing I make myself.
61 D HEDDA: Two, please.
62 D AMBROSE: Three. For the road.
63 D GIORGOS: We are on the train, sir.
64 D AMBROSE: Even so.
65 A ¶ Callum raises his glass to Nadia.
66 A She lifts hers.
67 A Their eyes catch, hold.
68 D CALLUM: To blizzards.
69 D NADIA: To stranded trains.
70 D HEDDA: ^To fifty years!
71 D AMBROSE: ^To another fifty!
72 D NADIA (laughing): To everyone.
73 A ¶ Giorgos steps back.
74 A The couple chatters.
* 75 A The train rocks.
* 76 A For a moment the whole car glows.
* 77 A ¶ Then the lights flicker and die.
* 78 A Darkness.
* 79 A A scream of brakes.
* 80 A The car lurches.
* 81 A Glass shatters.
82 D CALLUM: Nadia?
83 D NADIA: I'm here.
84 D CALLUM: Hold on to me.
85 A ¶ A hand finds a hand in the dark.
86 D HEDDA [O.S.]: Ambrose!
87 D AMBROSE [O.S.]: Right here, love.
88 D GIORGOS [O.S.]: Please remain seated.
* 89 A ¶ The train shudders to a stop.
* 90 A Snow hisses against the windows.
* 91 A Somewhere, a single match is struck, and a tiny flame blooms.
92 D NADIA: Callum.
93 D CALLUM: Yes?
94 D NADIA: I think I'd like to know your last name.
95 D CALLUM: Fairbrother.
96 D NADIA: That is a terrible name.
97 D CALLUM: I'm told it's improving.

### SCENE s02444 | INT. SHIPBOARD OPERATING THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE KELLEHER-MBEKI
* 1 A ¶ A hospital ship in mid-ocean.
* 2 A Steel walls, bolted tables, lamps swaying in their housings.
* 3 A The deck rolls with a slow rhythm.
* 4 A Water drips from an unseen pipe.
* 5 A ¶ The theatre is empty.
* 6 A Instruments laid out in perfect rows.
* 7 A A digital recorder rests on the scrub sink, its red light blinking.
* 8 A ¶ The door swings open.
9 A A woman steps through: DR. SAOIRSE KELLEHER-MBEKI (40s, blue scrubs soaked at the collar, surgical cap, eyes red from forty hours awake).
10 A She carries a paper cup of tea and a patient file.
11 A ¶ She sets the cup down.
12 A Looks at the empty table.
13 D SAOIRSE: Nobody. Good.
14 A ¶ She picks up the recorder.
15 A Presses play.
* 16 A Her own voice fills the room, taped hours earlier.
17 D SAOIRSE [V.O.] (recording): Patient Adebayo. Male, fifty-two. Perforated bowel. We began at nineteen hundred.
18 A ¶ Saoirse stops the recording.
19 A Rewinds.
20 A Plays again.
21 D SAOIRSE [V.O., CONT'D] (recording): Complication at twenty-one-forty. Hemorrhage. We called it at twenty-two-ten.
22 A ¶ She snaps it off.
23 A Her hand trembles.
24 A She sits on the edge of the table, hard.
25 D SAOIRSE (softly): Twenty-two-ten.
26 A ¶ She lifts the tea and sips.
27 A Grimaces.
* 28 A It's cold.
29 A She sips again anyway.
* 30 A ¶ The ship pitches.
* 31 A The tea slides off the sink and spills across the floor.
32 A She does not move.
33 D SAOIRSE [CONT'D] (to the empty room): I did everything right.
* 34 A ¶ No answer.
* 35 A Water drips.
36 A ¶ She stands, crosses to the instrument tray, and lifts a scalpel.
37 A Turns it in the light.
38 A Sets it down.
39 A Picks up the recorder again.
40 D SAOIRSE [CONT'D] (into recorder): Dictation. Adebayo, continued. Cause of death: acute hemorrhage secondary to--
41 A ¶ Her voice catches.
42 A She presses stop.
43 A Closes her eyes.
44 A ¶ She keeps speaking to the empty theatre.
45 D SAOIRSE [CONT'D] (whispering): I'm sorry. I'm so sorry.
46 A ¶ She pulls a grey ship's blanket from a shelf and drapes it over her shoulders.
47 A Presses the recorder to her chest.
48 D SAOIRSE [V.O., CONT'D] (recording, from earlier): Time of death, twenty-two-ten. Closing.
49 A ¶ She opens her eyes.
50 A Sets the recorder in its cradle, light still blinking, and sits in the dark alone.

### SCENE s02445 | EXT. LAKE - DIVING PLATFORM - LATE AFTERNOON, END OF SUMMER
Detected names (may be incomplete or contain aliases): LEILANI KAMAKA, JONAH FELDSTEIN, CRICKET OYELARAN-PARK
* 1 A ¶ A wooden platform floats on oil drums, sun-bleached and splintered, anchored fifty yards from shore.
* 2 A Beyond, pines darken the hills.
* 3 A Water slaps the barrels in a slow rhythm.
* 4 A The light is amber, the air already cooler.
5 A ¶ LEILANI KAMAKA (17, wet hair, towel around her shoulders, a paperback damp at the corners) sits on the edge with her feet in the water.
6 A JONAH FELDSTEIN (17, sunburned nose, swim trunks faded to grey) lies flat on his back, staring at the sky.
7 A CRICKET OYELARAN-PARK (16, skinny, goggles pushed up, a wristwatch that is too big) sits cross-legged between them, building a tiny stack of pebbles.
* 8 A ¶ A radio somewhere on shore plays a song that was popular in June.
9 D CRICKET: Fifteen days.
10 D JONAH: Don't.
11 D CRICKET: Until school.
12 D LEILANI: He said don't.
13 D CRICKET: I'm only saying it out loud so it's less scary.
14 D JONAH: It's not less scary.
15 D CRICKET: No. It's not.
* 16 A ¶ Silence.
* 17 A A loon cries across the lake.
18 A ¶ Leilani lifts her feet from the water and hugs her knees.
* 19 A The sun sinks another inch.
* 20 A Their shadows stretch across the planks, three long fingers pointing at nothing.
21 D LEILANI: I won't be on the bus.
22 A ¶ Jonah props up on one elbow.
23 D JONAH: What?
24 D LEILANI: My mom got the job in Tacoma. We leave Friday.
25 D JONAH: Friday.
26 D CRICKET: This Friday?
27 D LEILANI: I was going to tell you.
28 A ¶ Cricket knocks over the pebble stack.
* 29 A It makes no sound on the wet wood.
30 D JONAH: Okay.
31 D LEILANI: Okay?
32 D JONAH: What do you want me to say?
33 D LEILANI: I don't know. Something.
34 A ¶ Jonah sits up, brushes sand from his palms.
35 A He looks at the shore, where the dock lights are coming on one by one.
36 D JONAH: You'll hate it there.
37 D LEILANI: Probably.
38 D JONAH: Good.
39 A ¶ She laughs, wet and short.
40 A Cricket pulls his goggles down over his eyes like a mask and lies back.
41 D CRICKET (muffled): Can we stay here until the sun is gone?
42 D LEILANI: Yeah.
43 D JONAH: Yeah.
44 A ¶ They lie shoulder to shoulder on the platform.
* 45 A The light fades from gold to rose to a deep, cool blue.
* 46 A The barrels creak beneath them.
* 47 A On shore, someone turns off the radio.
48 A ¶ Leilani reaches across Cricket and takes Jonah's hand.
49 A He doesn't look at her.
50 A He holds on.
* 51 A ¶ Stars come out, one at a time.

### SCENE s02446 | INT. ROADSIDE WAX MUSEUM - HALL OF PRESIDENTS - NIGHT
Detected names (may be incomplete or contain aliases): ONE ONLY, HARLAN BOONE, DOLORES KIM, KIT ABERNATHY, MASON TREVELYAN, YVETTE DUBOIS
* 1 A ¶ Dim corridor.
* 2 A Red velvet ropes.
* 3 A Wax figures stand on low platforms in dusty suits, their glass eyes catching the flashlight beams.
* 4 A A faded banner: "ONE DAY ONLY - FOREVER."
5 A ¶ HARLAN BOONE (40s, museum owner, ring of keys, bathrobe over pajamas) leads four visitors down the hall, lantern swinging.
6 A Behind him: DOLORES KIM (50s, schoolteacher, tote bag), KIT ABERNATHY (20s, backpacker, headlamp), MASON TREVELYAN (30s, salesman, loosened tie), and YVETTE DUBOIS (30s, nurse, scrubs under a parka).
7 D HARLAN: Right this way, folks. The museum closes at six, but I make exceptions for storms.
8 D DOLORES: Thank you, Mr. Boone. We were nearly in a ditch.
9 D HARLAN: Best place to be nearly in a ditch is my front door.
10 D KIT: Are these all real people?
11 D HARLAN: Wax, miss. All wax.
12 D MASON: They look awfully real.
13 D HARLAN: That's the craft.
14 A ¶ Yvette stops at a figure of Abraham Lincoln.
15 A She reaches out, touches its sleeve, and pulls back.
16 D YVETTE: It's warm.
17 D HARLAN: That's the lamp.
18 D YVETTE: There's no lamp.
19 A ¶ Harlan keeps walking.
20 A The visitors exchange glances.
21 D KIT: Is anyone else getting a weird vibe?
22 D DOLORES: ^Is that wax supposed to be breathing?
23 D MASON: ^Is that wax supposed to be breathing?
24 A ¶ Dolores and Mason speak at once, then look at each other in alarm.
25 A All four turn toward the Lincoln figure.
26 A ¶ Its head swivels slowly toward them.
27 D YVETTE: Oh no.
28 A ¶ Harlan stops at the end of the hall.
29 A Turns.
30 A His smile has changed.
31 A It is wider and wrong.
32 D HARLAN: Don't be rude, folks. They've been waiting a very long time for company.
33 A ¶ All along the hall, the wax figures stir.
34 A A hand lifts.
* 35 A A jaw clicks.
* 36 A A glass eye rolls forward.

### SCENE s02447 | INT. BOXING GYM - FORMER CHURCH SANCTUARY - EARLY MORNING
Detected names (may be incomplete or contain aliases): BERNARD OYELOWE-STEIN, LUZ MERCADO, KOFI ASARE
* 1 A ¶ Stained glass above the ring.
* 2 A Pews stacked against the wall.
* 3 A A speed bag thuds in a corner.
4 A ¶ BERNARD OYELOWE-STEIN (60s, trainer, towel over shoulder) holds the pads.
5 A LUZ MERCADO (20s, boxer, hand wraps frayed) slams a combination into them.
6 A Left.
7 A Right.
8 A Left.
9 A ¶ KOFI ASARE (20s, sparring partner, headgear) waits on the ropes, bouncing slowly.
10 A ¶ Bernard says nothing.
11 A Luz throws again.
12 A Harder.
13 A ¶ Bernard lowers the pads.
14 D BERNARD: Again.
15 A ¶ She throws.
16 A He tilts his head, listening to the snap.
17 D BERNARD [CONT'D]: Again.
18 A ¶ Luz exhales through her nose.
19 A Throws.
20 A Her shoulder is rigid.
21 A Bernard watches her elbow.
22 A ¶ Kofi climbs through the ropes.
23 A Offers his gloves.
24 A Luz doesn't look at him.
25 D BERNARD [CONT'D]: Three rounds.
26 A ¶ Luz tapes a wrist.
27 A Kofi taps his headgear twice.
* 28 A A bell rings somewhere above.
* 29 A Light through the glass lays red and blue across the canvas.
30 A ¶ They circle.

### SCENE s02448 | INT. SHIPPING CONTAINER PICKLEBALL COURT - EVENING
Detected names (may be incomplete or contain aliases): ANNIKA STRAND, SOLEDAD VEGA, MARCUS BELL
* 1 A ¶ A forty-foot steel container, opened at both ends, its inside painted court-green.
* 2 A Folding chairs line one wall.
* 3 A A net sags between two rusted poles.
4 A ¶ ANNIKA STRAND (30s, visor, knee brace) and SOLEDAD VEGA (30s, sweatband, quick feet) face each other across the net.
5 A MARCUS BELL (40s, referee, whistle, clipboard) sits on a stepladder at the sideline.
6 D MARCUS: First to eleven. Win by two.
7 D ANNIKA: Marcus, we know.
8 D MARCUS: Just saying it for the record.
9 D SOLEDAD: Serve, Annika.
10 D ANNIKA: Soledad, you serve.
11 D SOLEDAD: It's your turn.
12 D ANNIKA: It was your turn.
13 D MARCUS: Neither of you serves until I say.
14 A ¶ They glare.
15 A Marcus lifts his whistle.
16 A Waits.
17 A Blows.
18 A ¶ Annika serves.
19 A Soledad returns, low.
20 A Annika scrambles.
21 A She lobs.
22 A Soledad smashes.
23 A Annika dives.
24 A Misses.
25 D MARCUS [CONT'D]: Point, Soledad.
26 D ANNIKA: She stepped in the kitchen!
27 D MARCUS: She did not.
28 D ANNIKA: Marcus, I saw her foot.
29 D MARCUS: Annika, I saw her foot too, and it was behind the line.
30 A ¶ Soledad grins.
31 A Annika hurls her paddle onto the steel floor.
* 32 A It clangs.
33 D MARCUS [CONT'D]: That's a warning.
34 D ANNIKA: You're a warning.
35 D SOLEDAD: Be nice, Annika.
36 D ANNIKA: She's nice. I'm nice. You're not even here.
37 A ¶ Soledad bounces the ball.
38 D SOLEDAD: Eight-two. Want to forfeit?
39 D ANNIKA: Never.
40 A ¶ She retrieves the paddle.
41 A Plants her feet.
42 A Her knuckles whiten.

### SCENE s02449 | INT. PLANETARIUM - DOME THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR LINDIWE DUBE, FERDINAND ACHEBE-LARSEN, ROLAND PIKE
* 1 A ¶ Rows of reclined seats.
* 2 A The domed ceiling glows with a frozen field of stars.
* 3 A A beam of red light from the projector sweeps slowly across the constellation Orion.
4 A ¶ INSPECTOR LINDIWE DUBE (50s, trench coat, notebook) stands at the base of the control console.
5 A Beside her, FERDINAND ACHEBE-LARSEN (60s, planetarium director, bow tie) wrings his hands.
6 A Over by the exit door, ROLAND PIKE (30s, security guard, flashlight, mint-green uniform) shifts from foot to foot.
7 A Slumped across the console under a blanket lies the body of a night technician.
8 D DUBE: Mr. Achebe-Larsen, when did you find her?
9 D FERDINAND: At closing. Around ten.
10 D DUBE: And you touched nothing?
11 D FERDINAND: Nothing. I only draped the blanket.
12 D DUBE: That is touching something.
13 D FERDINAND: Inspector, I could not leave her exposed.
14 A ¶ Dube kneels.
15 A Lifts the blanket.
16 A Studies the hands, the collar, the tiny bruise at the base of the neck.
17 A She glances at the console, then up at the false stars.
18 D DUBE: Orion is upside down.
19 D FERDINAND: It is?
20 D DUBE: The projector is calibrated for the southern sky. Someone changed it.
21 A ¶ Ferdinand's hands tremble.
22 A He steps back, bumping a seat.
23 D ROLAND: Maud never touched the settings. She told me that herself, Mr. Ferdinand.
24 D FERDINAND: Roland, please.
25 D DUBE: Mr. Pike. You were on the door tonight?
26 D ROLAND: Yes, ma'am. I signed everyone out. Only Mr. Ferdinand and Maud were left.
27 A ¶ Ferdinand and Roland look at each other.
28 A Neither blinks.
29 A Dube looks from one to the other and writes one line, underlines it twice.
30 A ¶ Her notebook slips.
31 A Dube and Roland both stoop to catch it, collide, freeze, both apologize at once.
32 D DUBE: Sorry.
33 D ROLAND: My fault entirely.
34 A ¶ She retrieves it herself.
35 D DUBE: Mr. Achebe-Larsen, who has keys to the projector room?
36 D FERDINAND: Only myself and Maud.
37 D DUBE: Then I suggest you tell me where you were at nine fifteen.
* 38 A ¶ The projector hums.
* 39 A A shooting star arcs across the dome, perfectly timed, perfectly empty.
40 D FERDINAND: Inspector. Is that a question?
41 D DUBE: It is the only one I have left.

### SCENE s02450 | INT. MOBILE DIALYSIS TRUCK - DAY
Detected names (may be incomplete or contain aliases): THANDIWE MOLOI, ELLSWORTH CRANE, NURSE KRZYSZTOF WIERZBICKI
* 1 A ¶ A converted delivery truck parked on a gravel lot beside a wheat field.
* 2 A Inside: three recliners, humming machines, tubing coiled like pale vines.
* 3 A Sunlight leaks through a sliver of window.
4 A ¶ DR. THANDIWE MOLOI (40s, braids pinned up, lanyard heavy with keys) adjusts a monitor.
5 A ELLSWORTH CRANE (70s, farmer's cap, forearms like rope) sits in the nearest recliner, one arm hooked to a machine.
6 A NURSE KRZYSZTOF WIERZBICKI (30s, scrubs, a crossword folded in his pocket) calibrates a pump.
7 D ELLSWORTH: You'd think a man could get his blood cleaned closer to home.
8 D MOLOI: You'd think.
9 D ELLSWORTH: Forty miles each way, three days a week.
10 D KRZYSZTOF: It's thirty-eight miles, Mr. Crane.
11 D ELLSWORTH: Not from my end.
12 D MOLOI: How's the pressure?
13 D ELLSWORTH: Same as always. Low and stubborn.
14 D KRZYSZTOF: Hundred-ten over seventy.
15 D MOLOI: Fine. Any dizziness?
16 D ELLSWORTH: Only from the cooking at the diner.
17 D KRZYSZTOF: Mr. Crane, you aren't supposed to be eating at the diner.
18 D ELLSWORTH: Son, it's the only place that serves pie.
19 D MOLOI: Ellsworth.
20 D ELLSWORTH: One slice.
21 D MOLOI: Last week it was three.
22 D ELLSWORTH: It was a small week.
23 A ¶ Krzysztof laughs into his mask.
24 A Moloi shakes her head, but she's smiling.
25 D MOLOI: Okay. Run is two hours. If you need anything--
26 D ELLSWORTH: I know. Press the button.
27 D MOLOI: Press the button.
28 D ELLSWORTH: And don't die.
29 D MOLOI: That one too.
* 30 A ¶ The machine hums.
31 A Ellsworth closes his eyes.
32 A Krzysztof returns to his crossword.
* 33 A ¶ Then the machine chirps.
* 34 A A low, dull alarm.
35 A ¶ Krzysztof and Moloi glance at the monitor at the same time.
* 36 A A red line climbs.
37 D KRZYSZTOF: Air in the line.
38 D MOLOI: Clamp it.
39 A ¶ Krzysztof lunges.
40 A Moloi dives for the other end.
41 A Their hands collide on the tubing, fingers tangling, both clamp at once.
* 42 A The alarm shrieks.
43 D ELLSWORTH: What's wrong?
44 D MOLOI: Nothing. Stay still.
45 D ELLSWORTH: Doctor.
46 D MOLOI: Mr. Crane, I need you to breathe.
47 A ¶ Krzysztof and Moloi lean over him, working in tandem.
48 A Krzysztof flushes the line.
49 A Moloi checks the needle.
50 A Ellsworth's face is gray.
* 51 A ¶ Silence.
* 52 A The alarm stops.
* 53 A The monitor steadies.
54 A Ellsworth opens one eye.
55 D ELLSWORTH: Was that me?
56 D MOLOI: It was the line.
57 D ELLSWORTH: Thank God.
58 D KRZYSZTOF (shaky): Not funny, Mr. Crane.
59 D ELLSWORTH: Wasn't joking.

### SCENE s02451 | INT. OFFICE BREAK ROOM - MORNING
Detected names (may be incomplete or contain aliases): FAMILY, BRENDA SZABO, QUENTIN FAIRLEIGH, RAVINDRA SHETTY, TESS OKAFOR-LUND, ARCHIBALD STONE, ALL
* 1 A ¶ Fluorescent hum.
* 2 A A vending machine stuffed with a single bag of pretzels.
* 3 A A laminated sign: "WE ARE A FAMILY."
4 A ¶ BRENDA SZABO (50s, lanyard, cardigan) stands at the coffee maker, stirring a cup that is already stirred.
5 A QUENTIN FAIRLEIGH (30s, ironed shirt) stares at his phone.
6 A RAVINDRA SHETTY (40s, headset, one earbud in) pours water on a dying plant.
7 A TESS OKAFOR-LUND (20s, intern, binder) hugs the wall.
* 8 A ¶ Nobody talks.
* 9 A The coffee maker gurgles.
10 D QUENTIN: Anyone get the memo?
11 D BRENDA: Which one?
12 D QUENTIN: The one about the other memo.
13 D RAVINDRA (not looking up): I thought it was cancelled.
14 D TESS: There's a memo?
15 A ¶ Brenda and Quentin exchange a look.
16 A Then they study the pretzels.
* 17 A ¶ The door opens.
18 A ARCHIBALD STONE (50s, tailored suit, a smile like a hospital bed) steps in.
19 A Everyone stiffens.
20 D ARCHIBALD: Good morning, family.
21 D ALL (mumbled): Morning.
22 A ¶ Archibald crosses to the vending machine.
23 A Puts in a coin.
* 24 A The pretzels fall.
25 A He opens the bag.
26 D ARCHIBALD: Tess, I hear you've been rearranging the supply closet.
27 D TESS: I was told to--
28 D ARCHIBALD: It's lovely. Truly. We should have a meeting about it.
29 A ¶ Brenda drops her spoon.
* 30 A It clatters.
31 A Quentin sets his phone face down.
32 A Ravindra waters the plant again.
* 33 A It drowns.

### SCENE s02452 | INT. SUBMARINE MUSEUM - TORPEDO ROOM - WRESTLING MAT - NIGHT
Detected names (may be incomplete or contain aliases): HARBOR DISTRICT WRESTLING, COACH BASIL MWANGI, DMITRI VOLKOV, HECTOR LE, N-ABARA, EDDIE PRAGER
* 1 A ¶ The torpedo room of a decommissioned Cold War submarine, converted into a practice space.
* 2 A Rusted racks line the walls.
* 3 A A blue wrestling mat covers the deck plates.
* 4 A Pipes sweat overhead; a green emergency bulb throws everything into the color of pond water.
* 5 A ¶ A faded banner: "HARBOR DISTRICT WRESTLING - STATE TRIALS."
6 A ¶ COACH BASIL MWANGI (50s, squat, bald, whistle on a bootlace) paces the edge of the mat.
7 A He holds a stopwatch and a coffee thermos, and uses neither.
8 A ¶ DMITRI VOLKOV (17, heavy shoulders, scarred eyebrow) crouches on the mat, rolling his neck.
9 A HECTOR LEÓN-ABARA (17, wiry, taped fingers) shakes out his arms in the opposite corner.
10 A EDDIE PRAGER (30s, local ref, striped shirt, reading glasses on a cord) squats between them to inspect their singlets.
11 D BASIL: Last round of the night. Winner goes to State.
12 D DMITRI: Coach, we've wrestled forty times.
13 D BASIL: This is the forty-first.
14 D HECTOR: He always gets the underhook.
15 D BASIL: Then you break it.
16 D DMITRI: He won't.
17 D HECTOR: I will.
18 D BASIL: Boys.
19 D EDDIE: Gentlemen. Hands.
20 A ¶ They touch hands.
21 A Both are damp.
22 D EDDIE [CONT'D]: Wrestle.
23 A ¶ They lock up.
24 A Dmitri drives.
25 A Hector sprawls.
* 26 A The mat squeaks.
27 D BASIL: Hips, Hector!
28 D DMITRI (grunting): Get off me.
29 D HECTOR: Get off me!
30 D EDDIE: Both of you, break!
31 A ¶ They break.
* 32 A Circle.
33 A Dmitri shoots a double.
34 A Hector hops back, drops his weight, and rides Dmitri to the mat.
35 D BASIL: That's it!
36 D EDDIE: Two points, León-Abara.
37 D DMITRI: That was a stall!
38 D EDDIE: It was not.
39 D BASIL: It was beautiful.
40 D DMITRI: Coach, whose side are you on?
41 D BASIL: Both. Neither. Wrestling.
42 A ¶ Dmitri spits on the mat.
43 A Hector smirks.
44 A Eddie raises a warning finger.
45 D EDDIE: One more of that, Volkov, and it's a penalty.
46 D DMITRI: He's baiting me.
47 D HECTOR: He's tired.
48 D BASIL: They're both tired. Wrestle!
49 A ¶ They lock up again.
* 50 A The green bulb flickers.
51 A Dmitri snaps a headlock.
52 A Hector twists.
53 A For a moment they are one tangled shape.
54 D EDDIE: Pin, pin, hold it--
55 D BASIL: Get your shoulders up, Hector!
56 D HECTOR (through his teeth): I'm trying!
57 D DMITRI (through his teeth): Stay down!
* 58 A ¶ The pipes overhead groan.
* 59 A A drop of condensation splashes onto Eddie's glasses.
60 A He wipes it, never taking his eyes from the mat.
61 D EDDIE: One. Two.
62 A ¶ Hector bridges.
63 A His neck veins strain.
64 A Dmitri leans harder.
65 D BASIL: Coach says up, Hector, up!
66 D HECTOR: Coach says what?
67 D BASIL: UP!
68 A ¶ Hector explodes.
69 A He throws a hip, rolls, and lands on top of Dmitri with a crash that shakes the deck plates.
70 A Dmitri's shoulders hit the mat.
71 D EDDIE: One. Two. Three!
72 A ¶ He slaps the mat.
73 A Hector rolls away, chest heaving.
74 A Dmitri lies face up, staring at the pipes.
75 D EDDIE [CONT'D]: Winner, León-Abara.
* 76 A ¶ Silence.
77 A Basil sets down the thermos.
78 A Walks onto the mat and kneels beside Dmitri.
79 D BASIL: You okay, Volkov?
80 D DMITRI (flat): Fine.
81 D BASIL: You wrestled well.
82 D DMITRI: I lost.
83 D BASIL: Both of those things are true.
84 A ¶ Dmitri sits up.
85 A Hector offers a hand.
86 A Dmitri looks at it for a long beat.
87 A Takes it.
88 D DMITRI (quietly): Take it to State.
89 D HECTOR: I will.
90 D DMITRI: And break his underhook.
91 A ¶ Hector grins.
92 A Eddie checks his stopwatch and folds his glasses.
93 D EDDIE: I'm going home.
94 D BASIL: Coffee, Eddie?
95 D EDDIE: God, yes.
* 96 A ¶ The green bulb buzzes.
* 97 A Somewhere deep in the sub, a drip keeps time.

### SCENE s02453 | INT. OCEAN LINER - WIRELESS ROOM - NIGHT (1912)
Detected names (may be incomplete or contain aliases): OTTOLINE FARRINGTON-ADE, PERCIVAL SUTTON-KAGAN, CAPTAIN WEXFORD, CARPATHIA OPERATOR
* 1 A ¶ A cramped cabin lined with brass dials and copper coils.
* 2 A A single lamp swings on a chain.
* 3 A The sound of the sea is a low roar beyond the bulkhead.
4 A ¶ OTTOLINE FARRINGTON-ADE (20s, wireless operator, jacket too large, headphones clamped over her ears) taps a telegraph key.
5 A She is thin, pale, her fingers raw from hours of work.
6 A ¶ PERCIVAL SUTTON-KAGAN (30s, junior officer, his collar loosened) sits beside her, a stack of messages on his knee.
7 A ¶ CAPTAIN WEXFORD (60s, white beard, frayed cap) stands in the doorway, filling it.
8 A ¶ She keys a final burst and listens.
* 9 A Static.
* 10 A A long hiss.
11 D PERCIVAL: Anything?
12 D OTTOLINE: Not yet.
13 D CAPTAIN WEXFORD: Keep sending.
14 A ¶ She nods and taps again.
* 15 A SOS.
* 16 A SOS.
* 17 A The key clicks.
18 A Percival watches her hand.
19 A ¶ He glances at the captain.
20 A The captain says nothing.
* 21 A ¶ A new sound in the headphones.
* 22 A A thin, far voice.
23 A Ottoline stiffens.
24 D OTTOLINE (whisper): Someone's answering.
25 A ¶ She presses the headset tighter.
26 A Her eyes widen.
27 D CARPATHIA OPERATOR [V.O.] (over wireless, faint): Titanic, this is Carpathia. We are coming. Hold on.
28 A ¶ Percival gasps.
29 A Captain Wexford closes his eyes.
30 A Ottoline bursts into tears and laughs at the same time.
31 D OTTOLINE: Four hours!
32 D PERCIVAL: Four hours!
33 D CAPTAIN WEXFORD: Tell them to hurry.
34 A ¶ Ottoline taps the reply.
35 A Her fingers steady.
36 A When she finishes, she leans back and shuts her eyes.
* 37 A ¶ The lamp stops swinging.
* 38 A For the first time that night, the room is still.

### SCENE s02454 | INT. FUNERAL HOME - BASEMENT KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): DOROTHEA PELLEGRINO, STANLEY PELLEGRINO, ROSALIND VANCOUVER-ADEYEMI
* 1 A ¶ A low-ceilinged room with a stainless-steel prep table, an old gas range, and a long counter heaped with covered casserole dishes.
* 2 A A hand-lettered sign over the sink reads "PLEASE LABEL YOUR PAN."
* 3 A Upstairs, muffled footsteps and the low murmur of mourners.
4 A ¶ DOROTHEA PELLEGRINO (60s, black dress, cardigan, reading glasses on a chain) stands at the counter peeling foil from a lasagna.
5 A Her hands are quick, efficient, furious.
6 A STANLEY PELLEGRINO (60s, her brother, stiff suit, thinning hair) sits at the prep table with a cup of untouched coffee.
7 A ROSALIND VANCOUVER-ADEYEMI (40s, their cousin, heels in one hand) pours wine into a plastic cup.
8 D DOROTHEA: Stanley, bring me the serving spoons.
9 D STANLEY: Where are they?
10 D DOROTHEA: Where they have always been.
11 D STANLEY: I haven't been down here in ten years.
12 D DOROTHEA: Then you won't know where they are. Rosalind, the spoons.
13 D ROSALIND (over her shoulder): Drawer by the sink.
14 A ¶ Rosalind opens the drawer, fishes out three spoons, and hands them to Dorothea without looking.
15 D DOROTHEA: Thank you.
16 D ROSALIND: Of course.
17 A ¶ Dorothea lays the spoons across the dishes.
18 A Stanley rises, picks up the coffee, sets it down, picks up a casserole instead.
19 D STANLEY: That's heavy.
20 D DOROTHEA: It is a lasagna.
21 D STANLEY: It's heavy.
22 D DOROTHEA: Then put it down.
23 D STANLEY: I'm trying to help.
24 A ¶ Dorothea turns.
25 A Her jaw works.
26 D DOROTHEA: You could have helped with the hospital bills.
27 D STANLEY: Dot.
28 D DOROTHEA: You could have helped when Mama was sick.
29 D STANLEY: That's not fair.
30 D ROSALIND (to the wine): Here we go.
31 A ¶ Stanley slams the casserole on the counter.
* 32 A The foil crumples.
33 A Rosalind steps between them, arms out, wine sloshing.
34 D ROSALIND [CONT'D]: Everyone! Everyone, upstairs can hear you!
35 A ¶ Both siblings freeze.
* 36 A A chair scrapes overhead.
* 37 A Footsteps stop.
38 D DOROTHEA (low): Mama would be mortified.
39 D STANLEY: She'd be laughing.
40 D DOROTHEA: She would not.
41 D STANLEY: She would. She loved a good fight.
42 A ¶ Dorothea almost smiles.
43 A She hides it behind a cough.
44 A Rosalind sets down her cup and takes both of their hands.
45 D ROSALIND: Listen to me. We are going to carry these dishes upstairs, and we are going to be kind to each other.
46 D STANLEY: Rosalind.
47 D ROSALIND: And afterward, you can scream at me in the parking lot.
48 D DOROTHEA (muttering): I will.
49 D STANLEY (muttering): I might.
50 A ¶ Rosalind lets go.
51 A The three of them stare at one another, then at the counter full of lasagna and pie and ham.
52 A ¶ Stanley lifts a tray.
53 A Dorothea lifts another.
54 A Rosalind hooks her shoes on two fingers and grabs the wine.
55 A ¶ They file up the stairs one behind the other, the dishes clinking.

### SCENE s02455 | INT. TRAIN STATION - LOST AND FOUND OFFICE - EVENING
Detected names (may be incomplete or contain aliases): HELENA MARCZAK, MAN, TEODOR
* 1 A ¶ A narrow room of wire shelves heaped with umbrellas, scarves, odd gloves, a taxidermied owl in a glass bell jar.
* 2 A A brass counter bell.
* 3 A A flickering fluorescent strip.
4 A ¶ HELENA MARCZAK (50s, cardigan, lanyard) sits behind the counter with a ledger.
5 A She writes slowly, ignoring the clock above her.
6 A ¶ A MAN enters.
7 A Mid-forties, gray overcoat, wet hair.
8 A He holds a ticket stub like a talisman and does not step past the mat.
9 D MAN: Hello. I lost something.
10 D HELENA: Everyone has.
11 D MAN: A leather satchel. Brown. It has my initials.
12 D HELENA: Which are?
13 D MAN: T.R.
14 D HELENA: That's not much.
15 D MAN: It is to me.
16 A ¶ Helena turns pages.
17 A Her finger travels down a column.
18 A She stops.
19 D HELENA: Brown satchel, T.R. Brought in Tuesday. Found on Platform Four.
20 D MAN: Yes.
21 D HELENA: Under a bench.
22 D MAN: I was waiting for a train.
23 D HELENA: Which one?
24 A ¶ The man hesitates.
25 D MAN: I don't remember.
26 A ¶ Helena sets down her pen, looks at him properly.
27 A His hands shake slightly.
28 D HELENA: Sir, what's your name?
29 D MAN: Teodor.
30 D HELENA: Teodor what?
31 D TEODOR: Rusu.
32 D HELENA: Then it's yours, Mr. Rusu.
33 A ¶ She goes to the shelf, lifts the satchel, sets it on the counter between them.
34 A Teodor stares at it but does not touch it.
35 D TEODOR: What's in it?
36 D HELENA: I don't open them.
37 D TEODOR: Would you?
38 D HELENA: That's not my job.
39 A ¶ Teodor unbuckles the strap.
40 A His hand freezes at the flap.
41 A He looks up.
42 D TEODOR: ^I'm afraid.
43 D HELENA: ^I know.
44 A ¶ They say it together, softly, and the fluorescent strip buzzes.
45 A Teodor opens the flap.
* 46 A Inside, a child's red mitten.
47 A ¶ He lifts it out.
48 A Holds it against his chest.
49 D TEODOR [CONT'D] (barely audible): Thank you.
50 A ¶ Helena nods.
51 A Writes nothing in the ledger.
* 52 A Behind her the owl watches from its jar.
53 D TEODOR [CONT'D]: Do you keep things that no one comes for?
54 D HELENA: Seven years. Then we donate them.
55 D TEODOR: Seven years.
56 D HELENA: Mr. Rusu. You came.
57 A ¶ He nods, once.
58 A Tucks the mitten into his coat.
59 A Walks out into the rain.

### SCENE s02456 | INT. AMBULANCE - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): CYRUS BEAUMONT-OKAFOR, WOMAN, ODILE
* 1 A ¶ A gridlocked highway.
* 2 A Red tail lights stretch to the horizon.
* 3 A Rain.
* 4 A The ambulance siren whoops, goes silent, whoops again.
* 5 A It is not moving.
6 A ¶ CYRUS BEAUMONT-OKAFOR (30s, paramedic, reflective vest, steady hands) kneels beside a stretcher.
7 A On it lies a WOMAN (60s, oxygen mask, silver hair plastered to her forehead, a rosary wound around one wrist).
8 D CYRUS: Ma'am, stay with me.
9 A ¶ The woman's lips move behind the mask.
10 D CYRUS [CONT'D]: Say again?
11 D WOMAN: Pain.
12 D CYRUS: Where?
13 D WOMAN: Here.
14 A ¶ She presses a shaking hand against her sternum.
15 A Cyrus checks the monitor.
* 16 A The line jumps.
17 A He tears open a packet.
18 D CYRUS: Aspirin. Chew.
19 A ¶ She chews.
20 A Winces.
21 A He adjusts the oxygen.
* 22 A ¶ A horn blares from the cab, long and helpless.
23 A Cyrus slams his fist on the partition.
24 D CYRUS [CONT'D]: Anything?
* 25 A ¶ Nothing.
* 26 A Rain beats the roof.
27 A ¶ He turns back to the woman.
28 A Her eyes are glassy.
29 D CYRUS [CONT'D]: What's your name?
30 D WOMAN: Odile.
31 D CYRUS: Odile. I'm Cyrus. We'll get you there.
32 D ODILE (whispering): You're kind.
33 D CYRUS: I'm stuck.
34 D ODILE: Both.
* 35 A ¶ The monitor chirps.
36 A Cyrus grabs the paddles, then lets them fall back.
37 A Her rhythm steadies, ragged but present.
38 A ¶ He grips her hand.
39 A She grips his.
* 40 A The rosary beads dig into both their palms.
41 D CYRUS [CONT'D]: Odile, listen. If you can hear me, squeeze.
42 A ¶ She squeezes.
* 43 A ¶ Outside, the red lights ahead begin to slide apart, and a lane opens.
* 44 A ¶ The ambulance lurches forward.

### SCENE s02457 | INT. FLORIST'S COLD ROOM - NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN HARTLEY-SOLANKI, DARIO FENWICK-ADEBAYO, WINNIE ZHAO
* 1 A ¶ Steel shelves heavy with buckets of peonies, ranunculus, white lilacs.
* 2 A The compressor hums.
* 3 A Everything is breath and mist.
4 A ¶ IMOGEN HARTLEY-SOLANKI (30s, apron, secateurs) trims stems at a work table.
5 A DARIO FENWICK-ADEBAYO (30s, bike courier, helmet under his arm) hovers at the door.
6 A WINNIE ZHAO (60s, shop owner, quilted vest, thick glasses) counts invoices.
7 D DARIO: I can come back.
8 D IMOGEN: It's fine.
9 D WINNIE: He's here for the roses.
10 D DARIO: Two dozen. For tonight.
11 D IMOGEN: Red?
12 D DARIO: White.
13 A ¶ Imogen pauses, a stem in mid-air.
14 D IMOGEN: White. Right.
15 D WINNIE: Dario, that's a funeral color.
16 D DARIO: It's what she likes.
17 D WINNIE: Who?
18 D DARIO (quickly): A friend.
19 D IMOGEN: Eighteen dollars a dozen.
20 D DARIO: Okay.
21 A ¶ She wraps.
22 A Her thumb catches a thorn.
23 A She doesn't flinch.
24 D WINNIE: Imogen, you're bleeding.
25 D IMOGEN: I'm fine.
26 D DARIO: Do you need a--
27 D IMOGEN: I'm fine.
28 A ¶ Dario retrieves a tissue from his pocket and holds it out.
29 A She hesitates, then takes it.
30 A Their fingers touch.
31 D DARIO: Hey, Imogen.
32 D IMOGEN: Mm.
33 D DARIO: Never mind.
34 A ¶ She finishes the bouquet.
35 A Slides it across the table.
36 A Neither of them reaches for it.
37 D WINNIE (pointedly): The roses go in his hands, dear.
38 A ¶ Imogen lifts them.
39 A Dario takes them.
* 40 A The mist swirls between them.
41 A He leaves.
* 42 A The door clicks.
43 D WINNIE [CONT'D]: White roses.
44 D IMOGEN: I know.
45 D WINNIE: He's not buying them for a friend.
46 D IMOGEN: I know.
47 A ¶ She lifts the next stem.
* 48 A The scissors snap.
49 A Winnie goes back to her invoices.

### SCENE s02458 | INT. COURTHOUSE - JURY DELIBERATION ROOM - DAY
Detected names (may be incomplete or contain aliases): GRETCHEN LANDOWSKI, JUROR 8, MOHAN IYER, BETTINA OYELOWO, WALT BRZEZINSKI, ISAAC
* 1 A ¶ A bare table, twelve chairs, a ticking radiator.
* 2 A Five jurors remain at the table; the others are on break.
3 A ¶ GRETCHEN LANDOWSKI (JUROR 3) (50s, perm, sharp elbows) taps her pen.
4 A MOHAN IYER (JUROR 5) (40s, tie loosened, calculator) stares at the table.
5 A BETTINA OYELOWO (JUROR 11) (60s, church hat) folds her hands.
6 A WALT BRZEZINSKI (JUROR 12) (70s, hearing aid, windbreaker) peels an orange.
7 A JUROR 8 (30s, rolled sleeves, tired eyes) stands by the window.
8 D GRETCHEN: It's open and shut.
9 D JUROR 8: Is it?
10 D GRETCHEN: Ten to two. We've been here for six hours.
11 D JUROR 8: I'm not asking you to change your mind. I'm asking you to hear mine.
12 D MOHAN: We've heard it.
13 D JUROR 8: Have you?
14 D BETTINA: Let him speak, Mohan.
15 D WALT (too loudly): What did he say?
16 D BETTINA: He wants to speak!
17 D WALT: Then let him!
18 A ¶ Juror 8 turns from the window.
19 A He looks at each face.
20 D JUROR 8: My name is Isaac. I know we've avoided names. But a man's life is on that table, and I don't want to decide it with numbers.
21 D GRETCHEN: Fine. Isaac. Say your piece.
22 D ISAAC: The witness couldn't have seen the face at that distance. I stood at the same window yesterday.
23 D MOHAN: You went to the scene?
24 D ISAAC: I went home. I stood at my own window.
25 D GRETCHEN: That's not evidence.
26 D ISAAC: Neither is a guess.
* 27 A ¶ Silence.
* 28 A The radiator knocks.
29 A Walt offers Bettina half his orange.
30 A She takes it.

### SCENE s02459 | INT. CORPORATE ESCAPE ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): LONNIE KASPRZAK, DEEPA MURTHY-LANGE, WILHELM TSAI
* 1 A ¶ A fake Egyptian tomb: plywood hieroglyphs, a papier-mache sarcophagus, a countdown clock glowing red.
* 2 A 12:00.
* 3 A 11:59.
4 A ¶ The team stands in a huddle.
5 A LONNIE KASPRZAK (40s, VP of Synergy, polo shirt, lanyard) holds a golden key.
6 A DEEPA MURTHY-LANGE (30s, project manager, clipboard) studies a wall of glyphs.
7 A WILHELM TSAI (20s, junior analyst, vest, eager) pokes the sarcophagus.
8 D LONNIE: Okay team, I have a feeling about this key.
9 D DEEPA: It's a prop, Lonnie.
10 D WILHELM: It could be the key to the sarcophagus!
11 D LONNIE: It could be the key to success.
12 D DEEPA: It could be the key to nothing.
13 D WILHELM: I think I found a latch!
14 D LONNIE: Wilhelm, don't touch the mummy.
15 D DEEPA: Lonnie, he is not a mummy, he's a Styrofoam sarcophagus.
16 D WILHELM: It's a very good sarcophagus.
* 17 A ¶ The clock ticks.
* 18 A 10:42.
19 D LONNIE: Deepa, translate the glyphs.
20 D DEEPA: They say, "This is not real."
21 D LONNIE: Interesting.
22 D WILHELM: Maybe it's a riddle!
23 D LONNIE: Everything is a riddle, Wilhelm.
24 A ¶ Deepa rips the clipboard off its hook.
25 A Lonnie shoves the key into the sarcophagus lock.
* 26 A It turns with a satisfying click.
* 27 A The lid hisses open.
* 28 A ¶ Inside: a rubber snake and a plastic trophy.
29 D LONNIE [CONT'D] (whispering): We did it.
30 D DEEPA: We finished a team-building exercise.
31 D WILHELM: We won?
32 D LONNIE: We won!
33 A ¶ They scream.
34 A High-five.
35 A Hug.
36 A Deepa exhales, a real laugh breaking through her professional mask.
* 37 A ¶ A buzzer sounds.
* 38 A The red clock flashes.
* 39 A 00:00.
40 D DEEPA: It's over.
41 D LONNIE: Was it ever really about winning?
42 D WILHELM: Yes.

### SCENE s02460 | INT. DRAGON'S TAX OFFICE - DAY
Detected names (may be incomplete or contain aliases): GORLAN THRUM, PHINEAS ABERNATHY-OLU, VESUVIA
* 1 A ¶ A cave lined with ledgers.
* 2 A Gold coins in neat stacks.
* 3 A A huge brass desk, a quill taller than a man.
4 A ¶ GORLAN THRUM (40s, goblin accountant, ink-stained, eyeshade) sits on a towering stool.
5 A PHINEAS ABERNATHY-OLU (30s, human farmer, hat in hands) stands before him, shaking.
6 D GORLAN: Your tithe is eleven sheep.
7 D PHINEAS: Eleven, Master Gorlan?
8 D GORLAN: Eleven.
9 D PHINEAS: I have nine.
10 D GORLAN: You have nine and a ewe in lamb.
11 D PHINEAS: She isn't due until spring.
12 D GORLAN: Lambs count.
* 13 A ¶ A rumble shakes the cave.
* 14 A Dust sifts from the ceiling.
* 15 A A voice booms from somewhere beyond the ledgers.
16 D VESUVIA [O.S.]: Gorlan, is the farmer negotiating?
17 D GORLAN (calling back): No, Your Radiance.
18 D PHINEAS (muttering): I would never.
19 D VESUVIA [O.S.]: Good. I dislike negotiation.
20 D GORLAN: Phineas, the dragon is generous but not patient. Choose.
21 D PHINEAS: What are my choices?
22 D GORLAN: Eleven sheep, or an apple pie every Sunday for ten years.
23 D PHINEAS: Pie?
24 D GORLAN: Her Radiance has a sweet tooth.
25 D PHINEAS: Then I choose the pie.
26 D VESUVIA [O.S.] (delighted): Excellent.

### SCENE s02461 | INT. TATTOO PARLOR UNDER THE BRIDGE - NIGHT
Detected names (may be incomplete or contain aliases): CASIMIR VOSS-ADEYEMI, DASHIELL MORROW
* 1 A ¶ Concrete overhead.
* 2 A Traffic rolls above like distant surf, every pass shaking dust from the beams.
* 3 A Fluorescent tubes buzz.
* 4 A The walls are papered in flash sheets: anchors, daggers, roses with blades through them.
* 5 A A reclining chair sits at the center like an altar, vinyl cracked, duct-taped.
6 A ¶ CASIMIR VOSS-ADEYEMI, forty, bald, forearms sleeved in faded ink, sits on a rolling stool, loading a needle into a machine with the care of a surgeon.
7 A He does not look up when the door chimes.
8 A ¶ DASHIELL MORROW, thirty-five, lean, rain still beading on his leather jacket, steps inside and shuts the door behind him.
9 A He keeps one hand in his pocket.
10 A He takes in the room in a single slow pass: the chair, the cabinets, the back exit propped by a milk crate.
11 D CASIMIR: We're closed.
12 D DASHIELL: The sign says open.
13 D CASIMIR: The sign lies.
14 A ¶ Dashiell crosses to the chair and rests his free hand on its headrest.
15 A Casimir still has not looked at him.
16 D DASHIELL: I'm here about a piece.
17 D CASIMIR: I don't do walk-ins.
18 D DASHIELL: It's a custom job. Something a man gave me years ago, and he said you'd know the design.
19 A ¶ Casimir finally lifts his eyes.
20 A They are pale, patient, flat.
21 D CASIMIR: Show me.
22 A ¶ Dashiell removes his hand from his pocket.
* 23 A In his palm: a small brass key, worn smooth.
24 A He sets it on the tray beside the ink.
25 A Casimir looks at it a long time.
26 A Then he sets down the machine.
27 D CASIMIR [CONT'D]: Where did you get that?
28 D DASHIELL: From the man who owed you.
29 D CASIMIR: He's dead.
30 D DASHIELL: He was patient about it.
* 31 A ¶ The bridge rumbles.
32 A Both men listen to a truck pass overhead, and the dust drifts onto the tray.
33 A ¶ Casimir stands.
34 A Dashiell does not step back.
35 A They are of a height, and the room seems to contract around them.
36 D CASIMIR: He said the key opens a locker at the Union Station.
37 D DASHIELL: It opens a locker.
38 D CASIMIR: And what's in it?
39 D DASHIELL: Whatever you came to him for in ninety-eight.
40 A ¶ Casimir's jaw tightens.
41 A His hand drifts toward a drawer.
42 D DASHIELL [CONT'D]: Don't.
43 D CASIMIR: Why?
44 D DASHIELL: Because he left instructions. If the drawer opens, so does a second envelope at a lawyer's office on Fifth.
45 A ¶ Casimir's hand freezes.
46 A Dashiell's eyes stay on it.
47 A Neither man blinks.
* 48 A A single drop falls from the bridge above and strikes the tray, shivering the key.
49 A ¶ Slowly, Casimir withdraws his hand.
50 A Dashiell lets out a breath.
51 A They both sit, mirror images, on stool and chair, the key glinting between them.
52 D CASIMIR (quietly): So what do you want?
53 D DASHIELL: A tattoo.
54 D CASIMIR: Of what?
55 D DASHIELL: A locker number.
56 A ¶ Casimir almost laughs.
57 A Then he reaches for the needle.

### SCENE s02462 | INT. LIGHTHOUSE - LAMP ROOM - DAWN
Detected names (may be incomplete or contain aliases): OTTILIE BRANDVOLD, HENRIETTA ASHDOWN-RAO
* 1 A ¶ A circular room of glass and brass.
* 2 A The great lens turns with a slow, hypnotic creak.
* 3 A Gulls cry outside.
4 A ¶ OTTILIE BRANDVOLD (60s, keeper, oilskin, spyglass) stands at the rail.
5 A Across the room, HENRIETTA ASHDOWN-RAO (30s, inspector, crisp coat, leather satchel) opens her notebook.
6 D HENRIETTA: Miss Brandvold, the log says the lamp went dark at three.
7 D OTTILIE: It did.
8 D HENRIETTA: For eleven minutes.
9 D OTTILIE: For eleven minutes.
10 D HENRIETTA: And you were here?
11 D OTTILIE: I was asleep.
12 A ¶ Henrietta lowers the notebook.
13 D HENRIETTA: A keeper is not permitted to sleep.
14 D OTTILIE: A keeper is not permitted to many things.
* 15 A ¶ The lens turns.
* 16 A A shaft of pale light sweeps across both women's faces.
17 D HENRIETTA: A ship went aground in those eleven minutes.
18 D OTTILIE (flat): I know.
19 D HENRIETTA: Forty lives.
20 A ¶ Ottilie turns from the rail.
21 A Her hands are steady.
22 A Her face is not.
23 D OTTILIE: Forty-one. I counted the cabin boy twice.
24 A ¶ She sinks onto a stool.
25 A Henrietta waits, pen frozen.
26 D OTTILIE [CONT'D]: Write it down. All of it.
27 A ¶ Henrietta nods.
28 A She writes.
29 A Her hand shakes.
* 30 A The lens creaks.
* 31 A The light sweeps on.

### SCENE s02471 | INT. MUNICIPAL LOST PROPERTY OFFICE - DAY
Detected names (may be incomplete or contain aliases): DOREEN PALMQUIST, PAULO MENDES-RIBEIRO, GRANT HOLLIS
* 1 A ¶ A long basement room under a bus depot.
* 2 A Steel shelves labelled by month.
* 3 A Hundreds of umbrellas hang from the pipes like sleeping bats.
* 4 A A single fluorescent tube flickers over the counter.
5 A ¶ DOREEN PALMQUIST, 60s, cardigan buttoned to the neck, reading glasses on a chain, sorts a tray of single gloves.
6 A Everything on her desk is squared to the edge.
7 A ¶ PAULO MENDES-RIBEIRO, 30s, damp raincoat, a worn leather folder under his arm, stands at the counter.
8 A He has been standing there for some time.
9 D DOREEN: Form 12-B.
10 D PAULO: I filled in a 12-B.
11 D DOREEN: You filled in a 12-A.
12 D PAULO: They look the same.
13 D DOREEN: They are not the same.
14 A ¶ She hands him a form.
15 A He takes it.
16 A Uses the pen on the chain, which is short, so he has to lean over the counter to write.
17 D PAULO: Colour of umbrella?
18 D DOREEN: You tell me.
19 D PAULO: Black.
20 A ¶ Doreen turns slowly toward the shelves.
* 21 A Hundreds of black umbrellas.
22 D DOREEN: Describe it.
23 D PAULO: It's an umbrella.
24 A ¶ She sets down the glove.
25 A Aligns it with the others.
26 D DOREEN: Handle?
27 D PAULO: Wooden. Duck head.
28 D DOREEN: A duck.
29 D PAULO: It was my father's.
30 A ¶ Doreen's pen stops.
31 A Starts again.
32 D DOREEN: Duck-handled. Black. Bus route?
33 D PAULO: Forty-one.
34 D DOREEN: Day?
35 D PAULO: Tuesday. Or Wednesday.
36 A ¶ Doreen removes her glasses.
37 A Lets them hang.
38 A Breathes through her nose.
39 A ¶ GRANT HOLLIS, 20s, a high-vis vest over a suit, wheels in a cart of fresh umbrellas, humming.
40 A He drops the cart handle.
* 41 A It clangs.
42 D GRANT: Got a batch off the forty-one.
43 A ¶ Paulo and Doreen both look at the cart.
* 44 A A black umbrella, duck handle, on top.
45 D PAULO: That's it.
46 D DOREEN: That is a batch item. It is not yet logged.
47 D PAULO: It's my father's.
48 D DOREEN: It is not yet logged.
49 A ¶ Paulo reaches.
50 A Doreen's hand lands flat on the umbrella first.
* 51 A Quick for sixty.
52 D GRANT (to the floor): I could just log it?
53 D DOREEN: You could not.
54 D PAULO: Give me the umbrella.
55 D DOREEN: Form 12-B.
56 A ¶ Paulo tears the form in half.
57 A Then in half again.
58 A Lets the pieces fall onto the counter.
59 A Doreen watches them land.
60 A ¶ She picks up a stamp.
61 A Brings it down on the first piece, hard.
62 A Then the second.
63 A Then the third.
* 64 A Thud.
* 65 A Thud.
* 66 A Thud.
67 D GRANT (backing the cart toward the door): I'll come back.
68 D DOREEN: Stay where you are, Mr. Hollis.
69 A ¶ She lifts the umbrella by the duck's neck and holds it out across the counter, level, like a sword being surrendered.
70 D DOREEN [CONT'D]: Sign for it.
71 A ¶ Paulo takes it.
72 A His hand shakes.
73 A He signs the stamped paper with the chain pen, bent double over the counter, and the pen's bead chain snaps.
74 A ¶ Everyone looks at the pen.

### SCENE s02472 | INT. CURLING RINK - PRE-DAWN
Detected names (may be incomplete or contain aliases): RAINE KOWALCHUK, TEODORA BRZEZINSKI, PRIYA NAIR, WALT DUNPHY, SUNDAY ADEYEMI
* 1 A ¶ A tin-roofed rink in a Manitoba grain town, the ice a long pale sheet scored by a thousand rocks.
* 2 A Breath hangs in the cold.
* 3 A Somewhere a compressor thrums like a heart beneath the floor.
4 A ¶ RAINE KOWALCHUK, 40s, the skip, kneels at the hack with her broom across her knees, studying the far house as though it owed her money.
5 A TEODORA BRZEZINSKI, 60s, the coach, leans on the boards in a parka the colour of canned peaches, thermos steaming.
6 A PRIYA NAIR, 20s, the lead, sweeps a pebble from the lane with great ceremony, while WALT DUNPHY, 70, the second, lowers himself onto a bench with a groan like a gate, and SUNDAY ADEYEMI, 30s, the third, rests her chin on her broom handle and watches the three of them as if counting something.
* 7 A ¶ Everything is calm.
* 8 A Even the compressor seems to hush.
9 D TEODORA: Draw weight's fine. Ice is keen. You'll hit the button on the last end like you've done ten thousand times.
10 D RAINE: We're not at the last end.
11 D TEODORA: We will be.
12 D WALT: Eleven-nine, they said. Eleven-nine and we're the underdogs. Never been an underdog. I was always the old dog.
13 D PRIYA: You're still the old dog, Walt.
14 D WALT: Language.
15 D SUNDAY: Raine. You haven't said a word about the match.
16 D RAINE: Didn't think I needed to.
17 D SUNDAY: You always have a word about the match.
18 D RAINE: Fine. I have a word. After today I'm not skipping.
19 D TEODORA: You're saying you want to throw last stones. I can arrange that.
20 D RAINE: I'm saying I'm done, Teo. Not skipping. Not anything. After today I'm gone. Winnipeg. The job came through in September and I sat on it. I didn't want you carrying it into the match.
21 D PRIYA: Gone gone?
22 D RAINE: Gone gone.
23 D WALT: Forty-one years I've known your father and he never told me.
24 D RAINE: He doesn't know either. You're the first.
25 D SUNDAY: Why us? Why now?
26 D RAINE: Because Teo's been lying to me about the ice for three weeks, and I figured if we're all confessing.
27 D TEODORA: It is perfectly good ice.
28 D RAINE: It's pebbled with the wrong water, Teo. You've been using the well water since the municipal line froze. I can read it from the hack.
29 D TEODORA: It plays true.
30 D RAINE: It plays true. It plays true for us. It won't for them. That's why you wanted the old stones thrown first. That's why you wanted me skipping one more match.
31 D TEODORA (after a long pause): I wanted to win once more. Is that a crime in Manitoba?
32 A ¶ Walt laughs, once, helplessly.
33 A Priya covers her mouth.
34 A Sunday doesn't move.
35 A ¶ Raine rises, stiff in the knees, and walks the length of the sheet to the far house.
36 A She sets down the broom.
37 A Takes off a glove.
38 A Presses her bare palm flat to the ice and holds it there while the others watch.
39 A ¶ She stands and lifts a hand: the thumbs-up of a skip who knows the line.

### SCENE s02473 | EXT. SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): MAREN LUND, DELPHINE ACHTERBERG, OKAFOR, RANGER
* 1 A ¶ White to every horizon.
* 2 A A dead pickup sits hood-up, its shadow short.
* 3 A Heat shimmers.
4 A ¶ MAREN LUND, 30s, sunburnt, wraps a rag around her wrist.
5 A DELPHINE ACHTERBERG, 40s, sits in the shade of the open tailgate, boots off, counting water bottles.
6 A She lines them up.
* 7 A Four.
8 A ¶ OKAFOR, 50s, studies the engine, wrench in hand.
9 A He doesn't speak much.
10 A ¶ Maren drops the rag.
11 A She walks to Delphine and she crouches.
12 A She nudges the bottles with a finger.
13 A She reaches for one and she is stopped by Delphine's hand.
14 D DELPHINE: Four.
15 D MAREN: Four's fine.
16 D DELPHINE: Four is two days. Three if she stops complaining.
17 D MAREN: Who?
18 D DELPHINE: Pick one.
19 A ¶ Okafor wipes his hands on his trousers.
20 A Closes the hood.
* 21 A It thuds.
22 D OKAFOR: Fuel line's cracked.
23 D MAREN: Fixable?
24 D OKAFOR: With tape. Not with salt in it.
25 A ¶ Maren stands.
26 A Delphine tilts her head.
27 A They share a look.
28 A Maren turns to the horizon.
29 A She shades her eyes.
* 30 A A glint far out, then nothing.
* 31 A ¶ The radio inside the cab crackles.
32 A Okafor leans in through the window and keys it.
33 D RANGER [V.O.] (garbled): Station Two-Four. Anyone on this channel.
34 D OKAFOR: Two-Four, this is the Isuzu on the east track. We're stuck.
35 D RANGER [V.O.]: Copy east track. Say position.
36 D OKAFOR: Forty kilometres past the marker. White ground. No landmark.
37 D RANGER [V.O.]: Copy. We'll send a truck at first light. Hold your position.
38 D MAREN: First light's fourteen hours.
39 D OKAFOR: Then we hold.
40 A ¶ He releases the key.
* 41 A Static.
42 A Maren sits down in the sand beside the tailgate.
43 A Delphine hands her a bottle.
44 A Maren pushes it back.
45 D MAREN: You first.
46 D DELPHINE: I'm fine.
47 D MAREN: You're not.
48 D DELPHINE: She's not either.
49 A ¶ Maren glances at Okafor.
50 A He's already looking at the sky.
51 A He pulls the tape from the glove box.
52 A ¶ He kneels at the front wheel and begins to wind it around the line.
53 A Slow, careful.
54 A Neither of the women speaks.
* 55 A Wind shifts the salt in a long ribbon across the ground.

### SCENE s02474 | EXT. BRAZOS RIVER FERRY - DUSK
Detected names (may be incomplete or contain aliases): MARSHAL AUGUSTINE PELL, LOLA TREVINO, BARNABY, ROOK STALLWORTH
* 1 A ¶ A flat-bottomed ferry the colour of old tobacco hangs on a rope across a river the width of a town street and the colour of weak coffee.
* 2 A Sun lies low and red behind the cottonwoods.
3 A ¶ MARSHAL AUGUSTINE PELL, 50s, long grey coat, a face like cracked saddle leather, stands at the bow with his hand on his Colt.
4 A Beside him sits LOLA TREVINO, 20s, wrists bound with rope, hair full of dust, staring at the water.
5 A ¶ At the stern, BARNABY, 70, the ferryman, thin as a fence rail, hauls on the rope hand over hand.
6 A Across the river, on the far bank, two riders have stopped under the trees: the brothers DUNCAN and ROOK STALLWORTH, one fat, one wiry, rifles across their saddles.
7 D PELL: Barnaby. How long to the landing?
8 D BARNABY: Ten minutes. Eight if you quit looking at them.
9 D PELL: They're not going anywhere.
10 D LOLA: Neither am I.
11 A ¶ Pell does not turn.
12 A Duncan raises a hand.
13 A Rook, beside him, does not.
* 14 A ¶ The ferry creaks on.
* 15 A Rope hisses through Barnaby's gloves.
16 A The riders begin to walk their horses down to the water.

### SCENE s02475_0 | EXT. HOSPITAL ROOFTOP HELIPAD - NIGHT
Detected names (may be incomplete or contain aliases): NASRIN FAROUQ, BEA OYELARAN, TOMMASO RINALDI, YOUNG MAN
* 1 A ¶ Wind pulls at orange windsocks.
* 2 A Rotor noise rises.
* 3 A A helicopter settles on the pad in a storm of grit.
4 A ¶ DR. NASRIN FAROUQ, 40s, scrubs under a puffer jacket, crouches low beside a gurney.
5 A BEA OYELARAN, 30s, charge nurse, grips the rail.
6 A Both squint into the downwash.
* 7 A ¶ Doors slide open.
8 A TOMMASO RINALDI, 30s, flight medic, jumps out with a monitor in his arms, shouting over the blades.
9 D TOMMASO: Male, thirties, fall from scaffold. Two stories. BP seventy over forty, GCS ten.
10 D NASRIN: Any ID?
11 D TOMMASO: Nothing on him. Nobody came with him.
12 A ¶ They lift the patient out.
13 A A YOUNG MAN, 30s, pale, dust in his beard, eyes half-open, strapped to the board.
14 A Bea runs beside the gurney.
15 D BEA: Sir. Sir, can you hear me?
16 A ¶ The young man's lips move.
17 A Bea leans down.
18 D YOUNG MAN (faint): Where's my boy.
19 D BEA: Who's your boy?
20 D YOUNG MAN: Waiting. At the site gate.
21 D NASRIN: What's your name, sir?
22 D YOUNG MAN: Desmond. Desmond Achebe.

### SCENE s02475_1 | INT. HOSPITAL ELEVATOR - CONTINUOUS
Detected names (may be incomplete or contain aliases): NASRIN, DESMOND, BEA, TOMMASO
* 1 A ¶ Doors close.
* 2 A The gurney fills the car.
3 A Tommaso holds a bag valve mask.
* 4 A The elevator hums downward.
5 D NASRIN: Desmond, I'm Dr. Farouq. You're in a hospital. We're taking you straight to trauma.
6 D DESMOND: My son's six. He'll think I left him.
7 D BEA: Then we'll find him, Desmond. I'll call the site foreman myself.
8 D TOMMASO (low): Doc, pressure's dropping.
9 D NASRIN: Bea, two units O-neg, wide open. Tommaso, stay on his airway.
* 10 A ¶ The elevator dings.
* 11 A Doors open onto the bright, loud corridor of the emergency department.
12 D NASRIN [CONT'D]: Stay with me, Desmond. Talk to Bea about your son.
13 A ¶ Bea walks fast beside the bed.
14 D BEA: What's his name?
15 D DESMOND: Kwabena. Kwabena likes dinosaurs.
16 D BEA: Then Kwabena is going to meet the biggest dinosaur in this building. You hold on.
17 A ¶ They roll out of frame.

### SCENE s02476 | INT. S.S. MARGUERITE - PURSER'S OFFICE - NIGHT - 1912
Detected names (may be incomplete or contain aliases): PURSER HOLLOWAY, STOWAWAY, DECKHAND, CAPTAIN VANE, CLEMENTINE, PIP
* 1 A ¶ Brass lamp.
* 2 A Rolling floor.
* 3 A A stack of passenger manifests slides with every swell.
4 A ¶ PURSER HOLLOWAY, 50s, neat as a pin, drags a STOWAWAY by the collar into the office.
5 A The Stowaway is small, soot-faced, in a boy's cap and oversized coat.
6 A Pip, a young DECKHAND, hovers by the door.
7 D HOLLOWAY: Another one, Captain, in the coal bunker!
8 A ¶ CAPTAIN VANE, 60s, white beard, brass buttons, looks up from his chart without hurry.
9 D VANE: A boy?
10 D STOWAWAY (a woman's voice, defiant): I am no boy.
* 11 A ¶ The cap falls.
* 12 A Dark curls spill out.
13 A Holloway lets go as if burned.
14 D VANE: Name?
15 D STOWAWAY: Clementine Ashworth. And you will take me to New York.
16 D HOLLOWAY: She'll be put off at Queenstown!
17 D VANE: Mr. Holloway, we left Queenstown yesterday.
18 D CLEMENTINE: There! You see?
19 A ¶ Pip snickers.
20 A Holloway glares at him.
21 D VANE: Miss Ashworth, what is in New York?
22 D CLEMENTINE (softer): My father. He thinks I'm dead.
* 23 A ¶ The lamp swings.
24 A Everyone watches the shadows swing with it.
25 D VANE: Pip. Fetch Miss Ashworth some tea and a blanket.
26 D PIP: Aye, sir!
27 A ¶ He's gone.
28 A Holloway sputters.
29 D HOLLOWAY: Captain, regulations!
30 D VANE: Regulations don't swim, Mr. Holloway. And neither, I suspect, do you.
31 A ¶ He turns the chart.
32 A Holloway slumps into his chair.
33 A Clementine laughs, and the ship rolls on.

### SCENE s02477 | INT. COUNTY JAIL - ATTORNEY VISITING ROOM - DAY
Detected names (may be incomplete or contain aliases): ROSALIND KESSLER, CALLUM BRAY
* 1 A ¶ A cinderblock booth.
* 2 A Scratched glass.
* 3 A A black phone handset on a steel cord.
4 A ¶ ROSALIND KESSLER, 40s, grey suit, legal pad, sits very straight.
5 A She lifts the handset.
6 A ¶ On the other side of the glass, CALLUM BRAY, 30s, orange jumpsuit, rubs his thumb over an old tattoo and lifts his own handset.
7 D CALLUM [V.O.] (through the phone): You came.
8 D ROSALIND: It's Thursday.
9 D CALLUM [V.O.]: You brought the pad.
10 D ROSALIND: I always bring the pad.
11 A ¶ She uncaps a pen.
12 A Doesn't write.
13 D ROSALIND [CONT'D]: The state has the security footage.
14 D CALLUM [V.O.]: Of what?
15 D ROSALIND: Of the loading dock. Eleven fourteen. You told me you were home.
16 A ¶ Callum looks at his thumb.
17 A His jaw shifts.
18 D CALLUM [V.O.]: I was home at eleven.
19 D ROSALIND: At eleven fourteen, you're on the dock.
20 D CALLUM [V.O.]: Camera clocks drift.
21 D ROSALIND: This one doesn't. It's synced to the satellite.
22 A ¶ Callum sets the handset down on the shelf.
23 A Picks it up again.
24 A Sits back.
25 A Rosalind's pen taps once on the pad.
26 D ROSALIND [CONT'D]: Callum. I put your mother's name on the witness list.
27 A ¶ His eyes close.
28 D CALLUM [V.O.] (very quiet): Take it off.
29 D ROSALIND: Then tell me what happened on the dock.
30 A ¶ He slams the handset against the glass.
* 31 A The sound is enormous.
32 A Rosalind doesn't flinch.
33 A She waits.

### SCENE s02478 | INT. CITY PLANETARIUM - DOME - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR ILSE MORROW, TANVEER KHATRI, BEATA LOWENSTEIN, COSIMO FERRANTE, BEATA / COSIMO, WREN, DOYLE
* 1 A ¶ Stars wheel overhead.
2 A Twenty invited guests, seated in recliners.
3 A INSPECTOR ILSE MORROW, 40s, stands at the rail by the projector.
4 D ILSE: Nobody leaves. Nobody speaks.
* 5 A ¶ The stars blink out.
* 6 A Total dark.
* 7 A A SCREAM.
* 8 A A thud.
* 9 A ¶ Lights snap on.
10 A TANVEER KHATRI, 50s, the curator, lies sprawled below the projector, a brass key in his fist.
11 A Everyone freezes.
12 A ¶ BEATA LOWENSTEIN, 30s, the donor, and COSIMO FERRANTE, 60s, the rival, point at each other.
13 D BEATA / COSIMO (together): He did it!
14 D BEATA: I never touched him!
15 D COSIMO: I was across the room!
16 A ¶ WREN, 20s, the usher, bolts for the exit.
17 A DOYLE, 40s, the security guard, tackles her.
18 A Both crash into a row of recliners.
* 19 A The seats fold.
20 D ILSE: Enough!
21 A ¶ Tanveer sits up, groaning, rubbing his skull.
22 D TANVEER: Who turned off my sky?
23 A ¶ Everyone breathes out.
24 A Ilse pockets her badge, almost smiling.

### SCENE s02479 | INT. BOWLING ALLEY - AFTER HOURS
Detected names (may be incomplete or contain aliases): SAL, DUKE, MOSES, BARNEY
* 1 A ¶ Half the lanes dark.
* 2 A Shoes stacked on the counter.
* 3 A A jukebox hums, unplugged.
4 A ¶ SAL, 60, silver hair, sits at lane six, polishing a bowling ball.
5 A DUKE, 40s, big, lingers by the pin-return.
6 A MOSES, 30s, nervous, holds a gym bag against his stomach.
7 A BARNEY, 50s, the owner, wipes a glass behind the bar.
* 8 A ¶ Quiet.
* 9 A Almost cozy.
10 D SAL: You made good time.
11 D MOSES: Traffic was nothing.
12 D DUKE: He's sweating.
13 D MOSES: I'm not.
14 D SAL: He's a little sweaty, Duke.
15 D BARNEY: Moses, you want water?
16 D MOSES: No, I want to go.
17 D DUKE: He said he wants to go.
18 D SAL: He hasn't paid.
19 D MOSES: It's in the bag!
20 A ¶ Sal holds out a hand.
21 A Moses unzips the bag.
* 22 A Newspaper.
* 23 A Folded newspaper, not cash.
* 24 A ¶ Silence.
* 25 A The ball stops turning.
26 D BARNEY (very low): Oh, Moses.
27 A ¶ Sal sets the ball in its rack.
28 A He stands.
29 A Duke steps behind Moses.
30 A Moses drops the bag.

### SCENE s02480 | INT. ICE ARENA - ZAMBONI BAY - NIGHT
Detected names (may be incomplete or contain aliases): LUCIANA FERRARI-OYELE, DEACON BRUNO, BARTOSZ
* 1 A ¶ Concrete.
* 2 A Fluorescent hum.
* 3 A A resurfacer idles, steam rising off its blade.
* 4 A Puddles on the floor.
5 A ¶ LUCIANA FERRARI-OYELE, 20s, goalie, pads strapped on, sits on an upturned bucket.
6 A Helmet on her knee.
7 A ¶ DEACON BRUNO, 60s, driver, climbs down from the machine with a coffee.
8 A Slow knees.
9 D LUCIANA: You're late, Deacon.
10 D DEACON: You're early, Lu.
11 A ¶ He sits on a second bucket.
12 A Offers the coffee.
13 A She shakes her head.
* 14 A ¶ Silence.
* 15 A Compressor thrum.
16 D LUCIANA: Three hundred shots.
17 D DEACON: That a goal?
18 D LUCIANA: That's tonight. Before they flood the ice.
19 D DEACON: You'll wear a hole in the crease.
20 D LUCIANA: Good.
* 21 A ¶ A wall speaker CRACKLES.
22 D BARTOSZ [V.O.] (over PA, tinny): Deacon, you in the bay?
23 D DEACON (not moving): Where else.
24 D BARTOSZ [V.O.]: Hold the flood. Coach wants Luciana out there another hour.
25 A ¶ Deacon looks at Luciana.
26 A She looks at the floor.
27 D DEACON: She's already here, Bart.
28 D BARTOSZ [V.O.]: Then she's early. Tell her thanks.
* 29 A ¶ Click.
* 30 A Silence.
31 D LUCIANA: He doesn't know I'm out of the lineup.
32 D DEACON: Tell him.
33 D LUCIANA: Tomorrow.
34 D DEACON: Tomorrow, Lu, I'll be flooding ice you're not on.
35 A ¶ She pulls her helmet down.
36 A Stands.
37 A Bangs her stick twice on the concrete.
38 D LUCIANA: Open the door, Deacon.
39 A ¶ He climbs back on the machine.
40 A Lifts the gate.
* 41 A Cold light pours across the ice.

### SCENE s02481 | INT. SMOKEHOUSE KITCHEN - ICELANDIC FISHING VILLAGE - NIGHT
Detected names (may be incomplete or contain aliases): HELGA SIGURDARDOTTIR, BJARNI, ASGEIR THORVALDSSON
* 1 A ¶ Tin walls.
* 2 A Hooks of cod hang in blue smoke.
* 3 A A woodstove ticks.
4 A ¶ HELGA SIGURDARDOTTIR, 40s, rubber apron, forearms scarred from knives, slices a split haddock.
5 A Fast, precise.
6 A ¶ BJARNI, 16, headphones around his neck, stands in the doorway with a duffel bag.
7 A He has been standing there a while.
8 A ¶ Helga doesn't look up.
9 D HELGA: Shut the door. You're letting out the smoke.
10 A ¶ He steps in.
11 A Closes it.
12 A Doesn't put down the bag.
13 D BJARNI: I got into the school.
14 D HELGA: In Reykjavik.
15 D BJARNI: You knew?
16 D HELGA: The letter was on the table.
17 D BJARNI: You read my letter.
18 D HELGA: It was on the table.
19 A ¶ She wipes the knife.
20 A Lays it down, parallel to the board.
21 D HELGA [CONT'D]: When's the bus?
22 D BJARNI: Six.
23 D HELGA: In the morning?
24 D BJARNI: Tonight.
25 A ¶ She turns.
26 A Looks at the duffel.
27 A Looks at him.
28 D HELGA: You were going to leave without telling me.
29 D BJARNI: I'm telling you.
30 D HELGA: After you packed.
31 A ¶ He shrugs.
32 A She picks up a fish and slaps it on the board.
33 A Cuts.
34 A Cuts again.
35 A He winces at each blow.
36 D BJARNI: Mamma.
37 D HELGA: Hand me the salt.
38 A ¶ He sets down the duffel at last.
39 A Crosses to the shelf.
40 A Brings a tin of coarse salt.
41 A She takes it without a word and pours a ridge down the haddock's spine.
42 D BJARNI: Dad would've said go.
43 D HELGA: Your father would've said go and then not paid for it.
44 D BJARNI: That's not fair.
45 D HELGA: It's smoked fish. Nothing is fair.
* 46 A ¶ A silence.
* 47 A Smoke drifts between them.
48 A Helga glances up through it, and for a moment her face almost opens.
* 49 A ¶ The back door scrapes.
* 50 A Cold air, a flurry of snow.
51 A ¶ ASGEIR THORVALDSSON, 80, her father-in-law, enormous in a wool coat and a seal-fur hat, shoulders in carrying a crate of frozen herring.
52 D ASGEIR: Who died?
53 D HELGA: Nobody, Asgeir.
54 D ASGEIR: Then why do you both look like funerals?
55 A ¶ He sets the crate on the table with a crash.
56 A Notices the duffel.
57 A Notices Bjarni.
58 A Understands.
59 D ASGEIR [CONT'D]: Ah.
60 A ¶ He sits on a stool.
61 A Takes off his hat.
62 A Rubs his bald head.
63 D ASGEIR [CONT'D]: When?
64 D BJARNI: Tonight.
65 D ASGEIR: Good. A boy should leave in the dark. Less to look back at.
66 D HELGA: Don't encourage him.
67 D ASGEIR: He has your jaw, Helga. He'll go whether I encourage or no.
68 A ¶ Helga laughs, short, and turns her back to hide it.
69 A She scrubs her knife at the sink.
70 A Bjarni steps toward her, hand half-raised.
71 A ¶ Asgeir stands, pulls the boy into a crushing hug that lifts him off the floor.
72 A Bjarni yelps.
73 A Helga turns, drying her hands, fighting a smile.
74 A The boy squirms, red-faced, and Asgeir finally sets him down.
75 A He cuffs the back of Bjarni's head, tenderly.
76 D ASGEIR [CONT'D]: Go. Take the herring.
77 D BJARNI: It's frozen.
78 D ASGEIR: It travels well.
79 A ¶ Helga takes a paper bag from a drawer and begins to wrap smoked haddock in it.
80 A Her hands are steady.
81 A Her eyes are not.
82 D HELGA: Six fillets. And the dried fish for the bus.
83 D BJARNI: It stinks.
84 D HELGA: That's how you'll find your way home.
85 A ¶ He takes the parcel.
86 A Holds it with both hands.
87 A For a long moment the three of them stand in the blue smoke, none of them moving.
88 A ¶ Then Bjarni picks up the duffel.
89 A Crosses to the door.
90 A Stops with his hand on the latch.
91 D BJARNI: Mamma. I'll call Sundays.
92 D HELGA: Call when you've got something to say.
93 D BJARNI: Sundays, then.
94 A ¶ He goes.
* 95 A The door shuts.
* 96 A Snow swirls in the gap and settles on the floor.
97 A ¶ Asgeir takes a stool.
98 A Helga returns to the haddock.
99 D ASGEIR: He'll be fine.
100 D HELGA: He'll eat badly.
101 D ASGEIR: So did his father.
102 A ¶ She sniffs.
103 A Presses the knife into the fish.
104 A Cuts clean through.
105 A ¶ She stops.
106 A Sets the knife down.
107 A Her shoulders drop, just once.
108 A ¶ Asgeir reaches across the table and pats her hand with a fish-scented glove.

### SCENE s02482 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): ORLA MCKEOWN, DEVRIM AYDIN, PEMBERTON
* 1 A ¶ Glass eyes in labelled trays.
* 2 A A fox mid-pounce on the workbench.
* 3 A Moonlight on a stuffed heron.
4 A ¶ ORLA MCKEOWN, 30s, apron, scalpel, hums over a half-finished badger.
5 A Easy.
6 A Peaceful.
7 A ¶ DEVRIM AYDIN, 20s, courier, jacket still on, holds a padded envelope.
8 A He wanders the shelves.
9 D DEVRIM: Creepy in here.
10 D ORLA: It's Tuesday.
11 D DEVRIM: Meaning?
12 D ORLA: Tuesday's quiet.
13 A ¶ He picks up a jar of eyes.
14 A Rattles it.
15 A Puts it back.
16 D DEVRIM: Package for Mr. Pemberton.
17 D ORLA: Leave it on the desk.
18 D DEVRIM: He has to sign.
19 D ORLA: He's upstairs.
* 20 A ¶ An intercom box on the wall crackles.
21 D PEMBERTON [V.O.] (through the speaker, dry): Orla. Is that the courier?
22 D ORLA (to the box): He's here.
23 D PEMBERTON [V.O.]: Send him up. Door's open.
24 A ¶ Orla smiles at Devrim.
25 D ORLA: Door's open.
26 D DEVRIM: Where's the stairs?
27 A ¶ She points with the scalpel.
* 28 A Behind a curtain.
29 A ¶ Devrim goes.
* 30 A His footsteps on wood.
* 31 A A pause.
* 32 A A door creaks.
* 33 A Then nothing.
34 A ¶ Orla keeps stitching.
* 35 A The badger's fur parts under her thumb.
36 D PEMBERTON [V.O., CONT'D] (through the speaker, much closer): Orla. Who's the boy?
37 A ¶ She stops.
* 38 A The thread hangs from her needle.
39 D ORLA: What do you mean?
40 D PEMBERTON [V.O.]: I'm standing in the shop. Behind you.
41 A ¶ Orla does not turn.
42 A She sets down the scalpel.
43 A Very, very slowly.
* 44 A ¶ On the speaker, upstairs, a muffled thump.
* 45 A Footsteps run overhead.

### SCENE s02483 | INT. GRANDMOTHER'S SEWING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): ROSALBA GRIECO, CARMELINA GRIECO, ISOTTA
* 1 A ¶ A narrow room at the back of a Calabrian apartment, sun slanting through yellowed lace.
* 2 A Bolts of fabric lean in corners like tired dancers.
* 3 A A black Singer sits under a crocheted cloth, a pincushion shaped like a tomato beside it.
4 A ¶ ROSALBA GRIECO, 80, tiny, black dress, hair in a white bun, kneels on a cushion pinning a hem.
5 A CARMELINA GRIECO, 50s, her daughter, stands on the fitting stool in a half-finished wedding dress, arms out like a scarecrow.
6 A ISOTTA, 22, the granddaughter, sits cross-legged on the bed, picking at the chenille.
7 D ROSALBA: You've lost weight.
8 D CARMELINA: I haven't.
9 D ROSALBA: The hips are loose.
10 D CARMELINA: It's the way you cut it.
11 D ROSALBA: I cut it for the bride. Not for you. For Isotta.
12 D ISOTTA: It's not my dress, Nonna.
13 D ROSALBA: Of course it is. You're the one marrying.
14 D ISOTTA: I'm not marrying anyone.
15 D CARMELINA: Isotta.
16 D ISOTTA: I told Lorenzo in March. I told you both in April. You pretended you'd misheard.
17 D ROSALBA (through pins): I heard.
18 D CARMELINA: Mamma, you did not.
19 D ROSALBA: I heard. I said to myself: she'll change her mind by June.
20 D ISOTTA: It's August.
21 D ROSALBA: So I made the dress in August.
22 D CARMELINA: You made it for me to wear!
23 D ROSALBA: For you to stand in. So I could see how it hangs.
24 D ISOTTA: That is the saddest thing I have ever heard.
25 D CARMELINA: It's not sad, it's how she is. She sews against reality.
26 D ROSALBA: Where do you want me to put the lace?
27 A ¶ Carmelina steps off the stool.
* 28 A The skirt catches on a pin.
* 29 A A thin tearing sound.
30 A ¶ Rosalba holds up the torn hem to the window light.
31 A She does not look at either of them.

### SCENE s02484 | INT. PAWNSHOP - NIGHT
Detected names (may be incomplete or contain aliases): HUGO VANTERPOOL, STRANGER, SABINE ARCHAMBAULT, WALLACE
* 1 A ¶ Guitars on the wall.
* 2 A Glass cases of rings and watches.
* 3 A Barred windows glow with neon.
4 A ¶ HUGO VANTERPOOL, 60s, pawnbroker, cardigan, shuffles behind the counter.
5 A He looks up as the door chime sounds.
6 A ¶ A STRANGER, 30s, wet coat, gaunt, enters.
7 A He keeps his right hand in his pocket.
8 A He wanders to the cases.
9 D HUGO: Help you?
10 D STRANGER: Browsing.
11 D HUGO: We close in ten minutes.
12 D STRANGER: Then I'll be quick.
13 A ¶ He stops at a case of wedding bands.
14 A Taps the glass.
15 A Hugo pays him no mind, flips through a ledger.
* 16 A ¶ The door chimes again.
17 A DET. SABINE ARCHAMBAULT, 40s, trench coat, badge on her belt, steps in.
18 A She nods at Hugo.
19 A Her eyes land on the Stranger.
20 A Then slide away.
21 D ARCHAMBAULT: Evening, Hugo.
22 D HUGO: Detective.
23 D ARCHAMBAULT: Anything come in today?
24 D HUGO: A banjo. A set of knives. A ring.
25 D ARCHAMBAULT: Which ring?
26 A ¶ Hugo gestures at the case the Stranger is standing over.
27 A The Stranger's hand tightens in his pocket.
28 D ARCHAMBAULT [CONT'D] (mild): Sir, can I see your hands?
29 D STRANGER: Why?
30 D ARCHAMBAULT: Humour me.
31 A ¶ The Stranger takes out his hand.
32 A It's empty and trembling.
33 A He holds it up, palm out.
34 D STRANGER: I'm just looking at rings.
35 D ARCHAMBAULT: What's your name?
36 D STRANGER: Wallace.
37 D ARCHAMBAULT: Wallace what?
38 D WALLACE: Teague. I live on Delancey.
39 D ARCHAMBAULT: Mr. Teague. A woman reported her ring stolen last Friday. Gold, with a small sapphire.
40 A ¶ Hugo pulls a velvet box from under the counter.
41 A Opens it.
* 42 A A gold ring with a small sapphire.
43 D HUGO: Wallace sold me this on Saturday.
44 D WALLACE: It was my mother's.
45 D ARCHAMBAULT: Whose ring was it before it was your mother's?
46 A ¶ Wallace's shoulders sag.
47 A He sits on a stool by the guitars.
48 A Puts his face in his hands.
49 D WALLACE: I needed rent.
50 A ¶ Archambault sighs.
51 A Takes the ring from the box.
52 A Closes her fingers around it.
53 D ARCHAMBAULT: Hugo, keep the shop open. I'll be back with the owner.
54 A ¶ She nods at Wallace.
55 D ARCHAMBAULT [CONT'D]: You're coming with me.
56 A ¶ He rises.
57 A Follows her to the door.
* 58 A The chime sounds as they leave.
59 A Hugo lets out a long breath and goes back to his ledger.

### SCENE s02485 | INT. RARE BOOKS READING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CATALINA ROJAS, VIKRAM SHARMA, ELLSWORTH DUVAL
* 1 A ¶ Oak tables.
* 2 A Green-shaded lamps.
* 3 A Fire doors sealed against the cold.
* 4 A Behind a glass wall, shelves of locked cases rise into shadow.
5 A ¶ CATALINA ROJAS, 40s, head librarian, sits at the desk with a cotton glove on each hand.
6 A She is turning the pages of a ledger and does not look up.
7 A She is calm, orderly, someone whose life has been alphabetical.
8 A ¶ Across the room, VIKRAM SHARMA, 30s, a visiting scholar in a corduroy jacket, hunches over a folio with a magnifying glass.
* 9 A A laptop sits open beside him.
10 A He has been reading the same page for an hour.
11 A ¶ By the door, ELLSWORTH DUVAL, 50s, security, in a navy blazer, leans on the wall and checks his phone.
12 A He yawns.
13 A ¶ She glances at the clock.
* 14 A Closing in ten minutes.
15 A She stands, collects a tray, and walks the aisle to Vikram's table.
16 A He covers the folio with his arm before she reaches it.
17 A ¶ She stops.
18 A She smiles.
19 A He smiles back, too quickly.
20 D CATALINA: We close at ten, Dr. Sharma.
21 D VIKRAM: Of course. Just finishing.
22 D CATALINA: Is it a good page?
23 D VIKRAM: It's a page.
24 A ¶ She sets the tray down beside him.
25 A She does not take the folio.
26 A Instead she turns to Ellsworth and nods, a small, precise tilt of the head.
27 A He puts away his phone and straightens.
28 A ¶ Vikram sees it.
29 A His hand moves under the table.
30 D CATALINA [CONT'D]: That's a first edition. Seventeen-twelve. We've had it since the war.
31 D VIKRAM: It's magnificent.
32 D CATALINA: Plate nine is missing.
33 A ¶ Vikram doesn't answer.
34 A He lifts his arm.
* 35 A The folio opens to a clean stub where a plate has been razored out.
36 D VIKRAM: It was missing when I got it.
37 D CATALINA: It was in the case at four.
38 A ¶ Ellsworth crosses the floor in six long steps.
39 A Vikram stands.
40 A His chair crashes backward.
41 A His hand comes out from under the table with a short folding knife.
42 A Ellsworth halts.
43 A ¶ Nobody breathes.
44 A Catalina does not move.
* 45 A The lamp hums.
46 A ¶ She speaks gently, as if to a child.
47 D CATALINA [CONT'D]: Put it on the table, Dr. Sharma.
48 A ¶ For a long beat he stares at her.
49 A Then his arm drops.
* 50 A The knife clatters onto the oak.
51 A Ellsworth takes his wrist and turns him.
52 A Vikram does not resist.
53 A ¶ Catalina takes the folio.
54 A She smooths the stub with a gloved fingertip.
55 D CATALINA [CONT'D]: Where is it?
56 D VIKRAM (hoarse): In my laptop sleeve.
57 A ¶ She nods.
58 A Ellsworth fishes the plate out and hands it to her.
59 A She lays it flat between two sheets of tissue.
* 60 A ¶ The tension drains from the room.
61 A Ellsworth sighs.
62 A Vikram slumps.
63 A Catalina closes the folio and turns off the lamp.

### SCENE s02486 | EXT. PIRATE'S COVE MINIGOLF - GAZEBO - DAY
Detected names (may be incomplete or contain aliases): TAMSIN HOLT-MBEKI, DEV RAMASWAMY, GRISHA ABRAMOV, MAGDALENA HOLT, FATHER OKONKWO
* 1 A ¶ A wedding in full swing on hole fourteen.
* 2 A Plastic palm trees, a fibreglass pirate ship, and forty folding chairs on AstroTurf.
3 A A string quartet plays on the putting green with a sad sag in the bow.
4 A ¶ TAMSIN HOLT-MBEKI, 30s, bride, ivory gown, trainers underneath, pins her veil with the tip of a golf pencil.
5 A DEV RAMASWAMY, 30s, groom, tweed, holds a putter he hasn't realised he's holding.
6 A GRISHA ABRAMOV, 30s, best man, sweats through his waistcoat.
7 A MAGDALENA HOLT, 60s, mother of the bride, in a hat like a lifeboat, glares at a pirate statue.
* 8 A ¶ A phone in Grisha's breast pocket buzzes.
9 A He fumbles it.
10 A Puts it on speaker.
11 D FATHER OKONKWO [V.O.] (tinny, wind in the line): Grisha? It's Father Okonkwo.
12 D GRISHA: Father! Where are you?
13 D FATHER OKONKWO [V.O.]: Junction twelve. The motorway is a car park.
14 D MAGDALENA: Tell him to walk.
15 D FATHER OKONKWO [V.O.]: Who's that?
16 D TAMSIN: It's Mum. Hi, Father.
17 D FATHER OKONKWO [V.O.]: Tamsin! Lovely. Could you possibly begin without me?
18 D DEV (quietly): I can't legally marry myself.
19 D GRISHA: Father, we can't start without a priest.
20 D FATHER OKONKWO [V.O.]: Yes you can. I'll do the vows by phone.
21 D MAGDALENA: By phone!
22 D TAMSIN: Mum.
23 D MAGDALENA: In my day we had a priest in a collar, not a voice in a pocket!
24 D DEV: Mrs. Holt, he's perfectly good in a pocket.
25 A ¶ Grisha holds the phone aloft.
26 A The quartet falters.
* 27 A A recorded parrot in the pirate ship shrieks "Arr!"
28 A Magdalena claps a hand to her chest.
29 D FATHER OKONKWO [V.O.]: Dearly beloved. Or whichever of you is nearest the phone.
30 D TAMSIN: Go on, Father.
31 A ¶ Dev takes her hand.
* 32 A Over the phone, a horn blares.
33 A Father Okonkwo shouts something that might be a blessing.

### SCENE s02487 | INT. THE DAILY CHRONICLE - COMPOSING ROOM - NIGHT - 1888
Detected names (may be incomplete or contain aliases): ALDOUS FENWICK, BRIDIE QUINN, TOMASZ KRAWCZYK, PERPETUA LISLE, CYRIL BEAMISH, LORD HASTWELL
* 1 A ¶ Gaslight.
* 2 A Cases of type.
* 3 A Ink-black walls.
* 4 A A press thumps below.
5 A ¶ ALDOUS FENWICK, 50s, foreman, rolls his sleeves.
6 A BRIDIE QUINN, 20s, compositor, sets type with quick fingers.
7 A TOMASZ KRAWCZYK, 30s, pressman, hauls a forme.
8 A PERPETUA LISLE, 40s, proofreader, spectacles on a ribbon, scowls at a galley.
9 A CYRIL BEAMISH, 17, devil, sweeps.
* 10 A ¶ A brass speaking tube on the wall WHISTLES.
11 A Everyone freezes.
12 D ALDOUS (to the tube): Composing room.
13 D LORD HASTWELL [V.O.] (muffled, imperious): Fenwick. The front page.
14 D ALDOUS: Set and locked, my lord.
15 D LORD HASTWELL [V.O.]: Pull it. A fire in Whitechapel. Use my headline.
16 D BRIDIE (under her breath): There's no room.
17 D ALDOUS: Hush, girl.
18 D LORD HASTWELL [V.O.]: Was that a woman?
19 D ALDOUS: A compositor, sir.
20 D LORD HASTWELL [V.O.]: Dismiss her.
* 21 A ¶ Silence.
22 A Bridie's hand closes over her composing stick.
23 A Tomasz steps toward the tube.
24 D TOMASZ: Dismiss me too.
25 D PERPETUA: And me.
26 D CYRIL (squeaking): And me.
27 A ¶ Aldous pushes the cover onto the tube.
* 28 A The whistle dies.
29 A He turns slowly to face the room, and a smile breaks across his face.
30 D ALDOUS: Gentlemen. Ladies. Set the page.

### SCENE s02488 | EXT. RIVER OF ASH - FERRY - TWILIGHT
Detected names (may be incomplete or contain aliases): IXARA, BRUM
* 1 A ¶ A black skiff drifts on slow grey water.
* 2 A Pale ash falls like snow.
3 A ¶ IXARA, 30s, ferrywoman, silver-white hair, poles in silence.
4 A BRUM, 50s, a traveler in a cloak, sits upright with a lantern at his feet.
5 D IXARA: Where to?
6 D BRUM: The far shore.
7 D IXARA: Everyone says the far shore.
8 D BRUM: Everyone's headed there.
9 D IXARA: Not everyone has the fare.
10 D BRUM: I have the fare.
11 D IXARA: What is it?
12 D BRUM: A name.
13 D IXARA: Whose?
14 D BRUM: Yours.
15 D IXARA (carefully): Mine's not for sale.
16 D BRUM: It's not for sale. It's for the toll. You told it to the last passenger, and he told it to me. You have been Ixara for nine hundred years. Before that you were someone else.
17 D IXARA: Hush.
18 D BRUM: They had a name for you in the old tongue. I have it here.
19 D IXARA: Stop.
20 D IXARA (together): Do not speak it.
21 D BRUM: I'm going to speak it.
* 22 A ¶ Ash thickens.
* 23 A The lantern gutters.

### SCENE s02489 | INT. STARLIGHT ROLLER RINK - NIGHT
Detected names (may be incomplete or contain aliases): TARIQ OKAFOR-LANE, JOJO, VARGAS, LINDQVIST
* 1 A ¶ Disco ball.
* 2 A Carpeted walls.
* 3 A A faded sign: LAST SKATE.
* 4 A The speakers play a slow song nobody asked for.
5 A ¶ TARIQ OKAFOR-LANE, 17, rental skates two sizes too big, clings to the rail.
6 A JOSEFINA "JOJO" VARGAS, 17, graceful on her own wheels, skates backward in front of him.
7 A MR. LINDQVIST, 60s, owner, apron over a windbreaker, stacks plastic baskets at the snack counter, listening.
8 D JOJO: You're doing it wrong.
9 D TARIQ: I'm doing it.
10 D JOJO: You're clutching.
11 D TARIQ: It's called balance.
12 D JOJO: It's called terror.
13 A ¶ He lets go.
14 A Windmills.
15 A Grabs the rail again.
16 A Jojo laughs and sails away, spins, comes back.
17 D JOJO [CONT'D]: Come on, Tariq. Last night in the building. Let me see you skate.
18 D TARIQ: It's closing?
19 D JOJO: Mr. Lindqvist sold it. Condos.
20 A ¶ Tariq glances at the counter.
21 A Mr. Lindqvist is wiping a spotless surface.
22 D TARIQ: Why didn't you say?
23 D JOJO: I'm saying.
24 D TARIQ: I mean before.
25 D JOJO: Before, you weren't talking to me.
26 D TARIQ: You weren't talking to me.
27 A ¶ They look at each other.
* 28 A Disco light slides across their faces.
29 D TARIQ [CONT'D]: I'm sorry, Jo.
30 D JOJO: For what?
31 D TARIQ: For what I said in the cafeteria.
32 D JOJO: Which part?
33 D TARIQ: All of it.
34 A ¶ She skates to him.
35 A Holds out both hands.
36 D JOJO: Come on. Let go of the wall.
37 A ¶ He lets go.
38 A Takes her hands.
39 A She backs away slowly, pulling him across the floor.
40 A He wobbles.
41 A Straightens.
42 D TARIQ: I'm doing it.
43 D JOJO: You're doing it.
44 A ¶ They circle.
* 45 A Behind them the song fades into a different song.
46 A Mr. Lindqvist dims the lights another notch.
47 D MR. LINDQVIST [O.S.] (calling from the counter): Five more minutes, you two.
48 D JOJO (calling back): Ten, Mr. L!
49 D MR. LINDQVIST [O.S.]: Five!
50 A ¶ Tariq grins.
51 A For a lap, his skating looks almost natural.
52 D TARIQ: Where will you go? After?
53 D JOJO: There's a rink in Eastbrook.
54 D TARIQ: That's forty minutes.
55 D JOJO: I've got a bike.
56 D TARIQ: I haven't.
57 D JOJO: Then borrow one.
58 A ¶ Tariq nods.
* 59 A The ball spins.
60 A They skate in silence for a long time.
61 D JOJO [CONT'D]: My dad's moving us in June.
62 D TARIQ: Where?
63 D JOJO: Tucson.
64 A ¶ He stumbles.
65 A She catches him.
66 D TARIQ: You were going to tell me?
67 D JOJO: I'm telling you.
68 D TARIQ: Same as the rink.
69 D JOJO: Same as the rink.
70 A ¶ He steadies himself.
71 A They keep circling.
* 72 A The song ends.
* 73 A ¶ The overhead lights flicker once, twice.
74 A Mr. Lindqvist's silhouette stands at the switch.
75 D MR. LINDQVIST [O.S.]: That's it, kids.
76 A ¶ Tariq doesn't let go of her hand.
77 D TARIQ: One more lap.
78 D JOJO: Mr. L!
79 D MR. LINDQVIST [O.S.] (a long beat): One more lap.
80 A ¶ He kills the music.
* 81 A In the silence there is only the soft rumble of two sets of wheels on old boards, going round and round.
