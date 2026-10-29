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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0156.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01941 | INT. SALEM MEETINGHOUSE - EVENING
Detected names (may be incomplete or contain aliases): GOODWIFE TABITHA CROMPTON, EZEKIEL PRUITT
* 1 A ¶ 1692.
* 2 A Bare pine benches.
* 3 A A pulpit.
* 4 A A candle gutters beside a Bible.
5 A ¶ GOODWIFE TABITHA CROMPTON, 50s, plain gray dress and white cap, kneels at the front pew with her eyes closed.
* 6 A A door creaks.
7 A She does not turn.
8 A ¶ EZEKIEL PRUITT, 30s, a young magistrate in a black coat, steps inside and hangs his hat on a peg.
9 D EZEKIEL: Goodwife Crompton.
10 D TABITHA: Magistrate Pruitt.
11 D EZEKIEL: They said you'd be here.
12 D TABITHA: Where else would I be?
13 D EZEKIEL: At home. With the door barred.
14 A ¶ She opens her eyes.
15 A She looks at him, tired.
16 D TABITHA: It's over, then.
17 D EZEKIEL: The governor has pardoned the rest. Your name was the last he signed.
18 A ¶ She bows her head.
19 A He crosses the floor and sits at the end of the bench, a respectful distance away.
* 20 A The candle gutters and steadies.

### SCENE s01942 | INT. RURAL RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): LORENZO BIANCHINI, FAYE OSTROWSKI, IBRAHIM SESAY, GRETA HALLSTROM, MARCELINE
* 1 A ¶ A tin-roofed shack by a cornfield.
* 2 A Foam-padded walls.
* 3 A A glowing "ON AIR" sign.
* 4 A A single microphone on a boom.
5 A ¶ LORENZO BIANCHINI, 50s, in a bathrobe and headphones, leans back in a swivel chair and sips coffee.
6 A Across the booth, FAYE OSTROWSKI, 20s, the board operator, scrolls through requests on a laptop.
7 A IBRAHIM SESAY, 40s, a truck driver, sits on a stool by the door, waiting out the rain.
8 A GRETA HALLSTROM, 60s, the station owner, knits in the corner.
9 D LORENZO (into mic): It's two in the morning, and you're listening to Night Owl Radio. The rain is steady, the corn is quiet, and the phone lines are open.
10 D FAYE (whispering): You're good. Five more minutes and we can close.
11 D IBRAHIM: Can I stay until the rain stops?
12 D GRETA (not looking up): You can stay until the pot runs out.
* 13 A ¶ The phone line rings.
14 A Faye flips a switch.
15 D FAYE: Night Owl, you're on the air.
16 D MARCELINE [V.O.] (over speaker, small, calm): Hello, Lorenzo. It's Marceline.
17 A ¶ Lorenzo's cup stops halfway to his mouth.
18 A Greta's knitting needles go still.
19 D LORENZO: Marceline. Hello.
20 D MARCELINE [V.O.]: I wanted to say thank you for the song last week.
21 D LORENZO: You're welcome.
22 D MARCELINE [V.O.]: I'm calling from the field behind the station. The corn is very tall tonight.
23 A ¶ Faye looks at the window.
24 A Ibrahim stands.
* 25 A Beyond the glass, rain and darkness and the black wall of corn.
26 D FAYE (to Lorenzo, low): That line is internal. There's no one out there.
27 D MARCELINE [V.O.]: Lorenzo, would you play it again?
28 A ¶ Lorenzo sets down the cup.
29 A He looks at Greta.
30 A She nods, ashen.
31 D LORENZO: Of course, Marceline. Anything for you.
32 A ¶ He cues a record.
* 33 A The needle drops.
* 34 A Outside, something taps gently on the glass.

### SCENE s01943 | INT. LUNAR LAVA TUBE - GREENHOUSE - ARTIFICIAL DAY
Detected names (may be incomplete or contain aliases): PALOMA REYNOSO, THE VISITOR, ORIN
* 1 A ¶ A cathedral of black basalt, strung with grow-lamps.
* 2 A Rows of tomatoes and soybeans climb trellises under a violet glow.
* 3 A Condensation drips from a vaulted ceiling.
4 A ¶ DR. PALOMA REYNOSO, 40s, in a canvas apron over a thermal suit, prunes a tomato vine with delicate care.
* 5 A Behind her, an airlock hisses.
6 A ¶ A figure in a worn pressure suit steps through, visor fogged.
7 A It stops three paces inside and stands very still, as if afraid to wake the plants.
8 D PALOMA: You're not on the roster.
9 D THE VISITOR: No. I came on the supply drone.
10 D PALOMA: The drone carries cargo.
11 D THE VISITOR: I was cargo.
12 A ¶ Paloma sets down her shears.
13 A She approaches, slowly, until she can see through the visor to the face behind it: gaunt, unshaven, eyes red.
14 D PALOMA: Take off your helmet.
15 D THE VISITOR: I'd rather not.
16 D PALOMA: Then you can't stay.
17 A ¶ He lifts his hands to the seals.
* 18 A The helmet rotates with a hiss.
19 A He draws a breath of the humid air and closes his eyes.
* 20 A The scent of tomatoes fills the cave.
21 D PALOMA [CONT'D]: Who are you?
22 D THE VISITOR: Orin Feld. Systems tech, Tycho Base. I left four years ago.
23 A ¶ Paloma staggers back against a trellis.
* 24 A The tomatoes sway.
25 D PALOMA: Orin Feld died on the surface. We held a service.
26 D ORIN: I know. I was there. In the back.
27 D PALOMA: You were dead.
28 D ORIN: For a while. It was easier.
29 A ¶ Paloma slaps him.
* 30 A The crack echoes off the basalt.
31 A Orin does not lift a hand.
32 A He just stands, helmet under one arm, cheek reddening.
33 D PALOMA: Four years. Four years, Orin.
34 D ORIN: Paloma--
35 D PALOMA: Dr. Reynoso, to you.
36 A ¶ She turns away, shoulders shaking, and presses her palm to a vine.
* 37 A A tomato drops into her hand.
38 A She stares at it.
39 D ORIN: It's the first one, isn't it?
40 D PALOMA: The first red one. Yes.
41 D ORIN: Eat it.
42 A ¶ She does not move.
43 A He steps forward, takes it gently from her fingers, and bites into it.
* 44 A Juice runs down his chin.
45 A He laughs.
46 A He is crying.
47 D ORIN [CONT'D]: God. I forgot.
48 A ¶ Paloma looks at him.
49 A Slowly, she smiles, and reaches for another.

### SCENE s01944 | EXT. SPARKLE AUTO SPA CAR WASH - NIGHT
Detected names (may be incomplete or contain aliases): VINNIE CASTELLANOS, LUCKY SZYMANSKI, SGT. HAYES, DEE OKPARA
* 1 A ¶ Neon pink.
* 2 A A conveyor belt rumbles through a tunnel of foaming brushes.
* 3 A A dented sedan idles at the entrance, hazards blinking.
4 A ¶ VINNIE CASTELLANOS, 40s, leather jacket, keys in one fist, slams the sedan's trunk.
5 A LUCKY SZYMANSKI, 30s, kneels by the front tire, holding a duffel bag.
* 6 A A police radio on Vinnie's belt crackles.
7 D SGT. HAYES [V.O.] (over radio): All units, shots fired at Third and Maple. Suspects in a gray sedan.
8 D VINNIE (muttering): Too soon.
9 D LUCKY: We gotta go, Vin.
10 D VINNIE: Wait for Dee.
11 D LUCKY: Dee's three minutes late.
12 D VINNIE: She's two minutes late. Don't--
13 A ¶ DEE OKPARA, 30s, black hoodie, running shoes, bursts around the corner of the tunnel with a gym bag clutched to her chest.
14 D DEE: Go, go, go!
15 D LUCKY: You're late!
16 D DEE: I was shot at!
17 D VINNIE: By who?
18 D DEE: By whoever I robbed, Vinnie, who do you think?
19 D SGT. HAYES [V.O.] (over radio): Units responding to Third and Maple. Repeat, gray sedan, plates unknown.
20 A ¶ Vinnie rips the radio off his belt and drops it into the car-wash foam.
21 A Dee dives into the back seat.
22 A Lucky tosses the duffel in after her and slides behind the wheel.
23 D LUCKY: Vin, door!
24 D VINNIE: I'm getting in!
* 25 A ¶ The sedan lurches forward onto the belt.
* 26 A Brushes descend.
* 27 A Water sprays across the windshield.
28 A Inside, three people sit very still, breathing hard, as the car wash whirls around them and a siren grows in the distance.
29 D DEE: This is the worst getaway ever.
30 D LUCKY: It's a very good wash.

### SCENE s01945 | INT. DRAGON'S CAVERN - DENTAL CHAMBER - DAY
Detected names (may be incomplete or contain aliases): IGNATHRAX, MAGISTER ODALRIC PYM, TAMSIN EKE
* 1 A ¶ A vast cavern, hung with sacks of gold and a cracked mirror the size of a barn door.
* 2 A In the center, a throne-sized stone chair, strapped with iron.
* 3 A A huge reptilian jaw rests open on its headrest.
4 A ¶ IGNATHRAX, a dragon the color of old copper, reclines with his lids half shut and a single enormous molar exposed.
5 A Beside him, MAGISTER ODALRIC PYM, 60s, in a leather apron and a headlamp, holds a pair of tongs the length of a broom.
6 A TAMSIN EKE, 20s, his apprentice, hovers at the foot of the chair with a bucket of cold well-water.
7 D ODALRIC: Don't clench.
8 D IGNATHRAX: I am not clenching.
9 D ODALRIC: You are clenching with your entire jaw. Release the jaw.
10 D IGNATHRAX: It is difficult to release a thing one has been clenching since the Third Age.
11 D TAMSIN: Master, the molar's cracked at the root.
12 D ODALRIC: I can see that, Tamsin.
13 D TAMSIN: It's the left one. The one he ate the knight with.
14 D IGNATHRAX: That is a lie. I chewed that knight carefully.
15 D ODALRIC: Be that as it may, the crown has to come out.
16 D IGNATHRAX: Will it hurt?
17 D ODALRIC: Enormously.
18 D IGNATHRAX: Then I will have a drink first.
19 D ODALRIC: You may not have a drink. Your breath ignites.
20 D IGNATHRAX: It is merely a mood.
21 D TAMSIN: Master, he's sweating molten.
22 A ¶ Odalric looks down.
* 23 A A slow rivulet of copper-colored sweat creeps along the stone floor, steaming.
24 A Tamsin pours the bucket over it.
* 25 A A hiss.
* 26 A A cloud of steam.
27 D ODALRIC: Thank you, Tamsin.
28 D IGNATHRAX: I did not ask for this. I merely wished to sleep on my gold.
29 D ODALRIC: And you shall. After the tooth.
30 D IGNATHRAX: Why must it be out?
31 D ODALRIC: Because the infection will spread to the brain, and the brain will then burn the cavern down.
32 D IGNATHRAX (a long pause): That is a fair argument.
33 D ODALRIC: Open wide.
34 D IGNATHRAX: Count to three.
35 D ODALRIC: One.
36 A ¶ He yanks.
* 37 A The tongs come away with a molar the size of a milk churn.
38 A Ignathrax roars; the cavern shakes; gold sacks tumble.
39 A Tamsin dives under the chair.
40 A Odalric holds the tooth aloft in triumph.
41 D IGNATHRAX [CONT'D]: You said three!
42 D ODALRIC: I lied.

### SCENE s01946 | EXT. SWAMP FERRY - NIGHT
Detected names (may be incomplete or contain aliases): MORVAN, HESPER, BRIAR, SABLE, THE DROWNED KING
* 1 A ¶ Black water.
* 2 A Dead trees.
* 3 A A flat barge poled through reeds.
* 4 A One lantern.
5 A ¶ MORVAN, 70s, ferryman, bent, poles in silence.
6 A HESPER, 20s, a cloaked wanderer, sits cross-legged at the prow.
7 A BRIAR, 12, wild-haired, trails a hand in the water.
8 A SABLE, 30s, a hooded archer, keeps watch at the stern.
9 D BRIAR: It's cold.
10 D MORVAN: Pull your hand in.
11 D BRIAR: It's not that cold.
12 D MORVAN: Pull it in.
13 A ¶ Briar sulks.
14 A Sable says nothing.
15 A Hesper does not look up.
* 16 A ¶ A bubble rises beside the barge.
* 17 A Then another.
18 D THE DROWNED KING [O.S.] (from beneath the water, hollow): Ferryman. You've brought me guests.
19 A ¶ Morvan stops poling.
20 A His knuckles whiten.
21 D MORVAN: No guests, Majesty. Just cargo.
22 D THE DROWNED KING [O.S.]: Cargo has hands. I count eight.
23 A ¶ Briar yanks her arm out.
* 24 A Water streams from it, black and thick.
25 A Sable draws an arrow.
26 A Hesper lifts her gaze.
27 D HESPER: Poles, Morvan. Faster.
28 D SABLE: Don't.
29 D THE DROWNED KING [O.S.]: You may go. The child stays.
30 A ¶ Briar clings to Hesper's cloak.
31 A Sable nocks the arrow.
32 A Morvan breathes through his teeth.
33 D MORVAN (low): I never agreed to this.
34 D HESPER: Neither did she.
* 35 A ¶ The barge shudders.
36 A A pale hand grips the gunwale beside Briar.
37 A Then another.
38 A Sable looses the arrow.
* 39 A It sinks without a splash.

### SCENE s01947 | INT. FUNICULAR STATION VAULT - NIGHT
Detected names (may be incomplete or contain aliases): CAMILLE DUVALL, RASHID AL-TAMIMI, SVEN EKLUND, ODESSA RUIZ
* 1 A ¶ A brass-and-marble ticket hall at the foot of an alpine rail line.
* 2 A Behind a hidden panel, the old bank vault gapes open, its steel door scarred by a thermal lance.
* 3 A Dust motes drift in lantern light.
4 A ¶ CAMILLE DUVALL, 40s, tailored black coat, pale and still, sits on an overturned crate with a coil of rope across her knees.
5 A She waits.
6 A A step ahead of her stands RASHID AL-TAMIMI, 50s, shaven head, a surgeon's calm; he is gently lifting a velvet-wrapped ingot from a cart.
7 A SVEN EKLUND, 30s, red-bearded and nervous, kneels beside him, counting bars into a leather duffel.
8 A ODESSA RUIZ, 30s, a lookout with a stopwatch, leans in the archway, tapping her boot.
9 D CAMILLE: Time?
10 D ODESSA: Four minutes to the first car.
11 A ¶ She nods.
12 A She does not move from the crate.
13 D RASHID: Seventeen bars.
14 D SVEN: Eighteen.
15 D RASHID: Count again.
16 A ¶ He does, lips moving.
17 A He shakes his head and adds one more bar to the bag.
* 18 A The duffel sags.
19 A He grunts and drags it toward the archway, where she meets him and takes the other strap.
20 D SVEN: Camille, there were thirty.
21 D CAMILLE: There were thirty. Now there are eighteen, because someone got here first.
22 D RASHID: Who?
23 D CAMILLE: Someone with a key.
* 24 A ¶ Silence.
* 25 A Odessa's stopwatch ticks.
26 A Sven looks at the floor.
27 A Rashid straightens and turns toward the vault, slowly, as if the empty shelves might speak.
28 D ODESSA: Three minutes.
29 D CAMILLE: We take what we have and go.
30 D RASHID: We also look at who knew the plan.
31 A ¶ He stares at Sven.
32 A Sven goes red.
33 A The duffel slides from his hand.
34 D SVEN: I didn't.
35 D CAMILLE: Nobody's accusing you.
36 D RASHID: I am.
37 A ¶ She stands.
38 A She folds the rope.
39 A She sets it in the cart with the same care she gave the rest.
40 D CAMILLE: Rashid, it's a trade. We keep eighteen bars, and the thief keeps twelve. We never speak of it again.
41 D RASHID: And if the thief speaks?
42 D CAMILLE: Then we'll know exactly who it was.
43 A ¶ Odessa clicks the stopwatch.
* 44 A Two minutes.
45 D ODESSA: Time's up.

### SCENE s01948 | INT. MILL OWNER'S PARLOR - NIGHT
Detected names (may be incomplete or contain aliases): JOSEPHINE MBATHA, CYRUS ALDERWICK, CONSTANCE YOON
* 1 A ¶ 1903.
* 2 A A candle.
* 3 A A ledger.
* 4 A A decanter.
5 A ¶ JOSEPHINE MBATHA, 30s, in a plain gray dress, stands before the desk.
6 A CYRUS ALDERWICK, 50s, the owner, writes without looking up.
7 A CONSTANCE YOON, 20s, a weaver, trembles at the door.
8 A ¶ She sets a paper on the ledger.
9 A He reads it.
10 A He sets down the pen.
11 D CYRUS: You'd strike over this?
12 D JOSEPHINE: We'd strike over less.
13 A ¶ She steps forward.
14 A She places her hand over the ledger.
15 A Constance flinches.
16 A He stands.
17 A Josephine does not.
18 D CYRUS: Constance, did you put your name to this?
19 D CONSTANCE: I did, sir.
20 D JOSEPHINE: She did, and so did two hundred others.
21 A ¶ He sags into his chair.
22 A He pours a glass.
23 A He drinks.
24 D CYRUS: Tell your people we'll talk in the morning.
25 A ¶ She nods.
26 A She steps back.
27 A She takes the girl's arm.
28 A Together they go out into the dark corridor.

### SCENE s01949 | INT. OPERATING THEATER 4 - NIGHT
Detected names (may be incomplete or contain aliases): KALANI MAHOE, BEATRIX LUND, TOMASZ WRONA, YARA HADDAD, ANAESTHETIST, ROSA
* 1 A ¶ Cold white light.
* 2 A The steady beep of a monitor.
3 A A patient lies draped on the table, only a rectangle of skin exposed.
4 A ¶ DR. KALANI MAHOE, 50s, surgeon, bends over the field.
5 A BEATRIX LUND, 30s, scrub nurse, passes instruments.
6 A TOMASZ WRONA, 20s, the resident, holds a retractor.
7 A YARA HADDAD, 40s, circulating nurse, stands by the door.
8 A At the head of the table, the ANAESTHETIST, 40s, watches the monitors.
9 D MAHOE: Retractor.
10 D TOMASZ: Got it.
11 D MAHOE (to the room): Everyone with me. We are closing in ten minutes.
12 D ANAESTHETIST: Blood pressure's holding.
13 D BEATRIX: Suture.
14 D MAHOE (to himself): Almost there.
15 A ¶ The anaesthetist glances at the screen, then at the surgeon.
16 A She taps a dial.
17 D ROSA: Kalani, her sats just dropped.
18 D MAHOE: How far?
19 D ROSA: Ninety-one.
20 D TOMASZ: Is that bad?
21 D YARA (from the door): Don't ask.
22 D MAHOE: Rosa, ventilate. Beatrix, hold the sutures.
23 D BEATRIX: Holding.
24 D MAHOE: Tomasz, you can breathe now.
25 A ¶ Tomasz lets out a long breath.
* 26 A The monitor settles.

### SCENE s01950 | INT. FLOODED HOTEL LOBBY - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT ANNEKE DEVRIES, SERGEANT KOFI MENSAH-BOATENG
* 1 A ¶ A grand ruin.
* 2 A Chandeliers hang in black water to the knees.
* 3 A A reception desk rises like an island.
* 4 A Gunfire rumbles far off.
5 A ¶ LIEUTENANT ANNEKE DEVRIES, 30s, helmet cracked, sits on the desk with a bandaged thigh.
6 A SERGEANT KOFI MENSAH-BOATENG, 40s, wades in from the stairs, rifle held high.
7 D KOFI: Upstairs is clear.
8 D ANNEKE: Then sit.
9 A ¶ He climbs onto the desk beside her.
10 A She hands him a canteen.
11 A He drinks, wipes his mouth, hands it back.
12 D ANNEKE [CONT'D]: How many left in the company?
13 D KOFI: Eleven.
14 D ANNEKE: Yesterday we were forty.
15 D KOFI: Yesterday was yesterday.
16 D ANNEKE: Tell me they got out.
17 D KOFI: Some got out.
18 D ANNEKE: Kofi.
19 D KOFI: I won't lie to you, Lieutenant.
20 D ANNEKE: You never do. It's very irritating.
* 21 A ¶ A beam crashes somewhere above.
* 22 A Water ripples across the lobby.
23 A They both flinch, then settle.
24 D ANNEKE [CONT'D]: When this is over, what will you do?
25 D KOFI: Go home. Sit in my mother's kitchen. Eat until I cannot stand.
26 D ANNEKE: That's all?
27 D KOFI: That's a great deal.
28 D ANNEKE: My mother's kitchen burned in the first week.
29 D KOFI: Then you'll come to mine.
30 A ¶ She laughs, a short, cracked sound.
31 A He smiles.
* 32 A Another distant shell.
33 A They both fall silent.
34 D ANNEKE: Kofi. If I don't make it out--
35 D KOFI: You will.
36 D ANNEKE: If I don't.
37 D KOFI: Then I tell your sister you were a terrible card player.
38 D ANNEKE: Tell her I was the worst. She'll believe that.
39 D KOFI: She will.
40 D ANNEKE: Good.
41 A ¶ She leans her head on his shoulder.
42 A He does not move.
43 A They sit in the dark water and listen to the war go quiet.

### SCENE s01951 | INT. PERFUMERY - PARIS - AFTERNOON
Detected names (may be incomplete or contain aliases): ARMAND LAFORGUE, ISIDORE BEAUCAIRE
* 1 A ¶ 1768.
* 2 A A shop of glass and brass.
* 3 A Rows of tiny bottles glow in the amber light.
* 4 A Orange blossom and jasmine hang thick in the air.
5 A ¶ ARMAND LAFORGUE, 50s, the master perfumer, stirs a vial at the counter.
6 A He does not look up.
7 A The bell above the door chimes, and ISIDORE BEAUCAIRE, 40s, a courtier in a powdered wig, steps in, shaking rain from his coat.
8 D ISIDORE: Armand. You look well.
9 D ARMAND: I am not well, Isidore. I am merely alive.
10 A ¶ He sets down the vial.
11 A He pours a measure into a crystal stopper and offers it.
12 A The courtier sniffs, smiles, and hands it back.
13 D ISIDORE: Violet and cedar.
14 D ARMAND: And?
15 D ISIDORE: And something I cannot name.
16 D ARMAND: Bitter almond.
17 A ¶ Isidore's smile dies.
18 A He steps back.
19 A His hand drifts to his coat.
20 A Armand watches it go, then lifts the stopper to his own lips and drinks it down.
21 D ARMAND [CONT'D]: You see? Harmless.
22 A ¶ The courtier stares.
23 A Armand sets the empty stopper on the counter and places both hands flat on the wood.
24 D ARMAND [CONT'D]: The other bottle, however, is in your pocket.
25 A ¶ He lunges across the counter and seizes the wrist.
26 A They struggle among the vials.
* 27 A Glass breaks.
* 28 A The scent of a hundred flowers erupts at once.
29 A Isidore breaks free and runs for the door.
30 A He yanks it open.
31 A Armand sags against the shelves, laughing quietly.

### SCENE s01952 | EXT. RIVERBOAT SAWMILL - DAY
Detected names (may be incomplete or contain aliases): MARSHAL EVANDER COLE, TILDA HASKELL, RAWLINS DUNMORE, JOAQUIN SPARROW
* 1 A ¶ A barge-mounted sawmill moored on a brown river.
* 2 A A huge blade whines through a log.
* 3 A Sawdust drifts like snow.
* 4 A Men shout from the lower deck.
5 A ¶ MARSHAL EVANDER COLE, 40s, dusty badge, stands at the rail with his thumbs in his belt.
6 A TILDA HASKELL, 30s, in a leather apron, feeds logs to the blade.
7 A RAWLINS DUNMORE, 40s, mill foreman, glowers from the catwalk.
8 A Below the saw, JOAQUIN SPARROW, 20s, a wiry deckhand, hauls a rope.
9 D EVANDER: Mr. Dunmore. I'd like a word.
10 D RAWLINS: I'm busy.
11 D EVANDER: So's the river.
12 A ¶ Rawlins comes down the steps, wiping his hands.
13 A Tilda cuts the saw.
* 14 A The silence is sudden.
15 D RAWLINS: What's this about, Marshal?
16 D EVANDER: A dead man, found downstream. Pinned under a log from this barge.
17 D RAWLINS: Accidents happen.
18 D EVANDER: This one had a bullet in him.
19 A ¶ Tilda sets down her lever.
20 A Joaquin lets go of the rope.
21 A Rawlins keeps his hands where Evander can see them.
22 D RAWLINS: I know nothing about it.
23 D EVANDER: Then you won't mind if I look at the log.
24 D RAWLINS: Be my guest.
25 A ¶ He walks to the stack.
26 A Evander follows.
27 A Joaquin darts for the gangplank, but Tilda catches him by the collar and drags him back.
28 A He twists loose and sprints across the deck.
29 A Evander draws his revolver.
30 D EVANDER: Joaquin!
31 D JOAQUIN: It wasn't me!
32 D EVANDER: I never said it was.
33 A ¶ Joaquin stops at the rail.
34 A His shoulders heave.
35 A Rawlins backs away, boots scraping on the planks.
36 D TILDA (quietly): Joaquin, tell him.
37 D JOAQUIN: He made me, Tilda.
38 D RAWLINS: Shut your mouth, boy.
39 D JOAQUIN: He shot Mr. Pell over the lumber contract and made me drag the body to the saw. I didn't want to. I swear I didn't.
40 D RAWLINS: That's a lie.
41 D EVANDER: Is it?
42 D RAWLINS: Marshal, I've run this mill twenty years.
43 D EVANDER: Then twenty years is plenty.
44 A ¶ Rawlins lunges for the gun on his hip.
45 A Evander fires first.
46 A Rawlins spins and falls across a pile of sawdust, clutching his shoulder.
47 A Tilda steps over him, kicks the gun away, and stands there breathing.
48 D TILDA: He's alive.
49 D EVANDER: Good. He can hang proper.

### SCENE s01953 | INT. FENCING HALL - EVENING
Detected names (may be incomplete or contain aliases): SORAYA DELGADO, BOHDAN MARCHENKO, HARRIET QUIGLEY
* 1 A ¶ A high-ceilinged gymnasium.
* 2 A Strip lights glare on white lamé.
* 3 A Sabres ring against each other on two raised pistes.
4 A ¶ SORAYA DELGADO, 20s, hood up, sits alone on a bench taping her blade guard.
5 A Across the room, BOHDAN MARCHENKO, 50s, her coach, argues quietly with a judge.
6 A HARRIET QUIGLEY, 30s, a rival in a silver jacket, stretches her hamstring on the opposite piste.
7 A ¶ Soraya finishes taping.
8 A She pulls her mask over her head.
9 A She rises.
10 A She crosses the floor with an easy stride.
11 D BOHDAN: Soraya. A word.
12 D SORAYA: After the bout.
13 D BOHDAN: Before.
14 A ¶ She stops.
15 A He crosses to her.
16 A He lowers his voice.
17 D BOHDAN [CONT'D]: Harriet is your sister's friend.
18 D SORAYA: I know.
19 D BOHDAN: She has been asking for you.
20 D SORAYA: I know that too.
21 D HARRIET (calling): Ready when you are!
22 A ¶ Soraya raises a hand to show she's heard.
23 A She takes two steps toward the piste and then stops again.
24 A She looks at Bohdan.
25 D SORAYA: What is it?
26 D BOHDAN: Your sister called.
27 A ¶ She goes still.
28 A He looks at his shoes.
29 D SORAYA: Say it.
30 D BOHDAN: She's in hospital. It's not serious. They think.
31 D SORAYA: Why didn't you tell me earlier?
32 D BOHDAN: Because you've waited four years for this bout.
33 A ¶ She tears off her mask.
34 A She throws it at the bench.
* 35 A It bounces and slides to Harriet's feet.
36 A Harriet picks it up, turns it over, and carries it back to her.
37 D HARRIET: Go. I'll tell them you withdrew.
38 D SORAYA: I didn't withdraw.
39 D HARRIET: You did now.
40 A ¶ Soraya takes the mask.
41 A She holds it a moment, then nods once.
42 A She walks out of the hall without looking back.

### SCENE s01954 | INT. VANTAGEPOINT SYNERGIES - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): GORDON PRYCE, VP, SHANICE WHITLOCK, ANIL DESHPANDE, BETTINA KROL, FITZ MORIARTY, MS. OYEWOLE
* 1 A ¶ A sea of gray cubicles under a banner reading "WE ARE FAMILY."
* 2 A A dead plant guards the water cooler.
3 A ¶ GORDON PRYCE, 50s, regional VP, stands on a swivel chair with a megaphone, delivering a speech.
4 A SHANICE WHITLOCK, 30s, sits at her desk eating yogurt and not looking up.
5 A ANIL DESHPANDE, 40s, mouthing the words, nods along without hearing them.
6 A BETTINA KROL, 50s, in a cardigan, sorts staples by size.
7 A FITZ MORIARTY, 20s, an intern, takes photos for the company newsletter.
8 D GORDON: Team! I have an announcement!
9 D SHANICE (not looking up): Is it a layoff?
10 D GORDON: It's a realignment.
11 D ANIL: It's a layoff.
12 D GORDON: It is a strategic pivot toward efficiency!
13 A ¶ Bettina picks up the stapler and stacks three boxes in a neat pyramid.
14 A Fitz steps onto a desk for a better angle and loses his balance, then rights himself and fires off a flash straight into Gordon's eyes.
15 A Gordon staggers, flailing the megaphone, and Anil catches his chair as it rolls.
16 D MS. OYEWOLE [V.O.] (over the PA): Mr. Pryce. Corporate would like a word.
17 D GORDON (squinting): Now?
18 D MS. OYEWOLE [V.O.]: Now, Gordon.
19 A ¶ Gordon climbs down, handing the megaphone to Fitz, who points it at Bettina, who points the stapler back at him.
20 A Shanice finally lifts her head, spoon halfway to her mouth.
21 D SHANICE: Is that about us?
22 D MS. OYEWOLE [V.O.]: It's about him.
23 A ¶ Anil bursts into a coughing laugh.
24 A Gordon straightens his tie and walks toward the elevator, shoulders sagging.
25 D BETTINA (softly): Poor Gordon.
26 D SHANICE: He'll be fine.
27 D ANIL: He won't.
28 D FITZ: I got a great shot of it.

### SCENE s01955_0 | EXT. STRANDED GONDOLA - ALPINE SLOPE - DUSK
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A red cable car dangles two hundred feet above a snowfield, swaying slightly.
* 2 A The lights of the valley are a long way below.
* 3 A Wind sighs in the cables.

### SCENE s01955_1 | INT. GONDOLA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MIREILLE CASTANEDA, OZZIE BERGSTROM, NKECHI OBI, DARIUSZ PAWLAK, XIMENA TORRES, NEIL, ATWOOD
1 A ¶ Six people share a steel cabin built for eight.
* 2 A Windows fog with breath.
* 3 A A flask passes hand to hand.
4 A ¶ MIREILLE CASTANEDA, 60s, in a white wool coat, sits in the corner with her eyes closed, rubbing a rosary between her thumb and finger.
5 A OZZIE BERGSTROM, 30s, a lanky snowboarder, leans against the door, thumbing a dead phone.
6 A NKECHI OBI, 40s, a nurse, tends to DARIUSZ PAWLAK, 70s, whose hand trembles around a thermos.
7 A XIMENA TORRES, 20s, squeezes onto the bench beside them, scrolling through a map with no signal.
8 A And CORNELIUS "NEIL" ATWOOD, 50s, stands at the window and watches the dark.
9 A ¶ He turns from the window.
10 A She glances at him.
11 A They both look away.
12 A ¶ Ozzie slides to the floor.
13 A Ximena shifts to make room for his legs, and Nkechi tucks a blanket around Dariusz's knees.
14 A Mireille sighs.
15 D NEIL: How long has it been?
16 D NKECHI: Forty minutes.
17 D NEIL: It feels like four hours.
18 D OZZIE: It always does.
19 D XIMENA: Has anyone tried the emergency cord?
20 D DARIUSZ: It's been pulled twice.
21 D NKECHI: Both times, a recorded voice said help was coming.
22 D MIREILLE (eyes closed): Help is always coming.
* 23 A ¶ Silence.
* 24 A The cabin sways.
25 A Everyone shifts their weight at once, and Ozzie curses.
26 A They steady.
27 A Nkechi glances at Dariusz, who has gone pale.
28 D NKECHI [CONT'D]: Drink some water.
29 D DARIUSZ: I am fine.
30 D NKECHI: I know. Drink.
31 A ¶ He does.
32 A She smiles and pats his hand.
33 A Neil returns to the window.
34 A Ximena folds up her phone.
35 A Ozzie tilts his head back against the door.
* 36 A ¶ The cabin lurches once and then, with a long, heavy groan, begins to move.

### SCENE s01956 | EXT. SCHOOL ROOFTOP - PIGEON COOP - DAWN
Detected names (may be incomplete or contain aliases): MARISOL QUINONES, ELI ABRAMOWITZ
* 1 A ¶ Tar paper and chimney pots.
* 2 A A lean-to coop of chicken wire and scrap plywood, thick with the soft burble of birds.
* 3 A Behind it, the city blushes pink under a rising sun.
4 A ¶ MARISOL QUINONES, 16, in a school sweater with the sleeves pushed up, kneels beside the coop and shakes seed into a tin tray.
5 A ELI ABRAMOWITZ, 16, thin, round glasses, tries to climb through the roof hatch with a cardboard box held above his head.
* 6 A A single pigeon sits in the box, unimpressed.
7 D ELI: Marisol. I brought the injured one.
8 D MARISOL: You brought Gerald?
9 D ELI: His name is Clementine.
10 A ¶ The hatch slams on his foot.
11 A He hops.
* 12 A The box tips and the pigeon bursts out in a flurry of feathers.
13 A Marisol lunges and catches it against her chest while Eli topples back down the hatch, and a distant thump rises from the stairwell.
14 D MARISOL: Eli?
15 D ELI [O.S.]: I'm fine.
16 A ¶ She cradles the bird.
* 17 A It coos.
18 A She smooths its wing with a thumb, and a tiny smile creeps over her face.

### SCENE s01957 | INT. CHEESE CAVE - NIGHT
Detected names (may be incomplete or contain aliases): LUCA FERRANTE, TAMAR ELKAYAM, BRODIE MACLEAN, RHIANNON DAVIES
* 1 A ¶ Cold.
* 2 A Wet stone.
* 3 A Racks of aging wheels in rows.
* 4 A A single utility bulb.
5 A ¶ LUCA FERRANTE, 40s, crowbar in hand.
6 A TAMAR ELKAYAM, 30s, holds a flashlight.
7 A BRODIE MACLEAN, 20s, hauls a sack.
8 D LUCA: Which wheel?
9 D TAMAR: Third rack. The black wax.
10 D BRODIE: It all looks black.
11 D TAMAR: The one that smells like feet.
12 A ¶ Brodie sniffs.
13 A Gags.
14 A Points.
15 D BRODIE: That one.
16 A ¶ Luca wedges the crowbar under the wheel.
* 17 A It pops free.
* 18 A Inside, a hollow core and a small steel case.
19 D LUCA: Got it.
* 20 A ¶ A flashlight swings in from the entrance.
21 A RHIANNON DAVIES, 30s, in a hairnet and rubber boots, a nightwatch's baton in her fist, steps from the dark.
22 D RHIANNON: Evening.
23 A ¶ They freeze.
24 A Tamar lowers the light.
25 A Brodie drops the sack.
26 D RHIANNON [CONT'D]: That wheel's forty thousand euros.
27 D TAMAR: We'll pay for it.
28 D RHIANNON: Not with cash.
29 A ¶ She steps forward.
30 A She holds out her free hand.
31 A Luca hands her the steel case.
32 D LUCA: You knew.
33 D RHIANNON: I run this cave, mate.
34 A ¶ She slides the case under her arm.
35 A Tamar, Luca, and Brodie exchange looks.
36 A Nobody moves.
* 37 A Water drips somewhere.
38 D BRODIE: So are we fired?
39 D RHIANNON: You were never hired.

### SCENE s01958 | INT. PLANETARIUM DOME - NIGHT
Detected names (may be incomplete or contain aliases): OTTAVIA LINDO, RAFF, OBUYA
* 1 A ¶ A hushed hemisphere.
* 2 A A painted sky of stars wheels overhead.
* 3 A A single projector hums at the center on a pedestal.
4 A ¶ OTTAVIA LINDO, 30s, in a velvet jacket, stands at the control console.
5 A RAFFERTY "RAFF" OBUYA, 30s, sits in the front row of reclining seats with a paper bag of takeout.
6 D OTTAVIA: Raff, you're not supposed to be in here.
7 D RAFF: I brought dumplings.
8 D OTTAVIA: That's not an excuse.
9 D RAFF: It's a bribe.
10 A ¶ She sighs and turns the dome to a deep midnight blue.
11 A He lies back in the chair.
* 12 A The stars brighten.
13 D RAFF [CONT'D]: Show me the Southern Cross.
14 D OTTAVIA: You can't see it from here.
15 D RAFF: Show me anyway.
16 A ¶ She taps a key.
* 17 A A cluster of stars swells in the south.
18 A He lifts the bag and shakes it.
19 D OTTAVIA: Five minutes. Then you leave.
20 D RAFF: Come sit.
21 D OTTAVIA: Raff--
22 D RAFF: Ottavia.
23 A ¶ She stops.
24 A She crosses the aisle and lowers herself into the seat beside him.
25 A They lie back together under the painted sky.
26 D OTTAVIA: I'm sorry about Sunday.
27 D RAFF: I'm sorry about Sunday.
28 A ¶ They both laugh.
* 29 A The Southern Cross turns slowly overhead.
30 D RAFF [CONT'D]: Ottavia, I got the job in Perth.
31 A ¶ She stiffens.
32 A She turns her head toward him.
33 D OTTAVIA: Of course you did.
34 D RAFF: I haven't said yes.
35 D OTTAVIA: Then say no.
36 D RAFF: Ask me to.
* 37 A ¶ The projector hums.
38 A She stares at the false stars for a long time.
39 A Then she takes his hand.
40 D OTTAVIA: Don't go, Raff.

### SCENE s01959 | INT. AMBULANCE - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): DELIA NAKAGAWA, ODETTE FARADAY, MARCUS
* 1 A ¶ Blue light flickers across steel cabinets.
* 2 A A monitor beeps in a steady rhythm.
* 3 A The vehicle sways around a corner.
4 A ¶ DELIA NAKAGAWA, 30s, a paramedic in a navy jumpsuit, kneels beside the stretcher with a blood pressure cuff.
5 A ODETTE FARADAY, 70s, lies on it under a gray blanket, a mask over her nose.
6 A She grips a small cloth purse against her ribs.
7 A ¶ Delia checks the monitor.
8 A She frowns.
9 A She loosens the cuff.
10 A She pats her patient's arm.
11 D MARCUS [V.O.] (over radio, crackling): Medic Nine, status on your patient?
12 D DELIA (into radio): Seventy-year-old female, chest pain, BP one-ten over seventy, sats at ninety-four.
13 D MARCUS [V.O.]: Copy. ETA?
14 D DELIA: Eight minutes.
15 D MARCUS [V.O.]: Hospital's standing by.
16 A ¶ She clips the radio back on her shoulder.
17 A She squeezes the older woman's hand.
18 A Odette's eyes drift open.
19 D ODETTE: Did I faint?
20 D DELIA: Not quite, Mrs. Faraday. You gave us a scare.
21 D ODETTE: She tends to.
22 D DELIA: Who does?
23 D ODETTE: My daughter. Always rushing.
24 A ¶ Delia glances at the purse.
25 A She raises an eyebrow, waiting.
26 A Odette tightens her grip on it.
27 A She turns her face toward the wall, and after a moment she lets her shoulders relax.
28 D ODETTE [CONT'D]: I'm all right, dear.
29 D DELIA: I know you are.
30 A ¶ She tucks the blanket higher.
* 31 A The ambulance slows.
32 A She checks the monitor again and finally lets herself breathe.
33 D MARCUS [V.O.] (over radio): Medic Nine, you're clear to enter bay two.
34 D DELIA: Copy that.

### SCENE s01960 | INT. HOLLOW OAK - THUNDERSTRUCK TRUNK - NIGHT
Detected names (may be incomplete or contain aliases): EIRA, THORVALD, CALLA, BRENNUS
* 1 A ¶ A cavern of living wood, blackened where lightning split the crown.
* 2 A Fireflies drift in the rafters.
* 3 A A ring of stumps serves as a council table.
* 4 A Rain drums on the bark overhead.
5 A ¶ EIRA, a tall woman with silver braids and a staff of rowan, stands at the head of the ring.
6 A THORVALD, a broad-shouldered hunter in a bearskin, sits on the nearest stump with his axe across his knees.
7 A CALLA, a slight healer in a moss-green shawl, kneels at the center and lays herbs on a flat stone.
8 A BRENNUS, a gaunt scholar with ink-stained fingers, unrolls a map across his lap.
9 D EIRA: We are gathered.
10 D THORVALD: We are late.
11 D EIRA: We are as late as the storm allows.
12 D CALLA (grinding herbs): The river rose another foot at dusk.
13 D BRENNUS: Two feet, by my measure.
14 D THORVALD: Your measure is a stick.
15 D BRENNUS: It is a calibrated stick.
16 A ¶ Eira raps her staff on the floor.
* 17 A The fireflies scatter and re-gather.
18 D EIRA: The question before us is the pass. Do we hold it, or do we abandon the valley?
19 D THORVALD: We hold.
20 D CALLA: We cannot hold. We have no healers to spare.
21 D BRENNUS: We have three hundred archers and a wall.
22 D THORVALD: We have six hundred when the Greycloaks arrive.
23 D CALLA: If they arrive.
24 D EIRA: They will arrive.
25 A ¶ She walks slowly around the ring.
26 A Thorvald watches her with open suspicion.
27 A Brennus watches the map.
28 A Calla watches the stone.
29 D EIRA [CONT'D]: Brennus. The pass, on the map.
30 A ¶ He holds it up.
31 A She traces a line with the tip of her staff.
32 D BRENNUS: Here. A single path, fifty paces wide.
33 D EIRA: And the wall?
34 D BRENNUS: Here. At the narrowest point.
35 D THORVALD: Then we fight at the wall.
36 D EIRA: We fight at the wall, and Brennus commands the archers.
37 D THORVALD: He has never drawn a bow.
38 D BRENNUS: I have read forty books about them.
39 D THORVALD: That is not the same.
40 D CALLA: Enough. He can count better than any of us.
41 A ¶ Thorvald grunts and looks away.
42 D EIRA: Then it is decided. Thorvald takes the left. Brennus the center. Calla tends the wounded in the hollow.
43 D CALLA: And you?
44 D EIRA: I will meet the Greycloaks on the road, and I will not be gentle.
45 A ¶ The council falls silent.
* 46 A Rain drums.
* 47 A A single firefly settles on the staff, glowing steady and gold.
48 D THORVALD: Eira. If this goes badly...
49 D EIRA: It will not.
50 D THORVALD: If it does.
51 D EIRA: Then you will hold the wall until sunrise, and Calla will bury us in the roots.
52 D CALLA: I will bury you in the sweet roots, by the spring.
53 D EIRA: Thank you.
54 A ¶ She raises the staff.
55 A One by one, they rise and place a hand upon it.
* 56 A The light of the fireflies swells around them.

### SCENE s01961 | INT. COASTAL RADIO BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE TALLCHIEF, DEV
* 1 A ¶ A cramped shack of salt-warped panels.
* 2 A A single microphone, a mixing board, a kettle.
* 3 A Waves slap the pilings below.
* 4 A A phone rests on the desk.
5 A ¶ SAOIRSE TALLCHIEF, 30s, in a fisherman's sweater, sits at the board with her feet on the desk.
* 6 A A "LIVE" lamp glows red.
7 A She leans toward the mic.
8 D SAOIRSE (into mic): Good evening, Gull Point. It's eleven past midnight, the tide is turning, and this is Saoirse with the Long Wave. Whoever's out there on the water, you're not alone.
9 A ¶ She clicks off the mic.
10 A She lowers her feet.
11 A She rubs her face.
12 D SAOIRSE [CONT'D] (to herself): Stop being so cheerful. Nobody likes it.
* 13 A ¶ The phone buzzes.
14 A She picks it up.
15 D SAOIRSE [CONT'D]: Long Wave.
16 D DEV [V.O.] (over phone, warm, unhurried): Hi. Is this the person who told the fishing fleet about my sourdough?
17 D SAOIRSE: It might be.
18 D DEV [V.O.]: I'm Dev. I'm on the boat that took the bread.
19 D SAOIRSE: The Marguerite?
20 D DEV [V.O.]: The same.
21 D SAOIRSE: They said the baker was an old man named Bernard.
22 D DEV [V.O.]: Bernard is a rumor.
23 A ¶ She laughs.
24 A She sets the kettle on its coil.
* 25 A Outside, a gull cries.
26 D SAOIRSE: What do you want to hear, Dev?
27 D DEV [V.O.]: Something slow. For the crew. We've been out three nights.
28 D SAOIRSE (to the room, a half-whisper): Fine, ladies and gentlemen, one slow one for the Marguerite.
29 A ¶ She flicks a switch.
* 30 A A low guitar begins.
31 A She cradles the phone against her shoulder.
32 D SAOIRSE [CONT'D]: Is it going to be this easy every night?
33 D DEV [V.O.]: If you call back.
34 D SAOIRSE: I might.
35 D DEV [V.O.]: Good. I'll bring the bread.
36 D SAOIRSE: You'll be in the middle of the sea.
37 D DEV [V.O.]: Then I'll swim.
38 A ¶ She grins, helpless, and switches the mic back on.
39 D SAOIRSE [CONT'D] (into mic): That was for Dev, and for everyone with salt on their hands.

### SCENE s01962 | INT. MINIVAN - PARKED AT AUTOMATIC CAR WASH - DAY
Detected names (may be incomplete or contain aliases): ANSELMO ROJAS, HUI-MIN CHENG-ROJAS, ISAAC, NOOR, GRANDMA FUMIKO, TUCK
* 1 A ¶ A cramped, crumb-strewn van with a cracked windshield and a bumper sticker reading "MY OTHER CAR IS ALSO THIS."
* 2 A Sunlight bounces off foam outside.
3 A ¶ ANSELMO ROJAS, 40s, in a wrinkled polo, grips the wheel.
4 A HUI-MIN CHENG-ROJAS, 40s, in the passenger seat, juggles a grocery bag and a sippy cup.
5 A In the second row, ISAAC, 10, plays a handheld game, and NOOR, 7, hugs a stuffed giraffe.
6 A In the way back, GRANDMA FUMIKO, 80s, in a floral blouse, folds a paper crane.
7 A Strapped into a car seat beside her, baby TUCK, 1, chews a rubber pretzel.
8 D ANSELMO (to everyone): Okay! Windows up! Doors locked! Nobody touch anything!
9 D ISAAC: I'm not touching anything.
10 D NOOR: I'm touching the giraffe.
11 D HUI-MIN: Noor, that's allowed.
12 D GRANDMA FUMIKO (to Tuck): Look, little one. The soap is coming.
13 D TUCK: Ba!
* 14 A ¶ The van rolls forward.
* 15 A Foam slaps the windshield.
* 16 A Brushes begin to thump along the sides.
17 D ANSELMO (muttering): We're fine. We're fine. We're fine.
18 D HUI-MIN (softly, to him): Anselmo, you have driven through a car wash before.
19 D ANSELMO: Not with her.
20 A ¶ He glances in the mirror at Grandma Fumiko, who folds another crane, serene.

### SCENE s01963 | INT. GARAGE - DAY
Detected names (may be incomplete or contain aliases): EUGENIA PRYOR, THADDEUS PRYOR
* 1 A ¶ Pegboard walls hung with outlines of tools that are no longer there.
* 2 A A workbench strewn with jars of screws.
* 3 A Open cardboard boxes, half-filled.
* 4 A Dust floats in a band of sunlight.
5 A ¶ EUGENIA PRYOR, 50s, in jeans and a button-down, sorts bolts into a coffee can.
6 A Across from her, THADDEUS PRYOR, 50s, stands with a worn leather glove in his hands, turning it over.
7 D EUGENIA: That one's Dad's.
8 D THADDEUS: I know whose it is.
9 D EUGENIA: Take it, if you want.
10 D THADDEUS: I don't want it.
11 D EUGENIA: Then put it in the donate box.
12 D THADDEUS: I'm not putting it in the donate box.
13 D EUGENIA: Then keep it.
14 D THADDEUS: I said I don't want it.
15 A ¶ She stops.
16 A She sets the can down.
* 17 A A long pause.
18 D EUGENIA: What do you want, Thad?
19 D THADDEUS: I want the afternoon to be over.
20 D EUGENIA: It's eleven in the morning.
21 D THADDEUS: Then I want it to be tomorrow.
22 A ¶ She nods slowly.
23 A She goes back to the bolts.
24 D THADDEUS [CONT'D]: Did he ever say anything to you? About the garage?
25 D EUGENIA: He said it was the only room in the house where nobody asked him questions.
26 D THADDEUS: That sounds like him.
27 D EUGENIA: He called it the quiet room.
28 D THADDEUS: He never called it that to me.
29 D EUGENIA: You never asked.
30 D THADDEUS: He never gave me a chance.
31 D EUGENIA: Thad.
32 D THADDEUS: I'm just saying. Eight years of weekends, and I'm still learning his hobbies from the pegboard.
33 D EUGENIA: He fixed your bike once.
34 D THADDEUS: He fixed it wrong. I rode it into a wall.
35 D EUGENIA: He came to the hospital.
36 D THADDEUS: For twenty minutes.
37 D EUGENIA: For four hours. You were asleep.
38 D THADDEUS (a beat): I didn't know that.
39 D EUGENIA: Now you do.
40 A ¶ He sets the glove on the workbench.
41 A He smooths the leather.
42 A He leaves his hand on it.
43 D THADDEUS: I'll take the can of bolts.
44 D EUGENIA: They're all different sizes.
45 D THADDEUS: I know.
46 A ¶ She hands him the can.
47 A He holds it against his chest, and nods, and does not look at her.

### SCENE s01964 | INT. CORPORATE MASCOT COSTUME ROOM - DAY
Detected names (may be incomplete or contain aliases): DUNCAN ALBRIGHT, INTERN, MS. VANDERHOOF, KIRAN SETHI
* 1 A ¶ A windowless closet crowded with oversized plush heads on shelves.
* 2 A A giant foam taco, a giant foam toaster, a lion with one eye missing.
* 3 A A speaker on the wall crackles.
4 A ¶ DUNCAN ALBRIGHT, 50s, regional marketing manager, tapped-out and pacing, shoves a mannequin aside.
5 A In the doorway stands an INTERN, 20s, in an oversized lanyard, holding a clipboard and a lukewarm coffee.
6 D DUNCAN: Who are you?
7 D INTERN: I'm the, um, intern.
8 D DUNCAN: I've never seen you before.
9 D INTERN: I started Monday.
10 D DUNCAN: It's Thursday.
11 D INTERN: I know.
12 D DUNCAN: Come in, come in. Close the door.
13 A ¶ The Intern closes it.
* 14 A The room shrinks.
15 A Duncan rummages through the costumes, pulls out a hulking toaster head, and tosses it to the Intern.
16 D DUNCAN [CONT'D]: Put that on.
17 D INTERN: Why?
18 D DUNCAN: Because Brian called in sick, and the parade starts at noon.
19 D INTERN: I'm not trained for this.
20 D DUNCAN: It's a toaster. It pops up.
* 21 A ¶ The wall speaker crackles to life.
* 22 A A brisk female voice fills the closet.
23 D MS. VANDERHOOF [V.O.]: Duncan. I'm told the toaster is missing.
24 D DUNCAN (to the speaker): It's being handled, Ms. Vanderhoof.
25 D MS. VANDERHOOF [V.O.]: By whom?
26 D DUNCAN (glancing at the Intern): By... Kiran.
27 D INTERN: Kiran?
28 D DUNCAN (sotto): It's what's on your lanyard.
29 A ¶ The Intern checks the tag.
* 30 A It does say KIRAN SETHI in tiny type.
31 A Kiran puts the toaster head on.
* 32 A A muffled voice emerges.
33 D KIRAN (muffled): This smells like feet.
34 D MS. VANDERHOOF [V.O.]: Is Kiran ready?
35 D KIRAN (muffled): Kiran is as ready as Kiran will ever be.
36 D DUNCAN: Excellent. Go pop.
37 A ¶ Kiran waddles out the door and collides with the frame.
* 38 A The toaster head falls off and rolls across the floor.
39 A Duncan buries his face in his hands.
40 D MS. VANDERHOOF [V.O.]: I heard that.

### SCENE s01965 | INT. CHURCH BASEMENT - GRIEF SUPPORT GROUP - NIGHT
Detected names (may be incomplete or contain aliases): PASTOR LUCILLE MARCHBANKS, DWAYNE TOLLIVER, ILSE BRANDL, HAMZA QURESHI, BEAU FONTENOT, NEWCOMER, FELICIA
* 1 A ¶ Folding chairs in a circle.
* 2 A Styrofoam cups.
* 3 A A hand-lettered banner reads "WE REMEMBER."
4 A ¶ PASTOR LUCILLE MARCHBANKS, 60s, presides over a plate of lemon bars.
5 A DWAYNE TOLLIVER, 40s, in a welder's jacket, grips his cup.
6 A ILSE BRANDL, 70s, in a lilac cardigan, dabs at her eyes.
7 A HAMZA QURESHI, 20s, cross-armed, stares at the floor.
8 A BEAU FONTENOT, 30s, jittery, taps a foot.
9 A A NEWCOMER, 30s, stands at the door in a rain-soaked coat.
10 D LUCILLE: Everyone, we have a guest.
11 D NEWCOMER: I'll just sit.
12 D DWAYNE: We don't bite.
13 D ILSE: We do, a little.
14 A ¶ The newcomer takes the empty chair.
15 A Beau offers a lemon bar.
16 A The newcomer takes it, turns it over, and sets it on the floor.
17 D LUCILLE: We say our names and our losses. Dwayne, will you begin?
18 D DWAYNE: Dwayne. My brother, Marcus. Eleven months.
19 D ILSE: Ilse. My Walter. Nineteen years.
20 D HAMZA: Hamza. My mother. Last Tuesday.
21 D BEAU: Beau. My dog, Biscuit. And my wife, who left, which is kind of the same.
22 D LUCILLE: Beau.
23 D BEAU: I know. I know.
24 A ¶ All eyes turn to the newcomer.
25 D NEWCOMER: Felicia. My daughter. She would have been six.
* 26 A ¶ Silence.
* 27 A The radiator ticks.
28 A Ilse reaches across the gap and takes Felicia's hand.
29 A Hamza finally looks up.
30 D HAMZA: I'm sorry.
31 D FELICIA: Thank you.
32 A ¶ Felicia starts to cry.
33 A Dwayne pulls a handkerchief from his jacket and hands it over.
34 A The circle closes in a little, chair by chair.
35 D LUCILLE: You're welcome here as long as you need.
36 D FELICIA: Even if I don't talk?
37 D BEAU: Especially then.
38 D ILSE: Especially then.
39 A ¶ Lucille smiles.
40 A She passes the lemon bars around the circle, and one by one, they each take one.

### SCENE s01966 | INT. DELIVERY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JOANNE KETTERING, AMARA NWOSU, BERTRAND
* 1 A ¶ Monitors blink.
* 2 A A woman breathes hard on the bed.
* 3 A A speakerphone sits on the tray beside her, a tinny voice leaking out.
4 A ¶ JOANNE KETTERING, 30s, sweat-slicked, grips the bedrail.
5 A DR. AMARA NWOSU, 40s, sits at the foot of the bed in scrubs, calm.
6 A She lifts one hand to check a monitor, and Joanne squeezes the other.
7 D BERTRAND [V.O.] (over speakerphone): I'm on the ferry, I'm on the ferry, I'll be there in twenty minutes.
8 D JOANNE: You said ten.
9 D BERTRAND [V.O.]: There was a delay.
10 D JOANNE: You said ten, Bertrand!
11 D DR. NWOSU: She's strong. Keep going.
12 D JOANNE: I'm going to kill him.
13 D DR. NWOSU: Later. Breathe.
14 A ¶ She does.
15 A She screams.
* 16 A The monitor spikes.
17 A Dr. Nwosu rises, takes her position, and nods to the nurse.
18 D DR. NWOSU [CONT'D]: Now. Push.
19 D BERTRAND [V.O.]: Jo? Jo, is she okay?
20 D JOANNE: She's fine! I'm not!
21 A ¶ She pushes.
* 22 A A small cry cuts through the room.
23 A Dr. Nwosu lifts a squirming newborn into the light.
24 A Joanne collapses against the pillow, laughing and crying at once.
25 D BERTRAND [V.O.] (over speakerphone, faint): Is that her? Is that the baby?
26 D JOANNE (to the phone): Come meet her, you idiot.

### SCENE s01967 | EXT. MARATHON AID STATION - MILE 22 - 3 A.M.
Detected names (may be incomplete or contain aliases): OTTILIE MARSH, PAVEL DVORAK, YOSHIRO TANABE
* 1 A ¶ A folding table under a sodium streetlight.
* 2 A Paper cups in rows.
* 3 A A cooler of orange slices.
* 4 A The course winds into the dark.
5 A ¶ OTTILIE MARSH, 60s, in a reflective vest, tops up cups from a jug.
6 A PAVEL DVORAK, 30s, a volunteer, sits on a camp chair and stares at the road.
7 A YOSHIRO TANABE, 40s, a medic, arranges bandages in a tackle box.
8 A ¶ Ottilie finishes the row.
9 A She wipes her hands.
10 A She glances at the road, then at Pavel.
11 A He does not look at her.
12 A ¶ She slides a cup across the table.
13 A He takes it.
14 A He holds it without drinking.
15 D YOSHIRO: Anyone coming?
16 D OTTILIE: Not yet.
17 D PAVEL: They'll be a while. The leaders passed an hour ago.
18 D YOSHIRO: I'd run it again.
19 D OTTILIE: You would not.
20 D YOSHIRO: I would.
21 A ¶ She smiles.
22 A He does not.
23 A Pavel gets up and stands at the edge of the light.
24 A He puts the cup down on the table without a word.
25 A After a moment she follows his gaze.
26 D OTTILIE: It was last year, wasn't it.
27 D PAVEL: I'm fine.
28 A ¶ She walks to the table, takes up the jug, and carries it to him.
29 A She holds out a full cup, and he accepts it with both hands.
30 D YOSHIRO: Headlights.
31 A ¶ They all turn.
32 A A lone runner appears at the edge of the dark, slow and swaying.
33 A Pavel steps forward with the cup held out in front of him like an offering.

### SCENE s01968 | EXT. WELL-DIGGING CAMP - DESERT - DAY
Detected names (may be incomplete or contain aliases): EZRA LOCKRIDGE, MERCY TAVARES, ANSEL WHITCOMBE
* 1 A ¶ A dry plain under a white sky.
* 2 A A scaffold of timbers stands over a deep shaft.
* 3 A A windlass creaks.
* 4 A A water barrel stands empty in the shade of a tilting wagon.
5 A ¶ EZRA LOCKRIDGE, 50s, sunburnt, sleeves rolled, hauls a bucket of rock and clay up from the shaft hand over hand.
6 A MERCY TAVARES, 30s, in a broad straw hat, stands at the lip of the pit and holds the rope steady.
7 A She is thin, tireless, and has not spoken for a long time.
* 8 A ¶ The bucket clears the rim.
9 A Ezra tips it.
* 10 A A thin trickle of mud slides out.
11 A He kneels, takes a pinch, and rubs it between his fingers.
12 D EZRA: Wet.
13 D MERCY: Wet isn't water.
14 D EZRA: It's near.
15 D MERCY: You said that yesterday.
16 A ¶ He wipes his hands on his trousers.
17 A He rises, stiff.
* 18 A The wind carries a dull sound from the east, the clop of a single horse.
19 A ¶ They turn.
20 A A rider approaches along the dry riverbed, slowly, a long shadow thrown ahead of him.
21 A He is tall and spare, with a black coat and a silver star on his lapel.
22 A ANSEL WHITCOMBE, 40s, a land agent, reins in at the edge of camp and dismounts.
23 D ANSEL: Morning.
24 D EZRA: It's near noon.
25 D ANSEL: So it is. I'm told you've been digging on the Culver claim.
26 D EZRA: I'm told it's nobody's claim.
27 D ANSEL: It's the bank's, as of Tuesday.
28 A ¶ Mercy lets the rope go slack.
29 A Ezra does not move.
* 30 A The windlass creaks as the bucket swings.
31 D MERCY: We have a filed claim.
32 D ANSEL: You have a filed claim in the wrong county.
33 D EZRA: That so.
34 D ANSEL: I'm afraid it is.
35 A ¶ He takes a folded paper from his coat and holds it out.
36 A Ezra does not take it.
37 A Ansel sets it on the windlass crank and steps back.
38 D ANSEL [CONT'D]: You have until sundown.
39 D MERCY: There's water down there.
40 D ANSEL: There's mud.
41 D MERCY: It's water, mister. Give us an hour.
42 A ¶ Ansel looks at the shaft, then at the horizon.
43 A He sighs and removes his hat.
44 A Sweat runs from his hair.
45 D ANSEL: One hour. Then I'm obliged to read it aloud.
46 A ¶ He walks to the shade of the wagon and sits on its tongue.
47 A Ezra waits.
48 A Then he climbs back down the ladder into the shaft.
49 A Mercy takes up the rope again, steady as a post, and begins to haul.

### SCENE s01969 | EXT. PARKING GARAGE ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): VERONIKA SALT, CASSIAN BOYLE
* 1 A ¶ Concrete.
* 2 A Painted lines.
* 3 A A rusted rail overlooking a city of amber lights.
* 4 A A single black sedan sits under a dead lamp, engine ticking as it cools.
5 A ¶ VERONIKA SALT, 40s, long coat, briefcase handcuffed to her left wrist, stands at the rail.
6 A She watches the stairwell door.
* 7 A Her breath fogs.
* 8 A ¶ The door opens.
9 A CASSIAN BOYLE, 30s, bare head, shoulders tight in a gray suit, steps onto the roof alone.
10 A He carries nothing.
11 A He stops ten paces away.
12 D VERONIKA: You're early.
13 D CASSIAN: You're not.
14 D VERONIKA: I've been here an hour.
15 D CASSIAN: I know. I watched you from the street.
16 A ¶ She smiles faintly.
17 A She shifts the briefcase.
* 18 A The chain between her wrist and the handle rattles.
19 D VERONIKA: Then you know I came alone.
20 D CASSIAN: I know you came with a gun in your boot.
21 D VERONIKA: It's cold up here.
22 D CASSIAN: It's always cold up here. That's why you picked it.
23 A ¶ She lifts her chin.
* 24 A A car passes on the street below, headlights sliding across the wall.
25 A When the light fades, he has taken one step closer.
26 D VERONIKA: Stop there.
27 D CASSIAN: You said I could come close.
28 D VERONIKA: I said you could come.
29 A ¶ She steps backward until the rail presses against her spine.
30 A He takes another step.
31 A She slides a hand into her coat.
32 A He raises both his, palms open.
33 D CASSIAN: Veronika. You called me.
34 D VERONIKA: I did.
35 D CASSIAN: You told me you had the files.
36 D VERONIKA: I told you what you needed to hear.
37 D CASSIAN: That's not an answer.
38 D VERONIKA: It's the only one I have.
39 A ¶ He studies her.
40 A His shoulders ease.
41 A He lowers his hands.
42 D CASSIAN: You don't have them.
43 D VERONIKA: No.
44 D CASSIAN: You never did.
45 D VERONIKA: I never said I did.
46 D CASSIAN: Then why drag me up here?
47 D VERONIKA: Because I wanted to see your face when you found out.
48 D CASSIAN: And?
49 D VERONIKA: It's disappointing.
50 A ¶ He laughs, short and dry.
51 A She draws a small pistol from her coat and trains it on his chest.
52 A He stops laughing.
* 53 A The garage hums.
54 D CASSIAN: Veronika.
55 D VERONIKA: Cassian.
56 D CASSIAN: Put the gun down.
57 D VERONIKA: Put the gun down, or I'll count to three.
58 A ¶ He glances at the stairwell door.
59 A She follows his gaze.
60 A The moment she looks away he lunges, knocking the pistol aside with the flat of his hand and slamming her into the railing.
* 61 A The briefcase swings on its chain and strikes his hip.
62 A They fall in a heap on the concrete, grappling, her free hand clawing at his collar, his forearm across her throat.
63 D VERONIKA [CONT'D] (gasping): Cassian. Look up.
64 A ¶ He does.
* 65 A Across the roof, three red dots of laser light settle on his chest.
66 A He freezes.
67 A His arm loosens.
68 A She slips out from under him, picks up the pistol, and stands.
69 D CASSIAN: You called them.
70 D VERONIKA: I called everyone.
71 A ¶ She unlocks the briefcase handcuff with a key from her sleeve and drops the case at his feet.
* 72 A The lid is open.
* 73 A It is empty.
74 D VERONIKA [CONT'D]: That's all there ever was.
75 A ¶ She walks to the stairwell door.
76 A At the threshold, she looks back.
77 A He stays kneeling on the concrete in the red light, hands open, and says nothing.
78 A She goes out.
* 79 A The door closes.

### SCENE s01970 | INT. COUNTY SALT DOME - NIGHT
Detected names (may be incomplete or contain aliases): NGOZI ADEYEMI-BROOKS, DEZ, PRUITT, BILLIE WARSHAW, TOMASZ KR, ARLO MENDES
* 1 A ¶ A cavern of road salt, pale as a glacier.
* 2 A A single work lamp hums on a tripod.
3 A ¶ NGOZI ADEYEMI-BROOKS (50s, plow-crew foreman, reading glasses on a cord) stands over a clipboard.
4 A Around her: DEZ "THE DEACON" PRUITT (30s, enormous, soft-voiced), BILLIE WARSHAW (20s, rookie, hi-vis too big), TOMASZ KRÓL (60s, mechanic, grease to the elbow) and ARLO MENDES (40s, union steward, thermos in hand).
5 A ¶ She taps the clipboard.
6 A They go quiet.
7 D NGOZI: Listen up, all of you. The county cut the overnight run. Starting Friday.
* 8 A ¶ Nobody moves.
9 A Tomasz sets down his wrench.
10 D TOMASZ: Cut how.
11 D NGOZI: Cut like gone.
12 D ARLO: They can't. It's in the contract.
13 D NGOZI: Arlo, it's in the contract that they can.
14 A ¶ He looks at the thermos.
15 A Unscrews it.
16 A Doesn't pour.
17 D BILLIE: So I just got here.
18 D DEZ: Billie.
19 D BILLIE: Three weeks. I bought boots.
20 D DEZ: Billie, hush a second.
21 A ¶ She does.
22 A He rests a hand on her shoulder, then thinks better of it and lets it drop.
23 D TOMASZ (to himself): Thirty-one winters.
24 D ARLO: I'll file tonight. Grievance, the whole thing. Ngozi, you sign as witness, Dez, you sign, Tomasz you sign, and Billie, you're probationary so you don't sign anything, you just watch.
25 D BILLIE: That's not fair.
26 D ARLO: No. It's not.
27 D NGOZI: Nobody is filing anything tonight.
28 D ARLO: Excuse me?
29 D NGOZI: I took the deal.
* 30 A ¶ Silence.
* 31 A Salt ticks somewhere in the dark as a small slide settles.
32 D DEZ: What deal.
33 D NGOZI: Day shift. Four of us stay. Two go.
34 D ARLO: Who decides who goes.
35 D NGOZI: I do.
36 D TOMASZ: Then say it.
37 D NGOZI: Tomasz, I'm not going to say it in front of the kids.
38 D TOMASZ: I'm sixty-three years old. Say it.
39 A ¶ She takes off her glasses.
* 40 A They drop on the cord against her chest.
41 D NGOZI: You and Billie. Seniority says you, Tomasz, and last-hired says her, and I fought for it every other way and the number didn't move.
42 D DEZ: You put me ahead of him?
43 D NGOZI: I put nobody ahead of anybody. A spreadsheet did.
44 D ARLO: A spreadsheet. Fantastic. I'll tell my wife I lost a man to a spreadsheet.
45 D BILLIE: I can go. It's fine. I can go.
46 D TOMASZ: Don't you dare say that's fine.
47 D BILLIE: Then what do I say?
48 D TOMASZ: Say you want to burn the place down.
49 D BILLIE: I want to burn the place down.
50 D TOMASZ: Good girl. Now say it like you mean it.
51 A ¶ Dez laughs, a short bark, and that breaks it.
52 A Arlo laughs.
53 A Even Ngozi's mouth moves.
54 A ¶ Then Tomasz is not laughing.
55 A He turns away toward the dark of the dome.
56 D DEZ: Hey. Old man.
57 D TOMASZ (muttering): Thirty-one winters, and a spreadsheet.
58 A ¶ Ngozi puts her glasses back on, picks up the clipboard, and turns it to face them.
59 D NGOZI: Everyone sign the grievance. Everyone. I'll sign first.
60 D ARLO: You just said.
61 D NGOZI: I said nobody files tonight. It's four a.m. We file at nine.
62 A ¶ She signs.
63 A Passes it to Dez.

### SCENE s01971 | INT. FUNICULAR CAR, HALFWAY UP - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODILE VANTERPOOL, INSPECTOR HOLLIS CRANE, OPERATOR
* 1 A ¶ A wood-paneled funicular car stalled on a steep incline above a sleeping Swiss lake town.
* 2 A Rain on the glass.
* 3 A One brass lamp burns.
4 A ¶ MADAME ODILE VANTERPOOL (60s, fur collar, rings on every finger) sits very upright on the forward bench.
5 A Across from her, INSPECTOR HOLLIS CRANE (40s, rumpled trench coat, a hat he keeps turning in his hands) studies the floor.
6 A Neither speaks.
* 7 A ¶ Wind shifts the car.
* 8 A The cable creaks.
* 9 A ¶ An intercom grille crackles beside the door.
10 D OPERATOR [V.O.] (through the grille): Folks, we have a fault on the lower winch. Twenty minutes, perhaps thirty. Please remain seated.
11 A ¶ Crane glances at the grille, then at Odile, who has not looked up.
12 A She opens her handbag, takes out a small pearl-handled revolver, sets it on her knee as one might set down a glove, and closes the bag again.
13 A Crane watches this, sets his hat on the bench beside him, and slides a hand slowly into his coat pocket and out again with a cigarette case.
14 A He offers her one.
15 A She declines with two fingers.
16 A He lights his own, and the match shakes just once.
17 D CRANE: Terrible weather.
18 D ODILE: It does this in October.
19 D CRANE: Your husband used to say that, I understand.
20 D ODILE: My husband said a great many things.
* 21 A ¶ The lamp flickers.
22 A Crane exhales smoke toward the ceiling.
23 D CRANE: He was found at the bottom of this very hill. Same hour. Same rain.
24 D ODILE: I heard.
25 D CRANE: You didn't come to the funeral.
26 D ODILE: I was unwell.
27 D CRANE: Yet here you are, riding the last car of the night, to a villa you've told everyone you have not visited in a year.
28 A ¶ She turns the revolver a quarter-inch on her knee, so the muzzle points at the door instead of at him.
29 D ODILE: Inspector, you've been very patient. Say what you came to say.
30 D CRANE: The conductor remembers a woman in a fur collar on the evening car. The night of.
31 D ODILE: The conductor is mistaken.
32 D CRANE: He was very sure. He said she tipped him. Said she wore rings on every finger.
* 33 A ¶ Silence.
* 34 A The cable creaks.
35 A Odile lays one ringed hand flat over the revolver and does not lift it.
36 D OPERATOR [V.O.] (through the grille): Fault located. Ten more minutes, folks. Thank you for your patience.
37 A ¶ Crane stubs the cigarette out on the sole of his shoe and puts the butt in his pocket, neat as ever.
38 A Odile picks up the revolver and holds it in her lap with both hands.
39 A Crane does not reach for his hat.
40 A He does not reach for anything.
41 D CRANE: You could shoot me. Before they get the car moving.
42 D ODILE: I could.
43 D CRANE: Nobody would hear it over the rain.
44 D ODILE: No.
45 D CRANE: Then why haven't you?
46 A ¶ She stands.
* 47 A The car sways.
48 A The muzzle comes up, level, steady, and she crosses the three steps between them and puts it against his tie.
49 D ODILE: Because you are the first person in a year who has said his name aloud to me.
50 A ¶ She pulls the hammer back.
51 D CRANE: Odile.
* 52 A ¶ The intercom crackles.
* 53 A The car lurches forward and begins to climb.
54 D OPERATOR [V.O.] (through the grille): And we're moving! Sorry for the delay!
* 55 A ¶ The lamp swings.
56 A Her finger tightens.

### SCENE s01972 | INT. FLOODED SIGNAL BUNKER - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT IMRE, RHEGYI, COMMANDER
* 1 A ¶ A concrete cell below a ruined rail yard.
* 2 A Knee-deep black water.
* 3 A Shells land overhead in a steady rhythm; dust sifts from the ceiling with each one.
4 A ¶ SERGEANT IMRE VÁRHEGYI (30s, radio operator, face smeared with soot, headset over a bandaged ear) crouches at a field set balanced on a stack of ammunition crates.
5 A He holds the handset in both fists.
6 D IMRE (into handset): Wolf Three, this is Hearth. Say again your last.
* 7 A ¶ Static.
* 8 A A shell lands.
* 9 A A pipe bursts somewhere and a thin stream of water begins to fall on the radio.
10 A He shields it with his body.
11 D COMMANDER [V.O.] (through the handset, thin): Hearth, Wolf Three. Grid is compromised. Repeat, grid is compromised. Fall back to the--
* 12 A ¶ The voice breaks into crackling.
13 D IMRE: Wolf Three, you are cutting out. Say again fall back to where?
* 14 A ¶ Static.
* 15 A Another impact, closer.
* 16 A A chunk of ceiling drops into the water beside him.
17 A He does not flinch; he wipes the handset on his sleeve.
18 D IMRE [CONT'D] (into handset): Wolf Three, Hearth. Do you copy? Wolf Three.
19 D COMMANDER [V.O.] (faint): --the old chapel. East of the water tower. Bring the set if you can carry it.
20 D IMRE: The set weighs forty kilos, sir.
21 D COMMANDER [V.O.]: Then leave it, Sergeant. Leave it and run.
22 A ¶ He looks at the radio.
23 A At the water rising around his thighs.
24 A At the iron ladder bolted to the wall, three rungs of it underwater.
25 D IMRE (into handset): Sir, if I leave it, the battalion has no voice.
26 D COMMANDER [V.O.]: The battalion has no battalion, Imre. Go.
* 27 A ¶ A long beat.
28 A He sets the handset down on the crate, carefully, like something sleeping.
29 A Reaches under the set and unclips the battery.
30 A Pulls the crystal.
31 A Pockets both.
32 D IMRE (muttered): Tell it to the next man.
33 A ¶ He wades to the ladder.
* 34 A Behind him the handset crackles to itself.
35 D COMMANDER [V.O.] (faint, alone): Hearth? Hearth, are you there?
36 A ¶ Imre stops on the ladder with one boot on the lowest dry rung.
37 A He climbs back down.
38 A Picks up the handset.
39 D IMRE (into handset): Wolf Three, Hearth. I am here.
* 40 A ¶ A shell lands.
* 41 A The lamp dies.
* 42 A Darkness, and the sound of rushing water.

### SCENE s01973 | INT. MINIATURE-GOLF CLOCK TOWER, WINDMILL HOLE - NIGHT
Detected names (may be incomplete or contain aliases): TALL MAN, WOMAN, DOLORES, WALT
* 1 A ¶ A faded mini-golf course after closing.
* 2 A Plastic windmill, fiberglass lighthouse, a clock-tower hole with a hollow base.
* 3 A A service panel stands open at its foot.
4 A ¶ A figure in a black hoodie crouches inside the clock tower with a headlamp and a duffel bag.
5 A A TALL MAN (40s, careful hands, wedding ring on a chain around his neck) works a thin pick into the panel's lock.
6 A ¶ A second figure appears at the fence line.
7 A A WOMAN (30s, sneakers, a tote bag from a bakery) climbs over, lands badly, and freezes.
8 A They stare at each other.
9 A ¶ The Tall Man lifts one finger to his lips.
10 A She nods.
11 A Walks over without a sound, sets down the bakery tote, and kneels beside him.
12 D WOMAN (whispering): You're late.
13 D TALL MAN: You're early.
14 D WOMAN: There's a cop at the corner.
15 D TALL MAN: He's eating.
16 D WOMAN: How do you know he's eating?
17 D TALL MAN: Because it's a Tuesday and Tuesdays are pierogi.
18 A ¶ She considers this.
19 A Looks at the lock.
20 A At his hands.
21 D WOMAN: You said four minutes.
22 A ¶ He does not answer.
* 23 A The pick clicks.
* 24 A Stops.
25 A He pulls it out, wipes it on his sleeve, and starts again, slower.
26 D WOMAN [CONT'D] (to herself): Okay. Okay. Okay.
27 D TALL MAN: Talk to the lock, not me.
28 D WOMAN: The lock doesn't care.
29 D TALL MAN: Neither do I. Please.
* 30 A ¶ A siren, distant, passes the block and fades.
31 A Neither of them breathes until it does.
32 A He lowers his headlamp to a dim red.
* 33 A ¶ The lock gives with a soft thunk.
34 A He pulls the panel back.
* 35 A Inside, a steel box the size of a toaster.
36 D WOMAN: That's it?
37 D TALL MAN: That's it.
38 D WOMAN: Thirty years in this city and the most valuable thing in it is under a clock tower with a cartoon face.
39 D TALL MAN: Dolores, that's the point.
40 A ¶ The woman, DOLORES, goes still.
41 A He realizes what he's said.
* 42 A Neither speaks.
43 D DOLORES: You said you wouldn't use names.
44 D TALL MAN: I know.
45 D DOLORES: So you know mine.
46 A ¶ He closes his eyes briefly.
47 A Opens them.
48 A Reaches for the steel box and lifts it out with both hands.
* 49 A It's heavier than it looks.
50 D TALL MAN: Walt.
51 D DOLORES: Walt.
52 D WALT: My name. Since we're doing it.
53 A ¶ She takes the box from him and puts it in the bakery tote under a layer of paper-wrapped rolls.
* 54 A A long, satisfied, silent beat.
* 55 A Then headlights sweep the course.
56 D DOLORES (low): Walt.
57 D WALT: I see it.
58 A ¶ They crouch lower inside the hollow of the tower, shoulders pressed together.
* 59 A The lights pass across the fiberglass lighthouse.
* 60 A Stop.
* 61 A Linger.
* 62 A ¶ A car door opens.
63 D WALT [CONT'D] (whispering): Pierogi's done early.
64 D DOLORES: Don't joke.
65 D WALT: I'm not.
66 A ¶ She takes his hand.
67 A He lets her.

### SCENE s01974 | INT. DRY-DOCK PUMP HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): KESTREL OYELARAN-FINCH, DRAGAN MIHAJLOVI, INSPECTOR ROSALIND ACHTERBERG, ALVARO
* 1 A ¶ A cathedral of valves and rust-orange pipework.
* 2 A A drained dry dock yawns beyond a glass wall, the hull of a half-scrapped ferry propped on blocks.
* 3 A Emergency light only.
4 A ¶ KESTREL OYELARAN-FINCH (30s, ex-auditor, wet hair, laptop bag clutched to her chest) backs against a pump housing.
5 A In the center of the room, DRAGAN MIHAJLOVIĆ (50s, heavy coat, port authority lanyard) stands with a pistol held low and loose, like a tool he's tired of.
6 D DRAGAN: Put the bag on the floor.
7 D KESTREL: No.
8 D DRAGAN: It's not a negotiation.
9 D KESTREL: It's the only thing keeping you from sitting in a cell.
10 A ¶ He tilts his head.
* 11 A A dripping pipe counts seconds.
12 D DRAGAN: The ledgers are digital.
13 D KESTREL: So are the backups.
14 D DRAGAN: Where?
15 D KESTREL: Not telling.
16 A ¶ He sighs, and for a moment looks almost sad.
17 A Steps forward.
* 18 A ¶ Behind Kestrel, a hatch clangs.
* 19 A Boots on a steel stair.
20 A She spins.
21 A Dragan doesn't.
22 A ¶ A third figure descends: INSPECTOR ROSALIND ACHTERBERG (40s, plain coat, badge on her belt, one hand already on her holster).
23 D ROSALIND: Port Authority Police. Mr. Mihajlović. Lower it.
24 D DRAGAN: Rosalind.
25 D ROSALIND: Lower it, Dragan.
26 A ¶ He doesn't.
27 A Doesn't raise it either.
28 A Kestrel looks from one to the other.
29 D KESTREL: You know each other.
30 D ROSALIND: Twenty years.
31 D KESTREL: Then you can talk him out of this.
32 D ROSALIND: I'm not here to talk him out of anything.
33 A ¶ Kestrel's face changes.
34 A She takes a step back, into the pump housing.
35 D KESTREL: You're not here to arrest him.
36 D ROSALIND: I'm here to see that the bag leaves with me.
37 D DRAGAN: Ah. There we are.
38 D KESTREL (quiet): I called you. You said you'd come.
39 D ROSALIND: And I did.
40 A ¶ A fourth voice speaks from the dark above the stair, unamplified, polite.
41 D ALVARO [O.S.]: Everyone relax. Please.
42 A ¶ All three look up.
43 A A silhouette stands on the catwalk, a phone held loosely to its ear.
44 D DRAGAN: Who is that.
45 D ALVARO [O.S.]: Someone who'd like to hear the rest of this.
46 D ROSALIND (to Dragan): You brought a recorder?
47 D DRAGAN: I didn't bring anyone.
48 D ALVARO [O.S.]: No, I came on my own. Mrs. Oyelaran-Finch, I believe that's your bag.
49 A ¶ Kestrel stares at the catwalk.
50 A Then, slowly, at the two armed people in front of her.
51 A She sets the bag on the floor, pushes it with her foot across the concrete toward Rosalind and Dragan, and steps away from it with her hands visible.
52 D KESTREL: It's yours. Whoever wants it.
53 A ¶ Neither of them moves.
54 A Dragan lowers his pistol an inch.
55 A Rosalind's hand leaves her holster.
* 56 A The pipe drips.
57 D ALVARO [O.S.] (softly): That's better.
58 D DRAGAN (muttering): Twenty years.
59 D ROSALIND: Don't.
60 A ¶ She crouches and picks up the bag.
61 A Opens it.
62 A Looks inside.
63 A Closes it.
64 D ROSALIND [CONT'D]: It's empty.
65 D DRAGAN: What?
66 D KESTREL: The laptop's in the dock.
67 A ¶ All of them turn to the glass wall.
* 68 A Far below, at the foot of the rusted hull, a tiny blue light glows on the concrete floor of the dry dock, beside a sealed gate that has just begun to let in water.
69 D DRAGAN: You flooded it.
70 D KESTREL: I opened a valve. It's what the pump house is for.
71 A ¶ Rosalind sprints for the door.
72 A Dragan lowers his gun completely and watches the water, and the blue light, and the woman, one after the other.
73 D ALVARO [O.S.] (delighted): Oh, well done.
74 D KESTREL: Don't follow me.
75 A ¶ She walks to the stair and climbs past the catwalk without looking at it.
76 A At the top, the silhouette steps aside to let her through.

### SCENE s01986 | INT. BONDED WAREHOUSE, WINE CELLAR LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): LEONIE BARTHOLOMEW-ACHEBE, NATE, OBUYA, DOROTHEA PRUITT-LANE, MAXIMILIAN VOSS-KAGAN
* 1 A ¶ Brick vaults, racks of dusty bottles in wooden crates.
* 2 A A single bare bulb.
* 3 A Stairs lead up into darkness.
4 A ¶ LEONIE BARTHOLOMEW-ACHEBE (30s, fraud investigator, leather satchel) kneels at a crate with a flashlight.
5 A NATHANIEL "NATE" OBUYA (40s, warehouse manager, lanyard) hovers behind her.
6 A DOROTHEA PRUITT-LANE (60s, private owner, silver cane) stands at the foot of the stairs.
7 A And leaning in the arch of the next vault, a bottle in his hand, is MAXIMILIAN VOSS-KAGAN (50s, collector, silk scarf).
8 D LEONIE: These are labeled 1982.
9 D NATE: They are 1982.
10 D LEONIE: The cork says 2014.
11 D NATE: Corks are replaced.
12 D LEONIE: Not with a laser-etched date.
13 D DOROTHEA: Nathaniel, what is she talking about?
14 D NATE: Mrs. Pruitt-Lane, it's a routine--
15 D LEONIE (over him): It's not routine. Someone's been decanting new wine into old bottles.
16 D MAXIMILIAN: How very cinematic.
17 D DOROTHEA: Max, be quiet.
18 D MAXIMILIAN: Dorothea, I'm only observing.
19 D NATE (to Maximilian): You told me they were authentic.
20 D MAXIMILIAN: They are authentic bottles.
21 D LEONIE (to Maximilian): You sold three hundred of them.
22 D MAXIMILIAN: I sold three hundred bottles of excellent wine.
23 D DOROTHEA: Of 1982.
24 D MAXIMILIAN: Of excellent wine, Dorothea.
25 D NATE: She's going to the police.
26 D LEONIE: Nate, you're making it worse.
27 D NATE (to Leonie): Aren't you?
28 D LEONIE (to Dorothea): Mrs. Pruitt-Lane, your name is on every certificate.
29 D DOROTHEA: My signature, yes.
30 D LEONIE: Your signature authenticates every fake.
31 D DOROTHEA: I authenticated what I was shown.
32 D MAXIMILIAN: She authenticated what she was told.
33 D NATE: By who?
34 D MAXIMILIAN: By you, Nathaniel, you wrote the provenance.
35 D NATE: You told me what to write!
36 D DOROTHEA (sharply): Both of you.
* 37 A ¶ A long silence.
* 38 A The bulb buzzes.
* 39 A Somewhere above, a floorboard creaks.
40 A Leonie lifts her flashlight toward the stairs.
41 D LEONIE: Who else is here?
42 D NATE: No one.
43 D MAXIMILIAN: Just us.
44 D DOROTHEA: Don't lie, Max.
* 45 A ¶ The beam finds nothing, then a shadow moving on the wall.
46 D LEONIE (low): Nobody move.
47 D MAXIMILIAN: That's the cat.
48 D NATE: We don't have a cat.
49 D DOROTHEA: We have a cat.
50 D NATE: Since when?
51 D DOROTHEA: Since Tuesday. Nathaniel, you should read the memos.
* 52 A ¶ A clank from above.
53 A All four turn toward the stairs.
54 D LEONIE (whispering): Give me your phones. All of you.
55 D MAXIMILIAN: Absolutely not.
56 D DOROTHEA: Give her yours, Max.
57 D NATE: Mine's dead.
58 D LEONIE: Then you're no use.
59 D NATE: That's harsh.
60 D MAXIMILIAN: That's accurate.
61 D DOROTHEA: Max, the phone.
62 A ¶ Maximilian sighs.
63 A Slides the phone across the stone.
64 A Leonie pockets it.
* 65 A Her flashlight flickers and dies.
* 66 A In the darkness, footsteps descend the stairs, heavy, unhurried.
67 D NATE (whispering): That's not the cat.

### SCENE s01987 | INT. FARRYNER'S BAKEHOUSE, PUDDING LANE - NIGHT
Detected names (may be incomplete or contain aliases): THOMAS FARRYNER, EDMUND BRANDON
* 1 A ¶ September, 1666.
* 2 A A low, smoke-blackened bakehouse.
* 3 A Ovens glow.
* 4 A Flour dust hangs in the air like fog.
* 5 A Barrels, kneading troughs, a ladder to a loft.
6 A ¶ THOMAS FARRYNER (40s, baker, forearms scarred by decades of oven doors) rakes embers with an iron peel.
7 A A sleepy APPRENTICE named EDMUND BRANDON (14, flour in his hair) kneads a lump of dough on the trough.
8 A ¶ Thomas straightens, wipes his brow, and looks at the oven mouth.
* 9 A A stray ember jumps out onto the floor.
10 A He stamps it.
* 11 A Another leaps.
12 A He stamps again, then peels the oven door shut with his foot while Edmund turns, rubs his eyes, reaches for a rag, and misses the barrel behind him.
13 D THOMAS: Mind the faggots, boy.
14 D EDMUND: Yes, Master.
15 D THOMAS: Stacked too near.
16 D EDMUND: They're always there.
17 D THOMAS: They're always there because I've never lit it this hot.
18 A ¶ Edmund looks at the oven.
19 A At his master.
20 A At the bundle of dry kindling heaped against the wall.
21 D EDMUND: Master, it's very hot.
22 D THOMAS: It's the dry summer.
23 D EDMUND: The thatch is hot too. I can feel it from here.
24 A ¶ Thomas looks up.
* 25 A A thread of smoke is drifting out of a gap in the rafters.
26 A He climbs the ladder two rungs at a time.
27 A Edmund grabs a bucket, dips it in the trough, and splashes the wall.
* 28 A It hisses.
29 D THOMAS (from the loft): Water! More!
30 D EDMUND: There isn't more, Master. The trough is dough.
31 D THOMAS: Then bring the ale!
32 A ¶ Edmund drags a barrel, tips it, lunges for the loft with the first pitcher full.
33 A Thomas stamps at something in the straw.
* 34 A The barrel rolls across the floor.
35 A Edmund slips on it, lands on his back, the pitcher still raised, not a drop spilled.
36 D THOMAS [CONT'D]: Boy!
37 D EDMUND: Here, Master!
38 A ¶ Thomas descends, lifts the boy by the collar, sets him on his feet, snatches the pitcher, and throws it up through the hatch.
* 39 A A hiss.
* 40 A Orange light flares at the edge of the loft.
41 A Both stare.
42 D THOMAS: Out.
43 D EDMUND: The bread!
44 D THOMAS: Out, Edmund!
45 A ¶ He shoves the boy toward the door and follows, and as they spill onto the street a bell begins to ring somewhere down the lane, one bell, then two.

### SCENE s01988 | INT. COURTHOUSE ELEVATOR, FOURTH FLOOR - DAY
Detected names (may be incomplete or contain aliases): DEPUTY DISTRICT ATTORNEY MARGUERITE OKWUOSA-HALE, PUBLIC DEFENDER TABITHA NGUYEN-FELLOWES, MAINTENANCE
* 1 A ¶ A dented steel box with a cracked mirror and a laminated placard: MAX OCCUPANCY 8.
* 2 A The numbers above the door flicker.
3 A ¶ DEPUTY DISTRICT ATTORNEY MARGUERITE OKWUOSA-HALE (40s, charcoal suit, case files in both arms) stands in one corner.
4 A In the other corner, PUBLIC DEFENDER TABITHA NGUYEN-FELLOWES (30s, rumpled blazer, coffee) leans against the rail.
* 5 A ¶ The elevator shudders and stops between floors.
* 6 A The lights dim.
* 7 A A tiny speaker coughs.
8 D MAINTENANCE [V.O.] (through the speaker): Stuck on four. Hang tight, folks.
9 A ¶ Marguerite sighs.
10 A Tabitha sips her coffee.
11 D MARGUERITE: Ms. Nguyen-Fellowes.
12 D TABITHA: Ms. Okwuosa-Hale.
13 D MARGUERITE: You filed a motion to suppress at six this morning.
14 D TABITHA: I did.
15 D MARGUERITE: You're supposed to file by five.
16 D TABITHA: The email server was down.
17 D MARGUERITE: That's not my problem.
18 D TABITHA: It will be when the judge reads it.
19 D MARGUERITE: She'll deny it.
20 D TABITHA: She'll hear it. She'll rule on the merits.
21 D MARGUERITE: Tabitha.
22 D TABITHA: Marguerite.
23 D MARGUERITE: Your client's own phone placed him at the scene. You don't have the merits.
24 D TABITHA: My client's phone was seized without a warrant.
25 D MARGUERITE: With consent.
26 D TABITHA: From his sister. Who doesn't live there.
27 A ¶ Marguerite's arms tighten around her files.
* 28 A A fluorescent tube flickers.
29 A She sets the files on the floor and kicks them into the corner.
30 D MARGUERITE (muttering): She lives there.
31 D TABITHA: What?
32 D MARGUERITE: Nothing.
33 D TABITHA: She said she moved out in June.
34 D MARGUERITE: She said a lot of things.
35 D TABITHA: Marguerite. Is there a lease?
36 D MARGUERITE: That is not for me to discuss in a stuck elevator.
37 D TABITHA: Then discuss it in the courtroom.
38 D MARGUERITE: I will.
39 D TABITHA: Good.
* 40 A ¶ The elevator lurches.
41 A Both of them grab the rail.
* 42 A The doors grind open onto the fifth floor.
* 43 A Between them: a bare corridor, and light.
44 D MAINTENANCE [V.O.] (through the speaker): Okay, you're good.
45 A ¶ Marguerite picks up her files.
46 A Tabitha steps out first.
47 D TABITHA: After you.
48 D MARGUERITE: You're holding the door.
49 D TABITHA: Habit.
50 D MARGUERITE: I'm asking you to hold it.
51 A ¶ Tabitha holds it.
52 A Marguerite steps through, stops, and for the first time looks at her directly.
53 D MARGUERITE [CONT'D]: There's a lease. It's in the evidence box. Item thirty-one.
54 D TABITHA: You're telling me?
55 D MARGUERITE: I'm telling the court. Shortly. You may as well know first.
56 A ¶ She walks down the corridor.
57 A Tabitha lets the door close behind her and watches her go.

### SCENE s01989_0 | EXT. FLOODED RICE PADDY, VILLAGE EDGE - DAWN
Detected names (may be incomplete or contain aliases): CORPORAL VAUGHN DELACROIX-AMARI, ZEKE, TANAKA-OLUWOLE, SERGEANT
* 1 A ¶ A drowned field under pewter light.
* 2 A Water to the knee, mud to the shin.
* 3 A Smoke from burned huts drifts across a line of bamboo.
* 4 A Distant artillery.
5 A ¶ Three figures wade in single file.
6 A CORPORAL VAUGHN DELACROIX-AMARI (20s, helmet cocked, rifle held high) leads.
7 A Behind him, PRIVATE EZEKIEL "ZEKE" TANAKA-OLUWOLE (19, pack too large) drags a wounded man on a poncho litter.
8 A The wounded man, a SERGEANT (50s, bearded, bandaged at the thigh), has his eyes shut.
9 D VAUGHN: Keep it low. Low.
10 D ZEKE: I am low.
11 D VAUGHN: You're not low, you're wet.
12 D ZEKE: They're the same thing out here.
13 A ¶ The Sergeant groans.
14 A Zeke stops.
15 A Vaughn turns, kneels, takes the Sergeant's wrist.
16 A Lets it go.
17 D VAUGHN: Still with us.
18 D ZEKE: How much farther?
19 D VAUGHN: Treeline. Then the road.
20 D ZEKE: You said the road an hour ago.
21 D VAUGHN: I said the road was past the paddy.
22 D ZEKE: This is the paddy.
23 D VAUGHN: Then we're past the paddy soon.
* 24 A ¶ A burst of automatic fire from the north.
* 25 A Water spouts around them.
26 A Vaughn dives into the mud.
27 A Zeke throws himself over the Sergeant.
28 A They lie there, all three, in the flooded field, faces half under.
* 29 A ¶ Silence.
* 30 A A bird takes off.
31 A Vaughn lifts his head.
32 D VAUGHN [CONT'D] (whispering): Zeke?
33 D ZEKE (whispering): Yeah.
34 D VAUGHN: You okay?
35 D ZEKE: I'm a cushion.
36 A ¶ The Sergeant opens one eye.
37 D SERGEANT: Get off me.
38 D ZEKE: Sarge!
39 D SERGEANT: You're on my leg.
40 D ZEKE: Sorry! Sorry!
41 D SERGEANT: Where's the road?
42 D VAUGHN: Treeline.
43 D SERGEANT: Quit saying treeline. Give me a direction.
44 D VAUGHN: East.
45 D SERGEANT: That's the Vietcong's east or ours?
46 D VAUGHN: Ours.
47 D SERGEANT: Then go that way.
48 A ¶ They rise, crouching.
49 A Zeke grabs the poncho.
50 A Vaughn takes the other corner, and the two of them haul.
51 A The Sergeant bites back a cry.
* 52 A Another burst of fire.
53 A They duck, and the Sergeant clamps a hand over Zeke's mouth.
54 D SERGEANT [CONT'D] (whispering): Shut up, kid. That's a Pawnee.
55 D ZEKE (muffled): A what?
56 D SERGEANT: A Pawnee. It's one of ours. The twenty-three.
57 D VAUGHN: How do you know?
58 D SERGEANT: I've been shot by it.
59 A ¶ The three of them listen.
* 60 A The firing is regular, rhythmic, and it's pointed away from them.
61 D VAUGHN: They're clearing the treeline.
62 D ZEKE: That's good, right?
63 D SERGEANT: Depends who's in the treeline.
64 A ¶ They look at each other.
* 65 A The artillery thunders.
* 66 A Smoke drifts between them.
67 D ZEKE: Sarge, should I run?
68 D SERGEANT (wearily): Son, if you run in a paddy you'll sink to your knees.
69 D VAUGHN: We walk.
70 D ZEKE: Together.
71 D SERGEANT: Together. And if anyone shoots at us, we die slowly, in the proper order.
72 D VAUGHN: Which is?
73 D SERGEANT: The youngest dies last. So he can see it.
74 D ZEKE: That's not funny.
75 D SERGEANT: It wasn't a joke.
* 76 A ¶ Silence.
77 A Zeke grabs his corner of the poncho.
78 A Vaughn grabs his.
79 A They haul, wading, as the sun comes up gray behind the smoke.

### SCENE s01989_1 | EXT. TREELINE - CONTINUOUS
Detected names (may be incomplete or contain aliases): SERGEANT, VAUGHN, ZEKE
1 A ¶ Ahead, a figure steps out from the bamboo, rifle raised.
2 A A boy in a ragged shirt, no more than sixteen.
3 A ¶ All three stop.
4 A Vaughn lifts his rifle.
5 A The Sergeant lifts a hand.
6 D SERGEANT (low): Don't.
7 D VAUGHN: He's armed.
8 D SERGEANT: So are we. Look at his face.
9 A ¶ The boy's rifle shakes.
10 A His face is wet.
11 A He says something in his own language, quiet, almost a question.
12 A Zeke lowers his own rifle and holds up one open palm.
13 D ZEKE (gently): Hi.
14 A ¶ The boy blinks.
15 A Looks at the Sergeant.
16 A At the wounded leg.
17 A He lowers the rifle to his hip and turns, slowly, and points down the road.
18 A Then he walks away into the bamboo.
19 D VAUGHN: What was that?
20 D SERGEANT: A road.
21 A ¶ They resume the haul.
* 22 A The artillery fades.

### SCENE s01990 | INT. WITNESS PREP ROOM, SUPERIOR COURT - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY OCTAVIA BELLWEATHER-JIN, SAMUEL IGWE-ROSENBERG
* 1 A ¶ A windowless room.
* 2 A Steel table.
* 3 A Two plastic chairs.
* 4 A A water pitcher sweating on a tray.
5 A ¶ ATTORNEY OCTAVIA BELLWEATHER-JIN (40s, severe bun) sits across from her witness, DR. SAMUEL IGWE-ROSENBERG (60s, forensic accountant, tie too tight).
6 A She slides a folder across the table.
7 A He doesn't open it.
8 D OCTAVIA: Dr. Igwe-Rosenberg, tomorrow you take the stand.
9 D SAMUEL: I know.
10 D OCTAVIA: Opposing counsel will ask about the ledger.
11 D SAMUEL: I know that too.
12 D OCTAVIA: And you'll say what?
13 D SAMUEL: That the ledger is incomplete.
14 D OCTAVIA: No. You'll say it contains discrepancies that are consistent with accounting error.
15 D SAMUEL: They are not consistent with accounting error.
16 D OCTAVIA: You'll say they are.
17 D SAMUEL: Ms. Bellweather-Jin, I have been a forensic accountant for thirty-one years.
18 D OCTAVIA: Which is why they'll believe you.
19 D SAMUEL: Because I'll lie?
20 D OCTAVIA: Because you'll be precise.
21 D SAMUEL: Precisely incorrect.
22 D OCTAVIA: Precisely helpful.
23 A ¶ He pours water into a paper cup.
24 A Holds it without drinking.
25 D SAMUEL: What happens if I tell the truth?
26 D OCTAVIA: Then my client loses.
27 D SAMUEL: And if he deserves to?
28 D OCTAVIA: It isn't my job to decide that.
29 D SAMUEL: Then whose job is it?
30 D OCTAVIA: A jury's.
31 D SAMUEL: Who will rely on my testimony.
32 D OCTAVIA: Who will rely on your credentials.
33 D SAMUEL: They're the same thing.
34 D OCTAVIA: Not in this room.
35 A ¶ He sets the cup down.
36 A Pushes the folder back across the table unopened.
37 D SAMUEL: I'll testify, Ms. Bellweather-Jin. But I'll say what the ledger says.
38 A ¶ She looks at him a long time.
39 A Then she opens the folder, takes out a single page, and slides it to him.
40 D OCTAVIA: Then say this.
41 D SAMUEL (reading): "The ledger contains discrepancies. Their cause cannot be determined from the ledger alone."
42 D OCTAVIA: Is that true?
43 D SAMUEL (a pause): It's true.
44 D OCTAVIA: Then it's all I'm asking.
45 A ¶ He folds the page in half, and in half again, and puts it in his breast pocket.

### SCENE s01991 | INT. OPEN-PLAN OFFICE, BEANBAG ZONE - DAY
Detected names (may be incomplete or contain aliases): FAMILY, CASSIDY ROWE-ADEYEMI, BARNABY OKONJO-LIND, DEZ, HARTWELL, VERONIKA SANDOVAL-BRIGHT
* 1 A ¶ A startup floor painted in primary colors.
* 2 A Ping-pong table.
* 3 A A neon sign reads: WE'RE A FAMILY.
* 4 A Three beanbag chairs in a triangle around a kombucha tap.
5 A ¶ CASSIDY ROWE-ADEYEMI (30s, product manager, hoodie) and BARNABY OKONJO-LIND (30s, engineer, noise-canceling headphones around his neck) sit in beanbags.
6 A DESMOND "DEZ" HARTWELL (40s, Head of Culture, ironic vest) stands, clapping slowly.
7 D DEZ: Team! Quick one! Pulse check!
8 D CASSIDY: No.
9 D BARNABY: Not now.
10 D DEZ: Just a quick pulse check on how we're all feeling about the pivot!
11 A ¶ Cassidy flicks her eyes to Barnaby.
12 A Barnaby lifts his headphones to his ears and drops them back on his neck.
13 A Dez keeps clapping.
14 D CASSIDY: Dez, we pivoted in March.
15 D DEZ: Right!
16 D CASSIDY: We pivoted again in June.
17 D DEZ: Right!
18 D BARNABY: We're pivoting back, aren't we.
19 D DEZ (too quickly): I can't speak to that.
20 D BARNABY: You just did.
21 A ¶ Dez stops clapping.
22 A Cassidy grabs the nearest cup of kombucha and drinks it in one pull.
23 A Barnaby wriggles upright in his beanbag, which swallows him again.
24 A Dez lunges to help, steps on a cable, and the ping-pong table's overhead lamp swings.
25 A They all duck.
26 A ¶ A woman in a tailored suit appears at the edge of the zone, a tablet cradled in one arm: VERONIKA SANDOVAL-BRIGHT (50s, investor, pearl studs, silver hair, no smile).
27 D VERONIKA: Is this a bad time?
28 D DEZ (too bright): Veronika! We were just aligning!
29 D VERONIKA: On what?
30 D DEZ: Vision!
31 D VERONIKA: Whose?
* 32 A ¶ Nobody speaks.
33 A Cassidy and Barnaby look at their shoes.
34 A Dez adjusts his vest.
35 D BARNABY (muttering): Oh, boy.
36 D VERONIKA: I've reviewed the burn rate. We have six weeks of runway.
37 D DEZ: That's actually a positive!
38 D VERONIKA: It is not a positive.
39 D CASSIDY: Veronika, if I may.
40 D VERONIKA: You may.
41 D CASSIDY: We've been building the wrong thing since March.
42 A ¶ Dez gasps.
43 A Barnaby stares at her.
44 A Veronika's eyebrows rise a quarter inch.
45 D VERONIKA: Explain.
46 D CASSIDY: We pivoted to chase a market, but the customers wanted the original product. We never listened.
47 D DEZ: Cass.
48 D CASSIDY: It's true, Dez.
49 D BARNABY: It is true.
50 D VERONIKA: Then why did no one say so?
51 A ¶ Dez opens his mouth, closes it, sits down in the third beanbag, and disappears into it up to his chest.
* 52 A The neon sign buzzes over his head.
53 D DEZ (small): We're a family.
54 D VERONIKA: Families go bankrupt, Desmond.
55 A ¶ She taps her tablet.
56 A Then, to her own faint surprise, she lowers herself into the arm of Cassidy's beanbag and sets the tablet on her knee.
57 D VERONIKA [CONT'D]: Start from March.
