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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0032.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00969 | INT. SCHOOL BUS DEPOT, MAINTENANCE PIT - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CLAY, WREN ABERNETHY-OKORO
* 1 A ¶ Oil, rust, the bones of old buses.
* 2 A Fluorescent bars hum overhead.
* 3 A Work lights hang from a rolling cart.
4 A ¶ CLARENCE "CLAY" ABERNETHY-OKORO (50s, coveralls, a pencil behind each ear) lies on a creeper beneath a bus, wrenching at something unseen.
* 5 A A radio on the floor plays low country.
* 6 A ¶ Footsteps on concrete.
* 7 A Sneakers.
8 A A teenage girl hovers at the edge of the pit, backpack on one shoulder, staring down.
9 D CLAY (from under the bus): Is that you, Wren?
10 A ¶ The girl is WREN ABERNETHY-OKORO (16, hair in a messy braid, headphones around her neck).
11 A She sits at the edge of the pit, feet dangling.
12 D WREN: Hi, Dad.
13 D CLAY: You're early.
14 D WREN: I walked.
15 D CLAY: It's four miles.
16 D WREN: I know how far it is.
* 17 A ¶ A wrench clanks.
18 A Clay rolls out on the creeper, wiping his hands on a rag, and looks up at his daughter.
19 A His face softens, then tightens as he sees hers.
20 D CLAY: What happened?
21 D WREN: Nothing.
22 D CLAY: Wren.
23 D WREN: I quit the team.
24 A ¶ He sits up slowly.
* 25 A The radio sings about a dog and a truck.
26 D CLAY: Okay.
27 D WREN: Aren't you going to yell?
28 D CLAY: Do you want me to?
29 D WREN: Kind of.
30 D CLAY: Then I will. (beat) Wren Abernethy!
31 D WREN (smiling despite herself): That's not yelling.
32 D CLAY: I'm out of practice.
33 A ¶ She slides down into the pit and sits on the creeper next to him.
34 A He hands her a wrench.
35 A She turns it over in her hands.
36 D WREN: Dad? I'm okay, you know.
37 D CLAY: I know, kiddo.
38 D WREN: Can I help?
39 D CLAY: Hold the light.

### SCENE s00970 | INT. DROWNED CATHEDRAL BELFRY - TIDE HOUR
Detected names (may be incomplete or contain aliases): ORSOLYA, KEZIAH
* 1 A ¶ Green water laps the third stair.
* 2 A Moonlight through broken tracery.
* 3 A One huge bell, furred with barnacles.
4 A ¶ ORSOLYA (30s, salt-white braid, bone-needle at her belt) crouches on a beam.
5 A Soaked.
6 A Grinning.
7 A ¶ KEZIAH (20s, half-fox ears, patched coat) hauls himself through the window.
* 8 A Drips everywhere.
9 D ORSOLYA: You're late, Kez.
10 D KEZIAH: The tide was early.
11 D ORSOLYA: The tide is never early. You were.
12 A ¶ He lifts a lantern.
* 13 A Inside, a trapped blue flame.
14 D KEZIAH: Got it. Moon-ember. Off the sleeping tax-collector himself.
15 A ¶ She snatches it.
16 A Laughs.
17 A Kisses his forehead.
18 D ORSOLYA: Kezi. You beautiful thief.
* 19 A ¶ The bell hums.
* 20 A Low.
* 21 A Wrong.
22 D KEZIAH: Orsolya. That's not us.
23 A ¶ She freezes.
24 A So does he.
* 25 A ¶ Water rises.
* 26 A Fast.
* 27 A Knee-deep.
* 28 A Waist.
29 D ORSOLYA: Take the rope.
30 D KEZIAH: Not without you!
31 A ¶ She shoves him.
32 A Hard.
33 A He grabs the bell-rope, swings, slams against stone.
34 A Hisses.
35 D ORSOLYA: Ring it!
36 D KEZIAH: It'll wake the whole drowned choir!
37 D ORSOLYA: Better them than the tide!
38 A ¶ He hesitates.
39 A Then pulls.
* 40 A ¶ DONG.
* 41 A The sound rolls out like thunder under glass.
* 42 A The water stops.
* 43 A Shivers.
* 44 A Retreats.
* 45 A ¶ Silence.
46 A They stare at each other.
47 A Then both burst out laughing.
48 D KEZIAH: Never again.
49 D ORSOLYA: Liar.
50 A ¶ Somewhere below, a choir begins to sing.
* 51 A Off-key.
* 52 A Furious.
53 A ¶ She grabs his hand.
54 A They run.

### SCENE s00971 | INT. HOLLOWED ASTEROID ORCHARD - SHIFT NIGHT
Detected names (may be incomplete or contain aliases): TAVITA, NELL, ISAAK, MEI-LIN, OSEI
* 1 A ¶ A cavern of rock lit by amber grow-lamps.
* 2 A Rows of dwarf apple trees bolted to drifting soil trays.
* 3 A Pollen-drones hum like tired insects.
4 A ¶ TAVITA (50s, broad, vacuum-scarred hands) stands at a control stump.
5 A NELL (20s, sharp, ink-stained fingers) clutches a tablet.
6 A ISAAK (60s, wiry, one cloudy eye) leans on a ladder.
7 A MEI-LIN (30s, braided cables in her hair) hovers upside down.
8 A OSEI (teen, oversized pressure jacket) grips a pruning rod.
9 D TAVITA: Hull pressure's dropping in the north orchard. Everyone stays calm.
10 D NELL: Calm is a luxury. The seal's gone, Tavita. I can hear it.
11 D ISAAK: Then shut the bulkhead. Trees can bloom again.
12 D MEI-LIN: Not if we're on the wrong side of it. Osei's still holding row nine.
13 D OSEI: I can let go. I can run.
14 D TAVITA: You'll run when I say run.
15 D NELL: Forty seconds of air at that leak rate. Maybe thirty.
16 D ISAAK: Then thirty is what we use. Mei-Lin, drones to the breach. Nell, patch kit. Osei, row nine, now.
17 D MEI-LIN: Drones are going. They won't hold it.
18 D TAVITA: They don't have to hold it. They only have to buy us the walk.

### SCENE s00972 | INT. FERRY CAFETERIA - NIGHT CROSSING
Detected names (may be incomplete or contain aliases): DOLORES, PAZ, HENRIK
* 1 A ¶ Orange plastic booths.
* 2 A A coffee urn rattles with the engine.
* 3 A Rain on the windows.
* 4 A Nobody else aboard.
5 A ¶ DOLORES (60s, black cardigan, rosary wound around her wrist) sits stiff.
6 A Across from her, PAZ (40s, leather jacket, same jaw) peels a label off a water bottle.
7 A ¶ HENRIK (50s, rumpled suit, folder under his arm) arrives with two paper cups.
8 A Sets one down.
9 A Hesitates.
10 A Sets the other down too.
11 A ¶ She doesn't touch hers.
12 A She watches her sister.
13 D HENRIK: Your mother's will is short.
14 D DOLORES: Mine, she says. My mother. Not yours.
15 A ¶ Paz stops peeling.
16 A She looks up.
17 D PAZ: Our mother.
18 A ¶ She slides the label across the table.
* 19 A A small, damp scrap.
20 D HENRIK: It leaves the house to one of you.
21 A ¶ She laughs.
22 A Short.
23 A Ugly.
24 A The other stays silent.
25 D DOLORES: Which one.
26 D HENRIK: The one who stayed.
27 A ¶ Paz stands.
28 A Sits again.
29 A Her knee bounces under the table.
30 D PAZ: Twenty years she called me every Sunday.
31 D DOLORES: And I washed her every morning.
32 A ¶ She slams a palm on the Formica.
* 33 A The urn rattles louder.
34 A Henrik flinches, opens the folder, closes it.
35 D HENRIK: There's a letter. She asked me to read it only if you both were present.
36 D DOLORES: Read it, then.
37 A ¶ He unfolds the page.
38 A Clears his throat.
39 A Her eyes are already wet.
40 A The other's are not.
41 D HENRIK (reading): "Neither of you gets the house."
* 42 A ¶ Silence.
* 43 A The ferry horn sounds, long and low.
44 A ¶ She reaches for the cup.
45 A Her hands shake.
46 A Paz takes the other cup, drinks, and nods once at the window.
47 D PAZ: She never could make a decision.
48 D DOLORES: She made this one.

### SCENE s00973 | INT. GLASS-FOREST APIARY TOWER - DUSK
Detected names (may be incomplete or contain aliases): WYNFRED, SABLE, LUCAN
* 1 A ¶ Hexagonal windows hum with ten thousand bees.
2 A WYNFRED, an old beekeeper in a veil of moth silk, pours smoke into a brass censer.
3 A SABLE, a young storm-witch with wet hair, sits on the hive-table.
4 A LUCAN, a knight with a cracked pauldron, stands by the stairs.
5 D WYNFRED: You came a long way for honey.
6 D LUCAN: I came for the queen.
7 D SABLE: He means the hive's queen. Not the crown.
8 D WYNFRED: Does he?
9 D LUCAN: I mean what I said.
10 D SABLE: You mean what you were told to say.
11 D LUCAN: The king is dying.
12 D WYNFRED: Kings do.
13 D LUCAN: His physician says only royal jelly can hold the fever.
14 D SABLE: And the physician is lying.
15 D LUCAN: You don't know that.
16 D SABLE: I know the smell of a man who wants a hive burned.
17 D WYNFRED: Quiet, child. Let him say it.
18 D LUCAN: I was told to take the queen. Alive if she'd come. Dead if not.
19 D WYNFRED: And you believed it.
20 D LUCAN: I believed the king.
21 D SABLE: The king hasn't spoken in a month.
22 D LUCAN: Then who sent me?
23 D WYNFRED: Ask the hive.
* 24 A ¶ The humming deepens.
25 A Wynfred sets down the censer.
26 D LUCAN: I won't kill a queen of bees.
27 D SABLE: Then what will you do?
28 D LUCAN: I'll warn the king.
29 D WYNFRED: He can't hear you.
30 D LUCAN (shouting): Then I'll make the palace hear!
31 D SABLE: Then I will!
32 D LUCAN: Then I will!
33 D WYNFRED: Both of you, stop.
34 D LUCAN: He is my king.
35 D SABLE: And this is my home.
36 D WYNFRED: Then go together. Fire answers fire. Bees answer storm.

### SCENE s00974 | INT. PARKING GARAGE STAIRWELL - NIGHT
Detected names (may be incomplete or contain aliases): LOTTE VANTERPOOL
* 1 A ¶ Concrete.
* 2 A Flickering tube light.
* 3 A A door slams two floors below.
4 A ¶ LOTTE VANTERPOOL (30s, trench coat, press badge) freezes mid-step.
5 A Phone in hand.
* 6 A ¶ Footsteps.
* 7 A Climbing.
* 8 A Fast.
9 A ¶ She jabs the screen.
* 10 A Voice memo.
11 D LOTTE [V.O.] (recording, calm): If you hear this, I'm already in the stairwell of Level B. The ledger is in the glovebox of the grey Fiat.
12 A ¶ She kills it.
13 A Backs up.
14 A Hits the rail.
15 A Whispers.
16 D LOTTE: Come on, come on.
* 17 A ¶ The footsteps stop.
* 18 A Right below her.
* 19 A Waiting.
20 A ¶ She doesn't breathe.
* 21 A A key jingles.
22 A Then a little girl's laugh echoes up.
23 A A father's voice, humming.
24 A ¶ They pass.
* 25 A Door opens.
* 26 A Closes.
* 27 A Gone.
28 A ¶ Lotte slides down the wall.
29 A Laughs.
30 A Wipes her eyes.
31 D LOTTE [CONT'D]: Idiot.
32 A ¶ She replays the memo.
33 A Deletes it.
34 A Stands.
35 A Walks on.

### SCENE s00975 | INT. ROLLER RINK - AFTER CLOSING
Detected names (may be incomplete or contain aliases): DEZ, MARISOL, TOBY
* 1 A ¶ Disco ball still turning.
* 2 A Chairs up on tables.
* 3 A Carpet-covered walls.
4 A ¶ DEZ (16) sits on the skate counter in one rental skate.
5 A He holds the other.
6 A MARISOL (16) leans on the rail, arms crossed.
7 A TOBY (15) lies flat on the floor, staring at the ceiling.
8 D DEZ: So that's it. Last night.
9 D MARISOL: Dez, the rink is closing. Not you.
10 D TOBY: It's basically you. You were born here.
11 D DEZ: Rink rat. That's what Mr. Pruitt called me.
12 D MARISOL: He called me that too.
13 D TOBY: He called everyone that.
14 D DEZ: My first kiss was by the snack bar.
15 D MARISOL: It was me.
16 D DEZ: It was a hot dog. I was kissing a hot dog.
17 D TOBY: I was there. It was sad.
18 D MARISOL: We'll find somewhere else.
19 D DEZ: There isn't anywhere else.
20 D TOBY: There's the parking lot.
21 D MARISOL: The parking lot has no music.
22 D TOBY: I'll bring a speaker.
23 A ¶ He sits up.
24 A Grins.
25 A She lets her arms drop.
26 D DEZ: Fine. Parking lot. Saturdays.
27 D MARISOL: Saturdays.
28 A ¶ Dez slides the second skate on.
29 A Stands.
30 A Wobbles.
31 A Rolls one slow lap, alone, while the ball keeps turning.

### SCENE s00976 | INT. SYNERGY DEPARTMENT - FORMER FUNERAL HOME - MORNING
Detected names (may be incomplete or contain aliases): PELLINGHAM, GLORIA, SPUD, ADAEZE
* 1 A ¶ Cubicles line the old viewing room.
* 2 A A faux-brass chandelier.
* 3 A A banner reads "WE'RE ALL FAMILY HERE."
* 4 A Coffins serve as supply cabinets.
5 A ¶ MR. PELLINGHAM (50s, bow tie, sweating) stands on a velvet kneeler holding a clipboard.
6 A GLORIA (40s, reading glasses on a chain) sorts paperclips.
7 A SPUD (30s, hoodie) eats cereal from a casket lid.
8 A ADAEZE (20s, headset, razor eyes) types without looking.
9 D MR. PELLINGHAM: People! People! Today we pivot.
10 D GLORIA: We pivoted yesterday, Mr. Pellingham.
11 D SPUD: Twice. Before lunch.
12 D MR. PELLINGHAM: Spud, today we pivot to a pivot.
13 D ADAEZE: Is that a metric?
14 D MR. PELLINGHAM: Adaeze, it's a mindset.
15 D GLORIA: What happened to the mindset?
16 D SPUD: It got laid off.
17 D MR. PELLINGHAM: Nobody got laid off. We are right-sizing the horizon.
18 D ADAEZE: Gloria, did he say horizon?
19 D GLORIA: He said horizon.
20 D MR. PELLINGHAM: I am going to need everyone's quarterly aspirations by noon.
21 D SPUD: Mr. Pellingham, I only have a quarterly nap.
22 D GLORIA: Spud!
23 D ADAEZE: Put it in the shared folder.
24 D MR. PELLINGHAM: Thank you, Adaeze.
25 D SPUD: He thanked her. Mark the calendar.
26 D GLORIA: Mark it. Under "Funeral".
27 A ¶ Mr. Pellingham looks at the banner.
28 A Climbs down.
29 A Sighs.
30 D MR. PELLINGHAM: Friends, let's just have cake.
31 D SPUD: Is it from the last funeral?
32 D MR. PELLINGHAM: It's... lemon.

### SCENE s00977 | INT. LIGHTHOUSE GALLEY - POTLUCK NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND, EDMUND, CHIKA, DMITRI, BEA, AUNT FENELLA
* 1 A ¶ A cramped round kitchen at the base of a lighthouse.
* 2 A Casserole dishes crowd every surface.
* 3 A A foghorn blares every ten seconds.
4 A ¶ ROSALIND (60s, apron, vengeful smile) guards a bundt cake.
5 A EDMUND (60s, golf shirt) carves a ham.
6 A CHIKA (30s, nose ring, crisp linen) pours wine.
7 A DMITRI (40s, ponytail, guitar case) leans on the counter.
8 A BEA (20s, headphones around neck) scrolls her phone.
9 D ROSALIND: I'm only saying that some of us brought homemade.
10 D EDMUND: Rosalind, it's the same casserole you brought to the last four potlucks.
11 D ROSALIND: It's a family recipe.
12 D CHIKA: It's from a can.
13 D DMITRI: Cream of mushroom. I smelled it in the parking lot.
14 D BEA: Aunt Rosalind, are you aware you're yelling?
15 D ROSALIND: I am explaining.
16 D EDMUND: Over the foghorn.
17 D ROSALIND: Because I'm tired of being the villain in this lighthouse!
18 D CHIKA: Nobody said villain.
19 D DMITRI: I said cannibal. The cake looks human.
20 D ROSALIND: It's a bundt!
21 D EDMUND: Honey, put the knife down.
22 D ROSALIND: This is a cake server!
23 D BEA: It's honestly a very sharp cake server.
* 24 A ¶ The door bangs open.
25 A AUNT FENELLA (80s, fur stole, cane held like a spear) sweeps in, trailing mist.
26 A Everyone stops.
27 D AUNT FENELLA: I'm told someone has been slandering my casserole.
28 D ROSALIND: Your casserole?
29 D AUNT FENELLA: Cream of mushroom, 1974. I invented it at this very counter.
30 D EDMUND: Nobody told us that.
31 D CHIKA: Why would anyone tell us that?
32 D DMITRI: Because they're afraid of her.
33 D AUNT FENELLA: Quite right.
34 D BEA: I'm getting cake.
35 D ROSALIND (whispering): Nobody touch the cake.

### SCENE s00978 | EXT. LEVIATHAN BACK MARKET - DAWN
Detected names (may be incomplete or contain aliases): YARROW, CINDERMAE, BRISK, SEUN
* 1 A ¶ A sleeping sea-beast the size of an island.
* 2 A Stalls on its spine.
* 3 A Rigging lashed to ribs.
* 4 A The skin breathes slowly.
5 A ¶ YARROW (20s, sea-glass eyes, ragged oilskin) crouches by a stall of bottled winds.
6 A ¶ CINDERMAE (70s, silver teeth, coal-black shawl) presides behind the counter.
7 A ¶ BRISK (teen, gull on his shoulder) scrambles up a rope ladder.
8 A Out of breath.
9 A ¶ SEUN (40s, copper armor, spear of whalebone) lurks at the edge, watching.
10 D BRISK: Yarrow! They're coming!
11 D YARROW: Who?
12 D BRISK: The tide-wardens!
13 D CINDERMAE: Quiet, boy. You'll wake the beast.
* 14 A ¶ The leviathan's skin ripples.
* 15 A Stalls shudder.
* 16 A Bottles clink.
17 D YARROW: How many?
18 D BRISK: Six. Maybe seven.
19 D SEUN: Eight.
20 A ¶ They turn.
21 A Seun steps forward, spear lowered.
22 D SEUN [CONT'D]: And I am the first.
23 D CINDERMAE: Seun. You were a friend of this market.
24 D SEUN: I was a friend of the market. The sea-king is the market's master.
25 D YARROW: You swore an oath to the wind.
26 D CINDERMAE: She swore an oath to the wind.
27 D YARROW: She swore an oath to the wind.
28 D SEUN: Oaths bend.
29 D BRISK (whispering): The gull says run.
30 A ¶ Seun hurls the spear.
* 31 A It bursts a jar of tempest.
* 32 A Wind howls out.
* 33 A The leviathan groans awake.
* 34 A The whole market tilts.
35 D YARROW: Hold on!
36 A ¶ Everyone grabs rope.

### SCENE s00979 | INT. WAX MUSEUM - AFTER HOURS
Detected names (may be incomplete or contain aliases): INSPECTOR CALLOWAY, MADAME ZELENKA, PERCIVAL, LADY MARGUERITE, TOMMASO
* 1 A ¶ Rows of figures in fading finery.
* 2 A A single lantern.
* 3 A Dust on the Duke of Wellington's boots.
4 A ¶ INSPECTOR CALLOWAY (50s, rumpled overcoat, notebook) stands beside a plinth.
5 A MADAME ZELENKA (60s, turban, jeweled fingers) sits stiffly on a chaise.
6 A PERCIVAL (30s, curator's smock) wrings a handkerchief.
7 A LADY MARGUERITE (40s, widow's veil) holds a fan.
8 A TOMMASO (20s, night guard's cap) fidgets by the door.
9 D CALLOWAY: Let us review. The Duke was found at midnight with his head missing.
10 D PERCIVAL: It is the wax, Inspector. Wax is delicate.
11 D CALLOWAY: It is also not usually missing.
12 D MARGUERITE: I was admiring the Duke at eleven. He was whole.
13 D ZELENKA: I felt a presence. A cold one. It lingered.
14 D TOMMASO: I locked the doors at ten. No one came in.
15 D CALLOWAY: Then no one went out. Which means the head is here.
16 D PERCIVAL: You can't think one of us...
17 D CALLOWAY: I think a head cannot walk. Madame Zelenka, your turban looks heavy.
18 D ZELENKA: It is Persian silk, Inspector.
19 D CALLOWAY: It is lumpy.
20 A ¶ She hesitates.
21 A Unwinds the cloth.
* 22 A Inside, nothing but hair.
23 A She smiles thinly.
24 D MARGUERITE: Inspector, my fan.
25 D CALLOWAY: Lady Marguerite, your veil has stopped moving.
26 A ¶ She stiffens.
27 A Tommaso drops his cap.
28 A Percival laughs, high and tinny.
29 D PERCIVAL: It's under the chaise, I'm afraid. I only meant to repair the nose.

### SCENE s00980 | EXT. SALT FLAT STAGE STATION - NOON
Detected names (may be incomplete or contain aliases): SILAS MORROW, CATALINA VEGA
* 1 A ¶ White ground, white sky.
* 2 A A lone shack.
* 3 A A dead well.
* 4 A Heat shimmer.
5 A ¶ SILAS MORROW (50s, dusty duster, gray stubble) sits on a bench with a rifle across his knees.
6 A CATALINA VEGA (30s, wide hat, twin pistols) stands in the road ten paces away.
7 D CATALINA: You're a long way from Tucson, Silas.
8 D SILAS: I was told you'd be here.
9 D CATALINA: By who?
10 D SILAS: By a man who owed me.
11 D CATALINA: He owed you what?
12 D SILAS: A reason.
13 A ¶ She smiles.
14 A Steps forward.
15 A He doesn't move.
16 D CATALINA: You killed my brother.
17 D SILAS: I did.
18 D CATALINA: Why?
19 D SILAS: He drew first.
20 D CATALINA: He was nineteen.
21 D SILAS: So was I, once.
* 22 A ¶ The wind stops.
23 A Both of them listen.
24 D CATALINA: Stand up.
25 D SILAS: My knees won't allow it.
26 A ¶ She draws one pistol.
27 A He lifts the rifle.
28 A They both freeze, muzzles level.
29 D CATALINA: Last words?
30 D SILAS: Tell the boy's mother I'm sorry.
* 31 A ¶ A gunshot.
32 A Both flinch.
33 A Both dive for cover.
34 A ¶ On the ridge, a distant rider tumbles from a horse.
35 A The two lie in the salt, breathing.
36 A They look at each other.

### SCENE s00981 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): RAFAELA, JUNE, KOWALCZYK
* 1 A ¶ A cramped brick box.
* 2 A An old carbon-arc projector clatters.
* 3 A Film cans stacked like pizza boxes.
* 4 A Through the slit window, a giant screen glows over an empty lot.
5 A ¶ RAFAELA (17, denim jacket, a lighter in her fist) sits on the stool.
6 A JUNE (17, cardigan, hair pinned back) stands at the door.
7 A Both are tense.
8 D JUNE: You told me it was just a smoke.
9 D RAFAELA: It is just a smoke.
10 A ¶ She flicks the lighter.
* 11 A A small flame.
12 A She stares at it, then at the stacked cans.
13 D JUNE: That's nitrate film, Rafaela.
14 D RAFAELA: I know.
15 D JUNE: It burns like gasoline.
16 A ¶ She clicks the lighter shut.
* 17 A Too late.
* 18 A A can on the shelf flares with a quiet whump.
19 D JUNE [CONT'D]: Oh my God.
* 20 A ¶ Smoke blooms.
21 A She grabs a blanket and smothers it.
22 A Rafaela stamps.
23 A They cough, eyes wide, bodies bent.
* 24 A ¶ The door swings open.
25 A MR. KOWALCZYK (60s, suspenders, a flashlight) stands there.
* 26 A Smoke curls around his head.
27 D MR. KOWALCZYK: Which one of you is on fire?
28 D RAFAELA: Nobody. It's the projector.
29 D MR. KOWALCZYK: The projector is not made of smoke.
30 D JUNE: It was an accident, sir.
31 A ¶ He sniffs.
32 A Looks at the blackened can.
33 A Then at the two of them.
34 A For a long moment, he says nothing.
35 D MR. KOWALCZYK: That was the last reel of "The Birds."
36 D RAFAELA: We're so sorry.
37 D MR. KOWALCZYK: It was a bad print anyway.
38 A ¶ He tosses the flashlight to June.
39 A She catches it.
40 D MR. KOWALCZYK [CONT'D]: Open a window. And never bring fire in here again.
41 A ¶ He leaves.
42 A They stare at each other.
43 A Then they laugh, shaky and helpless, as the screen outside goes dark.

### SCENE s00982_0 | EXT. CABLE CAR OVER SPLINTER GORGE - DAY
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A red gondola dangles beneath a single steel cable.
* 2 A Below, white rapids.
* 3 A Above, a bruised sky.
* 4 A The car has been still for hours.

### SCENE s00982_1 | INT. CABLE CAR - CONTINUOUS
Detected names (may be incomplete or contain aliases): ABEBE, SOLVEIG, BIG MO, TERESA, BILLIE
* 1 A ¶ Cramped.
* 2 A Fogged glass.
* 3 A Cold.
4 A Four people in parkas.
5 A ¶ ABEBE (50s, guide's badge, steady) sits with a radio on his knee.
6 A SOLVEIG (30s, mountaineering gear) checks the roof hatch.
7 A BIG MO (40s, shaved head, shaking hands) clutches the safety bar.
8 A TERESA (20s, camera round her neck) films the glass.
9 D SOLVEIG: Two hours since the stall.
10 D ABEBE: Rescue knows we're here.
11 D BIG MO: Then why isn't anyone coming?
12 D ABEBE: Because the wind is bad.
13 D TERESA (to the camera): Day one. We are still alive.
14 D SOLVEIG: Turn that off.
15 D TERESA: It's evidence.
16 D SOLVEIG: Of what?
17 D TERESA: Of how scared we are.
18 D BIG MO: I'm not scared.
19 A ¶ He grips the bar tighter.
* 20 A The car sways.
21 A He swallows.
22 D ABEBE: Everyone sit down. Slowly. Weight low.
23 A ¶ They obey.
* 24 A The car steadies.
25 D BIG MO (muttering): Don't look at the river. Don't look at the river.
26 D SOLVEIG: Mo, you're doing fine.
27 D BIG MO: I'm not.
28 D ABEBE: Radio's picking up something.
29 A ¶ He turns the dial.
* 30 A Static.
* 31 A A voice, thin and far away.
32 D BILLIE [V.O.]: ...hold on... coming up the line...
33 D TERESA: Did you hear that?
34 D SOLVEIG: Quiet.
* 35 A ¶ The car shudders.
* 36 A A thump on the roof.
* 37 A Another.
* 38 A Dust sifts from the hatch.
39 D ABEBE: Stay away from the door.
* 40 A ¶ The hatch opens.
* 41 A A rope drops.
* 42 A Then boots.
43 A BILLIE (30s, orange rescue suit, harness clanking) swings in feet first, grinning.
44 D BILLIE: Evening, folks. Everybody breathing?
45 D BIG MO: You're real.
46 D BILLIE: Last time I checked.
47 D TERESA: How many of us can you take?
48 D BILLIE (brightly): Well, that's the thing.
49 A ¶ She unclips.
50 A Looks at the four of them.
51 A Her smile fades.
52 D BILLIE [CONT'D]: The line's frayed, and it's holding my weight just fine. It won't hold yours.
53 D SOLVEIG: What does that mean?
54 D BILLIE: It means I came to tell you the other cars are gone. This one's next.
* 55 A ¶ Silence.
* 56 A The cable groans.
57 D ABEBE: How long?
58 D BILLIE: Until the wind turns? Maybe an hour.
59 D BIG MO: Then why come?
60 D BILLIE: Because someone should be here.
61 D TERESA (to the camera, very quietly): Day one.
62 A ¶ Solveig takes the camera.
63 A Turns it off.
64 A She puts an arm around Teresa.
65 D SOLVEIG: Okay. Then we use the hour.
66 D ABEBE: Everyone give me your coats. We make a sling.
67 D BIG MO: For who?
68 D ABEBE: For whoever goes first.
69 A ¶ Billie hands her radio to Abebe.
70 A He takes it and nods.
71 D BIG MO: I'll go last.
72 D SOLVEIG: Mo...
73 D BIG MO: I'm done being scared of the river.
* 74 A ¶ The car sways.
75 A They hold on.

### SCENE s00983 | INT. LOCK-KEEPER'S COTTAGE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE BELLWEATHER, PRU, HALVORSEN
* 1 A ¶ A low stone room above a canal lock.
* 2 A Wet rope on hooks.
* 3 A A brass wall telephone.
* 4 A A kettle on a coal stove.
* 5 A Water thuds against the lock gate outside.
6 A ¶ AUGUSTINE BELLWEATHER (60s, tall, rain-soaked inspector's coat, magnifier on a cord) stands over a desk covered with tide charts.
7 A ¶ PRU (20s, lock-keeper's apprentice, mud on her boots) sits on the stool, hugging a lantern.
8 D AUGUSTINE: Say it again, from the top.
9 D PRU: I heard a splash around midnight. I went down. The gate was open and the barge was gone.
10 D AUGUSTINE: And the body?
11 D PRU: There was no body.
12 D AUGUSTINE: Then why does the captain say there was one?
* 13 A ¶ The phone rings.
14 A Both startle.
15 A Augustine lifts the receiver.
16 D AUGUSTINE [CONT'D]: Bellweather.
17 D HALVORSEN [V.O.] (filtered, tense): Inspector. It's Halvorsen at the harbor. We've found the barge.
18 D AUGUSTINE: Where?
19 D HALVORSEN [V.O.]: Two locks downstream. Empty. Except for a woman's boot.
20 A ¶ Pru goes pale.
21 A She drops the lantern.
* 22 A It rolls, flickers, and stays alight.
23 D AUGUSTINE: Whose boot?
24 D HALVORSEN [V.O.]: Size six. Leather. Mud on the heel.
25 A ¶ Augustine lowers the phone.
26 A Looks at the girl.
* 27 A At her feet.
28 D AUGUSTINE: Miss Pru. Please take off your boots.
29 D PRU: Sir, I can explain.
30 D AUGUSTINE: I don't doubt it.
31 A ¶ She bends.
32 A Unlaces one boot.
33 A Her hands tremble.
34 A Then she laughs, suddenly, and pulls out a second pair from under the stool.
35 D PRU: I swapped them. They're my mother's. I wanted to see how it felt to wear them.
36 A ¶ Augustine stares.
* 37 A The kettle whistles.
38 D HALVORSEN [V.O.]: Inspector? Are you there?
39 D AUGUSTINE (into phone): Yes. I think we've been chasing a cobbler's mistake.
40 A ¶ He hangs up.
41 A Pours the tea.

### SCENE s00984 | INT. MATTRESS SHOWROOM - MIDNIGHT
Detected names (may be incomplete or contain aliases): WANDA, GUS, KIT
* 1 A ¶ Rows of beds under spotlights.
* 2 A A banner: "24-HOUR SLEEP-OFF!"
* 3 A A single clock ticks.
4 A ¶ WANDA (50s, silk robe, sleep mask pushed up) lies stiffly on a king-size, hands folded like a corpse.
5 A GUS (60s, store manager, tie loosened) hovers with a clipboard.
6 A KIT (20s, intern, pajama pants) kneels at the bedside holding a tiny stopwatch.
7 D GUS: Wanda, you've been lying there for nineteen hours.
8 D WANDA: Eighteen hours, forty minutes, Gus.
9 D KIT: She's right. I've been counting.
10 D GUS: Kit, you shouldn't be encouraging her.
11 D KIT: She's very peaceful, Mr. Gus.
12 D WANDA: The prize is a lifetime supply of pillows.
13 D GUS: It's one pillow. You'd get one pillow.
14 D WANDA: A good pillow.
15 A ¶ Gus sighs.
16 A Sits on the next mattress.
17 A Yawns.
18 A Kit yawns.
19 A Wanda smiles, eyes closed.
20 D WANDA [CONT'D]: Gus, dear. Don't lie down.
21 D GUS: I'm just resting my back.
22 D KIT: Mr. Gus, you're horizontal.
23 D GUS: I'm... diagonal.
24 A ¶ Wanda sits up with a crisp snap.
25 A Pulls a gleaming trophy from under the sheets.
26 D WANDA: Three days ago I faked that bed rule. The contest only requires you to stay in the store.
27 D GUS: You were never asleep?
28 D WANDA: Not for a second.
29 A ¶ Kit slumps to the floor, snoring.

### SCENE s00985 | INT. PICKLE CELLAR - GRANDMOTHER'S FARMHOUSE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): NONNA FLORENTINA, EMEKA, TAMSIN, STRANGER, BARTOSZ
* 1 A ¶ A low, cool stone room lined with shelves of jars.
* 2 A Dill, vinegar, garlic.
* 3 A A single bulb on a cord.
* 4 A Dust turns in the light.
5 A ¶ NONNA FLORENTINA (80s, small, apron, forearms like rope) sorts jars by hand.
6 A Her grandson EMEKA (10, school uniform, backpack) sits on an upturned crate, swinging his legs.
7 A His mother TAMSIN (40s, scrubs, car keys in hand) stands on the bottom step.
8 A ¶ She watches the old woman.
9 A She doesn't speak.
10 D EMEKA: Nonna, why do you turn the jars?
11 D NONNA FLORENTINA: So the brine moves. Stale brine makes soft pickles.
12 D EMEKA: How do you know which ones are soft?
13 D NONNA FLORENTINA: You listen. A good jar clicks.
14 A ¶ She taps one with a fingernail.
15 A Holds it to his ear.
16 A He listens, frowns, nods.
17 D TAMSIN: Mama, I have to get back to the hospital.
18 D NONNA FLORENTINA: Then go.
19 D TAMSIN: I told the school I'd pick him up at four.
20 D NONNA FLORENTINA: And you did.
21 A ¶ She doesn't turn around.
22 A Tamsin shifts on the step.
23 A Checks her watch.
24 A Puts it away.
25 D EMEKA: Mum, can I stay for dinner?
26 D TAMSIN: You have homework.
27 D EMEKA: I can do it down here.
28 D NONNA FLORENTINA: There is no light down here.
29 D EMEKA: There's the bulb.
30 A ¶ She smiles at that.
31 A She wipes her hands on her apron.
* 32 A ¶ Upstairs, the screen door bangs.
* 33 A Footsteps cross the floor above.
* 34 A Dust drifts down from the beams.
35 A All three look up.
36 D TAMSIN: Who's that?
37 D NONNA FLORENTINA: Probably the man about the gutters.
* 38 A ¶ Heavy boots on the cellar stairs.
* 39 A A shadow fills the doorway.
40 A A STRANGER (50s, work jacket, cap in hands, polite) ducks under the frame.
41 D STRANGER: Sorry to bother you. Door was open.
42 D TAMSIN: Can we help you?
43 D STRANGER: I'm looking for Florentina Marchetti.
44 D NONNA FLORENTINA: You found her.
45 A ¶ He steps into the light.
46 A He looks at the jars.
47 A At the boy.
48 A At her.
49 D STRANGER: My name's Bartosz. You knew my father. Janek.
50 A ¶ She sets down the jar slowly.
51 A Her face does not change.
52 A Her hands do.
53 D NONNA FLORENTINA: Janek the tinsmith.
54 D BARTOSZ: That's the one.
55 D TAMSIN: Mama?
56 D NONNA FLORENTINA: It's all right, Tamsin.
57 A ¶ She wipes her hands again.
58 A Longer this time.
59 D NONNA FLORENTINA [CONT'D]: He used to come down here in August. Said my brine was the only thing in the county worth a hungry man's trouble.
60 D BARTOSZ: He said that about you, too.
61 D EMEKA: Who is he?
62 D NONNA FLORENTINA: Someone's son.
63 A ¶ She lifts a jar from the shelf, wipes the lid, and holds it out to Bartosz.
64 D NONNA FLORENTINA [CONT'D]: Listen.
65 A ¶ He takes it.
66 A Holds it to his ear.
* 67 A The cellar is very quiet.
68 D BARTOSZ: It clicks.
69 D NONNA FLORENTINA: Good. It's yours.
70 A ¶ Tamsin steps down at last.
71 A Sits beside her son on the crate.
72 A Neither of them says anything.
* 73 A The bulb sways a little, then settles.

### SCENE s00986 | EXT. MANGROVE RIVER - RAFT - DUSK
Detected names (may be incomplete or contain aliases): KOFI, NAOMI, HAKON, RUSLAN
* 1 A ¶ The river is brown glass between walls of knotted roots.
* 2 A Mosquitoes hang in the amber light.
* 3 A A flat raft of lashed bamboo drifts without a pole, carried by a current too slow to feel.
4 A ¶ KOFI (30s, bare-chested, sunburnt) lies on his back with a torn shirt over his face.
5 A NAOMI (30s, cropped hair, cracked lips) kneels at the edge, trailing a hand in the water.
6 A HAKON (70s, white beard, wool cap, still in a ruined parka) sits cross-legged, tying and untying the same knot.
7 A RUSLAN (8, too-big life vest) watches a heron on a root.
8 A ¶ Nobody speaks.
* 9 A Somewhere a frog begins and stops.
10 A ¶ Kofi lifts the shirt.
11 A Squints at the sky.
12 A Lets it fall.
13 A ¶ Naomi draws her hand from the water and looks at her fingers, wrinkled and white.
14 A She wipes them on her thigh.
15 A ¶ Hakon pulls the knot tight.
16 A Studies it.
17 A Loosens it.
18 A ¶ Ruslan holds out a cupped palm toward the heron.
* 19 A The bird lifts, unhurried, and flaps over the trees.
20 A He and Naomi both follow it with their eyes.
21 A Kofi and Hakon do not.
* 22 A ¶ The raft turns a bend.
* 23 A Ahead, the mangroves part on a long gray mud flat.
* 24 A Far off, a roofline.
* 25 A Maybe a boat shed.
* 26 A Maybe a mirage.
27 A ¶ All four see it.
28 A All four go still.
29 A Nobody says a word, in case the word makes it vanish.

### SCENE s00987 | INT. DIVING BELL - CHANNEL FLOOR, 1861
Detected names (may be incomplete or contain aliases): ARCHIBALD PENHALLOW, TOBIAS FENWICK, CORNELIUS VANE
* 1 A ¶ A riveted iron bell, six feet across.
* 2 A Two brass portholes.
* 3 A A hissing air hose.
* 4 A Green water presses against the glass.
* 5 A A candle burns in a sealed lantern.
6 A ¶ ARCHIBALD PENHALLOW (50s, engineer, mutton-chop whiskers) crouches at the air valve.
7 A DR. TOBIAS FENWICK (40s, naturalist, spectacles fogged) clutches a specimen jar.
8 A CORNELIUS VANE (30s, company agent, pinstripe suit ruined by damp) sits rigid on the bench.
9 D ARCHIBALD: Forty feet. Pressure steady.
10 D TOBIAS: Marvelous. Marvelous. Look at the light.
11 D CORNELIUS: I am looking at the water, Doctor. It is looking back.
12 D ARCHIBALD: Keep your voice down. Sound travels.
13 D CORNELIUS: Where would it travel to?
14 D ARCHIBALD: The surface. Where the men on the pump are listening for trouble.
* 15 A ¶ A tap on the glass.
16 A All three look.
* 17 A A pale fish, huge and slow, drifts past.
18 D TOBIAS: Lophius. Oh, Cornelius, you must see this.
19 D CORNELIUS: I have no wish to see it.
20 D TOBIAS: It's a monkfish. A giant.
21 A ¶ He holds up the jar.
22 A Fogs the porthole with his breath.
23 A Wipes it.
24 A He leans so close his nose touches the glass.
25 D ARCHIBALD: Get back from the window.
26 D TOBIAS: It's only a fish.
27 D ARCHIBALD: It's the pressure on the glass I'm worried about.
28 D CORNELIUS: You said it was safe.
29 D ARCHIBALD: I said it was safe if we keep still.
* 30 A ¶ The bell shudders.
* 31 A A low groan from the iron seams.
* 32 A The candle gutters.
33 D CORNELIUS: What was that?
34 D ARCHIBALD: The sea settling.
35 D TOBIAS: Is it settling, or moving?
36 D ARCHIBALD: Be quiet. Both of you.
37 A ¶ He unhooks a speaking tube and listens.
* 38 A Nothing.
39 A He taps it.
* 40 A Nothing.
41 D ARCHIBALD [CONT'D]: The line's dead.
42 D CORNELIUS: Then we're lost.
43 D ARCHIBALD: We are not lost. The pump men have a signal. Three tugs on the cord.
44 A ¶ He seizes the cord.
45 A Pulls three times.
* 46 A Waits.
47 A Pulls again.
* 48 A ¶ Silence.
49 A Tobias lowers the jar.
50 A His hand trembles.
51 A He sets it on the floor.
52 D TOBIAS: I have always wanted to die in the name of science. I merely hadn't pictured it so damp.
53 D CORNELIUS: Doctor, please.
54 D ARCHIBALD: Nobody is dying. Cornelius, hand me that wrench.
55 D CORNELIUS: This one?
56 D ARCHIBALD: The long one.
57 A ¶ Cornelius passes it.
58 A Archibald hammers the iron wall.
* 59 A Once.
* 60 A Twice.
* 61 A Three times.
* 62 A A pause.
* 63 A ¶ Three muffled knocks answer from above.
64 A All three exhale at once.
65 D TOBIAS: They heard.
66 D ARCHIBALD: They always hear.
* 67 A ¶ The bell lurches.
* 68 A Rises.
* 69 A Slowly.
* 70 A The water in the porthole begins to lighten from green to gray.
71 D CORNELIUS: Archibald?
72 D ARCHIBALD: Yes?
73 D CORNELIUS: When we are up, I intend to be sick.
74 D ARCHIBALD: Hold on to the bench.

### SCENE s00988 | INT. PICKLE FACTORY ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): HARVEY, STRANGER, ALBERTO
* 1 A ¶ A steel freight lift.
* 2 A Slimy floor.
* 3 A A single flickering bulb.
* 4 A The smell of brine is overwhelming.
5 A ¶ HARVEY (40s, hairnet, clipboard) leans on one wall, scowling at the buttons.
6 A A STRANGER (40s, windbreaker, visitor badge, big grin) stands on the other, holding a jar.
7 D STRANGER: Great plant you've got here.
8 D HARVEY: It's a factory.
9 D STRANGER: Great factory.
* 10 A ¶ The elevator groans.
* 11 A Stops.
* 12 A Lights dim.
13 D HARVEY: Oh, no.
14 D STRANGER: Is that normal?
15 D HARVEY: It's never happened. Ever.
16 D STRANGER: Ever?
17 D HARVEY: Except Tuesday.
18 A ¶ He jabs a button.
* 19 A Nothing.
20 A He tries again.
* 21 A Nothing.
22 A The man unscrews the jar and sniffs.
23 D STRANGER: You mind if I eat one?
24 D HARVEY: Those are the quality-control samples.
25 D STRANGER: I'm quality control.
26 D HARVEY: I'm quality control.
27 D STRANGER: I mean, I'm also quality control. We're all quality.
28 A ¶ He pops a pickle in his mouth.
29 A Crunches loudly.
30 A Harvey stares.
31 D HARVEY: Who are you?
32 D STRANGER: Alberto Mendes. Your new regional auditor.
33 D HARVEY: Oh, no.
34 D ALBERTO: Don't worry, Harvey. Your pickles are fine.
35 D HARVEY: How do you know my name?
36 D ALBERTO: It's on your hairnet.
* 37 A ¶ The elevator lurches, then plunges a foot.
38 A Both yelp.
39 A Both grab the same railing.
40 A Both look at the jar.
41 A Alberto offers it.
42 A Harvey takes one.

### SCENE s00989 | INT. CUCKOO CLOCK REPAIR SHOP - EVENING
Detected names (may be incomplete or contain aliases): HORATIO PIMM, MISS LAVINIA GRAY, EUSTACE KROLL
* 1 A ¶ A narrow shop in a Bavarian alley.
* 2 A Hundreds of carved clocks ticking out of sync.
* 3 A Pendulums swing like drunken metronomes.
* 4 A A brass lamp hangs over a workbench strewn with tiny gears.
5 A ¶ HORATIO PIMM (60s, a retired detective in a moth-eaten waistcoat, magnifier on his forehead) bends over a gutted clock, humming.
6 A MISS LAVINIA GRAY (50s, gray bun, gloves buttoned to the wrist) sits primly in the customer's chair.
7 A DR. EUSTACE KROLL (40s, doctor's bag, thick glasses, nervous smile) paces behind her.
8 D HORATIO: It's a charming movement, Miss Gray. Eighteen-forty, I'd say.
9 D LAVINIA: It was my husband's.
10 D HORATIO: Ah. Then it has seen some history.
11 D EUSTACE: Miss Gray, we really should be getting on.
12 D LAVINIA: Doctor, I'm in no hurry.
13 A ¶ He stops.
14 A Checks his watch.
15 A Puts it away.
16 D HORATIO: Tell me, Miss Gray. Your husband. When did he die?
17 D LAVINIA: Last Thursday.
18 D HORATIO: And you've come to repair his clock so soon.
19 D LAVINIA: He asked me to.
20 D HORATIO: Did he?
21 A ¶ Horatio lifts a tiny brass cog from the clock.
22 A Turns it in the lamplight.
23 D HORATIO [CONT'D]: This isn't a clock part. It's a lock. A pharmacy lock.
24 A ¶ Eustace goes pale.
25 A Lavinia does not move.
* 26 A The ticking seems to grow louder.
27 D EUSTACE: Inspector, I can explain.
28 D HORATIO: I'm retired. But go on.
29 A ¶ Eustace lunges for the door.
30 A Lavinia whips a hatpin from her sleeve.
31 A Horatio ducks under the workbench.
32 A The doctor trips on the rug and slams into a grandfather clock.
* 33 A ¶ All the clocks begin to chime at once.
* 34 A Cuckoos burst out of every window.
35 A ¶ In the din, Horatio rises, hatpin quivering in the wood a hand's width from his ear.
36 A Lavinia and Eustace face each other, panting.
37 A Both look at the clocks.
38 A Both look at him.
39 D HORATIO [CONT'D]: Eight o'clock. Right on time.
40 D LAVINIA: You fool. He was dying anyway.
41 D HORATIO: Yes. But not on Thursday.

### SCENE s00990 | INT. SNOW-BOUND ONSEN BATHHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): KENJI, LUCIA, TANABE, DESMOND
* 1 A ¶ Steam rolls off a cedar-lined pool.
* 2 A Paper lanterns.
* 3 A Snow falls past open shutters.
* 4 A The air smells of sulfur and pine.
5 A ¶ KENJI (30s, lean, towel around his neck, glasses fogged) perches on the pool's edge.
6 A LUCIA (30s, copper hair pinned up, wrapped in a thin yukata) wades toward him, waist-deep.
7 A ¶ MRS. TANABE (70s, bent, white apron) shuffles past with a tray of sake.
8 A DESMOND (40s, loud tourist, Hawaiian shirt under a parka) hovers at the door with a camera.
9 D KENJI: You came all the way from Lisbon for a bath?
10 D LUCIA: For you.
11 D KENJI: That's the worst line I've ever heard.
12 D LUCIA: It's the truest.
13 A ¶ She reaches him.
14 A He wipes his glasses.
15 A She takes them.
16 A Holds them up to the lantern.
17 A He squints at her.
18 D MRS. TANABE: Sake?
19 D KENJI: Yes, please.
20 D LUCIA: Obrigada.
21 D MRS. TANABE (sets the tray down): He talks about you in his sleep.
22 D KENJI: Mrs. Tanabe!
23 D LUCIA: In which language?
24 D MRS. TANABE: Bad Portuguese.
25 A ¶ Lucia and Kenji laugh together.
26 A Their shoulders touch.
27 A Neither moves away.
28 D DESMOND: Say cheese!
29 A ¶ He lifts the camera.
* 30 A The flash pops.
31 A Lucia yelps.
32 A Kenji flinches.
33 A Both slip and splash into the pool.
34 A Mrs. Tanabe sighs and takes the camera from Desmond.
35 D DESMOND [CONT'D]: Sorry! Sorry!
36 D MRS. TANABE: Out. Now.
37 A ¶ He leaves, bowing.
* 38 A Steam closes behind him.
39 A ¶ Kenji surfaces, spluttering.
40 A Lucia surfaces beside him, hair loose, laughing.
41 A They look at each other for a long moment.
42 A Mrs. Tanabe turns and shuffles out, tray in hand, smiling at the floor.

### SCENE s00991 | INT. PAWNSHOP - CLOSING TIME
Detected names (may be incomplete or contain aliases): VIVIAN, LEONARD, JUDE
* 1 A ¶ Glass cases of watches and wedding rings.
* 2 A A neon "WE BUY GOLD" buzzes in the window.
* 3 A A wall phone hangs near the register.
4 A ¶ VIVIAN (60s, cardigan, reading glasses on her head) counts bills at the counter.
* 5 A The phone rings.
6 A She snatches it.
7 D VIVIAN: Hello?
8 D LEONARD [V.O.] (over phone): Viv. It's me.
9 D VIVIAN: Leonard. Where are you?
10 D LEONARD [V.O.]: Out front. Come to the door.
11 D VIVIAN: I'm closing.
12 D LEONARD [V.O.]: Please.
13 A ¶ She slams the phone down.
* 14 A The bell over the door jingles.
15 A JUDE (20s, gaunt, duffel bag, hoodie) steps in, shivering.
16 D JUDE: Mom.
17 D VIVIAN: Jude.
18 A ¶ She doesn't move.
19 A He drops the bag.
20 D JUDE: I need a place to stay.
21 D VIVIAN: You told me you didn't.
22 D JUDE: I know what I said.
* 23 A ¶ The phone rings again.
24 A Both of them look at it.
25 D LEONARD [V.O.] (muffled, from the receiver on the hook): Viv? Are you there?
26 D VIVIAN: Not now, Leonard.
27 D JUDE: Is that Dad?
28 D VIVIAN: He's been calling for a week.
29 D JUDE: Mom, I didn't come here to fight.
30 D VIVIAN: I didn't ask you to.
31 D JUDE: I'm just...
32 D VIVIAN: You're just what?
33 D JUDE: Cold.
34 A ¶ She stares at him.
35 A Then she lifts the counter flap.
36 A Holds it open.
37 A He crosses to her.
38 A She wipes his face with her sleeve.
* 39 A ¶ The phone keeps ringing.
40 A She lets it.

### SCENE s00992 | EXT. ROOFTOP PIGEON COOP - TENEMENT - EARLY EVENING
Detected names (may be incomplete or contain aliases): TEODORO, ALMA, DARIUS, PIA
* 1 A ¶ A tar-paper roof above a ribbon of city streets.
* 2 A A wire-and-plywood coop leans against a chimney.
* 3 A The light is slow and orange.
* 4 A Birds mutter inside.
5 A ¶ TEODORO (70s, flat cap, cardigan, cane) feeds seed through the wire.
6 A His daughter ALMA (40s, hospital lanyard) leans on the parapet, scrolling her phone.
7 A His son DARIUS (40s, expensive coat, shoes too clean) stands near the stairwell door, keys in hand.
8 A His granddaughter PIA (12, puffer jacket) kneels by the coop, tapping the wire.
9 A ¶ No one speaks for a while.
10 D PIA: Grandpa, this one is limping.
11 D TEODORO: She'll be fine.
12 D PIA: Her foot is bent.
13 D TEODORO: It's a bad winter for feet.
14 A ¶ Darius clears his throat.
15 D DARIUS: Dad, the realtor is coming at six.
16 D TEODORO: It's still five-thirty.
17 D DARIUS: I'm just saying.
18 D ALMA: You're always just saying.
19 D DARIUS: Alma.
20 D ALMA: Don't.
21 D TEODORO (to the birds): Hush, hush. Both of you.
22 A ¶ He lets the seed fall.
23 A Pia scoops a pigeon into her hands and offers it to him.
24 D PIA: Can I take this one home?
25 D DARIUS: No.
26 D ALMA: Yes.
27 A ¶ They look at each other.
28 D TEODORO: Let her.
29 D DARIUS: Dad, it's a rooftop pigeon. It has diseases.
30 D TEODORO: It has a name. Her name is Rosario.
31 D ALMA: Mama named her.
32 A ¶ Teodoro turns away.
33 A Fusses with the latch.
34 A His shoulders shake once.
35 A ¶ Darius takes off his coat.
36 A Drapes it on the old man.
37 A Teodoro does not thank him.
38 A He pulls the collar tight and keeps his back turned.
39 D DARIUS: I'll tell the realtor tomorrow.
40 D ALMA: Thank you.
41 D DARIUS: Don't thank me. I haven't decided.
42 A ¶ Pia opens the coop door.
* 43 A A dozen birds burst out and wheel into the sunset.
44 A Teodoro watches them go, mouth working silently.
45 A Alma moves to his side.
46 A Darius steps in on the other.
47 A The three of them watch the sky.
48 D PIA: Grandpa, which one is Rosario?
49 D TEODORO: The one coming back.
* 50 A ¶ A gray bird banks, folds her wings, and lands on his shoulder.

### SCENE s00993 | INT. MAIL SORTING DEPOT - 3 A.M.
Detected names (may be incomplete or contain aliases): KARLOS, JIN, MAREN, DUBOIS, OLD TIBBS
* 1 A ¶ Conveyor belts hum.
* 2 A Parcels tumble down chutes.
* 3 A Fluorescent light.
* 4 A No windows.
5 A ¶ KARLOS (40s, supervisor, name tag) stands at a console.
6 A JIN (20s, forklift jacket) waits by a crate.
7 A MAREN (30s, uniform, ID lanyard) scans labels.
8 A DUBOIS (50s, suit, no tie) paces along the belt.
9 A OLD TIBBS (70s, janitor, mop bucket) wrings a rag.
10 D KARLOS: Parcel 0447. It's due out at dawn.
11 D DUBOIS: Open it.
12 D JIN: Boss, that's federal.
13 D DUBOIS: So am I.
14 A ¶ Maren stops scanning.
15 A Tibbs goes still.
* 16 A The belt hums.
17 D KARLOS: Nobody opens it until we know what's inside.
18 D DUBOIS: I already know what's inside.
19 A ¶ He pulls a pistol.
20 A Maren backs away.
21 A Jin raises both hands.
22 A Karlos steps forward.
23 D KARLOS: Put that down.
24 D DUBOIS: Open the crate.
25 A ¶ Tibbs lunges with the mop.
26 A Dubois swings.
27 A The pistol fires into the ceiling.
* 28 A Sparks rain.
29 A Maren and Jin dive behind the belt.
30 A Karlos tackles Dubois.
31 A They crash onto the conveyor, rolling together toward a chute.
32 A Tibbs hits the emergency stop.
* 33 A ¶ Everything goes silent.
* 34 A The gun skids across the floor.
35 A All five look at it.

### SCENE s00994 | INT. PARIS CATACOMBS - OSSUARY CHAMBER, 1793
Detected names (may be incomplete or contain aliases): CITIZEN AUGUSTIN, CELESTINE
* 1 A ¶ Walls of stacked skulls.
* 2 A A single torch.
* 3 A Water drips from the vaulted ceiling.
4 A ¶ CITIZEN AUGUSTIN (40s, revolutionary sash, unpowdered hair, stiff with fear) stands alone at a stone table, copying names into a ledger.
5 A He mutters as he writes.
6 D AUGUSTIN: Lefèvre. Marchand. Girard.
* 7 A ¶ A footstep echoes.
8 A He freezes.
9 A Slowly closes the ledger.
10 D AUGUSTIN [CONT'D]: Who goes there?
11 A ¶ CELESTINE (30s, cloaked, hood up, a lantern shielded under her arm) steps out from behind a pillar of bones.
12 D CELESTINE: A friend of the dead.
13 D AUGUSTIN: There are no friends in the Republic.
14 D CELESTINE: Then I am no friend. Only a sister.
15 D AUGUSTIN: Whose sister?
16 D CELESTINE: The one you have on that list.
17 A ¶ He glances at the ledger.
18 A She comes closer.
* 19 A The light catches her face.
20 D AUGUSTIN: You should not be down here.
21 D CELESTINE: Neither should you.
22 D AUGUSTIN: I am an officer of the Committee.
23 D CELESTINE: You are a clerk with a candle.
24 D AUGUSTIN: Madame...
25 D CELESTINE: Citizen. Celestine Duval.
26 D AUGUSTIN: Citizen Duval, I could have you arrested.
27 D CELESTINE: Then do it. Call the guards. They are above, drinking wine from your cellar.
28 A ¶ He says nothing.
29 A Wipes his palms on his coat.
30 D CELESTINE [CONT'D]: My brother's name is on that page. Pierre Duval.
31 D AUGUSTIN: I do not control the lists.
32 D CELESTINE: You hold the pen.
33 D AUGUSTIN: The pen obeys.
34 D CELESTINE: So does the guillotine. Until someone stops it.
* 35 A ¶ Water drips.
36 A He opens the ledger.
37 A Finds the page.
38 A Looks at her.
39 A Looks at the page.
40 D AUGUSTIN: Pierre Duval. Printer.
41 D CELESTINE: Yes.
42 D AUGUSTIN: Condemned for a pamphlet.
43 D CELESTINE: For an opinion.
44 A ¶ He tears the page out.
45 A Folds it.
46 A Hands it to her.
47 D AUGUSTIN: There is a carriage at the Barrière d'Enfer at midnight.
48 D CELESTINE: Why?
49 D AUGUSTIN: Because I am tired of counting skulls.

### SCENE s00995 | INT. STRIKE-N-SPARE BOWLING ALLEY - THANKSGIVING EVE
Detected names (may be incomplete or contain aliases): GRANDPA WALTER, DOROTHEA, HAL, LINUS, SUNNY, IMOGEN
* 1 A ¶ Lane 7 has been turned into a dinner table.
* 2 A Paper turkeys.
* 3 A Folding chairs.
* 4 A Ball returns hold gravy boats.
* 5 A A neon pin flashes overhead.
6 A ¶ GRANDPA WALTER (80s, bowling shirt, thick glasses) sits at the head, carving.
7 A DOROTHEA (50s, pearls, tight smile) sets plates.
8 A HAL (50s, gravy-stained tie) fiddles with a ball polisher.
9 A LINUS (teen, headphones) slouches.
10 A SUNNY (8, pigtails, tiny bowling shoes) crawls under the table.
11 A IMOGEN (30s, tote bag, tired eyes) arrives late, pulling off a scarf.
12 D DOROTHEA: Imogen, you said six.
13 D IMOGEN: It's six-oh-four.
14 D DOROTHEA: Grandpa has been carving for forty minutes.
15 D GRANDPA WALTER: I like carving.
16 D HAL: That's not what you said about the turkey last year.
17 D GRANDPA WALTER: Last year the turkey was dry.
18 D DOROTHEA: It was not dry.
19 D HAL: It was a little dry, Dot.
20 D DOROTHEA: Hal!
21 D LINUS: Can I eat in the car?
22 D DOROTHEA: No.
23 D LINUS: Can I eat on the lane?
24 D HAL: It's literally on the lane, Linus.
25 D SUNNY (from under the table): Aunt Imogen, you have a hole in your sock.
26 D IMOGEN: Thank you, Sunny.
27 D DOROTHEA: Can we all sit, please?
28 D GRANDPA WALTER: Sit. Eat. Say grace.
29 D HAL: Who's saying grace?
30 D DOROTHEA: Imogen, you say it.
31 D IMOGEN: Me?
32 D DOROTHEA: You're the one who left.
* 33 A ¶ Silence.
* 34 A The pin on the ceiling flashes.
35 A Linus pulls off his headphones.
36 D IMOGEN: That was unkind, Dorothea.
37 D DOROTHEA: It was accurate.
38 D HAL: Dot, let's not.
39 D DOROTHEA: Nobody asked you, Harold.
40 D GRANDPA WALTER: Girls, girls.
41 D IMOGEN: We're not girls, Grandpa.
42 D DOROTHEA: Speak for yourself.
43 D SUNNY: Can I have pie?
44 D LINUS: Nobody has pie, Sunny. We're in a war.
45 A ¶ Dorothea slams the gravy boat on the table.
* 46 A Gravy leaps.
* 47 A It lands on Hal's tie.
48 A He stares at it.
49 D HAL: Well, that's the last straw.
50 A ¶ He stands.
51 A Flings a ball from the return.
* 52 A It rolls down Lane 7, scattering the cranberry and three chairs.
* 53 A Strike.
54 A ¶ Everyone stares at the pins.
55 A Then at Grandpa Walter.
56 A He sets down the knife.
57 D GRANDPA WALTER: Nice.
58 A ¶ Linus snickers.
59 A Sunny giggles.
60 A Imogen covers her mouth.
61 A Dorothea tries to stay stern and fails.
62 A Hal bows.

### SCENE s00996 | INT. BONE-WHITE SALOON - WHALE RIB BUILDING - NOON
Detected names (may be incomplete or contain aliases): MARSHAL TEAGUE, OTTILIE, LEFTY, DEPUTY NASH
* 1 A ¶ A saloon framed by the ribs of an enormous skeleton.
* 2 A Sunlight through bone.
* 3 A Sawdust.
* 4 A A faded mural of a harpooner.
5 A ¶ MARSHAL TEAGUE (50s, tin star, sun-cracked skin) stands at the bar.
6 A OTTILIE (40s, apron, flour on her sleeves) pours coffee.
7 A LEFTY (30s, left hand missing, grin) sits at a corner table.
8 A DEPUTY NASH (20s, pressed shirt, jittery) watches the door.
9 D TEAGUE: Ottilie, who's the stranger who came in at dawn?
10 D OTTILIE: Said his name was Smith.
11 D TEAGUE: Everybody's name is Smith.
12 D LEFTY: Not mine.
13 D TEAGUE: Yours is trouble, Lefty.
14 D LEFTY: That's my middle name.
15 D NASH: Marshal, he's across the street.
16 D TEAGUE: Then let him stay there.
17 D NASH: He's got a rifle.
18 D OTTILIE: They all have rifles.
19 D LEFTY: Don't look so scared, Deputy. He's more scared than you.
20 D NASH: How do you know?
21 D LEFTY: He's still sitting.
22 A ¶ Teague sets his cup down.
23 A He draws his pistol, checks the chamber, holsters it.
24 A Nash swallows.
25 A Ottilie wipes her hands.
26 D TEAGUE: Everyone down.
27 A ¶ They duck behind the bar.
28 A A shot cracks through the window and kills the mirror.
* 29 A Glass rains.
30 A Lefty whoops.
31 A ¶ Teague rises, fires once out the window.
32 A A body drops outside.
33 D NASH: Did you...
34 D TEAGUE: Wasn't him. That was his horse.
35 D OTTILIE: Oh, Lord.
36 D LEFTY: That's gonna be a long walk home.

### SCENE s00997 | INT. CRYSTAL GLASSHOUSE - REGENCY MASQUERADE, 1815
Detected names (may be incomplete or contain aliases): LORD ASHBY, PHILIPPA, RENWICK, SIOBHAN, QUENTIN, MADAME DUPRE
* 1 A ¶ A cathedral of iron and glass, lush with orchids and palm.
* 2 A Lanterns swing among the leaves.
* 3 A Masked guests drift through the greenery.
* 4 A A string quartet saws in a bower.
5 A ¶ LORD ASHBY (50s, silver domino mask, jeweled cane) leans on a pillar and watches the dance floor without blinking.
6 A PHILIPPA (30s, green gown, peacock-feather mask) waits by a fern, gloved hands clasped.
7 A RENWICK (40s, black mask, scarred knuckles) tops up his glass and wanders toward the quartet.
8 A SIOBHAN (20s, servant's apron beneath a borrowed shawl) carries a tray of champagne.
9 A QUENTIN (20s, harlequin mask, nervous laugh) pretends to admire an orchid.
10 A MADAME DUPRE (60s, fan, gold wig) moves between the guests, whispering, never looking at any of them.
11 A ¶ Ashby taps his cane twice.
12 A Renwick sets down his glass and drifts toward the doors, Philippa slides behind a palm and takes a folded note from her glove, Siobhan lowers the tray, and Quentin, laughing a half-second too loud, bumps into Madame Dupre, who drops her fan and does not stoop to pick it up.
13 A The quartet falters.
14 D ASHBY: Madame Dupre. You are unsteady.
15 D MADAME DUPRE: It is the heat, Lord Ashby.
16 D ASHBY: Is it?
17 D PHILIPPA (low, to Siobhan): Take it to the gardener's door.
18 D SIOBHAN: Yes, miss.
19 A ¶ She pockets the note and slips between two guests.
20 A Renwick turns at the doorway, sees her, and steps into her path.
21 A Quentin snatches an orchid, snaps its stem, and tucks it behind his ear.
22 A Ashby crosses the floor with the cane tapping once for every step.
23 D RENWICK: Where are you going, girl?
24 D SIOBHAN: To fetch more wine, sir.
25 D RENWICK: The wine is that way.
26 A ¶ She lifts the tray like a shield.
27 A He plucks a glass, drains it, sets it back on the tray.
28 A She does not blink.
29 A Philippa emerges from behind the palm.
30 A Madame Dupre has stopped whispering.
31 A Ashby arrives.
32 D ASHBY: Philippa, my dear. You've been missed.
33 D PHILIPPA: I was admiring the orchids.
34 D ASHBY: You are always admiring something.
35 A ¶ Quentin takes three quick steps back.
36 A Renwick takes one forward.
37 A The quartet stops altogether.
* 38 A In the hush, a glass shatters.
39 A Siobhan's tray is on the floor.
40 A She and Renwick stare at the shards.
41 A Ashby offers Philippa his arm.
42 A She takes it.
43 A Madame Dupre retrieves her fan and fans herself slowly.
44 A Quentin laughs once, then thinks better of it.
45 D ASHBY [CONT'D]: Shall we dance?
46 D PHILIPPA: Of course.
47 A ¶ The quartet resumes.
48 A Couples reform.
49 A Siobhan kneels among the broken glass and, under the cover of the music, closes her fist around a small gold key.

### SCENE s00998 | INT. ICE-FISHING HUT - NIGHT
Detected names (may be incomplete or contain aliases): GRETA
* 1 A ¶ Plywood walls.
* 2 A A hole in the floor, black water, the surface skinned with ice.
* 3 A A propane lantern hisses.
* 4 A A tape recorder sits on a stool.
* 5 A The wind outside sounds like a throat.
* 6 A ¶ The door shudders, bangs, opens.
* 7 A Snow swirls in.
8 A ¶ GRETA (30s, parka caked white, ski mask pushed up, red-rimmed eyes) staggers inside, drags the door shut, and slides the bolt.
9 A She drops her pack.
10 A Rips off her gloves.
* 11 A The lantern flickers as if breathing in her fear.
12 A ¶ She flips the tape recorder.
* 13 A The reel turns.
* 14 A A voice crackles.
15 D GRETA [V.O.] (recorded, bright): Day three. Hut one. Everything is fine. I'm fine.
16 A ¶ She slams the stop button.
17 A Presses her back against the wall.
18 A Listens.
* 19 A Wind rattles the tin chimney.
* 20 A Something scrapes across the roof, slow as a fingernail.
21 A Greta slides her knife from her boot and holds it level.
* 22 A The scraping moves down the wall, around the corner, to the door.
* 23 A The bolt trembles in its bracket.
* 24 A The lantern gutters low.
25 A She lifts the knife.
* 26 A The hole in the floor bubbles, a single fat bubble, and bursts.
27 D GRETA (whispering): I'm fine.
28 A ¶ The door handle turns.
* 29 A Slowly.
* 30 A Once.
* 31 A Twice.
* 32 A Then the whole hut lurches as if shouldered, and the lantern swings, throwing a long shadow across the ceiling.
33 A The knife trembles in her fist.
34 A She cuts the lantern's gas with her other hand, and darkness takes the room.
* 35 A ¶ In the dark, the tape recorder clicks on by itself.
36 D GRETA [V.O., CONT'D] (recorded, calm): Don't open the door.
37 D GRETA: I didn't!
* 38 A ¶ The bolt slides back on its own.

### SCENE s00999 | INT. TRAIN CAR FIELD HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): IYER, LUDMILLA
* 1 A ¶ A converted freight car rolling through mountains.
* 2 A Cots bolted to the walls.
* 3 A Lanterns on hooks.
* 4 A A surgical table at the center, bolted to the floor.
* 5 A Rain hammers the roof.
* 6 A Every few seconds the wheels shriek over a joint.
7 A ¶ DR. IYER (40s, surgeon, cap, apron already stained) stands at the table, sleeves rolled.
8 A LUDMILLA (30s, a patient strapped to the table, face gray with pain, a bloody dressing across her abdomen) stares at the ceiling.
9 D IYER: Ludmilla, I need you to stay with me.
10 D LUDMILLA: I am here.
11 D IYER: Count backwards from ten.
12 D LUDMILLA: Ten. Nine.
13 D IYER: Good.
14 A ¶ He lays out instruments on a tray.
* 15 A A forceps clatters to the floor.
16 A He picks it up, wipes it with a rag, and sets it back.
17 A His hands shake only slightly.
18 D LUDMILLA: Doctor. Your hands.
19 D IYER: They always do before.
20 D LUDMILLA: Do they stop?
21 D IYER: When the knife starts.
22 A ¶ She smiles weakly.
* 23 A The train lurches.
* 24 A The tray slides.
25 A Iyer catches it with one hand and steadies her shoulder with the other.
26 D IYER [CONT'D]: Eight?
27 D LUDMILLA: Eight.
28 A ¶ He pours antiseptic over the wound.
29 A She hisses through her teeth, her fingers digging into the table's edge.
30 A He talks fast and low, never looking up, laying gauze, clamping a bleeder, pressing a pad flat with the heel of his palm while she shudders and clenches her jaw and the lantern swings over both of them.
31 D IYER: Seven.
32 D LUDMILLA: Seven. Seven.
33 D IYER: Stay with me.
34 D LUDMILLA: Doctor, there is something you must know.
35 D IYER: Later.
36 D LUDMILLA: I am not what I told you.
37 D IYER: Ludmilla.
38 D LUDMILLA: The papers in my coat. They are false.
39 A ¶ He doesn't answer.
40 A Cuts.
41 A She gasps.
* 42 A Blood pools.
43 A He suctions it with a rubber bulb, swabs, clamps again.
44 D IYER: Six.
45 D LUDMILLA: I am a courier. For the partisans.
46 D IYER: Five. Keep counting.
47 D LUDMILLA: There is a name in the lining. Memorize it.
48 D IYER: I am busy.
49 D LUDMILLA: Please.
50 A ¶ He glances at her coat, hanging on the wall hook.
51 A Then back at her.
52 A She is crying now, silently, tears running into her ears.
53 D IYER: What is the name?
54 D LUDMILLA: Commander Alder. Station nine.
55 D IYER: Alder. Station nine.
56 D LUDMILLA: Say it again.
57 D IYER: Alder. Station nine. Four.
58 D LUDMILLA: Four.
* 59 A ¶ The wheels shriek.
* 60 A A flash of lightning lights the car white.
61 A For a moment the lantern, the table, the two of them are frozen like a photograph.
62 D IYER: Three.
63 D LUDMILLA: Three... two...
64 A ¶ Her voice fades.
65 A Her eyes flutter.
66 A He pushes a final suture through, ties it, and cuts the thread.
67 D IYER: One.
68 A ¶ She doesn't answer.
69 A He presses two fingers to her neck.
70 A Waits.
71 A Her chest rises.
72 A Falls.
73 A Rises.
74 A ¶ He sags against the table.
75 A Tears off his gloves.
76 A Looks at her coat on the hook.
77 A Then, with the care of a man who has decided something, he crosses the car, lifts the hem, and finds the lining.
78 A ¶ Behind him, Ludmilla opens one eye.
79 D LUDMILLA: You were supposed to forget.
80 D IYER: I never forget a name.

### SCENE s01000 | INT. COVERED SWIMMING POOL GYM - DAWN
Detected names (may be incomplete or contain aliases): TOMAS, IBARRA
* 1 A ¶ An old municipal pool drained and boarded over.
* 2 A A boxing ring stands where the deep end once was.
* 3 A Tile walls, high windows, a faint chlorine ghost.
* 4 A A cassette player sits on a folding chair.
5 A ¶ TOMAS "THE HAMMER" IBARRA (40s, gray at the temples, hand wraps already on) shadowboxes in the ring, light as a man half his age.
6 A He moves slowly, almost lazily, rolling his shoulders, humming along to nothing.
7 A He taps the heavy bag as he passes it, as if saying good morning.
8 A ¶ He stops at the ropes.
9 A Peels the wrap from his left hand, flexes the knuckles, winces at nothing.
10 A He sits on the stool.
11 A Looks at the empty seats that were once pool bleachers.
12 A ¶ He thumbs the cassette player.
* 13 A It clicks.
* 14 A A crowd roars on tape, then an interviewer's voice, then his own, younger and cocksure.
15 D TOMAS [V.O.] (recorded, 1998): I'll never quit. They'll have to carry me out.
16 A ¶ He listens.
17 A His smile fades by degrees.
18 A He rewinds.
19 A Plays it again.
20 D TOMAS [V.O., CONT'D] (recorded): I'll never quit. They'll have to carry me out.
21 A ¶ He rises, steps through the ropes, takes the old trophy off the shelf, and weighs it in his hand.
22 A Then he carries it to the corner of the room where a cardboard box waits.
23 A He sets it inside, next to a folded robe and a pair of worn gloves, and closes the flaps.
* 24 A ¶ The lights above flicker on.
* 25 A A side door creaks.
26 A Footsteps click toward him across the tile, and he does not turn around.
27 A He picks up the box, hugs it to his chest, and for the first time all morning his hands are shaking.
28 D TOMAS (low): I'm not ready.
* 29 A ¶ The cassette reaches its end and clicks off.
* 30 A In the silence, a distant bell, the fire station down the road, rings six times.

### SCENE s01001 | INT. ORBITAL LAUNDERETTE - ZERO-G - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): PAXTON, REN, ULLA, VASHTI
* 1 A ¶ A drum-shaped room on a space station.
* 2 A Washing machines turn in the walls like portholes.
* 3 A Loose socks drift like jellyfish.
* 4 A Magnetic benches hold a few late-shift residents.
5 A ¶ PAXTON (40s, patched coverall, braided beard) floats near the dryer bank with a sack of laundry.
6 A REN (20s, hoodie, cheap vac-boots) types on a handheld.
7 A ULLA (60s, silver hair in a net, folded newspaper) reads upside down.
8 A VASHTI (30s, clean uniform, security patch) stands by the door, hand on a holster.
9 D PAXTON: Ren, that's the third load you've started.
10 D REN: It's a long week.
11 D ULLA: You're running a hot cycle. It's against regs.
12 D REN: It's one sock.
13 D VASHTI: Everyone remain calm.
* 14 A ¶ A siren whoops.
* 15 A Red light pulses.
* 16 A The machines shudder.
* 17 A Socks scatter.
18 A Paxton and Ren grab the same handhold.
19 A Ulla folds her newspaper and tucks it under her arm.
20 D VASHTI [CONT'D]: That's a hull breach klaxon.
21 D PAXTON: Where?
22 D VASHTI: Dryer six.
23 A ¶ All four look at dryer six.
* 24 A Its door bulges outward like a bubble.
* 25 A Something is knocking from inside.
26 D REN: It's just the sock.
27 D ULLA: That is not a sock.
* 28 A ¶ The door bursts.
* 29 A A flood of foam and lost clothing gushes out, followed by a gasping, soapy cat.
30 A It twists in midair, lands on Vashti's chest, and clings.
31 D VASHTI (deadpan): I'm going to need a bigger form.
* 32 A ¶ The siren stops.
* 33 A The lights return to white.
34 A The four of them hover in the foam, staring at the cat.

### SCENE s01002 | INT. FREIGHT ELEVATOR - SHUTTERED DEPARTMENT STORE - NIGHT
Detected names (may be incomplete or contain aliases): MALACHI, SOLEDAD, BIG RAY, TWITCH, FIONNUALA
* 1 A ¶ The cage of an old service elevator, slatted with steel.
* 2 A Bare bulbs bleed yellow across scaffolds of dust-sheeted mannequins.
* 3 A Somewhere below, a generator coughs.
4 A ¶ MALACHI (50s, a heavy man in a camel overcoat, rings on every finger) occupies the center of the car like a man who owns the floor.
5 A SOLEDAD (30s, tailored suit, hair scraped back, eyes like flint) stands beside him with a briefcase.
6 A BIG RAY (40s, bouncer's shoulders, scar through one eyebrow) holds the gate.
7 A TWITCH (20s, skinny, jittery, earbuds dangling) fidgets with a lighter.
8 A FIONNUALA (30s, rain-slicked trench, a plain gray folder) stands at the back, composed, the one person in the car who has not looked at anyone else.
* 9 A ¶ The elevator creaks, sinks.
* 10 A Each floor flickers by in the gaps of the gate: Housewares, Menswear, Toys, a ghostly Bridal with rows of veils like cobwebs.
11 D MALACHI: Nobody speaks until the basement.
12 A ¶ Twitch clicks the lighter.
13 A Big Ray's hand tightens on the gate.
14 A Soledad glances at the briefcase, then at Fionnuala, then at the ceiling.
15 A Fionnuala adjusts her glasses and does not blink.
* 16 A ¶ The elevator shudders to a halt between floors.
* 17 A The bulb swings.
18 A Malachi's ring clicks against the rail.
19 A For a moment, the five of them stand motionless in the swaying light, and the generator's cough is the only sound in the building.
20 A ¶ Then Twitch lunges for the briefcase.
21 A Soledad slams him against the cage.
22 A Big Ray yanks him off by the collar and pins him to the wall.
23 A Malachi, unmoving, raises one finger.
* 24 A Everything stops.
* 25 A The lighter drops.
26 A It rolls across the floor, spinning, until Fionnuala pins it under her heel.
27 A ¶ She opens her folder.
28 A Takes out a single photograph.
29 A Holds it up for all of them.
30 A Soledad's face drains.
31 A ¶ Malachi lowers his finger.
* 32 A ¶ The elevator starts to descend again.

### SCENE s01003 | INT. FLOODED CHAPEL CRYPT - NIGHT
Detected names (may be incomplete or contain aliases): HARLAN, PENNY, NOLA
* 1 A ¶ Ankle-deep black water.
* 2 A Stone arches.
* 3 A Lanterns on ropes.
* 4 A Names of the dead carved on every column.
* 5 A Something drips, then something larger drips.
6 A ¶ HARLAN (50s, woolen coat, reading glasses) steadies a lantern.
7 A PENNY (30s, hiking boots, camera bag) wades behind him.
8 A NOLA (20s, white nightgown under a borrowed jacket, bare feet) clings to the pillar.
9 D HARLAN: Everyone stay together.
10 D PENNY: Harlan, we are together. There are three of us.
11 D NOLA: Four.
12 D HARLAN: What?
13 D NOLA: There were four when we came down.
14 D PENNY: Nola, honey, count again.
15 D NOLA: One, two, three...
16 D HARLAN: Don't.
17 D PENNY: Let her.
18 D NOLA: Four.
19 A ¶ Harlan raises the lantern.
* 20 A The crypt stretches out, silent.
* 21 A Shadows lengthen between the columns.
22 D HARLAN (muttering): Just the damp. Just the damp.
23 D PENNY: Who are you talking to?
24 D HARLAN: Myself.
25 D NOLA: He's talking to it.
26 D PENNY: Nola!
27 D NOLA: It's listening.
* 28 A ¶ The water ripples.
* 29 A Not from their legs.
* 30 A From the far end of the crypt, a slow wake spreads toward them.
31 D HARLAN: Everyone back to the stairs. Now.
32 D PENNY: Which way is that?
33 D NOLA: Behind you.
34 A ¶ Penny turns.
* 35 A The stairs are gone.
* 36 A Only wall, and in the wall a carved name that was not there a minute ago.
37 D PENNY: Oh my God. That's my name.
38 D HARLAN: That's impossible.
39 D NOLA: It's the fourth.
40 D HARLAN (to himself): Count the lanterns. Count the lanterns.
* 41 A ¶ The lanterns, one by one, go out.

### SCENE s01004 | INT. PUBLIC LIBRARY - BOOK RETURNS ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LEOPOLD, WINIFRED, STRANGER, CASPIAN, AGNES, MURIEL
* 1 A ¶ A back room behind the circulation desk.
* 2 A Steel carts piled with returned books.
* 3 A A conveyor belt chugs.
* 4 A A radiator ticks.
* 5 A The overhead light has a moth in it.
6 A ¶ LEOPOLD (60s, cardigan, lanyard) shelves a cart, humming a waltz.
7 A WINIFRED (60s, volunteer vest, library-card earrings) peels stickers from paperbacks at a table.
8 A Neither looks up when the book-drop chute rattles and a thick novel thumps into the bin.
9 D WINIFRED: That's the Dostoevsky again.
10 D LEOPOLD: Fourth time this month.
11 D WINIFRED: Somebody's reading it very slowly.
12 D LEOPOLD: Somebody's very patient.
13 D WINIFRED: Or in love.
14 D LEOPOLD: With a Russian?
15 D WINIFRED: Leopold, it happens.
16 A ¶ He laughs, shakes his head.
* 17 A The chute rattles again.
* 18 A A paperback with a cracked spine tumbles out.
19 A Winifred flips it open.
* 20 A Something slides from the pages: a folded note.
21 D WINIFRED [CONT'D]: Oh.
22 D LEOPOLD: What?
23 D WINIFRED: "Same time next Tuesday?"
24 D LEOPOLD: Is it signed?
25 D WINIFRED: It says "C."
26 D LEOPOLD: Well, C will have to wait.
* 27 A ¶ The back door squeaks.
28 A A STRANGER (30s, long coat, scarf wound to his chin, rain on his hair) leans in, hesitating.
29 D STRANGER: Pardon me. I'm sorry. Is this where you leave things?
30 D WINIFRED: The main desk closed at nine.
31 D STRANGER: I wasn't looking for the desk.
32 D LEOPOLD: Are you looking for a book, young man?
33 D STRANGER: I'm looking for a note.
34 A ¶ Winifred clutches the paper to her chest.
35 A Leopold tucks his hands behind his back.
36 A The stranger smiles, and it changes his whole face.
37 D STRANGER [CONT'D]: My name is Caspian. I leave one in this one every Tuesday.
38 D WINIFRED: For whom?
39 D CASPIAN: For whoever finds it.
40 D LEOPOLD: That seems unwise.
41 D CASPIAN: It's led to some very good conversations.
42 D WINIFRED: Leopold, he's the C.
43 D LEOPOLD: I gathered.
* 44 A ¶ The chute rattles one more time.
45 A A woman's voice floats down the shaft, laughing: "Caspian?
46 A Are you down there?"
47 A A pair of shoes appears at the lip of the opening, then a pair of legs, and AGNES (30s, red umbrella, wet laughing eyes) squeezes through and drops to the floor with a grunt.
48 D AGNES: I told you the chute was big enough.
49 D CASPIAN: It's a book drop, Agnes.
50 D AGNES: It was a very comfortable book drop.
51 A ¶ She notices the two older people.
52 A Straightens her coat.
53 A Holds out a hand.
54 D AGNES [CONT'D]: Good evening. I'm so sorry about the intrusion.
55 D LEOPOLD: Not at all.
56 D WINIFRED: It's been a slow night.
57 D AGNES: We'll just collect his note and be going.
58 D WINIFRED: Of course.
59 A ¶ She hands over the paper.
60 A Caspian takes it, unfolds it, reads it, and offers it to Agnes.
61 A She laughs, kisses his cheek, and tucks it into her pocket.
62 A ¶ A third figure appears at the door, MURIEL (70s, librarian's brooch, stern as a verdict).
63 A The two lovers freeze.
64 A Leopold and Winifred straighten up.
65 D MURIEL: It is eleven o'clock. This room is closed.
66 D CASPIAN: We were just leaving.
67 D MURIEL: By the door. Not the chute.
68 D AGNES: Yes, ma'am.
69 A ¶ They file out.
70 A Muriel watches them go.
71 A When they are gone, she looks at the note-less table, at Winifred's guilty face, at Leopold's studied innocence.
72 D MURIEL: Which of you encouraged them?
73 D LEOPOLD: I shelve. I don't encourage.
74 D WINIFRED: Neither do I.
75 A ¶ Muriel nods.
76 A Picks up the Dostoevsky.
77 A Opens it.
78 A Takes out a second note.
79 A Reads it.
80 A Her lips twitch.
81 D MURIEL: Next Tuesday, then.

### SCENE s01005 | INT. VICTORIAN CONSERVATORY - NIGHT
Detected names (may be incomplete or contain aliases): CRABTREE, THADDEUS, PHOEBE, CAPTAIN LOWRY
* 1 A ¶ A glass hothouse thick with tropical ferns, weeping under a gaslit chandelier.
* 2 A In its center, a round table draped in black velvet and ringed with four chairs.
* 3 A The air tastes of orchids and old rain.
4 A ¶ MRS. CRABTREE (60s, widow's weeds, a face like a locked door) presides at the head of the table.
5 A THADDEUS (30s, frock coat, spectacles, a pamphlet on spiritualism rolled in his fist) sits at her right.
6 A PHOEBE (20s, white lace, pale as milk, hands folded) sits at her left.
7 A CAPTAIN LOWRY (50s, red-faced, medals on his tunic, arms folded in contempt) sits opposite.
8 D MRS. CRABTREE: Join hands. And do try to behave, Captain.
9 D CAPTAIN LOWRY: I am the soul of decorum, madam.
10 D PHOEBE: Is it true they come when called?
11 D THADDEUS: Only if they have unfinished business.
12 D CAPTAIN LOWRY: Then they'll be here by the dozen. The dead always have unfinished business.
13 D MRS. CRABTREE: Silence.
14 A ¶ They clasp hands.
* 15 A The chandelier dims.
* 16 A The ferns sway though no wind moves.
* 17 A Somewhere in the glass, a pane creaks.
18 D MRS. CRABTREE [CONT'D]: Spirits of this house, we call upon you. If you are present, give us a sign.
* 19 A ¶ A silence.
* 20 A A drip.
* 21 A Another.
22 D THADDEUS (whispering): Nothing.
23 D CAPTAIN LOWRY: Of course nothing.
24 D PHOEBE: Hush. Listen.
25 D MRS. CRABTREE: We call upon Edmund Crabtree, my beloved husband.
26 D CAPTAIN LOWRY: Your late husband was a bore, madam, and I say that as one who attended his funeral.
27 D MRS. CRABTREE: Captain, I will have you removed.
28 D CAPTAIN LOWRY: By whom?
* 29 A ¶ A tap on the table.
* 30 A A second.
* 31 A A third.
32 A The four of them freeze.
* 33 A The candle flames bend flat.
* 34 A The temperature drops; their breath fogs.
35 D PHOEBE (barely audible): Who is it?
* 36 A ¶ The table lifts an inch.
* 37 A Settles.
* 38 A Lifts again.
39 A Thaddeus lets go of the hands to steady it, and Mrs. Crabtree slaps him across the knuckles.
40 D MRS. CRABTREE: Do not break the circle!
41 D THADDEUS: It's moving!
42 D CAPTAIN LOWRY: It's a trick, madam. It's always a trick.
43 A ¶ A voice, wheezing, not any of theirs, slithers from beneath the velvet.
44 D CAPTAIN LOWRY [O.S.]: Hortensia...
45 D MRS. CRABTREE: Edmund?
46 A ¶ Phoebe screams.
47 A Thaddeus leaps back.
48 A Mrs. Crabtree sits perfectly rigid, her face as pale as the lace on Phoebe's collar.
49 A Then the velvet lifts, and the Captain, still seated, lets the cloth fall from his lap.
50 A His boot withdraws from the table's leg.
51 A He coughs into his fist, and the wheeze is plainly his own.
52 D PHOEBE: That was you!
53 D CAPTAIN LOWRY: A bit of fun, miss.
54 A ¶ Mrs. Crabtree rises to her full height.
55 D MRS. CRABTREE: Captain Lowry. You are no longer welcome in my home.
56 D CAPTAIN LOWRY: It was only a joke.
57 D MRS. CRABTREE: So was Edmund.

### SCENE s01006 | INT. COURTROOM - CONVERTED RIVER FERRY - DAY
Detected names (may be incomplete or contain aliases): JUDGE FAIRWEATHER, ROSAMUND, TIMOTHY, BAILIFF DOYLE
* 1 A ¶ A courtroom bolted into the old car deck of a retired ferry.
* 2 A Porthole windows.
* 3 A Brass railings.
* 4 A The floor rolls faintly with the current.
* 5 A The gallery is empty save for gulls on the sills.
6 A ¶ JUDGE FAIRWEATHER (70s, red robe, half-moon glasses) presides from a raised platform.
7 A ROSAMUND (40s, prosecutor, charcoal suit) stands at the lectern with a stack of exhibits.
8 A TIMOTHY (30s, defense counsel, rumpled tie) sits next to an empty chair.
9 A BAILIFF DOYLE (50s, wide shoulders, mustache) leans by the door, bored.
10 D JUDGE FAIRWEATHER: The court will resume.
11 D ROSAMUND: Your Honor, the state calls its final witness.
12 D TIMOTHY: Objection.
13 D JUDGE FAIRWEATHER: Overruled, Mr. Timothy.
14 D TIMOTHY: It's Mr. Beasley, Your Honor. Timothy is my first name.
15 D JUDGE FAIRWEATHER: Sit down, Timothy.
16 A ¶ He sits.
17 A Rosamund shuffles her papers, then sets them down.
18 D ROSAMUND: The state calls the defendant's mother.
19 D TIMOTHY: She is not here.
20 D ROSAMUND: She was subpoenaed.
21 D BAILIFF DOYLE: She went to the galley.
22 D JUDGE FAIRWEATHER: Bailiff, fetch her.
23 A ¶ He lumbers off.
* 24 A The ferry lurches.
* 25 A Papers slide across the table.
26 A Timothy catches his water glass.
27 A Rosamund catches the Judge's gavel.
28 A They exchange a long look, and for a moment both of them smile, then they remember where they are.
29 D JUDGE FAIRWEATHER [CONT'D]: Counsel, would you care to settle?
30 D ROSAMUND: We're beyond that, Your Honor.
31 D TIMOTHY: We were beyond that at the first harbor.
32 D JUDGE FAIRWEATHER: Then the court is adjourned until we dock.
* 33 A ¶ The gavel falls.
* 34 A A gull flaps off the sill.
35 A In the galley, a faint cheer rises, and everyone in the courtroom pretends not to hear.

### SCENE s01007 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): ALOYSIUS, BRYONY, CASSIUS, DELPHINE, EZRA
* 1 A ¶ A domed theater gone to ruin.
* 2 A Rows of broken chairs fan toward a hulking star projector.
* 3 A Moonlight slips through a crack in the dome.
* 4 A Dust drifts like constellations.
5 A ¶ ALOYSIUS (60s, caretaker's coat, keys on his belt) leads the way with a flashlight.
6 A BRYONY (30s, journalist, notebook) follows.
7 A CASSIUS (20s, her photographer, three cameras round his neck) hangs back.
8 A DELPHINE (40s, astronomer, a thick scarf) runs a hand along the projector.
9 A EZRA (teen, hoodie, headphones, the caretaker's grandson) sits in the front row with his feet on the seat in front.
10 D ALOYSIUS: The last show was in eighty-nine. They forgot to turn the stars off.
11 D BRYONY: Forgot?
12 D ALOYSIUS: Or didn't want to.
13 D CASSIUS: I can't see anything.
14 D DELPHINE: That's the point.
15 A ¶ She flips a switch on the projector.
* 16 A Nothing.
* 17 A Another.
* 18 A A hum builds.
* 19 A The dome shudders.
* 20 A A smear of light climbs the plaster.
21 D EZRA (without looking up): It's just the old bulb.
22 D ALOYSIUS: It's the stars.
* 23 A ¶ The light resolves into a tangle of pinpoints, swirling in the wrong places.
24 A Delphine tilts her head, frowning.
* 25 A The constellations are wrong.
* 26 A Orion is facing the wrong way, and a seventh star burns where there should be six.
27 D BRYONY: Is that supposed to happen?
28 D DELPHINE: No.
* 29 A ¶ The seventh star pulses.
30 A Cassius lifts a camera and the flash blinds them.
31 A When their eyes recover, Ezra is standing in the aisle, staring up, headphones around his neck, mouth slightly open.
32 D ALOYSIUS: Ezra.
33 D EZRA: It knows my name.
34 D ALOYSIUS: What did you say?
35 D EZRA: It's whispering.
36 A ¶ Delphine rushes to the projector and kills the power.
* 37 A The dome goes black.
* 38 A A single hiss ripples through the room, and then nothing.
* 39 A In the dark, Cassius's camera clicks once on its own.

### SCENE s01008 | INT. CHEESE CAVE - DAWN
Detected names (may be incomplete or contain aliases): GASTON, HELOISE, IGNATIUS, JOSEPHINE
* 1 A ¶ A cool limestone vault lined with shelves of wheels, rinds blooming blue.
* 2 A A single dripping spigot.
* 3 A The air is thick with ammonia and earth.
4 A ¶ GASTON (60s, rubber apron) crouches over an overturned wheel.
5 A HELOISE (30s, health inspector, clipboard) holds a penlight.
6 A IGNATIUS (50s, owner's cousin, silk scarf) hovers.
7 A JOSEPHINE (20s, apprentice, smock) fills a pail.
8 A ¶ Gaston turns the wheel over.
* 9 A A man's wristwatch is baked into the rind.
10 D HELOISE: Is that normal?
11 D GASTON: Not for this cheese.
12 D IGNATIUS: Heloise, we should call the owner.
13 D HELOISE: The owner is missing.
14 A ¶ Ignatius flinches.
15 A Josephine sets the pail down very, very carefully.
16 D JOSEPHINE: I ought to wash my hands.
17 D HELOISE: Stay where you are.
18 A ¶ Josephine laughs, too high, too quick.
19 A Gaston stands.
20 A Sniffs the air.
21 A His eyes go to the far wall, to the oldest shelf, the one nobody touches.
22 D GASTON: Ignatius. When did your cousin last visit?
23 D IGNATIUS: Tuesday.
24 D GASTON: And you were here.
25 D IGNATIUS: No. I mean yes. I mean I was only passing.
26 A ¶ Heloise shines her light on the old shelf.
* 27 A A boot protrudes from the rind of the largest wheel.

### SCENE s01009 | INT. HIGH SCHOOL ROOFTOP GREENHOUSE - DAWN
Detected names (may be incomplete or contain aliases): TESSA
* 1 A ¶ A glass lean-to bolted to the school's flat roof.
* 2 A Trays of tomato seedlings under grow-lights.
* 3 A Condensation beads the panes.
* 4 A A broken radio sits unplugged on a workbench.
* 5 A Nobody is here yet.
* 6 A ¶ A key rattles in the lock.
* 7 A The door swings open.
8 A TESSA (17, thrift-store coat, messy braid, a backpack heavy with textbooks) steps in, shoulders hunched, and shuts out the wind.
9 A ¶ She drops her bag.
10 A Cups her hands and breathes into them.
11 A Crosses to the seedlings and touches one leaf, gently, like a held breath.
12 A ¶ She pulls out her phone.
13 A Dials.
14 A Puts it to her ear.
* 15 A It rings once, twice, three times.
* 16 A Click.
17 D TESSA [V.O.] (recorded, cheerful, younger): Hi, you've reached Tessa. I'm probably playing outside. Leave a message and I'll call you back!
18 A ¶ She closes her eyes.
19 A Holds the phone away.
20 A Listens to her own voice, tinny and small.
21 A She smiles, then stops smiling.
22 D TESSA (to the plants): Four years ago. I was eleven. I thought I'd be famous.
23 A ¶ She hangs up.
24 A Dials again.
* 25 A The recording plays again.
26 A She doesn't smile this time.
27 A When it ends, she listens to the beep, mouth open, as if there might be something to say, and says nothing.
* 28 A ¶ A sparrow lands on the glass above her.
29 A She looks up.
* 30 A It sits there, puffed against the cold, watching.
31 A ¶ She sets the phone on the bench.
32 A Picks up a watering can.
33 A Fills it at the spigot.
34 A Tilts it over the seedlings.
* 35 A Water patters in the quiet.
* 36 A Outside, the first bus shudders into the lot below, and the world beyond the glass begins its ordinary morning.
37 D TESSA [CONT'D]: Okay. Okay. Let's go.
