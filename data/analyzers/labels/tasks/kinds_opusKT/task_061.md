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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0061.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02059 | INT. HOUSEBOAT SALON - CANAL AMSTERDAM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR LEOPOLD VAN DER MEULEN-OSEI, MADAME CATHERINE ABERNATHY-DUPRE, TOBY, NGUYEN-HARTMANN, CLEMENTINE ODUYA-BRANDT, BRUNO ADELEKE-FISCHER, SISTER IMOGEN FAIRBANKS-TEMBO
* 1 A ¶ A narrow wooden cabin crammed with antique clocks.
* 2 A A potbellied stove.
* 3 A A low table with a half-eaten cheese board.
* 4 A Rain drums on the roof.
* 5 A Candles.
* 6 A Six people, one body in the corner under a tablecloth.
7 A ¶ INSPECTOR LEOPOLD VAN DER MEULEN-OSEI (50s, pipe, a fold of paper in his pocket) paces the length of the room.
8 A At the stove, MADAME CATHERINE ABERNATHY-DUPRE (60s, rings, silk robe) warms her hands.
9 A On the sofa, TOBIAS "TOBY" NGUYEN-HARTMANN (30s, in his socks, a glass of whiskey).
10 A Beside him, CLEMENTINE ODUYA-BRANDT (20s, long braids, a shoebox on her knees).
11 A In the armchair, BRUNO ADELEKE-FISCHER (50s, a sleeping cap pushed back).
12 A At the window, SISTER IMOGEN FAIRBANKS-TEMBO (40s, habit, rosary).
13 D LEOPOLD: Ladies and gentlemen, I would like silence.
14 D TOBY: You've had silence for an hour.
15 D BRUNO: You've had it and you've done nothing with it.
16 D LEOPOLD: I have been thinking.
17 D CATHERINE: We could hear you thinking. You hum.
18 D LEOPOLD (to the room): Everyone, please, remain where you are.
19 D CLEMENTINE: Why would anyone move?
20 D IMOGEN: There is a body, child.
21 D CLEMENTINE: I know there's a body, Sister.
22 D TOBY: Can we talk about the body?
23 D BRUNO: No.
24 D CATHERINE: Yes.
25 D LEOPOLD: Madame Abernathy-Dupre, you found him.
26 D CATHERINE: I did.
27 D LEOPOLD: And you screamed.
28 D CATHERINE: Of course I screamed.
29 D LEOPOLD: Mr. Ngu-- Mr. Nguyen-Hartmann, you ran in first.
30 D TOBY: I was in the kitchen.
31 D BRUNO: You were in the hallway.
32 D TOBY: I was walking through the hallway to the kitchen.
33 D CLEMENTINE: He had his shoes on.
34 D TOBY: So?
35 D CLEMENTINE: Now he's in his socks.
* 36 A ¶ Silence.
* 37 A The stove ticks.
* 38 A A clock chimes, then another, a few seconds out of step.
39 D LEOPOLD: Mr. Nguyen-Hartmann, where are your shoes?
40 D TOBY (low): By the door.
41 D LEOPOLD: Then why did you take them off?
42 D TOBY: Because they were wet.
43 D IMOGEN: Wet from what?
44 D TOBY: The deck. Rain.
45 D CATHERINE (to herself): The deck. The deck. Of course.
46 D LEOPOLD: Sister Imogen, you were at the window.
47 D IMOGEN: I was praying.
48 D LEOPOLD: For how long?
49 D IMOGEN: Until I heard the scream.
50 D LEOPOLD: And what did you see?
51 D IMOGEN: The canal.
52 D BRUNO: There's nothing to see on the canal at night.
53 D IMOGEN: There was a boat.
54 D LEOPOLD: What boat?
55 D IMOGEN: A small one. With one oar.
* 56 A ¶ The clocks chime again, all together, a ragged, solemn chord.
57 A Clementine opens her shoebox, lifts out a single wet shoe.
58 A Everyone stares at it.
59 D CLEMENTINE: It was on the deck. I found it.
60 D TOBY: That's not mine.
61 D CLEMENTINE: It's a man's. Size eleven.
62 D BRUNO (sitting up): That's mine.
63 D LEOPOLD: Mr. Adeleke-Fischer.
64 D BRUNO: It's mine. I lost it last week.
65 D LEOPOLD: You said you were asleep.
66 D BRUNO: I was asleep.
67 D LEOPOLD: In one shoe.
68 D BRUNO: It's a very old habit.
* 69 A ¶ Nobody laughs.
* 70 A The rain slows.
71 D LEOPOLD: Everyone, please, stay calm.
72 D CATHERINE (quietly): I am very calm.
73 A ¶ She picks up the poker from the stove and holds it loosely, like a conductor's baton.
74 D LEOPOLD: Madame, put that down.
75 D CATHERINE: Of course.
76 A ¶ She doesn't.

### SCENE s02060 | INT. GRAND HOTEL - PENTHOUSE SUITE - NIGHT
Detected names (may be incomplete or contain aliases): GENEVIEVE MONTAGUE-OSEI, MASKED MAN, LUCIEN FAIRWEATHER-ODUYA
* 1 A ¶ Gilded mirrors.
* 2 A A white piano.
* 3 A A cocktail cabinet inlaid with mother-of-pearl.
* 4 A French windows open on a balcony, and beyond it a city of lights.
5 A ¶ A figure in a tuxedo and a domino mask kneels at a wall safe behind a painting, working a stethoscope against its steel face.
6 A He is lean, gloved, silent.
* 7 A ¶ The doorknob turns.
8 A He freezes.
* 9 A The painting drops back over the safe.
10 A He slides behind a velvet curtain.
11 A ¶ A woman enters: GENEVIEVE MONTAGUE-OSEI (50s, evening gown, a glass of champagne in one hand).
12 A She flicks on a lamp.
13 A She sets down her glass on the piano.
14 A She crosses to the painting.
15 A Adjusts it by a half inch.
16 D GENEVIEVE (without turning): You may come out. I can smell the rubber.
* 17 A ¶ The curtain stirs.
18 A The MASKED MAN steps out, hands raised, glove squeaking.
19 D MASKED MAN: Madame.
20 D GENEVIEVE: Your name.
21 D MASKED MAN: That would be unwise.
22 D GENEVIEVE: Then I shall call you Monsieur Curtain.
23 D MASKED MAN: Charming.
24 A ¶ She lifts the champagne, sips, studies him over the rim.
25 D GENEVIEVE: You are very good. The alarm is quiet.
26 D MASKED MAN: I had help.
27 D GENEVIEVE: The bellhop?
28 D MASKED MAN: The night manager.
29 D GENEVIEVE: Ah. Lucien. He has always been lazy.
30 A ¶ She walks around him in a slow circle.
31 A He turns to follow.
32 A They halt, face to face, close enough to touch.
33 D GENEVIEVE [CONT'D]: What is it you want?
34 D MASKED MAN: Nothing that belongs to you.
35 D GENEVIEVE: Everything in this room belongs to me.
36 D MASKED MAN: Not the diamonds.
37 D GENEVIEVE (smiling): Ah. You know about the diamonds.
38 D MASKED MAN: I know they're not real.
39 A ¶ The smile fades.
* 40 A A beat.
41 A Then he lunges for the painting; she smashes her glass against the piano and slashes at him with the stem.
42 A He ducks, spins, wrenches the painting down.
43 A She grabs his arm.
44 A They stagger, crash into the cocktail cabinet, and bottles shatter.
45 A ¶ He gets the painting.
46 A She gets the mask.
* 47 A It tears away.
48 A Beneath it: the face of a man in his sixties, lined, gentle.
49 A LUCIEN FAIRWEATHER-ODUYA, the night manager, panting.
50 D GENEVIEVE [CONT'D] (whispering): Lucien.
51 D LUCIEN: Genevieve.
52 D GENEVIEVE: You said you would never.
53 D LUCIEN: You said the diamonds were real.
54 A ¶ They stand, ruined, among the glass.

### SCENE s02061 | INT. LUNAR DOME GREENHOUSE - STATION NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ZARA ODUYA-LINDQVIST, BARNABY TREMAINE-OKORO, SOLOMON ADEBAYO-KRAUSE, WOMAN
* 1 A ¶ A glass cathedral of mist.
* 2 A Rows of dwarf wheat under pale blue lights.
* 3 A Beyond the dome's curve, a black sky and a blue Earth, small and unconcerned.
4 A ¶ CAPTAIN ZARA ODUYA-LINDQVIST (50s, close-cropped silver hair, a station jacket worn through at the elbows) stands at a central console, one hand flat on the glass, watching a tiny green number tick down.
5 A Her engineer, BARNABY TREMAINE-OKORO (40s, bearded, a spanner in his belt), wrestles with an access panel.
6 A ¶ At a bench, a young botanist, SOLOMON ADEBAYO-KRAUSE (20s, wire-rimmed glasses, a tablet in each hand), sorts seed trays.
7 D ZARA (to nobody): Eleven minutes.
8 D BARNABY: It's eleven minutes to what?
9 D ZARA: To the air scrubbers failing.
10 D SOLOMON: Is that what the alarm was?
11 D ZARA: That is what the alarm is.
12 A ¶ Barnaby pulls the panel loose.
* 13 A It clangs on the deck.
* 14 A Blue sparks spit from the wiring beneath.
15 D BARNABY: I can bypass it.
16 D ZARA: How long?
17 D BARNABY: Four minutes.
18 D ZARA: Do it in three.
19 D SOLOMON: Captain, I can do it faster.
20 D BARNABY: Don't touch it, kid.
21 A ¶ Zara and Solomon both turn.
22 A Barnaby's hands are already inside the panel.
23 D BARNABY [CONT'D]: I know what I'm doing.
24 D ZARA: Solomon, the seeds.
25 D SOLOMON: What about them?
26 D ZARA: They go in the airlock. If the scrubbers die, they go with us.
27 D SOLOMON: With us, where?
28 D ZARA: Anywhere.
29 A ¶ Solomon scoops the trays into his arms.
* 30 A The dome lights flicker.
* 31 A A siren whoops, then falls silent.
32 A The three of them hold perfectly still, listening to the long hush of the failing air.
* 33 A ¶ Then a door at the dome's edge clicks open.
34 A A WOMAN in a gray station suit and a respirator steps through, a canister in each hand.
35 A She is breathing hard.
36 D WOMAN (muffled through the mask): I found the leak. Where is the captain?
37 A ¶ Zara raises a hand.
38 A The Woman drops both canisters on the console with a ringing clang, and wrenches off her mask.
39 A Underneath: Zara's own face, twenty years younger.

### SCENE s02062 | INT. COUNTY GENERAL - TRAUMA BAY 1 - NIGHT
Detected names (may be incomplete or contain aliases): HORTENSE ADEYEMI-VANCE, RAMIRO OKONKWO-STRAND, JO, ABERNATHY-BRIGGS, TENZIN LHAMO-FISCHER, CHESTER ODUNSI-WHITE, ADMINISTRATOR BEATRIX KOWALCZYK-OSEI
* 1 A ¶ A white, glaring room.
* 2 A Instruments laid out on a steel tray.
* 3 A Overhead lights, harsh as an interrogation.
* 4 A A bloodied gurney in the center, a patient under a sheet, a monitor beeping like an angry cricket.
5 A ¶ DR. HORTENSE ADEYEMI-VANCE (50s, trauma surgeon, gown spotted, cap tied tight) leans over the patient.
6 A Across from her, DR. RAMIRO OKONKWO-STRAND (30s, resident, new, a smear of blood on his glasses).
7 A Nurse JOSEPHINE "JO" ABERNATHY-BRIGGS (40s, steady hands) preps a syringe.
8 A Anesthesiologist DR. TENZIN LHAMO-FISCHER (40s, calm voice, headset) watches the monitor.
9 A Orderly CHESTER ODUNSI-WHITE (20s, in over his head) holds a suction wand.
10 A And in the doorway, tall and silent, stands ADMINISTRATOR BEATRIX KOWALCZYK-OSEI (60s, pantsuit, clipboard), observing.
11 D HORTENSE: Pressure?
12 D TENZIN: Eighty over forty.
13 D RAMIRO: Falling.
14 D JO: Fluids are wide open.
15 D HORTENSE: Ramiro, retract. Chester, suction.
16 D CHESTER: Which side?
17 D HORTENSE: His left. Your left.
18 D CHESTER: Which one's my left?
19 D JO: The one with the wand.
20 A ¶ Ramiro and Chester both reach for the same retractor, collide, and the metal clangs.
21 A Hortense stops, looks up.
22 D HORTENSE: Gentlemen.
23 D RAMIRO: Sorry.
24 D CHESTER: My fault.
25 D HORTENSE: It is nobody's fault. Ramiro, you hold. Chester, you suction. Jo, give me a number ten.
26 D JO: Number ten.
27 A ¶ She slaps the scalpel into Hortense's hand.
* 28 A The monitor tone climbs, then drops.
29 D TENZIN: Pressure's seventy.
30 D HORTENSE: Come on.
31 D RAMIRO: Is it the spleen?
32 D HORTENSE: It's the spleen, and the liver, and something I haven't found.
33 D TENZIN: Sixty-five.
34 D JO: Hortense.
35 D HORTENSE: I know, I know. Suction!
36 D CHESTER: Suctioning!
37 D BEATRIX (from the doorway): Dr. Adeyemi-Vance.
38 A ¶ Everyone looks up.
39 A Beatrix does not move.
40 D BEATRIX [CONT'D]: The family is asking.
41 D HORTENSE: Tell them I'm busy.
42 D BEATRIX: They want an update.
43 D HORTENSE: Then tell them the update is that I'm busy.
44 D BEATRIX: Doctor--
45 D HORTENSE (not looking): Beatrix, if you stand in that door another ten seconds, I will have you scrub in.
46 A ¶ Beatrix considers.
47 A Straightens her clipboard.
48 A Withdraws.
49 D TENZIN: Sixty.
50 D RAMIRO: He's going.
51 D HORTENSE: He's not going.
52 D JO: Clamp.
53 D HORTENSE: Clamp.
54 A ¶ She seizes it, sets it, her hand disappearing into the red.
* 55 A A hush.
* 56 A The monitor holds a long, steady, ragged tone.
57 D TENZIN: Pressure's coming up.
58 D JO: Sixty-five.
59 D CHESTER (whispering): Is that good?
60 D HORTENSE: That is very good.
61 D TENZIN: Seventy.
62 D RAMIRO (exhaling): Seventy-five.
63 D HORTENSE (softly): There you are.
64 A ¶ Ramiro sags against the tray.
65 A Chester, relieved, nearly drops the wand.
66 A Jo reaches out and steadies it.
67 A Hortense straightens, shoulders aching, and tilts her head at the ceiling light.
68 D HORTENSE [CONT'D]: Everyone. Take a breath.
69 A ¶ They do.
70 A All of them.
* 71 A Together.
72 A Then Hortense bends over the patient again.
73 D HORTENSE [CONT'D]: Now let's finish.

### SCENE s02063 | EXT. FLOODED RICE PADDY - MEKONG DELTA - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT CALLUM DRUMMOND-OKORIE, CORPORAL TRAN QUOC-HARTWELL, RADIO, BURST
* 1 A ¶ A shallow bowl of silver water as far as the eye can see.
* 2 A Banana palms, a bamboo causeway, a collapsed dike.
* 3 A Mist hangs at knee height.
* 4 A Distant gunfire, like someone beating a rug.
5 A ¶ SERGEANT CALLUM DRUMMOND-OKORIE (30s, tall, scarred chin, drenched in muddy water to the thighs) wades in front, rifle held high.
* 6 A Behind him, a hundred yards of silver, a ragged line of footprints.
7 A ¶ CORPORAL TRAN QUOC-HARTWELL (20s, small, wiry, a radio pack on his back, a bandage on one wrist) follows, treading with exaggerated care.
8 D CALLUM (low): Tran.
9 D TRAN: Sergeant.
10 D CALLUM: You hear that?
11 D TRAN: Gunfire. North.
12 D CALLUM: No. Behind it.
13 D TRAN: Water?
14 D CALLUM: Engines.
15 A ¶ They freeze.
* 16 A Mist thickens.
* 17 A In the distance, a low, patient throb, barely audible.
18 D TRAN: Boats.
19 D CALLUM: Two. Maybe three.
20 D TRAN: Ours?
21 D CALLUM: Doesn't matter. We're a hundred yards from cover.
22 D TRAN: We could go back.
23 D CALLUM: We go back, we meet the guns.
24 D TRAN: We go forward--
25 D CALLUM: We meet the boats.
* 26 A ¶ A beat.
* 27 A A bird cries, flapping across the paddy.
28 A They both duck, crouch, press low to the water.
* 29 A The throb comes closer.
30 D CALLUM [CONT'D] (whispering): Radio.
31 A ¶ Tran unslings the pack, thumbs the switch, holds the handset to his ear.
* 32 A Static.
33 D TRAN: Nothing.
34 D CALLUM: Try again.
35 D TRAN: It's wet.
36 D CALLUM: Dry it.
37 D TRAN: With what?
38 D CALLUM: Your shirt.
39 A ¶ Tran pulls up his shirt and wipes the handset.
40 A He tries again.
* 41 A A thin voice crackles through.
42 D RADIO [V.O.] (distorted): ...Dagger Six...Dagger Six...
43 D TRAN (urgent whisper): It's HQ!
44 D CALLUM: Give it.
45 A ¶ He snatches the handset, cups it, speaks without breath.
46 D CALLUM [CONT'D] (into radio): Dagger Six, Dagger Six, I have two. Enemy craft inbound. Request fire on grid--
* 47 A ¶ A BURST of automatic fire stitches the water.
48 A They dive.
* 49 A Spray everywhere.
50 A Tran lands face-first in the paddy, spits, rolls.
51 A Callum kicks off the bank, rifle up, and fires twice into the mist.
* 52 A Something screams.
* 53 A A boat engine revs.
54 A ¶ They scramble through the shallows, slipping, hauling each other by the straps of their packs.
* 55 A A second burst skips across the water behind them.
56 A They splash into the reeds and drop flat, panting.
57 D TRAN (gasping): That was close.
58 D CALLUM: Too close.
59 D TRAN: Are you hit?
60 D CALLUM: No.
61 D TRAN: Sergeant, your arm.
62 A ¶ Callum looks down.
* 63 A A thin red thread runs from his sleeve into the water.
64 A He turns it, examines it with dull curiosity.
65 D CALLUM: It's a scratch.
66 D TRAN: It's bleeding.
67 D CALLUM: Scratches do.
68 D TRAN: Let me wrap it.
69 D CALLUM: Later.
70 A ¶ Tran pulls a strip of cloth from his pack anyway and ties it around Callum's arm.
71 A Callum lets him.
* 72 A ¶ The engines go silent.
* 73 A Mist swallows the paddy.
* 74 A Somewhere, far away, a rooster crows.
75 D TRAN [CONT'D]: Did they pass?
76 D CALLUM (listening): They stopped.
77 D TRAN: Why?
78 D CALLUM: Because they're listening for us.
79 A ¶ They hold their breath.
* 80 A A single bubble rises from the water beside Tran's head and pops.
81 D CALLUM [CONT'D] (barely audible): Move on my count. One.
82 D TRAN (barely audible): Two.
83 D CALLUM: Three.
84 A ¶ They rise, together, and run.

### SCENE s02064 | INT. STILLED SUBWAY CAR - TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, MIRANDA ADEBOWALE-KRUGER, MAN, TIBERIUS OKONJO-VASQUEZ
* 1 A ¶ Emergency lighting.
* 2 A Flickering.
* 3 A The car is dark, the tunnel darker.
* 4 A Water drips somewhere.
* 5 A A faint electric hum.
6 A ¶ A WOMAN in a courier jacket, MIRANDA ADEBOWALE-KRUGER (30s), sits rigid on a bench, an envelope clutched in her lap.
7 A At the other end, a MAN, TIBERIUS OKONJO-VASQUEZ (40s), stands braced against the pole, a pistol tucked at the small of his back, visible.
8 A ¶ Neither speaks.
* 9 A The car ticks as the metal cools.
10 D MIRANDA: Is the power coming back?
11 D TIBERIUS: Eventually.
12 D MIRANDA: How long?
13 D TIBERIUS: Depends who you ask.
14 D MIRANDA: I'm asking you.
15 D TIBERIUS: Then ten minutes. Or never.
16 A ¶ She nods.
17 A Draws the envelope to her chest.
18 A He watches her do it.
19 D TIBERIUS [CONT'D]: That's a lot of care for an envelope.
20 D MIRANDA: It's my job.
21 D TIBERIUS: Whose?
22 D MIRANDA (to herself): Don't answer that.
23 D TIBERIUS: You're muttering.
24 D MIRANDA: I'm thinking.
25 D TIBERIUS: Think quieter.
* 26 A ¶ The lights flicker.
27 A Both lift their heads.
* 28 A A distant clang echoes down the tunnel, followed by a long, slow shuffle.
29 D MIRANDA: Is that a person?
30 D TIBERIUS: It's the tunnel.
31 D MIRANDA: It sounded like footsteps.
32 D TIBERIUS: Tunnels have footsteps.
33 D MIRANDA (to the whole car): Hello? Is anyone there?
* 34 A ¶ Silence.
* 35 A Then, faintly, a metallic scrape.
36 D TIBERIUS: Don't.
37 D MIRANDA: Hello?
38 A ¶ They speak at the same moment.
* 39 A A flashlight beam sweeps across the windows.
40 A Tiberius slides off the pole, hand to his back.
41 A Miranda stands, envelope behind her.
* 42 A ¶ A long beat.
* 43 A The beam passes.
* 44 A The shuffle recedes.
45 A ¶ Tiberius lowers his hand.
46 A Miranda lets her breath out in a slow hiss.
47 D MIRANDA [CONT'D] (quiet): Were you going to shoot someone?
48 D TIBERIUS: Only if they were going to shoot me.
49 D MIRANDA: That's not comforting.
50 D TIBERIUS: It wasn't meant to be.
51 A ¶ She sits.
52 A He leans back against the pole.
* 53 A The car hums.
54 D MIRANDA (muttering): Ten minutes.
55 D TIBERIUS: Or never.

### SCENE s02065 | INT. PINNACLE DYNAMICS - CONFERENCE ROOM 12 - DAY
Detected names (may be incomplete or contain aliases): CHRISTABEL ODUYA-HARTMANN, VP, MARCELLUS ABIOLA-BRANDT, NADIA FAIRWEATHER-OSEI, EUSTACE KRUGER-ADEYEMI, PENELOPE OKAFOR-LINDQVIST, HR, BARTHOLOMEW KWAME-ASANTE
* 1 A ¶ A glass-walled room.
* 2 A A long table.
* 3 A A whiteboard crowded with arrows.
* 4 A A plate of untouched croissants.
* 5 A A speaker phone blinks.
6 A ¶ CHRISTABEL ODUYA-HARTMANN (40s, VP, black blazer) sits at the head.
7 A To her right, MARCELLUS ABIOLA-BRANDT (30s, sales, shiny tie).
8 A Across from him, NADIA FAIRWEATHER-OSEI (20s, product, laptop plastered with stickers).
9 A Further down, EUSTACE KRUGER-ADEYEMI (50s, finance, calculator).
10 A In the corner, PENELOPE OKAFOR-LINDQVIST (30s, HR, a binder).
11 D CHRISTABEL: Let's get started.
12 D MARCELLUS: I'd like to start with a win.
13 D CHRISTABEL: Please.
14 D MARCELLUS: We closed Halverson.
15 D NADIA: Halverson's a pilot.
16 D MARCELLUS: It's a win.
17 D EUSTACE: It's a pilot. With no budget.
18 D MARCELLUS: It has momentum.
19 D EUSTACE: Momentum does not pay invoices.
20 D PENELOPE (quietly): Can we please stay respectful?
21 D CHRISTABEL: We are being respectful.
22 D PENELOPE: Okay.
23 A ¶ She writes in her binder.
24 A Nadia leans over to read it, and Penelope covers the page.
25 D CHRISTABEL [CONT'D]: Nadia, the roadmap.
26 D NADIA: We're on track.
27 D EUSTACE: For what?
28 D NADIA: For Q3.
29 D EUSTACE: Q3 was last quarter.
30 D NADIA: Q3 next year.
31 D CHRISTABEL: We have the number?
32 D NADIA: We have a number.
33 A ¶ The conference room door swings open.
34 A A man in a rumpled suit leans in: BARTHOLOMEW KWAME-ASANTE (60s, CEO, a coffee stain on his tie, a stack of paper held like a loaf of bread).
35 D BARTHOLOMEW: Is this the strategy meeting?
36 D CHRISTABEL: It is, Bart.
37 D BARTHOLOMEW: Wonderful. Is there coffee?
38 D MARCELLUS: There are croissants.
39 D BARTHOLOMEW: Croissants are not coffee.
40 A ¶ He steps in.
41 A Sits at the foot of the table.
42 A Everyone sits taller.
43 D BARTHOLOMEW [CONT'D]: So. Go on. Who's winning?
* 44 A ¶ A silence.
45 A Eustace taps his calculator.
46 A Penelope clutches her binder.
47 A Nadia looks at the ceiling.
48 D CHRISTABEL: We're all winning, Bart.
49 D BARTHOLOMEW: Splendid. Splendid.
50 A ¶ He takes a croissant, bites it, chews.
51 A Everyone watches.
52 D BARTHOLOMEW [CONT'D] (through crumbs): Now. About the layoffs.

### SCENE s02066 | INT. SALT-WATER BATH HOUSE - BRIGHTON - 1832 - NIGHT
Detected names (may be incomplete or contain aliases): HEPZIBAH QUARLES-ODUYA, LORD PERCIVAL ABERCROMBIE-ASANTE, SUKI ADEYEMI-FAIRBANKS
* 1 A ¶ A cavernous Georgian room.
* 2 A A long rectangular plunge pool of dark seawater, steaming faintly.
* 3 A Round arched windows.
* 4 A A lamp on every column.
* 5 A Brass taps tarnished green.
* 6 A The smell of brine and old stone.
7 A ¶ On a marble bench along the pool's edge, MRS. HEPZIBAH QUARLES-ODUYA (60s, black bombazine, a stick with a silver handle) sits very upright, a hat box on her lap.
8 A ¶ At the far end, LORD PERCIVAL ABERCROMBIE-ASANTE (30s, dressing gown, wet hair, a flush of fever) leans against a column, arms folded.
9 A ¶ Between them, in the water up to her waist, SUKI ADEYEMI-FAIRBANKS (20s, bathing costume of striped flannel, red from the cold, a determined jaw) wades with her chin lifted.
10 D HEPZIBAH: That is quite enough, Susannah.
11 D SUKI: It's Suki.
12 D HEPZIBAH: It is Susannah on the registry.
13 D SUKI: The registry is wrong.
14 D LORD PERCIVAL (from the column): Rather a spirited young woman.
15 D HEPZIBAH: Rather an impertinent one.
16 D SUKI (to the pool): I only wanted a swim.
17 D HEPZIBAH: At midnight.
18 D SUKI: At midnight no one stares.
19 D LORD PERCIVAL: I am staring.
20 D SUKI: Then you are no one.
21 A ¶ He laughs, a short bark.
22 A Hepzibah turns her stick in her hands.
23 D HEPZIBAH: Lord Percival, I trust you will not repeat this.
24 D LORD PERCIVAL: Madam, I shall repeat it at every dinner for a year.
25 D HEPZIBAH: I beg you will not.
26 D SUKI: Let him, Aunt.
27 D HEPZIBAH: I will not be talked of.
28 D SUKI: You already are.
* 29 A ¶ A long silence.
* 30 A Lamplight trembles on the black water.
31 A Suki ducks under, rises, shakes her hair.

### SCENE s02067 | INT. AIRPORT HOTEL BAR - DELAYED FLIGHTS - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND ABERNATHY-OKORO, WALT, ZIELINSKI-ADEYEMI, BRIDGET OSEI-LINDQVIST, KOFI ASANTE-MARCHETTI, DEL, NWOKORO-HAYES
* 1 A ¶ A beige hotel bar with a TV muted to a weather map.
* 2 A Red banquettes.
* 3 A A long counter with five stools.
* 4 A A bowl of stale pretzels.
* 5 A A neon sign: FLIGHTS CANCELLED.
6 A ¶ At the bar, ROSALIND ABERNATHY-OKORO (50s, travel-wrinkled blazer, a tote bag of paperbacks) nurses a vodka tonic.
7 A Two stools down, WALTER "WALT" ZIELINSKI-ADEYEMI (60s, rumpled, a cowboy hat that doesn't belong in Ohio) sips a beer.
8 A In the banquette, a young couple, BRIDGET OSEI-LINDQVIST (20s, nose ring, laptop) and her boyfriend, KOFI ASANTE-MARCHETTI (20s, athletic, a guitar case).
9 A The bartender, DELPHINE "DEL" NWOKORO-HAYES (40s, sleeves rolled, tattoos), polishes a glass.
10 D DEL: Last call's in ten.
11 D ROSALIND: It's seven-thirty.
12 D DEL: Airport rules. The hotel's full. I'm trying to get everyone fed.
13 D WALT: I'll take anything with cheese.
14 D DEL: That's the pretzels.
15 D WALT: Then I'll take the pretzels.
16 A ¶ He grabs the bowl.
17 A Rosalind reaches for it at the same time.
18 A They both stop, hands on opposite rims.
19 D ROSALIND: Please.
20 D WALT: Ladies first.
21 D ROSALIND: That's very kind.
22 A ¶ She takes a pretzel.
23 A Chews.
24 A Grimaces.
25 A Hands the bowl back.
26 A Walt laughs.
27 D BRIDGET (from the booth): Kofi, they just cancelled again.
28 D KOFI: Again?
29 D BRIDGET: Seventh time.
30 D KOFI (to the bar): Do they ever fly?
31 D DEL: Sometimes.
32 D KOFI: Which times?
33 D DEL: When I'm not working.
34 A ¶ Rosalind chuckles.
35 A Bridget closes her laptop and slides out of the booth, folding her arms.
36 D BRIDGET: I'm going to scream.
37 D KOFI: Don't.
38 D BRIDGET: I'm going to scream, Kofi.
39 D KOFI: You are not going to scream.
40 D DEL: Please don't.
41 D BRIDGET: Why not?
42 D DEL: Because I'm the only person who knows where the good whiskey is.
43 A ¶ Bridget laughs despite herself.
44 A Kofi, relieved, puts his arm around her.
45 D WALT (raising his beer): To the weather.
46 D ROSALIND: To the weather.
47 D DEL: To last call.
48 A ¶ They clink.
* 49 A Outside, thunder rolls.
* 50 A The lights dip.
* 51 A The TV flickers to a blue screen.
52 A Everyone looks up.
53 D KOFI: That's a bad sign.
54 D BRIDGET: That's the weather.
55 D DEL: That's the cable.
56 D WALT: It's all the same thing.
57 A ¶ Rosalind finishes her drink and sets it down, gently.
58 D ROSALIND: Does anyone play cards?
59 D WALT: I do.
60 D BRIDGET: We do.
61 D KOFI: Not well.
62 D ROSALIND: Better.
63 D DEL: There's a deck behind the counter.
64 A ¶ She fishes it out.
65 A Slides it down the bar.
66 A Walt catches it, shuffles with a flourish, and cards fly everywhere.
67 A They all burst out laughing.
* 68 A It is the first time anyone has laughed all night.
69 D WALT: Poker?
70 D ROSALIND: Rummy.
71 D BRIDGET: Go Fish.
72 D KOFI: Anything.
73 D DEL: Fine. But I'm dealing.
74 A ¶ She comes around the counter, and for the first time all night, everyone sits at the same table.

### SCENE s02068 | EXT. HOLLOW OAK GLADE - TWILIGHT
Detected names (may be incomplete or contain aliases): ODALYS THORNEWOOD-ABEBE, BRAMBLE, OKORO-LINDQVIST, MARISOL FAIRWEATHER-ODUYA, TALIESIN ABERNATHY-KRAUSE, PIP
* 1 A ¶ An enormous oak, hollow as a cathedral, glows green in the dusk.
* 2 A Fireflies drift.
* 3 A A ring of toadstools circles the roots.
* 4 A A path of silver moss winds in from the dark.
* 5 A ¶ A tiny fire burns at the center.
6 A Five travelers share it in uneasy quiet.
7 A ¶ ODALYS THORNEWOOD-ABEBE (30s, ranger, cloak patched at the elbows) tends the flames.
8 A WILLEM "BRAMBLE" OKORO-LINDQVIST (50s, a hedge-wizard, mismatched socks) whittles a stick.
9 A MARISOL FAIRWEATHER-ODUYA (20s, a runaway princess in a stolen tunic) sits with her knees drawn up.
10 A TALIESIN ABERNATHY-KRAUSE (40s, bard, lute across his back) leans on the oak.
11 A And at the edge of the light, PIP (12, a boy thief, a sack at his belt) crouches, watching the dark.
12 D ODALYS: We rest here till moonrise.
13 D BRAMBLE: Aye.
14 D MARISOL: How far?
15 D ODALYS: Three days.
16 D MARISOL: You said two yesterday.
17 D ODALYS: I said two if the bridge held.
18 D MARISOL: Did it?
19 D ODALYS: It did not.
20 A ¶ She stirs the fire.
* 21 A Sparks climb.
22 A Bramble tosses a shaving into the flames.
23 A Taliesin plucks a single string.
* 24 A It rings, bright, then fades.
25 D TALIESIN (to the glade): Friends, a song?
26 D BRAMBLE: No.
27 D TALIESIN: A short one.
28 D BRAMBLE: Short, then.
29 A ¶ Taliesin tunes, lifts his chin, and begins to hum.
30 A Pip edges closer.
31 A Marisol rests her chin on her knees.
* 32 A The fire pops.
* 33 A For a moment the clearing is warm, almost safe.
* 34 A ¶ Then the fireflies go out.
* 35 A All at once.
* 36 A The glade falls dark.
37 A The hum dies in Taliesin's throat.
38 D PIP (whispering): They've gone.
39 D ODALYS: Silence.
40 D BRAMBLE (muttering): Not again.
* 41 A ¶ A cold wind winds through the oak's hollow.
* 42 A A low voice, many voices, rises from the roots.
43 A Marisol grabs Pip's sleeve.
44 A Odalys draws her knife.
45 A Bramble raises his hands, palms out, mouth working on an unspoken word.
46 A Taliesin swings the lute off his back and holds it like a shield.
47 A ¶ They scatter in five directions, each diving for the shadows, each convinced the others are right behind them.
* 48 A ¶ The fire gutters, almost out.
* 49 A A single ember glows red, like an eye.

### SCENE s02069 | INT. SCRIVENER'S SHOP - FLORENCE - 1503 - DAY
Detected names (may be incomplete or contain aliases): MAN, WOMAN, SCRIVENER
* 1 A ¶ A cramped room lined with ledgers and inkpots.
* 2 A A high slanted desk by the window.
* 3 A Sunlight cuts a gold bar across the floorboards.
* 4 A Dust motes turn.
5 A ¶ A MAN in a stained smock bends over a vellum sheet, quill scratching.
6 A He is thin, quick, and does not look up when the bell above the door jingles.
7 A ¶ A woman enters.
8 A Dark cloak, veil.
9 A She closes the door softly and stands with her hands clasped.
10 D WOMAN: I was told you write letters for those who cannot.
11 D MAN: I write for those who will not.
12 D WOMAN: That is a distinction.
13 D MAN: It is the whole of my profession.
14 A ¶ He lifts his head.
15 A Studies her.
16 A She does not raise the veil.
17 D MAN [CONT'D]: Your name?
18 D WOMAN: Not yet.
19 D MAN: Then I cannot write you a letter.
20 D WOMAN: A letter does not need my name. Only his.
21 D MAN: Whose?
22 A ¶ She crosses to the desk and lays a ring on the vellum.
* 23 A A small gold band, set with a dark stone.
24 A He picks it up.
25 A Turns it in the light.
26 A His quill stops.
27 D MAN [CONT'D] (quietly): Messer Giuliano.
28 D WOMAN: You know him.
29 D MAN: Everyone knows him.
30 A ¶ She lifts her veil at last.
31 A A young face, pale, composed.
32 A Her eyes do not leave his.
33 D WOMAN: Then you know why I need a letter that will arrive after I am gone.
34 A ¶ The scrivener sets down the ring.
35 A Dips his quill.
36 A Begins to write.
37 D SCRIVENER (without looking up): Dictate, Madonna. I am listening.
* 38 A ¶ Outside, a church bell tolls the hour.
39 A She draws a breath, and begins.

### SCENE s02070 | INT. CURLING CLUB - SALT MINE LEVEL TWO - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS BRANNIGAN, TAMSIN OKAFOR
* 1 A ¶ A sheet of ice laid inside a hollowed-out salt chamber, lit by work lamps strung from the ceiling.
* 2 A The walls glitter pink and white.
* 3 A Stones sit in their rack like sleeping animals.
4 A ¶ HOLLIS BRANNIGAN, 60s, barrel-chested, a cardigan under his club blazer, kneels at the far hog line with a pebble can.
5 A He sprays the ice in careful rows, one pass, then another.
6 A He has done this alone for a long time.
* 7 A ¶ A steel door clangs somewhere above.
* 8 A Footsteps on the stairs.
9 A Hollis does not look up.
10 A He sprays another row.
11 A ¶ TAMSIN OKAFOR, late 20s, tall, hair still wet from a shower, enters with her broom over her shoulder and a duffel dragging from her other hand.
12 A She stops at the hack.
13 A She sets the duffel down, picks it up again, sets it down.
14 A Hollis sprays.
15 A She watches the back of his head, then crouches and runs a glove along the ice as if checking it for a fever.
16 D HOLLIS: Ice is fast tonight.
17 D TAMSIN: It's always fast when it doesn't matter.
18 A ¶ Hollis caps the can.
19 A He stands in two stages, hand on his knee, and walks the length of the sheet to the rack.
20 A Tamsin slides into the hack without a stone, her eyes on the button, her broom across her lap.
21 A Hollis lifts a stone, wipes the running band with his sleeve, and carries it back to her.
22 A He sets it beside her boot.
23 A Neither speaks.
* 24 A A drip of brine lands somewhere in the dark.
25 D TAMSIN [CONT'D]: They called at six.
26 D HOLLIS: I heard.
27 D TAMSIN: Eleven years.
28 D HOLLIS: Thirty-one, for the building.
29 A ¶ She almost laughs and turns it into a cough.
30 A He pulls the stone's handle straight, a quarter-inch adjustment that does nothing.
31 D TAMSIN: You could have told me before the bonspiel.
32 D HOLLIS: Would you have thrown it differently?
33 A ¶ She says nothing.
34 A She takes the handle, sets her feet, and slides out, long and low.
* 35 A The stone runs down the sheet in a clean curl.
36 A Hollis walks beside it, not sweeping, hands in his blazer pockets, and when it stops a foot short of the button he nods at it the way a man nods at a stranger on a train.
37 D TAMSIN: Short.
38 D HOLLIS: Mm.
39 A ¶ He bends, picks up the stone, and carries it back himself.
40 A She lets him.
41 A At the hack he sets it down again beside her boot, exactly where it was before, and straightens the broom on her lap so the brush points the right way.
42 D HOLLIS [CONT'D]: Lock up when you're done. The key sticks. Lift, then turn.
43 D TAMSIN: Lift, then turn.
44 A ¶ He goes up the stairs one at a time.
* 45 A At the top the door clangs again.
46 A Tamsin sits in the hack with the stone, in the pink light, and does not throw it.
47 T FADE OUT.

### SCENE s02071 | INT. ORBITAL GREENHOUSE RING - SECTOR NINE - CONTINUOUS
Detected names (may be incomplete or contain aliases): CAPTAIN IRENKA VOSS, DUMISANI NKOSI, PELL
* 1 A ¶ Rows of dead tomato vines hang from the ceiling racks like gray rope.
* 2 A Emergency amber pulses.
* 3 A A hull alarm drones under everything.
4 A ¶ CAPTAIN IRENKA VOSS, 50s, rail-thin, flight suit patched at the knees, slams a manual valve wheel.
5 A DUMISANI NKOSI, 30s, engineer, wedges a pry bar into a buckled bulkhead seam.
6 A PELL, 20s, the botanist, hugs a seed vault to his chest.
7 D IRENKA: Everyone, pressure in ninety seconds. Move your feet.
8 D DUMISANI (to Pell): Hold the light higher. Higher!
9 D PELL (muttering): It's a tomato. It's just a tomato.
* 10 A ¶ The bulkhead groans.
11 A Dumisani and Irenka heave on the bar together and the seam shrieks open six inches.
12 A A gust of cold air tears through, and all three duck, Pell clutching the vault, Dumisani losing his grip, Irenka grabbing his collar.
13 D IRENKA: Nobody lets go of anything!
14 D PELL (to himself): Breathe, breathe, breathe.
15 D DUMISANI: Captain, the vault is not coming through that gap!
16 D IRENKA: Then the vault goes first and we follow it.
17 A ¶ She pushes Pell toward the opening.
18 A Pell and Dumisani both freeze as the alarm changes pitch, a rising whine.
19 A Irenka looks up at the ceiling vents.
20 A She shoves them both through and dives in after.

### SCENE s02072 | INT. SYNERGY ROOM - FORMER FUNERAL HOME - DAY
Detected names (may be incomplete or contain aliases): BARB KOWALCZYK, NEW HIRE, TEODORO, SYNERGY, BOUNDARIES
* 1 A ¶ A wood-paneled chapel converted into an open-plan collaboration space.
* 2 A The pews are gone but their ghost-marks remain on the carpet.
* 3 A A bean-bag sits where the casket stood.
* 4 A A motivational vinyl decal reads: BRING YOUR WHOLE SELF.
5 A ¶ BARB KOWALCZYK, 50s, regional operations lead, lanyard heavy with badges, stands at a whiteboard that still has a hymn board frame around it.
6 A She is drawing a funnel.
7 A She has been drawing the same funnel for four meetings.
* 8 A ¶ A glass door hisses.
9 A A young man hesitates in the doorway, holding a laptop and a succulent in a coffee mug.
10 D BARB: You're early.
11 D NEW HIRE: Is it okay? They said ten.
12 D BARB: Nobody's ever early. It's kind of a red flag.
13 A ¶ He steps in.
14 A He looks at the ceiling, which has an ornate plaster rosette and a smoke detector blinking green.
15 A He looks at the bean-bag.
16 D NEW HIRE: Is that where the--
17 D BARB: We don't say that. We say "the Hub."
18 D NEW HIRE: Right. Sorry.
19 D BARB: Don't be sorry. Be curious.
20 A ¶ She pulls a marker cap off with her teeth.
21 A The funnel gets another arrow.
22 A He sets his succulent on the windowsill and the windowsill, a wide stone ledge, makes a very quiet clack.
23 D NEW HIRE: I'm supposed to shadow someone on onboarding?
24 D BARB: That's me. I'm the someone.
25 D NEW HIRE: Great. I'm really excited.
26 D BARB: You're allowed to be neutral.
27 D NEW HIRE: Okay.
28 D BARB: That was neutral?
29 D NEW HIRE: It was an attempt.
30 A ¶ She finally looks at him, a long unhurried look from lanyard to shoes.
31 A He holds the laptop to his chest like a hymnal.
32 D BARB: Name.
33 D NEW HIRE: Teodoro. Teo, mostly.
34 D BARB (writing it on the board, inside the funnel): Teodoro. And you came to us from?
35 D TEODORO: A mattress start-up. Direct to consumer.
36 D BARB: Did it fold?
37 D TEODORO: Like a mattress.
38 A ¶ She does not laugh.
39 A She taps the marker on the word Teodoro twice.
40 D BARB: Today you will learn three things. One. Our brand voice. Two. Our values. Three. How to book the Hub.
41 D TEODORO: The Hub is bookable?
42 D BARB: By the hour. There's a calendar. It's color-coded. Green is generative, red is reflective, and gray is--
43 A ¶ She stops.
44 A She looks at the carpet, where a large gray rectangle has been worn by years of folding chairs.
45 D BARB [CONT'D]: Gray is a sensitive color.
46 D TEODORO: Okay.
47 D BARB: You keep saying okay.
48 D TEODORO: I didn't know that I did.
49 D BARB: Eleven times. I counted.
50 A ¶ He opens his laptop to have something to do.
* 51 A It bongs loudly with a cheerful startup chime.
52 A Barb flinches, a tiny flinch, then covers it by uncapping a second marker.
53 D BARB [CONT'D]: Turn the volume off. Please. We have a no-chime policy in the Hub.
54 D TEODORO: Is that a value?
55 D BARB: It's a boundary.
56 A ¶ He mutes it.
* 57 A A long beat.
* 58 A The smoke detector blinks.
59 A Barb writes BOUNDARIES on the whiteboard and underlines it hard enough that the marker squeaks.
60 D TEODORO: Can I ask something? The person I replaced. What happened to them?
61 D BARB: He pivoted.
62 D TEODORO: Where?
63 D BARB: Out.
64 D TEODORO: They said he got promoted.
65 D BARB (a flat smile): Out is up, in a sense.
66 A ¶ Teodoro nods too many times.
67 A Barb watches the nodding.
68 A Something in her jaw is working, a small muscle.
69 A She caps the marker.
70 A Uncaps it.
71 D BARB [CONT'D]: Do you know how many people work here?
72 D TEODORO: Two hundred?
73 D BARB: Forty. Two hundred is the number on the slide.
74 D TEODORO: Why is there a slide?
75 D BARB: There is always a slide.
76 A ¶ She picks up a remote and a projector hums to life.
* 77 A A deck appears on the wall above the old altar.
* 78 A It says OUR JOURNEY.
* 79 A Under it, a stock photo of a mountain with a staircase built into it.
80 D TEODORO: That staircase isn't attached to anything.
81 D BARB: It is a metaphor.
82 D TEODORO: It's pointing at a cloud.
83 D BARB: Teodoro.
84 D TEODORO: I'm just saying someone approved that.
85 A ¶ Her thumb is white on the remote.
86 A She clicks.
* 87 A The next slide: a pie chart, one slice labeled SYNERGY, filling ninety percent of the circle.
88 D BARB: Do you see the large slice?
89 D TEODORO: Yeah.
90 D BARB: That slice is where we live.
91 D TEODORO: What's the other ten percent?
92 D BARB: Compliance. And some tears.
93 D TEODORO: Some what?
94 D BARB: Typo. The slide has a typo.
95 A ¶ She clicks again, harder.
* 96 A The clicker snaps in two.
* 97 A A spring pings across the carpet and rolls into the old gray rectangle.
98 A They both watch it go.
99 D TEODORO: Do you want me to--
100 D BARB: Do not move.
101 A ¶ He doesn't.
102 A She walks to the spring, picks it up between two fingers, and holds it up to the light as though it might confess.
103 D BARB [CONT'D]: Four years. I have booked this room for four years. I have put a succulent on every ledge. I have told forty people that the Hub is a safe space. And every Monday I come in and I draw the funnel, and the funnel is the same, and the funnel does nothing, Teodoro. It does nothing!
104 A ¶ She hurls the spring at the whiteboard.
* 105 A It ticks off the plastic hymn frame.
106 D TEODORO (carefully): Barb, are you okay?
107 D BARB: I am ABSOLUTELY neutral.
108 A ¶ She rips the BOUNDARIES page off the wall.
109 A There is no page, it is a whiteboard, so she drags her sleeve across the word and smears it into a gray cloud.
110 A She turns.
111 A Her chest rises and falls.
112 A Teodoro has stood, laptop clutched, succulent forgotten.
113 D BARB [CONT'D]: Pull up the calendar.
114 D TEODORO: Now?
115 D BARB: Book the Hub.
116 D TEODORO: For when?
117 D BARB: Right now. Reflective. Make it red.
118 A ¶ He types.
119 A His fingers shake slightly.
120 A She sits on the bean-bag where the casket stood, sinking down with a long sigh of polystyrene beads, and puts the marker cap in her mouth again.
121 D TEODORO: Booked. It's red.
122 D BARB: Good.
123 A ¶ She closes her eyes.
* 124 A The projector continues to glow over her, the staircase going up into the cloud.
125 D BARB [CONT'D]: Welcome to the team.

### SCENE s02073 | INT. LIGHTHOUSE ON TIDALLY LOCKED MOON - LAMP ROOM - TWILIGHT
Detected names (may be incomplete or contain aliases): KASIMIR DROZD, YUKIKO ARAI, GRANNY
* 1 A ¶ Brass and quartz.
* 2 A A lens the size of a bus shelter turns on a slow gear, throwing one blue beam into permanent dusk.
* 3 A Outside the windows, a white dust plain runs to a black horizon.
* 4 A The sun never moves.
5 A ¶ KASIMIR DROZD, 60s, keeper, wool cap, a thermos strapped to his belt, sits at the console.
* 6 A Sparks pop from a panel beside him.
* 7 A ¶ Nobody is rushing.
* 8 A Not anymore.
9 A ¶ YUKIKO ARAI, 30s, relief technician, vacuum suit open at the collar, climbs through the floor hatch with a toolkit and a cracked helmet under her arm.
10 A She stops.
11 A Looks at the beam.
12 A Looks at Kasimir.
13 D YUKIKO: You said the relay failed.
14 D KASIMIR: It did. Nine days ago.
15 D YUKIKO: Then who's running the lens?
* 16 A ¶ Behind a column, something clicks.
17 A GRANNY, a squat maintenance robot, patched with sheet copper and a hand-painted flower on its chest, rolls out holding a wrench.
18 A It halts.
19 A Kasimir takes a sip from his thermos.
20 A Yukiko sets down the toolkit and the helmet, steps toward the console, kneels, and presses two fingers against the casing.
* 21 A It is warm.
22 A Granny rolls up beside her and offers the wrench handle-first.
23 A Kasimir leans back in his chair and watches the two of them, the fond tired watch of a man whose argument has already been lost.
24 D KASIMIR [CONT'D]: She rewired herself. I didn't ask her to.
25 D YUKIKO: She can't do that. It's against firmware.
26 D GRANNY (synthetic, gentle): Firmware did not turn the lens.
27 A ¶ Yukiko stares at the robot.
* 28 A The beam sweeps over all three of them, blue on her face, blue on the old man's cap, blue on the little copper flower.
29 D YUKIKO: Kasimir. My orders are to decommission her.
30 D KASIMIR: I know.
31 D YUKIKO: It's a lot of paperwork to not do that.
32 D KASIMIR: I know that too.
33 A ¶ She stands.
34 A Picks up the cracked helmet and turns it over in her hands.
35 A Granny rolls a half-turn away, politely, as if to give her privacy.
36 D YUKIKO: Nine days in the dark, and nobody died.
37 D KASIMIR: No.
38 D YUKIKO (quiet): Fine. Fine, I'll lose the report.
39 A ¶ Kasimir lifts the thermos in a small salute.
40 A Granny's chest light blinks twice.
* 41 A The lens keeps turning.

### SCENE s02074 | INT. ROLLER RINK - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): NNEKA OBI, RAFAEL OBI-MENDES, SOLEDAD, JUNIPER, BASIL
* 1 A ¶ A family reunion banner sags over the snack bar.
* 2 A Folding tables, foil trays, a disco ball turning slowly without its light.
* 3 A The floor shines.
4 A ¶ NNEKA OBI, 70s, sits on a bench in a lavender tracksuit, skates unlaced, a paper plate balanced on her knee.
5 A Across the floor, her son RAFAEL OBI-MENDES, 40s, bends over a speaker cable with a phone flashlight in his teeth.
6 A His wife SOLEDAD, 40s, hovers behind him with a cake knife she has forgotten she is holding.
7 A ¶ The grandchildren have gone to ground.
8 A JUNIPER, 9, is under a table in full skates.
9 A BASIL, 6, sits cross-legged on the rink's center circle, holding one wheel he has pulled off a skate.
10 D SOLEDAD: Rafa. He's not going to come out because you fixed the music.
11 D RAFAEL (around the flashlight): Then he stays there.
12 A ¶ He tugs the cable.
* 13 A The speaker coughs, then plays three notes of a slow song.
14 A She puts down the knife.
15 A He drops the flashlight into his palm.
16 A ¶ Nneka sets the plate aside and leans forward.
17 A She says nothing.
18 A She taps the bench beside her twice with two fingers.
19 A ¶ Juniper crawls out first.
20 A She skates a wobbling line over to the bench, arms wide, and drops beside her grandmother without a word.
21 A Basil does not move.
22 A He turns the wheel over in his hands and spins it, listening to it tick.
23 D JUNIPER: He didn't mean it.
24 D SOLEDAD: Who didn't?
25 D JUNIPER: Dad. About selling the house.
26 A ¶ Rafael looks at the ceiling.
27 A He rubs his eyes with the heel of his hand, the way he did at nine, and lowers it.
28 A Soledad moves to him and touches his elbow, and he lets her.
29 A Nneka stays where she is.
30 D NNEKA: Basil. Come here and show me what you broke.
31 D BASIL: I didn't break it. It came off.
32 D NNEKA: Then show me what came off.
33 A ¶ He gets up slowly and shuffles over in his socks, holding out the wheel.
34 A She takes it.
35 A She turns it.
36 A She hands it back and presses it into his small fist, closing his fingers over it.
37 D NNEKA [CONT'D]: Keep that. It's yours now.
38 A ¶ Rafael crosses the floor, his steps loud on the maple.
39 A He stops in front of his mother.
40 A Soledad follows a pace behind, and the slow song drifts around the four of them.
41 D RAFAEL: Mama. We can talk about it tomorrow.
42 D NNEKA: Tomorrow I'll be eating your cake and not listening.
43 A ¶ He laughs, once, surprised, and sits.
44 A She hands him her plate.

### SCENE s02075 | INT. SPARKLE-KING CAR WASH - NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): WREN LINDQVIST, DOTTIE ABERNATHY-REYES, HANK
* 1 A ¶ A drive-through tunnel gone quiet.
* 2 A Wet brushes hang motionless, dripping.
* 3 A A glass booth by the exit holds a space heater, a radio, and two plastic chairs.
* 4 A Fluorescent hum.
5 A ¶ WREN LINDQVIST, 17, in a yellow company polo two sizes too big, sits on a chair with her feet up on a bucket.
6 A Beside her, DOTTIE ABERNATHY-REYES, 17, hair in a scarf, works a crossword with a pen chewed flat.
7 A Neither is looking at the other.
* 8 A It is 1:40 a.m.
* 9 A ¶ The radio crackles.
* 10 A It is a handheld CB sitting on the console, a relic that the owner insists on.
11 D HANK [O.S.] (over radio): Sparkle-King, this is Hank, you kids alive in there?
12 A ¶ Wren picks it up and thumbs the button without sitting up.
13 D WREN: Alive, Hank.
14 D HANK [O.S.] (over radio): Good. Don't let anybody through the tunnel after two. The brush motor's acting up.
15 D WREN: Nobody's coming through, Hank. It's a Tuesday.
16 D HANK [O.S.] (over radio): That's how it gets you.
17 A ¶ She sets the radio down.
18 A Dottie writes a word in her puzzle and erases it.
19 D DOTTIE: Seven letters. "Feeling of wanting to be elsewhere."
20 D WREN: Restless.
21 D DOTTIE: That's eight.
22 D WREN: Is it?
23 A ¶ Dottie counts on her fingers, lips moving.
24 A Wren watches her do it, then looks away at the tunnel, at the brushes hanging still.
25 D DOTTIE: You didn't apply to the program, did you.
26 D WREN: Which program.
27 D DOTTIE: The summer one. In Duluth. You said you would.
28 D WREN: I said I might.
29 A ¶ Dottie nods.
30 A She flips the paper, finds another clue, doesn't read it.
31 A She was supposed to be on the Duluth shuttle with Wren.
32 A She picks at the gummy edge of her pen cap.
33 D DOTTIE: My mom thinks you're a bad influence.
34 D WREN: I wash cars.
35 D DOTTIE: She says that's what a bad influence would say.
36 A ¶ They laugh, the small, unwilling laugh of two people who have heard the same joke for a year.
* 37 A The space heater ticks.
* 38 A Somewhere in the tunnel, a drip lands in a bucket, and then another.
39 D WREN: Do you think they'll be mad? If I don't go?
40 D DOTTIE: Who's they?
41 D WREN: Everyone. Your mom. Mine. You.
42 D DOTTIE: I'd be mad for like a week.
43 D WREN: That's a long time.
44 D DOTTIE: It's a week.
* 45 A ¶ The radio crackles again.
46 D HANK [O.S.] (over radio): Girls, I'm gonna need you to hit the emergency stop on the brush motor. I can hear it from the house.
47 A ¶ Wren reaches for the radio.
48 A Dottie, without looking, hits the red button on the wall.
* 49 A The tunnel's low hum drops away and the silence is enormous.
50 D HANK [O.S., CONT'D] (over radio): Thank you. Good work.
51 D WREN (to Dottie): Good work.
52 D DOTTIE (to the crossword): Good work.
53 A ¶ Dottie reaches over and takes the pen out of her own mouth and offers it to Wren, who does not need it, and takes it anyway.
54 A They sit there in the quiet.
55 A Wren writes something in a square.
56 A Dottie watches it appear.
57 D DOTTIE [CONT'D]: That's not seven letters.
58 D WREN: It's what fits.
59 A ¶ Dottie squints at the page.
60 A She reads it twice.
61 A She leans her head against Wren's shoulder, briefly, as if testing it, then straightens, as if she hadn't.
62 D DOTTIE: Fine. It fits.
* 63 A ¶ Outside the booth window, a single set of headlights swings off the road and slows toward the tunnel mouth.
* 64 A Neither of them sees it yet.
65 D WREN: You want a pop?
66 D DOTTIE: I want a lot of things.
67 D WREN (standing): They've got orange.
68 D DOTTIE: Orange is fine.
69 A ¶ Wren walks to the machine in the corner.
* 70 A A coin drops.
* 71 A A can clatters down.
72 A She carries it back and cracks it open and hands it over and Dottie drinks, looking at the headlights, and then at her.
* 73 A The lights stop at the tunnel mouth and idle there.
74 D WREN (into the radio, tired): Hank, we've got a car.
75 D HANK [O.S.] (over radio): Tell 'em we're closed.
76 D WREN (to Dottie): We're closed.
77 A ¶ Dottie stands.
78 A Smooths her scarf.
79 A Walks to the booth door.
80 D DOTTIE: I'll tell them.
81 A ¶ She goes out.
82 A Wren watches her through the glass, a small figure walking toward the headlights, one hand lifted, shaking her head.
* 83 A The car's engine idles, then backs away.
84 A Dottie turns, walks back, and sits down.
85 D DOTTIE [CONT'D]: They said thanks anyway.
86 D WREN: For what?
87 D DOTTIE: I don't know. Being closed.
88 A ¶ Wren laughs, properly this time, and puts her feet back up on the bucket.
* 89 A The heater ticks.
* 90 A The radio is quiet.
* 91 A On the paper between them, a word sits in its squares, almost the right length.

### SCENE s02076 | INT. FERRY TERMINAL LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): NADIRA HAQ, BIRDIE, PAYNE, GUS TREMBLAY, FITCH
* 1 A ¶ A concrete room beside the ticket hall.
* 2 A Twelve washers, eight dryers, a vending machine for soap.
* 3 A Fluorescent tubes buzz.
* 4 A Through a salt-stained window, the last ferry sits at its slip like a lit apartment block.
5 A ¶ NADIRA HAQ, 30, in a rain jacket, hair braided back, holds a basket against her hip.
6 A She is staring at Dryer Six.
* 7 A In Dryer Six, a pair of red socks goes around and around.
8 A ¶ On a plastic bench near the door sits ELLIS "BIRDIE" PAYNE, 28, Nadira's younger sister, in a big sweater, headphones around her neck.
9 A She watches Nadira like someone watching a pot.
10 A ¶ At the folding table stands GUS TREMBLAY, 33, a sailor off a freighter in a navy peacoat, folding a single white shirt into thirds.
11 A He has a duffel at his feet.
12 A He does not know the sisters.
13 A He knows only that they are loud in the quiet way.
14 A ¶ At the counter, behind sliding glass, MR. FITCH, 70s, the attendant, reads a newspaper he has read before.
15 D BIRDIE: You're staring at them.
16 D NADIRA: I'm not.
17 D BIRDIE: Nadi. They're his socks.
18 D NADIRA: They're not his. They're mine. They just look like his.
19 D BIRDIE: You bought red socks after he left.
20 D NADIRA: Not because of him.
21 D BIRDIE: Because of the color red?
22 A ¶ Nadira finally turns.
23 A She sets the basket on the table next to Gus, who slides his shirt to the side without comment.
24 A She starts pulling out towels, aggressively.
25 D NADIRA: I said I'd be fine, and I am.
26 D BIRDIE: You flooded the bathroom.
27 D NADIRA: That was the tap.
28 D BIRDIE: You were holding a mug at the time.
29 A ¶ Gus coughs, politely.
30 A Nadira glances at him, then back at her sister.
31 D NADIRA: Can we do this at home?
32 D BIRDIE: We're not at home. We're at the ferry terminal because you wouldn't let me drive you.
33 D NADIRA: I wanted to be on the water.
34 D BIRDIE: You wanted to be on the water and instead you're in a laundromat.
35 A ¶ Nadira stops.
36 A She holds a towel in both hands.
* 37 A The ferry horn sounds outside, one long note.
38 A Mr. Fitch turns a page.
39 D NADIRA: He said he'd be on that one.
40 A ¶ Birdie stands.
41 A Takes off her headphones.
42 A Walks over, slow, like approaching a horse.
43 D BIRDIE: Nadi.
44 D NADIRA: He said Thursday. The ten forty. He said, "I'll see you on the ten forty."
45 D BIRDIE: Okay.
46 D NADIRA: And I thought, if I'm already here, I'll just see him get off. And then I can decide.
47 D BIRDIE: Decide what?
48 D NADIRA (sharp): If I'm angry!
* 49 A ¶ It rings in the little room.
50 A Gus becomes interested in a button.
51 A Mr. Fitch lowers the paper by an inch.
52 D NADIRA [CONT'D] (quieter): I don't know what I am.
53 D BIRDIE: You're soggy, mostly.
54 A ¶ Nadira makes a noise that is half laugh and half something else.
55 A She drops the towel onto the table and presses the heels of her hands to her eyes.
56 A Birdie puts both arms around her from behind.
* 57 A The red socks go around and around.
58 D GUS: Excuse me. Ma'am.
59 A ¶ Both sisters turn.
60 D GUS [CONT'D]: The ten forty is cancelled. Engine trouble. They told us on the dock.
61 D NADIRA: Cancelled?
62 D GUS: The next one's seven in the morning.
63 D NADIRA: So he's not on it.
64 D GUS: I don't know who "he" is. But nobody's on it.
* 65 A ¶ Silence.
66 A Nadira looks at Birdie.
67 A Birdie looks at Nadira.
68 A Then Nadira begins to laugh, properly, helplessly, and sits down on the bench with her hand over her mouth, shoulders shaking.
69 A Birdie sits next to her.
70 D BIRDIE: Oh my God.
71 D NADIRA: He's not even coming.
72 D BIRDIE: Nobody's coming, Nadi.
73 D NADIRA: I could have stayed home!
74 D BIRDIE: You could have stayed home.
75 A ¶ They lean into each other, laughing, wiping their eyes.
76 A Gus returns to his shirt, folds the last third, and tucks it into the duffel.
77 A A small smile.
78 D MR. FITCH (not looking up): Dryer Six is done, by the way.
79 D NADIRA: Thanks, Mr. Fitch.
80 D MR. FITCH: Take the socks out. They'll shrink.
81 A ¶ She stands.
82 A Crosses to Dryer Six.
83 A Opens the door and the warm air rolls out over her face.
84 A She takes out the red socks, holds them up, looks at them for a long moment.
85 D NADIRA: They're just socks.
86 D BIRDIE: They're great socks.
87 D NADIRA: They are great socks.
88 A ¶ Nadira pairs them.
89 A Slips them into her basket.
90 A Birdie slings her headphones back around her neck.
91 A Gus lifts his duffel.
92 D GUS: Good luck, ladies.
93 D BIRDIE: You too, sailor.
94 A ¶ He nods at them, at Mr. Fitch, and goes out into the wind.
* 95 A The door sighs shut.
96 A Nadira lifts the basket, and Birdie takes the other handle without being asked.
97 D NADIRA: Seven in the morning.
98 D BIRDIE: I'll make you eggs first.
99 A ¶ They carry the basket out together.
100 A Mr. Fitch watches them go, then turns the page.

### SCENE s02077 | INT. SUPPLY CLOSET - FUN COMMITTEE HQ - DAY
Detected names (may be incomplete or contain aliases): GERALDINE MWANGI, OSWALD PRUITT
* 1 A ¶ A windowless closet with a laminated sign: FUN COMMITTEE.
* 2 A Shelves of streamers, foam trophies, and a half-inflated balloon arch.
3 A GERALDINE MWANGI, 40s, tightly wound, holds a clipboard.
4 A OSWALD PRUITT, 50s, soft-spoken facilities manager, holds a roll of tape.
5 D GERALDINE: You were late to the committee.
6 D OSWALD: I was fixing the ice machine.
7 D GERALDINE: The committee is mandatory.
8 D OSWALD: So is the ice machine.
9 D GERALDINE: Is it? Is ice mandatory?
10 D OSWALD: In July, ma'am, ice is the only thing that is.
11 D GERALDINE: Don't "ma'am" me. I'm chair.
12 D OSWALD: I know you're chair. You made the badge.
13 D GERALDINE: It's a lanyard.
14 D OSWALD: It's a lanyard that says CHAIR.
15 D GERALDINE: Because I am the chair.
16 D OSWALD: Of fun.
17 D GERALDINE: Yes, Oswald. Of fun.
18 D OSWALD: I just don't think fun has a chair.
19 D GERALDINE: That is exactly what someone without fun would say.
20 D OSWALD: Maybe so.
21 D GERALDINE: Item one. The summer picnic.
22 D OSWALD: Do we have a budget?
23 D GERALDINE: We have four hundred dollars and a dream.
24 D OSWALD: Four hundred dollars for two hundred people.
25 D GERALDINE: Forty people.
26 D OSWALD: Two hundred is on the slide.
27 D GERALDINE: Forget the slide. Forty.
28 D OSWALD: Ten dollars a head. That's a hot dog.
29 D GERALDINE: That's a hot dog and joy.
30 D OSWALD: Joy costs extra.
31 D GERALDINE: Joy is free. Bun is extra.
32 D OSWALD: Then we have a hot dog without a bun.
33 D GERALDINE: Then it's a sausage with a dream.
34 D OSWALD: I'd like that in writing.
35 D GERALDINE: Item two. The dunk tank.
36 D OSWALD: No.
37 D GERALDINE: You haven't heard it.
38 D OSWALD: I've heard enough. Dunk tanks are an insurance event.
39 D GERALDINE: Legal says it's fine.
40 D OSWALD: Legal is one man named Tyrone, and he said "probably."
41 D GERALDINE: "Probably" is yes in a good tie.
42 D OSWALD: Who volunteers to sit in the tank?
43 D GERALDINE: The regional director.
44 D OSWALD: Does the regional director know?
45 D GERALDINE: He will when the invitation goes out.
46 D OSWALD: So that's a no.
47 D GERALDINE: That's a surprise yes.
48 D OSWALD: I've worked here nineteen years. Nobody has ever been happy about a surprise.
49 D GERALDINE: You've never run one properly.
50 D OSWALD: I ran the fire drill.
51 D GERALDINE: Nobody was happy about that either.
52 D OSWALD: It was a fire drill, Geraldine.
53 D GERALDINE: Item three. Morale.
54 D OSWALD: Morale is not an item.
55 D GERALDINE: Everything is an item.
56 D OSWALD: Morale is weather. You can't put weather on a clipboard.
57 D GERALDINE: I've put weather on a clipboard. It was Q3.
58 D OSWALD: How did that go?
59 D GERALDINE: It rained on the picnic.
60 D OSWALD: Then what are we doing?
61 D GERALDINE: We are making it better.
62 D OSWALD: By what means?
63 D GERALDINE: By streamers, Oswald. By trophies. By a balloon arch, which you will finish inflating.
64 D OSWALD: I don't have a pump.
65 D GERALDINE: You have lungs.
66 D OSWALD: I have a bad one.
67 D GERALDINE: Then you'll inflate it slowly and with feeling.
68 D OSWALD: Is that in the bylaws?
69 D GERALDINE: It's in the spirit of the bylaws.
70 D OSWALD: Geraldine. Why did you take this on?
71 D GERALDINE: Somebody had to.
72 D OSWALD: Nobody had to.
73 D GERALDINE: Somebody had to want to.
74 D OSWALD: And that was you.
75 D GERALDINE: That was me. Hold the clipboard.
76 D OSWALD: I'm holding tape.
77 D GERALDINE: Hold both.
78 D OSWALD: Fine.
79 D GERALDINE: Now. Item four.
80 D OSWALD: How many items are there?
81 D GERALDINE: Eleven.
82 D OSWALD: It's four o'clock.
83 D GERALDINE: Then we'd better start.

### SCENE s02078 | EXT. CRANBERRY BOG - BEFORE DAWN
Detected names (may be incomplete or contain aliases): VIVIAN KESTREL, LEOPOLD ASANTE
* 1 A ¶ A flooded harvest bog, a rectangle of black water under a sky the color of dishwater.
* 2 A Ten thousand red berries float on the surface, a drifting crimson carpet corralled by yellow booms.
* 3 A Mist moves in low skeins.
* 4 A Far off a pump engine thumps.
5 A ¶ VIVIAN KESTREL, 40s, in chest waders and a stolen foreman's jacket, wades waist-deep through the berries with a dry bag held overhead.
6 A The berries part around her and close again behind, leaving no wake.
7 A She moves like a woman who has learned that patience is a kind of weight.
8 A ¶ She stops at the center of the bog.
9 A She looks at the sky, then at the far levee, and mutters.
10 D VIVIAN: Come on. Come on, you old goat.
* 11 A ¶ Nothing answers.
* 12 A A heron lifts from the reeds and flaps away.
13 A She waits, and sweat runs down her temple though the water is cold.
* 14 A ¶ A pair of headlights crawl along the levee road, a mile out.
* 15 A They slow, stop, go dark.
* 16 A A door shuts.
* 17 A The pump engine stutters and cuts out and the silence is sudden and total.
18 D VIVIAN [CONT'D] (to the dark): Twelve minutes, I told you. Twelve.
19 A ¶ A figure picks his way down the levee bank, flashlight beam bouncing.
20 A LEOPOLD ASANTE, 60s, heavy, in a tweed coat that has no business in a bog, slides on the last six feet of mud and lands on his hands.
* 21 A The flashlight goes in the water.
* 22 A It sinks glowing, shrinks, and vanishes.
23 D LEOPOLD: That was a good flashlight.
24 D VIVIAN: You were supposed to come alone.
25 D LEOPOLD: I came alone. The flashlight was a second guest.
26 A ¶ He wades out, holding his coat above the waterline with both fists, grimacing at every step.
* 27 A The berries bump his knees.
28 A At ten feet he stops, breathing hard.
29 D LEOPOLD [CONT'D]: You have it?
30 D VIVIAN: I have what you paid for.
31 D LEOPOLD: That's not an answer.
32 D VIVIAN: It's the only one you get until I see the envelope.
33 A ¶ He reaches into the coat.
34 A Takes out a plastic freezer bag, fat with cash, and holds it up.
* 35 A The bag shines dull yellow in the thin light.
36 A She lowers the dry bag and unzips the top.
37 A ¶ For a moment neither moves.
38 A Then Vivian's hand goes into the bag and Leopold's hand goes deeper into his coat, and both of them stop at once, because somewhere on the levee a dog barks.
39 D VIVIAN [CONT'D] (low): Whose dog?
40 D LEOPOLD: Not mine.
41 D VIVIAN: Whose dog, Leopold?
42 D LEOPOLD: I don't know! Farmers have dogs!
* 43 A ¶ The barking intensifies, joined by a second dog.
* 44 A Headlights flick on at the levee's far end, then another pair behind.
45 A Vivian sees them first.
46 A She throws the dry bag at Leopold, who catches it against his chest and goes down backward into the berries, which close over him in a red bloom.
47 D VIVIAN [CONT'D] (to herself): Stupid, stupid, stupid.
48 A ¶ She grabs his collar, hauls him up streaming and spitting, and shoves the freezer bag into her jacket.
49 A He struggles against her and they turn together in the berries, grappling, her elbow in his ribs, his knee in the water, until she plants a boot and pulls him bodily toward the reeds.
50 A They crash through the booms, scattering a hundred yards of floating berries, and fall into the sedge on the far side of the bog with the dry bag between them.
51 D LEOPOLD (coughing): You pushed me.
52 D VIVIAN: I saved you.
53 D LEOPOLD: You pushed me in a bog.
54 D VIVIAN: It's a saving push.
* 55 A ¶ The dogs reach the water's edge and stop, baying.
* 56 A Flashlights sweep the surface.
57 A A man's voice calls, indistinct, bored, tired.
58 A Leopold and Vivian lie flat in the sedge, shoulder to shoulder, not breathing, mud on their faces, red berries stuck in their hair like ornaments.
* 59 A ¶ The flashlights linger.
* 60 A A long minute.
* 61 A Then a truck door slams, an engine starts, and the headlights draw away down the levee.
* 62 A ¶ The two lie still a while longer.
* 63 A The mist closes in.
* 64 A The first thin light comes across the water and turns the berries to coral.
65 D LEOPOLD (at last): We'll never do this again.
66 D VIVIAN: No.
67 D LEOPOLD: It was a bad idea.
68 D VIVIAN: The worst.
69 A ¶ She sits up and unzips the dry bag.
* 70 A Inside is a small velvet case.
71 A She opens it, and the dawn catches whatever is in there, a cold white fire, and for the first time that morning Vivian smiles.
72 D LEOPOLD (softly): Is it all right?
73 D VIVIAN: It's perfect.
74 A ¶ Leopold takes the freezer bag from her jacket, unsealed, and counts the bills with wet fingers.
* 75 A A berry has got into the bag.
76 A He fishes it out and eats it.
77 D LEOPOLD: Tart.
78 D VIVIAN: They always are.
79 A ¶ She closes the case.
80 A He holds out his hand and she shakes it, solemn, absurd, both of them red to the elbows.
81 A Then they stand and wade away in opposite directions through the drifting fruit.

### SCENE s02079 | INT. FERRY GALLEY KITCHEN - EVENING
Detected names (may be incomplete or contain aliases): CONSUELO DELGADO, MATEO, ISOLDE, RUDY
* 1 A ¶ A narrow steel kitchen below decks, swaying gently.
* 2 A Pots hang from magnetic strips.
* 3 A A porthole shows gray swells.
4 A ¶ CONSUELO DELGADO, 70s, in an apron and a silver bun, rolls dough on a stainless counter.
5 A At the other end, MATEO, 12, peels potatoes into a bucket with great concentration.
6 A Beside him sits ISOLDE, 16, in a school sweater, her phone propped against a salt shaker, thumbs idle.
* 7 A ¶ A wall-mounted intercom crackles.
8 D RUDY [V.O.] (over intercom): Galley, this is the bridge. Mamá, you got a minute?
9 A ¶ Consuelo does not stop rolling.
10 A Mateo glances up.
11 A Isolde slides her phone face-down.
12 D CONSUELO (to the intercom): I have dough.
13 D RUDY [V.O.] (over intercom): It's about Isolde's thing.
14 D CONSUELO: Isolde is here. Say it to the room.
* 15 A ¶ A pause.
* 16 A The ferry rocks.
17 A Mateo drops a peeled potato into the bucket with a quiet plunk.
18 D RUDY [V.O.] (over intercom): It can wait.
19 D CONSUELO: Then it waits.
20 A ¶ She flours the pin.
21 A Isolde lifts her eyes to the porthole and keeps them there.
22 A Consuelo slides a peeled potato across the counter without looking, and Isolde takes it and starts quartering it with a small knife.
23 D MATEO: Abuela, is the bridge mad?
24 D CONSUELO: The bridge is steering.
25 D MATEO: That's not an answer.
26 D CONSUELO: It's a ferry. It's the answer.
27 A ¶ Isolde puts the knife down.
28 A She picks up the potato quarters, carries them to the pot on the stove, and drops them in one at a time.
29 A Consuelo watches her do it.
30 A Her shoulders loosen by a fraction of a degree.
31 D CONSUELO [CONT'D]: Salt.
32 A ¶ Isolde reaches for the shaker, moving her phone aside.
33 A She pinches salt over the pot.
34 A Consuelo nods.
* 35 A The intercom clicks once and goes quiet, still listening.
* 36 A Nobody speaks to it.
37 D ISOLDE (to the pot): Tell him I'll come up after dinner.
38 D CONSUELO (to the intercom): She'll come up after dinner.
* 39 A ¶ The intercom clicks off.
40 A Mateo hums.
* 41 A The dough spreads, thinner and thinner.

### SCENE s02080 | INT. DRIVE-IN CLIMBING WALL - NIGHT
Detected names (may be incomplete or contain aliases): PEP, ILUNGA, BARNABY CROSS
* 1 A ¶ The back of a derelict drive-in screen, twelve stories of cracked white plywood, now bolted with colored holds and lit by a single sodium lamp.
* 2 A Weeds push through the empty parking lot below.
* 3 A A thermos steams on a folding table at the base.
4 A ¶ PERPETUA "PEP" ILUNGA, 24, wiry, chalk to the elbows, hangs from a sloping overhang thirty feet up.
5 A Her forearms are knotted.
6 A She breathes through her teeth, reaching for a hold the size of a bottle cap and missing it by an inch.
7 A She swings out, catches herself, and swears softly to the dark.
8 A ¶ Her fingers slide off.
9 A She falls, and the rope catches her with a soft whump.
10 A She hangs spinning in her harness, the lot turning below her, then reaches out and grabs the wall again.
11 A She lets out a laugh that is half sob, half triumph.
12 D PEP: Again.
13 A ¶ She climbs.
14 A Hand over hand, foot to foot, the slow rhythm of someone who has done this route two hundred times.
15 A She reaches the overhang and sticks the bottle cap this time.
16 A Her whole body locks.
17 A She hangs there, shaking, victorious, and for a breath she is perfectly still.
* 18 A ¶ Then a car engine on gravel.
* 19 A Headlights sweep the wall and pin her, a bug on a screen.
20 A She twists her head.
* 21 A The car, a dented sedan, idles at the edge of the lot.
* 22 A ¶ A door opens.
23 A BARNABY CROSS, 50s, thin, in a windbreaker and a ball cap, steps out holding a clipboard.
24 A He does not look up.
25 A He walks to the folding table, picks up the thermos, sniffs it, and sets it down.
26 D BARNABY (calling up): Perpetua Ilunga?
27 D PEP: Who's asking?
28 D BARNABY: County. Code enforcement.
29 A ¶ The word lands like a stone in a pond.
30 A Her grip loosens.
31 A She slips a foot, catches it, and clings on with new fury.
32 D PEP: It's private property.
33 D BARNABY: It's a structure over fifty feet without a permit.
34 D PEP: It's a screen. It's been here since 1962.
35 D BARNABY: That's the problem.
36 A ¶ She presses her forehead against the plywood.
37 A Below, Barnaby writes something on the clipboard.
38 A Then, to her astonishment, he sets it on the table, takes off his ball cap, and rolls his shoulders.
39 D BARNABY [CONT'D]: Is that a V6?
40 D PEP: What?
41 D BARNABY: The problem you're on. The one with the sloper.
42 D PEP (slowly): Yes?
43 D BARNABY: Left heel hook. Then you can pull through. You're fighting your own hips.
44 A ¶ She stares at him.
* 45 A Silence.
46 A Then she shifts her left foot, hooks the heel on a hold, and her hips swing into the wall.
* 47 A The next move unlocks.
48 A She reaches the top, slaps the lip, and shouts.
49 D PEP: It worked!
50 A ¶ Barnaby nods.
51 A He picks up the clipboard, tears off a yellow slip, and tucks it under the thermos.
52 D BARNABY: You have thirty days.
53 D PEP: To do what?
54 D BARNABY: Come see me. I've got a form.
55 A ¶ She laughs, breathless, and lets go, falling the last of the way down the rope.
56 A Barnaby puts his cap back on, climbs into his car, and drives off.
57 A Pep dangles in the lamp light, turning, the yellow slip fluttering under the thermos.

### SCENE s02081 | INT. LIGHTSHIP TELEGRAPH CABIN - NIGHT (1894)
Detected names (may be incomplete or contain aliases): WOMAN, ODILE MARCHAND
* 1 A ¶ A cramped wooden cabin that rolls with each swell.
* 2 A A brass lamp swings on a chain.
* 3 A Charts on the wall.
* 4 A A wireless set, new and awkward, squats on a table beside a tin cup of cold tea.
5 A ¶ A WOMAN, 30s, sits very upright in a wool coat buttoned to the chin, a clerk's cap pinned over her hair.
6 A Her hands rest in her lap, folded as if for prayer.
7 A A pencil sits behind her ear.
8 A She has the calm of someone who has decided something.
9 A ¶ She dips a pen and begins to write on a telegraph form.
* 10 A The nib scratches.
* 11 A The ship groans.
12 A She writes without pause, as if the words have been waiting.
13 D WOMAN [V.O.] (reading her own letter): Dear Mother. The sea is quiet tonight. I have eaten, and I have slept, and the keeper tells me the fog will lift by morning. You mustn't worry that I have not written. There was nothing to say.
14 A ¶ She stops.
15 A Reads the line back, soundless.
16 A Crosses out "nothing" and writes "little."
17 A She sets the pen down.
18 D WOMAN [V.O., CONT'D]: It is not true that I am happy. But I am not unhappy. I am in the place where one is neither, which I have come to prefer.
* 19 A ¶ A lazy swell lifts the cabin and lets it down.
20 A She does not stir.
21 A She picks up the cup, tastes the tea, grimaces, and puts it back.
* 22 A On the table, the wireless set clicks twice.
23 A She watches it.
* 24 A Nothing follows.
25 A ¶ She takes up the pen once more.
26 D WOMAN [V.O., CONT'D]: By the time you read this, the inspector will have come, and he will have found the log in good order. I want you to know that I kept it so. Every entry, every hour.
27 A ¶ She lifts the lamp from its hook and sets it on the table.
* 28 A The wick flares.
* 29 A In its light we see that the corner of the log book is charred, a black fan of ash across three pages.
30 A She turns the log to face her and closes it with a decisive thump.
* 31 A ¶ The wireless set clicks again, three long, one short.
32 A She stiffens.
33 A Her pencil comes down from her ear and begins to write the code as it arrives, in neat block capitals.
34 A She reads it.
35 A Reads it again.
36 A ¶ Slowly, she tears the form from its pad.
37 A She folds it in thirds.
38 A She sets it inside her coat, against her heart.
39 D WOMAN [V.O., CONT'D]: Forgive me, Mother. I have done a thing, and I will not ask you to understand it. Only that when they ask you my name, you will say it plainly.
40 A ¶ She reaches for the letter and signs it, in a firm hand, at the bottom.
41 A ¶ INSERT - THE LETTER
* 42 A ¶ The signature reads: ODILE MARCHAND.
43 A ¶ BACK TO SCENE
44 A ¶ ODILE sets down the pen and stands.
45 A She puts on her cap, straightens the coat.
46 A Takes the lamp.
* 47 A The wireless clicks again, insistent.
48 A Odile blows out the flame.
* 49 A ¶ In the dark, the ship rolls on.
* 50 A A door opens, a rush of wind, and the sound of the sea.
51 D ODILE [V.O.]: It is a quiet night.
* 52 A ¶ The door shuts.

### SCENE s02082 | INT. ZERO-G LAUNDROMAT - ORBITAL HAB RING - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): OSKAR, LIN, DOC FENWICK, RHEA
* 1 A ¶ Washers hum on the walls like nesting beetles.
* 2 A Clothes float in soapy spheres.
3 A ¶ TANVEER and MBALI float by the dryers, arguing in whispers.
4 A She jabs a finger at his chest.
5 A He catches it, gently.
6 A OSKAR clings to a handrail, pale, a laundry bag knotted around his wrist.
7 A ¶ LIN drifts up from the aft hatch, holding a wrench, and cuts the whisper in half with her voice.
8 D LIN: Who ran a wash with coolant in it?
* 9 A ¶ Nobody answers.
10 A She turns slowly in the air.
11 A They all look at Oskar.
12 D OSKAR: It was a blue bottle.
13 D LIN: It was coolant.
14 A ¶ DOC FENWICK, an old man in a cardigan, pushes off the far wall like a swimmer and catches a floating sock.
15 A He examines it, sniffs it, and sighs.
16 D DOC FENWICK: Everybody out.
17 A ¶ RHEA, the youngest, laughs, then stops, then laughs harder.
* 18 A The washer behind her shudders.
* 19 A A warning light goes from green to red.
20 A Mbali grabs Tanveer.
21 A Lin grabs Oskar.
22 A Doc Fenwick grabs the sock.
* 23 A The machine bursts open and a pink cloud of foam rolls across the room, swallowing all six of them.

### SCENE s02083 | INT. HOTEL ASTORIA SWITCHBOARD ROOM - NIGHT (1927)
Detected names (may be incomplete or contain aliases): ADELAIDE PRUITT-ROSS, BELLHOP, FLOYD, CLARENCE, HOLCOMB
* 1 A ¶ A narrow room behind the lobby.
* 2 A A tall brass switchboard glows with a hundred tiny bulbs.
* 3 A A desk lamp, a half-eaten sandwich, a cup of cocoa going cold.
4 A ¶ ADELAIDE PRUITT-ROSS, 20s, a headset over her marcelled waves, plugs a cable into a jack with practiced calm.
5 A She hums.
6 A A BELLHOP named FLOYD, 17, lingers in the doorway, hat in hand, watching her.
7 D FLOYD: Miss Adelaide, the gentleman in 412 wants his bags brought up and his brandy brought down.
8 D ADELAIDE: That's the wrong way round.
9 D FLOYD: That's what he said.
10 D ADELAIDE: Then he's had too much brandy.
11 A ¶ She plugs another cable.
* 12 A A bulb winks out.
13 A Floyd steps into the room to see better, bumps the desk, and the cocoa cup slides to the edge.
14 A Adelaide catches it without looking, and in the same motion her other hand flicks a switch.
* 15 A A voice crackles on the line.
16 D CLARENCE [O.S.] (over phone): Operator? Operator, I'd like the front desk, please.
17 D ADELAIDE (smooth): One moment, sir. Connecting.
18 A ¶ She presses a key.
* 19 A The voice is cut off.
20 A She waits a beat, then removes her headset and sets it on the desk.
21 D FLOYD: Who was that?
22 D ADELAIDE: Nobody. A man asking for the front desk.
23 D FLOYD: Isn't that your job?
24 D ADELAIDE: Tonight, it's my pleasure to be difficult.
25 A ¶ She takes a bite of the sandwich.
26 A Floyd stares.
* 27 A Then the board lights up all at once, every bulb at once, a Christmas tree of demand.
28 A Adelaide stands.
29 A The headset is back on her head before she has finished chewing.
30 D ADELAIDE [CONT'D] (into the mouthpiece): Hotel Astoria, how may I direct your call?
31 D CLARENCE [O.S.] (over phone): Miss, I am the man in 412 and I would like it noted that I have been cut off three times.
32 D ADELAIDE: Noted, sir.
33 A ¶ She flips a second switch with her elbow.
* 34 A A new voice cuts in, dry and tired.
35 D HOLCOMB [O.S.] (over phone): Front desk. Mr. Holcomb speaking. Adelaide, is that man still complaining?
36 D ADELAIDE: He is, Mr. Holcomb. Quite warmly.

### SCENE s02084 | INT. TAXIDERMY AUCTION HOUSE - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LUCIAN VARGA, DOMINIC ACHEBE, ROSALIND BEAUMONT, TOBIAS FINCH
* 1 A ¶ Shelves of glass-eyed animals line the walls: a bear, a pheasant, a snarling badger mounted on a plinth.
* 2 A Tags dangle from their feet.
* 3 A A single green-shaded lamp.
* 4 A A card table with a briefcase on it.
5 A ¶ LUCIAN VARGA, 40s, silk scarf, silver rings, leans on the table.
6 A DOMINIC ACHEBE, 30s, broad-shouldered in a gray suit, stands in the doorway, arms folded.
7 A Between them sits ROSALIND BEAUMONT, 50s, an auctioneer's apron over her blouse, hands flat on the briefcase.
8 D LUCIAN: Open it.
9 D ROSALIND: I told you. The lot is withdrawn.
10 D LUCIAN: Open it, Rosalind.
11 A ¶ She does not.
12 A Dominic pushes off the doorframe.
13 A He walks to the bear, runs a hand down its flank, and puts his thumb through a seam in the hide.
14 A He pulls it wider.
* 15 A Stuffing spills out.
* 16 A So do three small velvet pouches, which drop to the floor and clink.
17 A Rosalind flinches.
18 A Lucian smiles like a man who is bored by being right.
19 D DOMINIC: Found something.
20 D ROSALIND: Please don't.
21 A ¶ Dominic crouches and picks up a pouch.
22 A He loosens its drawstring and pours a dozen uncut stones into his palm, cloudy, gray, ugly.
23 A He looks at Lucian.
24 A Lucian looks at Rosalind.
25 A She puts her face in her hands.
26 D LUCIAN: Where's the rest?
27 D ROSALIND: That's all of it.
28 D LUCIAN: That's not ten million.
29 D ROSALIND: The rest is in the badger.
30 A ¶ Dominic stands, crosses to the badger, and grips it by the scruff.
* 31 A The plinth wobbles.
32 A He lifts it.
* 33 A Something rattles inside.
* 34 A ¶ A door bangs open at the far end of the room.
35 A TOBIAS FINCH, 20s, a young constable in a damp uniform, steps in with a flashlight in one hand and a radio clipped to his shoulder.
36 A He freezes.
* 37 A The flashlight beam finds Dominic holding the badger, Lucian leaning on the table, Rosalind with her face in her hands.
38 D TOBIAS: Evening. Everything all right in here?
39 D LUCIAN: Perfectly, officer.
40 D TOBIAS: Door was open.
41 D LUCIAN: We're appraising.
42 D TOBIAS: At eleven at night?
43 D DOMINIC (a beat): Estate sale.
44 A ¶ Tobias looks at the bear.
45 A At the spilled stuffing.
46 A At the pouches on the floor.
47 A His flashlight drifts to the badger and then up to Dominic's face.
48 A He sniffs.
49 D TOBIAS: That's an interesting badger.
* 50 A ¶ Nobody breathes.
* 51 A The badger rattles again as Dominic's grip shifts.
52 D TOBIAS [CONT'D]: My nan had one.
53 D LUCIAN (carefully): Did she?
54 D TOBIAS: Tore it up when I was seven. I wanted to see inside.
55 D ROSALIND (muffled): What did you find?
56 D TOBIAS: Sawdust. And a hundred pounds.
* 57 A ¶ A long, strange quiet.
58 A Lucian laughs, one abrupt breath.
59 A Dominic sets down the badger very slowly.
60 A Rosalind lowers her hands.
61 A Tobias holds up the flashlight and clicks it off.
62 D TOBIAS [CONT'D]: I'll say the door was locked.
63 A ¶ He leaves.
* 64 A His footsteps recede down the corridor.
65 A Lucian walks to the pouches and starts gathering them.
66 A Dominic watches the empty doorway.

### SCENE s02085 | EXT. DRAINED MUNICIPAL SWIMMING POOL - DAY
Detected names (may be incomplete or contain aliases): FACILITATOR PRIYA DESHMUKH-WALL, BARNES, LEOCADIA, WITOLD, DEZ, ROUSE
* 1 A ¶ A company retreat held in the deep end of a decommissioned pool.
* 2 A Folding chairs are arranged in a circle on the sloped floor, tilted slightly toward the drain.
* 3 A Lane lines coil in a corner like dead snakes.
* 4 A A banner on the diving board reads: SYNERGY THROUGH SPLASH.
5 A ¶ FACILITATOR PRIYA DESHMUKH-WALL, 40s, tailored linen, a headset mic taped to her cheek, stands in the exact center on the drain cover.
6 A Around her sit four employees: BARNES, 50s, sales director, in a polo with a company crest; LEOCADIA, 30s, product lead, cross-legged on her chair; WITOLD, 20s, an intern sipping an iced coffee; and DESMOND "DEZ" ROUSE, 40s, finance, who tugs at his collar and checks his watch every ninety seconds.
7 D PRIYA: Everyone, I want you to close your eyes and picture water. Warm, clear, still water.
8 D BARNES (whispering to Leocadia): It's a pool.
9 D LEOCADIA (whispering back): It's a drained pool.
10 D WITOLD (brightly): Can I picture the empty version?
11 D PRIYA: You may picture whatever serves you.
12 A ¶ Priya paces a slow arc around the circle, her sandals slapping on the tile.
13 A Barnes opens one eye and peeks at Dez.
14 A Dez peeks back.
15 A Leocadia sips her water bottle and rearranges her crossed legs.
16 A Witold's chair tilts and he catches the diving-board ladder with one hand without opening his eyes.
17 D DEZ (muttering): We've done this twice already.
18 D PRIYA: Dez, I'm hearing resistance.
19 D DEZ: I'm hearing a leaf blower.
20 A ¶ Everyone listens.
* 21 A A distant whine over the pool wall.
22 A Priya smiles, patient.
23 D PRIYA: We call that the sound of the world continuing.
24 D BARNES: Can we get to the part with the numbers?
25 D PRIYA: There are no numbers today.
26 D BARNES: Then why am I here?
27 D PRIYA (to the group): Because you want to be seen.
28 A ¶ Barnes folds his arms.
* 29 A A long silence.
* 30 A Witold's iced coffee crackles as the ice shifts.
31 A Leocadia clears her throat and raises her hand like a schoolchild.
32 D LEOCADIA: Priya, I think I'm going to say something and I need everyone to just let me.
33 D PRIYA: This is a safe deep end.
34 D LEOCADIA: We lost the Hartwell contract. Last Tuesday. The CEO told us not to say anything.
35 A ¶ The circle stiffens.
36 A Barnes' arms drop.
37 A Dez stops fiddling with his collar.
38 A Witold lowers his coffee.
39 D DEZ (very quietly): Oh God.
40 D BARNES: How do you know?
41 D LEOCADIA: I wrote the termination letter.
* 42 A ¶ A beat.
43 A Priya, for the first time all morning, says nothing at all.
* 44 A The leaf blower whines on, rising and falling.
45 A Then Barnes begins, slowly, to laugh.
46 A He wheezes, shoulders shaking, tears in his eyes, and the others catch it one by one, even Dez, even Witold, a ragged communal howl that echoes off the tile.
47 D PRIYA (softly, into her mic): I think we've just had a breakthrough.
48 D BARNES (still laughing): Priya, we've had a firing.

### SCENE s02086 | INT. AEROSTAT BAKERY - UPPER CLOUD DECK OF VENUS - DAY
Detected names (may be incomplete or contain aliases): MADAME ADEBOLA-QUINN, PIETRO, DISPATCH, NOOR, INSPECTOR LOGANATHAN
* 1 A ¶ A warm, low-ceilinged kitchen suspended in the sulfur haze, its walls lined with copper ovens and rattling racks of dough.
* 2 A Through a thick quartz porthole, orange clouds roil like boiling custard.
* 3 A The air smells of yeast and faint lemon.
* 4 A Every surface is bolted down.
5 A ¶ At a floured table kneads MADAME ADEBOLA-QUINN, 60s, the head baker, a woman built like a ship's prow, with burn scars freckling her forearms and a gaze that has outlasted three bankruptcies.
6 A Beside her, PIETRO, 19, her apprentice, is piping icing onto a tray of tiny cakes with the care of someone defusing a bomb.
* 7 A ¶ An intercom speaker above the oven door crackles.
8 D DISPATCH [V.O.] (over intercom): Bakery, this is Dispatch. Cloud shear in four minutes. Secure your loose items.
9 D MADAME ADEBOLA-QUINN: Acknowledged.
10 A ¶ She wipes her hands on her apron.
11 A Pietro glances at the porthole, where the clouds are beginning to churn faster.
* 12 A A cake slips from the tray and lands on the floor with a quiet splat.
13 A ¶ At the back, NOOR, 30s, a pastry cook with flour to her elbows, hauls a tray of buns into the warming rack and does not turn around.
14 D NOOR: Starboard shutters are down, Madame.
15 D PIETRO: Madame. The shear is on the starboard side.
16 D MADAME ADEBOLA-QUINN: I can smell it.
17 D PIETRO: Should we turn off the ovens?
18 D MADAME ADEBOLA-QUINN: We do not turn off the ovens. We turn off the nerves.
* 19 A ¶ The floor shudders.
* 20 A Racks rattle.
* 21 A A cloud of flour lifts from the table and hangs in the air like smoke.
22 A Madame Adebola-Quinn lays a steady hand on a copper oven door.
23 A Pietro takes the icing bag in a white-knuckled grip and keeps piping.
* 24 A ¶ The door at the far end of the kitchen bangs open.
25 A A figure staggers in, a tall woman in a gray inspector's coat dusted with orange pollen, holding a clipboard and a respirator mask in one hand.
26 A This is INSPECTOR LOGANATHAN, 40s, severe, her lenses fogged.
27 A She coughs and waves the mask.
28 D INSPECTOR LOGANATHAN: Surprise audit. Nobody move.
29 D MADAME ADEBOLA-QUINN: We are about to be sheared.
30 D INSPECTOR LOGANATHAN: Then this will be a very memorable audit.
* 31 A ¶ The floor drops half a foot, rises again.
* 32 A Everything tilts.
33 A Pietro yelps.
* 34 A A rack of rolls crashes to the floor and scatters across the tile.
35 A The inspector grabs the nearest table and hangs on.
36 D DISPATCH [V.O.] (over intercom): Shear in thirty seconds. All hands, brace.
37 D PIETRO (near tears): I don't want to die in a bakery!
38 D MADAME ADEBOLA-QUINN (deadpan): You'll die in a very clean bakery.
39 D INSPECTOR LOGANATHAN (writing on her clipboard): That's the first compliment I've noted.
* 40 A ¶ The shear hits.
* 41 A The whole kitchen lurches, spins a quarter turn on its tether, and settles.
* 42 A Flour falls like snow.
* 43 A Then, slowly, the shaking stops.
* 44 A The orange clouds beyond the porthole begin to calm.
45 A They stand there, three people covered in white, hanging on to a table.
46 D PIETRO (tiny): Did we make it?
47 D DISPATCH [V.O.] (over intercom): Shear has passed. Carry on.
48 D MADAME ADEBOLA-QUINN (to the room): Carry on.
49 A ¶ She straightens.
50 A Picks a cake off the floor, blows on it, and bites it.
51 A She nods.
52 D MADAME ADEBOLA-QUINN [CONT'D]: Still good.
53 A ¶ The inspector lowers her clipboard.
54 A She takes a cake from the tray, tastes it, and lowers her mask.
55 D INSPECTOR LOGANATHAN: Pass.

### SCENE s02087 | INT. PIANO TUNER'S WORKSHOP - EARLY MORNING
Detected names (may be incomplete or contain aliases): MARGUERITE OYELOWO-STRAND
* 1 A ¶ A narrow workshop of felt, wire, and old oak.
* 2 A Hammers hang in rows like tiny skulls.
* 3 A A gutted upright piano stands against one wall, its keys exposed.
* 4 A Gray light through a dusty skylight.
5 A ¶ MARGUERITE OYELOWO-STRAND, 60s, small and exact, in a canvas apron, sits at a bench with a tuning lever in her hand.
6 A Her hair is pinned up with a pencil.
7 A Her glasses are pushed onto her forehead.
8 A She presses a single key, and a note hangs in the air, flat.
* 9 A ¶ An answering machine on the shelf blinks red.
10 A She regards it.
11 A She reaches over and presses PLAY.
12 D MARGUERITE [V.O.] (her own recorded voice, bright): You've reached Oyelowo-Strand Piano Service. Leave a message and I'll return your call.
* 13 A ¶ BEEP.
* 14 A Silence on the tape.
* 15 A Nine seconds of breath, nothing more.
* 16 A Then a click.
17 A ¶ She rewinds.
18 A Plays it again.
* 19 A The same nine seconds of breath.
20 A She sets down the lever.
21 A Her thumb moves back and forth across the rim of the bench, back and forth.
22 A ¶ She presses the key again.
* 23 A The note is still flat.
24 A She picks up the lever, fits it to the pin, and gives a quarter turn.
25 A Another press.
* 26 A The note rises.
* 27 A It is nearly right.
28 A ¶ She plays the nine seconds one more time.
29 A Midway, her hand closes on the lever hard enough to whiten the knuckles.
* 30 A The tape clicks off.
* 31 A The lever snaps against the piano's iron frame, a harsh sharp CLANG that rings through the workshop.
32 A ¶ She stands.
33 A Walks to the machine.
34 A Pulls the plug from the wall.
* 35 A The red light dies.
36 A ¶ Then she sits at the keys and plays a single slow chord, four notes, perfectly in tune.
37 A She holds it until the sound is gone.

### SCENE s02088 | EXT. SALT-LICK STAGE STATION - NEVADA TERRITORY - DAY
Detected names (may be incomplete or contain aliases): OLD CASPER VANDERHOOF, LUPE, ESCOBEDO, JEDEDIAH HOLLOWAY, PRUDENCE LATIMER, WYATT BROOKS, TOMÁS
* 1 A ¶ A dusty way station with a sagging porch, a hand-pump well, and a corral.
* 2 A A white salt flat shimmers beyond.
* 3 A A stagecoach rests with its team unhitched, horses nosing at a lick of gray rock.
4 A ¶ On the porch sits OLD CASPER VANDERHOOF, 70s, in a rocker, whittling.
5 A Beside him, his granddaughter LUPE, 10, dangles bare feet off the boards.
6 A Across the yard the stagecoach driver, TOMÁS ESCOBEDO, 40s, leans against a wheel, hat tipped over his eyes.
7 A A passenger, the preacher JEDEDIAH HOLLOWAY, 50s, stands at the pump filling a canteen.
8 A Inside the open stagecoach door, the passenger MRS. PRUDENCE LATIMER, 30s, fans herself with a handkerchief.
9 A At the corral rail, a ranch hand named WYATT BROOKS, 20s, scratches a mule's ear.
* 10 A ¶ Nobody hurries.
* 11 A A hawk circles overhead.
12 A Casper's knife shaves a long curl off the stick.
13 A Lupe watches it fall.
14 D LUPE: Grandpa, what's it going to be?
15 D CASPER: A duck.
16 D LUPE: It looks like a spoon.
17 D CASPER: That's a duck in a hurry.
18 A ¶ Tomás pushes up his hat and glances at the sun.
19 A Jedediah finishes with the canteen and pumps the handle twice more just to hear it creak.
20 A Prudence steps down from the coach, shakes the dust from her skirt, and crosses to the porch, handing the handkerchief to Lupe, who wipes her nose and hands it back with great seriousness.
21 A Wyatt gives the mule a last pat and ambles over to join them, thumbs in his belt.
22 D WYATT: Will she be rolling by noon?
23 D TOMÁS: When the horses finish licking.
24 D WYATT: Shame to rush them.
25 D JEDEDIAH: The Lord rested on the seventh day.
26 D TOMÁS: The Lord didn't have a schedule from the railroad.
27 D PRUDENCE (smiling): Then let us rest, gentlemen. I have nowhere I would rather not be.
28 D CASPER: Spoken like a woman who's seen Reno.
29 D PRUDENCE: Twice.
* 30 A ¶ The hawk drifts lower.
31 A Lupe points.
32 A Everyone looks up.
* 33 A For a long moment the whole station watches the bird wheel against the bright sky, and then it banks and is gone over the flat.
34 D CASPER: That's a duck, too.
35 D LUPE: It's not.
36 D CASPER: It's a duck in a hurry.
