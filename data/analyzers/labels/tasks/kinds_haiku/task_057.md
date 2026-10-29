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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0157.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01992_0 | EXT. ICE CAVE MOUTH, GLACIER - DAY
Detected names (may be incomplete or contain aliases): HANNELORE BR, CKNER-ODUYA, GIDEON PEARCE-NAKAGAWA, INGRID SANDQVIST, KWESI MENSAH-DUBOIS, TOBY, FERRANTE
* 1 A ¶ Blue-white walls.
* 2 A A tunnel of ice mouthing into a blizzard.
3 A Five climbers huddle in the entrance, ropes tangled, one stove sputtering.
4 A ¶ HANNELORE BRÜCKNER-ODUYA (40s, expedition leader, frost in her eyebrows).
5 A GIDEON PEARCE-NAKAGAWA (30s, medic).
6 A INGRID SANDQVIST (20s, photographer, camera under her jacket).
7 A KWESI MENSAH-DUBOIS (30s, guide, bad knee).
8 A TOBIAS "TOBY" FERRANTE (50s, client, wealthy, too many layers).
* 9 A ¶ A shriek of wind.
* 10 A The stove gutters.
11 D HANNELORE: Rope up. Now.
12 D TOBY: We just sat down.
13 D HANNELORE: We just stopped. It's not the same.
14 D GIDEON: Kwesi, how's the knee?
15 D KWESI: It's fine.
16 D GIDEON: It's not fine. I can see you limping.
17 D KWESI: It's frozen, which is better than fine.
18 A ¶ Ingrid takes a picture.
19 A Toby swats at the lens.
20 A She jerks the camera away, he grabs for it, the cord snaps around his wrist, and both topple sideways into Gideon, who lands on the stove.
* 21 A It goes out.
22 D GIDEON [CONT'D] (rolling away): Oh, that's lovely.
23 D HANNELORE: Everybody up. Up!
* 24 A ¶ Wind.
* 25 A A deep groan from the ice above.
* 26 A Powdered snow sifts down.
27 A They freeze, all five, heads tilted back.
28 D KWESI (low): That's not wind.
29 D HANNELORE: No.
* 30 A ¶ A crack, like a rifle shot.
31 A Hannelore bellows.
32 D HANNELORE [CONT'D]: Out! Everyone out!
33 A ¶ They scatter in five directions, ropes whipping behind.
34 A Toby runs deeper into the cave.
35 A Ingrid sprints for the blizzard.
36 A Gideon drags Kwesi by the collar.
37 A Hannelore stands her ground a second longer than she should, then dives.
* 38 A ¶ The ice roof comes down in a roar.
* 39 A White.
* 40 A Silence.

### SCENE s01992_1 | EXT. GLACIER SLOPE - CONTINUOUS
Detected names (may be incomplete or contain aliases): HANNELORE, HESTER VAN DER BERG-ACHEBE, INGRID
1 A ¶ Four figures crawl out of the powder: Hannelore, Gideon, Kwesi, Ingrid.
2 A They count each other.
3 A Count again.
4 D HANNELORE: Where's Toby?
* 5 A ¶ No answer.
* 6 A The mouth of the cave is a wall of ice.
7 A ¶ A figure steps out from behind a boulder, covered in snow, camera in hand, blinking.
8 A It's HESTER VAN DER BERG-ACHEBE (30s, rescue ranger, orange parka, ice axe on her belt).
9 A She's been tracking them.
10 D HESTER: Whose camera is this?
11 D INGRID: Mine.
12 D HESTER: It was lying in the snow. Ten meters from the cave.
13 D INGRID: I dropped it.
14 D HESTER: Then where's the man who was holding the strap?
15 A ¶ They all look at the wall of ice.
16 A Hester unclips the axe, steps forward, and begins to chip.
17 D HANNELORE: That's three meters of ice.
18 D HESTER: Then we'd better be quick.

### SCENE s01993 | INT. FAMILY COURT, HALLWAY BENCH - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY RENATA OKAFOR-LINDQVIST, ATTORNEY JULIAN BASHIR-MORRISSEY, BAILIFF CORNELIUS WEI
* 1 A ¶ A scuffed corridor of benches and pay phones.
* 2 A Fluorescent hum.
3 A ¶ ATTORNEY RENATA OKAFOR-LINDQVIST (40s, sharp) and ATTORNEY JULIAN BASHIR-MORRISSEY (40s, sharper) stand opposite each other, briefcases at their feet.
* 4 A Between them on the bench, a thick settlement envelope.
5 D RENATA: Fifty-fifty.
6 D JULIAN: Seventy-thirty.
7 D RENATA (together): He gets the house and the dog.
8 D JULIAN (together): She gets the house and the dog.
9 A ¶ They stop.
10 A Look at each other.
11 A Look at the envelope.
12 D RENATA: Neither of them has asked about the dog.
13 D JULIAN: No.
14 A ¶ Neither of them touches the envelope.
* 15 A Down the hallway, double doors swing open.
16 A ¶ A bailiff steps out: BAILIFF CORNELIUS WEI (50s, uniform, clipboard).
17 D CORNELIUS: Counsel. The judge will see you in chambers.
18 D RENATA: Now?
19 D CORNELIUS: Now.
20 A ¶ Julian picks up the envelope.
21 A Renata picks up her briefcase.
22 A The bailiff holds the door.
23 A They walk through it together.
24 D JULIAN (low): I want the dog.
25 D RENATA: So do I.

### SCENE s01994 | INT. ABANDONED SUBWAY STATION, PLATFORM - NIGHT
Detected names (may be incomplete or contain aliases): ARVID SOLHEIM-MBEKI, IRENE DUCASSE-ONYANGO, LORCAN FITZGERALD-PARK, TAMSIN VEL, ZQUEZ-ROY
* 1 A ¶ A ghost station, tiles cracked, an old clock stopped at 4:17.
* 2 A A single working fluorescent flickers over a table set with four chairs and a briefcase.
* 3 A Dust motes in the light.
* 4 A The tunnel mouths gape on either side.
5 A ¶ ARVID SOLHEIM-MBEKI (50s, gray overcoat, patient) sits with his hands folded on the briefcase.
6 A Opposite him sits IRENE DUCASSE-ONYANGO (40s, tailored coat, burner phone face-down by her elbow).
7 A At the table's end sits LORCAN FITZGERALD-PARK (30s, hoodie, jaw tight).
8 A And standing in a tunnel mouth, half in shadow, arms folded, is TAMSIN VELÁZQUEZ-ROY (30s, leather jacket, a stillness that makes the others look jumpy).
9 D ARVID: Thank you for coming.
10 D IRENE: You gave us little choice.
11 D ARVID: I gave you a table. A chair. A briefcase.
12 D IRENE: A briefcase we haven't opened.
13 D ARVID: Quite.
14 D LORCAN: Let's just open it.
15 D ARVID: Not yet.
16 D LORCAN: Why not yet?
17 D ARVID: Because once it's open, we are four people who have seen what is inside it. And we cannot be less than that again.
18 A ¶ Irene turns her phone face-up.
19 A Checks the screen.
20 A Turns it face-down.
21 D IRENE: Where is Tamsin sitting?
22 D ARVID: She prefers standing.
23 D IRENE: She's making me nervous.
24 D TAMSIN (from the tunnel): Good.
25 D LORCAN: Can we please just--
26 D ARVID: Lorcan. Do you remember the night of the fourteenth?
27 D LORCAN: No.
28 D ARVID: Think.
29 D LORCAN: I was at home.
30 D ARVID: Alone?
31 D LORCAN: Yes.
32 D ARVID: Irene, do you remember it?
33 D IRENE: Vaguely.
34 D ARVID: Where were you?
35 D IRENE: At the gallery.
36 D ARVID: Until what hour?
37 D IRENE: Late.
38 D ARVID: How late?
39 D IRENE: I don't see why this matters.
40 D ARVID: It matters because on the night of the fourteenth, a man named Dominic Ashworth was found at the bottom of a staircase. And none of us has ever said a word about it.
* 41 A ¶ Silence.
* 42 A The fluorescent buzzes.
* 43 A The stopped clock watches.
44 D LORCAN: I didn't touch him.
45 D ARVID: No one said you did.
46 D LORCAN: I wasn't even there.
47 D ARVID: No one said you were.
48 D IRENE (too evenly): Arvid, what is in the briefcase?
49 D ARVID: A reason to be honest.
50 A ¶ Tamsin steps from the tunnel into the light.
51 A She walks to the table and puts a hand flat on the briefcase lid, next to Arvid's.
52 D TAMSIN: It's his. Dominic's.
53 D LORCAN: His what?
54 D TAMSIN: His record. Every payment. Every name.
55 D IRENE: Who told you that?
56 D TAMSIN: He did. Before.
57 A ¶ Irene's hand goes still on the phone.
58 A Lorcan leans forward.
59 D LORCAN: That's why you called us.
60 D ARVID: That's why I called you.
61 D IRENE: To threaten us.
62 D ARVID: To give you a choice. Open it, burn it, or walk away with it unopened and live as people who might someday regret that.
63 D LORCAN: That's three options.
64 D ARVID: It's more than he got.
* 65 A ¶ Nobody speaks.
66 A Irene reaches out, slowly, and rests her fingertips on the lock.
67 A Lorcan stands, chair scraping, and takes two steps back toward the stairs.
68 D TAMSIN (quietly): Lorcan.
69 A ¶ He stops.
70 D TAMSIN [CONT'D]: Sit down.
71 A ¶ He sits.
72 A Irene presses the latch.
* 73 A It clicks.
* 74 A ¶ The lid lifts one inch.
75 A A light from inside spills across her face.
76 D ARVID (softly): There you are.

### SCENE s01995 | INT. GLASSBLOWER'S FURNACE HALL, MURANO - NIGHT
Detected names (may be incomplete or contain aliases): MAESTRO ZUANNE BAROVIER-ADEYEMI, SERENELLA BAROVIER, ALVISE CONTARINI-DIAZ
* 1 A ¶ Venice, 1740.
* 2 A A low arched hall lit by the red mouth of a great furnace.
* 3 A Racks of blowpipes.
* 4 A Shelves of unfinished goblets glinting like frozen water.
* 5 A The air shimmers with heat.
6 A ¶ MAESTRO ZUANNE BAROVIER-ADEYEMI (50s, leather apron, burned forearms) lifts a glowing gather of glass from the furnace on the end of a pipe.
7 A Across the hall, his daughter SERENELLA BAROVIER (20, hair bound in a kerchief, steady hands) stands over a marver with a pair of jacks.
8 A Between them, trembling in the heat, stands a young NOBLEMAN: ALVISE CONTARINI-DIAZ (25, velvet coat, silk stockings, wig askew), who has no business here at this hour.
9 A ¶ Zuanne turns the pipe.
10 A Serenella shapes the neck of a half-formed vase.
11 A Alvise steps closer; she shifts her stance between him and her father without looking up.
12 D ZUANNE: You are in my light, Signor.
13 D ALVISE: I beg your pardon, Maestro.
14 D ZUANNE: Move.
15 D ALVISE: I wish to speak to your daughter.
16 D ZUANNE: She is working.
17 D ALVISE: I will wait.
18 A ¶ Serenella lowers her jacks.
19 A Zuanne lowers the pipe.
20 A They look at each other across the hall, and then, as one, they look at Alvise.
21 D SERENELLA (together): Signor, it is not wise.
22 D ZUANNE (together): Signor, it is not wise.
23 A ¶ Alvise swallows.
24 A Then, with great ceremony, he goes down on one knee in the glassworks sawdust.
* 25 A The furnace roars.
26 D ALVISE: Maestro. I ask for your daughter's hand.
27 A ¶ Zuanne's gather falls from the pipe and shatters on the stone in a spray of molten glass.
28 A Serenella drops the jacks.
29 A Alvise throws an arm over his face.
30 A They all scramble back as the glass pools and cools and goes opaque.
* 31 A ¶ Silence.
* 32 A A long one.
33 D ZUANNE (low): You proposed in a glassworks.
34 D ALVISE: It seemed the honest place.
35 D SERENELLA: You could have asked in the church.
36 D ALVISE: I asked in the church. Your father's apprentice said you were here.
37 D SERENELLA: I am always here.
38 D ALVISE: I know. It is why I love you.
39 A ¶ Serenella looks at her father.
40 A Zuanne looks at the floor, at the dark ruin of his gather.
41 A His mouth works.
42 A Then he picks up a new pipe and walks to the furnace and thrusts it in.
43 D ZUANNE: Hold the door.
44 D ALVISE: Maestro?
45 D ZUANNE: If you wish to marry my daughter, you will learn to hold the door.
46 A ¶ Alvise scrambles up.
47 A Serenella almost smiles.
48 A He takes the iron handle of the furnace door, and the heat strikes his face, and he does not let go.

### SCENE s01996 | INT. MAGISTRATE COURTROOM, MARITIME DISTRICT - DAY
Detected names (may be incomplete or contain aliases): JUDGE PERPETUA ADEBAYO-MARLOWE, PROSECUTOR LOUISA VANTONGEREN-HAYES, DEFENDER IMOGEN ASANTE-BRIGGS, CAPTAIN RUTH OKONJO-STRAND, CLERK, DAVID MBEKI-LOWELL, BAILIFF, ARCHIBALD NSEREKO-WELLS, INTERPRETER
* 1 A ¶ A paneled room that smells of old varnish and salt.
* 2 A Brass lamps.
* 3 A A wall of framed ship's charts.
* 4 A Rain taps the high windows.
* 5 A A single ceiling fan turns slowly.
6 A ¶ JUDGE PERPETUA ADEBAYO-MARLOWE (60s, silver cropped hair, reading glasses pushed up on her head) sits on the bench, chin on her fist.
7 A At the prosecution table stands PROSECUTOR LOUISA VANTONGEREN-HAYES (40s, tailored charcoal suit, clipped consonants).
8 A At the defense table sits her opposite number, DEFENDER IMOGEN ASANTE-BRIGGS (30s, braids pinned up, scuffed court shoes), beside her client: CAPTAIN RUTH OKONJO-STRAND (50s, weathered, salt-white hair, hands folded).
9 A In the gallery's first row, a young CLERK, DAVID MBEKI-LOWELL (20s, bow tie, notebook), sits with his pen frozen.
10 A By the door, an old BAILIFF, ARCHIBALD NSEREKO-WELLS (60s, belt too tight), leans on his stick.
* 11 A ¶ The fan ticks.
* 12 A A phone, left on the bench by the judge, buzzes.
13 A She ignores it.
* 14 A It buzzes again.
15 A She sighs, lifts it, and holds it to her ear without turning it on.
16 D JUDGE PERPETUA (into phone): This is Perpetua.
17 D INTERPRETER [V.O.] (over speaker, crackling): Your Honor, the tribunal in Rotterdam has the transcript ready.
18 D JUDGE PERPETUA (into phone): Thank you. Hold it. We will resume in a moment.
19 A ¶ She lowers the phone and sets it on the bench.
20 A Louisa shuffles her papers; Imogen leans to Ruth and murmurs something.
21 A Ruth does not respond; David scribbles; Archibald shifts his stick from one hand to the other.
* 22 A A gull shrieks past the window.
23 A Louisa straightens her jacket, takes a step forward from the table, and clasps her hands behind her.
24 A Imogen stands, one palm on Ruth's shoulder.
25 A Perpetua nods at Louisa.
26 D JUDGE PERPETUA [CONT'D]: Ms. Vantongeren-Hayes. Proceed.
27 D LOUISA: Your Honor, the Crown submits that the Captain abandoned the vessel before the last of the crew was recovered.
28 D IMOGEN: Objection. Abandoned is a loaded term.
29 D JUDGE PERPETUA: Sustained. Rephrase.
30 D LOUISA: The Captain left the vessel.
31 D IMOGEN: She was ordered off.
32 D LOUISA: By whom?
33 D IMOGEN: By the Coast Guard.
34 D LOUISA: Who is not here to say so.
35 D IMOGEN: Because the Crown didn't call them.
36 A ¶ Louisa's lips whiten.
37 A Perpetua leans forward.
38 D JUDGE PERPETUA: Counsel, I'll hear argument, not squabbling.
39 D LOUISA (clipped): Of course, Your Honor.
40 D IMOGEN (clipped): Of course.
41 A ¶ The two women, lawyer and lawyer, turn to the bench in perfect unison.
42 A Ruth lets out the smallest breath.
43 A Perpetua catches it, and holds her gaze.
44 D JUDGE PERPETUA: Captain Okonjo-Strand. Do you wish to say anything?
45 D RUTH (rising): Yes, Your Honor.
46 D IMOGEN (whispering): Ruth, sit down.
47 D RUTH: I can't.
48 A ¶ She stands very straight.
* 49 A The fan ticks.
* 50 A The rain taps.
51 A In the back of the gallery, Archibald lowers his stick to the floor.
52 A David puts down his pen.
53 D RUTH [CONT'D] (quietly): There was a boy on the foredeck. Seventeen. I told them he was aboard. They told me the water was rising and the tender had room for twelve. I counted twelve. I did not count him.
54 A ¶ Perpetua closes her eyes.
55 A Louisa does not move.
56 A Imogen puts a hand over her mouth.
57 D RUTH [CONT'D]: That is what I've come to say.
* 58 A ¶ Nobody speaks.
* 59 A The fan makes four full turns.
60 A Then Perpetua opens her eyes.
61 D JUDGE PERPETUA (softly): Mr. Mbeki-Lowell, please read that into the record.
62 D DAVID (rising, voice cracking): Yes, Your Honor.
* 63 A ¶ The phone on the bench buzzes again.
64 A Perpetua picks it up.
65 D JUDGE PERPETUA (into phone): Rotterdam, we are ready.
66 D INTERPRETER [V.O.] (over speaker): Your Honor, one correction to the transcript. The Coast Guard has filed a statement this morning.
67 D LOUISA: What statement?
68 D INTERPRETER [V.O.]: It confirms the Captain's account. The boy was reported to them at 0412.
69 A ¶ Louisa goes still.
70 A She looks at Ruth.
* 71 A At the bench.
72 A At her own folder, which she closes carefully, as one closes a door in a house after a death.
73 D LOUISA: Your Honor. The Crown withdraws.
* 74 A ¶ The fan turns.
* 75 A Rain.
* 76 A A gull.
77 A Ruth sits down, unsteadily, and Imogen's arm goes around her.

### SCENE s01997 | INT. MOBILE FIELD HOSPITAL TENT, FLOOD ZONE - NIGHT
Detected names (may be incomplete or contain aliases): AMARACHI NWOSU-BELLINGHAM, NURSE FELIPE ARRIAGA-TOMLINSON, TESS KOWALEWSKI-AMADI, DISPATCH
* 1 A ¶ Canvas walls snapping in wind.
* 2 A Generators outside.
* 3 A Cots in rows.
* 4 A Bags of IV fluid hang from tent poles.
* 5 A Mud on every surface.
6 A ¶ DR. AMARACHI NWOSU-BELLINGHAM (40s, surgeon, scrubs under a poncho) kneels over a cot where a boy lies unconscious.
7 A NURSE FELIPE ARRIAGA-TOMLINSON (30s, glasses fogged, stethoscope slipping) squeezes a bag-valve mask.
8 A A volunteer, TESS KOWALEWSKI-AMADI (20s, Red Cross vest, hands shaking), holds a flashlight.
* 9 A A radio on a crate squawks.
10 D DISPATCH [V.O.] (over radio, static): Field Two, Dispatch. Evacuation convoy is delayed. Repeat, convoy delayed. Estimate ninety minutes.
11 D AMARACHI: Tess, hold the light steady.
12 D TESS: I'm trying.
13 D AMARACHI: Try harder.
14 A ¶ Felipe squeezes the bag.
* 15 A The boy's chest rises.
* 16 A Falls.
17 A Amarachi puts two fingers to the boy's throat, and her face closes.
18 A She looks at Felipe.
19 A He sees it.
20 A His squeezing slows, then resumes, faster.
21 D FELIPE: Doctor, we have a rhythm.
22 D AMARACHI: We don't.
23 D FELIPE: We have a pulse.
24 D AMARACHI: We have a monitor reading its own noise.
25 A ¶ Tess lowers the flashlight; Amarachi grabs her wrist and raises it again.
26 A Felipe bends over the boy and begins compressions, counting under his breath.
* 27 A The radio squawks.
28 A Tess jumps.
29 A The light swings across the tent roof, over the rows of cots, over a woman in the corner who has turned to watch.
30 D DISPATCH [V.O.] (over radio): Field Two, confirm receipt.
31 D TESS (whispering): Should I answer?
32 D AMARACHI (without looking): Answer.
33 A ¶ Tess scrambles to the radio, still holding the flashlight, and keys the mic with her elbow.
34 D TESS (into radio): Dispatch, Field Two. Copy. Ninety minutes.
35 D DISPATCH [V.O.] (over radio): Field Two, how many critical?
36 A ¶ Tess looks at the boy.
37 A At Felipe, pumping the small chest.
38 A At Amarachi, her fingers still on the throat.
39 D TESS (into radio): One. Maybe zero.
40 A ¶ Amarachi sits back on her heels.
41 A Felipe stops compressions.
42 A He wipes his glasses on his sleeve, puts them back, and looks at her.
43 D FELIPE: Time?
44 D AMARACHI: Eleven forty-one.
45 D FELIPE: I'll write it down.
46 D AMARACHI: I'll write it.
47 A ¶ She stands, steadies herself on a pole, and crosses to the radio.
48 A Takes the mic from Tess, who gives it up like a hot pan.
49 D AMARACHI [CONT'D] (into radio): Dispatch, Field Two. Patient expired. Eleven forty-one. Send the convoy anyway. We have eleven more.
50 D DISPATCH [V.O.] (over radio): Copy, Field Two. We're sending it.
51 A ¶ She sets the mic down very gently on the crate.
52 A Tess hands her a clipboard.
53 A Her hand is steady now.

### SCENE s01998 | INT. SENTENCING HEARING, SMALL COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE CORNELIUS ABERNATHY-OKOYE, SERAPHINA DUBOIS-TANAKA, ATTORNEY, MALCOLM ASHFORD-IGWE, PROSECUTOR, ODALYS FERRARI-NKEMELU, ABERNATHY
* 1 A ¶ A modest county courtroom, oak benches worn smooth by decades of hands.
* 2 A A flag in the corner, faded by afternoon light.
* 3 A A stenographer's keys click and then stop.
4 A ¶ JUDGE CORNELIUS ABERNATHY-OKOYE (70s, a face like folded paper, half-moon glasses) looks down from the bench.
5 A Before him, standing at the defense table, a woman in a plain gray suit: SERAPHINA DUBOIS-TANAKA (40s, bookkeeper, wedding ring she keeps turning).
6 A Beside her, her ATTORNEY, MALCOLM ASHFORD-IGWE (50s, silvered temples), holds a single sheet of paper.
7 A ¶ Across the aisle, the PROSECUTOR, ODALYS FERRARI-NKEMELU (30s, hair in a low knot), sits very straight.
8 D ABERNATHY: Mr. Ashford-Igwe. You wished to be heard.
9 D MALCOLM: I did, Your Honor.
10 D ABERNATHY: Go ahead.
11 D MALCOLM (together): My client has no prior record.
12 D ODALYS (together): The State recommends the maximum.
13 A ¶ Each hears the other.
14 A Malcolm stops.
15 A Odalys does not.
16 D ODALYS [CONT'D]: She embezzled four hundred thousand dollars from a church fund.
17 D MALCOLM: She repaid three hundred and ten.
18 D ODALYS: After she was caught.
19 D MALCOLM: Before she was charged.
20 D ABERNATHY: Counsel, one at a time.
21 A ¶ He lifts his glasses and rubs the bridge of his nose.
22 A Seraphina's thumb has gone still on her ring.
23 D ABERNATHY [CONT'D]: Ms. Dubois-Tanaka. Is there something you wish to say?
24 D SERAPHINA: No, sir.
25 D ABERNATHY: You're allowed.
26 D SERAPHINA: I know.
27 D ABERNATHY: Then I'll ask again.
28 A ¶ She glances at Malcolm, who gives the smallest nod.
29 A She lets go of her ring and rests both hands flat on the table.
30 D SERAPHINA: My mother was ill. The church was kind, and I was careful, and then I wasn't.
31 D ABERNATHY: Go on.
32 D SERAPHINA: That's all of it, Your Honor.
* 33 A ¶ Silence.
* 34 A The flag stirs in a draft from the air vent.
35 A Odalys looks at her own folded hands.
36 D ABERNATHY: Ms. Ferrari-Nkemelu. Does the State wish to respond?
37 D ODALYS (a long beat): No, Your Honor.
38 D ABERNATHY: No?
39 D ODALYS: The State withdraws its recommendation.
40 A ¶ Malcolm looks at her sharply.
41 A She doesn't look back.
42 A Seraphina's shoulders drop an inch.
43 D ABERNATHY: I'll take the matter under advisement.
44 A ¶ He closes the folder.
45 A The gavel rises, hovers, comes down gently.
46 D ABERNATHY [CONT'D]: We're adjourned.
47 A ¶ He stands.
* 48 A The courtroom stirs.
49 A Seraphina stays where she is, gazing at the empty bench.

### SCENE s01999 | INT. RECORDING BOOTH, DEFUNCT RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): MIRIAM OKONKWO-DELACROIX
* 1 A ¶ Egg-crate foam on every wall.
* 2 A A dusty microphone on a boom.
* 3 A A reel-to-reel recorder with one reel running.
* 4 A A lamp with a green glass shade.
5 A ¶ MIRIAM OKONKWO-DELACROIX (60s, hair gone white, wool coat still buttoned) sits at the console with a thermos and a cassette recorder.
* 6 A A red light glows on the cassette.
7 D MIRIAM (into microphone): Testing. One, two. This is Miriam, speaking into the old microphone, Tuesday the ninth.
8 D MIRIAM [V.O.] (from the reel, younger, bright): Good evening and welcome to the Night Owl Hour. I'm Miriam Okonkwo, keeping you company until dawn.
9 D MIRIAM: That voice has no idea.
10 D MIRIAM [V.O.] (from the reel): Tonight's request comes from a gentleman in Marlow Street, who writes: play something for my wife, we've been married thirty years.
11 D MIRIAM: Thirty years. I remember that card.
12 D MIRIAM [V.O.] (from the reel): And so, for Walter and Eleanor. Here's the Platters.
13 D MIRIAM: Walter died in the spring. Eleanor wrote to tell me.
14 D MIRIAM [V.O.] (from the reel): This one is for the ones who stay up late.
15 D MIRIAM: I'm staying up. Don't worry.
16 D MIRIAM [V.O.] (from the reel): Which is most of us, if we're honest.
17 D MIRIAM: Most of us. That's right.
18 D MIRIAM [V.O.] (from the reel): Because the night is long, and the dial is lonely, and I'm here.
19 D MIRIAM: I am here. I'm here, dear.
20 D MIRIAM [V.O.] (from the reel, a fade): Stay tuned. I'll be back after this song.
21 D MIRIAM (into microphone): Station's closing Friday. Last transmission is at midnight. I thought I'd record a goodbye. For whoever's listening.
22 D MIRIAM [V.O.] (from the reel): Good night, owls.
23 D MIRIAM (into microphone): Good night, owls.

### SCENE s02000_0 | INT. LAKE HOUSE, UPSTAIRS LANDING - NIGHT
Detected names (may be incomplete or contain aliases): TALL FIGURE, WREN ACHTERBERG-NNAMDI
* 1 A ¶ A dark pine-paneled hallway.
* 2 A Moonlight through a window at the end.
* 3 A A grandfather clock ticks.
* 4 A Every door but one is closed.
5 A ¶ A TALL FIGURE (silhouette, long coat, face hidden by shadow) stands motionless at the end of the hall.
6 A ¶ WREN ACHTERBERG-NNAMDI (30s, bathrobe, flashlight) stands at the top of the stairs.
7 A She doesn't move.
8 A The figure doesn't move.
* 9 A The clock ticks.
10 D WREN (whispering): Hello?
11 A ¶ The figure tilts its head.
12 D WREN [CONT'D]: Is that you, Dad?
* 13 A ¶ No answer.
14 A The flashlight shakes in her hand.
15 A She raises it.
16 A The beam climbs the long coat, stops at the throat.
17 D WREN [CONT'D] (barely): You're not supposed to be here.
18 A ¶ The figure lifts an arm and points at the closed door beside her.
19 A ¶ Wren's eyes slide to it.
* 20 A Back.
21 A The figure holds the gesture.
22 A ¶ She reaches for the doorknob.
23 A Her hand trembles.
24 A She turns it.

### SCENE s02000_1 | INT. CHILD'S BEDROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): BOY, OLD MAN, WREN
* 1 A ¶ A narrow room with a toy chest and a narrow bed.
2 A A small BOY (6, pajamas, eyes wide) sits upright in the blankets, clutching a stuffed rabbit.
3 D BOY: Mommy, he was in my closet.
4 A ¶ Wren crouches.
5 A The boy buries his face in her robe.
6 A Behind them, in the doorway, the figure appears.
* 7 A Its shadow falls across both.
8 A ¶ The figure steps forward and for the first time the moonlight catches its face.
9 A It's an old man.
10 A Her father.
11 A Wet-eyed, bewildered, in the wrong house.
12 D OLD MAN: Wren?
13 D WREN: Dad.
14 D OLD MAN: I couldn't find the stairs.
15 A ¶ She stands, still holding the boy.
16 A Her flashlight clatters to the floor, rolling in a slow circle.
17 D WREN (softly): It's all right.
18 D OLD MAN: I thought it was the other house.
19 D WREN: I know.
20 A ¶ She extends her free hand.
21 A He takes it.
22 A The boy peeks out from her robe and, with great solemnity, holds out the stuffed rabbit to his grandfather.
* 23 A ¶ The clock chimes midnight.

### SCENE s02001 | INT. LISTENING POST, CHALK TUNNEL UNDER A COASTAL RIDGE - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ELSPETH MORRIGAN-ADEWALE, LIEUTENANT BASTIAN OKOYE-LINDGREN, GUS, PELLETIER-ONUOHA, COMMANDER
* 1 A ¶ A narrow chalk-white tunnel shored with timber.
* 2 A Hurricane lamps hang from nails.
* 3 A At a plank table, a radio set glows green, headphones draped over its dial.
* 4 A The sea is a dull pulse in the rock.
5 A ¶ CAPTAIN ELSPETH MORRIGAN-ADEWALE (40s, wool greatcoat, tin mug between both palms) sits with her back to the wall, eyes on the radio.
6 A Opposite her, a field cot, and on it LIEUTENANT BASTIAN OKOYE-LINDGREN (20s, collar open, a letter half-written on his knee).
7 A A third man, SERGEANT AUGUSTIN "GUS" PELLETIER-ONUOHA (30s, signal corps, headphones on), is bent over the set with a pencil.
* 8 A ¶ For an hour nothing has come over the wire.
9 A The three of them have the look of people who have stopped expecting it to.
10 D ELSPETH: Gus, anything?
11 D GUS: Static, ma'am.
12 D ELSPETH: Same static as before?
13 D GUS: Same. Pretty one.
14 D BASTIAN: Pretty static. I'll tell Mother.
15 D ELSPETH: Lieutenant, the letter.
16 D BASTIAN: Captain?
17 D ELSPETH: Don't write that last page until morning.
18 A ¶ He looks at her.
19 A Folds the page once, and tucks it into his breast pocket with ceremony.
20 D BASTIAN: Yes, ma'am.
* 21 A ¶ The radio gives a click.
* 22 A A long, dry hiss.
23 A Gus freezes, one finger raised.
24 A Elspeth sets down her mug without making a sound.
25 D COMMANDER [V.O.] (through the headphones, loud enough to leak): Hawk Nest, Hawk Nest, this is Tower. Do you read?
26 D GUS (into mic): Tower, Hawk Nest. Loud and clear.
27 D COMMANDER [V.O.]: Hawk Nest, stand by for orders.
28 D GUS (to Elspeth): Orders, ma'am.
29 D ELSPETH: I heard.
30 A ¶ She stands, takes the headphones from Gus, and settles them on her ears.
31 D ELSPETH [CONT'D] (into mic): Tower, Hawk Nest. Captain Morrigan-Adewale speaking.
32 D COMMANDER [V.O.]: Captain, the ridge is to be vacated by oh-four-hundred.
33 D ELSPETH (a beat): Repeat, Tower?
34 D COMMANDER [V.O.]: Vacate by oh-four-hundred. Demolition charges on the tunnel mouth. Acknowledge.
* 35 A ¶ Silence.
36 A Gus looks at Bastian.
37 A Bastian looks at Elspeth.
38 D ELSPETH (into mic): Tower, we have a signal watch of seven hours remaining.
39 D COMMANDER [V.O.]: Captain, the watch is cancelled. The enemy has taken the eastern shore.
40 D BASTIAN (whispering): But it's calm.
41 D GUS (whispering): Too calm.
42 D ELSPETH (into mic): Understood, Tower. Hawk Nest will withdraw.
43 A ¶ She pulls the headphones off.
* 44 A The tunnel is quiet.
* 45 A The sea thumps against the cliff, faint, constant.
46 D ELSPETH [CONT'D] (to the room): Gentlemen. Pack the set. Leave the tin.
47 D GUS: Ma'am, the tin has the codebooks.
48 D ELSPETH: Then burn the codebooks first.
49 D BASTIAN: And the letters?
50 D ELSPETH: Take your letters.
51 A ¶ Bastian hesitates.
52 A Takes his letter from his pocket.
53 A Holds it out to her.
54 D BASTIAN: Captain, would you post it?
55 D ELSPETH: I'll try.
56 D BASTIAN (together): Thank you.
57 D GUS (together): Thank you.
58 A ¶ Both stop.
59 A Gus looks at his pencil.
60 A Bastian looks at his boots.
61 D ELSPETH: Let's go.
62 A ¶ She takes the lamp from its nail, and the three of them step into the dark of the tunnel mouth, where, beyond the ridge, a faint red line is beginning to rise out of the sea.

### SCENE s02002 | INT. PAWNSHOP BACK ROOM, DOWNTOWN - NIGHT
Detected names (may be incomplete or contain aliases): SOLOMON KAPLAN-ADEBAYO, NADIA KAPLAN, ELIJAH OSEI-MARCHETTI, UNCLE RUBEN
* 1 A ¶ A cramped room of glass cases and hanging guitars.
* 2 A A single desk, a green banker's lamp, a safe in the corner.
* 3 A Rain beads the barred window.
4 A ¶ SOLOMON KAPLAN-ADEBAYO (60s, shirtsleeves, suspenders, spectacles on a chain) sits behind the desk counting bills.
5 A Across from him, perched on a stool, sits his daughter NADIA KAPLAN (30s, trench coat, wet hair), who has come in from the rain and not yet taken her coat off.
6 A ¶ By the door, hat in hands, shifts a young man: ELIJAH OSEI-MARCHETTI (20s, work jacket, wedding ring still new).
7 A At the safe, crouched with his back to them all, a fourth figure: UNCLE RUBEN (70s, cardigan, thick glasses), who has been sorting the same papers for ten minutes.
8 D SOLOMON: Nadia, you're dripping on the floor.
9 D NADIA: I came to talk, Papa.
10 D SOLOMON: Talk. I'm listening.
11 D NADIA: Not with him in the room.
12 A ¶ Elijah shifts.
13 A Solomon rubs his eyes under the spectacles, sets down the bills, and lifts his chin at the door; Elijah sets his hat on a guitar case, then thinks better and picks it up again; Ruben turns from the safe, slow as a tortoise, and glances from face to face, then goes back to the papers.
14 A Nadia stands, takes a step toward her father, then retreats a step, and finally unbuttons the coat as if it's a decision she's been postponing for years.
15 D NADIA [CONT'D]: The shop is losing money.
16 D SOLOMON: The shop has always lost money.
17 D NADIA: Not like this.
18 D SOLOMON: Who told you?
19 D NADIA: The books.
20 D SOLOMON: You looked at my books?
21 D NADIA: Papa, I've been doing your books for five years.
22 D SOLOMON: Then you know the shop is losing money.
23 D NADIA: And you've known it's been losing more.
24 A ¶ Solomon says nothing.
25 A Ruben drops a paper.
26 D ELIJAH: Mr. Kaplan, if I may--
27 D SOLOMON: You may not.
28 D ELIJAH: I'd like to help.
29 D SOLOMON: You'd like to marry my daughter and inherit a debt.
30 D ELIJAH: I already married her.
31 D SOLOMON: Congratulations. Now pick up that hat.
32 A ¶ Elijah picks up the hat from the guitar case.
33 A Nadia sets her coat on the desk, crosses her arms, and speaks very low.
34 D NADIA: The loan is due Friday.
35 D SOLOMON: What loan?
36 D NADIA: The one you didn't tell me about.
37 A ¶ Solomon takes off his spectacles.
38 A Folds them.
39 A Sets them on the bills.
40 D RUBEN (from the safe, gently): Shlomo. Tell her.
41 D SOLOMON: Ruben.
42 D RUBEN: Tell her about the guitar.
43 D SOLOMON: What guitar?
44 D RUBEN: The Gibson. In the back. The one you've been guarding.
45 A ¶ Nadia's head swivels to the cases.
* 46 A A sunburst Gibson, hanging half-hidden behind a banjo.
47 D NADIA: What about it?
48 D SOLOMON: It's not mine.
49 D NADIA: Whose is it?
50 D SOLOMON: It belongs to a man who didn't come back for it.
51 D ELIJAH: How long?
52 D SOLOMON: Thirty-one years.
* 53 A ¶ Silence.
* 54 A Rain on the window.
55 A Ruben closes the safe with a soft click.
56 D NADIA (low): Papa. What's it worth?
57 D SOLOMON (quietly): More than the shop.

### SCENE s02003 | EXT. RAILWAY BRIDGE OVER A DRY RIVER, THE BORDER - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT KASIMIR OYELARAN-TREMBLAY, VARGAS-DUBOIS, PRIVATE JABARI NKRUMAH-LEIGH, INÉS
* 1 A ¶ A steel truss bridge, half-collapsed, spanning a river that has been dry since the drought.
* 2 A Sand and cracked clay below.
* 3 A Ahead, a checkpoint of sandbags, flags drooping, a rusted jeep.
4 A ¶ Three soldiers lie prone on the east approach, covered by a torn tarp.
5 A SERGEANT KASIMIR OYELARAN-TREMBLAY (40s, desert scarf, sunburned neck) peers through binoculars.
6 A Next to him, CORPORAL INÉS VARGAS-DUBOIS (20s, a long rifle, a patient eye) sights down her scope.
7 A Behind them, PRIVATE JABARI NKRUMAH-LEIGH (19, radioman, pack heavy with coiled wire) sweats.
8 D KASIMIR: Four at the checkpoint. Two on the jeep.
9 D INÉS: Three on the jeep.
10 D KASIMIR: Show me.
11 D INÉS: Left side. Under the canopy.
12 D KASIMIR (adjusting): Three.
13 D JABARI: Is that good or bad, Sergeant?
14 D KASIMIR: It's three.
* 15 A ¶ The sun rises over the far bank, turning the dry river the color of a bruise.
* 16 A A flag stirs.
* 17 A Nothing else does.
18 D KASIMIR [CONT'D]: Jabari, get the wire out.
19 D JABARI: Sergeant, the wire's for the radio.
20 D KASIMIR: It's for the bridge.
21 D JABARI: I'm sorry?
22 D KASIMIR: We're not talking to anyone, son. We're taking out the bridge.
23 D INÉS (softly): That's not what the briefing said.
24 D KASIMIR: The briefing's three days old.
25 D INÉS: It said observe.
26 D KASIMIR: Observe, report. And if the enemy advances in force, deny the crossing.
27 D INÉS: There's no force. There's seven men and a jeep.
28 D KASIMIR: Seven now.
29 A ¶ He lowers the binoculars.
* 30 A A pale line of dust is rising from the horizon beyond the checkpoint, thin and straight.
31 D JABARI: What's that?
32 D KASIMIR: Armor.
33 D INÉS: How many?
34 D KASIMIR: Enough.
35 A ¶ Jabari begins to unspool the wire, hands shaking.
36 A Inés shifts her rifle and watches the dust.
37 A Kasimir drags a pack beside him and opens it.
* 38 A Inside, two bricks of plastic explosive, a blasting cap, a roll of tape.
39 D JABARI: Is the bridge empty?
40 D KASIMIR: It is.
41 D JABARI: Are you sure?
42 D KASIMIR: Check the girders.
43 A ¶ Jabari glances at Inés.
44 A She nods.
45 A He slithers out from under the tarp and crawls along the rail toward the first abutment, wire trailing behind him in the sand.
46 A Kasimir watches him go.
47 A Inés keeps her eye on the checkpoint.
48 D INÉS (whispering): Sergeant, there are people on the jeep.
49 D KASIMIR: Soldiers.
50 D INÉS: There's a child.
51 D KASIMIR: Where?
52 D INÉS: On the back seat. Under the tarp.
53 A ¶ Kasimir takes the binoculars back up.
54 A Adjusts.
55 A His jaw tightens.
56 D KASIMIR (muttering): Damn it.
57 D INÉS: Sergeant?
58 D KASIMIR: Hold your fire, Corporal.
59 D INÉS: I wasn't going to fire.
60 D KASIMIR: Then hold the child.
61 D INÉS: What?
62 D KASIMIR: Hold her in your sights. If the armor reaches the checkpoint and she's still there, we don't blow the bridge. We wait.
63 D INÉS: How long?
64 D KASIMIR: Until she leaves.
65 A ¶ Out on the bridge, Jabari has reached the abutment.
66 A He glances back, and Kasimir raises a flat hand: stop.
67 A Jabari freezes.
* 68 A The wire lies slack across the sand between them.
* 69 A ¶ The dust cloud grows.
* 70 A A low rumble now.
* 71 A The flags begin to tremble.
72 D INÉS (very quietly): They're not going to wait for her.
73 D KASIMIR: No.
74 A ¶ He puts the binoculars down.
75 A Reaches into the pack.
76 A Picks up the blasting cap and turns it over, then sets it back in the foam.
77 D KASIMIR [CONT'D]: Jabari. Come back.
78 A ¶ Jabari scrambles back along the rail, grabbing the wire as he goes.
* 79 A The rumble becomes engines.
* 80 A A line of tanks emerges from the dust, small and steady, rolling toward the bridge.
81 A ¶ Inés lowers her rifle.
82 A Kasimir gathers the pack.
83 A The three of them slide back down the embankment and lie flat under the tarp as the first tank rolls onto the span, and the bridge groans, and holds.

### SCENE s02004 | INT. MILL OWNER'S PARLOR, LANCASHIRE - NIGHT
Detected names (may be incomplete or contain aliases): EZEKIEL HARGREAVES-OLUWASEUN, ABIGAIL HARGREAVES, YOUNG WEAVER, TOM
* 1 A ¶ 1842.
* 2 A A rich, close room with a coal fire.
* 3 A Heavy curtains, a horsehair sofa, a mahogany sideboard.
* 4 A The clatter of the mill beyond the wall never stops.
5 A ¶ MR. EZEKIEL HARGREAVES-OLUWASEUN (50s, black frock coat, gold watch chain) stands at the fire with his back to the room.
6 A His wife, ABIGAIL HARGREAVES (40s, plum silk, a sewing basket in her lap), sits on the sofa working a needle.
7 A Before them, standing very straight with his cap crushed in both hands, is a young man from the mill floor: a YOUNG WEAVER (20s, thin, clogs, flax-colored hair).
8 D HARGREAVES: Your name?
9 D YOUNG WEAVER: Tom, sir.
10 D HARGREAVES: Tom what?
11 D YOUNG WEAVER: Tom Aldous, sir.
12 D HARGREAVES: And you are here to complain.
13 D TOM: I'm here to ask, sir.
14 D HARGREAVES: Ask what?
15 D TOM: That the looms be stopped for an hour at noon.
16 D HARGREAVES: Why?
17 D TOM: So we can eat, sir.
18 A ¶ Abigail's needle pauses.
19 A She doesn't look up.
20 D HARGREAVES: You eat at the bench.
21 D TOM: We can't, sir. The dust.
22 D HARGREAVES: Then you eat in the yard.
23 D TOM: There's no yard, sir. There's the canal.
24 D HARGREAVES: Then you eat on the canal.
25 D TOM (a beat): That's not a joke, sir?
26 D HARGREAVES: Mr. Aldous, I do not joke.
27 D ABIGAIL (quietly): Ezekiel.
28 D HARGREAVES: Abigail, this is not the moment.
29 D ABIGAIL: It is exactly the moment.
30 A ¶ She sets down her needle.
31 A Stands.
* 32 A The firelight catches the gold at her throat.
33 D ABIGAIL [CONT'D]: Mr. Aldous, how many hours do you work?
34 D TOM: Fourteen, ma'am.
35 D ABIGAIL: And how many weavers are there?
36 D TOM: Two hundred and forty, ma'am.
37 D ABIGAIL: And they all want the same thing?
38 D TOM: They do.
39 D HARGREAVES (together): Abigail, sit down.
40 D ABIGAIL (together): Ezekiel, the man is asking for an hour.
41 A ¶ Their voices cross.
42 A Hargreaves breaks first, turns to the fire, and stares into it.
43 D HARGREAVES: An hour a day at two hundred and forty hands is a significant loss.
44 D ABIGAIL: Is it more than you spent on that clock?
45 D HARGREAVES: Abigail.
46 D ABIGAIL: The one in the hall. Eighty guineas.
47 D HARGREAVES: It keeps accurate time.
48 D ABIGAIL: So does the mill whistle.
* 49 A ¶ Silence.
50 A Tom stares at the carpet.
* 51 A The mill clatters through the wall.
* 52 A The fire pops.
53 D HARGREAVES (at last): Mr. Aldous.
54 D TOM: Sir.
55 D HARGREAVES: Return to your loom. Tell the others there will be no stoppage.
56 D TOM: Sir--
57 D HARGREAVES: But tomorrow, at noon, bring out your bread and we shall see what the dust does to it.
58 D TOM (stunned): Sir?
59 D HARGREAVES: Out, Mr. Aldous.
60 A ¶ Tom bows awkwardly and backs out.
* 61 A The door closes behind him.
62 A Abigail lowers herself onto the sofa, picks up the needle, and begins to stitch again with great care.
63 A Hargreaves turns from the fire and looks at her for a long moment.
64 D HARGREAVES [CONT'D]: That clock was a mistake.
65 D ABIGAIL: It was a very good clock.
66 D HARGREAVES: It was.

### SCENE s02005 | EXT. ROCK LEDGE ABOVE A FROZEN RIVER, YUKON - DUSK
Detected names (may be incomplete or contain aliases): OLE BRANDVOLD-ACHEBE, PEARL TSOSIE-HARLOW
* 1 A ¶ A narrow shelf of granite thirty feet over the ice.
* 2 A Spruce stunted by wind.
* 3 A Snow in drifts.
* 4 A A fire of three damp sticks, hardly burning.
5 A ¶ OLE BRANDVOLD-ACHEBE (60s, trapper, a beard crusted white, wolf-fur hood) crouches over the fire with a tin cup.
6 A Next to him, wrapped in a wool blanket, sits PEARL TSOSIE-HARLOW (20s, surveyor, red nose, a compass hung on a cord).
* 7 A Between them, a pot of water that refuses to boil.
8 D PEARL: Is it going to boil?
9 D OLE: Eventually.
10 D PEARL: When?
11 D OLE: When it's ready.
12 A ¶ She tucks her blanket tighter.
13 A Ole prods the fire with a stick.
14 D PEARL (to herself): Three days.
15 D OLE: What's that?
16 D PEARL: Nothing. Counting.
17 D OLE: Counting what?
18 D PEARL: Days since we left the cabin.
19 D OLE: Four.
20 D PEARL: It was three.
21 D OLE: It was four. You lost one in the whiteout.
22 D PEARL: I don't remember a whiteout.
23 D OLE: You wouldn't. You were asleep.
24 A ¶ She looks at him, then at the river below.
* 25 A A pale glow lingers on the western ridge.
* 26 A The wind lifts and drops.
27 D PEARL: Is there food?
28 D OLE: One tin.
29 D PEARL: What's in it?
30 D OLE: Beans.
31 D PEARL: Good.
32 D OLE: Maybe.
33 D PEARL (to the fire): They'll come looking.
34 D OLE: Who?
35 D PEARL: The party. The survey team.
36 D OLE: They don't know where we are.
37 D PEARL: They know the river.
38 D OLE: The river's twelve hundred miles long, girl.
39 D PEARL: They know which bend.
40 D OLE: How?
41 D PEARL: I told them.
42 A ¶ Ole lowers the stick.
43 A Looks at her.
44 D OLE: You told them.
45 D PEARL: In the letter. The one you posted.
46 D OLE: I posted it at the last trading station.
47 D PEARL: Then it's a week ahead of us.
48 D OLE (slowly): So somebody knows.
49 D PEARL: Somebody does.
50 A ¶ He puts a fresh stick in the fire.
* 51 A It catches.
* 52 A The pot begins, at last, to murmur.
53 D OLE (to the camp, quietly): We'll hold here.
54 D PEARL: For how long?
55 D OLE: Till somebody comes.
* 56 A ¶ The first bubble breaks.

### SCENE s02006 | INT. COMMUNITY BOXING GYM, BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): COACH BERNADETTE KOWALSKI-OSEI, DEE, THOMPSON-ABARA
* 1 A ¶ Cinderblock walls.
* 2 A A single ring with sagging ropes.
* 3 A Hand-lettered signs: NO EGOS.
* 4 A NO EXCUSES.
* 5 A A speed bag hangs motionless.
* 6 A The smell of liniment and old wet leather.
7 A ¶ COACH BERNADETTE KOWALSKI-OSEI (60s, a woman who looks like she's been punched by every decade) leans against the ring post, a towel around her neck.
8 A Inside the ring, in a cold-sweat silence, stands DESHAWN "DEE" THOMPSON-ABARA (20s, wiry, wrapped hands, eyes on the floor) with his shoulders hunched.
9 D BERNADETTE: Fourth round. Last one.
10 D DEE: I know.
11 D BERNADETTE: You're ahead on cards.
12 D DEE: I know.
13 D BERNADETTE: You do nothing but stay ahead, you win.
14 D DEE: I know, Coach.
15 D BERNADETTE: Then why do you look like you're about to be sick?
16 A ¶ He doesn't answer.
17 A He lifts his gloves; she grabs the tape from the rope and tightens one wrist, then the other; he flexes his fingers; she taps his chest twice with the flat of her hand; and he exhales, a long shaky breath that fogs the cold air.
18 D BERNADETTE [CONT'D]: Look at me.
19 D DEE: I'm looking.
20 D BERNADETTE: You're looking at my forehead.
21 D DEE: It's a good forehead.
22 D BERNADETTE: Dee.
23 A ¶ He raises his eyes.
24 A She holds them.
25 D BERNADETTE [CONT'D]: When the bell rings, you don't think about the title. You don't think about your father. You think about the jab.
26 D DEE: The jab.
27 D BERNADETTE: Just the jab.
28 D DEE: That's all?
29 D BERNADETTE: Jab, step, jab. Pivot. Jab.
30 D DEE: And if he hits me?
31 D BERNADETTE: He'll hit you.
32 D DEE: And?
33 D BERNADETTE: And you'll get hit. And you'll jab.
* 34 A ¶ A buzzer sounds from somewhere across the hall.
35 A Dee jerks.
36 A Bernadette doesn't blink.
37 A Her hand slides under his chin, tilts his face up, and settles him with a pat like a father's.
38 D BERNADETTE [CONT'D]: Go.
39 A ¶ He ducks through the ropes.
40 A She swings the stool into the corner, wedges the water bottle between her knees, and the bell clangs.
41 A ¶ Dee steps into the center.
42 A Gloves up.
43 A And for the first time all night, he smiles.

### SCENE s02007 | INT. OFFICE KITCHENETTE, MID-SIZED LOGISTICS FIRM - DAY
Detected names (may be incomplete or contain aliases): MARGUERITE OBIORA-HASKELL, ISAAC BRANDT-MWANGI, LEOPOLD ZIMMERMAN-OKAFOR
* 1 A ¶ A fluorescent-lit kitchenette.
* 2 A A laminated sign over the microwave: PLEASE COVER YOUR FOOD.
* 3 A A second sign below it: THIS MEANS YOU.
* 4 A A coffee machine beeps its low-water warning.
5 A ¶ MARGUERITE OBIORA-HASKELL (40s, cardigan, sensible shoes) stares at the coffee machine.
6 A At the table, ISAAC BRANDT-MWANGI (30s, lanyard, microwave burrito) eats without looking at anything.
* 7 A ¶ The machine beeps again.
8 D MARGUERITE (to the room): Does anyone know who's supposed to refill this?
9 D ISAAC: Not me.
10 D MARGUERITE: I didn't say you.
11 D ISAAC: You said anyone.
12 D MARGUERITE: I said anyone.
13 D ISAAC: I'm part of anyone.
14 D MARGUERITE (muttering): Everyone's anyone.
15 A ¶ She lifts the carafe, peers into it, sets it down.
16 A Isaac turns a page of his newspaper.
* 17 A The machine beeps.
* 18 A ¶ The door swings open.
19 A A man steps in, hands in his pockets: LEOPOLD ZIMMERMAN-OKAFOR (50s, suit, new badge on a new lanyard), the kind of calm that comes from a very large check.
20 D LEOPOLD: Good morning.
21 D MARGUERITE: Good morning.
22 D ISAAC: Hey.
23 D LEOPOLD: I'm Leopold. I'm the new consultant.
24 D MARGUERITE: For what?
25 D LEOPOLD: Efficiency.
26 A ¶ Marguerite and Isaac exchange the longest look in the history of the break room.
27 D ISAAC: We're very efficient.
28 D LEOPOLD: That's what everyone says.
29 A ¶ He walks to the coffee machine, studies it as a surgeon studies a lung, lifts the carafe, and sighs.
30 D LEOPOLD [CONT'D] (to himself): Out of water.
31 D MARGUERITE: We were just discussing that.
32 D LEOPOLD: Who's responsible?
33 D MARGUERITE: Nobody.
34 D LEOPOLD: That's the problem.
35 D ISAAC: That's the solution. If nobody's responsible, nobody's blamed.
36 D LEOPOLD: Fascinating.
37 A ¶ He opens a notebook.
38 A Writes.
39 A Closes it.
40 D LEOPOLD [CONT'D] (to the room): I'll be observing for two weeks. Please carry on as normal.
41 D MARGUERITE: Normal what?
42 D LEOPOLD: Whatever you usually do.
43 A ¶ Marguerite looks at Isaac.
44 A Isaac looks at his burrito.
45 A Neither of them moves.
* 46 A The machine beeps.

### SCENE s02008 | EXT. DUSTY SALOON PORCH, CROSSROADS TOWN - NOON
Detected names (may be incomplete or contain aliases): SHERIFF AUGUSTUS BRANDYWINE-OKORO, TOBY, FAIRWEATHER-LIN, MADELEINE VOSKUIJLEN-ADEOLA
* 1 A ¶ A single street of plank buildings baking in white sun.
* 2 A A water trough.
* 3 A A hitching rail.
* 4 A Tumbleweed rolls by, unhurried, and fetches up against a barrel.
5 A ¶ On the porch sit two men.
6 A SHERIFF AUGUSTUS BRANDYWINE-OKORO (50s, graying mustache, tin star) rocks in a chair with a tin cup of coffee.
7 A Beside him, DEPUTY TOBIAS "TOBY" FAIRWEATHER-LIN (20s, too-new hat, a rifle across his knees) whittles at a stick.
8 D SHERIFF: Quiet today.
9 D TOBY: Always quiet on Wednesdays.
10 D SHERIFF: Quiet's a good thing.
11 D TOBY: Yes, sir.
12 D SHERIFF: Quiet's also a warning.
13 D TOBY: Yes, sir?
14 D SHERIFF: Quiet means somebody's up to something.
15 D TOBY: Or nobody is.
16 D SHERIFF: Son, the nobody's the one to worry about.
17 A ¶ Toby considers this.
18 A Sets down the stick.
19 D TOBY: Should I go look?
20 D SHERIFF: Look at what?
21 D TOBY: Anything.
22 D SHERIFF: Sit down.
23 D TOBY: I am sitting.
24 D SHERIFF: Sit down harder.
* 25 A ¶ A horse snorts somewhere behind the livery.
* 26 A A shutter bangs.
27 A The two men go still.
28 D TOBY (whispering): Sheriff.
29 D SHERIFF: I heard it.
30 D TOBY: Was it the wind?
31 D SHERIFF: Might've been.
32 D TOBY: Might not.
33 D SHERIFF: Might not.
* 34 A ¶ Boots on gravel.
35 A A new figure rounds the corner of the general store: MADELEINE VOSKUIJLEN-ADEOLA (30s, dust-colored duster, wide-brimmed hat, a carpetbag in one hand, spurs that sing).
36 A She stops in the middle of the street and looks at the porch.
37 D MADELEINE: Afternoon, gentlemen.
38 D SHERIFF: Ma'am.
39 D TOBY: Ma'am.
40 D MADELEINE: I'm looking for the sheriff.
41 D SHERIFF: You've found him.
42 D MADELEINE: I've a letter for you.
43 D SHERIFF: From who?
44 D MADELEINE (together): From Judge Hollis in Santa Rita.
45 D TOBY (together): Judge Hollis in Santa Rita?
46 D SHERIFF: Toby.
47 D TOBY: Sorry, Sheriff.
48 A ¶ Madeleine sets down the carpetbag.
49 A Pulls a folded envelope from her coat.
50 A Holds it up between two fingers.
51 A Neither man moves.
52 D MADELEINE: Shall I bring it up, or will you come down?
53 D SHERIFF: Bring it up.
54 A ¶ She mounts the steps.
55 A Hands him the letter.
56 A He reads.
57 A Reads again.
58 A Folds it.
59 A His face goes still.
60 D SHERIFF [CONT'D] (low): Toby. Go inside.
61 D TOBY: Sheriff?
62 D SHERIFF: Go inside and lock the door.
63 D TOBY: What's it say?
64 D SHERIFF: Just do it.
65 A ¶ Toby rises, the chair scraping, and goes into the saloon.
* 66 A The door closes.
* 67 A A bolt drops.
68 A Madeleine and the Sheriff stand alone on the porch with the wind and the tumbleweed.
69 D SHERIFF [CONT'D]: It says there's a man coming.
70 D MADELEINE: There is.
71 D SHERIFF: It says he's coming for me.
72 D MADELEINE: He is.
73 D SHERIFF: It says you're his sister.
74 A ¶ Madeleine tilts her head.
* 75 A A long silence.
* 76 A The wind lifts the brim of her hat.
77 D MADELEINE: He's not coming for you, Sheriff. I am.

### SCENE s02009 | INT. BRIDAL SUITE, MOUNTAIN CHALET - MORNING
Detected names (may be incomplete or contain aliases): THE BRIDE, AUNT FLORENTINA OSEI-VANCE, COUSIN PRUDENCE LINDQVIST, SISTER ODALYS BARTHOLOMEW, MAKEUP ARTIST JIN-HO KOWALCZYK, DENISE
* 1 A ¶ Chintz and antlers.
* 2 A A garment bag hangs on a door.
3 A Six women crowd a mirror, a hairdryer roars, and someone's phone plays a wedding march at the wrong speed.
4 A ¶ THE BRIDE (30s, in a half-pinned dress, a veil crushed on one arm, her face fixed in perfect, polite panic) stands on a footstool.
5 A Around her, in a frieze of competence: AUNT FLORENTINA OSEI-VANCE (60s, pearls) with a threaded needle; COUSIN PRUDENCE LINDQVIST (20s, flower crown) with a glue gun; SISTER ODALYS BARTHOLOMEW (30s, matron of honor) with a clipboard; MAKEUP ARTIST JIN-HO KOWALCZYK (30s, brushes in a tool belt) with a compact; and DENISE (40s, planner, earpiece, headset) with a radio.
* 6 A ¶ Everyone is speaking at once, but no one is hearing anyone.
7 D DENISE (into radio): Bride is in the dress. I repeat, in the dress.
8 D AUNT FLORENTINA: Hold still, dear, there's a gap.
9 D COUSIN PRUDENCE: Is that glitter supposed to be on the bodice?
10 D ODALYS: It's not glitter, it's a thread.
11 D JIN-HO: It's glitter.
12 A ¶ The Bride says nothing.
13 A A single tear tracks through her foundation.
14 A Jin-Ho dabs it with a sponge before it drops; Aunt Florentina stitches; Prudence mends the flower crown with the glue gun; Odalys crosses something off the clipboard; and Denise paces to the window with the radio, listening to a voice no one else can hear.
15 D DENISE [CONT'D] (into radio): Repeat? The groom has what?
* 16 A ¶ A pause.
17 A Denise turns, slowly.
* 18 A The room goes silent.
* 19 A The hairdryer winds down.
20 D DENISE [CONT'D] (to the room, brightly): Everything's fine. Nothing to worry about.
21 D ODALYS: Denise.
22 D DENISE: It's fine.
23 D ODALYS: What did he say?
24 D DENISE: The groom would like a word.
25 A ¶ The Bride steps off the footstool, one satin shoe at a time, and walks to the door.
26 A Aunt Florentina's needle follows her until the thread snaps.
27 A At the threshold, she stops.
28 A Takes the veil from her arm.
29 A Hands it to Denise.
30 D THE BRIDE (quietly): Hold this.
31 A ¶ She goes out.
* 32 A The door closes.
33 A Prudence lifts the glue gun, sets it down.
34 A Five women look at the closed door.
35 A One by one, they take out their phones.
36 D JIN-HO (muttering): I knew it.

### SCENE s02010 | INT. NIGHT-SHIFT NURSES' STATION, ONCOLOGY WARD - NIGHT
Detected names (may be incomplete or contain aliases): NURSE BEATRIX OYELOWO-LANDRY, AUGUSTINE HALLORAN-DIOP, MAN IN A COAT, COAT, OKPARA'S BROTHER
* 1 A ¶ A pool of fluorescent light in a dim corridor.
* 2 A Charts, a stale vending-machine coffee, a monitor beeping softly.
3 A ¶ NURSE BEATRIX OYELOWO-LANDRY (50s, cardigan over scrubs, glasses on a beaded chain) charts at the desk.
4 A Beside her, DR. AUGUSTINE HALLORAN-DIOP (30s, rumpled, third double shift) slumps on a stool.
5 A A MAN IN A COAT (60s, visitor's badge, shopping bag) stands at the counter's edge.
6 D BEATRIX: Doctor, there's a gentleman for you.
7 D HALLORAN-DIOP: Who?
8 D BEATRIX: He didn't say.
9 A ¶ She looks up at the man.
10 A He lowers his eyes.
11 D MAN IN A COAT: I'm sorry. I know it's late.
12 D HALLORAN-DIOP: It's fine. Can I help you?
13 D MAN IN A COAT: I'm Mr. Okpara's brother.
14 D HALLORAN-DIOP: Room 412.
15 D MAN IN A COAT: Yes.
16 D HALLORAN-DIOP: I'm sorry. Mr. Okpara passed away at two.
17 A ¶ The man nods.
18 A He doesn't move.
19 D OKPARA'S BROTHER (quietly): I brought him a sweater.
20 D BEATRIX: That's thoughtful.
21 D OKPARA'S BROTHER: It was his favorite. Blue, with the elbows gone. I thought it might be cold.
22 D HALLORAN-DIOP: Sir, would you like to see him?
23 D OKPARA'S BROTHER: I think I should.
24 D BEATRIX: I'll walk you down.
25 D OKPARA'S BROTHER: Thank you.
26 D HALLORAN-DIOP: Take as long as you need.
27 D OKPARA'S BROTHER: Doctor.
28 D HALLORAN-DIOP: Yes?
29 D OKPARA'S BROTHER: Did he say anything? At the end?
30 A ¶ Halloran-Diop looks at Beatrix.
31 A She gives the smallest shake of her head.
32 D HALLORAN-DIOP: He asked about the weather.
33 D OKPARA'S BROTHER (a faint smile): Of course he did.
34 A ¶ He lifts the shopping bag, adjusts its handle, and follows Beatrix down the corridor.
* 35 A The monitor beeps.
36 D HALLORAN-DIOP (to himself): It was raining.

### SCENE s02011 | EXT. LIFEBOAT, OPEN OCEAN - DAY
Detected names (may be incomplete or contain aliases): TEODORA ABELARD-NKOSI, RADIO VOICE
* 1 A ¶ A white fiberglass lifeboat riding gentle swells under a vast blue sky.
* 2 A No land.
* 3 A No ships.
* 4 A A flare gun, a water jug, a canvas awning rolled back.
* 5 A The sun hammers the thwarts.
6 A ¶ TEODORA ABELARD-NKOSI (30s, sun-scorched, a torn orange life vest, lips split) sits in the stern with an emergency radio in her lap.
7 A She stares at it.
* 8 A Nothing else moves for a long time.
9 A ¶ She turns the dial.
* 10 A Static.
11 A Turns it back.
* 12 A Static.
13 A She sets it on the thwart, picks up the water jug, shakes it.
* 14 A Almost empty.
15 A She sets it down.
* 16 A ¶ The radio gives a click.
17 D TEODORA (hoarse): Hello?
18 D RADIO VOICE [V.O.] (faint, through hiss): ...aboard, if you can hear this...
19 D TEODORA (grabbing the radio): I hear you! I can hear you!
20 D RADIO VOICE [V.O.]: ...say again. This is the Ocean Warden...
21 D TEODORA: I'm in a lifeboat! Position unknown!
22 D RADIO VOICE [V.O.]: Ma'am, stay calm. What is your name?
23 D TEODORA: Teodora. Teodora Abelard-Nkosi.
24 D RADIO VOICE [V.O.]: Teodora, I'm Captain Ruiz-Delacroix. How many aboard?
25 D TEODORA: One.
26 D RADIO VOICE [V.O.]: One person?
27 D TEODORA (a beat): Just me.
28 D RADIO VOICE [V.O.]: Understood. Do you have water?
29 D TEODORA: A mouthful.
30 D RADIO VOICE [V.O.]: Food?
31 D TEODORA: None.
32 D RADIO VOICE [V.O.]: Can you see the sun?
33 D TEODORA: It's right above me.
34 D RADIO VOICE [V.O.]: Good. Teodora, listen carefully. We're picking up your signal. We're three hours out. Stay on the radio.
35 D TEODORA: Three hours.
36 D RADIO VOICE [V.O.]: Three hours. Can you hold on?
37 D TEODORA: I've held on four days.
38 D RADIO VOICE [V.O.]: Then three hours is easy.
39 A ¶ She laughs, a dry broken sound, and presses the radio against her forehead.
40 A Tears cut through the salt on her cheeks.
41 D TEODORA: It's not easy.
42 D RADIO VOICE [V.O.]: No. It isn't.
43 D TEODORA: Captain, can you just talk to me? Anything.
44 D RADIO VOICE [V.O.]: What would you like to hear?
45 D TEODORA: Anything. The weather. The news.
46 D RADIO VOICE [V.O.]: Weather's fine. Seas are calm. There's a bit of high cloud to the west.
47 D TEODORA: That's nice.
48 D RADIO VOICE [V.O.]: The news, honestly, isn't. But I can tell you about my dog.
49 D TEODORA: Tell me about your dog.
50 D RADIO VOICE [V.O.]: His name is Barnacle. He's a collie. He hates the ocean.
51 D TEODORA (laughing): He hates the ocean?
52 D RADIO VOICE [V.O.]: He's afraid of the waves. Barks at each one.
53 D TEODORA: Does it help?
54 D RADIO VOICE [V.O.]: Not at all. But he's very committed.
55 A ¶ Teodora closes her eyes and lets her head rest against the gunwale.
* 56 A The radio hisses and the swell lifts the boat and sets it down.
57 D TEODORA: Captain?
58 D RADIO VOICE [V.O.]: Still here.
59 D TEODORA: Keep talking.
60 D RADIO VOICE [V.O.]: All right. Barnacle also eats socks.
61 A ¶ She smiles, eyes shut.
* 62 A The sun climbs.
* 63 A The lifeboat rises on the swell and the radio hums on, a thin voice in the huge blue silence, and far off on the horizon something white begins to grow.

### SCENE s02012 | INT. VETERANS HOSPITAL, SLEEP LAB - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT MAJOR TIBERIUS NWANKWO-ASHBY, TECHNICIAN LUCINDA OYELARAN-PARK, WILHELM ACHTERBERG-DIOP, CALLUM FITZGERALD-ABARA
* 1 A ¶ A dim private room with a single bed and a bank of wires, electrodes, a camera in the ceiling.
* 2 A Through a one-way window: a control room with monitors.
3 A ¶ On the bed, wired to the scalp, sleeps SERGEANT MAJOR TIBERIUS NWANKWO-ASHBY (60s, stoic even asleep).
4 A At the monitors in the control room sit TECHNICIAN LUCINDA OYELARAN-PARK (30s, clogs, a thermos), DR. WILHELM ACHTERBERG-DIOP (50s, white coat, bow tie), and a student, CALLUM FITZGERALD-ABARA (20s, clipboard).
5 D LUCINDA: Theta waves, stable.
6 D WILHELM: Heart rate?
7 D LUCINDA: Sixty-two.
8 D WILHELM: Good. Callum, note the time.
9 D CALLUM: Three-oh-four.
* 10 A ¶ A speaker on the desk crackles with the patient's breathing, steady.
11 D WILHELM: He should enter REM within the hour.
12 D CALLUM: Doctor, what are we looking for?
13 D WILHELM: Muscle atonia.
14 D CALLUM: I'm sorry?
15 D WILHELM: In REM sleep, the body is paralyzed. Our friend in there--
16 D LUCINDA: Doesn't comply.
17 D WILHELM: He acts out his dreams. Dangerous, for him and anyone near.
18 D CALLUM: What does he dream about?
19 D LUCINDA: We don't ask.
* 20 A ¶ The monitor's line spikes.
* 21 A The speaker emits a low, wet groan.
22 D TIBERIUS [V.O.] (over speaker, asleep): Down. Get down.
23 A ¶ Lucinda's pen stops.
24 A Wilhelm leans forward.
25 D WILHELM: Here we go.
26 D TIBERIUS [V.O.] (asleep): Incoming. Down.
27 A ¶ On the bed, the old man's arm swings out and strikes the rail.
28 A His legs kick the blanket away.
* 29 A The wires pull.
30 D CALLUM: Should we go in?
31 D WILHELM: Not yet.
32 D TIBERIUS [V.O.] (asleep, hoarse): Marcus. Marcus, stay down.
33 A ¶ Lucinda lowers her head.
34 A Wilhelm doesn't move.
35 A Callum looks from one to the other and then at his clipboard, where his hand has stopped writing.
36 D TIBERIUS [V.O.] (asleep): I've got you. I've got you.
* 37 A ¶ The monitor line smooths.
* 38 A The breathing slows.
39 A The arm falls back across the old man's chest.
40 D LUCINDA (softly): He's back.
41 D WILHELM: Time?
42 D CALLUM: Three-nineteen.
43 D WILHELM: Record it.
44 A ¶ Callum writes, slowly.
45 A Lucinda unscrews her thermos and pours coffee into the lid.
46 A She holds it out to him without looking.

### SCENE s02013 | INT. PARKED SEDAN, PARKING GARAGE LEVEL P3 - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL CASTELLANOS-OKOYE, HANDLER
* 1 A ¶ Concrete pillars.
* 2 A Flickering lights.
* 3 A One car, engine off, windows fogged.
4 A ¶ MARISOL CASTELLANOS-OKOYE (30s, black coat, gloved hands on the wheel) sits upright, eyes on the rearview.
* 5 A On the seat beside her, a phone, face-up, on speaker.
6 D HANDLER [V.O.] (over phone, flat): Status.
7 D MARISOL: Parked. Third level.
8 D HANDLER [V.O.]: He's coming down the stairwell. Two minutes.
9 D MARISOL: Armed?
10 D HANDLER [V.O.]: Assume yes.
11 A ¶ She nods.
12 A Puts a hand under the seat, finds a pistol, brings it up.
13 A Checks it.
14 A Sets it in her lap.
15 D HANDLER [V.O., CONT'D]: Marisol.
16 D MARISOL: Yeah.
17 D HANDLER [V.O.]: You don't have to do this.
18 D MARISOL: I know.
19 D HANDLER [V.O.]: Walk away. Tonight. I'll cover it.
20 D MARISOL: No.
21 A ¶ She stares at the mirror.
* 22 A A shadow moves at the far end of the garage.
23 A She stiffens.
24 D MARISOL [CONT'D] (whispering): I see him.
25 D HANDLER [V.O.]: Hold.
26 D MARISOL: He's looking at the car.
27 D HANDLER [V.O.]: Hold.
* 28 A ¶ The shadow stops.
29 A Takes a step.
30 A Another.
31 A A man emerges from behind a pillar, hands in his pockets, face lost in shadow.
32 A He walks toward the sedan with a deliberate, easy stride.
33 D MARISOL: Oh, no.
34 D HANDLER [V.O.]: What?
35 D MARISOL: It's my brother.
* 36 A ¶ Silence on the line.
37 A The man reaches the driver's window and taps once on the glass.
38 A She doesn't move.
39 A He taps again.
40 A She lowers the pistol, slides it back beneath the seat, and rolls the window down an inch.
41 A ¶ Hands shaking, she picks up the phone, and without a word, ends the call.

### SCENE s02014 | INT. SAFEHOUSE KITCHEN, SUBURBAN SPLIT-LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): AGENT PHILOMENA OYELARAN-DUBOIS, AGENT GREGORY NAKAMURA-ACHEBE, WITNESS, HELGA BRZEZINSKI-MWANGI, OFFICER DIEGO FERREIRA-LINDQVIST, OFFICER PATRICE ADELEKE-VANCE
* 1 A ¶ Drawn blinds.
* 2 A A table with a half-eaten pizza.
* 3 A Five people, each in a state of alertness that is nearly comic.
4 A ¶ AGENT PHILOMENA OYELARAN-DUBOIS (40s, short gray hair, a pistol on the table) sits at the head.
5 A Beside her, AGENT GREGORY NAKAMURA-ACHEBE (30s, rolled sleeves, laptop), and across from them the WITNESS: HELGA BRZEZINSKI-MWANGI (50s, cardigan, a cup of tea going cold).
6 A In the doorway, two guards: OFFICER DIEGO FERREIRA-LINDQVIST (20s, earpiece) and OFFICER PATRICE ADELEKE-VANCE (30s, vest).
7 A ¶ Philomena pours the witness more tea; Gregory glances at the laptop and mutters something; Diego shifts from foot to foot while Patrice peels back a corner of the blind and peers at the street; Helga takes the cup and stares at the swirl of leaves, and nobody speaks.
8 D PHILOMENA (together): Helga, we need to talk about tomorrow.
9 D HELGA (together): I'm not going to testify.
10 A ¶ They stop.
11 A Gregory looks at Philomena.
12 A Philomena sets down the teapot.
13 D PHILOMENA: You agreed.
14 D HELGA: That was before.
15 D GREGORY: Before what?
16 D DIEGO: Before the car.
17 D PATRICE (from the window): What car?
18 D HELGA: The gray one. It's parked outside.
19 D PATRICE: There's no gray car.
20 D HELGA: It was there at six.
21 D DIEGO: Patrice, check.
22 D PATRICE: I'm checking.
23 D PHILOMENA: Everyone be quiet.
24 A ¶ They are.
* 25 A A floorboard creaks in the hall.
26 A Patrice lets the blind fall.
27 A Diego's hand drifts to his holster.

### SCENE s02015 | INT. COLLECTOR'S LIBRARY, COUNTRY HOUSE - EVENING
Detected names (may be incomplete or contain aliases): INSPECTOR CLEMENTINE ARDEN-OYELOWO, HOUSEKEEPER, PRUDENCE WHITLOCK-ABARA
* 1 A ¶ A tall room lined with leather spines, a ladder on a brass rail.
* 2 A Green-shaded lamps, a cold hearth, tea service untouched on a low table.
* 3 A Rain on the long windows.
4 A ¶ INSPECTOR CLEMENTINE ARDEN-OYELOWO (40s, brown tweed, a notebook in her breast pocket) stands at a glass cabinet.
* 5 A A single shelf in the cabinet is empty, the dust outlining a rectangle where a book once stood.
6 A ¶ At the fireplace, holding a cup of tea she hasn't touched, stands the HOUSEKEEPER, PRUDENCE WHITLOCK-ABARA (50s, gray dress, keys at her belt).
7 A Her hand does not shake.
8 A Her eyes never leave the Inspector.
9 D CLEMENTINE: It was here this morning.
10 D PRUDENCE: It was.
11 D CLEMENTINE: You're certain.
12 D PRUDENCE: I dusted it myself.
13 D CLEMENTINE: At what hour?
14 D PRUDENCE: Nine.
15 D CLEMENTINE: And you locked the cabinet.
16 D PRUDENCE: I did.
17 D CLEMENTINE: Who else has the key?
18 D PRUDENCE: The master.
19 D CLEMENTINE: Who is abroad.
20 D PRUDENCE: In Lisbon.
21 A ¶ The Inspector runs a gloved finger along the empty shelf.
22 A Studies the rectangle.
23 A Turns.
24 D CLEMENTINE: Mrs. Whitlock-Abara. How long have you served this house?
25 D PRUDENCE: Twenty-two years.
26 D CLEMENTINE: And the book?
27 D PRUDENCE: It was here before I came.
28 D CLEMENTINE: What was it worth?
29 D PRUDENCE (a pause): I don't know.
30 D CLEMENTINE: You don't know.
31 D PRUDENCE: It wasn't mine to value.
32 A ¶ She sets the teacup on the mantel with a faint, precise click.
33 A Clementine watches her do it.
34 D CLEMENTINE: You could have taken it.
35 D PRUDENCE: I could have.
36 D CLEMENTINE: You had the key and the hour.
37 D PRUDENCE: I did.
38 D CLEMENTINE: So why didn't you?
39 D PRUDENCE: Because I'd have been caught.
40 D CLEMENTINE: By whom?
41 D PRUDENCE: By you, Inspector.
42 A ¶ For a moment, the two women regard each other.
* 43 A A log settles in the cold hearth, which holds no fire.
* 44 A The rain slackens.
45 D CLEMENTINE (slowly): You knew I'd come.
46 D PRUDENCE: I've been expecting you since breakfast.
47 D CLEMENTINE: Because the book was gone.
48 D PRUDENCE: Because it was never there.
49 A ¶ Clementine goes still.
50 A She looks at the dust on the shelf.
51 A At the rectangle.
52 A Then she crouches and, with her pen, lifts an edge of the shelf paper.
* 53 A Beneath it, in the wood, a thin slot.
* 54 A Inside the slot, nothing.
55 A She lets the paper fall.
56 D CLEMENTINE: It's a decoy.
57 D PRUDENCE: It's been a decoy for thirty years.
58 D CLEMENTINE: Who knew?
59 D PRUDENCE: Everyone who works here.
60 D CLEMENTINE: Except the master?
61 D PRUDENCE: Except the master.
62 A ¶ Clementine straightens.
63 A For the first time, she smiles, and Prudence, almost, smiles back.
64 D CLEMENTINE: Where is it, Mrs. Whitlock-Abara?
65 D PRUDENCE: In the kitchen. Behind the flour tin. I'll make you a fresh pot.
66 A ¶ She lifts the tray and goes out.
67 A Clementine stays where she is, one hand resting on the glass.

### SCENE s02016 | INT. HIGH SCHOOL GYMNASIUM, LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): COACH ISADORA PRZYBYLSKI-OKAFOR, TANK, ELLISON-ADEYEMI, DEVON HOLLOWAY-NAKAMURA, AMIR ZAHEDI-LINDGREN
* 1 A ¶ Rows of dented lockers.
* 2 A A bench running the length of the room.
* 3 A A whiteboard with a half-erased play: X's, O's, arrows.
* 4 A The score on the bell-jar scoreboard through the door: 61 - 61, 0:09 left.
5 A ¶ COACH ISADORA PRZYBYLSKI-OKAFOR (40s, whistle, headset around her neck) paces.
6 A On the bench, in a row of damp jerseys: MARCUS "TANK" ELLISON-ADEYEMI (17, point guard), DEVON HOLLOWAY-NAKAMURA (17, forward, bag of ice on his knee), and little AMIR ZAHEDI-LINDGREN (16, bench player, towel on his head).
7 D ISADORA: Nine seconds. Down by none.
8 D TANK: Tied.
9 D ISADORA: Tied is not winning.
10 D DEVON: We know, Coach.
11 D ISADORA: I'm talking to the bench.
12 D AMIR: I'm on the bench.
13 D ISADORA: I know where you are, Amir.
14 A ¶ She taps the whiteboard.
* 15 A The marker squeaks.
16 D ISADORA [CONT'D]: Tank, you inbound. Devon, you screen. Amir--
17 D TANK: Wait, Amir's in?
18 D DEVON: Amir's in?
19 D AMIR: I'm in?
20 D ISADORA: Hello, all of you. Yes. Amir's in.
21 D TANK: Coach, with respect--
22 D DEVON: He's never played a minute.
23 D AMIR: Eleven minutes. In the preseason.
24 D ISADORA: He's the only one who hasn't been guarded on tape.
25 D TANK: That's a bad reason.
26 D ISADORA: It's a good reason, Tank.
27 D DEVON: What if he misses?
28 D AMIR: What if I miss?
29 D ISADORA: Then we go to overtime.
30 D TANK: That's not an answer.
31 D ISADORA: It's the only one I have.
32 A ¶ She caps the marker.
* 33 A Silence.
* 34 A The buzzer sounds in the gym.
35 A Amir stands first, towel falling.
36 A He looks at Tank, then at Devon.
37 A Tank rises too.
38 A Devon pulls the ice off his knee, drops it in the bin, and offers Amir a fist.
39 A Amir bumps it.
40 D ISADORA [CONT'D]: Eyes up. Hands on.
41 D TANK: Hands on.
42 D DEVON: Hands on.
43 D AMIR: Hands on.
44 A ¶ They file out.
45 A Isadora stands alone in the empty locker room.
46 A She lifts the whistle to her lips and doesn't blow.

### SCENE s02017 | INT. VILLAGE HALL, AMATEUR DRAMATICS REHEARSAL - NIGHT
Detected names (may be incomplete or contain aliases): DIRECTOR HILDEGARD OYEGUN-LAMBERT, LEADING LADY DORIS ABERNATHY-OKOYE, VILLAIN REGINALD TSAI-FAIRBANKS, STAGEHAND JUNIPER ACHEBE-MOREAU
* 1 A ¶ A cold hall with a stacked-chair smell.
* 2 A Folding table of tea urns.
* 3 A A makeshift stage of pallets.
4 A ¶ Four people stand in a loose semicircle: DIRECTOR HILDEGARD OYEGUN-LAMBERT (60s, scarf, a script held aloft), the LEADING LADY DORIS ABERNATHY-OKOYE (50s, hat and gloves already on), the VILLAIN REGINALD TSAI-FAIRBANKS (40s, cape, mustache of black felt), and the STAGEHAND JUNIPER ACHEBE-MOREAU (teen, headphones round her neck).
5 D HILDEGARD: From "Who among you has done this?"
6 D DORIS: Who among you has done this?
7 D REGINALD: I have done nothing.
8 D DORIS: Then why is the knife in your pocket?
9 D REGINALD (to himself): Is it the left or the right?
10 D HILDEGARD: The left, Reginald.
11 D REGINALD: The left.
12 A ¶ He pulls out a rubber dagger.
* 13 A Dramatic pause.
* 14 A It folds in half.
15 D JUNIPER (muttering): Told you not to buy it at the dollar store.
16 D HILDEGARD: Juniper.
17 D JUNIPER: Sorry.
18 D HILDEGARD (to the room): Everyone, a short break.
19 A ¶ They disperse.
20 A Doris heads to the tea urn.
21 A Reginald examines the dagger.
22 A Hildegard and Juniper stay center stage.
23 D HILDEGARD [CONT'D]: That wasn't the dollar store.
24 D JUNIPER: What?
25 D HILDEGARD: The knife. It's not from the dollar store.
26 D JUNIPER: Then where?
27 D HILDEGARD: It's not the prop knife at all. Reginald brought his own.
28 D JUNIPER: So?
29 D HILDEGARD: This is the prop.
30 A ¶ She holds up the folded rubber.
31 A Then, slowly, she turns toward Reginald, who is stirring tea.
* 32 A A real blade glints in his pocket as he bends.
33 A ¶ Doris sees it.
34 A Juniper sees it.
35 A Hildegard lowers the script.
36 D HILDEGARD [CONT'D] (very calmly): Reginald. Show me the other one.

### SCENE s02018 | INT. ORBITAL ARCHIVE STATION, READING ROOM - CONTINUOUS CYCLE
Detected names (may be incomplete or contain aliases): ARCHIVIST PELAGIA ONWUACHI-VANDERMEER, VISITOR, YOUNG SCHOLAR, THEODOSIA AMARI-KOWALSKI, LIBRARY AUTOMATON
* 1 A ¶ A quiet room of brass and glass, the curve of a viewport showing slow clouds of a gas giant.
* 2 A Rows of reading carrels.
* 3 A Archival drawers set into the walls like ship's lockers.
* 4 A A brass clock ticks, though no tide exists here to measure.
5 A ¶ ARCHIVIST PELAGIA ONWUACHI-VANDERMEER (60s, gray tunic, white gloves) shelves a folio.
6 A At a carrel, a VISITOR (40s, unmarked jumpsuit, a leather satchel, polite eyes) turns the pages of a bound volume with the care of one afraid to wake it.
7 A ¶ At another carrel sits a YOUNG SCHOLAR, THEODOSIA AMARI-KOWALSKI (20s, ink-stained fingers, tangled hair) taking notes.
8 A Across the aisle, a LIBRARY AUTOMATON, a squat brass construct with a single lens, rolls on silent wheels.
9 D PELAGIA: Visitor. You've been in that volume for three days.
10 D VISITOR: It is a long volume.
11 D PELAGIA: It's forty pages.
12 D VISITOR: They are dense pages.
13 D PELAGIA: May I ask what you are looking for?
14 D VISITOR: A name.
15 D PELAGIA: Whose?
16 D VISITOR: My grandfather's.
17 A ¶ Pelagia sets down her folio.
18 A Adjusts a glove.
19 D PELAGIA: He was a colonist?
20 D VISITOR: He was a cartographer. On the survey ship Meridian.
21 D PELAGIA: The Meridian was lost.
22 D VISITOR: Yes.
23 D PELAGIA: Eighty years ago.
24 D VISITOR: Eighty-one.
25 A ¶ The Automaton rolls to a stop beside the Visitor.
26 A Its lens irises.
27 D AUTOMATON: Query. Do you require assistance?
28 D VISITOR: No, thank you.
29 D AUTOMATON: Query. Is the volume satisfactory?
30 D VISITOR: It is.
31 D AUTOMATON: Noted.
32 A ¶ It rolls away.
33 A Theodosia lifts her head and watches it go.
34 D THEODOSIA (whispering): It's never done that before.
35 D PELAGIA: It's learning.
36 D THEODOSIA: That's what worries me.
37 A ¶ The Visitor turns another page.
38 A Stops.
39 A His finger rests on a line of tiny script.
40 A He doesn't speak.
41 A Pelagia crosses to him, quiet, and reads over his shoulder.
42 D PELAGIA: Ah.
43 D VISITOR: Yes.
44 D PELAGIA: "Cartographer Imre Teague-Oyelaran. Last known position: sector nine."
45 D VISITOR: Last known.
46 D PELAGIA: Last known is not final.
47 D VISITOR: No. But it is as far as the records go.
48 A ¶ Theodosia rises from her carrel and joins them.
49 A The three of them look at the page: the Archivist, the Visitor, the scholar.
50 D THEODOSIA: Sector nine is where the Reach begins.
51 D VISITOR: I know.
52 D THEODOSIA: Nobody goes into the Reach.
53 D VISITOR: My grandfather did.
54 D PELAGIA (together): Perhaps you should wait for the next survey.
55 D THEODOSIA (together): Perhaps you should wait for the next survey.
56 A ¶ They glance at each other.
57 A The Visitor smiles faintly.
58 D VISITOR: I have waited eighty-one years.
59 D PELAGIA: It is not you who waited.
60 D VISITOR: No. But I inherited the habit.
61 A ¶ He closes the volume gently, rests his palm on the cover, and sits there a long moment while the clock ticks and the clouds of the giant planet turn in the window.
62 D PELAGIA: Would you like tea?
63 D VISITOR: Please.
64 A ¶ She goes to fetch it.
65 A Theodosia hesitates, then pulls out the chair beside him and sits.
66 D THEODOSIA (quietly): I could go with you.
67 D VISITOR: To the Reach?
68 D THEODOSIA: To the next archive. There's a copy of the Meridian's log in Tycho Station.
69 D VISITOR: I would like that.
70 D THEODOSIA: Good.
71 A ¶ The Automaton returns, bearing a tray: a pot, three cups.
72 A It sets it on the carrel.
73 D AUTOMATON: Tea, Visitor.
74 D VISITOR (to the Automaton, amused): Thank you.
75 D AUTOMATON: You are welcome, Imre.
76 A ¶ The Visitor goes completely still.
77 A Pelagia, at the end of the aisle, stops with her hand on a drawer.
78 A Theodosia looks from the Automaton to him.
79 D VISITOR (slowly): That's not my name.
80 D AUTOMATON: It is in the log.

### SCENE s02019 | INT. CLOSED MUSEUM OF CLOCKS, GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE RUTH OKONJO-HALVORSEN, WOMAN, MARGUERITE DELACROIX-ASANTE, MAN, GRAY WORK COAT, HENRI
* 1 A ¶ Hundreds of clocks, all stopped at different hours.
* 2 A Glass cases.
* 3 A Brass gears under spotlights.
* 4 A A wall of cuckoo clocks, beaks open, silent.
5 A ¶ DETECTIVE RUTH OKONJO-HALVORSEN (40s, wool coat, flashlight) crouches over a smashed display case.
* 6 A Glass crunches under her boots.
7 A She picks up a pendulum, turns it over, sets it down.
* 8 A ¶ Footsteps behind her.
9 A She doesn't turn.
10 D RUTH: You're late, Marguerite.
11 A ¶ A WOMAN steps out from behind a longcase clock: MARGUERITE DELACROIX-ASANTE (40s, gloves, raincoat, a museum badge on a lanyard).
12 D MARGUERITE: I was told eleven.
13 D RUTH: It's eleven-twenty.
14 D MARGUERITE: My watch is slow.
15 D RUTH: Everything in this building is slow.
16 A ¶ Marguerite's mouth twitches.
17 A She walks to the case, careful not to touch the glass.
18 D MARGUERITE: What's missing?
19 D RUTH: The Harrison.
20 D MARGUERITE: The Harrison.
21 D RUTH: The chronometer. Seventeen sixty-one.
22 D MARGUERITE: Ruth, that's worth--
23 D RUTH: More than this city. I know.
24 D MARGUERITE: How did they get in?
25 D RUTH: Through the cuckoo wall.
26 D MARGUERITE: That's impossible. It's a hundred pounds of timber and a steel frame.
27 D RUTH: Somebody had the key.
28 D MARGUERITE: Who?
29 D RUTH: You tell me.
30 A ¶ Marguerite stiffens.
* 31 A The nearest clock ticks once, as if the sound were a mistake, and falls silent again.
32 D MARGUERITE: You think I did it.
33 D RUTH: I think you're the curator.
34 D MARGUERITE: Ruth.
35 D RUTH: I think you carry the only key.
36 D MARGUERITE: I lost it Tuesday.
37 D RUTH: Where?
38 D MARGUERITE: In the carpark.
39 D RUTH: You didn't report it.
40 D MARGUERITE: I thought I'd find it.
41 D RUTH: Marguerite, you are the least careless person I have ever met.
42 A ¶ Marguerite takes off her gloves one finger at a time.
43 A Lays them on the case.
44 D MARGUERITE: I didn't take it.
45 D RUTH: I didn't say you did.
46 D MARGUERITE: You've been saying it for twenty minutes.
47 D RUTH: I've been listening for twenty minutes. There's a difference.
* 48 A ¶ A new sound: a faint, mechanical whir.
49 A Both women freeze.
* 50 A The cuckoo wall, a hundred painted doors, shivers.
* 51 A One by one, they pop open.
52 D MARGUERITE (whispering): That's not on a timer.
53 D RUTH: No.
* 54 A ¶ A hundred cuckoos emerge on little sprung arms, each with its beak wide, and begin to chime together, wildly out of tune.
* 55 A The noise fills the gallery like a swarm.
56 A ¶ Ruth draws her sidearm.
57 A Marguerite grabs her arm.
58 D MARGUERITE: Don't! You'll hit the glass!
59 D RUTH: Then who's doing this?
60 D MARGUERITE: It's the mainspring! Someone's wound it!
61 D RUTH: Where?
62 A ¶ Marguerite points.
63 A Behind the cuckoos, in the shadow, a figure steps out: a MAN IN A GRAY WORK COAT (60s, clock-repairer's loupe pushed up on his forehead, the chronometer in his hand like a baby).
64 D MAN: It's not stolen.
65 D RUTH: Put it down.
66 D MAN: It's mine.
67 D MARGUERITE: Henri?
68 A ¶ The man looks at her.
69 A His lip trembles.
70 D HENRI: It was my father's. They took it. Fifty years ago.
71 A ¶ Ruth lowers the gun.
* 72 A The cuckoos chime on.
73 A Marguerite crosses the glass-strewn floor, slowly, and stops an arm's length from him.
74 D MARGUERITE (gently): Henri. Give it to me.
75 D HENRI: You'll lock it up again.
76 D MARGUERITE: I'll make sure it's in the right case.
77 A ¶ He studies her face for a long time.
78 A Then, as the last cuckoo clicks back into its door and the gallery falls silent, he lays the chronometer in her gloved hands.

### SCENE s02020 | INT. STALLED CABLE CAR - GORGE CROSSING - DAY
Detected names (may be incomplete or contain aliases): IMANI OKORO, PETR HALAS
* 1 A ¶ A steel box the size of a closet, hanging from one cable over a drop of four hundred meters.
* 2 A Wind pushes at the glass.
* 3 A The motor has been dead for six hours.
4 A ¶ IMANI OKORO (30s, park ranger, sunburnt neck, frayed jacket) sits on the floor with her back against the door.
5 A PETR HALAS (60s, retired surveyor, wool cap, thermos) stands, one hand on the rail.
* 6 A ¶ The car sways.
7 A They both freeze.
* 8 A It settles.
9 A They both breathe out.
10 D IMANI: Thermos. How much is left?
11 D PETR: Half a cup. Maybe less.
12 D IMANI: We split it at dusk.
13 D PETR: We split it now. Dusk is a rumor.
14 D IMANI: Petr.
15 D PETR: Fine. Dusk.
16 A ¶ Imani pulls the radio from her belt, thumbs the switch.
* 17 A Static.
18 A She tries again.
* 19 A Static.
20 A She throws it onto the bench, then fetches it back.
21 D IMANI (to herself): Batteries are fine. Battery's fine. It's the gorge.
22 D PETR: Say again?
23 D IMANI: Nothing. The walls eat the signal.
24 D PETR: Then we stop wasting the battery on it.
25 D IMANI: We have the battery for exactly this.
26 D PETR: We have the battery for three more tries. I counted your tries.
27 D IMANI: You counted.
28 D PETR: I measured land for forty years. I count things.
29 D IMANI: Then count this. Rescue knows the line stopped at nine this morning. They know there are two cars on the north span. They send a crew when the wind drops under forty.
30 D PETR: And when does the wind drop under forty?
31 D IMANI: Tonight. Tomorrow at the latest.
32 D PETR: You said that at noon.
33 D IMANI: At noon it was true.
34 D PETR: At noon you also said the cable would hold the whole day, no problem.
35 D IMANI: The cable is rated for six times our weight.
36 D PETR: Rated by whom?
37 D IMANI: By people who do not want to be in here with you.
38 D PETR: That is almost funny.
39 D IMANI: I am almost laughing.
40 D PETR: My knees are going. I would like to sit.
41 D IMANI: Then sit. There is room.
42 D PETR: There is room if you move your boots.
43 D IMANI: My boots are not the problem.
44 D PETR: Your boots are the whole problem.
45 A ¶ Imani draws her legs in.
46 A Petr lowers himself onto the bench opposite and winces.
* 47 A The car rocks.
48 A They grab for each other's sleeves, then pull back, embarrassed.
49 D PETR [CONT'D] (muttering): Forty years on solid ground.
50 A ¶ Imani unzips her jacket and spreads it over his knees without a word.
51 D PETR [CONT'D]: I am not cold.
52 D IMANI: I know.
* 53 A ¶ The wind drops a notch.
* 54 A Far below, a river keeps talking to itself.
55 D IMANI [CONT'D]: Hear that? Wind's easing.
56 D PETR: Or I am going deaf.
57 D IMANI: Either way, we are closer to morning.
58 D PETR: Pour the coffee, ranger.
59 A ¶ She does.
60 A Half a cup, divided with great care.

### SCENE s02021 | INT. CONVENT WINE CELLAR - NORTHERN ITALY - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT HOLLIS WEBB, CORPORAL TUCKER MAYES, MAN, STRANGER, ANSELM
* 1 A ¶ Vaulted brick, rows of dusty barrels, a single oil lamp on an upturned crate.
* 2 A Overhead, far away, the dull thump of artillery.
* 3 A Dust sifts from the ceiling with each one.
4 A ¶ LIEUTENANT HOLLIS WEBB (30s, American, clean-shaven despite everything, map case at his hip) sits on a barrel, writing in a notebook.
5 A ¶ CORPORAL TUCKER MAYES (20s, freckled, helmet pushed back) stands guard at the foot of the stone stairs, rifle slung.
6 A ¶ A MAN in a ragged civilian coat sits on the floor in the shadows, hands resting on his knees.
7 A He is gaunt, gray at the temples, and watches the lamp rather than the soldiers.
8 D MAYES: Lieutenant, he's still not saying a word.
9 D WEBB: Give him time.
10 D MAYES: Been an hour, sir.
11 D WEBB: Been four years for him.
* 12 A ¶ Another thump.
* 13 A Dust falls.
* 14 A The lamp flame shivers.
15 D MAYES: That one's closer.
16 D WEBB: They're walking it down the valley. It'll pass us by morning.
17 D MAYES: How do you know?
18 D WEBB: Because it's the same gun, the same interval. Count with me. Twenty seconds, then the next one lands a little to the left.
19 D MAYES: You been counting?
20 D WEBB: It's what there is to do.
21 A ¶ Mayes shifts his weight.
22 A Looks at the stranger, then back.
23 D MAYES: Sir, if he's a spy, he's a bad one. Nobody sneaks in and then sits down to wait.
24 D WEBB: Nobody said spy.
25 D MAYES: Sergeant Pruitt said spy.
26 D WEBB: Sergeant Pruitt says a lot of things.
27 D MAYES: He said it twice.
28 D WEBB: He says everything twice. It's how you know he means it, or doesn't.
29 A ¶ The STRANGER lifts his head.
30 A His English is careful, formal.
31 D STRANGER: It is the Abbess's wine you are sitting on.
32 D WEBB: We'll try not to drink it.
33 D STRANGER: She would be angry if you did not.
34 A ¶ Webb closes the notebook.
35 A Mayes straightens, hand drifting toward his rifle, then stops.
36 D WEBB: You speak English.
37 D STRANGER: I taught it. Before. At the school in Cremona.
38 D WEBB: What's your name?
39 D STRANGER: Anselm.
40 D WEBB: Anselm what?
41 D ANSELM: Only Anselm. The rest belongs to a man who no longer exists.
42 D MAYES: That's a hell of a thing to say.
43 D ANSELM: It is a hell of a year.
44 D WEBB: Anselm, we're dug in here until the line moves. Nobody's going to hurt you. We just need to know who else is in this convent.
45 D ANSELM: Nine sisters. Two children from the village. One goat.
46 D MAYES: A goat?
47 D ANSELM: She gives good milk. You will want to thank her.
48 D WEBB: Where are they now?
49 D ANSELM: In the chapel, praying very quietly. They are afraid of your Corporal.
50 D MAYES: Me?
51 D ANSELM: You walk like a man who expects to be shot at.
52 D MAYES: I do expect to be shot at.
53 D ANSELM: Yes. That is why they are afraid.
54 A ¶ Webb almost smiles.
* 55 A Another thump, softer this time.
* 56 A No one flinches.
57 D WEBB: That one was farther.
58 D ANSELM: They are walking it down the valley.
59 D WEBB: So I hear.
60 D MAYES: Lieutenant, permission to ask something?
61 D WEBB: Go ahead.
62 D MAYES: Why are we being so polite?
63 D WEBB: Because it's night, and it's cold, and the only war in this room right now is between your stomach and the rations.
64 D MAYES: That's a war I'm losing.
65 D ANSELM: There is bread upstairs. And cheese. The sisters will not offer. You must ask.
66 D WEBB: Mayes, go ask.
67 D MAYES: Sir, my post.
68 D WEBB: I have the post. Go ask nicely.
69 D MAYES: Nicely. Yes, sir.
70 A ¶ Mayes starts up the stairs, pauses halfway.
71 D MAYES [CONT'D]: Do I say please in Italian?
72 D ANSELM: Per favore. And you bow your head. Slightly.
73 D MAYES: Per favore.
74 D ANSELM: Less like you are giving an order.
75 D MAYES: Per favore.
76 D ANSELM: Better.
77 A ¶ Mayes climbs out of sight.
78 A Webb opens the notebook again, then turns it face down on his knee.
79 D WEBB: You must have been a good teacher.
80 D ANSELM: I was a patient one. It is not the same.
81 D WEBB: It's most of it.
* 82 A ¶ The lamp steadies.
* 83 A Above them, a faint scrape of boots on stone, and then a woman's voice, very small, saying something that might be a blessing.

### SCENE s02022 | INT. DRIFTING SALT-HARVEST BARGE - AIRLOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): NADIR SOLOMON, SOLENNE ARQUETTE, BAX, ULLMAN
* 1 A ¶ Red emergency light.
* 2 A Frost on the walls.
* 3 A Pressure alarm pulsing.
4 A ¶ NADIR SOLOMON (40s, pilot) slams the inner hatch.
5 A SOLENNE ARQUETTE (20s, engineer) jams a wrench into the wheel.
6 A BAXTER "BAX" ULLMAN (50s, quartermaster) hauls a crate against the door.
7 D NADIR: It's through the hull--
8 D SOLENNE: Not through, it's--
9 D BAX: Everybody off the wall!
10 D SOLENNE: I need ten seconds--
11 D NADIR: We don't have ten!
12 D BAX: Then make it five!
* 13 A ¶ The hatch BANGS from outside.
14 A All three leap back, then lunge at the wheel together.
15 D SOLENNE: Hold it!
16 D NADIR: Holding!
17 D BAX: Don't hold it, turn it!
18 D SOLENNE: Turn it left! Left!
* 19 A ¶ The wheel locks.
* 20 A The alarm cuts out.
21 A They slide down the wall, breathing hard.
22 D NADIR (quiet): Whatever that was, it knows we're in here.

### SCENE s02023 | INT. ABANDONED PLANETARIUM - DOME ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR LOUELLA PRICE, MIRIAM ASHBY, CONSTABLE FIONA GREAVES
* 1 A ¶ Dust on every seat.
* 2 A A cracked star projector hangs in the center like a dead insect.
* 3 A Flashlight beams cross the ceiling.
4 A ¶ INSPECTOR LOUELLA PRICE (50s, rain-wet mac) kneels beside the projector.
5 A DR. MIRIAM ASHBY (40s, pathologist) stands behind her with a case.
6 A CONSTABLE FIONA GREAVES (20s, notebook out) waits at the door.
7 A ¶ Louella lifts a brass key from the projector's base.
8 A Miriam and Fiona both step forward at once, collide, and stop.
9 D LOUELLA: Careful. Nobody touch it.
10 D MIRIAM: The note says nine o'clock. It is quarter past.
11 D FIONA: Then she is late, or she is not coming.
12 D LOUELLA: She is here. She is watching us.
13 D MIRIAM: Why would she do that?
14 D LOUELLA: Because she wanted us to find the key, and now she wants to see what we do with it.
15 A ¶ Fiona and Miriam both glance up.
* 16 A The dome is empty, except for the flashlights.
17 A Louella pockets the key.
18 D FIONA: Shall I call it in?
19 D LOUELLA: Not yet. Let her think she has the night to herself.
