You are an annotator labeling screenplay scenes for a dataset.

## What to label

Each scene is given as numbered units. `A` = one sentence of action/description text (¶ marks the
first sentence of a paragraph). `D` = one dialogue block, shown as `NAME [extensions] (parenthetical): text`.

Produce one JSON object per scene:

{
  "scene_id": "<id>",
  "cast": {"<every character name variant used in the scene>": "<canonical name>", ...},
  "beats": [<unit numbers that START a beat, ascending; the first non-heading unit always starts one>],
  "lines": {
    "<n>": {"t": "A"|"D"|"S", "who": ["<canonical>", ...], "emo": {"<canonical>": ["<emotion>", <0-1>]}, "c": <0-1>},   // for A units
    "<n>": {"to": ["<canonical>"|"ALL"|"SELF"|"NONE", ...], "emo": ["<emotion>", <0-1>], "c": <0-1>}                     // for D units
  },
  "tension": [<one score 0-100 per beat, same order as "beats">]
}

Rules:
- cast: map EVERY name variant (cue names, CAPS introductions, aliases like STRANGER -> INGRID once named,
  DET. RUIZ / RUIZ) to one canonical name per real person. Unnamed extras get a short canonical (e.g. "GUARD").
- Every A and D unit must appear in "lines" (skip the heading and transitions).
- A units, field t: "A" = a character does something (acts, moves, speaks-without-cue, reacts);
  "D" = a character is described (appearance, introduction, state) ; "S" = no character: setting, objects, sound,
  atmosphere. who = the character(s) performing the action or being described, as canonical names; empty for "S".
  Use several names only when they genuinely act jointly ("They fight", "Both freeze"). Resolve every pronoun.
  If the actor is a crowd or someone not in the cast, use "OTHER".
- D units: to = who the line is addressed to. "ALL" = the group, "SELF" = muttered/thinking aloud,
  "NONE" = no listener (e.g. pure voice-over narration). A phone/radio listener counts as a character.
- emo: emotion actually conveyed by the line's text, subtext, parenthetical or behaviour - not guessed from the
  plot. One of: neutral, joy, sadness, anger, fear, surprise, disgust, affection, with intensity 0-1
  (neutral -> 0-0.2). For A units give emo only for characters whose emotion the sentence shows; otherwise {}.
- c = your confidence that who/to is right (0-1). Be honest: ambiguous pronouns deserve low confidence.
- beats: a beat is the smallest unit in which something dramatically changes - an action, a reaction, a shift
  in tactic, a reveal, an entrance. A beat may be dialogue only, action only, or mixed, and may split an action
  paragraph. Typical beats are 1-8 units long.
- tension: dramatic tension a reader feels in that beat - stakes, conflict, threat, urgency, suspense. Loud or
  violent is not automatically tense; a quiet threat can be very tense. Use absolute anchors so scores compare
  across scenes: 0-15 calm/mundane, 15-35 mild friction or unease, 35-60 clear conflict or suspense,
  60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death / climactic moment.


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00250.json
### SCENE s00250 | INT. ORBITAL SALVAGE TUG "LONG PATIENCE," CARGO BAY - SHIP NIGHT
Detected names (may be incomplete or contain aliases): OKSANA REYNOLDS-ADEBOYE, COMMS, SIMEON AKINTOLA-VEGA
1 A ¶ Strip lighting.
2 A Mag-boots clank.
3 A Crates stacked in nets.
4 A A viewport shows a wreck turning slowly against the stars.
5 A ¶ OKSANA REYNOLDS-ADEBOYE (40s, engineer, grease up to the elbows) crouches over an open hatch, a wrench in one hand.
6 A She does not look up when the intercom hisses.
7 D COMMS [V.O.]: Engineer. Bridge. Report.
8 A ¶ She keeps working.
9 A Turns a bolt.
10 A Another.
11 D OKSANA: Still on it.
12 D COMMS [V.O.]: Captain wants a status on the coupling.
13 D OKSANA: Tell the Captain it's a coupling.
14 D COMMS [V.O.]: Copy.
15 A ¶ She sets the wrench down.
16 A Wipes her hands on her thighs.
17 A From a vent behind her, a soft click.
18 A ¶ She turns slowly.
19 A Nothing.
20 A But she picks the wrench back up.
21 A ¶ A second figure floats in from the airlock: SIMEON AKINTOLA-VEGA (30s, flight tech, jumpsuit unzipped to the chest).
22 A He anchors himself with one boot to a crate and stares at her.
23 D SIMEON: You okay?
24 D OKSANA: Fine.
25 D SIMEON: You've been down here nine hours.
26 D OKSANA: It's a big coupling.
27 D SIMEON: Captain says come up.
28 D OKSANA: Captain says what?
29 D COMMS [V.O.]: Engineer, Captain says come up. Immediately.
30 D OKSANA (to the intercom): Why?
31 D COMMS [V.O.]: Something on the scanner. Something near the wreck.
32 A ¶ Oksana and Simeon look at each other.
33 A She tightens her grip on the wrench.
34 A He zips his jumpsuit to the collar.
35 D SIMEON: What is it?
36 D COMMS [V.O.]: Unknown. Moving. Matching our heading.
37 D OKSANA: How close?
38 D COMMS [V.O.]: Twelve kilometers. And closing.
39 A ¶ She lets the wrench drift.
40 A It spins slowly in front of her, catching the light.
41 D SIMEON: I'm going up.
42 D OKSANA: Wait.
43 A ¶ He waits.
44 A Her eyes go to the viewport.
45 A The wreck rotates; behind it, a shape too regular to be debris.
46 A ¶ She says nothing.
47 A Neither does he.
48 A They float side by side.
49 D COMMS [V.O.]: Engineer? Tech? Respond.
50 A ¶ Simeon opens his mouth.
51 A Closes it.
52 A Oksana presses the intercom.
53 D OKSANA (evenly): We're coming up.
54 A ¶ She lets go.
55 A Drifts across the bay.
56 A At the door she stops, lays one palm flat on a crate as if for luck.
57 A ¶ Then she follows Simeon into the corridor.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02274.json
### SCENE s02274 | INT. STAGE STATION KITCHEN, DRY CREEK - LATE MORNING
Detected names (may be incomplete or contain aliases): ODELL PRUITT, MAUDE TEAGUE, ZEBEDIAH HOLLOWAY, ZEB, BARNABY
1 A ¶ A one-room adobe with a cuckoo clock that has run seven minutes slow since the Grant administration.
2 A Flies drift in the heat.
3 A A cast-iron stove ticks as it cools.
4 A ¶ ODELL PRUITT, fifties, stationmaster, wipes a tin cup with a rag that is dirtier than the cup.
5 A At the table MAUDE TEAGUE, thirties, a seed-and-feed saleswoman in a dust-grey travelling dress, peels a boiled egg.
6 A ZEBEDIAH HOLLOWAY, called ZEB, eighty, hat on indoors, whittles a stick down to nothing.
7 D ODELL: Coach is late.
8 D MAUDE: Coach is always late.
9 D ZEB: Wheel, probably.
10 D MAUDE: Or the Piute crossing.
11 D ODELL: It's never the Piute crossing.
12 D ZEB: Might be the Piute crossing.
13 A ¶ A horn sounds, faint and flat, out on the road.
14 D BARNABY [O.S.] (far off): Hey the station! Hey, Odell!
15 D ODELL: There. Wheel.
16 D BARNABY [O.S.] (nearer): Axle! Lost the axle at Mesquite Wash!
17 D MAUDE: I told you it was a wheel.
18 D ZEB: Axle's near enough.
19 A ¶ Odell sets down the cup and takes the egg shell Maude offers without thinking.
20 A She sets the egg on the table.
21 A Zeb finishes whittling and examines the empty air where the stick was.
22 D ODELL (to himself): Another night, then.
23 D MAUDE: Is there stew?
24 D BARNABY [O.S.]: Is there stew?
25 D ODELL: There's stew.
26 D ZEB: There's always stew.
27 A ¶ The cuckoo clock coughs, produces one grey wooden bird, and retires without a sound.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00566.json
### SCENE s00566 | EXT. RUINED WINDMILL - MINEFIELD - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT PETER GARRITY, LUCA FERRANTE, ANSELM VOGT
1 A ¶ A stone tower, sails broken and hanging.
2 A A field of tall grass ringed with rusted wire.
3 A Fog clings to the ground.
4 A A crow lands on the wire and shakes itself.
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
15 A The grass whispers.
16 A Luca checks the radio, jiggles a knob, curses.
17 D LUCA: No signal.
18 D GARRITY: Keep trying.
19 D LUCA: It's the fog.
20 D GARRITY: It's always the fog.
21 A ¶ Anselm stops.
22 A His prod hits something.
23 A A soft metallic knock.
24 A He freezes.
25 A Garrity and Luca freeze too.
26 A A breath held by three men.
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
37 A Fog rolls across the field.
38 A ¶ A SOUND.
39 A The crow bursts off the wire in a clatter of wings.
40 A Anselm flinches.
41 A His elbow lands on a loose stone, the stone rocks, and a bootlace pulls taut.
42 D ANSELM [CONT'D]: No. No, no, no --
43 D GARRITY: Down!
44 A ¶ Garrity and Luca drop flat.
45 A Anselm throws himself backward.
46 A The mine leaps from the soil, a black can on a column of dust, and detonates in the air with a crack that tears the dawn.
47 A ¶ Silence.
48 A Ringing.
49 A Smoke.
50 A Garrity lifts his head.
51 A Luca gasps.
52 A Anselm lies on his back in the grass, headlamp askew, staring up at the grey sky, bleeding from one forearm.
53 D ANSELM (laughing, appalled): I'm still here.
54 D GARRITY (sprinting to him): Don't move!
55 D LUCA: Medic! MEDIC!
56 A ¶ Garrity kneels, rips a sleeve, presses a field dressing to the gash.
57 A Luca stumbles through the grass, trips on a wire, falls.
58 A The radio flies from his hand.
59 A It lands in the weeds and crackles to life.
60 A ¶ Luca scrambles for it, shaking, grinning, weeping.
61 A Garbled static resolves into a hiss of carrier tone.
62 D LUCA (into radio): This is Fox Two! Anyone! We're alive!

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00760.json
### SCENE s00760 | INT. WAX MUSEUM - GRAND GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): HAROLD WINTERBOTTOM, ZUZANA KRAJEWSKI, MOSES TEMBO, KAI NAKAMURA-REID, ILSE ARENDT, VESPER LANE
1 A ¶ Hushed.
2 A Rows of figures in frozen poses: a queen, a boxer, a saint, a pirate.
3 A Their glass eyes catch the sodium glow from a security lamp.
4 A ¶ HAROLD WINTERBOTTOM, sixties, night guard, sits on a stool with a thermos.
5 A Near the pirate, cleaners ZUZANA KRAJEWSKI, forties, and MOSES TEMBO, thirties, sweep.
6 A Apprentice KAI NAKAMURA-REID, nineteen, polishes a cabinet.
7 A Curator ILSE ARENDT, fifties, taps a tablet by the door.
8 D HAROLD: Quiet night.
9 D ILSE: They're always quiet.
10 D ZUZANA (low): Moses. The boxer moved.
11 D MOSES: He did not.
12 D ZUZANA: His fist was down.
13 D MOSES: It's still down.
14 A ¶ Kai stops polishing.
15 A He looks at the boxer's fist.
16 A It is raised.
17 D KAI: Ms. Arendt?
18 D ILSE: Don't be silly, Kai.
19 A ¶ The lights dip.
20 A Harold stands, torch in hand, the stool toppling.
21 A Ilse's tablet blinks out.
22 A Zuzana and Moses back toward the saint, brooms raised, and Kai edges to Harold's side, polishing cloth clutched in his fist like a talisman.
23 A ¶ The door at the far end creaks open.
24 A ¶ VESPER LANE, thirties, in a long grey coat and white gloves, steps in.
25 A Pale.
26 A Perfectly still.
27 A Hair pinned.
28 A A lace veil tucked into her collar.
29 A She stops beside the queen.
30 A She tilts her head and looks at the five living people the way someone looks at figures in a window.
31 D VESPER (softly): I'm so sorry I'm late.
32 D HAROLD: We're closed, miss.
33 D VESPER: I know. I'm the fiftieth figure.
34 A ¶ She walks to an empty plinth near the pirate and steps onto it.
35 A Turns.
36 A Folds her hands.
37 A And stops, mid-breath, mid-smile, mid-blink.
38 A ¶ No one moves.
39 A The boxer's fist drops with a soft clack.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02066.json
### SCENE s02066 | INT. SALT-WATER BATH HOUSE - BRIGHTON - 1832 - NIGHT
Detected names (may be incomplete or contain aliases): HEPZIBAH QUARLES-ODUYA, LORD PERCIVAL ABERCROMBIE-ASANTE, SUKI ADEYEMI-FAIRBANKS
1 A ¶ A cavernous Georgian room.
2 A A long rectangular plunge pool of dark seawater, steaming faintly.
3 A Round arched windows.
4 A A lamp on every column.
5 A Brass taps tarnished green.
6 A The smell of brine and old stone.
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
29 A ¶ A long silence.
30 A Lamplight trembles on the black water.
31 A Suki ducks under, rises, shakes her hair.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01475_0.json
### SCENE s01475_0 | EXT. FLOODED SUGAR MILL - DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN RUTH OYELOWO-KAUFMANN, SERGEANT BASHIR AL-HAMDANI, MEDIC, CAPTAIN, SERGEANT
1 A ¶ A war-wrecked sugar mill on a river plain.
2 A The ground floor stands in knee-deep brown water.
3 A Chimney broken.
4 A Rain has thinned to drizzle.
5 A ¶ Three soldiers wade between iron vats, rifles above their heads.
6 A All three are exhausted and trying not to show it.
7 A ¶ CAPTAIN RUTH OYELOWO-KAUFMANN (40s, steady, carries a map case) goes first, testing each step with a pole.
8 A SERGEANT BASHIR AL-HAMDANI (30s, broad shoulders, a limp he hides) follows, watching the ridge line.
9 A A young MEDIC (20s, red cross armband, boots gone) brings up the rear, carrying a pack too big for him.
10 D CAPTAIN: Stairs on the left. We take the second floor and dry out.
11 D SERGEANT: Dry out, Captain? With what?
12 D CAPTAIN: With hope, Sergeant.
13 A ¶ The Medic stumbles on a submerged rail.
14 A The Sergeant catches him by the strap and sets him upright without a word, and the Captain stops, turns, and watches the boy catch his breath before she moves on.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02508.json
### SCENE s02508 | INT. FUNERAL HOME - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): BRONAGH QUILTY, EMEKA QUILTY, CORDELIA QUILTY
1 A ¶ Foil-covered casseroles.
2 A Wilting lilies.
3 A A kettle starts to whistle.
4 A ¶ BRONAGH QUILTY, 50s, black dress, cuts a cake.
5 A EMEKA QUILTY, 40s, her brother, loosens his tie.
6 A CORDELIA QUILTY, 30s, the youngest, sits on the counter with her shoes in her hand.
7 D BRONAGH: Somebody get that.
8 D EMEKA: I've got it.
9 D CORDELIA: He's got it.
10 A ¶ Emeka snatches the kettle off the burner.
11 A The whistle dies.
12 D BRONAGH: Mind the cake.
13 D CORDELIA: Nobody wants the cake.
14 D EMEKA: I want the cake.
15 D BRONAGH: Nobody wants your cake, Emeka.
16 D EMEKA: Mam made that cake.
17 D BRONAGH: Mam made that cake in nineteen ninety-four.
18 D CORDELIA: That's why it's hard.
19 D EMEKA: It's tradition.
20 D BRONAGH: It's a doorstop.
21 A ¶ Emeka sets the kettle down.
22 A Hard.
23 D EMEKA: She's been in the ground four hours.
24 D BRONAGH: I know.
25 D EMEKA: You're slicing her cake like it's a bake sale.
26 D BRONAGH: Somebody has to feed the neighbours.
27 D CORDELIA: You didn't have to put on the apron.
28 D BRONAGH: It's Mam's apron.
29 D CORDELIA: That's what I mean.
30 A ¶ Bronagh puts down the knife.
31 A Silence.
32 A A fridge hums.
33 A Emeka pulls out a chair.
34 A Sits.
35 A Puts his head in his hands.
36 D EMEKA (muffled): I never said goodbye.
37 D CORDELIA: You said it on Tuesday.
38 D EMEKA: She was asleep.
39 D BRONAGH: She heard you.
40 D EMEKA: You don't know that.
41 D BRONAGH: I know she squeezed my hand when I said your name.
42 A ¶ He looks up.
43 A His eyes are red.
44 A Cordelia slides off the counter.
45 A Bronagh picks up the knife again, and cuts the cake, slowly, into three pieces.
46 A ¶ She puts one in front of each of them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00850.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02225.json
### SCENE s02225 | INT. FUNICULAR CAR MIDWAY UP A MOUNTAIN - NIGHT
Detected names (may be incomplete or contain aliases): REUBEN FAIRCHILD, KASIMIR VOSS, ODALYS
1 A ¶ A wooden cable car, stopped dead on a steep track.
2 A Wind rattles the windows.
3 A Below, a hotel's lights glitter in the valley.
4 A ¶ REUBEN FAIRCHILD, forties, gray tuxedo, kneels by a floor panel with a pry bar.
5 A KASIMIR VOSS, thirties, black tuxedo, holds a flashlight and watches the track behind them.
6 A Each wears a small earpiece.
7 D KASIMIR: Cable's steady. We have maybe six minutes.
8 D REUBEN: Four, if she's right.
9 A ¶ He pries the panel.
10 A It lifts.
11 A Beneath it, a steel lockbox bolted to the frame.
12 D ODALYS [V.O.] (in their earpieces, calm): Gentlemen, the hotel's night manager just left his office. He's walking to the lift station.
13 D KASIMIR: How long to get here?
14 D ODALYS [V.O.]: Walking? Ten minutes. If he notices the car's stopped, he'll run.
15 D REUBEN: Then let's not make him notice.
16 A ¶ Reuben takes a thin case from his jacket and opens it.
17 A Lockpicks, a stethoscope.
18 A He hangs the stethoscope around his neck and presses the diaphragm to the box.
19 D KASIMIR: You said it was a four-digit lock.
20 D REUBEN: It's a six-digit lock.
21 D KASIMIR: You said four.
22 D REUBEN: I said four minutes.
23 A ¶ Kasimir lets that go.
24 A He turns the flashlight off.
25 A Darkness, then the pale blue of mountain night.
26 D ODALYS [V.O.]: I'm watching the manager. He's stopped. He's looking up at the track.
27 D KASIMIR: Stopped?
28 D ODALYS [V.O.]: Stopped. Pulling out a phone.
29 A ¶ Reuben's hands freeze on the dial.
30 A Kasimir leans toward the window, one hand on his gun.
31 D REUBEN: Odalys. Is he calling the lift station?
32 D ODALYS [V.O.]: Hold on.
33 A ¶ A long silence.
34 A Wind.
35 A The car creaks.
36 A Reuben's breath fogs the glass.
37 D KASIMIR (whispering): He's seen the car. He knows.
38 D REUBEN: He doesn't know.
39 D KASIMIR: He has a phone in his hand.
40 D REUBEN: He has a phone. That's all he has.
41 A ¶ Reuben turns the dial again.
42 A A click.
43 A Another.
44 D ODALYS [V.O.]: He's dialing. Oh, he's dialing the front desk, not the lift. The front desk.
45 D KASIMIR: That's a different thing?
46 D ODALYS [V.O.]: It's a sleepy clerk with a cold. That's a very different thing.
47 A ¶ Click.
48 A Click.
49 A Reuben's face.
50 A The lock drops.
51 A He lifts the lid.
52 A ¶ Inside, a velvet pouch.
53 A He opens it.
54 A A stone the size of a plum catches the blue light.
55 D KASIMIR: That is the ugliest diamond I have ever seen.
56 D REUBEN: It's a spinel. Worth three diamonds.
57 D ODALYS [V.O.]: Boys, the manager's put the phone away. He's shrugging. He's walking back to the hotel.
58 A ¶ Kasimir lets out a laugh he's been holding.
59 A Reuben closes the lid, slides the pouch inside his coat, drops the panel back into place.
60 D KASIMIR: And that's it?
61 D REUBEN: That's it.
62 A ¶ The car lurches.
63 A Starts to move again, upward, humming.
64 D ODALYS [V.O.]: Somebody just turned the power back on. You've got ninety seconds to the top station.
65 D KASIMIR: Ninety seconds to look like we belong at a gala.
66 A ¶ Reuben straightens his bow tie.
67 A Kasimir slicks his hair.
68 A The car glides on up the mountain toward the lights.
69 D REUBEN: Nobody ever looks at the men in the funicular.
70 D ODALYS [V.O.]: I'm looking at you.
71 D REUBEN: Nobody but you.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00256.json
### SCENE s00256 | INT. NIGHT BOAT, RIVER DANUBE - NIGHT
Detected names (may be incomplete or contain aliases): OLGA RADOMSKA-IKEJIANI, DETECTIVE KASPAR NWANKWO-BRUUN, LAURA
1 A ¶ A narrow cabin.
2 A Brass lamp.
3 A Curtains drawn.
4 A A tray with two untouched cups of tea.
5 A ¶ OLGA RADOMSKA-IKEJIANI (40s, black gloves, a fur collar) sits on the bunk.
6 A She stirs her tea slowly, never lifting it.
7 A ¶ Across from her, DETECTIVE KASPAR NWANKWO-BRUUN (50s, trench, bruised knuckles) leans against the door.
8 A ¶ He is calm.
9 A She is calm.
10 A The boat rocks.
11 D KASPAR: You knew him.
12 D OLGA: Everyone knew him.
13 D KASPAR: Better than most.
14 D OLGA: Worse.
15 D KASPAR: He wrote to you every week.
16 D OLGA: Letters are cheap.
17 A ¶ She sips.
18 A Sets the cup down.
19 A He watches the cup, not her.
20 D KASPAR: He's dead, Olga.
21 D OLGA: So I hear.
22 D KASPAR: Poisoned.
23 D OLGA: How careless.
24 A ¶ He moves.
25 A In a single step he is across the cabin.
26 A She rises just as quickly.
27 A They stand an inch apart.
28 D KASPAR [CONT'D] (quietly): Give me the glove.
29 D OLGA: Which?
30 D KASPAR: The left.
31 A ¶ She holds out her left hand.
32 A He takes it.
33 A Peels the glove, finger by finger.
34 A ¶ On her wrist: a bruise shaped like a ring of fingertips.
35 D KASPAR [CONT'D]: He fought.
36 D OLGA: He was stronger than he looked.
37 D KASPAR: Than you looked.
38 A ¶ She yanks free.
39 A He catches her again.
40 A They grapple.
41 A The lamp swings.
42 A Tea spills across the floor.
43 A She wrenches a hairpin from her hair, jabs at his arm.
44 A He twists it away.
45 A Both crash onto the bunk, breathing hard.
46 A ¶ Then the cabin door opens.
47 A A woman's voice, off-screen, calm and amused:
48 D LAURA [O.S.]: Kaspar. Olga. You're both very loud.
49 A ¶ They freeze.
50 A Kaspar, over Olga, hand at her throat.
51 A Olga, under him, the pin at his ribs.
52 D OLGA (whispering): Who is that?
53 D KASPAR (whispering back): My wife.
54 A ¶ Olga laughs, a low rich laugh.
55 A He lets go.
56 A She sits up, smoothing her fur.
57 D OLGA: Then this is a very different kind of poisoning.
