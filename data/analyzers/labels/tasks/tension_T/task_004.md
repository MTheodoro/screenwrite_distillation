You are an annotator labeling screenplay scenes for a dataset.

Rate dramatic tension. Below are scenes split into numbered beats.

1. For every scene, give one score 0-100 per beat (same order).
2. Then answer each cross-scene comparison: which beat is MORE tense, "a", "b" or "tie".

Tension = what a reader feels: stakes, conflict, threat, urgency, suspense. Loud or violent is not automatically
tense; a quiet threat can be very tense. Absolute anchors: 0-15 calm/mundane, 15-35 mild friction or unease,
35-60 clear conflict or suspense, 60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death /
climactic moment.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/tension_T/group_006.json with the Write tool:
{"scores": {"<scene_id>": [..], ...}, "pairs": {"<pair id>": "a"|"b"|"tie", ...}}
Valid JSON only. Reply only with "done".

## Scenes

### s00624
0. Green light through drowned stained glass. / Air pockets shiver beneath the vaulted ceiling. / A rope ladder hangs into the dark. / KESTREL VANE, 30s, hooded, perches on a pew back, a lantern of glowing moss in her lap. / Four figures wade in from the nave. / MORWENNA ASH, 50s, the Reeve, wears the keys of a dead town on her belt. / Behind her, OLD CINDER, 70s, leans on a staff of coral. / HOLLIS PRYCE, 20s, shield-bearer, carries nothing. / And the STRANGER, hooded, no age, walks in last and drips nothing.
1. MORWENNA: You're late. / KESTREL: Tide's late. / Cinder lowers himself onto a pew. / Hollis stays standing, jaw working.
2. STRANGER: Is this the place where the oath was broken? / KESTREL: Depends who's asking.
3. The Stranger crosses to the altar. / A single bell rope hangs there, wet and green. / He lifts a hand toward it.
4. Hollis steps in his path. / HOLLIS: Don't. / STRANGER: You flinch like a man who has already rung it. / Hollis says nothing. / His hand drifts to the empty place where a sword should be.
5. CINDER: Let him, Hollis. / HOLLIS: Cinder -- / CINDER: Let. Him.
6. Hollis steps aside. / The Stranger takes the rope. / He does not pull.
7. MORWENNA: You were named at the drowning. I remember your face. / STRANGER: Then you remember I was kind to you. / Morwenna's hand closes around her keys until her knuckles go white.
8. KESTREL: Say your name, and I'll let you ring it.
9. The Stranger lowers his hood. / A lean face, old scars like river-maps. / He smiles at her the way one smiles at a debt.
10. STRANGER: Ambrose Thale. / KESTREL: Good. / AMBROSE: And now you must all stand very still.
11. He pulls the rope. / No sound. / The water in the nave goes flat as glass. / Every flame in the room leans toward the bell, and then, together, all of them go out, and in the dark Hollis exhales for the first time in a year. / A long beat. / A single drip, somewhere.
12. Cinder laughs, soft and cracked. / CINDER: Well. That's that.
13. Kestrel relights the lantern. / Morwenna is already unbuckling her keys.

### s00305
0. Flour dust. / Steel tables. / Racks of dough rising under damp cloths. / A radio plays something soft and unidentifiable. / MR. TEODORICO ABARA-LINDBERG (60s, apron, gentle) kneads. / His assistant, PENELOPE "PENNY" NAKASHIMA-OKOYE (20s, hairnet), oils pans. / At the doorway, a STRANGER in a rain-soaked coat stands with a baguette-shaped package. / Behind her, hiding behind the oven door, is a small, wide-eyed apprentice, QUINCY ADEYEMI-HALVORSEN (12, flour on his nose).
1. STRANGER: Good morning. Are you the baker? / TEODORICO: Everyone here is the baker. / STRANGER: I mean the baker who makes the seeded rye. / TEODORICO: Ah. That's Penny. / PENNY: That's me.
2. STRANGER: Then I owe you an apology. / PENNY: For what?
3. STRANGER: I left a one-star review. / PENNY: I remember. / STRANGER: I was in a mood. / PENNY: You called it "a brick with ambitions." / STRANGER: It was a very good brick. / Teodorico chuckles into the dough.
4. STRANGER: My name is Perpetua. / PERPETUA: Perpetua Chen-Oyelowo. I'm the reviewer. / PENNY: We know. You've been in the paper.
5. PERPETUA: Then you know I'm contractually obliged to review again. / TEODORICO: Of course. / PERPETUA: I came to taste it. Before I write.
6. Quincy peeks around the oven. / QUINCY: It's still rising. / PERPETUA: Then I'll wait.
7. TEODORICO: Penny, make her tea. / PENNY: I'm making her toast first.
8. She slides a loaf from the rack and slices it. / Perpetua sits on an overturned crate. / Quincy tiptoes to sit beside her. / The radio hums. / Nobody, for a while, says anything.

### s00358
0. A canvas-roofed bakery tent in a muddy field. / Brick ovens glow. / Flour dusts the air. / Beyond the tent flap, a line of tanks sleeps under camouflage netting. / It is quiet, too quiet.
1. SGT. MOLLY HENDERSON, forties, a head baker with floury forearms, kneads dough at a steel table, humming. / CPL. / REUBEN ALVAREZ, twenties, shapes loaves beside her. / PVT. / KIM SOO-JIN, twenty, feeds the oven with split logs. / CAPT. ISAAC BERNSTEIN, thirties, the camp quartermaster, leans on a crate eating a crust. / PVT. / WILLIAM "BILLY" TATUM, nineteen, sweeps flour into a pan.
2. Molly flips the dough, slaps it on the table, and calls out the count while Reuben rolls two loaves onto a peel and slides them into the oven, Soo-Jin ladling water over the bricks to make steam, and Isaac tears his crust in half and offers it to Billy, who takes it and chews with his broom in his other hand.
3. MOLLY: Forty loaves by six. / REUBEN: Thirty-eight, Sarge. Two burned. / MOLLY: Then forty by six-fifteen.
4. ISAAC: It's a fine morning for it. / MOLLY: It's a fine morning, Captain.
5. A shadow passes over the tent flap. / They don't notice. / The humming resumes. / Billy sweeps. / Soo-Jin stokes the fire.
6. A GENERAL'S AIDE, thirties, in a crisp uniform, lifts the flap and steps in, carrying a telegram. / He stands, scanning the faces. / Molly looks up. / Her hands go still.
7. AIDE: Sergeant Henderson? / MOLLY: Speaking.
8. AIDE: The Captain is to report to Command at once. / ISAAC: What for?
9. AIDE: The convoy's been turned back. The bridge at Sainte-Marie is gone.
10. The tent goes quiet. / Reuben sets down the peel. / Soo-Jin drops a log. / Billy lets the broom fall. / Isaac swallows the last of his crust. / Molly wipes her hands on her apron one finger at a time.
11. MOLLY: Nobody panic. Forty loaves by six. / ISAAC: Molly. / MOLLY: Captain, men fight on bread.
12. He nods. / He turns and follows the Aide out. / The flap falls shut.
13. Reuben picks up the peel. / Soo-Jin picks up a log. / Billy picks up the broom.
14. Molly resumes kneading, slowly, harder than before, and the humming does not come back.

### s00670
0. Glass eyes glitter from every shelf: owls, a badger, a stuffed marlin mounted over the door. / Under a green lamp, a poker game is winding down.
1. OTTO BRANDVOLD, 60s, round and genial, shuffles with slow pride. / Across from him sits SILAS KEANE, 40s, lean, in a good suit gone shiny at the elbows. / TOM PELLETIER, 50s, a bruiser in a too-small vest, stacks his chips like bricks. / MAUDE ARCHIBALD, 50s, silver hair, pearl earrings, knits between hands. / RUBY LAMB, 20s, sharp-eyed, deals herself a cigarette and nothing else.
2. OTTO: Gentlemen. Ladies. A toast before the last hand. To friends who stay friends. / He pours amber into five small glasses. / TOM: Never turn down Otto's brandy.
3. MAUDE: Dear, you're not drinking. / RUBY: I'm pacing myself.
4. Silas lifts his glass, studies it against the lamp, sets it down untouched. / SILAS: Nobody pours that generous for free. / OTTO: Something wrong, Silas? / SILAS: Just admiring the craftsmanship. Of the glass.
5. Tom drains his and thumps the table. / Maude's needles click. / The marlin's shadow crawls across the felt.
6. OTTO: Last hand. Everybody in? / ALL: In.
7. Otto deals. / Tom sways, blinks hard, and tries to speak. / Nothing comes. / He slides sideways off his chair and lands among the sawdust.
8. Maude's needles stop. / Ruby stands, calm, and pockets the cards.
9. RUBY: You didn't drink it. / SILAS: Neither did you.
10. OTTO: Two out of five. Not bad for a Tuesday.
11. The back door opens. / FENWICK, 30s, rain on his shoulders, a badge in his raised hand and a revolver in the other. / FENWICK: Nobody touch the glasses. Otto, I've been waiting a year for this.
12. Otto smiles and sets down the bottle. / OTTO: So has Maude.
13. Maude lays her knitting aside. / Beneath it, a small pistol.

### s00426
0. A dusty hillside funicular terminal. / Two wooden cars rest on rails that slope up into a tunnel. / Sunlight drips through slatted windows. / A card table is set up between the cars, covered in blueprints, a thermos, and a plate of lemon biscuits. / FELIX "THE CLOCK" BRANDTNER (60s, vest, pocket watch) pours tea. / BIANCA MORETTI (30s, tool belt, calm eyes) sketches on a napkin. / Big DESMOND "DEZ" OKONKWO (40s, forearms like cables) polishes a wrench. / Young TOBIAS PIKE (20s, nervous, tall) clutches a thermos. / And RENATA "RENNY" SILVA (50s, reading glasses, ledger) turns pages.
1. FELIX: Biscuit, Bianca?
2. BIANCA: Not now, Felix. The cable tension is wrong. / DEZ: It's been wrong since 1962, Bee. / RENNY: And the vault is exactly where it's been since 1962, Dez.
3. TOBIAS: Is it, though? I looked at the survey and the vault is on the-- / FELIX: Tobias, my boy, finish your tea. / TOBIAS: I'm just saying, Clock, the survey shows-- / BIANCA: --the east wall, Toby, I know. I drew it. / DEZ: So we go up the east wall.
4. RENNY: We go up Thursday. Nobody does anything today. / FELIX: Splendid. Renny, you keep the ledger. / RENNY: I always keep the ledger, Felix.
5. DEZ: Bee, pass me the biscuits. / BIANCA: Dez, you have a wrench in your hand. / DEZ: I have two hands.
6. Tobias, finally, takes a biscuit. / Everyone watches him chew. / He nods.
7. TOBIAS: Thursday. / FELIX: Thursday.

### s00692
0. Concrete. / Pallets. / Sodium lights buzzing. / A forklift idles.
1. AGENT FOLASADE ADEBAYO, 30s, FBI jacket under a rain slicker, moves between shipping crates with her weapon low. / Behind her, REUBEN MARSH, 50s, local PD, wheezes, flashlight in hand.
2. REUBEN: Fola, wait. / FOLA: Keep your voice down. / REUBEN: Nobody's here.
3. FOLA: Somebody dropped this. / She holds up a ring of keys. / Reuben shines the light on them.
4. A STRANGER, 40s, in a dark wool coat, stands motionless at the end of the aisle. / Both swing their guns toward him. / STRANGER: Easy. Easy.
5. FOLA: Hands where I can see them. / STRANGER: They're empty. / REUBEN: Name. / STRANGER: You first.
6. Fola takes a step forward. / The Stranger smiles.
7. STRANGER: Agent Adebayo. You look tired. / FOLA: How do you know my name? / STRANGER: I've read your reports. / REUBEN: What reports? / FOLA: Reuben, don't.
8. STRANGER: Detective Marsh. You should ask her about Lagos. / Reuben's light wavers on Fola's face.
9. REUBEN: What's in Lagos? / FOLA: Nothing. He's playing us. / STRANGER: Or I'm the only honest one here.
10. IMELDA DRAY, 50s, steps out of the shadow behind Reuben, a silenced pistol pressed to the back of his neck. / She is in a janitor's smock, calm as a clerk. / IMELDA: Drop it, Detective.
11. Reuben drops the flashlight. / It rolls.
12. FOLA: Imelda. Walk away. / IMELDA: I can't. Not until I get the ledger. / FOLA: I don't have it.
13. IMELDA: No. He does.
14. All three look at the Stranger. / He taps his coat. / STRANGER: My name is Nikolai Orlov. I'd like to hand it over, if you'll all stop pointing things at me.
15. NIKOLAI: The ledger names every one of you. / REUBEN: Fola, what does he mean every one of us?
16. FOLA: It means somebody in this room is on the take. / IMELDA: Or two. / NIKOLAI: Or three.
17. Silence. / Rain on the roof.
18. REUBEN: I didn't do anything. / NIKOLAI: Not yet.
19. Imelda cocks the pistol.

### s00535
0. A hemisphere of white plaster, the ceiling curved like the inside of an egg. / In the center, a Zeiss star projector crouches on its pedestal like a patient insect. / Rows of reclined seats fan out below, empty, dark. / ZELDA NAKASHIMA-HOLT, 40s, black coveralls, a tool roll slung across her shoulder, stands at the base of the projector with a micrometer and a face like a surgeon's. / MONTGOMERY "MONTY" ABERNATHY, 60s, a former curator in a cardigan, shuffles up the aisle carrying a lantern and a clipboard he has no use for. / RAJESH SUBRAMANIAN, 30s, a hacker with a backpack of laptops, kneels beside a panel in the wall. / SABINE DELACROIX-ODUYA, 30s, a safecracker in a pencil skirt, taps along a seam in the plaster with a stethoscope. / CRISPIN, 12, Monty's grandson, in a school blazer, sits in the front row with his chin on his knees and watches them all.
1. ZELDA: Raj. Status. / RAJESH: Motion sensors off. Cameras are looping the last four minutes of Tuesday. / ZELDA: Monty? / MONTY: It's in the cupola, Zelda. Behind the Pleiades. The Director insisted on that. A little theatre. / SABINE: Of course he did.
2. She presses her ear to the plaster. / Smiles. / SABINE: Found it. Seam runs vertical, eighteen inches off the Southern Cross.
3. Zelda crosses to the projector. / Checks a gauge. / Wipes dust off the lens with her sleeve. / The star field on the dome flickers once. / CRISPIN: Grandpa, is it supposed to do that? / MONTY: God help us, no.
4. Rajesh freezes. / A single red LED on his laptop blinks. / Then another. / Then every screen at once. / RAJESH: Somebody just opened a remote session. / ZELDA: Whose? / RAJESH: Mine.
5. He slams the lid. / The dome flares. / Stars wheel, sweep, collapse into a single white point, and then Monty's own recorded voice, thirty years younger, booms through the speakers like the voice of God: / MONTY: Welcome to the Meridian Planetarium. Tonight's program is: THE NIGHT SKY OVER AN UNSUSPECTING CITY.
6. Sabine drops the stethoscope. / Monty drops the lantern. / The lantern rolls across the aisle and goes out. / The room falls to starlight.
7. ZELDA: Rajesh, kill it. / RAJESH: I'm trying! / SABINE: Is this part of the plan? / MONTY: It's the Director's idea of a joke.
8. Crispin raises his hand like a good student. / CRISPIN: I think I know where the switch is. / All four adults turn. / The boy gets up, walks to a wall panel behind the front row, lifts a flap that none of them noticed, and flips a lever.
9. The dome fades to black. / The voice dies. / A long beat of silence.
10. Then the projector begins to turn on its own. / A new star field spins up. / It is not the northern hemisphere. / It is a drawing: a long line of gold pinpricks tracing the outline of a vault door.
11. MONTY: Oh, Henry. You clever old man. / SABINE: He mapped it. / ZELDA: He mapped it on the ceiling.
12. Rajesh scrambles for his camera. / Sabine runs for the cupola ladder. / Zelda grabs Monty by the arm and hauls him after her.
13. Crispin lingers in the aisle, face turned up, lit gold. / CRISPIN: Grandpa. That one's you. / He points at a single star, slightly brighter than the rest. / MONTY: So it is.
14. Footsteps in the corridor outside. / Real ones. / Multiple. / Heavy shoes on marble. / A radio crackles.
15. Zelda and Sabine and Rajesh freeze mid-stride, then scatter: Zelda behind the projector, Sabine flat against the cupola wall, Rajesh down between two rows of seats with a laptop clutched to his chest.
16. Monty stands in the middle of the aisle, alone and lit with gold, and does the only brave thing he has done in thirty years. / He turns toward the door and smiles. / MONTY: Gentlemen! You're just in time for the show.

### s00285
0. A cramped concrete box above the snack bar. / Two projectors, dusty. / A shelf of film cans. / One small window overlooking a lot of weeds and a blank screen leaning in the dark. / Six people crowd the booth. / Rain drums the roof. / A lantern sits on an overturned can, throwing their shadows huge. / DOCTOR MARGUERITE OYELARAN-STACK (50s, medical bag, cardigan) kneels by a figure lying on the floor under a coat. / The coat covers the face of PATRICK "PADDY" GALLAGHER-NWOSU (30s, projectionist), who is not moving. / SHERIFF HOLCOMB JABLONSKI (60s, rain slicker, flashlight) stands at the door, back to the wall, watching the stairs. / TWO TEENAGERS huddle by the window. / They are JUNIPER PARK-MBEKI (16, letterman jacket) and her brother SAUL (17, headphones around his neck, shaking). / By the film shelf, an old woman, MRS. ODETTE ABERNATHY-VOSS (70s, shawl, a thermos clutched like a talisman).
1. MARGUERITE: He's gone. / SAUL: He can't be. / JUNIPER: Saul, don't. / MRS. ABERNATHY: He was fine at the second reel.
2. HOLCOMB: Everybody quiet. / They fall quiet. / Rain. / And below the rain, a slow scrape on the stairs. / Something dragging.
3. SAUL: That's him. / MARGUERITE: He's right there, Saul. / SAUL: Then who's on the stairs? / JUNIPER: Oh God. / MRS. ABERNATHY: Don't say His name. Not in here.
4. HOLCOMB: Lock the door. / JUNIPER: There's no lock! / SAUL: Use the can! Use a film can! / MARGUERITE: Hold on, hold on, everyone-- / HOLCOMB: Get back from the door! / SAUL: It's coming up! / JUNIPER: Saul, shut UP!
5. MRS. ABERNATHY: It wants the projector! / They all stop. / Look at her. / MRS. ABERNATHY: It always wants the projector.
6. The scrape reaches the top of the stairs. / Stops. / The lantern flame leans toward the door, as if drawn. / HOLCOMB: Nothing there. Nothing there.
7. Something knocks. / Three times. / Soft. / Almost polite. / SAUL: Don't open it. / MARGUERITE: Nobody's opening it.
8. The door handle turns. / JUNIPER: It's locked, right? Tell me it's locked. / HOLCOMB: There's no lock, I said!
9. The door swings in. / Empty landing. / Wet footprints on the concrete, leading in.
10. The footprints lead to Paddy's body. / The coat slides slowly off his face. / MARGUERITE: No pulse. I checked. I checked.
11. Paddy's eyes open. / White. / Wet. / He looks at the projectors. / PADDY: Roll it.
12. Every projector in the booth clatters to life by itself. / Light erupts against the blank screen outside, and a figure of the sheriff, thirty feet tall, begins to move across it.
13. Holcomb looks over his shoulder at the window. / At himself on the screen. / He raises his flashlight. / HOLCOMB: That's not me.
14. On the screen, the giant Holcomb turns and looks into the booth.

### s00829
0. White alkali dust runs to the horizon in every direction. / The telegraph office is a single plank room squatting on stilts above the salt, its shadow long and blue. / A wire hums overhead like something thinking.
1. SILAS CROWDER, sixty, sheriff, with a mustache gone the color of ash, leans on the porch rail with a tin cup. / MAUDE TALLCHIEF, thirties, the telegraph operator, stands at the window in a man's duster, one hand on the sounder key.
2. SILAS: Maude, how long since the line went quiet? / MAUDE: Since midnight, Silas. Whoever cut it did it clean.
3. Beneath the porch, EARLY BRANNIGAN, nineteen, deputy, and still wearing his Sunday hat, sits cross-legged on the ground sharpening a pencil with a pocketknife. / He glances up at the sheriff with the hopeful eyes of a dog. / EARLY: Want me to ride out and find the break, Sheriff? / SILAS: Not alone, Early.
4. A voice rolls in from beyond the last fence post, rich and unhurried, a preacher's voice carried on a cold wind. / ABEL: Sheriff Crowder! I've come about the wire.
5. Silas sets down his cup. / Maude draws a revolver from the folds of her coat. / Early stands so quickly his pencil snaps.
6. SILAS: Abel Whitcomb. Last I heard you were burying folks in Dry Fork. / ABEL: Buried a few. Marry a few. This morning I'm doing neither.
7. A silhouette appears at the edge of the flat: a man in black walking with great patience, a coil of copper wire over one shoulder. / MAUDE: That's my wire. / ABEL: It was lying in the road, Miss Tallchief. I figured someone was missing it.
8. Early lets out a laugh, brittle and unsure, and Maude glares at him. / Silas steps down off the porch into the dust.
9. SILAS: Early. Put your hat straight. / EARLY: Yes, Sheriff.
10. SILAS: Now go inside and ask Maude to send a message. / MAUDE: Silas, the line is dead. / SILAS: Then we'll send it the old way.
11. He raises his hand to the sky. / The wire above them sings once, a high clean note, and falls silent.

### s00219
0. Shelves of guitars, clocks, and cameras. / A caged bulb. / A safe, door ajar. / ROSALIND "ROZ" VANTERPOOL, 40s, in a trench coat, holds a gun on VINCENT "VINNIE" OKAFOR, 50s, behind a desk. / He raises both hands, a cigar still smoldering between his fingers.
1. ROZ: Open it. / VINNIE: It's open. / ROZ: All the way. / VINNIE: It's a good safe. It doesn't go all the way. / ROZ: Vinnie. / VINNIE: Roz.
2. They speak together, then both stop. / Roz tightens her grip. / Vinnie ashes the cigar on the desk. / VINNIE: You hired me, remember? / ROZ: I remember.
3. She steps forward and slams the safe door wide. / Inside: a single sheet of paper. / She grabs it. / He grabs her wrist. / They struggle, knocking a lamp off the desk. / The bulb swings. / The gun goes off, shattering a clock.
4. They freeze. / ROZ: This is a receipt. / VINNIE: For what you paid me. / ROZ: That's all there is? / VINNIE: That's all there ever was.
5. She lowers the gun. / The clock keeps ticking, in pieces.

### s00973
0. Hexagonal windows hum with ten thousand bees. / WYNFRED, an old beekeeper in a veil of moth silk, pours smoke into a brass censer. / SABLE, a young storm-witch with wet hair, sits on the hive-table. / LUCAN, a knight with a cracked pauldron, stands by the stairs.
1. WYNFRED: You came a long way for honey.
2. LUCAN: I came for the queen. / SABLE: He means the hive's queen. Not the crown. / WYNFRED: Does he? / LUCAN: I mean what I said. / SABLE: You mean what you were told to say.
3. LUCAN: The king is dying. / WYNFRED: Kings do. / LUCAN: His physician says only royal jelly can hold the fever.
4. SABLE: And the physician is lying. / LUCAN: You don't know that. / SABLE: I know the smell of a man who wants a hive burned. / WYNFRED: Quiet, child. Let him say it.
5. LUCAN: I was told to take the queen. Alive if she'd come. Dead if not. / WYNFRED: And you believed it. / LUCAN: I believed the king. / SABLE: The king hasn't spoken in a month.
6. LUCAN: Then who sent me? / WYNFRED: Ask the hive.
7. The humming deepens. / Wynfred sets down the censer.
8. LUCAN: I won't kill a queen of bees. / SABLE: Then what will you do? / LUCAN: I'll warn the king. / WYNFRED: He can't hear you.
9. LUCAN: Then I'll make the palace hear! / SABLE: Then I will! / LUCAN: Then I will!
10. WYNFRED: Both of you, stop. / LUCAN: He is my king. / SABLE: And this is my home.
11. WYNFRED: Then go together. Fire answers fire. Bees answer storm.

### s00073
0. A gambling hall converted into a temporary courtroom after the flood. / Slot machines are draped in canvas, and brown water stains climb the walls. / A judge's bench has been built from a roulette table.
1. CLEMENTINE ASHWORTH, the defense attorney, stands at a card table with her hands folded. / She is sharp, silver-haired, and never hurried. / Across from her, MAXWELL DRUMM, the prosecutor, flips through a damp stack of papers. / He is young and eager, and his collar is two sizes too big. / At the roulette bench, JUDGE ISADORA FENWICK adjusts her glasses and glares down at both of them. / Near the door, BAILIFF NORBERT KWASNIEWSKI shifts his weight, his hand resting on a holstered flashlight.
2. JUDGE FENWICK: Mr. Drumm. You were saying. / He clears his throat and rises, dropping a page. / He stoops, recovers it, and comes up red.
3. MAXWELL: Your Honor, the State maintains the defendant knowingly opened the sluice gates. / CLEMENTINE: Objection. He has not yet shown a single witness who saw her touch them. / JUDGE FENWICK: Sustained. Move along.
4. Maxwell glances at his notes, then at the bailiff, who gives him nothing. / He swallows. / MAXWELL: Then I call the night watchman.
5. Norbert opens the door. / No one is there. / He steps out, comes back, and shrugs. / NORBERT: He ain't come, ma'am. / JUDGE FENWICK: Of course he hasn't.
6. Clementine rises slowly, smoothing her skirt. / She walks to the center of the room and lets the silence stand. / CLEMENTINE: Your Honor, the State's case is built on a man who is not here, a gate no one saw opened, and a river that has a long habit of rising. / Maxwell opens his mouth, and she raises a hand. / He closes it. / CLEMENTINE: I move to dismiss.
7. The judge studies her over her glasses, then looks at the stained ceiling, the draped slots, the roulette wheel under her palm. / She spins it. / It clatters and settles. / JUDGE FENWICK: Red seventeen.
8. She lifts the gavel. / JUDGE FENWICK: Dismissed.

### s00223
0. Fluorescent hum. / Forty brands of yogurt, all the same. / TOBIAS WREN-ALDRIDGE (30s, Regional Synergy Lead, lanyard, no pulse) holds a laser pointer at a shelf.
1. TOBIAS: Team. Our learning: yogurt is a journey.
2. Four night-shift stockers stare back. / PRISCILLA OYELARAN (40s, forklift certified, unimpressed) holds a pallet jack like a shield. / DMITRI "DIMA" ROSENFELD (20s, hoodie, headphones around his neck) eats a yogurt, deliberately. / HYACINTH PELL (50s, reading glasses on a chain, ex-accountant) checks her watch. / MARGUERITE (60s, no last name anyone remembers) is asleep standing up.
3. TOBIAS: Going forward, we are removing the word "expired." / PRISCILLA: We're what? / TOBIAS: We're reframing it as "mature."
4. Dima's spoon stops. / He puts it down. / DIMA: That's illegal. / TOBIAS: That's agile. / HYACINTH: I left a pension for this.
5. Tobias fires the laser pointer at Marguerite's forehead. / MARGUERITE: Is it the fire? / PRISCILLA: No, Marguerite. It's the Synergy Lead. / Marguerite nods, drifts off again. / Tobias lowers the pointer.
6. TOBIAS: Okay. Okay. Is there anything anyone wants to say before we align? / Silence. / Dima raises his yogurt like a toast. / DIMA: Mature.

### s00883
0. Shelves of umbrellas. / A single desk lamp.
1. INSPECTOR TOMAS ECHEVERRIA: You've kept everything. / MIRIAM VOLKOV: Everything that's ever been left. / INSPECTOR TOMAS ECHEVERRIA: Even this? / MIRIAM VOLKOV: Especially that. It's a green glove.
2. INSPECTOR TOMAS ECHEVERRIA: It's a woman's green glove. Left hand. / MIRIAM VOLKOV: Left on the 9:14 from Aldgate. March, I think.
3. INSPECTOR TOMAS ECHEVERRIA: The day Lady Harcourt vanished. / MIRIAM VOLKOV: I don't read the papers.
4. INSPECTOR TOMAS ECHEVERRIA: You wrote the date on the tag. / MIRIAM VOLKOV: I write the date on every tag. / INSPECTOR TOMAS ECHEVERRIA: The ink is fresh. / MIRIAM VOLKOV: It's a fresh tag. / INSPECTOR TOMAS ECHEVERRIA: You rewrote it. / MIRIAM VOLKOV: Tags fade, Inspector. / INSPECTOR TOMAS ECHEVERRIA: Not in a drawer. / MIRIAM VOLKOV: It wasn't in a drawer.
5. INSPECTOR TOMAS ECHEVERRIA: Where was it? / MIRIAM VOLKOV: In my coat pocket. / INSPECTOR TOMAS ECHEVERRIA: For how long? / MIRIAM VOLKOV: Since the morning after.
6. INSPECTOR TOMAS ECHEVERRIA: Why? / MIRIAM VOLKOV: I wanted to give it back. / INSPECTOR TOMAS ECHEVERRIA: To whom? / MIRIAM VOLKOV: To her.
7. INSPECTOR TOMAS ECHEVERRIA: Lady Harcourt was on that train. / MIRIAM VOLKOV: I know.
8. INSPECTOR TOMAS ECHEVERRIA: You saw her. / MIRIAM VOLKOV: I was on that train. / INSPECTOR TOMAS ECHEVERRIA: You never said. / MIRIAM VOLKOV: Nobody asked. / INSPECTOR TOMAS ECHEVERRIA: I'm asking now.
9. MIRIAM VOLKOV: She sat opposite me. Green gloves. She was crying. / INSPECTOR TOMAS ECHEVERRIA: Why was she crying? / MIRIAM VOLKOV: She didn't say. / INSPECTOR TOMAS ECHEVERRIA: Did she say anything? / MIRIAM VOLKOV: She asked me what the time was. / INSPECTOR TOMAS ECHEVERRIA: What time was it? / MIRIAM VOLKOV: 9:31.
10. INSPECTOR TOMAS ECHEVERRIA: And then? / MIRIAM VOLKOV: She got off at Whitechapel. / INSPECTOR TOMAS ECHEVERRIA: Alone?
11. MIRIAM VOLKOV: A man held the door for her. / INSPECTOR TOMAS ECHEVERRIA: Describe him. / MIRIAM VOLKOV: Tall. Grey coat. A scar on his chin. / INSPECTOR TOMAS ECHEVERRIA: You remember a scar. / MIRIAM VOLKOV: I remember everything left behind.
12. INSPECTOR TOMAS ECHEVERRIA: Did he leave anything? / MIRIAM VOLKOV: A newspaper. A hat. / INSPECTOR TOMAS ECHEVERRIA: Where are they? / MIRIAM VOLKOV: Shelf C. Second row. / INSPECTOR TOMAS ECHEVERRIA: You've had them all this time. / MIRIAM VOLKOV: They were never claimed.
13. INSPECTOR TOMAS ECHEVERRIA: Miss Volkov. Why come forward now? / MIRIAM VOLKOV: Because you finally asked the right question. / INSPECTOR TOMAS ECHEVERRIA: Which was? / MIRIAM VOLKOV: What was left behind.
14. INSPECTOR TOMAS ECHEVERRIA: And what was? / MIRIAM VOLKOV: Her. / INSPECTOR TOMAS ECHEVERRIA: I don't follow.
15. MIRIAM VOLKOV: She never reached the platform. She's in the lost property. / INSPECTOR TOMAS ECHEVERRIA: Miss Volkov-- / MIRIAM VOLKOV: Locker nine. Behind the umbrellas. Key's on the hook.
16. INSPECTOR TOMAS ECHEVERRIA: You're confessing. / MIRIAM VOLKOV: I'm returning.
17. INSPECTOR TOMAS ECHEVERRIA: Sit down. / MIRIAM VOLKOV: I'd rather stand. It's my office. / INSPECTOR TOMAS ECHEVERRIA: Not for much longer. / MIRIAM VOLKOV: No. That's the sad part.
18. INSPECTOR TOMAS ECHEVERRIA: Why did you do it? / MIRIAM VOLKOV: She asked what the time was. I told her it was too late. / INSPECTOR TOMAS ECHEVERRIA: That's not a reason. / MIRIAM VOLKOV: It's the only one I have.
19. INSPECTOR TOMAS ECHEVERRIA: Take the key down. / MIRIAM VOLKOV: Gladly. / INSPECTOR TOMAS ECHEVERRIA: Slowly. / MIRIAM VOLKOV: I have always been slow, Inspector. It's why I never lose anything.

### s00800
0. Flour on every surface. / Cooling racks. / A walk-in oven the size of a closet. / In the corner, a three-tier wedding cake on a steel cart.
1. LEONID TARASOV, 40s, ski mask pushed up on his forehead, wedges a crowbar under the cake's base. / CASPIAN ROWE, 30s, glasses, gloves, stands guard at the door with a cold coffee.
2. CASPIAN: Leo. It's a cake. / LEONID: It's a safe. / CASPIAN: It's a cake with a safe in it. / LEONID: Which makes it a safe.
3. He pries. / The base creaks. / A hidden panel pops. / Inside: a small steel door, a keypad.
4. CASPIAN: Four digits. / LEONID: Try his birthday. / CASPIAN: He's seventy. / LEONID: Try it.
5. Caspian punches in numbers. / Nothing. / He tries again. / A red light flashes. / A tiny alarm warbles inside the cake.
6. They freeze. / Leonid grabs the cake. / Caspian grabs Leonid. / They topple into the cart, tier two sliding off and splattering across the floor in a wet pink avalanche.
7. The alarm dies. / Both men lie in frosting. / LEONID: You did that. / CASPIAN: You pushed me! / LEONID: You grabbed me!
8. They scramble up, slipping. / Leonid lunges for the keypad. / Caspian shoves him aside, jabs at the buttons.
9. The light turns green. / The little door swings open.
10. Inside: a single plastic bag, a scribbled note. / Caspian reads it aloud. / CASPIAN: "Nice try. -Mom." / They stare at each other. / Frosting drips from both their chins.

### s00930
0. Steam, lint, the long sigh of industrial dryers. / Wire carts of folded scrubs stand in rows like pale choirs. / A radio on a shelf murmurs a ball game no one is following.
1. NURSE DOLORES FAIRWEATHER-NKEMELU (50s, reading glasses on a beaded chain) sits on an overturned bucket, a clipboard on her knees. / Across from her, DR. SAMANTHA VOSS-ITO (30s, exhausted, hair half out of its clip) leans against a warm machine with her eyes closed. / They have come down here to escape the ward for ten minutes, and neither has said so. / A third woman, LAUNDRY SUPERVISOR BERNADETTE QUILLON (60s, forearms like rope), folds a sheet with the metronomic calm of someone who has done it forty thousand times. / Near her, two younger orderlies stack towels: KESTUTIS BALODIS (20s, tall, a shy stammer) and ROSAURA MENDOZA-LIN (20s, a bright scarf around her hair).
2. DOLORES: Fourteen's stable. She asked for tea. / SAMANTHA: She can have tea. / DOLORES: She wants it at four a.m. / SAMANTHA: Then she wants it at four a.m.
3. BERNADETTE: Kettle's by the dryer. Help yourself. / DOLORES: You're an angel, Bernadette. / BERNADETTE: I'm a woman with a kettle.
4. Samantha opens her eyes. / She watches Dolores pour water into a chipped mug, then hand it to Rosaura, who nods and slips away. / Dolores sits again; Bernadette snaps a sheet in the air and it floats down in a perfect rectangle.
5. KESTUTIS: Dr. Voss? M-may I ask? / SAMANTHA: Of course. / KESTUTIS: Does it g-get easier?
6. Samantha smiles, tired but kind. / Dolores glances at Bernadette. / Bernadette keeps folding. / The dryer ticks down. / Nobody answers him for a long moment.
7. SAMANTHA: It gets quieter. / KESTUTIS: Is that the same? / DOLORES: Not really, love.
8. The radio announcer shouts about a home run. / Everyone lets it fill the silence.

### s00650
0. Stopped. / Between floors. / One flickering tube. / Brushed steel, scratched.
1. BRYNJA LARSEN, forties, a lawyer's briefcase. / Pressed against the wall. / RUFUS BELLAMY, fifties, a janitor's jumpsuit. / Mop bucket at his feet. / CALLISTA MOREAU, twenties, earbuds. / Texting. / No signal.
2. BRYNJA: Press the button again. / RUFUS: I pressed it. / BRYNJA: Again.
3. He does. / Nothing. / The light flickers.
4. INTERCOM: Hello? Is someone in the car? / BRYNJA: Yes! Three of us! / INTERCOM: Please remain calm. Maintenance is en route.
5. CALLISTA: How long? / INTERCOM: Forty minutes. / RUFUS: Forty minutes.
6. INTERCOM: Is anyone carrying a bag?
7. Brynja's grip tightens on the briefcase. / Rufus glances at it. / Callista looks up from her phone. / CALLISTA: Why?
8. The intercom crackles. / Then, very quietly:
9. INTERCOM: Because the sensor says the car is heavier than it should be.

### s00570
0. Rain on glass. / One bulb flickers. / Cable groans.
1. DESMOND WREN, 50s, ticket inspector, brass whistle on a cord, grips a clipboard. / Across from him, a STRANGER in a dripping yellow poncho. / Smiling.
2. DESMOND: We've been stopped eleven minutes. / STRANGER: Twelve. / DESMOND: You're counting.
3. STRANGER: Everyone counts, Mr. Wren. You counted the passengers at the top. Forty-one up. Forty down. / DESMOND: How do you know my name? / STRANGER: Same way I know about the missing one. The man who rode up and never rode down. / DESMOND: Nobody's missing. The log is clean. / STRANGER: You wrote the log.
4. DESMOND: Who are you? / STRANGER: Who are you? / DESMOND: Don't.
5. STRANGER: My name is Odalys. His sister. / The whistle snaps off its cord.
6. ODALYS: Where is he, Desmond? / DESMOND: Under the lower platform. God forgive me.
7. The cable SCREAMS. / The car lurches.

### s00422
0. The great pool lies empty, its blue tiles cracked into a map of rivers nobody named. / Pigeons stitch through the rafters, and the light from the broken skylight lies in long pale planks across the deep end, where a lifeguard's chair still stands, lashed with rust.
1. MARGUERITE LAVOISIER (70s, white braid to her waist, a swimmer's shoulders gone soft) sits on the lip of the pool with her feet dangling over nothing, while her son EMMANUEL (40s, rumpled suit, a clipboard he has stopped looking at) paces the tiles, her granddaughter JOSÉPHINE (17, wet-weather parka, earbuds dangling) peels a strip of loose paint from the railing and flicks it into the void, and the surveyor TOMASZ KRUK (50s, hard hat under one arm, tape measure clipped to his belt) clears his throat twice before anyone looks at him.
2. EMMANUEL: Maman, they sign today. It is only a car park. / MARGUERITE: I taught you here. You held your breath nine seconds. / JOSÉPHINE: Grand-mère, he's trying to-- / TOMASZ: Madame, if I could just measure the deep end, we can-- / EMMANUEL: --she knows what it is, Joséphine. / MARGUERITE: Nine seconds, Manu. And you came up crying.
3. TOMASZ: Twelve feet, I think. Twelve and a half.
4. JOSÉPHINE: Can I jump?
5. Marguerite pats the cold tile beside her, and Joséphine sits. / Emmanuel lowers the clipboard. / Tomasz winds the tape back slowly into its case.

### s00547
0. A narrow corridor of polished mahogany and brass fixtures. / Curtains drawn over the windows. / Beyond them, the dark rushes by. / The carriage sways in a long steady pulse.
1. INSPECTOR ABEL STROM, 50s, a hat too small for his head, a ticket punch in one hand, walks the corridor slowly, checking doors, listening. / At each cabin he pauses. / At the third he knocks.
2. A door opens a crack. / MADAME VALENTINE ROUX, 60s, a silk robe and a cold cream mask, peers out with an eye like a coin.
3. ROUX: Yes? / STROM: Madame. A disturbance reported. Did you hear anything? / ROUX: I hear the train. I hear my own pulse. I hear a gentleman in the corridor who will not let a woman sleep.
4. STROM: My apologies. Have you seen anyone pass?
5. She considers him. / Behind her, a light flicks on in the next compartment. / ROUX: Only the doctor. / STROM: Which doctor? / ROUX: The one in four.
6. She shuts the door. / He moves on. / Cabin four. / He raises his hand to knock, hesitates, listens. / A soft murmur inside, a woman's voice. / He taps.
7. The door opens. / DR. HESTER PRYCE, 40s, a black medical bag in one hand and a wet handkerchief in the other, regards him with sleepless composure.
8. PRYCE: Inspector. / STROM: Doctor. I'm told you were attending someone. / PRYCE: A porter. A faint. Nothing serious. / STROM: Which porter? / PRYCE: The young one. Giles. / STROM: Ah.
9. He peers past her shoulder. / The compartment is dim. / A figure lies on the lower berth, motionless under a blanket.
10. PORTER GILES, 20s, in a half-buttoned uniform, one hand pressed to his temple, lifts his head and gives a weak, apologetic smile. / GILES: Sorry for the fuss, sir. / STROM: Nothing to apologize for, my boy. Rest.
11. He steps back. / Pryce eases the door half closed. / For a moment their eyes hold. / She is calm. / He is polite. / Neither blinks.
12. STROM: Doctor, a curious thing. The ticket in your name was bought in Vienna. / PRYCE: It was. / STROM: And yet the conductor reports you boarded in Prague. / PRYCE: He's mistaken. / STROM: He rarely is.
13. She smiles. / It is a small, tired smile. / PRYCE: Inspector, would you care for tea? / STROM: I would like the truth, Doctor. / PRYCE: Over tea.
14. He thinks. / Nods once. / She opens the door wider. / He enters. / The compartment smells of lavender and iodine.
15. On the lower berth, Giles has gone still. / His eyes are open. / He is not looking at the Inspector. / He is looking at Pryce.
16. STROM: Doctor. Your patient is not breathing. / Pryce does not turn. / PRYCE: I know.
17. She closes the door. / The latch clicks.
18. In the corridor, Madame Roux's door opens again, an inch, and a single coin-bright eye peers out. / It watches the door of cabin four for a long time. / Then, quietly, it shuts.

### s00147
0. A concrete room at the end of a dirt road, humming with machines. / Banks of dials. / A wall of monitors showing a single flat grey line. / DR. SOLVEIG ABERNATHY-OKAFOR, 40s, in a sweater and fingerless gloves, sits at the main console with a voice recorder and a cold cup of tea. / She hasn't slept.
1. She presses RECORD. / SOLVEIG: Log entry, hour sixty. Signal is still there.
2. She plays back the clip. / A pulse, faint, like a heartbeat, from a speaker.
3. She rewinds. / SOLVEIG: Log entry, hour fifty-two. It repeats every eleven minutes. / SOLVEIG: Eleven minutes.
4. She leans closer, listening, and her hand slips to the console edge. / The pulse thumps. / The monitors flicker. / The lights dim for a heartbeat, then recover.
5. She exhales and lifts the recorder again. / SOLVEIG: Hour sixty-one. The pulse has changed. It now repeats every ten.
6. She pauses. / Her voice drops. / SOLVEIG: Ten minutes.
7. She plays it back. / SOLVEIG: Hour sixty-one. The pulse has changed.
8. SOLVEIG: Stop. / She stops it. / Silence.
9. Then, faintly, from the speaker, the pulse resumes. / A beat. / Another.
10. SOLVEIG: That's not mine.
11. She turns slowly. / The speaker is off. / The monitors show the grey line. / The pulse continues.
12. It's coming from the recorder.
13. SOLVEIG: Hello? / She holds the recorder up. / The pulse quickens.
14. SOLVEIG: Hello.
15. She drops the recorder. / It clatters. / She stands, backs away. / The lights flicker. / The console hums. / The recorder lies on its side, spinning its reels.
16. SOLVEIG: Solveig. Come here. / She does not move. / Tears gather at her eyes.
17. SOLVEIG: No. / SOLVEIG: Come here. I have been waiting eleven minutes.
18. SOLVEIG: Ten. / SOLVEIG: Ten.
19. A long silence. / The pulse slows. / The lights steady. / The grey line on the monitors becomes a single, perfect, ordinary wave.
20. She picks up the recorder. / Her hand is still. / She looks at it.
21. SOLVEIG: It's gone.
22. She stops the machine. / The room is silent. / She sets the recorder down on the console, very gently, like a bird she has learned to trust.
23. She picks up her tea. / It's warm.

### s00218
0. Concrete walls. / Bare bulb. / A card table with a laptop and a stack of cash. / AGENT RENATA OYEKAN-VOSS, 40s, slumps in a chair. / AGENT BASTIAN HALVORSEN, 30s, paces. / The informant, THEODORA "TEDDIE" KAPLAN, 50s, rocks nervously on a stool.
1. RENATA: You said they'd be here by midnight. / BASTIAN: They will be. / TEDDIE: They won't. They're never late, and they're never early. They're just there. / RENATA: Teddie. / TEDDIE: It's a fact. / BASTIAN: You've been saying that for two hours. / TEDDIE: It's been true for two hours.
2. Renata rubs her eyes. / Bastian stops pacing, then resumes. / Teddie hums something tuneless. / RENATA: Stop humming. / TEDDIE: I'm not humming. / BASTIAN: You are. / TEDDIE: It's the pipes.
3. The pipes knock. / All three look up. / The knocking repeats, in a pattern. / RENATA: That's not pipes. / BASTIAN: That's Morse. / TEDDIE: It's the wind. / RENATA: In a basement? / TEDDIE: It's a drafty basement.
4. Bastian crosses to the wall. / Presses an ear against it. / Renata draws her weapon. / The knocking stops. / BASTIAN: Someone's behind this wall. / RENATA: That's the neighbor's. / BASTIAN: We don't have a neighbor.
5. Teddie stands. / Her stool tips over. / She backs toward the stairs. / TEDDIE: I told you. I told both of you. / RENATA: Teddie, sit down. / TEDDIE: I'm leaving. / BASTIAN: You're not. / TEDDIE: Watch me.
6. The wall cracks. / Plaster dust sprinkles the table. / A fist punches through. / Renata fires. / Bastian ducks. / Teddie screams and bolts up the stairs, and the bulb swings wildly, throwing shadows across the concrete.

### s00220
0. Steel table. / Cold tea. / A hull looms through the window, half-painted. / ODALYS VANTERPOOL (50s, foreman, grease-stained clipboard) stands. / Doesn't sit. / BRANIMIR KOSTA (60s, welder, one good eye) stares at his hands. / KIRIN ASHWORTH (19, apprentice, new boots) hovers by the door. / BIG HOLLIS (40s, union steward, arms folded) leans on the vending machine.
1. ODALYS: Listen up. Inspection failed. Weld seam forty-two. / Silence. / BRANIMIR: Forty-two. Forty-two. / ODALYS: Branimir. / BRANIMIR: I heard.
2. ODALYS: Who signed off on it? / HOLLIS: Does it matter? / ODALYS: It matters.
3. KIRIN: It was me. / Everyone turns. / KIRIN: Branimir was on break. I did the pass. I thought it was good. / BRANIMIR: It wasn't him. / KIRIN: It was. / BRANIMIR: Boy, sit down.
4. ODALYS: Kirin, did you X-ray the seam? / KIRIN: No ma'am. There was no film left. / HOLLIS: No film. On a Tuesday. / ODALYS: Who's in charge of ordering film? / HOLLIS: You are. / ODALYS: Right. Right.
5. BRANIMIR: So it's your film. Your seam. Your hull. / ODALYS: Don't. / BRANIMIR: Forty years I never missed a seam. / ODALYS: I know. / BRANIMIR: Forty years. / ODALYS: I know, Branimir.
6. HOLLIS: Nobody gets fired tonight. / ODALYS: Not your call. / HOLLIS: It's the contract. / ODALYS: The contract says a lot of things.
7. BRANIMIR: The ship sails Friday. / ODALYS: The ship does not sail Friday. / KIRIN: Is it really that bad? / ODALYS: It's a hairline crack, Kirin. At sea it opens like a zipper.
8. Her hand slams the table. / Tea jumps. / Kirin flinches.
9. Branimir laughs. / Short. / Dry. / BRANIMIR: Then we cut it out. Tonight. Four of us. / ODALYS: Four of us. / HOLLIS: Overtime's on the union.
10. ODALYS: Film. I forgot the film. / She picks up the clipboard. / Puts it down. / Picks up four mugs instead. / ODALYS: Tea's cold. I'll make fresh.

### s00036
0. Rain beads the windshield. / The dashboard clock reads 7:52. / Across the street, the planetarium dome glows a soft blue, waiting for a show that has already begun. / In the driver's seat, a man in a thin wool coat grips the wheel, his eyes fixed on the building. / This is the STRANGER: late forties, heavy-lidded, thoughtful. / In the back seat, a girl of ten sits cross-legged, her ticket pinched between two fingers. / She watches him in the rearview mirror and says nothing.
1. The man draws a breath to speak. / Doesn't.
2. The girl unbuckles, leans forward between the seats. / GIRL: We're late. / STRANGER: I know.
3. GIRL: Mom says you're always late. / STRANGER: Your mother is usually right.
4. GIRL: Is that why she left?
5. He doesn't answer. / A raindrop slides down the glass. / The windshield wipers sweep once, twice.
6. STRANGER: What do you want me to say, Josephine? / JOSEPHINE: Just say a true thing.
7. The man looks at her, startled. / Something in his shoulders loosens.
8. STRANGER: All right. I don't know how to do this. I've never known. I walk into rooms and everyone's already decided who I am.
9. JOSEPHINE: You're my dad. / STRANGER: Yes. / JOSEPHINE: That's all you have to be.
10. His phone buzzes on the dashboard. / A name lights the screen: MAEVE. / He lets it ring. / JOSEPHINE: Aren't you going to get it? / STRANGER: Later.
11. The phone goes silent, then buzzes again.
12. Josephine reaches over and answers it for him, putting it on speaker.
13. MAEVE: Desmond? Is she with you? The planetarium said you never checked in. / DESMOND: She's here, Maeve. We're in the car. / MAEVE: In the car? It started at seven.
14. DESMOND: I know. I got us lost. And then I just... sat here.
15. A pause on the line. / Rain on the roof.
16. MAEVE: Is she okay? / JOSEPHINE: ^I'm okay. / DESMOND: ^She's okay.
17. They say it at the same time. / Desmond glances at his daughter. / She smiles.
18. MAEVE: Then go in. They'll let you in late. Tell them it's my fault. / DESMOND: It isn't. / MAEVE: Just go, Des.
19. The call ends. / Desmond sets the phone down very gently, as if it might break. / JOSEPHINE: So? / DESMOND: So.
20. He opens his door. / The rain is barely more than mist. / He walks around, opens hers, and offers his hand. / She takes it. / DESMOND: Let's go look at the sky.
21. They cross the street together, small under the glowing dome.

### s00330
0. An open-plan office built into a defunct bowling alley. / Desks sit on the lanes. / Monitors glow where the pins used to stand. / A scoreboard overhead reads "SYNERGY: 0." / BRANDYN HOLLIS, forties, a regional vice president in a vest with a lanyard, stands at lane three, clapping. / CHIDI OBI, thirties, an analyst with tired eyes, sits at lane four. / MARGUERITE FENN, fifties, head of compliance, in a cardigan, clutches a binder. / DEV PATEL-ROSS, twenties, an intern, kneels on lane two plugging in a power strip. / UNDERWOOD, sixties, the janitor, mops the gutter without comment.
1. BRANDYN: Team! We are pivoting to a bowling-first culture. / CHIDI: Pivot to what? We have no pins. / BRANDYN: Exactly. Pins are legacy.
2. MARGUERITE: Brandyn, the fire marshal says the lanes are not rated for desks. / BRANDYN: Marguerite, the lanes are a metaphor.
3. DEV: There's a ball in my power strip. / CHIDI: The ball returns are still live.
4. BRANDYN: Great. Let's leverage the returns. Everyone grab a ball and a quarterly goal. / MARGUERITE: That is a safety violation. / BRANDYN: It is a culture violation not to.
5. CHIDI: Brandyn, I haven't been paid since the third frame. / BRANDYN: Strike, Chidi. We're all in a gutter right now.
6. A ball rolls down lane two and takes out Dev's power strip. / The monitors go dark. / The scoreboard flickers: "SYNERGY: 1."
7. UNDERWOOD: Told you.

### s00328
0. Shelves of umbrellas. / A cage of single gloves. / Fluorescent hum. / DET. ROSALIND IKEDA leans on the counter. / AUGUSTIN BEAUMONT, the clerk, hides behind a ledger. / LUCINDA MORROW sits on a bench with a violin case on her knees. / KWAME ASANTE paces. / OFFICER PERRY blocks the door.
1. IKEDA: Describe the case again. / LUCINDA: Black. Brass clasps. A sticker of a lighthouse on the lid. / AUGUSTIN: We have forty-one black cases. Nine with brass.
2. KWAME: That one's hers. That one in her lap. / LUCINDA: This one is mine. Yours is somewhere else.
3. IKEDA: Open it. / LUCINDA: It's a violin. / IKEDA: Then it won't mind. / AUGUSTIN: Detective, there are procedures.
4. IKEDA: Mr. Beaumont, you logged this case at nine-ten. Two hours before the ferry docked. / AUGUSTIN: I may have mistaken the time.
5. KWAME: He mistakes everything. / LUCINDA: Kwame, sit down. / KWAME: I've been sitting since Tuesday.
6. IKEDA: Officer Perry, the door. / PERRY: Locked, ma'am.
7. IKEDA: Miss Morrow. The clasps. / LUCINDA: No.
8. IKEDA: Then I'll count to three. / AUGUSTIN: Please don't.
9. KWAME: One.

### s00841
0. Skylight, painted backdrops, a brass camera on a tripod. / Five people wait in a row of chairs.
1. AUGUSTA: Do we stand or sit? / LEOPOLD: Sit, you goose. We're paying by the plate.
2. BENEDIKT: Papa says we mustn't smile. Smiling is for children and fools. / WILHELMINA: Papa has never been photographed. / BENEDIKT: He says it steals the soul. / CASIMIR: It steals a dollar and a half, which is worse. / LEOPOLD: Casimir, hush.
3. AUGUSTA: Willa, is my collar straight? / WILHELMINA: It is crooked, but the crookedness suits you. / AUGUSTA: That is not an answer. / CASIMIR: It is the only kind she gives.
4. BENEDIKT: Does anybody know how long we must hold still? / LEOPOLD: Ten seconds. Mrs. Aldridge said so. / CASIMIR: I once held still for a whole sermon. / WILHELMINA: You fell asleep, Cas. / CASIMIR: That is the same thing, only more honest.
5. AUGUSTA: Leopold, you will not tell Mother we came. / LEOPOLD: Of course not. / BENEDIKT: She will see the photograph. / LEOPOLD: By then it will be too late to be cross. / WILHELMINA: And if she cries? / LEOPOLD: Then we shall give her a copy to cry on.
6. AUGUSTA: Hush. Hush, here comes Mrs. Aldridge. / CASIMIR: Do not smile. / BENEDIKT: I am not smiling.
7. WILHELMINA: You are all of you smiling. / LEOPOLD: Then let us be fools, and have it done.

### s00333
0. A cavernous barn of splintered painted horses, hanging by chains from the rafters, their glass eyes catching a single lantern. / Sawdust drifts like snow. / MINA, twenties, a documentary photographer, raises a camera. / TEDDY, thirties, her guide, grips a crowbar. / OSRIC, sixties, the caretaker, stands rigid in the doorway with a ring of keys. / LOLA, ten, Osric's granddaughter, clutches a plush rabbit.
1. MINA: Teddy, did you hear that? / TEDDY: It's the wind. / OSRIC: No wind in here.
2. LOLA: Grandpa, the horses are looking at me. / TEDDY: Lola, honey, they're wood. / MINA: Teddy, look up. / OSRIC: Lola, come here.
3. A chain clinks. / One painted horse swings, slow. / Another turns its head.
4. TEDDY: Mina, back up. / MINA: I'm trying. / LOLA: Grandpa!
5. The lantern gutters. / All the horses begin to descend at once on their chains, slamming into the floor, shrieking, wheels turning, the whole carousel lurching into motion in the dark.

### s00678
0. The neon pins glow pink over a pile of cash on the scoring table. / Six people stand frozen under the haze of cigarette smoke.
1. KAZIMIERZ "SPUD" NOWAK, 50s, shoes untied, grips a ball like a grenade. / LORETTA VANCE, 40s, red lipstick, holds the money. / DUTCH AMARI, 30s, tall, leans on the ball return. / PEARL, 60s, the lane attendant, polishes a shoe with great calm. / GIDEON, 20s, nervously jingles car keys. / MINNOW, 12, drops under the table.
2. SPUD: Loretta, put the cash down and nobody gets scuffed. / LORETTA: Scuffed? Spud, you rented these shoes.
3. DUTCH: Pearl, whose side are you on? / PEARL: Lane 14's.
4. Gideon bolts. / Spud hurls the ball; it thunders down the lane and scatters the pins, and Gideon, mid-stride, hops and screams as his keys skid into the gutter.
5. MINNOW: Strike!

### s00221
0. A domed room. / Rows of empty reclining seats. / A projector hums in the center, casting a slow field of stars across the ceiling. / A man in a damp raincoat stands at the control console. / He wipes his hands on a handkerchief, one finger at a time.
1. A WOMAN enters from the lobby door, keys in her hand. / She stops. / She does not turn on the lights. / STRANGER: Evening.
2. She sets her keys on the nearest seat, carefully, so they make no sound. / WOMAN: We're closed. / STRANGER: So I see.
3. He nudges a dial. / The stars drift. / A comet crosses the dome. / WOMAN: Door was locked. / STRANGER: It was.
4. He smiles at the ceiling. / She watches his hands. / WOMAN: You want something to drink? There's a kettle in the office. / STRANGER: Kind of you. / She does not move toward the office. / Neither does he.
5. WOMAN: Your coat's wet. / STRANGER: It's been a long walk. / WOMAN: From where? / He lets the question hang. / The comet fades.
6. STRANGER: You kept the Orion show. They told me you'd cut it. / WOMAN: Who told you? / STRANGER: Man at the ticket window. Years ago.
7. She takes one step down the aisle. / He takes one up. / They stop level with the fourth row. / WOMAN: I don't think I know you. / STRANGER: No. But your husband did.
8. Her jaw sets. / She glances at the exit sign, then back. / WOMAN: My husband's dead. / STRANGER: That's what I said. Did.
9. She reaches slowly into her coat pocket. / He watches it. / She pulls out a small brass key and holds it up between two fingers. / WOMAN: Basement. Where he kept the film reels. / STRANGER: I thought so. / WOMAN: He wrote a name on every can. Yours is on the third shelf.
10. He doesn't answer. / The stars wheel overhead. / WOMAN: Tell me your name and I'll hand you the key. / A long beat. / He folds the handkerchief into a square. / STRANGER: Desmond Pryce. / WOMAN: Thank you, Mr. Pryce.
11. She places the key on the armrest between them. / He doesn't reach for it. / DESMOND: Aren't you going to ask what's on the reel? / WOMAN: No.
12. She picks up her own keys again. / Turns toward the lobby. / Stops with her back to him. / WOMAN: The lights come on at eleven. You have twenty minutes.
13. She leaves. / The door sighs shut.
14. He stands alone beneath Orion. / Then he takes the key.

### s00837
0. Wind moans through the slats. / Dust drifts in a column of moonlight. / Old machinery stands like sleeping animals. / HOLLIS MERCER, 50s, a farmer in a canvas jacket, climbs through the floor hatch and holds a lantern high. / RAYMOND TUCK, 30s, his nephew, follows, breathing hard. / He sets the lantern on a beam. / He wipes his hands on his pants and listens.
1. RAYMOND: Uncle Hollis, I don't like it up here. / HOLLIS: It's grain, Ray. It's just grain. / RAYMOND: Then why's it moving?
2. Hollis looks. / The grain in the nearest bin shifts in slow ripples, as though breathing. / He steps toward it and puts out a hand. / Dust sifts around his fingers.
3. He pulls it back. / Raymond grabs his sleeve. / RAYMOND: Don't. / HOLLIS: Let go.
4. He shakes him off and leans over the rail. / The lantern light sweeps down into the bin.
5. Something pale shifts under the surface. / HOLLIS: Oh, Lord.
6. He backs away. / He bumps into the other man, who yelps and spins, and for a moment they cling to each other, each trying to see over the other's shoulder.
7. RAYMOND: What is it? Hollis, what is it? / HOLLIS: It's Dale Whitby. / RAYMOND: Dale's been gone two years. / HOLLIS: I know it.
8. The grain stops moving. / The wind drops. / From the hatch below, soft and wet, comes a sound like someone clearing his throat. / Neither of them answers.
9. RAYMOND: Hollis. He's behind us.
10. He drops the lantern. / It rolls across the floor, throws wild shadows across the beams, and goes out against a post.

### s00613
0. Candlelit tables, white cloths, silver trays. / Rain streaks the black windows. / The car sways. / VERA KOSTOVA, 40s, in a charcoal suit, stirs her tea with unnatural calm. / Across the aisle, LENNOX BRADSHAW, 50s, drums fingers on his knife. / Two tables away, DMITRI SOKOLOV, 30s, bulky in a fur-collared coat, studies the menu. / A waitress carrying a tray: QUINN, 20s, red-haired, black apron, noticing everything.
1. She sets the tray down at Vera's table. / Their eyes meet. / Quinn straightens a napkin that doesn't need straightening.
2. QUINN: Anything else, ma'am? / VERA: Just the check. / LENNOX: The check, please. / QUINN: Of course, sir.
3. Neither woman moves. / Dmitri closes the menu, slides one hand beneath the table. / Vera's fingers tighten around the spoon.
4. The train hits a switch. / The car lurches. / A glass tips, shatters on the floor.
5. Everyone looks down, then up. / Quinn is already gone.
6. Dmitri lifts a silenced pistol onto the cloth. / Lennox lifts a revolver from his coat. / Vera lifts nothing, but she has risen, spoon in hand, between the two of them.
7. VERA: Gentlemen. / DMITRI: Vera. / LENNOX: Move, Vera. / VERA: Not a chance.
8. He fires. / She falls sideways. / The candle goes out.

### s00141
0. A stone vault with a crooked desk. / Lanterns of green fire. / A sign in nine languages: "DECLARE EVERYTHING." / Dust drifts from the ceiling. / KRIX BONEWHISTLE, a goblin, three feet tall, in a tiny waistcoat, stamps papers with a thick fist. / Next to him, GRUMBELINE SOOT, a goblin woman with a monocle, sorts coins by weight. / Before the desk stand two travelers: SIR ALDERIC THORNE, 40s, a knight in dented armor, and a hooded witch, MAGDA VESPERS, who carries a covered basket.
1. KRIX: Name, species, purpose. / ALDERIC: Alderic Thorne. Human. Passing through. / KRIX: Anything to declare? / ALDERIC: My sword. / GRUMBELINE: We saw the sword.
2. KRIX: Madam? / MAGDA: Magda Vespers. Witch. Visiting a cousin. / KRIX: Anything to declare? / MAGDA: Nothing.
3. The basket twitches. / Grumbeline looks up. / GRUMBELINE: What's in the basket? / MAGDA: Bread. / GRUMBELINE: Bread does not purr.
4. Magda sighs. / Lifts the cloth. / Inside: a small, indignant dragon, no larger than a kitten, blinking.
5. KRIX: That's a declarable. / GRUMBELINE: That's a declarable! / ALDERIC: Told you. / MAGDA: He's a rescue.
6. KRIX: Fee is three silvers and a favor. / Magda counts three coins from her sleeve. / She sets them on the desk. / Grumbeline weighs each one, squints through the monocle, then nods.
7. GRUMBELINE: The favor? / MAGDA: Name it.
8. KRIX: Teach us to make bread that purrs.
9. Magda smiles for the first time. / The dragon yawns, and a small flame lights the office.

### s00319
0. A flat tar roof under a smear of stars. / A cracked neon cone sign, unlit. / A cooler. / Two lawn chairs. / Two teenagers sit with their backs to the sky. / CALLUM ODUYA-LINDQVIST (16, skinny, hoodie, hands tucked in sleeves) watches the road below. / NADEZHDA "NADIA" ABARA-FENWICK (16, cut-off jeans, scab on one knee) lies flat, staring up. / Somewhere far off, a freight train rolls.
1. NADIA: Seven. / CALLUM: Seven what? / NADIA: Satellites. Since you sat down. / CALLUM: That's not satellites. / NADIA: It's satellites. / CALLUM: It's planes. / NADIA: Planes blink.
2. He doesn't argue. / Leans back. / The tar creaks.
3. CALLUM: My dad's driving back tomorrow. / NADIA: From where? / CALLUM: Reno. / NADIA: What's in Reno? / CALLUM: Nothing. That's the point.
4. She turns her head toward him. / NADIA: Is he staying? / CALLUM: He says so. / NADIA: Do you believe him? / CALLUM: He bought a couch. / NADIA: That's not the same. / CALLUM: He's never bought a couch.
5. She sits up. / Pulls her knees to her chest. / He opens the cooler and offers her a soda. / She takes it.
6. NADIA: Mine's leaving for good, you know. / CALLUM: Your mom? / NADIA: Mine's mom, yes, my mom. Moving to Tucson with a guy named Gordon.
7. CALLUM: Gordon sounds fake. / NADIA: Gordon sounds like a sofa. / CALLUM: He might be your dad's couch.
8. She laughs, loud, startling a nighthawk off the sign. / Callum smiles, too, for the first time. / The freight train's horn fades.
9. NADIA: You'll still be here. / CALLUM: Yeah. / NADIA: Promise. / CALLUM: I'm not going anywhere. There's nowhere to go. / NADIA: That's not a promise. / CALLUM: It's the only kind I have.
10. She tips her soda against his. / They drink.
11. A shooting star cuts across the sky and neither of them says anything, though both see it.
12. NADIA: Make a wish. / CALLUM: I did. / NADIA: What was it? / CALLUM: If I tell you, it won't work. / NADIA: That's superstition. / CALLUM: It's a rule. / NADIA: Same thing. / CALLUM: Not tonight.
13. She lies back. / He lies down, too, shoulder to shoulder, and the stars wheel on above them.

### s00091
0. ZELDA: You're humming. / MURALI: I'm not. / ZELDA: You are. It's the thing from the radio. / MURALI: It's a lullaby.
1. ZELDA: Whose? / MURALI: Mine. My mother's. Don't. / ZELDA: I didn't say anything. / MURALI: You were about to.
2. ZELDA: I was about to say it's nice. / MURALI: It isn't nice. It's a song about a goat. / ZELDA: Is it a good goat? / MURALI: He dies. / ZELDA: Ah. / MURALI: Everybody dies in the second verse. / ZELDA: That's a heavy lullaby. / MURALI: We were a heavy family. / ZELDA: And you cope by humming in a van outside a bell foundry.
3. MURALI: Four more minutes. / ZELDA: Four more minutes. / MURALI: Then we go in. / ZELDA: Then we go in. / MURALI: And you stop asking questions. / ZELDA: Never.

### s00325
0. A steel cylinder the size of a submarine hatch, riveted, round-windowed, humming. / Dials gleam. / A single bench runs along each wall. / The air smells of hot metal and antiseptic. / DR. LENA ASHWORTH, forties, tall, severe, with grey strands escaping from a tight bun, checks a pressure gauge with the focus of a surgeon. / NURSE PRIYA DESAI, thirties, small, quick, her scrubs covered in a cardigan, adjusts an IV line on a gurney. / MR. WALDEMAR GRUBB, sixties, a diver with the bends, lies on the gurney, bearded, grey-skinned, eyes bright with fear.
1. LENA: Pressure at two atmospheres. Priya, how is his pulse? / PRIYA: One-ten and climbing.
2. Lena crosses to Priya. / She leans over the gurney. / She checks Waldemar's pupils. / She frowns and looks up at Priya.
3. WALDEMAR: Am I dying? / LENA: You are being treated. / WALDEMAR: That is not an answer. / PRIYA: It's the only one she gives.
4. Lena shoots Priya a look. / Priya shrugs. / She tucks the blanket tighter around Waldemar's feet.
5. LENA: Two and a half atmospheres. Watch the oxygen. If he seizes, we have ninety seconds. / PRIYA: Ninety seconds in a sealed tube. Wonderful. / LENA: I heard that.
6. WALDEMAR: Tell me one thing. Which of you two is in charge? / Lena and Priya both begin to answer. / Both stop. / The dial needle trembles. / A rivet pings somewhere in the wall.
7. PRIYA: She is. / LENA: She is. / They look at each other.
8. Waldemar's whole body arches off the gurney and the alarm shrieks. / Lena and Priya grab him at once, one at his shoulders, one at his knees, and hold him down while the chamber hums louder around them.
9. LENA: Three atmospheres! Now! / PRIYA: Three! Going up!
10. She hammers the valve. / The needle climbs.
11. Waldemar sags back, gasping, and the alarm cuts out. / The sudden silence is enormous. / WALDEMAR: Thank you.
12. Lena lets go first. / Priya follows. / Neither of them speaks.

### s00683
0. White to the horizon. / Heat shimmer. / A burnt-out van tilts in the distance like a toy.
1. NAOMI, 30s, sunburned, drags a jerry can by its handle. / Her canteen is empty. / She stops, swaying. / NAOMI: Keep walking. Keep walking.
2. A figure on the horizon. / Naomi shades her eyes. / A WOMAN, 40s, in a ragged parka, wobbles closer. / She carries a water jug. / She sees Naomi and stops.
3. WOMAN: Is that water? / NAOMI: Gas. / WOMAN: Damn.
4. Naomi sets down the can. / The woman does the same with her jug. / They stare across ten feet of white.
5. NAOMI: Where'd you come from? / WOMAN: East. A bus. I'm told there was a bus. / NAOMI: There was. It left.
6. The woman sits in the salt. / Naomi sits too. / Neither speaks. / The wind scrapes the flat. / NAOMI: Anybody want to explain this?
7. WOMAN: What's your name? / NAOMI: Naomi. / WOMAN: Elspeth. My friends call me Elsie.
8. ELSPETH nudges the jug across the salt. / ELSPETH: Half each. You carry the gas. I carry the rest.
9. Naomi takes the jug. / She drinks, passes it back, and nods.
10. NAOMI: She'd have hated this, my mother. Heat. / ELSPETH: Mine too.
11. They stand, shoulder to shoulder, and start toward the van.

### s00608
0. Chairs upturned on tables. / A cooler humming. / A faded mural of the solar system peeling above the counter. / PHILOMENA CROSS, 40s, in a heavy knit sweater, sits very still at a window booth, a cold cup untouched before her. / Across from her, GRADY, 30s, shirtsleeves rolled, taps a spoon against his saucer. / On a stool at the counter, TUCKER, 30s, in a tweed jacket, spins slowly one way, then the other.
1. Nobody says anything. / The spoon taps. / He glances at her. / She glances away. / He taps once more. / Stops.
2. Tucker lets the stool stop turning. / He rests his elbows on the counter, studies the mural. / TUCKER: Jupiter's too small. / GRADY: It's accurate. / TUCKER: It's a third of the size it ought to be. / GRADY: Ought to be where? / TUCKER: In the picture.
3. Philomena slides her cup an inch toward the center of the table. / Grady's eyes follow it. / GRADY: You want that reheated? / PHILOMENA: No. / GRADY: You'll catch cold. / PHILOMENA: I'll manage.
4. Grady scrapes his chair back. / Walks behind the counter.
5. Tucker watches him pass, lets his hand drift to the edge of a drawer, and closes it again.
6. He turns his head, slow, toward Philomena. / She is already looking at him. / He stays still. / She doesn't blink.
7. Grady comes back with a pot of coffee, a fresh cup. / He pours. / The smell of it fills the room. / GRADY: Drink it. Please.
8. She holds the cup but doesn't lift it. / Steam curls up past her face.
9. TUCKER: You don't have to say it. / PHILOMENA: I wasn't going to. / TUCKER: Good.
10. Grady sets down the pot. / Rests one hand on the back of Tucker's stool, the other flat on the table, close to Philomena's. / They sit like that, three of them, around a thing nobody names, until the cooler cycles off and the silence turns total.

### s00887
0. 1911. / Mirrors in gilt frames. / A velvet curtain. / Fashion plates pinned to the walls. / The air is thick with lavender and the smell of hot irons. / LADY EUGENIA THORNCROFT, 40s, imperious, stands on a small platform in her underthings, arms raised, jaw set. / Her hair is a monument of pins. / BRIDGET MULVANEY, 20s, the seamstress, kneels at her feet with a mouthful of pins and a tape measure around her neck. / Her sleeves are rolled. / Her knuckles are raw.
1. BRIDGET: If you'd just breathe in, my lady. / EUGENIA: I am breathing in. / BRIDGET: Further. / EUGENIA: There is no further.
2. Bridget pulls the laces tight. / Eugenia gasps. / They freeze, eye to eye in the mirror, each daring the other to speak first.
3. EUGENIA: Is no one else on duty in this establishment? / No answer. / The gas lamp hisses. / Bridget plucks a pin from her mouth. / BRIDGET: It's only me today, my lady. The others went to the suffrage march. / EUGENIA: Good heavens.
4. She turns her head. / She tries to look at her back in the mirror, wobbling on the platform. / Bridget catches her arm. / BRIDGET: Steady. / EUGENIA: Do not touch me. / BRIDGET: You were falling. / EUGENIA: I was NOT.
5. She steps down, stiff as a flagpole, and sweeps toward the curtain. / Bridget stands. / She grabs her scissors. / She grips them hard. / BRIDGET: You're not finished, my lady. / EUGENIA: I am entirely finished. / BRIDGET: Then you'll leave with the hem undone.
6. Eugenia stops. / She says nothing for a long moment. / Then she turns around and, with great dignity, climbs back onto the platform and raises her arms. / EUGENIA: Proceed.
7. Bridget kneels. / She spits a pin into her palm. / She does not smile. / She very nearly does.

### s00271
0. Brine-crusted timbers. / A cable drum. / One lantern. / Wind through the slats. / SHERIFF AUGUSTINE "GUS" TREVINO (50s, gray mustache, bad knee) sits on an upturned crate. / Rifle across his lap. / Waiting. / Across from him, hands tied to the cable rail: LUCINDA "LUCKY" MARROW (30s, sun-cracked lips, torn duster). / Smiling. / Always smiling. / Behind her, in the doorway: DEPUTY WENDELL OKORO (20s, borrowed hat, pale). / Counting something on his fingers.
1. Gus checks his watch. / Puts it away.
2. GUS: Noon. Should be noon. / LUCKY: Time moves slow in a salt mine. / GUS: Didn't ask you.
3. Silence. / A drip somewhere. / The cable drum creaks.
4. WENDELL: Sheriff. The train's late. / GUS: I can hear that. / Wendell shifts his weight. / The floorboards complain.
5. LUCKY: Your boy's nervous. / GUS: My boy's fine. / WENDELL: I'm fine.
6. He isn't. / His hand rests on his holster. / Slides off. / Rests again.
7. Gus rises. / Knee pops. / He walks to the slat window. / Looks out at white flats and nothing.
8. GUS: Nobody moves till the whistle. / WENDELL: Yes sir. / LUCKY: Hear that? Nobody moves.
9. She tugs the rope. / Testing. / Gus turns. / GUS: Quit that. / LUCKY: Quit what? / GUS: You know what.
10. She lets the rope go slack. / Smile widens.
11. A fourth figure fills the doorway behind Wendell. / Quiet. / Boots on salt. / REVEREND ISAIAH CALLOWAY-BRANT (60s, black frock, spectacles, a Bible under one arm). / Dust on his shoulders. / He tips his hat.
12. CALLOWAY-BRANT: Gentlemen. Lady.
13. Wendell spins. / Hand on the gun this time. / WENDELL: Who in hell are you?
14. CALLOWAY-BRANT: A man looking for water. / GUS: No water here. Only salt. / CALLOWAY-BRANT: So I see.
15. He steps in. / Slow. / Eyes drifting to Lucky. / To the rope. / To the rifle.
16. LUCKY: Morning, Reverend.
17. Gus looks at her. / Looks at the preacher. / GUS: You two acquainted? / CALLOWAY-BRANT: No. / LUCKY: Never met.
18. Too fast. / Both.
19. Gus raises the rifle. / Not at anyone. / Just up. / GUS: Damn.
20. A distant whistle. / Long. / Low.
21. WENDELL: That's the train. / GUS: Everybody stay put.
22. Calloway-Brant sets the Bible on the crate. / Unhurried. / CALLOWAY-BRANT: Sheriff, I'd sit down. / GUS: I'll stand. / CALLOWAY-BRANT: Then stand well.
23. He opens the Bible. / Hollowed out. / A short-barreled pistol.
24. Wendell draws. / Late.
25. The pistol barks. / Wendell spins. / Drops.
26. Gus fires. / Splinters from the doorframe. / Calloway-Brant is already moving, crashing sideways into the lantern.
27. Dark. / Then fire. / The lantern oil catches the dry timber.
28. LUCKY: Cut me loose, Gus! Cut me loose! / GUS: Not a chance.
29. Flames climb the wall. / Smoke rolls. / Calloway-Brant is a shadow behind the cable drum. / CALLOWAY-BRANT: Last chance, Sheriff! / GUS: Come take it!
30. Gus fires at the drum. / Sparks. / The cable snaps free and whips across the room, slashing the rope at Lucky's wrists.
31. She is loose. / She grins. / LUCKY: Thank you kindly.
32. She snatches Wendell's fallen gun. / Gus swings the rifle on her.
33. They freeze. / Three guns. / Three people. / Fire roaring.
34. WENDELL: Don't. / None of them moves.
35. The roof timbers groan. / A beam drops between them in a shower of sparks.
36. They scatter.

### s00565
0. Steam. / Brass taps, a copper tub, white tile gone yellow with age. / A kettle simmers on a wood stove. / A pocket-watch lies on a stool, ticking too loud.
1. ABNER CALLOWAY, 50s, a grey mustache and a hat he won't take off, sits in the tub with his arms along the rim, eyes shut. / His younger partner CALEB DREWRY, 30s, rolls up his sleeves at the stove, sloshing a pot of water.
2. ABNER: You're slow. / CALEB: You're hot. / ABNER: That's the point of a bath, son.
3. Caleb pours. / Steam billows. / Abner exhales, sinks lower.
4. CALEB: He's here. / ABNER: Who? / CALEB: Isaiah.
5. Abner opens one eye. / ABNER: Where? / CALEB: Downstairs. Drinking. / ABNER: Alone? / CALEB: With Hesper. / ABNER: Hm.
6. HESPER VANCE, 20s, in a pressed shirt and a leather vest, leans in the doorway with a cup of coffee, a silver star on her chest. / ISAIAH RUTHERFORD, 40s, in a black coat, steps in behind her, hat low, holding a short shotgun by the barrel. / HESPER: Don't get up, Calloway. / ABNER: Wasn't planning on it. / ISAIAH: You boys been busy. / CALEB: Not as busy as you. / ISAIAH: Hm.
7. He stands very still. / The kettle sings. / Hesper sips. / The pocket-watch ticks.
8. Abner moves one hand, slow, under the soapy water. / HESPER: Whatever's under there, leave it. / ABNER: It's a bar of soap. / HESPER: Leave the soap.
9. Abner raises his hand, empty. / A grin splits his beard. / ABNER: Sheriff, you're a hard woman. / HESPER: Marshal. / ABNER: Beg your pardon.
10. ISAIAH: Calloway. You know why I'm here. / ABNER: Money. / ISAIAH: Yes.
11. ABNER: It's in the stove. / Caleb drops the pot. / Hesper's eyes flick to the fire. / Isaiah steps toward it.
12. In one smooth motion, Abner lunges up, soaking wet, a pistol in his fist, and fires. / The lamp explodes. / Darkness. / Steam. / A scream, a crash of copper, a gunshot, another.
13. When the smoke clears, the tub is empty. / The window is open. / Curtains lift. / Hesper stands at the sill, coffee spilled down her vest. / Isaiah picks the shotgun up off the tile.
14. ISAIAH: He took the soap.

### s00189
0. Arches of living coral rise into green gloom. / Shafts of light pass through a ceiling of slow, shimmering water. / Schools of silver fish loop through pillars like banners in a wind. / The air, impossibly, is breathable, but everything moves as if underwater: hair, robes, flame. / EMPRESS THALASSA-VEY, 80s, ancient and translucent as a jellyfish, sits on a throne grown from pale branching coral. / Her robes drift. / At her right stands ADMIRAL CORVIN HASK, 50s, scarred, armored in abalone plates. / At her left, the young priestess SELENE OKONKWO-REYES, 20s, clutches a conch shell. / At the foot of the dais, a boy, TIDE, 10, sits cross-legged with a dented tin whistle.
1. EMPRESS THALASSA-VEY: The tide has turned. I feel it in my bones. / ADMIRAL HASK: The fleet awaits your word. / SELENE: There is no fleet, Admiral. There are seven ships and four are leaking. / ADMIRAL HASK: Then three.
2. The conch glows in Selene's hands. / Tide blows a soft note on the whistle. / A crab scuttles across the floor.
3. EMPRESS THALASSA-VEY: Selene, what does the shell say? / SELENE: It says the surface is coming down. / ADMIRAL HASK: The surface has always been coming down. / SELENE: Not like this.
4. A VOICE from deep within the walls, vast and slow, rolls through the hall. / THE DEEP: Empress. The debt is due.
5. The fish scatter. / The light dims. / Hask draws a trident. / Thalassa-Vey lifts one hand, and the water stills. / Tide stops playing. / EMPRESS THALASSA-VEY: I know.
6. She rises, slowly, and her robes billow out like a sail. / She steps down from the throne, past Hask, past Selene, and kneels in front of the boy. / Takes the whistle gently from his hands. / EMPRESS THALASSA-VEY: Child, you will play for me. / TIDE: What song? / EMPRESS THALASSA-VEY: The last one. The one your mother taught you.
7. Tide takes a breath and begins, small and thin. / Hask lowers the trident. / Selene lowers the shell. / Above them, the sunlight goes out, one ray at a time.

### s00749
0. A long room of glass eyes. / Foxes, owls, a stag with one antler snapped. / Moonlight crawls over the benches. / A power cut has stopped the wall clock at 2:14.
1. Five people stand in the dark with a single torch: BASTIAN VOLKERS, forties, who owns the place; his sister SOLENE, thirties; their cousin MERIEL, twenties; the neighbour ROYSTON, sixties; and a GIRL, perhaps ten, in a nightgown, whom no one has invited.
2. BASTIAN: Who let you in? / The Girl says nothing. / She stares at the stag.
3. SOLENE: Bas, she's soaked. Look at her feet. / MERIEL: Where are your parents, sweetheart?
4. The Girl lifts a hand and points. / Not at any of them. / At the stag. / Her fingers tremble.
5. ROYSTON: Child, that's a dead deer.
6. GIRL: He said I could sleep in him. / They freeze. / The torch jerks. / Light skates across the glass eyes, and every one seems to turn.
7. BASTIAN: Who said? / GIRL: My name is Pia.
8. Behind her, the stag's head slowly lowers. / PIA: He's very warm.

### s00767
0. Red battle lamps. / Pipes sweating. / Dials and valves everywhere. / The hull creaks like an old ship's timbers.
1. CAPTAIN DOMINIC ARCHER-LYLE, fifties, hands clasped behind his back, stands before the periscope well. / LIEUTENANT PATRICIA "PAT" NOLAN, thirties, executive officer, checks a depth gauge. / From a speaker in the bulkhead, the voice of the sonar operator, unseen.
2. ARCHER-LYLE: Gentlemen, we hold at two hundred feet. Silent running. / NOLAN: Aye, sir. / ARCHER-LYLE: Mr. Nolan, report. / NOLAN: All systems nominal, Captain. Battery at seventy percent. / ARCHER-LYLE: Seventy. Enough for a day.
3. AUGUSTO: Control, sonar. Surface contact, bearing one-two-zero. Single screw. Slow. / ARCHER-LYLE: Merchant? / AUGUSTO: Can't say, sir. No transponder. / ARCHER-LYLE: Pat, plot it. / NOLAN: Plotting.
4. She bends over a chart table. / A ruler, a pencil, a quiet scratch. / The sub rocks gently.
5. ARCHER-LYLE: Quiet night. / NOLAN: Too quiet, sir? / ARCHER-LYLE: Never say that on my boat.
6. She smiles. / A drip falls from a pipe onto the chart. / She wipes it.
7. AUGUSTO: Control, contact is stationary. Engines idle. / ARCHER-LYLE: Odd. / NOLAN: Waiting for us? / ARCHER-LYLE: Or for someone else.
8. Silence. / The lamps pulse. / Nolan straightens.
9. NOLAN: Captain, request permission to raise the scope. / ARCHER-LYLE: Granted. Slowly.
10. She turns the wheel. / The periscope hums up. / She folds the handles and puts her eye to it. / Her face tightens. / ARCHER-LYLE: Well?
11. NOLAN: It's a hospital ship, sir. / ARCHER-LYLE: A hospital ship. / NOLAN: White hull. Red crosses. All lit up. / ARCHER-LYLE: Of course.
12. AUGUSTO: Control, sonar. New contact. Fast. Bearing zero-nine-five. Closing. / NOLAN: Captain! / ARCHER-LYLE: Range? / AUGUSTO: Two thousand yards. / ARCHER-LYLE: Is it hostile? / AUGUSTO: It's ours, sir. Destroyer.
13. NOLAN: Then why is it running dark? / ARCHER-LYLE: Because it's escorting. / NOLAN: Escorting what? / ARCHER-LYLE: The hospital ship, Pat. Which means--
14. AUGUSTO: Torpedo in the water! Bearing one-eight-zero! Not ours! / ARCHER-LYLE: Dive! Dive! Rig for impact!
15. Klaxons. / Red lamps flash. / The deck tilts. / Nolan grabs a rail.
16. NOLAN: Captain, they're targeting the ship! / ARCHER-LYLE: Then we are the only thing in the way. / NOLAN: Sir?
17. ARCHER-LYLE: Come to heading one-eight-zero. Full ahead. / NOLAN: Sir, that's suicide! / ARCHER-LYLE: That is the job.
18. She stares at him. / He stares back. / She breathes in once. / NOLAN: Aye aye, sir.
19. She spins the wheel. / The engines roar. / The sub heels hard.
20. In the periscope's last frame, a white hull glides unknowing through the dark, and between it and the death streaking toward it, a long grey shape cuts across.

### s00140
0. Mud. / Two ropes of frayed hemp. / A line of chalk. / Four people in team shirts stand knee-deep in the slop. / HOLLIS BRANDT hauls the knot. / NEELA CHOWDHURY braces her heels. / TOBY MARCINKIEWICZ squints at the opposing team across the pit. / WENDOLYN ACHTERBERG spits and tightens her grip.
1. HOLLIS: On three. / TOBY: On two. / NEELA: On three! / WENDOLYN: Whatever, just pull!
2. The horn sounds. / The rope snaps taut. / They lean back as one.
3. HOLLIS: Heave! / NEELA: Heave! / TOBY: Don't let go! / WENDOLYN: Don't you dare!
4. Hollis's boot slides. / Neela grabs his belt. / Toby's grip slips. / Wendolyn screams.
5. HOLLIS: Left! / TOBY: Right! / NEELA: Down! / WENDOLYN: Up!
6. The rope goes slack. / All four fall backward into the mud with a splat. / They lie there, eyes toward the sky.
7. Hollis wipes his face. / Neela stares at her hands. / Toby laughs once, short. / Wendolyn closes her eyes.
8. Nobody says who won.

### s00409
0. Wood paneling and low ceiling. / A single table under a bare bulb. / Folding chairs hold a dozen onlookers, cans of soda in hand. / A chalkboard bracket hangs on the wall, with SUNNY and BOOKER circled at the bottom. / SUNNY, 20s, a wiry woman in a headband and a retro track jacket, bounces the ball on her paddle. / BOOKER, 40s, a big, slow man in a cardigan, wipes his hands on his pants. / MILO, 12, the referee, sits on a stepladder with a whistle and a clipboard. / FRANCESCA, 50s, Booker's wife, holds a thermos at courtside.
1. MILO: Nine to eight, Sunny. / SUNNY: I know. / BOOKER: I know.
2. They say it together. / Both flinch.
3. SUNNY: I know the score. ^BOOKER Let's finish this. / MILO: Serve.
4. Sunny serves. / Booker slams it back. / The ball skims the net and drops onto Sunny's side, where it rolls off the table's edge and under a chair.
5. FRANCESCA: Point, Booker! / MILO: Nine to nine. Final game point.
6. The crowd murmurs. / Sunny retrieves the ball, blows on it, and tosses it to Booker.
7. SUNNY: Your serve. / BOOKER: You sure? / SUNNY: I like to win clean.
8. Booker grins. / He rolls his shoulders, steps back, and lets the ball fly. / Sunny returns it with a snap. / It arcs high. / Booker drives it down in a smash that rings on the table. / Sunny dives, paddle outstretched, and flicks it back from the floor.
9. The ball hangs in the air. / Everyone holds their breath. / It lands, clips the edge, and drops. / MILO: Point... Sunny.
10. The room erupts. / Sunny leaps up, fists raised. / Booker bows his head, laughs, and holds out a hand.
11. BOOKER: Well played. / SUNNY: You almost had me. / FRANCESCA: He always almost has them.

### s00976
0. Cubicles line the old viewing room. / A faux-brass chandelier. / A banner reads "WE'RE ALL FAMILY HERE." / Coffins serve as supply cabinets.
1. MR. PELLINGHAM (50s, bow tie, sweating) stands on a velvet kneeler holding a clipboard. / GLORIA (40s, reading glasses on a chain) sorts paperclips. / SPUD (30s, hoodie) eats cereal from a casket lid. / ADAEZE (20s, headset, razor eyes) types without looking.
2. MR. PELLINGHAM: People! People! Today we pivot. / GLORIA: We pivoted yesterday, Mr. Pellingham. / SPUD: Twice. Before lunch. / MR. PELLINGHAM: Spud, today we pivot to a pivot.
3. ADAEZE: Is that a metric? / MR. PELLINGHAM: Adaeze, it's a mindset. / GLORIA: What happened to the mindset? / SPUD: It got laid off.
4. MR. PELLINGHAM: Nobody got laid off. We are right-sizing the horizon. / ADAEZE: Gloria, did he say horizon? / GLORIA: He said horizon.
5. MR. PELLINGHAM: I am going to need everyone's quarterly aspirations by noon. / SPUD: Mr. Pellingham, I only have a quarterly nap. / GLORIA: Spud!
6. ADAEZE: Put it in the shared folder. / MR. PELLINGHAM: Thank you, Adaeze. / SPUD: He thanked her. Mark the calendar. / GLORIA: Mark it. Under "Funeral".
7. Mr. Pellingham looks at the banner. / Climbs down. / Sighs.
8. MR. PELLINGHAM: Friends, let's just have cake. / SPUD: Is it from the last funeral? / MR. PELLINGHAM: It's... lemon.

### s00700
0. A great glass dome shelters a jungle of tropical plants. / Above, rain on the panes. / Below, a long dining table laid with candles, crystal, and silver, at which six guests have gathered for a gala dinner.
1. CALISTA MOREAU, 50s, the hostess, in a ruby gown, presides at the head. / BARTHOLOMEW "BART" QUINCE, 60s, the collector, red-faced and jovial, sits at her right. / NAVEEN RAO, 40s, the insurance assessor, taps a pen against his wine glass. / LUDMILA, 30s, a violinist, waits in her chair with the instrument in her lap. / FERRIS, 40s, the butler, stands behind with a silver tray. / ZHOU MEI, 30s, a restorer, studies the centerpiece, a small bronze sculpture on a pedestal of black marble.
2. CALISTA: Ladies and gentlemen. Dinner. / BART: At last.
3. NAVEEN: Before we eat, Mrs. Moreau, I'd like to confirm the sculpture's appraisal. / CALISTA: Four million. / NAVEEN: Four and a half, I believe, by the last estimate. / CALISTA: You are very precise. / NAVEEN: It is my profession.
4. ZHOU MEI: It's very beautiful.
5. BART: It is a fraud. / LUDMILA: Excuse me? / BART: The original is in a private vault in Zurich. I bought it myself. This is the copy.
6. CALISTA: You are wrong, Bartholomew. / BART: I am never wrong about bronzes.
7. FERRIS: Shall I pour, madam? / CALISTA: Please. / FERRIS: Very good.
8. NAVEEN: If it is a copy, the insurance is void. / ZHOU MEI: It is not a copy. / NAVEEN: How would you know?
9. ZHOU MEI: I restored it. I know every scratch. / BART: Then you are in on it. / ZHOU MEI: I am not in on anything.
10. LUDMILA: Someone play me a waltz. This is unbearable.
11. CALISTA: Ludmila, hush. Zhou Mei, if you restored it, what did you find on the base? / ZHOU MEI: A maker's mark. Three letters. / CALISTA: And what were they? / ZHOU MEI: C. M. R.
12. CALISTA: Calista Moreau, Restorer. My own mark. / BART: You made it. Yourself. / CALISTA: Thirty years ago. In this conservatory.
13. NAVEEN: Mrs. Moreau, do you understand what you're saying? / CALISTA: Perfectly. The Zurich bronze is the forgery, Bartholomew.
14. Bart stands. / His chair crashes behind him.
15. BART: You sold me a fake. / CALISTA: Forty years ago. For a very good price.
16. FERRIS: Shall I call the police, madam? / CALISTA: Not yet, Ferris. Pour the wine.

### s00651
0. Stacked chairs, a drained pool outside the glass wall, a wind-torn flag. / One table is set in the middle of the empty floor: two cups, a plate of untouched pastries, a guttering candle in a jar.
1. ODALYS FONTAINE sits with her back straight and her coat still on. / JULIEN ARMAND-REYES stands at the counter with his hat in his hands, as if he had just come in and might still go back out.
2. He crosses the room. / She watches him come, and he sees her watching, and slows. / He puts the hat on the table instead of his chair, and sits, and she pours him coffee without being asked, her hand perfectly steady, and he looks at the cup and not at her.
3. JULIEN: You came. / ODALYS: You asked. / JULIEN: I wasn't sure you'd read it. / ODALYS: I read it eleven times.
4. He smiles, briefly. / She doesn't. / She pushes the plate toward him with two fingers, and he takes a pastry, turns it over, and sets it down again without biting.
5. JULIEN: You're angry. / ODALYS: I'm tired. / JULIEN: It's the same thing, with you. / ODALYS: It's never been the same thing. That was always your mistake.
6. He lets that settle. / Outside, the wind drags a loose sheet of tarp across the empty pool, and the sound is like a long slow breath. / She hears it too. / They both glance at the glass. / For a moment, a gull hangs in the gray, perfectly still.
7. JULIEN: I should say I'm sorry. / ODALYS: You should. / JULIEN: I am. / ODALYS: I know.
8. She stands. / She buttons her coat to the throat, slowly, and he rises with her, awkward, wanting to reach for her sleeve and not daring. / She takes a pastry from the plate and wraps it in a napkin, and slides it into her pocket, and looks at him one last time.
9. ODALYS: For the train. / JULIEN: Odalys -- / ODALYS: Goodbye, Julien.
10. She goes. / He doesn't follow. / He stands in the empty room with the candle burning down, and then, carefully, he sits back down and begins to drink her coffee.

### s00397
0. A beat-up hatchback inches through the dark. / Foam slides down the windshield in thick white curtains. / Brushes thump and whirl. / SOLEDAD, 18, sits in the driver's seat in her graduation gown, cap still on. / KWAME, 18, in the passenger seat, holds a diploma cover on his lap.
1. She stares ahead. / He stares at the foam.
2. The car stops in a pool of blue light. / Water drums on the roof.
3. KWAME: We could've gone to the party. / SOLEDAD: You hate parties. / KWAME: I hate that one.
4. She nods. / Her hands tighten on the wheel. / The brushes retreat.
5. A jet of water hits the glass, and for a moment the world outside is nothing but a trembling white.
6. SOLEDAD: You got the letter. / KWAME: Yeah. / SOLEDAD: Where? / KWAME: Out west.
7. She says nothing. / He turns the diploma cover over in his hands.
8. She puts the car in drive, and it rolls forward into the dryers, which roar.
9. He rolls his window down and lets the warm air in. / She takes off her cap and places it on the dash.

## Comparisons
p0: a = s00651 beat 0 | b = s00535 beat 2
p1: a = s00565 beat 9 | b = s00218 beat 2
p2: a = s00358 beat 14 | b = s00624 beat 0
p3: a = s00073 beat 7 | b = s00397 beat 2
p4: a = s00271 beat 31 | b = s00141 beat 4
p5: a = s00841 beat 4 | b = s00305 beat 8
p6: a = s00220 beat 7 | b = s00565 beat 13
p7: a = s00650 beat 4 | b = s00683 beat 4
p8: a = s00535 beat 16 | b = s00930 beat 8
p9: a = s00700 beat 6 | b = s00976 beat 5
p10: a = s00218 beat 6 | b = s00535 beat 10
p11: a = s00608 beat 3 | b = s00221 beat 0
p12: a = s00535 beat 15 | b = s00613 beat 1
p13: a = s00683 beat 0 | b = s00147 beat 15
p14: a = s00271 beat 5 | b = s00535 beat 16
p15: a = s00650 beat 3 | b = s00036 beat 15
p16: a = s00285 beat 2 | b = s00670 beat 8
p17: a = s00397 beat 4 | b = s00650 beat 7
p18: a = s00613 beat 0 | b = s00565 beat 11
p19: a = s00650 beat 0 | b = s00767 beat 8
p20: a = s00651 beat 2 | b = s00749 beat 5
p21: a = s00358 beat 6 | b = s00613 beat 1
p22: a = s00147 beat 9 | b = s00608 beat 9
p23: a = s00330 beat 6 | b = s00837 beat 7
p24: a = s00397 beat 5 | b = s00829 beat 10
p25: a = s00535 beat 11 | b = s00749 beat 2
p26: a = s00767 beat 18 | b = s00650 beat 5
p27: a = s00829 beat 7 | b = s00220 beat 2
p28: a = s00328 beat 6 | b = s00650 beat 2
p29: a = s00319 beat 0 | b = s00565 beat 8
p30: a = s00547 beat 6 | b = s00973 beat 11
p31: a = s00570 beat 6 | b = s00767 beat 15
p32: a = s00624 beat 12 | b = s00930 beat 4
p33: a = s00883 beat 15 | b = s00305 beat 3
p34: a = s00678 beat 3 | b = s00700 beat 1
p35: a = s00328 beat 0 | b = s00141 beat 5
p36: a = s00141 beat 8 | b = s00140 beat 0
p37: a = s00319 beat 10 | b = s00036 beat 13
p38: a = s00219 beat 5 | b = s00565 beat 13
p39: a = s00426 beat 3 | b = s00930 beat 0
p40: a = s00608 beat 2 | b = s00325 beat 1
p41: a = s00285 beat 1 | b = s00271 beat 1
p42: a = s00147 beat 10 | b = s00535 beat 11
p43: a = s00319 beat 1 | b = s00692 beat 18
p44: a = s00767 beat 10 | b = s00608 beat 5
p45: a = s00271 beat 32 | b = s00330 beat 5
p46: a = s00325 beat 12 | b = s00535 beat 7
p47: a = s00930 beat 7 | b = s00220 beat 0
p48: a = s00271 beat 12 | b = s00565 beat 12
p49: a = s00883 beat 18 | b = s00305 beat 4
p50: a = s00305 beat 8 | b = s00409 beat 1
p51: a = s00219 beat 2 | b = s00147 beat 16
p52: a = s00397 beat 5 | b = s00613 beat 0
p53: a = s00930 beat 3 | b = s00147 beat 21
p54: a = s00749 beat 4 | b = s00271 beat 12
p55: a = s00678 beat 0 | b = s00767 beat 10
p56: a = s00147 beat 19 | b = s00683 beat 1
p57: a = s00608 beat 0 | b = s00565 beat 10