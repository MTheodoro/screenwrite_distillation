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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01161.json
### SCENE s01161 | INT. CANDLELIT SALON - NIGHT - 1789
Detected names (may be incomplete or contain aliases): CAPTAIN LUCIEN, SERGEANT ROQUE, MADAME OUDIN
1 A ¶ Red velvet, gilt mirrors, a card table scattered with coins.
2 A A door ajar to a dark corridor.
3 A Outside, a mob's murmur rises like surf.
4 A ¶ CAPTAIN LUCIEN (30s, powdered wig, frayed uniform) holds a rapier.
5 A Across the table stands SERGEANT ROQUE (40s, scarred cheek, soldier's pistol).
6 A Between them, trembling under a lace shawl, MADAME OUDIN (60s, rouged, jeweled fingers) clings to the back of a chair.
7 A ¶ They freeze.
8 A All three.
9 A Candle flames waver.
10 D LUCIEN: Roque. Lower it.
11 D ROQUE: Not till he drops the blade.
12 D LUCIEN: He won't.
13 D ROQUE: Then neither will I.
14 A ¶ Madame Oudin lets out a thin whimper.
15 A The mob outside surges.
16 A A bottle shatters against the shutters.
17 D LUCIEN: Madame, behind me.
18 A ¶ She scrambles to him.
19 A Roque tracks her with the pistol.
20 A Lucien shifts the rapier a hair, covering her.
21 A Roque advances one step.
22 A Lucien retreats, shoving the table.
23 A Coins ring on the floor.
24 A ¶ They lunge together.
25 A Steel meets steel and clashes against the pistol barrel.
26 A A shot cracks.
27 A The mirror shatters.
28 A All three flinch.
29 A ¶ Silence.
30 A Smoke drifts.
31 A No one has fallen.
32 D MADAME OUDIN (a whisper): Oh, my.
33 A ¶ In the corridor, boots pound closer.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00223.json
### SCENE s00223 | INT. DAIRY-CASE AISLE, 24-HOUR GROCERY - 3 A.M.
Detected names (may be incomplete or contain aliases): TOBIAS WREN-ALDRIDGE, PRISCILLA OYELARAN, DIMA, ROSENFELD, HYACINTH PELL, MARGUERITE
1 A ¶ Fluorescent hum.
2 A Forty brands of yogurt, all the same.
3 A ¶ TOBIAS WREN-ALDRIDGE (30s, Regional Synergy Lead, lanyard, no pulse) holds a laser pointer at a shelf.
4 D TOBIAS: Team. Our learning: yogurt is a journey.
5 A ¶ Four night-shift stockers stare back.
6 A ¶ PRISCILLA OYELARAN (40s, forklift certified, unimpressed) holds a pallet jack like a shield.
7 A ¶ DMITRI "DIMA" ROSENFELD (20s, hoodie, headphones around his neck) eats a yogurt, deliberately.
8 A ¶ HYACINTH PELL (50s, reading glasses on a chain, ex-accountant) checks her watch.
9 A ¶ MARGUERITE (60s, no last name anyone remembers) is asleep standing up.
10 D TOBIAS [CONT'D]: Going forward, we are removing the word "expired."
11 D PRISCILLA: We're what?
12 D TOBIAS: We're reframing it as "mature."
13 A ¶ Dima's spoon stops.
14 A He puts it down.
15 D DIMA: That's illegal.
16 D TOBIAS: That's agile.
17 D HYACINTH (to no one): I left a pension for this.
18 A ¶ Tobias fires the laser pointer at Marguerite's forehead.
19 D MARGUERITE (eyes closed): Is it the fire?
20 D PRISCILLA: No, Marguerite. It's the Synergy Lead.
21 A ¶ Marguerite nods, drifts off again.
22 A Tobias lowers the pointer.
23 D TOBIAS: Okay. Okay. Is there anything anyone wants to say before we align?
24 A ¶ Silence.
25 A Dima raises his yogurt like a toast.
26 D DIMA: Mature.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01409.json
### SCENE s01409 | INT. BOXING GYM - LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MANUEL, SERRANO, IGNATIUS OBI-MARTINEZ, TALL MAN, AMBROSE
1 A ¶ Steam.
2 A Rusted lockers.
3 A A bare bulb swings from a chain.
4 A The smell of liniment and old leather.
5 A ¶ MANUEL "THE ANVIL" SERRANO, 30s, sits on a bench with gloved hands in his lap, staring at the floor.
6 A His trainer, IGNATIUS OBI-MARTINEZ, 60s, kneels in front of him, taping a wrist with absent care.
7 A ¶ A TALL MAN in a camel coat leans in the doorway.
8 A No one introduced him.
9 A He has been watching for a while.
10 D IGNATIUS: Stay loose.
11 A ¶ Manuel nods.
12 A His eyes do not leave the floor.
13 D IGNATIUS [CONT'D]: Breathe through the nose.
14 A ¶ Manuel breathes.
15 A Ignatius tears the tape with his teeth.
16 A ¶ The Tall Man clears his throat.
17 D TALL MAN: Mr. Serrano.
18 A ¶ Manuel doesn't look up.
19 A Ignatius's hands stop.
20 D TALL MAN [CONT'D]: My name is Ambrose Vance. I represent the promoter.
21 D IGNATIUS: He's got a fight.
22 D AMBROSE: I'm aware.
23 D IGNATIUS: So you can wait outside.
24 D AMBROSE: I can't.
25 A ¶ The bulb swings.
26 A Manuel's shadow slides across the lockers.
27 A Ignatius rises, one knee cracking, and plants himself between them.
28 D IGNATIUS: Say what you came to say.
29 D AMBROSE: It's about the third round.
30 A ¶ Ignatius and Manuel both go still.
31 A The steam hisses from a pipe.
32 D AMBROSE [CONT'D]: Mr. Serrano goes down in the third. The money is already placed.
33 D IGNATIUS: ^ Get out.
34 D MANUEL: ^ Get out.
35 A ¶ They say it at the same time, quiet and level.
36 A Ambrose lifts both hands, palms out, and steps back through the doorway into the corridor.
37 A ¶ Ignatius shuts the door.
38 A Leans against it with his eyes closed.
39 A Manuel finally lifts his head.
40 A His gloved hands, slowly, curl into fists.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01427.json
### SCENE s01427 | INT. FAMILY SEWING ROOM - ATTIC - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): AGATHA FENWICK, ROSAMUND
1 A ¶ Dust turns slowly in a shaft of low gold light.
2 A A dress form wears half a wedding gown, pins bristling at the hem like a porcupine.
3 A Bolts of fabric lean in the corners, patient as old dogs.
4 A ¶ AGATHA FENWICK (60s, wire-rimmed glasses on a beaded chain, thimble on her middle finger) kneels at the hem, working a needle through satin.
5 A Her daughter ROSAMUND (30s, stiff-backed, coat still on, car keys unreleased in her fist) stands in the doorway as though the floor might be hot.
6 D AGATHA: You're early.
7 D ROSAMUND: Traffic was light.
8 D AGATHA (to the hem): Hold still, you.
9 A ¶ She isn't speaking to the dress form.
10 A Rosamund does not know whether to answer anyway.
11 D ROSAMUND: Is that Lena's?
12 D AGATHA: It was going to be. I'm altering it.
13 D ROSAMUND: For who?
14 A ¶ Agatha bites the thread.
15 A Does not reply.
16 A She stands with a small grunt, takes a step back, and squints at the gown with the eye of a general.
17 D AGATHA: Everyone, take a seat. Please. The fitting's about to start.
18 A ¶ The room has no one else in it.
19 A Rosamund looks over her shoulder anyway, at the empty hall.
20 D ROSAMUND: Mum.
21 D AGATHA (muttering): Too long. Always too long. I told her.
22 D ROSAMUND: It's mine, isn't it?
23 A ¶ The needle stops mid-air.
24 D AGATHA: You said you'd never wear it.
25 D ROSAMUND: I said I'd never get married.
26 D AGATHA: Same thing, the way you said it.
27 D ROSAMUND: You altered a dress in secret for eleven weeks and you want to talk about how I said it?
28 D AGATHA: I wanted it to fit.
29 A ¶ Rosamund drops her keys.
30 A They hit the floorboards with a crack that makes the dress form seem to flinch.
31 D ROSAMUND: You never once asked me what I wanted.
32 D AGATHA: You never once told me!
33 A ¶ The shout hangs.
34 A Dust spins.
35 A Rosamund steps forward, picks up the hem, and holds the satin in her fist.
36 D ROSAMUND (quietly): Pin it shorter.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00944.json
### SCENE s00944 | INT. HARBORVIEW ROWING CLUB, BOATHOUSE - PRE-DAWN
Detected names (may be incomplete or contain aliases): COACH HAROLDINE BEAUMONT-ADEKUNLE, DARIUS KOWALA-NAKAMURA, LORCAN FITZGIBBON-ADE, ELOWEN MARCH-SANTOS, PADDY TREMBLAY-ONYEKA
1 A ¶ Racks of eight-man shells hang from the rafters like pale fish.
2 A The river outside is black and still.
3 A Condensation beads on the windows.
4 A ¶ COACH HAROLDINE BEAUMONT-ADEKUNLE (60s, wool cap, a stopwatch on a faded lanyard) stands at the water door with her back to the room.
5 A ¶ Behind her, four rowers sit on the bench, lacing shoes.
6 A DARIUS KOWALA-NAKAMURA (20s, shoulders like doors) has ripped his tape twice.
7 A LORCAN FITZGIBBON-ADE (20s, hands bandaged) peels the gauze off one palm, studies the raw skin, and presses the gauze back on.
8 A ELOWEN MARCH-SANTOS (20s, her ponytail tight enough to hurt) stares at the same spot on the floor.
9 A PADDY TREMBLAY-ONYEKA (19, the youngest, a borrowed hoodie) keeps rubbing his thumbs against his knees.
10 A ¶ Nobody speaks.
11 A The only sound is the creak of the racks and the slap of water against the dock.
12 A ¶ Haroldine shifts her weight.
13 A She does not turn.
14 D HAROLDINE: Boats in.
15 A ¶ They stand.
16 A All together, with the ease of long practice, they lift the shell from its rack and walk it toward the water.
17 A Darius takes the bow.
18 A Lorcan, the stern.
19 A Elowen and Paddy each take a side.
20 A Haroldine holds the door.
21 A ¶ The shell touches the river.
22 A Paddy steps in first.
23 A His foot slips.
24 A Elowen's hand is on his elbow before he knows he's falling.
25 A ¶ He says nothing.
26 A She says nothing.
27 A She lets go.
28 D HAROLDINE [CONT'D] (to the shell, quietly): Go.
29 A ¶ Oars dip.
30 A The boat moves out into the fog, and the four of them breathe as one, a single lung.
31 A On the dock, the Coach clicks her stopwatch, looks at it, and clicks it again.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01850.json
### SCENE s01850 | INT. RIVERBOAT STATEROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN SILAS BARROW, MADAME CELESTINE ROUX, ^CELESTINE, MARGUERITE
1 A ¶ 1871.
2 A A cramped cabin lit by a swaying oil lamp.
3 A A trunk, a washstand, a narrow bunk.
4 A The paddlewheel thuds somewhere beneath the floor.
5 A Rain streaks the porthole.
6 A ¶ CAPTAIN SILAS BARROW, 50s, in a rumpled blue coat, sits on the trunk with a ledger on his knee.
7 A Across from him, in the only chair, sits MADAME CELESTINE ROUX, 40s, black lace, a small valise in her lap.
8 A She has not taken her gloves off.
9 D SILAS: You've paid for passage to Natchez, Madame Roux.
10 D CELESTINE: I have.
11 D SILAS: We reach Natchez at dawn.
12 D CELESTINE: I am aware.
13 D SILAS: Then I wonder why you ask to speak with me at midnight.
14 D CELESTINE (to herself): Because midnight is when truths wake.
15 D SILAS: I beg your pardon?
16 D CELESTINE: Nothing, Captain. A habit of mine.
17 A ¶ He closes the ledger.
18 A The lamp swings.
19 A Shadows run across the walls and back.
20 D SILAS: Madame, I run a respectable boat.
21 D CELESTINE: No one doubts it.
22 D SILAS: Then you'll understand that when a lady boards with no luggage but a valise, and a name that is not the one on her papers, I am obliged to ask.
23 D CELESTINE: Ask.
24 D SILAS: Who are you?
25 D CELESTINE: I am the sister of the man you hanged in Vicksburg.
26 A ¶ Silas stands.
27 A The ledger slides to the floor.
28 A Celestine does not move.
29 A The paddlewheel thuds on.
30 D SILAS (simultaneously): I did not hang him.
31 D ^CELESTINE (simultaneously): You signed the paper.
32 A ¶ They stare.
33 A Silas lowers himself back onto the trunk.
34 D SILAS: That was war, Madame.
35 D CELESTINE: War ended in sixty-five.
36 D SILAS: He was a spy.
37 D CELESTINE: He was a boy of nineteen with a letter.
38 D SILAS: Madame Roux--
39 D CELESTINE: You may call me Marguerite. That is my name.
40 D SILAS (slowly): Marguerite.
41 A ¶ She opens the valise.
42 A Inside, on a bed of black velvet, lie a revolver and a folded paper.
43 A Silas looks at them for a long moment.
44 D SILAS [CONT'D] (muttering): So it ends.
45 D MARGUERITE: No. That is for you to choose.
46 A ¶ She takes out the paper, unfolds it, and lays it on his knee.
47 A He reads it.
48 A His lips move.
49 A He finishes.
50 A He looks up.
51 D SILAS: This is a confession.
52 D MARGUERITE: It is yours to sign.
53 D SILAS: And if I do not?
54 A ¶ She lifts the revolver from the velvet and sets it beside the paper on his knee, butt first.
55 D MARGUERITE: Then you will have both.
56 A ¶ Rain hammers the porthole.
57 A The lamp steadies.
58 A Silas reaches slowly for the pen on the washstand.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02024.json
### SCENE s02024 | INT. HALLORAN FAMILY GREENHOUSE - SATURDAY MORNING
Detected names (may be incomplete or contain aliases): GRANDMA ROSALIND HALLORAN, TOBY
1 A ¶ A glass lean-to bolted to the back of a brick house.
2 A Tomato vines, hanging fern baskets, a rusted wheelbarrow.
3 A Condensation drips from every pane.
4 A A radio on a shelf plays low country music.
5 A ¶ GRANDMA ROSALIND HALLORAN (70s, tiny, sunhat, hands like gnarled roots) kneels at a seed tray.
6 A ¶ Beside her, TOBIAS "TOBY" HALLORAN (9, cowlick, one shoe untied) holds a trowel like a sword.
7 A ¶ Near the door, DESMOND HALLORAN (40s, Toby's father, rumpled) drinks coffee from a thermos lid.
8 A Next to him, JUNIPER HALLORAN (15, black nail polish, earbuds in) scrolls her phone.
9 D DESMOND: Toby, easy with that.
10 D TOBY: I am easy.
11 D ROSALIND: He is a delicate surgeon.
12 D JUNIPER: He is a menace.
13 A ¶ Toby jabs the trowel into the soil.
14 A It strikes something hard.
15 A CLINK.
16 D TOBY: Gran! There's something!
17 D ROSALIND: Stop digging.
18 D TOBY: It's metal!
19 D ROSALIND: Stop digging, Tobias.
20 A ¶ Her voice is suddenly flat, brittle.
21 A Everyone goes still.
22 A Even the radio seems to hush.
23 D DESMOND: Mum?
24 D ROSALIND: Step back. Everyone.
25 A ¶ She pushes herself up, wincing, takes Toby by the shoulders and moves him aside.
26 A She brushes dirt away with her thumb.
27 A A rusted tin lid appears, stamped with faded red roses.
28 D JUNIPER (pulling out one earbud): Is that a body?
29 D DESMOND: Juniper!
30 D ROSALIND: It is not a body.
31 D TOBY: Is it treasure?
32 D ROSALIND (quietly): It is something I buried the year your grandfather left.
33 A ¶ The room holds its breath.
34 A Desmond sets down the thermos lid.
35 D DESMOND: Mum, you don't have to--
36 D ROSALIND: I do. It's been forty years. I'm tired of tending around it.
37 A ¶ She kneels again, slower.
38 A Works her fingers under the lid.
39 A It resists, then gives with a shriek of old metal.
40 A ¶ Inside, wrapped in oilcloth, a bundle of letters tied with twine, a man's gold watch, and a child's baby shoe.
41 D TOBY: That's tiny.
42 D JUNIPER: That's Dad's.
43 A ¶ Desmond stares at the shoe.
44 A He crouches slowly, picks it up.
45 A His thumb rubs the faded stitching.
46 D DESMOND: You said you lost these.
47 D ROSALIND: I said a lot of things.
48 D DESMOND (louder): You told me he took everything!
49 D ROSALIND (louder): I told you what I could bear to tell you!
50 A ¶ The shout rings off the glass.
51 A Toby flinches.
52 A Juniper steps in front of him, protective, then looks mortified and steps back.
53 D DESMOND (to Rosalind): Forty years.
54 D ROSALIND (to Desmond): Forty years.
55 A ¶ Silence.
56 A Condensation drips from a pane onto a fern frond.
57 A Plink.
58 A ¶ Rosalind lifts the watch, wipes the face with her sleeve.
59 A Holds it to her ear.
60 D ROSALIND [CONT'D]: Still ticking.
61 D DESMOND: It can't be.
62 D ROSALIND: Your father always wound it twice a day. I think I kept doing it, in my head, after.
63 D TOBY (small voice): Can I hold it?
64 A ¶ Rosalind looks at Desmond.
65 A He nods, slow.
66 A She presses the watch into Toby's palm, folding his fingers around it.
67 D ROSALIND: Gently, my darling. It has been waiting a long time.
68 A ¶ Toby lifts it to his ear, eyes huge.
69 D TOBY: It's like a tiny heart.
70 D JUNIPER (softly): That is actually kind of sweet.
71 D DESMOND: Don't tell anyone.
72 D JUNIPER: I'll tell everyone.
73 A ¶ The corner of Desmond's mouth twitches.
74 A He sits down hard on the overturned wheelbarrow and laughs, short and wet.
75 A Rosalind lets out a breath and laughs too.
76 A Juniper joins, helpless.
77 A Toby looks from face to face, confused and thrilled.
78 D TOBY: What's funny?
79 D ROSALIND: Absolutely nothing.
80 D DESMOND: Absolutely nothing.
81 D ROSALIND: Absolutely nothing.
82 D JUNIPER: Everything.
83 A ¶ The radio, as if on cue, turns to a slow waltz.
84 A Rosalind sets the tin in the sun, lid open, and goes back to her seed tray.
85 D ROSALIND: Now. Who wants to plant some tomatoes?

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01664.json
### SCENE s01664 | INT. SCHOOL GYM - SLEEPOVER - NIGHT
Detected names (may be incomplete or contain aliases): ANYA, BARRETT, DELILAH, KENJI, ROXANNE, WALDO
1 A ¶ Sleeping bags in a circle.
2 A A flashlight in the middle, pointed at the ceiling.
3 A Gym mats smell of rubber and old sweat.
4 A ¶ ANYA, 15, in pajamas with cartoon cats, sits cross-legged.
5 A BARRETT, 16, hugs his knees.
6 A DELILAH, 15, plays with the zipper on her sleeping bag.
7 A KENJI, 16, sits with a bag of chips he hasn't opened.
8 A ROXANNE, 15, stares at the double doors.
9 A WALDO, 17, lies on his back, hands behind his head.
10 D ANYA (to the group): Okay. Truth or dare. Who's first?
11 A ¶ Nobody moves.
12 D BARRETT (to Anya): You're the one who wanted to play.
13 D ANYA: I changed my mind.
14 D DELILAH (to herself): It's too quiet.
15 D KENJI: It's a gym. Gyms are quiet.
16 D ROXANNE: Not this quiet.
17 D WALDO: There's no wind. No cars. Nothing.
18 D BARRETT (to Waldo): Don't say that.
19 D WALDO: I'm just saying.
20 A ¶ A basketball rolls out of the dark.
21 A Slowly.
22 A It bumps against Delilah's sleeping bag.
23 A Stops.
24 A ¶ Everyone stares at it.
25 A Nobody touches it.
26 D KENJI (whispering): Did somebody kick that?
27 D ANYA: Nobody's near it.
28 D ROXANNE (to everyone): Don't look at the doors.
29 D BARRETT: Why not?
30 D ROXANNE: Because they're open.
31 A ¶ They were closed.
32 A Now they gape, a black rectangle onto the dark hallway.
33 A ¶ Delilah scoots back on her sleeping bag.
34 A Kenji drops the chips.
35 A Barrett grabs the flashlight and sweeps it across the doors.
36 A Nothing.
37 A Just the hall.
38 D WALDO (softly): Count us.
39 D ANYA: What?
40 D WALDO: Count us. Out loud.
41 D ANYA: One.
42 D BARRETT: Two.
43 D DELILAH: Three.
44 D KENJI: Four.
45 D ROXANNE: Five.
46 A ¶ A long pause.
47 A Waldo hasn't spoken.
48 D WALDO: Six.
49 A ¶ Everyone turns.
50 A Waldo is lying exactly as before.
51 A But he hasn't moved his lips.
52 A ¶ Anya, barely moving her lips, says the only word left.
53 D ANYA (whispering): Run.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00069.json
### SCENE s00069 | EXT. WILLOW GROVE AT THE EDGE OF THE WORLD - TWILIGHT
Detected names (may be incomplete or contain aliases): STRANGER, VOICE, WREN
1 A ¶ Weeping willows, silver in the dusk.
2 A Fireflies drift between branches like slow sparks.
3 A A pond mirrors a sky with two moons.
4 A A stone well stands among the roots, its lip furred with moss.
5 A ¶ A STRANGER walks into the grove: a woman, ageless, barefoot, wrapped in a patchwork cloak that shifts color as she moves.
6 A She carries a lantern with no flame, only a glow like captured dawn.
7 A She stops at the well and sets the lantern on its lip.
8 D STRANGER (to the grove): I hear you.
9 A ¶ The willows rustle.
10 A A firefly lands on her sleeve, and she watches it breathe.
11 D STRANGER [CONT'D] (softly): I know. I know. It's been a long road.
12 A ¶ A voice rises from the well, deep and wet and patient, as though spoken through a thousand years of stone.
13 D VOICE [O.S.] (from the well): Who comes to the Mouth of Names?
14 D STRANGER: A traveler.
15 D VOICE [O.S.] (from the well): Travelers bear names.
16 D STRANGER: Mine fell off the road a long way back.
17 A ¶ She kneels.
18 A She dips her hand into the cold dark water.
19 A Ripples spread, and the fireflies pause in the air, holding their light.
20 D VOICE [O.S.] (from the well): Then I shall give you one.
21 D STRANGER: Give me a good one.
22 A ¶ The water brightens, silver then gold.
23 A When it clears, the surface shows a face: not hers, but a girl's, laughing.
24 D VOICE [O.S.] (from the well): Wren.
25 A ¶ The woman closes her eyes.
26 A The cloak settles to a single color: the deep green of willow leaves.
27 D WREN (whispering): Wren.
28 A ¶ She rises, shoulders loose, as though a weight has slid off.
29 A She picks up the lantern.
30 A Its glow steadies and warms.
31 D WREN [CONT'D] (to the well): Thank you.
32 D VOICE [O.S.] (from the well): Walk well, Wren.
33 A ¶ She leaves the grove.
34 A Behind her, the willows close their branches like curtains.
35 A The fireflies resume their drift, and the two moons climb.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02179.json
### SCENE s02179 | INT. MUSEUM CLOCKROOM - NIGHT
Detected names (may be incomplete or contain aliases): NADIA FARRUKH, THEO BAPTISTE, KENJI IWATA, DOT MCALLISTER, THUNK
1 A ¶ Brass gears the size of cartwheels turn behind glass.
2 A A vault door gleams in the corner, unlit.
3 A The crew has been here three hours.
4 A ¶ NADIA FARRUKH (30s, mastermind) sits cross-legged on a bench, a tablet balanced on her knee.
5 A THEO BAPTISTE (40s, safe man, headphones) listens to the vault.
6 A KENJI IWATA (20s, climber) hangs upside down from a beam, sandwich in hand.
7 A DOT MCALLISTER (60s, forger) knits on a stool, needles clicking.
8 D THEO (not looking up): Four more clicks.
9 D NADIA: Take your time.
10 D KENJI: You said that an hour ago.
11 D NADIA: An hour ago you were still on the roof.
12 D DOT: Nobody's bored if they're knitting.
13 D KENJI: I'm not knitting.
14 D DOT: That's your problem.
15 A ¶ Theo holds up one finger.
16 A The room stills.
17 A A gear grinds.
18 A Another.
19 A Nadia glances at her tablet; a timer reads 02:14.
20 D NADIA: Guard changes in two minutes.
21 D KENJI: Two minutes is nothing.
22 D NADIA: Two minutes is the whole job.
23 D THEO: Shh!
24 A ¶ A THUNK from inside the vault.
25 A Theo smiles, exhales, and takes off the headphones.
26 A He reaches for the handle.
27 A Kenji swings down from the beam, drops the sandwich, grabs Nadia's shoulder.
28 A Dot sets her needles down.
29 A Nadia stands, tablet clutched to her chest, as Theo turns the handle and the door hisses open on a velvet-lined case holding a small silver clockwork bird.
30 D KENJI: That's it?
31 D NADIA: That's it.
32 D DOT: It's smaller than I thought.
33 D THEO: They always are.
34 D KENJI: Can we go?
35 D NADIA: Not yet. Dot, the swap.
36 D DOT: I'm doing it.
37 D KENJI: Hurry up, hurry up.
38 D DOT: You're rushing me, boy.
39 D THEO: He's not rushing you, he's scared.
40 D KENJI: I'm not scared!
41 D NADIA: Everyone breathe.
42 A ¶ Dot lifts the bird with tissue and sets a duplicate in its place.
43 A Her hands, so slow on the needles, are fast now.
44 A Kenji stuffs the real bird into a padded satchel.
45 A Theo pushes the vault shut.
46 A The timer on Nadia's tablet reads 00:31.
47 D NADIA [CONT'D]: Go. Go.
48 D KENJI: Which door?
49 D NADIA: Roof!
50 D THEO: Roof is blocked!
51 D DOT: Then stairs!
52 A ¶ Boots hit the corridor.
53 A A roving flashlight beam swings across the clockroom glass.
54 A Kenji drops flat.
55 A Theo pulls Dot behind a gear housing.
56 A Nadia kills the tablet and the room is black.
57 A ¶ The beam lingers on the dropped sandwich.
58 A Footsteps pause outside.
59 A Nobody breathes.
60 A ¶ Nadia's voice, very quiet, from nowhere.
61 D NADIA [CONT'D]: Now.
62 A ¶ The beam moves on.
63 A Kenji springs for the service stairs.
64 A Theo and Dot bolt after him.
65 A Nadia follows, the bird bouncing in the satchel.
66 A The gears keep turning.
