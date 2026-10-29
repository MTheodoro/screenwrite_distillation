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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0136.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01159 | INT. DIAMOND MERCHANT'S BOARDROOM - NIGHT
Detected names (may be incomplete or contain aliases): JEWELER, FLORENCE, NICO, ABRAHAM
* 1 A ¶ Walnut paneling, a table the length of a hearse, a single green-shaded lamp.
* 2 A Rain on tall windows.
* 3 A Under the lamp, a velvet cloth.
* 4 A On it, a diamond the size of a plum.
5 A ¶ A JEWELER (70s, loupe on a ribbon, trembling hands, an immaculate black suit) stands behind the table, polishing the stone with a chamois.
6 A Across from him sit FLORENCE (40s, severe bob, gray gloves, black coat buttoned to the throat) and NICO (30s, hoodie under a blazer, a nervous habit of rolling a ring on his thumb).
7 A ¶ The Jeweler lifts the stone.
* 8 A Light cuts through it, throws a rainbow onto the wall, and for a moment the room is a cathedral.
9 D JEWELER: Three hundred and eleven carats. Rough, it weighed six hundred.
10 D FLORENCE: A good cut.
11 D JEWELER: A good cut is the difference between a stone and a legend.
12 D NICO: It's beautiful, Mr. Silverman.
13 D JEWELER: Abraham. Please. Nobody has called me Mr. Silverman since my wife died.
14 D FLORENCE: Abraham, then. Shall we discuss the price?
15 D ABRAHAM: Of course.
16 A ¶ He sets the diamond back on its cloth.
17 A He sits.
18 A His hands, which had trembled, are now perfectly still.
19 D ABRAHAM [CONT'D]: My understanding is that you represent a buyer in Antwerp.
20 D FLORENCE: We represent several.
21 D ABRAHAM: But only one with the money.
22 D FLORENCE: The buyer will pay fifty million, in escrow, on delivery.
23 D ABRAHAM: Delivery where?
24 D FLORENCE: Where you specify.
25 D ABRAHAM: Here.
26 D NICO: Here?
27 D ABRAHAM: Here. This room. Tonight.
28 A ¶ Nico glances at Florence.
29 A Florence doesn't move.
30 D FLORENCE: That wasn't the arrangement.
31 D ABRAHAM: The arrangement has changed. I find, in my old age, that I enjoy having my business conducted in a room I trust.
32 D FLORENCE: Mr. Silverman...
33 D ABRAHAM: Abraham.
34 D FLORENCE: Abraham. We are trying to be reasonable.
35 D ABRAHAM: So am I. I am sixty-nine years old. I have outlived two wives and three partners. I know what a man looks like when he is about to rob me.
* 36 A ¶ Silence.
37 A Nico stops rolling the ring.
38 A Florence tilts her head, an inch, no more.
39 D FLORENCE: And do I look like a man?
40 D ABRAHAM: You look like someone who has read the floor plan.
41 D NICO: Florence.
42 D FLORENCE: Quiet.
43 D ABRAHAM: Please. I would hate to be rude. But you will notice that the lamp is the only light in the room.
44 A ¶ Florence looks up.
* 45 A The windows have gone dark.
* 46 A The curtains are drawn.
* 47 A At the door, a soft click: the deadbolt.
48 D ABRAHAM [CONT'D]: Nico, may I call you Nico?
49 D NICO (thin): Yes.
50 D ABRAHAM: You have a very nice face. I would hate for it to be on the news.
51 A ¶ Nico stands.
* 52 A His chair scrapes.
53 A Florence puts a hand on his arm, firm.
54 D FLORENCE: Sit.
55 D NICO: He knows.
56 D FLORENCE: Of course he knows. He's known since Tuesday.
57 A ¶ She turns to Abraham.
58 A For the first time, she smiles.
59 D FLORENCE [CONT'D]: So tell me, Abraham. What do you want?
60 D ABRAHAM: Thirty percent.
61 D FLORENCE: Of what?
62 D ABRAHAM: Of whatever you were going to take.
* 63 A ¶ A long beat.
64 A Florence peels off one glove, finger by finger.
65 A Lays it on the velvet beside the diamond.
66 D FLORENCE: Twenty.
67 D ABRAHAM: Twenty-five, and I stay out of the photograph.
68 D FLORENCE: Done.
69 A ¶ She extends her bare hand.
70 A Abraham takes it.
* 71 A The lamp flickers, and the stone throws its rainbow across all three of them.

### SCENE s01160 | INT. OBSERVATORY - DOME ROOM - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR ELLWOOD, VELMA
* 1 A ¶ A round chamber of brass and iron.
* 2 A A huge telescope tilts toward a slit in the dome.
* 3 A Charts pinned to the walls.
* 4 A A cold teapot on a drafting table.
5 A ¶ PROFESSOR ELLWOOD (60s, cardigan, ink-stained fingers) bends over a ledger, writing in small, careful figures.
6 A He hums.
* 7 A ¶ The floor creaks on the stair.
8 A He doesn't look up.
9 D ELLWOOD: Third night running.
* 10 A ¶ Nobody answers.
11 A He turns a page.
12 D ELLWOOD [CONT'D]: You needn't hover. If you've come about the missing plates, they're in the cabinet.
13 A ¶ A hand appears on the railing.
14 A VELMA (30s, long coat, a thin leather satchel, hair damp from the rain) steps into the lamplight.
15 D VELMA: Professor Ellwood?
16 D ELLWOOD: That depends on who's asking.
17 D VELMA: Velma Tran. From the Royal Society.
18 D ELLWOOD: Ah.
19 A ¶ He caps his pen.
20 A Rises.
21 A Smooths his cardigan.
22 D ELLWOOD [CONT'D]: You're early.
23 D VELMA: You were expecting me?
24 D ELLWOOD: I was expecting someone. They always send a young person to deliver bad news.
25 D VELMA: I'm not here to deliver bad news.
26 D ELLWOOD: No?
27 D VELMA: I'm here about the comet.
28 A ¶ Ellwood pauses.
29 A He crosses to the telescope and runs a hand along its brass flank.
30 D ELLWOOD: Which comet?
31 D VELMA: The one you didn't report.
32 D ELLWOOD: I report everything.
33 D VELMA: Not this one.
34 A ¶ She opens the satchel and lays three photographic plates on the drafting table beside the teapot.
35 A Ellwood doesn't look at them.
36 D ELLWOOD: Those plates were stolen.
37 D VELMA: They were mailed to us anonymously.
38 D ELLWOOD: By whom?
39 D VELMA: We were hoping you could tell us.
40 A ¶ Ellwood chuckles softly and sits on the edge of the table.
41 D ELLWOOD: Miss Tran, I have been observing this sky for forty years. I have discovered two comets, one nova, and a rather embarrassing asteroid that turned out to be a pigeon.
42 D VELMA: That's a long career.
43 D ELLWOOD: It has been a quiet one.
44 D VELMA: Until August.
45 D ELLWOOD: Until August.
46 A ¶ He picks up the nearest plate and holds it to the lamp.
* 47 A A tiny streak crosses the black field.
48 D ELLWOOD [CONT'D]: It was moving the wrong way.
49 D VELMA: Yes.
50 D ELLWOOD: Against everything we know about orbits.
51 D VELMA: Yes.
52 D ELLWOOD: So I assumed my instruments were broken.
53 D VELMA: Were they?
54 D ELLWOOD: No.
55 A ¶ He places the plate down.
56 A Looks at her for a long time.
57 D ELLWOOD [CONT'D]: Would you like tea?
58 D VELMA: Is it hot?
59 D ELLWOOD: It is not. But it is traditional.
60 A ¶ Velma laughs, a short surprised sound.
61 A She takes off her damp coat and sets it on the chair.
62 D VELMA: Yes, Professor. I would.

### SCENE s01161 | INT. CANDLELIT SALON - NIGHT - 1789
Detected names (may be incomplete or contain aliases): CAPTAIN LUCIEN, SERGEANT ROQUE, MADAME OUDIN
* 1 A ¶ Red velvet, gilt mirrors, a card table scattered with coins.
* 2 A A door ajar to a dark corridor.
* 3 A Outside, a mob's murmur rises like surf.
4 A ¶ CAPTAIN LUCIEN (30s, powdered wig, frayed uniform) holds a rapier.
5 A Across the table stands SERGEANT ROQUE (40s, scarred cheek, soldier's pistol).
6 A Between them, trembling under a lace shawl, MADAME OUDIN (60s, rouged, jeweled fingers) clings to the back of a chair.
7 A ¶ They freeze.
8 A All three.
* 9 A Candle flames waver.
10 D LUCIEN: Roque. Lower it.
11 D ROQUE: Not till he drops the blade.
12 D LUCIEN: He won't.
13 D ROQUE: Then neither will I.
14 A ¶ Madame Oudin lets out a thin whimper.
* 15 A The mob outside surges.
* 16 A A bottle shatters against the shutters.
17 D LUCIEN: Madame, behind me.
18 A ¶ She scrambles to him.
19 A Roque tracks her with the pistol.
20 A Lucien shifts the rapier a hair, covering her.
21 A Roque advances one step.
22 A Lucien retreats, shoving the table.
* 23 A Coins ring on the floor.
24 A ¶ They lunge together.
* 25 A Steel meets steel and clashes against the pistol barrel.
* 26 A A shot cracks.
* 27 A The mirror shatters.
28 A All three flinch.
* 29 A ¶ Silence.
* 30 A Smoke drifts.
* 31 A No one has fallen.
32 D MADAME OUDIN (a whisper): Oh, my.
* 33 A ¶ In the corridor, boots pound closer.

### SCENE s01162 | INT. BLACKSMITH'S SHOP - TOWN OF DRY CREEK - DAY
Detected names (may be incomplete or contain aliases): MARSHAL WEBB, LAURENT, DOC AMBROSE, SISSY
* 1 A ¶ A low-beamed smithy.
* 2 A A forge glows orange in the back; hammers and tongs hang from the wall like surgical tools.
* 3 A Heat shimmers off the anvil.
* 4 A Through the open double door, a dusty street baking in the sun, a horse tied to a rail, a church steeple, and a single wooden gallows frame at the far end of town, no rope yet.
5 A ¶ MARSHAL WEBB (50s, long duster, tarnished star, a face the color of saddle leather) sits on a barrel, loading shells into a shotgun one at a time.
* 6 A The metallic click is steady and unhurried.
7 A ¶ LAURENT (40s, the smith, leather apron, forearms scarred by a thousand burns) works the bellows, eyes on the coals.
8 A He hasn't spoken since the Marshal walked in.
9 A ¶ DOC AMBROSE (60s, black frock coat, round spectacles, a physician's bag) leans in the doorway, polishing his glasses on a handkerchief.
10 A ¶ SISSY (teen, calico dress, a bundle of laundry on her hip) stands behind the anvil, glancing between the men.
11 D WEBB: How long till the horses are shod?
12 D LAURENT: Three hours.
13 D WEBB: I need them in two.
14 D LAURENT: Then you need another smith.
15 A ¶ Webb clicks another shell home.
16 A Laurent pulls the bellows.
* 17 A Sparks dance.
* 18 A The heat builds.
19 D DOC AMBROSE: Gentlemen. It's a hot day.
20 D WEBB: Doc, stay out of it.
21 D DOC AMBROSE: I only observe that tempers rise with the temperature.
22 D LAURENT (to the coals): Then close the door and let him cook.
23 A ¶ Sissy shifts her bundle and takes a half-step toward the door.
24 D WEBB: Girl. Stay put.
25 D SISSY: My mother expects me.
26 D WEBB: Your mother can wait.
27 A ¶ Sissy stops.
* 28 A The bellows sigh.
29 A Webb finishes loading, snaps the shotgun shut, and rests it across his knees.
30 D WEBB [CONT'D]: Laurent. The Tarrant boys will be in town by sundown.
31 D LAURENT: I heard.
32 D WEBB: You were their father's friend.
33 D LAURENT: I shod their father's mule. That's not friendship.
34 D DOC AMBROSE: It is, in these parts.
35 D WEBB: They want the man we've got in the jail.
36 D LAURENT: Then give him to them.
37 D WEBB: He's a murderer.
38 D LAURENT: So are they.
39 A ¶ Webb stands.
40 A Slowly.
41 A He walks to the forge, holding the shotgun at his hip, and looks down at the coals.
* 42 A The orange light carves his face into hard planes.
43 D WEBB: I'm not giving anyone to anyone, Laurent. I'm asking you to put a shoe on a horse so I can ride out and meet them in daylight.
44 D LAURENT: And if you don't come back?
45 D WEBB: Then the shoe wasn't any good.
46 A ¶ Laurent lifts a glowing horseshoe from the coals with tongs.
47 A Webb doesn't flinch.
48 A The metal hisses as Laurent drops it on the anvil and raises his hammer.
49 D DOC AMBROSE (quietly): If I might suggest, Marshal, the gallows could use a rope.
50 D WEBB: I know what the gallows needs.
51 A ¶ The hammer falls.
* 52 A Once.
* 53 A Twice.
54 A Sissy flinches at the clang.
* 55 A Outside, a dog barks and a distant bell tolls the hour.
56 A Webb sets the shotgun down on the anvil.
57 D WEBB [CONT'D]: Laurent. After this one, shoe them all.
58 D LAURENT: I will.
* 59 A ¶ The hammer swings again, steady as a heartbeat, and the heat in the smithy builds and builds.

### SCENE s01163 | INT. EMERGENCY ROOM - TRAUMA BAY ONE - NIGHT
Detected names (may be incomplete or contain aliases): AGNES FALK, NURSE DESHAWN, PARAMEDIC LU, RESIDENT OTTO, BELLWEATHER, ASHFORD
* 1 A ¶ Harsh light.
* 2 A Beeping monitors.
* 3 A A gurney in the center, a man under a blood-soaked sheet.
4 A ¶ DR. AGNES FALK (40s, scrubs, loupes pushed up on her head) cuts away a sleeve.
5 A NURSE DESHAWN (30s, gloves to the elbow) hangs a bag of saline.
6 A PARAMEDIC LU (30s, vest, radio on shoulder) pumps the chest.
7 A RESIDENT OTTO (20s, pale, shaking) fumbles with a central line kit.
8 A The patient, MR. BELLWEATHER (70s, gray stubble, oxygen mask), gasps.
9 D FALK: Pressure?
10 D DESHAWN: Seventy over forty.
11 D FALK: Otto, line.
12 D OTTO: Yes, Doctor. Trying.
13 D FALK: Try faster.
14 D LU: Sinus tach. He's crashing.
15 D BELLWEATHER (muffled): Don't... let me...
16 D FALK: Stay with us, Mr. Bellweather.
* 17 A ¶ Alarm.
* 18 A The monitor flatlines.
19 A Lu's hands lock on the chest.
20 A Falk grabs the paddles.
21 D FALK [CONT'D]: Charge to two hundred. Clear.
22 A ¶ Everyone steps back.
23 A The body jolts.
* 24 A The line wobbles.
* 25 A Wobbles.
* 26 A Steadies.
27 D DESHAWN: We have a rhythm.
28 D OTTO (exhaling): Oh, thank God.
29 D LU: Doctor, he's coding again.
30 D FALK: Again.
31 A ¶ Another jolt.
* 32 A The curtain parts.
33 A DR. ASHFORD (50s, silver hair, a surgeon's cap, calm as ice) steps in, tying a mask behind his head.
34 D ASHFORD: I'll take over, Dr. Falk.
35 D FALK: Dr. Ashford? He's mine.
36 D ASHFORD: Not anymore. Otto, step aside.
37 A ¶ Otto drops the line kit and flattens himself against the wall.
38 A Ashford takes the paddles from Falk with a gentle but absolute hand.
39 D ASHFORD [CONT'D]: Charge three-sixty.
40 D DESHAWN: Charged.
41 D ASHFORD: Clear.
42 A ¶ The body arches.
* 43 A The monitor sings.
44 A Falk lets out a breath, and for the first time looks at her own trembling hands.

### SCENE s01164 | INT. CORPORATE EXECUTIVE SUITE - BOARDROOM - DAY
Detected names (may be incomplete or contain aliases): DIRECTOR PENROSE, WALDO, SADIE, GREER, CFO, TAMARA
* 1 A ¶ A polished glass table.
* 2 A Leather chairs.
* 3 A A panoramic window onto a gray skyline.
* 4 A In the corner, a speakerphone the size of a pie.
5 A ¶ DIRECTOR PENROSE (60s, silver suit, rimless glasses) sits at the head of the table, hands steepled.
6 A WALDO (40s, VP of Synergy, pastel tie) shuffles papers to his right.
7 A SADIE (20s, intern, a cheap blazer) stands behind him holding a tray of lukewarm coffees.
8 A GREER (50s, CFO, pearl necklace) sits to Penrose's left, perfectly still.
* 9 A ¶ A sleek black speakerphone on the table glows green.
* 10 A A woman's voice, crisp and flat, emerges.
11 D TAMARA [V.O.] (speakerphone): Mr. Penrose, I have the board on line two.
12 D PENROSE: Hold them, Tamara.
13 D TAMARA [V.O.] (speakerphone): They said it's urgent.
14 D PENROSE: Everything is urgent. Hold them.
15 D TAMARA [V.O.] (speakerphone): Yes, sir.
16 A ¶ Waldo smiles at Greer.
17 A Greer does not smile back.
18 A Sadie slides a coffee in front of Penrose.
19 A He doesn't touch it.
20 D WALDO: Director, I believe we're all aligned on the quarterly...
21 D PENROSE: Waldo.
22 D WALDO: Yes?
23 D PENROSE: Are the numbers real?
24 D WALDO: They're, uh... aspirational.
25 D PENROSE: Greer?
26 D GREER: They're numbers.
27 A ¶ Penrose lifts the coffee.
28 A Sniffs.
29 A Sets it back down.
30 A Sadie stands rigid.
31 A Beads of sweat form at Waldo's hairline.
32 D TAMARA [V.O.] (speakerphone): Mr. Penrose, line two is insisting.
33 D PENROSE: Put them through.
* 34 A ¶ A click.
* 35 A A burst of voices.
* 36 A The speakerphone lights red.
37 A Greer closes her folder.
38 A Waldo tugs at his pastel tie.
39 D PENROSE [CONT'D]: Good morning, gentlemen.
40 A ¶ Penrose rises, walks to the window, hands behind his back.
41 A He stares out at the skyline.
42 A Behind him, Waldo whispers something to Sadie.
43 A Sadie nods too fast.
44 D WALDO (low, to Sadie): Get me a glass of water.
45 D SADIE: There's coffee.
46 D WALDO: Water. Now.
47 A ¶ She hurries out.
* 48 A The door closes.
* 49 A The speakerphone drones on, a muffled crowd of men reading numbers aloud.
50 D GREER: Director.
51 D PENROSE: Yes, Greer.
52 D GREER: Whatever you intend to do, do it before the lunch hour.
53 A ¶ Penrose turns from the window.
54 A For the first time, he smiles.
55 D PENROSE: Waldo. Come here.
56 A ¶ Waldo stands.
57 A His knees pop.
58 A He walks around the table, unsteady, to the window.
59 A Penrose puts a hand on his shoulder and points down at the street, thirty floors below.
60 D PENROSE [CONT'D]: Look at them.
61 D WALDO: At... the pedestrians?
62 D PENROSE: That is what real numbers look like.
63 A ¶ Waldo stares.
64 A Greer folds her hands.
* 65 A On the speakerphone, someone coughs, and the voices stop.
* 66 A The whole room hangs.
67 A Penrose lifts his hand from Waldo's shoulder, and presses a button on the wall.
* 68 A The glass table slowly begins to tilt.

### SCENE s01165 | INT. INSURANCE CLAIMS DEPARTMENT - NIGHT
Detected names (may be incomplete or contain aliases): NEW HIRE, BERNADETTE, FELIX
* 1 A ¶ Rows of gray cubicles stretching into dimness.
* 2 A A single bank of fluorescents hums over the far corner.
* 3 A The rest of the floor is dark, the monitors asleep.
* 4 A Rain streaks the windows.
5 A ¶ A NEW HIRE (20s, brand-new lanyard, stiff shirt, a cardboard box of personal items still taped shut) stands at a cubicle entrance, reading a laminated card.
6 A ¶ BERNADETTE (50s, cardigan, headset around her neck, the posture of someone who has sat in the same chair for twenty-five years) rolls out of the next cubicle on her wheeled chair, startling him.
7 D BERNADETTE: You're the new one.
8 D NEW HIRE: Yes, ma'am. I start tomorrow. They said to come and see the desk.
9 D BERNADETTE: It's eleven o'clock at night.
10 D NEW HIRE: I couldn't sleep.
11 D BERNADETTE: Nobody does, the first week.
12 A ¶ She turns on a small desk lamp.
* 13 A The pool of light shows a photograph of two children pinned to the cubicle wall, edges curled and sun-bleached.
14 A The New Hire sets his box on the desk.
15 D NEW HIRE: Is this mine?
16 D BERNADETTE: It was Harold's.
17 D NEW HIRE: What happened to Harold?
18 D BERNADETTE: He retired.
19 D NEW HIRE: That's nice.
20 D BERNADETTE: He didn't mean to.
21 A ¶ The New Hire's smile falters.
22 A Bernadette picks at the arm of her chair.
23 D BERNADETTE [CONT'D]: What's your name, dear?
24 D NEW HIRE: Felix.
25 D BERNADETTE: Felix. That's a good name. Lucky.
26 D FELIX: I've never felt lucky.
27 D BERNADETTE (a thin smile): That's how you know it's working.
28 A ¶ She rolls to the window.
29 A Looks at the rain.
30 A Behind her, Felix opens the box.
31 A He takes out a small cactus in a clay pot, sets it on the desk.
32 A Then a framed diploma.
33 A He hangs it, crookedly, on the cubicle wall.
34 D BERNADETTE [CONT'D]: Do you know what we do here?
35 D FELIX: Claims. Processing claims.
36 D BERNADETTE: We say no, Felix. That's what we do. We find the reason, and we say no.
37 D FELIX: They told me we help people.
38 D BERNADETTE: We help people feel they've been heard.
39 A ¶ Felix straightens the diploma.
* 40 A It tilts again.
41 A He leaves it.
42 A He sits in the chair and gives it a small experimental spin.
43 D FELIX: Is it hard?
44 D BERNADETTE: The first year, yes. After that you get a callus.
45 D FELIX: On what?
46 D BERNADETTE: Wherever it hurts.
* 47 A ¶ A long pause.
* 48 A The rain eases.
49 A Felix looks at the photograph of the two children.
50 D FELIX: Is that Harold's family?
51 D BERNADETTE: It's mine.
52 D FELIX: Oh. I'm sorry. I thought...
53 D BERNADETTE: It's all right. They're grown. They don't call.
54 A ¶ She wheels back toward her cubicle, stops at the entrance, and looks over her shoulder.
55 D BERNADETTE [CONT'D]: Felix. If you decide to leave, don't wait twenty-five years. Leave in the first week.
56 D FELIX: Is that advice?
57 D BERNADETTE: It's a courtesy.
58 A ¶ She goes.
59 A Felix sits in the dim lamplight, the cactus at his elbow, the diploma crooked above him.
* 60 A In the next cubicle, a kettle clicks on.
61 A He doesn't move for a long time.

### SCENE s01166 | EXT. FROZEN LAKE - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, CALEB, INES
* 1 A ¶ Starlight on black ice.
* 2 A A hundred yards of nothing in every direction.
* 3 A Wind drags snow in low serpents across the surface.
4 A ¶ A WOMAN (30s, hooded parka, ice axe in one fist, a rucksack on her back) crosses the lake, stepping with care, testing each footfall.
* 5 A Her breath fogs the air.
6 A ¶ Fifty yards behind her, CALEB (30s, bare-headed, no gloves, a blue lip) staggers after, one arm hugging his chest.
7 D CALEB: Wait!
8 A ¶ She stops.
9 A Turns.
10 A Doesn't answer.
11 D CALEB [CONT'D]: Please. I can't feel my feet.
12 D WOMAN: Then walk faster.
13 A ¶ He stumbles closer.
14 A She plants the ice axe and waits, wary.
15 D CALEB: You're the first person I've seen in two days.
16 D WOMAN: You're lucky it was me.
17 D CALEB: Why?
18 D WOMAN: The last one I saw tried to take my pack.
19 A ¶ Caleb stops six feet away.
20 A He raises both hands, palms open, shaking.
21 D CALEB: I'm not going to rob you. I'm going to die if you don't help me.
22 D WOMAN: That's two different problems.
23 D CALEB: Do you have anything to drink?
24 A ¶ She hesitates.
25 A Then unslings her pack, pulls out a flask, and tosses it across the gap.
26 A He catches it, fumbles, drops it, and picks it up again in clumsy fingers.
27 A He drinks.
28 A Coughs.
29 A Drinks.
30 D CALEB [CONT'D]: God. What is that?
31 D WOMAN: Schnapps.
32 D CALEB: It's wonderful.
33 D WOMAN: It's terrible. But it's warm.
34 A ¶ He lowers the flask, wipes his mouth on his sleeve.
35 A Hands it back.
36 D CALEB: My name's Caleb. Caleb Hurley.
37 D WOMAN: I didn't ask.
38 D CALEB: I'm telling you anyway. In case.
39 D WOMAN: In case of what?
40 D CALEB: In case somebody finds me.
41 A ¶ She studies him a moment.
* 42 A The wind bites.
43 A Somewhere out on the ice, a deep crack booms, and both of them flinch.
* 44 A The surface shifts beneath their feet.
45 D WOMAN (sharp): Don't move.
46 D CALEB: I'm not.
47 D WOMAN: Spread your weight. Lie flat.
48 A ¶ He drops to his belly, then spreads his arms.
49 A She does the same, ten feet away, sliding the axe out in front of her.
* 50 A The crack booms again, longer.
* 51 A Water seeps up along a seam between them.
52 D CALEB: Is it going?
53 D WOMAN: It might.
54 D CALEB: Say something.
55 D WOMAN: What?
56 D CALEB: Anything. Your name.
* 57 A ¶ A pause.
* 58 A The ice groans.
59 D INES (finally): Ines.
60 D CALEB: Ines. That's pretty.
61 D INES: Shut up and crawl.
62 A ¶ They begin to inch toward the far shore, side by side, hauling themselves along on their elbows.
* 63 A The seam spreads behind them, black water racing across the white.
64 A Ines glances at it and doesn't stop.
65 A Caleb laughs, a cracked giggle born of terror.
66 D CALEB: Ines! We're going to make it!
67 D INES: Don't say that.
68 A ¶ They reach the shallows.
* 69 A The ice thickens.
70 A She hauls him up by the collar, and they stand, panting, on solid ground at the edge of a pine forest.
* 71 A Behind them, with a sound like a slow gunshot, the whole sheet they crossed splits and sinks.
72 A ¶ Caleb stares.
73 A Ines hands him the flask again.
74 A He takes it, drinks, and passes it back.
* 75 A Neither speaks.
76 A They stand there, steaming, listening to the lake fall quiet.

### SCENE s01167 | INT. UNDERGROUND PARKING GARAGE - SPEED CLIMBING WALL - NIGHT
Detected names (may be incomplete or contain aliases): SOLENE DUBOIS
* 1 A ¶ A concrete bunker converted to a training gym.
* 2 A Fluorescent tubes.
* 3 A Rubber matting.
* 4 A A forty-foot climbing wall bristling with colored holds, chalk dust drifting like smoke.
* 5 A A battered boombox sits on a plastic crate, cassette tape turning.
6 A ¶ SOLENE DUBOIS (20s, tank top, taped fingers, chalk bag on her hip) stands at the base of the wall.
7 A She rolls her neck, shakes out her arms, then bends and kisses the knuckles of each hand.
* 8 A ¶ A stopwatch hangs from her wrist.
* 9 A Beside the wall a laminated sign reads: RECORD 5.48.
10 A ¶ She presses START on the stopwatch and slaps the first hold.
11 A She climbs.
12 A Her body flows up the wall, forearms flexing, toes smearing on the foot chips, her left hand swatting a hold while her right hand already reaches for the next.
* 13 A Chalk bursts off her fingers.
14 A She doesn't breathe.
15 A She doesn't look down.
16 A ¶ At the midpoint, she swings her weight out, catches a sloper with her fingertips, and one of her feet slips.
17 A She hangs by one hand for a half-second, her whole body swinging out over the mat, and then her foot finds the chip again and she surges upward, past the crux, past the red hold, past the yellow, and slaps the top button.
* 18 A The timer chirps.
19 A ¶ She drops.
20 A Lands in a crouch on the mat.
21 A Looks at the watch.
22 D SOLENE (reading): Five-fifty-one.
23 A ¶ She sits down hard on the mat, breath ragged, forehead against her knees.
* 24 A The boombox cassette clicks and flips to the B side.
* 25 A A man's voice, warm, gravelly, slightly distorted, starts up from the speakers.
* 26 A A recording.
27 D SOLENE [V.O.] (recording, her own voice, younger): Solene, it's you. I know you're going to listen to this at two in the morning because you never sleep before a final. I want you to remember the third hold from the top. You always rush it. Breathe there. One breath. The wall will wait for you.
28 A ¶ Solene lifts her head.
29 A She looks at the boombox, then up at the wall.
30 D SOLENE [V.O., CONT'D] (recording): And remember. You are not climbing against the clock. You are climbing against yesterday's Solene. She was good. Be better.
* 31 A ¶ The tape clicks off.
* 32 A Silence.
33 A Solene wipes her eyes with a chalky wrist, leaving a white streak across her cheek.
34 A She stands.
35 A Shakes out her hands.
36 A Chalks up.
37 A Walks back to the wall.
38 D SOLENE (muttering): One breath.
39 A ¶ She presses START.
40 A She slaps the first hold.
41 A She climbs.
* 42 A The timer ticks.
43 A She reaches the midpoint, reaches the sloper, and this time doesn't slip.
44 A At the third hold from the top, she pauses.
45 A One breath.
46 A In.
47 A Out.
48 A Then she surges up and slaps the button.
49 A ¶ She drops.
50 A Looks at the watch.
51 D SOLENE [CONT'D]: Five forty-seven.
52 A ¶ Her mouth cracks into a grin.
53 A She pumps one fist in the empty air, then another.
54 A She turns to the boombox and lifts it from the crate, clutching it against her chest as the tape spools slowly backward.

### SCENE s01168 | INT. COMMUNITY THEATRE - GREEN ROOM - NIGHT
Detected names (may be incomplete or contain aliases): FRANCO, DOT, BIFF, LUPE, ROMY
* 1 A ¶ A windowless closet crammed with costumes, a cracked mirror ringed by bulbs, a coffee maker leaking onto a pile of scripts.
2 A ¶ FRANCO (50s, director, silk scarf, three pairs of glasses on his head) paces in front of the mirror reading cue cards while DOT (60s, stage manager, headset, cardigan with a pen in every pocket) mends a lace collar and bites off a thread, BIFF (30s, lead actor, half-dressed in a pirate costume, one boot on) hops across the room searching for the other boot, LUPE (20s, props girl, glitter on her cheeks) sorts a bucket of fake swords by color, and ROMY (teen, ingenue, sequin bodice) crouches in the corner reciting her lines to a stuffed parrot.
3 D FRANCO: Five minutes to curtain!
4 D DOT: Franco, it's thirty.
5 D FRANCO: Then thirty minutes of panic! Where's my pirate?
6 D BIFF: I'm right here! I can't find my boot!
7 D LUPE: It's under the coffee machine.
8 D BIFF: Why is it under the coffee machine?
9 D ROMY (to the parrot): "Captain, I beg you, do not leave me."
10 D DOT: Romy, honey, say it to the person.
11 D ROMY: The parrot's more supportive.

### SCENE s01169 | INT. ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): HECTOR, BEA, ^BEA
* 1 A ¶ A cramped steel box.
* 2 A Muzak.
* 3 A Floor numbers blinking: 14, 13, 12.
4 A ¶ HECTOR (30s, wrinkled suit, a cake box balanced on one palm) leans in the corner, humming.
5 A BEA (30s, hospital badge, tote bag, a bouquet of sunflowers) stands near the doors, checking her phone.
* 6 A ¶ Floor 11.
* 7 A The lights flicker.
* 8 A The elevator jerks to a halt.
9 D HECTOR: Oh no.
10 D BEA: No no no no.
11 A ¶ Both lunge for the panel.
12 A Their hands collide on the emergency button.
13 A They freeze.
14 A Stare at each other.
15 D HECTOR: Sorry.
16 D BEA: You first.
17 D HECTOR: No, you.
18 D HECTOR: I'll push it.
19 D ^BEA: I'll push it.
20 A ¶ They stop.
21 A He pulls his hand back.
22 A She presses the button.
* 23 A A buzzer rasps, and then silence.
24 D HECTOR (to himself): Of course.
25 D BEA (to the ceiling): Hello? Anyone?
* 26 A ¶ Nothing.
27 A Hector sets the cake box on the floor and sits beside it.
28 A Bea sighs and sits too.
29 A He opens the lid and offers her a fork.

### SCENE s01170 | INT. DEFUNCT PLANETARIUM - DOME CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): INES MARCHETTI, TOBY WREN, KOFI ADEYEMI-BELL, RADIO, NIGHT GUARD
* 1 A ¶ Dust hangs in a single flashlight beam.
* 2 A A cracked star projector squats at the center like a dead insect.
3 A ¶ INES MARCHETTI (30s, lean, gloved) kneels at the projector's base, a drill whining in her hands.
4 A TOBY WREN (20s, nervous, oversized hoodie) holds the light and keeps glancing at the exit.
5 A KOFI ADEYEMI-BELL (50s, broad, patient) feeds cable from a spool through a panel in the floor.
6 D INES: Hold it still.
7 D TOBY: I am holding it still.
8 D INES: You're holding it like a wet cat.
9 A ¶ The drill bites through.
* 10 A A brass plate drops and rings across the floor.
11 A All three freeze.
* 12 A ¶ A RADIO crackles on Kofi's belt.
13 D NIGHT GUARD [V.O.] (over radio, bored): Dome's quiet. Any of you hear that?
14 A ¶ Kofi thumbs the key slowly.
15 D KOFI (into radio, flat): Pipes. Same as every night.
16 D NIGHT GUARD [V.O.]: Copy. Pipes.
17 A ¶ Kofi releases the key.
18 A Toby exhales.
19 A Ines does not look up.
20 D INES: Cable.
21 A ¶ Kofi passes the cable.
22 A Ines threads it into the hole, seats the connector, and the projector's casing opens with a sigh.
* 23 A Inside, wrapped in velvet, a silver sphere the size of a grapefruit.
24 D TOBY: That's it?
25 D INES: That's it.
26 A ¶ Toby reaches.
27 A Ines slaps his wrist.
* 28 A Boots echo in the corridor outside.
29 A The three of them kill the light and drop flat behind the projector.
30 A Kofi pulls the velvet over the sphere with one hand and presses Toby's head down with the other.
31 D NIGHT GUARD [V.O.] (over radio, closer): Dome, this is Marsh. I'm at the door.
* 32 A ¶ The door handle turns.
33 A Ines slides a blade from her sleeve.
34 A Toby grabs Kofi's sleeve.
35 A Kofi quietly lifts a fire extinguisher off the floor, and the three of them hold their breath as the door swings inward half a foot, a wedge of hallway light cutting across the carpet and stopping inches from Ines's boot.
36 D NIGHT GUARD [V.O.] (muttering): Pipes.
* 37 A ¶ The door closes.
* 38 A Footsteps fade.
39 D KOFI (whisper): Ninety seconds. Then we move.
40 D INES: Sixty.
41 A ¶ They scatter toward the loading dock, the sphere gone, the dome black.

### SCENE s01171 | INT. DECOMMISSIONED LIGHTHOUSE - LAMP ROOM - DAY
Detected names (may be incomplete or contain aliases): VERB, PRISCILLA OKONKWO-HALE, GIGGLES, LINDQVIST, MARISOL TREJO, BARNABY FIELD, DEEPA RAMANATHAN, HOLLIS PYM
* 1 A ¶ Salt-fogged glass wraps the room in a cold white glare.
* 2 A Six folding chairs have been arranged in a circle around the great Fresnel lens, as though the lens itself were the facilitator.
* 3 A A flip chart reads, in bubbly marker: "SYNERGY IS A VERB."
4 A ¶ PRISCILLA OKONKWO-HALE (50s, silk scarf, lanyard worn like a medal) stands beside the flip chart with a laser pointer.
5 A GREGOR "GIGGLES" LINDQVIST (40s, never once seen laughing) slumps in the nearest chair.
6 A MARISOL TREJO (30s, spreadsheet-pale) clutches a gluten-free muffin.
7 A BARNABY FIELD (60s, tie knotted for a funeral) reads the safety placard on the wall.
8 A DEEPA RAMANATHAN (30s, sharp, phone face-down on her knee) watches the door.
9 A HOLLIS PYM (20s, intern, sunburned already) hugs a box of markers.
10 D PRISCILLA: Okay, team. Check-in. One word for how you're showing up today. Gregor, let's start with you.
11 D GIGGLES: Present.
12 D PRISCILLA: That's not a feeling, Giggles.
13 D GIGGLES: It's the only one I'm contractually obliged to have.
14 D MARISOL: Priscilla, the ferry doesn't come back until six. Is that right? Because the booking said "overnight optional."
15 D PRISCILLA: Marisol, the beauty of an island is that we're all optional together.
16 D BARNABY: Priscilla, with respect, the placard says the gallery railing is rated for four persons. We are six, plus the lens.
17 D DEEPA: Barnaby, the lens doesn't count as a person.
18 D BARNABY: Deepa, it has more seniority than Hollis.
19 D HOLLIS: That's fair, Barnaby. Honestly, that's fair.
20 D PRISCILLA: Hollis, sweetheart, I need you to stay in your lane and also grow.
21 D HOLLIS: Which lane is that, Priscilla?
22 D PRISCILLA: The one with the markers.
23 D DEEPA: Giggles, did you read the pre-work? Because I read the pre-work, and the pre-work said we'd be "dismantling silos," and I don't see a single silo, I see a lighthouse.
24 D GIGGLES: Deepa, a lighthouse is just a silo with ambitions.
25 D MARISOL: Giggles, that's the nicest thing you've said all quarter.
26 D GIGGLES: Marisol, it wasn't nice. It was accurate.
27 D PRISCILLA: Everyone, eyes up. Barnaby, put the placard down. Deepa, phone. Marisol, muffin. Hollis, marker. Giggles, whatever that is, stop.
28 D BARNABY: Priscilla, I would like it noted that I have been with this company for thirty-one years and have never once been asked to hold a marker.
29 D PRISCILLA: Noted, Barnaby. Noted and parked.
30 D DEEPA: Parked where? There's no parking. It's an island.

### SCENE s01172 | INT. NIGHT FERRY - TABLE-TENNIS CABIN - NIGHT
Detected names (may be incomplete or contain aliases): AKIKO SATO, RUSLAN BEKOV, MAEVE DONNELLY, LEOPOLD HUBER, NADIA FARAH, BIG ED VANCE
* 1 A ¶ The floor tilts a few degrees with every swell.
* 2 A A green table is bolted to the deck, its net held up by two bungee cords.
* 3 A Rain ticks on the portholes.
* 4 A Fluorescent tubes buzz overhead.
5 A ¶ AKIKO SATO (19, wiry, a towel around her neck she never uses) stands at one end, bouncing the ball against her paddle without looking at it.
6 A Across from her, RUSLAN BEKOV (34, heavy shoulders, a fisherman's sweater) rolls the ball between his palms like a stone he is deciding whether to throw.
7 A Behind Akiko, her coach MAEVE DONNELLY (60s, windbreaker zipped to the chin) folds and refolds a score sheet into smaller and smaller squares.
8 A LEOPOLD HUBER (70s, umpire's armband over a cardigan) sits on a stool by the table and does not take his eyes off the ball.
9 A NADIA FARAH (11, in a school blazer) sits cross-legged on the floor with a juice box, and BIG ED VANCE (50s, vendor's apron, ferry crest on the pocket) leans in the doorway with a tray of cold coffees that nobody has asked for.
10 D LEOPOLD: Ten all.
11 A ¶ Ruslan serves.
12 A Akiko returns low.
* 13 A The ball rides the ship's lean and dies at the corner.
14 A Ruslan lets it go.
15 A He sets his paddle down on the table, picks it up again, and wipes it on his sleeve.
16 A Maeve's square of paper becomes a smaller square.
17 A Nadia's straw makes a long dry sound in the empty box.
18 D LEOPOLD [CONT'D]: Ten, eleven. Bekov leads.
19 A ¶ Akiko doesn't blink.
20 A She walks to the towel she left on the bench, touches it with two fingers, and walks back without picking it up.
21 D MAEVE (quiet): You've done this before.
22 D AKIKO: Not on a boat.
23 A ¶ Big Ed sets a coffee on the edge of the table.
24 A Leopold slides it off without looking.
25 A Ruslan serves.
26 A Akiko lunges, the ship lurches, and her paddle skids out of her hand and clatters under the bench.
27 A Nadia picks it up and holds it out with both hands, as if returning a hat at a funeral.
28 D NADIA: It's still warm.
29 A ¶ Akiko takes it.
30 A She looks at the little girl a moment longer than she needs to.
31 A Then she turns and serves, short, flat, and the ball hops twice before Ruslan can lift his wrist.
32 A Leopold half rises from the stool.
* 33 A Maeve's paper tears.
34 D LEOPOLD: Eleven all.
35 A ¶ Ruslan nods once, slowly, to nobody.
36 A He holds out his hand across the net.
37 A Akiko stares at it.
38 D BIG ED (softly): Take the handshake, kid. It's the only dry thing on this boat.
39 A ¶ Akiko takes it.

### SCENE s01173 | INT. SHUTTERED ROLLER RINK - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND ABARA, CASPIAN ABARA, PERPETUA, HAKON, JUNE, OLU
* 1 A ¶ Disco ball dark.
* 2 A Rental skates hang in rows on the wall.
* 3 A A buffet of foil trays sits on the skate counter, untouched.
4 A ¶ ROSALIND ABARA (40s, black dress, shoes in her hand) stands at the edge of the rink floor.
5 A CASPIAN ABARA (40s, rumpled suit) sits on the bench lacing a pair of rental skates.
6 A PERPETUA (70s, church hat) watches from a plastic chair.
7 A HAKON (30s, borrowed tie) stands very straight by the jukebox.
8 A JUNE (20s, ripped tights) leans on the counter, scrolling.
9 A OLU (10) crouches beside the skate rack, counting wheels.
10 A ¶ She sets the shoes down.
11 A He doesn't look up.
12 D ROSALIND: You're not serious.
13 D CASPIAN: He wanted music.
14 D ROSALIND: He wanted a hymn.
15 A ¶ He finishes the knot.
16 A Stands.
17 A Wobbles.
* 18 A Nobody helps.
19 D PERPETUA: Let him.
20 A ¶ Hakon feeds a coin into the jukebox.
* 21 A It coughs.
* 22 A A faint organ riff leaks out.
23 A June looks up from her phone.
24 A Olu stops counting.
25 D JUNE: That's not a hymn.
26 D HAKON: It was on his list.
27 A ¶ She crosses to the jukebox and reads the label.
28 A Her jaw sets.
29 A She walks back and takes the phone from June's hand, locks it, and puts it in her own pocket.
30 D JUNE: Hey.
31 D ROSALIND: Not tonight.
32 A ¶ He rolls out onto the floor, arms out, one wheel dragging.
* 33 A The sound fills the hall.
34 A Olu hurries over and holds the rail.
35 A Perpetua grips the arm of her chair.
36 A Hakon turns the volume up.
37 D CASPIAN (over the music): Come on.
38 D ROSALIND: No.
39 D CASPIAN: Come on.
40 A ¶ She stares at the floor, at the scuffed centre circle.
41 A Then she steps onto it in stocking feet.
42 A He takes her hand.
43 A They go round once, awkward, slow.
44 A Behind them Perpetua stands.
45 A June finally laughs, one sharp note, and covers her mouth.

### SCENE s01174 | INT. FLOODED TERRACE BUNKER - NIGHT
Detected names (may be incomplete or contain aliases): TAMSIN BRIGG, IVO PETROV, MOTH, DEMIR, MEDIC ABENA NKRUMAH
* 1 A ¶ Knee-deep water.
* 2 A A single lantern swings from a hook.
* 3 A Mortar fire thumps overhead; dust sifts down.
4 A ¶ SGT. TAMSIN BRIGG (40s, mud to the eyebrows) checks a rifle bolt.
* 5 A CPL.
6 A IVO PETROV (30s) holds a radio that gives only static.
* 7 A PVT.
8 A LUKA "MOTH" DEMIR (19) crouches by the slit, shaking.
9 D BRIGG: Heads down, everybody. Quiet.
* 10 A ¶ Another thump.
11 A They flatten against the wall.
* 12 A Water slops.
13 A Brigg and Petrov grab for the lantern at the same moment and both stop with their hands on the hook.
14 D PETROV (to Brigg): Radio's dead, Sergeant.
15 D BRIGG: Then we're the radio.
16 D MOTH (mutters, to himself): Don't look. Don't look. Don't look.
* 17 A ¶ The hatch above scrapes.
18 A All three raise their rifles.
* 19 A A boot, then a body drops into the water.
20 A MEDIC ABENA NKRUMAH (20s, red cross armband, medic bag held overhead) lands in a crouch.
21 D ABENA: Hold your fire. Who's bleeding?
* 22 A ¶ Nobody answers.
23 A Moth slowly lowers his rifle and looks at his own hand, which is slick and dark.
24 D BRIGG (quietly): Moth. Show me.

### SCENE s01175 | INT. CAR WASH TUNNEL - DAY
Detected names (may be incomplete or contain aliases): FELIX TANAKA-REYES, GLORIA PUCKETT
* 1 A ¶ A sedan is stuck mid-tunnel between two spinning brushes.
* 2 A Foam climbs the windows.
3 A FELIX TANAKA-REYES (30s, tie loosened) grips the wheel.
4 A GLORIA PUCKETT (60s, his mother-in-law, handbag on her lap) sits rigid in the passenger seat.
5 D FELIX: It's fine. The belt does this.
6 D GLORIA: The belt does what, Felix?
7 D FELIX: Pauses. For the soap to dwell.
8 A ¶ Gloria nods slowly.
* 9 A The brushes whirl.
* 10 A A wipe of foam slides down the glass.
11 A Felix cracks his window an inch and sniffs it, then closes it again.
12 D GLORIA: You said you'd get the car cleaned before the dinner.
13 D FELIX: I am getting the car cleaned before the dinner.
14 D GLORIA: We're going to be late.
15 D FELIX: We're going to be clean.
* 16 A ¶ A thump from somewhere underneath.
* 17 A The car shudders.
18 A Gloria opens her handbag, takes out a tissue, and folds it twice.
19 A Felix watches her do it.
20 A He turns off the radio.
21 D FELIX [CONT'D] (dry): Gloria, I want to say something.
22 D GLORIA (at the same time): Felix, I want to say something.
23 D FELIX: I'm sorry about the wedding toast.
24 D GLORIA: ^I'm sorry about the wedding toast.
25 A ¶ They look at each other.
* 26 A The brushes stop.
* 27 A Foam slides.
28 A Gloria replaces the tissue in her handbag and snaps it shut.
29 A Felix puts both hands on the wheel.
* 30 A The green light outside does not come on.

### SCENE s01176 | INT. GENERATION SHIP - HYDROPONIC GREENHOUSE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN HELEN ADEBAYO-STONE, MIKLOS VARGA, ENSIGN PIA LINDGREN
* 1 A ¶ Rows of silver-leafed plants glow beneath violet lamps.
* 2 A Condensation drips from the ceiling ribs.
* 3 A A warning light pulses amber over the far hatch.
4 A ¶ CAPTAIN HELEN ADEBAYO-STONE (50s, grey braid, quartermaster's coat) strides between the rows with a handheld scanner.
5 A DR. MIKLOS VARGA (60s, bowtie, stooped) trails her carrying a sample tray.
6 A ENSIGN PIA LINDGREN (20s, new uniform, calm eyes) walks backward ahead of them, watching the hatch.
7 D HELEN: Report, Ensign.
8 D PIA: Nothing on the other side, Captain. Not heat, not sound.
9 D VARGA: That's precisely what worries me.
10 D HELEN: Doctor, you're worried by cloud cover.
11 D VARGA: Captain, the plants have stopped turning toward the lamps.
12 A ¶ Helen halts.
13 A She sweeps the scanner across the nearest row.
* 14 A Every leaf, in the violet light, is bent the same way.
* 15 A Toward the hatch.
16 D PIA: Captain?
17 D HELEN: Back away, slowly.
* 18 A ¶ The amber light goes red.
* 19 A The hatch hisses.
* 20 A A thin line of white mist spills across the floor and curls up the base of the trays.
21 A Varga drops his sample tray; glass bursts.
22 A Pia grabs Helen's arm and Helen grabs Varga's collar, and the three of them stumble backward together as the nearest plants lean, in unison, to follow them.
23 D VARGA (whisper): They're listening.
24 D HELEN: Then stop talking.
25 A ¶ The three of them freeze.
* 26 A The leaves freeze too.
* 27 A For a long moment the only sound is the dripping.
28 A Then Pia reaches to her belt and, with infinite care, switches off her comm badge.
* 29 A The mist halts.
* 30 A The hatch seals itself shut with a soft click.
* 31 A The plants slowly straighten toward the lamps.
32 D PIA (barely audible): Captain, I think it wanted the badge.
33 D HELEN: I think it wanted us.
34 A ¶ She lowers the scanner.

### SCENE s01177 | INT. AFTER-HOURS WAX MUSEUM - NIGHT
Detected names (may be incomplete or contain aliases): JACINTA ROURKE, NILS
* 1 A ¶ Wax figures stand in half-light: a bishop, a boxer, a singer mid-note.
* 2 A A janitor's cart is parked by the velvet rope.
3 A ¶ JACINTA ROURKE (40s, coveralls, ID badge clipped upside down) mops slowly around the boxer's feet.
* 4 A Her phone sits on the cart, speaker on.
5 D NILS [V.O.] (over phone, tinny): You're in?
6 D JACINTA: Been in an hour. They never lock the sprinkler hatch.
7 D NILS [V.O.]: And the display case?
8 A ¶ She leans the mop against the boxer.
9 A Walks to the singer's display, a glass cube with a gold microphone inside.
10 A She taps the glass with a knuckle, listening.
11 D JACINTA: Alarm's cheap. Same model as my garage.
12 D NILS [V.O.]: Don't touch it yet. I want to hear your breathing first.
13 D JACINTA: You're not my doctor.
14 D NILS [V.O.]: I'm your ride, and I'm eating a sandwich in a freezer truck. Humor me.
15 A ¶ She exhales.
16 A He listens.
17 A She takes the microphone cable out of her pocket and holds it up to the light.
18 A He swallows and sets down the sandwich.
19 D NILS [V.O., CONT'D]: Okay. Go.

### SCENE s01178 | EXT. SOAPBOX DERBY PIT LANE - DAY
Detected names (may be incomplete or contain aliases): COACH BRONWEN MAYHEW, TEDDY, LACROIX, RACE CONTROL
* 1 A ¶ Hot asphalt and hay bales.
* 2 A A hand-painted cart, number 7, rests on its wheels at the starting ramp.
* 3 A Banners snap in the wind.
4 A ¶ COACH BRONWEN MAYHEW (50s, whistle, sun visor) crouches at the cart's front axle with a wrench, tightening a nut while shouting over her shoulder.
5 A TEODORO "TEDDY" LACROIX (12, helmet too large, goggles pushed up) kneels in the cockpit, adjusting the steering rope, then stops to wave at someone in the crowd, then goes back to the rope.
* 6 A A loudspeaker on a pole crackles above them.
7 D RACE CONTROL [V.O.] (over loudspeaker): Car seven to the line. Car seven, two minutes.
8 D BRONWEN: I heard.
9 D TEDDY: Did they say two minutes?
10 D BRONWEN: They said two minutes.
11 D TEDDY: Is it two or one-thirty?
12 D RACE CONTROL [V.O.] (over loudspeaker): Car seven, you are blocking the ramp.
13 D BRONWEN (to the sky): We're not blocking, we're tuning!
14 D TEDDY: Coach, the left wheel is wobbling.
15 D BRONWEN: It's not wobbling, it's thinking.
16 D RACE CONTROL [V.O.] (over loudspeaker): One minute thirty.
17 A ¶ Bronwen drops the wrench, tugs Teddy's chin strap tight, slaps the helmet twice, and pushes the cart up the ramp with both hands.
18 A Teddy drops his goggles and grips the rope.
19 D TEDDY: Coach.
20 D BRONWEN: Don't speak. Steer.

### SCENE s01179 | INT. SELF-STORAGE UNIT 114 - NIGHT
Detected names (may be incomplete or contain aliases): ARLO PENROSE-ODUYA
* 1 A ¶ A roll-up metal door, half open, lets in a stripe of sodium-yellow light from the corridor.
* 2 A The unit is the size of a one-car garage and stuffed to the ceiling: mattresses, a taxidermied heron in a Hawaiian shirt, a canoe, forty identical lamps, a mannequin torso wearing a sash that reads "Miss Tri-County 1987."
3 A ¶ ARLO PENROSE-ODUYA (40s, rumpled, a headlamp strapped over a bald head, wet from the rain) ducks under the door and pulls it down to knee height behind him.
4 A He carries a phone, a flashlight, and a bolt cutter.
5 A He looks like a man who has just made a very expensive mistake and is still hoping it is a bargain.
6 D ARLO: Okay. Okay okay okay.
7 A ¶ He turns slowly, headlamp sweeping the wall of junk.
* 8 A It lands on the heron.
* 9 A The heron looks back.
10 D ARLO [CONT'D]: No. No no. You're a lamp. You're clearly a lamp.
11 A ¶ He pokes it with the bolt cutter.
* 12 A It does not fall over.
13 A He pokes harder.
* 14 A It falls over.
15 A A cloud of dust erupts, and Arlo coughs, waving a hand in front of his face.
16 D ARLO [CONT'D] (coughing): Eighteen hundred dollars. Eighteen hundred dollars for a bird.
17 A ¶ He pulls out the phone, thumbs the screen, and holds it up to his mouth like a man ordering at a drive-through.
18 D ARLO [CONT'D]: Voice memo. Day one. Unit 114.
19 A ¶ He taps the screen.
* 20 A A small ping.
21 A He lowers the phone, thinks better of it, raises it again.
22 D ARLO [CONT'D] (to the phone): Contents: one bird. Many lamps. A canoe, which is, I will admit, a promising canoe.
23 A ¶ He climbs over a mattress.
* 24 A A spring creaks.
* 25 A The canoe leans toward him.
26 A He catches it with his shoulder, and an avalanche of tennis rackets slides off the top, bouncing around his feet.
27 D ARLO [CONT'D] (through his teeth): Do not panic. Rackets are not a sign.
28 A ¶ He shoves the canoe upright, pats it, and steps toward the back wall.
29 A There, behind the lamps, he spots a steamer trunk wrapped in chain.
30 A He drops to his knees, headlamp bobbing.
31 D ARLO [CONT'D]: There you are.
32 A ¶ He raises the bolt cutter.
* 33 A The chain snaps with a ringing clang.
34 A He lifts the lid.
* 35 A Inside: stacks of sealed envelopes, hundreds of them, each stamped with a red wax seal.
36 A He pulls one out and reads the front.
37 D ARLO [CONT'D]: "To be opened upon my death." Okay, that's... that's a lot of deaths.
38 A ¶ He pulls out another.
39 D ARLO [CONT'D]: "To be opened upon my death. Again."
40 A ¶ He sits back on his heels.
* 41 A Rain drums the roof.
42 A He lifts the phone and presses record.
43 D ARLO [CONT'D]: Update. The bird is not the story.
44 A ¶ He plays back the memo.
* 45 A His own voice, thin and echoing, fills the unit.
46 D ARLO [V.O.] (from phone, recorded): Contents: one bird. Many lamps. A canoe, which is, I will admit, a promising canoe.
47 A ¶ He nods along with himself as though approving a stranger's testimony.
48 D ARLO [CONT'D]: Good. Consistent. Very professional.
49 A ¶ He sets the phone on the trunk and picks up a third envelope.
50 A He turns it over and sees, in blue ink, a handwritten line on the back.
51 A His face changes.
52 A He reads it again, silently, lips moving.
53 A He looks up at the heron.
* 54 A The heron, on its side, has one glass eye pointed at him.
55 D ARLO [CONT'D] (whisper): It's addressed to me.
56 A ¶ He stares at the envelope.
57 A Then, very carefully, he returns it to the trunk, closes the lid, drapes the chain back across it, and sits on top of the whole thing with his hands on his knees.
* 58 A The rain keeps falling.
59 D ARLO [CONT'D] (to the heron): We're going to need a bigger unit.
60 A ¶ He picks up the phone and presses record once more.
61 D ARLO [CONT'D] (into the phone): Voice memo. Day one, continued. Do not buy a canoe. Do not buy a bird. And whatever you do, do not read the mail.
62 A ¶ He stops the recording.
* 63 A In the silence the phone replays the last line to nobody.
64 D ARLO [V.O.] (from phone, recorded): And whatever you do, do not read the mail.
65 A ¶ Arlo reaches slowly for the envelope again.

### SCENE s01180 | INT. NIGHT-SHIFT CLEANING CLOSET - COUNTY BANK - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, DOLORES
* 1 A ¶ Mop buckets.
* 2 A Bleach.
* 3 A A fluorescent tube ticking.
4 A ¶ A WOMAN (50s, grey smock, hair in a net) hangs her coat on a hook.
5 A Steady hands.
6 A She hums.
7 A ¶ She opens a locker.
* 8 A Name tape inside the door: "D. VASQUEZ-MOORE."
9 A ¶ She lifts the false bottom.
* 10 A A drill.
* 11 A A thermal lance.
* 12 A Gloves.
13 A ¶ Calm.
14 A Too calm.
15 A ¶ She checks her watch.
16 A Presses play on a cheap recorder.
17 D DOLORES [V.O.] (recorded, her own voice): If you're hearing this, the cameras loop at two. Do not rush. Mop first.
18 A ¶ DOLORES nods along.
19 A Hums again.
20 A ¶ She lifts the bucket.
21 A Wheels it out.
* 22 A ¶ Hallway.
* 23 A Vault door at the end, gleaming.
24 A ¶ She stops.
25 A Sets the mop against the wall.
26 D DOLORES [CONT'D] (to the door, softly): Evening, old friend.
27 A ¶ She pulls the lance from under the smock.
28 A Snaps the valve.
* 29 A ¶ A hiss.
* 30 A A blue flame.
31 D DOLORES [CONT'D]: Thirty years I've cleaned around you.
32 A ¶ She starts to cut.

### SCENE s01181 | INT. ABANDONED SALT MINE - SHAFT STATION - NIGHT
Detected names (may be incomplete or contain aliases): YOUNG SOLDIER, COMMAND, ALMEIDA
* 1 A ¶ White crystal walls glitter under a dying headlamp.
* 2 A A field radio sits on an overturned crate, its dial glowing orange.
3 A ¶ A YOUNG SOLDIER (19, helmet too big, canteen empty) kneels beside the radio and turns the dial.
4 A He wipes salt from his lips with the back of his hand.
5 A He picks up the handset, puts it down, picks it up again, and finally presses the key.
6 D YOUNG SOLDIER: Any station, any station. This is Almeida. Come in.
* 7 A ¶ A burst of static answers.
* 8 A Then a woman's voice, patient and far away.
9 D COMMAND [V.O.] (over radio): Almeida, this is Command. Say your position.
10 D ALMEIDA: Mine shaft, level four. I'm alone. The others went up at dusk and haven't come back.
11 D COMMAND [V.O.] (over radio): Understood, Private. Do you have water?
12 D ALMEIDA: No. A little. Not enough.
13 A ¶ He crawls to the shaft opening, peers up into the dark, then scrambles back, knocks over the crate, catches the radio before it hits the floor, and sets it upright while the headlamp flickers.
14 D COMMAND [V.O.] (over radio): Private Almeida, listen. The extraction was cancelled at noon. I'm sorry.
15 A ¶ Almeida slides down the wall to the floor.
16 A He lets the handset rest on his knee.
17 D ALMEIDA (flat): Cancelled.
18 D COMMAND [V.O.] (over radio): I'll stay on the line as long as you want.
19 A ¶ Almeida closes his eyes.
* 20 A The headlamp goes out.
* 21 A The radio dial keeps glowing.

### SCENE s01182 | INT. STRANDED CABLE-CAR GONDOLA - DUSK
Detected names (may be incomplete or contain aliases): ELSPETH, TARIQ, MIREILLE, GUS, PAPADAKIS, BEATRIZ, RESCUE DISPATCH
* 1 A ¶ Wind shrieks.
* 2 A The gondola sways on its cable a thousand feet above a white abyss.
* 3 A Ice rimes the windows.
* 4 A A single emergency bulb flickers.
5 A ¶ ELSPETH (60s, mountaineering jacket, calm) braces against the door.
6 A TARIQ (30s, ski instructor's red parka) tries to pry open a roof hatch.
7 A MIREILLE (40s, silk scarf, bare hands) holds a toddler's mitten and no toddler.
8 A GUS "TINY" PAPADAKIS (50s, enormous, wearing a rented jacket two sizes small) sits on the floor with his head between his knees.
9 A BEATRIZ (20s, backpack on her lap, headphones around her neck) holds a radio handset.
10 D BEATRIZ (into handset): Dispatch, are you there?
11 D RESCUE DISPATCH [V.O.] (over radio, crackling): Gondola Four, we copy. Hold position. Repeat, hold position.
12 D TARIQ: Hold position? We are the position!
13 A ¶ Elspeth lays a hand on his arm.
14 A He shakes it off, then steps back, ashamed.
15 D ELSPETH: Nobody panics. Not yet.
16 D GUS (muffled, to his knees): I'm not panicking. I'm meditating.
* 17 A ¶ The gondola lurches.
18 A Everyone grabs a rail.
* 19 A The bulb dies.
20 A Beatriz clicks a flashlight on and turns the beam to the ceiling.
21 D MIREILLE (whisper): Please. Please.
22 D ELSPETH (to the group): Okay. Listen to me. Everyone's watch, everyone's phone, everyone's jacket. We pool it. Now.
23 A ¶ They hesitate.
24 A Then Gus lifts his head, unzips the tiny jacket, and holds it out.
25 A Tariq follows.
26 A Mireille hands over her scarf with trembling fingers.
27 A Beatriz shares her headphones, her gloves, her granola bar.
28 D RESCUE DISPATCH [V.O.] (over radio): Gondola Four, storm front arrives in forty minutes. Do not exit the cabin.
29 A ¶ Tariq looks at the hatch.
30 A He looks at the drop.
31 A He sits.
32 D TARIQ (to himself): Forty minutes. Forty minutes.
33 A ¶ Elspeth wraps the scarf around Mireille's neck and presses the mitten into her palm.
34 A Mireille grips it.
* 35 A Wind rattles the glass.
36 D BEATRIZ (into handset): Dispatch, we'll hold. But please hurry.

### SCENE s01183 | INT. NEON BOWLING ALLEY - KARAOKE NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI FINCH, SPUD, CARTWRIGHT, OSKAR VLASIC, BETH
* 1 A ¶ Strobe lights, disco pins, a bad ballad echoing through the lanes.
2 A ¶ LT. NAOMI FINCH (40s, leather jacket) leans against the shoe counter, eyes on a booth in the back.
3 A DWAYNE "SPUD" CARTWRIGHT (30s, too-bright shirt) is at the karaoke mic, mid-song, glancing at a briefcase beside the booth.
4 A The briefcase sits beside OSKAR VLASIC (50s, fur collar), who nurses a soda.
5 A Behind the counter, BETH (20s, name tag, skeptical) polishes shoes.
6 D SPUD (singing, off-key): Baby, I'm just a fool for the way you walk away.
7 A ¶ Finch pushes off the counter and crosses the lane.
8 A Oskar sees her.
9 A His hand slides to the briefcase.
10 A Spud drops the mic mid-note, Finch draws, Oskar yanks the briefcase free, and in a single tangle of limbs Beth ducks, Spud lunges, Oskar sprints for the lane gutter, and Finch skids across the polished boards after him as the music blares on.
11 D FINCH: Police! Stop!
12 D OSKAR: Not tonight!
13 A ¶ He hurls the briefcase.
* 14 A It bursts on the pin deck.
* 15 A Out spill rental shoe coupons.
* 16 A Hundreds of them.
17 A Oskar freezes.
18 A Finch freezes.
19 D FINCH: That's the briefcase?
20 D OSKAR: It's mine.
21 D SPUD (into the mic, delighted): Shoes!
22 D BETH: Both of you owe me for the lane.

### SCENE s01184 | INT. NIGHT AQUARIUM - SHARK TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): ROSARIO, KEZIA, ODDVAR, PRAKASH, ALARM
* 1 A ¶ A glass tunnel curves through blue-lit water.
* 2 A Sand tiger sharks glide overhead.
* 3 A Footsteps echo on the acrylic.
4 A ¶ ROSARIO (30s, wetsuit under a janitor's coverall) walks backward down the tunnel, camera drone in hand.
5 A KEZIA (20s, scuba gear half-zipped) follows with a rolling case.
6 A ODDVAR (50s, silver beard, pearl earring) stops to stare up at the sharks.
7 A PRAKASH (30s, headset, laptop on a strap) types as he walks.
8 D ROSARIO: Check in.
9 D PRAKASH: Cameras are looped. Door's mine.
10 D KEZIA: Case is cold. Heart is not.
11 A ¶ Oddvar says nothing.
* 12 A A shark passes.
13 A He taps the glass.
* 14 A It turns its head.
15 D ROSARIO (to the group): Eyes front. Nobody chats with the fish.
16 D ODDVAR (murmur, to the shark): You've got your orders. I've got mine.
* 17 A ¶ At the tunnel's midpoint, a pedestal holds a glass case.
* 18 A Inside, a pearl the size of a plum.
19 A Rosario sets down the drone and peels off the coverall, revealing wetsuit.
20 A Kezia pops the case, hands her a regulator.
21 A Prakash backs up to a pillar and types faster.
22 A Oddvar crouches by the pedestal and runs a thumb over its latch, a faint smile on his face, while the sharks wheel closer in a slow ring.
* 23 A ¶ An ALARM chirps.
24 A Everyone stills.
25 D PRAKASH (whisper): That's not mine.
26 D ROSARIO: Whose is it?
27 D ODDVAR: Mine.
28 A ¶ He stands.
29 A The pearl is already in his pocket.
30 A He walks away, calm, unhurried, past the others.
31 A Rosario lunges for his sleeve, misses, and follows him.
32 A Kezia drops the case and runs after them both.
33 A Prakash stays frozen with the laptop clutched to his chest.
34 D PRAKASH (to himself): Of course. Of course it's him.
* 35 A ¶ Overhead, a shark thumps the glass.

### SCENE s01185 | EXT. DRIVE-IN THEATER - NIGHT
Detected names (may be incomplete or contain aliases): SADIE QUILLEN, STRANGER, BIG TOMMY SERRANO, DETECTIVE LUCIA ORTEGA, ELIAS
* 1 A ¶ A black-and-white monster movie flickers on the screen.
* 2 A Rows of empty cars.
* 3 A One pickup parked dead center.
4 A ¶ SADIE QUILLEN (30s, trench coat) slides out of her sedan.
5 A Walks the aisle.
6 A Hands in pockets.
7 A ¶ A STRANGER (40s, flat cap) sits on the pickup's tailgate.
8 A Eating popcorn.
9 D SADIE: You're early.
10 D STRANGER: You're slow.
11 A ¶ Behind him, BIG TOMMY SERRANO (50s, enormous, suspenders) rises from the truck bed.
12 A Silent.
13 A Holding a tire iron.
14 D SADIE: You brought a friend.
15 D STRANGER: Insurance.
16 A ¶ Sadie smiles.
* 17 A A click in the dark.
* 18 A From another car, a gun barrel.
19 A DETECTIVE LUCIA ORTEGA (40s, badge on a chain) steps into the screen's glow.
20 D ORTEGA: Hands up. All of you.
21 A ¶ Tommy swings.
22 A Sadie ducks.
23 A The Stranger hurls popcorn.
24 A Ortega fires into the sky.
25 A Everyone dives.
* 26 A The film's monster roars on the screen.
27 A ¶ Sadie rolls under the pickup.
28 A Tommy drops the iron.
29 D ORTEGA [CONT'D] (to the Stranger): Name.
30 D STRANGER: Elias Brandt.
31 D ORTEGA: Elias. Thank you.
32 D ELIAS (softly): Wait. Wrong answer.
33 A ¶ He grins.
* 34 A The truck's engine roars to life.

### SCENE s01186 | EXT. ROOFTOP APIARY - GOLDEN HOUR
Detected names (may be incomplete or contain aliases): ANNELIESE VOSS, JOSUE PEREIRA, GRANDMOTHER FLORENCE, HIRO, PETRA
* 1 A ¶ White hives in neat rows.
* 2 A A city skyline smolders behind them.
* 3 A Folding tables, paper lanterns, a rehearsal-dinner mood.
4 A ¶ ANNELIESE VOSS (30s, beekeeper's veil pushed up) pours mead into small cups.
5 A JOSUE PEREIRA (30s, shirt sleeves rolled, hands scarred from hive tools) carries a tray of honeycomb.
6 A GRANDMOTHER FLORENCE (80s, cane, dressed for a wedding) sits at the head table.
7 A HIRO (30s, the groom, nervous tie) practices a toast under his breath.
8 A PETRA (30s, the bride's sister, sunglasses) watches Anneliese and Josue.
9 D JOSUE: Mead?
10 D ANNELIESE: Honeycomb?
11 A ¶ He sets the tray down.
12 A She hands him a cup.
13 A Their fingers don't touch.
14 D FLORENCE (to the table): Everyone sit. It's rude to stand while the bees work.
15 A ¶ They sit.
16 A Hiro stands anyway.
17 D HIRO (clearing throat): Thank you all for coming up here. To the bees.
18 D PETRA: To the bees.
19 D JOSUE (dry): To the bees.
20 D ANNELIESE (dry): They never leave.
21 A ¶ Josue lifts his cup.
22 A Anneliese does not.
23 A Petra's sunglasses angle toward her.
24 D PETRA: Anneliese, something wrong with the mead?
25 D ANNELIESE: No. Everything's perfect.
26 A ¶ She sips.
27 A Josue sets his cup down, harder than he means to.
28 D JOSUE: Seven years. You'd think I'd stop being surprised by what you won't say.
29 D ANNELIESE: You'd think you'd stop assuming.
30 D FLORENCE (sharp): Children.
31 D HIRO (to himself): Oh no. Oh no, not the toast.
32 D ANNELIESE: I wrote you a letter. Josue. I wrote you a hundred letters and I burned every one on this roof.
33 D JOSUE: Then you burned the wrong thing.
* 34 A ¶ A hive hums louder.
35 A Petra takes off her sunglasses.
36 A Florence drops her cane across the table with a clatter.
37 D FLORENCE: Out. All of you. Let them finish.
* 38 A ¶ Chairs scrape.
39 A Hiro scurries away.
40 A Petra hesitates, then follows.
41 A Anneliese and Josue stand alone among the hives.
42 D ANNELIESE (low): You ruined my life.
43 D JOSUE: You ruined mine first.
44 A ¶ She steps close.
45 A He doesn't back away.
* 46 A Behind them the sun slides below the skyline.

### SCENE s01187 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR AMADI NWOSU, MAGDALENA CROSS, DANTE CROSS, DISPATCH
* 1 A ¶ A cathedral of dead things.
* 2 A Foxes mid-leap, owls on bent branches, a bear reared upright with one paw raised as though about to speak.
* 3 A Glass eyes catch the light of a single green desk lamp.
4 A ¶ INSPECTOR AMADI NWOSU (50s, long coat dripping, notebook in hand) stands in the doorway, letting his eyes adjust.
5 A At the back of the room, among tables strewn with scalpels and cotton wadding, a woman in a leather apron stands very still: MAGDALENA CROSS (40s, steady, sleeves rolled to the elbow, a smear of preservative on her cheek).
6 D AMADI: Ms. Cross. You work late.
7 D MAGDALENA: So do you.
8 A ¶ She does not move.
9 A He walks in slowly, studying the shelves.
10 A Amadi stops at the bear and tilts his head.
11 D AMADI: Beautiful piece. Whose is it?
12 D MAGDALENA: A collector's.
13 D AMADI: A collector who disappeared on Tuesday.
14 D MAGDALENA: Did he? I'd have charged him for the storage.
15 A ¶ Amadi crosses to the desk.
* 16 A A mug, half-drunk tea, a ledger.
17 A He turns a page with one finger.
18 D AMADI: Your ledger shows three deliveries that night. Your neighbor says only one truck.
19 D MAGDALENA: My neighbor likes trucks.
* 20 A ¶ Behind the desk, a door ajar.
* 21 A A faint sound, a scrape.
22 A Amadi's eyes flick to it.
23 A Magdalena's do not.
24 D AMADI: Who's back there?
25 D MAGDALENA: Nobody.
* 26 A ¶ The door creaks wider.
27 A A boy of fifteen's silhouette slips through, pale, a hoodie pulled up.
28 A He lunges for the exit.
29 A Amadi sidesteps and grabs his sleeve; the boy twists, Magdalena drops a scalpel on the table with a clang, and for one long second all three of them struggle in a knot of limbs beside the bear.
30 A The boy's hood falls back.
31 A DANTE CROSS (15, her son, hollow-eyed) glares at Amadi.
32 D DANTE: Let go of me.
33 D AMADI: Easy, son.
34 D MAGDALENA: Dante, stop.
35 A ¶ Dante stops.
36 A Amadi releases him.
37 A The boy backs away until he bumps into the bear and presses against its fur.
38 D AMADI (quietly): Ms. Cross, where is he?
39 D MAGDALENA (a long beat): I told you. A collector's.
* 40 A ¶ Amadi's phone buzzes in his pocket.
41 A He ignores it.
* 42 A It buzzes again.
43 D AMADI (to Dante): How old are you?
44 D DANTE: Fifteen.
45 D AMADI: Fifteen. And tonight you got up and did your mother's work, didn't you? Because she asked.
46 D DANTE (whisper): She didn't ask.
47 A ¶ Magdalena closes her eyes.
48 D AMADI: I need to answer this.
49 A ¶ He takes out the phone.
50 A Answers.
51 D AMADI [CONT'D] (into phone): Nwosu.
52 D DISPATCH [V.O.] (over phone, tinny): Inspector, we found the body. Riverbank, north of the bridge. He's been there since Tuesday. Cause of death, blunt trauma.
53 A ¶ Amadi lowers the phone slowly.
54 A He looks at Magdalena.
55 A At Dante.
56 A At the bear, whose glass eyes seem to look back.
57 D AMADI (into phone): Hold there.
58 A ¶ He hangs up.
* 59 A The workshop is silent.
60 D AMADI [CONT'D] (to Magdalena): So he never got stuffed.
61 D MAGDALENA: No.
62 D AMADI: Then what's in the back room?
63 A ¶ Dante makes a small sound.
64 A Magdalena turns and walks to the door.
65 A She opens it wide.
* 66 A Inside, on a steel table under a sheet, a long shape.
67 D MAGDALENA: The dog.
68 A ¶ Amadi stares.
69 D MAGDALENA [CONT'D]: His dog. He asked me to keep it. That's all he ever asked.
70 A ¶ She pulls back the sheet.
* 71 A A greyhound, perfectly preserved, its eyes bright.
72 A Amadi lets out a long breath.
73 A Dante covers his face.
74 D AMADI (to the dog): Well. That's not on the ledger either.
75 A ¶ He pockets the notebook.
* 76 A Behind him the bear lifts its paw as if to wave goodbye.

### SCENE s01188 | EXT. GLACIER CREVASSE CAMP - DAWN
Detected names (may be incomplete or contain aliases): HILDA, SOLVEIG, JAMAL
* 1 A ¶ A tent the color of a tangerine, pegged to blue ice.
* 2 A Wind has dropped.
* 3 A The world is pearl and silent.
4 A ¶ HILDA (50s, frost in her eyebrows) kneels at a camp stove, coaxing a flame.
5 A SOLVEIG (50s, same gray parka, same cropped silver hair) unrolls a map across her knees.
6 A JAMAL (20s, hauling a coil of rope) crunches up from the edge, face wind-reddened.
7 D JAMAL: Weather's holding.
8 D HILDA: Good. Then we eat.
9 A ¶ She stirs a pot.
* 10 A Steam wisps.
11 A Solveig traces a finger across the map and does not look up.
12 D SOLVEIG: Jamal, how far to the saddle?
13 D JAMAL: Two hours if the bridge holds.
14 D SOLVEIG: Hilda, did you check the bridge?
15 D HILDA: Solveig, I checked it yesterday. She was fine.
16 D JAMAL (confused): She?
17 A ¶ Hilda and Solveig exchange a look.
18 A Hilda's smile fades.
19 A Solveig folds the map once.
20 D SOLVEIG: Jamal. Where is the third rope?
21 A ¶ Jamal glances at the coil in his hand.
22 A Then at the edge.
* 23 A A beat.
24 D JAMAL: I left it anchored. For her.
25 A ¶ Solveig stands.
26 A Hilda lowers the spoon.
27 A She looks at the pot, at the steam, at the tent, then at Jamal, who has begun, very slowly, to back away toward the crevasse.
28 D HILDA (gentle): Jamal. There wasn't a third climber.
29 A ¶ He stops.
* 30 A The wind returns, and with it, faintly, from deep inside the ice, a woman's voice calling his name.

### SCENE s01189 | INT. CONVERTED CINEMA FIELD HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA NAIR, NURSE, SEBASTIAN OYELOWO, MAN, THEO ABBASI, MS. HALLORAN
* 1 A ¶ A former movie palace.
* 2 A The velvet seats have been ripped out and replaced with rows of cots.
* 3 A The screen at the front is a mural of water-stained gold curtains.
* 4 A Plastic sheeting hangs from the balcony.
* 5 A Generator hum.
* 6 A Coughing.
7 A ¶ DR. PRIYA NAIR (40s, scrubs two sizes large, hair under a surgical cap) crosses the aisle, clipboard pressed to her chest.
8 A She is the only one moving fast.
9 A ¶ A NURSE, SEBASTIAN OYELOWO (30s, soft-spoken, glasses taped at the hinge), trails her with a tray.
10 A ¶ At the center of the stage, a boy lies on a cot, wrapped in a foil blanket.
11 A The boy, ten, flushed and unconscious, does not stir.
12 A ¶ Beside him, a MAN in a stained suit sits slumped on a folding chair.
13 A THEO ABBASI (50s, the boy's father, unshaven, wedding ring turning round his finger) grips the cot's rail.
14 A ¶ She reaches the cot.
15 A Checks the chart.
16 A He watches her read.
17 D PRIYA: How long has the fever been over a hundred and three?
18 D THEO: Since the lights went out.
19 D SEBASTIAN: Four hours.
20 A ¶ She lays a hand on the boy's forehead.
21 A He winces.
22 A She tilts his head, thumbs back an eyelid.
23 A He doesn't resist.
24 D PRIYA (quietly, to Sebastian): Start the line. Saline, then the second antibiotic.
25 D SEBASTIAN: We're out of the second.
26 A ¶ She does not turn.
27 A Her shoulders stiffen.
28 A She breathes in once.
29 D PRIYA: Then the first, double. And find me a pharmacist.
30 D SEBASTIAN: There are no pharmacists.
31 D PRIYA: Then find me someone who used to be one.
32 A ¶ He nods and leaves.
* 33 A The generator stutters.
* 34 A Lights dim, brighten.
35 A Theo looks up.
36 D THEO: Doctor.
37 D PRIYA: Mr. Abbasi.
38 D THEO: Is he going to make it?
39 A ¶ She looks at him.
40 A Not at the chart, not at the boy.
41 A At him.
42 D PRIYA: I don't know yet.
43 A ¶ He nods.
44 A It is the answer he expected, but he needed to hear it said.
45 A He lowers his head onto the rail.
46 A ¶ Priya straightens.
* 47 A Across the hall, a second cot.
48 A A second father.
49 A A nurse waving frantically.
50 A ¶ She walks toward it.
51 A Then stops.
52 A Turns back.
53 A Kneels beside the boy and tucks the foil blanket tighter, careful of his arm.
54 D PRIYA [CONT'D] (whisper): Stay with us, little one.
55 A ¶ He does not stir.
56 A ¶ She stands.
* 57 A The generator coughs again.
* 58 A This time the lights go out entirely.
* 59 A ¶ Darkness.
* 60 A Someone sobs.
* 61 A A match flares.
* 62 A Another.
* 63 A A third.
64 A Sebastian reappears, holding a candle, a woman beside him in a grey cardigan, shaking out her hands.
65 D SEBASTIAN: Doctor, this is Ms. Halloran. She ran a pharmacy for thirty years.
66 A ¶ Priya takes in the cardigan, the shaking hands, the tired eyes.
67 A She puts out her own.
68 D PRIYA: Do you remember how to mix a pediatric dose?
69 A ¶ The woman almost smiles.
70 D MS. HALLORAN: Like my own name.
71 D PRIYA: Good. Because tonight, you're the only name I trust.
72 A ¶ The woman nods, rolls up her sleeves, and follows Sebastian into the dark.
73 A Priya stands over the cot.
* 74 A The candle flames lean.
75 D THEO (not looking up): Thank you.
76 D PRIYA: Don't. Not yet.
77 A ¶ She stays beside the boy, one hand on the rail, her eyes on the rise and fall of the foil.
* 78 A The mural curtains hang above them, golden, ruined, waiting for a show that never begins.

### SCENE s01190 | INT. TELEPHONE EXCHANGE - 1924 - NIGHT
Detected names (may be incomplete or contain aliases): CORDELIA ASHWORTH-BELL, FENWICK, CAPTAIN WARRINGTON
* 1 A ¶ Brass jacks, cord pairs, a wall of blinking lamps.
* 2 A Gaslight on mahogany.
* 3 A The air smells of hot wire.
4 A ¶ CORDELIA ASHWORTH-BELL (20s, headset, high collar) stands at the board plugging cords with practiced speed.
5 A Her supervisor, MRS. FENWICK (50s, iron-gray bun, pince-nez), watches from behind with a pocket watch.
6 D CORDELIA: Number, please.
7 D CAPTAIN WARRINGTON [V.O.] (over line, crackling): Connect me to the Admiralty. At once.
8 D CORDELIA: One moment, sir.
9 D MRS. FENWICK: Cordelia, that line is reserved.
10 D CORDELIA: Mrs. Fenwick, he said at once.
11 A ¶ She plugs the cord.
* 12 A A lamp flares red.
13 D CAPTAIN WARRINGTON [V.O.] (over line): Miss, are you there? I hear nothing.
14 D CORDELIA: Sir, the Admiralty is not answering.
15 D MRS. FENWICK (sharp): Then you disconnect, child.
16 D CORDELIA: But he'll hear the line go dead, Mrs. Fenwick.
17 D CAPTAIN WARRINGTON [V.O.] (over line, urgent): Miss, there is a fire at the harbor. Do you understand? Ring everyone.
18 A ¶ Cordelia looks at Mrs. Fenwick.
19 A Mrs. Fenwick lowers the watch.
20 D MRS. FENWICK: Ring everyone.
21 A ¶ Cordelia seizes a bundle of cords and begins to plug, plug, plug, as the lamps all blaze at once.

### SCENE s01191 | INT. ABANDONED CAROUSEL WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): TEODORA VANCE-MBEKI, DESMOND CHALK, OLD HARLAN
* 1 A ¶ A cavernous shed of peeling paint and sawdust.
* 2 A Dozens of wooden horses hang from the rafters on chains, their glass eyes catching the light of a camping lantern.
* 3 A Half-carved zebras lie on workbenches.
* 4 A A pipe organ sits dead under a tarp.
5 A ¶ TEODORA VANCE-MBEKI (30s, parka, flashlight clipped to her collar) pushes through the door, brushes cobwebs off her hair, and stops under the hanging horses.
6 A DESMOND CHALK (40s, real-estate blazer, laminated clipboard) follows her in, sneezing.
7 A Near the back, a gaunt man in a leather apron stands motionless at the workbench with his back to them: OLD HARLAN (70s, hands like roots).
8 D DESMOND: As you can see, the property has character.
9 D TEODORA: It has dust.
10 D DESMOND: Dust is character that has been left alone.
11 A ¶ Old Harlan does not turn.
12 A Teodora raises her flashlight.
* 13 A The beam finds his shoulder, and then the bench in front of him, where a small wooden horse sits with its mane half-painted in red.
14 D TEODORA: Excuse me, sir? We didn't know anyone was in here.
15 A ¶ He lifts the brush.
16 A Dips it.
17 A Draws a single, slow line down the horse's neck.
18 A Desmond steps closer, reading his clipboard as he goes, and trips on a coil of rope.
19 A He grabs a hanging horse to steady himself and the chain groans.
20 A Teodora catches the clipboard as it flies, and Harlan lays the brush down without a sound.
21 D DESMOND (whisper): He wasn't on the listing.
22 D TEODORA: Neither was the smell.
23 A ¶ Old Harlan turns.
24 A His face is smooth, painted, a carved face with a hinge at the jaw.
* 25 A It opens.
26 D OLD HARLAN: Closing time.
* 27 A ¶ Overhead, every horse begins, very slowly, to turn.

### SCENE s01192 | EXT. STAGE STATION WELL - HIGH DESERT - NOON
Detected names (may be incomplete or contain aliases): JEDEDIAH PRUITT, ABBY, TORRANCE, LOCKHART
* 1 A ¶ A parched yard.
* 2 A A plank shed, a rusted pump, a stone well with a wooden lid.
* 3 A Heat shimmers.
* 4 A A water barrel is tipped on its side, bone dry.
5 A ¶ JEDEDIAH PRUITT (60s, hat brim curled, a sheriff's star pinned crooked) stands at the well with a rope around his waist.
6 A He peers over the edge.
7 A ABIGAIL "ABBY" TORRANCE (20s, dust-grey duster, rifle slung across her back) sits on the stone rim and drinks from a canteen.
8 A MR. LOCKHART (40s, striped vest, no gun) leans against the shed, watching the horizon.
9 D JEDEDIAH: Pump's dry.
10 D ABBY: Well's not.
11 D JEDEDIAH: Well's got something in it.
12 D ABBY: Something or someone?
13 A ¶ Jedediah tests the rope.
* 14 A It holds.
15 A Lockhart pushes off the shed, steps forward, and bumps the barrel with his boot.
* 16 A It rolls across the yard and clunks against the pump.
17 D LOCKHART: I'm only passing through, Sheriff. I'd consider it a favor if you'd leave my business out of it.
18 D JEDEDIAH: Your business has been dropping bodies in my well for three weeks, Mr. Lockhart.
19 D LOCKHART: I wouldn't know about that.
20 D ABBY (dry): He wouldn't.
21 A ¶ Jedediah lowers himself over the rim, hand over hand.
22 A Abby grips the rope and feeds it down.
23 A Lockhart takes a step toward her.
24 A She half-draws the rifle without looking at him, and he stops, both hands open at his sides.
25 D LOCKHART: Miss, you really shouldn't.
26 D ABBY: I really should.
* 27 A ¶ From below, a splash.
* 28 A Then Jedediah's voice, hollow in the stone.
29 D JEDEDIAH [O.S.]: It's him. It's Arliss.
30 A ¶ Abby releases a breath.
31 A Lockhart spits in the dust.
* 32 A The wind picks up, rattling the shed door.
33 D JEDEDIAH [O.S., CONT'D]: Pull me up.
34 A ¶ Abby and Lockhart both look at the rope.
35 A Abby tightens her grip.
36 A Lockhart folds his arms.
37 A Neither of them moves.
38 D ABBY: Mr. Lockhart, I'd hate to need your help.
39 D LOCKHART: I'd hate to give it.
40 A ¶ He takes hold of the rope anyway.
41 A They haul together, heaving, boots skidding in the dirt, until Jedediah's hat rises over the rim.

### SCENE s01193 | EXT. BROKEN-DOWN SCHOOL BUS - ROADSIDE - DUSK
Detected names (may be incomplete or contain aliases): FIONN, WANJIRU, DEXTER, MARGUERITE, ISOLDE, DELACROIX-HUANG
* 1 A ¶ Steam hisses from the hood.
2 A Six teenagers sit on the shoulder in a ragged line.
3 A ¶ FIONN (17, drum sticks in his back pocket) kicks gravel.
4 A WANJIRU (17, braids, ukulele case) stares at the road.
5 A DEXTER (17, letterman jacket) scrolls his phone.
6 A MARGUERITE (16, sketchbook) draws without looking up.
7 A Last, ISOLDE (16, borrowed varsity hoodie) sits apart, arms around her knees.
8 D FIONN: Anyone get a signal?
9 D DEXTER: No.
10 D WANJIRU: ^No.
11 A ¶ They glance at each other.
12 A Neither smiles.
13 A Marguerite's pencil stops.
14 D FIONN: We could walk.
15 D MARGUERITE: We could stay.
16 A ¶ Nobody says what they mean.
17 A Isolde turns her face away.
* 18 A ¶ Headlights swing across the gravel.
* 19 A A battered pickup brakes.
* 20 A The door opens.
21 A MR. DELACROIX-HUANG (50s, their old music teacher, thermos in hand) climbs out and surveys the bus.
22 D MR. DELACROIX-HUANG: Anyone hurt?
* 23 A ¶ Silence.
24 A Fionn stands.
25 A Wanjiru stands.
26 A One by one, the others rise.
27 A Isolde stays seated until Marguerite offers her a hand without looking at her.
28 A She takes it.

### SCENE s01194 | EXT. WHALE-RIB BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): SERAPHINA OKONKWO-DREY, BRAM LAME, TASHI, GREYMOOR
* 1 A ¶ A colossal skeleton arches over a fogbound chasm.
* 2 A Ribs the width of oaks form a walkway.
* 3 A Prayer flags snap from the vertebrae.
4 A ¶ SERAPHINA OKONKWO-DREY (30s, hooded cloak, staff of white wood) steps onto the bridge.
5 A BRAM THE LAME (50s, iron crutch) shuffles behind her.
6 A TASHI (12, goat bell on a cord) skips ahead.
7 A Last, GREYMOOR (ageless, antlered, silver eyes) waits on the far side.
8 D SERAPHINA: Stay on the bones.
9 D TASHI: Which bones?
10 D BRAM: All of them, you fool.
* 11 A ¶ The bridge shudders.
* 12 A A rib cracks.
13 A Seraphina grabs Tashi's collar, Bram lunges for the rail, and all three crash to their knees as a gap opens ahead.
14 D GREYMOOR: You are late.
15 D SERAPHINA: The tide was early.
16 D GREYMOOR: The tide was never yours.
17 A ¶ Greymoor raises one hand.
* 18 A Mist rises, thick and white.
* 19 A The bridge heals itself with a groan.
20 A Bram stands, stunned.
21 A Tashi laughs, a bright note.
22 D TASHI: Again!
23 A ¶ Seraphina and Greymoor lock eyes.
24 A Neither blinks.

### SCENE s01195 | INT. ICE-FISHING HUT - NIGHT
Detected names (may be incomplete or contain aliases): GRETA KOWALCZYK, RUTH
* 1 A ¶ A plywood box on a frozen lake.
* 2 A A propane heater glows orange.
* 3 A A hole in the floor shows black water.
* 4 A A radio hangs on a nail.
5 A ¶ GRETA KOWALCZYK (40s, wool cap, thermos) sits on an upturned bucket, jigging a line.
6 A She does not look at the radio.
* 7 A ¶ Wind presses at the walls.
* 8 A The heater ticks.
* 9 A ¶ The radio crackles.
10 D RUTH [V.O.] (over radio, faint): Shanty nine. Greta. Are you there?
11 A ¶ Greta's jigging hand stops.
12 A She waits.
* 13 A The radio hisses.
14 D RUTH [V.O., CONT'D] (over radio): I know you can hear me. You always keep it on.
15 A ¶ Greta reels in.
* 16 A Empty hook.
17 A She baits it again, slowly.
* 18 A Her thermos lid rattles against its cup.
19 D RUTH [V.O., CONT'D] (over radio): The ice is thinning by the east shore. Come in before dark.
20 D GRETA (flat): It's dark.
21 D RUTH [V.O.] (over radio): Then come in now.
22 A ¶ Greta takes the handset off its hook.
23 A She does not press the key.
24 A She holds it against her chest.
* 25 A ¶ A sound like a rifle shot rolls across the lake.
* 26 A The hut lurches a quarter inch.
27 A Greta grips the bucket rim.
28 D RUTH [V.O., CONT'D] (over radio, closer): Greta. Listen to me. I'm not at the station.
29 A ¶ Greta lowers her eyes to the hole in the floor.
* 30 A The black water is still.
* 31 A Something taps the ice beneath it.
* 32 A Once.
* 33 A Twice.
34 D GRETA (whisper): Where are you, then?
* 35 A ¶ The radio hisses.
* 36 A The tapping stops.
* 37 A Then, from the hole, in a voice that is exactly the radio's:
38 D RUTH [V.O.] (from the water): Here.

### SCENE s01196 | INT. FLOODED SUPERMARKET - DAY
Detected names (may be incomplete or contain aliases): LORENZO, ADEOLA, KIERAN, OKAFOR-LINDQVIST, PEPPER
* 1 A ¶ Brown water to the waist.
* 2 A Shelves rise like cliffs, stocked with swollen cereal boxes.
* 3 A Sunlight slants through a shattered skylight.
* 4 A A makeshift raft of shopping carts and pallets drifts down the cereal aisle.
5 A ¶ LORENZO (40s, soaked, towel on his shoulders) poles the raft with a broom handle.
6 A ADEOLA (30s, backpack of canned goods) sits cross-legged, counting cans.
7 A KIERAN (15, hoodie, bruised knee) dangles a hand in the water.
8 A MRS. OKAFOR-LINDQVIST (70s, cardigan, plastic bonnet) perches on the cart front like a figurehead.
9 A PEPPER (12, goggles, plastic sword) stands on a pallet, scanning the shelves.
10 D LORENZO: Left side.
11 D ADEOLA: Left side what?
12 D LORENZO: Aisle's narrowing. Everybody lean.
13 A ¶ Everyone leans.
* 14 A The raft slides past a display of cat food.
15 A Kieran lifts his hand, and a drowned cardboard banner slaps against his arm.
16 A Pepper swings the sword at it, and Mrs. Okafor-Lindqvist ducks, bonnet askew.
17 A Adeola catches the can-bag as it tips, Lorenzo plants the pole on a shelf and heaves, and the raft eases into the bread aisle with a long creak.
18 D PEPPER (to everyone): Land ho!
19 D MRS. OKAFOR-LINDQVIST (to Pepper): Dear, there's no land.
20 D PEPPER: There's a ceiling.
21 D KIERAN (muttering): We're going to run out of aisles.
22 D LORENZO (to Kieran): Then we'll invent new ones.
23 D ADEOLA (to herself, counting): Forty-one, forty-two...
* 24 A ¶ The raft drifts.
* 25 A Sunlight crawls across the water.
* 26 A For a moment nobody speaks.

### SCENE s01197 | INT. FISH CANNERY - NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): NELL PARADIS, SHAPE, CELESTINE PARADIS
* 1 A ¶ A steel cavern of conveyors, hooks, and wet concrete.
* 2 A Fluorescents hum.
* 3 A The belts are stopped, but the smell lingers: brine, blood, tin.
4 A ¶ NELL PARADIS (30s, hairnet, rubber apron) sweeps the floor between two conveyor lines.
5 A She works with a metronome rhythm.
6 A ¶ At the far end, a figure stands motionless in the shadow of a retort oven.
7 A A SHAPE in a rubber coat, hood up, face hidden.
8 D NELL: Hello? Shift's over. You can't be back here.
9 A ¶ The shape doesn't move.
10 A Nell stops sweeping.
11 A She lifts the broom like a staff.
12 D NELL [CONT'D]: Union rep? Inspector?
13 A ¶ The shape takes a step.
14 A Water drips from its sleeves.
15 A Nell backs up against a belt and her hand brushes a steel hook swinging on its chain.
16 D SHAPE (softly): Nell.
17 D NELL: How do you know my name?
18 D SHAPE: It's on your apron.
19 A ¶ She glances down.
20 A Yes.
* 21 A Embroidered across the chest.
22 A She relaxes a fraction, then stiffens again.
23 D NELL: That doesn't explain why you're standing in the dark.
24 A ¶ The shape moves into the fluorescent light.
25 A The hood falls back.
26 A A woman's face, pale, lined, eyes fixed.
27 D NELL [CONT'D] (whisper): Mama?
28 A ¶ Nell's mother, CELESTINE PARADIS (60s, drowned decades ago), stands in the aisle, water pooling at her boots.
29 D CELESTINE: Do you still sing while you work?
30 A ¶ Nell shakes her head.
31 A Her hand slides along the belt.
32 D CELESTINE [CONT'D] (a little sadly): You used to.
33 A ¶ She holds out a hand.
34 A Nell takes a step.
35 A Then she freezes.
36 A Behind the figure, a second shape detaches from the shadows.
37 A A man's.
38 A Tall, dripping.
39 A Same coat.
40 D NELL: Who is that?
41 D CELESTINE: Your father.
42 A ¶ Nell drops the broom.
* 43 A The belts begin to move on their own.
* 44 A The hooks swing.
* 45 A The lights flicker, then steady.
46 D NELL (shaking): You're both dead.
47 D CELESTINE: Yes. But it's still your shift.
48 A ¶ The man steps forward and she sees his face.
49 A It is hers.
50 A The same eyes, the same jaw.
51 A She stumbles back.
52 D NELL: No.
53 D CELESTINE: Nell. We were just waiting for you to come home.
* 54 A ¶ The belts accelerate.
55 A Nell turns and runs, boots slapping wet concrete.
* 56 A The hooks swing in her wake, clanging softly, and the whole cannery begins to hum with a lullaby neither of the dead is singing.

### SCENE s01198 | INT. DRY RIVERBED SALOON - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): ZEKE, HOLLOWAY, MADAME ODALYS RENFRO-TALL, CASSIUS BLAINE, LOOSE-JOINTED LEON, BOY WILLIAMS, MARSHAL TREVELYAN
* 1 A ¶ A saloon built on stilts over a cracked, sun-bleached riverbed.
* 2 A Heat bars the window slats.
* 3 A A ceiling fan turns lazily.
* 4 A The bar is a single long plank on barrels.
5 A ¶ EZEKIEL "ZEKE" HOLLOWAY (50s, bartender, apron stained to the color of old tea) polishes a glass that will never be clean.
6 A In the corner, MADAME ODALYS RENFRO-TALL (60s, black lace gloves, parasol closed on her lap) plays solitaire.
7 A At the far table, three MEN sit with their hats low: CASSIUS BLAINE (40s, scar through one eyebrow), LOOSE-JOINTED LEON (30s, rolling a cigarette that won't hold), and BOY WILLIAMS (18, still wearing a school tie under his duster).
* 8 A ¶ A telegraph key chatters on the wall behind the bar.
9 A Zeke ignores it.
10 D ZEKE (to the room): Gents. Madame. We close at five.
11 D CASSIUS: It's four-fifteen.
12 D ZEKE: I like to be ahead.
13 D LEON (to himself): Ahead of what?
14 D BOY WILLIAMS: Cassius, is it true the river used to run right through here?
15 D CASSIUS: Boy, that's what the old men said.
16 D BOY WILLIAMS: Why'd it stop?
17 D CASSIUS: Because somebody asked it too many questions.
* 18 A ¶ The key chatters again.
19 A Madame Renfro-Tall lifts her head.
20 D ODALYS: Zeke, dear, that's the third time.
21 D ZEKE: I know.
22 D ODALYS: Perhaps you should answer.
23 A ¶ Zeke sets the glass down.
24 A He walks to the key, cocks his head, reads the dashes with his lips moving.
25 D ZEKE (reading): "Marshal... arriving... on... four... forty."
26 A ¶ He turns slowly.
27 A The three men at the table have gone very still.
28 A Leon's cigarette falls apart on the tabletop.
29 D CASSIUS: Zeke.
30 D ZEKE: I didn't send for him.
31 D CASSIUS: Somebody did.
32 A ¶ All eyes turn to Madame Renfro-Tall.
33 A She smooths a card, lays it down, and smiles with a calm that has seen five governors come and go.
34 D ODALYS: Well, someone had to.
35 A ¶ Leon shoves back his chair.
36 A Boy Williams rises half an inch and sits again, because Cassius has put a hand on his arm.
37 D LEON (muttering): Knew it. Knew it was the old lady.
38 D ODALYS: Dear Leon, you've never known anything, and it's what makes you restful.
* 39 A ¶ A long beat.
* 40 A The fan turns.
* 41 A Outside, far off, a horse whinnies.
42 D ZEKE (to the room, quiet): Nobody draws until I say.
43 D CASSIUS (to Zeke): You say?
44 D ZEKE: It's my bar.
45 A ¶ Boy Williams swallows.
46 A He looks at the door, at the window, at Cassius's hand.
* 47 A Dust motes drift down in the light.
48 D BOY WILLIAMS (whispering to himself): Four-forty. Four-forty.
49 A ¶ Cassius takes his hand off the boy's arm.
50 A He lifts his glass, finds it empty, and sets it down gently.
51 D CASSIUS: Zeke, I'll have another.
52 D ZEKE: You'll have water.
53 D CASSIUS: There isn't any water.
54 D ZEKE (a faint smile): Then you'll have what we've got.
55 A ¶ He pours something amber into the glass.
* 56 A The telegraph key falls silent.
57 A Madame Renfro-Tall plays a red seven on a black eight.
58 D MARSHAL TREVELYAN [O.S.]: Zeke Holloway! Step out onto the porch!
59 A ¶ Zeke lays down the bottle.
60 A Nobody breathes.

### SCENE s01199 | INT. ROLLER DERBY LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): COACH VIOLET HARGROVE, CHERRY BOMBSHELL, TANK TOMASELLI, JUNIPER KWAKU-REED, OLD SALLY
* 1 A ¶ Dented lockers, benches strewn with kneepads, a cracked mirror reflecting a banner reading "BRUISE BROTHERS."
* 2 A Cheers from the arena thud through the wall, then fade.
3 A ¶ COACH VIOLET HARGROVE (50s, headset around her neck) stands with her arms folded.
4 A Her team sits in a half-circle: CHERRY BOMBSHELL (20s, helmet cradled in her lap), TANK TOMASELLI (30s, taped wrist), JUNIPER KWAKU-REED (20s, ice pack on her jaw), and OLD SALLY (40s, towel over her head).
5 A ¶ Nobody speaks.
* 6 A A loose locker door swings and clangs.
7 A ¶ Cherry picks at a thread on her glove.
8 A Tank stares at his wrist.
9 A Juniper adjusts the ice pack, winces, and puts it back.
10 A Old Sally slowly lifts the towel, looks at Violet, and lowers it again.
11 A Violet unfolds her arms, crosses to the whiteboard, picks up a marker, caps it, and sets it down.
12 D VIOLET: That's it.
13 D CHERRY: Coach...
14 D TANK: ^Coach...
15 A ¶ They stop.
16 A Violet doesn't turn.
17 D VIOLET: Showers. Bus in twenty.
18 A ¶ Old Sally stands first.
19 A She tucks the towel under her arm and walks out without looking at anyone.
20 A Juniper follows, dragging her skates.
21 A Tank lingers by the door and tips his chin at the whiteboard.
22 A Cherry lays her helmet on the bench, very carefully, as if it might wake.
