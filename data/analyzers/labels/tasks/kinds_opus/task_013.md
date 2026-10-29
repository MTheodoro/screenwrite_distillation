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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0013.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01100 | INT. ORBITAL GREENHOUSE RING - OBSERVATION DECK - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): YASMIN HOSSAIN-RYDER, TECHNICIAN WALDEMAR OKPARA, HALCYON, COMMANDER IRIS TANAKA-LUND
* 1 A ¶ A curved corridor lined with hydroponic racks.
* 2 A Violet grow-light.
* 3 A A viewport shows Earth turning slowly below.
* 4 A The air smells of basil and recycled coolant.
5 A ¶ DR. YASMIN HOSSAIN-RYDER, 40s, sits cross-legged on the floor, a tablet balanced on her knee.
6 A She stirs a pouch of reconstituted tea.
7 A Her colleague, TECHNICIAN WALDEMAR OKPARA, 30s, wipes down a nutrient valve.
8 A Their station AI, a soft voice called HALCYON, murmurs from a speaker near the ceiling.
9 A Beside the viewport, the commander, COMMANDER IRIS TANAKA-LUND, 50s, stands with her arms folded, gazing at the planet.
10 A ¶ Yasmin sips.
11 A Waldemar wipes.
12 A Iris does not move.
13 A She hums low, tuneless.
* 14 D HALCYON [V.O.]: Humidity at sixty-two percent. Within tolerance.
* 15 D YASMIN (not looking up): Thank you, Halcyon.
* 16 D HALCYON [V.O.]: You are welcome. Would you like the evening readings?
* 17 D YASMIN: Later.
18 A ¶ She taps the tablet.
19 A Waldemar glances at her, then at the commander.
20 A He lowers his voice.
* 21 D WALDEMAR: Is she okay?
* 22 D YASMIN: She's thinking.
* 23 D WALDEMAR: She's been thinking for an hour.
* 24 D YASMIN: She's the commander. She thinks in hours.
25 A ¶ He nods and returns to the valve.
* 26 A A drop of nutrient solution beads on the pipe.
27 A He catches it with his thumb.
28 A ¶ Iris turns from the viewport.
29 A Looks at them both with a mild, unreadable expression.
* 30 D IRIS: We got the message from Mission Control.
* 31 D YASMIN: The extension?
* 32 D IRIS: Six more months.
33 A ¶ Waldemar's rag stops.
34 A Yasmin sets down the tablet.
* 35 A For a moment the only sound is the hum of the racks.
* 36 D WALDEMAR (carefully): Ma'am, the crew rotation --
* 37 D IRIS: Is delayed. Yes.
* 38 D YASMIN: And the supply drop?
* 39 D IRIS: Sufficient. They believe.
40 A ¶ She walks to the nearest rack, brushes the leaves of a tomato plant with two fingers, and inhales.
* 41 D IRIS [CONT'D]: Tomatoes should be ready by the third week.
42 A ¶ Yasmin and Waldemar exchange a look.
43 A He nods to her.
44 A She shrugs, resigned.
45 A He folds the rag and sets it by the valve.
* 46 D HALCYON [V.O.]: Would anyone care for a cup of tea?
* 47 D IRIS (a small smile): Yes, Halcyon. Four.
* 48 D HALCYON [V.O.]: Four, Commander? There are three of you.
49 A ¶ Iris pauses.
50 A The smile fades.
51 A She turns to the speaker.
* 52 D IRIS: ...Three. Of course. Three.
53 A ¶ She walks away toward the corridor, one hand trailing along the rack.
54 A Waldemar watches her go, then looks at Yasmin.
* 55 D WALDEMAR: Who was the fourth?
* 56 D YASMIN (quietly): I'll tell you later.

### SCENE s01101 | INT. DECOMMISSIONED SUBMARINE BAY - SPACE STATION - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN LUCIANA MBEKI-ROSSI, ENGINEER DORIAN WESTBROOK-ANAND, MEDIC IMANI SOLBERG, SECURITY CHIEF PAVEL ORLOV-DIALLO, LINGUIST ESPERANZA BALOGUN, TEO ABERNATHY-LIU, COMMS
* 1 A ¶ A long dim hangar.
* 2 A Hull plates ticking as they cool.
* 3 A A flickering amber strip light.
* 4 A A rack of pressure suits like hanging skins.
5 A ¶ CAPTAIN LUCIANA MBEKI-ROSSI, 50s, shaved head, grease-stained flight suit, kneels beside a dark console.
6 A Next to her, ENGINEER DORIAN WESTBROOK-ANAND, 30s, arms crossed, watches a diagnostic wheel spin.
7 A Further off, MEDIC IMANI SOLBERG, 20s, hugs a first-aid case, her hands trembling.
8 A At the hatch, SECURITY CHIEF PAVEL ORLOV-DIALLO, 40s, holds a pulse rifle, eyes on the ceiling.
9 A Two more figures stand in shadow by the far bulkhead: LINGUIST ESPERANZA BALOGUN, 30s, in a pale coat, and a young cadet, TEO ABERNATHY-LIU, 19, clutching a datapad.
* 10 D LUCIANA: Status.
* 11 D DORIAN: Core's alive. Everything else is asleep.
* 12 D LUCIANA: Wake it.
* 13 D DORIAN: I'm trying.
* 14 D IMANI (small): Captain?
* 15 D LUCIANA: Not now.
* 16 D IMANI: The hull is making a noise.
* 17 A ¶ Silence.
* 18 A The strip light flickers.
* 19 A A distant, rhythmic tapping rolls through the metal.
20 A Pavel's rifle lifts.
* 21 D PAVEL: It's not the cooling.
* 22 D ESPERANZA: It's a pattern.
* 23 D LUCIANA: What kind of pattern?
* 24 D ESPERANZA (listening): Three. Pause. Three.
* 25 D TEO: Is that Morse?
* 26 D ESPERANZA: It's a countdown.
* 27 D COMMS [V.O.] (crackling, over the intercom): ...bay four... can anyone hear... bay four...
28 A ¶ Luciana grabs the handset from the console.
* 29 D LUCIANA: This is Mbeki-Rossi. Say again.
* 30 D COMMS [V.O.]: Captain? Thank god. We're locked in the sub bay. The door sealed itself.
* 31 D LUCIANA: Who is this?
* 32 D COMMS [V.O.]: Station Operations. We've been tapping on the hull for an hour.
33 A ¶ Pavel lowers the rifle slowly.
34 A Dorian stands.
35 A Imani lets out a breath.
* 36 A The tapping continues, closer now.
* 37 D LUCIANA (into the handset): We're in bay four.
* 38 D COMMS [V.O.]: No, ma'am. You're not.
39 A ¶ Luciana stares at the handset.
40 A At the others.
41 A At the ceiling, where something taps once, twice, thrice.
* 42 D DORIAN (whispering): If they're locked in the sub bay...
* 43 D PAVEL: Then what is that?
* 44 A ¶ The tapping stops.
* 45 A A long silence.
* 46 A The strip light dies.
47 A In the dark, a soft voice laughs, thin and delighted, from the vent above.
48 A ¶ Teo drops the datapad.
* 49 A It clatters.
50 A No one picks it up.

### SCENE s01102 | INT. WEDDING TENT IN A FLOODED MEADOW - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL FERREIRA, ADEBAYO KUROSAWA, BERNADETTE, CALLUM OYELARAN, PIA
* 1 A ¶ Fairy lights sag.
* 2 A Rain drums the canvas.
* 3 A Muddy shoes in a pile by the dance floor.
* 4 A A three-tier cake leans, slightly.
5 A ¶ MARISOL FERREIRA, 30s, in a ruined white gown, stands on a chair holding a champagne bottle.
6 A Her groom, ADEBAYO KUROSAWA, 30s, soaked tux, stands below, arms raised to catch her.
7 A Aunt BERNADETTE, 60s, clutches a tray of canapés.
8 A The best man, CALLUM OYELARAN, 30s, tries to rescue the cake.
9 A The flower girl, PIA, 8, sits under a table with a kitten.
* 10 D MARISOL: Everyone, listen!
* 11 A ¶ Rain hammers louder.
12 A Nobody listens.
* 13 D ADEBAYO (to her): Marisol, come down.
* 14 D MARISOL (to herself): I will not cry. I will not cry.
* 15 D CALLUM (over his shoulder): Somebody help me with this cake!
* 16 D BERNADETTE: Not unless it floats!
* 17 A ¶ The canvas sags.
* 18 A Water pours through a seam onto the dance floor.
19 A Callum, Bernadette, and Adebayo dive for the cake as one.
20 A They collide, slide, and sit down hard in the mud.
* 21 A The cake tilts, hovers, then lands neatly on Callum's lap.
22 A ¶ Marisol stops.
23 A Stares.
24 A Starts to laugh.
* 25 D MARISOL (to the crowd, lifting the bottle): To the wettest wedding in the county!
26 A ¶ Pia crawls out from under the table, kitten in her arms.
27 A Adebayo reaches for Marisol's hand.
28 A She jumps down into his arms.

### SCENE s01103 | INT. FLOODED CELLAR OF A VICTORIAN ASYLUM - NIGHT
Detected names (may be incomplete or contain aliases): CORDELIA MAXWELL-ODUYA, ARTEMUS PIKE, VOICE
* 1 A ¶ Ankle-deep black water.
* 2 A Rusted bed frames stacked against slick brick walls.
* 3 A A single lantern hangs from a chain, throwing a dim yellow circle.
* 4 A Somewhere, dripping.
5 A ¶ DR. CORDELIA MAXWELL-ODUYA, 40s, in a tailored coat and rubber boots, moves slowly through the water with a lamp raised high.
6 A Behind her, her assistant, ARTEMUS PIKE, 20s, frightened and trying not to show it, clutches a camera.
* 7 D CORDELIA: Mind the step.
* 8 D ARTEMUS: There's a step?
* 9 D CORDELIA: There was. Somewhere.
* 10 A ¶ Water ripples around her boots.
* 11 A A bed frame creaks against the wall.
12 A Artemus lifts the camera, thumbs the shutter.
* 13 A The flash burns the room white for an instant: iron frames, wet bricks, and a figure standing against the far wall.
14 A ¶ Cordelia freezes.
15 A Artemus lowers the camera.
* 16 A Darkness again, the lantern small.
* 17 D ARTEMUS [CONT'D] (whispering): Did you see --
* 18 D CORDELIA: Yes.
* 19 D ARTEMUS: It looked like --
* 20 D CORDELIA: I said yes, Artemus.
* 21 A ¶ Another creak.
* 22 A The lantern chain sways.
* 23 A The yellow circle swings across the wall and finds nothing but brick.
* 24 D ARTEMUS: Doctor, I think we should go.
* 25 D CORDELIA: We came for a reason.
* 26 D ARTEMUS: I've forgotten the reason.
* 27 D CORDELIA: Patient forty-one. Mary Hargreave. Locked here in eighteen-ninety.
* 28 D ARTEMUS: For what?
* 29 D CORDELIA: For hearing things.
* 30 A ¶ A soft sound rolls through the water.
31 A A woman's voice, thin as paper, humming a lullaby.
32 A Artemus's hands tighten on the camera.
33 A Cordelia's lamp trembles.
* 34 D VOICE [O.S.] (humming, then singing): Hush, little one, the water's deep...
* 35 D ARTEMUS: Doctor.
* 36 D CORDELIA: Don't answer her.
* 37 D ARTEMUS: I wasn't going to.
* 38 D VOICE [O.S.]: ...hush, little one, I'll never sleep...
39 A ¶ The song comes closer.
* 40 A Water stirs between them.
41 A Something pale rises beneath the surface, a hand, then a wrist, then a face.
* 42 D CORDELIA (whispering at the same moment as Artemus): Do not look.
* 43 D ARTEMUS: ^Do not look.
44 A ¶ They both turn their faces.
45 A The singing stops.
46 A The hand breaks the surface a foot from Cordelia's boot, fingers open, trembling.
47 A It closes around her ankle.
48 A ¶ She screams.
* 49 A The lantern chain snaps.
* 50 A Darkness.
51 A ¶ Artemus's camera flashes.
52 A In the white blink: Cordelia on her knees, and a woman in a rotting nightgown holding her ankle, mouth open in a soundless song.
* 53 A ¶ Black.
* 54 A ¶ The water settles.
* 55 A The dripping resumes.

### SCENE s01104 | EXT. RAILROAD WATER TOWER - HIGH PLAINS - DAWN
Detected names (may be incomplete or contain aliases): MARSHAL EZEKIEL DUNMORE, ODESSA PRATT-ADEYEMI, LAZARUS, RADIO
* 1 A ¶ A rusted tower on spindly legs.
* 2 A Dust devils on the flats.
* 3 A A single telegraph wire hums in the wind.
4 A ¶ MARSHAL EZEKIEL DUNMORE, 50s, hat low, rides in on a gray mare and dismounts at the base.
5 A Waiting there: ODESSA PRATT-ADEYEMI, 30s, canvas duster, rifle across her lap.
6 A Beside her, a boy, LAZARUS, 14, holds a canteen and keeps his eyes on his boots.
7 A ¶ Dunmore ties his horse.
8 A Takes his time.
* 9 D DUNMORE: You sent the telegram.
* 10 D ODESSA: I did.
* 11 D DUNMORE: Said you had the Whitaker brothers.
* 12 D ODESSA: I did, until they climbed the tower.
13 A ¶ Dunmore looks up.
14 A Two silhouettes against the pale sky, cross-legged on the catwalk.
* 15 D DUNMORE: They armed?
* 16 D ODESSA: They've got a Winchester and a jug.
* 17 A ¶ The telegraph wire sings.
18 A Dunmore pulls a pair of spectacles from his pocket, polishes them, puts them on.
19 A Lazarus finally looks up at him.
* 20 D LAZARUS: Marshal. Are you going to shoot them?
* 21 D DUNMORE: Not unless they ask nicely.
22 A ¶ Lazarus almost smiles.
23 A Odessa lifts her rifle a hair.
* 24 D RADIO [V.O.] (crackling from the saddlebag): Dunmore, this is Fort Bell. Report.
25 A ¶ Dunmore pulls a small field radio from the saddle.
26 A Raises it to his mouth.
* 27 D DUNMORE: Three at the tower. Two up high. Holding.
* 28 D RADIO [V.O.]: Copy. Reinforcements by noon.
* 29 D DUNMORE: They'll be too late.
30 A ¶ He clicks it off.
31 A Takes the rifle from Odessa's lap, hands it back to her, butt first.
32 A Walks to the ladder.
33 A Puts his boot on the first rung.
* 34 D ODESSA: Marshal.
35 A ¶ He pauses.
36 A She meets his eyes.
37 A Neither speaks.
38 A Lazarus watches both of them.
39 A Dunmore tips his hat and climbs.

### SCENE s01105 | EXT. BOMBED-OUT CINEMA - ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT FIONNUALA BRADY-ESCOBAR, SERGEANT IKENNA ABARA, JAMSHID TAVAKOLI
* 1 A ¶ Half a marquee hangs by its cables.
* 2 A The facade is gone; the screen stands bare and cracked like a tooth.
* 3 A Smoke drifts across a starless sky.
* 4 A Below, a city of broken lamps.
5 A ¶ LIEUTENANT FIONNUALA BRADY-ESCOBAR, 30s, short dark hair, torn sleeve, crouches behind a ventilation stack with a scoped rifle across her knees.
6 A The scar on her cheek catches the glow of distant fires.
7 A Beside her, SERGEANT IKENNA ABARA, 40s, thick-armed, bleeds slowly from a bandage on his thigh.
8 A Further back, behind a toppled projector, huddles a civilian in a grease-stained coat: MR. JAMSHID TAVAKOLI, 60s, a projectionist, spectacles cracked.
9 A ¶ She lifts the scope.
10 A He presses a hand to the bandage.
* 11 D IKENNA: Anything?
* 12 D FIONNUALA: Two on the street. One on the balcony opposite.
* 13 D IKENNA: Ours?
* 14 D FIONNUALA: No.
15 A ¶ She doesn't move.
* 16 A The balcony light flickers.
17 A Mr. Tavakoli shifts and a piece of masonry falls from the projector.
18 A She flinches.
19 A Ikenna grabs her sleeve.
* 20 D IKENNA: Easy.
* 21 D FIONNUALA: He's making noise.
* 22 D IKENNA: He's old.
* 23 D FIONNUALA: He's loud.
24 A ¶ Tavakoli raises both hands, a gesture of apology.
25 A She exhales.
26 A Lowers the rifle an inch.
* 27 D MR. TAVAKOLI (whispering): I show films here thirty years. I know every board in this roof.
* 28 D FIONNUALA: Then tell me which ones creak.
* 29 D MR. TAVAKOLI: All of them. Except those.
30 A ¶ He points to a line of beams near the edge, bare against the sky.
* 31 D FIONNUALA: Can we reach them?
* 32 D MR. TAVAKOLI: If you crawl.
33 A ¶ She nods at Ikenna.
34 A He grimaces, rolls onto his stomach, begins to inch toward the beams.
* 35 A Blood darkens the roof where he passes.
36 A ¶ She watches him go.
37 A Then, quietly, she pulls the old man close and speaks in his ear.
* 38 D FIONNUALA: When he reaches the end, you follow. Do not stop.
* 39 D MR. TAVAKOLI: And you?
* 40 D FIONNUALA: I stay.
41 A ¶ He starts to protest.
42 A Her eyes silence him.
* 43 A A distant shell whistles in.
44 A They duck.
45 A The projectionist clings to the screen's iron frame.
46 A ¶ Ikenna reaches the beams.
47 A Raises one hand: the signal.
48 A Tavakoli crawls after him, gray hair dusted white with plaster.
49 A ¶ Fionnuala rises into a crouch.
50 A Raises the rifle.
* 51 A The balcony light flares.
52 A She takes aim.
* 53 A ¶ Below, in the bare screen's reflection, a thousand flickers of fire wink like frames of a lost film.

### SCENE s01106 | INT. FERRY CAFE - RAINY DAY
Detected names (may be incomplete or contain aliases): HAZEL OKONKWO-LARSEN, JONAH PELLEGRINI, WENDELL ACHTERBERG
* 1 A ¶ Steam on the windows.
* 2 A A chalkboard menu.
* 3 A Wet umbrellas in a bucket.
* 4 A The ferry's engine thrums through the floor.
5 A ¶ HAZEL OKONKWO-LARSEN, 30s, hair damp, sits at a corner table with a cup of tea.
6 A Across from her, JONAH PELLEGRINI, 30s, in a yellow raincoat, stirs sugar into coffee.
7 A Next to them, a stranger, WENDELL ACHTERBERG, 60s, reads a newspaper pretending not to listen.
* 8 D HAZEL: You said you'd be on the nine o'clock.
* 9 D JONAH: I missed it.
* 10 D HAZEL: You always miss it.
* 11 D JONAH: I got caught up.
* 12 D HAZEL: In what?
* 13 D JONAH: Life.
* 14 D WENDELL (from behind the paper): That's usually what it is.
* 15 D HAZEL (turning): Excuse me?
* 16 D WENDELL: Nothing. Carry on.
* 17 D JONAH: Sir, this is a private conversation.
* 18 D WENDELL: It's a ferry cafe. Nothing's private.
* 19 D HAZEL: He has a point.
* 20 D JONAH: Hazel.
* 21 D HAZEL: He does.
* 22 D JONAH: You're on his side now?
* 23 D WENDELL: I'm not on anyone's side. I'm reading about a cricket match.
* 24 D HAZEL (to Wendell): Who's winning?
* 25 D WENDELL: Nobody. It rained.
26 A ¶ Jonah laughs, despite himself.
27 A Hazel's mouth twitches.
* 28 A The ferry horn blasts.
29 A All three look up.
* 30 A Rain streams down the glass.
* 31 D JONAH (softly, to Hazel): I'm sorry.
* 32 D HAZEL (softly): I know.
* 33 D WENDELL (lowering the paper): And that's that.

### SCENE s01107 | EXT. ROOFTOP WATER TANK - SUBURBAN NIGHT
Detected names (may be incomplete or contain aliases): SADIE KOWALSKI-IBRAHIM, MILO BERGSTROM, RADIO
* 1 A ¶ A wooden tank on stilts above a flat tar roof.
* 2 A Cicadas.
* 3 A A radio plays low from an open window below.
4 A ¶ SADIE KOWALSKI-IBRAHIM, 16, sits on the ledge with her feet dangling.
5 A Her younger cousin MILO BERGSTROM, 13, climbs the last rung of the ladder, breathless.
6 A He freezes when he sees her.
7 A She doesn't turn.
8 A ¶ He climbs onto the roof.
9 A She hears him.
10 A Shifts a few inches to make room.
11 A He sits.
12 A They stare at the neighbors' lit windows.
* 13 D RADIO [V.O.] (muffled, from below): ...and now, the late-night countdown. Number three this week...
14 A ¶ She hums along.
15 A He taps his heel against the brick.
* 16 A A long moment passes.
17 A ¶ He offers her a cracker from his pocket.
18 A She takes it.
19 A They chew in the dark.
20 A ¶ She shoves him gently.
21 A He shoves back.
22 A She nearly slides off the ledge; he grabs her sleeve.
23 A They both go still.
24 A Then she laughs, and he lets go, and neither of them says what almost happened.
* 25 D RADIO [V.O.]: ...and the number one song in the country...
26 A ¶ She stands, brushes crumbs from her knees.
27 A Holds out her hand.
28 A He takes it.
29 A They climb down together, the song swelling behind them.

### SCENE s01109 | INT. EMPTY GYM - SCOREBOARD CONTROL CLOSET - NIGHT
Detected names (may be incomplete or contain aliases): BILLIE, ROSSITER-KAMARA, JANITOR
* 1 A ¶ A cramped closet with a hand-wired switchboard.
* 2 A Taped wires.
* 3 A A dusty window onto the dark court below.
* 4 A A folding chair.
5 A ¶ WILHELMINA "BILLIE" ROSSITER-KAMARA, 50s, former point guard, in a faded jersey and sweatpants, sits at the board with a clipboard on her lap.
6 A She taps a button.
* 7 A Below, the old scoreboard blinks: HOME 00 GUEST 00.
* 8 D BILLIE: Check, check.
9 A ¶ She taps another button.
* 10 A A horn blares through the empty gym.
11 A She winces, turns the volume down a notch.
* 12 D BILLIE [CONT'D] (to herself): Twenty-two years and I still hit the wrong one.
* 13 A ¶ A crackle on the intercom.
* 14 D JANITOR [V.O.] (over the PA): Coach? You still in there?
* 15 D BILLIE (leaning to the mic): Five more minutes, Eddie.
* 16 D JANITOR [V.O.]: Lights go off at ten.
* 17 D BILLIE: I know.
18 A ¶ She hangs up the mic.
19 A Looks down through the window.
* 20 A The court is blank hardwood, the lines worn pale.
21 A She flips a switch.
* 22 A A spotlight lands on center court.
23 A ¶ She sits for a while, watching the empty circle of light.
* 24 D BILLIE [CONT'D] (softly): Tip off.
25 A ¶ She presses the home-score button.
* 26 A HOME climbs: 02.
27 A She presses it again: 04.
* 28 A Then 06.
* 29 A Then 08.
30 A She presses it until it reads 99.
31 A A small, crooked smile.
32 A ¶ She hits the horn one last time.
* 33 A It rolls across the gym, rattling the rafters.
* 34 D BILLIE [CONT'D] (whispering): Good game.
35 A ¶ She clicks off the spotlight.
* 36 A The scoreboard goes dark.

### SCENE s01110 | INT. ANSWERING MACHINE - PARKED CAR OUTSIDE A HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): CORNELIUS AJAYI-WHITLOCK, MACHINE
* 1 A ¶ Dashboard glow.
* 2 A A paper coffee cup.
* 3 A Sodium lights smearing across the windshield.
* 4 A The engine ticks as it cools.
5 A ¶ CORNELIUS AJAYI-WHITLOCK, 60s, tie loosened, grips the steering wheel with both hands.
* 6 A A phone rests in the cup holder, speaker on.
* 7 D MACHINE [V.O.] (electronic, cheerful): You have reached the home of the Ajayi-Whitlock family. We can't come to the phone right now. Leave a message.
* 8 A ¶ BEEP.
* 9 D CORNELIUS: Hey, Mara. It's Dad.
10 A ¶ He clears his throat.
* 11 D CORNELIUS [CONT'D]: I know you're not going to pick up. You haven't picked up in three years. That's fine. I'm not calling to make you.
12 A ¶ He rubs his eyes with the heel of his hand.
* 13 D CORNELIUS [CONT'D]: Your mother's room is on the fourth floor. Bed six. They moved her out of intensive care this afternoon. She asked about you. She asked if the flowers on her windowsill were from you. I told her yes.
14 A ¶ A long breath.
* 15 D CORNELIUS [CONT'D]: They weren't. I bought them. At the corner shop. But I thought, what's one more lie after thirty years of marriage. She smiled. That was enough.
16 A ¶ His voice cracks.
17 A He lets it.
18 A A nurse passes the windshield in the lot.
19 A He doesn't look.
* 20 D CORNELIUS [CONT'D]: The doctor says it could be days. Could be weeks. Could be a month. They don't know. They never know.
21 A ¶ He grips the wheel harder.
* 22 D CORNELIUS [CONT'D]: I'm not asking you to come. I'm only telling you where we are. Fourth floor. Bed six. Visiting hours until nine. After that, tell the desk you're family. They'll let you in.
23 A ¶ He reaches for the phone.
24 A Stops.
* 25 D CORNELIUS [CONT'D]: I did love the way you used to leave messages on this machine. Do you remember? You'd sing. Wrong notes. Every time.
* 26 A ¶ A pause.
* 27 D CORNELIUS [CONT'D]: Sing something, Mara. If you want. Anything.
28 A ¶ He waits.
* 29 A Only static.
* 30 A Then the long tone of the machine closing the line.
* 31 D MACHINE [V.O.] (cheerful): Your message has been saved.

### SCENE s01111 | INT. SURPRISE PARTY - APARTMENT LIVING ROOM - DARK - EVENING
Detected names (may be incomplete or contain aliases): BEA, LINDQVIST-ADE, COLM FITZGIBBON, ROZ, PELLEGRINO-OKON, YOSHIRO BAPTISTE, TIBBY, MORROW, DELIVERY GUY, ALL
* 1 A ¶ Balloons.
* 2 A A banner.
* 3 A A cake with too many candles.
4 A Five adults crouch behind furniture, whispering, trying not to giggle.
5 A ¶ BEATRIX "BEA" LINDQVIST-ADE, 40s, behind the couch with a noisemaker.
6 A COLM FITZGIBBON, 30s, behind the armchair holding a camera.
7 A ROSALIND "ROZ" PELLEGRINO-OKON, 50s, under the dining table with the cake.
8 A YOSHIRO BAPTISTE, 20s, crouched by the door, finger on the lights.
9 A And TIBERIUS "TIBBY" MORROW, 60s, hidden inside the coat closet.
* 10 D BEA (whispering): She's coming up the stairs.
* 11 D COLM (whispering): How do you know?
* 12 D BEA: I hear her keys.
* 13 D ROZ: She's got the wrong keys.
* 14 D YOSHIRO: Shh!
* 15 A ¶ The doorknob rattles.
16 A All five freeze.
* 17 A A key scrapes and fails.
* 18 A Another.
* 19 A A third.
* 20 D TIBBY (from the closet): Is it her?
* 21 D BEA: Quiet!
* 22 A ¶ The door swings open.
23 A A silhouette in the hall: a stranger in a delivery uniform, holding a pizza box.
* 24 D DELIVERY GUY: Uh. Hello?
25 A ¶ Yoshiro flips the lights.
26 A Everyone leaps up.
* 27 D ALL: Surprise!
28 A ¶ Roz pitches the cake into the air.
29 A Colm's flash goes off.
30 A Bea blows the noisemaker in the Delivery Guy's face.
* 31 A He yelps, the pizza flies, the cake lands on Tibby as he tumbles out of the closet.
* 32 A ¶ Silence.
33 A Frosting drips from Tibby's nose.
34 A The Delivery Guy stares at them all.
* 35 D DELIVERY GUY [CONT'D]: ...Does anyone here order a large pepperoni?
* 36 D BEA (weakly): Wrong apartment?
* 37 D DELIVERY GUY: Apparently.
38 A ¶ Tibby licks frosting from his lip.
* 39 D TIBBY: Well. I'll take the pizza.

### SCENE s01112 | EXT. ICE-CAVE MOUTH - GLACIER - DAWN
Detected names (may be incomplete or contain aliases): NADIA, VOLKOV-ASANTE, NAT, BELL-TAKAHASHI, DESMOND OKONKWO-PARR
* 1 A ¶ A blue gash in a field of white.
* 2 A Wind scours the snow into long ripples.
3 A Three tiny figures stand at the lip of a frozen lake, backs to the cave.
4 A ¶ NADEZHDA "NADIA" VOLKOV-ASANTE, 40s, orange parka, iced eyelashes, drags a sled carrying a sleeping bag.
5 A Next to her, IGNATIUS "NAT" BELL-TAKAHASHI, 30s, hood drawn, gloves split at the fingertips, winds a rope around his waist.
6 A Dragging up the rear, DESMOND OKONKWO-PARR, 20s, lagging, hobbles on one swollen ankle.
* 7 D NADIA: Rest stop. Ten minutes.
* 8 D NAT: We don't have ten.
* 9 D NADIA: We have what we have.
10 A ¶ She drops the sled's handle.
11 A He kneels, checking the knot on the sleeping bag, while Desmond lowers himself onto his pack.
12 A Nat pulls out a thermos, takes a swallow, hands it to Desmond.
13 A Desmond drinks, hands it to Nadia, who sips and stares across the frozen lake at a ridge of dark rock.
* 14 D NADIA [CONT'D]: That's the pass.
* 15 D NAT: How far?
* 16 D NADIA: Six kilometers. Maybe seven.
* 17 D DESMOND (quietly): I can walk.
* 18 D NAT: You can't.
* 19 D DESMOND: I can crawl.
20 D NADIA: Nobody's crawling.
21 A ¶ She stands, tightens the sled's strap.
22 A Nat rises, unwinds the rope, ties one end to the sled and the other to Desmond's pack.
23 A Desmond opens his mouth to protest.
24 A Nat holds up a hand.
* 25 D NAT: You're the anchor. Don't argue.
* 26 D DESMOND: That's backwards.
* 27 D NAT: Humor me.
* 28 A ¶ Wind gusts, whipping powder across their faces.
29 A Nadia pulls up her hood, turns toward the pass, and leans into the haul line.
* 30 A The sled lurches.
31 A Nat falls in beside her.
32 A Desmond, tethered, drags his foot.
33 A ¶ They walk.
34 A No one speaks.
* 35 A Their shadows lengthen across the ice.

### SCENE s01113 | INT. CRYO-VAULT - ORBITAL STATION - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER ODALYS REEVES-AKINTOLA, TECH SANTIAGO OYELARAN-WOO, DOCTOR MIRIAM BELLAMY, PIXIE
* 1 A ¶ Frost on steel.
* 2 A Rows of dark capsules.
* 3 A A single red indicator blinks.
* 4 A Breath hangs in the air.
5 A ¶ COMMANDER ODALYS REEVES-AKINTOLA, 40s, parka over her flight suit, kneels by capsule 17 and wipes frost from its window.
6 A Behind her, TECH SANTIAGO OYELARAN-WOO, 30s, scans a diagnostic panel.
7 A Over by the airlock, DOCTOR MIRIAM BELLAMY, 50s, lifts a medical scanner, and next to her a scruffy teenage stowaway, PIXIE, 15, shivers in a borrowed coat.
* 8 D SANTIAGO: Pod 17 is cold.
* 9 D ODALYS: Pod 17 is empty.
* 10 D MIRIAM: Then where is the occupant?
* 11 D PIXIE: Maybe he got up and left.
12 A ¶ Nobody laughs.
13 A Miriam lowers the scanner.
14 A Odalys stands slowly.
15 A Santiago taps the panel; the indicator blinks red.
* 16 D ODALYS: Open it.
* 17 D SANTIAGO: Ma'am --
* 18 D ODALYS: Open it.
19 A ¶ He presses the release.
* 20 A The capsule hisses.
* 21 A The lid lifts.
* 22 A Inside: a folded blanket, a child's drawing, a shut-off pulse monitor.
23 A ¶ Odalys picks up the drawing.
24 A Studies it.
25 A Her thumb smooths the paper's edge.
26 A Miriam steps closer, then stops.
27 A ¶ Pixie reaches for the monitor.
28 A Santiago catches her wrist, gently.
29 A She pulls away, embarrassed, and sits on the floor.
* 30 D ODALYS [CONT'D] (quiet): Seal it.
31 A ¶ Santiago closes the lid.
* 32 A The hiss fades.
33 A Miriam puts a hand on Odalys's shoulder.
34 A Odalys folds the drawing in half, then in half again, and slides it into her pocket.

### SCENE s01114 | INT. HOSPITAL STAIRWELL - LANDING BETWEEN FLOORS - 3 A.M.
Detected names (may be incomplete or contain aliases): ANSELMO KWAKU-REYNOLDS, OPERATOR
* 1 A ¶ Concrete steps.
* 2 A A humming exit sign.
* 3 A A window onto a dark parking structure.
* 4 A A vending machine glows at the landing.
5 A ¶ DR. ANSELMO KWAKU-REYNOLDS, 40s, scrubs, paper hat crumpled in his fist, sits on the steps with his head against the wall.
* 6 A A phone rests on his knee, speaker on.
* 7 D OPERATOR [V.O.] (distant, tired): Cardiology to Dr. Kwaku-Reynolds. Please call extension four-four-one-two.
* 8 D ANSELMO (to the phone): I'm on a break.
* 9 D OPERATOR [V.O.]: Doctor, they said it's urgent.
* 10 D ANSELMO: It's always urgent.
11 A ¶ He turns the phone face down on the step.
* 12 A The voice continues in muffled bursts.
13 A He lets it.
* 14 D ANSELMO [CONT'D] (to himself, steady): Forty-one patients on the unit. Three discharges at eight. Two transfers at noon. One bed that nobody gets until I sign off on a chart I haven't finished. And I'm sitting on a stair.
15 A ¶ He laughs, quietly.
16 A Wipes a hand over his face.
* 17 D ANSELMO [CONT'D]: When I was a student, an old attending told me: "A doctor is a man who fixes what he can and carries what he can't." I thought it was poetry.
* 18 A ¶ A pause.
* 19 A The vending machine hums.
* 20 D ANSELMO [CONT'D]: It's a weight limit.
21 A ¶ He stands, brushes off his scrubs, flattens the paper hat, puts it on.
22 A Picks up the phone.
* 23 D ANSELMO [CONT'D] (into the phone): This is Kwaku-Reynolds. Coming up.
* 24 D OPERATOR [V.O.]: Thank you, Doctor.
25 A ¶ He pockets the phone and climbs.
