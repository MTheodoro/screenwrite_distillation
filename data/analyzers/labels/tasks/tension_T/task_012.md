You are an annotator labeling screenplay scenes for a dataset.

Rate dramatic tension. Below are scenes split into numbered beats.

1. For every scene, give one score 0-100 per beat (same order).
2. Then answer each cross-scene comparison: which beat is MORE tense, "a", "b" or "tie".

Tension = what a reader feels: stakes, conflict, threat, urgency, suspense. Loud or violent is not automatically
tense; a quiet threat can be very tense. Absolute anchors: 0-15 calm/mundane, 15-35 mild friction or unease,
35-60 clear conflict or suspense, 60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death /
climactic moment.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/tension_T/group_014.json with the Write tool:
{"scores": {"<scene_id>": [..], ...}, "pairs": {"<pair id>": "a"|"b"|"tie", ...}}
Valid JSON only. Reply only with "done".

## Scenes

### s00679
0. A plywood shack on a frozen lake, thick with the smell of wet wool and diesel. / Five holes have been drilled in the floor, and the black water in each one barely moves.
1. HALVARD EIDE, 60s, hunched on an upturned bucket, jigs a line and hums. / SUNNIVA ROE, 30s, sits opposite, a thermos between her boots. / BROCK DILLARD, 40s, leans against the door with arms crossed, steam rising off his shoulders, while INES CALLOWAY, 50s, rummages in a tackle box and TEAGUE, 20s, ties a lure with numb fingers.
2. Halvard pours coffee into the cap of the thermos and hands it to Sunniva, who passes it to Brock, who sips, grimaces, and passes it on to Ines, who takes it without looking up, and for a long minute nothing in the hut moves but the lines trembling in the holes.
3. HALVARD: Sixty years on this lake. Never a morning like it. / SUNNIVA: Quiet. / INES: Too quiet.
4. Teague stops tying.
5. Brock shifts against the door and the latch, which has been hooked from the outside, does not lift.

### s00255
0. Bunting. / Folding tables. / A smell of sugar and mild panic. / Contestants stand at oven stations in matching aprons. / Five of them cluster near the judges' table, where a lemon tart sits under a glass dome. / BERNADETTE "BERNIE" OKONKWO-PRYCE (60s, apron with a hand-stitched rolling pin) wipes flour from her glasses. / CORNELIUS "CORKY" ABERNATHY-LIU (30s, hair net, drawn-on mustache) sulks beside a deflated soufflé. / GWENDOLYN MUKHERJEE-FALLOWS (40s, crisp white chef's jacket) arranges a perfect row of macarons. / ORVILLE "OLLIE" TEMPLETON-ADAIR (70s, suspenders) hums off-key over a tray of shortbread. / And the judge, MADAME FRANÇOISE OLUWASEUN-LEBLANC (50s, silk scarf, expression of permanent disappointment), lowers herself into the central chair.
1. FRANÇOISE: Contestants. Time. / BERNIE: Time! / CORKY: Time? / GWENDOLYN: Time. / OLLIE: Time, time, time.
2. FRANÇOISE: Mr. Abernathy-Liu, your soufflé has fallen. / CORKY: It's resting. / FRANÇOISE: It is flat. / CORKY: It's modernist. / BERNIE: It's a pancake, dear. / CORKY: It's an homage to the pancake.
3. GWENDOLYN: Mine rose perfectly. / BERNIE: Yours is a macaron, Gwen. It's required to. / GWENDOLYN: Don't be catty. / OLLIE: I'm not catty. I'm shortbread.
4. FRANÇOISE: Mr. Templeton-Adair, you are not allowed to hum. / OLLIE: I'm not humming. / FRANÇOISE: You are. / OLLIE: It's the oven.
5. The oven timer BEEPS. / Everyone jumps.
6. Gwendolyn's elbow knocks her tray. / Macarons scatter across the floor like pastel dice. / Corky dives, Bernie dives, Ollie dives. / The three of them collide, flour clouds going up, a tangle of aprons.
7. FRANÇOISE: Stop! Stop at once!
8. Bernie surfaces with a macaron in her teeth. / Corky has a mouthful of shortbread. / Ollie is under the table. / Gwendolyn stands frozen, hands at her cheeks.
9. GWENDOLYN: Eight hours. / FRANÇOISE: Mrs. Mukherjee-Fallows. / GWENDOLYN: Eight hours I stood at that oven.
10. BERNIE: It's not bad, actually. / CORKY: Quite good. / OLLIE: Can someone pass a plate?
11. Françoise sits slowly, looks at the wreckage, and for the first time lifts a hand to her mouth to hide a smile. / FRANÇOISE: I have never seen such a thing.
12. BERNIE: Does that mean we won? / FRANÇOISE: It means I'm hungry.

### s00772
0. Frost on everything. / Hanging tuna like pale bells. / Breath clouds.
1. MAURA KESSLER-DIAZ, 40s, black parka, lockpick case, crouches at a floor safe.
2. The heavy door SCRATCHES open. / Light slices in.
3. She kills her penlight. / Flattens against the shelving.
4. Boots. / Slow.
5. TIBOR "TIB" NAGY, 50s, market night manager, rubber apron, a gaff hook in one fist, walks in. / He stops. / Smells the air.
6. TIB: I know somebody's in here. / Silence. / Drip. / Fans. / TIB: Cameras went dark an hour ago. That's not luck.
7. MAURA: Hello, Tib.
8. He doesn't flinch. / Raises the hook.
9. TIB: Maura. You left your hair dye in my sink last time. / MAURA: Brown. Not my color.
10. TIB: You're stealing from the wrong man. / MAURA: Everybody says that.
11. They circle. / Tuna swing between them.
12. TIB: Put the picks down. / MAURA: Put the hook down. / Neither does.
13. TIB: Your brother used to say you talk too much. / MAURA: My brother used to say a lot of things. Then he said nothing.
14. Tib's jaw tightens. / TIB: That wasn't me. / MAURA: It was your safe.
15. He lunges. / She drops the case. / They collide. / The shelving rattles. / Fish rain.
16. They grapple, hook against forearm, her knee into his ribs. / TIB: Stop it! / MAURA: You stop it!
17. Tib slams her into a shelf. / Ice cracks loose. / They both slide to the floor.
18. Both freeze. / A distant sound: a truck engine.
19. TIB: That's my deliveries. / MAURA: You have deliveries at two a.m.? / TIB: Fish don't keep hours.
20. The engine idles. / Voices outside, muffled.
21. They look at each other. / At the safe. / At the door.
22. MAURA: Who's out there, Tib? / TIB: Not mine. / MAURA: Then whose?
23. Tib lowers the hook. / A fraction.
24. TIB: The man who owns the safe. / MAURA: You said it was yours. / TIB: I lied. Everybody does.
25. The door handle turns. / They both dive behind the tuna rack.
26. They crouch shoulder to shoulder. / Her breath on his collar. / His hand over her mouth.
27. She bites it. / TIB: Ow! / MAURA: Quiet!
28. A shadow crosses the frosted glass. / Stops.
29. They go still. / Fans hum. / A fish drips onto Maura's hood.
30. TIB: When he opens the door, you take the left. / MAURA: Why would I take anything from you? / TIB: Because he kills us both if you don't.
31. The shadow leans in. / A knuckle taps the glass. / Twice.
32. Tib and Maura exchange a look. / Then, together, they stand.
33. MAURA: On three. / TIB: One. / MAURA: Two.
34. The door swings wide.
35. They launch.

### s00405
0. The roof is gone. / Gray light falls in cold shafts between blackened beams. / Pews are splintered kindling. / Over the altar, a cracked stone Madonna still holds up one hand. / Snow has drifted through the nave, and boot prints cross it in a ragged line.
1. SERGEANT MALLORY, 40s, a lean, gray-stubbled man with a rifle across his back, crouches behind the altar rail. / His eyes are red from no sleep. / He peers over the stone at the door.
2. PRIVATE DIAZ, 19, lies on a pew with a bandaged thigh, face pale as paper, watching the sky through the roof. / CORPORAL OKONJO, 30s, tall and broad, with a radio on his back, stands guard at a side window. / PRIVATE FENWICK, 20s, a freckled kid in a helmet two sizes too big, sits against the wall, cleaning his rifle with trembling hands.
3. OKONJO: Quiet out there. / MALLORY: Too quiet. / DIAZ: I like quiet. / FENWICK: You like everything. / DIAZ: I like being alive.
4. Mallory crosses the nave and kneels beside him. / He checks the bandage. / It's soaked through. / He doesn't comment. / He just pulls his scarf from his neck and ties it over the wound.
5. MALLORY: Okonjo. Raise HQ. / OKONJO: Tried. Nothing. / MALLORY: Try again.
6. Okonjo cranks the radio. / Static. / He tries another frequency. / Static. / He puts the handset down and leans against the window.
7. OKONJO: Sergeant, something's moving in the pass.
8. Mallory goes to the window. / Down the slope, in the gray, a figure toils up the path, small, bent against the wind. / He raises his binoculars. / MALLORY: One man. No weapon. Carrying something. / FENWICK: Could be a decoy. / MALLORY: Could be.
9. The door of the church swings open. / They whirl, rifles up.
10. In the doorway stands PADRE LUCIANO, 60s, a priest in a black cassock crusted with ice, holding a battered wooden crate to his chest. / His face is red with cold and weeping with exhaustion. / He lifts his chin.
11. PADRE LUCIANO: Please. Don't shoot. This is my church.
12. Nobody lowers a weapon. / MALLORY: Father, this is a war zone. / PADRE LUCIANO: It was my church before it was a war zone.
13. He steps inside. / Snow melts off his shoulders. / He does not seem to see the rifles. / He walks past them, up the nave, to the altar, and sets the crate on it with great care.
14. OKONJO: Sergeant? / MALLORY: Wait.
15. The priest opens the crate. / Inside, nestled in straw, are five loaves of bread, a corked bottle, and a small bundle wrapped in oilcloth. / He takes out a loaf and holds it to the light. / PADRE LUCIANO: My parishioners buried this in the cellar before the shelling. I dug it out this morning.
16. DIAZ: Is that bread? / PADRE LUCIANO: It's bread, my son.
17. Fenwick lowers his rifle first. / Then Okonjo. / Mallory is last, and slowest, and he does it with a long breath.
18. MALLORY: We can't pay. / PADRE LUCIANO: I have not asked.
19. He breaks the loaf and offers a piece to Diaz. / Diaz takes it with both hands and eats like a child. / The priest moves down the pew, giving, and the soldiers come to him one by one.
20. Mallory stays by the window. / He watches the pass. / The wind picks up.
21. Far off, in the gray, a sound: the low drone of engines. / MALLORY: Okonjo. / OKONJO: I hear it. / MALLORY: How long? / OKONJO: Ten minutes. Maybe less.
22. PADRE LUCIANO: Then we eat quickly.
23. He turns to the Madonna and bows his head. / The soldiers do not pray, but they do not speak either. / The engines grow louder.
24. Fenwick is the first to stand. / He sets down his rifle, picks up the priest's empty crate, and begins to stack broken pews against the door.

### s00389
0. Steel counters, sheet pans of sandwiches, a coffee urn the size of a toddler. / Through the swinging door, organ music murmurs. / ROSALIND, 50s, in a black apron, assembles egg-salad triangles with a surgeon's calm. / BART, 60s, the director, in a charcoal suit, counts napkins into a stack. / NGOZI, 20s, a server, polishes a serving spoon until it screams. / HECTOR, 40s, the cook, scrubs a pot that is already clean. / At the back, AGNES, 8, in a velvet dress and sneakers, sits under a prep table with a coloring book.
1. ROSALIND: That's the thirty-second triangle. / BART: We need forty. / ROSALIND: We need thirty-eight. / BART: We need forty. Mr. Okonkwo's family is large. / NGOZI: It's always the ones who say it's small. / HECTOR: My aunt said it would be small. They came by the busload.
2. BART: Hector, did you do the coffee? / HECTOR: I did the coffee. / BART: Was it decaf? / HECTOR: Some of it. / BART: Which? / HECTOR: The urn on the left. / ROSALIND: That's the regular. / HECTOR: Then the urn on the right. / NGOZI: That's also the regular. / HECTOR: Then it's all regular. / ROSALIND: Thank you for telling us.
3. BART: Mr. Okonkwo did enjoy his coffee. / ROSALIND: Bart. / BART: I'm only saying he'd approve.
4. Ngozi puts down the spoon. / She picks up another.
5. NGOZI: Agnes, are you okay under there? / AGNES: I'm coloring. / NGOZI: What are you coloring?
6. AGNES: Grandpa.
7. A quiet settles. / Rosalind lays down her knife. / Bart straightens a napkin that is already straight. / Hector stops scrubbing.
8. ROSALIND: Is it a good one? / AGNES: It's not finished.
9. Rosalind wipes her hands on her apron and crouches to look under the table. / Hector sets down the pot. / Ngozi opens the swinging door a crack. / The organ music swells.
10. Agnes holds up the book. / On the page, a very large crayon man in a very large crayon hat, and next to him, a smaller crayon girl holding his hand. / Both are bright orange. / AGNES: He liked orange.
11. Rosalind nods. / She stands, takes a sandwich, and puts it on a plate. / Then another. / Then another.
12. ROSALIND: Forty. / BART: Forty.
13. He picks up the tray.

### s00489
0. A rickety wooden coop on a tenement roof. / Wire mesh. / Birds shifting and cooing. / Laundry lines snap in the wind. / Behind it, a skyline washed orange.
1. AUGUSTINE "AUGIE" MBEKI (70s, flat cap, hands gnarled as roots) kneels at the coop door feeding corn from a coffee can. / TOMASZ "TOMMY" NOWAK (40s, his son-in-law, hospital badge still clipped on) stands behind him, jacket slung over a shoulder. / Beside the water trough, ZUZANNA "ZUZU" NOWAK (12, Tommy's daughter, school uniform, backpack at her feet) holds a gray pigeon against her chest. / NADEEM ABBASI (30s, neighbor, tool belt) leans on the stairwell door frame with a beer.
2. TOMMY: Augie, we have to talk about Friday. / AUGIE: Nothing to talk about. / TOMMY: The building's being sold. / AUGIE: I know what the building is.
3. NADEEM: Council gave the tenants sixty days. / AUGIE: Nadeem. Drink your beer. / NADEEM: I'm only saying.
4. ZUZU: Grandpa, what happens to the birds?
5. Augie tips the last corn from the can. / He closes the coop door with a soft click.
6. AUGIE: They fly home. / ZUZU: But home is here. / AUGIE: Then they'll come back and find the roof empty.
7. Silence. / Tommy puts a hand on Augie's shoulder. / Augie does not shrug it off.
8. TOMMY: We'll find another roof. / AUGIE: Where? In Queens? They'd never find their way. / NADEEM: Augie, they've done it before. You said so. / AUGIE: Mm.
9. Zuzu lifts the pigeon high. / It flaps once, twice, and lifts out of her hands into the orange sky. / They all watch. / It circles the roof. / Settles on the antenna.
10. ZUZU: Grandpa. Look.
11. Augie nods slowly. / He tilts his cap back. / AUGIE: That one's called Hope. Your grandmother named her.

### s00384
0. Stone. / Torchlight. / Wind howling through arrow slits.
1. ZEPHYRINE, 50, witch, robes patched with stolen feathers, climbs backward, pointing a staff down the stairwell. / BRYNJA, 30, knight, dented plate, longsword out, climbs forward, pushing up.
2. They meet at a landing and stop. / BRYNJA: You're the witch. / ZEPHYRINE: You're the knight. / BRYNJA: You're under arrest. / ZEPHYRINE: Under what? / BRYNJA: The king's law. / ZEPHYRINE: Which king?
3. Brynja's sword drops an inch. / She hadn't thought about that. / BRYNJA: The one with the crown. / ZEPHYRINE: He's been dead nine years.
4. Brynja steps up one stair. / Zephyrine raises the staff. / A spark jumps from the tip and sizzles across the stone. / BRYNJA: Don't. / ZEPHYRINE: Then don't push.
5. Brynja pushes. / She grabs the staff and wrenches it to one side. / The spark lands on a torch, which flares. / Both stumble. / She tumbles into a wall, but she keeps hold of the staff. / ZEPHYRINE: That's mine. / BRYNJA: Not anymore.
6. Zephyrine kicks her in the shin. / Brynja yelps and lets go. / Zephyrine seizes the staff, and now they stand eye to eye, panting.
7. BRYNJA: Why did you steal the bell? / ZEPHYRINE: It was singing in her sleep. / BRYNJA: Whose?
8. ZEPHYRINE: Yours. Your daughter's.
9. The wind quiets. / Brynja steps back. / The sword lowers fully. / BRYNJA: How do you know that?
10. Zephyrine looks at her for a long time. / ZEPHYRINE: Come up. I'll show you.
11. She turns and climbs. / Brynja, shoulders heavy, sheathes the sword and follows.

### s00228
0. Inside the trunk of a tree so old its heartwood has hollowed into a cathedral. / Shelves of bark scrolls spiral up the walls. / Fireflies drift among them like patient candles. / At a root-table in the center sit four figures, each with a small lamp. / HESPERIA THORNQUILL (60s, keeper-in-chief, silver braid to her knees) turns the pages of a mossbound book. / She is calm in the way of those who have never been hurried. / Beside her, the young scribe OSWIN FERNLEIGH (17, ink to the elbows) copies a line, tongue between his teeth. / Across from them a travelling tinker, BRAMBLE-JACK (40s, patched coat, pockets that clink), polishes a brass key with his sleeve. / At the end of the table, a stranger from the river-folk, ILUNA WAVEREAD (30s, damp hair, a shell necklace), sits with her chin in her palm.
1. HESPERIA: We begin the evening readings. / Nobody moves. / The fireflies drift. / OSWIN: Keeper Thornquill, should I record the weather? / HESPERIA: Yes, child. Rain in the east, none in the west. / OSWIN: Rain in the east. / He writes. / She smiles at the book.
2. BRAMBLE-JACK: Same rain as yesterday. Same rain as a hundred years. / HESPERIA: Bramble-Jack, if you have a thought, share it with us all. / BRAMBLE-JACK: Nothing, Keeper. Just brass. / He holds the key up. / It catches a firefly's light.
3. ILUNA: It's a lovely key. / BRAMBLE-JACK: Isn't it? Found it in a trout. / ILUNA: In a trout? / BRAMBLE-JACK: Don't ask. / She laughs, soft, and he looks pleased.
4. Hesperia closes the book. / Opens another. / HESPERIA: Iluna Wavereads. You came with a question. / ILUNA: I did. Though it's been so peaceful, I almost forgot. / HESPERIA: Ask it anyway. / ILUNA: The river-folk say a door lies under this tree. They say it opens once a generation. / OSWIN: The cellar door. / HESPERIA: Oswin. / OSWIN: Sorry, Keeper.
5. Hesperia turns a page. / The parchment rustles. / HESPERIA: There is a door. It does not open for questions. / ILUNA: What does it open for? / HESPERIA: Patience. / BRAMBLE-JACK: She's been waiting six years, Keeper. I counted. / HESPERIA: Then six years is not yet enough.
6. Iluna sighs, amused rather than defeated. / ILUNA: Oswin, would you like to hear what the river says about the archive? / OSWIN: Please. / ILUNA: It says you keep the quietest place in the whole forest. / OSWIN: It does? / ILUNA: It does. And it says the quiet is the door.
7. Hesperia looks up from the book for the first time. / Studies the river-woman a long moment. / HESPERIA: Who taught you that? / ILUNA: Nobody. I listened. / HESPERIA: Well. Well, well.
8. She closes the book on her finger. / HESPERIA: Bramble-Jack, bring the key. / He rises, key in his palm, and crosses the root floor. / At the base of the spiral stair, he kneels. / The key fits nothing visible. / BRAMBLE-JACK: Where do I-- / HESPERIA: Wherever it is quietest.
9. He closes his eyes. / Listens. / Then touches the key to the grain of the wood, and the grain opens, gently, like an eyelid.
10. Warm gold light spills across the floor. / OSWIN: You did that. / ILUNA: We all did. / The fireflies drift toward the light, in no hurry at all.

### s00295
0. A rental van. / Two women lean on its bumper. / Between them, a gym bag. / LEONIE ASANTEWAA-VOGEL (40s, bomber jacket) lights a cigarette. / Her hands are steady. / MARGUERETTA "RETTA" OKOYE-BLOOM (30s, hoodie) watches the sun come up over a gray city.
1. Leonie offers the pack. / Retta shakes her head. / LEONIE: You hungry? / RETTA: No. / LEONIE: You should eat. / RETTA: Later.
2. Leonie drags on the cigarette. / Looks at the bag. / LEONIE: She wanted it split three ways. / RETTA: She wanted a lot of things. / LEONIE: She called me last night. / RETTA: She called me, too.
3. Silence. / A pigeon lands on the van roof. / Walks the length of it.
4. LEONIE: She said she was sorry. / RETTA: She said that to me, too. / Leonie flicks the ash. / Retta stares at her shoes.
5. LEONIE: Nobody's coming. / RETTA: I know. / LEONIE: So we could just go. / RETTA: We could.
6. Neither moves. / The pigeon takes off.
7. Retta bends. / Unzips the bag a few inches. / Looks. / Zips it shut. / She hands the strap to Leonie, and Leonie takes it, and for a moment neither lets go.
8. LEONIE: Which way? / RETTA: You pick.
9. Leonie opens the van door. / Retta gets in. / Leonie follows. / They sit with the engine off and the sun on the windshield.

### s00515
0. A long hall lined with oak map drawers. / A skylight pours soft gray light onto a drafting table the size of a rowboat. / Globes in brass frames. / A smell of vellum, ink, and cold tea.
1. SIR RUPERT ASHBY-LOVELL (60s, silver whiskers, frock coat) stoops over the table, magnifying glass in hand. / A half-finished map of the Zambezi lies pinned open.
2. MISS ANNELIESE BASU (30s, drafting apron, spectacles pushed up into her hair) stands at his shoulder, holding a bottle of india ink. / She is the only woman in the building not carrying a tray.
3. On the far side of the table, MR. THADDEUS OKEKE (40s, young curator, ink stains on his cuffs, a chart tube under his arm) fidgets with a ruler.
4. SIR RUPERT: The river bends. / ANNELIESE: It does not. / SIR RUPERT: I have seen the sketches. It bends east. / ANNELIESE: You have seen one sketch. By a man who was never within a hundred miles.
5. THADDEUS: Sir Rupert, if I may. / SIR RUPERT: You may not. / ANNELIESE: He may. / SIR RUPERT: Miss Basu.
6. ANNELIESE: Mr. Okeke measured it himself. / THADDEUS: Three summers, sir. On foot. With a theodolite and a very bad mule.
7. Sir Rupert straightens. / The magnifying glass lowers. / For a moment nobody speaks. / A clock ticks.
8. SIR RUPERT: Show me.
9. Thaddeus spreads the chart. / The river on it runs straight, then bends west, a long soft curve. / Anneliese sets the india ink beside it. / Sir Rupert bends close.
10. SIR RUPERT: That is not on my map. / ANNELIESE: No, sir.
11. SIR RUPERT: This will cost the Society a reprint. / THADDEUS: Seven hundred pounds. / SIR RUPERT: Seven hundred. / ANNELIESE: It is a very small sum for being right.
12. He eyes her. / She meets his eye. / A long, silent, civil duel of gazes.
13. SIR RUPERT: Miss Basu, you are impertinent. / ANNELIESE: Yes, sir. / SIR RUPERT: Mr. Okeke, you are insubordinate. / THADDEUS: Yes, sir.
14. SIR RUPERT: You are both entirely correct.
15. He takes the pen from the stand and, with a hand that trembles only slightly, strikes through the old river and begins to draw the new one.

### s00316
0. Far above the stage, a catwalk of iron grating hung with ropes and counterweights. / Below, the orchestra tunes in a distant tide. / Four figures in stagehand blacks creep along the rail. / The first is IMOGEN LARKSPUR-ADEWALE (40s), who holds a lantern shuttered to a slit. / The second is HOLDEN PRYCE-NWANKWO (50s), who carries a coil of rope over one shoulder. / The third is SALOME BRAITHWAITE-OKORO (30s), who moves like water. / The fourth, last in line, is YEVGENY "ZHENYA" ABARA-KOZLOV (20s), who is sweating through his gloves.
1. She raises two fingers. / He freezes behind her. / She points at a hanging chandelier of painted canvas, ten feet away. / He nods, though he cannot see what she means.
2. She takes the rope from him, loops it round the rail, and tests it with her weight. / He swallows. / The chandelier turns slowly in the draft.
3. IMOGEN: Ten minutes. / HOLDEN: Eight. / SALOME: Seven, if he stops shaking. / ZHENYA: I'm not shaking. / SALOME: You're humming. / ZHENYA: I'm humming because he's humming. / HOLDEN: Nobody's humming.
4. They listen. / Below, the orchestra falls silent. / A hush rolls up through the dark.
5. A single violin begins, and from beneath the stage a soprano's voice rises in a glissando so pure it makes Imogen's grip tighten on the lantern.
6. She turns to him, and he to her. / Her eyes glitter. / His mouth is open. / Whoever they are to each other, in this moment they share a single trembling breath.
7. SALOME: Now.
8. They move. / She drops the rope. / He catches it. / She slides down. / He braces.
9. The chandelier lurches, and a hundred glass beads shiver. / Below, someone in the audience gasps.
10. IMOGEN: Abort! / HOLDEN: Too late!
11. The chandelier swings free and crashes silently into the curtain, a harmless explosion of painted canvas.
12. The audience, delighted, applauds. / The four of them crouch on the catwalk, frozen, as the soprano holds her note and the whole house roars.

### s00048
0. Cracked glass panes. / Tomato vines grown wild. / A rusted fan turns without wind. / Laundry lines sag with sheets, still dripping. / MIRIAM STOLZ-AGYEMAN (60s, silver bun, gardening gloves) trims a vine. / Her son WENDELL (30s, work boots, tie loosened) sits on an upturned bucket. / His wife TOVA (30s, pregnant, hand on her belly) leans in the doorway. / Their neighbor, old CASPIAN DRUMMOND (80s, oxygen tank, tiny sunhat), dozes in a lawn chair.
1. MIRIAM: Landlord says we have until Friday. / WENDELL: Mom. / MIRIAM: Friday. That's four days.
2. TOVA: We'll find another roof. / MIRIAM: Another roof won't have these.
3. She holds up a tomato, ripe and enormous. / Wendell looks at it, then at his wife.
4. CASPIAN: Beefsteak. / MIRIAM: Cranberry heirloom. / CASPIAN: Beefsteak.
5. Miriam sighs and places the tomato in Tova's hand. / Tova weighs it, smiling. / TOVA: It's heavy.
6. WENDELL: Mom, you can't carry this up the stairs forever. / MIRIAM: Watch me.

### s00049
0. Ten thousand steps, hewn into rock. / Prayer flags snap. / Clouds boil below. / ALDRIC VANTERPOOL (30s, battered armor, scabbard empty) climbs, panting. / Behind him, a hooded girl, THESSALY (teen, silver eyes, bare feet) hops step to step like a goat. / Further down, burly SORREL IRONBARK (40s, axe on back, braided beard) hauls himself up, wheezing. / Last comes the old wizard BARNABUS GLIMMERWICK (80s, crooked staff, patched robes), who rests on every third step.
1. ALDRIC: Barnabus, hurry! / BARNABUS: I am a wizard, not a mountain goat! / THESSALY: I'm a mountain goat. / SORREL: Gods, the stairs.
2. Thessaly stops at a landing. / Above, a stone gate, and between its pillars, a shimmering curtain of wind. / She puts out her hand. / It ripples.
3. THESSALY: It's open. / ALDRIC: Is it safe? / THESSALY: No. / SORREL: Good. I dislike safe.
4. Barnabus catches up, bent double. / BARNABUS: Aldric, listen. When we cross, the Wind Warden will ask each of us one question. / ALDRIC: What question? / BARNABUS: What we fear most.
5. SORREL: ^That's easy. / THESSALY: ^That's easy. / They answer together, then glare at each other.
6. ALDRIC: Sorrel? / SORREL: Being forgotten.
7. ALDRIC: Thessaly? / THESSALY: Being found.
8. Aldric draws a breath. / Wind howls through the gate. / He steps toward it, hand on the empty scabbard.
9. ALDRIC: Then we go together.

### s00659
0. Ribs rise like cathedral arches over shelves of salt-warped books. / Lanterns hang from vertebrae. / A long table of driftwood. / Somewhere in the dark, water drips onto stone.
1. OSRIC THISTLEDOWN, nineties, the Keeper, hunches over an open atlas, a quill behind each ear. / Across the table sits MIRABEL ASHGROVE, forties, a courier in a salt-stained cloak, a sealed scroll tube beside her. / At the end, fiddling with an abacus of bone beads, is PETRONELLA VOSS, twenties, the apprentice, sleepy-eyed.
2. OSRIC: You said the tide was safe. / MIRABEL: I said it was passable. / OSRIC: Those are different words. / MIRABEL: They're different tides.
3. PETRONELLA: Master Osric, the abacus is stuck again. / OSRIC: Hit it. / PETRONELLA: I did. / OSRIC: Harder.
4. MIRABEL: May I ask what you're guarding in here? / OSRIC: Everything. / MIRABEL: That's no answer. / OSRIC: It's the only answer. Every book in this room is the last of its kind. We keep them here because the sea took the rest.
5. MIRABEL: And the whale? / OSRIC: The whale was the first book. We just couldn't read it.
6. PETRONELLA: I think I can. / OSRIC: You think a lot of things, child. / MIRABEL: Let her speak. / OSRIC: She speaks. All day. It's the listening she lacks.
7. PETRONELLA: There are marks on the ribs, Master. Inside, near the spine. Like writing. I've traced them. / OSRIC: Marks are not writing. / PETRONELLA: These repeat. / OSRIC: Barnacles repeat. / PETRONELLA: In sixes?
8. A silence. / Osric sets down his quill. / OSRIC: Show me.
9. She hurries to a rib and presses her lantern against the bone. / The marks leap out in the light: tiny, regular, deliberate.
10. OSRIC: Forty years I've sat under this. / MIRABEL: What does it say? / PETRONELLA: I don't know yet. / OSRIC: Then we shall have to learn.
11. A pause. / Mirabel rises from her chair and looks up. / MIRABEL: I'll stay the night. / OSRIC: You'll stay the winter. / MIRABEL: I have a delivery. / OSRIC: Leave it here. Everything arrives, eventually.
12. The scroll tube sits on the table, forgotten.
13. At the doorway, the lantern light catches the wet footprints of someone who has just entered. / A figure steps out of the dark: BRANWELL KESH, thirties, barefoot, soaked to the bone, carrying a dripping canvas sack and wearing a sea captain's coat three sizes too large.
14. BRANWELL: Sorry. The door was open. / OSRIC: There is no door. / BRANWELL: Then I'm very sorry.
15. He sets down the sack. / A single book slides out, black with salt, and lands open on the table. / Petronella gasps.
16. PETRONELLA: That's the same writing. / OSRIC: Sit down, boy. Tell me where you found it.
17. Branwell sits. / The lantern light finds the page.

### s00536
0. Gilded boxes, a chandelier wrapped in burlap, a stage covered with maps. / Plaster cherubs peer down at a long table of officers. / Somewhere, a piano is out of tune. / MAJOR PATRICK HALLORAN, 50s, silver at the temples, stands at the center of the stage with a pointer. / CAPTAIN LUCIEN BEAUMONT, 40s, a trim moustache and a brigade tie, sits stiffly at his left. / LIEUTENANT THOMAS DUPREE, 20s, pale, writes everything down. / SERGEANT GRISWOLD, 40s, a boxer's nose, leans on a velvet curtain with arms crossed.
1. HALLORAN: We hold the bridge until dawn. After that, it isn't ours.
2. BEAUMONT: He'll never hold until dawn, Major. / DUPREE: Which he, sir? / HALLORAN: He means me. / BEAUMONT: I mean the man you've put at the east end. / GRISWOLD: He's mine, sir. He's the best I've got. / BEAUMONT: Then God help the rest.
3. The door at the back bangs open. / A scrap of daylight cuts the aisle. / PRIVATE WIGGINS, 18, a mud-streaked messenger with a satchel, runs down the carpet at full tilt and salutes, panting.
4. WIGGINS: Major, sir. The bridge is gone. / Silence. / A cherub's plaster smile hangs over them. / HALLORAN: How gone? / WIGGINS: Blown, sir. From our side.
5. Beaumont slowly stands. / Halloran lowers his pointer.

### s00662
0. A dry riverbed. / Sage, cracked clay, a lone cottonwood bleached white. / A horse stands hobbled by the tree, nosing at the dust. / A campfire has burned to a gray nest.
1. A RIDER, fifties, hat low, sits on a flat stone with a tin cup. / A graying beard. / A slow way of moving, as if he'd spent a lifetime bargaining with his joints.
2. He tilts the cup. / Dregs. / He tosses them on the ashes.
3. RIDER: Don't look at me like that. It's the last of the coffee. / The horse flicks an ear.
4. He reaches into his saddlebag and withdraws a folded sheet of paper, brown at the creases. / Smooths it on his knee. / Reads in silence. / Then, aloud:
5. RIDER: "Dear Abel. The farm is sold. Your sister has the boy. Do not come back, for there is nothing to come back to."
6. He lowers the letter. / The wind lifts the edge of it. / He holds it down with a thumb.
7. RIDER: Abel Corrigan. That's me. You never asked. / The horse snorts. / ABEL: Well. Now you know.
8. He folds the letter along its creases and tucks it into his hatband. / He gets to his feet in stages. / ABEL: Forty miles to the river.
9. From somewhere a long way off, down the wash, comes the thin whistle of a train. / ABEL: Would you listen to that.
10. He takes the horse's reins. / He leads it a few paces, stops, and stands listening until the whistle fades.
11. ABEL: "Dear Father. We are well. The boy has your eyes." / ABEL: Hush now.
12. He mounts, slowly, and rides out along the wash toward the east, where the sun has begun to lift itself over the ridge.

### s00234
0. Mist. / Broken tile. / A dead cow on its side, bloated. / Three soldiers crouch behind a collapsed wall. / SERGEANT EZEKIEL "ZEKE" MATTHIAS-ODUYA (30s, helmet netted, chewing nothing) peers over the stones. / Beside him, PRIVATE COLM BRANNIGAN-VOSS (19, rifle too big, freckles) breathes through his mouth. / Behind them, CORPORAL RAFAELA "RAFA" DELGADO-HOLM (20s, radio on her back, steady hands) checks her sidearm.
1. ZEKE: Quiet. Too quiet. / COLM: You say that every time, Sarge. / ZEKE: It's true every time.
2. RAFA: Barn's clear. House is clear. Nothing on the ridge. / ZEKE: Then why's the cow dead? / RAFA: Shell. / ZEKE: Which shell? / COLM: Ours? / ZEKE: Maybe.
3. A bird lands on the cow. / Pecks. / Leaves.
4. COLM: Corporal Delgado-Holm. Can I ask something? / RAFA: Rafa. Just Rafa. / COLM: Rafa. Why's the radio quiet? / RAFA: Because nobody's talking. / COLM: That's what I mean.
5. ZEKE: Brannigan. Eyes front. / COLM: Yes, Sarge.
6. They wait. / A droplet of mist rolls from Zeke's helmet and hits the mud.
7. RAFA: Sarge. Door. / The farmhouse door, which was shut, is now ajar. / A hand-width.
8. ZEKE: Colm. Left. Rafa. Right. On three. / COLM: One. / RAFA: Two. / They rise together, rifles up.
9. The door swings wide. / Out steps a goat. / Then a second goat. / A third.
10. The squad stares. / The goats stare back. / COLM: Sarge. Was that the thing? / ZEKE: That was the thing. / RAFA: I'm going to be sick.
11. She laughs, covering her mouth. / Colm sinks down, giggling. / Zeke slumps against the wall, shoulders shaking.
12. A whistle in the sky. / Rising. / They all stop laughing at once.
13. ZEKE: Down! / They scatter. / The first shell lands in the barn. / The wall behind them heaves. / The goats bolt in three directions. / Dust and straw rain over three helmets.
14. Rafa pulls Colm flat. / Zeke crawls over both of them. / ZEKE: Rafa! Radio! / RAFA: It's dead! / ZEKE: Then pray! / COLM: To who? / ZEKE: The goats!

### s00262
0. Blue walls. / Meltwater running in thin silver threads across the floor. / Overhead, the ice groans like a living thing. / Two climbers in torn gear crouch near the cave mouth. / Their ropes lie in a coil between them, one end frayed. / DR. LEOCADIA MWANGI-HALVORSEN (40s, glaciologist, split lip) tapes a gash in her thigh. / She works fast, jaw clenched. / Across from her, her expedition partner TOBIAS ADEGOKE-LINDGREN (30s, mountaineer, frostbitten ears) tests the sharpness of an ice axe with his thumb.
1. LEOCADIA: Our rope won't hold another fall. / TOBIAS: Then we don't fall. / LEOCADIA: Tobias. / TOBIAS: Leocadia.
2. LEOCADIA: Eight hundred meters to the glacier terminus. Without a rope. / TOBIAS: Seven fifty. / LEOCADIA: Does it matter? / TOBIAS: It matters to me. / LEOCADIA: Why? / TOBIAS: Because it's less.
3. She laughs, then winces. / He tosses her a chocolate bar. / She catches it one-handed.
4. LEOCADIA: How many left? / TOBIAS: Three. / LEOCADIA: Four, if we split yours. / TOBIAS: I ate mine. / LEOCADIA: You always eat yours. / TOBIAS: I have a metabolism. / LEOCADIA: You have a problem.
5. Silence. / The ice groans louder. / A trickle of water becomes a stream, curling around their boots.
6. TOBIAS: Leo. / LEOCADIA: I hear it. / TOBIAS: The glacier's moving. / LEOCADIA: It's always moving. / TOBIAS: Faster.
7. She stands, wincing, and puts a hand against the wall. / It hums.
8. LEOCADIA: We go. Now. / TOBIAS: Without gear? / LEOCADIA: Without everything.
9. They shoulder packs, scramble toward the cave mouth. / The ceiling cracks, a long hairline racing across the blue. / Tobias grabs her arm. / She grabs his.
10. They both look up as a slab the size of a truck shears loose.
11. They dive. / The slab lands where they stood, spraying frozen shards. / Leocadia tumbles through the opening, Tobias behind, both rolling into the white glare of day.
12. They lie on their backs, gasping. / Behind them, the cave collapses, groaning, with a final thunderous sigh.
13. Dust settles. / Snow glitters. / A distant raven calls.
14. TOBIAS: Seven fifty. / LEOCADIA: Seven hundred. We just walked fifty. / TOBIAS: We crawled fifty. / LEOCADIA: Counts.
15. They sit up. / She offers him the chocolate. / He shakes his head. / She breaks it in half, hands him the bigger piece.
16. TOBIAS: Leo. / LEOCADIA: Eat. / He eats. / She watches the sky.
17. LEOCADIA: I'm tired. / TOBIAS: I know. / LEOCADIA: Don't say anything. / TOBIAS: I won't.
18. They sit in the sun a long time. / Neither speaks. / The glacier moves under them like a slow breath.
19. Eventually she rises, offers him her good hand. / He takes it. / They start walking.

### s00719
0. A cathedral of glowing pipes and throbbing coils. / A yellow warning lamp spins.
1. COMMANDER HALLORAN, 50s, in a gold-trimmed uniform, grips a rail. / DR. XIMENA ROJAS-VANCE, 40s, a physicist with wild gray hair, taps a console. / BOSUN TUCK, 60s, a grizzled engineer in oil-stained overalls, hauls on a valve wheel.
2. HALLORAN: Doctor, how long? / XIMENA: Eleven minutes before the core goes critical.
3. TUCK: Eleven? I said nine. / XIMENA: Your instruments are older than my daughter, Tuck. / TUCK: They've never lied to me.
4. ENSIGN RAVI, 20s, in a crisp blue jumpsuit, bursts through the hatch, breathless. / RAVI: Commander! The aft shields are failing!
5. HALLORAN: Ensign, take the other console. / RAVI: Sir, I haven't been trained -- / HALLORAN: Neither was I, when I started.
6. Ravi darts to the console.
7. Ximena and Tuck both reach for the same lever. / Their hands collide. / They glare at each other and then, as one, push.
8. The lamp flares white. / The pipes shudder. / Halloran braces, Ravi ducks, Tuck is thrown against the wall.
9. XIMENA: It's working! / TUCK: Don't say that. Saying it jinxes it.
10. HALLORAN: Bosun. Doctor. Ensign. If we get through this, I'm buying the first round. / RAVI: Sir, is that a promise? / HALLORAN: It's an order.
11. The core's hum drops to a purr. / The warning lamp dims. / All four slump, grinning.

### s00275
0. The big concrete windmill at hole eighteen. / Blades turning slowly. / A tunnel through its base. / GRETCHEN POLLARD (50s, visor, scorecard in teeth) is wedged halfway into the tunnel on her stomach. / Her husband WALDO POLLARD (50s, bucket hat) holds her ankles. / TEENAGE ATTENDANT RUSS OYELARAN (17, name tag, vest) arrives with a rake. / LITTLE MIRABEL (8, glitter sneakers) watches from the green, club trailing.
1. RUSS: Ma'am, you can't go in there. / GRETCHEN: My ball's in there! / WALDO: She means it.
2. The blades turn. / A blade clips Waldo's hat. / He ducks.
3. Gretchen shoots out of the tunnel, ball in hand, and the two of them tumble into Russ. / All three go down in a heap. / The rake clatters.
4. MIRABEL: Is that a hole in one? / RUSS: No.
5. Gretchen holds up the ball like a trophy.

### s00229
0. Twelve dryers, three working. / A TV on the wall plays a muted weather channel. / NADIRA FAROUK (30s, scrubs, hair in a clip) folds towels at a long table, sorts socks into pairs, pulls a stray sock from her pocket and drops it into a lost-and-found bucket, all without looking up. / Across the room, her brother-in-law CASIMIR ODUYA (40s, security jacket) feeds quarters into a dryer, kicks the door shut, and slumps onto a plastic chair. / In the corner, a young woman, LINNEA HARTWELL-SATO (20s, headphones, textbook), highlights a page and glances at the clock every half minute.
1. An intercom crackles on the wall. / INTERCOM: Attention customers. The attendant is on break. Please do not feed the machines your feelings. / CASIMIR: That's new. / NADIRA: It's the owner. He thinks he's funny. / CASIMIR: He is not.
2. A small pause. / A dryer thumps. / LINNEA: Excuse me. Do you know what time the last bus is? / NADIRA: One-ten. / LINNEA: Thanks. / CASIMIR: Ninety-nine percent of the time it's late. / LINNEA: Great.
3. Nadira pairs two socks, tucks them, sets them on the pile. / Casimir rubs his eyes. / Linnea turns a page of her textbook. / The weather channel shows a swirl of green over the coast.
4. A phone buzzes on the table. / Nadira checks it. / Reads. / Sets it face down. / CASIMIR: Hospital? / NADIRA: My shift's covered. They just wanted to tell me. / CASIMIR: That's nice of them. / NADIRA: It's the first time.
5. The intercom crackles again. / INTERCOM: Dryer six is finished. Dryer six has been finished for forty minutes. Dryer six would like you to take your clothes. / Linnea looks up, guilty. / Hurries to dryer six. / Pulls out a hot tangle of jeans. / LINNEA: Sorry.
6. CASIMIR: He's watching us. / NADIRA: He's always watching us. / She laughs, quiet. / Casimir smiles at his shoes. / Linnea folds her jeans into a small, neat square.
7. Outside, a bus idles at the curb. / Nobody gets up.

### s00658
0. Forty beds under bright lights. / Banners reading SLEEP BETTER, LIVE BETTER. / A wall of pillows. / Soft jazz.
1. REGINALD "REG" PAPADOPOULOS, fifties, a salesman in a rumpled blazer, lies on a king-sized display bed with his hands folded on his chest, eyes shut. / Across the aisle, GRETCHEN SUNDQVIST, thirties, an assistant manager with a tablet, taps without looking up. / Between them, on a queen mattress, OSWIN TREMBLAY, seventy, a customer in a flat cap, sits and bounces gently, testing.
2. OSWIN: This one has a nice give. / GRETCHEN: It's our Premium Plus. / OSWIN: What's the premium? / GRETCHEN: The plus. / OSWIN: Mm.
3. He lies down beside Reg, who doesn't move. / They lie shoulder to shoulder, staring at the ceiling.
4. REG: Don't tell her I'm off the clock. / OSWIN: I thought you were the salesman. / REG: I'm a man in bed.
5. GRETCHEN: Reg. Customer. / REG: I'm helping him. / GRETCHEN: You're asleep. / REG: I'm demonstrating.
6. GRETCHEN: We offer a hundred-night trial on all models. / OSWIN: A hundred nights?
7. REG: Don't do it. / OSWIN: Why? / REG: Because you'll sleep.
8. Oswin considers this for a long moment. / He turns his head toward Reg, and Reg turns toward him.
9. OSWIN: I'll take it. / GRETCHEN: Excellent.
10. Neither of them gets up.

### s00367
0. A wax museum at midnight. / Rows of lifelike figures in period costume, glass eyes catching the exit light. / A velvet rope sags. / A faint scent of melting paraffin hangs in the dark. / INSPECTOR HOLLIS DRAKE, fifties, trench-coated, a pocket flashlight in his teeth, crouches by a figure of Napoleon. / DR. WILHELMINA VOSS, forties, the museum curator, stands over him with a clipboard. / CONSTABLE REUBEN OKAFOR-LEE, twenties, shifts his weight at the door, hand on his truncheon. / MADAME ODILE FERRIER, seventies, the sculptor, sits on a folding stool gripping a cane. / LORD ASHTON PEMBERTON, sixties, the patron, leans against a plinth, his cravat undone. / NURSE JOSEPHINE BELL, thirties, hovers at his shoulder with a medical bag.
1. DRAKE: When was this figure last moved? / WILHELMINA: Never. It's been bolted since 1962. / DRAKE: Then who changed his hat? / WILHELMINA: I'm sorry?
2. He stands. / He lifts the bicorne from Napoleon's head. / Beneath it, the wax has been scored with a fine hairline crack, and in the crack, something glints.
3. DRAKE: Constable, gloves. / REUBEN: Here, sir.
4. He hands them over. / Drake slides a gloved finger into the crack, hooks the glint, and draws it out: a small brass key.
5. PEMBERTON: Well, there you are. A key. How delightful.
6. ODILE: Ashton. / PEMBERTON: What, Odile? / ODILE: You promised.
7. Pemberton straightens. / Josephine's hand drifts to his sleeve. / He shakes it off.
8. DRAKE: Lord Pemberton, you've seen this key before. / PEMBERTON: I haven't. / DRAKE: You have a matching one in your waistcoat.
9. Pemberton's hand goes to his chest. / Odile bows her head. / Wilhelmina lowers her clipboard.
10. WILHELMINA: Inspector, what does the key open? / DRAKE: Dr. Voss, I believe you can tell me. / WILHELMINA: The cellar. Under the Chamber of Horrors. / DRAKE: And what's in the cellar? / WILHELMINA: The first sculpture. The one Madame Ferrier never exhibited.
11. All eyes turn to Odile. / She sets down her cane. / She lifts her chin.
12. ODILE: I made her so well, Inspector. So very well. Nobody could tell she wasn't alive. / DRAKE: Who was she? / ODILE: My sister.
13. REUBEN: Ma'am? / ODILE: She sat for me on the last night of her life. I could not bear to let her go.
14. JOSEPHINE: You knew? / PEMBERTON: I paid to keep it quiet.
15. DRAKE: Constable, escort Madame Ferrier and Lord Pemberton to the carriage. Nurse Bell, you will assist Dr. Voss with the cellar. / REUBEN: Yes, sir.
16. PHONE: Inspector, this is the Commissioner. Have you concluded? / DRAKE: Nearly, sir.
17. Drake pockets the key. / Odile rises with surprising grace and takes Reuben's arm. / At the door she stops, turns, and looks at the figures one last time.
18. ODILE: They keep better than we do, you know.
19. She exits. / The wax faces stare after her. / Drake switches off his flashlight and the museum goes dim.

### s00546
0. Pebbled ice, white and hard under flat lights. / Red and yellow rings painted beneath the surface. / A scoreboard ticks. / The crowd, forty fans in parkas, hushes.
1. SKIP BRITTA LINDGREN-KOWALSKI, 40s, a wool toque and a steady squint, crouches in the house with her broom held like a rudder. / At the hack, MURDOCH FINLAY, 50s, her veteran lead, gathers a stone. / At the sideline, YUKI TANAKA-REID, 20s, the youngest on the team, grips a broom and bites her lip. / TERRENCE ODUMODU, 30s, the vice-skip, in a quilted vest, watches the scoreboard like a hawk.
2. BRITTA: Hurry hard!
3. Murdoch releases. / The stone glides. / The broom crew sprints alongside it. / YUKI: Hard! Hard! / TERRENCE: Hard! / BRITTA: HARD!
4. The stone slides, hovers at the edge of the button. / Nothing moves. / Forty parkas hold their breath.
5. Then it curls. / A gentle arc. / A sliver of daylight. / It nudges the opponent's stone aside and settles dead center.
6. The crowd explodes. / Yuki jumps and flings her broom in the air. / Terrence hugs Murdoch so hard he lifts him. / Britta stays crouched, forehead on her broom handle, shaking.
7. A woman in an official's jacket strides across the ice, clipboard in hand. / OLUWASEUN ADEBAYO, 50s, the head official, wears a tight bun and a sour look. / She inspects the stone with a tape measure. / OLUWASEUN: Measure's confirmed. Team Lindgren takes the end.
8. Britta looks up. / Eyes wide. / BRITTA: We won? / OLUWASEUN: You won the end. The match is Thursday.
9. Britta laughs, helpless. / The crowd roars again.
10. TERRENCE: Was that real? / YUKI: I think so.

### s00586
0. Harbor lights. / Gulls asleep on bollards. / A white truck with a cartoon cone on its side, awnings rolled, serving window shuttered. / Engine ticking as it cools. / Inside, a single dome light. / RENATA GUILLORY, 40s, wears a chef's apron over a leather jacket. / Her wrists are zip-tied to the steering wheel. / Blood in one eyebrow. / She looks at the man in the passenger seat. / VIKTOR LAZAREV, 50s, cleans a pistol with an ice-cream napkin. / Salt-and-pepper beard. / Soft Russian accent. / Very calm.
1. RENATA: You can't be serious. / VIKTOR: I am always serious. It is my curse. / RENATA: You're stealing a truck full of Rocky Road. / VIKTOR: I am recovering a truck full of something else. / RENATA: There's nothing else.
2. VIKTOR: The second freezer. / RENATA: That's for the sprinkles. / VIKTOR: Renata. / RENATA: Fine. It's for the other thing. / VIKTOR: Which is?
3. RENATA: Four kilos. You know it's four kilos. / VIKTOR: I know it was five. / RENATA: Four.
4. VIKTOR: You took one. / RENATA: I took what I was owed. / VIKTOR: By whom?
5. RENATA: By you. You didn't pay me for the last three runs. / VIKTOR: That is not how it works. / RENATA: That is exactly how it works, Viktor. I carry. You pay. This week you didn't.
6. VIKTOR: I was in Odessa. / RENATA: You were in a hotel with a woman. / VIKTOR: My wife. / RENATA: Your other wife.
7. A pause. / A gull calls from far off. / The water slaps against the pilings.
8. VIKTOR: Who told you? / RENATA: I make ice cream. People talk to ice-cream women.
9. VIKTOR: I am tired, Renata. / RENATA: Then go home. / VIKTOR: I would like to. But I have a partner who says four when it is five. / RENATA: And a partner who says five when it is four. / VIKTOR: You have a point.
10. RENATA: Then cut me loose. / VIKTOR: Why? / RENATA: So I can show you where the fifth kilo is. / VIKTOR: Why would you do that? / RENATA: Because I'm tired too.
11. Long silence. / He puts down the napkin. / Puts down the gun on the dashboard, barrel pointed at the windshield. / Produces a pocket knife and, without looking at her, saws through the tie on her left wrist. / VIKTOR: The other one when I see it. / RENATA: Fair.
12. She flexes her freed hand. / Reaches under the seat, slowly, and pulls out a battered tin lunchbox. / Opens it. / Inside, wrapped in butcher paper, a brick the size of a loaf of bread.
13. VIKTOR: That's it? / RENATA: That's it. / VIKTOR: Why did you keep it? / RENATA: It was insurance. / VIKTOR: Against me? / RENATA: Against anyone.
14. Viktor picks up the brick. / Weighs it in his palm. / Looks out at the dark harbor.
15. VIKTOR: You know, in Odessa my grandmother sold ice cream from a bicycle. / RENATA: Is that true? / VIKTOR: No.
16. He puts the brick back in the lunchbox. / Closes it. / Sets it between them on the console.
17. VIKTOR: Keep it. / RENATA: What? / VIKTOR: Keep it. Pay yourself. Call it back wages.
18. RENATA: What's the catch? / VIKTOR: No catch. I am retiring. / RENATA: You can't retire. / VIKTOR: I have been retiring for six years. This is the first time anyone believed me.
19. He cuts the other tie. / She rubs her wrists. / He holds out his hand. / She stares at it. / Takes it.
20. RENATA: Then what do I call you? / VIKTOR: Viktor. A man who sells ice cream from a bicycle. / RENATA: A bicycle. / VIKTOR: Of course.
21. He opens the door. / Steps out into the harbor air. / Doesn't look back. / The door shuts with a soft thud. / The dome light goes dark.
22. Renata sits in the quiet, the lunchbox beside her, the engine finally silent. / She opens the serving window. / A cold wind off the water. / She breathes.

### s00577
0. Blue walls. / Forty feet of ice above, a slot of white sky. / Wind whistles across the top like a flute.
1. At the bottom, on a ledge no wider than a door: KWABENA ADDO, 40s, Ghanaian geologist, burly, beard crusted with frost, left leg bent wrong at the shin.
2. A rope dangles ten feet above. / Swinging. / Cut at the end.
3. Two meters below him, on a lower shelf: BJORN HALVORSEN, 50s, Norwegian guide, lean as a rake, gray eyes, bleeding from his scalp. / He doesn't move.
4. KWABENA: Bjorn. / Nothing. / KWABENA: Bjorn! / The wind. / A dripping sound.
5. Bjorn's hand twitches. / Opens. / Closes. / BJORN: Don't shout. The ice listens. / KWABENA: You're alive. / BJORN: Don't sound so disappointed.
6. He rolls to his side. / Pushes up on one elbow. / Blood runs down his cheek. / He wipes it with a glove, stares at the red.
7. KWABENA: Can you climb? / BJORN: Can you? / KWABENA: My leg. / BJORN: Then no.
8. Bjorn crawls to the lip of his shelf. / Looks up the wall. / His breath fogs. / He reaches out and grips a protrusion of ice, tests it with his weight. / It holds.
9. KWABENA: He cut the rope. / BJORN: Who? / KWABENA: Anders. He let go on purpose. / BJORN: He was scared. / KWABENA: He was a coward. / BJORN: Same thing, down here.
10. Silence. / Drips. / Far off, a deep CRACK rolls through the glacier like a door slamming in a house the size of a mountain.
11. Both men freeze. / KWABENA: That's close. / BJORN: Don't breathe. / They don't. / Ice dust sifts down. / Settles on Kwabena's eyelashes. / On Bjorn's shoulders. / The crack fades. / BJORN: Okay. Now you breathe.
12. Kwabena lets out a ragged exhale, laughs, coughs. / KWABENA: You Norwegians. / BJORN: You Ghanaians. / KWABENA: What about us? / BJORN: You laugh when you should be afraid. / KWABENA: I laugh because I am afraid.
13. Bjorn considers this. / Nods. / Unslings his pack. / Digs.
14. He pulls out: a coil of thin cord, two ice screws, a pocket knife, half a chocolate bar. / BJORN: Inventory. / KWABENA: That's all? / BJORN: That's all.
15. He tosses the chocolate. / Kwabena catches it one-handed. / Breaks it in two. / Throws half back. / KWABENA: Your turn to eat. / BJORN: You're hurt worse. / KWABENA: Eat.
16. Bjorn eats. / Chews slowly. / Studies the wall.
17. BJORN: There's a lip. Twelve feet up. Past it, a chimney. / KWABENA: You can see that? / BJORN: I can see the shadow of it.
18. He clips an ice screw to his belt. / Twists the second between his fingers like a pen. / BJORN: I'll go up. Anchor. Drop the cord. / KWABENA: And if the ice breaks? / BJORN: Then you'll have the chocolate.
19. Kwabena shakes his head, grinning in spite of himself.
20. Bjorn plants a boot. / Presses a glove to the wall. / Begins to climb, metal clicking on blue.
21. Six feet. / Eight. / He stops. / He's breathing hard, forehead against the ice. / KWABENA: Bjorn. / BJORN: Quiet.
22. Another CRACK, closer. / Bjorn flattens against the wall. / Kwabena braces his good leg against the ledge.
23. The wall shudders. / A sheet of ice the size of a car door sheers away from the opposite side and shatters on the shelf between them.
24. Silence. / Both men stare at the wreckage. / BJORN: Now.
25. He climbs. / Fast now. / Ten feet. / Eleven. / His hand finds the lip, grips, pulls. / He rolls over the top of the ledge and disappears.
26. Kwabena waits. / Seconds. / A minute.
27. Then the cord drops, snaking down, dancing in the draft. / It lands across his lap. / BJORN: Tie in. Slowly.
28. Kwabena ties the cord around his chest, hands trembling. / He tugs it twice. / Tugs again. / KWABENA: Ready.
29. BJORN: Say it in your language. / KWABENA: Say what? / BJORN: The thing you say before you do something stupid. / KWABENA: Nyame nti. / BJORN: That. Do that.
30. The cord goes tight. / Kwabena lifts off the ledge, swinging, grunting, and rises into the white.

### s00925
0. A shattered belfry overlooking a flooded field. / A stagnant afternoon. / Rain has stopped but the sky has not made up its mind.
1. SERGEANT NIKOLAI VASSILIEV (30s, tired, frost in his beard) sits on an ammunition crate, cleaning a rifle bolt with a rag, while PRIVATE ANNELIESE BRANDSTETTER (20s, a nurse's armband stitched crooked over her sleeve) rewraps a bandage and a fresh-faced boy, PRIVATE YUSUF DEMIR (19), watches the field through a gap in the stones and a radioman, CORPORAL HARLAN PIKE (40s, headset askew), lights a cigarette, drags on it, hands it to Yusuf, and takes the binoculars back without looking.
2. A scrap of white cloth drifts across the flooded field, snagged on a pole that bobs and turns in the current. / Beneath it, something pale struggles in the water.
3. SERGEANT: Hold your fire. Let it come. / YUSUF: It's a dog, Sergeant. / NIKOLAI: It's a dog with a cloth round its neck. Wait. / ANNELIESE: It's limping. / PIKE: Could be a trick. / ANNELIESE: Could be a leg.
4. The dog stumbles in the water. / Anneliese rises, but Nikolai catches her sleeve. / NIKOLAI: Wait.
5. She waits. / Pike mutters into the handset, lowers it, and shrugs. / Yusuf passes the cigarette back. / Nikolai sets his rifle bolt on the crate, wipes his hands, and nods once.
6. NIKOLAI: Go and get it.
7. Anneliese and Yusuf start down the stone steps together. / Pike watches them go. / Nikolai goes back to the bolt.
8. PIKE: You'd have let it drown. / SERGEANT: I'd have let it choose.
9. He slides the bolt home. / It clicks.

### s00396
0. A parlor grown inside the hollow of an immense oak. / The walls are living bark, polished by decades of elbows. / Honey-colored light falls through a knothole window, and tiny lanterns of captured fireflies hang from the ceiling on spider-silk. / A kettle on a mushroom-stool burner sings. / ALDOUS, 70, a wizard in a tea-stained cardigan, pours from a pot shaped like a sleeping badger. / SEREN, 20s, an apprentice in a patched green cloak, stirs her cup and stirs it again. / PIP, 9, a boy with soot on his chin, sits under the table feeding crumbs to something invisible.
1. ALDOUS: Milk? / SEREN: Please. / PIP: Is it a lot of milk? / ALDOUS: It's enough. / SEREN: It's a bit much. / ALDOUS: You said please. / PIP: Seren said please, I said please, Master Aldous said please.
2. SEREN: Nobody said please to the cat. / ALDOUS: We have a cat? / PIP: We have a cat under the table. / SEREN: We don't have a cat. / PIP: It's a very quiet cat.
3. Aldous passes Seren her tea. / She holds it, not drinking. / She watches the knothole.
4. A shadow crosses the window. / The door, a round slab of bark on a leather hinge, swings inward. / WIDOW HARROWGATE, 80s, small and square in a black bonnet, leans on a cane carved from a single antler. / She has the look of a woman who has been on her way for a very long time.
5. ALDOUS: Mrs. Harrowgate. / WIDOW HARROWGATE: Aldous. You've aged. / ALDOUS: You're early. / WIDOW HARROWGATE: I'm precisely on time. You were always late.
6. SEREN: Tea? / WIDOW HARROWGATE: Not today, girl.
7. PIP: Is she the one with the owl? / SEREN: Pip. / WIDOW HARROWGATE: I am the one with the owl.
8. ALDOUS: Sit, Hester. / WIDOW HARROWGATE: I'll stand.
9. She doesn't. / She lowers herself into the nearest chair, set at the head of the table like a throne.
10. The firefly lanterns brighten very slightly. / Nobody says anything. / Aldous refills his cup. / Seren stirs. / Pip, under the table, tugs at the invisible cat's tail. / The kettle sings on.

### s00201
0. Tiers of green racks under purple grow-lamps. / Mist drifts. / Beyond a long window, stars wheel slowly. / COMMANDER YUSUF ADEBAYO-LIND, 50s, tall, silver beard, in a gray flight suit, trims a tomato vine. / BOTANIST IXCHEL MORALES, 30s, small and wiry, scribbles notes. / A cleaning drone named SCRUB, 2 feet tall, hums along the floor. / ENSIGN BRODERICK PELL, 20s, freckled, carries a tray of seedlings. / A maintenance tech, KOFI AMOAH-REYES, 40s, hangs upside down in a service hatch.
1. Pell trips over Scrub. / The tray flies. / Ixchel dives to catch it. / Kofi drops a wrench. / Yusuf catches the wrench. / Scrub spins in a circle and chirps.
2. ENSIGN PELL: Sorry, sir. / COMMANDER YUSUF: It's a garden, Ensign. Things fall.
3. Ixchel sets the tray down on a rack. / Kofi swings out of the hatch and lands upright. / KOFI: Irrigation's back online. / IXCHEL: Finally.
4. They all stand a moment, watching the mist settle on the leaves.

### s00407
0. Ranks of potted orchids. / Warm fog on the panes. / A white aisle runner laid between fern beds. / Folding chairs. / A trellis arch drapes with unlit fairy lights. / ROSEMARY, 30s, the bride, in jeans and a linen blouse, stands at the arch. / DEVLIN, 30s, the groom, in a rumpled suit, stands beside her. / ANTOINETTE, 60s, the officiant, in a shawl, holds an index card. / KIERAN, 30s, the best man, slouches against a pot of cymbidiums. / SEUN, 20s, the maid of honor, in a floral wrap dress, holds a bouquet of paper flowers. / LAVINIA, 50s, Rosemary's mother, perches on a chair with a clipboard.
1. LAVINIA: All right, everyone. Positions! / KIERAN: Where do I stand? / SEUN: Next to the groom. / KIERAN: Which one's the groom? / DEVLIN: I'm the groom. / KIERAN: Oh. Yeah.
2. ANTOINETTE: Dearly beloved. / ROSEMARY: Do we say that? / ANTOINETTE: It's traditional. / ROSEMARY: It's a little dead. / ANTOINETTE: It's very old.
3. LAVINIA: They'll be late for the caterer.
4. Seun glances at Kieran. / Kieran glances at Seun. / Both look away. / She straightens the bouquet. / He picks at a leaf. / The fairy lights flick on, then off.
5. DEVLIN: You look nervous. / ROSEMARY: I'm not. / DEVLIN: You're holding your breath. / ROSEMARY: It's the humidity.
6. DEVLIN: Ro. / ROSEMARY: He looked at her. / DEVLIN: Who? / ROSEMARY: Kieran. At Seun. / DEVLIN: They're the best man and the maid of honor. They're supposed to look at each other. / ROSEMARY: Not like that.
7. Antoinette clears her throat and taps the card.
8. ANTOINETTE: Does anyone object? / A silence. / Everyone looks at one another. / LAVINIA: It's a rehearsal. No one objects.
9. KIERAN: Actually.
10. All heads turn. / Kieran is looking at Seun. / She stares back, wide-eyed.
11. KIERAN: Nope. Never mind. / SEUN: Oh no.
12. The fairy lights blaze on, all at once, and a hundred small gold stars shine above the arch.

### s00562
0. A long timbered shed that smells of tar and brine. / Nets hang from rafters like drying ghosts. / Sunlight cuts through the cracks in thin gold blades. / A kettle sings on a cast-iron stove.
1. AUGUSTINE MORROW, 60s, a weathered fisherman in an oilskin, sits on an upturned crate with a netting needle, mending a rip. / His daughter LOTTE MORROW, 30s, in a fisherman's sweater, sets two tin mugs on a barrel. / She pours. / Steam rises.
2. LOTTE: Drink. / AUGUSTINE: I'm working. / LOTTE: You're sulking. / AUGUSTINE: That too.
3. She puts the mug in his free hand. / He sips. / The net rustles. / Gulls cry outside.
4. LOTTE: The boat's fine, Pa. / AUGUSTINE: The boat's mortgaged. / LOTTE: So? We mortgage everything. It's tradition. / AUGUSTINE: Your mother would've said -- / LOTTE: Mama would've said "Eat your eggs."
5. He nearly smiles. / The kettle whistles. / She lifts it.
6. LOTTE: I got the loan. Three more seasons. / AUGUSTINE: Where from? / LOTTE: A man in town. / AUGUSTINE: What man? / LOTTE: A man who liked the boat.
7. Augustine sets down the needle. / The tension in the shed changes, thick and slow. / AUGUSTINE: Lotte. Which man?
8. The door scrapes open. / A rectangle of light. / DOMINIC SALVATORE, 50s, a long camel coat, polished shoes, and a hat in his hand, steps in, carefully avoiding a coil of rope. / DOMINIC: Morning, Captain.
9. Augustine stands. / The crate falls. / The needle skitters across the planks.
10. Lotte steps between them, pours a third mug, and holds it out. / LOTTE: Dominic. Tea? / DOMINIC: Kind of you.
11. He takes it. / Sips. / Nods. / Looks at Augustine.
12. DOMINIC: Your daughter tells me you're a stubborn man. / AUGUSTINE: She tells me you're a thief. / DOMINIC: She hasn't told you I hold the paper on every boat in this harbor.
13. Augustine's face closes like a door. / He grabs the nearest thing, the netting needle, and Dominic does not blink. / Lotte seizes her father's wrist. / All three freeze, tea steaming, needle poised, the whole shed hanging on a breath.
14. AUGUSTINE: Get out of my shed. / DOMINIC: Three seasons, Captain. Think on it.
15. He goes. / The door bangs. / The nets sway. / Lotte lets go of her father's wrist.
16. LOTTE: You're welcome. / AUGUSTINE: You knew. / LOTTE: I knew.
17. She picks up the fallen crate, sets it upright, sits. / After a long moment, he sits beside her. / Neither drinks. / The gulls go on screaming.

### s00297
0. Steel racks. / Crates of ice. / Breath fogging. / A swinging bulb.
1. Two figures wedge the door shut with a pry bar. / DELPHINE "DEL" OKONKWO-REYES (30s, rubber apron) shoves a crate against it. / TOBIAS "TOBY" HARLAN-AMADI (50s, flannel, grizzled) leans on the bar, panting.
2. Something THUDS on the other side of the door. / Once. / DEL: Is it holding? / TOBY: It's holding.
3. THUD. / The door shivers.
4. DEL: Okay. Okay. Don't scream. / TOBY: Nobody make a sound. / DEL: Who are you talking to? / TOBY: Habit. / Silence. / Ice drips. / The bulb sways.
5. DEL: How long? / TOBY: Till morning crew. / DEL: That's six hours. / TOBY: Then we wait six hours.
6. Another THUD. / Dents the steel. / Del backs away. / Her heel hits a crate. / Cold light flickers across her face.
7. DEL: It's only the compressor. / TOBY: That's not the compressor.
8. The bulb goes out. / Darkness. / Breathing. / A slow, wet scraping from the far end of the locker.
9. From the dark: a voice, gentle. / SABINE: Del?
10. Del freezes. / Toby grabs her sleeve. / TOBY: Don't. / SABINE: Del, it's me. Open the door. / DEL: Sabine?
11. The bulb flares. / At the end of the aisle, in the white fog, stands SABINE ROUSSEAU-ADEKUNLE (30s, same apron as Del, hair wet, lips blue). / She smiles. / Her feet do not touch the floor.
12. Del makes a small sound. / Toby heaves the pry bar up like a club.
13. SABINE: Oh, don't be afraid. I've come to warm up. / She drifts forward. / The ice on the racks cracks. / Frost races up the walls.
14. TOBY: Stay back! / DEL: She's dead! She drowned in March! / SABINE: Del.
15. She extends a hand. / Del's breath stops.
16. Toby swings the bar. / It passes through Sabine and rings against a steel rack. / Sabine looks at him, hurt. / SABINE: That wasn't kind.
17. The THUD on the door comes a third time and the door bursts open on the rush of morning crew: sunlight, shouting. / Sabine vanishes in the light like breath on glass.
18. Toby drops the bar. / Del falls to her knees. / The ice on the racks begins, quietly, to melt.

### s00118
0. Shelves of blue glass bottles. / Dried herbs hang from the rafters. / A brass scale. / Low light from a single oil lamp, and a wet street beyond the bowed windows.
1. MASTER EZEKIEL ARTHURSEN-OKAFOR, the apothecary, grinds powder in a mortar behind the counter. / He is stout and gentle, with spectacles pushed up on his forehead. / His apprentice, YOUNG PHILIPPA BRANDT-NWOSU, no more than sixteen, sweeps the floor. / At a small table by the window, MADAME ODETTE LACROIX-ADEYEMI, a widow in black silk, sits with a cup of tea she has not touched. / And by the door, snow on his hat, stands CONSTABLE HENDRICK VAN DER MEER-OLUWA, huge and slow, a lantern at his belt.
2. He nods to the apothecary. / The apothecary nods back. / EZEKIEL: Constable. / HENDRICK: Master Arthursen. / EZEKIEL: Tea? / HENDRICK: Thank you, no.
3. He remains by the door. / Philippa sweeps around his boots. / Madame Lacroix stirs her cup, the spoon clinking against the china. / EZEKIEL: You are out late. / HENDRICK: It's a cold night. / EZEKIEL: It is.
4. HENDRICK: There was a death on Pearl Street. / Ezekiel does not stop grinding. / Philippa's broom pauses a fraction of a second, then continues. / EZEKIEL: Terrible. / HENDRICK: A gentleman. Sixty years. Found in his chair. / EZEKIEL: Terrible. / HENDRICK: His wife says he took a draught for the cough.
5. Ezekiel sets the pestle down. / EZEKIEL: Many do. / HENDRICK: From this shop. / Madame Lacroix lifts her gaze from the cup. / Her eyes find the constable, then the apothecary, then the floor. / Ezekiel wipes his hands on his apron. / EZEKIEL: I make no poisons, Constable. / HENDRICK: I did not say poison.
6. A pause. / The lamp flickers. / Philippa stands completely still. / Madame Lacroix sets the cup on its saucer, with extraordinary gentleness.
7. MADAME LACROIX: I believe I can help. / HENDRICK: Madame? / MADAME LACROIX: It was my husband.
8. Hendrick turns, slowly. / Ezekiel stops breathing. / Philippa lets the broom fall. / MADAME LACROIX: The draught was mine. I mixed it. I brought him the cup. / HENDRICK: Madame, you cannot-- / MADAME LACROIX: I can. I did.
9. She rises, smooths her black silk, and crosses to the constable. / She offers him her wrists. / He looks at them. / He does not take them. / HENDRICK: I should like to hear why. / MADAME LACROIX: You would not. / HENDRICK: Try me.
10. She considers. / Then she sits again. / The constable removes his hat. / Ezekiel pours two cups of tea. / In the corner, Philippa picks up the broom, and under the old oil lamp, with the snow falling in the street outside, the widow begins to speak.

### s00335
0. A rusted office above the cannery floor, windows black, a lone lamp burning on a steel desk. / Fish labels peel off the walls. / Below, machinery drips. / ROSALIE FENWICK, thirties, a historian with a field recorder, sits on the desk. / MAUDE, sixties, the former forewoman, perches on a stool, arms crossed. / PERCIVAL, forties, Rosalie's research assistant, hovers by the door. / IGNATIUS, fifties, a priest in a heavy coat, stands at the window. / SISTER BERNADETTE, seventies, clutches a rosary. / LEOPOLD, thirties, the surveyor, kneels by a floor hatch with a torch.
1. ROSALIE: Let's start with the night shift of 1961. / MAUDE: We don't talk about it. / PERCIVAL: Maude, please. / MAUDE: I said we don't. / IGNATIUS: Maude is right. Some nights are best left in the water.
2. Leopold lifts the hatch. / A cold wet breath rolls up from below.
3. LEOPOLD: Something down here. / SISTER BERNADETTE: Close it. / ROSALIE: Leopold, what is it? / LEOPOLD: A shoe. And a hand. / PERCIVAL: A hand? / LEOPOLD: Holding the shoe.
4. Maude rises. / Ignatius crosses himself. / Rosalie turns her recorder to Leopold.
5. MAUDE: He told them not to open the hatch. / SISTER BERNADETTE: Who did? / MAUDE: He did. / IGNATIUS: She means Gideon. / PERCIVAL: Who is Gideon?
6. Nobody answers. / Down the hatch, the hand twitches. / LEOPOLD: It's moving.
7. The lamp dims. / Every door in the cannery slams at once.

### s00671
0. Plastic tablecloths. / A sheet cake shaped like a sneaker. / Disco light spins across the wall.
1. ODALYS, 70s, church dress, guards the cake. / PAULO REYES, 40s, a dad with a phone in each hand. / KIKI, 8, birthday crown crooked. / DANTE FERREIRA, 15, hood up, bored. / MARISOL, 38, Paulo's sister, tying balloons. / TIO BETO, 60s, mustache, holds a camcorder.
2. TIO BETO: Everybody in the picture! Closer! / They bunch up. / Kiki leans toward the candles.
3. KIKI: Wait. Where's Mom?
4. Paulo's smile freezes. / PAULO: She's coming, mija.
5. DANTE: She said that last year. / Paulo whips around. / PAULO: Dante.
6. Odalys slaps the table. / The cake jumps. / ODALYS: Not today. Everyone sit. Now.
7. Nobody sits. / Marisol lets go of a balloon; it drifts to the ceiling.
8. MARISOL: Did you even call her? / PAULO: Three times. / KIKI: Is she not coming?
9. Silence. / The disco light turns. / Dante pulls his hood down.
10. DANTE: She's coming. I texted her where we are. / Paulo stares at him.
11. Dante's phone buzzes. / He reads it, turns the screen toward Paulo. / Paulo reads it and his shoulders drop.
12. PAULO: She's in the parking lot. Parking. / KIKI: Mom's parking!
13. She is already running for the door. / Paulo exhales. / Odalys crosses herself and lights the candles.
14. TIO BETO: Rolling. Finally rolling. / ODALYS: Sing. Loud.

### s00047
0. Racks of furs and top hats in the dim glow of a single bulb. / A velvet curtain divides the room from the lobby, where an aria swells, muffled. / SERAPHINA DUMONT (30s, ruby evening gown, a claim ticket pinched between gloved fingers) presses a hat check into the hand of the attendant, a skinny youth with oversized cufflinks. / Behind her, a tall figure in a doorman's coat keeps watch at the curtain: this is the STRANGER, handsome, impassive, a scar through one brow. / In the corner, an older woman in a fur stole examines the rack, LADY CORDELIA ASHBY-FORSYTHE (60s, diamonds heavy at her throat).
1. The attendant fetches a coat. / The stranger glances at Lady Cordelia, who has turned her back.
2. Seraphina slips a small silver key into the coat's lining while the attendant shakes out the sleeve, and the stranger, noticing her motion, slides smoothly between them and the curtain.
3. STRANGER: Madame, your coat. / SERAPHINA: Thank you.
4. LADY CORDELIA: Is that the Dumont girl? / SERAPHINA: Lady Cordelia. How lovely.
5. The attendant, flustered, drops a scarf. / Seraphina and the stranger both bend to catch it and their hands collide.
6. They look at each other, and in that look, a plan changes.
7. LADY CORDELIA: I do hope you're not leaving before the second act. / SERAPHINA: Never.
8. The aria hits its high note. / As the room shakes, the stranger lifts the stole from Lady Cordelia's shoulders and, in the same breath, passes it to Seraphina, who drapes it over her arm like a waiter's towel.
9. LADY CORDELIA: My stole! / STRANGER: I believe it was mislaid, Madame.
10. Seraphina hands it back with an apologetic smile, but one diamond is gone from the hem. / The stranger's coat pocket rattles softly as he steps aside to let her pass.
11. Seraphina swans through the curtain. / The stranger, whom the attendant addresses as MR. DELACROIX-WEST, follows without a backward glance.

### s00588
0. Concrete. / Fluorescent tubes buzzing. / A single door marked EXIT.
1. DELPHINE VOSKUIJLEN, 30s, trench coat, wet from rain, takes the stairs two at a time. / A manila envelope pressed to her ribs.
2. A GUARD blocks the landing. / Mid-forties, crew cut, hand on a holstered radio. / GUARD: Ma'am. This level is closed. / DELPHINE: I have a pass. / GUARD: Not for this level.
3. She slows. / Looks him up and down. / Steps closer. / DELPHINE: You're not on the roster. / GUARD: Neither are you.
4. She lets out a short laugh. / He doesn't smile.
5. DELPHINE: Who sent you? / GUARD: Nobody sends me. I come when I'm needed. / DELPHINE: What do I call you?
6. He considers. / Behind him, the elevator DINGS. / Footsteps echo on the floor above.
7. GUARD: Nasir. / DELPHINE: Nasir. I need to get to the ninth floor. / NASIR: The ninth floor doesn't exist. / DELPHINE: Then I'll take the stairs that go to it.
8. NASIR: Ms. Voskuijlen, I read your file. I know who you are and what you're carrying. I also know who's waiting upstairs. / DELPHINE: Then step aside. / NASIR: I can't. / DELPHINE: Why?
9. NASIR: Because if you go up, he kills you. And if I let you go, he kills me. / DELPHINE: Then we're both dead.
10. NASIR: Unless you give me the envelope. / She holds it tighter. / He holds out an open palm. / Calm. / Almost kind.
11. NASIR: Give it to me. Walk down. Leave the country by dawn. I will deliver it myself. / DELPHINE: Why would I trust you?
12. NASIR: Because there's a third man behind you on the stairs. And he is not here to talk. / She doesn't turn. / Her shoulders stiffen. / Below, a boot scuffs concrete.
13. DELPHINE: Thaddeus. / NASIR: Yes.
14. THADDEUS, 50s, silver hair, bespoke suit, stands two flights down, hands in pockets. / He smiles up at them. / THADDEUS: Delphine. Don't be dramatic.
15. She looks at Nasir. / At the envelope. / At the open palm.
16. She hands it over.

### s00178
0. Gray sky. / Wind scours the ice. / A tent, flapping. / A sled, half-buried. / CAPTAIN LARS HOLMGREN, 50s, wraps a rope around his fist. / NURSE ELENI PAPADAKIS, 30s, kneels by a wrapped shape. / DEEPAK RAO, 40s, a cook, melts snow in a dented pot. / A boy, FINN HOLMGREN, 12, watches the horizon.
1. LARS: Pack it up. We move at first light. / ELENI: He can't be moved. / LARS: He can't stay. / DEEPAK: Soup. Only soup left. Sure.
2. Finn slowly turns from the horizon. / FINN: Dad, the ice is cracking. / LARS: It's always cracking. / FINN: Louder, this time.
3. Lars glances down at the wrapped shape, then at Eleni. / She holds his gaze and gently pulls the blanket over the face.
4. Lars takes off his gloves. / Puts them on Finn. / LARS: Hold these for me.
5. He walks to the sled and begins loading it.

### s00852
0. Beige cubicles. / Gray carpet. / A banner: "EVERY CALL IS AN OPPORTUNITY!" / A wall clock ticks over a whiteboard of call counts. / DUANE PRESCOTT, 40s, in a headset and a tie loosened to the second button, sits at a cube with a script taped to the monitor. / SHANICE WILLIAMS, 30s, in the next cube, fills out a form in tiny block letters, never glancing up.
1. DUANE: Thank you for calling National Response, my name is Duane. How may I... / He stops. / Listens. / Writes a line. / Crosses it out. / DUANE: Yes, ma'am, I understand your frustration.
2. Shanice lowers her pen. / SHANICE: Duane. You've said "I understand" eleven times. / DUANE: Because I do understand. / SHANICE: You've been transferred to nobody.
3. A chirp from the ceiling speaker. / The intercom. / KOVACS: Attention, floor three. This is a reminder that average handle time is up four percent. Please be mindful. / DUANE: Mindful. I'm mindful. / SHANICE: Four percent. We're a ship and it's four percent.
4. A few muffled snorts from nearby cubes. / Duane slides his chair back. / Shanice stands. / They look at each other over the cubicle wall, then at the clock.
5. KOVACS: Also, Duane. Shanice. Please remember that personal conversations are logged.
6. Duane takes off his headset and places it in the middle of his desk. / Shanice does the same. / Together they push back their chairs, which squeal on the carpet.
7. DUANE: Mr. Kovacs, I have a question. / KOVACS: Please direct it to your supervisor. / DUANE: You are my supervisor. / KOVACS: Then please direct it to a future me.
8. Shanice walks to the banner and takes a corner in each fist. / The tape tears loose with a long squeal. / Duane takes hold of the other end. / They bring it down and stand there in a slump of paper, holding it between them.
9. SHANICE: I always hated that banner. / DUANE: I wrote it. / SHANICE: I know.
10. The intercom chirps again, but neither of them listens.

### s00572
0. A trunk wider than a barn, hollowed out and hung with lanterns. / Stalls climb the inner walls on rope ladders. / Fireflies drift between the rafters. / The air smells of resin and hot sugar.
1. At a low stall: ORSOLYA, 40s, apothecary, moth-wing scarves wrapped to the elbow, ink on her fingertips. / Sells lanterns. / None are lit.
2. BRANWICK, 60s, a retired knight whose armor is long gone, wears a farmer's coat that doesn't fit his shoulders. / He stands before the stall with his hat in his hands.
3. ORSOLYA: Walking light or hanging light? / BRANWICK: Hanging.
4. She lifts a small tin lantern. / He doesn't look at it. / BRANWICK: Bigger. / ORSOLYA: For a barn? / BRANWICK: For a window.
5. She sets down the tin one. / Lifts a larger one with a blue glass panel. / ORSOLYA: Blue's for waiting. / BRANWICK: That one's fine.
6. PIPKO, 9, ash on her cheek, apprentice, sits cross-legged behind the counter threading wicks. / She watches Branwick without pretending not to. / PIPKO: He bought a blue one last year. / ORSOLYA: Pipko. / PIPKO: Same shoes. Same hat. He turned it in his hands like that.
7. Branwick turns the hat in his hands. / Stops. / BRANWICK: Lantern's broke. The window lets in a draft. / ORSOLYA: The window. / BRANWICK: Yes.
8. She nods, as if this is a perfectly reasonable thing. / She wraps the lantern in cloth.
9. A third voice, from above: HAJI TESFAYE, 70s, a merchant lowering himself down a rope ladder with a basket of candles, one hand over the other. / TESFAYE: Orsolya! The Duskwife says the wicks need wax by morning! / ORSOLYA: Then she can have wax by morning. / TESFAYE: Evening, Sir Branwick. / BRANWICK: Not "Sir." / TESFAYE: Evening, Branwick.
10. Branwick counts coins into Orsolya's palm. / Too many. / She slides two back, firmly, and he pockets them without a word.
11. PIPKO: You have to light it from a flame that someone gave you. Not one you made. / BRANWICK: I know the rule. / PIPKO: Last year's was still burning when I walked past the barn.
12. Silence. / Orsolya reaches under the counter and takes out a stub of candle, already lit. / She offers it to him in a clay dish. / ORSOLYA: Mine. Take it.
13. He takes the dish with both hands, as if it might spill. / Tesfaya sets down the basket and starts to hum something old.
14. BRANWICK: How much for the wax? / ORSOLYA: Nothing. Bring the dish back. / BRANWICK: I will.
15. He settles his hat on his head, tucks the lantern under his arm, and walks off carefully through the hanging lights. / PIPKO: He will. / ORSOLYA: Thread your wicks.

### s00862
0. A chilly arena with dead floodlights and a Zamboni parked in the corner like a retired elephant. / Folding chairs in a semicircle. / A banner: "WE ARE ONE TEAM." / A podium with a microphone that squeals. / Six people sit with lukewarm coffee and laminated agendas. / On the ice-less floor, where the center circle once glowed, a flip chart waits on a tripod.
1. COLM: Okay, welcome everybody. Can everyone hear me? / ANNELIESE: Yes. / COLM: Great. Anneliese, you can hear me? / ANNELIESE: I said yes. / DORCAS: We could hear you in the car park.
2. COLM: Wonderful. So today's theme is... / VIKRAM: Alignment. / COLM: Alignment, exactly, Vikram, thank you for that. / VIKRAM: It's on the banner. Well, "one team" is. Alignment is on the agenda.
3. PENROSE: I thought today's theme was resilience. / COLM: It's both. / PENROSE: They're different words. / COLM: They're complementary words.
4. YUSRA: Can I ask something? / COLM: Of course, Yusra, we love questions. / YUSRA: Why are we here? In the rink? / COLM: It's a neutral space. / DORCAS: It's a cold space. / COLM: It builds character. / ANNELIESE: My feet have no character left.
5. PENROSE: I read the invitation twice. It said "off-site." / COLM: It is off-site. / VIKRAM: From what? / COLM: From our usual site. / YUSRA: Which is across the street. / COLM: Which is a bit literal, Yusra. / YUSRA: I'm literal on Mondays. / DORCAS: It's Friday. / YUSRA: I'm literal in general.
6. COLM: Okay, let's move to the first exercise. / ANNELIESE: Is there a second exercise? / COLM: There are four.
7. PENROSE: I have a flight. / COLM: Penrose, your flight is at eight. / PENROSE: This morning. / COLM: No, tonight. / PENROSE: It says eight a.m. on the ticket. / COLM: I'm sure you misread it. / PENROSE: I'm sure I didn't.
8. VIKRAM: Could we maybe start with a break? / DORCAS: We've only just started. / VIKRAM: That's why we need a break. / COLM: Let's table that. / ANNELIESE: Where? There's no table.
9. YUSRA: Colm, I think the Zamboni is leaking. / COLM: It's a feature. / PENROSE: It's a hazard. / COLM: Everything's a hazard if you look at it right. / DORCAS: Then maybe don't make us look. / COLM: Dorcas. / DORCAS: I'm only saying.
10. ANNELIESE: Colm, can we have a vote? / COLM: On what? / ANNELIESE: On whether to leave. / COLM: That's not on the agenda. / VIKRAM: Neither is the cold.
11. YUSRA: I vote leave. / PENROSE: Leave. / DORCAS: Leave. / VIKRAM: Leave. / ANNELIESE: Leave, obviously.
12. COLM: Okay. Okay. Show of hands for staying? / COLM: Just me, then. / DORCAS: We'll tell them you were wonderful.

### s00787
0. A docked ferry's galley, converted for the day. / Stainless counters. / Sandwich trays. / A folding table with three chairs and a pitcher of water.
1. ARBITRATOR HENRIETTA OSEI-BONSU, 60s, sits at the head. / PELAGIA STAVROU, 40s, counsel for the claimant, sits to her left. / RHYS MOLYNEUX, 50s, counsel for the respondent, sits to her right. / He loosens his tie. / She straightens her blazer. / Henrietta clicks a pen.
2. HENRIETTA: Counsel. You've had a week. Is there a deal? / PELAGIA: None, Your Honor. / RHYS: Not at the number she's asking.
3. HENRIETTA: Which is? / PELAGIA: Two point four million. / RHYS: Preposterous. / PELAGIA: It's modest. / RHYS: It's insane.
4. Both stop. / Henrietta lifts a hand. / Silence. / HENRIETTA: One at a time.
5. She pours water. / Slides the pitcher toward Rhys. / He doesn't take it. / Pelagia does.
6. PELAGIA: The respondent's captain falsified the maintenance log. We have the original. / She opens a folder. / Slaps a photocopy on the table. / He leans in. / She leans back. / Henrietta puts on reading glasses and studies the page, line by line, as the ferry creaks against its moorings.
7. RHYS: That's not authenticated. / PELAGIA: It's his handwriting. / RHYS: Anyone can forge handwriting. / PELAGIA: Anyone can try.
8. Henrietta lifts her head. / HENRIETTA: Mr. Molyneux. Is that your client's signature? / Rhys glances at the page. / A long beat. / His mouth opens, closes. / RHYS: I would need to confer. / HENRIETTA: Then confer.
9. He stands. / Hesitates. / Sits. / RHYS: It's his.
10. Pelagia exhales. / Henrietta takes off her glasses. / HENRIETTA: Break for lunch. Take the sandwiches.
11. They rise. / He holds the door for her. / She nods once, without triumph.

### s00560
0. Barred windows, glass counters, a wall of guitars. / A buzzing OPEN sign paints everything red.
1. DETECTIVE IRENA VALDEZ, 40s, a blazer and a tired stare, leans over the counter with a pistol held low and steady, while behind it SNOW, 30s, a bleached-blond pawnbroker in a Hawaiian shirt, backs toward a shelf of cameras with a baseball bat in one hand and a phone in the other, and a guitar slides off its hook, hits the floor, and both of them flinch, aim, freeze.
2. VALDEZ: Drop it. / SNOW: You first. / VALDEZ: I'm the one with the badge. / SNOW: I'm the one with the lease.
3. Neither moves. / The sign buzzes.
4. VALDEZ: Where's the ring? / SNOW: What ring? / VALDEZ: The one that came in at nine. / SNOW: Lots of rings come in at nine.
5. Snow sets the bat on the counter. / Valdez lowers the pistol. / Both exhale.

### s00195
0. A basement windowless room lined with pigeonholes, a jammed copier, and a framed poster: "TEAMWORK: BECAUSE NOBODY CAN DO IT ALONE." / A fluorescent tube buzzes. / Cardboard boxes are stacked to the ceiling in the corner like a failing skyline. / GERALD PFEFFERKORN, 50s, mailroom supervisor, wears a lanyard with three laminated cards and a worn gray cardigan. / He sorts envelopes at triple speed. / NEHA BHATTACHARYA-WELLS, 20s, the new hire, in a crisp blazer, stands in the doorway, holding a binder. / DONOVAN "DON" KRUMBLE, 40s, a regional manager, arrives behind her, wearing a tie with tiny cartoon calculators.
1. GERALD: Name? / NEHA: Neha. First day. / GERALD: Sit. Don't touch the copier. / NEHA: Is it broken? / GERALD: It's alive. There's a difference.
2. DON: Gerald! Great news. Efficiency review. / GERALD: We've been efficient since 1994. / DON: Which is why we're moving to quarterly. / NEHA: Quarterly what? / DON: Everything.
3. Gerald drops a stack of letters. / The copier lets out a long, plaintive beep. / GERALD: Don, the mail comes daily. / DON: And we'll bill it quarterly. / NEHA: Bill who? / DON: Ourselves. It's called internal chargeback.
4. Gerald removes his glasses and rubs the bridge of his nose. / He gestures at the stack of undelivered boxes. / GERALD: Those are your Q3 bonus checks. / DON: Then they're early! / GERALD: They're three weeks late. Because of you. / DON: Let's not assign blame. Let's assign tasks.
5. Neha raises her hand. / Don points at her like she's won a prize. / NEHA: Can I ask a question? / DON: Please. / NEHA: Why are we pretending this makes sense?
6. Silence. / The copier beeps again. / Don's smile holds a moment too long. / Gerald puts his glasses back on. / DON: Welcome aboard, Neha.

### s00522
0. Diesel. / Chains rattling. / Forty cars, bumper to bumper, under caged yellow lights. / The ship rolls, barely.
1. ISOLDE VANTERPOOL, 30s, purser's vest, walks the lanes with a flashlight. / She checks each windshield. / Ticks a list.
2. She stops at a white delivery van. / Taps the hood. / Moves on.
3. RAFFERTY KANE, 50s, a trucker in a stained cap, sits on a bumper with a thermos. / He raises it in greeting.
4. RAFFERTY: Evening, miss. Lovely crossing. / ISOLDE: Smooth water tonight. / RAFFERTY: That's what I said to my ex-wife. Look how that ended.
5. She almost smiles. / Writes something down.
6. JUNG-HO PARK, 20s, headphones around his neck, leans out of a hatchback, bleary. / He yawns.
7. JUNG-HO: Is there a vending machine on this deck? / ISOLDE: Passenger lounge. Deck four. / JUNG-HO: Of course there is.
8. He ducks back in. / Isolde keeps walking.
9. WINNIE ASHCROFT-DELANEY, 70s, a tartan blanket over her knees, sits in a small hatchback, window cracked. / A cat carrier on her lap.
10. WINNIE: Does anybody know if the cats are allowed out for the crossing? / RAFFERTY: Rules say no. / WINNIE: Rules say. Hm.
11. Isolde leans down to her window. / ISOLDE: Ma'am, I'll check on her in an hour. Promise. / WINNIE: It's a him. / ISOLDE: I'll check on him in an hour.
12. She straightens. / Her radio squawks.
13. SALAZAR: Purser to bridge. Purser to bridge. Please confirm car count. / Isolde keys her radio. / ISOLDE: Forty-one, Captain. Forty-one vehicles. / SALAZAR: Say again. / ISOLDE: Forty-one.
14. A long pause. / Static. / SALAZAR: Manifest says forty.
15. She stops walking. / ISOLDE: Forty-one.
16. She turns slowly. / Eyes down the lanes. / Counting under her breath.
17. Rafferty watches her. / The thermos stops halfway to his mouth. / RAFFERTY: Something wrong, love? / ISOLDE: Nothing. Routine.
18. She isn't convincing. / She moves down the aisle, flashlight low. / Stops at the white van again.
19. Plates: out of state. / Not on her list. / She hadn't ticked it because she hadn't noticed it. / It had been there, quiet, like furniture.
20. She reaches for the rear door handle. / Locked.
21. JUNG-HO: Hey, uh. That van was here when I parked. / ISOLDE: Which means? / JUNG-HO: Means nobody got out of it. Not once. I've been watching.
22. Rafferty sets down the thermos. / Stands up. / Slow.
23. RAFFERTY: Miss. Step back. / ISOLDE: Why? / RAFFERTY: Because I'm a driver. And I know what that engine sounds like when it's not an engine.
24. Isolde listens. / Underneath the diesel and the chains, a thin electric whine. / Steady. / Patient.
25. She backs away. / One step. / Two.
26. ISOLDE: Captain. Evacuate the car deck. All hands. Now. / SALAZAR: Purser, what is it?
27. Winnie rolls her window up. / Clutches the carrier. / WINNIE: Hush, hush, hush.
28. Jung-Ho is already out of the hatchback, running for the stairwell.
29. The van's side door slides open an inch. / A single hand reaches out. / Pale. / Gloved. / It sets a small black box on the deck. / Then the door slides shut again.
30. The whine climbs.
31. RAFFERTY: EVERYBODY OUT! MOVE!
32. Isolde grabs Winnie's door. / Yanks it open. / ISOLDE: Ma'am. Leave the car. / WINNIE: The cat -- / ISOLDE: Bring the cat.
33. They run. / Behind them the black box blinks once. / Green.
34. Then red.

### s00301
0. A narrow room of brass hooks and furs. / A single frosted lamp. / Muffled orchestra through the wall. / A WOMAN in a sapphire gown leans against the counter, breathing hard. / Her lipstick is smeared. / Her hand grips a champagne flute so tightly it might break. / The attendant's stool is empty.
1. The door opens. / Another WOMAN steps in, in a silver gown, a fur stole over one arm. / She closes the door behind her. / Locks it.
2. WOMAN IN SAPPHIRE: You followed me. / WOMAN IN SILVER: You left your wrap.
3. She holds out a stole. / The woman in sapphire stares at it. / Doesn't take it.
4. WOMAN IN SAPPHIRE: I said I wouldn't dance. / WOMAN IN SILVER: You danced with him. / WOMAN IN SAPPHIRE: She asked. / WOMAN IN SILVER: She did?
5. The sapphire woman sets the flute down. / It rings on the marble. / WOMAN IN SAPPHIRE: Constance asked me for the third waltz. In front of everyone. I couldn't say no. / WOMAN IN SILVER: Of course you could. / WOMAN IN SAPPHIRE: She's my cousin.
6. WOMAN IN SILVER: She's your cousin who looks at you like I do. / Silence. / The orchestra swells and falls.
7. The woman in silver steps closer and drapes the stole over her companion's shoulders. / For a moment they stand with their foreheads almost touching.
8. WOMAN IN SAPPHIRE: I'm Ottoline, by the way. You never asked. / OTTOLINE: Ottoline Fairbrother-Nnamdi. / WOMAN IN SILVER: Marguerite.
9. OTTOLINE: Marguerite, I'm terrified. / MARGUERITE: Good. So am I.
10. A knock at the door. / They break apart. / Ottoline wipes her lipstick. / Marguerite unlocks the door and opens it on the roar of the band.

### s00826
0. A mirror ball turns slowly over a dead floor. / Dust lies on the skate rental counter. / Somewhere an old organ wheezes a note and stops.
1. CORNELIUS "NEIL" PRATT, fifties, in a rumpled suit, carries a lantern and a ledger. / MILDRED ASHCROFT, sixties, his realtor, follows in a tweed coat with her keys held like a weapon. / FITZ, a lean teenager with a flashlight and a tool bag, brings up the rear.
2. NEIL: Mildred, you said the power was off. / MILDRED: It is, Neil. / NEIL: Then who is playing the organ? / MILDRED: The building settles. It makes noises.
3. Fitz crouches by the wall and pokes at a fuse box. / He whistles through his teeth, a tuneless little line.
4. FITZ: Mr. Pratt, the box is cold. Dead for years.
5. All three turn. / At the far end of the rink, a pair of skates, white leather, laces tied, sits at the edge of the floor, as if someone has just stepped out of them.
6. Mildred takes a step back. / Neil steps forward and lifts his lantern. / Fitz swings his flashlight at the skates and holds it there, the beam very steady.
7. NEIL: Those weren't there when we came in. / MILDRED: Nonsense. They were. / FITZ: Mildred, they weren't.
8. Nobody moves. / The mirror ball turns. / Spots of light cross their faces, one after another.
9. The skates slide a few inches toward them across the floor, wheels humming. / Neil, Mildred, and Fitz stop breathing together. / The wheels go quiet.
10. MILDRED: Well. We'll note it in the listing. / She writes in her notebook, her pen perfectly smooth.
11. Neil sets down the lantern.
12. NEIL: Fitz, go and check the doors. / FITZ: They're locked, sir. From outside.
13. The organ plays one low chord. / The three of them stay where they are, watching the skates, which do not move again.

### s00708
0. A hunting lodge in deep snow. / Antlers on every wall. / A fire roars in a stone hearth. / Outside, a blizzard howls.
1. PROFESSOR QUENTIN LAIRD, 60s, in a cardigan, stands before the fire. / ODETTE, 30s, a journalist, sits cross-legged on a rug with a notebook. / BASIL, 40s, the caretaker, nurses a whiskey at the bar. / NGOZI, 30s, a doctor, stares at her phone, which shows no bars. / HARLAN, 50s, in a camouflage vest, paces behind the sofa.
2. QUENTIN: I appreciate your patience. As you can see, we are snowed in. / ODETTE: For how long? / BASIL: Two days. Maybe three. / NGOZI: No signal. Of course.
3. HARLAN: Who called us here? / QUENTIN: I did. / HARLAN: You said it was a reunion. / QUENTIN: It was.
4. HARLAN: Then why are we missing someone?
5. Nobody answers. / The fire cracks.
6. ODETTE: You said the sixth guest would come at nine. / QUENTIN: He will. / BASIL: It's past eleven. / QUENTIN: He is very punctual, when he wants to be.
7. Ngozi pockets her phone. / Harlan's pacing stops.
8. NGOZI: Quentin, who is he? / QUENTIN: Someone we all knew, a long time ago. / HARLAN: Name.
9. QUENTIN: Teddy Marsh.
10. Basil drops his glass. / It shatters. / Odette stops writing.
11. BASIL: Teddy died. Twenty years ago. / QUENTIN: Did he?
12. The front door rattles. / Everyone turns. / The wind howls, and the rattling stops. / Quentin smiles faintly into the fire.
13. ODETTE: Stay calm. Stay calm.
14. NGOZI: Basil. Check the door. / BASIL: Why me? / NGOZI: Because you're the caretaker. / BASIL: It's not in my contract.
15. Harlan crosses the room and lays his hand on the latch. / The rattling begins again, softer, and he draws back. / HARLAN: Does anyone else hear that?
16. Odette closes her notebook. / Quentin sits, finally, in the leather chair, and folds his hands.
17. QUENTIN: That would be him.

### s00884
0. Water laps at the knees of marble saints. / Long shelves rise out of the green dark, their books swollen and glowing faintly with lichen light. / Shafts of drowned moonlight fall through a broken rose window, and in them drift motes like slow fish. / KAELEN ASHDOWN, 20s, wades chest-deep with a lantern held high. / A scholar's coat floats around her like a jellyfish. / Her braid is plastered to her neck.
1. SELUNE ORRIN, 30s, pale as milk, surfaces from the water by the pulpit without a ripple. / She wears a grey shift that moves as if underwater even when she is not. / Her eyes are the colour of old pearl. / OLD BRAM, 80s, sits on a toppled bookshelf above the waterline, whittling a reed pipe, one bare foot dangling.
2. KAELEN: You are not supposed to be awake. / SELUNE: You are not supposed to be here.
3. KAELEN: I've come for the Index. / SELUNE: You've come to steal it. / KAELEN: SELUNE It belongs to the living. It belongs to the drowned.
4. OLD BRAM: You both sound very sure.
5. They stop. / A silence, thick as water. / Selune drifts closer, circling Kaelen, her shift trailing silt. / Kaelen lifts the lantern between them. / The flame shivers but does not die.
6. KAELEN: Then let me read it. One page. / SELUNE: Which? / KAELEN: My mother's.
7. Selune's expression changes, something old and tender breaking through the stillness. / OLD BRAM: Aye, there it is.
8. Selune reaches under the water and draws out a book, black with age and fat with brine. / She offers it. / Kaelen takes it. / Their fingers touch and both flinch, as if from cold.
9. They stand a long moment, the book between them, the lantern light swaying across the ruined nave.
10. Then Kaelen opens it. / The pages are blank except for one line, written in a hand she knows.
11. KAELEN: She waited. / SELUNE: Every night.
12. Old Bram tucks the whittled pipe behind his ear and slides down off the shelf, landing with a splash. / OLD BRAM: Right. Tea?

### s00112
0. A cramped orange boat rocks on a grey swell. / Four figures huddle under a torn canopy.
1. CAPTAIN MAGNUS EKSTROM-ADEBAYO (60s, grizzled, hand clamped on the tiller) squints at the horizon. / He is silent. / Beside him, DR. PIA RAMIREZ-OKONKWO (40s, soaked blazer) wrings out her scarf. / At the bow, young DELPHINE (16, wide-eyed, life jacket too big) clutches a flare gun. / In the middle, BAZ (30s, steward, torn jacket) lies on his back, one arm over his eyes.
2. He shifts. / She looks at him. / PIA: Baz. Are you awake? / BAZ: No. / PIA: Good. Stay that way.
3. Magnus lifts one finger. / Everyone goes still. / He points.
4. A smudge on the horizon. / A smoke trail. / DELPHINE: Captain! Is that a ship? / MAGNUS: It is. / DELPHINE: Should I fire it? / MAGNUS: Not yet.
5. She lowers the gun. / Baz sits up, clutching the gunwale. / BAZ: Fire it now, Delphine! / MAGNUS: Wait. / PIA: Magnus, if she doesn't-- / MAGNUS: It's too far. They'd never see it.
6. He steadies the tiller. / They wait. / The smoke thickens. / A hull appears. / Grey. / Steel. / Moving toward them.
7. MAGNUS: Now. / Delphine fires. / A red star climbs into the sky. / They scream, all four of them, together.

## Comparisons
p0: a = s00384 beat 3 | b = s00301 beat 6
p1: a = s00884 beat 0 | b = s00572 beat 4
p2: a = s00262 beat 15 | b = s00229 beat 2
p3: a = s00719 beat 4 | b = s00367 beat 4
p4: a = s00405 beat 19 | b = s00884 beat 7
p5: a = s00118 beat 5 | b = s00367 beat 16
p6: a = s00671 beat 3 | b = s00407 beat 1
p7: a = s00201 beat 3 | b = s00228 beat 3
p8: a = s00275 beat 0 | b = s00234 beat 6
p9: a = s00546 beat 9 | b = s00577 beat 18
p10: a = s00719 beat 9 | b = s00577 beat 21
p11: a = s00852 beat 4 | b = s00515 beat 14
p12: a = s00316 beat 9 | b = s00787 beat 0
p13: a = s00112 beat 1 | b = s00884 beat 12
p14: a = s00229 beat 6 | b = s00048 beat 0
p15: a = s00255 beat 4 | b = s00884 beat 0
p16: a = s00405 beat 16 | b = s00228 beat 7
p17: a = s00522 beat 20 | b = s00586 beat 20
p18: a = s00772 beat 9 | b = s00389 beat 5
p19: a = s00229 beat 5 | b = s00662 beat 0
p20: a = s00396 beat 2 | b = s00407 beat 8
p21: a = s00522 beat 8 | b = s00297 beat 13
p22: a = s00522 beat 33 | b = s00489 beat 2
p23: a = s00708 beat 7 | b = s00384 beat 8
p24: a = s00708 beat 3 | b = s00826 beat 13
p25: a = s00577 beat 24 | b = s00659 beat 0
p26: a = s00489 beat 2 | b = s00047 beat 9
p27: a = s00852 beat 2 | b = s00659 beat 13
p28: a = s00229 beat 2 | b = s00118 beat 8
p29: a = s00826 beat 4 | b = s00234 beat 1
p30: a = s00047 beat 7 | b = s00658 beat 5
p31: a = s00588 beat 11 | b = s00719 beat 3
p32: a = s00489 beat 10 | b = s00228 beat 6
p33: a = s00389 beat 11 | b = s00658 beat 2
p34: a = s00658 beat 4 | b = s00228 beat 3
p35: a = s00772 beat 9 | b = s00316 beat 10
p36: a = s00562 beat 3 | b = s00384 beat 10
p37: a = s00572 beat 3 | b = s00522 beat 11
p38: a = s00489 beat 1 | b = s00562 beat 17
p39: a = s00047 beat 2 | b = s00048 beat 4
p40: a = s00572 beat 12 | b = s00396 beat 6
p41: a = s00335 beat 0 | b = s00546 beat 2
p42: a = s00047 beat 7 | b = s00335 beat 4
p43: a = s00297 beat 11 | b = s00562 beat 9
p44: a = s00522 beat 20 | b = s00489 beat 3
p45: a = s00719 beat 5 | b = s00671 beat 11
p46: a = s00201 beat 3 | b = s00262 beat 4
p47: a = s00118 beat 5 | b = s00301 beat 6
p48: a = s00047 beat 11 | b = s00405 beat 13
p49: a = s00195 beat 0 | b = s00515 beat 7
p50: a = s00047 beat 11 | b = s00275 beat 4
p51: a = s00195 beat 3 | b = s00297 beat 15
p52: a = s00772 beat 0 | b = s00407 beat 10
p53: a = s00562 beat 15 | b = s00772 beat 2
p54: a = s00577 beat 7 | b = s00195 beat 1
p55: a = s00577 beat 28 | b = s00671 beat 8
p56: a = s00275 beat 0 | b = s00577 beat 16
p57: a = s00367 beat 15 | b = s00572 beat 7