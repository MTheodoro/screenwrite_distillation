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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0012.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00172 | INT. HOLLOW GIANT OAK - TWILIGHT
Detected names (may be incomplete or contain aliases): QUEEN ELSPETH, SIR BRAM THORNWICK, PAGES, TWIG, NETTLE, STRANGER, WRENNA
* 1 A ¶ A throne room carved inside a dead tree.
* 2 A Roots for pillars.
* 3 A Fireflies in jars.
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
* 29 A It cracks.
* 30 A A green shoot unfurls, and stops.
* 31 A Wilts.
32 A She sighs.
33 D WRENNA: I thought I'd have more left.
34 D QUEEN ELSPETH: Sit, child.
35 A ¶ Wrenna sits on a root.
36 A Elspeth sets her crown aside.
37 D QUEEN ELSPETH [CONT'D]: The debt is forgiven.
38 D WRENNA: I didn't come to be forgiven.
39 D SIR BRAM: Then what?
40 D WRENNA: To see it. Once. Before it falls.
* 41 A ¶ The fireflies dim, one jar at a time.

### SCENE s00173 | EXT. SALT FLATS - MIDDAY
Detected names (may be incomplete or contain aliases): DOROTHY MAE PRUITT, LORETTA PRUITT, JUDGE HARLAN CREEL, MILO
* 1 A ¶ A white, cracked desert under a merciless sun.
* 2 A Heat shimmers off the ground.
* 3 A In the distance, an overturned jeep lies on its roof like a dead beetle.
4 A ¶ DOROTHY MAE PRUITT, 50s, a surveyor in a wide-brimmed hat, sits in the thin shade of the jeep.
5 A Her sister, LORETTA PRUITT, 40s, kneels beside her with a canteen held upside down, shaking out the last drops.
6 A Across from them stands JUDGE HARLAN CREEL, 60s, a man in a ruined linen suit, one shoe missing.
7 A Behind him, MILO, 20s, their driver, drags a spare tire from the wreck and tries to prop it against the axle as a sunshade.
8 A ¶ Dorothy watches Loretta tilt the canteen.
9 A Loretta does not meet her eyes.
10 A Harlan licks his cracked lips and takes a step toward the canteen.
11 A Milo drops the tire with a grunt, then stands between Harlan and the sisters without seeming to decide to.
12 D HARLAN: There's a well at the old mine. Four miles.
13 D DOROTHY: Four miles that way, or four miles you think that way?
14 D HARLAN: I'm not in the habit of guessing.
15 D LORETTA: You're missing a shoe, Judge.
16 A ¶ Harlan glances at his bare foot.
17 A He tucks it behind the other.
18 D MILO (to Dorothy): She's right about the distance. I drove past it Thursday.
19 D DOROTHY: Thursday you drove past everything.
20 A ¶ Milo says nothing.
21 A He picks the tire up again.
22 A ¶ Loretta caps the empty canteen and slowly hands it to Dorothy.
23 A Dorothy turns it in her palm, then hands it back.
24 A Loretta puts it in her bag.
25 A Neither speaks.
26 A Harlan watches the trade as if it were a verdict.
27 D HARLAN: If we leave now, we reach it by dusk.
28 D LORETTA: And if we wait?
29 D HARLAN: Then we wait for a different problem.
30 A ¶ Dorothy stands, brushes salt from her skirt.
31 A She takes Loretta's hat and sets it on her sister's head, straightening the brim.
32 D DOROTHY: Four miles.
33 A ¶ She starts walking.
34 A Loretta follows.
35 A Harlan hesitates, then limps after them.
36 A Milo leaves the tire behind and falls in last, eyes on the horizon.

### SCENE s00174 | INT. STALLED FERRIS WHEEL GONDOLA - NIGHT
Detected names (may be incomplete or contain aliases): GUS, FELLOWES, TAMSIN OYELARAN, MAN IN YELLOW RAINCOAT, YELLOW RAINCOAT, PIKE
* 1 A ¶ Dead carnival below.
* 2 A Fog.
* 3 A The gondola sways.
4 A ¶ AUGUSTA "GUS" FELLOWES, 60s, retired carny, grips the rail.
5 A Across from him, TAMSIN OYELARAN, 20s, scrolls a dead phone.
6 A Beside her, a MAN IN A YELLOW RAINCOAT, face hidden under a hood, sits perfectly still.
7 D GUS (to both): Operator'll be back. They always come back.
8 D TAMSIN (to Gus): Who's they?
9 D GUS (muttering): Nobody. Nobody's there.
* 10 A ¶ Something below laughs.
* 11 A Tinny.
* 12 A Calliope music starts, off-key.
13 D TAMSIN: Do you hear that?
14 A ¶ The Man in the Yellow Raincoat lifts his head.
15 D MAN IN YELLOW RAINCOAT: Ticket, please.
16 A ¶ Gus pats his pockets.
17 A Tamsin shakes her head.
18 D TAMSIN: We didn't buy tickets.
19 D MAN IN YELLOW RAINCOAT: Everyone buys one.
20 A ¶ The hood falls back.
21 A Painted grin.
22 A No eyes.
23 A Gus grabs Tamsin's wrist.
24 D GUS (low, to himself): Pike. It's Pike. Not again.
25 D PIKE: You remember me, Gus.
* 26 A ¶ The gondola drops a foot.
* 27 A Stops.
28 A The grin widens.

### SCENE s00175 | INT. MUNICIPAL CLOCK TOWER - MECHANISM ROOM - DAY
Detected names (may be incomplete or contain aliases): ARTHUR PENROSE-LIND, MIRIAM VOSS, DEZ, OYELOWO, CALLUM BRIGHT
* 1 A ¶ A cramped stone chamber crowded with brass gears the size of cartwheels.
* 2 A A pendulum swings slowly behind a wire cage.
* 3 A Dust floats in the shafts of light from a narrow slit window.
* 4 A The ticking is steady, enormous, almost restful.
5 A ¶ ARTHUR PENROSE-LIND, 60s, silver mustache, tweed jacket, kneels over a toolbox with the unhurried air of a man being paid by the hour.
6 A His partner MIRIAM VOSS, 50s, sharp-eyed and gray-braided, sits on an upturned bucket with a ledger on her knee.
7 A DESMOND "DEZ" OYELOWO, 30s, in a maintenance jumpsuit, oils a gear with a long-spouted can while keeping one ear on the stairwell.
8 A Perched on the stairs, a nervous teenager, CALLUM BRIGHT, 17, holds a walkie-talkie he has not been asked to use.
9 D ARTHUR: Fine work, Dez. The old girl's never sounded better.
10 D DEZ: She hasn't been oiled since Truman.
11 D MIRIAM (not looking up): The bank vault is directly below the east face. Four feet of brick, then the floor.
12 D ARTHUR: And the pendulum shaft goes down how far?
13 D MIRIAM: Right to the ceiling of the vault annex. Nobody ever sealed it.
14 A ¶ Arthur nods, pulls a coil of rope from the toolbox, and measures it against his arm.
15 A Dez sets down the oil can and checks the cage latch.
16 A Callum shifts on the step.
17 A The walkie-talkie crackles with static, and he fumbles it to silence.
18 D CALLUM: Sorry.
19 D ARTHUR: Nothing to be sorry for, lad. Nothing at all.
20 D MIRIAM: Thursday, then. After the noon chime, before the council tour.
21 D DEZ: The council tour is at one.
22 D MIRIAM: Then we have forty minutes. Plenty.
* 23 A ¶ The clock gathers itself and strikes the quarter hour.
* 24 A The gears turn.
25 A Nobody flinches.

### SCENE s00176 | INT. FLOODED COUNTY COURTHOUSE - MAKESHIFT COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE OLUWASEUN ADEYEMI, DISTRICT ATTORNEY RHONDA KESSLER, PUBLIC DEFENDER MARCUS TIBBS, SKEETER, DUVAL, COURT CLERK PENNY FARRELL, BAILIFF GUS OKAFOR
* 1 A ¶ Sandbags by the doors.
* 2 A Folding tables.
* 3 A A generator hums.
4 A ¶ JUDGE OLUWASEUN ADEYEMI, 60s, presides from a card table.
5 A DISTRICT ATTORNEY RHONDA KESSLER, 40s, stands with a soggy file.
6 A PUBLIC DEFENDER MARCUS TIBBS, 30s, trouser cuffs wet.
7 A The defendant, WALTER "SKEETER" DUVAL, 50s, sits in rubber boots.
8 A COURT CLERK PENNY FARRELL, 20s, types on a laptop on a milk crate.
9 A BAILIFF GUS OKAFOR, 50s, leans on the doorframe.
10 D JUDGE ADEYEMI: Be seated. We'll proceed on the record, such as it is.
11 D RHONDA: Your Honor, the State requests a continuance. Half our exhibits are under four feet of river.
12 D MARCUS: Defense objects. My client has waited eleven months. He can't wait another flood season.
13 D JUDGE ADEYEMI: Mr. Tibbs, your client is charged with stealing a boat.
14 D MARCUS: Borrowing, Your Honor. And that boat is the only reason forty people made it off Pratt Street last night.
15 D RHONDA: Forty people who would not have needed rescuing if he hadn't taken the boat from the marina in the first place.
16 D MARCUS: That is a logical pretzel.
17 D SKEETER: Can I say something?
18 D MARCUS: No.
19 D JUDGE ADEYEMI: Let him.
20 D SKEETER: I'd do it again, Judge. Ain't proud, ain't sorry.
21 D RHONDA: Your Honor, that's practically a confession.
22 D JUDGE ADEYEMI: It's practically a sermon. Ms. Kessler, do you still wish to prosecute?
23 D RHONDA (after a beat): The State will reduce to trespass.
24 D MARCUS: Time served.
25 D JUDGE ADEYEMI: Time served. Mr. Duval, return the boat with a thank-you note.
26 D SKEETER: Yes, ma'am.
27 D JUDGE ADEYEMI: Court is adjourned. Mind the step.

### SCENE s00177 | INT. DRIED-OUT PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IMOGEN SALAZAR, REYNALD KOWALSKI, CURATOR ASTRID LUNDGREN, SECURITY GUARD BASHIR HALLOWAY, CORONER
* 1 A ¶ Dome overhead.
* 2 A Cracked seats.
* 3 A Projector dust under a single work light.
4 A ¶ DETECTIVE IMOGEN SALAZAR, 40s, crouches by a chalk outline.
5 A Her partner, DET. REYNALD KOWALSKI, 50s, eats sunflower seeds.
6 A CURATOR ASTRID LUNDGREN, 60s, stands arms folded.
7 A SECURITY GUARD BASHIR HALLOWAY, 30s, lingers by the door.
* 8 A A voice crackles on Imogen's radio.
9 D IMOGEN: Nobody touched the projector?
10 D ASTRID: Nobody has touched it in years.
11 D REYNALD: Then who turned it on?
12 D BASHIR: Wasn't me. I was at the front desk.
13 D ASTRID: He was at the desk. I saw him.
14 D REYNALD: You saw him at the desk at ten. Victim died at ten-thirty.
15 D BASHIR: I was at the desk until eleven.
16 D IMOGEN: Quiet, all of you.
* 17 A ¶ The room goes still.
18 A Imogen presses the radio.
19 D CORONER [V.O.] (over radio): Imogen, the stars on his jacket. They're real stars. Pins. Constellation of Orion.
20 D IMOGEN: Orion?
21 D ASTRID: Orion is the show we never finished.
* 22 A ¶ The projector hums to life.
* 23 A Above them, the dome blooms with stars.
* 24 A Orion rises.
25 A Bashir takes a step back.
26 D REYNALD: Who's in the booth?
27 D ASTRID: No one. It's automatic.
28 D BASHIR: It's not automatic. Not anymore.
29 D IMOGEN: Bashir. How would you know that?
30 A ¶ Bashir does not answer.
* 31 A The stars drift.
32 A Reynald draws his weapon.
33 A Astrid draws a breath.
34 D ASTRID: It was supposed to be a tribute.
35 D IMOGEN: To who?
36 D ASTRID: To the man in the outline. Yours truly built that show. I built it for him.
37 A ¶ Reynald lowers the gun a few inches, then raises it again, pointing at Astrid.
38 D REYNALD: Ma'am, step away from the console.

### SCENE s00178 | EXT. ICE FLOE - ARCTIC DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN LARS HOLMGREN, NURSE ELENI PAPADAKIS, DEEPAK RAO, FINN HOLMGREN
* 1 A ¶ Gray sky.
* 2 A Wind scours the ice.
* 3 A A tent, flapping.
* 4 A A sled, half-buried.
5 A ¶ CAPTAIN LARS HOLMGREN, 50s, wraps a rope around his fist.
6 A NURSE ELENI PAPADAKIS, 30s, kneels by a wrapped shape.
7 A DEEPAK RAO, 40s, a cook, melts snow in a dented pot.
8 A A boy, FINN HOLMGREN, 12, watches the horizon.
9 D LARS (to all): Pack it up. We move at first light.
10 D ELENI (to Lars): He can't be moved.
11 D LARS: He can't stay.
12 D DEEPAK (to himself): Soup. Only soup left. Sure.
13 A ¶ Finn slowly turns from the horizon.
14 D FINN (to Lars): Dad, the ice is cracking.
15 D LARS: It's always cracking.
16 D FINN: Louder, this time.
17 A ¶ Lars glances down at the wrapped shape, then at Eleni.
18 A She holds his gaze and gently pulls the blanket over the face.
19 A Lars takes off his gloves.
20 A Puts them on Finn.
21 D LARS (quiet, to Finn): Hold these for me.
22 A ¶ He walks to the sled and begins loading it.

### SCENE s00179 | INT. SYNERGEX CORP - OFFICE OF THE VICE PRESIDENT OF CULTURE - DAY
Detected names (may be incomplete or contain aliases): BE CHANGE, VICE PRESIDENT BARRETT QUIGLEY-STONE, PRUDENCE OKONJO
* 1 A ¶ A glass-walled corner office that looks onto a parking structure.
* 2 A A yoga ball sits where a chair should.
* 3 A A neon sign on the wall reads "BE THE CHANGE (PENDING APPROVAL)."
* 4 A A whiteboard is covered with arrows that lead nowhere.
* 5 A Sunlight is filtered through a fake ficus.
6 A ¶ VICE PRESIDENT BARRETT QUIGLEY-STONE, 40s, sleeves rolled, wireless headset on one ear, bounces gently on the yoga ball.
7 A His hair is gelled into a decision.
8 A Across the desk sits PRUDENCE OKONJO, 30s, a quality analyst, pressed blazer, notebook on her knee, patience worn thin.
* 9 A In front of her is a paper cup of kombucha she has not touched.
10 D BARRETT: Prudence. Thanks for jumping on this.
11 D PRUDENCE: You asked me to come at nine. It's nine-forty.
12 D BARRETT: Time is a social construct. But I hear you. Let's circle back to your feedback.
13 D PRUDENCE: It's not feedback. It's a defect report. The product ships with a battery that overheats.
14 D BARRETT: We prefer "enthusiastic."
15 D PRUDENCE: It caught fire in testing.
16 D BARRETT: Enthusiastic. Let's workshop that.
17 A ¶ Barrett stands, bounces once on the ball, and caps a marker.
18 A He writes ENTHUSIASM on the whiteboard and draws an arrow to a drawing of a flame.
19 A Prudence watches without blinking.
20 D PRUDENCE: Barrett, I filed this report six weeks ago.
21 D BARRETT: And we love that. Proactive. Self-starter. That's the energy.
22 D PRUDENCE: It's still unanswered.
23 D BARRETT: Which is why I brought you here. I want to empower you to own the narrative.
24 D PRUDENCE: I don't want to own the narrative. I want to stop the shipment.
25 D BARRETT: Shipment is a strong word.
26 D PRUDENCE: Forty thousand units are in a warehouse in Ohio. Trucks leave Friday.
27 D BARRETT (leaning in, smiling): Let's not boil the ocean.
28 A ¶ Prudence puts the notebook on the desk.
29 A She picks up the kombucha and sets it down again, harder than she meant to.
* 30 A Liquid slops over the rim.
31 D PRUDENCE: Do you know what a thermal runaway is?
32 D BARRETT: Sounds like a marathon.
33 D PRUDENCE: It's when a battery cell heats the next one and the next. It doesn't stop. It's a chain reaction in someone's pocket.
34 D BARRETT: And that's why we're building a culture of openness.
35 D PRUDENCE: You're not hearing me.
36 D BARRETT: I'm hearing the concern. I'm holding space for it.
37 A ¶ Prudence stands.
38 A Her chair rolls backward and hits the ficus.
* 39 A A leaf falls off.
* 40 A It is plastic.
41 D PRUDENCE: People will get burned.
42 D BARRETT: Prudence. Breathe.
43 D PRUDENCE: Don't tell me to breathe.
44 D BARRETT: We have a mindfulness app. It's free for staff.
45 A ¶ Prudence takes the marker out of his hand.
46 A She crosses out ENTHUSIASM and writes FIRE in letters a foot tall.
* 47 A The marker squeaks.
48 A Barrett's smile flickers, then holds.
49 D BARRETT [CONT'D]: That's not on brand.
50 D PRUDENCE: Neither is a lawsuit.
51 D BARRETT: Now you're being negative.
52 D PRUDENCE: I'm being accurate.
53 A ¶ Barrett slides off the yoga ball.
* 54 A It rolls away and bumps a wall.
55 A He picks up his headset, taps it.
56 D BARRETT (into headset): Hey, Dale. Quick favor, can you hold the trucks?
57 A ¶ He listens.
58 A His face drops.
59 D BARRETT [CONT'D] (into headset): What do you mean, they left Tuesday?
60 A ¶ Prudence stares at him.
61 A Barrett slowly removes the headset and places it on the desk like a dead bird.
62 D PRUDENCE: Tuesday.
63 D BARRETT: There may have been a miscommunication.
64 D PRUDENCE: You called me in here to talk me out of it. The trucks were already gone.
65 D BARRETT: I was going to loop you in.
66 D PRUDENCE: You were going to loop me out.
67 A ¶ She picks up her notebook.
68 A Barrett stands very still.
* 69 A The neon sign hums.
70 A Prudence flips to a fresh page, writes something, tears it out, and sets it on his desk.
71 D BARRETT: What is this?
72 D PRUDENCE: My resignation. And the number for the fire marshal.
73 A ¶ She walks out.
* 74 A The door swings behind her.
75 A Barrett stares at the page.
76 A He sits on the floor where the yoga ball used to be, and the neon sign flickers off.

### SCENE s00180 | INT. ABANDONED LIGHTHOUSE - LENS ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE NADIA KOROMA, UNIFORM OFFICER TREVOR LANE, HARBORMASTER OSWALD PRIEST, PHILIPPA ACHTERBERG
* 1 A ¶ Wind howls through broken glass.
* 2 A A crushed lantern lies on its side.
3 A DETECTIVE NADIA KOROMA, 40s, kneels by a body-shaped tarp.
4 A UNIFORM OFFICER TREVOR LANE, 20s, holds a flashlight.
5 A HARBORMASTER OSWALD PRIEST, 60s, stands dripping in the doorway.
6 D NADIA: Time of death?
7 D TREVOR: Coroner says midnight.
8 D OSWALD: Midnight? I was here at midnight.
9 D NADIA: You were here?
10 D OSWALD: Checking the light. It was out.
11 D TREVOR: It's always out.
12 D NADIA: Mr. Priest, did you see anyone?
* 13 A ¶ Footsteps on the spiral stair.
14 A DR. PHILIPPA ACHTERBERG, 50s, in a rain slicker, climbs into the room, medical bag in hand.
15 D DR. ACHTERBERG: Don't touch the tarp.
16 D NADIA: Doctor.
17 D OSWALD: That's not the coroner.
18 D DR. ACHTERBERG: I'm his sister. I came for the body.
19 D NADIA: Your brother's dead?
20 A ¶ Achterberg lowers the bag.
21 A Oswald looks at the floor.
22 A Trevor looks at Nadia.

### SCENE s00181 | EXT. ROOFTOP WATER TOWER - SUNSET
Detected names (may be incomplete or contain aliases): JUNIPER LOPEZ, WES, CHUKWU, DELPHINE ABERNATHY, TOMAS KOWALCZYK
* 1 A ¶ A rusted ladder, a patched tank.
2 A Four teens sit on the catwalk with feet dangling.
* 3 A The town below is small and gold.
4 A ¶ JUNIPER LOPEZ, 16, plays with a bottle cap.
5 A WESLEY "WES" CHUKWU, 17, eats sunflower seeds.
6 A DELPHINE ABERNATHY, 16, writes in a notebook.
7 A TOMAS KOWALCZYK, 15, lies flat, staring up.
8 D WES (to everyone): Last summer before everything changes.
9 D JUNIPER (to Delphine): You're going, right? To the city?
10 D DELPHINE: Maybe.
11 D TOMAS (to himself): Clouds look like nothing.
12 A ¶ Juniper flicks the bottle cap over the rail.
* 13 A It disappears.
14 D WES: Somebody say something deep.
15 D TOMAS: The tank's leaking.
16 A ¶ They all look down.
* 17 A A thin trickle runs along the catwalk.
18 A Nobody moves.

### SCENE s00182 | INT. OBSERVATORY BALLROOM - NIGHT
Detected names (may be incomplete or contain aliases): CELESTE MARCHETTI, JULIAN VOSS, WAITER, ISOLDE FAIRWEATHER
* 1 A ¶ A gala under a brass telescope.
* 2 A Strings tune.
* 3 A Champagne flutes glint.
4 A Couples drift to the dance floor.
5 A ¶ CELESTE MARCHETTI, 30s, stands alone by the window in a green gown.
6 A Her ex, JULIAN VOSS, 30s, enters in a tuxedo, hesitates, then crosses to her.
7 A A WAITER, 20s, passes with a tray.
8 A Behind them, ISOLDE FAIRWEATHER, 60s, Celeste's aunt, watches over her fan.
9 D JULIAN: You came.
10 D CELESTE: You invited me.
11 D JULIAN: I didn't think you'd say yes.
12 D ISOLDE (calling over): Celeste, darling, the cake!
13 D CELESTE: In a minute, Auntie.
14 A ¶ The waiter offers a flute.
15 A Julian takes two.
16 A Hands one to her.
17 D WAITER: Compliments of the house.
18 D JULIAN: To old times.
19 D CELESTE: To new ones.
20 D ISOLDE (approaching): Julian, you've gotten thin.
21 D JULIAN: Hello, Isolde.
22 D ISOLDE: Are you eating?
23 D CELESTE: Auntie.
* 24 A ¶ The music swells.
25 A Julian offers a hand.
26 A She looks at it.
27 A Behind her, Isolde fans faster.
28 A The waiter retreats.
29 D JULIAN: One dance.
30 D CELESTE: One.
31 A ¶ She takes it.
32 A They step into the crowd, stiff at first, then not.
33 A Isolde lowers the fan and sighs.
34 A The waiter sets down his tray and leaves it.
35 D ISOLDE (to the waiter): Fetch the cake knife, would you? She'll want it later.
36 D WAITER: Ma'am?
37 D ISOLDE: I said she'd want it. Go.

### SCENE s00183 | INT. ABANDONED BOWLING ALLEY CONVERTED INTO A GOAT YOGA STUDIO - MORNING
Detected names (may be incomplete or contain aliases): PERPETUA OKAFOR-LINDQVIST, HOLDEN BAXTER, BRIDGET MULLANEY, SPENCER, MARCEL DUPUIS-OGUNDE
* 1 A ¶ Sun slants through the old neon pins.
* 2 A The lanes are covered in rubber mats, and seven goats in tiny sweaters stand about like mildly disappointed customers.
* 3 A The air smells of lavender and hay.
4 A ¶ PERPETUA OKAFOR-LINDQVIST, 40s, instructor and owner, stands on lane four in a lilac unitard, hands pressed together.
5 A Her student, HOLDEN BAXTER, 30s, a nervous accountant, holds a downward dog while a goat named Kevin stands on his back and chews his shirt.
6 A At the shoe counter, BRIDGET MULLANEY, 70s, the landlady, counts rent in a ledger with a pen she clicks like a metronome.
* 7 A Perpetua's cellphone buzzes on the ball return.
8 D PERPETUA: Breathe into your sit bones, Holden.
9 D HOLDEN: I don't think I have sit bones.
10 D PERPETUA: Everyone has sit bones.
11 D HOLDEN: Kevin is eating my collar.
12 D PERPETUA: That's Kevin's way of saying he trusts you.
* 13 A ¶ The phone buzzes again.
* 14 A The speaker clicks on by itself.
15 D SPENCER [V.O.] (over phone): Perp, it's Spencer from the county. We need to talk about the permit.
16 D PERPETUA (to the phone): Spencer, I'm in a flow.
17 D SPENCER [V.O.]: There's a complaint. About, uh, the goats and the fire code.
18 A ¶ Bridget stops clicking.
19 A A goat bleats.
20 A Another follows.
21 A Holden collapses into a puddle and Kevin steps off him, unbothered.
22 D BRIDGET: The fire code. I told you.
23 D PERPETUA: You told me nothing, Bridget.
24 D BRIDGET: I told you in March.
25 A ¶ A new figure enters through the fire door, backlit: MARCEL DUPUIS-OGUNDE, 50s, a health inspector in a crisp gray suit, clipboard clutched like a shield.
26 A A goat sniffs his cuff.
27 A He lifts his pen.
28 D MARCEL: Ms. Okafor-Lindqvist?
29 D PERPETUA: Namaste, officer.
30 D MARCEL: Inspector. I'm here about the livestock.
31 D HOLDEN (from the floor): They're not livestock. They're faculty.
32 A ¶ Marcel writes something.
33 A Kevin eats the page.
34 D SPENCER [V.O.] (over phone): Hello? Is anyone there?
35 A ¶ Perpetua closes her eyes, breathes in, and turns the phone face down.

### SCENE s00184_0 | INT. APPELLATE COURTROOM - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY RUTH ELLINGSWORTH, JUSTICE AMADOU DIALLO-FERNANDEZ, BAILIFF
* 1 A ¶ Dark wood, high bench, a brass seal.
* 2 A A hush.
3 A ATTORNEY RUTH ELLINGSWORTH, 50s, stands at the lectern in a navy suit.
4 A Her papers are squared.
5 A Her hands are not.
6 A ¶ JUSTICE AMADOU DIALLO-FERNANDEZ, 60s, looks down from the bench over half-moon glasses.
7 A He has been listening for an hour.
8 D JUSTICE DIALLO-FERNANDEZ: Ms. Ellingsworth, your time is nearly up.
9 D RUTH: I understand, Your Honor. If I may conclude.
10 D JUSTICE DIALLO-FERNANDEZ: You may.
11 D RUTH: The trial court erred in excluding the recording. Without it, the jury never heard my client's own words.
12 D JUSTICE DIALLO-FERNANDEZ: Words he spoke to a priest.
13 D RUTH: To a man who was not, in fact, a priest.
14 D JUSTICE DIALLO-FERNANDEZ: So you say.
15 D RUTH: So the record says. Exhibit nine.
16 A ¶ He flips pages.
17 A She waits.
* 18 A The door at the back opens with a creak.
19 A A BAILIFF, 30s, hurries down the aisle and hands the Justice a folded note.
20 A He reads.
21 A His face changes.
22 D JUSTICE DIALLO-FERNANDEZ [CONT'D]: Ms. Ellingsworth, I'm informed that the State has just withdrawn its opposition.
23 D RUTH: Withdrawn?
24 D JUSTICE DIALLO-FERNANDEZ: Entirely. Your client's conviction is to be vacated.
25 A ¶ Ruth looks at the back of the room.
* 26 A Her opponent's chair is empty.
* 27 A Her phone buzzes against the lectern.
28 A She turns it over.
* 29 A A name on the screen.
30 D RUTH: Your Honor, may I take this?
31 D JUSTICE DIALLO-FERNANDEZ: Please.
32 A ¶ She raises the phone to her ear.
33 D BAILIFF [V.O.] (over phone): Ma'am, front desk. The real priest just walked in. He confirmed it.
34 A ¶ Ruth lowers the phone and lets her breath out slowly.
35 A The Justice watches her.
36 A She nods once.
37 D RUTH: Thank you, Your Honor.
38 D JUSTICE DIALLO-FERNANDEZ: Don't thank me yet. The paperwork alone will take until Friday.
39 D RUTH: Friday is fine.
40 D JUSTICE DIALLO-FERNANDEZ: I thought it might be.
41 A ¶ She gathers her papers.
42 A He returns to his notes without another glance.
43 A The Bailiff holds the door.
44 A Ruth walks out with a straight back and unsteady knees.

### SCENE s00184_1 | INT. COURTHOUSE CORRIDOR - CONTINUOUS
Detected names (may be incomplete or contain aliases): BAILIFF, RUTH
* 1 A ¶ Marble floors.
* 2 A Echoes.
3 A She leans against a column and closes her eyes.
4 A The Bailiff appears at her shoulder.
5 D BAILIFF: Ma'am, you dropped this.
6 A ¶ He hands her a single sheet.
* 7 A Exhibit nine.
8 A She folds it into her coat.
9 D RUTH: He's going to walk out of there tonight.
10 D BAILIFF: Yes, ma'am.
11 D RUTH: Eleven years.
12 A ¶ The Bailiff says nothing.
13 A He just nods.
14 A She smiles, finally, and goes.

### SCENE s00185 | EXT. SINKING FISHING TRAWLER - DECK - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN IMELDA DRAGOMIR, DEACON PRICE, OLU ABIODUN, SANTI, VEGA, LIN HUANG
* 1 A ¶ The boat tilts at ten degrees.
* 2 A Gray water sloshes at the rails.
* 3 A A radio mast leans.
4 A ¶ CAPTAIN IMELDA DRAGOMIR, 50s, leathery, in yellow oilskins, stands at the wheelhouse door, counting heads with her finger.
5 A DEACON PRICE, 20s, deckhand, drags a blue cooler across the planks.
6 A OLU ABIODUN, 40s, engineer, slumps against a winch, hands black with oil.
7 A SANTIAGO "SANTI" VEGA, 30s, cook, bails with a saucepan.
8 A A girl, LIN HUANG, 12, the captain's niece, sits cross-legged on a coil of rope with a life vest two sizes too big.
9 D IMELDA: Raft's inflated. Ten minutes.
10 D DEACON: We said that twenty minutes ago.
11 D OLU: Pump's dead.
12 D SANTI: Saucepan's not.
13 A ¶ Lin tightens a strap.
14 A Nobody hurries.
15 A Imelda hands Lin a granola bar.
16 D IMELDA: Eat. It's a long wait.

### SCENE s00186 | INT. PAPER LANTERN FACTORY - EVENING
Detected names (may be incomplete or contain aliases): MEI-LING TSAI, DANIEL OKORO, AUNTIE FEN, JASPER TSAI, GRACE OKORO, FOREMAN
* 1 A ¶ Hundreds of unlit lanterns hang from the rafters like pale moons.
* 2 A Long tables, glue pots, bamboo ribs.
* 3 A One window glows orange.
4 A ¶ MEI-LING TSAI, 30s, in a paint-spattered smock, glues a seam.
5 A Her fiance, DANIEL OKORO, 30s, in a suit, stands at the door with a small box.
6 A MEI-LING's mother, AUNTIE FEN, 60s, folds paper at the next table.
7 A Her brother, JASPER TSAI, 20s, hauls a crate.
8 A Daniel's mother, GRACE OKORO, 60s, sits near the stove with tea.
9 A A FOREMAN, 50s, watches from the loft.
10 D DANIEL: You said seven.
11 D MEI-LING (not looking up): Lanterns don't glue themselves.
12 A ¶ Daniel sets the box on the table.
* 13 A It sits there.
14 A Fen pretends not to look.
15 A Jasper drops the crate.
16 A Everyone freezes.
17 A Grace sets down her tea.
18 D GRACE: Daniel. The box.
19 D MEI-LING: He's just stopping by.
20 D DANIEL: I'm not.
21 A ¶ He opens the box.
* 22 A A ring.
23 A Mei-Ling presses the seam flat with her thumb.
24 A Holds it.
25 A Holds it longer.
26 D FOREMAN (from the loft): Do we light them or not?
27 D MEI-LING: Not yet.
28 A ¶ She sets the lantern on the table, turns, and takes the ring from the box.
29 A Then she walks to the window, holds it up to the orange light, and the room waits.
30 A Fen drops her paper.
31 A Jasper stares at his shoes.
32 A Grace smiles into her tea.
33 A ¶ The Foreman strikes a match.

### SCENE s00187 | INT. NIGHT FREIGHT ELEVATOR - SHIPYARD WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): VIKTOR SOROKIN, MALCOLM TRENT, ANALIESE BRANDT, OBADIAH FINCH, TEO
* 1 A ¶ A cage elevator the size of a garage rattles upward through a dark shaft, lit by a single caged bulb.
* 2 A Chains sing.
* 3 A The walls are streaked with rust and old graffiti.
4 A ¶ VIKTOR SOROKIN, 50s, in a long coat, stands with a briefcase chained to his wrist.
5 A His bodyguard, MALCOLM TRENT, 30s, a broad man with a shaved head, stands behind him, one hand inside his jacket.
6 A At the back, ANALIESE BRANDT, 30s, in a hard hat and reflective vest, pretends to read a clipboard.
7 A A shipping clerk, OBADIAH FINCH, 60s, sweaty and stooped, mops his forehead.
8 A Two younger dockhands, RAFAEL and TEO, 20s, in matching overalls, lean on the gate and share a cigarette they are not supposed to have.
* 9 A ¶ The elevator shudders.
10 A Obadiah wipes his hands on his trousers.
11 A Analiese's pen stops moving.
12 A Malcolm's gaze drifts from Viktor to the dockhands to the clipboard, and his hand tightens inside his jacket.
13 A Rafael hands the cigarette to Teo without looking, and Teo takes it, and neither of them smokes.
14 D VIKTOR: Forty floors is a long way to go without conversation.
15 D OBADIAH: It's, uh, only thirty-eight, sir.
16 D VIKTOR: Then it is a shorter silence.
17 A ¶ Analiese turns a page.
18 A Her thumb hovers over a clip at the back of the board.
19 A Malcolm shifts a step closer, close enough to read it.
20 A Her hand slides away.
21 D ANALIESE: Inspection paperwork. Nothing exciting.
22 D MALCOLM: Inspectors don't work nights.
23 D ANALIESE: Fire codes don't care what time it is.
* 24 A ¶ The elevator groans and slows.
25 A Teo drops the cigarette and grinds it under his heel.
26 A Rafael pulls a crowbar from his overalls and slides it behind his back.
27 A Obadiah sees and goes white.
28 D VIKTOR: Something wrong, Mr. Finch?
29 D OBADIAH: No, sir. Heat, is all.
* 30 A ¶ The bulb flickers.
31 A Malcolm draws his gun.
32 A Analiese swings the clipboard into his wrist, and the gun spins across the floor.
33 A Rafael swings the crowbar into the briefcase chain, which sparks and holds.
34 A Teo grabs Obadiah, who yelps.
35 A Viktor drops into a crouch.
36 A The elevator slams to a stop, and everyone staggers.
37 D VIKTOR (quietly): You are not inspectors.
38 D ANALIESE: No.
* 39 A ¶ The gate rattles open on a dark, empty floor.
* 40 A Wind sweeps in.
* 41 A Somewhere far below, a ship's horn sounds.

### SCENE s00188 | INT. ROLLER RINK - SNACK BAR - NIGHT
Detected names (may be incomplete or contain aliases): PAZ ORTEGA-WILLIAMS, KIRA SINGH, DEWEY LAMBERT, ARLO HOLLOWAY, TALL STRANGER, MAX
* 1 A ¶ Disco ball scatters light.
* 2 A Neon trim.
* 3 A Under the music, wheels rumble on wood.
4 A ¶ PAZ ORTEGA-WILLIAMS, 17, in rental skates, leans on the counter.
5 A Her best friend, KIRA SINGH, 17, steals fries from her basket.
6 A DEWEY LAMBERT, 18, behind the counter in a paper hat, wipes it down.
7 A At a nearby table, BEATRICE "BEE" HOLLOWAY, 16, sketches in a notebook, and her brother, ARLO HOLLOWAY, 14, sips a slushie.
8 D PAZ: Okay, but if I ask him and he says no, I have to move to another state.
9 D KIRA: You are not moving to another state.
10 D PAZ: Then I'm dying. Those are the options.
11 D KIRA: He's right there. Dewey. Dewey!
12 D DEWEY: Hey. Sorry. I was in the fryer zone.
13 D PAZ (low, to Kira): Kill me.
14 D KIRA (to Dewey): She wants to know if you're going to the thing on Saturday.
15 D DEWEY: The thing?
16 D PAZ: The thing. At the quarry.
17 D DEWEY: Oh. The quarry. Yeah, probably. Maybe. Why?
18 D PAZ: No reason. Just curious.
19 D KIRA: She has a reason.
20 D PAZ: I do not.
21 A ¶ Dewey leans his elbows on the counter.
22 A Kira bounces on her skates.
23 A Bee tears a page from her notebook and slides it across the table to Arlo, who pockets it.
24 A ¶ A TALL STRANGER, 20s, in a leather jacket and black skates, glides up behind Paz and taps her shoulder.
25 A This is MAXIMILIAN "MAX" DUBOIS.
26 A Paz turns.
27 A Her face does something complicated.
28 D MAX: Paz. You never called.
29 D PAZ: Max. I was going to.
30 D KIRA (under her breath): Oh no.
31 D DEWEY: Who's this?
32 D MAX: Her ex.
33 D DEWEY: Oh.
34 D PAZ: He's not my ex. We went out twice. Once. Once and a half.
35 D MAX: You left in the middle of the second one.
36 D PAZ: I was sick.
37 D MAX: You were laughing.
38 A ¶ Bee smiles into her slushie.
39 A Arlo whispers to her.
40 A Dewey slowly picks up a rag and starts wiping the counter again, harder.
41 A Kira looks from one face to another, delighted and horrified.
42 D KIRA: Anyone want fries?

### SCENE s00189 | INT. UNDERSEA CORAL CATHEDRAL - THRONE HALL - DUSK
Detected names (may be incomplete or contain aliases): EMPRESS THALASSA-VEY, ADMIRAL CORVIN HASK, SELENE OKONKWO-REYES, TIDE, VOICE, THE DEEP
* 1 A ¶ Arches of living coral rise into green gloom.
* 2 A Shafts of light pass through a ceiling of slow, shimmering water.
* 3 A Schools of silver fish loop through pillars like banners in a wind.
* 4 A The air, impossibly, is breathable, but everything moves as if underwater: hair, robes, flame.
5 A ¶ EMPRESS THALASSA-VEY, 80s, ancient and translucent as a jellyfish, sits on a throne grown from pale branching coral.
* 6 A Her robes drift.
7 A At her right stands ADMIRAL CORVIN HASK, 50s, scarred, armored in abalone plates.
8 A At her left, the young priestess SELENE OKONKWO-REYES, 20s, clutches a conch shell.
9 A At the foot of the dais, a boy, TIDE, 10, sits cross-legged with a dented tin whistle.
10 D EMPRESS THALASSA-VEY: The tide has turned. I feel it in my bones.
11 D ADMIRAL HASK: The fleet awaits your word.
12 D SELENE: There is no fleet, Admiral. There are seven ships and four are leaking.
13 D ADMIRAL HASK: Then three.
14 A ¶ The conch glows in Selene's hands.
15 A Tide blows a soft note on the whistle.
* 16 A A crab scuttles across the floor.
17 D EMPRESS THALASSA-VEY: Selene, what does the shell say?
18 D SELENE (listening): It says the surface is coming down.
19 D ADMIRAL HASK: The surface has always been coming down.
20 D SELENE: Not like this.
21 A ¶ A VOICE from deep within the walls, vast and slow, rolls through the hall.
22 D THE DEEP [V.O.] (echoing): Empress. The debt is due.
* 23 A ¶ The fish scatter.
* 24 A The light dims.
25 A Hask draws a trident.
26 A Thalassa-Vey lifts one hand, and the water stills.
27 A Tide stops playing.
28 D EMPRESS THALASSA-VEY: I know.
29 A ¶ She rises, slowly, and her robes billow out like a sail.
30 A She steps down from the throne, past Hask, past Selene, and kneels in front of the boy.
31 A Takes the whistle gently from his hands.
32 D EMPRESS THALASSA-VEY [CONT'D]: Child, you will play for me.
33 D TIDE: What song?
34 D EMPRESS THALASSA-VEY: The last one. The one your mother taught you.
35 A ¶ Tide takes a breath and begins, small and thin.
36 A Hask lowers the trident.
37 A Selene lowers the shell.
* 38 A Above them, the sunlight goes out, one ray at a time.

### SCENE s00190 | INT. CABLE CAR CABIN - ALPINE GORGE - NIGHT
Detected names (may be incomplete or contain aliases): SOLVEIG RASMUSSEN, AGENT KAZIMIR DOBRYNIN, LUCIEN FAUREAU, TAMARA QUINN
* 1 A ¶ A glass box suspended over blackness.
* 2 A Wind buffets it.
* 3 A Lights of a village glimmer far below.
4 A ¶ DR. SOLVEIG RASMUSSEN, 40s, grips a metal briefcase.
5 A Opposite her, AGENT KAZIMIR DOBRYNIN, 50s, sits calm, a pistol in his lap.
6 A LUCIEN FAUREAU, 30s, the operator, huddles near the control panel.
7 A TAMARA QUINN, 20s, a journalist with a camera, crouches by the door.
* 8 A ¶ Static from the radio.
* 9 A The cabin lurches and stops.
10 D SOLVEIG: Why did we stop?
11 D LUCIEN: Wind. It trips the brake.
12 D KAZIMIR: The wind did not trip it.
13 A ¶ Lucien checks the panel.
14 A Tamara lifts the camera and starts filming.
15 A Kazimir slides a hand over the lens.
16 D KAZIMIR [CONT'D]: No.
17 D TAMARA: Public interest.
18 D KAZIMIR: Private interest. Mine.
19 A ¶ Solveig edges the briefcase behind her knees.
20 A Kazimir notices.
21 A He raises the pistol, not at her, but at the ceiling.
* 22 A A single shot cracks the roof light.
* 23 A Wind shrieks in.
24 A Lucien dives for the floor.
25 A Tamara drops the camera.
* 26 A It skids to the door and tumbles out of a gap.
27 A Solveig lunges for the pistol, and Kazimir catches her wrist.
28 A They struggle.
* 29 A The cabin swings.
30 D SOLVEIG: Let go.
31 D KAZIMIR: The case, Doctor.
32 D SOLVEIG: It's not yours.
33 D KAZIMIR: It was never yours.
34 A ¶ Lucien crawls toward the panel.
35 A Tamara grabs his ankle.
36 D TAMARA: What are you doing?
37 D LUCIEN: Restarting the brake.
38 D TAMARA: Don't. He'll kill us.
39 D LUCIEN: He'll kill us anyway.
40 A ¶ He hits a lever.
* 41 A The cabin lurches forward.
42 A Kazimir loses his balance.
43 A Solveig wrenches the pistol free, and it clatters across the floor.
44 A Tamara scoops it up and aims at Kazimir with both hands.
45 D TAMARA [CONT'D]: Sit down.
46 D KAZIMIR: You will not shoot.
47 D TAMARA: Try me.
48 A ¶ Kazimir sits.
49 A Solveig flips the case open: nothing inside but a photograph.
50 A Lucien stares at it.
51 A Kazimir smiles.
52 D SOLVEIG: You wanted a photograph?
53 D KAZIMIR: I wanted the man in it.
54 A ¶ Solveig turns it over.
* 55 A A name.
56 A Her own.
* 57 A The cabin glides on into the dark.
58 D LUCIEN (to the room): We're ten minutes from the station.
59 D TAMARA: Then we have ten minutes.
60 D KAZIMIR: For what?
61 D TAMARA: For you to talk.
62 A ¶ Kazimir says nothing.
* 63 A The wind drops.
64 A Solveig steadies herself on the rail and holds the photograph up to the light.
* 65 A The faces blur.
* 66 A The village grows closer below.
67 D SOLVEIG: Who sent you?
68 D KAZIMIR: The man who took your picture.
69 D SOLVEIG: My father took that picture.
70 D KAZIMIR: Yes.
71 A ¶ Tamara's grip on the pistol tightens.
72 A Lucien checks the panel.
* 73 A The cabin hums.
* 74 A A light on the dock ahead flashes red.
75 D LUCIEN: Station's alerted.
76 D TAMARA: They'll be waiting.
77 A ¶ Kazimir shrugs.
78 A Solveig folds the photograph into her coat.
* 79 A The cabin glides into the dock.
* 80 A The door slides open.
81 A Armed uniformed men fill the platform.
82 D KAZIMIR: Doctor. Ask them whose uniforms those are.
83 A ¶ Solveig looks.
84 A Her face falls.
85 A She takes a step back.
86 D SOLVEIG: Those are my father's.

### SCENE s00191 | INT. DERELICT SPACE ELEVATOR CAR - ORBITAL TETHER - CONTINUOUS
Detected names (may be incomplete or contain aliases): SPARROW, ADEBAYO, TOBY, ZHANG, MAJOR DELPHINE VOSKUIJLEN, GIDEON FAIRCHILD
* 1 A ¶ Cramped.
* 2 A Frost on the windows.
* 3 A Earth hangs below like a blue coin.
4 A ¶ CAPTAIN IRIS "SPARROW" ADEBAYO, 40s, floats at the console.
5 A Her engineer, TOBIAS "TOBY" ZHANG, 30s, clings to a ladder.
6 A MAJOR DELPHINE VOSKUIJLEN, 50s, a medic, holds a sedated passenger's wrist.
7 A The passenger, GIDEON FAIRCHILD, 70s, drifts asleep, tethered to a seat.
8 D SPARROW: Toby, how's the cable?
9 D TOBY: Thinner than I'd like, Sparrow.
10 D DELPHINE: His pulse is slowing.
11 A ¶ Sparrow does not look up.
12 A She taps a screen.
* 13 A It blinks red.
14 D SPARROW: Delphine, can you wake him?
15 D DELPHINE: I can. I shouldn't.
16 D SPARROW: Do it anyway.
17 A ¶ Delphine unclips a syringe.
18 A Toby watches her hand, then looks away.
* 19 A The car shudders.
20 D TOBY: We're losing altitude.
21 D SPARROW: We were never gaining.
22 A ¶ Delphine injects Gideon.
23 A He stirs.
24 A His eyes open slowly.
25 D GIDEON: Iris? Is that you?
26 D SPARROW: It's me, Dad.
27 A ¶ Gideon smiles faintly and drifts back to sleep.
28 A Sparrow sets her jaw and turns to the console.
29 D SPARROW [CONT'D]: Toby. Cut the cable.
30 D TOBY: Sparrow.
31 D SPARROW: Cut it.
32 A ¶ Toby draws a cutter from his belt.
33 A He floats to the hatch and stops there, hand on the latch, looking back at Delphine.
34 D DELPHINE: It's the right call.
35 D TOBY: That's what I'm afraid of.
36 A ¶ He opens the hatch.

### SCENE s00192 | EXT. DUST-BOWL GHOST TOWN - MAIN STREET - HIGH NOON
Detected names (may be incomplete or contain aliases): MARSHAL JEBEDIAH CROW, OLETA BAINBRIDGE, SISTER MARGUERITE, PETEY NAKAMURA, DEPUTY HOLLIS WAKEFIELD
* 1 A ¶ Wind scours the street.
* 2 A A tumbleweed rolls past a sagging saloon.
* 3 A A crooked sign reads "TIN CUP."
4 A ¶ MARSHAL JEBEDIAH CROW, 50s, stands at one end of the street, a battered Colt on his hip.
5 A Opposite him, OLETA BAINBRIDGE, 40s, in a black duster, rests a hand on her holster.
6 A In the saloon doorway, SISTER MARGUERITE, 30s, a nun, clutches a lantern.
7 A On the roof of the livery, a boy, PETEY NAKAMURA, 14, lies hidden with a rifle.
8 A Behind a rain barrel crouches DEPUTY HOLLIS WAKEFIELD, 20s, sweating.
9 D OLETA: You look older, Jeb.
10 D JEBEDIAH: You look the same.
11 D OLETA: That's the problem.
12 A ¶ Marguerite steps down from the saloon porch, lantern swinging.
13 A Petey adjusts his aim.
14 A Hollis stands, then ducks.
15 D SISTER MARGUERITE: Both of you, this is a house of God.
16 D JEBEDIAH: It's a saloon, Sister.
17 D SISTER MARGUERITE: It was a church first.
18 D OLETA: Move aside, Sister.
19 D SISTER MARGUERITE: I will not.
20 A ¶ Oleta draws and fires.
* 21 A The lantern shatters.
22 A Marguerite screams.
23 A Jebediah draws.
24 A Petey's rifle cracks from the roof.
* 25 A Oleta's hat flies off.
26 A Hollis shouts and flings himself prone.
* 27 A A second shot echoes.
28 A Jebediah falls to one knee, hand to his shoulder.
29 D JEBEDIAH: Who's up there?
30 D OLETA: I thought he was yours.
31 D JEBEDIAH: He's not mine.
32 D PETEY (from roof): I'm nobody's!
33 A ¶ Oleta looks at Jebediah.
34 A Jebediah looks at Oleta.
35 A She holsters her gun.
36 A He does not.
37 D OLETA: Seems we've both been ambushed.
38 D JEBEDIAH: Seems so.
39 D SISTER MARGUERITE (rising, grim): Then come inside, the lot of you. And bring the boy.
40 A ¶ Hollis crawls out from behind the barrel.
41 A Petey climbs down the ladder.
42 A Jebediah, bleeding, offers Oleta his arm.
43 A She takes it.
44 A They walk to the saloon together as the wind picks up.

### SCENE s00193 | INT. ABANDONED SUBWAY PLATFORM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR LUCIEN MARCH, VESPER DUNNE, HOODED MAN, BOY
* 1 A ¶ Tiled walls.
* 2 A Dripping pipes.
* 3 A A flickering clock reads 3:07.
4 A ¶ INSPECTOR LUCIEN MARCH, 50s, in a trench coat, waits with his hands in his pockets.
5 A Across the tracks, VESPER DUNNE, 30s, in red heels, holds a small case.
6 A Between them stands a HOODED MAN, 40s, and a BOY, 12, who sells newspapers at the exit.
7 D LUCIEN: Miss Dunne. Punctual.
8 D VESPER: Inspector March. You came alone.
9 D LUCIEN: I always do.
10 A ¶ The Boy waves a paper.
11 A The Hooded Man steps behind a pillar.
12 A Lucien sees it.
13 D LUCIEN [CONT'D]: Who's your friend?
14 D VESPER: Nobody. Just the usual.
15 D LUCIEN: The usual doesn't wear a gun.
16 A ¶ Vesper smiles.
17 A Tosses the case across the tracks.
18 A Lucien catches it.
19 A The Hooded Man draws.
20 A Lucien drops the case and ducks.
21 A The Boy shrieks and bolts.
22 A Vesper kicks the Hooded Man's knee.
23 A He cries out.
24 A They struggle and tumble.
25 A Lucien tackles them both.
26 D LUCIEN [CONT'D]: Vesper!
27 D VESPER: Stop calling me that!
* 28 A ¶ The gun skitters along the tile.
* 29 A A train horn blares in the tunnel.
30 A Everyone freezes.
* 31 A Light blooms from the dark.
32 A Vesper snatches the case.
33 A The Hooded Man grabs her ankle.
34 D HOODED MAN: Where's the money, Vesper?
35 D VESPER: Wouldn't you like to know.
* 36 A ¶ The train roars in.
37 A Lucien shoves them both flat as the cars thunder past.
* 38 A Wind whips coats.
* 39 A When the last car clears, the platform is empty.
* 40 A The case lies open, filled with newspaper clippings.

### SCENE s00194_0 | EXT. MAIL-ORDER WINDMILL RANCH - DAY
Detected names (may be incomplete or contain aliases): MAGGIE, ROSALIND SOTO, COLTON PIKE, BEAU TILLMAN
* 1 A ¶ Wind pumps clank.
* 2 A Cattle low.
* 3 A A porch looks out on a dry creek.
4 A ¶ MAGDALENA "MAGGIE" SOTO, 40s, sits on the porch rail rolling a cigarette.
5 A Her daughter, ROSALIND SOTO, 20s, mends a bridle.
6 A A drifter, COLTON PIKE, 30s, stands at the gate with his hat in his hands.
7 A His horse, a sorry mare, waits behind him.
8 A A young ranch hand, BEAU TILLMAN, 18, stacks hay bales nearby.
9 D COLTON: Ma'am, I heard you're hiring.
10 D MAGGIE: Heard from who?
11 D COLTON: Gas station.
12 D MAGGIE: We don't have a gas station.
13 D COLTON: I made a wrong turn, then.
14 A ¶ Rosalind snorts.
15 A Beau drops a bale on his toe.
16 D BEAU (hopping): Ow!
17 D ROSALIND: Beau.
18 D BEAU: I'm fine.
19 D MAGGIE: Can you ride, Mr. ...?
20 D COLTON: Pike. Colton Pike. I can ride, rope, shoe, fix a windmill.
21 D ROSALIND: Can you cook?
22 D COLTON: Badly.
23 D MAGGIE: We've got a cook.
24 D BEAU: We've got a Rosalind.
25 D ROSALIND: He means me.
26 D MAGGIE: Rosalind, show him the bunkhouse.
27 D COLTON: Thank you, ma'am.
28 A ¶ Rosalind sets the bridle down and heads off.
29 A Colton follows.
30 A Maggie lights her cigarette.
31 D MAGGIE: Beau?
32 D BEAU: Yes, ma'am?
33 D MAGGIE: Wires on the south fence were cut last night. Watch him.
34 D BEAU: The drifter?
35 D MAGGIE: The drifter.
36 A ¶ Beau nods, swallows, and picks up another bale.
37 A Maggie exhales smoke and watches Colton cross the yard, the mare nosing at his shoulder.

### SCENE s00194_1 | EXT. BUNKHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): ROSALIND, COLTON, MAGGIE
1 A ¶ Rosalind pushes open the door.
* 2 A Dust.
* 3 A Cots.
4 D ROSALIND: Mom likes you.
5 D COLTON: She hides it well.
6 D ROSALIND: She hides everything well.
7 A ¶ Colton sets his saddlebag on a cot, pauses, and runs a thumb along the wire cutters poking out of the flap.
8 A He tucks them deeper.
9 D MAGGIE [O.S.] (calling): Rosalind, supper's at six!
10 D ROSALIND (calling back): Yes, Mom!
11 A ¶ Colton and Rosalind exchange a glance.
12 A Hers is curious.
13 A His is careful.

### SCENE s00195 | INT. CORPORATE MAILROOM - DAY
Detected names (may be incomplete or contain aliases): GERALD PFEFFERKORN, NEHA BHATTACHARYA-WELLS, DON, KRUMBLE
* 1 A ¶ A basement windowless room lined with pigeonholes, a jammed copier, and a framed poster: "TEAMWORK: BECAUSE NOBODY CAN DO IT ALONE."
* 2 A A fluorescent tube buzzes.
* 3 A Cardboard boxes are stacked to the ceiling in the corner like a failing skyline.
4 A ¶ GERALD PFEFFERKORN, 50s, mailroom supervisor, wears a lanyard with three laminated cards and a worn gray cardigan.
5 A He sorts envelopes at triple speed.
6 A NEHA BHATTACHARYA-WELLS, 20s, the new hire, in a crisp blazer, stands in the doorway, holding a binder.
7 A DONOVAN "DON" KRUMBLE, 40s, a regional manager, arrives behind her, wearing a tie with tiny cartoon calculators.
8 D GERALD: Name?
9 D NEHA: Neha. First day.
10 D GERALD: Sit. Don't touch the copier.
11 D NEHA: Is it broken?
12 D GERALD: It's alive. There's a difference.
13 D DON (entering): Gerald! Great news. Efficiency review.
14 D GERALD (not looking up): We've been efficient since 1994.
15 D DON: Which is why we're moving to quarterly.
16 D NEHA: Quarterly what?
17 D DON: Everything.
18 A ¶ Gerald drops a stack of letters.
* 19 A The copier lets out a long, plaintive beep.
20 D GERALD: Don, the mail comes daily.
21 D DON: And we'll bill it quarterly.
22 D NEHA: Bill who?
23 D DON: Ourselves. It's called internal chargeback.
24 A ¶ Gerald removes his glasses and rubs the bridge of his nose.
25 A He gestures at the stack of undelivered boxes.
26 D GERALD: Those are your Q3 bonus checks.
27 D DON (brightly): Then they're early!
28 D GERALD: They're three weeks late. Because of you.
29 D DON: Let's not assign blame. Let's assign tasks.
30 A ¶ Neha raises her hand.
31 A Don points at her like she's won a prize.
32 D NEHA: Can I ask a question?
33 D DON: Please.
34 D NEHA: Why are we pretending this makes sense?
* 35 A ¶ Silence.
* 36 A The copier beeps again.
37 A Don's smile holds a moment too long.
38 A Gerald puts his glasses back on.
39 D DON (softly): Welcome aboard, Neha.

### SCENE s00196 | INT. COMMUNITY THEATER - LOBBY - DAY
Detected names (may be incomplete or contain aliases): HAMLET, DOTTIE, PRYCE, ZEKE, ADEYEMI, FINNEGAN WALSH, LUPE HERRERA, SAMMY ODUYA, TONI, VASQUEZ-LIND
* 1 A ¶ A sign: "OPENING NIGHT: HAMLET (THE MUSICAL)."
* 2 A Balloons sag.
* 3 A Paper-cup punch.
4 A ¶ DOROTHEA "DOTTIE" PRYCE, 60s, the director, strides in with a bullhorn.
5 A Her stage manager, EZEKIEL "ZEKE" ADEYEMI, 30s, trails with a clipboard.
6 A The leading man, FINNEGAN WALSH, 40s, in a doublet and sneakers, paces.
7 A Their costume designer, LUPE HERRERA, 50s, carries a rack of capes.
8 A An usher, SAMMY ODUYA, 17, hands out programs.
9 D DOTTIE: Places!
10 D ZEKE: It's four hours to curtain, Dottie.
11 D DOTTIE: Places is a state of mind.
12 D FINNEGAN: I can't find my skull.
13 D LUPE: Which skull?
14 D FINNEGAN: Yorick.
15 D LUPE: It's in the prop closet.
16 D FINNEGAN: The closet is locked.
17 D ZEKE: Sammy has the key.
18 A ¶ Sammy pats his pockets.
19 A His face falls.
20 D SAMMY: I put it somewhere safe.
21 D DOTTIE: Where is safe?
22 D SAMMY: That's the thing.
* 23 A ¶ A ruckus at the door.
24 A A woman strides in carrying an enormous, glittering costume: ANTONIA "TONI" VASQUEZ-LIND, 50s, the producer's wife, in sequins and fury.
25 A She dumps the costume on the floor.
26 D TONI: Who approved this?
27 D LUPE: The director.
28 D DOTTIE: I approved a cape.
29 D TONI: It's a disco ball.
30 D FINNEGAN: Ophelia's mad scene needs sparkle.
31 D TONI: Ophelia is drowning, Finnegan.
32 D FINNEGAN: In sequins.
33 A ¶ Dottie lifts the bullhorn and blasts a siren.
34 A Everyone covers their ears.
35 D DOTTIE: Enough! We have a show!
* 36 A ¶ Silence.
37 A Sammy slowly raises the key from inside his sock.

### SCENE s00197 | INT. VICTORIAN TELEGRAPH OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): ELIZABETH HARGROVE-WYNNE, THADDEUS OSGOOD, TWEEDLE, KEZIAH AMADI, CAPTAIN RUPERT BELLAMY, SIR ALARIC FENWICK-ROTH, MP
* 1 A ¶ Gaslight hisses.
* 2 A Brass keys.
* 3 A A wall of pigeonholes and paper tape curling like ivy.
* 4 A The air smells of lamp oil and wet wool.
* 5 A A grandfather clock ticks toward midnight.
6 A ¶ ELIZABETH HARGROVE-WYNNE, 30s, in a gray wool dress with high collar, sits at the main key, fingers dancing.
7 A A pince-nez is perched on her nose.
8 A Her supervisor, MR. THADDEUS OSGOOD, 60s, a bald man with muttonchops, hovers over her shoulder.
9 A A messenger boy, PERCIVAL "PERCY" TWEEDLE, 12, dozes on a stool.
10 A A cleaner, MRS. KEZIAH AMADI, 50s, mops the floor with deliberate slowness.
11 A On a bench, CAPTAIN RUPERT BELLAMY, 40s, a naval officer with a bandaged hand, waits with his cap on his knee.
* 12 A ¶ The key clatters.
13 A Elizabeth jots a line.
14 A She stops, rereads it, and slides it to Osgood.
15 D ELIZABETH: Mr. Osgood. This came from Calais.
16 D OSGOOD (reading): Good Lord.
17 D CAPTAIN BELLAMY: What is it?
18 D OSGOOD: Nothing, sir. A routine dispatch.
19 D ELIZABETH: It is not routine.
20 D OSGOOD: Miss Hargrove-Wynne.
21 D ELIZABETH: It names the Admiralty. It says the Channel fleet has been sold.
22 A ¶ Percy wakes, rubs his eyes.
23 A Mrs. Amadi stops mopping.
24 A Bellamy rises, face pale.
25 D CAPTAIN BELLAMY: Sold? To whom?
26 D ELIZABETH: It does not say.
27 D OSGOOD: It is a forgery.
28 D ELIZABETH: It came on the Admiralty cipher.
29 D OSGOOD: Then it is a very good forgery.
* 30 A ¶ The door bangs open.
31 A A tall man in evening dress enters, shaking rain from his coat: SIR ALARIC FENWICK-ROTH, 50s, an MP, with silver hair and a gold-topped cane.
32 A He sweeps off his hat.
33 D SIR ALARIC: Mr. Osgood. I understand there has been a message.
34 D OSGOOD: Sir Alaric. We were just discussing it.
35 D SIR ALARIC: Then let us discuss it privately.
36 A ¶ He extends a gloved hand.
37 A Osgood hesitates, glances at Elizabeth, then slowly hands over the slip.
38 A Sir Alaric reads, folds it, and tucks it inside his coat.
39 D SIR ALARIC [CONT'D]: Miss, you have not seen this.
40 D ELIZABETH: I have seen it, sir. I transcribed it.
41 D SIR ALARIC: Then you will un-transcribe it.
42 A ¶ Percy sneaks a look at Mrs. Amadi.
43 A She raises one eyebrow.
44 A Bellamy puts on his cap and steps forward.
45 D CAPTAIN BELLAMY: Sir Alaric, I would like to see that dispatch.
46 D SIR ALARIC: Captain, I am afraid it concerns matters above your station.
47 D CAPTAIN BELLAMY: My ship is in that fleet.
* 48 A ¶ A beat.
49 A Sir Alaric studies him, then smiles thinly and removes the slip.
50 D SIR ALARIC: So it is.
51 A ¶ He hands it over.
52 A Bellamy reads.
53 A His jaw tightens.
54 A He looks at Elizabeth.
55 D CAPTAIN BELLAMY: Miss Hargrove-Wynne. I should like to send a reply.
56 D ELIZABETH: To Calais?
57 D CAPTAIN BELLAMY: To everyone.
58 A ¶ She turns to the key.
* 59 A The clock begins to strike midnight.

### SCENE s00198 | INT. LAUNDROMAT-CAFE "SUDS & BEANS" - MORNING
Detected names (may be incomplete or contain aliases): SOFIA ABERNATHY-KHOURY, TEDDY, LINDGREN-ASANTE
* 1 A ¶ Machines hum.
* 2 A A chalkboard menu.
* 3 A Mismatched armchairs.
* 4 A Rain taps the windows.
5 A ¶ SOFIA ABERNATHY-KHOURY, 30s, sits cross-legged in an armchair with a paperback and a latte.
6 A Across from her, in the next chair, THEODORE "TEDDY" LINDGREN-ASANTE, 30s, folds a stack of towels with great ceremony.
7 A He glances at her book.
8 A She glances at his towels.
* 9 A A dryer buzzes.
10 A Neither moves.
11 D TEDDY (quietly): That's a good one.
12 D SOFIA: You've read it?
13 D TEDDY: Twice.
14 D SOFIA: Everyone says the ending is a letdown.
15 D TEDDY: Everyone's wrong.
16 A ¶ Sofia closes the book on her finger.
17 D SOFIA: What's your favorite part?
18 D TEDDY: The part where nothing happens.
19 D SOFIA: That's most of it.
20 D TEDDY: Exactly.
21 A ¶ She laughs.
22 A He looks pleased, then busies himself with a towel.
* 23 A The dryer buzzes again.
24 A This time he gets up, opens the door, and starts pulling out warm clothes.
25 A Sofia watches.
26 A He holds up a pair of socks, one blue and one yellow.
27 D TEDDY [CONT'D] (to himself): How does this keep happening?
28 D SOFIA (overhearing): It's a conspiracy.
29 D TEDDY: It's entropy.
30 D SOFIA: Same thing.
31 A ¶ He sits back down with the clothes in his lap.
32 A She sips her latte.
* 33 A Rain keeps tapping.
34 D SOFIA [CONT'D] (to the room, lightly): Anybody else feel like the whole city is just waiting?
35 A ¶ A barista at the counter, unseen, clatters a cup.
36 A Teddy and Sofia look at the sound, then back at each other.
37 D TEDDY: For what?
38 D SOFIA: For someone to say something.
39 D TEDDY: Maybe someone just did.
40 A ¶ Sofia tilts her head.
* 41 A A dryer thumps.
42 A Teddy holds up the mismatched socks.
43 D TEDDY [CONT'D]: Want one?
44 D SOFIA: Which?
45 D TEDDY: You pick.
46 A ¶ She considers, then takes the yellow.
47 A She tucks it into her book as a bookmark.
48 A He tucks the blue into his pocket.
49 A They sit quietly.
50 D SOFIA: What's your name?
51 D TEDDY: Teddy.
52 D SOFIA: Sofia.
53 A ¶ They do not shake hands.
54 A They both look at the rain.
55 D TEDDY: It's supposed to stop at noon.
56 D SOFIA: I hope it doesn't.
57 A ¶ He looks at her.
58 A She looks at her book.
* 59 A A dryer shuts off, and the room is quiet enough to hear the tick of the clock above the counter.
60 D SOFIA [CONT'D] (softly, to herself): Stay.
61 D TEDDY: Hm?
62 D SOFIA: The weather. I meant the weather.
63 D TEDDY: Oh. Right.
64 A ¶ He smiles at his knees.
65 A She turns a page she isn't reading.
* 66 A Outside, the rain thickens.

### SCENE s00199 | INT. REGENCY LIBRARY - EVENING
Detected names (may be incomplete or contain aliases): LADY CORDELIA ASHWORTH-PEMBERTON, LADY HENRIETTA VANE, LORD EDMUND FITZWILLIAM-OKAFOR, HOBSON
* 1 A ¶ Tall shelves, a crackling fire, a globe on a stand.
* 2 A Candles in sconces.
* 3 A Rain streaks the windowpanes.
4 A ¶ LADY CORDELIA ASHWORTH-PEMBERTON, 30s, in an emerald gown, pours sherry.
5 A Her cousin, LADY HENRIETTA VANE, 30s, in a lilac dress, stands at the fireplace, fanning herself.
6 A LORD EDMUND FITZWILLIAM-OKAFOR, 40s, in a black coat, leafs through a book.
7 A Their butler, HOBSON, 60s, stands by the door with a salver.
8 D CORDELIA: Henrietta, you are quiet tonight.
9 D HENRIETTA: I am always quiet.
10 D CORDELIA: You are never quiet.
11 D HENRIETTA: Then I am tonight.
12 D EDMUND (without looking up): She has a secret.
13 D HENRIETTA: I do not.
14 D EDMUND: Her fan has stopped. She only stops fanning when she is lying.
15 D HENRIETTA: Cordelia, tell him he is insufferable.
16 D CORDELIA: He is insufferable.
17 D EDMUND: Thank you.
18 D CORDELIA: It was not a compliment.
19 D EDMUND: It was from you.
20 D HENRIETTA: Enough. I will tell you.
21 D CORDELIA: Do.
22 D HENRIETTA: Father has accepted an offer for my hand.
23 D CORDELIA: From whom?
24 D HENRIETTA: From Lord Ravenscroft.
25 D EDMUND: Ravenscroft is sixty.
26 D HENRIETTA: Sixty-two.
27 D CORDELIA: Henrietta.
28 D HENRIETTA: He has a fine estate.
29 D EDMUND: He has a fine gout.
30 D CORDELIA: Do you wish to marry him?
31 D HENRIETTA: I do not wish to do anything.
32 D CORDELIA: Then do not.
33 D HENRIETTA: It is not so simple.
34 D EDMUND: It is exactly so simple. Tell your father no.
35 D HENRIETTA: You do not know my father.
36 D CORDELIA: I do. He is a dreadful man.
37 D HENRIETTA: Cordelia!
38 D CORDELIA: Well, he is.
39 A ¶ Hobson steps forward and presents the salver.
* 40 A A single letter, sealed in red.
41 D HOBSON: For Lady Henrietta, my lady.
42 A ¶ Henrietta takes it with careful fingers.
43 A She opens it.
44 A Reads.
45 A Her fan drops.
46 A Cordelia and Edmund exchange a look.
47 D HENRIETTA (whispering): He is dead.
48 D EDMUND: Who?
49 D HENRIETTA: Ravenscroft. This morning.
* 50 A ¶ Silence.
* 51 A The fire pops.
52 A Cordelia sets down the sherry.
53 A She takes Henrietta's hand.
54 D CORDELIA: Then you are free.
55 D HENRIETTA: Yes. I am.
56 A ¶ She laughs, a short, shocked sound.
57 A Then she cries.
58 A Edmund closes his book.
59 A Hobson quietly withdraws.

### SCENE s00200 | INT. APARTMENT - KITCHEN - EVENING
Detected names (may be incomplete or contain aliases): CLEMENTINE BRAITHWAITE
* 1 A ¶ A small kitchen.
* 2 A A table set for two.
* 3 A One candle burning.
* 4 A A phone leans against the salt shaker.
5 A ¶ CLEMENTINE BRAITHWAITE, 30s, in an apron, stirs a pot.
6 A She tastes.
7 A Adds salt.
8 A Checks the clock.
9 A She wipes her hands, straightens a fork, moves it a quarter inch, moves it back.
* 10 A ¶ The phone buzzes.
11 A She answers on speaker.
* 12 A Only a long silence and a car horn on the other end.
13 D CLEMENTINE: It's fine.
14 A ¶ She waits.
15 D CLEMENTINE [CONT'D]: No, I'm stirring. Twenty is fine.
* 16 A ¶ The line clicks dead.
17 A She does not look at the phone.
* 18 A A moment later it rings again: her own voicemail greeting, played back by mistake.
19 D CLEMENTINE [V.O.] (recorded, cheerful): Hi, you've reached Clementine. Leave a message and I'll call you right back.
20 A ¶ She presses the screen.
* 21 A The voice stops.
22 A She takes the second plate from the table and slides it back into the cupboard.
23 A She blows out the candle.
24 A Sits.
25 A Eats alone, slowly, while the pot goes on simmering.

### SCENE s00201 | INT. HYDROPONIC GARDEN DECK - STARSHIP VESPERIA - DAY
Detected names (may be incomplete or contain aliases): COMMANDER YUSUF ADEBAYO-LIND, BOTANIST IXCHEL MORALES, SCRUB, ENSIGN BRODERICK PELL, KOFI AMOAH-REYES
* 1 A ¶ Tiers of green racks under purple grow-lamps.
* 2 A Mist drifts.
* 3 A Beyond a long window, stars wheel slowly.
4 A ¶ COMMANDER YUSUF ADEBAYO-LIND, 50s, tall, silver beard, in a gray flight suit, trims a tomato vine.
5 A BOTANIST IXCHEL MORALES, 30s, small and wiry, scribbles notes.
6 A A cleaning drone named SCRUB, 2 feet tall, hums along the floor.
7 A ENSIGN BRODERICK PELL, 20s, freckled, carries a tray of seedlings.
8 A A maintenance tech, KOFI AMOAH-REYES, 40s, hangs upside down in a service hatch.
9 A ¶ Pell trips over Scrub.
* 10 A The tray flies.
11 A Ixchel dives to catch it.
12 A Kofi drops a wrench.
13 A Yusuf catches the wrench.
14 A Scrub spins in a circle and chirps.
15 D ENSIGN PELL: Sorry, sir.
16 D COMMANDER YUSUF: It's a garden, Ensign. Things fall.
17 A ¶ Ixchel sets the tray down on a rack.
18 A Kofi swings out of the hatch and lands upright.
19 D KOFI: Irrigation's back online.
20 D IXCHEL: Finally.
21 A ¶ They all stand a moment, watching the mist settle on the leaves.

### SCENE s00202 | EXT. FROZEN WATERFALL CLIFF - DAWN
Detected names (may be incomplete or contain aliases): FIGURE, ANSELM, THE WARDEN
* 1 A ¶ A wall of blue ice, a hundred feet high, hung with icicles.
* 2 A Mist rises from the pool below.
3 A ¶ A cloaked FIGURE, face hidden, climbs the ice with two picks.
4 A Below, on a ledge, a boy sits tying a boot: ANSELM, 12, thin, in a patched coat.
5 A The Figure reaches the ledge, hauls up, and stops, breathing hard.
6 D FIGURE: You're a long way from home.
7 D ANSELM: So are you.
8 D FIGURE: I'm not from anywhere.
9 A ¶ Anselm looks away.
10 A He pulls the laces tight.
11 A The Figure sits beside him without being asked.
* 12 A A long pause.
* 13 A Wind drops.
14 D ANSELM: You followed me.
15 D FIGURE: Since the village.
16 A ¶ Anselm picks at a thread on his sleeve.
17 A The Figure pulls back its hood: a woman, 50s, with a weathered face and a scar down one cheek.
18 D ANSELM: They said you were dead.
19 D THE WARDEN: Who is they?
20 D ANSELM: The elders.
21 D THE WARDEN: The elders say many things.
22 A ¶ She takes a flask from her coat, drinks, offers it.
23 A He shakes his head.
24 A She puts it away.
* 25 A Silence settles.
* 26 A Down in the pool, ice cracks like a gunshot.
27 D ANSELM: Are you going to take me back?
28 D THE WARDEN: Do you want to go back?
29 A ¶ Anselm does not answer.
30 A He stares at the ice.
* 31 A A bird screams overhead.
32 A He tightens his fists.
33 A The Warden watches the cliff, not him.
34 D THE WARDEN [CONT'D]: They'll be here by noon.
35 D ANSELM: Who?
36 D THE WARDEN: The ones who'd rather you didn't live.
37 A ¶ Anselm stands abruptly.
38 A He grabs one of her picks off the ledge.
39 D ANSELM: Then I'm not going back.
40 D THE WARDEN: I know.
41 D ANSELM: You're not going to stop me?
42 D THE WARDEN: I'm going to teach you how to climb.
43 A ¶ He looks at the pick.
44 A At her.
45 A She rises, takes his hand, and sets his grip.
46 A Then she turns to the ice.
47 D THE WARDEN [CONT'D]: Left foot first. Always.
48 A ¶ She starts up.
49 A Anselm hesitates, then plants the pick and follows.
* 50 A The first light of the sun strikes the falls.
* 51 A The ice blazes.

### SCENE s00203 | INT. ROOFTOP GREENHOUSE - AFTERNOON
Detected names (may be incomplete or contain aliases): CASPIAN ODUYA, VERONIKA STANISLAWSKI, JUNE PAPADOPOULOS
* 1 A ¶ Glass panes fogged with humidity.
* 2 A Rows of orchids.
* 3 A A watering can.
4 A ¶ CASPIAN ODUYA, 40s, sorts seed packets at a potting bench.
5 A VERONIKA STANISLAWSKI, 50s, sits on an upturned crate, sipping tea.
6 A JUNE PAPADOPOULOS, 20s, leans on a shelf, headphones around her neck.
7 D CASPIAN: The vault is on the third floor. The elevator needs a keycard. The stairwell has a camera.
8 D VERONIKA: And the roof?
9 D CASPIAN: Roof door is alarmed. But the greenhouse vent connects to the same shaft.
10 D JUNE: How wide is the vent?
11 D CASPIAN: Twenty inches.
12 D JUNE: That's tight.
13 D CASPIAN: You're small.
14 D JUNE: I'm average.
15 D VERONIKA: You're small, June. Be proud.
16 D JUNE: I'm proud. I'm also claustrophobic.
17 D CASPIAN: Veronika can talk you through.
18 D VERONIKA: I'll hum.
19 D JUNE: You'll hum?
20 D VERONIKA: Whale songs. They help.
21 D CASPIAN: We go Thursday. The night guard changes at ten.
22 D VERONIKA: What about the dog?
23 D CASPIAN: There's no dog.
24 D VERONIKA: There was a dog last month.
25 D CASPIAN: That was a different building.
26 D JUNE: Can we confirm the dog?
27 D CASPIAN: I'll confirm the dog.
28 D VERONIKA: Good.
29 D JUNE: Good.
30 A ¶ They sit.
* 31 A A drip falls from a leaf.
32 A Veronika stirs her tea.
33 A June drums on her knee.
34 A Caspian sets down the seed packet.
35 D CASPIAN: Anyone want a tomato?
36 D VERONIKA: Is it a good one?
37 D CASPIAN: Best on the roof.
38 D JUNE: Obviously. It's the only one.
39 D CASPIAN (handing her one): Eat.

### SCENE s00204 | INT. EMERGENCY ROOM - TRAUMA BAY - NIGHT
Detected names (may be incomplete or contain aliases): AMARA OKONKWO-REID, NURSE THEO LINDQVIST
* 1 A ¶ Monitors beep.
* 2 A A body on a gurney.
* 3 A Blood on gloves.
4 A ¶ DR. AMARA OKONKWO-REID, 40s, bent over a bleeding patient.
5 A NURSE THEO LINDQVIST, 30s, squeezes a bag of saline.
6 D AMARA: Pressure?
7 D THEO: Sixty over thirty.
8 D AMARA: Clamp.
9 A ¶ He hands it.
10 A She clamps.
* 11 A Blood stops.
* 12 A The monitor steadies.
13 D THEO: Holding.
14 D AMARA: Hold it.
15 A ¶ The patient seizes.
16 A Both leap.
17 A Theo pins an arm.
18 A Amara pins the other.
* 19 A The monitor screams, then flatlines.
20 A They freeze.
21 D THEO: Doc?
22 D AMARA: Paddles. Now.
23 A ¶ He slaps them in her hands.
24 A She charges.
25 A The patient jerks.
* 26 A A blip.
* 27 A Another blip.
28 A They both exhale.

### SCENE s00205 | INT. ABANDONED SKATING RINK - DAWN
Detected names (may be incomplete or contain aliases): COACH IGNATIUS PRZYBYLSKI, DARIUS, FONTENOT, RADIO ANNOUNCER, LEN, AKINTOLA-BRADY
* 1 A ¶ A vast hall with a cracked ice surface, half-melted and gray.
* 2 A Bleachers stripped bare.
* 3 A A scoreboard dangles by one chain.
* 4 A Pale light pours through a hole in the roof, striking the center of the rink like a spotlight.
5 A ¶ COACH IGNATIUS PRZYBYLSKI, 60s, bundled in a parka, sits on a bucket at the boards, holding a stopwatch in mittened hands.
6 A His breath rises in plumes.
7 A On the ice, DARIUS "THE WALL" FONTENOT, 30s, a goalie with a dented mask, stands in a crouch at the net, a puck at his feet.
* 8 A A radio on the boards crackles.
9 D RADIO ANNOUNCER [V.O.] (over radio): And that's the final from Calgary, folks. Eagles take it six to two.
10 D COACH IGNATIUS (turning it down): Six to two. Hear that, Darius?
11 D DARIUS: I heard it.
12 D COACH IGNATIUS: That's us, in three weeks, if you do not fix your glove side.
13 D DARIUS: My glove side is fine.
14 D COACH IGNATIUS: Your glove side is a screen door.
15 A ¶ Darius takes the puck and flicks it into the net.
16 A Coach shakes his head.
17 A ¶ A figure enters from the locker-room tunnel: LENNOX "LEN" AKINTOLA-BRADY, 20s, a rookie in a too-big jersey, skates tied around his neck.
18 A He stops at the boards, intimidated.
19 D LEN: Coach? Am I late?
20 D COACH IGNATIUS: You are early, which is worse. It means you didn't sleep.
21 D LEN: I slept.
22 D COACH IGNATIUS: You slept badly.
23 A ¶ Len sits, ties a skate.
24 A Darius watches from the net.
25 A Coach clicks the stopwatch.
26 D COACH IGNATIUS [CONT'D]: Len, shoot on Darius.
27 D LEN: Me? On him?
28 D COACH IGNATIUS: You see anyone else?
29 A ¶ Len steps on the ice.
30 A Skates a slow circle.
31 A Darius lowers his mask.
32 A Len winds up, shoots.
33 A Darius flicks the glove.
* 34 A The puck hits it and drops.
35 A Len stares.
36 D DARIUS (muttering): Screen door.
37 D LEN: Sorry?
38 D DARIUS: Nothing.
39 A ¶ Len shoots again.
40 A Darius makes the save with his pad.
41 A Coach scribbles.
42 A Len shoots again.
* 43 A This time the puck sails over the glove.
44 D COACH IGNATIUS: Again.
45 D LEN: Again?
46 D DARIUS: Again.
47 A ¶ They say it at once, a little too loudly.
48 A Coach covers a smile.
49 A ¶ Len shoots.
50 A Darius lunges.
* 51 A The puck clangs off the post.
* 52 A The radio crackles.
53 D RADIO ANNOUNCER [V.O.] (over radio): We now return to our regular programming.
54 A ¶ Coach clicks the radio off.
* 55 A Quiet.
56 A Len and Darius stand facing each other.
57 D COACH IGNATIUS: Good. Again.

### SCENE s00206 | INT. ABANDONED OPERA HOUSE - STAGE - NIGHT
Detected names (may be incomplete or contain aliases): ELIAS VANTERPOOL, ODETTE MARCHAND-OYELARAN
* 1 A ¶ Torn velvet curtains.
* 2 A A dusty chandelier.
* 3 A Moonlight through a hole in the dome.
4 A ¶ ELIAS VANTERPOOL, 50s, in a rumpled suit, stands center stage with a flashlight, scanning the empty rows.
5 A He is breathing hard, bleeding from a cut above his eye.
6 D ELIAS (to the dark): I know you're out there.
* 7 A ¶ No answer.
* 8 A The chandelier creaks.
9 A He turns the beam on the box seats.
10 D ELIAS [CONT'D] (to himself): Steady. Steady.
* 11 A ¶ A seat folds down with a clack.
12 A Elias spins.
* 13 A Nothing.
* 14 A A whisper drifts through the hall, impossible to place.
15 A ¶ A woman steps from the wings, slowly, hands visible: ODETTE MARCHAND-OYELARAN, 40s, in a long gray coat, a small revolver in her gloved hand.
16 A She does not raise it.
17 D ODETTE: Hello, Elias.
18 D ELIAS: Odette. How did you find me?
19 D ODETTE: You always loved this place.
20 D ELIAS (to the empty house): All of you, stay back!
21 D ODETTE: There's no one here but us.
22 D ELIAS: Then why did you bring the gun?
23 D ODETTE: Habit.
24 A ¶ She holds it up and then tosses it.
* 25 A It clatters center stage between them.
26 A Elias looks at it.
27 A He does not move.
28 D ELIAS: What do you want?
29 D ODETTE: The ledger.
30 D ELIAS: I burned it.
31 D ODETTE: You didn't.
32 D ELIAS (quietly, to himself): I should have.
33 A ¶ He pulls a thick notebook from inside his coat and holds it out.
34 A She doesn't take it.
* 35 A The chandelier shivers.
36 D ODETTE: Keep it. I only needed to know you still had it.
37 D ELIAS: Why?
38 D ODETTE: Because they're coming for it. And now they know too.
* 39 A ¶ A door slams somewhere in the dark.
40 A Elias's face drains.
41 A Odette steps back into the wings.
42 D ODETTE [CONT'D]: Run, Elias.
43 A ¶ He drops the flashlight.
* 44 A It rolls into the orchestra pit.
* 45 A Footsteps pound from every direction.
46 A Elias bolts upstage.

### SCENE s00207 | INT. PARKING GARAGE - LEVEL 3 - NIGHT
Detected names (may be incomplete or contain aliases): BRENDAN MWANGI, SOLEDAD ARRIAGA, TOBIAS KESSLER-ADEYEMI
* 1 A ¶ Concrete columns.
* 2 A Flickering fluorescents.
* 3 A A single sedan idles.
4 A ¶ BRENDAN MWANGI, 40s, sits in the sedan, engine running.
5 A He checks his watch.
6 A His partner, SOLEDAD ARRIAGA, 30s, leans on a column nearby, smoking.
7 A She flicks ash and watches the ramp.
8 D BRENDAN (through the window): He's late.
9 D SOLEDAD: He'll come.
10 D BRENDAN: You said that an hour ago.
11 A ¶ She shrugs and drops the cigarette.
* 12 A A set of headlights sweeps the ramp.
13 A She straightens.
14 A He kills the engine.
* 15 A A black van rolls in and stops.
* 16 A The side door slides open.
17 A ¶ TOBIAS KESSLER-ADEYEMI, 50s, steps out in a long coat, flanked by a stocky man in sunglasses.
18 A He walks over slowly.
19 A Brendan climbs out of the sedan.
20 D TOBIAS: Gentlemen. Lady.
21 D SOLEDAD: You're an hour late.
22 D TOBIAS: Traffic.
23 D BRENDAN: Do you have it?
24 A ¶ Tobias smiles.
25 A He reaches into his coat.
26 A Brendan tenses.
27 A Soledad's hand moves to her hip.
28 D TOBIAS: Relax.
29 A ¶ He pulls out an envelope.
30 A Holds it up.
31 A She takes a step.
32 A The stocky man steps with her.
33 A Tobias lowers the envelope.
34 D TOBIAS [CONT'D]: First, the money.
35 A ¶ Brendan opens the trunk.
* 36 A A duffel.
37 A He unzips it, shows the bundles.
38 A Tobias nods.
39 D SOLEDAD: Now the envelope.
40 A ¶ Tobias hands it over.
41 A She tears it open.
* 42 A Photographs.
43 A Her face goes cold.
44 D SOLEDAD [CONT'D]: These are of my daughter.
45 D TOBIAS: Yes.
46 A ¶ She draws her gun.
47 A The stocky man draws his.
48 A Brendan freezes.
49 A Tobias raises both hands, still smiling.
50 D TOBIAS [CONT'D]: Now we all understand each other.

### SCENE s00208 | EXT. BAMBOO FOREST - RAINY AFTERNOON
Detected names (may be incomplete or contain aliases): HANNELORE BECK, MARISOL AGUILAR, THABO NKOSI-WILLIAMS
* 1 A ¶ Tall green stalks creak in the wind.
* 2 A Mud everywhere.
* 3 A A trail disappears into fog.
4 A ¶ HANNELORE BECK, 50s, a botanist, leads, machete in hand.
5 A Behind her trudges MARISOL AGUILAR, 20s, a student with a heavy pack.
6 A Last comes THABO NKOSI-WILLIAMS, 30s, their guide, who limps and carries a radio.
7 D HANNELORE (to all): We stop at the next clearing.
8 D MARISOL (to Hannelore): How far is that?
9 D HANNELORE: Not far.
10 D THABO (to himself): It is far.
* 11 A ¶ Rain thickens.
12 A Marisol slips and grabs a stalk.
* 13 A It cracks.
14 D MARISOL: Sorry!
15 D THABO: Careful, it carries sound.
16 D HANNELORE: Sound is fine. It's silence that worries me.
17 D MARISOL: Why?
18 D HANNELORE: Because it means something is listening.
19 A ¶ They stop.
20 A All three listen.
* 21 A The rain pauses.
* 22 A A distant rustle.
23 D MARISOL: Is that the wind?
24 D THABO (low): No.
25 D HANNELORE: Keep walking.
26 D MARISOL: But which way?
27 D THABO: Forward.
28 D HANNELORE: Not forward. Left. Left!
29 D MARISOL: Which left?
30 D THABO: Mine.
31 A ¶ Marisol veers right by mistake.
32 A Thabo yanks her back.
33 A She bumps into Hannelore.
34 A The three tangle for a second, then break apart.
35 D MARISOL: Sorry, sorry.
36 D HANNELORE (to all): Stay together.
37 D THABO (into radio, muttering): This is Thabo. We are lost.
* 38 A ¶ Static answers.
39 A He shakes the radio.
* 40 A It stays dead.
41 A He tucks it away.
42 D THABO [CONT'D] (to the group): We keep moving.
43 D HANNELORE: She knows.
44 D THABO: She does?
45 D MARISOL: I do?
46 D HANNELORE: We keep moving.
47 A ¶ They push on.
* 48 A The rustle follows.
* 49 A It never gets closer.
* 50 A It never gets farther.

### SCENE s00209 | INT. DEFUNCT TAXIDERMY MUSEUM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE LOUISA FAIRWEATHER-KNOX, SANJAY PILLAI, PROFESSOR ISADORE WREN, PRISCILLA OYEDEJI, ELLIOTT CRUZ
* 1 A ¶ Glass eyes glint.
* 2 A A stuffed bear looms.
* 3 A Moonlight cuts through blinds.
4 A ¶ DETECTIVE LOUISA FAIRWEATHER-KNOX, 40s, stands beside a toppled display case.
5 A DET. SANJAY PILLAI, 30s, photographs the glass.
6 A PROFESSOR ISADORE WREN, 70s, wrings his hands.
7 A MS. PRISCILLA OYEDEJI, 50s, the curator, leans on a pedestal.
8 A A night watchman, ELLIOTT CRUZ, 20s, stands guard by the door.
9 D LOUISA: Who last saw the owl?
10 D PRISCILLA: I did. Six o'clock.
11 D ISADORE: Seven.
12 D PRISCILLA: Six, Isadore.
13 D ISADORE: You left at six. I was still here at seven.
14 D SANJAY: So you saw it at seven.
15 D ISADORE: I saw something at seven.
16 D LOUISA: Something?
17 D ISADORE: A shape. In the dark.
18 D ELLIOTT: There's always a shape, Professor.
19 D ISADORE: This one moved.
20 D PRISCILLA: Everything moves if you stare long enough.
21 D LOUISA: Quiet.
22 A ¶ She points her flashlight at the empty display case.
* 23 A The glass is broken outward, not in.
24 A She crouches and picks up a single gray feather.
25 D LOUISA [CONT'D]: It wasn't stolen. It left.
26 D SANJAY: Owls don't leave. They're stuffed.
27 D ISADORE: That one wasn't.
* 28 A ¶ Elliott's radio crackles.
* 29 A Static.
* 30 A Then a soft, rhythmic hooting.
31 A Everyone turns toward the dark rafters.
32 D PRISCILLA: Oh no.
33 D ISADORE: Oh yes.
34 A ¶ Louisa shines the light upward.
* 35 A Two enormous yellow eyes gleam.
* 36 A A shadow unfolds.

### SCENE s00210 | INT. OPEN-PLAN OFFICE - "SYNERGY HUB" - MORNING
Detected names (may be incomplete or contain aliases): TARK, BOLLINGER, CORDY, ADESANYA, MARGUERITE LESAGE-OKORO, THAD, QUILLFEATHER
* 1 A ¶ Standing desks, bean bags, a kombucha tap, motivational posters.
* 2 A A banner: "WE ARE FAMILY."
* 3 A A beanbag chair shaped like a unicorn.
* 4 A Fluorescent morning light.
5 A ¶ TARQUIN "TARK" BOLLINGER, 30s, in a vest and sneakers, balances on a wobble board.
6 A Beside him, CORDELIA "CORDY" ADESANYA, 40s, hair in a tight bun, taps at a laptop.
7 A MARGUERITE LESAGE-OKORO, 50s, the office manager, hoses a droopy fern.
8 A THADDEUS "THAD" QUILLFEATHER, 60s, a quiet man in a gray suit, sits at the corner desk, unmoving.
9 D TARK: Team! Quick sync!
10 D CORDY: We just did a sync.
11 D TARK: This is a meta-sync.
12 D MARGUERITE (over the hose): Tark, the fern is dying.
13 D TARK: Everything is dying. That's the culture of change.
14 A ¶ Cordy rolls her eyes.
15 A Thad stays still.
16 A He has not moved in some time.
17 D TARK [CONT'D]: Thad. Buddy. Thoughts?
18 A ¶ No answer.
19 D CORDY: Thad?
20 D MARGUERITE: Thad doesn't talk before ten.
21 D TARK: It's ten-fifteen.
22 D CORDY: Is he, uh...
23 D MARGUERITE: He's fine.
24 D TARK: He's on mute.
25 D CORDY: We're in person.
26 D TARK: Mute is a state of mind.
27 A ¶ They approach the desk.
28 A Marguerite prods Thad's shoulder with the hose.
29 A He topples out of the chair.
30 A Cordy shrieks.
31 A Tark falls off the wobble board.
32 A Marguerite drops the hose, which sprays everyone.
33 A They scramble backward.
34 A Thad lies on the floor, eyes closed, and snores.
35 D CORDY: He's asleep!
36 D MARGUERITE: He's been asleep since Tuesday.
37 D TARK: Since Tuesday?
38 D MARGUERITE: That's when he stopped answering emails.
39 D TARK: We thought that was mindfulness.
40 A ¶ Thad opens one eye.
41 A Sits up, slowly, dripping.
42 D THAD: Is it Friday?
43 D CORDY: It's Thursday.
44 D THAD: Damn.
45 A ¶ He lies back down.
46 A Tark stares at the others.
47 A Cordy stares at Marguerite.
48 A Marguerite shuts off the water.
49 D TARK: Okay. New initiative. Naps.
50 D CORDY: We already have naps.
51 D TARK: Mandatory naps.
52 D THAD (from the floor, dreamy): I'd back that.
53 D MARGUERITE: Tark, who signed off on the quarterly?
54 D TARK: Which quarterly?
55 D MARGUERITE: The one that says we're out of money.
56 D TARK: We're out of money?
57 D CORDY: We've been out of money since March.
58 D TARK: But the kombucha tap works.
59 D MARGUERITE: That's a donation.
60 A ¶ Tark takes a long, wobbly step.
61 A He looks at the banner.
62 A At the unicorn beanbag.
63 A At the dying fern.
* 64 A Behind him, the overhead lights flicker out one by one.
65 D THAD (softly): Told you.
66 D TARK: Told me what?
67 D THAD: That it was Friday.

### SCENE s00211 | INT. FUNERAL PARLOR - VIEWING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE MARISOL OKAFOR-DUMAS, LEOPOLD GRIMSBY, PHILOMENA TEAGUE-ABARA, CALEB NASH
* 1 A ¶ Carpet muffles footfalls.
* 2 A Lilies in tall vases.
* 3 A A closed casket on a draped stand.
* 4 A A single lamp.
5 A ¶ DETECTIVE MARISOL OKAFOR-DUMAS, 40s, in a black blazer, stands near the casket, hands behind her back.
6 A She watches the door.
7 A MR. LEOPOLD GRIMSBY, 60s, the funeral director, stands rigid in a dark suit.
8 A A mourner, PHILOMENA TEAGUE-ABARA, 50s, sits in the front row, handkerchief twisted in her fist.
9 A In the back, a young usher named CALEB NASH, 20s, fidgets with his cufflinks.
10 D LEOPOLD: The family asked for privacy, Detective.
11 D MARISOL: I won't be long.
12 D PHILOMENA (without turning): She was my sister.
13 D MARISOL: I know.
14 D PHILOMENA: Then you know she wasn't well.
15 D MARISOL: I know she was poisoned.
16 A ¶ Caleb drops a cufflink.
* 17 A It rolls under a pew.
18 A He doesn't pick it up.
19 D LEOPOLD: That is a serious accusation.
20 D MARISOL: It's a finding.
21 D PHILOMENA: By whom?
22 D MARISOL: The lab. It came back this afternoon.
23 A ¶ Philomena finally turns.
24 A Her eyes are dry.
25 A Her mouth is steady.
26 D PHILOMENA: And who do you think did it?
27 D MARISOL: Someone who had access to her tea.
28 A ¶ Leopold shifts his weight.
29 A Caleb takes a step toward the exit.
30 A Marisol raises one hand.
31 D MARISOL [CONT'D]: Mr. Nash. Stay.
32 D CALEB: I was just getting air.
33 D MARISOL: The air is fine here.
* 34 A ¶ The lamp flickers.
35 A Marisol steps to the casket and lays a hand on the lid.
36 D MARISOL [CONT'D]: Mrs. Teague-Abara. Tell me about the tea.
37 D PHILOMENA: It was chamomile.
38 D MARISOL: Who bought it?
39 D PHILOMENA: I did.
40 D MARISOL: Who poured it?
41 D PHILOMENA: I did.
* 42 A ¶ A pause.
* 43 A The lilies sway.
44 A Caleb breathes out.
45 D MARISOL: Thank you.
46 D PHILOMENA: Is that all?
47 D MARISOL: For tonight.
48 A ¶ She nods to Leopold, then to Caleb.
49 A Philomena rises, smooths her skirt, and walks out.
* 50 A The door sighs shut behind her.
51 A Marisol lifts the lid of the casket just a crack and looks at something inside.

### SCENE s00212 | EXT. FLOATING MARKET ON A CLOUD - DAY
Detected names (may be incomplete or contain aliases): SABLE, BRINDLE OKAFOR-LYNN, MADAME ZEPHYRINE
* 1 A ¶ Stalls drift on white vapor.
* 2 A Bridges of braided mist.
* 3 A Lanterns shaped like fish.
* 4 A Far below, a patchwork of farmland.
5 A ¶ SABLE, 20s, a thief in a patched coat, crouches behind a stall of enchanted fruit.
6 A Her partner, BRINDLE OKAFOR-LYNN, 30s, hairy-eared and cheerful, juggles three glowing apples.
7 A A merchant, MADAME ZEPHYRINE, 60s, sells wind in jars.
8 D SABLE (whispering): Brindle, stop juggling the evidence.
9 D BRINDLE: It's not evidence. It's snacks.
10 D MADAME ZEPHYRINE: Customers! Two coins for a breeze!
11 D SABLE: We do not have two coins.
12 D BRINDLE: We have one and a half.
13 D SABLE: We have none. I told you not to spend on the pie.
14 D BRINDLE: It was a good pie.
15 D SABLE: It was a pigeon with crust.
16 D MADAME ZEPHYRINE: Last chance, my darlings!
17 A ¶ Sable pops up.
18 A Smiles at the merchant.
19 A Slides a hand toward a jar.
20 D SABLE: Madame, we heard you sell the finest sirocco on the cloud.
21 D MADAME ZEPHYRINE: Only the finest.
22 D BRINDLE: How fine?
23 D MADAME ZEPHYRINE: Fine enough to carry you to the moon.
24 D SABLE: We'll take two.
25 D MADAME ZEPHYRINE: At two coins each?
26 D SABLE: At half a coin each, since you're our favorite.
27 D MADAME ZEPHYRINE: Child, don't flatter me.
28 D SABLE: Flattery's all I've got.
29 A ¶ Brindle drops an apple.
* 30 A It bounces across the stall, rolls off the edge, and falls through the cloud.
31 A All three watch it go.
32 D MADAME ZEPHYRINE: That was an apple of wisdom.
33 D BRINDLE: We'll find another.
34 D SABLE: We won't.
35 A ¶ Madame Zephyrine sighs.
36 A She uncorks a jar.
37 A A soft wind swirls out, lifts Sable's hair, and tugs at Brindle's coat.
38 D MADAME ZEPHYRINE: Free sample.
39 D BRINDLE: She likes us.
40 D SABLE: She pities us.
41 D MADAME ZEPHYRINE: Both.
* 42 A ¶ The wind rises.
43 A Sable and Brindle grab each other's arms.
44 A They lift an inch off the cloud.
45 A They rise slowly, laughing, up toward the lanterns.

### SCENE s00213 | INT. LIGHTHOUSE KEEPER'S COTTAGE - SITTING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR GWENDOLYN TREVELYAN-OKOYE, SERGEANT ABEL MWAMBA, HEPZIBAH DRUMMOND, WILFRED DRUMMOND, MISS ODALYS PRENTISS
* 1 A ¶ Low beams.
* 2 A A woodstove ticks.
* 3 A Salt-bleached curtains.
* 4 A Shelves of shells, charts, and mismatched teacups.
* 5 A Storm pushes at the windows.
6 A ¶ INSPECTOR GWENDOLYN TREVELYAN-OKOYE, 50s, in a damp raincoat, stands by the stove.
7 A A younger officer, SERGEANT ABEL MWAMBA, 30s, takes notes in a corner.
8 A The keeper's widow, MRS. HEPZIBAH DRUMMOND, 70s, sits in a rocking chair with a shawl.
9 A Her son, WILFRED DRUMMOND, 40s, hovers by the doorway.
10 A A neighbor, MISS ODALYS PRENTISS, 60s, stirs tea at a side table.
11 D GWENDOLYN: Mrs. Drummond, when did you last see your husband?
12 D HEPZIBAH: Yesterday. At supper.
13 D WILFRED: She means Tuesday.
14 D HEPZIBAH: I mean yesterday.
15 D WILFRED: It was Tuesday, Mother.
16 D HEPZIBAH: Then it was Tuesday.
17 D ABEL (writing): Tuesday supper.
18 D ODALYS: I brought the pie.
19 D GWENDOLYN: Which pie?
20 D ODALYS: Gooseberry.
21 D WILFRED: It's always gooseberry.
22 D ODALYS: It's his favorite.
23 D HEPZIBAH: It was his favorite.
* 24 A ¶ A beat.
* 25 A The storm slaps the glass.
26 A Odalys sets down the spoon.
27 D GWENDOLYN: Was there anything unusual about the evening?
28 D HEPZIBAH: He was quiet.
29 D WILFRED: He was always quiet.
30 D HEPZIBAH: Not like that.
31 D ODALYS: He mentioned the lamp.
32 D GWENDOLYN: The lamp?
33 D ODALYS: He said it would go out. Soon.
34 D ABEL: It did go out.
35 D WILFRED: It didn't go out. It was put out.
36 D HEPZIBAH: Wilfred.
37 D WILFRED: I'm only saying.
38 D GWENDOLYN: Mr. Drummond, do you have something to tell me?
39 A ¶ Wilfred looks at his mother.
40 A At Odalys.
41 A At the floor.
* 42 A The woodstove ticks.
43 A Hepzibah rocks slowly.
44 D WILFRED: No.
45 D GWENDOLYN: Mrs. Drummond?
46 D HEPZIBAH: I think he does.
47 A ¶ Wilfred swallows.
48 A Odalys looks at her hands.
49 A Abel's pen hovers above the page.
50 A Gwendolyn waits, patient as the sea.

### SCENE s00214 | EXT. SHELLED CHURCH BELFRY - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT ANNELIESE VOGEL, CORPORAL DESMOND OGBU, PRIVATE TEODORA IVANOVA, LIEUTENANT RAFFERTY CROSS, MATTEO, COMMAND
* 1 A ¶ Stone walls open to the sky.
* 2 A A cracked bell.
* 3 A Smoke on the horizon.
4 A ¶ SERGEANT ANNELIESE VOGEL, 30s, crouches with a sniper rifle.
5 A CORPORAL DESMOND OGBU, 20s, peers through binoculars.
6 A PRIVATE TEODORA IVANOVA, 20s, hugs a radio pack.
7 A LIEUTENANT RAFFERTY CROSS, 40s, studies a map.
8 A A boy, MATTEO, 11, huddles in the corner.
9 D ANNELIESE: Desmond, status?
10 D DESMOND: Nothing on the east road.
11 D TEODORA: Still no word from Command.
12 D RAFFERTY: They'll come.
13 D TEODORA: When?
14 D RAFFERTY: Soon.
* 15 A ¶ Static.
* 16 A Then a faint voice.
17 D COMMAND [V.O.] (over radio): Bell Tower, this is Command. Abort. Repeat, abort. Fall back to the bridge.
18 A ¶ Teodora stares at the handset.
19 A She passes it to Rafferty.
20 D RAFFERTY: Command, say again.
21 D COMMAND [V.O.] (over radio): The bridge. Now.
22 A ¶ Rafferty crushes the map.
23 A Anneliese tightens her scarf.
24 A Desmond stows the binoculars.
25 A Matteo looks at all of them.
26 D MATTEO: Are we leaving?
27 D ANNELIESE: We're leaving.
28 D MATTEO: Can I bring the bell?
29 D ANNELIESE (gently): It's too heavy, Matteo.
30 D MATTEO: I know. I just wanted to ask.

### SCENE s00215 | INT. COUNTY MORGUE - NIGHT
Detected names (may be incomplete or contain aliases): HILDEGARD OYELOWO-STRAND, MARCUS PELL, EUGENE FAIRBANKS, BODY
* 1 A ¶ Steel drawers.
* 2 A Cold fluorescent light.
* 3 A A radiator knocks.
* 4 A A gurney in the center.
5 A ¶ DR. HILDEGARD OYELOWO-STRAND, 50s, in scrubs, writes a label.
6 A Her assistant, MARCUS PELL, 20s, wheels in a covered body.
7 A The night guard, EUGENE FAIRBANKS, 60s, sips coffee near the door.
8 D HILDEGARD: Last one tonight.
9 D MARCUS: Where do I put him?
10 D HILDEGARD: Drawer fourteen.
11 A ¶ Marcus wheels the gurney to the wall.
12 A He opens the drawer.
* 13 A It's already occupied.
14 D MARCUS: Dr. Strand?
15 D HILDEGARD: What?
16 D MARCUS: Fourteen's full.
17 D HILDEGARD: It can't be.
18 A ¶ She crosses.
19 A They both look in.
* 20 A A sheet.
* 21 A A shape.
22 A Hildegard flips back a corner.
23 A A pale face.
24 A Marcus gasps.
25 D MARCUS: That's the same guy.
26 D HILDEGARD: That's impossible.
27 A ¶ She looks at the gurney.
28 A Lifts the sheet there.
29 A The same face.
30 D HILDEGARD [CONT'D] (whispering): Eugene. Eugene, come look.
31 D EUGENE: I don't want to.
32 D HILDEGARD: Come look.
33 D EUGENE: I'm on break.
34 D HILDEGARD: Eugene.
35 A ¶ He sets down the coffee.
36 A Comes over, reluctant.
37 A Looks at the two faces.
38 A Pales.
39 D EUGENE: Oh, hell.
40 D MARCUS: Maybe it's twins.
41 D EUGENE: Twins don't die the same day.
42 D HILDEGARD: They do sometimes.
43 D MARCUS: Do they?
44 D HILDEGARD: It happens.
* 45 A ¶ Lights flicker.
* 46 A A drawer slides open on its own.
* 47 A Another.
* 48 A Then another.
* 49 A Down the long row, one by one, the drawers roll out.
* 50 A Cold fog spills across the floor.
51 D EUGENE: Not again.
52 D MARCUS: Not again?
53 D EUGENE: Last time was '98.
54 D HILDEGARD: What happened in '98?
55 D EUGENE: They all sat up.
* 56 A ¶ Silence.
* 57 A The radiator stops knocking.
* 58 A Sheets rustle.
59 A Marcus slowly retreats against the wall.
60 A Hildegard grabs a scalpel and holds it like a talisman.
61 D HILDEGARD (trembling): Everyone stay calm.
62 A ¶ A hand lifts from drawer fourteen and grips the edge.
63 D HILDEGARD [CONT'D]: Eugene. Lock the door.
64 D EUGENE: It's already locked.
65 D HILDEGARD: From the outside?
66 D EUGENE (realizing): From the outside.
* 67 A ¶ The lights go out.
* 68 A Somewhere, a gurney wheel squeaks.
69 A Hildegard's breath catches.
* 70 A Then a voice, small and cheerful, from the dark.
71 D BODY [V.O.]: Evening, doctor.
* 72 A ¶ The lights flick on.
* 73 A Every drawer is open.
* 74 A Every sheet is empty.

### SCENE s00216 | INT. FAMILY MINIVAN - PARKED AT A DRIVE-IN - NIGHT
Detected names (may be incomplete or contain aliases): NADINE OKORO-LANCASTER, RUFUS, GRETCHEN LANCASTER-PRICE, COACH TANAKA
* 1 A ¶ Back seat.
* 2 A The movie flickers through the windshield.
* 3 A Popcorn spills.
4 A ¶ NADINE OKORO-LANCASTER, 16, sits in the back with her little brother, RUFUS, 9, who holds a box of candy.
5 A In the front, their mother, GRETCHEN LANCASTER-PRICE, 40s, glances at the rear-view mirror.
* 6 A A phone buzzes in the cupholder.
7 D NADINE: Rufus, quit kicking the seat.
8 D RUFUS: I'm not.
9 D GRETCHEN: You are, honey.
10 D RUFUS: It's the movie.
11 D NADINE: The movie doesn't kick.
12 A ¶ Gretchen picks up the phone.
13 A Reads the screen.
14 A Her face stiffens.
15 A She answers on speaker.
16 D COACH TANAKA [V.O.] (over phone): Mrs. Lancaster-Price? It's about Nadine. She missed practice again.
17 A ¶ Nadine freezes.
18 A Rufus stops chewing.
19 D GRETCHEN (evenly): Thank you, Coach. We'll talk.
20 D COACH TANAKA [V.O.] (over phone): I just want her to know there's a spot.
21 D GRETCHEN: Thank you.
22 A ¶ She hangs up.
* 23 A A long silence.
* 24 A On the screen, an actress screams.
25 A Nadine stares at her knees.
26 D GRETCHEN [CONT'D]: Nadine.
27 D NADINE: I can explain.
28 D GRETCHEN: Please do.
29 D NADINE: I don't want to play.
30 D RUFUS: She's been going to the library instead.
31 D NADINE: Rufus!
32 D RUFUS: Sorry!
33 A ¶ Gretchen watches them in the mirror.
34 A Then she reaches back and puts a hand on Nadine's knee.
35 A It stays there.
* 36 A On screen, the credits roll.
