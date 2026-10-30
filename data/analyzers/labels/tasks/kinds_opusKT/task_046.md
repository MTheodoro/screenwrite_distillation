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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0046.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01494 | INT. GRAIN SILO, HEAVY BOMBER BASE - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT CASIMIR WOJCIK-ASANTE, SERGEANT TIBERIUS HALLORAN-OKORO, YOUNG PRIVATE JONAH ABERNATHY-LIU
* 1 A ¶ A hollow concrete cylinder smelling of dust and old wheat.
* 2 A A rope ladder dangles from a hatch.
* 3 A Moonlight falls through the hatch in a pale coin on the floor.
4 A ¶ Three men huddle around a hurricane lamp.
5 A LIEUTENANT CASIMIR WOJCIK-ASANTE (30s, flight jacket, no cap) sits on an overturned drum.
6 A SERGEANT TIBERIUS HALLORAN-OKORO (40s, a bandaged hand) cleans a pistol.
7 A YOUNG PRIVATE JONAH ABERNATHY-LIU (19, a radio on his lap) fiddles with its dials.
8 D CASIMIR: How long since the last patrol?
9 D TIBERIUS: Two hours.
10 D CASIMIR: Nothing on the radio?
11 D JONAH: Static, sir. Just static.
12 D CASIMIR: Try the emergency band.
13 D JONAH: I've tried it.
14 D CASIMIR: Try it again.
15 A ¶ Jonah turns the dial.
* 16 A Static rises, falls.
* 17 A A fragment of music, dance-band, swells and fades.
18 D TIBERIUS: That's Berlin.
19 D CASIMIR: That's Brussels.
20 D TIBERIUS: It's Berlin.
21 D CASIMIR: Sergeant, I have flown over both.
22 D TIBERIUS: Sir, I have been bombed by both.
23 D CASIMIR (a dry smile): Then we are experts.
24 D JONAH: Sir, may I ask something?
25 D CASIMIR: You may.
26 D JONAH: Are we going to be all right?
27 A ¶ Tiberius stops cleaning the pistol.
28 A Casimir leans back until his drum creaks.
29 D CASIMIR: Private, the war ends. Whether we end with it is a matter of arithmetic.
30 D JONAH: Arithmetic?
31 D TIBERIUS: He means luck.
32 D CASIMIR: I mean luck with decimals.
33 A ¶ Jonah laughs, small and surprised.
34 A Tiberius cracks a smile.
35 A For a moment all three men are grinning in the lamplight like boys in a treehouse.
36 A ¶ Then the grin falters.
* 37 A Overhead, very faint, a droning begins.
* 38 A It swells.
* 39 A The lamp flame trembles.
40 A Tiberius lowers the pistol, Casimir springs to his feet, and Jonah clutches the radio to his chest, all three staring up at the coin of moonlight as the hatch rattles on its hinges.
41 D TIBERIUS: Ours.
42 D CASIMIR: You're sure?
43 D TIBERIUS: Listen to the engines.
44 A ¶ They listen.
* 45 A The drone passes directly overhead.
* 46 A It's steady.
* 47 A Unhurried.
* 48 A It fades toward the east.
49 D JONAH (whisper): Ours.
50 D CASIMIR: Ours.
51 A ¶ They sit down again, slowly.
52 A No one speaks.
53 A Tiberius resumes cleaning the pistol.
54 A Jonah turns the dial back to the dance band, very low.

### SCENE s01495 | INT. CLOSED FISH MARKET - PRE-DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE IGNATIUS OYELARAN-BRENNAN, DETECTIVE YASMINE ACHEBE-KOWALCZYK, UNIFORMED OFFICER, TREVOR MBEKI-LLOYD, BARTHOLOMEW SANTIAGO-NGUYEN, PERPETUA OKORO-VANCE, DIEGO FERREIRA-AKINS, OFFICER
* 1 A ¶ Concrete slabs, hoses, drains.
* 2 A Ice melting in bins.
* 3 A A tarp-draped shape in the center of the floor.
4 A ¶ Six people stand around it in a loose horseshoe.
5 A ¶ DETECTIVE IGNATIUS OYELARAN-BRENNAN (50s, rumpled suit) holds a notebook.
6 A His partner DETECTIVE YASMINE ACHEBE-KOWALCZYK (30s, blazer, tired eyes) kneels beside the tarp.
7 A A UNIFORMED OFFICER, TREVOR MBEKI-LLOYD (20s), stands guard at the door.
8 A The market owner, MR. BARTHOLOMEW SANTIAGO-NGUYEN (60s, rubber apron), twists a towel.
9 A His night cleaner, PERPETUA OKORO-VANCE (40s, a mop in her hands), stares at the wall.
10 A In the corner, a fishmonger's boy, DIEGO FERREIRA-AKINS (16, still in waders), chews his thumbnail.
11 D IGNATIUS: Who found him?
12 D BARTHOLOMEW: She did.
13 D PERPETUA: I opened at four. He was there.
14 D YASMINE: Did you touch him?
15 D PERPETUA: No.
16 D IGNATIUS: You're sure.
17 D PERPETUA: I swear.
18 D DIEGO: She screamed so loud I came running.
19 D BARTHOLOMEW: You weren't supposed to be here yet.
20 D DIEGO: I'm always here early.
21 D BARTHOLOMEW: No one asked you.
22 D IGNATIUS: Let him speak, Mr. Santiago-Nguyen.
23 D BARTHOLOMEW: Santiago.
24 D IGNATIUS: Santiago. Did you know this man?
25 D BARTHOLOMEW: Never seen him.
26 D YASMINE: He's wearing your market's apron.
27 D BARTHOLOMEW: Everyone's wearing the apron. I give out aprons.
28 D OFFICER (from the door): Detective, the van's here.
29 D IGNATIUS: Hold it, Officer.
30 D OFFICER: Yes, sir.
31 D YASMINE: Diego. How long have you worked here?
32 D DIEGO: Two summers.
33 D YASMINE: You know the regulars.
34 D DIEGO: Some.
35 D YASMINE: Look at his face.
36 A ¶ Diego hesitates.
37 A Yasmine lifts the corner of the tarp.
38 A Perpetua turns away.
39 A Bartholomew drops his towel.
40 A Diego steps closer, peers down, and his shoulders sag.
41 D DIEGO: That's Mr. Koval. He buys the eels. Every Tuesday.
42 D IGNATIUS: Mr. Koval.
43 D DIEGO: He always paid in cash.
44 D BARTHOLOMEW: Diego, shut up.
45 D IGNATIUS: No. Go on, son.
46 D DIEGO: He's been coming in Tuesdays since I started. He and Mr. Santiago talk. In the back.
47 D BARTHOLOMEW: About eels!
48 D PERPETUA: About money.
49 D BARTHOLOMEW: Perpetua!
50 D PERPETUA: I clean the back, Bartholomew. I hear everything.
51 D IGNATIUS (to Bartholomew): Mr. Santiago, I think we should continue this at the station.
52 D BARTHOLOMEW: I want a lawyer.
53 D YASMINE: You'll have one.
54 D BARTHOLOMEW: I want one now.
55 D IGNATIUS: Officer Mbeki-Lloyd?
56 D TREVOR: Sir.
57 D IGNATIUS: Escort Mr. Santiago to the car.
58 A ¶ Trevor crosses the floor.
59 A Bartholomew, for a moment, looks ready to bolt.
60 A Then his shoulders slump and he lets himself be led.
* 61 A ¶ The door closes.
* 62 A Dawn bleeds in at the edges of the loading bay.
63 A Perpetua leans on her mop.
64 A Diego slumps onto an ice bin.
65 D YASMINE: You two did the right thing.
66 D PERPETUA: I just wanted to mop.

### SCENE s01496 | INT. STRANDED GONDOLA CAR, ALPINE CABLEWAY - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, ELDERLY MAN, TEENAGE GIRL, OPERATOR, PATROL, TEENAGER, INES
* 1 A ¶ A glass box swaying slightly in the dark, forty meters above a gorge.
* 2 A Frost on the windows.
* 3 A A single battery lamp.
* 4 A The far lights of a village glitter like spilled sugar.
5 A ¶ Five people are packed inside, and a voice on a radio makes six.
* 6 A Skis, packs, a child's sled strapped to the wall.
* 7 A Their breath fogs the glass.
8 A ¶ A WOMAN in her fifties sits upright, coat buttoned to the chin, a folded map in her lap.
9 A A MAN in his thirties crouches by the door with a phone held high.
10 A A TEENAGE GIRL hugs her knees on the bench.
11 A An ELDERLY MAN with a cane and a flat cap sits staring at the ceiling.
12 A A YOUNG WOMAN in ski patrol red leans against the control panel.
* 13 A ¶ The man's phone shows no signal.
14 A He lowers it.
* 15 A ¶ The radio on the control panel crackles.
16 D OPERATOR [V.O.] (radio, faint): Gondola Nine, Base. Do you read?
17 A ¶ The patrol woman grabs the handset.
18 D PATROL: Base, Gondola Nine. We read. Six aboard, all stable.
19 D OPERATOR [V.O.] (radio): Copy six. Power's out on the whole line. Rescue crew's three hours out.
20 A ¶ The elderly man grunts.
21 A The woman refolds her map, creasing it in half, then in quarters.
22 D PATROL (to the car): Three hours. Everyone stay put. Please.
23 A ¶ She sets the handset down.
24 A The teenager shifts.
25 D TEENAGER: I'm cold. Ines, what do we do?
26 D INES: We sort it.
27 A ¶ The man in the door unzips his jacket.
28 A He crosses to the bench and spreads it over the teenager.
29 A He sits back on his heels.
30 A The old man watches him.
31 D ELDERLY MAN: You know her?
32 D MAN: No.
33 D ELDERLY MAN: Hm.
34 A ¶ The man looks at the teenager.
35 A She shakes her head, once.
36 A He turns away.
* 37 A ¶ The gondola lurches.
* 38 A A creak travels the cable from far above.
39 A Everyone freezes.
* 40 A The lamp flickers.
* 41 A The glass trembles in its frame.
42 D INES: It's the wind. Just the wind.
43 D WOMAN: It's not the wind.
44 D INES: Ma'am...
45 D WOMAN: It's the cable. Listen.
46 A ¶ They listen.
* 47 A A thin, rhythmic singing runs along the steel, rising in pitch.
48 D INES (into radio, sharp): Base, Base. We have cable noise. Repeat, cable noise.
49 D OPERATOR [V.O.] (radio): Say again, Nine?
50 D INES: Cable noise! Singing, pitching up!
51 D OPERATOR [V.O.] (radio): Hold on. Hold on, Nine.
52 A ¶ The old man lifts his cane and lays it across his knees like a rifle.
53 A The teenager pulls the jacket closer.
54 A The man by the door stands, swaying, and puts a hand on the glass.
* 55 A Far below, the gorge exhales cold air.
* 56 A ¶ The singing stops.
* 57 A A long, absolute silence.
* 58 A Then the car drops six inches, stops, and swings.
* 59 A ¶ Nobody screams.
60 A The young woman in red just closes her eyes.
61 D WOMAN (very quiet): All right. All right.
62 A ¶ She takes the teenager's hand.
63 A The teenager takes the old man's.
64 A He takes the man's.
* 65 A A chain.
* 66 A A shaky one.
67 D INES (whispering to herself): Come on, rescue. Come on.
* 68 A ¶ The radio hisses.
* 69 A No voice.
* 70 A The lamp holds, steady and small, as the car sways out over nothing.

### SCENE s01497 | EXT. SINKING FISHING TRAWLER, BERING SEA - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN WINIFRED OYELOWO-STRAND, DECKHAND AMADEO TRUJILLO-BELL
* 1 A ¶ Black swells.
* 2 A A bow rising and falling, deck awash.
3 A Two survivors cling to the wheelhouse roof.
4 A ¶ CAPTAIN WINIFRED OYELOWO-STRAND (50s, orange survival suit, a split lip) and DECKHAND AMADEO TRUJILLO-BELL (20s, no gloves, teeth chattering).
5 D AMADEO: Captain, the lifeboat's gone!
6 D WINIFRED: I know!
7 D AMADEO: We'll freeze!
8 D WINIFRED: We won't freeze. We'll drown first. It's quicker.
9 D AMADEO: That's not funny!
10 D WINIFRED: I wasn't joking.
11 D AMADEO (laughs, then sobs): I'm twenty-two.
12 D WINIFRED: I'm fifty-four. I've done this three times.
13 D AMADEO: Done what?
14 D WINIFRED: Sunk.
15 D AMADEO: How do you...
16 D WINIFRED: You hold on. That's the whole trick. Hold on till the boat stops being your problem.
17 D AMADEO: What if it never does?
18 D WINIFRED: Then you hold on to me.
* 19 A ¶ A swell slams the hull.
* 20 A Spray.
21 A They scream.
* 22 A The boat tilts, groans, and settles.
23 D AMADEO: Captain!
24 D WINIFRED: Still here!
25 D AMADEO: Still here!
26 D WINIFRED: Then the rest is arithmetic.

### SCENE s01498 | INT. CONSERVATORY WEDDING RECEPTION - EVENING
Detected names (may be incomplete or contain aliases): GWENDA FITZALAN-OKORO, PIERS LANGLEY-ASANTE, TABITHA NWOSU-REYES, DJ, LUCIO MARCHETTI-DAS, STRANGER, DANIEL
* 1 A ¶ A Victorian glasshouse strung with paper lanterns.
* 2 A Ferns and fig trees crowd the corners.
* 3 A Rain drums on the panes.
* 4 A Tables laid with mismatched china.
5 A ¶ The guests murmur around a small dance floor, six of them clustered near the cake: the bride's mother GWENDA FITZALAN-OKORO (60s, silver gown, brimming eyes), the groom's brother PIERS LANGLEY-ASANTE (30s, loosened tie), an old friend TABITHA NWOSU-REYES (40s, wine glass in each hand), the DJ (20s, headphones, bored), a caterer LUCIO MARCHETTI-DAS (50s, white jacket), and a STRANGER in a rain-soaked coat at the glass door.
6 A ¶ The stranger has no card, no corsage, no seat.
7 A He looks at the dance floor as if at a stage he once knew.
8 D GWENDA: Who is that?
9 D PIERS: No idea.
10 D TABITHA: He's very wet.
11 A ¶ The stranger steps in.
12 A Dripping, he crosses the floor and stops before Gwenda.
13 D STRANGER: Mrs. Fitzalan-Okoro. You won't remember me.
14 D GWENDA: I don't believe I do.
15 D STRANGER: Twenty-six years ago, I proposed to your daughter's mother. In this room.
* 16 A ¶ Silence.
17 A The DJ takes off his headphones.
18 A Lucio sets down the tray.
19 D GWENDA (whisper): Daniel.
20 D DANIEL: Hello, Gwenda.
21 A ¶ She puts a hand to her mouth.
* 22 A Behind her, the music trails away.
* 23 A Rain drums on the glass.

### SCENE s01499 | INT. REVOLVING RESTAURANT ATOP A TELEVISION TOWER - NIGHT
Detected names (may be incomplete or contain aliases): DIMITRI OKAFOR-LIND, SOLANGE ASHWORTH-NDIAYE, HALVARD PEREIRA-GOH, SABINE KOWALSKI-ABARA, WAITER, THEODORE BRIGHT-OSEI
* 1 A ¶ White tablecloths.
* 2 A A slow circular carpet.
* 3 A The city lights sweep past the glass like a clock hand.
4 A ¶ At a corner table sit two couples and a waiter.
5 A DIMITRI OKAFOR-LIND (50s, sharp tie) stirs his coffee without drinking it.
6 A His wife SOLANGE ASHWORTH-NDIAYE (40s, pearls, sharp eyes) watches the room.
7 A Across from them, HALVARD PEREIRA-GOH (40s, tuxedo, a bandaged wrist) smiles too widely, while his date SABINE KOWALSKI-ABARA (30s, red dress, tense jaw) spins the stem of her glass.
8 A The WAITER, THEODORE BRIGHT-OSEI (20s, ironed apron), refills the water.
* 9 A ¶ The restaurant turns one degree.
10 A Dimitri glances at Halvard.
11 A Halvard glances at Sabine.
12 A Sabine glances at the waiter.
13 A The waiter, hands steady, sets the pitcher down, slides a folded napkin to Solange and steps back with a bow.
14 A Solange unfolds it beneath the table and reads.
15 A Her face does not move.
16 D DIMITRI (low): Well?
17 D SOLANGE: Sit still.
* 18 A ¶ The restaurant turns another degree.
19 A Halvard lifts his glass to his lips, and Sabine, without looking, takes his wrist.
20 A He freezes.
21 A Dimitri's hand slides toward his jacket.
22 A Theodore, still beside the table, tightens his grip on the pitcher handle.
23 A Solange folds the napkin back along its creases, lays it by her plate, and smiles at Sabine for the first time.
24 D SOLANGE [CONT'D] (pleasant): She tells me the elevator has stopped.
* 25 A ¶ The lights go out.
* 26 A In the dark, the carpet keeps turning, and she says nothing at all.

### SCENE s01500 | INT. COUNTY COURTHOUSE - SUPPLY CLOSET TURNED INTERVIEW ROOM - DAY
Detected names (may be incomplete or contain aliases): PUBLIC DEFENDER NOREEN ASANTE-WHITFIELD, ELLIS PORTILLO-ADEBAYO, DESMOND KORKMAZ-LIU, ^NOREEN
* 1 A ¶ A narrow room, mop buckets pushed to one side.
* 2 A A card table.
* 3 A Three folding chairs.
* 4 A A single window painted shut.
5 A ¶ PUBLIC DEFENDER NOREEN ASANTE-WHITFIELD (40s) sits with a file open.
6 A Across from her, the prosecutor ELLIS PORTILLO-ADEBAYO (40s) pushes a paper across the table.
7 A Between them, in the third chair, their juror-turned-witness DESMOND KORKMAZ-LIU (30s) grips the seat edge.
8 A ¶ Noreen slides the paper back.
9 D NOREEN: No.
10 D ELLIS: You haven't read it.
11 D NOREEN: I've read it.
12 D ELLIS: It's a good offer.
13 D NOREEN: It's a bad one.
14 A ¶ Ellis taps the paper.
15 A She pushes back.
16 A He lets her.
17 D ELLIS: Mr. Korkmaz-Liu, you understand why we're here?
18 D DESMOND: I was juror number six.
19 D NOREEN: You were.
20 D ELLIS: You spoke to the defendant's sister during recess.
21 D DESMOND: She spoke to me.
22 D NOREEN (to Desmond): What did she say?
23 D DESMOND: She said her brother didn't do it.
24 D ELLIS: That's inadmissible.
25 D ^NOREEN: That's inadmissible.
26 A ¶ They glare at each other.
27 A Desmond looks from one to the other.
28 D ELLIS: I didn't mean...
29 D NOREEN: Neither did I.
30 A ¶ They both lean back.
* 31 A The folding chairs creak.
32 A Noreen closes the file.
33 A Ellis straightens the offer.
34 A Desmond lets go of his seat.
35 A The three of them sit in silence, waiting for someone to move first.
36 D ELLIS: Mr. Korkmaz-Liu, thank you for your honesty. You may go.
37 D DESMOND: That's it?
38 D NOREEN: That's it.
39 A ¶ Desmond stands, bumps a mop bucket, and flees.
40 A Ellis and Noreen watch the door swing shut.
41 D ELLIS: Offer stands till five.
42 D NOREEN: I'll see you in court.

### SCENE s01501 | INT. REGIONAL AIRPORT BAGGAGE CLAIM - NIGHT
Detected names (may be incomplete or contain aliases): THADDEUS BRANSON-OYELARAN, GIGI, PETRAKIS-NWOSU, ^GIGI
* 1 A ¶ A dead carousel.
* 2 A One flickering fluorescent tube.
* 3 A A vending machine humming a note a half-step flat.
* 4 A Rain thrashes the empty glass hall.
* 5 A The last flight in was four hours ago.
6 A ¶ THADDEUS BRANSON-OYELARAN (50s, an immaculate overcoat, the posture of a man who has complained to managers before) stands with arms crossed beside a single battered suitcase.
* 7 A It is not his.
8 A He has decided it is his.
9 A ¶ GREGORIA "GIGI" PETRAKIS-NWOSU (50s, a blazer the color of canned peaches, a rolling cart of lost luggage) pushes through a swing door, whistling, and stops.
10 A She sees him.
11 A He sees her.
12 D GIGI: Sir, the airport is closed.
13 D THADDEUS: I'm aware.
14 D GIGI: Then why are you in it?
15 D THADDEUS: Because my bag is in it.
16 D GIGI: This is a lost-and-found area. Your bag is lost.
17 D THADDEUS: My bag is right here.
18 D GIGI: That's not your bag.
19 D THADDEUS: It's the bag I was given.
20 D GIGI: By whom?
21 D THADDEUS: By the carousel.
22 A ¶ Gigi studies the dead carousel.
* 23 A It doesn't move.
24 A She studies the suitcase.
* 25 A It's the color of mud, with a duct-taped corner.
26 D GIGI: Sir, that bag has been here since Tuesday.
27 D THADDEUS: Then it's been waiting for me.
28 D GIGI: It's tagged to a Mr. Hassan Abdi-Lindgren, Gate Nine.
29 D THADDEUS: I'm a Hassan in spirit.
30 D GIGI: Are you?
31 D THADDEUS (a long pause): No.
32 A ¶ She crosses her arms.
33 A He does not uncross his.
34 A They stand in a faint electrical hum, two statues who each know the other won't blink.
35 D GIGI (to herself): Lord, give me strength.
36 D THADDEUS (to himself): Lord, give me my bag.
37 A ¶ Gigi pulls a clipboard from the cart.
38 A Writes.
39 A Rips off a form.
40 A Holds it out.
41 D GIGI: Fill out Form 31-B.
42 D THADDEUS: Of what?
43 D GIGI: Of your grievance.
44 A ¶ He takes the form.
45 A Reads it.
46 A Looks up.
47 D THADDEUS: It's in triplicate.
48 D GIGI: We're a serious airport.
49 D THADDEUS: You have one gate.
50 D GIGI: It's a serious gate.
51 A ¶ She snaps her fingers.
* 52 A A pen sails out of her pocket and lands in his hand.
53 A He stares at it.
* 54 A It's a ballpoint chained to a small rubber frog.
55 D THADDEUS: What is this?
56 D GIGI: Our pen.
57 D THADDEUS: It's a frog.
58 D GIGI: It's a frog pen. It's how we know you're honest.
59 A ¶ Thaddeus clicks it.
60 A Starts writing.
* 61 A The frog dangles.
62 A Gigi leans over, reading upside down.
63 D GIGI [CONT'D]: That's not a grievance. That's a poem.
64 D THADDEUS: It's a long grievance.
65 D GIGI (reading): "Oh, suitcase, thou art mud."
66 D THADDEUS: Stop reading.
67 D GIGI: "Oh, suitcase, thou art lost, yet found, yet mine."
68 D THADDEUS: It's not for you!
69 D GIGI: It's on my form!
70 A ¶ Thaddeus tears the form in half.
71 A Gigi gasps.
72 A She snatches the halves and tries to fit them together.
73 D THADDEUS: GIGI You can't do that!
74 D ^GIGI: You can't do that!
75 A ¶ They stop.
* 76 A A beat.
* 77 A The vending machine hums.
78 D THADDEUS (to the empty hall): Is there anyone else?
79 D GIGI (to the empty hall): No.
80 D THADDEUS (to Gigi): Why are you here?
81 D GIGI: Because someone has to be.
82 D THADDEUS: For a suitcase?
83 D GIGI: For anyone's suitcase.
* 84 A ¶ A long silence.
85 A He looks at the bag.
86 A She looks at the torn form.
* 87 A The fluorescent tube buzzes, dims, and recovers.
88 D THADDEUS: It isn't mine.
89 D GIGI: I know.
90 D THADDEUS: Mine had a yellow ribbon.
91 D GIGI: I know. It's in the back. It came in Tuesday. I was just waiting to see who would show up for the wrong one first.
92 D THADDEUS: That's cruel.
93 D GIGI: That's customer service.
94 A ¶ She rolls her cart to the swing door.
95 A Holds it open with her hip.
96 A He stands for a moment.
97 A Then he picks up the muddy suitcase, hugs it once, sets it down gently, and follows her out.

### SCENE s01502 | INT. DEBTORS' PRISON WARD, LONDON - 1788 - NIGHT
Detected names (may be incomplete or contain aliases): EZEKIEL PRIMROSE-ADEBAYO, JEMIMA HARGREAVES-OKORO, SERGEANT MAGNUS FALKENBERG, TOBIAH
* 1 A ¶ A vaulted brick cell lit by a single tallow candle.
* 2 A Straw on the stones.
* 3 A A barred window, a crust of ice on the sill.
* 4 A Water drips somewhere in the walls.
5 A ¶ Four prisoners share the space.
6 A EZEKIEL PRIMROSE-ADEBAYO (60s, once a draper, now a coat of patches) lies on a plank bed with a ledger on his chest.
7 A The young JEMIMA HARGREAVES-OKORO (20s, ragged dress, hair under a cap) sits by the candle, darning a stocking.
8 A The old soldier SERGEANT MAGNUS FALKENBERG (50s, one leg, a crutch) leans against the wall whittling a spoon.
9 A In the shadows, the child TOBIAH (8, barefoot, a ratty blanket over his shoulders) listens.
10 D EZEKIEL: They say the King is mad again.
11 D MAGNUS: They said so in 'eighty-eight.
12 D EZEKIEL: They said so in 'eighty-seven.
13 D MAGNUS: He'll be mad till he's dead.
14 D JEMIMA: Hush. The boy.
15 D TOBIAH: I'm not asleep.
16 D JEMIMA: You should be.
17 D TOBIAH: It's too cold.
18 A ¶ Magnus sets down the spoon, shuffles on his crutch to the boy, and wraps the blanket tighter, tucking it under the child's heels.
19 A Ezekiel closes the ledger and sits up, grunting.
20 A Jemima bites off her thread and holds the stocking out to Tobiah, who pulls it over a bare foot.
21 A For a moment all four are close in the candlelight, the soldier kneeling, the draper leaning, the girl smiling at the child, and the child staring back at all of them as if memorizing their faces.
22 D MAGNUS: Tomorrow it will be warmer.
23 D TOBIAH: Is that a promise?
24 D MAGNUS: It's a weather report.
25 D TOBIAH: From who?
26 D MAGNUS: From the Almighty. He writes to me.
27 A ¶ Tobiah giggles.
28 A Jemima shakes her head.
29 A Ezekiel lies back down.
30 D EZEKIEL: Then ask Him about the bailiff.

### SCENE s01503 | INT. HOSPITAL ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): NURSE PRISCILLA ADEBAYO-KANE, ORDERLY HIRAM OKORO-STRAND, DOCTOR, CAPTAIN LUCIANA MOREAU-BANERJEE
* 1 A ¶ A steel box rising slowly.
* 2 A A gurney crowds the car.
3 A Under the sheet lies a patient, pale, an oxygen mask over his mouth.
4 A ¶ NURSE PRISCILLA ADEBAYO-KANE (30s, scrubs, hair in a bun) squeezes a bag valve.
5 A ORDERLY HIRAM OKORO-STRAND (50s, thick arms) steadies the gurney rail.
6 A A DOCTOR (40s, tired, a stethoscope around his neck) watches the monitor.
7 D DOCTOR: Eight more floors.
8 D PRISCILLA: He's holding.
9 D HIRAM: Come on, come on.
* 10 A ¶ The elevator stops.
* 11 A The doors don't open.
* 12 A The lights flicker.
13 D DOCTOR: No.
14 D HIRAM: It's the generator.
15 D PRISCILLA: How long?
16 D HIRAM: Ten minutes, maybe.
17 D DOCTOR: He doesn't have ten minutes.
* 18 A ¶ The doors part a crack.
19 A A hand wedges into the gap.
* 20 A A fire axe handle.
* 21 A The doors grind apart.
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

### SCENE s01504 | EXT. DRY CREEK BED, SOUTH TEXAS - NOON
Detected names (may be incomplete or contain aliases): WOMAN, BOY
* 1 A ¶ White glare on pale stones.
* 2 A Mesquite and a dead cottonwood.
* 3 A The creek bed is a crooked ribbon of dust, ankle-deep with the memory of water.
* 4 A Heat shimmers on the rocks.
5 A ¶ Four people stand at the four corners of a small open grave.
6 A ¶ A tall MAN in a black frock coat, hat in hand, reads from a Bible.
7 A A shorter WOMAN beside him, in a widow's veil, holds a tiny wooden cross.
8 A An older RANCHER in dusty chaps leans on a shovel.
9 A A BOY of fifteen, barefoot, stares at the hole.
10 A ¶ He closes the book.
11 A She steps forward and plants the cross at the head of the grave.
12 A He puts on his hat.
13 A The rancher rests the shovel against his hip and starts to fill the hole, and the boy, after a long moment, takes the spade from him and finishes it himself, tamping each shovelful.
14 A ¶ She watches him.
15 A He watches the ground.
16 A The man in black shifts his weight and turns to the rancher.
17 A The rancher spits.
18 A ¶ They stand in the heat.
* 19 A Nobody says a word.
20 A ¶ Then the woman lifts her veil.
21 A She is younger than the veil suggested.
22 A She looks at the rancher, then at the man in black, then at the boy.
23 D WOMAN: Who's going to tell him?
24 A ¶ The three men look at one another.

### SCENE s01505_0 | INT. GRAND HOTEL LOBBY, SNOWED IN - NIGHT
Detected names (may be incomplete or contain aliases): RAYMOND, EUDORA, ELMER
* 1 A ¶ A cavernous lobby of marble and brass.
* 2 A A grand staircase.
* 3 A A dead fireplace.
* 4 A Snow piled against the revolving door.
* 5 A Candles in saucers on every table.
6 A ¶ Six people occupy the room.
7 A They have not yet spoken to one another.
8 A ¶ DETECTIVE RAYMOND OKONKWO-HAYES.
9 A 50s.
10 A Rumpled.
11 A Smokes unlit cigarettes.
12 A ¶ LADY EUDORA PEMBERTON-ASANTE.
13 A 70s.
14 A Pearls.
15 A A cane with a silver head.
16 A ¶ PROFESSOR ISIDORE KOWALSKI-BRIGHT.
17 A 60s.
18 A Tweed.
19 A Spectacles on a chain.
20 A ¶ MISS CALLISTA DEVEREAUX-ADEYEMI.
21 A 30s.
22 A Evening gown.
23 A Scarlet lipstick.
24 A ¶ DOCTOR SAMUEL NAKAMURA-OKORO.
25 A 40s.
26 A Medical bag at his feet.
27 A ¶ THE DESK CLERK, ELMER FINNEGAN-LUU.
28 A 20s.
29 A Terrified.
* 30 A ¶ A scream cuts through the lobby, from upstairs.
31 A Everyone freezes.
* 32 A A door slams.
33 D RAYMOND: Nobody move.
34 D EUDORA: I wasn't going to.
35 D RAYMOND: Clerk. Who's on the third floor?
36 D ELMER: Mr. Delacroix, sir. Room 312.
37 D RAYMOND: Key.
38 A ¶ Elmer fumbles under the desk.
39 A Slides a brass key across the counter.
40 A Raymond snatches it and bounds up the stairs.
41 A The others stand frozen, until Samuel grabs his bag and follows.
42 A Callista watches him go, sets down her glass, and races after, leaving Eudora and Isidore alone with the clerk.

### SCENE s01505_1 | INT. HOTEL - THIRD FLOOR HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A long corridor, red carpet.
2 A Raymond reaches 312, tries the knob, then shoulder-rams the door.
* 3 A It gives.

### SCENE s01505_2 | INT. HOTEL - ROOM 312 - CONTINUOUS
Detected names (may be incomplete or contain aliases): SAMUEL, RAYMOND, CALLISTA, EUDORA, ISIDORE, ELMER
1 A ¶ A man lies face-down on the floor, a candlestick beside him.
2 A Samuel kneels and checks his neck.
3 D SAMUEL: Dead.
4 D RAYMOND: How long?
5 D SAMUEL: Minutes.
6 D CALLISTA (at the door): Oh, God.
7 D RAYMOND: Miss Devereaux, stay back.
8 D CALLISTA: He was my husband.
9 A ¶ Samuel looks up sharply.
10 A Raymond turns.
11 A In the doorway, behind Callista, the others have gathered: Eudora leaning on her cane, Isidore polishing his spectacles, Elmer trembling.
12 D RAYMOND: Everyone in the room. Nobody leaves.
13 D EUDORA: It was always going to be me or the Professor.
14 D ISIDORE: Lady Pemberton!
15 D EUDORA: Oh, don't be coy, Isidore. We both had reasons.
16 D RAYMOND: What reasons?
17 D EUDORA: He owed us money.
18 D ISIDORE: A great deal of it.
19 D ELMER (small voice): He owed me, too.
20 A ¶ Raymond looks at each in turn.
21 A Samuel rises and wipes his hands.
22 A Callista is staring at the floor.
23 D CALLISTA: He owed all of us.
24 D RAYMOND: Then it's a long list.
* 25 A ¶ The lights go out.
* 26 A A candle flame gutters.
* 27 A In the dark, a single gunshot cracks.
* 28 A A woman gasps.
* 29 A Everyone scatters.
30 A Raymond throws himself at the doorway, Samuel dives behind the bed, Eudora swings her cane in a wide arc, Isidore ducks under the desk, Elmer bolts for the window, and Callista grabs for the candlestick.
31 A ¶ A match flares.
* 32 A Raymond stands over the figure on the floor, the smoking pistol in Eudora's hand.
33 D RAYMOND [CONT'D]: Lady Pemberton. Put it down.
34 D EUDORA: I only shot the lamp, Detective.
* 35 A ¶ She sets the pistol on the dresser and sits on the bed, composed, hands folded.
36 D EUDORA [CONT'D]: I wanted you to see his face when the light came back.
* 37 A ¶ The match gutters out.

### SCENE s01506 | INT. COLLAPSED COPPER MINE, CHAMBER 7 - NIGHT
Detected names (may be incomplete or contain aliases): AGNIESZKA PETROVA-LUU, OLUSEGUN HARTMANN-BELL, DOMINGO REYES-ASANTE, RESCUER JOSIAH WELLINGTON-OKORO
* 1 A ¶ A pocket of dark rock, the ceiling low enough to touch.
* 2 A A single lantern burns blue on the last of the oil.
* 3 A Dust floats in the beam like drifting ash.
* 4 A Somewhere beyond the rubble, water drips.
5 A ¶ Three miners sit against the walls.
6 A AGNIESZKA PETROVA-LUU (40s, helmet cracked, hands bloodied) tends the lantern.
7 A OLUSEGUN HARTMANN-BELL (30s, wiry, one arm in a makeshift sling) stares at the cave-in.
8 A DOMINGO REYES-ASANTE (60s, gray-faced, a tin lunch pail on his lap) hums an old hymn.
9 D AGNIESZKA: Three days, Segun.
10 D OLUSEGUN: Two and a half.
11 D AGNIESZKA: We've counted the same.
12 D OLUSEGUN: Then we've counted wrong.
13 D DOMINGO: Hush, both of you. The air.
14 D AGNIESZKA: What about the air?
15 D DOMINGO: It's thin. Talk less. Think slower.
16 D OLUSEGUN: I can't think slower.
17 D DOMINGO: Then pray.
18 D OLUSEGUN: To what? To Chamber Seven?
19 D DOMINGO: Pray to whoever is listening.
* 20 A ¶ Silence.
* 21 A The lantern sputters.
22 A Agnieszka reaches for the oil can, shakes it.
* 23 A A thin trickle.
24 D AGNIESZKA: That's the last.
25 D OLUSEGUN: Then we're done.
26 D AGNIESZKA: We're not done.
27 D OLUSEGUN: Agnieszka, we are in a hole.
28 D AGNIESZKA: We are in a hole with a lunch pail, a lantern, and an old man who knows every tunnel in this mountain.
29 D DOMINGO (chuckles): Every tunnel but this one.
30 D AGNIESZKA: Because it doesn't exist.
31 D DOMINGO: Because nobody lived to draw it.
* 32 A ¶ A long pause.
33 A Olusegun lowers his head to his knees.
34 A Domingo opens the pail.
* 35 A Inside, a single boiled egg wrapped in cloth.
36 A He splits it carefully into three pieces.
37 D DOMINGO [CONT'D]: My wife packed it. She always packs two. I forgot the other this morning.
38 A ¶ He passes the pieces.
39 A They eat, slowly, as if tasting something holy.
* 40 A ¶ A faint scrape comes from the rubble.
41 A They freeze.
* 42 A Another scrape, then a tap, tap, tap, tap.
43 D OLUSEGUN: Rats.
44 D AGNIESZKA: Too regular.
45 D DOMINGO: Quiet.
46 A ¶ They scramble toward the wall of stone.
47 A Agnieszka presses her ear to it.
48 A Olusegun scrabbles at a loose rock.
49 A Domingo lifts the lantern.
* 50 A ¶ A stone shifts.
51 A A headlamp stabs through a fist-sized gap, then a hand, then a grimy face: RESCUER JOSIAH WELLINGTON-OKORO (30s, orange helmet, dust-black cheeks), wriggling in on his belly.
52 D RESCUER: Hello? Is anyone alive in here?
53 A ¶ Olusegun sobs.
54 A Agnieszka laughs.
55 A Domingo closes his eyes and finishes his hymn.

### SCENE s01507 | INT. CORPORATE TEAM-BUILDING ESCAPE ROOM - DAY
Detected names (may be incomplete or contain aliases): ARNOLD KOWALCZYK-ABARA, DESMOND PETROVA-OKAFOR, PRUDENCE LINDQVIST-ADEYEMI, NORMAN HOLLOWAY-LEE
* 1 A ¶ A fake dungeon with plywood walls painted to look like stone.
* 2 A A locked chest.
* 3 A A plastic skull on a pedestal.
* 4 A A digital clock on the wall counts down from 60:00.
* 5 A It reads 03:12.
6 A ¶ Four coworkers are trapped in the room, every one of them wearing a lanyard.
7 A ARNOLD KOWALCZYK-ABARA (40s, rumpled shirt) kicks the chest.
8 A DESMOND PETROVA-OKAFOR (30s, red-faced, sweating) dumps a bag of plastic coins on the floor.
9 A PRUDENCE LINDQVIST-ADEYEMI (50s, reading glasses, a pen behind her ear) paces.
10 A NORMAN HOLLOWAY-LEE (30s, the intern) stares at the skull, hopeful.
11 A ¶ He kicks the chest again.
12 A He shouts.
13 A He sits on it.
14 A He gets up and checks the other side, while he stares at the coins, then at him, and then at the clock.
15 D ARNOLD: We're going to be late for the all-hands.
16 D DESMOND: We're going to be dead, Arnold.
17 D PRUDENCE: We're going to be fired.
18 D NORMAN: Is it possible the skull is the key?
19 D ARNOLD: It's plastic.
20 D NORMAN: But keys can be plastic.
21 D DESMOND: That's a skull, Norman!
22 A ¶ Norman picks up the skull.
23 A Turns it over.
* 24 A Inside, taped to the cranium, a key.
25 A He holds it out.
26 A For a moment nobody breathes.
27 D PRUDENCE: Well. Don't just stand there.
28 A ¶ He fits it in the chest.
* 29 A The lid creaks open.
* 30 A Inside lies a laminated card: "CONGRATULATIONS!
* 31 A YOU HAVE ESCAPED.
* 32 A PLEASE RETURN YOUR LANYARDS."
* 33 A ¶ The clock stops at 02:05.

### SCENE s01508 | INT. ASTEROID MINING SKIFF "TALLOW-4" - COCKPIT - CONTINUOUS
Detected names (may be incomplete or contain aliases): TAMARA OKONKWO-HESS, PILOT
* 1 A ¶ A cramped steel bubble, instrument lights glowing amber.
* 2 A Beyond the canopy, a tumbling field of black rock, each boulder glinting where the sun hits an ore seam.
* 3 A A coffee bulb floats beside a headrest, trembling.
4 A ¶ A lone figure in a patched flight suit.
5 A TAMARA OKONKWO-HESS (40s, shaved head, calm).
6 A She pilots with one hand, adjusts a thruster dial with the other, and scans the radar, with her boot against the bulkhead for balance and her eyes tracking three rocks at once.
* 7 A ¶ A beep.
* 8 A A proximity warning.
9 A She taps it away without looking.
10 D TAMARA: Easy, girl.
11 A ¶ She nudges the stick.
* 12 A The skiff drifts left, grazing a boulder that spins lazily past.
* 13 A ¶ The radio chirps.
* 14 A A thin voice, hers, recorded and looped, comes through the speaker.
15 D PILOT [V.O.] (recording): Tallow Four, Control. Say status. Say status.
16 A ¶ Tamara snorts and silences the loop with a flick of a switch.
17 D TAMARA: Status is lonely.
* 18 A ¶ Another beep.
* 19 A Another rock, the size of a house, looms ahead.
20 A She bites her lip, rolls the skiff, and slips through the gap with a hand's breadth to spare.
21 D PILOT [V.O.] (recording): Tallow Four, you are out of range. Return to course. Return to course.
22 D TAMARA (softly, to the canopy): There is no course.
23 A ¶ She switches the loop off for good.
* 24 A The cockpit is silent save for the hiss of air.
* 25 A Out ahead, the field opens, and the sun lights a long vein of silver in a distant rock.

### SCENE s01509 | INT. REQUISITIONED RAILWAY SIGNAL BOX - NIGHT
Detected names (may be incomplete or contain aliases): OBERLEUTNANT KASPAR WEIDENFELD-ABARA, PRIVATE DESMOND OKORO-HALVERSEN, ^KASPAR
* 1 A ¶ A narrow room of levers and dials, one dim lamp.
* 2 A Rain on the glass.
* 3 A Down the line, a ruined station smolders.
* 4 A A telegraph key sits silent on a shelf.
5 A ¶ OBERLEUTNANT KASPAR WEIDENFELD-ABARA (50s, frostbitten ear, an officer's greatcoat open) sits at a small table, writing a letter.
6 A Across the room, a captured soldier, PRIVATE DESMOND OKORO-HALVERSEN (20s, hands tied loose, a bandaged shoulder), watches.
7 A ¶ Kaspar writes.
8 A Desmond watches.
* 9 A A clock ticks.
10 D KASPAR: You may speak.
11 D DESMOND: I've nothing to say.
12 D KASPAR: Then you may be quiet.
13 A ¶ Kaspar continues writing.
* 14 A The pen scratches.
15 A Desmond looks at the lever frame.
16 D DESMOND: Are you writing home?
17 D KASPAR: I am.
18 D DESMOND: Does she know where you are?
19 D KASPAR: She knows I am cold.
20 A ¶ Desmond almost smiles.
21 A He catches himself.
22 D DESMOND: My mother would ask if I was eating.
23 D KASPAR: Are you?
24 D DESMOND: Not for two days.
25 A ¶ Kaspar sets down the pen.
26 A Reaches into his coat.
27 A Brings out a heel of black bread.
28 A Breaks it in half.
29 A Holds out one half.
30 A ¶ Desmond doesn't move.
31 D KASPAR [CONT'D]: It is not poisoned.
32 D DESMOND: I know.
33 D KASPAR: Then eat.
34 A ¶ Desmond leans forward.
35 A Takes it.
36 A Chews.
* 37 A Neither speaks.
* 38 A The rain softens.
39 D DESMOND: Thank you.
40 D KASPAR: It is only bread.
41 D DESMOND (quietly): It's not.
42 A ¶ Kaspar nods, once.
43 A He returns to his letter.
44 A After a moment he stops.
45 D KASPAR: What is your mother's name?
46 D DESMOND: Why?
47 D KASPAR: So I know who to write to.
48 D DESMOND: Don't write to her.
49 D ^KASPAR: Don't write to her.
50 A ¶ Both men stop.
* 51 A A long beat.
52 A Desmond drops his gaze.
53 A Kaspar folds the letter and puts it in his coat.
54 D DESMOND: It was Ruth.
55 D KASPAR: Ruth.
56 D DESMOND: Ruth Okoro.
57 A ¶ Kaspar says the name again, softly, to himself, and then gets up, crosses to the window, and watches the smoke on the horizon curl and fade.
58 D KASPAR: It is a good name.
59 D DESMOND: It was.
60 A ¶ Kaspar does not turn around.
* 61 A The clock ticks.
* 62 A The telegraph key, for the first time all night, begins to chatter.
63 A ¶ They both look at it.
64 A Neither moves.
65 D KASPAR: That will be the order.
66 D DESMOND: What order?
67 D KASPAR: The one that decides which of us goes home.
* 68 A ¶ The key chatters on.
69 A Kaspar picks up the receiver.
70 A Listens.
71 A His face is a closed door.
72 A ¶ He puts it down.
73 D KASPAR [CONT'D] (very quietly): It is over.
74 D DESMOND: What is?
75 D KASPAR: All of it.
76 A ¶ Desmond stares at him.
* 77 A Rain on the glass.
78 A Kaspar crosses the room and kneels in front of the young man.
79 A He takes a knife from his belt.
80 A Desmond flinches.
81 A Kaspar cuts the rope at his wrists.
82 D KASPAR [CONT'D]: Go and tell your mother.
83 A ¶ Desmond rubs his wrists.
84 A He doesn't move.
85 D DESMOND: And you?
86 D KASPAR: I will finish my letter.

### SCENE s01510 | EXT. ROOFTOP OF A DRAGON-SCALE TOWER, MOONLIT CLIFFTOP KINGDOM - NIGHT
Detected names (may be incomplete or contain aliases): GLOWING STAFF-BEARER, WREN OYELARAN-THORNE, SIR BRAM DELACROIX-ASANTE, HALFLING THIEF, PIPPA SUMNER-NWOSU, FOX-EARED BARD, JULIAN AKINTOLA-REYES, DWARVEN ENGINEER, GRUNHILDA KOWALSKI-BELL, GIRL, STARLIGHT
* 1 A ¶ Slate tiles glittering with frost.
* 2 A Chimneys leaking violet smoke.
* 3 A A gale from the sea.
4 A ¶ Six figures crouch behind a stone gargoyle.
5 A A GLOWING STAFF-BEARER in a hooded cloak (WREN OYELARAN-THORNE, wizard, 30s) holds a staff that hums.
6 A SIR BRAM DELACROIX-ASANTE (40s, dented armor) grips a sword.
7 A A HALFLING THIEF, PIPPA SUMNER-NWOSU (20s, tiny, fingerless gloves), clings to the gargoyle's ear.
8 A A FOX-EARED BARD, JULIAN AKINTOLA-REYES (30s, lute strapped to his back), quivers.
9 A An old DWARVEN ENGINEER, GRUNHILDA KOWALSKI-BELL (60s, goggles, a beard braided with gears), peers over the ridge.
10 A And a small, silent FIGURE in rags, who has said nothing for three days.
11 D WREN (to the group): On my signal. We cross the ridge, take the beacon, and we're out.
12 D SIR BRAM (to Pippa): You're sure the locks are open?
13 D PIPPA (muttering): Sure as sure can be.
14 D JULIAN (to himself): I am too pretty to die on a roof.
15 D GRUNHILDA (to the group): The wind will take the first one down. Hold your hats.
16 A ¶ The silent figure steps forward, lowers its hood, and lifts the beacon from the parapet as easily as picking an apple.
* 17 A The gale dies.
18 A Sir Brram drops his sword.
19 A Pippa slips from the gargoyle.
* 20 A Julian's lute strings snap in unison.
* 21 A Wren's staff goes dark.
22 A Grunhilda tilts her goggles up.
23 D GRUNHILDA [CONT'D]: That's not what I expected.
24 A ¶ The figure turns, and under the hood is a girl of ten, eyes full of stars.
25 D GIRL: It was always mine.
26 D WREN (slowly): Starlight. The lost heir.
27 D STARLIGHT: Call me home.

### SCENE s01511 | INT. OPEN-PLAN OFFICE, "SYNERGY SOLUTIONS" - MORNING
Detected names (may be incomplete or contain aliases): KEN, ADEBAYO-LINDQVIST, BEATRIX OKONKWO-PETROV, MANNY, TORRES-NGUYEN, ^MANNY
* 1 A ¶ Gray cubicles in rows.
* 2 A A motivational poster of a kayaker.
* 3 A A ficus dying politely.
* 4 A Overhead fluorescent tubes.
* 5 A Somewhere, a printer groans.
6 A ¶ KENNETH "KEN" ADEBAYO-LINDQVIST (50s, regional manager, short-sleeved dress shirt, a lanyard shaped like a lightning bolt) stands at the front of the room holding a laminated sign that reads: SYNERGY.
7 A Behind him sit his two lone employees.
8 A BEATRIX OKONKWO-PETROV (30s, headset around her neck) types without looking.
9 A EMMANUEL "MANNY" TORRES-NGUYEN (20s, hoodie, one earbud in) stares at nothing.
10 D KEN (to the room): Team! Good morning, team!
* 11 A ¶ No one answers.
12 A Ken reaches for the sign and smacks it against the whiteboard.
13 D KEN [CONT'D] (to himself): Ok. Quiet room.
14 D BEATRIX: We're two people, Ken.
15 D KEN: Two is a team.
16 D MANNY: Two is a couple.
17 D KEN: Manny!
18 D MANNY: Sorry.
19 D KEN: We have a very exciting update from corporate.
20 D BEATRIX: We're being acquired.
21 D BEATRIX: We're being closed.
22 D ^MANNY: We're being closed.
23 A ¶ Ken's smile locks into place.
24 A He lifts the sign.
25 D KEN: We are being realigned.
26 D BEATRIX: Into what?
27 D KEN: A hybrid model.
28 D MANNY: What's hybrid?
29 D KEN: Some of you will be here, and some of you will be... not.
30 D BEATRIX: Which some?
31 D KEN (to himself): Don't say it, Ken. Don't say it.
32 A ¶ He fumbles with the sign.
33 A Drops it.
34 A Bends to pick it up at the same moment that Beatrix leans down to help, and their foreheads collide.
35 A Manny rises to catch Ken's elbow and trips on the ficus.
36 A All three tumble to the carpet in a heap of sign, lanyard, and leaves.
* 37 A ¶ Silence.
* 38 A The printer groans.
39 D MANNY (from the floor): Does this count as team-building?
40 D KEN (also from the floor): It's a start.

### SCENE s01512 | INT. LEGAL AID OFFICE, FORMER DENTIST'S SUITE - EVENING
Detected names (may be incomplete or contain aliases): ATTORNEY OLIVIA OYELARAN-BRENNAN, PARALEGAL MARCO TRAN-ASHWORTH, CLIENT HAROLD BEAUMONT-ADEYEMI, INTERPRETER LUCIA FERREIRA-DAS
* 1 A ¶ A reception desk with a dental chair behind it, used as a client seat.
* 2 A Beige carpet.
* 3 A A dusty fish tank.
* 4 A Diplomas of a man who is no longer here.
5 A ¶ Four people around a conference table made of two card tables pushed together.
6 A ¶ ATTORNEY OLIVIA OYELARAN-BRENNAN (40s, cardigan, reading glasses on her head).
7 A PARALEGAL MARCO TRAN-ASHWORTH (20s, laptop).
8 A CLIENT HAROLD BEAUMONT-ADEYEMI (60s, an old coat, scarred hands).
9 A INTERPRETER LUCIA FERREIRA-DAS (50s, a notebook).
10 D OLIVIA: Mr. Beaumont-Adeyemi, I'd like to go through the eviction notice again.
11 D HAROLD: I've read it.
12 D OLIVIA: I know. But I'd like to hear what you think it says.
13 D HAROLD: It says I owe four months.
14 D OLIVIA: Do you?
15 D HAROLD: I paid in cash.
16 D MARCO: Do you have receipts?
17 D HAROLD: She wrote them by hand.
18 D OLIVIA: Who is "she"?
19 D HAROLD: Mrs. Okonkwo. The landlady.
20 D LUCIA (translating): La casera. Okonkwo.
21 D OLIVIA: Do you have copies?
22 D HAROLD: She keeps the originals. I keep the carbon.
23 D MARCO: Carbon copies?
24 D HAROLD: I'm sixty-three, young man.
25 D MARCO: I'm sorry.
26 D HAROLD: Don't be. They were the best thing she ever did for me.
27 D OLIVIA: Where are the carbons?
28 D HAROLD: In the freezer.
29 D OLIVIA: The freezer?
30 D HAROLD: That's where I keep the important things.
31 D LUCIA (to Olivia, aside): He means it.
32 D OLIVIA: Can you bring them tomorrow?
33 D HAROLD: Bring them? I'd have to defrost them.
34 D MARCO: That's allowed.
35 D HAROLD: Is it?
36 D OLIVIA: Mr. Beaumont-Adeyemi, you are going to win this case.
37 D HAROLD: You haven't seen the carbons.
38 D OLIVIA: I don't need to.
39 D HAROLD: Why not?
40 D OLIVIA: Because the notice names the wrong tenant.
41 A ¶ Harold blinks.
42 A Marco looks up.
43 A Lucia stops writing.
44 D HAROLD: What?
45 D OLIVIA: It says "Beaumont-Adeyemi, Harold J." Your middle initial is R.
46 D HAROLD: That's my brother's.
47 D OLIVIA: Then they're evicting your brother.
48 D HAROLD (slowly): He's been dead since 'ninety-four.
49 D OLIVIA: Then they're evicting a ghost.

### SCENE s01513 | EXT. FRONTIER LAUNDRY YARD - HIGH NOON
Detected names (may be incomplete or contain aliases): MARSHAL EZRA OKORO-BELL, WIDOW HEPZIBAH LINDQVIST-ASANTE, RANCHER BARNABY PRESCOTT-NGUYEN, SON, JEDEDIAH PRESCOTT-NGUYEN, TOBIAS ADEYEMI-HOLM
* 1 A ¶ Wet sheets snap on lines between cottonwood posts.
* 2 A Lye barrels.
* 3 A A wash-tub steams in the sun.
* 4 A Chickens scatter.
5 A ¶ Five people stand in a stiff circle in the yard.
6 A MARSHAL EZRA OKORO-BELL, tall, black hat, hand loose by his holster.
7 A WIDOW HEPZIBAH LINDQVIST-ASANTE, apron, sleeves rolled, a washboard in both fists.
8 A The RANCHER BARNABY PRESCOTT-NGUYEN, barrel chest, spurs ringing.
9 A His SON, young JEDEDIAH PRESCOTT-NGUYEN, thin, a pistol he doesn't know how to hold.
10 A And the preacher TOBIAS ADEYEMI-HOLM, a Bible in one hand and a sagging hat in the other.
11 A ¶ Marshal Ezra takes one step forward.
12 A Barnaby takes one step back.
13 A Hepzibah plants the washboard in the dirt like a flag.
14 A Jedediah's gun hand trembles, and the preacher raises his Bible as if to stop a bullet with it, while a sheet billows between them and the sun.
* 15 A ¶ No one speaks.
* 16 A A rooster crows.
* 17 A A bucket tips.
* 18 A Water spreads across the dust.
* 19 A ¶ The sheet drops.
20 A Behind it, the four stand exactly where they were.
21 A Only Hepzibah has moved: the washboard is now a few inches higher, and she has not blinked.
22 A ¶ Barnaby's eyes flick to Jedediah.
23 A The boy's gun slowly lowers.
24 A The Marshal lets out a very small breath.
25 A The preacher puts his hat back on.

### SCENE s01514 | INT. NEONATAL ICU - NIGHT
Detected names (may be incomplete or contain aliases): THEODORA ASHWORTH-OKORO, NURSE BEATRICE LINDQVIST-ADEYEMI
* 1 A ¶ Dim blue light.
* 2 A Monitors pulse.
* 3 A Incubators glow like small aquariums.
* 4 A A mobile of paper cranes turns slowly.
5 A ¶ DR. THEODORA ASHWORTH-OKORO (40s, scrubs, hair pinned with a pencil) stands at an incubator, scribbling on a chart.
6 A NURSE BEATRICE LINDQVIST-ADEYEMI (50s, soft shoes, a pen behind her ear) squats beside her, adjusting a monitor lead.
7 D THEODORA: His oxygen's dropping.
8 D BEATRICE: I see it.
9 D THEODORA: Turn the flow up.
10 A ¶ Beatrice reaches for the dial.
11 A Turns it.
* 12 A Nothing changes.
13 A She turns it again.
14 D BEATRICE: It's stuck.
15 D THEODORA: Move.
16 A ¶ She crouches, pushes the dial, finds the line kinked beneath the incubator.
17 A Straightens it.
* 18 A The monitor beeps higher.
19 D THEODORA [CONT'D] (exhaling): There.
20 D BEATRICE: You were fast.
21 D THEODORA: You were faster. If you hadn't called it...
22 D BEATRICE: Don't say it.
23 D THEODORA: I'm not going to.
24 A ¶ They stand over the incubator, watching the tiny chest rise.
25 D BEATRICE: She was a month early.
26 D THEODORA: She's strong.
27 D BEATRICE: She is.
28 A ¶ Beatrice's hand drifts to the incubator's edge.
29 A She rests a finger on the clear plastic.
30 D BEATRICE [CONT'D]: My daughter was this size once.
31 D THEODORA: How is she now?
32 D BEATRICE: Thirty. Never calls.
33 D THEODORA: She will.
34 D BEATRICE: Will she?
35 D THEODORA: When she has a baby of her own.
36 A ¶ Beatrice laughs, softly, then wipes her eyes.
37 A She straightens up.
38 A She picks up the chart and hands it to Theodora.
39 D BEATRICE: Doctor. You forgot to sign.
40 D THEODORA: I know.
41 A ¶ She takes the pen from behind Beatrice's ear, signs, and tucks it back.
* 42 A Behind them, the mobile of cranes turns slowly in the blue light.

### SCENE s01515 | INT. ROOFTOP HELIPAD, UNIVERSITY HOSPITAL - DAWN
Detected names (may be incomplete or contain aliases): IMANI OKAFOR-REYES, NURSE ALARIC BRIGHTWATER-LUU, TRANSPLANT COORDINATOR SERAPHINA KOWALSKI-ASANTE
* 1 A ¶ Wind whips the windsock.
* 2 A The city below is a quilt of pink and gray.
* 3 A A helicopter idles on the pad, rotors turning slow.
4 A ¶ Three staff stand by a wheeled cooler: DR. IMANI OKAFOR-REYES (40s, flight suit), NURSE ALARIC BRIGHTWATER-LUU (30s, backpack), and TRANSPLANT COORDINATOR SERAPHINA KOWALSKI-ASANTE (50s, headset).
* 5 A The cooler contains a donor heart.
6 D IMANI (to everyone): Okay. Last check. Cooler sealed? Ice good? Paperwork in?
7 D ALARIC: Sealed. Ice good. Paperwork in.
8 D SERAPHINA (into headset): Control, we are loaded. Requesting clearance.
9 D SERAPHINA [CONT'D] (to the others): Four minutes.
10 D IMANI (to herself): Four minutes. I can do four minutes.
* 11 A ¶ The rotors whine.
12 A Alaric lifts the cooler's handle, lowers it, lifts it again.
13 D ALARIC: Doctor, can I ask something?
14 D IMANI: Go.
15 D ALARIC: Is it supposed to feel this heavy?
16 D IMANI: Yes.
17 D ALARIC: Is it supposed to feel this light?
18 D IMANI: Also yes.
19 D SERAPHINA: Clearance in thirty.
20 D IMANI: Then let's go.
21 A ¶ She steps toward the helicopter.
22 A Alaric steps after her.
23 A Seraphina pulls off her headset, takes a breath, and walks to the pad's edge.
24 A She looks down at the waking city.
25 A Then, quietly, to the empty air:
26 D SERAPHINA [CONT'D] (to the donor): Thank you.
* 27 A ¶ The rotors speed up.
* 28 A The sun clears the buildings.
* 29 A And somewhere in the cooler, nothing moves at all.

### SCENE s01516 | INT. BASALT CAVERN OF THE MOON-WELL - NIGHT
Detected names (may be incomplete or contain aliases): PRINCESS LYSANDRA OYELOWO-VANE, MORGWYN ASHWORTH-ABARA, ^MORGWYN
* 1 A ¶ A vaulted cave.
* 2 A A pool of still, silver water at its center, lit from below.
* 3 A Stalactites drip in a slow rhythm.
* 4 A Runes glow faintly on the walls.
5 A ¶ PRINCESS LYSANDRA OYELOWO-VANE (20s, travel-worn gown, a sword at her hip) kneels at the pool's edge, cupping silver water in her hands.
6 A She lets it spill through her fingers.
7 D LYSANDRA (to herself): Tell me the way. Tell me the way home.
* 8 A ¶ The water ripples.
* 9 A A glimmer rises from the depths and shivers into a voice.
10 D MORGWYN [V.O.] (whispering): Seek the king's lost daughter.
11 D LYSANDRA: I am the king's lost daughter.
12 D MORGWYN [V.O.] (whispering): Then seek the one who kept you.
* 13 A ¶ A pebble clatters down the cave wall.
14 A Lysandra rises, sword half-drawn.
15 A From the shadows steps a woman in a hooded gray cloak.
16 A MORGWYN ASHWORTH-ABARA (50s, silver hair, a staff of white ash).
17 A She lowers her hood.
18 D MORGWYN: Hello, child.
19 D LYSANDRA: Morgwyn?
20 D MORGWYN: You've grown.
21 D LYSANDRA: You vanished.
22 D MORGWYN: I was told to.
23 D LYSANDRA: By whom?
24 D MORGWYN: By the king.
25 D LYSANDRA: He lied to us both.
26 D ^MORGWYN: He lied to us both.
27 A ¶ They stare at each other, startled by the echo.
* 28 A The silver water stills.
29 D LYSANDRA: Then who is she? The one who sits on my throne?
30 D MORGWYN: She is your sister.
31 D LYSANDRA: I have no sister.
32 D MORGWYN: You do now. And she is waiting.
33 A ¶ Lysandra sheathes her sword.
34 A She wipes her hand on her gown and steps toward Morgwyn, who lifts the staff and draws a circle in the air.
* 35 A The circle opens on a green meadow, full of light.

### SCENE s01517 | INT. VILLAGE SCHOOLHOUSE - AFTER HOURS - DUSK
Detected names (may be incomplete or contain aliases): HEADMISTRESS GWENDOLEN BEAUMONT-OKORO, ABEBE LINDQVIST-NWOSU, FATIMA KOWALSKI-ASANTE, BOY
* 1 A ¶ Rows of small desks.
* 2 A A globe with a dent in Africa.
* 3 A Chalk dust drifting through low gold light.
* 4 A A map of a country that no longer exists.
5 A ¶ Three adults sit at children's desks, knees too high, teacups on the writing slopes.
6 A ¶ HEADMISTRESS GWENDOLEN BEAUMONT-OKORO (60s, spectacles on a chain, a voice like a closing door) sits at the front.
7 A MR. ABEBE LINDQVIST-NWOSU (40s, the caretaker, a ring of keys), crammed behind a desk, drinks from a chipped mug.
8 A MRS. FATIMA KOWALSKI-ASANTE (30s, the only teacher left) rubs her temples.
9 D GWENDOLEN: The inspector arrives Monday.
10 D FATIMA: We know.
11 D GWENDOLEN: He will want to see the registers.
12 D ABEBE: They're in the cellar.
13 D GWENDOLEN: Why?
14 D ABEBE: Because of the flood.
15 D GWENDOLEN: Mr. Lindqvist-Nwosu, the flood was in April.
16 D ABEBE: They're still drying.
17 D FATIMA: They're mold, Abebe.
18 D ABEBE: Mold is a kind of record.
19 D GWENDOLEN: Mrs. Kowalski-Asante, what is the attendance?
20 D FATIMA: Eleven.
21 D GWENDOLEN: Out of?
22 D FATIMA: Sixty.
23 D GWENDOLEN: And the rest?
24 D FATIMA: Gone to the city.
25 D GWENDOLEN: All forty-nine?
26 D FATIMA: All of them. With their parents.
27 D GWENDOLEN: Then we have a school with eleven pupils, a caretaker, a teacher, and a headmistress.
28 D ABEBE: And a globe.
29 D GWENDOLEN: And a globe.
* 30 A ¶ A knock at the door.
31 A They freeze.
* 32 A Another knock, small and polite.
* 33 A ¶ The door opens.
34 A A BOY of nine, in oversized shoes, stands on the threshold with a lunch pail.
35 D BOY: Is this where school is?
36 A ¶ Gwendolen rises, slowly, and smooths her skirt.
37 D GWENDOLEN: It is.
38 D BOY: Am I late?
39 D GWENDOLEN: No. You are the twelfth.

### SCENE s01518 | INT. REGENCY MUSIC ROOM, HARTLEIGH PARK - AFTERNOON
Detected names (may be incomplete or contain aliases): LADY ARABELLA FOTHERINGHAY-ADEYEMI, DOWAGER LADY HESTER FOTHERINGHAY-OKORO, ELIAS THISTLEWOOD-BELL, MISS PHILOMENA CARRADINE-LUU, OSWIN PRATT-NWOSU, CALLER, HARCOURT
* 1 A ¶ A long room with a gleaming pianoforte, gilt chairs, and French windows open to a garden of clipped yews.
* 2 A Sunlight lays long stripes across the parquet.
* 3 A A clock chimes four.
* 4 A Lavender and beeswax.
5 A ¶ Six people form a tableau: LADY ARABELLA FOTHERINGHAY-ADEYEMI, thirty, in primrose muslin, seated at the instrument.
6 A Her mother, DOWAGER LADY HESTER FOTHERINGHAY-OKORO, sixty, rigid in a high-backed chair with a lorgnette.
7 A The curate MR. ELIAS THISTLEWOOD-BELL, twenty-five, turning pages.
8 A The cousin MISS PHILOMENA CARRADINE-LUU, nineteen, embroidering by the window.
9 A The butler MR. OSWIN PRATT-NWOSU, fifty, carrying a tray of tea.
10 A And a gentleman caller, standing in the doorway with his hat in his hands.
11 A ¶ Arabella plays a gentle air.
12 A The Dowager nods in time.
13 A Elias turns a page.
14 A Philomena stitches.
15 A Oswin sets down the tray.
16 A ¶ The caller clears his throat.
17 A Everyone turns.
18 D CALLER: Forgive the intrusion. I come with a letter for Lady Arabella.
19 D DOWAGER: From whom, sir?
20 D CALLER: From a man who was thought drowned.
21 A ¶ Arabella's hands stop.
* 22 A The instrument falls silent.
* 23 A The clock ticks.
24 A Oswin's cup rattles in its saucer.
25 D ARABELLA: His name, sir.
26 D CALLER (smiling): Captain Edmund Harcourt-Reyes.
27 A ¶ He bows.
28 A The Dowager's lorgnette clatters to the floor.
29 D DOWAGER: Edmund?
30 D HARCOURT: Alive, madam. And entirely at your service.
31 A ¶ Arabella rises.
* 32 A The garden breeze lifts the curtains.
33 A For a moment no one in the room breathes.

### SCENE s01519 | INT. LIGHTHOUSE-TURNED-WEDDING-VENUE, SEASIDE TERRACE - EVENING
Detected names (may be incomplete or contain aliases): ROSS, CLEM, AUNT ZENOBIA, ^ROSS, YUSUF, LENA, OLD MR. TIBERIUS
* 1 A ¶ A white tower on a cliff above a violet sea.
* 2 A A terrace strung with lights.
* 3 A A small dance floor.
* 4 A Folding chairs, half of them empty.
* 5 A A cake on a card table.
6 A ¶ Six wedding guests drift in the golden hour.
7 A ¶ CLEMENTINE "CLEM" OKONKWO-ASHBY.
8 A 30s.
9 A Maid of honor.
10 A Hair coming loose.
11 A ¶ ROSS MAKINDE-LINDQVIST.
12 A 30s.
13 A The best man.
14 A A slightly crooked tie.
15 A ¶ AUNT ZENOBIA ADEYEMI-HART.
16 A 60s.
17 A Sequins.
18 A Fierce.
19 A ¶ YUSUF ABARA-KOWALSKI.
20 A 40s.
21 A Photographer.
22 A A heavy camera.
23 A ¶ LENA PETRAKIS-NGUYEN.
24 A 20s.
25 A A catering waitress with a tray of champagne.
26 A ¶ OLD MR. TIBERIUS BRANDT-OSEI.
27 A 80s.
28 A The groom's grandfather.
29 A A cane.
30 A ¶ Clem watches the sea.
31 A Ross watches Clem.
32 D ROSS: You've been standing there for twenty minutes.
33 D CLEM: I'm thinking.
34 D ROSS: About what?
35 D CLEM: About the speech.
36 D ROSS: You wrote it.
37 D CLEM: That's the problem.
38 A ¶ She turns.
39 A He smiles.
40 A She does not.
41 D AUNT ZENOBIA: Children, the cake!
42 A ¶ Clem and Ross speak at the same time.
43 D CLEM: Not yet.
44 D ^ROSS: Not yet.
45 A ¶ They look at each other.
46 A A small, startled grin passes between them.
47 D YUSUF: Smile for me, you two.
48 A ¶ They don't.
49 A Yusuf lowers the camera.
50 D YUSUF [CONT'D]: Ah. That's the better shot.
51 D CLEM: Don't you dare print that.
52 D YUSUF: I wouldn't dream of it.
53 A ¶ Lena glides past with her tray.
54 A She offers a flute to Clem.
55 A Clem takes one.
56 A She offers one to Ross.
57 A Ross takes it, and with it, brushes Clem's fingers.
58 D LENA (murmuring): Careful. People are watching.
59 A ¶ Clem looks across the terrace, past the cake, to the sea.
60 A Ross lowers his eyes.
61 D OLD MR. TIBERIUS: Is it time?
62 D AUNT ZENOBIA: It's time, Tiberius.
63 A ¶ He taps his cane.
* 64 A A gong sounds from within the tower.
65 A Guests turn toward the stairs.
66 D ROSS: We should go in.
67 D CLEM: We should.
68 A ¶ Neither moves.
69 A Ross sets down his flute.
70 A Clem sets down hers.
* 71 A The gong sounds again.
72 D ROSS: Clem.
73 D CLEM: Don't.
74 D ROSS: I haven't said anything.
75 D CLEM: You were going to.
76 D ROSS: I was going to say your speech was good.
77 D CLEM: You haven't heard it.
78 D ROSS: I know you.
79 A ¶ She laughs.
* 80 A It is half a sob.
81 A He reaches for her hand.
82 A She lets him take it for exactly one heartbeat, then pulls free and walks toward the tower.
83 A ¶ He stays behind, alone at the rail, watching the violet sea.
84 A Lena returns and takes his empty flute.
85 D LENA: She'll come around.
86 D ROSS: She already did.

### SCENE s01520 | INT. SALT WAREHOUSE - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT ODALYS BRANTZ, VASKO, CORPORAL HIROSHI MAEDA
* 1 A ¶ Mountains of grey salt.
* 2 A Rafters.
* 3 A Dust in slanted light.
4 A ¶ SERGEANT ODALYS BRANTZ, 40s, cracked lips, rifle slung low, drags a wounded boy through the doorway.
5 A ¶ PVT.
6 A TEODOR "TEDDY" VASKO, 19, bleeding thigh, grips her collar.
7 A ¶ CORPORAL HIROSHI MAEDA, 30s, wire-thin, covers the door.
8 A Counts rounds.
9 A Counts again.
10 D BRANTZ: Down. Behind the big pile.
11 D VASKO: I can walk.
12 D BRANTZ: You can't.
13 D MAEDA (muttering): Eleven. Eleven. Eleven.
* 14 A ¶ Boots outside.
* 15 A Gravel.
* 16 A Stop.
17 A ¶ Brantz and Maeda freeze.
18 A Vasko stops breathing.
19 D BRANTZ (whisper, to Maeda): Window.
20 D MAEDA: Boarded.
21 D VASKO: Sarge, I hear--
22 D BRANTZ: Quiet.
23 D MAEDA: Sarge, they're at the--
24 D VASKO: They're at the back too.
25 D BRANTZ: Everyone shut up.
* 26 A ¶ A shadow crosses the slats.
* 27 A Gone.
28 D MAEDA (to himself): Breathe. Count. Breathe.
29 A ¶ Brantz slides a canteen to Vasko.
30 A He fumbles it.
* 31 A It clangs.
32 A ¶ All three flinch.
* 33 A ¶ A shout outside.
* 34 A Another.
* 35 A Running feet.
36 D BRANTZ (to all): Positions. Now.
37 A ¶ Vasko drags himself behind a salt drift.
38 A Maeda drops to one knee.
39 A Brantz climbs a crate.
40 D MAEDA: How many?
41 D BRANTZ: Enough.
42 D VASKO: Sarge, I can't feel my leg.
43 D BRANTZ: Then you can't feel it hurt. Good.
* 44 A ¶ The door shudders.
* 45 A A rifle butt splinters the wood.
46 A ¶ Maeda fires.
47 A Brantz fires.
* 48 A Salt sprays like snow.
49 D VASKO: I got one! I got--
50 D MAEDA: Down, Teddy!
51 D BRANTZ: Maeda, left!
* 52 A ¶ The door bursts.
* 53 A A grenade skitters across the floor.
54 A ¶ All three scatter.
55 A Brantz dives for Vasko.
56 A Maeda hurls himself at the grenade, kicks it back out the door.
* 57 A ¶ BOOM.
* 58 A Salt rains from the rafters.
* 59 A ¶ Silence.
* 60 A Ringing ears.
61 D MAEDA (coughing): Eleven. Ten.
62 A ¶ Brantz hauls Vasko up.
63 A Vasko grins, white with salt.
64 D VASKO: Still here.
65 D BRANTZ: Move.

### SCENE s01521 | INT. GREENHOUSE ON A DISUSED FERRY - EVENING
Detected names (may be incomplete or contain aliases): ISOLDE FAIRWEATHER-NKEMELU, DESMOND ACHTERBERG, GRETA, OYELARAN
* 1 A ¶ A car ferry long retired from its route, moored and rusting at a quiet estuary.
* 2 A Its vehicle deck has been roofed with glass and turned into a nursery of citrus trees in tubs.
* 3 A Lamps hum.
* 4 A The air is warm, bitter-sweet, and smells of leaf and engine oil.
5 A ¶ ISOLDE FAIRWEATHER-NKEMELU, 34, sleeves rolled, soil to the elbows, prunes a lemon tree with more force than the tree needs.
6 A Her wedding ring hangs on a string around her neck instead of her finger.
7 A ¶ Across the aisle, DESMOND ACHTERBERG, 36, in a good coat that does not belong among the tubs, holds a paper bag of pastries as if it were a summons.
8 A He has not put it down since he arrived.
9 A ¶ Between them, perched on an upturned crate and reading a seed catalogue she is not reading, sits MARGUERITE "GRETA" OYELARAN, 70, Isolde's landlady and the ferry's last pilot.
10 A ¶ Isolde snips a branch.
* 11 A It falls.
12 A Desmond watches it fall.
13 D DESMOND: You've moved the tangerines.
14 D ISOLDE: They wanted light.
15 D DESMOND: They used to be by the stairs.
16 D ISOLDE: Things shift.
17 D GRETA (turning a page): The lemons shifted too. Nobody asked them.
18 A ¶ Desmond sets the bag down on a workbench.
19 A Takes it up again.
20 D DESMOND: I brought the ones with the almond.
21 D ISOLDE: I don't eat those anymore.
22 D DESMOND: Since when?
23 D ISOLDE: Since a while.
24 D DESMOND: You loved those.
25 D ISOLDE: I loved a lot of things at the time.
26 D GRETA: There's a draught from the east vent. Someone should mind it.
27 A ¶ Neither of them moves toward the vent.
28 D DESMOND: The bank wrote to me about the account. They said you'd closed your half.
29 D ISOLDE: I did.
30 D DESMOND: You could have called.
31 D ISOLDE: I could have.
32 D DESMOND: I'd have said yes.
33 D ISOLDE: You'd have said yes to anything, that month.
34 D DESMOND: That's not fair.
35 D ISOLDE: It isn't a verdict. It's a date.
36 D GRETA: Margins are thin in citrus. People forget that.
37 D DESMOND: Greta, would you mind--
38 D GRETA: I would. I've a view of the water from here and I'm using it.
39 A ¶ Isolde almost smiles.
40 A Catches herself.
41 A Snips.
42 D DESMOND: Your mother sent a card. To the flat. I didn't know what to do with it.
43 D ISOLDE: Put it in the drawer.
44 D DESMOND: I did. I took it out again.
45 D ISOLDE: And?
46 D DESMOND: It's in my coat.
47 A ¶ He does not reach for it.
48 A His hand rests on the pocket.
49 D ISOLDE: Keep it.
50 D DESMOND: It's addressed to you.
51 D ISOLDE: Then it's mine to say who keeps it.
* 52 A ¶ Silence.
* 53 A A pump clicks on somewhere below decks.
* 54 A Water moves in the pipes.
55 D DESMOND: You've lost weight.
56 D ISOLDE: You've gained a coat.
57 D DESMOND: It was a gift.
58 D ISOLDE: From?
59 D DESMOND: Does it matter?
60 D ISOLDE: Not at all.
61 A ¶ She drops the shears into a tub.
* 62 A They ring against the rim.
63 A Both of them look at the sound.
64 D GRETA (to the catalogue): Eighty-one pounds for a Buddha's hand citron. Robbery.
65 D DESMOND: I'm not here about the account.
66 D ISOLDE: I know.
67 D DESMOND: I'm not here about the card.
68 D ISOLDE: I know that too.
69 D DESMOND: The lease on the flat is up in March. I wondered if you had a view.
70 D ISOLDE: On the flat.
71 D DESMOND: On the flat.
72 D ISOLDE (a long beat): The east vent really is open.
73 A ¶ She walks to it.
74 A Closes it.
75 A Stays there with her back to him, hand flat on the cold iron.
76 A ¶ They speak at once.
77 D DESMOND: I don't know how to be in a room with you.
78 D ISOLDE: I don't know how to be in a room without you.
* 79 A ¶ Nobody moves.
80 A Greta turns a page, slowly, and does not read it.
81 D GRETA: Well. That's the first honest weather of the evening.
82 A ¶ Desmond puts the pastry bag down for the last time.
83 A Walks the length of the aisle, stops one tub short of Isolde.
* 84 A A lemon hangs between them, green, not yet ready.
85 A ¶ He lifts it gently on his palm, as if weighing it.
86 A Lets it go.
87 D ISOLDE: It needs another month.
88 D DESMOND: Does it.
89 D ISOLDE: The ones in the light, perhaps three weeks.
90 A ¶ She turns.
91 A His coat is wet at the shoulder where the roof drips.
92 A She notices.
93 A Says nothing.
94 A Takes the string from around her neck, winds the ring once about her finger, and unwinds it again.
95 D DESMOND: Three weeks.
96 D ISOLDE: The flat can wait three weeks.
97 D GRETA (standing, folding the catalogue): I'll put the kettle on. Down in the wheelhouse. It will take me a good long while.
98 A ¶ She goes.
* 99 A Her footsteps ring on the iron stairs, slow, deliberate, deliberately loud.
100 A ¶ Desmond picks the almond pastry from the bag.
101 A Offers it.
102 A ¶ Isolde looks at it.
103 A Looks at him.
104 A Takes half.

### SCENE s01522 | INT. CORPORATE WELLNESS NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): PRIYA DESHMUKH-LOWE, WALLY, PRZYBYSZ, VP, SUNNIVA ABARA
* 1 A ¶ Six sleep pods.
* 2 A One occupied.
* 3 A Whale sounds on a loop.
4 A ¶ PRIYA DESHMUKH-LOWE, 30s, lanyard, laptop balanced on her knees inside the pod.
5 A Typing in the dark.
* 6 A ¶ The hatch hisses open.
7 A WALTER "WALLY" PRZYBYSZ, 50s, regional VP, leans in with a clipboard.
8 D WALLY: Priya. Nap quota's twenty minutes.
9 D PRIYA: This is a nap.
10 D WALLY: You're answering email.
11 D PRIYA: Napping with intent.
12 A ¶ Wally ticks a box.
13 A Writes.
14 A Frowns.
* 15 A ¶ Behind him, the door swings.
16 A DR. SUNNIVA ABARA, 40s, Chief Wellbeing Officer, crisp blazer, tablet like a shield.
17 D SUNNIVA: Walter. Is she charging overage?
18 D WALLY: She's... overachieving.
19 D SUNNIVA (to Priya): I need you rested for the layoff announcement.
20 A ¶ Priya's typing stops.
21 A Wally's pen stops.
* 22 A The whales go on.
23 D PRIYA: When?
24 D SUNNIVA: After your nap.
25 A ¶ Priya closes the laptop.
26 A Smiles.
27 A Lies back, hands folded like a corpse.
28 D WALLY (whisper to Sunniva): She knows.
29 D SUNNIVA: She knows nothing.
30 A ¶ Priya snores.
31 A Loudly.
32 A Fakely.
33 A ¶ Wally sweats.
34 A Sunniva checks her watch.
* 35 A The whales sing.

### SCENE s01523 | INT. DRAINED PUBLIC SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): CAZ, REYES-MORROW, LUDDY, KOVAC, TOMAS
* 1 A ¶ Empty deep end.
* 2 A Cracked blue tiles.
* 3 A A single work light on a stand.
* 4 A Rain taps the skylights.
5 A ¶ CASPIAN "CAZ" REYES-MORROW, 40s, rumpled suit, sits on the pool ladder, briefcase on his lap.
6 A Waiting.
* 7 A ¶ Footsteps echo above.
8 A A woman descends the shallow-end stairs, hands visible.
9 A ¶ LUDMILA "LUDDY" KOVAC, 30s, leather jacket, calm to the point of insult.
10 D LUDDY: Caz.
11 D CAZ: Luddy. You're early.
12 D LUDDY: You're sweating.
13 D CAZ: It's a pool. Humidity.
14 D LUDDY: It's empty.
15 A ¶ She tilts her head at the briefcase.
16 A He tightens his grip.
17 D LUDDY [CONT'D]: Where's Tomas?
18 D CAZ: Parking.
19 D LUDDY: Tomas doesn't drive.
* 20 A ¶ A beat.
* 21 A The rain gets louder.
* 22 A Somewhere a pipe knocks.
23 D CAZ: He learned.
24 D LUDDY: Caz.
25 D CAZ: Luddy, don't.
26 A ¶ She walks the slope of the pool floor, slow, boots squeaking on old algae.
27 A Caz stands, the ladder clanking, and sets the briefcase between them on the tile.
28 A He steps back.
29 A She does not step forward.
30 A Above, a shadow slides across the skylight and is gone, and Caz looks up while Luddy looks at him.
31 D LUDDY [CONT'D]: That's not Tomas.
32 D CAZ: It's the wind.
33 D LUDDY: It's Dutch Maren. I can smell the cigarettes.
34 D CAZ: Luddy, I had no choice.
35 D LUDDY: Everyone says that at the end.
* 36 A ¶ A metal door bangs open above.
* 37 A Heavy steps.
* 38 A A voice, thick and amused, rolls down the tiles.
39 D TOMAS [O.S.]: Caz, my friend. You were supposed to be quiet.
40 A ¶ Caz drops.
41 A Luddy draws a pistol from her jacket, spins, fires at the light stand.
* 42 A Glass bursts.
* 43 A Darkness, except the faint blue of the skylights.
44 A Caz crawls behind the ladder, hugging the briefcase, while Luddy slides down the wall of the deep end and Tomas' boots clatter on the steps, unhurried, a man descending to a party.
45 D TOMAS [O.S., CONT'D]: Luddy. You always did love a dramatic entrance.
46 D LUDDY (whisper): Caz, open the case.
47 D CAZ: There's nothing in it.
48 D LUDDY: What?
49 D CAZ: There was never anything in it!
50 A ¶ Tomas laughs in the dark.
* 51 A A lighter flicks.
52 A A small flame shows his face at the lip of the pool, smiling.

### SCENE s01524 | INT. TAXIDERMY SHOP - DAY
Detected names (may be incomplete or contain aliases): BARNEY, QUIGLEY, NADIA FONTAINE-OKAFOR
* 1 A ¶ Glass eyes everywhere.
* 2 A A badger in a tutu.
* 3 A A moose wearing sunglasses.
4 A ¶ BARNABY "BARNEY" QUIGLEY, 40s, apron, tweezers, is mid-surgery on a pheasant.
* 5 A ¶ The bell jingles.
6 A In steps NADIA FONTAINE-OKAFOR, 30s, in a black dress and veil, holding a shoebox.
7 D NADIA: Barney.
8 D BARNEY: Nadia. Hey. Sorry. Don't touch the badger.
9 D NADIA: I need Mr. Biscuit preserved.
10 D BARNEY: Mr. Biscuit.
11 D NADIA: My hamster.
12 D BARNEY: Oh. Oh no.
13 D NADIA: Don't "oh no" me. I paid eleven dollars to a priest.
14 D BARNEY: Hamsters are tiny. The skin's like tissue. It's basically origami.
15 D NADIA: Then fold him.
16 A ¶ She puts the shoebox on the counter.
17 A Opens it.
18 A They both lean in.
19 D BARNEY: He looks peaceful.
20 D NADIA: He looks stuffed already.
21 D BARNEY: That's rigor, Nadia.
22 D NADIA: Don't say rigor in front of him.
23 D BARNEY: Okay. Okay. Pose?
24 D NADIA: Running on the wheel.
25 D BARNEY: I don't have a wheel.
26 D NADIA: You have a moose in sunglasses, Barney. Find a wheel.
27 D BARNEY: That moose is a commissioned work.
28 D NADIA: By whom?
29 D BARNEY: A very rich man named Gus.
30 D NADIA: Is Gus alive?
31 D BARNEY: Barely. Moose, though. Moose is forever.
32 A ¶ Nadia picks up the tweezers.
33 A Aims them at Barney like a tiny sword.
34 D NADIA: Wheel. Hamster. Today.
35 D BARNEY: Nadia, it's a three-week turnaround.
36 D NADIA: Barney, he's thawing.
37 D BARNEY (grabbing the box): Right. Wheel. Found one.
38 A ¶ He sprints to the back.
* 39 A Crash.
* 40 A Squeak.
* 41 A A rubber duck rolls out.
42 D NADIA (calling): That's a duck!
43 D BARNEY [O.S.]: It's a start!

### SCENE s01525 | INT. NIGHT FERRY CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): MAN, LINDQVIST, DECKHAND KOFI ASANTE, HENRIK
* 1 A ¶ Cars parked in rows.
* 2 A Engine drone.
* 3 A Fluorescent tubes flicker.
* 4 A Salt wind slaps through the half-open bow.
5 A ¶ A MAN in a grey raincoat sits alone in a dented Volvo, engine off.
6 A Hands on the wheel.
7 A Watching the mirror.
8 A ¶ A woman walks the aisle between cars.
9 A Torch in hand.
10 A Ferry uniform.
11 A Her badge reads P. LINDQVIST.
12 A ¶ She raps the glass.
13 A ¶ The Man lowers the window two inches.
14 D LINDQVIST: Sir. Passengers must leave the deck during crossing.
15 D MAN: I'm fine here.
16 D LINDQVIST: It's a rule.
17 D MAN: I'm unwell. I'd rather not climb the stairs.
18 A ¶ She studies him.
* 19 A Torch beam on his hands.
* 20 A On the wet hem of the coat.
21 D LINDQVIST: You're soaked, sir.
22 D MAN: Seasick.
23 D LINDQVIST: We haven't left the pier.
24 A ¶ The Man says nothing.
25 A ¶ A third figure steps from behind a pickup, thirty feet back.
26 A A young deckhand, cap pulled low.
27 A ¶ DECKHAND KOFI ASANTE, 20s, sees them.
28 A Stops.
29 D KOFI: Pia? Everything okay?
30 D LINDQVIST: Kofi. Stay there.
31 D KOFI: Who's he?
32 D LINDQVIST: I'm finding out.
33 A ¶ The Man opens his door slowly.
34 A Steps out.
* 35 A Rain on the deck.
36 A He holds his palms up.
37 D MAN: I'm not armed.
38 D LINDQVIST: Nobody said you were.
39 D MAN: Nobody had to.
40 A ¶ Kofi edges closer, hand on a pry bar at his belt.
41 D KOFI: Pia, his boot. There's blood.
42 A ¶ Lindqvist looks down.
* 43 A A dark smear at the heel.
44 D LINDQVIST: Sir. Whose is that?
45 D MAN: Mine.
46 D LINDQVIST: Show me where you're hurt.
47 D MAN: I'm not.
48 D KOFI: Then it's not yours.
* 49 A ¶ A long pause.
50 A The Man exhales.
51 A Shoulders drop.
52 D MAN: Her name was Annelie.
53 D LINDQVIST: Annelie who?
54 D MAN: My sister.
55 D KOFI: Where is she?
56 D MAN: At the terminal. In the lockers.
57 A ¶ Lindqvist's torch wavers.
58 A Kofi swears under his breath.
59 D LINDQVIST (into her radio): Bridge, this is Lindqvist. Hold the ramp. Call the harbour police.
* 60 A ¶ The radio hisses.
61 A Lindqvist presses the key again.
62 D LINDQVIST: Hold the ramp. Now.
63 A ¶ The Man sits down on the wet deck beside his car.
64 A Folds his hands in his lap.
65 D MAN: I'm Henrik. Henrik Bjornsson. You'll want that for your report.
66 D LINDQVIST: Stay where you are, Mr. Bjornsson.
67 D HENRIK: I'm not going anywhere. I couldn't if I tried.
68 A ¶ Kofi lowers the pry bar.
69 A Lindqvist keeps the torch on Henrik's face, steady.
70 D LINDQVIST: Kofi. Blanket from the lifeboat store.
71 D KOFI: Pia, he--
72 D LINDQVIST: He's cold, Kofi. Get the blanket.
73 A ¶ Kofi runs.
* 74 A His steps ring down the deck.
75 D HENRIK (quietly): She'd have liked the crossing.
76 A ¶ Lindqvist says nothing.
* 77 A The engines catch, a long low shudder through the steel.
* 78 A The ramp groans, halts, and holds.
79 D HENRIK [CONT'D]: Is it always this loud?
80 D LINDQVIST: You get used to it.
81 D HENRIK: I don't think I will.
* 82 A ¶ Blue lights bloom against the bow doors.
* 83 A Rain slants through them.
84 A ¶ Lindqvist crouches, torch lowered.
85 A Henrik looks up at her, face wet and open, nothing left in it to hide.
86 D KOFI [O.S.] (running back): I've got it! I've got the blanket!
87 A ¶ He skids in, drapes it around Henrik's shoulders.
88 A Henrik pulls it tight.
89 D HENRIK: Thank you.
90 D KOFI (stiff): Yeah.
* 91 A ¶ Footsteps on the ramp.
* 92 A Many.
93 A Lindqvist stands.
94 D LINDQVIST: Here we go.
95 A ¶ She steps aside.
96 A The police come into the light.

### SCENE s01526 | INT. COMMUNITY LAUNDROMAT-TURNED-CO-WORKING SPACE - DAY
Detected names (may be incomplete or contain aliases): GREG, ABERNATHY-LIU, TAMSIN HOLLOWAY, OSWALDO PINTO, FATIMA AL-RASHID, KEN, BOATENG, ROSALIND MCCREADY
* 1 A ¶ Washers and dryers still line the walls, now labeled "Focus Pods."
* 2 A Beanbags sit on folding tables.
* 3 A A neon sign reads: SYNERGY SPIN.
* 4 A ¶ At a long table, a quarterly planning meeting is underway.
5 A ¶ GREGORY "GREG" ABERNATHY-LIU, 40s, founder, pacing in a gilet.
6 A He holds a clicker connected to nothing.
7 A ¶ TAMSIN HOLLOWAY, 30s, head of People, takes minutes on a laptop with a sticker reading "Be Kind."
8 A ¶ OSWALDO PINTO, 50s, finance, eats an apple methodically and watches the spreadsheet on the wall.
9 A ¶ FATIMA AL-RASHID, 20s, junior designer, sits very still on a beanbag, holding a mug in both hands.
10 A ¶ KENNETH "KEN" BOATENG, 30s, engineer, has headphones around his neck and a drying rack sock stuck to his sleeve.
11 A ¶ At the end of the table, ROSALIND MCCREADY, 60s, investor, in a trench coat, listens without taking it off.
12 D GREG: So, Q3. Big wins. Big, big wins.
13 D OSWALDO: We lost forty thousand dollars.
14 D GREG: In a growth mindset, that's investment.
15 D OSWALDO: In a finance mindset, that's forty thousand dollars.
16 D TAMSIN: Let's hold space for both framings.
17 D KEN: Can we hold space for the dryer? It's been beeping for ten minutes.
18 D FATIMA: It's mine. It has my lunch in it.
19 D KEN: Why is your lunch in a dryer?
20 D FATIMA: It's the only thing that gets warm.
21 A ¶ Rosalind sets down her pen.
22 D ROSALIND: Greg, what is the burn rate?
23 D GREG: Healthy.
24 D OSWALDO: Fourteen thousand a month.
25 D ROSALIND: And revenue?
26 D GREG: We're pre-revenue.
27 D OSWALDO: We're pre-everything.
28 D TAMSIN: Oswaldo, let's try to stay solutions-oriented.
29 D OSWALDO: The solution is a loan officer.
30 A ¶ Greg clicks the clicker.
31 A Nothing happens.
32 A He clicks harder.
33 D GREG: This is our roadmap.
* 34 A ¶ The wall flashes.
* 35 A A slide: a drawing of a washing machine with a rocket strapped to it.
36 D FATIMA (quietly): I drew that at two a.m.
37 D ROSALIND: It is... bold.
38 D GREG: Thank you, Rosalind.
39 D ROSALIND: That was not praise.
40 D KEN: Does the rocket actually work?
41 D GREG: It's a metaphor.
42 D KEN: For what?
43 D GREG: For ascent.
44 D OSWALDO: Of the debt.
45 A ¶ Tamsin types it down.
46 A Deletes it.
47 A Types it again.
48 D TAMSIN: I'm recording "alignment challenges."
49 D ROSALIND: Record that I'm leaving in five minutes.
50 D GREG: We haven't done the offsite.
51 D ROSALIND: Where is the offsite?
52 D GREG: Also here. Tomorrow. With cake.
53 D FATIMA: Is the cake in the dryer?
54 A ¶ Ken laughs.
55 A Stops.
56 A Looks at Greg, who is not laughing.
57 D KEN: Sorry.
58 D GREG: We don't apologise for joy at Synergy Spin.
59 D OSWALDO (low): We apologise for invoices.
60 A ¶ The dryer buzzes for the last time.
61 A Fatima rises, opens its round door, and pulls out a steaming paper bag.
62 A She sets it on the table and unfolds it carefully.
* 63 A ¶ A sandwich.
* 64 A Slightly flattened.
* 65 A Warm.
66 A ¶ She offers half to Rosalind.
67 A ¶ Rosalind studies it.
68 A Takes it.
69 D ROSALIND: This is the best thing I have seen all quarter.
70 D GREG (stricken): We have a roadmap.
71 D ROSALIND: You have a sandwich.
72 A ¶ She bites into it.
73 A Greg turns back to the wall, clicker raised, and the rocket flashes on, and on.
74 D TAMSIN: Moving to Q4.

### SCENE s01527 | INT. FUNERAL PARLOUR VIEWING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): GUS, MARLOWE-DIAZ, DETECTIVE CORDELIA VANTERPOOL
* 1 A ¶ A narrow room of lilac carpet and low lamps.
* 2 A A closed casket on trestles, a spray of white carnations beside it.
* 3 A The only sound is the refrigeration unit breathing behind the wall.
4 A ¶ AUGUSTINE "GUS" MARLOWE-DIAZ, 50s, in a tidy black suit, sits in the front row with his hat on his knee.
5 A He has the steady manner of a man long used to waiting rooms.
6 A His shoes are polished to a high gloss.
* 7 A ¶ The door opens softly.
8 A DETECTIVE CORDELIA VANTERPOOL, 40s, in a damp mackintosh, enters without a sound.
9 A She stands at the back and does not sit.
10 D CORDELIA: Mr. Marlowe-Diaz.
11 D GUS: Detective. You came.
12 D CORDELIA: You asked me to.
13 D GUS: I did.
14 A ¶ She walks the aisle.
* 15 A Her heels leave faint prints in the nap of the carpet.
16 A She stops beside the casket.
17 A Rests two fingers on its lid, then removes them.
18 D CORDELIA: You've kept the lamp low.
19 D GUS: She disliked bright rooms.
20 D CORDELIA: So I've heard.
21 D GUS: Tea? The undertaker left a flask. It's still warm.
22 D CORDELIA: No. Thank you.
23 D GUS: It's good tea.
24 A ¶ He pours himself one anyway.
25 A Hands steady.
26 A Offers her the second cup with a small, courteous tilt of the head.
27 A She takes it, finally, and holds it without drinking.
28 D CORDELIA: You told the desk sergeant you had something to say about the night she died.
29 D GUS: I did. I do. Only I'd like to say it sitting down, and I'd like you to sit too.
30 A ¶ She hesitates, then lowers herself into the chair beside him.
* 31 A The cup rattles faintly on its saucer.
32 A He notes it, and says nothing.
33 D GUS [CONT'D]: Forty years, I managed that warehouse. Never late. Never ill.
34 D CORDELIA: So the file says.
35 D GUS: And she managed me. In her way.
36 D CORDELIA: In her way.
37 D GUS: She kept the accounts. She kept the house. She kept a good many other things besides.
38 A ¶ Cordelia turns the cup in its saucer.
* 39 A The tea has gone still.
40 D CORDELIA: Mr. Marlowe-Diaz, the coroner's report mentions bruising on the wrists.
41 D GUS: Does it?
42 D CORDELIA: It does.
43 D GUS: How unfortunate.
44 A ¶ He sips.
45 A Sets the cup down with great care, in exactly the ring it left on the saucer before.
* 46 A The refrigeration unit cycles off.
* 47 A The room is suddenly, ferociously quiet.
48 D CORDELIA: The nephew told us she had been afraid.
49 D GUS: Marcus talks a great deal.
50 D CORDELIA: Of whom was she afraid?
51 D GUS: Of the dark, mostly. The dark and the stairs.
52 D CORDELIA: The stairs.
53 D GUS: Steep. Narrow. I told her a hundred times.
54 A ¶ Cordelia sets down her cup.
55 A Reaches into her mackintosh.
56 A Draws out a brown paper evidence bag, and places it on the empty chair on her other side.
57 D GUS [CONT'D] (not looking at it): You'll want to be careful. That's an old house. Things come apart.
58 D CORDELIA: This came apart on a Tuesday.
59 D GUS: Tuesday.
60 D CORDELIA: You told us you were at the lodge until midnight.
61 D GUS: So I was.
62 D CORDELIA: The lodge was closed for repairs. The caretaker has a sign-in book. She signed in alone.
63 A ¶ For the first time, Gus turns his head.
64 A The courteous mask does not slip.
65 A It simply stops being worn.
66 D GUS: Cordelia. May I call you Cordelia?
67 D CORDELIA: No.
68 D GUS: She did not suffer.
69 D CORDELIA: That is not for you to say.
70 D GUS (softly): No. I suppose it isn't.
71 A ¶ He rises, brushes his trousers, and settles his hat on his head.
72 A Holds out both wrists, side by side, palms up, as if waiting for a bracelet or a blessing.
73 A ¶ Cordelia takes the evidence bag from the chair.
74 A Does not open it.
75 A Does not need to.
76 D CORDELIA: Sit down, Mr. Marlowe-Diaz.
77 D GUS: I would rather stand.
78 D CORDELIA: Then stand.
* 79 A ¶ Outside, a car door closes.
* 80 A Footsteps on gravel.
* 81 A The lamp flickers once, and steadies.

### SCENE s01528 | INT. LIGHTHOUSE KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): POLLY, ADEYEMI-CROSS, JUNIOR, RADIO
* 1 A ¶ A storm shakes the shutters.
* 2 A A radio crackles on the table beside a cold stew.
3 A ¶ LEOPOLDINA "POLLY" ADEYEMI-CROSS, 60s, grips the edge of the sink.
4 A She is looking at nothing.
5 A ¶ Her son JUNIOR, 30s, stands in the doorway with a duffel bag, rain on his shoulders.
6 A He doesn't take another step.
7 D RADIO [V.O.]: Coast guard to Beacon Nine. Polly, do you copy? Over.
8 A ¶ She doesn't answer.
9 A He crosses to the table and lifts the handset.
10 D JUNIOR: It's Junior. She's here.
11 D RADIO [V.O.]: Junior. The Marguerite went down off the point. Your father's boat. We have two survivors. Not him yet. Over.
12 A ¶ He puts it down.
13 A Doesn't release it.
14 A She turns.
15 D POLLY: Say it.
16 D JUNIOR: Mama.
17 D POLLY: Say what they said.
18 D JUNIOR: Not him yet.
19 A ¶ She hurls the stew bowl at the wall.
* 20 A It shatters.
21 A He flinches but does not move.
22 A ¶ She slumps into a chair, breathing hard.
23 A He kneels before her.
24 A Takes her hands.
25 D POLLY: Don't you dare.
26 D JUNIOR: Mama, I'm here.
27 D POLLY (small): Light the lamp.
28 A ¶ He nods.
29 A Rises, crosses to the stairs.
30 A She watches him go up into the dark.

### SCENE s01529 | INT. BOWLING ALLEY LEAGUE NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): RUSSELL KOWALCZYK, DARLENE OSEI-WRIGHT, MARIANNE TOUSSAINT, BO
* 1 A ¶ Lane 7.
* 2 A Scoreboard flickering.
* 3 A Beer pitchers sweating.
* 4 A Pins crash somewhere behind.
5 A ¶ Four people at a table bolted to the floor: two couples who used to be friends.
6 A ¶ RUSSELL KOWALCZYK, 40s, wears a team shirt that reads "Pin Pals."
7 A He keeps score by hand.
8 A Pencil only.
9 A ¶ DARLENE OSEI-WRIGHT, 40s, his wife, nurses a ginger ale.
10 A She hasn't looked at the scoreboard.
11 A ¶ MARIANNE TOUSSAINT, 40s, sits very straight, purse in lap.
12 A She is waiting for something.
13 A ¶ BEAUFORT "BO" TOUSSAINT, 40s, her husband, lifts the ball from the return and weighs it.
14 D BO: Your frame, Russ.
15 D RUSSELL: Yep.
16 A ¶ He doesn't rise.
17 A Marianne glances at Darlene.
18 A Darlene studies the carpet.
19 D BO: Russ?
20 D RUSSELL: I'm thinking.
21 D DARLENE: He's always thinking when he's winning.
22 D RUSSELL: He's not winning.
23 D MARIANNE: Who isn't?
24 D RUSSELL: Nobody. Forget it.
* 25 A ¶ The ball clacks back down the return.
26 A Bo catches it.
27 A He holds it like a small planet.
28 D BO: Eleven pins left standing from the last. Somebody's got to knock them down.
29 A ¶ Marianne stands.
30 A Smooths her skirt.
31 D MARIANNE: I need air.
32 D DARLENE: I'll come.
33 D MARIANNE: No.
34 A ¶ Darlene sits.
35 A Russell's pencil taps the table.
* 36 A Tap.
* 37 A Tap.
* 38 A Tap.
39 D BO: That's a lot of noise for a quiet man.
40 D RUSSELL: That's a lot of talk for a man who never says anything.
41 D BO: Say what you mean.
42 D RUSSELL: I'll say it on the lane.
43 A ¶ He rises, takes the ball from Bo, and walks to the line.
44 A Bo follows two steps behind.
45 A Darlene half-stands.
46 A ¶ Russell throws.
* 47 A Pins explode.
* 48 A ¶ Strike.
49 A ¶ He turns.
50 A Bo's hand is already on his collar.
51 A Russell shoves him.
52 A Bo shoves back.
* 53 A The table rattles.
* 54 A Pitchers slide.
55 A Darlene grabs a glass and ends up with it in her fist, shaking.
56 D DARLENE: Stop it. Stop it!
57 A ¶ The two men freeze, chest to chest.
58 A Marianne appears in the doorway, coat on, keys in hand.
59 A She looks at all three.
* 60 A ¶ Nobody speaks.
* 61 A Beyond them, the pinsetter lowers its rack, and the ten pins stand back up.

### SCENE s01530_0 | INT. UNDERGROUND PARKING LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): NADEZHDA VOLKOVA-REYNOLDS
* 1 A ¶ Concrete pillars.
* 2 A Humming strip lights.
* 3 A One car left: a silver sedan with its trunk open.
4 A ¶ NADEZHDA VOLKOVA-REYNOLDS, 30s, trench coat, crouches by the rear wheel.
5 A A phone in her hand, held flat like a tray.
6 A Her breath fogs.
7 A ¶ She thumbs the screen.
* 8 A A voice memo plays.
* 9 A Her own voice, recorded earlier, calm and clipped.
10 D NADEZHDA [V.O.]: If you are hearing this, level four is clear. Listen carefully. Do not skip.
11 D NADEZHDA (to the phone): I'm not skipping.
12 D NADEZHDA [V.O.]: Check the trunk.
13 A ¶ She stands.
14 A Scans the pillars.
15 A Slowly.
16 A Crosses to the sedan and looks in.
17 A Her face tightens.
18 D NADEZHDA: Empty.
19 D NADEZHDA [V.O.]: Check again.
20 A ¶ She lifts the felt lining.
* 21 A Under it, a small black flash drive taped to the floor.
22 A She peels it free.
23 D NADEZHDA: Got it.
24 D NADEZHDA [V.O.]: Good. Now walk to the stairwell. Do not use the elevator.
25 A ¶ She stops.
26 A Looks at the elevator.
* 27 A Its numbers are climbing: 1.
* 28 A 2.
* 29 A 3.
30 D NADEZHDA: Why not the elevator?
31 D NADEZHDA [V.O.]: Because I know what I know, and you do not.
32 D NADEZHDA: That's not an answer.
33 D NADEZHDA [V.O.]: It is the only one I left you.
* 34 A ¶ The numbers climb.
* 35 A 4.
* 36 A A ping.
* 37 A The doors slide open on an empty car.
38 A ¶ She backs away, heels clicking on concrete.
* 39 A Footsteps start somewhere behind the pillars.
* 40 A More than one pair.
* 41 A Unhurried.
42 D NADEZHDA (whisper): They're here.
43 D NADEZHDA [V.O.]: Do not turn around.
44 A ¶ She freezes.
* 45 A A ceiling camera swivels, tracking her.
46 D NADEZHDA: I recorded this at two a.m. I was drunk.
47 D NADEZHDA [V.O.]: You were sober. You were terrified. Walk.
48 A ¶ She drops the phone.
49 A Stamps it into splinters.
50 A Sprints for the stairwell, shoulders the steel door, and it slams behind her.

### SCENE s01530_1 | INT. STAIRWELL - CONTINUOUS
Detected names (may be incomplete or contain aliases): NADEZHDA
* 1 A ¶ Bare concrete.
* 2 A A flight up, a flight down.
3 A She stops.
4 A Breathing hard.
5 A Listens.
* 6 A ¶ Below, a door opens.
* 7 A Above, a door opens.
8 D NADEZHDA: Okay. Okay. Think.
9 A ¶ She turns the flash drive over.
* 10 A A tiny label, handwritten, in her own script.
11 A She reads it.
12 A Her eyes widen.
13 D NADEZHDA [CONT'D]: No. No, no.
* 14 A ¶ Footsteps from both directions, converging.
15 A She backs against the wall and slides down until she sits, the drive clutched to her chest.
* 16 A ¶ A cracked air vent above the landing.
17 A She notices it.
18 A Stares.
19 D NADEZHDA [CONT'D]: Of course it's a vent.
20 A ¶ She climbs onto the rail.
21 A Tests the grille.
* 22 A It gives.
23 A She hauls herself up and in, scraping her coat, legs vanishing just as two pairs of boots reach the landing below.

### SCENE s01530_2 | INT. VENT SHAFT - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ Tight metal.
* 2 A Dust.
* 3 A Her breath loud in the tube.
4 A She crawls on elbows, the drive in her teeth.
* 5 A ¶ Far behind, voices echo, too muffled to parse.
6 A She keeps moving.
* 7 A ¶ Light ahead.
* 8 A A grille.
9 A She presses her face to it.

### SCENE s01530_3 | EXT. LOADING DOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): NADEZHDA
* 1 A ¶ Rain.
* 2 A A van idling, rear door ajar.
3 A ¶ She kicks the grille out.
* 4 A It clangs on the concrete below.
5 A She drops after it, rolls, comes up on one knee.
* 6 A ¶ The van is empty.
* 7 A On the passenger seat, a second phone, glowing.
* 8 A ¶ It rings.
9 A ¶ She stares at it.
10 A Rain runs off her chin.
11 A She steps forward and answers.
12 D NADEZHDA: Who is this?
13 D NADEZHDA [V.O.] (through the phone, her own voice): Someone who needed you to find the drive.
14 D NADEZHDA: That's my voice.
15 D NADEZHDA [V.O.]: Run.
* 16 A ¶ The line dies.
* 17 A Behind her the dock lights snap on, white and blinding.
18 A ¶ She raises the drive above her head.
19 D NADEZHDA [CONT'D] (shouting at the light): Then come and take it!
* 20 A ¶ Silence.
* 21 A The rain falls.
* 22 A The light holds.
