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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0022.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00567 | INT. DRAWBRIDGE CONTROL HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): HARRIET LOCKWOOD, NATHANIEL BRIGHT
* 1 A ¶ A glass booth perched high above a river, lit by a desk lamp and a bank of switches.
* 2 A The bridge spans a quarter-mile of black water below.
* 3 A Cars queue on both sides, headlights fogged.
* 4 A A thermos, a paperback, a radio playing low jazz.
5 A ¶ HARRIET LOCKWOOD, 50s, a bridge tender in a cardigan, feet on the desk, reads by lamplight.
6 A Her hand rests on the control lever.
* 7 A ¶ The door bangs open.
* 8 A A gust of rain.
9 A ¶ NATHANIEL BRIGHT, 30s, soaked, panting, a pistol in one hand and a gym bag in the other, kicks the door shut and presses his back to it.
10 D NATHANIEL: Don't move.
11 D HARRIET (without looking up): I wasn't going to.
12 D NATHANIEL: Put the book down.
13 D HARRIET: It's a good book.
14 D NATHANIEL: Put it down!
15 A ¶ She marks her page with a bus ticket.
16 A Sets the paperback on the desk.
17 A Raises both hands.
18 D HARRIET: There. Happy?
19 D NATHANIEL: Raise the bridge.
20 D HARRIET: That's a lot of cars.
21 D NATHANIEL: I said raise it!
22 D HARRIET: There's an ambulance in that line, son. Third from the left.
23 A ¶ He looks.
* 24 A Through the glass, the pulsing blue of an ambulance in the waiting traffic.
25 A His arm wavers.
26 D NATHANIEL: I don't care.
27 D HARRIET: You do.
28 D NATHANIEL: Raise it, or I swear --
29 D HARRIET: You swear what?
30 A ¶ He steps forward.
* 31 A The gun shakes.
32 A She stays perfectly still, hands up, face calm.
33 D HARRIET [CONT'D] (to the room, gently): Everyone's safe up here, young man. It's only a bridge.
34 D NATHANIEL (to himself): Don't think. Don't think.
35 D HARRIET: Whoever's behind you, he's not coming for you here.
36 D NATHANIEL: Shut up.
37 D HARRIET: He's not that fast.
38 A ¶ Nathaniel lowers the gym bag.
39 A Unzips it with one hand.
* 40 A Money, packed tight.
41 A He closes it again, hard.
42 D NATHANIEL: Please. I'm asking.
43 D HARRIET: You're not asking. You're aiming.
44 D NATHANIEL: Then what do I do?
45 A ¶ She lowers her hands, slow.
46 A Reaches for the thermos.
47 A Pours a cup of coffee.
48 A Holds it out.
49 D HARRIET: You drink this.
50 D NATHANIEL: Are you crazy?
51 D HARRIET: Thirty-one years on this bridge. You're the fourth.
52 A ¶ He stares at the cup.
* 53 A The jazz plays on, a soft saxophone.
* 54 A Rain rattles the glass.
55 D NATHANIEL: ...What happened to the other three?
56 D HARRIET: One went to jail. One went home. One's the mayor.
57 A ¶ He laughs, one broken sound.
58 A His arm sinks.
59 D NATHANIEL: I'm not going to jail.
60 D HARRIET: You might.
61 D NATHANIEL: I can't.
62 D HARRIET: Then go home.
* 63 A ¶ Headlights flare across the booth.
* 64 A Sirens, far off, rising.
65 D NATHANIEL: They're coming.
66 D HARRIET: They're always coming.
67 A ¶ He takes the coffee.
68 A Sets down the gun on the desk beside the paperback.
69 A His hands shake so hard the cup rattles on the saucer.
70 D HARRIET [CONT'D]: Sit. You're dripping on my floor.
71 A ¶ He sits.
72 A She lowers the lever.
* 73 A Far below, the bridge begins to rise, a vast iron hinge turning against the night sky, and every car on both banks goes still.
74 D NATHANIEL: What are you doing?
75 D HARRIET: Giving the river a minute.
* 76 A ¶ The sirens grow.
* 77 A The bridge lifts.
78 A Two figures, the tender and the thief, sit side by side in the booth, drinking from the same thermos, listening to the jazz.

### SCENE s00568 | INT. COUNTY COURTHOUSE - SUBBASEMENT ARCHIVE - DAY
Detected names (may be incomplete or contain aliases): COUNSEL ELIAS PRESCOTT, SALMA RAHIMI-DUBOIS, EULALIE FONTAINE
* 1 A ¶ Steel shelves in ranks, boxed files stacked to the ceiling, a bare bulb on a cord.
* 2 A The air smells of paper rot and lemon oil.
* 3 A At the end of one aisle, a folding table has been set for a deposition.
4 A ¶ COUNSEL ELIAS PRESCOTT, 50s, in a rumpled navy suit, sits with a legal pad and a pen he clicks nervously.
5 A SALMA RAHIMI-DUBOIS, 30s, a court reporter, hunches over a steno machine, fingers poised.
6 A EULALIE FONTAINE, 70s, the witness, in a lace collar and sensible shoes, sits across the table with a handbag in her lap and a face like a closed book.
7 D PRESCOTT: Mrs. Fontaine, please state your name for the record.
8 D EULALIE: Eulalie Marguerite Fontaine.
9 D PRESCOTT: And you were employed as the archivist here from 1988 to 2019?
10 D EULALIE: Thirty-one years.
11 D PRESCOTT: During that time, you maintained the records of all property transfers in this county.
12 D EULALIE: I maintained them. I did not alter them.
13 D PRESCOTT: No one has said you did.
14 D EULALIE: You are about to.
15 A ¶ Prescott's pen stops clicking.
16 A Salma's fingers flit across the keys, catching every word.
17 D PRESCOTT: Mrs. Fontaine, I'm handing you Exhibit F. Do you recognize it?
18 D EULALIE: It is a deed.
19 D PRESCOTT: For which parcel?
20 D EULALIE: Lot 14, Mill Street.
21 D PRESCOTT: Whose signature is that?
22 D EULALIE: Hmm. It appears to be Mr. Aldous Quinn's.
23 D PRESCOTT: And do you see a notary seal?
24 D EULALIE: I do.
25 D PRESCOTT: Whose?
26 D EULALIE: Mine.
* 27 A ¶ A beat.
* 28 A The bulb sways.
* 29 A Dust floats down through its glow.
30 D PRESCOTT: Did you notarize this document, ma'am?
31 D EULALIE: I did not.
32 D PRESCOTT: But it bears your seal.
33 D EULALIE: It does.
34 D PRESCOTT: Then who stamped it?
35 D EULALIE: Someone with a key to my drawer.
36 A ¶ Salma stops typing.
37 A Looks up.
38 A Eulalie meets her gaze, then turns back to Prescott.
39 D EULALIE [CONT'D]: Mr. Prescott. I have kept that drawer locked for thirty-one years. I have given one key to one person. I have never regretted it until this morning.
40 D PRESCOTT: Who has the key, Mrs. Fontaine?
41 D EULALIE: Your client.
* 42 A ¶ The pen drops.
43 A Prescott does not pick it up.
44 A His face is white.
45 A Salma's fingers resume, steadier now, taking down every syllable.
46 D PRESCOTT (quietly): Madam reporter, strike that.
47 D SALMA: I can't strike it. It's on the record.
48 D PRESCOTT: Strike it.
49 D SALMA (firmly): No, sir.
50 A ¶ Eulalie opens her handbag.
51 A Takes out a ring of keys.
52 A Sets it gently on the table, with a small clink that echoes through the stacks.
53 D EULALIE: There are two. Mine, and his.
54 A ¶ She slides the ring toward Prescott.
55 A He stares at it.
* 56 A Overhead, the bulb flickers.
* 57 A The archive hums.

### SCENE s00569 | INT. GRAND PALMERSTON HOTEL - VENTRILOQUISTS' CONVENTION - BACKSTAGE - NIGHT
Detected names (may be incomplete or contain aliases): ANNUAL INTERNATIONAL CONGRESS VENTRILOQUISTS, MORTIMER PLUMLEY, BEATRICE OKONJO, HUGO VANDERKELEN, MRS. PEMBERTON
* 1 A ¶ A cramped green room crowded with trunks of wooden dummies.
* 2 A Glass eyes glint from hat boxes.
* 3 A A sign above the door reads: ANNUAL INTERNATIONAL CONGRESS OF VENTRILOQUISTS - 47TH YEAR.
* 4 A Muffled applause drifts through the wall.
5 A ¶ MORTIMER PLUMLEY, 50s, a tuxedo and a hairpiece, sits before a mirror, adjusting a dummy on his knee: a wooden schoolboy in a cap, grinning.
6 A BEATRICE OKONJO, 40s, in a sequined gown, tunes a puppet duck.
7 A HUGO VANDERKELEN, 30s, a nervous newcomer in a rented tux, clutches a lone lamb-shaped sock puppet.
8 D MORTIMER: Quiet, Hugo. You're twitching.
9 D HUGO: I'm not twitching.
10 D BEATRICE: You are twitching.
11 D HUGO: It's a tic.
12 D MORTIMER: A tic is fine. A twitch is a tell.
13 D HUGO: Mortimer, I can't do this.
14 D MORTIMER: Of course you can.
15 D HUGO: My lamb has no personality.
16 D MORTIMER: Then give it one.
17 D HUGO: How?
18 D MORTIMER (in his dummy's voice, high and cheeky): Just make it sassy!
* 19 A ¶ The dummy's mouth clacks.
* 20 A Beatrice's duck quacks in agreement.
* 21 A Hugo's lamb droops.
* 22 A A speaker above the door crackles.
23 D MRS. PEMBERTON [V.O.] (over PA, brisk): Attention, ventriloquists. The Congress will begin the Grand Finale in ten minutes. Contestants please report to the stage left wing. That includes Mr. Vanderkelen.
24 D HUGO (squeaking): She said my name.
25 D BEATRICE: She says everyone's name.
26 D MORTIMER (as the dummy): Don't wet yourself, kid.
27 D HUGO: I'm going to be sick.
28 D BEATRICE: Not on the duck.
29 A ¶ She turns the duck away.
* 30 A Mortimer's dummy slides off his knee and tumbles across the floor into a pile of trunks.
31 A He lunges.
32 A Hugo lunges.
33 A Beatrice lunges.
34 A All three collide, the duck squawking, the lamb flying through the air, wooden limbs rattling.
35 A ¶ Mortimer lands on top of Hugo.
36 A Beatrice lands on both.
* 37 A The dummy lands upright on a trunk, grinning.
38 D MORTIMER (muffled): Get off.
39 D HUGO (muffled): I can't.
40 D BEATRICE: Everyone get off me!
41 D MRS. PEMBERTON [V.O.] (over PA): Contestants. Eight minutes.
42 A ¶ They untangle.
43 A Beatrice dusts off her gown.
44 A Hugo retrieves the lamb, its ear torn.
45 A Mortimer tests the dummy's jaw.
46 D HUGO: Is it broken?
47 D MORTIMER: Cheek's loose.
48 D BEATRICE: Duct tape.
49 D MORTIMER: I don't carry duct tape to a gala.
50 D BEATRICE: I do.
51 A ¶ She digs into her purse and produces a roll.
52 A Together they bind the dummy's jaw, then the lamb's ear.
53 A Hugo is breathing steadier now.
54 D HUGO: It looks ridiculous.
55 D MORTIMER: Ridiculous wins.
56 D BEATRICE: Ridiculous is the whole point.
57 D HUGO: What if I freeze?
58 D MORTIMER: Then freeze.
59 D HUGO: That's your advice?
60 D MORTIMER: Freeze convincingly.
61 A ¶ Beatrice laughs.
* 62 A A spotlight flares in the doorway.
* 63 A The applause on the other side of the wall swells.
64 D MRS. PEMBERTON [V.O.] (over PA): Five minutes!
65 D HUGO (squeaking): Five minutes!
66 D BEATRICE: You'll be fine.
67 D MORTIMER (as the dummy): Break a leg, lamb chop.
68 D HUGO (in a tiny lamb voice, trembling): Baa.
69 A ¶ They all stare at the lamb, which, for the first time, seems to look back.
70 D MORTIMER: There it is.
71 D BEATRICE: That's personality.
72 D HUGO (lamb voice, firm): Baa!
73 A ¶ He marches to the door, lamb on hand, chin up.
74 A Beatrice and Mortimer follow, one with a duck under her arm, one with a taped dummy on his shoulder.
* 75 A The curtain parts.
* 76 A Light and applause flood in.
77 A They step through.

### SCENE s00570 | INT. FUNICULAR CAR - MIDNIGHT - STUCK MID-SLOPE
Detected names (may be incomplete or contain aliases): DESMOND WREN, STRANGER, ODALYS
* 1 A ¶ Rain on glass.
* 2 A One bulb flickers.
* 3 A Cable groans.
4 A ¶ DESMOND WREN, 50s, ticket inspector, brass whistle on a cord, grips a clipboard.
5 A Across from him, a STRANGER in a dripping yellow poncho.
6 A Smiling.
7 D DESMOND: We've been stopped eleven minutes.
8 D STRANGER: Twelve.
9 D DESMOND: You're counting.
10 D STRANGER: Everyone counts, Mr. Wren. You counted the passengers at the top. Forty-one up. Forty down.
11 D DESMOND: How do you know my name?
12 D STRANGER: Same way I know about the missing one. The man who rode up and never rode down.
13 D DESMOND: Nobody's missing. The log is clean.
14 D STRANGER: You wrote the log.
15 D DESMOND: Who are you?
16 D STRANGER: Who are you?
17 D DESMOND: Don't.
18 D STRANGER: My name is Odalys. His sister.
19 A ¶ The whistle snaps off its cord.
20 D ODALYS: Where is he, Desmond?
21 D DESMOND: Under the lower platform. God forgive me.
* 22 A ¶ The cable SCREAMS.
* 23 A The car lurches.

### SCENE s00571 | INT. RIVERBOAT COURTROOM - DAY
Detected names (may be incomplete or contain aliases): MARGUERITE VOSS, ELIAS THORNQUIST, JUDGE PRUITT, BAILIFF KRAUSE, ILSA BRANDVOLD
* 1 A ¶ A county courtroom built into the old gambling deck of a paddle steamer, moored permanently at the levee.
* 2 A Brass chandeliers.
* 3 A Faded green carpet stamped with playing-card suits.
* 4 A Through the tall windows, the brown river slides past.
5 A ¶ MARGUERITE VOSS, 40s, defense counsel, navy suit, reading glasses pushed into silver-black hair, stands at the lectern.
6 A At the other table, ELIAS THORNQUIST, 60, prosecutor, rumpled, a pocket watch chain across his vest, watches her with weary patience.
7 A ¶ On the bench sits JUDGE PRUITT, 70, silver pompadour, half-moon spectacles, a gavel carved like a riverboat wheel.
8 A ¶ BAILIFF KRAUSE, 30s, broad, stands by the door with folded hands.
9 A On the stand, ILSA BRANDVOLD, 50s, a dock clerk in her Sunday best, twists a handkerchief.
10 D VOSS: Miss Brandvold, you've told this court you saw the lantern at ten o'clock.
11 D BRANDVOLD: Yes, ma'am.
12 D VOSS: And that you were certain of the hour.
13 D BRANDVOLD: The ten o'clock whistle had blown. I always know by the whistle.
14 D VOSS: The whistle at the lower landing.
15 D BRANDVOLD: Yes.
16 D VOSS: Which was taken out of service on the third of March.
17 A ¶ Brandvold's handkerchief stops moving.
18 D BRANDVOLD: Was it?
19 D VOSS: The county ordinance is Exhibit Fourteen. The occurrence was the ninth.
20 D THORNQUIST (rising): Your Honor, counsel is testifying.
21 D PRUITT: Sit down, Elias. She's cross-examining. It's what the lady is paid for.
22 A ¶ Thornquist sits.
23 A He smiles slightly, almost to himself.
24 D VOSS: Miss Brandvold, was there a different whistle?
25 D BRANDVOLD: The upriver one, maybe. From the cannery.
26 D VOSS: Which blows at a quarter past.
27 D BRANDVOLD: I may have been wrong about the time.
28 A ¶ A murmur ripples through the gallery.
29 A Pruitt raps once.
30 D PRUITT: Order. Mr. Krause, the doors.
31 A ¶ Krause opens the doors; a breeze off the river lifts the papers on both tables.
32 D VOSS: Miss Brandvold, I don't want to embarrass you.
33 D BRANDVOLD: You haven't, ma'am. I'd rather be wrong out loud than right and keep quiet.
34 A ¶ Voss takes off her glasses.
35 A She lets that settle.
36 D VOSS: Nothing further.
37 D PRUITT: Mr. Thornquist?
38 D THORNQUIST: Just one, Judge. Miss Brandvold. Whatever the hour, the lantern. You saw it.
39 D BRANDVOLD: I saw it.
40 D THORNQUIST: Where?
41 D BRANDVOLD: On the Hollis dock. Same as always.
42 D THORNQUIST: Thank you. That's all.
43 D VOSS (rising): Your Honor, in light of the testimony, the defense moves to dismiss.
44 D THORNQUIST (rising): Your Honor, the state withdraws the second count.
45 D VOSS: You're withdrawing?
46 D THORNQUIST: I'd be a fool to hold a case together with a whistle that doesn't work.
47 D PRUITT: Counsel, approach.
48 A ¶ They approach the bench.
49 A Pruitt lowers his voice, but the room is small and the wood carries it.
50 D PRUITT [CONT'D]: Marguerite, I've watched you take apart three of Elias's cases this term.
51 D VOSS: Thank you, Judge.
52 D PRUITT: It wasn't a compliment. He lets you.
53 D THORNQUIST: That's a lie, Walter.
54 D PRUITT: It's Your Honor in my courtroom.
55 D THORNQUIST: It's a boat, Walter.
56 A ¶ Pruitt sighs and rubs the bridge of his nose.
57 D PRUITT: Count two is dismissed. Count one will be heard Thursday. Mr. Krause, please escort Miss Brandvold out by the forward stairs.
58 A ¶ Krause crosses to the stand and offers his arm.
59 A Brandvold takes it, shaky.
60 D BRANDVOLD: I hope I didn't do harm.
61 D KRAUSE: No, ma'am. You told the truth. That's the job.
62 A ¶ They exit.
63 A Pruitt gathers his robes and steps down.
64 A Voss and Thornquist remain, packing files.
65 D THORNQUIST: Dinner at the Delta Queen?
66 D VOSS: You're buying.
67 D THORNQUIST: I'm always buying.
68 D VOSS: That's because you always lose.
69 D THORNQUIST: No. That's because I like the company.
70 A ¶ She laughs, finally.
71 A Together they walk out into the afternoon, past the dealers' cages now stripped to their brass.
* 72 A ¶ The river keeps moving.

### SCENE s00572 | INT. HOLLOW OAK MARKET - NIGHT
Detected names (may be incomplete or contain aliases): ORSOLYA, BRANWICK, PIPKO, HAJI TESFAYE
* 1 A ¶ A trunk wider than a barn, hollowed out and hung with lanterns.
* 2 A Stalls climb the inner walls on rope ladders.
* 3 A Fireflies drift between the rafters.
* 4 A The air smells of resin and hot sugar.
5 A ¶ At a low stall: ORSOLYA, 40s, apothecary, moth-wing scarves wrapped to the elbow, ink on her fingertips.
6 A Sells lanterns.
* 7 A None are lit.
8 A ¶ BRANWICK, 60s, a retired knight whose armor is long gone, wears a farmer's coat that doesn't fit his shoulders.
9 A He stands before the stall with his hat in his hands.
10 D ORSOLYA: Walking light or hanging light?
11 D BRANWICK: Hanging.
12 A ¶ She lifts a small tin lantern.
13 A He doesn't look at it.
14 D BRANWICK [CONT'D]: Bigger.
15 D ORSOLYA: For a barn?
16 D BRANWICK: For a window.
17 A ¶ She sets down the tin one.
18 A Lifts a larger one with a blue glass panel.
19 D ORSOLYA: Blue's for waiting.
20 D BRANWICK: That one's fine.
21 A ¶ PIPKO, 9, ash on her cheek, apprentice, sits cross-legged behind the counter threading wicks.
22 A She watches Branwick without pretending not to.
23 D PIPKO: He bought a blue one last year.
24 D ORSOLYA: Pipko.
25 D PIPKO: Same shoes. Same hat. He turned it in his hands like that.
26 A ¶ Branwick turns the hat in his hands.
27 A Stops.
28 D BRANWICK: Lantern's broke. The window lets in a draft.
29 D ORSOLYA: The window.
30 D BRANWICK: Yes.
31 A ¶ She nods, as if this is a perfectly reasonable thing.
32 A She wraps the lantern in cloth.
33 A ¶ A third voice, from above: HAJI TESFAYE, 70s, a merchant lowering himself down a rope ladder with a basket of candles, one hand over the other.
34 D TESFAYE: Orsolya! The Duskwife says the wicks need wax by morning!
35 D ORSOLYA: Then she can have wax by morning.
36 D TESFAYE (landing): Evening, Sir Branwick.
37 D BRANWICK: Not "Sir."
38 D TESFAYE: Evening, Branwick.
39 A ¶ Branwick counts coins into Orsolya's palm.
* 40 A Too many.
41 A She slides two back, firmly, and he pockets them without a word.
42 D PIPKO: You have to light it from a flame that someone gave you. Not one you made.
43 D BRANWICK: I know the rule.
44 D PIPKO: Last year's was still burning when I walked past the barn.
* 45 A ¶ Silence.
46 A Orsolya reaches under the counter and takes out a stub of candle, already lit.
47 A She offers it to him in a clay dish.
48 D ORSOLYA: Mine. Take it.
49 A ¶ He takes the dish with both hands, as if it might spill.
50 A Tesfaya sets down the basket and starts to hum something old.
51 D BRANWICK: How much for the wax?
52 D ORSOLYA: Nothing. Bring the dish back.
53 D BRANWICK: I will.
54 A ¶ He settles his hat on his head, tucks the lantern under his arm, and walks off carefully through the hanging lights.
55 D PIPKO: He will.
56 D ORSOLYA: Thread your wicks.

### SCENE s00573 | EXT. WHALE-RIB BRIDGE - DUSK
Detected names (may be incomplete or contain aliases): GRUB MAWDLEY, TAMSIN, ROOK, STRANGER, ZEPHYRINE
* 1 A ¶ A bridge of bleached ribs over a gorge.
* 2 A Fog below.
* 3 A A toll hut perched at the midpoint.
4 A ¶ GRUB MAWDLEY, goblin, one eye, sits on the toll barrel.
5 A Chewing.
6 A ¶ Two pilgrims approach: TAMSIN, young, sword too big for her, and ROOK, old, hooded, leaning on a staff.
7 A ¶ Behind them, a STRANGER in grey rags, bare feet.
8 A Silent.
9 A Following.
10 D MAWDLEY: Toll. Two coppers. Each.
11 D TAMSIN (to Rook): He's got no right. The queen abolished tolls.
12 D ROOK (muttering): Queens abolish. Goblins collect.
13 D MAWDLEY: Three coppers. I heard that.
14 D TAMSIN: Fine.
15 A ¶ She counts coins.
16 A Mawdley bites each one.
17 A The Stranger steps up beside them.
18 D MAWDLEY [CONT'D]: And you? Rags. Nothing to pay with?
19 D STRANGER: I pay differently.
20 D MAWDLEY: Everybody says that.
21 D TAMSIN: Don't test him.
22 D MAWDLEY: Don't test me.
23 A ¶ Tamsin and Mawdley glare at each other.
* 24 A Fog thickens.
* 25 A The ribs begin to hum.
26 D ROOK (to everyone): Step back. All of you. Now.
27 A ¶ The Stranger throws back the hood.
* 28 A Silver hair.
* 29 A Eyes like struck flint.
30 D STRANGER: Zephyrine.
31 A ¶ Mawdley drops the coin.
* 32 A The bridge SHUDDERS.
33 D ZEPHYRINE: I built this bridge. You've been charging for my bones.
34 D MAWDLEY (whispering): Oh, no.
* 35 A ¶ The ribs CRACK.
* 36 A Light floods upward from the gorge.

### SCENE s00574 | INT. SIGNAL RELAY HUT - HIMALAYAN PASS - DAY
Detected names (may be incomplete or contain aliases): HAKIM BARAKZAI, LUCJAN NOWAK, COMMAND, MEDIC ANNELI SAARI
* 1 A ¶ Stone walls.
* 2 A Tin roof ticking in the wind.
* 3 A A hand-crank radio on a plank table.
* 4 A Frost on the window.
* 5 A 1962.
6 A ¶ SGT. HAKIM BARAKZAI, 40, beard gone grey at the chin, sits on an ammo crate.
7 A Mending a boot.
8 A Slow.
9 A ¶ PVT.
10 A LUCJAN NOWAK, 19, shivering, wrapped in two blankets, stares at the stove.
11 A Feeds it one stick at a time.
12 D NOWAK: Last of the wood.
13 D BARAKZAI: Burn the crate after.
14 D NOWAK: Which crate?
15 D BARAKZAI: The one you're not sitting on.
* 16 A ¶ Static.
* 17 A A crackle from the radio.
18 D COMMAND [V.O.] (garbled): Relay Nine, Relay Nine. Report status. Over.
19 A ¶ Barakzai crosses and takes the handset.
20 D BARAKZAI: Command, Relay Nine. Two men. One stove. No contact. Over.
21 D COMMAND [V.O.]: Copy two men. Supply drop postponed. Weather. Over.
22 D BARAKZAI: Understood. Out.
23 A ¶ He hangs up.
24 A Nowak keeps his eyes on the flames.
25 D NOWAK: That's the third postponement.
26 D BARAKZAI: Fourth. You weren't counting.
* 27 A ¶ The door BANGS open.
* 28 A Wind and snow.
29 A A figure in a white parka stumbles in, shoulders a medical satchel: MEDIC ANNELI SAARI, 30, Finnish, windburned face, ski goggles pushed up.
30 A She slams the door behind her.
31 D SAARI: Which of you is Barakzai?
32 D BARAKZAI: Me.
33 D SAARI: Good. I walked nine hours. Is there tea?
34 D NOWAK: No.
35 D SAARI: Is there anything?
36 D BARAKZAI: Boiled snow.
37 D SAARI (dropping her satchel): Then boil it.
38 A ¶ Nowak scrambles for the kettle.
39 A Saari sits heavily next to Barakzai and pulls off a glove, examining her blue fingertips.
40 D BARAKZAI: Command said no supply.
41 D SAARI: Command said nothing to me. I was sent for the private's feet.
42 D NOWAK: My feet are fine.
43 D SAARI: Take your boots off.
44 D NOWAK: They're fine.
45 D BARAKZAI: Take them off, Lucjan.
46 A ¶ Reluctantly, Nowak peels off a boot and a grey sock.
* 47 A The toes are white.
48 A Saari looks, then at Barakzai.
49 D SAARI: Fine. For now.
50 D COMMAND [V.O.] (over radio): Relay Nine, be advised, weather window tomorrow oh-six-hundred. Over.
51 A ¶ Barakzai doesn't move to answer.
52 A He looks at the kettle, at the stove, at the two young faces.
53 D BARAKZAI: Tomorrow, then.

### SCENE s00575 | INT. COIN LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): LINH TRAN, BAO, DI HOA, FAIRWEATHER
* 1 A ¶ Fluorescent hum.
* 2 A Rows of orange plastic chairs.
* 3 A Forty dryers, all still.
* 4 A Rain streaks the plate glass.
5 A ¶ LINH TRAN, 32, wiry, scrubs under a parka, stands over a washer holding a pewter urn against her chest.
6 A Her brother BAO, 28, in a rumpled suit, blocks the aisle.
7 D BAO: Give it to me.
8 D LINH: You said you'd drive it to Da Nang. You haven't left the city in nine years.
9 A ¶ At the folding table, their aunt DI HOA, 60s, in a quilted housecoat, folds the same towel again and again.
10 D BAO: Mom wanted it scattered. Not carried around in a laundromat.
11 D LINH: She wanted it by her sister.
12 D DI HOA (without looking up): She wanted quiet.
13 A ¶ They both turn.
14 A Bao lunges for the urn.
15 A Linh pivots; the urn swings between them, lid chattering.
16 A They both freeze, breath held.
17 A ¶ MR. FAIRWEATHER, 70s, the night attendant, cardigan and slippers, shuffles out of the back with a mop and a bucket.
18 D FAIRWEATHER: Folks. Closing in ten.
19 D LINH: We're not done.
20 D FAIRWEATHER: Ten minutes.
21 A ¶ Bao and Linh drop their hands at the same moment.
* 22 A The lid slips and lands on the tile with a loud, clear ring.
23 A Nobody moves.
24 A ¶ Di Hoa stands, steps over, and picks it up.
25 A She sets it on the lid of the washer, puts the urn back on top, and clicks it shut.
26 D DI HOA: Both of you. Sit.
27 A ¶ They sit.
* 28 A The rain keeps falling.

### SCENE s00576 | INT. ABANDONED CANNERY - SUBLEVEL FREIGHT ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): IONA MACREADY, TEDDY BOLA, PRIYA SUNDARAM, GIDEON FARROW, NICO
* 1 A ¶ The cage is the size of a small room, riveted iron gone the color of old blood.
* 2 A A single caged bulb swings on its wire.
* 3 A Below the grated floor, black water slaps against pilings, in no rhythm that a tide would keep.
4 A ¶ IONA MACREADY, 30s, the surveyor, holds a clipboard against her chest like a shield.
5 A Beside her, TEDDY BOLAÑO, 20s, her assistant, shaves the dust off his lantern's glass with his thumb.
6 A DR. PRIYA SUNDARAM, 50s, a marine biologist with cropped silver hair and a field vest of many pockets, crouches to put her ear against the iron floor.
7 A ¶ Against the far wall, GIDEON FARROW, 70s, the last cannery watchman, leans on a boat hook.
8 A Tucked behind his legs, as if he did not want to be seen being there, is NICO, 8, his grandson, in a yellow slicker two sizes too big.
9 D IONA: How many floors down?
10 D GIDEON: Four. Maybe five.
11 D IONA: The plans say three.
12 D GIDEON: The plans say a lot of things.
* 13 A ¶ The cage lurches.
* 14 A The bulb swings wild; shadows leap and tangle on the walls.
15 A Nico grabs his grandfather's coat.
16 D PRIYA (standing): Something is moving the water. Not the tide.
17 D TEDDY: Maybe a pipe.
18 D PRIYA: A pipe doesn't breathe.
19 A ¶ They look at her.
* 20 A Water below the floor pulls back, a long slow draw, as if the sea were inhaling.
* 21 A The grating rattles.
22 A All five freeze.
23 D NICO: Granddad. It's in the elevator.
24 D GIDEON: Hush.
25 D NICO: It's under my feet.
* 26 A ¶ The floor grating bulges upward.
* 27 A Pale fingers, too many, slip through the slots.
28 A Teddy screams, drops the lantern.
29 A Iona yanks Nico into her arms while Gideon swings the boat hook down onto the grate with a hollow clang.
* 30 A The fingers withdraw, quick as eels.
* 31 A ¶ Dark.
* 32 A A pulse of lamplight, then dark again.
* 33 A The bulb flickers back on.
34 A ¶ Everyone is breathing hard.
* 35 A Nobody speaks.
* 36 A Then:
37 D PRIYA: It didn't want us. It wanted the light.
38 D IONA: How do you know?
39 D PRIYA: It stopped when the lantern fell.
40 D TEDDY: Then we stay in the dark.
41 D GIDEON: We tried that. Nineteen sixty-one. The lamp went out and the crew all rode down singing. Nobody rode back.
42 D NICO: Why were they singing?
43 D GIDEON: Because it asked them nicely.
* 44 A ¶ The cage drops.
* 45 A Not a lurch this time: a plunge, a controlled, fast, deliberate fall.
46 A Iona clutches the clipboard.
47 A Priya braces against the wall.
48 A Teddy sinks down with his head between his knees.
49 A Gideon lifts the hook and holds it level like a lance.
* 50 A ¶ The fall stops.
* 51 A A soft thud.
* 52 A The iron door slides open on its own.
* 53 A ¶ Beyond: a vaulted hall of wet stone, lit by something green and far off.
* 54 A A hum rises, many voices, tuneless, patient, familiar.
55 A Nico, in Iona's arms, tilts his head.
56 D NICO: Mama?
57 D IONA: No. No, baby. No.
58 A ¶ She turns his face into her shoulder.
* 59 A The hum grows warmer, kinder.
60 D TEDDY (whispering): I can hear my dad.
61 D PRIYA: Everyone, hold your breath. If you can't hear it, it can't use you.
62 A ¶ They hold.
* 63 A The hum swells to a sweet pitch, then breaks into a single laugh.
64 A Gideon lowers the boat hook.
65 D GIDEON (quiet): It's laughing at the rule.
* 66 A ¶ The elevator door starts to close.
67 A The five of them stare at the narrowing gap, not one of them moving toward it, and not one of them moving away.

### SCENE s00577 | EXT. GLACIER CREVASSE - DAY
Detected names (may be incomplete or contain aliases): KWABENA ADDO, BJORN HALVORSEN
* 1 A ¶ Blue walls.
* 2 A Forty feet of ice above, a slot of white sky.
* 3 A Wind whistles across the top like a flute.
4 A ¶ At the bottom, on a ledge no wider than a door: KWABENA ADDO, 40s, Ghanaian geologist, burly, beard crusted with frost, left leg bent wrong at the shin.
* 5 A ¶ A rope dangles ten feet above.
* 6 A Swinging.
* 7 A Cut at the end.
8 A ¶ Two meters below him, on a lower shelf: BJORN HALVORSEN, 50s, Norwegian guide, lean as a rake, gray eyes, bleeding from his scalp.
9 A He doesn't move.
10 D KWABENA: Bjorn.
11 A ¶ Nothing.
12 D KWABENA [CONT'D]: Bjorn!
* 13 A ¶ The wind.
* 14 A A dripping sound.
15 A ¶ Bjorn's hand twitches.
16 A Opens.
17 A Closes.
18 D BJORN (hoarse): Don't shout. The ice listens.
19 D KWABENA: You're alive.
20 D BJORN: Don't sound so disappointed.
21 A ¶ He rolls to his side.
22 A Pushes up on one elbow.
23 A Blood runs down his cheek.
24 A He wipes it with a glove, stares at the red.
25 D KWABENA: Can you climb?
26 D BJORN: Can you?
27 D KWABENA: My leg.
28 D BJORN: Then no.
29 A ¶ Bjorn crawls to the lip of his shelf.
30 A Looks up the wall.
31 A His breath fogs.
32 A He reaches out and grips a protrusion of ice, tests it with his weight.
* 33 A ¶ It holds.
34 D KWABENA: He cut the rope.
35 D BJORN: Who?
36 D KWABENA: Anders. He let go on purpose.
37 D BJORN: He was scared.
38 D KWABENA: He was a coward.
39 D BJORN: Same thing, down here.
* 40 A ¶ Silence.
* 41 A Drips.
* 42 A Far off, a deep CRACK rolls through the glacier like a door slamming in a house the size of a mountain.
43 A ¶ Both men freeze.
44 D KWABENA: That's close.
45 D BJORN: Don't breathe.
46 A ¶ They don't.
* 47 A Ice dust sifts down.
* 48 A Settles on Kwabena's eyelashes.
* 49 A On Bjorn's shoulders.
* 50 A The crack fades.
51 D BJORN [CONT'D]: Okay. Now you breathe.
52 A ¶ Kwabena lets out a ragged exhale, laughs, coughs.
53 D KWABENA: You Norwegians.
54 D BJORN: You Ghanaians.
55 D KWABENA: What about us?
56 D BJORN: You laugh when you should be afraid.
57 D KWABENA: I laugh because I am afraid.
58 A ¶ Bjorn considers this.
59 A Nods.
60 A Unslings his pack.
61 A Digs.
62 A ¶ He pulls out: a coil of thin cord, two ice screws, a pocket knife, half a chocolate bar.
63 D BJORN: Inventory.
64 D KWABENA: That's all?
65 D BJORN: That's all.
66 A ¶ He tosses the chocolate.
67 A Kwabena catches it one-handed.
68 A Breaks it in two.
69 A Throws half back.
70 D KWABENA: Your turn to eat.
71 D BJORN: You're hurt worse.
72 D KWABENA: Eat.
73 A ¶ Bjorn eats.
74 A Chews slowly.
75 A Studies the wall.
76 D BJORN: There's a lip. Twelve feet up. Past it, a chimney.
77 D KWABENA: You can see that?
78 D BJORN: I can see the shadow of it.
79 A ¶ He clips an ice screw to his belt.
80 A Twists the second between his fingers like a pen.
81 D BJORN [CONT'D]: I'll go up. Anchor. Drop the cord.
82 D KWABENA: And if the ice breaks?
83 D BJORN: Then you'll have the chocolate.
84 A ¶ Kwabena shakes his head, grinning in spite of himself.
85 A ¶ Bjorn plants a boot.
86 A Presses a glove to the wall.
87 A Begins to climb, metal clicking on blue.
* 88 A ¶ Six feet.
* 89 A Eight.
90 A He stops.
91 A He's breathing hard, forehead against the ice.
92 D KWABENA: Bjorn.
93 D BJORN: Quiet.
* 94 A ¶ Another CRACK, closer.
95 A Bjorn flattens against the wall.
96 A Kwabena braces his good leg against the ledge.
* 97 A ¶ The wall shudders.
* 98 A A sheet of ice the size of a car door sheers away from the opposite side and shatters on the shelf between them.
* 99 A ¶ Silence.
100 A Both men stare at the wreckage.
101 D BJORN [CONT'D] (quiet): Now.
102 A ¶ He climbs.
103 A Fast now.
* 104 A Ten feet.
* 105 A Eleven.
106 A His hand finds the lip, grips, pulls.
107 A He rolls over the top of the ledge and disappears.
108 A ¶ Kwabena waits.
* 109 A Seconds.
* 110 A A minute.
* 111 A ¶ Then the cord drops, snaking down, dancing in the draft.
* 112 A It lands across his lap.
113 D BJORN [O.S., CONT'D]: Tie in. Slowly.
114 A ¶ Kwabena ties the cord around his chest, hands trembling.
115 A He tugs it twice.
116 A Tugs again.
117 D KWABENA: Ready.
118 D BJORN [O.S.]: Say it in your language.
119 D KWABENA: Say what?
120 D BJORN [O.S.]: The thing you say before you do something stupid.
121 D KWABENA (smiling): Nyame nti.
122 D BJORN [O.S.]: That. Do that.
* 123 A ¶ The cord goes tight.
124 A Kwabena lifts off the ledge, swinging, grunting, and rises into the white.

### SCENE s00578 | INT. ALLEY LANES BOWLING - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DOMMY ESPOSITO, BIG LOU DEVEREAUX, FINGERS MCAVOY, TILLIE KOWALCZYK, JUNE ABERNATHY-SOTO, SANDOVAL
* 1 A ¶ 1950s.
* 2 A A table under a hanging green lamp.
* 3 A Smoke curls up through the cone of light.
* 4 A Through a swinging door, the muffled crash of pins.
5 A ¶ DOMMY ESPOSITO, 50, silk vest, pomaded hair, sits at the head of the table dealing a patience hand.
6 A At his right, BIG LOU DEVEREAUX, 40s, a mountain in an overcoat, looks at nothing.
7 A Opposite them, FINGERS MCAVOY, 30s, nervous, a bandaged hand in his lap.
8 A TILLIE KOWALCZYK, 50s, bookkeeper, ledger open, sips cold coffee.
9 A ¶ JUNE ABERNATHY-SOTO, 20s, a waitress in a pink uniform, sets a tray of beers on the sideboard and tries to leave unnoticed.
10 D DOMMY: Stay a second, June.
11 D JUNE: Mr. Esposito, I have the four lanes.
12 D DOMMY: Four lanes can wait on a lady.
13 A ¶ She stays.
14 A Stands very still.
15 D TILLIE: The ledger's off by two thousand, Dommy.
16 D DOMMY: I know, Tillie.
17 D TILLIE: That's not a rounding error.
18 D DOMMY: I know.
19 A ¶ He turns a card.
* 20 A Red queen.
21 A He puts it on a black king.
22 D DOMMY [CONT'D]: Fingers. How's the hand?
23 D FINGERS: It's getting better. Doc says six weeks.
24 D DOMMY: Who did it?
25 D FINGERS: A door.
26 D DOMMY: A door.
27 D FINGERS: Slammed on it. In the garage.
28 D BIG LOU (low): He's lying, boss.
29 D FINGERS: Lou, come on.
30 D BIG LOU: You went to the track Tuesday. Sandoval's boys picked you up.
* 31 A ¶ The phone on the sideboard RINGS.
32 A Everyone looks at it.
* 33 A It rings again.
34 D DOMMY: June. Get that.
35 A ¶ She picks it up with two fingers.
36 D JUNE: Alley Lanes.
37 D SANDOVAL [O.S.] (through the receiver, tinny): Put Dommy on.
38 D JUNE: Mr. Esposito, it's a Mr. Sandoval.
39 A ¶ Dommy takes the receiver, keeps his eyes on Fingers.
40 D DOMMY: Ray. Good evening.
41 D SANDOVAL [O.S.]: Dommy. Your boy owes me four.
42 D DOMMY: Four thousand?
43 D SANDOVAL [O.S.]: Four thousand and a hand's worth of apology.
44 D DOMMY: You took the hand already.
45 D SANDOVAL [O.S.]: I took the hand. I want the four.
46 A ¶ Dommy hangs up, gently.
47 A Looks at Tillie.
48 A At Big Lou.
49 A At Fingers, who shrinks.
50 D DOMMY: Tillie. The two thousand that's missing.
51 D TILLIE: Yes?
52 D DOMMY: It's in Ray Sandoval's pocket.
53 A ¶ Fingers puts his good hand over his face.
54 A Big Lou stands slowly.
55 A Dommy raises one finger and Big Lou sits again.
56 D DOMMY [CONT'D]: Sit, Lou. We're a family here. June, honey, bring Fingers a whiskey.
57 A ¶ June pours a shot with a trembling hand and sets it in front of him.
58 A He doesn't touch it.
59 D DOMMY [CONT'D]: Drink. It's an order.
60 A ¶ Fingers drinks.
61 A Dommy turns the next card.
62 D DOMMY [CONT'D]: Tomorrow you go pay Ray what you owe, out of your own pocket, over the next ten years. And you thank him.
63 D FINGERS: Yes, boss.
64 D DOMMY: Tillie, fix the books.
65 D TILLIE: It'll take till Friday.
66 D DOMMY: Take till Friday.
* 67 A ¶ Out in the lanes, a ball thunders.
* 68 A Ten pins fall at once.
* 69 A A cheer goes up, far off, innocent.
70 A ¶ Dommy places the last card.
71 D DOMMY [CONT'D]: Game's out.

### SCENE s00579 | EXT. EIFFEL TOWER - SECOND PLATFORM SCAFFOLD - DAY (1888)
Detected names (may be incomplete or contain aliases): ODETTE LACROIX, JULES PERRIN, INSPECTOR MAXIME BOUCHARD
* 1 A ¶ Wind.
* 2 A Paris spreads below like a map.
* 3 A Iron beams ring with hammers.
4 A ¶ She crouches on a plank, a bolt of grey wool across her knees, stitching a harness.
5 A ODETTE LACROIX, 22, seamstress, calloused fingertips, a scar on her chin.
6 A ¶ Twenty feet off, he walks a girder like a tightrope, a rivet gun on his hip.
7 A JULES PERRIN, 25, rivetter, cap low, easy balance.
8 A ¶ She doesn't look up.
9 A He grins anyway.
10 D JULES: That one for me?
11 D ODETTE: For whoever falls first.
12 A ¶ He crosses the beam.
13 A Drops beside her.
* 14 A Close.
15 D JULES: Then it's for you.
16 A ¶ She bites the thread.
17 A Hands him the harness.
18 D ODETTE: Put it on.
19 A ¶ He does.
20 A She tightens the buckle with a brisk tug.
21 A He winces and smiles.
22 A She doesn't smile.
23 A Her eyes slide to the beam behind him.
24 A ¶ A man's head rises from the ladder shaft.
25 A Bowler hat.
26 A Black coat.
27 A Soft hands.
28 A INSPECTOR MAXIME BOUCHARD, 50, with a notebook, climbing like a man who hates heights.
29 D BOUCHARD: Monsieur Perrin?
30 A ¶ Jules turns.
31 A Goes still.
32 A Odette's needle stops in the wool.
33 D BOUCHARD [CONT'D]: The foreman says you were here Tuesday night.
34 D JULES: I was home.
35 D BOUCHARD: The foreman says otherwise.
* 36 A ¶ Silence.
* 37 A The wind lifts his notebook pages.
38 A He grips them.
39 D ODETTE: He was with me.
40 A ¶ Bouchard looks at her.
* 41 A A long moment.
42 A Then he closes the notebook.
43 D BOUCHARD: Of course he was.
44 A ¶ He turns and descends the ladder.
45 A They watch the bowler vanish.
46 A She exhales.
47 A He lets his shoulders drop.
48 D JULES: You didn't have to.
49 D ODETTE: Yes.
50 A ¶ She picks the needle back up.

### SCENE s00580 | EXT. DRIVE-IN SCREEN TOWER - ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): PEPPER, LINDQVIST, MILO ABARA
* 1 A ¶ The back of an enormous white screen, scaffolded and creaking, rises above a field of parked cars.
* 2 A Light from the projection booth spills over the lot like milk.
* 3 A Beyond the fence, cornfields roll dark to the horizon, silent as sea.
4 A ¶ On a ladder platform two stories up, PERPETUA "PEPPER" LINDQVIST, 15, sits with her knees pulled to her chin.
5 A Her denim jacket is covered in hand-sewn patches, each one a different band.
* 6 A A bag of stolen popcorn sits beside her, untouched.
7 A The wind ruffles her short hair.
8 A She is watching the lot below as if memorizing it.
* 9 A ¶ Far down the lot, a car door slams.
* 10 A Laughter, faint.
* 11 A Somebody's radio drifts: a slow song.
* 12 A ¶ A boot rings on the scaffold below.
13 A Pepper doesn't turn.
14 A ¶ MILO ABARA, 16, climbs into view, lanky, glasses held to his face with tape at one hinge.
15 A He carries a thermos like a trophy.
16 A He sees her.
17 A Stops.
18 D MILO: I thought nobody came up here.
19 D PEPPER: Nobody does.
20 D MILO: Then why are you up here?
21 D PEPPER: Why are you?
22 A ¶ He climbs the last rungs and sits, careful, at the far end of the platform, with the thermos between them like a border.
23 D MILO: I work the snack bar. Third night. They don't pay me enough to be nice to people, so on my break I climb.
24 D PEPPER: How'd you find it?
25 D MILO: Fell off the ladder. Landed on the platform. Saw the view. Fell in love a little.
26 D PEPPER: With the view.
27 D MILO: With being too high to hear anyone ask for extra butter.
28 A ¶ She almost smiles.
29 A Doesn't.
30 A He unscrews the thermos, pours something steaming into the cap, and holds it out.
31 D MILO [CONT'D]: Hot chocolate. It's bad.
32 D PEPPER: Bad how?
33 D MILO: Powdered. Lumpy. But hot.
34 A ¶ She takes it.
35 A Drinks.
36 A Makes a face.
37 A Drinks again.
38 D PEPPER: It's terrible.
39 D MILO: Told you.
40 D PEPPER: My brother used to make it like this. Used to burn it on purpose because he said the burnt part was the good part.
41 D MILO: Where is he?
42 D PEPPER: Army. Fort something. He sends postcards with no words. Just stamps.
43 D MILO: Stamps?
44 D PEPPER: He picks the weirdest ones. Last time it was a stamp of a moth. I think it means he's okay.
45 D MILO: Or he misses you.
46 D PEPPER: Or the post office only had moths.
47 A ¶ Milo laughs, too loud.
* 48 A The sound carries.
49 A She shushes him, laughing herself, and they both look down.
* 50 A ¶ Below, a flashlight beam sweeps the fence line, bored, unhurried.
51 A ¶ They both freeze, shoulders touching.
52 A Pepper puts a finger to her lips.
53 A Milo nods, eyes huge behind his taped glasses.
* 54 A ¶ The beam passes.
* 55 A Slides along the scaffold.
* 56 A Pauses at the platform edge.
* 57 A Passes on.
58 A ¶ They breathe again.
59 D PEPPER (whispering): That's twice you've almost gotten me arrested.
60 D MILO (whispering): It's the first time we've met.
61 D PEPPER: You know what I mean.
62 D MILO: I really don't.
63 D PEPPER: Fine. Next time, bring better chocolate.
64 D MILO: There's going to be a next time?
65 D PEPPER: You tell me. You work here.
66 A ¶ Milo goes red to the ears.
67 A He fumbles with the thermos cap.
68 A Drops it.
69 A They both lunge for it and knock heads.
70 A Both freeze, rubbing their foreheads, and then both start laughing, silent shaking laughter, hands clamped over their mouths.
* 71 A ¶ Down in the lot, the movie's climactic music swells.
* 72 A A kiss, perhaps, on the big white screen they can't see from behind.
* 73 A A car horn honks, a cheer, a ripple of applause.
74 A ¶ Pepper wipes her eyes.
* 75 A The laughter has turned into something else, quieter.
76 A She looks at the dark cornfields.
77 D PEPPER [CONT'D]: My mom's selling the house in June.
78 D MILO: Where are you going?
79 D PEPPER: Don't know yet. Somewhere with a lot of stamps, I guess.
80 D MILO: You could stay.
81 D PEPPER: With who?
82 A ¶ Milo looks at his sneakers.
83 A At his hands.
84 A At the thermos cap in them.
85 D MILO: I don't know. Me, maybe. Eventually.
86 D PEPPER: You're sixteen.
87 D MILO: Sixteen and a half.
88 D PEPPER: That's not a plan, Milo.
89 D MILO: It's the start of one.
90 A ¶ She looks at him for a long moment.
91 A In the light from the booth, her face is open, young, unguarded.
92 D PEPPER: Okay. A start.
93 A ¶ She takes the thermos cap from his hand, pours a last splash of terrible chocolate, and clinks it against his.
94 D PEPPER [CONT'D]: To moths.
95 D MILO: To moths.
96 A ¶ They drink.
* 97 A The song on the radio ends.
* 98 A Another begins.

### SCENE s00581 | INT. NATURAL HISTORY TAXIDERMY HALL - AFTER HOURS
Detected names (may be incomplete or contain aliases): CURATOR AUGUSTINE FELLOWES-BAI, DETECTIVE ZOFIA ARRINGTON
* 1 A ¶ Glass eyes glitter in the dark.
* 2 A A moth-eaten lion, a mounted heron in mid-strike, a polar bear gone the color of old teeth.
* 3 A The air smells of camphor and lacquer.
* 4 A A single green exit sign makes the room look underwater.
5 A ¶ CURATOR AUGUSTINE FELLOWES-BAI, 60, gaunt, white gloves, an enormous ring of keys, stands before the heron with his back to the door.
6 A He talks to the bird like an old friend.
7 D AUGUSTINE: Not tonight, old man. Tonight they're coming for us.
* 8 A ¶ Heels on marble.
9 A DETECTIVE ZOFIA ARRINGTON, 40s, tailored coat, a flashlight she hasn't turned on, steps through the archway.
10 A Her eyes find him, then the dark, then him again.
11 D ZOFIA: Mr. Fellowes-Bai.
12 D AUGUSTINE: Detective Arrington. You are early.
13 D ZOFIA: I'm on time. You said midnight.
14 D AUGUSTINE: Did I? I may have meant yesterday's midnight.
15 A ¶ He turns.
16 A His gloves are white.
17 A His hands are not quite steady.
18 D ZOFIA (to the room): Whoever's behind the display cases, come out now. Slowly.
* 19 A ¶ Silence.
* 20 A Then, from the diorama of an African savannah, a single glass eye catches the exit light and holds it.
21 D AUGUSTINE: There's no one. Only the animals.
22 D ZOFIA (lower, muttering): Every case has a rear panel. Every rear panel has a latch.
23 A ¶ She crosses the hall, tests the nearest latch.
* 24 A Locked.
25 A She tries the next.
26 D ZOFIA [CONT'D] (to Augustine): You said you found the first body at nine.
27 D AUGUSTINE: At nine twenty. Under the bear.
28 D ZOFIA: Who was it?
29 D AUGUSTINE: A boy. Nineteen. A volunteer.
30 D ZOFIA: Name?
31 D AUGUSTINE: Pellam. Pellam Okonkwo. He cleaned the glass.
32 D ZOFIA: And the bear is where?
33 D AUGUSTINE: Behind you.
34 A ¶ She turns.
* 35 A The polar bear looms in the dark, huge and patient.
36 A She switches on the flashlight.
* 37 A The beam finds a stain on the floor, scrubbed, but pale.
38 D ZOFIA: Someone cleaned this.
39 D AUGUSTINE: I did. It seemed the decent thing.
40 D ZOFIA: Decent. Mr. Fellowes-Bai, that's called tampering.
41 D AUGUSTINE: Is it? I thought it was called mercy.
42 A ¶ She sweeps the beam up the bear's shoulder, along the fur, to the glass eyes.
43 D ZOFIA (low, to herself): Nobody oils a taxidermy bear's joints.
44 D AUGUSTINE: I beg your pardon?
45 D ZOFIA: The knees. They're oiled. Look.
46 A ¶ She steps close.
* 47 A The beam picks out a faint sheen, wet, along the hinge of the left hind leg.
48 D AUGUSTINE: Maintenance.
49 D ZOFIA: At midnight. On a stuffed bear.
50 D AUGUSTINE: We are a very careful institution.
51 D ZOFIA (raising her voice, for the hall): Whoever's inside, you have ten seconds, and then I call it in and every officer in the district comes through that door with dogs.
* 52 A ¶ Silence.
* 53 A Then, slowly, with a click of old brass, the bear's chest opens like a cabinet.
54 A ¶ Augustine closes his eyes.
55 D AUGUSTINE: Ah.
56 D ZOFIA: Mr. Fellowes-Bai. What is in the bear?
57 D AUGUSTINE: Everything I could not bury.
58 D ZOFIA (to herself): Of course it is.

### SCENE s00582 | EXT. DRY LAKE SALT WORKS - DAY
Detected names (may be incomplete or contain aliases): MORT GILCHRIST, ABEL STROUD, TENNESSEE PELL, HOLCOMB VANCE
* 1 A ¶ White.
* 2 A Everywhere white.
* 3 A A cracked lakebed baked flat.
* 4 A Heat shimmer swallows the horizon.
* 5 A A rusted rake the size of a gate.
* 6 A Mounded salt in rows like frozen waves.
* 7 A A tin-roofed shack leans against the wind that isn't there.
8 A ¶ MORT GILCHRIST, 60, owner.
9 A Leathery.
10 A One suspender.
11 A Sits on an overturned bucket in the shack's only shade.
12 A Whittling nothing.
13 A ¶ Beside him, ABEL STROUD, 17, his hired hand.
14 A Sunburned nose.
15 A Arms like fence rails.
16 A Sorting salt crystals into jars.
* 17 A ¶ A cloud of dust on the horizon.
* 18 A Growing.
19 D ABEL: Rider.
20 D MORT: Two.
21 D ABEL: How d'you know?
22 D MORT: Dust's got two tails.
* 23 A ¶ The dust resolves into two horsemen.
24 A Dark hats.
25 A Long coats in the heat.
26 A Both with rifles across their saddles.
27 A ¶ TENNESSEE PELL, 40s, in front.
28 A Black beard, a gold tooth that catches the sun.
29 A Behind him, HOLCOMB VANCE, 30s, thin, quiet, scar down the throat.
30 A ¶ They rein up at the shack.
31 A Dismount.
32 A Pell takes off his hat.
33 D PELL: Water.
34 D MORT: Barrel's by the door.
35 A ¶ Pell dips a tin cup and drinks.
36 A Water dribbles down his chin into the salted dust.
37 A He hands the cup to Vance, who drinks without wiping it.
38 D PELL: Heard you sell salt.
39 D MORT: Heard right.
40 D PELL: How much a sack?
41 D MORT: Two dollars.
42 D PELL: Last man charged me one.
43 D MORT: Last man's dead.
44 A ¶ Pell laughs.
45 A Vance does not.
46 D PELL: He said you'd say that.
47 A ¶ Abel's hand drifts toward a shovel resting against the wall.
48 A Mort pats the air, once, without looking.
49 D MORT: Boy. Count the jars.
50 D ABEL: I counted.
51 D MORT: Count again.
52 A ¶ Abel counts.
53 A His lips move.
54 A Pell watches him.
55 D PELL: How old's the kid?
56 D MORT: Old enough to count.
57 D PELL: Is he yours?
58 D MORT: He's his own.
59 D PELL: Hm.
60 A ¶ Pell takes a pinch of salt from a pile and tastes it.
61 A Spits.
62 D PELL [CONT'D]: That's bitter.
63 D MORT: It's lake salt. It's meant to be.
64 A ¶ Vance wanders toward the rake.
65 A Runs a hand along the rusted tines.
66 A Looks at the rows of mounded white, then at Mort.
67 D VANCE: Quiet out here.
68 D MORT: That's the idea.
69 D VANCE: How long you been alone?
70 D MORT: Since the wife.
71 D VANCE: He didn't say about a wife.
72 D MORT: He wouldn't. He never met her.
* 73 A ¶ A long silence.
* 74 A The heat ticks in the tin roof.
* 75 A A fly lands on the lip of the tin cup.
76 D PELL: Two sacks.
77 D MORT: Four dollars.
78 D PELL: Three.
79 D MORT: Four.
80 A ¶ Pell reaches into his coat.
81 A Abel stiffens.
82 A Pell draws out, slowly, a leather purse.
83 A Counts four silver dollars onto the bucket lid.
84 D MORT [CONT'D]: Boy. Load them.
85 A ¶ Abel hefts two sacks onto the horses, one by one.
86 A Vance steadies the animals with a hand on each nose.
* 87 A Nobody says a word.
88 A ¶ Pell mounts.
89 A Looks down at Mort.
90 D PELL: You ever need a partner?
91 D MORT: No.
92 D PELL: Thought not.
93 A ¶ He turns the horse.
94 A Vance follows.
* 95 A The dust takes them, a slow smear of two tails, then one, then none.
96 A ¶ Abel exhales.
97 D ABEL: Were they gonna?
98 D MORT: Maybe.
99 D ABEL: What stopped them?
100 D MORT: The salt. Nobody robs a man with no water to steal.
101 A ¶ He picks up his whittling again.
102 A Looks at it, shakes his head.
103 A Tosses the stick onto the salt.

### SCENE s00583 | INT. SLEEPER CAR - ORIENT NIGHT EXPRESS - 2 A.M.
Detected names (may be incomplete or contain aliases): PRUDENCE ACHTERBERG, COLONEL ISAAC DUBOIS-KANE, LALITA SENGUPTA, ENZO MARCHETTI, CECILE VANTERPOOL
* 1 A ¶ Gaslight steady.
* 2 A Curtains drawn.
* 3 A The train hammers through a tunnel.
4 A ¶ PRUDENCE ACHTERBERG, 50s, in a quilted robe, grips a teacup.
5 A Across from her, COLONEL ISAAC DUBOIS-KANE, 70, in pajamas and monocle, thumbs a revolver.
6 A LALITA SENGUPTA, 20s, a porter's daughter in borrowed uniform, stands guard by the door.
7 A ENZO MARCHETTI, 30s, a violinist, sits sweating by the window.
8 A CECILE VANTERPOOL, 40s, in evening gown, lies on the floor between them.
9 A Not moving.
10 D PRUDENCE: Colonel, put that down. You'll shoot the wrong one.
11 D DUBOIS-KANE: There is no wrong one, madam. Only the guilty and the uncooperative.
12 D ENZO: It was her wine, I tell you. She drank first.
13 D LALITA: She did not drink first. You poured.
14 D ENZO: I poured for everyone!
15 D LALITA: You poured for her twice.
16 D PRUDENCE: Lalita, dear, you are the only one not drinking.
17 D LALITA: I'm on shift, Madam Achterberg.
18 D DUBOIS-KANE: Then why do you stand at the door?
19 D LALITA: Because the last one to leave a murder is the first one accused.
* 20 A ¶ A long beat.
* 21 A The train bucks.
* 22 A The cup rattles in its saucer.
23 A Cecile's fingers twitch.
24 D PRUDENCE: Colonel. Her hand.
25 D DUBOIS-KANE (pocketing the revolver): By Jove. She's alive.
26 D CECILE (from the floor, faint): Of course I'm alive. Someone get me out of this dress.

### SCENE s00584 | INT. SERVER ROOM ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): AGENT RAHEL YOHANNES, CORNELIUS BELL
* 1 A ¶ Brushed steel.
* 2 A Humming cold.
* 3 A Floor indicator: 41.
* 4 A 42.
* 5 A 43.
6 A AGENT RAHEL YOHANNES, 30s, black suit, earpiece, one hand inside her jacket, watches the numbers climb while MR. CORNELIUS BELL, 60s, pinstriped, briefcase handcuffed to his wrist, stands at the opposite corner with a smile too relaxed for an elevator at 3 a.m., and neither of them looks at the other until the lights go out and the car stops between floors with a deep, deliberate clunk.
* 7 A ¶ Dark.
* 8 A Emergency red.
* 9 A Breathing.
10 D RAHEL: You pressed something.
11 D BELL: I did not.
12 D RAHEL: Your elbow.
13 D BELL: My elbow has been against this wall since the lobby.
14 D RAHEL: Then the building is on your side.
15 D BELL: Buildings are never on anyone's side, Agent Yohannes. They're just tall.
16 D RAHEL: You know my name.
17 D BELL: I know everyone's name. It's most of my job.
18 D RAHEL (into earpiece, muttering): Control, I've lost the lift. Repeat, lost the lift.
19 D BELL: They can't hear you. This shaft is shielded.
20 D RAHEL: By whom?
21 D BELL: By me. I paid for it.
22 D RAHEL: Mr. Bell, put the briefcase on the floor.
23 D BELL: And if I don't?
24 D RAHEL (drawing, steady): Then I'll find out how shielded you are.
25 D BELL: Agent, the case is not what you think. It isn't data. It's a key.
26 D RAHEL: To what?
27 D BELL: To this elevator. To every elevator in the building. At six a.m., the doors open on forty-three floors of sleeping people, and every one of them will be locked inside.
28 D RAHEL (quiet, to herself): Dear God.
29 D BELL: Yes. Rather the point.
* 30 A ¶ The red light pulses.
* 31 A The cable above them groans.

### SCENE s00585 | INT. AGING CELLAR - CHEESE CAVE - NIGHT
Detected names (may be incomplete or contain aliases): GRETA SOLBERG, PASCAL ANTOINE
* 1 A ¶ A limestone tunnel hung with wheels of cheese on pine shelves, rows of pale moons receding into the dark.
* 2 A Cold, wet air.
* 3 A The smell of ammonia and old milk.
* 4 A A red headlamp sweeps the walls.
5 A ¶ She works alone.
6 A GRETA SOLBERG, 40s, compact, grey braid tucked into her collar, a stethoscope looped around her neck and a canvas roll of tools at her hip.
7 A She runs her palm along the wall, ear tilted to a hidden hum.
8 A ¶ She stops at a barrel marked in chalk.
9 A Taps it three times.
10 A Taps again, lower.
* 11 A ¶ Behind the barrel: a steel door.
* 12 A Wall-sunk.
* 13 A Painted the same grey as the limestone, but no stone ever gleamed like that.
14 A ¶ She sets the stethoscope against the lock.
15 A Closes her eyes.
16 A Turns the dial a hair.
17 A Another.
18 A Her mouth moves, counting.
* 19 A ¶ The headlamp flickers.
20 A She freezes.
* 21 A ¶ Footsteps.
* 22 A Slow.
* 23 A From the entrance of the cave.
24 A ¶ She kills the lamp.
* 25 A Dark.
26 A She presses herself behind the barrel, a hand sliding to the pry bar at her belt.
* 27 A ¶ A flashlight beam wanders down the tunnel.
* 28 A Along the shelves.
* 29 A The beam bounces off the cheese rinds, ghost-white.
30 A ¶ PASCAL ANTOINE, 30s, climbs into frame.
31 A Long coat.
32 A Soft hat.
33 A A paper bag in one hand, a thermos in the other.
34 A He hums, off-key.
* 35 A He's not here for her.
* 36 A He's here for the night shift.
37 A ¶ He stops.
38 A Sniffs the air.
39 D PASCAL (muttering): Smells like feet again.
40 A ¶ He sets his thermos on a shelf.
41 A Eats something from the bag.
* 42 A The hum resumes.
43 A ¶ She waits, perfectly still.
44 A He turns his back and starts to inspect a wheel, tilting it to the light.
45 A ¶ She slides out from behind the barrel.
46 A One step.
47 A Two.
48 A Her boots make no sound on the damp stone.
49 A ¶ He stops humming.
50 A Doesn't turn.
51 D PASCAL [CONT'D] (softly): You're good.
52 D GRETA: You're early.
53 D PASCAL: You're late.
54 A ¶ He turns, smiling.
55 A She lowers the bar.
56 A They regard each other for a long moment across the cheese.
57 D PASCAL [CONT'D]: Did you get it open?
58 D GRETA: Two numbers left.
59 D PASCAL: Then let me hold the light.
60 A ¶ He flicks on his flashlight, angles it just so.
61 A She kneels at the dial.
62 A Her hands steady.
* 63 A The lock turns, a soft double click.
* 64 A ¶ The door swings open on darkness and a faint chill of something better than cheese.

### SCENE s00586 | EXT. PIER 9 - PARKED ICE-CREAM TRUCK - NIGHT
Detected names (may be incomplete or contain aliases): RENATA GUILLORY, VIKTOR LAZAREV
* 1 A ¶ Harbor lights.
* 2 A Gulls asleep on bollards.
* 3 A A white truck with a cartoon cone on its side, awnings rolled, serving window shuttered.
* 4 A Engine ticking as it cools.
* 5 A ¶ Inside, a single dome light.
6 A ¶ RENATA GUILLORY, 40s, wears a chef's apron over a leather jacket.
7 A Her wrists are zip-tied to the steering wheel.
8 A Blood in one eyebrow.
9 A She looks at the man in the passenger seat.
10 A ¶ VIKTOR LAZAREV, 50s, cleans a pistol with an ice-cream napkin.
11 A Salt-and-pepper beard.
12 A Soft Russian accent.
13 A Very calm.
14 D RENATA: You can't be serious.
15 D VIKTOR: I am always serious. It is my curse.
16 D RENATA: You're stealing a truck full of Rocky Road.
17 D VIKTOR: I am recovering a truck full of something else.
18 D RENATA: There's nothing else.
19 D VIKTOR: The second freezer.
20 D RENATA: That's for the sprinkles.
21 D VIKTOR: Renata.
22 D RENATA: Fine. It's for the other thing.
23 D VIKTOR: Which is?
24 D RENATA: Four kilos. You know it's four kilos.
25 D VIKTOR: I know it was five.
26 D RENATA: Four.
27 D VIKTOR: You took one.
28 D RENATA: I took what I was owed.
29 D VIKTOR: By whom?
30 D RENATA: By you. You didn't pay me for the last three runs.
31 D VIKTOR: That is not how it works.
32 D RENATA: That is exactly how it works, Viktor. I carry. You pay. This week you didn't.
33 D VIKTOR: I was in Odessa.
34 D RENATA: You were in a hotel with a woman.
35 D VIKTOR: My wife.
36 D RENATA: Your other wife.
* 37 A ¶ A pause.
* 38 A A gull calls from far off.
* 39 A The water slaps against the pilings.
40 D VIKTOR: Who told you?
41 D RENATA: I make ice cream. People talk to ice-cream women.
42 D VIKTOR (sighing): I am tired, Renata.
43 D RENATA: Then go home.
44 D VIKTOR: I would like to. But I have a partner who says four when it is five.
45 D RENATA: And a partner who says five when it is four.
46 D VIKTOR: You have a point.
47 D RENATA: Then cut me loose.
48 D VIKTOR: Why?
49 D RENATA: So I can show you where the fifth kilo is.
50 D VIKTOR: Why would you do that?
51 D RENATA: Because I'm tired too.
* 52 A ¶ Long silence.
53 A He puts down the napkin.
54 A Puts down the gun on the dashboard, barrel pointed at the windshield.
55 A Produces a pocket knife and, without looking at her, saws through the tie on her left wrist.
56 D VIKTOR: The other one when I see it.
57 D RENATA: Fair.
58 A ¶ She flexes her freed hand.
59 A Reaches under the seat, slowly, and pulls out a battered tin lunchbox.
60 A Opens it.
* 61 A Inside, wrapped in butcher paper, a brick the size of a loaf of bread.
62 D VIKTOR: That's it?
63 D RENATA: That's it.
64 D VIKTOR: Why did you keep it?
65 D RENATA: It was insurance.
66 D VIKTOR: Against me?
67 D RENATA: Against anyone.
68 A ¶ Viktor picks up the brick.
69 A Weighs it in his palm.
70 A Looks out at the dark harbor.
71 D VIKTOR: You know, in Odessa my grandmother sold ice cream from a bicycle.
72 D RENATA: Is that true?
73 D VIKTOR: No.
74 A ¶ He puts the brick back in the lunchbox.
75 A Closes it.
76 A Sets it between them on the console.
77 D VIKTOR [CONT'D]: Keep it.
78 D RENATA: What?
79 D VIKTOR: Keep it. Pay yourself. Call it back wages.
80 D RENATA: What's the catch?
81 D VIKTOR: No catch. I am retiring.
82 D RENATA: You can't retire.
83 D VIKTOR: I have been retiring for six years. This is the first time anyone believed me.
84 A ¶ He cuts the other tie.
85 A She rubs her wrists.
86 A He holds out his hand.
87 A She stares at it.
88 A Takes it.
89 D RENATA: Then what do I call you?
90 D VIKTOR: Viktor. A man who sells ice cream from a bicycle.
91 D RENATA: A bicycle.
92 D VIKTOR: Of course.
93 A ¶ He opens the door.
94 A Steps out into the harbor air.
95 A Doesn't look back.
* 96 A The door shuts with a soft thud.
* 97 A The dome light goes dark.
98 A ¶ Renata sits in the quiet, the lunchbox beside her, the engine finally silent.
99 A She opens the serving window.
* 100 A A cold wind off the water.
101 A She breathes.

### SCENE s00587 | INT. GENERATION SHIP "TERRA FIRMA" - HYDROPONICS BAY 4 - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ADAEZE NWOSU, MIKKEL HAVERLAND, SOLENNE ARCHAMBAULT, YUSUF ADEYEMI
* 1 A ¶ Rows of silver trays under violet grow-lamps.
* 2 A Pale lettuce, tomato vines climbing steel trellises.
* 3 A A mist-sprayer hisses at intervals.
* 4 A The deck hums with the slow breath of recycled air.
5 A ¶ CAPTAIN ADAEZE NWOSU, 50s, stands at a control panel, uniform jacket unbuttoned, tired eyes.
6 A Beside her, DR. MIKKEL HAVERLAND, 40s, botanist, a smear of soil on his sleeve.
7 A SOLENNE ARCHAMBAULT, 30s, chief engineer, grease to the elbow, leans on a trellis.
8 A YUSUF ADEYEMI, 20s, junior technician, perches on an upturned bucket, a tablet on his knees.
9 D ADAEZE: Dr. Haverland, how long?
10 D MIKKEL: Three weeks of yield. Four if we ration.
11 D SOLENNE: Four if we cut the second bay.
12 D YUSUF: We can't cut the second bay.
13 D SOLENNE: We can cut whatever we like.
14 D YUSUF: It's the tomatoes.
15 D SOLENNE: Yusuf, nobody is dying for a tomato.
16 D ADAEZE: Quiet. All of you.
* 17 A ¶ A beat.
* 18 A The mist hisses.
* 19 A Far off, a pump thunks.
20 D ADAEZE [CONT'D]: The blight is in Bay Three. If it crosses to Four, we lose the whole deck. I don't want a vote. I want a plan.
21 D MIKKEL: The only plan is isolation. We seal Three, burn it.
22 D SOLENNE: Burn it? That's six hundred kilos of food.
23 D MIKKEL: Contaminated food.
24 D YUSUF: We can't burn it, ma'am. The second generation was born in that bay.
25 D ADAEZE: What?
26 D YUSUF: The children. They used to play there. Before the sealing.
27 D SOLENNE: Yusuf, that's sentiment.
28 D YUSUF: It's memory.
29 D ADAEZE: Enough. Mikkel, can you save any of it?
30 D MIKKEL: Maybe a tenth. If I graft cuttings now.
31 D SOLENNE: A tenth is nothing.
32 D MIKKEL: A tenth is seed stock. It's the future.
33 D SOLENNE: It's a gamble.
34 D MIKKEL: So is everything on this ship.
35 D YUSUF: So we graft?
36 D ADAEZE: We graft. And we burn the rest.
37 D SOLENNE: Captain.
38 D ADAEZE: Solenne, prepare the incinerator.
39 D SOLENNE: It's not designed for biomass.
40 D ADAEZE: Then redesign it by morning.
41 D SOLENNE (muttering): Forty hours without sleep and she wants miracles.
42 D ADAEZE: I heard that.
43 D SOLENNE: Good.
44 A ¶ Adaeze almost smiles.
45 A She rubs her eyes with the heels of her hands.
46 A Looks out across the long rows of pale green.
47 D ADAEZE: Mikkel, take Yusuf. Cut what you can save.
48 D MIKKEL: Yes, Captain.
49 D YUSUF: Can I keep one tomato?
50 D ADAEZE: One.
51 D YUSUF: For the kids.
52 D ADAEZE: For the kids.
53 A ¶ Yusuf rises.
54 A Mikkel slings a case of tools over his shoulder.
55 A The two of them move off down the aisle.
56 A Solenne watches them go.
57 D SOLENNE: You know it'll be the last tomato.
58 D ADAEZE: I know.
59 D SOLENNE: And you let him keep it.
60 D ADAEZE: Somebody should.
* 61 A ¶ The lamps flicker, steady again.
* 62 A The mist hisses.
* 63 A From somewhere deep in the bay, a child's laughter echoes, a recording, looping, from a speaker long forgotten.
64 A ¶ Adaeze closes her eyes.

### SCENE s00588 | INT. EMBASSY STAIRWELL - NIGHT
Detected names (may be incomplete or contain aliases): DELPHINE VOSKUIJLEN, GUARD, NASIR, THADDEUS
* 1 A ¶ Concrete.
* 2 A Fluorescent tubes buzzing.
* 3 A A single door marked EXIT.
4 A ¶ DELPHINE VOSKUIJLEN, 30s, trench coat, wet from rain, takes the stairs two at a time.
5 A A manila envelope pressed to her ribs.
6 A ¶ A GUARD blocks the landing.
7 A Mid-forties, crew cut, hand on a holstered radio.
8 D GUARD: Ma'am. This level is closed.
9 D DELPHINE: I have a pass.
10 D GUARD: Not for this level.
11 A ¶ She slows.
12 A Looks him up and down.
13 A Steps closer.
14 D DELPHINE: You're not on the roster.
15 D GUARD: Neither are you.
16 A ¶ She lets out a short laugh.
17 A He doesn't smile.
18 D DELPHINE: Who sent you?
19 D GUARD: Nobody sends me. I come when I'm needed.
20 D DELPHINE: What do I call you?
21 A ¶ He considers.
* 22 A Behind him, the elevator DINGS.
* 23 A Footsteps echo on the floor above.
24 D GUARD: Nasir.
25 D DELPHINE: Nasir. I need to get to the ninth floor.
26 D NASIR: The ninth floor doesn't exist.
27 D DELPHINE: Then I'll take the stairs that go to it.
28 D NASIR: Ms. Voskuijlen, I read your file. I know who you are and what you're carrying. I also know who's waiting upstairs.
29 D DELPHINE: Then step aside.
30 D NASIR: I can't.
31 D DELPHINE: Why?
32 D NASIR: Because if you go up, he kills you. And if I let you go, he kills me.
33 D DELPHINE: Then we're both dead.
34 D NASIR: Unless you give me the envelope.
35 A ¶ She holds it tighter.
36 A He holds out an open palm.
37 A Calm.
38 A Almost kind.
39 D NASIR [CONT'D]: Give it to me. Walk down. Leave the country by dawn. I will deliver it myself.
40 D DELPHINE: Why would I trust you?
41 D NASIR: Because there's a third man behind you on the stairs. And he is not here to talk.
42 A ¶ She doesn't turn.
43 A Her shoulders stiffen.
* 44 A Below, a boot scuffs concrete.
45 D DELPHINE (whispering): Thaddeus.
46 D NASIR: Yes.
47 A ¶ THADDEUS, 50s, silver hair, bespoke suit, stands two flights down, hands in pockets.
48 A He smiles up at them.
49 D THADDEUS: Delphine. Don't be dramatic.
50 A ¶ She looks at Nasir.
51 A At the envelope.
52 A At the open palm.
53 A ¶ She hands it over.

### SCENE s00589 | INT. PAWNSHOP BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): ARLO DUNSMORE, TREVOR PIKE, TALL WOMAN, GWENDOLYN
* 1 A ¶ Shelves of unclaimed saxophones.
* 2 A A desk lamp with a green shade.
* 3 A A safe, half-open.
4 A ¶ ARLO DUNSMORE, 50s, tired eyes, cardigan, sits behind the desk.
5 A TREVOR PIKE, 30s, jittery, in a leather jacket, stands by the safe.
6 A In the doorway: a TALL WOMAN in a long coat, face hidden by a wide-brim hat.
7 D ARLO: Who's she?
8 D TREVOR: She's with me.
9 D ARLO: She's not with you. Look at her.
10 D TALL WOMAN: I'm not with anyone.
11 D ARLO: Then why are you here?
12 D TALL WOMAN: To collect.
13 D TREVOR: Collect what?
14 D TALL WOMAN: What Arlo owes.
15 D ARLO: I owe you nothing.
16 D TREVOR: He doesn't owe anybody. He pays his bills.
17 D TALL WOMAN: Not that bill.
18 A ¶ She removes her hat.
19 A Dark hair, a thin scar through one eyebrow.
20 D TALL WOMAN [CONT'D]: My name is Gwendolyn Marsh.
21 D ARLO: Marsh. Charlie Marsh's girl.
22 D GWENDOLYN: Yes.
23 D TREVOR: Who's Charlie Marsh?
24 D ARLO: Shut up, Trevor.
25 D TREVOR: No, who's Charlie Marsh?
26 D GWENDOLYN: The man he sold out in sixty-eight.
27 D ARLO: I did not sell him out. He ran.
28 D GWENDOLYN: You gave them the address.
29 D TREVOR: Arlo, is that true?
30 D ARLO: It was a long time ago.
31 D GWENDOLYN: He died in a ditch in Ohio.
32 D ARLO: I'm sorry.
33 D GWENDOLYN: You aren't.
34 D TREVOR: Look, lady, whatever this is, we're leaving.
35 D GWENDOLYN: You're leaving?
36 D TREVOR: Yes.
37 A ¶ He grabs a satchel from the safe.
38 A He heads for the door.
39 A She steps aside, easily, and lets him pass.
40 A He stops at the threshold, confused.
41 D TREVOR [CONT'D]: That's it?
42 D GWENDOLYN: It's not you I came for.
43 D ARLO: Trevor, wait.
44 D TREVOR: No. He's yours.
45 A ¶ He disappears.
* 46 A Footsteps down the stairs.
* 47 A A door slams.
48 A ¶ Arlo reaches for the desk drawer.
49 A Gwendolyn pulls a revolver from her coat.
50 A Not aiming.
51 A Just showing.
52 D GWENDOLYN: Leave the drawer.
53 D ARLO: It's a bottle.
54 D GWENDOLYN: I know.
55 D ARLO: May I?
56 A ¶ She nods.
57 A He pulls out a bottle of cheap bourbon and two glasses.
58 A Pours.
59 A Slides one across.
60 D ARLO [CONT'D]: To Charlie.
61 D GWENDOLYN: To Charlie.
62 A ¶ They drink.
63 A She sets down the empty glass and, after a moment, the revolver beside it.

### SCENE s00590 | INT. GLASSHOUSE CONSERVATORY - SUNSET
Detected names (may be incomplete or contain aliases): CORALIE DUVERNAY, RAFAEL OYARZ, SIGRID
* 1 A ¶ A Victorian palm house of iron and glass, tall as a cathedral.
* 2 A Sunset floods the panes amber and rose.
* 3 A Orchids hang in baskets; a stone fountain trickles into a lily pond.
* 4 A Brass paths wind through ferns.
* 5 A Everything is green, damp, and gold.
6 A ¶ CORALIE DUVERNAY, 30s, in a cream silk dress with a hem darkened by wet leaves, sits on the edge of the fountain, a folded letter in her lap.
7 A Her dark hair is coming loose from its pins.
8 A ¶ RAFAEL OYARZÚN, 30s, in a travelling coat, bag at his feet, stands at the end of the path, hat in hand.
9 A His face is rain-streaked, though it has been dry all day.
10 A ¶ At the far arch, hands clasped, stands SIGRID, 60s, Coralie's aunt, in black wool, severe, silver chignon.
11 D RAFAEL: You wrote that you were leaving.
12 D CORALIE: I wrote that I was thinking of it.
13 D SIGRID: She wrote nothing of the sort. I wrote it.
14 D CORALIE: Aunt Sigrid!
15 D SIGRID: Someone had to.
16 D RAFAEL: Then you weren't thinking of it.
17 D CORALIE: I was. I am. I don't know.
18 D SIGRID: She knows.
19 D CORALIE: Let me speak!
20 D RAFAEL: Please.
21 D SIGRID: She has had a year to speak.
22 D CORALIE: And you had a year to come back.
23 D RAFAEL: I was detained.
24 D CORALIE: For a year?
25 D RAFAEL: For eleven months. The last was spent walking.
26 D SIGRID: He expects pity.
27 D RAFAEL: I expect nothing.
28 D CORALIE: Then why are you here?
29 D RAFAEL: Because I could not do otherwise.
* 30 A ¶ A silence.
* 31 A The fountain murmurs.
* 32 A Light falls through the glass in long copper bars, laying stripes across the three of them.
33 A ¶ Sigrid sighs, drops her hands.
34 D SIGRID: I will see to the tea.
35 A ¶ She exits through the arch.
* 36 A Her footsteps fade among the ferns.
37 A ¶ Coralie rises.
38 A Smooths the letter against her skirt, folds it once more, and lets it fall into the lily pond, where it floats, bleeding blue ink.
39 D CORALIE: There. Now we have nothing to argue about.
40 D RAFAEL: We never did.
41 D CORALIE: No. Only each other.
42 A ¶ He takes a step.
43 A She takes one.
44 A They stop an arm's length apart.
* 45 A The light goes out of the glass, rose to ash, all at once.

### SCENE s00591 | INT. DECOMMISSIONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): OLIVER FAIRBANKS, BERTRAND KOWALIK, EMF, HESTER PRYCE, CLEMENTINE ROY
* 1 A ¶ A domed room, round and hollow.
* 2 A Rows of tilted velvet seats facing a dead star-projector, a great black insect crouched at the center.
* 3 A Dust hangs in the beam of a single flashlight.
* 4 A Somewhere, a pipe drips.
5 A ¶ OLIVER FAIRBANKS, 30s, in a corduroy jacket and glasses, plays the flashlight across the ceiling.
* 6 A Painted constellations peel in long grey tongues.
7 A Behind him, BERTRAND KOWALIK, 40s, heavyset, holds a tripod and an EMF meter, winded from the stairs.
8 A HESTER PRYCE, 50s, tiny, a medium's shawl over a cardigan, stands at the edge of the circle of light, eyes closed.
9 A CLEMENTINE ROY, 20s, a graduate student with a clipboard and a camera, hangs back by the door.
10 D OLIVER: Bertrand, set it up on the projector.
11 D BERTRAND: You want it right on the thing?
12 D OLIVER: Where else would a ghost go?
13 D BERTRAND (setting down the tripod): I don't think ghosts like to be told.
14 D HESTER (eyes still shut): It's already told you.
15 D CLEMENTINE: Told us what?
16 D HESTER: To be careful.
17 D OLIVER: Of what?
18 D HESTER: Of the stars.
* 19 A ¶ Silence.
* 20 A The pipe drips.
21 A Oliver chuckles, brief and dry, and swings the beam at the dome.
22 D OLIVER: They're painted, Hester.
23 D HESTER: They were painted over other stars.
24 A ¶ Clementine lifts her camera.
25 A Frames the ceiling.
26 A Snaps.
* 27 A The flash fills the dome; for an instant every painted star blazes white.
28 D CLEMENTINE: There's something in the shot.
29 D OLIVER: Show me.
30 A ¶ She tilts the screen toward him.
* 31 A In the tiny image, high in the dome, a figure hangs, arms spread, hair drifting as if underwater.
32 D BERTRAND: That's a trick of the flash.
33 D OLIVER: It's a reflection.
34 D CLEMENTINE: Of what?
35 D OLIVER: Of... us.
36 D BERTRAND: There are only four of us.
37 D CLEMENTINE: In the photo there are five.
38 A ¶ Oliver takes the camera.
39 A Counts.
40 A Counts again.
41 A Swallows.
42 D OLIVER: Bertrand, check the meter.
43 D BERTRAND: Already pinned to red. It's been pinned since the stairs.
44 D HESTER (opening her eyes): Turn off the light.
45 D OLIVER: We're not turning off the light.
46 D HESTER: Oliver, turn it off.
47 D BERTRAND: Maybe she's right.
48 D OLIVER: She's not right. She's a charlatan with a shawl.
49 D HESTER (softly): Yes. And she's still right.
* 50 A ¶ The flashlight flickers.
* 51 A Dims.
* 52 A Brightens.
* 53 A The projector, which has been dead for forty years, begins to hum.
* 54 A A dull amber glow swells in its eyes.
55 A ¶ Everyone steps back.
56 A Clementine grabs Hester's sleeve.
57 A Bertrand drops the tripod, which clangs across the floor.
58 D BERTRAND: Oliver, I'm done. I'm leaving.
59 D OLIVER: Stay where you are.
60 D BERTRAND: I said I'm leaving.
61 A ¶ He turns to run.
* 62 A The door slams shut.
63 A The handle rattles under Clementine's hand.
64 D CLEMENTINE: It's locked!
65 D HESTER: It was never open.
* 66 A ¶ The projector HUMS louder.
* 67 A A beam sweeps the dome: a slow wheel of constellations, bright, strange, wrong.
* 68 A Stars the wrong colors.
* 69 A Stars in the wrong places.
* 70 A A new constellation burns into the center, a shape like four small figures in a circle.
* 71 A ¶ A fifth point of light appears, hovering, above and behind them.
72 D OLIVER (whispering): Nobody move.
73 D BERTRAND (whispering): Which one is he looking at?
74 D OLIVER: Quiet.
75 D BERTRAND: Which one?
76 D HESTER: The one who counted.
77 A ¶ Oliver lowers the camera.
78 A He doesn't breathe.
* 79 A The fifth star pulses once, slow as a heartbeat, and begins to descend.
80 D CLEMENTINE (barely audible): Please.
* 81 A ¶ The beam goes out.
* 82 A Darkness, total.
* 83 A The drip.
* 84 A Then, very close behind them all, the quiet scrape of a velvet seat folding down, as if someone had just sat to watch.

### SCENE s00592 | INT. LAUNDROMAT-TURNED-TEAHOUSE - CHINATOWN BASEMENT - EVENING
Detected names (may be incomplete or contain aliases): BEATRIX LAU, DELIVERY MAN, CASSIUS, MALCOLM
* 1 A ¶ Steam.
* 2 A Paper lanterns.
* 3 A A row of dormant washing machines repurposed as tables, round windows full of potted jasmine.
* 4 A A tea set on each.
5 A ¶ BEATRIX LAU, 40s, in a high-collared jacket and wire glasses, pours oolong at a corner table.
6 A Across from her: a DELIVERY MAN, 30s, in a rain-soaked windbreaker, cap low, a flat cardboard box beside his chair.
7 D BEATRIX: You're early.
8 D DELIVERY MAN: Traffic was light.
9 D BEATRIX: In this city?
10 D DELIVERY MAN: I took the back streets.
11 A ¶ She slides a cup across.
12 A He takes it with both hands.
13 A Sips.
14 A Eyes closed.
15 D DELIVERY MAN [CONT'D]: That's very good.
16 D BEATRIX: My grandmother's blend.
17 D DELIVERY MAN: She taught you?
18 D BEATRIX: She taught everyone. Whether they wanted lessons or not.
19 A ¶ He laughs.
20 A She smiles, small, practiced.
21 A At the bar, CASSIUS, 60s, silver beard, an old man in a tweed vest, stirs sugar into a glass and watches them in the mirror.
22 D DELIVERY MAN: Ms. Lau, about the package.
23 D BEATRIX: Let's finish our tea.
24 D DELIVERY MAN: Of course.
25 A ¶ They sip.
* 26 A The jasmine nods in the steam.
27 D BEATRIX: Do you have family?
28 D DELIVERY MAN: A brother in Oakland.
29 D BEATRIX: Do you call him?
30 D DELIVERY MAN: Sundays.
31 D BEATRIX: Good. A man should call his brother.
32 A ¶ She sets her cup down.
33 A Taps the rim twice.
34 A At the bar, Cassius puts down his glass and turns on his stool.
35 D CASSIUS: Beatrix. Is this the one?
36 D BEATRIX: Yes, Cassius.
37 D DELIVERY MAN (lifting the cap, eyes widening): What is this?
38 D BEATRIX: Please. Keep your voice low. Your name is Malcolm Reyes.
39 D MALCOLM: How do you know that?
40 D BEATRIX: Because I paid for your last six months of silence.
41 D MALCOLM: You? That was you?
42 D CASSIUS (approaching): It was both of us.
43 D MALCOLM: Oh, God.
44 D BEATRIX: Malcolm, the box. Open it.
45 D MALCOLM: I'd rather not.
46 D BEATRIX: I know.
47 A ¶ He fumbles with the lid.
* 48 A Inside, nested in tissue paper, a single white teacup and a folded photograph.
49 D MALCOLM: This isn't what they told me to deliver.
50 D BEATRIX: No. It's what you were meant to find.
51 A ¶ She turns the photo toward him.
52 A A young man at a laundromat counter, a younger Malcolm, smiling, with a woman at his side.
53 A His mother.
54 D MALCOLM: Where did you get this?
55 D CASSIUS: She kept the shop. Before it was this.
56 D MALCOLM: She was my... she's dead. They said she was dead.
57 D BEATRIX: She died. Not the way they told you.
58 A ¶ Malcolm sits very still.
* 59 A The steam rises between them, soft and sweet.
60 D CASSIUS: Drink your tea, son.
61 A ¶ Malcolm lifts the cup to his lips, hand trembling.
62 A He stops.
63 A Looks at Beatrix.
64 D MALCOLM: Is it poisoned?
65 D BEATRIX: No. But I wanted you to wonder.
66 A ¶ He drinks anyway.

### SCENE s00593 | INT. SKATE-RINK SNACK BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): PORTIA, KENJI, LUPE, ARCHIE
* 1 A ¶ Disco ball turning.
* 2 A Sticky floors.
* 3 A The smell of nacho cheese.
* 4 A Skates thump distantly on wooden floorboards beyond the glass.
5 A ¶ PORTIA, 16, in a too-large varsity jacket, slumps at a corner table, chewing a straw.
6 A Across from her, KENJI, 17, bleach-tipped hair, rubs the brim of his cap between his fingers.
7 A LUPE, 15, ponytail, braces, bounces on the balls of her feet at the counter.
8 A ARCHIE, 16, in a hoodie, stands guard by the arcade machine, arms folded.
9 D LUPE: Okay, okay, okay. She's coming.
10 D KENJI: Who's coming?
11 D LUPE: Mrs. Baptiste. With the clipboard.
12 D PORTIA: Hide the trophy.
13 D ARCHIE: What trophy?
14 D PORTIA: The one in your jacket, genius.
15 D ARCHIE: It's not in my jacket.
16 D KENJI: It's sticking out of your jacket.
17 D LUPE: Put it under the nachos.
18 D ARCHIE: Under the nachos?
19 D PORTIA: Under! The! Nachos!
20 A ¶ Archie drops the little gold figurine into the cheese tray and covers it with a napkin.
21 A The four of them freeze as an adult shape appears behind the glass, walking slowly, scanning.
22 A ¶ The shape passes.
23 A They exhale in unison.
24 A Kenji laughs, too loud.
25 A Portia kicks him under the table.
26 D KENJI: Ow!
27 D PORTIA: Sorry. Reflex.
28 D LUPE: She didn't see.
29 D ARCHIE: Of course she didn't. I'm a professional.
30 D PORTIA: You are a thief.
31 D ARCHIE: Borrower.
32 A ¶ Behind the glass, the shape turns back.
33 A The four heads snap to the window.
34 A Archie, in a panic, digs the trophy out of the cheese and shoves it in his hood.
35 A ¶ The shape keeps walking.
36 A Out the door.
* 37 A Gone.
38 A ¶ For a moment nobody moves.
39 A Then Portia pulls the straw from her mouth and begins to laugh.
40 A Kenji joins.
41 A Lupe doubles over.
42 A Archie, holding a hood full of nacho cheese, lets his head fall back against the arcade cabinet.

### SCENE s00594 | INT. HOSPITAL WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): GLORIA PEMBERTON, WALTER PEMBERTON, DR. ESCOBEDO
* 1 A ¶ Vinyl chairs bolted in rows.
* 2 A A vending machine glowing.
* 3 A A muted TV showing a cooking competition.
4 A ¶ GLORIA PEMBERTON, 60s, in a church dress and orthopedic shoes, sits bolt upright, purse on her lap, rosary twisted around her fingers.
5 A Next to her, WALTER PEMBERTON, 60s, in a windbreaker, stares at a single spot on the carpet.
* 6 A A coffee cup in his hand has gone cold.
* 7 A ¶ A phone rings on the reception desk, unattended.
8 A Neither of them moves.
* 9 A It rings five times.
* 10 A Stops.
11 D GLORIA: Walter.
12 D WALTER: Yes.
13 D GLORIA: Say something.
14 D WALTER: What do you want me to say?
15 D GLORIA: Anything.
16 D WALTER: It's a long night.
17 D GLORIA: That's something.
* 18 A ¶ Silence.
* 19 A On the TV, a chef flips an omelet.
20 A Gloria's rosary beads click.
21 A Walter shifts his weight, sets the cup on the floor, picks it up again.
* 22 A ¶ The intercom crackles overhead.
23 D DR. ESCOBEDO [V.O.] (over speaker, tinny): Family of Pemberton, please come to Room 4.
24 A ¶ They both rise at once, bump shoulders, step back.
25 A Gloria goes first.
26 A Walter hesitates, drops his cup in the trash, and grabs her arm, and they stand there a moment, staring at the closed door at the end of the corridor, her fingers digging into his sleeve while his hand covers hers, neither of them able to take the first step, until Gloria whispers a prayer, takes a breath, and moves, and Walter follows a half-step behind her, the way he has for forty years.
27 D DR. ESCOBEDO [V.O., CONT'D]: Mr. and Mrs. Pemberton. Take your time.
28 D GLORIA (stopping): No. Not take my time.
29 D WALTER: Gloria.
30 D GLORIA: If I take my time, I'll turn around.
31 D WALTER: Then we don't take our time.
32 A ¶ He squeezes her hand.
33 A She nods.
34 A They walk.
35 A At the door, she grips the handle, pauses, and pushes.

### SCENE s00595 | INT. FARMHOUSE KITCHEN - EVENING
Detected names (may be incomplete or contain aliases): CORDELIA ASHWORTH, MAEVE ASHWORTH
* 1 A ¶ A big square table, worn pale by decades of elbows.
* 2 A A pot of soup on the stove, forgotten.
* 3 A A rotary phone on the wall.
* 4 A The window shows a field gone blue with dusk.
5 A ¶ CORDELIA ASHWORTH, 58, the elder sister, ironing a tablecloth with slow, deliberate strokes, watches her younger sister MAEVE ASHWORTH, 54, who sits at the far end of the table with a suitcase already packed beside her chair, her coat folded neatly across her lap.
* 6 A ¶ The iron hisses.
7 A Cordelia reaches the corner of the cloth, smooths it, folds it once, and begins another pass.
8 D CORDELIA: You don't have to go tonight.
9 D MAEVE: The bus leaves at nine.
10 D CORDELIA: There's a bus at six tomorrow.
11 D MAEVE: I'd rather not wait.
12 A ¶ Cordelia sets the iron down on its heel.
13 A Crosses to the stove.
14 A Lifts the lid on the soup and stirs, not tasting.
15 D CORDELIA: Mother's will is in the drawer. You haven't looked at it.
16 D MAEVE: I don't need to.
17 D CORDELIA: It says the house is ours.
18 D MAEVE: It says the house is yours. I've read it.
19 D CORDELIA: You said you hadn't.
20 D MAEVE: I lied.
21 A ¶ Cordelia puts the spoon down so softly it doesn't clink.
22 A She wipes her hands on her apron, one finger at a time, then turns, and for a long moment looks at her sister's face, the tight jaw, the rim of red around the eyes that Maeve will not let fall.
23 A She was always the stubborn one, and she is stubborn now, and she is leaving the way she did at eighteen, with her coat on her lap and her chin high, and Cordelia knows that if she says what she wants to say she will shatter the entire table, so she picks up the iron again.
24 D CORDELIA [CONT'D]: Then go.
25 D MAEVE: That's it?
26 D CORDELIA: What did you want?
27 D MAEVE: I wanted you to say stay.
28 D CORDELIA: I did. Twice.
29 D MAEVE: You said I didn't have to go.
30 D CORDELIA: That's the same thing.
31 D MAEVE: It's not. It's never been the same thing.
32 A ¶ She stands.
33 A Lifts the suitcase.
34 A Holds it with both hands, like something borne from a flood.
35 D MAEVE [CONT'D]: Goodbye, Cordie.
36 A ¶ The nickname lands.
37 A Cordelia's hand tightens on the iron.
* 38 A A thin trail of steam rises, curling past her face.
* 39 A Behind her the soup begins to boil over, hissing on the burner.
40 A She doesn't turn.
41 D CORDELIA: Don't let the door slam.
42 A ¶ Maeve closes the door gently behind her.
* 43 A The latch clicks.
44 A ¶ Cordelia lets the iron fall onto the tablecloth.
* 45 A The smell of scorched cotton rises.
46 A She stands there, watching it burn.

### SCENE s00596 | INT. HIGH COURT OF APPEAL - TIMBERED CHAMBER - MORNING
Detected names (may be incomplete or contain aliases): JUDGE OYELARAN, SAMUEL BECKETT-LOWE, HANA KOBAYASHI, ABDI WARSAME, CLERK DOMINGO, PETRA HOLLOWAY, LOWE
* 1 A ¶ A hall of dark oak, high galleries, a vaulted ceiling hung with brass lamps that cast small circles of gold onto the polished floor.
* 2 A Dust drifts through the light like slow snow.
* 3 A At the far end, a raised bench carved with lions and vines.
4 A ¶ JUDGE OYELARAN, 60s, in black robes and a silver wig, sits motionless.
5 A Her pen hovers above a ledger.
6 A In front of her, at the long mahogany table, sits SAMUEL BECKETT-LOWE, 50s, defense counsel, in a rumpled gown, thumbing a sheaf of notes he has already memorized.
7 A Beside him, HANA KOBAYASHI, 30s, the junior, knees pressed together, a legal pad shaking slightly on her lap.
8 A ¶ At the lectern stands ABDI WARSAME, 40s, the witness, in a suit that is too thin for the weather, hands folded so tightly the knuckles show.
9 A Near the window, CLERK DOMINGO, 20s, thin, with a stack of exhibits cradled in his arms, shifts from foot to foot.
10 A In the jury box, a woman in the front row, PETRA HOLLOWAY, 50s, juror seven, picks at a loose thread in her sleeve, her gaze fixed on Abdi's face.
11 D LOWE: Mr. Warsame, in your statement you said you were on the ferry at ten past six.
12 D WARSAME: Yes, sir.
13 D LOWE: And the ferry is eleven miles from the warehouse.
14 D WARSAME: About that.
15 D LOWE: Eleven miles. Twenty minutes by motorcar. Which means you could not have been at the warehouse at six-fifteen.
16 D WARSAME: No, sir.
17 D LOWE: Yet the prosecution's witness places you there.
18 D WARSAME: She is mistaken.
19 D LOWE: Or lying.
20 D OYELARAN: Mr. Beckett-Lowe.
21 D LOWE: Mistaken. Forgive me, Your Honor.
22 A ¶ Hana scribbles something.
23 A Passes it to Lowe without looking at him.
24 A He reads it, folds it into his sleeve, and lifts his chin toward the clerk, who steps forward with a bound folder, sets it before the witness, and retreats, while in the jury box Petra Holloway leans a fraction closer, and the judge turns a page, and the wind rattles the tall windows, and for a moment the whole chamber seems to hold itself as still as a held breath.
25 D LOWE [CONT'D]: Exhibit twenty-two. A ticket stub.
26 D WARSAME: Yes.
27 D LOWE: Read the time.
28 D WARSAME: Six-oh-eight.
29 D LOWE: Thank you. And the location?
30 D WARSAME: The Eastside pier.
31 D LOWE: Eastside. Not the warehouse district.
32 D WARSAME: No, sir.
33 A ¶ He glances at the jury, then at the floor.
34 A Petra Holloway straightens in her seat.
35 D LOWE: No further questions.
36 D OYELARAN: The Crown may cross-examine.
* 37 A ¶ A rustle through the gallery.
* 38 A Nobody rises.
39 D OYELARAN [CONT'D]: Hearing none, the witness is excused.
40 A ¶ Warsame steps down.
41 A The Clerk gathers the folder.
42 A Hana lets out a breath she has been holding for an hour.
43 A Lowe finally smiles, thinly, and pats her arm without looking.
44 A ¶ Petra Holloway folds the loose thread into her palm, closes her fist around it, and lets it go.

### SCENE s00597 | INT. GREAT HALL OF A SLEEPING KINGDOM - TWILIGHT
Detected names (may be incomplete or contain aliases): QUEEN RAVENNA, THANE ALDRIC, SEER IMBOLC, BARD FENWICK, DAME DOLORES, LARK
* 1 A ¶ A long table laid for a feast no one has touched.
* 2 A Candles burn low.
* 3 A Every guest is awake, nobody eats.
4 A ¶ QUEEN RAVENNA, 50s, in a gown the color of old wine, sits at the head.
5 A THANE ALDRIC, 60s, broad, scarred, stares into his cup.
6 A SEER IMBOLC, 70s, blind, hands folded on her cane.
7 A BARD FENWICK, 30s, a lute on his knee, strings muted.
8 A DAME DOLORES, 40s, knight-errant, mud on her boots, gloves still on.
9 A LARK, 12, the page, stands behind the queen's chair holding a jug.
10 D RAVENNA: Seer. You may speak.
11 D IMBOLC: I'd rather not.
12 D RAVENNA: That wasn't a request.
13 D IMBOLC: Then I'll say it once. The king sleeps tonight and does not wake.
14 D ALDRIC: The king is already asleep.
15 D IMBOLC: Not that sleep.
16 A ¶ Fenwick's hand slips on the lute.
* 17 A A string twangs and dies.
18 A Dolores reaches slowly for her sword hilt.
19 A Lark's jug trembles.
20 D RAVENNA (very softly): Who among us?
21 D IMBOLC: The one who pours.
22 A ¶ Every head turns.
23 A Lark goes white.

### SCENE s00598 | EXT. CANYON RIM WAGON CAMP - TWILIGHT
Detected names (may be incomplete or contain aliases): SHERIFF EZEKIEL TOLLIVER, MADAME CELESTINE, ROYCE BARLOW, PEARL, SILAS
* 1 A ¶ A dry arroyo cuts the earth below, red walls blackening in the dusk.
* 2 A A single canvas-topped wagon, wheels sunk to the hubs.
* 3 A A cookfire sputters, spitting coals.
* 4 A Beyond the light, ridge after ridge disappears into purple.
5 A ¶ SHERIFF EZEKIEL TOLLIVER, 50s, long coat dusted white, sits on an overturned crate with a tin plate of beans, eating without hunger.
6 A Across the fire: MADAME CELESTINE, 40s, in a black traveling dress with a cameo at her throat, mending a glove with quick, exact stitches.
7 A ROYCE BARLOW, 30s, wiry, hat pulled low, cleans a rifle he doesn't need to clean.
8 A PEARL, 19, red braids, kneels at the wagon tongue feeding a mule from her palm.
9 A SILAS, 70s, gray beard, sits against a wheel with his eyes closed, a harmonica loose in his hand.
10 D TOLLIVER: Madame. How far to the river?
11 D CELESTINE: Two days. Maybe three.
12 D TOLLIVER: With the mule or without?
13 D CELESTINE (not looking up): Without, we'd be there tomorrow.
14 D ROYCE: The mule's fine.
15 D TOLLIVER: Royce, I didn't ask the mule.
16 D ROYCE: Then I'll say it for the mule. He's fine.
* 17 A ¶ A thin laugh from the wagon wheel.
18 A Silas opens one eye.
19 D SILAS: Mule's older than you, Royce. Treat him respectful.
20 D PEARL (to the mule, murmuring): Don't listen to them. You're beautiful.
21 A ¶ Tolliver sets down his plate.
22 A Studies the ridge line.
* 23 A A long silence.
* 24 A Wind lifts embers off the fire and carries them over the rim.
25 D TOLLIVER (to the group): Everyone sleep with a boot on.
26 D ROYCE: Why?
27 D TOLLIVER: Because I said.
28 D CELESTINE (low): He's seen something.
29 D TOLLIVER: I have not.
30 D CELESTINE: You've felt it, then.
31 D TOLLIVER (muttering): Damn this country.
32 D PEARL: Sheriff?
33 D TOLLIVER: Yes, Pearl.
34 D PEARL: There's a light on the north ridge.
35 A ¶ They all turn.
* 36 A High on the far ridge, tiny and steady, a single flame flickers.
37 D SILAS: Not a campfire.
38 D ROYCE: Too still.
39 D CELESTINE: It's a lantern. Someone is signaling.
40 D TOLLIVER: To whom?
41 D CELESTINE: To us.
42 A ¶ Royce racks the rifle.
43 A Pearl stands, one hand still on the mule.
44 A Silas pushes himself up, grunting, the harmonica clenched in his fist.
45 D TOLLIVER: Douse the fire.
46 A ¶ Pearl kicks dirt over the coals.
* 47 A The dark closes in.
* 48 A Far above, the light on the ridge blinks once, twice, three times.
49 D TOLLIVER [CONT'D] (whispering): Nobody answers.
* 50 A ¶ On the ridge, the light goes out.
* 51 A ¶ The canyon is silent.
* 52 A A coyote begins to cry, somewhere very near, and stops mid-note.
