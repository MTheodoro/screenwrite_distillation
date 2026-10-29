You are an annotator labeling screenplay scenes for a dataset.

Rate dramatic tension. Below are scenes split into numbered beats.

1. For every scene, give one score 0-100 per beat (same order).
2. Then answer each cross-scene comparison: which beat is MORE tense, "a", "b" or "tie".

Tension = what a reader feels: stakes, conflict, threat, urgency, suspense. Loud or violent is not automatically
tense; a quiet threat can be very tense. Absolute anchors: 0-15 calm/mundane, 15-35 mild friction or unease,
35-60 clear conflict or suspense, 60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death /
climactic moment.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/tension_T/group_002.json with the Write tool:
{"scores": {"<scene_id>": [..], ...}, "pairs": {"<pair id>": "a"|"b"|"tie", ...}}
Valid JSON only. Reply only with "done".

## Scenes

### s00232
0. A slot of black rock, ice-glazed. / Wind scours the canyon floor. / Snow hisses along the ridge like sand. / At the bottom, half under an overhang, a collapsed tent: orange nylon sagging under a week of drift. / Beside it, a dead stove and a rope tied to nothing. / DR. WILHELMINA OSEI-STRAND (40s, glaciologist, frostbitten cheeks, a parka two sizes too big) crouches beside her younger colleague, TOMAS BRENNAN-ADEYEMI (20s, field assistant, one boot missing), who sits propped against the rock with his eyes half open.
1. WILHELMINA: Talk to me. Count backward from ten. / TOMAS: Ten. Nine. / WILHELMINA: Keep going. / TOMAS: Eight. Tired.
2. She tucks her scarf around his throat. / Stands. / Cups her mouth toward the ridge. / WILHELMINA: Anyone! Anyone up there!
3. Only the wind answers. / She lowers her hands. / Mutters, barely audible. / WILHELMINA: Okay. Okay. Think. Fire. Heat. Water.
4. She digs through the wreck of the tent and finds a single flare, cracked at the base. / She weighs it in her glove.
5. WILHELMINA: We've got one shot. When I say, close your eyes. / TOMAS: Why? / WILHELMINA: Because I'm going to try to be a lighthouse.
6. She strikes. / The flare sputters, catches. / Red light floods the walls of the gorge, and the falling snow turns to rubies.
7. Far above, a faint, answering glow.

### s00492
0. A narrow courtyard hemmed by timber houses leaning toward each other like drunken gossips. / The oven door glows red. / Upwind, over the rooftops, the sky has begun to bloom a dull and sullen orange.
1. THOMAS FARRINER (50s, baker, flour to the elbow) stands at the oven mouth with a wooden peel, sliding out the last loaf of the night. / His wife ALICE FARRINER (40s, shawl over a nightdress) bangs the shutters closed one by one. / Their daughter MARGERY (12, barefoot, hair undone) clutches a cat to her chest by the well. / The apprentice JEREMIAH PICKLE (16, soot-faced) hauls buckets across the cobbles, slopping water. / Beside the gate, a neighbor, WIDOW CATHERINE MOLINEUX (60s, nightcap, rosary), stands with her mouth moving in silent prayer.
2. And out of the shadows, a stranger on a gray horse, the King's messenger, SIR HUGH WAINWRIGHT (40s, mud to the thighs, a sealed letter in his gauntlet), reins in at the gate.
3. WAINWRIGHT: Master Farriner! By the King's order, put out your oven. / THOMAS: It's out, sir. Near enough. / WAINWRIGHT: Near enough has burned a parish.
4. Thomas turns to Jeremiah, who has frozen with a bucket in each hand. / Alice drops the last shutter-bar. / Margery tightens her grip on the cat, which squirms and yowls.
5. ALICE: Thomas. / THOMAS: I hear. / ALICE: Look at the sky.
6. He does not look. / He keeps his eyes on the horseman. / The widow's rosary clicks.
7. The orange in the sky deepens; a distant bell begins to toll, then another, then three at once.
8. WAINWRIGHT: The fire is at Fish Street. It will be at the Bridge by dawn.
9. MARGERY: Papa, are we to leave? / THOMAS: We are not. / ALICE: Thomas. / THOMAS: We are not leaving my oven.
10. WAINWRIGHT: Master Farriner, I have orders. / THOMAS: Then read them.
11. Wainwright breaks the seal and reads silently. / Thomas wipes his hands on his apron, and Alice, seeing it, steps forward and takes the loaf from the peel and presses it into Margery's arms beside the cat. / Jeremiah sets down the buckets and begins, without being told, to untie the oven's iron door.
12. WAINWRIGHT: The order is plain. Quit the lane. All of you. / THOMAS: Where do we go, sir? / WAINWRIGHT: North. Moorfields.
13. Silence. / The bells swell.
14. A glowing ember lands on the stones at Catherine's feet. / She crosses herself and steps on it.
15. CATHERINE: God keep this house. / ALICE: He will, Catherine. Come with us. / CATHERINE: I'll bring my chair.
16. Thomas takes one last look at the oven. / Its mouth glows like an eye closing. / He lays the peel across the sill, and lifts the latch of the gate.
17. THOMAS: Jeremiah. Take the handcart. / JEREMIAH: Yes, Master.
18. Thomas offers Alice his arm. / She takes it. / They file out into the lane, the cat wailing, the loaf warm in Margery's arms, and the orange glow licking down the rooftops behind them.

### s00818
0. Soft lilac walls. / A small satin-lined coffin on a stand. / Lilies. / A framed photo of a hamster named Pickle.
1. GWENDOLYN POPPLEWELL, 40s, black veil and a pinched face, dabs a handkerchief at dry eyes. / RAYMOND TSOSIE-KANE, 30s, in a tie too tight for him, adjusts a floral arrangement without being asked.
2. RAYMOND: Friends. Family. We gather today to honor Pickle.
3. GWENDOLYN: Raymond. Nobody's here. / RAYMOND: Practice, Mrs. Popplewell. / GWENDOLYN: I'm Gwendolyn. / RAYMOND: Gwendolyn. Forgive me.
4. She sniffs. / The room is calm. / A bell chimes from the hall.
5. GWENDOLYN: He was a good hamster. / RAYMOND: The very best. / GWENDOLYN: Did you know him? / RAYMOND: Only from the photograph.
6. GWENDOLYN: Seven hundred dollars for a hamster. / RAYMOND: Mm? / GWENDOLYN: Nothing.
7. Raymond lifts the coffin lid to adjust the satin. / He stops. / Peers in. / Gently lowers the lid and clears his throat.
8. RAYMOND: Mrs. Popplewell. Gwendolyn. How much did you say Pickle weighed? / GWENDOLYN: Two ounces. / RAYMOND: Right. / GWENDOLYN: Why?
9. Raymond turns the little coffin around. / Opens it again. / Inside, on the satin, lies a perfectly preserved dinner roll. / RAYMOND: Folks, I think we have a clerical error.
10. Gwendolyn lowers her handkerchief. / Stares at the roll.
11. GWENDOLYN: Oh, thank God. / RAYMOND: Pardon? / GWENDOLYN: Pickle's in the car.

### s00454
0. Salt-stained windows. / Two mugs. / A kettle starting to rattle.
1. ROSALIE (60s, cardigan) cracks eggs. / Her sister CONSTANCE (60s, cardigan) slices bread. / Same hands. / Same sigh.
2. ROSALIE: Connie, sit. / CONSTANCE: Rosie, I'm fine.
3. She isn't. / She grips the counter. / Rosalie sets down the bowl.
4. ROSALIE: Did you take the pills? / CONSTANCE: Did you? / ROSALIE: Yes. / CONSTANCE: Yes.
5. They speak together. / They stop. / The kettle shrieks. / Neither moves.
6. Constance turns the burner off. / She pours. / Her hands are steady now.
7. CONSTANCE: She said I could stay. / ROSALIE: Who? / CONSTANCE: The woman from the county. She told her I could stay.
8. Rosalie sits. / Slowly.
9. ROSALIE: Connie, there was no woman.
10. Constance smiles, sets a mug before her, and says nothing.

### s00970
0. Green water laps the third stair. / Moonlight through broken tracery. / One huge bell, furred with barnacles.
1. ORSOLYA (30s, salt-white braid, bone-needle at her belt) crouches on a beam. / Soaked. / Grinning.
2. KEZIAH (20s, half-fox ears, patched coat) hauls himself through the window. / Drips everywhere.
3. ORSOLYA: You're late, Kez. / KEZIAH: The tide was early. / ORSOLYA: The tide is never early. You were.
4. He lifts a lantern. / Inside, a trapped blue flame. / KEZIAH: Got it. Moon-ember. Off the sleeping tax-collector himself.
5. She snatches it. / Laughs. / Kisses his forehead. / ORSOLYA: Kezi. You beautiful thief.
6. The bell hums. / Low. / Wrong.
7. KEZIAH: Orsolya. That's not us. / She freezes. / So does he.
8. Water rises. / Fast. / Knee-deep. / Waist.
9. ORSOLYA: Take the rope. / KEZIAH: Not without you!
10. She shoves him. / Hard. / He grabs the bell-rope, swings, slams against stone. / Hisses.
11. ORSOLYA: Ring it! / KEZIAH: It'll wake the whole drowned choir! / ORSOLYA: Better them than the tide!
12. He hesitates. / Then pulls.
13. DONG. / The sound rolls out like thunder under glass. / The water stops. / Shivers. / Retreats.
14. Silence. / They stare at each other. / Then both burst out laughing.
15. KEZIAH: Never again. / ORSOLYA: Liar.
16. Somewhere below, a choir begins to sing. / Off-key. / Furious.
17. She grabs his hand. / They run.

### s00922
0. A tin-roofed chapel on the edge of the alkali flats. / Pews pulled out and stacked against the wall. / In the middle of the floor, a block of rock salt the size of a coffin, glittering where the light finds it. / HOLLIS BRANDT-OKAFOR stands in the doorway, dust to his knees. / He is lean, sunburned, and carries a rifle like it weighs nothing. / He lets his eyes adjust. / Across the room, a woman sits on the altar rail with her boots swinging. / She does not look up when he enters. / She is peeling an orange with a skinning knife. / At the back, in the pulpit, a boy no older than fifteen crouches with a canvas sack in his arms. / He is trying to be invisible.
1. HOLLIS: Mercy Calloway. / MERCY: Marshal Brandt. You're a long way from a courthouse. / HOLLIS: Forty miles. The horse died twenty back. / She cuts a slice of orange and eats it. / MERCY: Then you walked into the one place I know you'd come.
2. HOLLIS: The boy. / MERCY: He's not mine. / HOLLIS: That's not what the telegraph said. / MERCY: Telegraph says a lot.
3. HOLLIS: It said you took his father's payroll. It said you took the father, too. / MERCY: It said that. / HOLLIS: Did you? / MERCY: Do you want me to say yes so you can hang me, or no so you can call me a liar? / HOLLIS: I want the truth. / MERCY: Then you're the first man in this territory who does.
4. She finally looks at the boy. / He shrinks. / MERCY: Tell him, Eli. Tell him what you saw. / ELI: I -- my pa -- / HOLLIS: Easy, son.
5. ELI: My pa shot first. / HOLLIS: At who? / ELI: At her. She was only standing there. / HOLLIS: Standing where? / ELI: By the well. She had the sack, she was giving it back. / MERCY: I told you, boy, that's enough. / HOLLIS: No, let him finish. / ELI: My pa wanted it for himself. He wanted all of it. He said if she lived, she'd talk.
6. HOLLIS: And the father? / ELI: He fell in the well. / MERCY: He fell. Not pushed. Fell. / HOLLIS: Eli, did she push him? / ELI: No, sir. / HOLLIS: Then why did you run? / ELI: Because everybody said she did.
7. A long silence. / Salt ticks in the heat. / Outside, wind starts pulling at the tin roof.
8. HOLLIS: I walked forty miles for a killer. / MERCY: And now? / HOLLIS: Now I've got a witness and a thief and a sack of money that belongs to a dead man's widow. / MERCY: That sounds like a mess, Marshal. / HOLLIS: It sounds like a trial. / MERCY: You'd put a fifteen-year-old on a stand against his own blood? / HOLLIS: I'd put the truth on a stand. He's just how it gets there.
9. ELI: I'll do it. / MERCY: Eli -- / ELI: I'll do it, Miss Mercy. Somebody ought to say it out loud.
10. Mercy slides off the altar rail. / She folds the knife and sets it on the salt block, handle toward Hollis. / MERCY: Then I suppose I'm in your custody. / HOLLIS: I suppose you are.
11. She holds out her wrists. / He doesn't take them. / He lifts the rifle, turns, and opens the chapel door to a white and blinding sky. / HOLLIS: Walk with me. It's forty miles. / MERCY: And the boy? / HOLLIS: He walks too.
12. The three of them step out into the glare.

### s00342
0. A strip of crushed oyster shell beneath concrete pillars. / Traffic thunders overhead. / Folding chairs line the court. / A thermos of espresso sits on an overturned crate. / NONNA FILOMENA, eighties, in a black dress and sensible shoes, squints at the pallino. / BIG WALT, fifties, her opponent, a trucker in a leather vest, crouches with a ball cradled in his palm. / DARIUS, fifteen, Walt's nephew, holds the measuring string and a notebook.
1. She straightens, shifts her weight, and sends her ball down the shell with a sharp flick of the wrist while he lobs his in a high arc, and the two collide mid-court in a crack that scatters dust, and the pallino rolls under a chair where Darius scrambles after it on his knees.
2. NONNA FILOMENA: That's mine. / BIG WALT: That's a tie. / DARIUS: It's closer to the chair.
3. NONNA FILOMENA: Darius, measure! / BIG WALT: Don't measure, Darius. / DARIUS: I'm measuring.
4. NONNA FILOMENA: Walt, you cheat. / BIG WALT: Nonna, I've never cheated in my life.
5. DARIUS: It's four inches. / NONNA FILOMENA: Four inches for who? / BIG WALT: For me, obviously. / DARIUS: For her.
6. Walt looks at Darius. / Darius looks at Nonna. / She lifts the thermos, takes one sip, and offers it to Walt.

### s00867
0. Frost on steel. / Fog from the freezer doors. / A forklift idles with its lights on. / Pallets of boxed fish stacked to the ceiling. / VALENTIN MOROZOV, 40s, in a parka, checks a manifest. / CORINNE ABBOTT, 30s, in a black ski jacket, stands beside a pallet, tapping a tablet. / MATEUS SOARES, 30s, a forklift driver in a reflective vest, leans on a pole. / HANA PARK, 20s, a nervous clerk, clutches a clipboard.
1. He glances at his watch. / She glances at him.
2. He whispers to the clerk. / She goes pale. / CORINNE: Something wrong? / VALENTIN: Paperwork.
3. A truck horn sounds outside. / He signals to the driver. / The driver nods.
4. Mateus climbs onto the forklift. / Hana steps back. / HANA: Mr. Soares, that pallet isn't on the list. / MATEUS: It's on mine.
5. He lifts the pallet. / A box slips.
6. It splits on the concrete, and ice-wrapped bricks of white powder spill out.
7. Silence. / Valentin's hand goes to his jacket.
8. Corinne looks at the powder. / She looks at him. / She steps in front of Hana. / CORINNE: Hana. Behind me.
9. Valentin draws. / She raises her tablet like a shield. / He fires. / The tablet shatters.
10. She dives, rolls, and kicks the forklift's emergency stop. / Mateus tumbles from the seat. / Hana screams. / The lights flicker.
11. He scrambles toward a pallet. / Valentin pursues him through the stacked boxes.
12. She grabs Hana's wrist and drags her toward the dock door. / A shot rings. / Plaster dust rains.
13. At the door, she rips it open. / Cold night air rushes in. / Red and blue lights flash across the lot. / Sirens rise.
14. Valentin stops in the middle of the aisle. / He lowers his gun slowly, looking at the lights.

### s00614
0. Screen door. / Wicker chairs with faded cushions. / A pitcher of lemonade sweating on a card table. / Cicadas. / NANA, 80, in a floral housedress and slippers, snaps green beans into a bowl. / OTIS, 17, in a graduation gown, sits sprawled on the steps, tie loose, cap in his lap. / LUCINDA, 16, his sister, in a satin prom dress and sneakers, leans on the porch rail, swinging one foot.
1. Nobody says anything about the empty chair. / Nana snaps a bean. / Otis peels the gold tassel off his cap. / Lucinda crosses to the card table, pours three glasses, and places one in front of the empty chair without comment.
2. OTIS: Nana, you didn't have to come to the ceremony. / NANA: I'm not dead yet. / OTIS: I know. But the bus is long. / NANA: So is the road to Heaven.
3. LUCINDA: Drink. / NANA: I'll drink when I'm done. / LUCINDA: You're done. / Nana looks at the bowl. / Looks at her granddaughter. / Takes the glass.
4. A car passes slowly on the road. / Headlights sweep the porch. / Otis turns his head to follow it, and Lucinda glances at the empty chair, and Nana keeps her eyes on the beans, and the car drives on, and the dust it raised settles slowly in the porch light.
5. OTIS: He said he'd be here. / NANA: He said a lot of things. / LUCINDA: He sent a card. / OTIS: A card isn't a person. / LUCINDA: It's better than nothing. / OTIS: Is it?
6. Lucinda doesn't answer. / She lifts the glass from the empty chair and drinks it herself. / Otis watches her. / A cicada rasps, falls silent, rasps again.
7. NANA: Otis, come here. / He climbs the steps, kneels beside her chair. / She puts her knotted hand on his head, over the hair he has cut short for the occasion.
8. NANA: You walked across that stage like you owned it. / OTIS: I tripped. / NANA: You recovered. / He laughs into her knee. / Lucinda looks away, out at the dark yard, the fireflies rising from the grass.
9. NANA: Lucinda. You too. / Lucinda hesitates. / Then crosses, sits on the other side, leans her head against Nana's shoulder.
10. Nana puts down the bowl and takes them both in, one in each arm, as she has done since they were babies. / The empty chair stays empty.

### s00471
0. An Olympic-length basin, empty to the tiles. / Lane lines still hang from their reels, slack as old rope. / A faded blue fish is painted at the deep end. / Pigeons walk the gutter.
1. HOLLIS BRANDVOLD (60s, lanky, a lifeguard whistle still on a cord around his neck) stands on the pool floor with a push broom. / He sweeps nothing in particular.
2. NADIA BRANDVOLD (30s, his daughter, city-council lanyard, work shoes ill-suited to wet tile) climbs down the steel ladder one rung at a time. / At the bottom she stops and looks up at the ceiling lights.
3. He keeps sweeping. / She walks toward him.
4. HOLLIS: Careful by the drain. It's slick. / NADIA: It's been closed since March. / HOLLIS: Still slick.
5. She reaches him. / He doesn't stop. / She takes hold of the broom handle. / He lets her. / For a moment they both hold it, neither moving.
6. NADIA: They vote Thursday. / HOLLIS: I heard. / NADIA: I'm going to vote yes.
7. He nods at the painted fish. / His thumb rubs the whistle.
8. HOLLIS: Your mother used to swim here at six a.m. Every day. Forty laps. / NADIA: I know. / HOLLIS: She hated the cold water. She did it anyway. / NADIA: Dad.
9. He takes the broom back. / She lets go. / He sets it against the wall and they both look at the deep end, where the tile is cracked in a long, clean line.
10. HOLLIS: Fill it with dirt. Plant something. / NADIA: That's the plan.
11. He nods. / She stands beside him. / Neither leaves.
12. A pigeon lifts out of the gutter and crosses the empty basin, and both of them follow it with their eyes until it clears the rim.

### s00874
0. The star projector hums, throwing a slow ocean of light across a curved ceiling. / The seats recline. / Most are empty. / WINIFRED PARRISH, 30s, a sensible coat and a sensible umbrella, sits alone in row F. She watches Orion rise.
1. A STRANGER, 30s, in a rumpled raincoat, slides into the seat beside her. / He carries a paper cup of coffee and an apologetic smile. / STRANGER: Is this seat taken? / WINIFRED: There are two hundred seats. / STRANGER: I like this one.
2. She considers him, then looks back at the stars. / He sips his coffee. / Neither speaks for a while.
3. WINIFRED: Betelgeuse is late tonight. / STRANGER: It's always late. It's a very old star.
4. MR. ABERNATHY, 70s, the caretaker in a navy cardigan, shuffles down the aisle with a flashlight. / He pauses at row F. / MR. ABERNATHY: Last show's over, folks. Ten minutes. / WINIFRED: Thank you, Mr. Abernathy.
5. MR. ABERNATHY: Who's your friend? / WINIFRED: Yes. Who are you? / STRANGER: Julian. Julian Hale.
6. Mr. Abernathy nods, satisfied, and shuffles on.
7. JULIAN: You come here often? / WINIFRED: Every Thursday. / JULIAN: Then I'll see you Thursday.
8. She smiles at the ceiling, not at him. / Overhead, a comet drifts across the dome.
9. MR. ABERNATHY: Lights in five! / JULIAN: Stay for the comet.
10. She does.

### s00744
0. Stone steps. / Sacks of seed potatoes. / Wine racks lie smashed. / A single oil lamp throws a trembling circle on the floor. / Above, the rhythmic thud of distant artillery sifts dust from the beams.
1. MARGUERITE LEBLANC, thirties, war correspondent, trench coat torn at the shoulder, kneels over a wire recorder balanced on a crate. / Her hands are steady. / Her face is not.
2. She threads the wire through the reel. / Listens upward. / Threads it again.
3. She presses the record lever. / A red light glows. / MARGUERITE: This is Marguerite LeBlanc. The ninth of June, nineteen forty-four. I am in a cellar outside Carentan. The Germans are in the next field.
4. A shell lands close. / Dust rains. / She flinches, covers the recorder with her body, then straightens. / MARGUERITE: They have been shelling for six hours. I have no food. I have a notebook and this machine.
5. She stops. / Rewinds. / Plays it back. / MARGUERITE: "...I have no food. I have a notebook and this machine."
6. She grimaces. / Presses stop. / Presses record again. / MARGUERITE: Correction. I have a notebook, this machine, and half a tin of sardines.
7. A wry twist of her mouth. / She opens the tin with her penknife. / Eats one fish with her fingers.
8. Upstairs, a door BANGS. / Boots on boards. / She goes still. / She slides the tin under the crate. / She extinguishes the lamp with her palm.
9. Darkness. / Only the faint red glow of the recorder. / She smothers it with her coat.
10. Boots cross the floor above, step by step. / Dust trickles. / Her breath is shallow and quick.
11. The boots stop directly overhead. / A floorboard creaks. / She does not move. / She does not blink.
12. A voice mutters in German. / A second answers, lower. / A laugh. / The boots move away toward the front door.
13. She exhales, long and slow. / Lifts the coat. / The recorder's red eye glows, defiant.
14. She relights the lamp with trembling fingers. / She pulls the microphone to her mouth. / MARGUERITE: They have gone. For now.
15. She winds the wire back. / Plays. / MARGUERITE: "They have gone. For now."
16. She stares at the spinning reel. / Then she reaches for her notebook and begins to write, fast, the pencil scratching in time with the shells.
17. Another shell lands. / Closer. / Plaster falls from the ceiling and settles in her hair.
18. She keeps writing. / MARGUERITE: The cellar door is the only way out. It is locked from the outside.
19. She stops. / Looks at the stairs. / The top step is bright with a thin line of lamplight from under the door.
20. She rises, climbs three steps, and tests the handle. / It does not give. / MARGUERITE: Naturally.
21. She descends. / Sits again at the recorder. / Presses record. / MARGUERITE: If this recording is found, please send it to the Daily Courier, London. Tell them I filed on time.
22. She smiles at that. / It does not last.
23. The ceiling groans. / A crack runs along the central beam. / Sand drips in a steady stream.
24. She gathers the notebook and the reel into her satchel. / She slings it across her chest. / She climbs the stairs, braces her shoulder against the door, and shoves. / Once. / Twice.
25. The wood creaks but holds.
26. She steps back, breathing hard, and looks for something. / Anything. / Her eyes land on the broken wine rack. / She grabs a splintered post.
27. She wedges it under the latch. / She leans her whole weight on it.
28. The door cracks. / Light spills down the steps. / She shoves harder, teeth bared.
29. The door gives. / She tumbles into a kitchen with half a roof, and lies on the floor for one breath, two, in the red glow of a burning barn through the window.
30. She sits up. / Checks the satchel. / The reel is intact. / MARGUERITE: Filed.
31. She stands, pulls the coat tight, and walks out into the firelight.

### s00503
0. Grey carpet tiles. / Grey partitions. / A ficus, plastic, gathering dust on a filing cabinet. / A motivational poster: PERSEVERE, with a kayaker in a flooded canyon.
1. NORBERT PLUM (50s, short-sleeved dress shirt, lanyard overlong) types with two fingers. / He hasn't smiled since 2011.
2. IMOGEN TRAVIS-OKORO (20s, new hire, cardigan with a sticker still on the sleeve) appears at the cubicle opening with a box of donuts. / IMOGEN: Hi! I'm Imogen. I'm in 14D.
3. Norbert doesn't look up. / NORBERT: There's no 14D. / IMOGEN: They built it this morning. / NORBERT: Hm.
4. She sets the box on his desk. / He finally looks at it. / Then at her. / Then, very slowly, he opens the lid and takes a donut.
5. NORBERT: Thank you. / IMOGEN: You're welcome!
6. He bites. / His eyes close. / A tear slides from one of them.
7. IMOGEN: Are you okay? / NORBERT: Fourteen years. Nobody has ever brought me a donut.
8. He wipes his face with the lanyard. / She pulls over a chair and sits.

### s00734
0. Blizzard shakes the shutters. / The dining hall has been cleared, tables pushed to the walls, a stretcher laid across the cloth of the nearest. / DR. ELSPETH VANTERPOOL, fifties, in a borrowed fleece, leans over WILLA PETTIGREW, thirties, a skier with a deformed shin who clenches a lodge napkin in her teeth. / NURSE BUNMI OYELARAN, twenties, cuts the ski boot with trauma shears while ski patroller JOAQUIM PINTO, forties, braces Willa's shoulders and murmurs nonsense about the weather.
1. In the corner, a STRANGER in a soaked parka stands by the fireplace. / Nobody asked him in. / He watches the leg, not the face.
2. ELSPETH: Pulse in the foot? / BUNMI: Faint. / JOAQUIM: She's going white. / ELSPETH: Joaquim, keep her talking. Bunmi, traction splint.
3. The Stranger steps forward, takes the splint from the cabinet, and unfolds it in one smooth motion. / Bunmi blinks. / Elspeth glares.
4. ELSPETH: Who the hell are you? / STRANGER: Damian Kowalczyk. Paramedic. Truck's buried at the pass.
5. He kneels. / Elspeth studies him a second, nods once, and shifts her hands to make room.
6. Willa spits out the napkin. / WILLA: Is he going to cut it off? / DAMIAN: No. I'm going to pull. You're going to hate me.
7. Together the three of them lock the leg and take the weight. / The room holds its breath.

### s00110
0. A ten-meter steel tower above a flooded granite pit. / Mist hangs on the green water. / Pigeons burst from the cliff-face at the clap of a distant gate.
1. A WOMAN (30s, black swimsuit, towel around her neck, a handheld voice recorder in her fist) climbs the last rung and walks to the lip of the platform. / Her bare feet leave wet prints on the grating. / She is lean and focused, with the stillness of someone who has done something ten thousand times and is afraid of the ten-thousand-and-first.
2. She clicks the recorder on. / WOMAN: Dive log, ninth of June. Wind, nothing. Water, sixty-one degrees. Platform, dry, mostly.
3. She breathes in. / Out. / WOMAN: Today's the one. Reverse three and a half, tuck. I've hit it in the pool. I haven't hit it here.
4. She sets the recorder on the grating. / It records her silence, then her voice. / WOMAN: You hit it by letting go of the thought of hitting it. That's what Coach said. That's what the last coach said. That's what the first coach said, and she was lying, because nobody ever lets go of that.
5. A gull shrieks. / She tips her head back, closes her eyes. / WOMAN: My name is Isolde Vantongeren. Twenty-nine. Six years since the last medal. I don't know if I'm doing this for the medal or for the girl who got it.
6. The recorder blinks. / A clock ticks inside it. / ISOLDE: Okay. Okay.
7. She picks up the recorder. / Rewinds. / Presses play. / WOMAN: ...you hit it by letting go of the thought of hitting it. / ISOLDE: Liar.
8. She sets it down again. / Walks backward to the rear edge of the platform, then forward, two steps, three, springing, and lifts into the air. / The water takes her without a sound. / Rings spread across the surface and the mist shivers.
9. The recorder, abandoned on the grating, goes on running. / In the silence it picks up only the dripping tower, the pigeons settling, and a long, delighted shout from the water.

### s00448
0. Steel. / Screens. / Asteroid dust drifting past the viewport. / CAPTAIN RUTH ESCOBAR-LINDGREN (50s, scarred cheek, gray crewcut). / Hands on the console. / First Mate JUBAL TIDWELL (30s, headset, nervous). / Eyes on the scanner. / ENGINEER PRIYAMVADA "PRI" NAGARAJAN (40s, goggles pushed up). / Wrench in her fist. / Cadet WREN MALLORY (teen, oversized helmet). / Wide-eyed.
1. RUTH: Jubal. Status. / JUBAL: Hull at sixty percent, Captain. / RUTH: Pri. Engines. / PRI: Coughing. But alive, Ruth. / RUTH: Wren. Stay low. / WREN: Yes, Captain.
2. A rumble. / The deck shudders. / Dust sifts from the ceiling. / JUBAL: Another impact. Starboard. / PRI: Jubal, that's the third this hour.
3. RUTH: Pri, patch it. / PRI: With what? Spit? / RUTH: With whatever you've got.
4. Pri sighs, swings her goggles down, and heads for the hatch. / Wren scrambles after her. / WREN: Pri, can I help? / PRI: Hold the light, kid.
5. The hatch seals behind them. / Ruth and Jubal watch the scanner. / A red dot creeps closer.
6. JUBAL: Captain, it's matching our speed. / RUTH: I see it. / JUBAL: What do we do? / RUTH: We wait.

### s00639
0. A narrow room of mannequins and hanging gowns, pins scattered on the floor like silver rain. / A three-way mirror throws back endless versions of the same two women.
1. BEATRIX "BEA" LANDGRAF, sixties, tailor, kneels at the hem of a wedding dress with a mouthful of pins, while her client, SORAYA KHALILI, thirties, stands on the fitting platform in ivory silk, jaw tight, one hand clenched around a bouquet of paper flowers.
2. Bea tugs the hem and Soraya flinches. / Bea tugs again, harder, and Soraya looks down at her, and then past her to the three-way mirror where the dress looks like it belongs to someone happier.
3. Bea finally takes the pins from her mouth, sets them one by one in a velvet cushion, and stands, her knees cracking, while Soraya watches her in the glass instead of in person.
4. BEA: It's too long. / SORAYA: I know. / BEA: You told me three inches. It needs four. / SORAYA: Then four.
5. BEA: She said you'd say that. / SORAYA: Who said? / BEA: Your mother. She said you would let anyone cut anything.
6. Soraya turns her gaze to the floor. / Bea kneels again, takes a pin, and holds it up to the light. / She pushes it into the silk with a small deliberate click, and the dress seems to tighten around Soraya's ribs.
7. SORAYA: Bea. If I wanted to leave tonight -- through the back, through the alley -- would you stop me?
8. Bea doesn't answer. / She finishes the pin. / She reaches for another.
9. Then she sets her scissors on the cushion, stands, and, with both hands, begins unfastening the buttons down Soraya's spine, one by one by one, until the silk slides from her shoulders like a held breath.
10. BEA: The alley door sticks. Lift as you pull.

### s00806
0. A low room of grey metal shelves holding thousands of labeled tapes. / A bare bulb swings slightly, though no wind reaches down here. / Dust and old magnetic oxide. / A reel-to-reel and a cassette deck sit side by side on a cluttered desk beneath a corkboard of photographs strung together with red thread.
1. EVANGELINE ROTHCHILD-ADU, 50s, weary detective in a green cardigan, sits at the desk. / Her hair is pinned with a pencil. / She holds a microphone close to her lips, as though it were a confidant.
2. She presses record. / EVANGELINE: Case file nine-one-four. The Hargreave matter. Evening, third of November.
3. She lets go of the button. / Picks up a photograph. / Puts it down. / Presses again. / EVANGELINE: They told me the library caught fire by accident. I have read eleven reports that say so. Not one of them mentions the smell of kerosene, which three witnesses described independently.
4. She taps a thread on the corkboard. / EVANGELINE: The librarian, Mr. Quillfeather, vanished that night. His wife says he never returned. His employer says he resigned a week earlier. Both cannot be true.
5. She rewinds the cassette. / Plays it back. / EVANGELINE: ...three witnesses described independently...
6. She stops it. / Writes on a pad.
7. EVANGELINE: I found his key in the ash. A small brass key. It opens a locker in the basement of this very building. I've checked every locker. There isn't one.
8. She leans back. / Rubs her eyes. / EVANGELINE: Unless the basement I've been searching is the wrong basement.
9. From somewhere in the stacks, a tape clicks and begins to turn.
10. She goes still. / Slowly lowers the microphone.
11. A voice fills the room from a distant shelf, on tape, calm and a little amused. / It is her own. / EVANGELINE: If you're hearing this, Evangeline, you've finally found the right basement.
12. She stands. / The chair rolls back into a shelf, scattering tapes. / EVANGELINE: That's my voice. / EVANGELINE: Third shelf on your left. Behind the tapes labeled Nineteen Seventy-Two.
13. Evangeline crosses. / Her heels click. / She pulls out box after box until a small brass-hinged door appears in the wall. / She takes the key from her cardigan pocket. / Her hand shakes. / She turns it.
14. The door opens. / Inside, nothing but a single reel marked: PLAY LAST.

### s00632
0. A broken roof, a pit of cold black water, and a great cracked bell lying on its side half-submerged. / Smoke from a burning village drifts over the ridge. / Rifle fire somewhere a long way off.
1. CORPORAL AUGUSTIN LEFEBVRE, twenties, French, mud to the knees, wades along the edge of the pit with his rifle held high. / He stops. / Across the water, on the far lip of the bell, a figure is crouched, equally muddy, equally still: PRIVATE ANSELM WEBER, twenties, German, a bandage on his forearm.
2. They raise their rifles at the same moment. / Neither fires. / LEFEBVRE: Tu es seul? / WEBER: Allein.
3. A beat. / The water between them ripples in the wind. / LEFEBVRE: Put it down. / WEBER: You first. / LEFEBVRE: No.
4. Weber's finger moves on the trigger. / Lefebvre's does too. / A bird takes off from the broken roof and both of them flinch, and the rifles drop an inch.
5. They stay there. / Weber's eyes go to the bell. / WEBER: It's cracked. / LEFEBVRE: It was cracked before.
6. Weber lowers his rifle, slowly, and sets it on the curve of the bell. / He holds up his hands. / Lefebvre watches him, wades one step closer, then two.
7. At three steps, the far wall of the foundry collapses with a roar. / Both men dive. / Lefebvre lands on the bell, Weber lands on him, and for a moment they are two shapes thrashing in the churned water, fists and elbows, a rifle sinking, a helmet floating away. / Lefebvre gets an arm around Weber's neck. / Weber bites his wrist. / They both scream.
8. A shell lands in the village beyond the ridge, and the whole pit shudders. / They freeze. / Both of them, still tangled, looking at the sky. / WEBER: That's ours. / LEFEBVRE: That's ours.
9. Slowly, they let go of one another. / Weber retrieves his helmet from the water. / Lefebvre wipes his bleeding wrist on his sleeve.
10. LEFEBVRE: There's a road past the bell. Go. / WEBER: Why?
11. Lefebvre shrugs. / He picks up his rifle and does not point it. / Weber waits, then wades out of the pit, climbing the ridge in the smoke. / Halfway up, he turns, lifts one hand.
12. Lefebvre does not lift his. / He sits down heavily on the bell and takes out a cigarette that is too wet to light.

### s00846
0. Brushes hang like giant sleeping spiders. / Neon pink water pools on the concrete. / A radio plays soft country from a plastic shelf. / The tunnel is empty.
1. THE MAN, forties, in a camel coat and gloves, enters on foot from the rain, a briefcase held tight against his chest. / He glances at the exit, then at the cash window. / DUKE, sixty, the night attendant, sits on an upturned bucket with a thermos between his knees, doing a crossword. / RHODA FENWICK, thirties, in a navy suit with a lanyard that says CITY INSPECTOR, steps out of the office with a clipboard, pen already uncapped.
2. Duke fills in a word and looks up. / The Man edges along the wall, trying to keep out of the light. / Rhoda follows him with her eyes, then with her pen, and writes something on the clipboard, and walks toward him at an even pace.
3. RHODA: Evening. You here for a wash? / THE MAN: I walked. / RHODA: That's an odd way to get a car washed. / THE MAN: I'm between cars.
4. Duke pours coffee into the thermos cap and drinks. / He doesn't take his eyes off the briefcase.
5. DUKE: Eleven letters. "Unwelcome visitor." / RHODA: Trespasser. / DUKE: That's ten. / RHODA: Intruder. Eight. Well, I tried.
6. The Man lets the briefcase drop to his side. / It swings, heavy, and thuds against his knee. / Rhoda's pen stops.
7. RHODA: Sir, what's your name? / THE MAN: Does it matter? / RHODA: I like to put a name on my forms. / THE MAN: Boone.
8. Duke chuckles into his thermos. / DUKE: Boone like Daniel? / BOONE: Boone like Walter. Walter Boone.
9. Rhoda writes it down. / Duke fills in four more squares of the puzzle. / Boone sets the briefcase on the floor and slides it, with his foot, a few inches toward the drain.
10. RHODA: Mr. Boone, would you open that for me? / BOONE: It's just papers. / RHODA: Then it won't take a minute.
11. Boone looks at Duke. / Duke looks at the crossword. / Boone kneels, thumbs the latches, and lifts the lid.
12. Inside, stacked in rubber bands, is a thick wall of cash.
13. Rhoda lowers the clipboard and says nothing for a long moment. / RHODA: That's a lot of papers. / BOONE: I'm a very organized man.
14. Duke drains his thermos, caps it, and rises with a grunt. / He slides a squeegee off its rack and holds it like a cane.
15. DUKE: Seven across. "Fair deal." / RHODA: Hush. / DUKE: Eight letters. Starts with a G.
16. Boone and Rhoda both turn to stare at him.

### s00690
0. A cold stove. / A table with three mismatched chairs. / A single teacup, unwashed, on the sill.
1. CONSTANCE, 40s, stands at the sink with her coat still buttoned. / She does not turn on the tap. / Her sister HATTIE, 30s, enters from the hall in a nightgown and bare feet, hugging her elbows. / At the table, WALTER, 70s, their father, sits upright in his Sunday collar, a folded newspaper in front of him that he has not opened.
2. She watches the back of her sister's head. / She says nothing.
3. Hattie crosses to the stove, strikes a match, and stands holding it until the flame reaches her fingers. / CONSTANCE: You'll burn yourself. / HATTIE: I know.
4. She shakes it out. / The smoke curls toward the ceiling.
5. WALTER: Sit down, both of you. / Neither sits.
6. Constance finally turns on the tap, and the water runs over a plate she isn't washing.
7. HATTIE: She came back last night. / CONSTANCE: Who did? / HATTIE: You know who.
8. Walter unfolds the paper, folds it again, smoother this time. / He sets it square on the table.
9. WALTER: Your mother is in the churchyard. We buried her Tuesday.
10. She does not look at him. / She keeps her eyes on her sister's hands, shaking now, the matchbox rattling in them. / Hattie slides it across the counter, away from herself, toward the sink.
11. CONSTANCE: Take that outside. / HATTIE: Why? / CONSTANCE: Because Father is looking at it.
12. Walter is. / He is looking at the matchbox as if it were an animal.
13. Slowly he reaches out and lays his big, spotted hand over it. / Neither daughter moves.
14. Outside, a rooster crows, late.

### s00093
0. Balloons. / Folding tables. / A bouncy castle deflating in the corner. / Forty children, screaming.
1. WALDO PIMM (40s, sequined vest, top hat, rabbit in a cage) stands on a milk crate, juggling three oranges. / One slips. / He catches it with his chin. / WALDO: Ladies and gentlemen! The Great Waldo!
2. A child screams. / Another cries. / A third throws cake. / WALDO: Sixty dollars. Sixty dollars. Sixty dollars.
3. He pulls a scarf from his sleeve. / It keeps coming. / Yards of it. / He tugs. / Tugs. / Out comes a second scarf, then a third, tied together, and finally a live parakeet that flies straight over the fence. / WALDO: That was Gerald.
4. A woman's voice calls from the gate. / BERNICE PLUMMER-ASANTE (70s, sunhat, enormous handbag) pushes through, waving a rolled newspaper at Waldo, who ducks. / The rabbit escapes its cage, hops across the lawn, and disappears under the cake table. / Bernice swings and misses. / Waldo vaults the crate, a child grabs his cape, and the three of them end up in a heap beside the bouncy castle, the castle sighing down on top of them.
5. BERNICE: You owe me for the parakeet! / WALDO: He's a free spirit!

### s00444
0. Tar paper and a rusted neon sign shaped like a pin. / Three kids sit on the edge, legs swinging, passing a warm soda. / MINA SUNDARESAN (16, ponytail, skateboard on her lap). / Her brother JASPER (14, braces) beside her. / Their neighbor HOLLIS WADE (17, varsity jacket) stretched out behind them.
1. MINA: Okay, truth or dare. / HOLLIS: Truth. / MINA: Do you actually like Priscilla, or are you just doing it because everyone expects you to? / HOLLIS: That's two questions. / JASPER: It's one question with two parts. / HOLLIS: Shut up, Jasper. / MINA: Answer. / HOLLIS: I don't know. Maybe I like the idea of her.
2. JASPER: That's what Dad said about the boat. / MINA: Jasper. / JASPER: What? He sold it. / HOLLIS: Your dad sold the boat? / MINA: Last week. Don't tell anyone. / HOLLIS: I won't.
3. JASPER: Mina cried. / MINA: I did not. / HOLLIS: It's okay if you did.
4. MINA: Truth or dare, Hollis. Your turn. / HOLLIS: Dare. / MINA: Jump off the roof. / HOLLIS: Funny.
5. MINA: Dare you to tell her the truth.
6. He grins, takes the soda, and finishes it. / She smiles. / Jasper looks back and forth between them and stays quiet. / HOLLIS: Fine.

### s00704
0. A sagging cabin of sun-bleached cedar. / A rusted washtub. / A windmill ticks in the thin wind. / The prairie runs flat to the horizon, gold and empty.
1. SHERIFF AMOS TULL, 60s, gray mustache, dusty duster, sits on the top step with his hat in his hands. / JOSEPHINE CRANE, 40s, sunburned, in a man's shirt and canvas trousers, stands at the screen door with a shotgun cradled like a baby.
2. AMOS: Morning, Josephine. / JOSEPHINE: Sheriff.
3. AMOS: Coffee on? / JOSEPHINE: Not for you. / AMOS: Fair enough.
4. JOSEPHINE: You ride all night? / AMOS: Most of it. / JOSEPHINE: For what?
5. AMOS: For your husband. / JOSEPHINE: He's not here.
6. AMOS: I know. I found his horse at the creek. / JOSEPHINE: That mare throws riders. / AMOS: She does. Wasn't thrown, though. Wasn't anything. Just standing there, saddle empty.
7. JOSEPHINE: Then he walked off. / AMOS: Without his boots? / JOSEPHINE: He doesn't like boots.
8. AMOS: Josephine. / JOSEPHINE: I said he doesn't like boots.
9. AMOS: I'm too old and too tired to argue. Is he in the cellar? / JOSEPHINE: No. / AMOS: The well, then.
10. She doesn't answer. / The windmill ticks.
11. He rises, puts his hat on, and she lowers the shotgun until the barrels touch the porch boards.

### s00555
0. A glass bubble on the ocean floor, three thousand meters down. / Beyond the curved glass: black water, drifting snow, a lamp throwing a lonely cone. / Pipes sweat. / A kettle ticks on a hot plate.
1. DR. ARUNDHATI SENGUPTA, 50s, a thermal sweater and wire-rimmed glasses, sits cross-legged on the deck with a thermos. / LIEUTENANT KAVEH MORTAZAVI, 30s, in a naval jumpsuit, stands at the glass, one palm flat against it.
2. KAVEH: Did you see that? / SENGUPTA: See what? / KAVEH: Something moved. / SENGUPTA: Something always moves, Lieutenant. It's the deep sea. / KAVEH: Not like that. / SENGUPTA: Describe it. / KAVEH: Big. Slow. Pale. It went across the lamp and then, nothing. / SENGUPTA: Anglerfish. Or a squid. Or the reflection of your own eyelid. / KAVEH: It was not my eyelid. / SENGUPTA: Then it was a sperm whale. / KAVEH: Not at this depth. / SENGUPTA: No.
3. She unscrews the thermos. / Pours. / Offers him a cup. / He doesn't take it.
4. SENGUPTA: Kaveh. When did you last sleep? / KAVEH: I don't remember. / SENGUPTA: Thirty-one hours. I counted. / KAVEH: You counted? / SENGUPTA: I count everything. It's a scientific disorder. / He almost laughs.
5. Then the lamp flickers. / The water beyond the glass shifts and the snow swirls into a vortex. / Kaveh steps back. / KAVEH: There. There it is.
6. Sengupta rises. / Joins him. / A vast pale shape, a flank, a curve, slides across the glass, brushing it, so close its skin leaves a smear in the silt. / For a long moment the two of them simply stare.
7. SENGUPTA: Oh. / KAVEH: What is it? / SENGUPTA: I have no name for it. / KAVEH: You always have a name. / SENGUPTA: Not for this.
8. The shape rolls. / An eye the size of a dinner plate regards them through the glass, wet and black, ancient, unhurried. / KAVEH: It's looking at us. / SENGUPTA: Yes. / KAVEH: Is it dangerous? / SENGUPTA: I think it's curious. / KAVEH: Is that better? / SENGUPTA: It depends on what it's curious about.
9. A low hum builds in the station walls, a vibration they feel in their teeth. / The kettle rattles on the hot plate. / The creature presses a flipper against the dome, and the glass creaks.
10. KAVEH: Doctor. / SENGUPTA: I know. / KAVEH: That's a stress fracture. / SENGUPTA: I know. / KAVEH: We should seal the dome. / SENGUPTA: No. Wait.
11. She lifts one hand and, slowly, places her palm on the glass opposite the creature's flipper. / The hum falls. / The creak stops. / The great eye blinks, and the creature drifts back, and back, until it is only a pale suggestion in the dark.
12. Kaveh lets out a breath that fogs the glass. / Sengupta lowers her hand, picks up the thermos, and pours herself a cup that shakes in her grip.
13. KAVEH: You were right. / SENGUPTA: About what? / KAVEH: Curious. / SENGUPTA: I do hate being right at depth.

### s00059
0. Heat lamps. / Terrariums. / A sign: PLEASE DO NOT KNOCK ON GLASS. / The air smells of mealworms. / BARNABY "BARN" OKAFOR-LINDGREN (30s, apron, name tag crooked) restocks crickets. / His coworker JUNIPER VASQUEZ-ABARA (20s, pink hair, bandaged thumb) leans on the counter. / A customer, MR. EZEKIEL PRUITT-HALE (70s, tweed cap, binocular case), peers into a tank. / At the back door, the manager, DESDEMONA KILLINGSWORTH (40s, clipboard, cheerful menace), rattles keys. / And behind the register, a nervous newcomer, TIBERIUS "TIBBY" MOREAU-WELLS (teen, first shift, sweating through his shirt), tries to look busy.
1. BARN: Juniper, where's the iguana? / JUNIPER: In his tank. / BARN: Which tank? / JUNIPER: The big one.
2. BARN: That one's empty. / JUNIPER: Oh.
3. They look at each other. / Both turn toward Mr. Pruitt-Hale, who is still peering into the empty tank.
4. EZEKIEL: Fascinating. Where's the lizard?
5. TIBBY: He's resting!
6. DESDEMONA: Tibby, don't lie to the customer. / TIBBY: I'm not lying! I'm hopeful!
7. EZEKIEL: Young man, I've bought four geckos from this store. I know when a tank is vacant.
8. BARN: Sir, it's a rare species. / EZEKIEL: Camouflaged? / JUNIPER: Extremely.
9. A thump from the ceiling. / All five look up.
10. A long green tail hangs from a ceiling tile, swaying gently.
11. Tibby faints into the cricket display.
12. Desdemona sighs and heads for a ladder.

### s00888
0. Above the thirty-first floor of Halcyon Dynamics, a sea of glass towers glitters in the sun. / Between the air-conditioning units and a ruined yoga mat, someone has set up six white beehives in a neat row. / Bees drift in lazy loops, indifferent to the quarterly earnings. / MARGOT FENWICK, 50s, Vice President of People Experience, glides across the gravel in a silk blouse and veil, as perfectly composed as a chess piece. / She carries a clipboard in one hand and a smoking tin in the other. / OSKAR LINDGREN, 40s, the company beekeeper, whose title on his badge is Chief Pollination Officer, adjusts a hive lid with a wooden tool. / Tall, rumpled, a beard going silver at the edges. / He moves slowly so the bees won't notice him. / PETRA IONESCU, 30s, Facilities, stands at the roof door with a walkie-talkie, glancing at her watch. / She wears hi-vis over a cardigan.
1. A NEW HIRE, 20s, steps out onto the gravel in a brand-new suit still creased from its packaging, a lanyard around his neck and a reusable cup of oat latte in his hand. / He squints at the hives and takes one hesitant step backward. / MARGOT: Ah, there he is. Our new Vice Assistant of Synergy. / NEW HIRE: Hi. I think there's a mistake. My badge says "Analyst." / MARGOT: Titles are fluid at Halcyon. / OSKAR: Don't make sudden movements, son. / NEW HIRE: What kind of movements are sudden? / OSKAR: Most of them.
2. PETRA: He's here. No, he's fine. Yes, I'll tell him. / MARGOT: Petra, thank you. You may go. / PETRA: I'd rather stay, actually. / MARGOT: That was not a request. / Petra glares at Margot, lowers the walkie-talkie, and takes a slow, deliberate seat on an overturned bucket.
3. MARGOT: Today is your onboarding. At Halcyon we believe in rooting our people in something larger than themselves. / NEW HIRE: Like bees? / MARGOT: Like hives. / OSKAR: Like stings, mostly.
4. He hands the New Hire a veil. / The young man puts it on, slightly crooked, the netting hanging in his eyes. / A single bee lands on his shoulder. / He freezes. / NEW HIRE: Is it going to-- / OSKAR: It's just curious. Breathe out slowly. / He does. / The bee lifts off.
5. Margot makes a note on the clipboard. / MARGOT: You handle pressure well. I'll mention that in your file. / NEW HIRE: I haven't actually got a file yet. / MARGOT: Everyone has a file. / PETRA: Everyone has two.
6. Margot ignores her. / She approaches the nearest hive and lifts the lid with a flourish. / A hum rises, soft and grave. / MARGOT: This is the queen's chamber. You'll note the order. The discipline. The harmony of purpose. I like to think of our fifth-floor sales team in precisely this way. / OSKAR: The sales team is not a queen. / MARGOT: The sales team is a metaphor, Oskar. / OSKAR: The sales team is a wasp's nest. / Petra snorts. / Margot closes the lid a little harder than she means to.
7. NEW HIRE: Can I ask something? / MARGOT: Please. / NEW HIRE: Why bees? / A beat. / Margot looks at Oskar. / Oskar looks at the sky. / Petra studies her boots.
8. OSKAR: Margot's husband kept bees. / MARGOT: Oskar. / OSKAR: He died in March. She had the hives lifted here from the farm. / MARGOT: That is private. / OSKAR: It's rooftop. Nothing's private on a rooftop.
9. For a moment, nobody speaks. / The wind lifts the edge of Margot's veil. / She smooths it with one hand, her fingers not quite steady.
10. PETRA: Margot, the VP call. / MARGOT: Yes. Of course.
11. She hands the clipboard to the New Hire without ceremony. / MARGOT: Kwame. Welcome to Halcyon. / KWAME: You know my name? / MARGOT: I read your file. / KWAME: I thought I didn't have one. / MARGOT: Now you do.
12. She sweeps toward the roof door, Petra a half-step behind her. / At the threshold she pauses, one hand on the frame, and speaks without turning. / MARGOT: Oskar. Teach him everything. / OSKAR: Everything about what? / MARGOT: Everything he'll need.
13. She goes. / The door sighs shut. / Kwame lifts the veil from his eyes and looks at Oskar, who has already turned back to the hives. / KWAME: Is she always like that? / OSKAR: No. Sometimes she's worse.
14. He hands Kwame the smoker. / It's warm and heavy, and a thin white thread curls from its spout. / OSKAR: Squeeze the bellows. Gently. Like you're asking a question. / Kwame squeezes. / The smoke drifts across the hive. / The humming softens, lowers, and one by one the bees settle into the quiet.

### s00763
0. A velvet-curtained cubicle, mirrors on three walls. / A wedding gown on a hanger. / ADELAIDE VOSSBERG, twenties, in a slip, stands on the dais, arms out. / Her mother GERTRUDE, fifties, kneels with a mouthful of pins.
1. GERTRUDE: Stand still. / ADELAIDE: I am standing still.
2. A WOMAN in a sensible coat peers through the curtain. / Sixties, hair in a bun, hands wringing. / Neither of them has seen her before.
3. WOMAN: Pardon me. Is this the Vossberg fitting? / GERTRUDE: It is. And you are? / WOMAN: Just someone who used to know the groom's father.
4. Gertrude's pins clatter to the floor. / Adelaide turns on the dais. / ADELAIDE: Mother? / GERTRUDE: You'd better come in.
5. The Woman steps inside, letting the curtain fall. / She holds out a gloved hand.
6. WOMAN: Tillie. Tillie Marchetti. / GERTRUDE: I know who you are. / TILLIE: Then you know why I'm here.
7. TILLIE: He asked me to give you something, dear.
8. Adelaide looks from one to the other in the three mirrors, six faces, six mothers. / ADELAIDE: Will someone please tell me what's going on?

### s00478
0. A passenger coach gutted for surgery. / Cots where seats were. / Hand-pumped lamps swing with the rails. / A plywood table bolted to the floor.
1. DR. ISADORA FONTAINE (40s, surgical cap, sleeves rolled) leans over a patient on the table. / NURSE KWABENA ASANTE (30s, steady hands) holds retractors. / ORDERLY SZYMON (19, sleeves too long) feeds a hand-crank fan. / A fourth figure, a SOLDIER in his twenties, lies still under the sheet with his boot half off.
2. FONTAINE: Everyone, suction. Now.
3. Kwabena and Szymon both lunge for the pump. / They collide, hands tangled on the handle. / KWABENA: Mine. / SZYMON: Sorry. Sorry. / FONTAINE: Come on. Come on, you stubborn thing.
4. The train lurches on a curve. / Instruments slide. / Fontaine pins the tray with her forearm. / Kwabena catches a clamp mid-air.
5. KWABENA: Doctor, pressure is dropping. / FONTAINE: I see it. Szymon, more light, left side. / SZYMON: Which left? / FONTAINE: Yours.
6. He swings the lamp over.
7. The soldier on the table gasps and arches. / Everyone stills.
8. SOLDIER: Don't cut my leg. / FONTAINE: We're not cutting your leg. / SOLDIER: Promise.
9. FONTAINE: I promise. What's your name? / SOLDIER: Corporal. Corporal Adeyemi. / FONTAINE: Okay, Adeyemi. We're going to keep you.
10. ADEYEMI: Mama, please. / Kwabena and Szymon exchange a look. / Szymon wipes his eyes on his sleeve. / The fan hums.
11. FONTAINE: Last stitch. Hold the line. Everybody breathe out.
12. The carriage exhales. / The train rattles over a bridge, and for one second all four of them are still, as if the whole world is balanced on a thread.

### s00412
0. Steam. / Fluorescent. / Six stools at a counter, two booths. / A neon sign buzzes: OPEN 'TIL SOMEONE LEAVES. / JOSEFINA, 28, in a rain-soaked red coat, sits alone at the counter slurping noodles. / CASPIAN, 30, in a bicycle courier's jacket, drips onto the stool next to hers. / WREN, 60s, the owner, wipes the counter. / BASIL, 20s, the dishwasher, drags a bus tub of bowls through the kitchen door.
1. CASPIAN: Is this seat free? / JOSEFINA: It's a counter. / CASPIAN: That's not a no. / JOSEFINA: That's a counter.
2. He sits. / Wren sets a bowl in front of him without being asked. / WREN: Caspian. Usual. / CASPIAN: Thanks, Wren.
3. JOSEFINA: You're a regular. / CASPIAN: Eleven months. / JOSEFINA: I've been coming for three years. / CASPIAN: I would've remembered. / JOSEFINA: I'm very forgettable. / CASPIAN: You're wearing a red coat.
4. She looks down at it, then at him. / A noodle dangles from her chopsticks.
5. Basil emerges from the kitchen, sees them, and pauses. / BASIL: Wren, do we have more broth? / WREN: Back left. / BASIL: Okay.
6. He leaves. / Josefina and Caspian eat in silence. / The neon buzzes.
7. CASPIAN: I have a question. / JOSEFINA: Okay. / CASPIAN: Why do you sit at the counter? / JOSEFINA: Why do you? / CASPIAN: Because the booths have a wall. You can't see anyone. / JOSEFINA: That's the point. / CASPIAN: Of the booth? / JOSEFINA: Of not wanting to be seen.
8. A pause. / Caspian lays down his chopsticks. / He turns his stool slightly toward her.
9. CASPIAN: Are you hiding? / JOSEFINA: From who? / CASPIAN: I don't know. From the night? / JOSEFINA: That's very poetic. / CASPIAN: It's very late. / JOSEFINA: It's two a.m.
10. CASPIAN: I know. I've been delivering since six. / JOSEFINA: You work twenty hours? / CASPIAN: Nineteen. I get a nap.
11. She laughs, a short, startled sound. / She covers her mouth, embarrassed, and Wren glances up with a small smile.
12. JOSEFINA: You're a bad influence. / CASPIAN: You're a good listener. / JOSEFINA: I haven't said anything. / CASPIAN: That's the best kind.
13. She meets his eyes. / A beat. / She nudges her half-eaten bowl toward him with one finger.
14. JOSEFINA: Finish it. / CASPIAN: Are you sure? / JOSEFINA: You've been nineteen hours.
15. He takes the bowl. / Wren sets a second pair of chopsticks beside it. / Basil, in the kitchen doorway, shakes his head in awe.
16. BASIL: She never shares. / WREN: Back to the dishes.

### s00364
0. A cracked asphalt lot facing a huge cream-colored screen. / Speaker poles stand in rows like metal weeds. / Fireflies drift between them. / A projector shaft glows over a concession hut. / The film is a silent black-and-white western, its dust-lit figures galloping over the clouds. / TESS BRANNIGAN, seventeen, sits cross-legged on the hood of a dented pickup, wrapped in an oversized flannel. / Her hair is pulled up in a loose knot. / She keeps picking at a sticker on her water bottle. / JOSE ALVARADO-CHEN, seventeen, sits beside her, lanky and awkward, his knees too high, one sneaker untied. / He eats popcorn with the intensity of someone avoiding a conversation. / MARCELLO, eighteen, Tess's brother, leans against the driver's door with a cigarette he has not lit. / He looks at the sky, then at the screen, then at his sister. / DELIA, sixteen, Jose's cousin, perches on the tailgate swinging her legs.
1. TESS: He said he'd be here by nine. / JOSE: It's only nine-fifteen. / TESS: It's nine-twenty.
2. He offers her popcorn. / She takes a piece, doesn't eat it. / Marcello clears his throat.
3. MARCELLO: You want me to call him? / TESS: No.
4. He lights the cigarette. / Delia kicks the tailgate.
5. The projector flickers, a reel jumps, and the galloping horses stutter and freeze.
6. A scratchy loudspeaker voice crackles from the concession hut. / CONCESSION VOICE: Folks, sorry for the delay. Reel two will be right up. In the meantime, enjoy the stars.
7. Everyone looks up. / The stars are thick, cold, indifferent. / DELIA: Pretty.
8. JOSE: I could wait with you. If you want. / TESS: You don't have to. / JOSE: I know.
9. He slides a little closer on the hood. / She does not move away. / Marcello watches them, then turns his back and stares at the screen.
10. The film jerks to life. / The horses gallop again, and nobody in the truck says a word until the credits.

### s00327
0. A long timber room hung with tin ladders and coiled wicks. / Rain on the high windows. / Five brass lamps burn along a table. / ELIAS THORNBY, fifties, guild master, sits at the head in a velvet waistcoat gone bald at the elbows. / AGATHA PRUDHOE, forties, a widow with a ledger, sits at his right. / CONSTABLE JOLLIFFE, thirties, damp and unhappy, stands at the door. / MRS. QUILL, sixties, the hall's cook, brings a tray. / TOM, twelve, the lamplighter's boy, sits cross-legged by the stove.
1. ELIAS: We are short eleven lamps on Gresham Row. / AGATHA: Twelve. I counted twice. / ELIAS: Then twelve.
2. JOLLIFFE: Sir, someone's cut them clean. Not smashed. Cut.
3. AGATHA: Fuel was drawn on Thursday for sixty lamps. Fifty-eight were lit. / ELIAS: Agatha, not now.
4. Mrs. Quill sets down the tray. / She pours tea for Agatha first, then Elias, then nobody.
5. MRS. QUILL: Always the sums. Never the stairs. / TOM: Mrs. Quill, what stairs? / MRS. QUILL: Hush, boy.
6. JOLLIFFE: If this guild cannot keep the street lit, the parish will contract with the gas company. / ELIAS: Gas. The smell of it.
7. AGATHA: Then someone is paid to see the street dark.
8. ELIAS: Constable, it was a rough night. You may go. / JOLLIFFE: I'd rather wait, sir.
9. Elias stirs his tea. / Agatha turns a page. / Tom watches the stove. / The rain does not let up.

### s00272
0. A cathedral of damp wood. / Eleven fiberglass swans, enormous and faintly smug, are moored nose to tail in the dark water, each wearing the faded expression of a creature that has been pedaled by thousands of children and has forgiven none of them. / BARNABY QUILL (50s, municipal windbreaker, a lanyard heavy with keys that open nothing important) stands on the dock with a clipboard held like a hymnal. / He is counting swans for the third time and arriving at a different number each time. / ODALYS FERREIRA-NNAMDI (40s, wet-weather poncho, hair in a hopeful bun) climbs out of a swan with the dignity of a woman leaving a courtroom.
1. ODALYS: It's twelve. / BARNABY: It's eleven. / ODALYS: The inventory says twelve. / BARNABY: The inventory also says the pond is a lake.
2. Behind them, a third voice drifts from the rafters. / PETRU "PETE" LAZAR (20s, cheerful, harness, a flashlight in his teeth) dangles above the water, retrieving a pennant. / PETE: Thith ith the one. / ODALYS: Pete, take the flashlight out of your mouth.
3. Pete spits the flashlight into his palm. / It bounces off a swan's head and sinks.
4. BARNABY: That was a municipal flashlight. / PETE: It was my flashlight. / ODALYS: It was Barnaby's flashlight. / BARNABY: It was a flashlight in the general sense.
5. PETE: Can I come down now? / ODALYS: No. / BARNABY: Yes.
6. ODALYS: No, because if he comes down we'll have to talk about the swan. / BARNABY: We are talking about the swan. / PETE: Which swan? / ODALYS: The twelfth. / PETE: There's a twelfth? / BARNABY: There is not a twelfth.
7. ODALYS: Barnaby, I rode it. For twenty minutes. It has a steering problem and a name. / BARNABY: What name? / ODALYS: Gerald. / PETE: Gerald's a good name.
8. BARNABY: Pete, you are suspended in the air by one strap and I need you to stop having opinions. / PETE: I've had opinions the whole time, though. / ODALYS: He's had opinions since March.
9. BARNABY: In March I told you both the swans were not to be named. / ODALYS: You named the swans. / BARNABY: I named ONE swan. Lucille. Out of respect. / PETE: Lucille's on the left. / ODALYS: Lucille is the one we sank in August. / BARNABY: Lucille is resting.
10. A long silence. / Water slaps the pilings. / A swan, somewhere, knocks against the dock with a hollow note.
11. ODALYS: Barnaby, there are twelve swans. / BARNABY: I know. / PETE: So who's got Gerald?
12. Barnaby lets the clipboard drop. / It floats. / All three of them watch it drift away across the dark water toward the far swan, which has, impossibly, begun to turn its head.

### s00385
0. A steel box bolted to a frozen moon. / Gauges flicker. / A tiny window shows black sky and a bruised planet.
1. NASRIN, 38, mission engineer, holds a pressure valve with both hands. / JOSEPH, 50, geologist, lies on the floor with a bleeding scalp and a laugh like a cough.
2. The radio SQUEALS. / NAKAMURA: Callisto One, Nakamura at Orbital. Report depth.
3. Nasrin thumbs the key. / NASRIN: Four kilometers. We hit something. / NAKAMURA: Define something. / NASRIN: It rang. Like a bell.
4. Joseph sits up. / He grips her ankle, and she looks down. / JOSEPH: Don't pull the bit. / NASRIN: Pressure's spiking. / JOSEPH: Don't pull the bit.
5. She doesn't. / The gauges climb. / Alarms scream.
6. Then, all at once, every needle drops to zero. / Silence.
7. NAKAMURA: Callisto One, say again.
8. Nasrin looks at Joseph. / He is staring at the floor, where a pale blue light is rising through the grating, and he is smiling.
9. NASRIN: Nakamura. We're through.

### s00352
0. A narrow hardware store, aisles crowded floor to ceiling with bins of nails, rope, washers, paint cans. / A single bulb hangs over the register. / A cardboard sign taped to the door reads: "CLOSED. / FOREVER?" / ROSE LINDQVIST, sixties, the widow, sits on a stool at the register, a cigar box open in front of her. / HENRY LINDQVIST, forties, her eldest, in a suit, paces the center aisle. / MARGO LINDQVIST-BYRNE, thirties, her daughter, leans against the paint counter with her arms crossed. / DANNY LINDQVIST, twenty-five, her youngest, sits on an upturned bucket by the door. / UNCLE FRITZ, seventies, Rose's brother-in-law, polishes a hammer with a rag, saying nothing.
1. HENRY: Mom, the offer expires Friday. / ROSE: I know when Friday is.
2. MARGO: Henry, can you sit down? / HENRY: I'm trying to help. / MARGO: You're trying to pace.
3. HENRY: Danny, tell her. / DANNY: Tell her what? / HENRY: That fourteen hundred square feet next to a Whole Foods is worth three times what this place makes. / DANNY: I don't know, Henry. / HENRY: You don't know. / DANNY: It's Dad's store.
4. HENRY: Dad's dead, Danny.
5. Silence. / Fritz stops polishing. / Margo uncrosses her arms. / Rose closes the cigar box with a small click.
6. ROSE: Say that again. / HENRY: Mom, I didn't mean... / ROSE: Say it again, Henry. To my face.
7. Henry stops in the middle of the aisle. / He opens his mouth. / He closes it.
8. MARGO: Mom. / ROSE: Quiet, Margo.
9. Danny stands. / The bucket tips and clatters.
10. Henry spins toward the sound, his sleeve catching a display of screwdrivers, and a hundred handles hit the floor, rolling.
11. HENRY: Great. Fantastic. / DANNY: I've got it. / HENRY: Leave it, Danny! / DANNY: I said I've got it!
12. He drops to his knees and gathers the screwdrivers. / Margo kneels beside him. / Henry stands with his hands open at his sides. / Fritz sets down the hammer, picks up a broom, and begins to sweep, slow and steady.
13. ROSE: Your father kept the books in this box.
14. She lifts the lid. / Inside are index cards, hundreds of them, in neat blue ink.
15. ROSE: Every customer who ever couldn't pay. Every tab he let ride. Forty years. / MARGO: Mom, I never knew. / ROSE: Nobody did. That's the thing about your father. He never wanted to be thanked.
16. HENRY: How much is owed? / ROSE: I haven't counted. I think it's more than the Whole Foods offer.
17. Henry laughs once, a helpless sound. / He sits down on the floor in the middle of the screwdrivers.
18. HENRY: Uncle Fritz, did you know? / FRITZ: I wrote half those cards.
19. DANNY: We're not selling. / HENRY: Danny. / DANNY: We're not selling it, Henry. / MARGO: No.
20. HENRY: Then we run it. All four of us. Like he did. / ROSE: Five.
21. She nods at Fritz. / He lifts the broom in salute. / Henry crosses to the register and takes the cigar box in both hands, and Rose lets him.

### s00134
0. Concrete. / Wet. / Gulls screaming under the rafters. / Rows of tuna on ice, long as men. / CARMELO "CHAR" IGLESIAS, 40s, rubber boots, gutting knife, sweeps the floor like a man hiding something.
1. A bell clangs. / Crowd noise. / At the end of the aisle, DOM VASQUEZ, 50s, tailored raincoat, stands over a crate with a briefcase at his feet. / Beside him, a skinny kid, TWITCH, 19, in a hoodie, hand twitching in his pocket.
2. CHAR: Dom. / DOM: Char. Product? / CHAR: Under the bluefin. / TWITCH: Under the what? / CHAR: Fish, kid.
3. Char tips a tuna on its side. / Underneath: a taped brick.
4. DOM: Count it. / TWITCH: I'll count it. / CHAR: Let him. / TWITCH: All here. / DOM: Good. Case.
5. Dom nudges the briefcase forward with his toe. / Char kneels. / Lifts it. / Opens. / Dollars, banded. / He snaps it shut.
6. Behind them a SHADOW moves. / Char sees it first. / CHAR: Don't turn around. / DOM: Who? / CHAR: Just don't.
7. Footsteps on wet concrete. / Slow. / Then DETECTIVE MARGUERITE LAWSON, 40s, windbreaker, badge on a lanyard, a gun in her right hand, steps out between two ice tubs. / Her eyes flick across the three of them: Char, the brick, the briefcase, the kid.
8. LAWSON: Police. Hands. / TWITCH: Oh, God. / DOM: Detective. / CHAR: Marguerite. / LAWSON: Char, you son of a bitch. / TWITCH: I didn't do anything. / DOM: Kid, shut up.
9. Twitch bolts. / Slips on fish scales. / Falls. / The brick skids across the floor and splits, white powder bursting like flour in the lamp light. / Dom lunges for the briefcase. / Char drops it.
10. Lawson fires once into the rafters. / BANG. / Gulls explode upward.
11. Everyone freezes. / LAWSON: Nobody moves. / A long beat. / Dom raises his hands. / Twitch lies still. / Char folds his arms.
12. CHAR: You're early, Marguerite. / LAWSON: You're late, Carmelo.
13. She holsters her weapon. / Takes the briefcase. / Walks to the edge of the dock, tosses it into the black harbor. / It sinks without a ripple.
14. DOM: What the hell? / LAWSON: Go home, Dom. Take the kid.
15. She turns her back on them.

### s00783
0. Caskets stacked as bar-backs. / A gramophone croons. / Candlelight.
1. MAMIE DUPREE, 30s, bartender, silver flapper dress, polishes a glass. / Everything is lovely and slow.
2. A MAN IN A GREY HAT, 40s, sits at the bar. / He turns his drink in circles. / Doesn't drink. / BARNABY SCOTT, 60s, the undertaker, dozes on a coffin lid in the corner.
3. MAMIE: You're not from here. / MAN IN GREY HAT: No. / MAMIE: You like the music? / MAN IN GREY HAT: It's fine. / MAMIE: It's a funeral parlor. We play what the dead like.
4. He almost smiles. / Takes a sip. / Sets the glass down.
5. MAN IN GREY HAT: Your license? / Mamie's polishing stops. / Barnaby's snore stops. / MAMIE: Pardon?
6. The man pulls back his coat. / A badge. / ACKERLY: Solomon Ackerly. Prohibition Bureau.
7. Mamie lowers the glass. / Slowly. / Barnaby sits up in his coffin. / BARNABY: Mamie. The other room. / MAMIE: Detective, we're only mourning. / ACKERLY: In evening dress.
8. She glances at the gramophone. / Reaches. / Turns the volume UP.
9. The gramophone swells. / Behind the bar, the wall begins to slide open.

### s00169
0. A long cafeteria table bolted to the floor. / Fluorescent lights. / A view of black water. / The ferry throbs beneath them. / Six members of the Abdullahi-Prewitt family sit with trays of congealed shepherd's pie. / A funeral reception, after the funeral. / MATRIARCH ZAINAB ABDULLAHI-PREWITT, 70s, at the head. / Her sons, CYRIL, 50s, and AUGUSTINE, 40s, glare across the table. / Cyril's wife, PERPETUA, 50s, grips her napkin. / Their daughter ROSAMUND, 20s, scrolls on her phone. / And the youngest, THADDEUS, 16, keeps his eyes on the water.
1. ZAINAB: Eat. He would have wanted us to eat.
2. CYRIL: He wanted the boat. / AUGUSTINE: He wanted the boat sold. / CYRIL: He wanted it kept. / PERPETUA: Cyril, please. / AUGUSTINE: You never listened to him. / CYRIL: I listened. I just disagreed.
3. ROSAMUND: Can we not do this on a ferry? / THADDEUS: We're not leaving a ferry.
4. ZAINAB: Quiet, all of you. / They are not quiet.
5. AUGUSTINE: Dad's will says I sell it. / CYRIL: Dad's will says I decide. / PERPETUA: Both of you, stop.
6. AUGUSTINE: You always take his side. / PERPETUA: I take no side. I take the family's.
7. ROSAMUND: There is no family. / THADDEUS: I'm still here.
8. Silence. / The ferry lurches over a wave. / Trays slide.
9. Zainab rises, steadies herself on the table. / ZAINAB: Your father's will is in my purse. He wrote it on a napkin. / CYRIL: A napkin? / ZAINAB: A napkin.
10. She opens her purse. / Withdraws a folded, grease-spotted paper napkin. / She sets it down. / Flattens it. / Everyone leans in.
11. ZAINAB: "Give the boat to whoever sails it." / Silence. / ZAINAB: That's all.
12. Thaddeus rises, slowly. / He crosses to the window. / He looks out into the dark at the glow of the wheelhouse.
13. THADDEUS: I know how.
14. The others look at him. / For the first time all evening, nobody speaks.

### s00764
0. Chlorine fog. / Blue water, glass-flat. / A scoreboard reading 00:00.00. / On the bench: three swimmers wrapped in towels. / COACH RENATA BOSCH, forties, with a whistle and a stopwatch, paces the deck.
1. MARCUS TULLY, twenties, anchor leg, stares at the water. / DOLORES AMADI, twenties, lead-off, blows into her hands. / A NEW KID, sixteen, in a team parka too big for him, sits at the very end of the bench with his goggles in his lap.
2. RENATA: Warm-up in five. Four hundred easy, then pace sets.
3. MARCUS: You hear about the sponsor? / DOLORES: Pulled out. / NEW KID: Don't ask. Don't ask.
4. RENATA: Kid. You are? / NEW KID: Sunny. / RENATA: Sunny what? / SUNNY: Sunny Park.
5. RENATA: Sunny, you swim third leg.
6. MARCUS: Third? That's my relay split. / DOLORES: That's what I said. / RENATA: I'm not asking. / MARCUS: Coach, he's sixteen. / SUNNY: Seventeen in March. / DOLORES: Marcus, he's fast. / MARCUS: I didn't say he wasn't.
7. RENATA: Everybody in! / They all drop their towels and dive. / Sunny hesitates.
8. Renata stops beside him. / RENATA: Sunny. It's only water. / SUNNY: That's what scares me.

### s00391
0. A lone horse, a lone man. / JEDEDIAH CROW, 60s, in a duster gone to rags, sits on a stump beside a dead fire.
1. He reads a letter. / His lips move. / JEDEDIAH: Dear Hannah. I got to the river. It was dry.
2. He folds the page. / Unfolds it. / Looks at the horizon.
3. JEDEDIAH: I buried the mare. Dug it with a pan.
4. A hawk circles. / He ignores it. / JEDEDIAH: I am coming home. It may take a while.
5. He tears the letter in half, then in half again. / The pieces blow across the grass.
6. He stands, dusts his knees, and whistles. / The horse lifts its head. / JEDEDIAH: Come on.
7. He swings up into the saddle and turns the horse east.

### s00114
0. A long timber hall on stilts above black water. / Faded bunting. / A chandelier with half its bulbs out. / Through tall windows, the lake lies glassy and still under a quarter moon. / A gramophone in the corner plays a thin, crackling waltz.
1. Four people occupy the room, and only one of them is dancing. / ELOWEN TREGARTHEN-ADEYEMI (30s, sea-green dress, bare shoulders) turns slowly in the center of the floor, alone, her eyes half closed. / At the bar, ARTEMIS KOWALCZYK-MWANGI (30s, rolled-up shirt sleeves, a bottle in one hand) pours two glasses and pours a third. / LEONID BRAUNSTEIN-OKAFOR (50s, dinner jacket, white gloves) stands near the gramophone with a hand on the horn, as if holding the music in place. / And on the window seat, curled like a cat, sits a girl of eight, MIRABEL (small, in a nightgown, hair loose), who is not supposed to be awake.
2. She spins. / The hem of her dress sweeps the boards. / She stops, breathless, and looks directly at him. / ELOWEN: You never asked me to dance.
3. He lowers the bottle. / He does not answer. / She walks toward him, slowly, leaving a track in the dust. / ARTEMIS: I don't dance. / ELOWEN: You did once. / ARTEMIS: That was a different year. / ELOWEN: It was this year.
4. Leonid clears his throat. / Both glance at him. / LEONID: Perhaps I should adjust the record. / ELOWEN: Leave it. / He lifts his hand from the horn, relieved.
5. Artemis puts down the bottle. / He steps out from behind the bar. / For a moment they stand a yard apart. / ARTEMIS: The lake is still. / ELOWEN: It always is, here. / ARTEMIS: That frightens me. / ELOWEN: Does it? / ARTEMIS: You don't know what's under it.
6. She smiles at that, the first smile of the night, and takes his hand. / He lets her. / She pulls him gently onto the floor, one arm round his shoulder, the other in his palm, and they sway to the gramophone's crooked waltz. / At the window, Mirabel hugs her knees.
7. LEONID: Lovely. / MIRABEL: He's going to cry. / LEONID: Who? / MIRABEL: Him. / Leonid peers. / Artemis's face is turned to the dark window, jaw set, eyes bright. / He does not cry. / Not yet. / He holds her closer.
8. ARTEMIS: I couldn't stay. / ELOWEN: I know. / ARTEMIS: I couldn't tell you why. / ELOWEN: I know that too.
9. The record stutters. / Leonid lunges for the needle. / The room goes still and quiet, and Elowen stops, her hand still in Artemis's, her eyes on his face. / ELOWEN: Say it, then. / ARTEMIS: Say what? / ELOWEN: Whatever it is you came all this way to say.
10. He opens his mouth. / Closes it. / From the window seat comes the dry rustle of Mirabel unfolding, and then her small, bare feet on the boards, crossing the room, stopping beside them. / MIRABEL: He wants you to come back.
11. Silence. / Then the lake, at last, ripples, once, and a single bulb of the chandelier pops. / ELOWEN: Does he? / ARTEMIS: Yes.
12. Elowen releases his hand. / Steps back. / She looks at the child, at Leonid, at the bottle on the bar, and then at Artemis again, and for a long moment says nothing at all.
13. Then she slaps him. / The crack rings through the hall. / The gramophone, which Leonid has been holding down with both hands, begins, absurdly, to play again. / ELOWEN: Eleven years. / ARTEMIS: I know. / ELOWEN: Eleven years, and you send a child. / MIRABEL: I wasn't sent. I came.
14. Artemis laughs, a wet, helpless sound. / Elowen turns away toward the dark windows, her back straight. / Leonid, with great delicacy, picks up the third glass and offers it to her. / She takes it. / She drinks it in one swallow.

### s00685
0. A circular stone chamber at the top of a thousand steps. / A cracked crystal on a pedestal pulses faintly. / Rain lashes the narrow windows.
1. ALDRIC, 40s, a battered knight in dented plate, leans on his sword. / THESSALY, 30s, a sorceress in midnight blue, traces runes in the dust with a fingertip. / GORM, 50s, a heavy-set dwarf with a braided beard, sits on the top stair, catching his breath. / MIRREN, 18, a thief in a patched green cloak, circles the pedestal and eyes the crystal.
2. ALDRIC: Thessaly, how long before the seal gives? / THESSALY: Before dawn, if I'm right. Before midnight, if I'm wrong.
3. GORM: What do you think the odds are, Mirren? / MIRREN: Don't ask me. I'm the one who stole the map. / ALDRIC: We've all stolen something, little one.
4. THESSALY: Mirren, step back from the crystal. / MIRREN: I'm only looking. / THESSALY: Looking is how it begins. / GORM: Thessaly's right. My grandfather looked at a gem like that once. Went blind in one eye. Then the other.
5. MIRREN: Gorm, your grandfather went blind from drinking. / GORM: That too.
6. ALDRIC: Enough. We climbed a thousand stairs for this. We say what we came to say. / THESSALY: What did we come to say, Aldric? / ALDRIC: That we will not let the King's witch-hunters have it.
7. GORM: We'd have been better off smashing it and going home.
8. THESSALY: Smash it and the city drowns. / MIRREN: You never told me that. / THESSALY: You never asked, Mirren.
9. ALDRIC: I did not tell either of you because I did not want you to leave. / GORM: Then you're a fool, knight. Or a liar. / ALDRIC: Perhaps both.
10. MIRREN: Then why are we fighting over it? / THESSALY: We're not. / GORM: Speak for yourself.
11. ALDRIC: Gorm. Put down your axe. / GORM: I didn't pick it up. / MIRREN: You did. It's in your hand.
12. Gorm looks down. / The axe is there. / His hand is trembling. / The crystal pulses brighter.
13. THESSALY: It's speaking to you. To all of us. Close your ears. / GORM: I hear it. It says Aldric lied. / ALDRIC: Gorm--
14. The crystal flares. / The windows blow in on a wave of white light.

### s00807
0. Cramped aluminum. / A pencil flashlight in his teeth. / Dust motes. / The distant hum of a security camera swiveling below.
1. ANDREJ MOKOENA, 30s, crawls on his elbows with a coil of rope on his back and a small recorder strapped to his sleeve. / He stops at a vent grate. / Looks down at a laser grid.
2. He spits the flashlight into his hand. / Whispers. / ANDREJ: Okay. Okay. Rehearsal one.
3. He taps the recorder. / Plays it. / ANDREJ: Step one. Rope on the vent bolt. Step two. Lower down, slow, between beam three and beam four. Step three. Don't sneeze.
4. He winces. / ANDREJ: I'm going to sneeze. / He pinches his nose. / Waits. / It passes.
5. He taps the recorder again. / ANDREJ: Step four. The safe's a Hargrove. Combination is the date of the Armistice, flipped. Eleven eleven, nineteen eighteen, so one-one, one-one, one-eight, one-nine.
6. ANDREJ: That's seven numbers. Hargrove's six.
7. He frowns. / Rewinds. / ANDREJ: ...one-one, one-one, one-eight, one-nine... / ANDREJ: Drop the last nine. One-one, one-one, one-eight.
8. He whispers it three times, like a spell, then taps the recorder to start a new take.
9. ANDREJ: Rehearsal two. If I die in this duct, tell my mother I was a pastry chef.
10. A click below. / A faint red light sweeps across the vent. / He freezes. / The light passes.
11. ANDREJ: Step one. / He slides the first bolt loose.

### s00227
0. White ground. / White sky. / A dead well. / Two hitching posts. / JEDEDIAH "JED" ARROWOOD (50s, long duster, one glove) sits on a crate. / Whittles. / Doesn't look up.
1. Hooves. / Slow. / MARISOL QUINTANILLA (30s, black hat, rifle across the saddle) rides in. / Stops thirty feet off. / He keeps whittling. / She keeps still.
2. JED: Water's bad. / MARISOL: I brought my own. / JED: Figured.
3. She swings down. / Boots crunch. / She leaves the rifle on the horse. / He folds his knife. / Slides it into his boot.
4. MARISOL: You're a long way from Dodge. / JED: So are you. / A hawk. / A wind. / Nothing else.
5. She walks toward him. / Ten feet. / Five. / MARISOL: Eleven years. / JED: Twelve.
6. She stops. / Her hand drifts to the holster.
7. He raises his glove hand. / Slow. / Palm out. / JED: I don't have a gun. / MARISOL: Liar. / JED: Left it in the well.
8. She stares. / Then at the well. / Back at him. / MARISOL: Why? / JED: So you'd have to ask.
9. She draws. / He doesn't move. / The barrel shakes. / The hawk screams.
10. Then she holsters it, and slaps him once across the face with the flat of her hand. / He takes it. / MARISOL: Now we're even.
11. She turns for her horse. / He lets out a breath that's been twelve years in the making.

### s00357
0. A concrete locker room beneath a high school gym. / Rows of dented lockers. / A long bench. / A whiteboard with half-erased plays. / Fluorescent tubes buzz. / A cheap phone sits on the bench, facedown, silent.
1. No one is here. / Rain drums on the roof above.
2. Then footsteps on the stairs.
3. COACH ODETTE BRANNIGAN, fifties, enters, shaking water from a whistle lanyard. / She wears a windbreaker with the school's faded crest. / She is soaked and she doesn't care. / She crosses to the bench, picks up the phone, studies it, sets it down.
4. The phone buzzes. / She looks at the screen. / She does not answer. / It goes to voicemail.
5. A recorded voice fills the room. / COACH ODETTE: Hey, Odette. It's you. It's me. Yesterday you. Listen, you're going to want to quit tonight. / ODETTE: Don't. / COACH ODETTE: Don't say "don't." You always say "don't." Just listen.
6. She sits on the bench, elbows on knees.
7. ODETTE: Twenty-six years. Twenty-six years of whistles, of weigh-ins, of boys crying in showers. / COACH ODETTE: Of boys crying in showers. / ODETTE: And what do I get? A losing season. A board meeting. A letter. / COACH ODETTE: The letter said "restructure." / ODETTE: I know what it said. It said, "Thank you for your service, please clear your locker."
8. She stands, goes to a locker at the end of the row, spins the dial, opens it. / It is full of ribbons, photographs, a dented trophy. / She takes none of it.
9. ODETTE: Eleven state champions. Forty-four all-conference. One kid who made the Olympic trials and cried so hard he forgot his shoes. / COACH ODETTE: He forgot his shoes, Odette. You drove them to Colorado. / ODETTE: Shut up. / COACH ODETTE: You drove eleven hours with a pair of shoes on the passenger seat. And he wrestled barefoot because they were the wrong size. / ODETTE: He still won. / COACH ODETTE: He still won.
10. She takes a deep breath. / She closes the locker. / She leans her forehead against it.
11. ODETTE: I'm tired. / COACH ODETTE: I know. That's why you recorded this. So that I would say it to you when you were tired enough to hear.
12. ODETTE: What do I say to them? / COACH ODETTE: Nothing. You just show up. Tomorrow at six. Same as always. Let the board send their letter. / ODETTE: They'll fire me. / COACH ODETTE: Probably. / ODETTE: Then why? / COACH ODETTE: Because the boys will be there at six. And they're waiting for you to say go.
13. A pause. / The voicemail ends with a soft beep. / Odette picks up the phone and holds it to her chest for a long moment. / She lays it on the bench.
14. Then she goes to the whiteboard, picks up a marker, and writes in large block letters: "6 AM." / ODETTE: Go.
15. She turns off the light.

### s00400
0. Stacked cryo-crates. / Condensation drips from the ceiling. / Cold light, long shadows. / A hatch in the far wall is sealed with yellow tape. / TOMASZ, 50, crew chief, in a quilted jacket, leans against a crate. / REN, 20s, logistics, holds a tablet. / ASTRID, 40, a medic, kneels beside a cracked cryo-pod. / BASHIR, 30s, an engineer, stands at the sealed hatch with a wrench.
1. TOMASZ: Count again. / REN: Two hundred twelve. / ASTRID: Two hundred eleven. This one's empty. / BASHIR: Two hundred ten. I counted the manifest. / TOMASZ: You don't count the manifest. You count the pods. / REN: The manifest says two hundred twelve. / BASHIR: The manifest is old.
2. ASTRID: This pod isn't cracked from the outside. / REN: What do you mean? / ASTRID: The glass bowed out. Someone woke up in here.
3. TOMASZ: Nobody wakes up. We don't wake until arrival. / BASHIR: Then someone did.
4. TOMASZ: Then someone's in this ship we don't know about. / REN: That's impossible. / ASTRID: So is the pod.
5. BASHIR: The hatch is taped from the inside.
6. They all turn to him. / He taps the yellow tape with the wrench. / It is peeled from the inside edge.
7. TOMASZ: Open it. / BASHIR: I'd rather not. / TOMASZ: Open it. / BASHIR: I'd rather you didn't.
8. Behind the hatch, someone knocks, once. / Politely.

### s00171
0. Dryers tumble. / One flickering tube. / Rain on the glass.
1. BERNADETTE COLE, 50s, folds a man's shirts. / Precise. / Too precise.
2. IGNACIO "NACHO" REYES, 20s, enters, soaked, a duffel on his shoulder. / He drops it. / Takes the seat across from her. / She does not look up.
3. He sets a ring on the folding table. / She folds a sleeve. / He taps the ring. / She smooths a collar.
4. BERNADETTE: You're late. / NACHO: Bus was slow. / BERNADETTE: Eleven years, Ignacio. The bus was slow.
5. NACHO: I wrote you. / BERNADETTE: You wrote Dad. Dad's dead. / NACHO: I know he's dead. I was in the room. / BERNADETTE: You were in the hallway.
6. NACHO: Okay. The hallway. I was in the hallway, Bernie, because you told me not to come in. You said, quote, he doesn't want you here. / BERNADETTE: He didn't.
7. NACHO: He asked for me. The nurse told me. / BERNADETTE: The nurse didn't know him.
8. NACHO: Neither did you.
9. She stops folding. / A dryer buzzes. / Neither moves.
10. Then she sweeps the shirts off the table with one arm. / They scatter across the floor.
11. Nacho stands, kicks the duffel, and the ring spins off the table and rolls under a machine.

### s00630
0. A single sheet of ice under a tin roof, lit by hanging bulbs. / A scoreboard with hand-painted numbers reads 7-7. / The stands are empty but for a thermos and a folded flag. / Cold breath hangs in the air. / BERNADETTE "BERNIE" ZIELINSKI, fifties, coach, in a wool coat and a hat with a pom-pom gone gray, stands at the boards with a clipboard she hasn't looked at in an hour. / INGRID VAN DER MEER, thirties, skip, crouches on the hack, broom across her knees, eyes locked on the button at the far end.
1. BERNIE: Last stone. Last end. Don't make it complicated. / INGRID: It's already complicated.
2. She slides out and releases. / The granite hisses down the sheet. / Bernie walks along the boards beside it, and Ingrid follows, sweeping hard.
3. BERNIE: Hard, hard, hard! Give it everything! / INGRID: Nobody's there, Bern. / BERNIE: Somebody's always there.
4. The stone slows. / Ingrid stops sweeping, and she sees what Bernie sees: it will stop a hair short of the button, one stone from a guard.
5. BERNIE: Off, off, off. / INGRID: Off? / BERNIE: Let it die.
6. She lifts the broom. / The stone creeps, trembles, and settles an inch from the button, nudging the opponent's red stone to the back rings.
7. Silence. / Then both of them breathe out.
8. BERNIE: That's it. / INGRID: That's it? / BERNIE: Measure it.
9. Ingrid pulls the steel measure from her pocket. / She kneels over the rings, checks one stone, then the other, and holds still for a long moment. / BERNIE: Well?
10. INGRID: Closer. By a thumbnail.
11. Bernie covers her mouth with her gloved hand. / Ingrid sits back on the ice, laughing quietly, the broom across her lap, tears freezing at the edge of her eyes.
12. BERNIE: You see that? You see that? / INGRID: She's taking the credit. / BERNIE: She is.

### s00797
0. Chlorine haze. / A tiled deck. / Six lanes taped off with orange cones. / Snorkels and fins in rows along the wall.
1. COACH BEVERLY STANISLAUS, 50s, whistle between her teeth, paces the deck. / RUSLAN VOLODIN, 20s, the team captain, sits on the edge with his feet in the water, taping his stick. / LOTTIE FAIRBANKS, 19, adjusts her mask, while DEWAYNE PICKETT, 22, the goalie, bounces on his toes and glares at the scoreboard. / On the far side, MR. PHAM, 40s, the referee, in a black-and-white striped rash guard, checks his watch and says nothing.
2. Beverly stops pacing. / She blows the whistle once. / Ruslan looks up. / Lottie flinches. / Dewayne turns from the board and starts toward her, but she holds up a hand and he stops.
3. BEVERLY: Four seconds on the clock. Down one. Who wants it? / RUSLAN: I do. / DEWAYNE: You always do. / RUSLAN: Somebody has to. / LOTTIE: I'll take it, Coach. / BEVERLY: You'll take the pass. / LOTTIE: That's what I said. / DEWAYNE: That's not what you said.
4. Lottie's mask snaps down. / Ruslan rises, water streaming off his legs. / RUSLAN: Say it again, Dewayne. / DEWAYNE: I said it was a bad idea. Four seconds, one shot, all on you. / RUSLAN: Then block better. / DEWAYNE: I'm a goalie, not a miracle.
5. Beverly steps between them. / Pham finally blows his own whistle, a thin shriek. / Everyone turns. / PHAM: Gentlemen. Ladies. Positions.
6. They slip into the water in single file, silent. / Beverly stands on the deck, hands on her hips, watching the surface close over their heads.
7. Under the lights, the pool goes still. / Then a ripple. / Then a roar of bubbles.

### s00865
0. Cereal boxes, a half-eaten banana, a school permission slip stuck under a magnet. / The radio plays traffic. / MINA, forties, tosses a lunch bag onto the counter. / GUS, her father, seventies, stands at the sink drying a mug. / ROWAN, eleven, her son, sits on a stool with a backpack on his lap, hands tight on the straps.
1. She checks her watch. / He sets down the mug. / The boy stares at the table.
2. MINA: Rowan, shoes. / ROWAN: They're on. / MINA: Other shoes.
3. He does not move. / She walks around the counter and crouches in front of him. / She puts a hand on his knee. / He pulls it away.
4. GUS: Mina. Let him. / MINA: Dad, we're late. / GUS: He's not ready.
5. She looks up at her father, then at her son, then at the clock. / She opens her mouth, closes it, and takes a breath.
6. MINA: Rowan, is it the test? / He shakes his head. / She waits. / The radio moves on to the weather.
7. Gus takes the backpack from the boy's lap, sets it on the floor, and sits beside him. / GUS: I'll walk you in.
8. Rowan nods once. / Mina stands, picks up the lunch bag, and holds it out. / He takes it.
9. MINA: I'll pick you up. / ROWAN: Okay.
10. She leans in to kiss his hair, and for the first time he lets her.

## Comparisons
p0: a = s00970 beat 7 | b = s00867 beat 5
p1: a = s00342 beat 5 | b = s00412 beat 5
p2: a = s00503 beat 3 | b = s00059 beat 1
p3: a = s00846 beat 14 | b = s00865 beat 3
p4: a = s00806 beat 2 | b = s00865 beat 4
p5: a = s00818 beat 9 | b = s00171 beat 11
p6: a = s00744 beat 24 | b = s00352 beat 16
p7: a = s00272 beat 0 | b = s00685 beat 1
p8: a = s00412 beat 16 | b = s00227 beat 10
p9: a = s00134 beat 8 | b = s00114 beat 9
p10: a = s00690 beat 14 | b = s00818 beat 9
p11: a = s00818 beat 1 | b = s00412 beat 8
p12: a = s00169 beat 3 | b = s00059 beat 12
p13: a = s00364 beat 8 | b = s00352 beat 8
p14: a = s00807 beat 3 | b = s00744 beat 30
p15: a = s00357 beat 14 | b = s00734 beat 2
p16: a = s00492 beat 16 | b = s00734 beat 1
p17: a = s00888 beat 5 | b = s00503 beat 7
p18: a = s00744 beat 1 | b = s00685 beat 2
p19: a = s00685 beat 2 | b = s00412 beat 4
p20: a = s00685 beat 6 | b = s00357 beat 14
p21: a = s00734 beat 7 | b = s00134 beat 9
p22: a = s00385 beat 9 | b = s00807 beat 2
p23: a = s00412 beat 8 | b = s00630 beat 11
p24: a = s00478 beat 11 | b = s00412 beat 6
p25: a = s00134 beat 9 | b = s00744 beat 27
p26: a = s00272 beat 7 | b = s00783 beat 9
p27: a = s00807 beat 8 | b = s00846 beat 12
p28: a = s00391 beat 4 | b = s00444 beat 4
p29: a = s00685 beat 7 | b = s00478 beat 11
p30: a = s00478 beat 8 | b = s00400 beat 6
p31: a = s00357 beat 11 | b = s00783 beat 4
p32: a = s00391 beat 1 | b = s00806 beat 12
p33: a = s00888 beat 5 | b = s00503 beat 0
p34: a = s00690 beat 14 | b = s00764 beat 3
p35: a = s00059 beat 2 | b = s00555 beat 10
p36: a = s00114 beat 11 | b = s00400 beat 0
p37: a = s00685 beat 10 | b = s00114 beat 14
p38: a = s00630 beat 6 | b = s00385 beat 1
p39: a = s00059 beat 5 | b = s00639 beat 8
p40: a = s00391 beat 3 | b = s00685 beat 4
p41: a = s00412 beat 11 | b = s00922 beat 9
p42: a = s00763 beat 7 | b = s00492 beat 0
p43: a = s00110 beat 8 | b = s00614 beat 5
p44: a = s00970 beat 10 | b = s00171 beat 4
p45: a = s00970 beat 0 | b = s00093 beat 4
p46: a = s00630 beat 9 | b = s00632 beat 2
p47: a = s00614 beat 5 | b = s00685 beat 14
p48: a = s00744 beat 1 | b = s00690 beat 12
p49: a = s00846 beat 7 | b = s00806 beat 0
p50: a = s00970 beat 11 | b = s00352 beat 8
p51: a = s00818 beat 5 | b = s00970 beat 8
p52: a = s00503 beat 6 | b = s00846 beat 12
p53: a = s00492 beat 16 | b = s00342 beat 3
p54: a = s00471 beat 3 | b = s00922 beat 1
p55: a = s00492 beat 17 | b = s00454 beat 2