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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01916.json
### SCENE s01916 | INT. SAFE HOUSE, TOP FLOOR OF A CLOSED HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE MIRELA VASQUEZ-ODEH, STRANGER, DISPATCH, ANSELM
1 A ¶ Plaster dust.
2 A A bare bed frame.
3 A Window shutters nailed shut.
4 A On the floor, a battered radio set squats between two chairs.
5 A ¶ DETECTIVE MIRELA VASQUEZ-ODEH (40s, trench coat, a revolver at her hip) sits in one chair, back to the wall.
6 A Opposite her, a man in a gray suit, STRANGER (50s, ink-stained fingers, a gauze patch on his neck), sits with his hands in his lap.
7 D VASQUEZ-ODEH: You've been very quiet.
8 D STRANGER: You haven't asked me anything.
9 D VASQUEZ-ODEH: I'm asking now. Who are you?
10 D STRANGER: A man who works for the people who want me dead.
11 D VASQUEZ-ODEH: That's not a name.
12 D STRANGER: It's the only name I carry safely.
13 A ¶ The radio crackles.
14 A A clipped voice breaks through, distorted.
15 D DISPATCH [V.O.]: Unit Four, this is Control. Confirm subject in custody.
16 A ¶ Vasquez-Odeh picks up the handset, eyes on him.
17 D VASQUEZ-ODEH: Control, subject is in custody. Repeat, subject is secure.
18 D DISPATCH [V.O.]: Copy. Transport in twenty. Stand by.
19 A ¶ She sets the handset down.
20 A He watches her do it.
21 D STRANGER: They aren't coming for me. They're coming for you.
22 D VASQUEZ-ODEH: You'd say that.
23 D STRANGER: I'd say it because it's true. Control isn't Control. You've been talking to an empty room for an hour.
24 A ¶ She draws the revolver.
25 A Aims.
26 A He doesn't flinch.
27 D VASQUEZ-ODEH: What's your name?
28 D STRANGER: Anselm Ravindran.
29 A ¶ She lowers the revolver an inch.
30 D VASQUEZ-ODEH: That's the name on the file. The one who was supposed to be dead.
31 D ANSELM: I was. Then I wasn't. Look at the window.
32 A ¶ She keeps the gun level, but her eyes slide to the shutters.
33 A A thin line of light moves behind the slats: a flashlight, sweeping.
34 D VASQUEZ-ODEH (whispering): Transport already?
35 D ANSELM: That's not transport.
36 A ¶ The door handle turns.
37 A They both rise, each knocking over a chair.
38 A He lunges for the radio.
39 A She lunges for the door.
40 A Their shoulders collide.
41 A The radio tumbles; the handset swings on its cord.
42 D DISPATCH [V.O.]: ...Unit Four, report. Unit Four...
43 A ¶ Anselm kills the power.
44 A Silence.
45 A The doorknob stops turning.
46 A Then, from the hall, a soft, regretful click, as of a pistol being cocked.
47 D VASQUEZ-ODEH (barely audible): Window.
48 D ANSELM: Nailed shut.
49 D VASQUEZ-ODEH: Then the ceiling.
50 A ¶ She points to a rotted panel.
51 A He nods.
52 A They climb.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01224.json
### SCENE s01224 | INT. ABANDONED CARNIVAL HOUSE OF MIRRORS - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL QUINTANA, CATALINA QUINTANA, LIAM FAIRWEATHER
1 A ¶ Cracked glass everywhere.
2 A A flashlight beam jitters across a hundred reflections.
3 A ¶ MARISOL QUINTANA (20s, hoodie, camera on a strap) walks backward, panning.
4 A Her sister CATALINA QUINTANA (20s, same hoodie, different colour) holds the light.
5 A ¶ Between them, LIAM FAIRWEATHER (20s, rental-car keys in a fist) steps on glass and swears under his breath.
6 D MARISOL: Stay close.
7 D CATALINA: I am close.
8 D LIAM: She's closer than you.
9 A ¶ Something thumps on the other side of the glass.
10 A All three freeze.
11 A Catalina swings the light.
12 A Nothing.
13 A Only their own faces, split into pieces.
14 D MARISOL (whispering): Count.
15 D CATALINA: Three.
16 D LIAM: Count the reflections.
17 A ¶ She does.
18 A Her lips move.
19 A She gets to a number and stops.
20 A ¶ A breath, not theirs, fogs the mirror at the end of the corridor.
21 A A shape steps out of it that is not one of them.
22 A ¶ Marisol lifts the camera.
23 A Her hands don't shake.
24 A She presses record.
25 A ¶ Liam drops the keys.
26 A They ring on the floor like a bell.
27 A ¶ The light dies.
28 T CUT TO BLACK.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01402.json
### SCENE s01402 | INT. FEDERAL COURTHOUSE - JURY DELIBERATION ROOM - DAY
Detected names (may be incomplete or contain aliases): GUS, PELLETIER, DELPHINE OKAFOR-ROSS, BUZZ, TEMPLETON, ISADORA FLINT, BAILIFF
1 A ¶ A long oak table.
2 A Water pitcher.
3 A A window with the blinds half drawn.
4 A Legal pads scattered like leaves.
5 A ¶ Four jurors remain: a retired schoolteacher, a night-shift nurse, a mechanic, and a young law student.
6 A They have been here since nine.
7 A ¶ AUGUSTINE "GUS" PELLETIER, 60s, retired teacher, sits at the head with his reading glasses in his lap.
8 A DELPHINE OKAFOR-ROSS, 40s, nurse, rubs her temples.
9 A MARCUS "BUZZ" TEMPLETON, 50s, mechanic, leans back until his chair creaks.
10 A And ISADORA FLINT, 20s, law student, sits ramrod straight, pen poised.
11 D GUS: We've been going in circles.
12 D BUZZ: We've been going in squares.
13 D DELPHINE: Buzz, please.
14 D BUZZ: I'm just saying. Different shape.
15 D ISADORA: Gus, can I propose something?
16 D GUS: Of course, Isadora.
17 D ISADORA: We take a fresh vote. Anonymous. Written.
18 D BUZZ: We did that.
19 D ISADORA: We did a show of hands.
20 D BUZZ: Same thing.
21 D ISADORA: It really isn't.
22 A ¶ Delphine tears four slips from a legal pad.
23 A Passes them around.
24 A Pens scratch.
25 A Slips are folded and slid across the table.
26 A ¶ Gus gathers them.
27 A Unfolds one.
28 A Another.
29 A Reads.
30 A His eyebrows lift.
31 D GUS: Three guilty. One not.
32 D BUZZ: Who's the holdout?
33 D DELPHINE: It's anonymous, Buzz.
34 D BUZZ: I can count. It's you, Delphine.
35 D DELPHINE: It is not.
36 D BUZZ: Then it's you, Isadora.
37 D ISADORA: I voted guilty.
38 D BUZZ: So did I. So that leaves...
39 A ¶ All three turn slowly to look at Gus.
40 A He sets down the slips.
41 D GUS: Yes.
42 D BUZZ: You?
43 D GUS: Me.
44 D DELPHINE: Gus, the evidence--
45 D GUS: Was very good. I know.
46 D ISADORA: Then why--
47 D GUS: Because I taught that boy. Fifteen years ago.
48 A ¶ Silence.
49 A The window blinds tick against the sill.
50 D BUZZ: You never said.
51 D GUS: I wasn't asked.
52 D ISADORA: That's grounds for a mistrial.
53 D GUS: Possibly.
54 D DELPHINE: You should tell the judge.
55 D GUS: I will.
56 D BUZZ (muttering): Well, hell.
57 A ¶ Gus stands.
58 A His chair scrapes.
59 A He takes his glasses from his lap and walks to the door, one hand on the frame.
60 D GUS: Delphine, Buzz, Isadora. You have been fair. Thank you.
61 A ¶ He knocks twice on the door.
62 A The lock clicks.
63 A A BAILIFF opens it.
64 D GUS [CONT'D]: Bailiff. Please tell Judge Hanratty I need a word.
65 A ¶ The door closes behind him.
66 A The three jurors sit in silence.
67 D ISADORA: Well.
68 D DELPHINE: Well.
69 D BUZZ: Anyone want a sandwich?
70 A ¶ Delphine laughs, once, surprised.
71 A Isadora, despite herself, smiles.
72 A Buzz pushes back his chair, stretches, and the three of them let out a breath they have been holding all day.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02354.json
### SCENE s02354 | INT. FUNERAL HOME - FAMILY ROOM - DAY
Detected names (may be incomplete or contain aliases): OLIVER STANHOPE, WINIFRED STANHOPE-DUVAL, LUCIAN STANHOPE
1 A ¶ Beige carpet, a box of tissues on every surface.
2 A A framed print of a wheat field.
3 A A coffee urn steams on a side table.
4 A ¶ OLIVER STANHOPE, 50s, in a black suit too big at the shoulders, stands facing the wall.
5 A His sister, WINIFRED STANHOPE-DUVAL, 50s, sits on the sofa with a binder of arrangements.
6 D WINIFRED: We should choose the casket today.
7 D OLIVER: Dad wanted pine.
8 D WINIFRED: Dad wanted a lot of things.
9 D OLIVER: He wanted pine.
10 D WINIFRED: He wanted to be left alone.
11 A ¶ The door opens.
12 A LUCIAN STANHOPE, 20s, their nephew, steps in, hair wet from rain, a duffel on his shoulder.
13 D LUCIAN: I got the earlier flight.
14 D OLIVER: You weren't invited.
15 D WINIFRED: Oliver.
16 D LUCIAN: It's my grandfather.
17 D OLIVER: It's my father.
18 D WINIFRED: Both of you stop.
19 D LUCIAN: I didn't come to fight.
20 D OLIVER: You came to take the watch.
21 D LUCIAN: I came to say goodbye!
22 D WINIFRED: Quiet! Both of you, quiet!
23 A ¶ Oliver swings around.
24 A His hand shakes.
25 A The binder slides off Winifred's lap and hits the floor with a slap.
26 A Nobody picks it up.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01853.json
### SCENE s01853 | INT. DEEP SPACE RELAY STATION - CONTROL ROOM - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER EVELYN ADEYEMI, LIEUTENANT PIERRE DUMONT, ENSIGN TAMSIN BELL, VOICE, TRAVELER
1 A ¶ Brass-toned consoles, curved glass, a chart table out of some earlier century's idea of the future.
2 A Soft music plays from a hidden speaker.
3 A A blue star turns slowly beyond the viewport.
4 A ¶ COMMANDER EVELYN ADEYEMI, 50s, in a crisp gray uniform, stands at a console with a cup of tea.
5 A Beside her, the station's navigator LIEUTENANT PIERRE DUMONT, 30s, leans on the chart table over a spread of star maps.
6 A At the communications desk, the young radio operator ENSIGN TAMSIN BELL, 20s, wears a headset and absentmindedly twirls a pencil.
7 A ¶ A soft chime.
8 A Tamsin sits up.
9 D TAMSIN: Commander. Incoming signal on the long channel.
10 D EVELYN: Source?
11 D TAMSIN: Unknown. Wide beam, no authentication.
12 D PIERRE: Probably a drifter.
13 D EVELYN: Probably.
14 A ¶ Tamsin flips a switch.
15 A A hush of static fills the room, and out of it a voice, warm, old, faintly amused, as if from the bottom of a well.
16 D VOICE [V.O.] (over speaker): Relay Station Nine, this is a friend. Please do not be alarmed.
17 A ¶ Pierre and Tamsin exchange a look.
18 A Evelyn sets her tea down.
19 D EVELYN: Identify yourself.
20 D VOICE [V.O.]: Names are a luxury. Call me the Traveler.
21 D PIERRE (whispering): That's not a ship's name.
22 D TRAVELER [V.O.]: I am not a ship.
23 A ¶ The lights dim.
24 A A shape begins to resolve in the viewport, a tall, indistinct column of pale light rising out of the star's glare.
25 A Tamsin takes off her headset.
26 D EVELYN: Ensign. Raise the shields.
27 D TAMSIN: They're up, Commander. They've been up.
28 D TRAVELER [V.O.]: There is no need. I am here only to deliver a warning.
29 A ¶ The pale shape leans closer to the glass.
30 A Pierre steps back and knocks a star map to the floor.
31 A Evelyn does not blink.
32 D EVELYN: What warning?
33 A ¶ The shape raises what might be a hand.
34 A In the viewport, the blue star flickers once, twice.
35 D TRAVELER [V.O.]: Your sun is not what you think.
36 A ¶ Silence.
37 A The music, absurdly, continues.
38 A Evelyn crosses to the speaker, finds the knob, and turns it off.
39 D EVELYN: Go on.
40 A ¶ The Traveler's voice, when it comes, is very gentle.
41 D TRAVELER [V.O.]: It is a door. And somebody is knocking.
42 A ¶ Evelyn looks at Pierre and Tamsin.
43 A Neither speaks.
44 A Beyond the glass, the blue star flickers a third time, and the whole station groans like a ship in a swell.
45 D TAMSIN (small voice): Commander, I think we should go home.
46 D EVELYN (quietly): We are home.
47 A ¶ The shape in the window lowers its hand, and the star goes dark.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00112.json
### SCENE s00112 | EXT. LIFEBOAT - OPEN SEA - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN MAGNUS EKSTROM-ADEBAYO, PIA RAMIREZ-OKONKWO, DELPHINE, BAZ
1 A ¶ A cramped orange boat rocks on a grey swell.
2 A Four figures huddle under a torn canopy.
3 A ¶ CAPTAIN MAGNUS EKSTROM-ADEBAYO (60s, grizzled, hand clamped on the tiller) squints at the horizon.
4 A He is silent.
5 A Beside him, DR. PIA RAMIREZ-OKONKWO (40s, soaked blazer) wrings out her scarf.
6 A At the bow, young DELPHINE (16, wide-eyed, life jacket too big) clutches a flare gun.
7 A In the middle, BAZ (30s, steward, torn jacket) lies on his back, one arm over his eyes.
8 A ¶ He shifts.
9 A She looks at him.
10 D PIA: Baz. Are you awake?
11 D BAZ: No.
12 D PIA: Good. Stay that way.
13 A ¶ Magnus lifts one finger.
14 A Everyone goes still.
15 A He points.
16 A ¶ A smudge on the horizon.
17 A A smoke trail.
18 D DELPHINE: Captain! Is that a ship?
19 D MAGNUS: It is.
20 D DELPHINE: Should I fire it?
21 D MAGNUS: Not yet.
22 A ¶ She lowers the gun.
23 A Baz sits up, clutching the gunwale.
24 D BAZ: Fire it now, Delphine!
25 D MAGNUS: Wait.
26 D PIA: Magnus, if she doesn't--
27 D MAGNUS: It's too far. They'd never see it.
28 A ¶ He steadies the tiller.
29 A They wait.
30 A The smoke thickens.
31 A A hull appears.
32 A Grey.
33 A Steel.
34 A Moving toward them.
35 D MAGNUS [CONT'D]: Now.
36 A ¶ Delphine fires.
37 A A red star climbs into the sky.
38 A They scream, all four of them, together.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01640.json
### SCENE s01640 | INT. HOSPITAL HYDROTHERAPY POOL - DAY
Detected names (may be incomplete or contain aliases): LAKSHMI IYER, NURSE BERTRAND, ORDERLY CASIMIR, PADMORE, WILHELMINA OKORO
1 A ¶ Warm green water.
2 A Steam on the tiles.
3 A Handrails along the shallow end.
4 A ¶ DR. LAKSHMI IYER, 40s, stands waist-deep in a wetsuit top, a clipboard on a floating tray.
5 A NURSE BERTRAND, 50s, adjusts the lift chair at the edge.
6 A ORDERLY CASIMIR, 20s, holds a towel and does nothing else.
7 A DR. PADMORE, 60s, observes from a plastic chair by the wall.
8 A In the water, MRS. WILHELMINA OKORO, 80s, clings to the rail.
9 D IYER: Mrs. Okoro, how does that feel?
10 D WILHELMINA: Warm.
11 D IYER: Good. Lift the left leg for me.
12 D WILHELMINA: That's the one that doesn't lift.
13 D IYER: Try anyway.
14 D WILHELMINA: I tried last week.
15 D IYER: And?
16 D WILHELMINA: It stayed where it was.
17 D BERTRAND: She's got spirit, Doctor.
18 D IYER: She does. Mrs. Okoro, let's try the right.
19 D WILHELMINA: Which is the one that works?
20 D IYER: That's the idea.
21 D WILHELMINA: Then why do I need a doctor?
22 D PADMORE (from the chair): For the paperwork, Mrs. Okoro.
23 D WILHELMINA: Who's that?
24 D IYER: Dr. Padmore. He's observing.
25 D WILHELMINA: He looks like he's been observing since 1990.
26 D PADMORE: I find the work restful.
27 D IYER: Right leg, please.
28 D WILHELMINA: There.
29 D IYER: Higher.
30 D WILHELMINA: There.
31 D IYER: Higher.
32 D WILHELMINA: That's as high as it goes.
33 D IYER: It's high enough.
34 D BERTRAND: Casimir, the towel.
35 D CASIMIR: I have it.
36 D BERTRAND: Then hold it.
37 D CASIMIR: I am holding it.
38 D BERTRAND: Higher.
39 D CASIMIR: This is as high as it goes.
40 D WILHELMINA: He's learning.
41 D PADMORE: Slowly.
42 A ¶ Iyer glances at her clipboard.
43 A Makes a note.
44 A Wilhelmina lets go of the rail with one hand, tentatively.
45 A The water holds her.
46 A She smiles, a small, surprised thing.
47 D WILHELMINA [CONT'D]: Oh.
48 D IYER: Yes?
49 D WILHELMINA: Nothing. It's only that I'd forgotten.
50 D IYER: Forgotten what?
51 D WILHELMINA: That it could feel like this.
52 A ¶ Bertrand lowers the lift chair.
53 A Casimir finally spreads the towel.
54 A Padmore uncrosses his legs, checks his watch, crosses them again.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01849.json
### SCENE s01849 | INT. HOSPITAL ROOM 412 - NIGHT
Detected names (may be incomplete or contain aliases): AMINA FAROUK, WALTER NKEMELU
1 A ¶ A single bed.
2 A An IV pole.
3 A A window onto a dark parking lot.
4 A The monitor's green line crawls.
5 A ¶ DR. AMINA FAROUK, 40s, rumpled scrubs, white coat over her arm, sits on the edge of a chair, a tablet balanced on her knee.
6 A In the bed lies WALTER NKEMELU, 70s, a retired bus driver, oxygen cannula in his nose, one hand taped to a board.
7 A ¶ Amina scrolls through the chart.
8 A Walter watches the ceiling tile.
9 D AMINA: Your numbers are better than yesterday.
10 D WALTER (hoarse): I'm a bus driver. I know what that means.
11 D AMINA: It means better.
12 D WALTER: It means you're being polite.
13 D AMINA: I'm being accurate.
14 D WALTER: That's the same thing in your line of work.
15 A ¶ She sets the tablet down.
16 D AMINA (to the room, softly): Okay.
17 D WALTER: Who are you talking to?
18 D AMINA: Nobody. Habit.
19 A ¶ He turns his head on the pillow.
20 D WALTER: You say that when you're about to tell me something I won't like.
21 D AMINA: I do not.
22 D WALTER: You do. Last Tuesday. Before you said the word "biopsy."
23 A ¶ She picks at the cuff of her coat.
24 D AMINA: The scan came back.
25 D WALTER: And?
26 D AMINA: And it's not what we hoped.
27 A ¶ Walter says nothing.
28 A The monitor beeps.
29 A She speaks without looking at him.
30 D AMINA [CONT'D] (to herself): Come on, Amina.
31 D WALTER: Say it plain.
32 D AMINA: It's spread. To the liver.
33 A ¶ Walter closes his eyes.
34 A His fingers curl on the board, the tape pulling.
35 D WALTER: How long?
36 D AMINA: I don't want to guess.
37 D WALTER: Guess.
38 D AMINA: Months. Maybe six.
39 D WALTER: Maybe.
40 D AMINA: I'm sorry.
41 D WALTER: Don't apologize. You didn't give it to me.
42 D AMINA: No.
43 D WALTER: Sit closer. I can't see you.
44 A ¶ She slides the chair to the bed.
45 A He opens his eyes and finds her face.
46 D WALTER [CONT'D]: My daughter's flying in Thursday.
47 D AMINA: I'll make sure the visiting hours are flexible.
48 D WALTER: I'd like to tell her myself.
49 D AMINA: Of course.
50 D WALTER: Not on the phone.
51 D AMINA: Not on the phone.
52 A ¶ He nods.
53 A Then, quietly, to the empty air:
54 D WALTER [CONT'D] (muttered): Six months. Might as well finish the route.
55 A ¶ Amina laughs, a short wet sound, and wipes her eye with her sleeve.
56 A Walter pats her hand with the one that isn't taped.
57 D WALTER [CONT'D] (to the room): All right, then.
58 D AMINA: All right.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02271.json
### SCENE s02271 | EXT. MISSOURI RIVER FERRY LANDING - DUSK
Detected names (may be incomplete or contain aliases): HOLLIS CRANE, PERPETUA VANCE, ELIAS TWOCROWS
1 A ¶ A flat-bottomed ferry is chained to a cottonwood stump, rocking on brown water the width of a county.
2 A The sky has gone the colour of a bruise.
3 A ¶ HOLLIS CRANE, lean and sun-cured, leans on the ferry rail.
4 A He wears a gun he has not touched in nine years.
5 A He watches the far bank without blinking.
6 A ¶ A woman stands at the ramp with a carpetbag in each hand.
7 A PERPETUA VANCE, forty, black mourning dress, hat pinned hard.
8 A She sets down one bag.
9 A She keeps the other.
10 D PERPETUA: You're the ferryman.
11 D HOLLIS: Was.
12 A ¶ He spits over the rail.
13 A The brown water takes it without comment.
14 D PERPETUA: Then who is.
15 D HOLLIS: Nobody. River's closed since the Tuesday flood. Company let us all go.
16 A ¶ She looks at the chain.
17 A She looks at him.
18 A She says nothing, which is its own kind of answer.
19 A ¶ She lifts the second bag and sets it on the plank between them.
20 A The latch is open a finger's width.
21 A Inside, the blued steel of a revolver catches the last light.
22 D HOLLIS [CONT'D] (quiet): Ma'am.
23 D PERPETUA: My husband crossed here a week ago. The man who took his fare. I'd like a word.
24 A ¶ A shout rolls over the water from the far bank, flattened by distance.
25 D ELIAS TWOCROWS [O.S.] (hailing): Hollis! Is that her? Is that the widow?
26 A ¶ He does not turn.
27 A His jaw works.
28 A The hand that rests on the rail begins, very slowly, to slide toward his hip.
29 D PERPETUA: Who is that?
30 D HOLLIS: My brother.
31 D ELIAS TWOCROWS [O.S.] (nearer, a rifle bolt clacking): Don't let her on the boat, Hollis!
32 A ¶ She steps onto the ferry.
33 A The planks complain.
34 A She puts her hand on the bag.
35 D PERPETUA: Then it was you who took the fare.
36 D HOLLIS: I took it for him.
37 A ¶ He draws.
38 A She draws.
39 A A crack splits the dusk, then another, and the cottonwood stump fountains bark.
40 A The chain snaps and the ferry lurches free, spinning into the current with the two of them still standing, still firing, on its drifting deck.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00172.json
### SCENE s00172 | INT. HOLLOW GIANT OAK - TWILIGHT
Detected names (may be incomplete or contain aliases): QUEEN ELSPETH, SIR BRAM THORNWICK, PAGES, TWIG, NETTLE, STRANGER, WRENNA
1 A ¶ A throne room carved inside a dead tree.
2 A Roots for pillars.
3 A Fireflies in jars.
4 A ¶ QUEEN ELSPETH, 70s, sits wrapped in moss-green wool.
5 A Her crown is a ring of antlers.
6 A A cloaked FIGURE stands in the doorway, dripping.
7 A Beside the throne, SIR BRAM THORNWICK, 50s, one-armed knight, rests a hand on his hilt.
8 A Two PAGES, TWIG and NETTLE, twins, 10, hide behind a root.
9 D STRANGER: I came about the debt.
10 D QUEEN ELSPETH: Debts are paid at dawn. This is dusk.
11 D STRANGER: Then I'm early.
12 A ¶ Bram steps forward.
13 A Sword half drawn.
14 D SIR BRAM: Name yourself.
15 A ¶ The Stranger lowers the hood.
16 A A woman, 30s, bark-pale skin, eyes like polished amber.
17 D STRANGER: You know it. Say it, Brammy.
18 A ¶ Bram releases the sword.
19 A Stares.
20 D SIR BRAM: Wrenna.
21 D WRENNA: Wrenna Ashgrove. The tree-keeper's daughter. The one you left under the roots.
22 D QUEEN ELSPETH: You were dead.
23 D WRENNA: So were the roots, once.
24 A ¶ Twig whispers to Nettle.
25 A Nettle shushes her.
26 D TWIG (whispering): Is she a ghost?
27 D NETTLE: Ghosts don't drip.
28 A ¶ Wrenna sets a small acorn on the floor.
29 A It cracks.
30 A A green shoot unfurls, and stops.
31 A Wilts.
32 A She sighs.
33 D WRENNA: I thought I'd have more left.
34 D QUEEN ELSPETH: Sit, child.
35 A ¶ Wrenna sits on a root.
36 A Elspeth sets her crown aside.
37 D QUEEN ELSPETH [CONT'D]: The debt is forgiven.
38 D WRENNA: I didn't come to be forgiven.
39 D SIR BRAM: Then what?
40 D WRENNA: To see it. Once. Before it falls.
41 A ¶ The fireflies dim, one jar at a time.
