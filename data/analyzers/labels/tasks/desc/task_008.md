You label screenplay scenes for a writing tool. Every answer must come from the fixed lists below.

For each scene, write one JSON object:
{"scene_id": "...",
 "place": one of ['home', 'workplace', 'street', 'vehicle', 'nature', 'bar_restaurant', 'shop', 'institution', 'industrial', 'venue', 'transit', 'other'],
 "atmos": 1-2 of ['calm', 'tense', 'eerie', 'chaotic', 'intimate', 'festive', 'bleak', 'claustrophobic', 'cozy', 'sterile', 'gritty', 'dreamy'],
 "beats": [{"b": <beat number>, "type": one of ['arrives', 'leaves', 'confronts', 'accuses', 'threatens', 'attacks', 'defends', 'flees', 'hides', 'searches', 'discovers', 'reveals', 'confesses', 'lies', 'deflects', 'persuades', 'pleads', 'comforts', 'bonds', 'jokes', 'mocks', 'decides', 'observes', 'works'], "actor": "<character name or NONE>", "target": "<character name or NONE>"}, ...],
 "chars": {"<character name>": {"role": one of ['drives', 'opposes', 'ally', 'authority', 'vulnerable', 'observer', 'comic', 'mediator'], "traits": 1-3 of ['nervous', 'confident', 'angry', 'warm', 'cold', 'playful', 'sarcastic', 'secretive', 'curious', 'desperate', 'calm', 'authoritative', 'vulnerable', 'defiant', 'manipulative', 'kind', 'weary', 'impulsive', 'cautious', 'arrogant', 'sad', 'hopeful', 'frightened', 'determined']}, ...}}

Rules:
- One entry per numbered beat, in order. type = the main dramatic action of that beat; actor = who performs it;
  target = who it is aimed at (NONE if nobody). Use the character names exactly as listed for the scene.
- place = the kind of location (use the scene heading). atmos = how the scene feels.
- chars: every listed character who acts or speaks. role = their function in THIS scene; traits = how they come
  across in THIS scene, from the text only.
Write the scenes as JSON Lines (one object per line) in THREE files with the Write tool: scenes 1-30 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_008_a.jsonl, 31-60 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_008_b.jsonl, the rest to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_008_c.jsonl. No other text in the files. Reply only with "done N".

## Scenes

### SCENE s00752 | INT. FLOODED ORCHARD COTTAGE - KITCHEN - NIGHT
Characters: DETECTIVE PERPETUA LOWRY, CALLER, ROSCOE
[beat 0] Rain drums on a tin roof. Water has crept an inch under the door and pools on the flagstones. A single candle burns on the kitchen table, beside a black rotary phone, its cord stretched taut across the room.
[beat 1] DETECTIVE PERPETUA LOWRY, fifties, in a drenched mackintosh, stands with the receiver at her ear. She doesn't sit. A cup of cold tea has been on the table so long it has grown a skin.
[beat 2] CALLER: You came alone. PERPETUA: I did. CALLER: That was brave. PERPETUA: It was cheaper than a team.
[beat 3] A long pause on the line. Rain. A drip from the ceiling lands in the cup.
[beat 4] CALLER: Do you know where Edmund Hale is, Detective? PERPETUA: In a drawer at the county morgue. CALLER: Then you know I didn't do it. PERPETUA: I know you wanted me to think so.
[beat 5] She picks up a pencil and turns it between her fingers. She studies the pooling water. She walks, slowly, to the window and looks out at the black orchard, where bare branches thrash.
[beat 6] CALLER: Look at the third tree from the gate. Perpetua doesn't move. CALLER: Go on.
[beat 7] She leans closer to the glass. Her breath fogs it. A dark shape hangs from the third tree, swinging in the wind. She stares. Her shoulders drop a quarter inch.
[beat 8] PERPETUA: That's a coat. CALLER: It's his coat. PERPETUA: Where is he?
[beat 9] CALLER: Why would I tell you? You haven't asked my name. PERPETUA: You've been calling me for six nights. I've heard you breathe. I know you've been drinking. CALLER: Whisky. A decent one. PERPETUA: Then you can say your name over a decent whisky.
[beat 10] A pause. The receiver crackles. When the voice returns it is lower, tired.
[beat 11] ROSCOE: Roscoe Hale. Edmund's brother.
[beat 12] Perpetua closes her eyes. The pencil snaps in her fist.
[beat 13] PERPETUA: You buried him in the orchard. ROSCOE: I buried what was left.
[beat 14] PERPETUA: Why call me? ROSCOE: Because someone should know where he is. And the police won't dig in the rain.
[beat 15] She sets the broken pencil on the table. She looks at the candle, at the cold tea, at the dark window.
[beat 16] PERPETUA: Roscoe. Where are you now? ROSCOE: Look at the gate.
[beat 17] She turns. In the doorway of the kitchen, silhouetted by lightning, a man's shape is standing with a phone in his hand.
[beat 18] Thunder. The candle gutters out.

### SCENE s00753 | INT. VILLAGE CHURCH - WEDDING - DAY
Characters: CONGRATS ROSALIND, GROOM FERDINAND, BRIDE ROSALIND, FATHER MALACHY, MOTHER IRENE, BEST MAN, GIDEON, DJ
[beat 0] Pews packed. Organ droning. A banner reading CONGRATS ROSALIND & FERDINAND, slightly crooked.
[beat 1] At the altar: BRIDE ROSALIND, thirties, in a dress with a train like a snow drift. GROOM FERDINAND, thirties, sweating through a rented tux. FATHER MALACHY, sixties, bearded officiant, clutching a prayer book. In the front pew, MOTHER IRENE, sixties, in a hat the size of a satellite dish. Beside Ferdinand: BEST MAN, twenties, hungover, swaying.
[beat 2] FATHER MALACHY: If anyone objects to this union, speak now.
[beat 3] A pause. The BEST MAN raises a hand. BEST MAN: Hang on.
[beat 4] ROSALIND: Oh, for God's sake. BEST MAN: I just wanted to say I love you both. FERDINAND: Thank you, Gideon.
[beat 5] The Best Man, now GIDEON, beams.
[beat 6] Over the church speakers, a booming voice. DJ: Ladies and gentlemen, give it up for the happy couple!
[beat 7] FATHER MALACHY: We're not there yet! MOTHER IRENE: Who hired that man? ROSALIND: Mother! DJ: Drop the bass!
[beat 8] A thump rattles the pews. Everyone ducks. GIDEON: Best. Day. Ever.
[beat 9] FERDINAND: Rosalind, I do. I do. Can we just finish? ROSALIND: Fine. I do! FATHER MALACHY: You may now--
[beat 10] The organ explodes into a dance remix. Everyone throws up their hands.

### SCENE s00754 | INT. ROOFTOP CALL CENTRE - HOTEL TERRACE - DAY
Characters: ROSALEEN FINNEGAN, JAMAL TURNER, BIANCA ESTRADA, KOJO ASARE
[beat 0] Forty headsets under striped parasols on the roof of a failing seaside hotel. Seagulls wheel overhead. Customers are reached by phone, by hope, and by the mercy of a hot wind that keeps lifting the scripts from the tables.
[beat 1] ROSALEEN FINNEGAN, fifties, supervisor, walks the rows with a megaphone slung from her shoulder and a thermos of tea. JAMAL TURNER, thirties, team lead, reads a script in a monotone. BIANCA ESTRADA, twenties, newest hire, listens to a caller with her hand over her mouth. KOJO ASARE, forties, quality assurance, sits apart with a stopwatch, a clipboard, and a face like a closed door.
[beat 2] ROSALEEN: Remember, people! A smile can be heard down the line! JAMAL: Thank you for holding.
[beat 3] Bianca covers the mouthpiece and looks up at Rosaleen, who ignores her. Kojo clicks the stopwatch and writes a figure on his clipboard.
[beat 4] A gust flips three scripts off Jamal's table; he chases them across the tiles, snatching, swearing under his breath, while Rosaleen steps neatly over a paper in her path and keeps walking, thermos aloft.
[beat 5] BIANCA: Ms. Finnegan. The customer says his house is on fire. ROSALEEN: Is it our house? BIANCA: No. ROSALEEN: Then follow the script. BIANCA: But he said-- ROSALEEN: Page four. "I understand your frustration."
[beat 6] Bianca nods. She uncovers the mouthpiece. Kojo clicks the stopwatch again, scratches another figure, and glances at Rosaleen with the faintest lift of one eyebrow. Jamal returns with the scripts clutched to his chest, slaps them on the table, and slumps into his chair.
[beat 7] JAMAL: Kojo. How many? KOJO: Forty-one this hour. JAMAL: Forty-one what? KOJO: Complaints we failed to resolve. JAMAL: That's... normal. KOJO: It was twelve yesterday.
[beat 8] Jamal glances at Rosaleen. She is cheerfully yelling encouragement through the megaphone at a row of headsets. A wave breaks on the beach far below. Bianca pushes her headset off one ear and stares at the horizon.
[beat 9] BIANCA: Sir? Sir, I'm sorry. I can hear it. I can hear the fire.
[beat 10] She stands. The chair falls over behind her. Jamal rises to catch it. Kojo's stopwatch clicks. Rosaleen turns, megaphone halfway to her mouth.
[beat 11] ROSALEEN: Bianca. Sit. BIANCA: Sir, give me your address. ROSALEEN: Bianca, that is not on the script.
[beat 12] Bianca tears off the headset and drops it on the table. She picks up the phone, the real one, the one with a cord. She dials three digits and holds it to her ear. Jamal steps beside her. Kojo, slowly, sets down his clipboard.
[beat 13] BIANCA: Yes. There's a fire at forty-two Marlow Road. ROSALEEN: Bianca!
[beat 14] Jamal turns to Rosaleen. He takes the megaphone off her shoulder with one hand, unhurried, and sets it on the table. JAMAL: Rosaleen. Shut up.
[beat 15] The terrace goes silent. Forty heads turn. The wind lifts the scripts and carries them over the parapet, white wings falling into the sea.

### SCENE s00755 | EXT. BOCCE COURT - SUNSET LODGE RETIREMENT HOME - LATE AFTERNOON
Characters: CONNIE, PAPADAKIS, ELMER HOLLINGSWORTH, VIOLA REARDON
[beat 0] A clay court framed by weathered boards, bordered by hydrangeas gone brown at the edges. The sun is low and gold. A radio plays something slow from an open window.
[beat 1] CONSTANTINE "CONNIE" PAPADAKIS, seventies, white shirt, braces, crouches with a green ball cupped in his palm. Across the court ELMER HOLLINGSWORTH, seventies, in a flat cap, leans on a cane and studies the pallino. Between them, seated on a folding chair with a clipboard, VIOLA REARDON, eighties, referee, in a lavender cardigan, watches both with equal indifference.
[beat 2] Connie rolls. The ball curves, slows, kisses the pallino, and stops. Elmer's cane taps once against the boards. Viola writes down a number without a word.
[beat 3] Elmer picks up his own ball, weighs it, sets his feet, and rolls. It rolls wide, wobbles, and dies a hand's breadth from the line. Connie nods, folds his arms, and gazes at the sky. Viola capitalises something on her clipboard. Neither man looks at the other.
[beat 4] Connie takes his second ball from the bucket and turns it over twice, and Elmer, from the far end, produces a handkerchief and blots his forehead with the slow ceremony of a man not in a hurry. Viola lowers the clipboard and takes a long sip of her iced tea.
[beat 5] VIOLA: Four to two. CONNIE: Thank you, Viola. ELMER: Two's not bad. VIOLA: It's two.
[beat 6] Connie rolls again. Another kiss, another stop.
[beat 7] Elmer watches it settle and for a moment his cane trembles. He reaches into his cardigan, fingers a folded photograph, then thinks better of it and tucks it back.
[beat 8] CONNIE: You all right, Elmer? ELMER: Sun's in my eyes. CONNIE: Sun's behind you. ELMER: Then it's the other one.
[beat 9] Viola caps her pen. She rises, brushes clay from her cardigan, and walks the length of the court at her own pace, bends, and measures with a short string. She straightens.
[beat 10] VIOLA: Game. CONNIE: Good game. ELMER: Hm.
[beat 11] They shake hands over the boards, a dry brief shake. Viola gathers the balls into the bucket. Connie holds the gate for Elmer. Elmer goes through it and does not say thank you, and Connie does not seem to expect it, and the radio drifts on.

### SCENE s00756 | INT. SAL'S TAP ROOM - 1 A.M.
Characters: BIG LOU SALVATORE, FINN DOYLE
[beat 0] Empty stools. Neon beer sign, half dead. A television mutters a weather map to nobody.
[beat 1] BIG LOU SALVATORE, fifties, bartender, wipes a glass that has been clean since Tuesday. At the far end of the bar sits FINN DOYLE, thirties, wearing a jacket that doesn't fit, a hat he hasn't removed, a duffel bag at his feet.
[beat 2] BIG LOU: Last call, folks!
[beat 3] Nobody answers. He sets the glass down. Pours a whiskey. Slides it to Finn.
[beat 4] BIG LOU: You're early. FINN: You're late. BIG LOU: It's my bar. FINN: It's my money.
[beat 5] Big Lou raises an eyebrow, polishes another glass. Finn nudges the duffel with his boot.
[beat 6] BIG LOU: Eighty grand and he wants a drink. FINN: I heard that. BIG LOU: You were meant to.
[beat 7] A car passes outside, headlights sliding across the ceiling. Both go still. The light fades.
[beat 8] FINN: Lou. BIG LOU: Finn. FINN: We're clean. BIG LOU: We're clean.
[beat 9] They stare at each other. The weather map blinks.

### SCENE s00757 | INT. MUSEUM OF LOCKS - GREAT HALL - NIGHT
Characters: INSPECTOR AMBROSE TREVELYAN, LADY CORDELIA ASHGROVE, PERIKLES NAKOS, MISS JOSEPHINE FINCH, HADLEY
[beat 0] A vaulted gallery lined with glass cabinets of antique locks, padlocks, and hand-wrought keys. Gaslamp-style fixtures cast brass light. A grandfather clock ticks. Under a glass dome in the centre, an empty velvet cushion.
[beat 1] INSPECTOR AMBROSE TREVELYAN, fifties, in a bowler hat, walks the length of the hall with hands clasped behind him. He pauses at the cushion.
[beat 2] AMBROSE: The Duke's Key. Gone at half-past nine.
[beat 3] LADY CORDELIA ASHGROVE, sixties, widow, in pearls and furs, sits stiffly on a bench. DR. PERIKLES NAKOS, forties, curator, wrings his hands beside her. MISS JOSEPHINE FINCH, twenties, the cataloguer, stands pale near the stairs. MR. HADLEY, seventies, the night butler, holds a tray of untouched sherry.
[beat 4] CORDELIA: It is an outrage. PERIKLES: Madam, the cabinet was locked.
[beat 5] AMBROSE: Locked, yes. Opened, no. JOSEPHINE: Then how--
[beat 6] AMBROSE: Miss Finch. You were the last to leave the hall. JOSEPHINE: I was. AMBROSE: You saw nothing? JOSEPHINE: Only Mr. Hadley, with the sherry. HADLEY: I never left the pantry, sir. AMBROSE: That is a pity.
[beat 7] Ambrose raises the glass dome, sets it aside, and picks up the velvet cushion. He turns it over, examines the underside, and shakes it. Dust falls. Perikles and Cordelia lean away; Josephine and Hadley edge toward the door.
[beat 8] AMBROSE: Nobody leave. They all freeze. The clock ticks.
[beat 9] AMBROSE: The key was never in the cabinet. It was swapped at the last catalogue. The one on this cushion was a copy. CORDELIA: Preposterous. AMBROSE: Dr. Nakos, who signed the catalogue?
[beat 10] Perikles looks at Josephine. Josephine looks at Hadley. Hadley looks at Cordelia. Cordelia rises, drawing her furs about her like a shield, and takes one step toward the stairs.
[beat 11] The four of them bolt in four directions. Ambrose lifts a whistle to his lips and blows. Doors slam. Footsteps thunder on marble. A constable's lantern swings through the arch, and the hall fills with shouting.

### SCENE s00758 | INT. MRI SUITE - HOSPITAL BASEMENT - NIGHT
Characters: SAOIRSE KEANE, TECH DELPHINE ABERNATHY, EUSTACE QUINN
[beat 0] A white tube hums at the centre of a cold room. Warning signs plaster the walls. Through a glass window, a control booth glows green.
[beat 1] DR. SAOIRSE KEANE, forties, radiologist, leans on the console. TECH DELPHINE ABERNATHY, twenties, adjusts a dial. On the sliding table inside the machine lies EUSTACE QUINN, seventies, a patient in a gown, hands folded across his chest.
[beat 2] DELPHINE: Mr. Quinn, we're starting. Try to stay still. EUSTACE: I'm still. SAOIRSE: Good.
[beat 3] The machine thumps. A grey image flickers onto the monitor. Saoirse leans forward. Delphine does the same. Their faces light from below.
[beat 4] DELPHINE: There. SAOIRSE: I see it. DELPHINE: That's not a tumour. SAOIRSE: It is not.
[beat 5] They share a smile of relief. Delphine reaches for the intercom. DELPHINE: Mr. Quinn, good news--
[beat 6] On the screen the image jolts. The table inside the machine slides forward. Eustace's hand flies up. A metal tray flies across the room and clangs against the tube.
[beat 7] SAOIRSE: His ring! DELPHINE: Pull the table!
[beat 8] Both women lunge. Delphine slams the emergency button, Saoirse throws her weight on the stop lever. The magnet whines down.
[beat 9] Silence. They rush into the room, drag the table free, and catch Eustace as he sits up, gasping, his wedding ring tugging at his finger.
[beat 10] EUSTACE: Forty years it's never come off.

### SCENE s00759 | INT. CRANE & SONS FUNERAL HOME - VIEWING ROOM B - DAY
Characters: BARNABAS FLINT, ROSAMUND ACHEBE, HOLLIS DUNMORE, JUNO PAREKH, LEOPOLD ISHIGURO, SELWYN CRANE
[beat 0] A deposition in a room meant for mourning. Folding tables have been set among potted lilies. An empty casket stands on a draped bier at the head of the room, lid open, lined with white satin. Soft organ music leaks from a ceiling speaker no one can find the switch for.
[beat 1] BARNABAS FLINT, fifties, plaintiff's counsel, sits at the near table with a stack of exhibits. ROSAMUND ACHEBE, forties, defence counsel, sits across from him, calm as a priest. At the head of the table, HOLLIS DUNMORE, sixties, the witness, a retired claims adjuster in a navy blazer, lowers himself into a funeral parlour armchair. JUNO PAREKH, twenties, the videographer, hunches behind her tripod. LEOPOLD ISHIGURO, fifties, the court reporter, sets up his steno machine by the casket. MR. SELWYN CRANE, seventies, funeral director, hovers in the doorway with a box of tissues.
[beat 2] BARNABAS: Mr. Dunmore, I'm going to ask you to identify Exhibit Twelve. HOLLIS: Of course.
[beat 3] ROSAMUND: Objection. Foundation. BARNABAS: He wrote it. ROSAMUND: He hasn't said that. HOLLIS: I wrote it. ROSAMUND: Don't help him, Mr. Dunmore. HOLLIS: I'm only saying.
[beat 4] BARNABAS: Please read the highlighted line. HOLLIS: "Claim denied pursuant to section nine."
[beat 5] JUNO: Sorry, can you speak up? HOLLIS: "Claim denied pursuant to section nine." LEOPOLD: Section nine or section "nine-dash-b"? HOLLIS: Nine.
[beat 6] BARNABAS: And what is section nine? ROSAMUND: Objection. Calls for a legal conclusion.
[beat 7] SELWYN: Forgive me. Would anyone like a tissue? BARNABAS: No, thank you, Mr. Crane. ROSAMUND: Not at present. HOLLIS: I'll take one.
[beat 8] Selwyn glides in, sets the box beside Hollis, and glides out.
[beat 9] Juno steps from behind the tripod to adjust the lens and trips on a lily pot. Leopold catches the pot.
[beat 10] Barnabas and Rosamund both reach for the water pitcher at once; their hands knock it over, and a flood runs across the exhibits. Hollis grabs his own copy and holds it above his head like a man fording a river.
[beat 11] ROSAMUND: Barnabas, that's my notes! BARNABAS: It's my exhibit! LEOPOLD: Can we go off the record? JUNO: I'm still rolling. HOLLIS: Does anyone have a towel?
[beat 12] SELWYN: Our finest.
[beat 13] They mop in silence. The organ swells. Water drips off the casket's satin.
[beat 14] BARNABAS: Let's resume.

### SCENE s00760 | INT. WAX MUSEUM - GRAND GALLERY - NIGHT
Characters: HAROLD WINTERBOTTOM, ZUZANA KRAJEWSKI, MOSES TEMBO, KAI NAKAMURA-REID, ILSE ARENDT, VESPER LANE
[beat 0] Hushed. Rows of figures in frozen poses: a queen, a boxer, a saint, a pirate. Their glass eyes catch the sodium glow from a security lamp.
[beat 1] HAROLD WINTERBOTTOM, sixties, night guard, sits on a stool with a thermos. Near the pirate, cleaners ZUZANA KRAJEWSKI, forties, and MOSES TEMBO, thirties, sweep. Apprentice KAI NAKAMURA-REID, nineteen, polishes a cabinet. Curator ILSE ARENDT, fifties, taps a tablet by the door.
[beat 2] HAROLD: Quiet night. ILSE: They're always quiet.
[beat 3] ZUZANA: Moses. The boxer moved. MOSES: He did not. ZUZANA: His fist was down. MOSES: It's still down.
[beat 4] Kai stops polishing. He looks at the boxer's fist. It is raised.
[beat 5] KAI: Ms. Arendt? ILSE: Don't be silly, Kai.
[beat 6] The lights dip. Harold stands, torch in hand, the stool toppling. Ilse's tablet blinks out. Zuzana and Moses back toward the saint, brooms raised, and Kai edges to Harold's side, polishing cloth clutched in his fist like a talisman.
[beat 7] The door at the far end creaks open.
[beat 8] VESPER LANE, thirties, in a long grey coat and white gloves, steps in. Pale. Perfectly still. Hair pinned. A lace veil tucked into her collar. She stops beside the queen. She tilts her head and looks at the five living people the way someone looks at figures in a window.
[beat 9] VESPER: I'm so sorry I'm late. HAROLD: We're closed, miss. VESPER: I know. I'm the fiftieth figure.
[beat 10] She walks to an empty plinth near the pirate and steps onto it. Turns. Folds her hands. And stops, mid-breath, mid-smile, mid-blink.
[beat 11] No one moves. The boxer's fist drops with a soft clack.

### SCENE s00761 | INT. ICE-FISHING SHANTY - ARCTIC LAKE - NIGHT
Characters: WALLY, BRODERICK, EMMANUEL OKAFOR-NWANKWO, STRANGER, JONAS
[beat 0] A plywood box on a frozen lake. A stove glows red. Two holes in the floor, black water showing, lines trembling. Frost on the walls. The wind outside is a crowd of ghosts.
[beat 1] WALLACE "WALLY" BRODERICK, fifties, big man, gutting a fish at the table. EMMANUEL OKAFOR-NWANKWO, thirties, schoolteacher, huddles by the stove with a mug. Neither says much.
[beat 2] The door bangs. Snow whips in. A figure in a snow-crusted parka stumbles inside, pulls the door shut, and leans against it, gasping.
[beat 3] STRANGER: Thank God. I saw the light. WALLY: Sit. Warm up.
[beat 4] The Stranger drops onto a bucket, pulls off his hood. A young man, lips blue, eyebrows frosted. His hands shake. Emmanuel passes him the mug without a word. He drinks. His eyes flick to the knife in Wally's hand, then to the fish, then away.
[beat 5] EMMANUEL: What's your name? STRANGER: Jonas. EMMANUEL: Where are you headed, Jonas? JONAS: The north shore. My truck died.
[beat 6] WALLY: There's no road on the north shore. JONAS: There is a cabin. WALLY: There's no cabin. JONAS: Then I was lied to.
[beat 7] He laughs, uneasy. Emmanuel sets a hand on the stove and warms it. Wally slices the fish with a short, sure stroke, and for a while only the knife speaks.
[beat 8] EMMANUEL: He's right, Wally. People get lost. WALLY: People do.
[beat 9] Jonas finishes the mug and sets it down. He stretches his hands to the fire and looks, for the first time, relaxed. Wally slides a piece of fish across to him on the blade. Jonas takes it, chews, nods thanks.
[beat 10] JONAS: Who's got the line? WALLY: He does.
[beat 11] Wally nods at Emmanuel. Emmanuel lifts the line. A fish thrashes. He hauls. Jonas leans in to help. They both grip the line. Wally watches them, his knife stilled in his hand.
[beat 12] The fish comes up, a fat lake trout, silver-black. Emmanuel laughs. Jonas laughs.
[beat 13] Wally doesn't. He wipes the blade on his sleeve.
[beat 14] WALLY: You walked far? JONAS: All night. WALLY: In that wind. JONAS: It wasn't so bad.
[beat 15] Wally's gaze drops to Jonas's boots. They are clean. No snow packed in the treads, no ice at the laces. Wally says nothing.
[beat 16] EMMANUEL: Jonas, what do you do? JONAS: I'm a surveyor. EMMANUEL: For who? JONAS: The county.
[beat 17] Emmanuel nods. Wally tilts his head and studies Jonas's face, the thin line of his smile.
[beat 18] WALLY: Emmanuel. EMMANUEL: Hm? WALLY: Come help me with the stove. EMMANUEL: It's fine. WALLY: Come help me.
[beat 19] Emmanuel stands. They cross to the stove together. Wally leans close, mouth by Emmanuel's ear.
[beat 20] WALLY: He's got no breath. EMMANUEL: What? WALLY: In this cold. Watch.
[beat 21] Emmanuel looks. Jonas sits by the table, his face pale in the lamp. No fog drifts from his lips. Not one thread.
[beat 22] Jonas turns his head and smiles, wide. The stove light catches his eyes, and for a moment they are the colour of lake water under ice. JONAS: Don't stop on my account.
[beat 23] Wally lifts the knife. Emmanuel grabs the poker. Jonas stands up slowly, unfolding to a height the shanty cannot hold. His head brushes the ceiling. JONAS: I was only looking for company.
[beat 24] The lines in the holes go taut at once, all together, and something far below begins to pull.

### SCENE s00762 | INT. FORWARD BUNKER - BELGIAN FARMLAND - DAWN
Characters: CAPTAIN MARIANA ESCOBAR, SERGEANT FITZROY BELL, CORPORAL YASIR KARIMI, PRIVATE LENNART SKOG, MAJOR TREMAINE
[beat 0] Sandbags lined with straw. A paraffin stove smokes in the corner. A radio set squats on an ammunition crate beside a tin of biscuits. Outside, a pale mist drifts over silent fields.
[beat 1] CAPTAIN MARIANA ESCOBAR, forties, sits on a crate cleaning a pistol with a rag. SERGEANT FITZROY BELL, fifties, scratches at his stubble. CORPORAL YASIR KARIMI, twenties, sleeps against a wall with his boots on. PRIVATE LENNART SKOG, nineteen, stares through the firing slit at the grey horizon.
[beat 2] MARIANA: Fitz, anything on the net? FITZROY: Static, ma'am. Nothing but. MARIANA: Quiet is good.
[beat 3] LENNART: Quiet is strange, Captain. MARIANA: Private, it's dawn. Let the war have its tea.
[beat 4] Fitzroy chuckles. He pries open the biscuit tin and passes it around. Yasir wakes, accepts one, and crunches it. The stove ticks.
[beat 5] MAJOR TREMAINE: Bunker Seven, this is Command. Do you read? Everyone freezes. Mariana lunges for the handset. MARIANA: Command, this is Seven. Reading you.
[beat 6] MAJOR TREMAINE: Captain, the armistice has been signed. Hostilities cease at eleven hundred.
[beat 7] Silence. Yasir lowers the biscuit. Lennart turns from the slit. FITZROY: Eleven. MARIANA: Say again, Command. MAJOR TREMAINE: It's over, Captain. It's over.
[beat 8] Mariana sets the handset down. She looks at the others, one by one. Nobody speaks.
[beat 9] Then, at the slit, Lennart begins to laugh, and cannot stop.

### SCENE s00763 | INT. BRIDAL SHOP - FITTING ROOM - DAY
Characters: ADELAIDE VOSSBERG, GERTRUDE, WOMAN, TILLIE
[beat 0] A velvet-curtained cubicle, mirrors on three walls. A wedding gown on a hanger. ADELAIDE VOSSBERG, twenties, in a slip, stands on the dais, arms out. Her mother GERTRUDE, fifties, kneels with a mouthful of pins.
[beat 1] GERTRUDE: Stand still. ADELAIDE: I am standing still.
[beat 2] A WOMAN in a sensible coat peers through the curtain. Sixties, hair in a bun, hands wringing. Neither of them has seen her before.
[beat 3] WOMAN: Pardon me. Is this the Vossberg fitting? GERTRUDE: It is. And you are? WOMAN: Just someone who used to know the groom's father.
[beat 4] Gertrude's pins clatter to the floor. Adelaide turns on the dais. ADELAIDE: Mother? GERTRUDE: You'd better come in.
[beat 5] The Woman steps inside, letting the curtain fall. She holds out a gloved hand.
[beat 6] WOMAN: Tillie. Tillie Marchetti. GERTRUDE: I know who you are. TILLIE: Then you know why I'm here.
[beat 7] TILLIE: He asked me to give you something, dear.
[beat 8] Adelaide looks from one to the other in the three mirrors, six faces, six mothers. ADELAIDE: Will someone please tell me what's going on?

### SCENE s00764 | INT. NATATORIUM - POOL DECK - 5:30 A.M.
Characters: COACH RENATA BOSCH, MARCUS TULLY, DOLORES AMADI, NEW KID, SUNNY
[beat 0] Chlorine fog. Blue water, glass-flat. A scoreboard reading 00:00.00. On the bench: three swimmers wrapped in towels. COACH RENATA BOSCH, forties, with a whistle and a stopwatch, paces the deck.
[beat 1] MARCUS TULLY, twenties, anchor leg, stares at the water. DOLORES AMADI, twenties, lead-off, blows into her hands. A NEW KID, sixteen, in a team parka too big for him, sits at the very end of the bench with his goggles in his lap.
[beat 2] RENATA: Warm-up in five. Four hundred easy, then pace sets.
[beat 3] MARCUS: You hear about the sponsor? DOLORES: Pulled out. NEW KID: Don't ask. Don't ask.
[beat 4] RENATA: Kid. You are? NEW KID: Sunny. RENATA: Sunny what? SUNNY: Sunny Park.
[beat 5] RENATA: Sunny, you swim third leg.
[beat 6] MARCUS: Third? That's my relay split. DOLORES: That's what I said. RENATA: I'm not asking. MARCUS: Coach, he's sixteen. SUNNY: Seventeen in March. DOLORES: Marcus, he's fast. MARCUS: I didn't say he wasn't.
[beat 7] RENATA: Everybody in! They all drop their towels and dive. Sunny hesitates.
[beat 8] Renata stops beside him. RENATA: Sunny. It's only water. SUNNY: That's what scares me.

### SCENE s00765 | INT. BOXING RING - CORNER - NIGHT
Characters: PRISS, VANTONGEREN, MEL BRANDVOLD
[beat 0] A hot arena. A roaring crowd that is only noise. Bright ropes, spit buckets, a canvas stained the colour of old tea.
[beat 1] PRISCILLA "PRISS" VANTONGEREN, twenties, in red trunks, sits on the stool between rounds, chest heaving, a swollen eye closing. She wears a wireless earpiece. Her coach, old MEL BRANDVOLD, sixty-eight, stands at ringside two states away on a hospital bed phone, his voice crackling through the bud.
[beat 2] MEL: Priss. Priss, look at me. Can you see? PRISS: I can see. MEL: How many fingers? PRISS: I can't see you, Mel. You're in Tulsa. MEL: Humour me. PRISS: Three.
[beat 3] MEL: Good girl. Listen. Round seven. She drops her left every time she throws the hook. PRISS: I know. MEL: Step in and counter.
[beat 4] PRISS: What if I'm too tired? MEL: Priss, I've seen you tired. I've never seen you quit.
[beat 5] The bell rings. She rises, mouthguard in, gloves up. Across the ring her opponent circles, taller, quicker.
[beat 6] Priss bobs, weaves, takes a jab on the shoulder, slips a second, and steps in. The hook sails past her ear. PRISS: Now.
[beat 7] She throws the right. It lands. The opponent staggers, drops her guard, and Priss follows with the left, a short chopping blow that snaps the head back and sends the crowd to its feet.
[beat 8] MEL: That's it! That's my girl!
[beat 9] The referee steps between. Priss stands over her opponent, trembling.

### SCENE s00766 | INT. NIGHT FERRY - CAR DECK - NIGHT
Characters: DETECTIVE ISAAC MORROW, LIONEL FARR
[beat 0] A cavernous steel hold. Dozens of parked cars bolted to the deck. The engine thrums through the floor. Chains rattle. A single bulb sways overhead.
[beat 1] DETECTIVE ISAAC MORROW, forties, trench coat, hand on his holster, walks slowly between the cars. At the end of the row, LIONEL FARR, thirties, in a leather jacket, leans on the bonnet of a black sedan, arms crossed. He looks at Isaac. He does not move.
[beat 2] ISAAC: Lionel. LIONEL: Isaac. ISAAC: You're a long way from home. LIONEL: So are you.
[beat 3] Isaac stops ten feet away. Lionel uncrosses his arms, hands open, empty.
[beat 4] ISAAC: Where's the ledger? LIONEL: Where's your warrant? ISAAC: I don't need one on a boat. LIONEL: You do if I'm in international waters. ISAAC: We're nine miles out. LIONEL: Twelve is the limit.
[beat 5] Isaac says nothing. The hull groans. A wave slaps the steel. The bulb swings over their faces, light, shadow, light.
[beat 6] LIONEL: You came alone. ISAAC: So did you. LIONEL: Not exactly.
[beat 7] Behind Isaac, a car door clunks. He spins, gun half drawn. Nobody. Lionel laughs. LIONEL: Relax. It's the sea.
[beat 8] Isaac turns back. His hand shakes slightly. He steadies it.
[beat 9] ISAAC: Hand over the ledger and I let you walk off in Calais. LIONEL: And if I don't? ISAAC: Then I walk off. And you don't.
[beat 10] Lionel studies him. A long moment. He reaches slowly into his jacket.
[beat 11] Isaac draws. Lionel freezes, hand inside his coat. ISAAC: Slow. LIONEL: I'm slow.
[beat 12] He draws out a small black book. Holds it up between two fingers. LIONEL: Here. ISAAC: Toss it.
[beat 13] Lionel tosses it. It lands at Isaac's feet. Isaac kneels, picks it up, flips through. His shoulders drop an inch.
[beat 14] ISAAC: It's blank. LIONEL: Of course it's blank.
[beat 15] Isaac looks up, furious. Lionel is already laughing, the sound ricocheting off the steel. Isaac lowers the gun, then, slowly, he begins to laugh too. Two men in a steel hold, laughing at a blank book.
[beat 16] ISAAC: You're a bastard, Lionel. LIONEL: And you're still a detective.
[beat 17] He pushes off the sedan and walks past Isaac toward the stairs. Isaac lets him go.

### SCENE s00767 | INT. SUBMARINE USS HALCYON - CONTROL ROOM - NIGHT
Characters: CAPTAIN DOMINIC ARCHER-LYLE, NOLAN, AUGUSTO
[beat 0] Red battle lamps. Pipes sweating. Dials and valves everywhere. The hull creaks like an old ship's timbers.
[beat 1] CAPTAIN DOMINIC ARCHER-LYLE, fifties, hands clasped behind his back, stands before the periscope well. LIEUTENANT PATRICIA "PAT" NOLAN, thirties, executive officer, checks a depth gauge. From a speaker in the bulkhead, the voice of the sonar operator, unseen.
[beat 2] ARCHER-LYLE: Gentlemen, we hold at two hundred feet. Silent running. NOLAN: Aye, sir. ARCHER-LYLE: Mr. Nolan, report. NOLAN: All systems nominal, Captain. Battery at seventy percent. ARCHER-LYLE: Seventy. Enough for a day.
[beat 3] AUGUSTO: Control, sonar. Surface contact, bearing one-two-zero. Single screw. Slow. ARCHER-LYLE: Merchant? AUGUSTO: Can't say, sir. No transponder. ARCHER-LYLE: Pat, plot it. NOLAN: Plotting.
[beat 4] She bends over a chart table. A ruler, a pencil, a quiet scratch. The sub rocks gently.
[beat 5] ARCHER-LYLE: Quiet night. NOLAN: Too quiet, sir? ARCHER-LYLE: Never say that on my boat.
[beat 6] She smiles. A drip falls from a pipe onto the chart. She wipes it.
[beat 7] AUGUSTO: Control, contact is stationary. Engines idle. ARCHER-LYLE: Odd. NOLAN: Waiting for us? ARCHER-LYLE: Or for someone else.
[beat 8] Silence. The lamps pulse. Nolan straightens.
[beat 9] NOLAN: Captain, request permission to raise the scope. ARCHER-LYLE: Granted. Slowly.
[beat 10] She turns the wheel. The periscope hums up. She folds the handles and puts her eye to it. Her face tightens. ARCHER-LYLE: Well?
[beat 11] NOLAN: It's a hospital ship, sir. ARCHER-LYLE: A hospital ship. NOLAN: White hull. Red crosses. All lit up. ARCHER-LYLE: Of course.
[beat 12] AUGUSTO: Control, sonar. New contact. Fast. Bearing zero-nine-five. Closing. NOLAN: Captain! ARCHER-LYLE: Range? AUGUSTO: Two thousand yards. ARCHER-LYLE: Is it hostile? AUGUSTO: It's ours, sir. Destroyer.
[beat 13] NOLAN: Then why is it running dark? ARCHER-LYLE: Because it's escorting. NOLAN: Escorting what? ARCHER-LYLE: The hospital ship, Pat. Which means--
[beat 14] AUGUSTO: Torpedo in the water! Bearing one-eight-zero! Not ours! ARCHER-LYLE: Dive! Dive! Rig for impact!
[beat 15] Klaxons. Red lamps flash. The deck tilts. Nolan grabs a rail.
[beat 16] NOLAN: Captain, they're targeting the ship! ARCHER-LYLE: Then we are the only thing in the way. NOLAN: Sir?
[beat 17] ARCHER-LYLE: Come to heading one-eight-zero. Full ahead. NOLAN: Sir, that's suicide! ARCHER-LYLE: That is the job.
[beat 18] She stares at him. He stares back. She breathes in once. NOLAN: Aye aye, sir.
[beat 19] She spins the wheel. The engines roar. The sub heels hard.
[beat 20] In the periscope's last frame, a white hull glides unknowing through the dark, and between it and the death streaking toward it, a long grey shape cuts across.

### SCENE s00768 | INT. FLOODED SUBWAY TUNNEL - NIGHT
Characters: ROSARIO VEGA, TIMOTHY BANKS, BEATRIX ORLOV, DISPATCH
[beat 0] Black water to the knees. Emergency lights flicker amber on slimed tiles. A stalled train lies like a dead worm along the track.
[beat 1] Three survivors wade toward an iron ladder: ROSARIO VEGA, thirties, nurse, carrying a child's backpack; TIMOTHY BANKS, forties, accountant, limping; BEATRIX ORLOV, seventies, retired conductor, steady as a rock.
[beat 2] BEATRIX: The ladder is at the next platform. TIMOTHY: How far? BEATRIX: Two hundred yards.
[beat 3] ROSARIO: He's bleeding. BEATRIX: We all are.
[beat 4] Timothy grimaces. His hand is wrapped in a torn shirt. Rosario takes his arm and slings it over her shoulder. They move.
[beat 5] A radio crackles from Beatrix's belt. DISPATCH: Unit nine, unit nine. Do you copy?
[beat 6] Beatrix grabs it. BEATRIX: Dispatch. We're alive. Three of us. Tunnel six. DISPATCH: Copy. Rescue is en route. Stay put. Ten minutes.
[beat 7] TIMOTHY: Ten minutes? ROSARIO: We can wait ten. TIMOTHY: The water's rising. ROSARIO: It's been rising an hour. BEATRIX: She's right. It's slowed.
[beat 8] They stop on a ledge above the tracks and sit in a line. For a moment there is peace. Rosario fishes a granola bar from the backpack, breaks it in three, hands out the pieces. They chew in silence.
[beat 9] TIMOTHY: This is nice. BEATRIX: Don't. TIMOTHY: What? BEATRIX: You'll jinx it.
[beat 10] Rosario smiles. Timothy smiles. Beatrix doesn't.
[beat 11] DISPATCH: Unit nine, new report. Upstream dam is failing. Move to high ground immediately. ROSARIO: There is no high ground. BEATRIX: There is a ladder. TIMOTHY: I can't climb. ROSARIO: Yes you can. BEATRIX: Yes you can.
[beat 12] A distant roar rolls down the tunnel, wind pushing ahead of water. The amber lights shiver. Rosario hauls Timothy upright. Beatrix is already wading. BEATRIX: Run!

### SCENE s00769 | EXT. SLED-DOG CHECKPOINT - ALASKAN WILDERNESS - DAWN
Characters: MUSHER HALVARD OKONKWO-REID, VET IMELDA TORRES-BAIRD, GRAHAM FELLOWES, RACE CONTROL
[beat 0] A log cabin half-buried in drift. Sled dogs asleep in curled rows. Smoke rises from a chimney. Race flags snap in a thin wind.
[beat 1] MUSHER HALVARD OKONKWO-REID, thirties, sits on his sled, dog booties in his lap. Beside him, VET IMELDA TORRES-BAIRD, fifties, listens to a husky's chest with a stethoscope. Official GRAHAM FELLOWES, sixties, stands at the checkpoint with a clipboard.
[beat 2] GRAHAM: You're twelve minutes ahead. HALVARD: That's good. GRAHAM: That's very good.
[beat 3] IMELDA: He's sound. Lungs are clear. HALVARD: Thank you.
[beat 4] IMELDA: She's your lead dog? HALVARD: Aurora. Eight years. IMELDA: She's tired. HALVARD: She's always tired. She never shows it.
[beat 5] A radio on Graham's belt hisses. RACE CONTROL: Checkpoint Four, Race Control. Be advised: Musher Delacroix is withdrawn. Repeat, withdrawn. GRAHAM: Copy.
[beat 6] HALVARD: Delacroix? He was my main rival. GRAHAM: Was. HALVARD: What happened? GRAHAM: His team went through the ice.
[beat 7] Silence. Halvard lowers the booties. Imelda lifts her stethoscope from Aurora's chest. IMELDA: Oh, no.
[beat 8] HALVARD: Is he-- GRAHAM: Alive. Frostbite. Two dogs lost. HALVARD: I'm sorry.
[beat 9] GRAHAM: You can go.
[beat 10] HALVARD: I think I should stop. GRAHAM: Now? IMELDA: Now? HALVARD: If the ice is bad ahead--
[beat 11] GRAHAM: It's not bad. He cut a corner. He was in a hurry.
[beat 12] Halvard stares at Aurora. Aurora stares at him. She yawns. Slowly he laces the booties.
[beat 13] HALVARD: Then I won't be in a hurry.
[beat 14] He rises and calls the team. One by one the huskies stand and shake out their coats. The sled creaks. Halvard steps onto the runners. HALVARD: Hike.

### SCENE s00770 | INT. FUNHOUSE MIRROR MAZE - NIGHT
Characters: BIRDIE OKAFOR, DEZ PRYCE, FERENC VASS, INSPECTOR TAMSIN WHITLOCK
[beat 0] Cracked glass. Dead carnival. Flashlight beams ricochet everywhere.
[beat 1] BIRDIE OKAFOR, 30s, tool belt, glitter on one cheek, scrapes at a mirror frame. Up a ladder.
[beat 2] DEZ PRYCE, 20s, sweaty intern in a clown wig, "holds" the ladder.
[beat 3] BIRDIE: Dez. Ladder. DEZ: Holding it, Birdie.
[beat 4] The ladder wobbles. Dez grips harder. Wobbles more.
[beat 5] BIRDIE: You hold it like a baby bird. DEZ: You're named Birdie. That's on you.
[beat 6] BIRDIE: Squeegee. Now.
[beat 7] Dez hands up a rubber chicken. BIRDIE: Chicken. Not squeegee. DEZ: They were next to each other!
[beat 8] Reflections. Six Dezes. Six Birdies. Total chaos.
[beat 9] BIRDIE: Which one's you? DEZ: Hi.
[beat 10] Footsteps. Squeaky soles. A pie, held like a weapon.
[beat 11] FERENC VASS, 70s, tuxedo jacket over pajamas, owner of everything rotting here, shuffles in.
[beat 12] FERENC: Who is breaking my maze? BIRDIE: Fixing, Mr. Vass. Fixing your maze.
[beat 13] FERENC: Dez, is that my wig? DEZ: Borrowed, Mr. Vass.
[beat 14] FERENC: Birdie, I pay for repairs. Not for humming. BIRDIE: I wasn't humming. DEZ: She was. Loudly.
[beat 15] Ferenc offers the pie. Nobody takes it. Everybody looks at it.
[beat 16] A flashlight beam, bright and official, slices through the mirrors.
[beat 17] INSPECTOR TAMSIN WHITLOCK, 40s, clipboard, zero humor, steps in. TAMSIN: Fire marshal. Who's in charge?
[beat 18] All three point at each other. Six Dezes point. Six Birdies point.
[beat 19] FERENC: Pie? TAMSIN: Obviously.

### SCENE s00771 | INT. NIGHT FERRY - VENDING ALCOVE - NIGHT
Characters: STRANGER, ROSALIND ACHTERBERG, ELIAS, TEO, DECKHAND, PRIYA
[beat 0] Humming machines. Sticky floor. Dark windows.
[beat 1] A STRANGER, 50s, wet coat, sits on the bench. He stares at his hands.
[beat 2] ROSALIND ACHTERBERG, 60s, steps in with a paper cup. She stops. Her grip tightens on the cup.
[beat 3] ROSALIND: You're on my bench. STRANGER: I don't know you.
[beat 4] She studies him. Something in his jaw.
[beat 5] ROSALIND: Elias.
[beat 6] He looks up. Long beat.
[beat 7] ELIAS: Rosalind. You got old. ROSALIND: Twenty years will do that.
[beat 8] TEO, 9, in a hoodie too big for him, peeks from behind the snack machine. He clutches a bag of chips.
[beat 9] TEO: Grandma, who's that? ROSALIND: Nobody, Teo. Go find your mother.
[beat 10] ELIAS: Teo. Good name.
[beat 11] A DECKHAND, PRIYA, 20s, orange vest, leans in. PRIYA: Ma'am, we dock in ten. Everyone okay?
[beat 12] Rosalind sits. Not beside him. Near. ROSALIND: We're fine, Priya.
[beat 13] He nods once. She sips. The ferry rocks.

### SCENE s00772 | INT. FISH MARKET - WALK-IN FREEZER - NIGHT
Characters: MAURA KESSLER-DIAZ, TIB, NAGY
[beat 0] Frost on everything. Hanging tuna like pale bells. Breath clouds.
[beat 1] MAURA KESSLER-DIAZ, 40s, black parka, lockpick case, crouches at a floor safe.
[beat 2] The heavy door SCRATCHES open. Light slices in.
[beat 3] She kills her penlight. Flattens against the shelving.
[beat 4] Boots. Slow.
[beat 5] TIBOR "TIB" NAGY, 50s, market night manager, rubber apron, a gaff hook in one fist, walks in. He stops. Smells the air.
[beat 6] TIB: I know somebody's in here. Silence. Drip. Fans. TIB: Cameras went dark an hour ago. That's not luck.
[beat 7] MAURA: Hello, Tib.
[beat 8] He doesn't flinch. Raises the hook.
[beat 9] TIB: Maura. You left your hair dye in my sink last time. MAURA: Brown. Not my color.
[beat 10] TIB: You're stealing from the wrong man. MAURA: Everybody says that.
[beat 11] They circle. Tuna swing between them.
[beat 12] TIB: Put the picks down. MAURA: Put the hook down. Neither does.
[beat 13] TIB: Your brother used to say you talk too much. MAURA: My brother used to say a lot of things. Then he said nothing.
[beat 14] Tib's jaw tightens. TIB: That wasn't me. MAURA: It was your safe.
[beat 15] He lunges. She drops the case. They collide. The shelving rattles. Fish rain.
[beat 16] They grapple, hook against forearm, her knee into his ribs. TIB: Stop it! MAURA: You stop it!
[beat 17] Tib slams her into a shelf. Ice cracks loose. They both slide to the floor.
[beat 18] Both freeze. A distant sound: a truck engine.
[beat 19] TIB: That's my deliveries. MAURA: You have deliveries at two a.m.? TIB: Fish don't keep hours.
[beat 20] The engine idles. Voices outside, muffled.
[beat 21] They look at each other. At the safe. At the door.
[beat 22] MAURA: Who's out there, Tib? TIB: Not mine. MAURA: Then whose?
[beat 23] Tib lowers the hook. A fraction.
[beat 24] TIB: The man who owns the safe. MAURA: You said it was yours. TIB: I lied. Everybody does.
[beat 25] The door handle turns. They both dive behind the tuna rack.
[beat 26] They crouch shoulder to shoulder. Her breath on his collar. His hand over her mouth.
[beat 27] She bites it. TIB: Ow! MAURA: Quiet!
[beat 28] A shadow crosses the frosted glass. Stops.
[beat 29] They go still. Fans hum. A fish drips onto Maura's hood.
[beat 30] TIB: When he opens the door, you take the left. MAURA: Why would I take anything from you? TIB: Because he kills us both if you don't.
[beat 31] The shadow leans in. A knuckle taps the glass. Twice.
[beat 32] Tib and Maura exchange a look. Then, together, they stand.
[beat 33] MAURA: On three. TIB: One. MAURA: Two.
[beat 34] The door swings wide.
[beat 35] They launch.

### SCENE s00773 | INT. SKI GONDOLA CABIN - DUSK
Characters: KAVEH ZANDI, LINNEA STRAND, OSWIN PELL, JUNO MARCHETTI
[beat 0] Stopped dead mid-cable. Wind knocks the glass. Four seats, four strangers, one dying lamp.
[beat 1] KAVEH ZANDI, 30s, parka, nervous hands, sits facing the door. LINNEA STRAND, 40s, ski patrol jacket, radio at her hip, stands braced against the wall. OSWIN PELL, 60s, tweed under his shell, a briefcase chained to his wrist. JUNO MARCHETTI, 20s, snowboard across her knees, earbuds around her neck.
[beat 2] The cabin lurches. Everyone grabs something.
[beat 3] JUNO: That's not supposed to happen. LINNEA: It's wind. Stay seated.
[beat 4] Kaveh stares at the briefcase. KAVEH: What's in the case? OSWIN: Paperwork. KAVEH: Chained paperwork. OSWIN: Very important paperwork.
[beat 5] Linnea thumbs her radio. Static. Nothing. LINNEA: Base, this is Strand. Base? Static.
[beat 6] JUNO: Phones? Kaveh, Juno, Oswin check phones. Three heads shake. JUNO: No bars. At all.
[beat 7] KAVEH: Someone cut the tower. LINNEA: Don't be dramatic. KAVEH: Nobody jams a tower by accident, Linnea.
[beat 8] LINNEA: You don't know my name. KAVEH: It's on your jacket.
[beat 9] Beat. Linnea glances down. Her own name patch. She exhales.
[beat 10] The cabin sways. Oswin grips the chain.
[beat 11] OSWIN: I was told this would be a quiet trip. JUNO: Told by who? Oswin says nothing.
[beat 12] KAVEH: Open it. OSWIN: Absolutely not. KAVEH: Open it or I do.
[beat 13] Kaveh stands. The cabin tilts. Linnea steps between them. LINNEA: Sit. Down.
[beat 14] Kaveh lunges for the case. Oswin swings it. It cracks Kaveh's chin. Kaveh crashes into Linnea. Juno yanks her board up as a shield.
[beat 15] They all collide into the glass. It groans.
[beat 16] Everybody freezes. JUNO: Nobody move.
[beat 17] A long crack spiderwebs across the window. Nobody breathes.
[beat 18] OSWIN: I have a key. LINNEA: Then use it. OSWIN: It's in my coat. Left pocket. KAVEH: Don't touch his pocket. LINNEA: Shut up, Kaveh.
[beat 19] Juno slides a hand into Oswin's left pocket. Pulls out a small brass key. JUNO: This it? OSWIN: Yes. Please. Careful.
[beat 20] Juno unlocks the chain. The briefcase pops. Papers spill.
[beat 21] LINNEA: Those are maps. KAVEH: Of the mountain. JUNO: Of the cable. Of the towers. With dates.
[beat 22] Linnea picks one up. Reads. Her face goes still.
[beat 23] LINNEA: This is my father's handwriting. OSWIN: I'm sorry. LINNEA: Explain.
[beat 24] OSWIN: Your father sold the design flaw to my company twenty years ago. I came to see if it had held. KAVEH: It hasn't held. OSWIN: No. LINNEA: So this is a test. OSWIN: A confirmation.
[beat 25] JUNO: You rode a broken gondola to confirm it's broken? OSWIN: I needed to see the cable fray with my own eyes before I testify. KAVEH: Testify to what? OSWIN: That the company knew. That your fathers knew. That every one of us in this cabin is here because of a decision made at a conference table.
[beat 26] LINNEA: My father is dead. OSWIN: I know. That's why I came.
[beat 27] The cabin shudders. A deep grind. Everyone looks up. JUNO: That's the cable. OSWIN: Yes. LINNEA: How long? OSWIN: Minutes.
[beat 28] Kaveh bolts for the door. Linnea grabs his collar. He swings. She ducks. Juno wedges her board between them.
[beat 29] They scuffle in the narrow aisle. The cabin tips hard to the left. All four slide to one side.
[beat 30] The lamp dies.
[beat 31] Darkness. Wind. A single metallic SNAP. Then silence.
[beat 32] Then, far below, a motor kicks on. The cabin jerks. Moves. Upward.
[beat 33] Light floods in from the station.
[beat 34] They sit in a heap, panting. JUNO: We're moving. KAVEH: Who turned it on? LINNEA: Backup generator. Somebody finally got to it.
[beat 35] She looks at Oswin. At the maps. At the three faces. LINNEA: Base, Strand. Four aboard. We're fine. Everybody's fine.
[beat 36] She tucks a map inside her jacket.

### SCENE s00774 | INT. COMMUNITY BREAD COOPERATIVE - FORMER BUS DEPOT - MORNING
Characters: ANSELMA DUARTE, TOMASZ WIERZBA, HADIYA BELLO, WINSTON FAIRWEATHER-LEE
[beat 0] A long concrete bay where city buses once slept. Now: flour-dusted steel tables, a brick oven bolted into the old inspection pit, strings of laundry-line bunting. Tall windows turn the light the color of weak tea. The air smells of yeast and diesel ghosts.
[beat 1] ANSELMA DUARTE, 60s, forearms like rolled dough, sleeves shoved up, scores loaves with a razor blade. She works without hurry. TOMASZ WIERZBA, 30s, soft-spoken, rimless glasses, weighs flour on a brass scale and writes numbers in a battered notebook. HADIYA BELLO, 20s, apron over a nursing-school sweatshirt, shapes rolls and yawns between each one.
[beat 2] HADIYA: Do we have enough rye for Thursday? TOMASZ: I counted four sacks. ANSELMA: Three. Mrs. Pruitt took one for her church. TOMASZ: She didn't ask. ANSELMA: She never does. HADIYA: Three is fine. Thursday's mostly sourdough.
[beat 3] TOMASZ: Thursday is the wedding. ANSELMA: Thursday is the wedding and the school order. HADIYA: Then we need more rye. TOMASZ: Then we need to call the mill.
[beat 4] ANSELMA: The mill doesn't answer before ten. HADIYA: It's nine-forty. ANSELMA: Then we wait twenty minutes. Bread has taught me this.
[beat 5] Nobody argues. The oven ticks. Hadiya sets another roll on the tray.
[beat 6] The big bay door rattles. Light floods the floor. WINSTON FAIRWEATHER-LEE, 70s, cardigan, cane, a tote bag of library books, steps through. He squints up at the rafters like a man visiting a former church.
[beat 7] WINSTON: I drove a Number 14 out of this depot for thirty-one years. ANSELMA: We know, Winston. You tell us every Tuesday. WINSTON: It's Wednesday. TOMASZ: He's right, it's Wednesday. HADIYA: Then why does it feel like Tuesday? ANSELMA: Because Tuesday's bread was better.
[beat 8] WINSTON: They've kept the pit. TOMASZ: The pit's the oven now. WINSTON: Mm. Good use of a pit.
[beat 9] He sets a library book on the table. Hadiya reads the spine, nods, hands him a warm roll. He eats it in two bites.
[beat 10] The oven ticks again. Anselma slides in another tray.

### SCENE s00775 | INT. PIGEON RACING CLUB - BACK ROOM - NIGHT
Characters: GLORIA HUANG, HAROLD OYELARAN, MARISOL TREVI, DEACON PRATT, CORNELIA ASHBY-REID, TEDDY NKEMELU
[beat 0] Folding chairs. A coffee urn. Trophies with tiny gilded birds. A banner reads "ANNUAL MEMBERSHIP MEETING."
[beat 1] GLORIA HUANG chairs the meeting from a card table. She taps a gavel.
[beat 2] GLORIA: Item four. The clubhouse roof.
[beat 3] HAROLD OYELARAN, seventies, raises a hand. He wears a bow tie and a tired expression. HAROLD: I move we ignore it.
[beat 4] MARISOL TREVIÑO, a retired postal worker, shakes her head. She holds a casserole dish on her lap. MARISOL: Harold, it rains inside. HAROLD: So do the birds.
[beat 5] DEACON PRATT, the treasurer, adjusts his hearing aid and beams at no one. DEACON: What did he say?
[beat 6] CORNELIA ASHBY-REID sits beside him, knitting something blue. She leans over and speaks into his ear. CORNELIA: Harold wants to ignore the roof. DEACON: Bold.
[beat 7] GLORIA: We have eleven hundred dollars. MARISOL: The roofer wants four thousand.
[beat 8] GLORIA: We could hold a raffle. HAROLD: We held one last year. GLORIA: And? HAROLD: Somebody won the casserole.
[beat 9] All eyes drop to Marisol's dish. She shrugs. MARISOL: It was a very good casserole.
[beat 10] TEDDY NKEMELU, the youngest member by forty years, sits in the back with a bag of seed. He pipes up.
[beat 11] TEDDY: What if we race for it? GLORIA: Race what? TEDDY: The birds. Winner takes a share. Entry fee goes to the roof.
[beat 12] Gloria looks at Harold. He looks at Marisol. She looks at the casserole.
[beat 13] She nods first. Then he does. Then everyone.
[beat 14] Gloria raises the gavel. GLORIA: Motion carried. Somebody write that down.
[beat 15] Cornelia holds up her knitting. It is, on closer look, a tiny sweater for a pigeon. CORNELIA: Already on it.

### SCENE s00776 | INT. ORBITAL SEED VAULT - GREENHOUSE RING - DAY
Characters: ODALYS VANTERPOOL, PETRA ISHIGURO, CALLUM ROUKEMA, MIREILLE TANDON, SUNDARAM OKONKWO, KESTREL
[beat 0] Curved walls of white panel. Rows of sealed trays glow violet under grow-lamps. A slow hum, the sound of a place that never sleeps.
[beat 1] ODALYS VANTERPOOL, 50s, station botanist, checks a tray with gloved hands. Her coffee has been cold for hours. PETRA ISHIGURO, 30s, engineer, kneels at an access panel with a tablet and a mouthful of screws. CALLUM ROUKEMA, 40s, commander, stands at the viewport. He doesn't look at the Earth below. MIREILLE TANDON, 20s, intern, carries a tray of seedlings in both hands, like something that might break. DR. SUNDARAM OKONKWO, 60s, medical officer, leans in the doorway. He watches Callum's back. KESTREL, a station AI, speaks from a speaker above the door. Calm. Warm. Exact.
[beat 2] KESTREL: Humidity in ring three is up four percent. ODALYS: I see it. PETRA: I'll check the condensers.
[beat 3] Callum turns from the window. He walks the row. His fingers brush a leaf. He stops at an empty tray.
[beat 4] CALLUM: This one was labeled. ODALYS: It failed. CALLUM: It failed a month ago. ODALYS: Yes. MIREILLE: Should I log it? CALLUM: I did.
[beat 5] Silence. The lamps buzz.
[beat 6] Sundaram steps in, hands in his coat pockets. SUNDARAM: You didn't mention it at breakfast. CALLUM: Nothing to mention. SUNDARAM: Callum. CALLUM: Sundaram.
[beat 7] They both speak at once. SUNDARAM: The lab results came back. CALLUM: The cargo window opens Friday. SUNDARAM: It would help if you slept. CALLUM: I'll check the manifest.
[beat 8] Both stop. Neither moves.
[beat 9] Petra, from the floor, pretends to read the tablet. Mireille shifts the seedlings to her other arm.
[beat 10] ODALYS: Mireille, those need water. MIREILLE: Right. Yes.
[beat 11] She leaves in a hurry. The door sighs shut.
[beat 12] Sundaram unclasps his hands. Holds something out: a small flat seed packet, yellowed at the edges. SUNDARAM: Take it.
[beat 13] Callum does not. SUNDARAM: It's the last one from the old crop.
[beat 14] Callum takes it. Turns it over. Pockets it.
[beat 15] KESTREL: Commander, a transmission is waiting. CALLUM: Later.
[beat 16] He walks out. The door seals behind him.
[beat 17] Odalys finally looks up. Petra sets down her screwdriver.
[beat 18] Sundaram sits on an upturned crate. Nobody says anything. The lamps hum on.

### SCENE s00777 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Characters: NELL AUGUSTINE, SULLY, DOT, FEENEY, KWABENA ASARE, BRYCE
[beat 0] Cramped. Dust in the lamp beam. A reel spins on its own. Through the slit window: an empty lot, a flickering screen.
[beat 1] NELL AUGUSTINE, 20s, the projectionist, stands rigid. Beside her, her brother SULLY, 16, holds a flashlight with both hands. DOROTHEA "DOT" FEENEY, 60s, the owner, is wedged against the film cabinet, mouthing a prayer. At the door, MR. KWABENA ASARE, 50s, a customer with a ruined suit, keeps one shoulder to the wood while a hand slams from the other side.
[beat 2] At the window, the booth's cat-eyed night guard BRYCE, 30s, whips the curtain shut, but a pale arm slides through the vent and clamps his ankle, dragging him down. BRYCE: Dot! Dot, pull! DOT: I'm pulling, Bryce, I'm pulling!
[beat 3] Sully swings the flashlight onto the arm. Under the light, the skin peels like old film.
[beat 4] SULLY: Nell, it's on the reel! NELL: Don't look at the screen!
[beat 5] Kwabena braces. The door cracks.
[beat 6] Nell grabs the lamp housing and tears it open. White light blasts into the vent. The arm SCREAMS and lets go.
[beat 7] Silence. The reel keeps spinning.
[beat 8] KWABENA: Is it gone?
[beat 9] On the screen, in huge flickering black and white, something turns toward the camera.

### SCENE s00778 | EXT. MUNICIPAL POOL - TEN-METER DIVING TOWER - NIGHT
Characters: IZZY PAREDES, WYATT BRODERICK, SOLENNE ADEYEMI-CHANG
[beat 0] Chain-link fence. Empty bleachers. The water is black, lit only by one emergency lamp. Three teens climb the concrete tower.
[beat 1] IZZY PAREDES, 16, steps onto the platform first. Hoodie, bare feet, a bag of stolen fireworks. WYATT BRODERICK, 17, follows, taller, breathing hard from the stairs. SOLENNE ADEYEMI-CHANG, 16, brings up the rear with her phone light off. She keeps one hand on the rail.
[beat 2] IZZY: Look at that. Whole town. WYATT: It's a parking lot and a Taco Bell. IZZY: It's our parking lot.
[beat 3] SOLENNE: Can we just go back down? IZZY: You said you wanted to see it. SOLENNE: From the bottom.
[beat 4] Wyatt laughs. Solenne glares.
[beat 5] WYATT: You jumped from the five last summer. SOLENNE: I fell from the five.
[beat 6] Izzy digs in the bag. Pulls out a firework. Holds it up like a trophy.
[beat 7] IZZY: Tonight we send Mr. Hendricks off. WYATT: He's not dead, Izzy. He retired. IZZY: Same thing. Teachers don't get better.
[beat 8] She flicks a lighter. Nothing. Again. Nothing.
[beat 9] WYATT: Give it. IZZY: No. WYATT: You'll blow your hand off. IZZY: You'll blow your hand off.
[beat 10] They tussle. The firework drops. Rolls.
[beat 11] Solenne dives and catches it with both hands. SOLENNE: Stop it! Both of you!
[beat 12] They freeze. Wyatt's hand still on Izzy's sleeve.
[beat 13] Quiet. Wind on the water. Far below, a car passes.
[beat 14] WYATT: Sorry. IZZY: Yeah. They let go.
[beat 15] Izzy sits on the edge, legs over. Wyatt sits beside her. Solenne stays upright.
[beat 16] SOLENNE: Is it weird that I'm going to miss this place? WYATT: It's a pool. SOLENNE: It's where we learned to swim. IZZY: I learned to swim in a bathtub. WYATT: That's not swimming. That's drowning slowly.
[beat 17] Izzy shoves him. He shoves back. They both nearly tip. Solenne yanks both by the hoods.
[beat 18] SOLENNE: Okay! No dying tonight. We have prom. IZZY: Prom is stupid. SOLENNE: Prom is the last thing before everything.
[beat 19] Silence. Izzy picks at the platform's grit.
[beat 20] IZZY: My mom's moving us to Tucson. WYATT: When? IZZY: August. WYATT: You didn't tell us. IZZY: I'm telling you now.
[beat 21] Solenne sits. All three in a row. Legs dangling.
[beat 22] SOLENNE: We could jump. WYATT: We could. IZZY: All three? SOLENNE: All three.
[beat 23] They stand. Hold hands. Breathe.
[beat 24] WYATT: On three. IZZY: On one. Three is a trap. SOLENNE: One!
[beat 25] They leap together, screaming, into the black. SPLASH. Then laughter. Echoing.
[beat 26] Overhead, a floodlight clicks on. A flashlight beam sweeps the water.
[beat 27] A whistle shrieks from the fence line.
[beat 28] The three scramble out, shrieking, dripping, stumbling over each other, laughing so hard they can barely climb the fence.

### SCENE s00779 | INT. TAXIDERMY CLASSROOM - NIGHT
Characters: PRUDENCE LOVELACE-AKINS, ISAAC TOMLINSON, JAMES TALLCHIEF
[beat 0] Glass eyes in rows. Fox, owl, a badger mid-snarl. A single desk lamp. Moonlight on frozen fur.
[beat 1] PRUDENCE LOVELACE-AKINS, 30s, instructor, lays a half-stuffed heron on the worktable. Across from her, ISAAC TOMLINSON, 20s, her student, wipes his hands on a towel and keeps glancing at the badger.
[beat 2] ISAAC: Did that move? PRUDENCE: It's a badger, Isaac. It's dead. ISAAC: It was facing the door before. PRUDENCE: You're tired.
[beat 3] She picks up a scalpel. Isaac backs toward the shelves.
[beat 4] PRUDENCE: Come here. Hold the wing. He does. His fingers tremble on the feather.
[beat 5] Behind them, the badger turns its head.
[beat 6] Neither sees. The lamp flickers. Prudence cuts a clean line along the heron's belly, and Isaac jerks the wing aside. The fox on the shelf shifts a paw. The owl's neck rotates. Prudence reaches for the thread.
[beat 7] Isaac bumps the table. A jar of glass eyes rolls. Every eye in the room is suddenly pointed at the two of them.
[beat 8] ISAAC: Prudence. PRUDENCE: Hold still. ISAAC: Prudence!
[beat 9] She looks up. The room is full of eyes.
[beat 10] Footsteps in the hall. The door swings wide.
[beat 11] JAMES TALLCHIEF, 50s, the night janitor, mop in hand, steps in. He stops. Takes it in. JAMES: Ladies, gentlemen. And whoever you are.
[beat 12] The animals all freeze mid-turn. Silence.
[beat 13] James sets the mop down. Walks to the badger. Picks it up by the scruff. Turns it around, facing the wall.
[beat 14] JAMES: They do that when they're lonely. PRUDENCE: They do WHAT? JAMES: Somebody leave a radio on for them. Classical.
[beat 15] He leaves. Isaac exhales for the first time in a minute.
[beat 16] Prudence puts down the scalpel. Reaches for the radio.

### SCENE s00780 | EXT. INK RIVER - FERRYMAN'S TOLL BOOTH - TWILIGHT
Characters: MAGDA ORLOVSKAYA-FELL, BASIL THORNQUIST, SIX-FINGERED JO
[beat 0] Black water. Slow. Letters swim in it like minnows. A crooked booth on stilts.
[beat 1] MAGDA ORLOVSKAYA-FELL, 60s, tollkeeper, lantern for a left hand, counts coins into a jar. BASIL THORNQUIST, 30s, pilgrim, muddy cloak, stands at the booth window. A satchel at his feet. SIX-FINGERED JO, ageless, a heron the height of a man, stalks along the dock.
[beat 2] MAGDA: Toll's a memory. BASIL: A memory? MAGDA: Of your own. Not borrowed.
[beat 3] Basil digs in his satchel. Pulls out a pebble. Holds it up. BASIL: My mother's garden.
[beat 4] Magda sniffs the pebble. Shakes her head. MAGDA: Too small. BASIL: It's a good memory. MAGDA: It's a pebble.
[beat 5] Jo ruffles. Taps the dock with a long beak.
[beat 6] JO: Let him pass, Magda. MAGDA: Don't tell me my business, bird. JO: He's carrying something heavy. MAGDA: They all are.
[beat 7] Basil lifts the satchel. Sets it on the sill. The booth creaks. BASIL: What if I told you what's inside?
[beat 8] Magda and Jo lean in. MAGDA: Tell. JO: Tell.
[beat 9] They share a look. Both clear their throats. Basil smiles faintly.
[beat 10] BASIL: A name. MAGDA: Whose? JO: Whose? BASIL: Mine. I left it at home.
[beat 11] Magda writes in her ledger. Crosses out a line. MAGDA: That'll do.
[beat 12] She slides a coin through. It's blank on both sides. Basil takes it.
[beat 13] JO: Mind the third current. BASIL: Thank you.
[beat 14] The ferry is a hollow boat of reeds. It nudges the dock. Basil steps aboard.

### SCENE s00781 | INT. CAR WASH CONTROL ROOM - NIGHT
Characters: NADIA ROSTOVA-BELL
[beat 0] Cinderblock. Buzzing fluorescents. Soap suds crawl down a window. Beyond it, a dark tunnel of brushes, still.
[beat 1] NADIA ROSTOVA-BELL, 30s, courier jacket, sits on an overturned crate. A phone in her hand. A duffel at her feet.
[beat 2] She presses play. NADIA: Memo one. Tuesday. If you hear this, the handoff went fine.
[beat 3] Nadia winces. NADIA: Package is in the blue duffel. Do not open it.
[beat 4] She looks at the duffel. Doesn't move.
[beat 5] NADIA: Memo two. Wednesday. Someone followed me from the depot.
[beat 6] She pauses it. Breathes. Presses again.
[beat 7] NADIA: Memo three. They know the car wash. I don't know how.
[beat 8] Nadia stands. Checks the door. The deadbolt. The window. The tunnel.
[beat 9] A drip. A distant clank.
[beat 10] She freezes. Nothing.
[beat 11] She sits again.
[beat 12] NADIA: Memo four. I'm going to open the duffel. Whoever you are, I'm sorry. Nadia stares at the phone.
[beat 13] NADIA: I never recorded this one.
[beat 14] She scrolls. The memo is dated tomorrow.
[beat 15] The voice continues, gentler. NADIA: It's just a hard drive. It's always been just a hard drive. Walk away.
[beat 16] Nadia lifts the duffel. Unzips it. A small black drive, a Post-it: "SORRY."
[beat 17] She laughs. Short. Hollow. Then not.
[beat 18] She pockets the drive. Shoulders the duffel.
[beat 19] At the door she hesitates. Presses delete.
[beat 20] NADIA: Memo five.
[beat 21] She exits. The brushes begin to spin behind her.

### SCENE s00782 | INT. FIELD HOSPITAL - CONVERTED ICE RINK - NIGHT
Characters: LUCIA FONTANILLA, NURSE GRETA HOLMQVIST, ABEL TESFAYE, RAFI, CORDERO, KOFI
[beat 0] Cots on the ice mats. Generators drone. Breath hangs in the cold. A Zamboni bay is now supply storage.
[beat 1] DR. LUCIA FONTANILLA, 40s, scrubs under a parka, works over a patient on a gurney. NURSE GRETA HOLMQVIST, 50s, holds the instrument tray. The patient, ABEL TESFAYE, 30s, grips the rail, sweating.
[beat 2] LUCIA: Pressure? GRETA: Ninety over fifty. LUCIA: Drop another liter. Greta hangs a bag. The line tangles. She curses and fixes it.
[beat 3] Lucia presses on Abel's side. He groans. ABEL: Doc, it's okay. Stop. LUCIA: It's not okay, Abel.
[beat 4] RAFAEL "RAFI" CORDERO, 20s, paramedic, bursts through the doors with a teenage boy in tow. The boy, KOFI, 15, has a bandaged hand. RAFI: Doctor! Triage says you've got a bed. LUCIA: I've got a floor. RAFI: Then I'll take the floor.
[beat 5] KOFI: Is that my brother? Abel turns his head. ABEL: Kofi.
[beat 6] Kofi runs. Rafi grabs for him, misses. Kofi barrels into Greta. The tray flies. Scalpels clatter across the ice. Lucia lunges to catch the tray and slips. Rafi catches her. They fall together, tangled, in a heap by the gurney.
[beat 7] She is first up. She looks down at Abel. His monitor flatlines. LUCIA: Greta! Paddles! GRETA: Charging!
[beat 8] She slaps the paddles together. Lucia takes them. Kofi freezes at the foot of the cot, hands over his mouth. LUCIA: Clear!
[beat 9] Abel arches. Falls. A blip. Another blip. GRETA: We've got him.
[beat 10] She exhales. Lucia lets the paddles drop on his chest. Her hands shake. KOFI: Is he okay? RAFI: He's okay.
[beat 11] Lucia turns to Kofi, steps close. She inspects the bandaged hand. LUCIA: Who did this wrap? KOFI: Me. LUCIA: It's terrible. KOFI: Sorry. LUCIA: Sit. I'll redo it. After. Kofi sits on the ice.
[beat 12] Abel's eyes flutter open. ABEL: Doc? LUCIA: Still here.

### SCENE s00783 | INT. SPEAKEASY BEHIND A FUNERAL PARLOR - NIGHT, 1923
Characters: MAMIE DUPREE, MAN IN GREY HAT, GREY HAT, BARNABY SCOTT, ACKERLY
[beat 0] Caskets stacked as bar-backs. A gramophone croons. Candlelight.
[beat 1] MAMIE DUPREE, 30s, bartender, silver flapper dress, polishes a glass. Everything is lovely and slow.
[beat 2] A MAN IN A GREY HAT, 40s, sits at the bar. He turns his drink in circles. Doesn't drink. BARNABY SCOTT, 60s, the undertaker, dozes on a coffin lid in the corner.
[beat 3] MAMIE: You're not from here. MAN IN GREY HAT: No. MAMIE: You like the music? MAN IN GREY HAT: It's fine. MAMIE: It's a funeral parlor. We play what the dead like.
[beat 4] He almost smiles. Takes a sip. Sets the glass down.
[beat 5] MAN IN GREY HAT: Your license? Mamie's polishing stops. Barnaby's snore stops. MAMIE: Pardon?
[beat 6] The man pulls back his coat. A badge. ACKERLY: Solomon Ackerly. Prohibition Bureau.
[beat 7] Mamie lowers the glass. Slowly. Barnaby sits up in his coffin. BARNABY: Mamie. The other room. MAMIE: Detective, we're only mourning. ACKERLY: In evening dress.
[beat 8] She glances at the gramophone. Reaches. Turns the volume UP.
[beat 9] The gramophone swells. Behind the bar, the wall begins to slide open.

### SCENE s00784 | INT. MATTRESS SHOWROOM - NIGHT
Characters: MARV QUIGLEY, SECURITY GUARD, DARNELL
[beat 0] Rows of beds under cold light. A tripod. A ring light. A laptop showing a chat window scrolling.
[beat 1] MARV QUIGLEY, 50s, polyester suit, headset mic, bounces on a king-size to show springs. MARV: Folks, welcome to the Midnight Mattress Marathon!
[beat 2] A SECURITY GUARD, 30s, in a windbreaker, stands in the doorway with a flashlight. Marv doesn't see him. MARV: Three hundred viewers! That's a record, folks!
[beat 3] The guard coughs. MARV: Not now, Brenda. SECURITY GUARD: I'm not Brenda.
[beat 4] Marv spins. He sees the flashlight. Drops to a sit.
[beat 5] MARV: Who the hell are you? SECURITY GUARD: Mall security. MARV: At a standalone store? SECURITY GUARD: It's a big parking lot. MARV: Folks, ignore the man in the windbreaker.
[beat 6] The guard steps into frame. Waves at the camera. SECURITY GUARD: Hi, Mom. MARV: Oh, no.
[beat 7] SECURITY GUARD: I'm Darnell, by the way. MARV: Darnell, you're ruining my numbers. DARNELL: The chat says they like me. MARV: "Who's the guard? Marry him." Okay. Fine.
[beat 8] Darnell sits on the next bed. He bounces. His face softens. DARNELL: Wow. MARV: Memory foam. DARNELL: I could sleep here. MARV: That's the idea, Darnell. DARNELL: No. Like, tonight.
[beat 9] Marv looks at the camera. At Darnell. At the chat. MARV: Folks, we're extending the marathon. DARNELL: Best shift ever.

### SCENE s00785 | INT. COASTAL RADAR SHACK - NIGHT, 1944
Characters: CORPORAL AGNES TILLMAN-REED, SERGEANT BARTHOLOMEW OYELOWO, PRIVATE LUCIEN FAIVRE, BART, COMMANDER HALLORAN
[beat 0] Plywood walls. A glowing scope. A kettle on a hot plate. Rain on tin.
[beat 1] CORPORAL AGNES TILLMAN-REED, 20s, headset, hunches at the scope. SERGEANT BARTHOLOMEW OYELOWO, 40s, reads a magazine upside down. PRIVATE LUCIEN FAIVRE, 19, stirs tea he isn't drinking.
[beat 2] She taps the glass. Leans closer. AGNES: Contact. Bearing two-seven-zero.
[beat 3] He drops the magazine. Rolls the chair beside her. BART: Range? AGNES: Thirty miles. Slow. BART: Ours? AGNES: No transponder.
[beat 4] He swears under his breath. The other boy stops stirring. LUCIEN: Should I wake the captain? BART: Not yet. Let it come.
[beat 5] The radio crackles on the shelf. COMMANDER HALLORAN: Shack Seven, Halloran. Report. Bart grabs the handset. Agnes turns the dial. BART: Single contact. Unidentified. Approaching. HALLORAN: Hold position. Do not engage. BART: Understood, sir.
[beat 6] He sets the handset down. She watches the scope. The blip crawls. AGNES: Closing. LUCIEN: Maybe it's a fishing boat. BART: At night, in a blackout? He doesn't answer. He pours the tea down the sink.
[beat 7] The blip stops. Hangs. Starts to fade. AGNES: It's turning.
[beat 8] She leans back. Exhales. He rubs his face with both hands. BART: Good.
[beat 9] The radio crackles again. HALLORAN: Shack Seven, stand down. It was ours.
[beat 10] Bart picks up the magazine. Right side up this time.

### SCENE s00786 | INT. HOTEL ROOM - GRAND PACIFIC - NIGHT, 1951
Characters: VIVIENNE LAROCHE-STANTON
[beat 0] Art deco lamp. A rain-streaked window. A wire recorder on the writing desk, its spools motionless.
[beat 1] VIVIENNE LAROCHE-STANTON, 30s, evening gown, unpinned hair, sits on the edge of the bed. She stares at the recorder as though it might speak first.
[beat 2] She stands. Crosses. Presses PLAY. VIVIENNE: Darling, it's me. If you're hearing this, I've made it to San Francisco and the hotel has the most dreadful wallpaper.
[beat 3] Vivienne smiles at the wallpaper. It is dreadful. VIVIENNE: I'll see you at the Cliff House at nine. Wear the blue tie.
[beat 4] She stops it. Crosses to the window. Checks her wristwatch. 11:40. VIVIENNE: Nine.
[beat 5] She returns. Rewinds. Plays again. VIVIENNE: Darling, it's me.
[beat 6] She snaps it off. Paces. Picks up the telephone receiver. Puts it down.
[beat 7] She opens the closet. A blue tie hangs there, tags still on. She pulls it free. Holds it.
[beat 8] VIVIENNE: You said you'd come. She wraps the tie around her fist. VIVIENNE: You said you'd come, and you didn't, and I wore the dress.
[beat 9] She flings the tie across the room. It slaps the wall. She picks up the recorder, lifts it above her head, and hurls it at the wardrobe mirror.
[beat 10] CRASH. The mirror shatters. The spools unspool in long brown ribbons.
[beat 11] Silence. Rain. She stands among the shards, breathing.
[beat 12] Then, from the broken machine, a last crackle of voice. VIVIENNE: ...and darling, whatever happens, I'll wait.
[beat 13] Vivienne sinks to the floor. The lamp flickers.

### SCENE s00787 | INT. FERRY GALLEY - ARBITRATION - DAY
Characters: ARBITRATOR HENRIETTA OSEI-BONSU, PELAGIA STAVROU, RHYS MOLYNEUX
[beat 0] A docked ferry's galley, converted for the day. Stainless counters. Sandwich trays. A folding table with three chairs and a pitcher of water.
[beat 1] ARBITRATOR HENRIETTA OSEI-BONSU, 60s, sits at the head. PELAGIA STAVROU, 40s, counsel for the claimant, sits to her left. RHYS MOLYNEUX, 50s, counsel for the respondent, sits to her right. He loosens his tie. She straightens her blazer. Henrietta clicks a pen.
[beat 2] HENRIETTA: Counsel. You've had a week. Is there a deal? PELAGIA: None, Your Honor. RHYS: Not at the number she's asking.
[beat 3] HENRIETTA: Which is? PELAGIA: Two point four million. RHYS: Preposterous. PELAGIA: It's modest. RHYS: It's insane.
[beat 4] Both stop. Henrietta lifts a hand. Silence. HENRIETTA: One at a time.
[beat 5] She pours water. Slides the pitcher toward Rhys. He doesn't take it. Pelagia does.
[beat 6] PELAGIA: The respondent's captain falsified the maintenance log. We have the original. She opens a folder. Slaps a photocopy on the table. He leans in. She leans back. Henrietta puts on reading glasses and studies the page, line by line, as the ferry creaks against its moorings.
[beat 7] RHYS: That's not authenticated. PELAGIA: It's his handwriting. RHYS: Anyone can forge handwriting. PELAGIA: Anyone can try.
[beat 8] Henrietta lifts her head. HENRIETTA: Mr. Molyneux. Is that your client's signature? Rhys glances at the page. A long beat. His mouth opens, closes. RHYS: I would need to confer. HENRIETTA: Then confer.
[beat 9] He stands. Hesitates. Sits. RHYS: It's his.
[beat 10] Pelagia exhales. Henrietta takes off her glasses. HENRIETTA: Break for lunch. Take the sandwiches.
[beat 11] They rise. He holds the door for her. She nods once, without triumph.

### SCENE s00788 | INT. AGING CAVE - ALPINE CHEESE VAULT - NIGHT
Characters: MARGUERITE LOUVEL, JUNIOR TWOMBLY, DEL, WRAY, OSCAR PELLEGRINI-OKAFOR, MAN IN WHITE APRON, WHITE APRON, BERTRAND
[beat 0] Carved stone. Wheels of cheese on spruce shelves, rows upon rows, rind blooming white and grey. A single gas lamp. The air tastes of salt and earth.
[beat 1] MARGUERITE LOUVEL, 40s, immaculate trench coat, strolls the aisle with her hands behind her back. She might be visiting an aunt. JUNIOR TWOMBLY, 30s, safecracker, sweater too warm for the cave, kneels at a steel door set into the rock. He listens, ear to the dial. DELPHINE "DEL" WRAY, 20s, getaway driver, sits cross-legged on a barrel, a thermos on her knee. She watches the entrance. OSCAR PELLEGRINI-OKAFOR, 50s, the inside man, wears a cheesemonger's smock and sweats through it. He hovers by the door and checks his watch every few seconds.
[beat 2] MARGUERITE: How long? JUNIOR: Ten minutes. OSCAR: He said ten minutes at midnight. MARGUERITE: Oscar. Breathe. OSCAR: I am breathing. I'm breathing very hard. DEL: He said that ten minutes ago. JUNIOR: He is a patient man.
[beat 3] MARGUERITE: Del, the road? DEL: Quiet. Too quiet.
[beat 4] Marguerite touches a wheel of cheese. Leaves a fingerprint in the rind. She looks at it. Wipes it carefully. MARGUERITE: Gloves. JUNIOR: I'm wearing gloves. MARGUERITE: Del. DEL: Bare. Sorry.
[beat 5] She pulls on gloves. Junior turns the dial. A click. Another.
[beat 6] A shape detaches itself from the shadow between shelves. A MAN IN A WHITE APRON, 60s, holds a cheese iron like a sword. MAN IN WHITE APRON: You're in my cave.
[beat 7] Everyone freezes. Del slides off the barrel. Marguerite doesn't flinch.
[beat 8] MARGUERITE: We're expected. MAN IN WHITE APRON: By who? MARGUERITE: By the cheese. His eyes narrow. The cheese iron drops a few inches. JUNIOR: Marguerite. MARGUERITE: Keep dialing.
[beat 9] MAN IN WHITE APRON: What do you want? MARGUERITE: The Reserve. 1978. He studies her. She holds his eyes. The lamp hisses.
[beat 10] BERTRAND: I am Bertrand Blanchet. I have been guarding that wheel for forty years. MARGUERITE: Then you know it was never meant to be sold. BERTRAND: It was not.
[beat 11] DEL: Mr. Blanchet, with respect, it's two million dollars of dairy. BERTRAND: It is two million dollars of my wife. Silence. The lamp. A drip somewhere.
[beat 12] Junior stops turning the dial. JUNIOR: Marguerite. Your call.
[beat 13] Marguerite takes a long breath. Walks toward Bertrand. Stops an arm's length away.
[beat 14] MARGUERITE: What if we only take half? BERTRAND: Half? MARGUERITE: You keep half. We sell half. You buy a new roof. BERTRAND: The roof is fine. DEL: It's not, though. I saw the leak by the entrance. BERTRAND: That is a decorative leak. JUNIOR: Is anybody else confused? MARGUERITE: Quiet, Junior.
[beat 15] She holds out her gloved hand. Bertrand looks at it. Lowers the cheese iron. BERTRAND: Half. He shakes.
[beat 16] The safe door clicks open behind them. Junior pulls it wide. Inside, nestled in straw: a single, enormous, dark wheel.
[beat 17] Everyone stares. Del lifts her thermos. DEL: To the wife. They raise nothing, because they have nothing. Bertrand takes the thermos, drinks, hands it back.

### SCENE s00790 | INT. COURTHOUSE ELEVATOR - DAY
Characters: CORDELIA FAIRCHILD-NWOSU, TOBIAS REINHOLT, DESHAWN KOROMA, DISPATCHER YBARRA
[beat 0] Brass. Mirrored walls. A floor indicator that blinks between three and four.
[beat 1] CORDELIA FAIRCHILD-NWOSU, 40s, defense attorney, navy suit, files hugged to her chest, rides in silence. Beside her, TOBIAS REINHOLT, 30s, her client, tie knotted wrong, sweats through his shirt. In the corner, bailiff DESHAWN KOROMA, 50s, stands like a statue, arms crossed.
[beat 2] The elevator shudders. Stops. The lights dip.
[beat 3] TOBIAS: Is it supposed to do that? CORDELIA: Yes. DESHAWN: No. Cordelia glances at him. He shrugs.
[beat 4] A buzz crackles from the speaker panel. DISPATCHER YBARRA: Elevator two, status? DESHAWN: Stuck. Third and fourth. YBARRA: Technician's twenty minutes out. CORDELIA: Twenty? I've got a verdict at ten. YBARRA: Ma'am, I don't control the building.
[beat 5] Cordelia faces the mirror. Tobias watches her in reflection. TOBIAS: Miss Fairchild. Before we go in. CORDELIA: Not now.
[beat 6] TOBIAS: I lied to you. She does not turn. CORDELIA: I know. TOBIAS: You know? CORDELIA: I read the file. I read the lab report you didn't mention. I've known since Tuesday.
[beat 7] Deshawn stares at the ceiling with great concentration. TOBIAS: Then why did you stay? CORDELIA: Because everyone deserves a defense. Even you.
[beat 8] The lights flicker. The elevator drops six inches and catches. Tobias grabs the rail. Cordelia finally turns and puts a hand on his.
[beat 9] CORDELIA: When the doors open, you say nothing. Not one word. YBARRA: Elevator two, repairs arriving.
[beat 10] The doors groan apart. Light from the hallway. Cordelia steps out first.

### SCENE s00791 | INT. HOTEL BALLROOM - AFTER THE WEDDING - NIGHT
Characters: WOMAN, CATALINA
[beat 0] Folding chairs askew. A deflated balloon arch. Half-eaten cake under a plastic dome. Streamers on the floor like cut ribbon. The chandelier still burns, as if nobody has told it.
[beat 1] Nothing moves. A clock ticks.
[beat 2] A side door opens. Heels on parquet.
[beat 3] A WOMAN in a green evening dress, 50s, steps in, shoes in hand. Mascara tracked down one cheek. She surveys the wreckage and her mouth tightens.
[beat 4] She crosses to the head table. Finds a tape recorder among the centerpieces, the kind guests were meant to speak into. She lifts it. Examines it. Presses record.
[beat 5] WOMAN: Testing. One, two. She stops. Rewinds. Plays back. WOMAN: Testing. One, two.
[beat 6] She nods. Records again. WOMAN: This is Catalina Rousseau-Mbeki, mother of the groom. I would like to say something I didn't say at the toast.
[beat 7] She stops. Her jaw works. She sits on the edge of the stage.
[beat 8] CATALINA: I'm sorry I wore green. I was told it wasn't hers.
[beat 9] She lowers the recorder to her lap. Looks at the cake. Rewinds. Plays the last of it. CATALINA: I'm sorry I wore green.
[beat 10] A phone rings in her purse. She lets it ring. It rings again. CATALINA: Not tonight.
[beat 11] The phone stops. She raises the recorder. CATALINA: He looked happy. That's all. Remember that. He looked happy.
[beat 12] She sets the recorder on the stage, still running. Picks up her shoes. Crosses to the exit. At the door, she turns off the chandelier switch.
[beat 13] Darkness. A tiny red light glows on the stage.

### SCENE s00792 | INT. STARLITE LANES - BOWLING ALLEY - NIGHT
Characters: PHOEBE ADEBAYO, KENJI MORIKAWA, LOCKY, DUNMORE, BEATRIX SOKOLOWSKI, COSMO ABARA, HORACE LINDQVIST
[beat 0] The neon is half dead. Lane nine glows pink. A disco ball turns slowly over the shoe counter, throwing coins of light across a carpet printed with comets. It smells of fryer oil and rental-shoe disinfectant. The last night of high school, and the party has thinned to six.
[beat 1] PHOEBE ADEBAYO, 18, still in her cap and gown, kneels on lane six and rolls the ball down the gutter on purpose. KENJI MORIKAWA, 18, tie around his forehead, sits on the ball return and watches her. LACHLAN "LOCKY" DUNMORE, 18, hair gelled for an event that has ended, flips a keychain in one hand. BEATRIX SOKOLOWSKI, 17, writes in a notebook with her tongue between her teeth. COSMO ABARA, 18, who sold the most tickets to the dance and attended none of it, eats fries from a paper boat.
[beat 2] HORACE LINDQVIST, 60s, the night manager, leans on the counter with a rag over his shoulder and counts a cash drawer. HORACE: Last frame, kids. I'm closing. PHOEBE: Five more minutes, Mr. Lindqvist. HORACE: That's what you said at the last five. KENJI: Mr. Lindqvist, this is history. HORACE: It's a Tuesday. BEATRIX: It's a Tuesday in history.
[beat 3] Locky tosses his keys. Cosmo catches them in a fry. A beat. Everyone looks at the fry-wrapped keys. COSMO: I regret nothing. LOCKY: Those are my dad's keys. COSMO: Then I regret one thing.
[beat 4] Phoebe lines up the ball again. Kenji slides off the return. Beatrix closes the notebook.
[beat 5] BEATRIX: Okay. Real talk. PHOEBE: Oh no. BEATRIX: Does anyone actually know what they're doing in September? KENJI: Michigan. LOCKY: Shop. My uncle's. COSMO: Community college. Then, like, the world.
[beat 6] PHOEBE: Nothing. They look at her. PHOEBE: I don't know. Nothing's planned. That's the plan.
[beat 7] The disco ball turns. Light slides across their faces, one by one.
[beat 8] HORACE: Last call. Or I turn off lane six.
[beat 9] Phoebe takes a breath. Rolls the ball. It wobbles, wobbles, and drifts toward the pins. Nobody breathes.
[beat 10] It hits the head pin, perfect. Pins explode. STRIKE flashes on the screen in dying neon.
[beat 11] They don't cheer. They stand there, grinning, like people who have just remembered how. PHOEBE: Huh.

### SCENE s00793 | INT. MINIVAN - TOLL PLAZA - DAY
Characters: GERALD OKONJO-HART, SUNITA, GUS, PIPER, GRANDMA BERNADETTE, TOLL ATTENDANT
[beat 0] Crammed. Juice boxes. A dashboard phone holder with a call in progress.
[beat 1] GERALD OKONJO-HART, 40s, grips the wheel. SUNITA, 40s, wedges a map between her knees. In the back, GUS, 10, kicks the seat. PIPER, 14, stares at her phone.
[beat 2] GRANDMA BERNADETTE: Are you there yet? Dinner's getting cold. GERALD: We're at the toll, Mom.
[beat 3] GUS: Mom, tell Piper to stop breathing on me. PIPER: I'm not even close. SUNITA: Both of you. Quiet.
[beat 4] At the booth, a TOLL ATTENDANT, 20s, leans out. He eyes the van's tangle of wires and limbs. ATTENDANT: Four fifty.
[beat 5] Gerald pats his pocket. Pats the other. Pats the dashboard.
[beat 6] GERALD: Sunita. Wallet? SUNITA: You had it. GERALD: I gave it to you. SUNITA: You gave me nothing.
[beat 7] GRANDMA BERNADETTE: Is that a toll? Gerald, I told you to take the back road!
[beat 8] The van behind them honks. Then another.
[beat 9] Gus presses the window button. Dollar bills and napkins fly out. The attendant snatches one.
[beat 10] ATTENDANT: That's a coupon for sandwiches. GUS: Is it good? ATTENDANT: Buy one get one.
[beat 11] He waves them through. Gerald stares at him. The bar lifts.
[beat 12] GRANDMA BERNADETTE: Did you pay? GERALD: We did, Mom. Sort of.

### SCENE s00794 | INT. EMPTY COURTROOM - EVENING
Characters: ALISTAIR VAN TONGEREN, ROXANNE KIPCHOGE
[beat 0] Rows of oak benches. The jury box sits dark. A single banker's lamp glows on the bench.
[beat 1] ALISTAIR VAN TONGEREN, 50s, prosecutor, rehearses before the empty jury box, one hand on the rail. ROXANNE KIPCHOGE, 40s, defense counsel, sits in the gallery eating sunflower seeds from a paper cone. She does not interrupt.
[beat 2] ALISTAIR: Ladies and gentlemen of the jury.
[beat 3] He pauses to let them settle. No one is there. He lets them settle anyway. ALISTAIR: You will hear that my opponent's client is a good man. A family man. A man who coaches Little League.
[beat 4] Roxanne cracks a seed. ROXANNE: Twelve years. ALISTAIR: You're not allowed to heckle the dress rehearsal. ROXANNE: I'm not heckling. I'm counting.
[beat 5] He turns. Leans against the rail. ALISTAIR: You're early. ROXANNE: So are you. ALISTAIR: I'm an early man. ROXANNE: You're a nervous man.
[beat 6] Alistair straightens his tie. Looks at the empty seats. ALISTAIR: Ladies and gentlemen. The evidence will show...
[beat 7] ROXANNE: The evidence will show a boy with a wrench and a bad alibi. ALISTAIR: Roxanne. ROXANNE: Alistair.
[beat 8] Silence. She drops the cone. Stands.
[beat 9] ROXANNE: My client didn't do it. ALISTAIR: Then prove it. ROXANNE: That's your job to disprove, remember? ALISTAIR: God help us both.
[beat 10] He gathers his notes. She walks to the defense table and sits. He sits at the prosecution's. The lamp hums between them.

### SCENE s00795 | INT. FLORIST'S WALK-IN COOLER - NIGHT
Characters: DETECTIVE IMELDA STROUD, KARINA VOLKOVA
[beat 0] Buckets of lilies. Roses in sleeves. Cold fog off the compressor. A single caged bulb.
[beat 1] DETECTIVE IMELDA STROUD, 40s, gloves, trench coat, closes the door and lets it click. She leans on a shelf of carnations. KARINA VOLKOVA, 30s, florist, apron stained green, stands rigid with a pair of pruning shears in both hands.
[beat 2] IMELDA: Put those down. KARINA: No. IMELDA: Karina. KARINA: You said you were alone. IMELDA: I am alone. KARINA: You said you'd tell no one. IMELDA: I haven't.
[beat 3] Karina's eyes flick to the door. To the shears. Back.
[beat 4] KARINA: He's going to find out. IMELDA: Who? KARINA: You know who. IMELDA: Say his name.
[beat 5] Karina shakes her head. Her knuckles whiten on the handles. IMELDA: Then say what he did. KARINA: He bought the van. He bought the van, and the lilies, and the church. IMELDA: Which church? KARINA: St. Anselm's. He bought the whole front pew.
[beat 6] Imelda takes a step. Karina lifts the shears. Imelda stops.
[beat 7] IMELDA: You think I'm here to arrest you. KARINA: Aren't you? IMELDA: No. KARINA: Then why the gloves? IMELDA: It's twenty degrees in here.
[beat 8] A pause. A drip. The compressor hums. KARINA: Oh.
[beat 9] Karina lowers the shears an inch. Imelda holds out a hand, palm up. IMELDA: Give them to me. KARINA: No. IMELDA: I'll give them back. KARINA: You won't. IMELDA: I will. When this is over.
[beat 10] Karina laughs, a short bitter sound. KARINA: It's never over. IMELDA: It's over when you testify. KARINA: He has a brother. IMELDA: I know about the brother. KARINA: He has a cousin on the force. IMELDA: I know about the cousin.
[beat 11] KARINA: Do you know about the judge? Imelda goes still. IMELDA: No. KARINA: Judge Morales buys flowers every Sunday. Lilies. Always lilies.
[beat 12] Imelda exhales a long white plume. Takes off one glove. IMELDA: Thank you.
[beat 13] She extends her bare hand again. Karina studies it. The shears slip a little. KARINA: He'll know it was me. IMELDA: Not if you walk out of here with a bouquet and a smile. KARINA: I don't smile. IMELDA: You'll learn.
[beat 14] Karina drops the shears into a bucket of water. They sink. She wipes her palms on her apron, trembling.
[beat 15] KARINA: I'm so tired. IMELDA: I know. KARINA: Do you?
[beat 16] IMELDA: My sister ran a shop like this. KARINA: What happened? IMELDA: She stopped being afraid. KARINA: And? IMELDA: She sleeps now.
[beat 17] Karina lets out a ragged breath. A smile, almost. She sits on an overturned crate.
[beat 18] Imelda sits on another. Their knees nearly touch.
[beat 19] KARINA: Can I have a cigarette? IMELDA: No smoking near the lilies. KARINA: Right. Sorry. IMELDA: Take this instead.
[beat 20] She pulls a peppermint from her pocket. Karina unwraps it. Puts it in her mouth.
[beat 21] They sit like that. The fog drifts. The compressor cycles off. Silence settles, soft as pollen.
[beat 22] KARINA: Tomorrow? IMELDA: Tomorrow.
[beat 23] Karina nods once. Pulls a single white lily from a bucket. Hands it over. KARINA: For the front pew.

### SCENE s00796 | INT. GLACIER CREVASSE - ICE CHAMBER - DAY
Characters: THEO MARSH-ADEYEMI, ISOLDE KARLSEN, BO PETRAKIS, COORDINATOR NAKAGAWA
[beat 0] Blue light filtered through forty feet of ice. The walls drip in slow, patient beads. A shelf of old snow juts out above a bottomless dark. Three climbers lie wedged where the fall stopped them, their breath rising like prayers.
[beat 1] THEO MARSH-ADEYEMI, 40s, broad-shouldered, rope burn weeping through his glove, props himself against the wall. Beside him ISOLDE KARLSEN, 30s, wiry, a headlamp dangling from her wrist, ties a sling from a torn jacket. A few feet farther BO PETRAKIS, 19, the youngest, sits with knees to chest and stares at his boots as if they might be someone else's. An old handheld radio lies in Isolde's lap, wrapped in a glove for warmth.
[beat 2] ISOLDE: Hold still, Theo. THEO: I am still. ISOLDE: You're shaking. THEO: That's the cold. ISOLDE: That's your shoulder.
[beat 3] She ties the knot. He hisses. The ice around them creaks softly.
[beat 4] Bo lifts his head. BO: Is it supposed to do that? THEO: The ice? It sings. It means it's alive. BO: I don't like it. THEO: Nobody does.
[beat 5] Isolde unwraps the radio, thumbs the switch. A hiss of static, thin as a thread. ISOLDE: Rescue, Rescue, this is Karlsen. Do you copy? Static. She waits. The ice drips. ISOLDE: Rescue, Rescue. Three alive. Repeat, three alive.
[beat 6] A long hiss. Then, faint: COORDINATOR NAKAGAWA: Karlsen, Nakagawa. Read you weak. Say position.
[beat 7] Isolde closes her eyes, one second, as though she has been holding her breath since morning. ISOLDE: Crevasse, east of the col. Approximately forty feet down. One injured, shoulder.
[beat 8] NAKAGAWA: Copy. Helicopter is grounded. Weather. Ground team is four hours out.
[beat 9] Theo says nothing. Bo's boots go suddenly very interesting. ISOLDE: Four hours. NAKAGAWA: Conserve heat. Conserve battery. Do not sleep. ISOLDE: Understood. NAKAGAWA: You'll be fine, Isolde. I mean that.
[beat 10] She smiles, the kind of smile that has no use for the words. ISOLDE: We'll be here.
[beat 11] She turns the radio off. Sets it back in the glove. Slides over to Bo, shoulder to shoulder. BO: Four hours. ISOLDE: That's nothing. BO: It feels like a year.
[beat 12] ISOLDE: Then tell me a story. BO: I don't have one. THEO: Everyone has one. BO: Mine's boring. THEO: Good. Boring is what we want.
[beat 13] Bo almost laughs. The sound dies in his throat and becomes a small cough.
[beat 14] BO: When I was eight, my dog got lost in a snowstorm. ISOLDE: Did you find her? BO: He came home on his own, three days later. Covered in ice. THEO: Smart dog. BO: Stubborn.
[beat 15] The ice sings again, softer. Theo leans his head back.
[beat 16] Overhead, a thread of light from the crevasse mouth slides across the wall, slow as a minute hand, and begins to fade.

### SCENE s00797 | INT. UNDERWATER HOCKEY POOL - NIGHT
Characters: COACH BEVERLY STANISLAUS, RUSLAN VOLODIN, LOTTIE FAIRBANKS, DEWAYNE PICKETT, PHAM
[beat 0] Chlorine haze. A tiled deck. Six lanes taped off with orange cones. Snorkels and fins in rows along the wall.
[beat 1] COACH BEVERLY STANISLAUS, 50s, whistle between her teeth, paces the deck. RUSLAN VOLODIN, 20s, the team captain, sits on the edge with his feet in the water, taping his stick. LOTTIE FAIRBANKS, 19, adjusts her mask, while DEWAYNE PICKETT, 22, the goalie, bounces on his toes and glares at the scoreboard. On the far side, MR. PHAM, 40s, the referee, in a black-and-white striped rash guard, checks his watch and says nothing.
[beat 2] Beverly stops pacing. She blows the whistle once. Ruslan looks up. Lottie flinches. Dewayne turns from the board and starts toward her, but she holds up a hand and he stops.
[beat 3] BEVERLY: Four seconds on the clock. Down one. Who wants it? RUSLAN: I do. DEWAYNE: You always do. RUSLAN: Somebody has to. LOTTIE: I'll take it, Coach. BEVERLY: You'll take the pass. LOTTIE: That's what I said. DEWAYNE: That's not what you said.
[beat 4] Lottie's mask snaps down. Ruslan rises, water streaming off his legs. RUSLAN: Say it again, Dewayne. DEWAYNE: I said it was a bad idea. Four seconds, one shot, all on you. RUSLAN: Then block better. DEWAYNE: I'm a goalie, not a miracle.
[beat 5] Beverly steps between them. Pham finally blows his own whistle, a thin shriek. Everyone turns. PHAM: Gentlemen. Ladies. Positions.
[beat 6] They slip into the water in single file, silent. Beverly stands on the deck, hands on her hips, watching the surface close over their heads.
[beat 7] Under the lights, the pool goes still. Then a ripple. Then a roar of bubbles.

### SCENE s00798 | INT. PLANETARIUM DOME - NIGHT
Characters: ARCHIE SOLOMONS, BILLIE CROSS
[beat 0] Empty rows of recliners. The ceiling swims with painted stars. A projector the size of a dumbbell hums at the center.
[beat 1] ARCHIE SOLOMONS, 40s, black turtleneck, wire cutters, hangs upside down from a catwalk and works on a panel. BILLIE CROSS, 30s, bandana, pushes a cart of equipment between the seats.
[beat 2] ARCHIE: Billie. Light. BILLIE: Archie, we're in a planetarium. ARCHIE: So? BILLIE: So it's a room full of light. ARCHIE: Not that kind. Flashlight.
[beat 3] She tosses one up. He catches it with his teeth. BILLIE: Gross. ARCHIE: Efficient.
[beat 4] He yanks a wire. The stars flicker. The dome goes dark for an instant, then returns as a different sky.
[beat 5] BILLIE: That's not our constellation. ARCHIE: It's Orion's cousin. BILLIE: Orion doesn't have cousins. ARCHIE: Everybody has cousins, Billie.
[beat 6] She rolls the cart under the projector. Pops its lid. Inside, a velvet-lined case. Inside the case: a glittering meteorite, black as oil.
[beat 7] BILLIE: There she is. ARCHIE: Don't breathe on it. BILLIE: I'm not breathing. ARCHIE: You're breathing loudly.
[beat 8] She holds her breath. Slides the rock into a lead bag.
[beat 9] The dome shivers. Music swells. The stars begin to wheel on a timer.
[beat 10] They freeze. Archie drops from the catwalk. Lands in a crouch. ARCHIE: Out. Now.
[beat 11] BILLIE: Archie. ARCHIE: What? BILLIE: That was only the nine o'clock show on a timer. ARCHIE: Oh.

### SCENE s00799 | INT. MERIDIAN DYNAMICS - "SYNERGY POD" - DAY
Characters: PRISCILLA NWANKWO, GARETH BLOUNT-SATO
[beat 0] A windowless closet with two beanbags, a motivational poster of a rowing team, and a whiteboard that reads "BRAINSTORM!!" in a hand that gave up.
[beat 1] PRISCILLA NWANKWO, 30s, lanyard with seven badges, sits cross-legged on a beanbag with a laptop balanced on her knees. She types, deletes, types. A sticky note on her forehead reads "SYNERGY."
[beat 2] The door opens. GARETH BLOUNT-SATO, 40s, vest over a tie, enters with a clipboard and a smile that has never been challenged. He doesn't knock. He never has.
[beat 3] GARETH: Priscilla! How's the pod? PRISCILLA: Small. GARETH: Cozy! Love it. I'm doing the quarterly culture walk. Are you feeling aligned? PRISCILLA: I'm feeling beanbagged.
[beat 4] Gareth laughs a hair too loud. He lowers himself onto the second beanbag, which sighs under him and lowers him farther than he intended. He flails, recovers, writes something on the clipboard, then holds it up so she can see: a smiley face with a frown on its forehead.
[beat 5] GARETH: Quick pulse check. Scale of one to ten, how much do you love Meridian? PRISCILLA: Is this for HR? GARETH: It's for me. PRISCILLA: Seven. GARETH: Seven is fantastic. Seven means we have room to grow.
[beat 6] She slides her laptop around. On it, a spreadsheet: a column of resignation dates, hers the first. PRISCILLA: It's a two on Friday. GARETH: Interesting. Interesting. Interesting.
[beat 7] He peels off the sticky note she's been wearing and sticks it to the clipboard. Stands. The beanbag releases him with a soft sound.
[beat 8] GARETH: Let's circle back Monday. PRISCILLA: I'll be at the lake.

### SCENE s00800 | INT. PÂTISSERIE DU MATIN - BACK ROOM - PRE-DAWN
Characters: LEONID TARASOV, CASPIAN ROWE
[beat 0] Flour on every surface. Cooling racks. A walk-in oven the size of a closet. In the corner, a three-tier wedding cake on a steel cart.
[beat 1] LEONID TARASOV, 40s, ski mask pushed up on his forehead, wedges a crowbar under the cake's base. CASPIAN ROWE, 30s, glasses, gloves, stands guard at the door with a cold coffee.
[beat 2] CASPIAN: Leo. It's a cake. LEONID: It's a safe. CASPIAN: It's a cake with a safe in it. LEONID: Which makes it a safe.
[beat 3] He pries. The base creaks. A hidden panel pops. Inside: a small steel door, a keypad.
[beat 4] CASPIAN: Four digits. LEONID: Try his birthday. CASPIAN: He's seventy. LEONID: Try it.
[beat 5] Caspian punches in numbers. Nothing. He tries again. A red light flashes. A tiny alarm warbles inside the cake.
[beat 6] They freeze. Leonid grabs the cake. Caspian grabs Leonid. They topple into the cart, tier two sliding off and splattering across the floor in a wet pink avalanche.
[beat 7] The alarm dies. Both men lie in frosting. LEONID: You did that. CASPIAN: You pushed me! LEONID: You grabbed me!
[beat 8] They scramble up, slipping. Leonid lunges for the keypad. Caspian shoves him aside, jabs at the buttons.
[beat 9] The light turns green. The little door swings open.
[beat 10] Inside: a single plastic bag, a scribbled note. Caspian reads it aloud. CASPIAN: "Nice try. -Mom." They stare at each other. Frosting drips from both their chins.

### SCENE s00801 | EXT. HOT-AIR BALLOON - THREE THOUSAND FEET - DAWN
Characters: PERPETUA VANCE-OLUWOLE, ARABELLA HOLT, MURDOCH ABERNETHY, FITZ
[beat 0] A wicker basket the size of a small closet swings under a great striped envelope of orange and teal. Fields below are a quilt of green. The burner roars, rests, roars again.
[beat 1] PERPETUA VANCE-OLUWOLE, 50s, pilot, leather cap and a scarf the length of a river, works the valve and looks at no one. Beside her, ARABELLA HOLT, 40s, passenger in a sequined jacket, clutches the rim with white knuckles. At the far side MURDOCH ABERNETHY, 60s, her father-in-law, dozes upright against a sandbag, and FITZ, 20s, deckhand, practically a vine, clings to a rigging line with a grin that will not stay on.
[beat 2] PERPETUA: We're at altitude, folks. Enjoy the view.
[beat 3] Arabella lets out a very small scream. Fitz applauds.
[beat 4] MURDOCH: Is it over? ARABELLA: No, Murdoch. MURDOCH: Then why am I awake?
[beat 5] PERPETUA: Three thousand feet, two idiots, and a prayer. Arabella glares at her. Perpetua fires the burner with a cheerful roar. ARABELLA: Excuse me? PERPETUA: Nothing.
[beat 6] FITZ: You can see your house from here! MURDOCH: I sold my house. FITZ: You can see the new owner's house! Murdoch peers over the rim. Squints. Nods slowly. MURDOCH: He mowed the lawn badly.
[beat 7] ARABELLA: Can we land now? Please? PERPETUA: Landing's a negotiation, dear. ARABELLA: With whom? PERPETUA: The wind.
[beat 8] A gust shoves the basket sideways. Arabella shrieks and drops to her knees. Murdoch grabs her sequined shoulder, delighted. Fitz whoops. Perpetua, unbothered, adjusts the valve.

### SCENE s00802 | INT. GOLDEN TIGER KARAOKE - PRIVATE ROOM 4 - NIGHT
Characters: MINH-ANH LE, DUKE FONTENOT, TANYA FROST, INES CALDER, MAN IN LEATHER COAT, LEATHER COAT, CASIMIR
[beat 0] Velvet booths. A neon tiger glows on the wall. A screen shows lyrics to a song nobody is singing. On the table: a bucket of ice, a tray of cheap whiskey, and a leather briefcase.
[beat 1] MINH-ANH LE, 30s, black dress, sits very still and watches the door. DUKE FONTENOT, 50s, linen jacket, rotates a microphone in his hands like a cigar. TANYA FROST, 40s, beside him, shuffles a deck of cards without looking at them. INES CALDERÓN, 20s, the room's waitress, hovers with a tray and a wary smile.
[beat 2] A MAN IN A LEATHER COAT, 50s, comes in without knocking. He shuts the door gently behind him. MAN IN LEATHER COAT: Evening, all. DUKE: You're early. MAN IN LEATHER COAT: You're late.
[beat 3] He drops into the booth. Takes a glass off Ines's tray and drinks it in one pull. She lowers the tray and backs toward the door.
[beat 4] TANYA: Stay, honey. INES: I should refill the ice. TANYA: We have ice.
[beat 5] Ines freezes. Minh-Anh doesn't blink.
[beat 6] MINH-ANH: So. The briefcase. MAN IN LEATHER COAT: What about it? MINH-ANH: Open it.
[beat 7] He doesn't move. Duke sets down the microphone. DUKE: Casimir. CASIMIR: There it is. DUKE: Don't be dramatic. CASIMIR: You said my name like a bad word. DUKE: It is a bad word, Casimir.
[beat 8] Tanya's cards stop. Minh-Anh's hand drifts to her purse.
[beat 9] CASIMIR: Ines, sweetheart, put on a song. INES: Sir? CASIMIR: Anything. Something loud. She taps the screen. A power ballad erupts, drums and strings.
[beat 10] Casimir stands. Reaches into his coat. Duke lunges. Minh-Anh rolls over the table. Tanya slams the briefcase shut. In three seconds the booth is a knot of elbows, glass shattering, whiskey flying.
[beat 11] The song soars on.
[beat 12] A pistol clatters to the floor. Everybody stops. Everybody looks at it. INES: That's not my ice.

### SCENE s00803 | EXT. TIDAL-LOCKED STATION - TERMINATOR RAIL - ETERNAL DUSK
Characters: YUSUF BARANOWSKI, FREYA ODUYA, MARCELINE VOSS, DAGMAR NYONI
[beat 0] A single rail hangs between night and day. On one horizon the sun is a thin white edge. On the other, stars. The station crawls along the track, a lit tube no wider than a bus.
[beat 1] Inside the observation cab, four figures strap into acceleration couches. Outside, nothing moves.
[beat 2] YUSUF BARANOWSKI, 50s, grey-haired, runs a gloved finger along a dead console. He mutters a number and moves on. FREYA ODUYA, 30s, beside him, tightens a harness strap, loosens it again, tightens it. She stops when he looks. MARCELINE VOSS, 20s, near the porthole, presses her forehead to the glass. Her breath fogs it. DAGMAR NYONI, 40s, at the rear, checks the oxygen gauge for the fourth time.
[beat 3] The station shudders. A thud rolls through the floor. They all grab for something.
[beat 4] He reaches across and clamps her hand on the strap. She nods. They both stare at the porthole as the rail ahead begins to buckle.
[beat 5] She curses. He swallows. They share a glance, nothing in it.
[beat 6] YUSUF: Rail's flexing. FREYA: Expected. MARCELINE: It's never flexed that much. DAGMAR: It's within tolerance.
[beat 7] The cab rocks. Marceline's knuckles whiten on the rim. Behind her, Dagmar unstraps, crosses, puts both hands on the girl's shoulders. Marceline doesn't look back.
[beat 8] The rail steadies. The glow along the horizon holds.
[beat 9] Yusuf lets his breath out. Freya gives a short, tight laugh. The four of them sit in the hum of the engines, watching the sun not rise.

### SCENE s00804 | INT. AVALANCHE RESCUE HUT - NIGHT
Characters: INGRID LJUNGBERG, ALEX, SOTOMAYOR, RANGER PALOMAKI
[beat 0] One room. A woodstove ticking. Bunks bolted to the wall. Snow whispers on the shutters.
[beat 1] INGRID LJUNGBERG, 30s, wool hat, sits cross-legged by the stove feeding it splinters. ALEJANDRO "ALEX" SOTOMAYOR, 20s, sleeping bag to his chin, sips tea and watches her. A radio on the shelf murmurs low static.
[beat 2] ALEX: It's quiet. INGRID: Good quiet. ALEX: Is there another kind? INGRID: Yes.
[beat 3] The stove pops. Alex smiles faintly. Ingrid tosses another splinter.
[beat 4] INGRID: Try to sleep. ALEX: I'm too warm. INGRID: That's the point of the hut.
[beat 5] He closes his eyes. Opens one.
[beat 6] ALEX: Do you ever get used to it? INGRID: To what? ALEX: The mountain. How it just... waits. Ingrid considers. The wind outside drops a moment. INGRID: No. ALEX: Me neither.
[beat 7] He lets his head sink into the pillow. The radio crackles. Both of them look at it.
[beat 8] RANGER PALOMAKI: Hut two, hut two, this is Ranger Palomaki. Do you copy? Ingrid crosses and picks it up. INGRID: Palomaki, Ljungberg. Go ahead. PALOMAKI: Ingrid. How many in the hut? INGRID: Two. Me and the rookie.
[beat 9] PALOMAKI: Listen to me carefully. The slope above you let go twenty minutes ago.
[beat 10] Ingrid does not move. Alex sits up. INGRID: Say again. PALOMAKI: The slide stopped thirty feet short of the hut. Don't open the door.
[beat 11] A deep groan from above. Dust sifts from the rafters. The stove flame leans, then stands upright again.
[beat 12] Alex's eyes find hers. She puts one finger to her lips.

### SCENE s00805 | INT. NIGHT FERRY - CAR DECK - NIGHT
Characters: HOLLIS BRANDVOLD, ZORAIDA KEMP
[beat 0] Rows of parked cars lashed down with chains. Engine hum through the steel floor. Fog presses against the open bow, and somewhere out in the dark a horn answers the ship's horn.
[beat 1] HOLLIS BRANDVOLD, 40s, rumpled raincoat, a badge on his belt, walks the aisle. He stops beside a white sedan with its windows fogged from inside. He taps the glass.
[beat 2] The window lowers an inch. ZORAIDA KEMP, 30s, a scarf over her mouth, looks out with wide dark eyes.
[beat 3] HOLLIS: Ma'am. This deck should be empty. ZORAIDA: I'm waiting for my husband. HOLLIS: He's in the car? ZORAIDA: He's on the upper deck. HOLLIS: Then why are you down here?
[beat 4] She doesn't answer. Hollis steps back, hand drifting toward his coat. She opens the door and slides out, slowly, palms where he can see them. The scarf drops from her face.
[beat 5] HOLLIS: You're the Kemp woman. From the bank. ZORAIDA: Zoraida. HOLLIS: You were supposed to be in Rotterdam. ZORAIDA: I changed my mind. HOLLIS: That's not how it works. ZORAIDA: It's exactly how it works. That's why you're standing here.
[beat 6] She nods at the trunk of the sedan. He follows her glance, then fixes on her again. HOLLIS: What's in the trunk? ZORAIDA: The reason you were sent. HOLLIS: Open it. ZORAIDA: Detective, with respect, it's not that kind of trunk.
[beat 7] He draws the pistol from his coat and aims it at her chest. She doesn't flinch. Fog drifts between them. Behind him, a chain rattles in a swell, and he doesn't look.
[beat 8] HOLLIS: Open it. ZORAIDA: You first. HOLLIS: Excuse me?
[beat 9] ZORAIDA: You've been following me since Copenhagen. You've had a dozen chances. You're not here to arrest me. HOLLIS: I'm here because I was told to be. ZORAIDA: By whom? HOLLIS: That's not your business. ZORAIDA: It's exactly my business. It's the only business. HOLLIS: Zoraida. ZORAIDA: Say it, Hollis. Who sent you?
[beat 10] His jaw works. The gun wavers a fraction.
[beat 11] HOLLIS: Your husband. ZORAIDA: There it is. HOLLIS: He said you'd run. ZORAIDA: He said wrong.
[beat 12] She reaches into the sedan, pulls out a manila envelope, and tosses it at his feet. It lands with a slap. He stares at it. ZORAIDA: That's every account he's moved in six years. Every name. Every number. HOLLIS: Why give it to me? ZORAIDA: Because you're the first one who didn't kill me when he had the chance.
[beat 13] Hollis bends, slowly, without taking the gun off her. Picks up the envelope. Weighs it.
[beat 14] HOLLIS: If I take this, I'm a dead man. ZORAIDA: If you don't, we both are.
[beat 15] A long moment. Then, overhead, a steward's footsteps on the grating. A cart rolls. A voice hums.
[beat 16] Hollis lowers the pistol. Tucks the envelope in his coat. Zoraida lets her breath out.
[beat 17] HOLLIS: Get in the car. ZORAIDA: It's my car. HOLLIS: I'm driving.
[beat 18] The ship's horn blasts. The deck shivers. Hollis opens the driver's door and climbs in.

### SCENE s00806 | INT. CASSETTE ARCHIVE - BASEMENT OFFICE - NIGHT
Characters: EVANGELINE ROTHCHILD-ADU
[beat 0] A low room of grey metal shelves holding thousands of labeled tapes. A bare bulb swings slightly, though no wind reaches down here. Dust and old magnetic oxide. A reel-to-reel and a cassette deck sit side by side on a cluttered desk beneath a corkboard of photographs strung together with red thread.
[beat 1] EVANGELINE ROTHCHILD-ADU, 50s, weary detective in a green cardigan, sits at the desk. Her hair is pinned with a pencil. She holds a microphone close to her lips, as though it were a confidant.
[beat 2] She presses record. EVANGELINE: Case file nine-one-four. The Hargreave matter. Evening, third of November.
[beat 3] She lets go of the button. Picks up a photograph. Puts it down. Presses again. EVANGELINE: They told me the library caught fire by accident. I have read eleven reports that say so. Not one of them mentions the smell of kerosene, which three witnesses described independently.
[beat 4] She taps a thread on the corkboard. EVANGELINE: The librarian, Mr. Quillfeather, vanished that night. His wife says he never returned. His employer says he resigned a week earlier. Both cannot be true.
[beat 5] She rewinds the cassette. Plays it back. EVANGELINE: ...three witnesses described independently...
[beat 6] She stops it. Writes on a pad.
[beat 7] EVANGELINE: I found his key in the ash. A small brass key. It opens a locker in the basement of this very building. I've checked every locker. There isn't one.
[beat 8] She leans back. Rubs her eyes. EVANGELINE: Unless the basement I've been searching is the wrong basement.
[beat 9] From somewhere in the stacks, a tape clicks and begins to turn.
[beat 10] She goes still. Slowly lowers the microphone.
[beat 11] A voice fills the room from a distant shelf, on tape, calm and a little amused. It is her own. EVANGELINE: If you're hearing this, Evangeline, you've finally found the right basement.
[beat 12] She stands. The chair rolls back into a shelf, scattering tapes. EVANGELINE: That's my voice. EVANGELINE: Third shelf on your left. Behind the tapes labeled Nineteen Seventy-Two.
[beat 13] Evangeline crosses. Her heels click. She pulls out box after box until a small brass-hinged door appears in the wall. She takes the key from her cardigan pocket. Her hand shakes. She turns it.
[beat 14] The door opens. Inside, nothing but a single reel marked: PLAY LAST.

### SCENE s00807 | INT. AIR DUCT - ABOVE VAULT CORRIDOR - NIGHT
Characters: ANDREJ MOKOENA
[beat 0] Cramped aluminum. A pencil flashlight in his teeth. Dust motes. The distant hum of a security camera swiveling below.
[beat 1] ANDREJ MOKOENA, 30s, crawls on his elbows with a coil of rope on his back and a small recorder strapped to his sleeve. He stops at a vent grate. Looks down at a laser grid.
[beat 2] He spits the flashlight into his hand. Whispers. ANDREJ: Okay. Okay. Rehearsal one.
[beat 3] He taps the recorder. Plays it. ANDREJ: Step one. Rope on the vent bolt. Step two. Lower down, slow, between beam three and beam four. Step three. Don't sneeze.
[beat 4] He winces. ANDREJ: I'm going to sneeze. He pinches his nose. Waits. It passes.
[beat 5] He taps the recorder again. ANDREJ: Step four. The safe's a Hargrove. Combination is the date of the Armistice, flipped. Eleven eleven, nineteen eighteen, so one-one, one-one, one-eight, one-nine.
[beat 6] ANDREJ: That's seven numbers. Hargrove's six.
[beat 7] He frowns. Rewinds. ANDREJ: ...one-one, one-one, one-eight, one-nine... ANDREJ: Drop the last nine. One-one, one-one, one-eight.
[beat 8] He whispers it three times, like a spell, then taps the recorder to start a new take.
[beat 9] ANDREJ: Rehearsal two. If I die in this duct, tell my mother I was a pastry chef.
[beat 10] A click below. A faint red light sweeps across the vent. He freezes. The light passes.
[beat 11] ANDREJ: Step one. He slides the first bolt loose.

### SCENE s00808 | INT. SPEEDWAY GO-KART TRACK - PIT LANE - AFTERNOON
Characters: MILO GALLAGHER-SINGH, DOMINIC TREJO, PINKY, DESAI
[beat 0] Tires stacked like donuts. The smell of two-stroke. A hand-lettered sign: "NO RUNNING. NO CRYING. NO REFUNDS."
[beat 1] MILO GALLAGHER-SINGH, 15, cracked helmet, oil on his cheek, kneels by a small yellow kart. DOMINIC TREJO, 15, in a stained racing suit two sizes big, leans on the fence and chews a straw. PRIYANKA "PINKY" DESAI, 14, clipboard, stopwatch around her neck, stands between them.
[beat 2] PINKY: Four minutes to the heat.
[beat 3] MILO: It's the carburetor. DOMINIC: It's the driver. MILO: It is not the driver. PINKY: Dom, he's got a point. DOMINIC: He always has a point, Pinky. That's his whole problem.
[beat 4] MILO: I can fix it. DOMINIC: You said that at Nationals. MILO: That was the tire! PINKY: It was the tire. DOMINIC: Whose tire? MILO: Yours!
[beat 5] PINKY: Three minutes.
[beat 6] Milo slams the wrench down. Dominic pushes off the fence. They square up, nose to nose, helmet to helmet.
[beat 7] DOMINIC: Say it again. MILO: Say what? DOMINIC: That it's me. MILO: It's the carburetor.
[beat 8] PINKY: Boys. Boys. DOMINIC: Pinky, stay out of it. PINKY: I'm the pit boss. MILO: She's the pit boss. DOMINIC: She's fourteen! PINKY: I'm fourteen and a half, and I'm timing you.
[beat 9] A horn blares from the track. Everyone flinches. Milo grabs the wrench. Dominic grabs the steering wheel. They both pull the kart in opposite directions.
[beat 10] PINKY: That's it. I'm calling my brother.
[beat 11] She raises the stopwatch. Presses it. The chaos holds.
[beat 12] The engine coughs, sputters, and catches. MILO: Oh. DOMINIC: Oh.
[beat 13] They stare at the roaring kart. Dominic slides in. Milo hands him a glove. DOMINIC: Thanks. MILO: Don't mention it. PINKY: Go!

### SCENE s00809 | INT. NIGHT BUS 47 - MOVING - NIGHT
Characters: ELDON MCPHAIL, SORAYA KHALILI, BENNETT OLUMIDE
[beat 0] Near-empty. Overhead lights hum. Rain drags sideways across the windows. Wipers tick.
[beat 1] ELDON MCPHAIL, 50s, driver, hat low, one hand on the wheel and the other around a cold thermos. In the mirror: two passengers.
[beat 2] SORAYA KHALILI, 30s, backpack on her lap, sits halfway back, glued to her phone. Behind her, BENNETT OLUMIDE, 40s, in a damp raincoat, stares out at the passing dark.
[beat 3] Eldon clears his throat. ELDON: Next stop, Harbor and Fifth. Mind the gap. Nobody reacts. ELDON: Nobody ever minds the gap.
[beat 4] Soraya looks up. SORAYA: Is this the 47? ELDON: It's the 47. SORAYA: It's not going to Eastgate? ELDON: Not tonight. SORAYA: Since when? ELDON: Since the flood.
[beat 5] Soraya sighs. Pockets her phone.
[beat 6] Bennett turns his head, slowly. BENNETT: You're the third bus tonight. ELDON: Third what? BENNETT: Third driver who didn't say where we're going. ELDON: I said Harbor and Fifth. BENNETT: And after that? ELDON: After that, nothing. Last stop.
[beat 7] Bennett nods, slowly, as though it explains something he's been wondering about.
[beat 8] SORAYA: Can you let me off before Harbor? ELDON: Not an official stop. SORAYA: I'll pay extra. ELDON: It's not about the fare, miss. SORAYA: Then what is it about? ELDON: Rules. SORAYA: Great.
[beat 9] The bus slows. Brakes sigh. The doors fold open to rain. ELDON: Harbor and Fifth.
[beat 10] Soraya stands. Bennett doesn't. SORAYA: Are you coming? BENNETT: No. SORAYA: This is your stop.
[beat 11] BENNETT: It's his stop. He nods at Eldon. ELDON: Everybody out, please.
[beat 12] Soraya freezes. Looks at Bennett. At Eldon. At the empty seats behind them. SORAYA: Who is he talking to? BENNETT: The ones who stayed.
[beat 13] Eldon closes the doors. The wipers resume. The bus pulls out, carrying all three of them into the dark.

### SCENE s00810 | INT. DRAGON DENTIST'S CAVERN - DAY
Characters: HOLLYHOCK THISTLEWICK, DRAGON, PIP, GRUB, SIR ALARIC FENWICK-DALE, VESKARATH
[beat 0] A great cavern hung with brass lamps. A chair carved from a single glacial boulder. Around it, racks of tongs and chisels the size of oars. A bubbling cauldron of mouthwash.
[beat 1] DR. HOLLYHOCK THISTLEWICK, 200 and spry, tiny, a mirror-headed lamp strapped to her brow, stands on a ladder, peering into a mouth the size of a barn door. A DRAGON lies in the chair, jaws wide, one golden eye rolling. PIP, a pixie nurse no bigger than a thimble, buzzes at the dentist's ear with a tray of silver picks. GRUB, a goblin receptionist, leans in the doorway chewing a pencil. SIR ALARIC FENWICK-DALE, a very old knight, sits in the waiting alcove with his helmet in his lap.
[beat 2] HOLLYHOCK: Wider, please. DRAGON: Wider than this? HOLLYHOCK: I'm afraid so. DRAGON: You said that last time. HOLLYHOCK: And the time before. Wider.
[beat 3] He strains. The cavern shudders. A stalactite falls and bounces off Sir Alaric's helmet. SIR ALARIC: Ow. GRUB: Sorry, Sir Alaric. Occupational hazard.
[beat 4] HOLLYHOCK: Pip, the number seven pick. PIP: Coming, Doctor.
[beat 5] Hollyhock probes. The dragon's tail thumps once. Dust rains from the ceiling.
[beat 6] HOLLYHOCK: Your gum is inflamed, Veskarath. VESKARATH: It's been like that for three centuries. HOLLYHOCK: It's gingivitis. VESKARATH: It's a lifestyle. HOLLYHOCK: You've eaten a lot of knights. VESKARATH: Only the crunchy ones.
[beat 7] Sir Alaric clears his throat. Rises from the alcove, helmet under one arm. SIR ALARIC: I was told this would be a quick consultation. HOLLYHOCK: It always is, Sir Alaric. SIR ALARIC: It's been four hours. GRUB: Time moves differently in a cave. VESKARATH: Is that supposed to be a joke? GRUB: It's a policy.
[beat 8] Hollyhock sighs. Climbs down the ladder, pats the dragon's lip, and picks up a small mirror. HOLLYHOCK: Rinse and spit. Then floss. VESKARATH: Floss what? HOLLYHOCK: You'll do.

### SCENE s00811 | INT. DRIVE-THRU WEDDING CHAPEL - BOOTH - NIGHT
Characters: VOWS, FLOWERS, PATSY LEUNG-ARCHER, WENDELL ASHFORD-LOPEZ
[beat 0] A glass booth the size of a phone box. Plastic flowers. A speaker, a menu board with "VOWS - $29" and "FLOWERS - $9," and a tiny neon cross.
[beat 1] PATSY LEUNG-ARCHER, 20s, sequined vest and veil, sits on a stool. She wipes down the counter in slow circles. The only sound is the neon's buzz.
[beat 2] Headlights sweep across her face. A car idles outside. A window rolls down. She slides the glass open and leans out.
[beat 3] PATSY: Welcome to Holy Smokes Chapel. Would you like to marry someone tonight?
[beat 4] Nobody answers. Just the engine. PATSY: Sir? Ma'am?
[beat 5] A hand appears. In it, a gun.
[beat 6] Patsy freezes. Her lips move without sound.
[beat 7] WENDELL ASHFORD-LOPEZ, 40s, pulls his head out of the car and steps up to the booth. Leather jacket, bloodshot eyes. The gun stays on her.
[beat 8] WENDELL: Open the register. PATSY: We don't have a register. We have a tip jar. WENDELL: Then open the tip jar. PATSY: It's a mason jar. WENDELL: Open it!
[beat 9] She does, hands shaking. A few crumpled bills. A rubber band. A condolence card. WENDELL: That's all? PATSY: People mostly pay with cards.
[beat 10] He stares into the jar. The gun lowers. He laughs, ragged.
[beat 11] WENDELL: I've been planning this for a month. PATSY: I can marry you. Twenty-nine dollars. WENDELL: To who? PATSY: Anyone you like. I'm very flexible.
[beat 12] He pockets the gun. Takes out a crumpled twenty and a ten. Pushes them through. WENDELL: Keep the dollar. PATSY: Congratulations.
[beat 13] She adjusts her veil and begins the vows.

### SCENE s00812 | INT. VICTORIAN BATHHOUSE - STEAM ROOM - AFTERNOON, 1887
Characters: LADY PHILIPPA ACKROYD-VANE, MARGUERITE TOBIN, EZEKIEL FARNSWORTH, OLIVE PETTIGREW, ARTHUR BELLWETHER
[beat 0] Marble benches slick with condensation. Pipes knock somewhere in the walls. Gas lamps burn in fogged globes.
[beat 1] LADY PHILIPPA ACKROYD-VANE, 50s, wrapped in white linen, reclines on a bench with her eyes shut. At her side sits her maid, MARGUERITE TOBIN, 20s, folding towels in her lap. Across the room DR. EZEKIEL FARNSWORTH, 60s, in a towel and a monocle, mops his brow with a handkerchief, and beside him MRS. OLIVE PETTIGREW, 40s, the bathhouse matron, polishes a brass tap. In the doorway stands ARTHUR BELLWETHER, 30s, a young reporter in a damp suit, notebook already out.
[beat 2] She opens one eye. He steps forward. She raises a hand and he stops.
[beat 3] PHILIPPA: Mr. Bellwether. You may not write in here. ARTHUR: Lady Ackroyd-Vane, the public wishes to know. PHILIPPA: The public wishes to know a great many things.
[beat 4] ARTHUR: Is it true you sold the estate? PHILIPPA: That is a rumor. ARTHUR: Is it a true rumor?
[beat 5] PHILIPPA: Dr. Farnsworth, how many rumors are true? FARNSWORTH: Statistically, madam, one in nine. PHILIPPA: There. One in nine. ARTHUR: That is not an answer. PHILIPPA: It is a tolerable approximation.
[beat 6] The pipes knock. Marguerite folds another towel. Olive polishes the tap, hard.
[beat 7] OLIVE: Beg pardon, Lady Philippa, but the gentleman's dripping on my marble. ARTHUR: I'm terribly sorry, madam. OLIVE: Then take your notebook outside. ARTHUR: Only if Lady Philippa grants an interview.
[beat 8] PHILIPPA: Marguerite, what do you think? MARGUERITE: I think the steam is good for the lungs, my lady. PHILIPPA: A sensible girl. FARNSWORTH: She's not wrong. Though I'd add that excessive steam is dangerous to ink. ARTHUR: I shall be careful. OLIVE: You'll be dry, or you'll be gone. ARTHUR: Very well.
[beat 9] He tucks the notebook inside his jacket. Philippa studies him through the steam for a long moment.
[beat 10] PHILIPPA: The estate is sold. The buyer is a railway man. ARTHUR: May I print that? PHILIPPA: You may print that I am in excellent health.
[beat 11] He bows. Olive points at the door. He goes. The steam closes in again. Marguerite, quietly, begins to hum.

### SCENE s00813 | INT. FAMILY LIVING ROOM - UPRIGHT PIANO - EVENING
Characters: ARNOLD TEMPLETON-WU, JOSEFINA
[beat 0] A dim room. A lamp with a yellowed shade. A walnut upright against the wall, its front panel off, hammers exposed like a ribcage.
[beat 1] ARNOLD TEMPLETON-WU, 60s, piano tuner, kneels beside it with a tuning lever. His daughter JOSEFINA, 30s, leans in the doorway, coat still on.
[beat 2] She doesn't come in.
[beat 3] He strikes a key. Listens. Adjusts a pin. Strikes again.
[beat 4] JOSEFINA: You didn't call. ARNOLD: I wrote. JOSEFINA: A postcard isn't a call. ARNOLD: It's quicker. JOSEFINA: It took six weeks.
[beat 5] He strikes a key. Doesn't answer.
[beat 6] JOSEFINA: Mom's piano. ARNOLD: She'd want it tuned. JOSEFINA: She'd want a lot of things.
[beat 7] He pauses. Rests the lever on the strings.
[beat 8] ARNOLD: Do you want to sit? JOSEFINA: I'm fine. ARNOLD: There's tea. JOSEFINA: I'm fine.
[beat 9] He nods. Resumes. A key. A pin. A key.
[beat 10] She finally crosses the room. Drops her bag. Perches on the arm of the sofa.
[beat 11] JOSEFINA: How long have you been working on it? ARNOLD: Three days. JOSEFINA: That's a lot for a tuning. ARNOLD: It's an old instrument.
[beat 12] JOSEFINA: Dad. ARNOLD: Hm. JOSEFINA: You don't have to be here alone. ARNOLD: I'm not alone. I've got the piano. JOSEFINA: That's the saddest thing you've said all year.
[beat 13] He strikes a key. A beat. Another.
[beat 14] ARNOLD: This one's flat. JOSEFINA: They all are. ARNOLD: No. Just this one. Listen.
[beat 15] He plays an A. Then the A above it. They clash faintly. Josefina tilts her head. JOSEFINA: I can hear it. ARNOLD: That's your mother's ear.
[beat 16] JOSEFINA: She told me once she could hear when a room was out of tune. ARNOLD: She could.
[beat 17] JOSEFINA: What did the room sound like when she left?
[beat 18] He stops. His hand hangs above the keys. ARNOLD: Like this.
[beat 19] He plays the flat A. It hangs between them, wavering.
[beat 20] JOSEFINA: Can you fix it? ARNOLD: I've tried. JOSEFINA: Let me. ARNOLD: You've never tuned. JOSEFINA: I've listened my whole life.
[beat 21] He studies her. Hands her the lever. She kneels beside him. Presses the key. Turns the pin a hair, then another, her head cocked, her eyes closed.
[beat 22] The A rises. Settles. Becomes true.
[beat 23] She opens her eyes. He is watching her, not the piano. ARNOLD: That's it. JOSEFINA: That's it? ARNOLD: That's the note.
[beat 24] She plays it again. A clean, level tone. The room seems to lean toward it.
[beat 25] JOSEFINA: I should have come sooner. ARNOLD: You came.
[beat 26] She sets down the lever. He puts a hand on the piano's side, the way you might touch a shoulder. ARNOLD: Want tea now? JOSEFINA: Yes.
[beat 27] He rises, knees cracking. Goes to the kitchen. She stays at the piano and plays, one finger at a time, the first line of a lullaby.

### SCENE s00814 | INT. MURANO GLASSWORKS - FURNACE HALL - NIGHT
Characters: SERAFINA BOLDRINI, CHIARA MENEGHEL
[beat 0] The great furnace has burned for four hundred years and has never once gone out. It breathes orange light across a hall of crooked chandeliers, rows of unsold goblets, and a locked case of Doge's glass behind a velvet rope. The air is a held breath.
[beat 1] SERAFINA BOLDRINI, 50s, apron, silver braid, tends the furnace with a long iron pipe and the patience of someone who has done so for decades. She hums an old lullaby.
[beat 2] Across the hall, CHIARA MENEGHEL, 30s, in a borrowed apprentice smock and a coat of nerve, drifts between the chandeliers. Her gloved hand pauses on a showcase latch. Her other hand holds a velvet bag.
[beat 3] SERAFINA: Chiara, you're late. CHIARA: The vaporetto, signora. SERAFINA: Always the vaporetto.
[beat 4] Chiara lets the latch go. Crosses to the furnace, ears red with the heat. She lifts a pipe, gathers a gob of molten glass, and for a moment they work side by side, the older woman correcting the younger's angle with a touch.
[beat 5] SERAFINA: Slower. Glass has no patience for those in a hurry. CHIARA: I'll remember. SERAFINA: You won't. But it's kind of you to say.
[beat 6] The glass glows like a small sun. Chiara turns it, gently, and the lullaby seems to hum itself in her throat. She is, for the first time, perfectly calm.
[beat 7] She lifts her eyes to the case. Back to the glass. Then, softly:
[beat 8] CHIARA: It's very beautiful, what you do. SERAFINA: It is.
[beat 9] Serafina smiles. She sets down her pipe.
[beat 10] Reaches into her apron pocket and draws out a long, cold key. Holds it in her palm.
[beat 11] SERAFINA: My daughter used to say the same. The last night she worked here, she asked me to open the case.
[beat 12] She steps toward the Doge's glass. Chiara goes rigid. SERAFINA: She was a very good thief. Very patient. Not patient enough.
[beat 13] She slips the key in the lock. The case swings open on empty velvet.
[beat 14] SERAFINA: Your mother never did learn to wait.
[beat 15] Chiara drops the velvet bag. Behind her, the furnace roars.

### SCENE s00815 | INT. SALT MINE TUNNEL - FORWARD LISTENING POST - NIGHT, 1916
Characters: HIRAM STALLWORTH, OTTILIE BRANDT, EMEKA OGBONNA, SOOT, BEAUMONT
[beat 0] White walls glitter under oil lamps. The passage narrows to a crawl at one end, where a pickaxe lies abandoned. Everything tastes of brine and iron. A telephone hangs on a nail, its wire running up into the dark.
[beat 1] SGT. HIRAM STALLWORTH, 40s, stands against the wall, thumb moving over a rosary he doesn't believe in. CPL. OTTILIE BRANDT, 30s, medic, kneels over a canvas bag, counting bandages. PVT. EMEKA OGBONNA, 19, crouches at the narrowing, head cocked, listening. PVT. SAMUEL "SOOT" BEAUMONT, 22, sits on an ammunition crate sharpening a bayonet.
[beat 2] Silence. A drip from the roof. Then, from far above, a faint rhythm of thumps.
[beat 3] EMEKA: They're digging again. HIRAM: How close? EMEKA: Same as an hour ago. SOOT: That's not close or far. That's just there.
[beat 4] OTTILIE: Soot, hold still. Your hands are shaking. SOOT: They are not. OTTILIE: Then it's the crate. HIRAM: Brandt, enough. OTTILIE: Sergeant.
[beat 5] The thumps stop. All four look up. A dry rain of salt falls from the ceiling and tings on the helmet at Emeka's feet.
[beat 6] EMEKA: Did you hear that? SOOT: Hear what? EMEKA: Nothing. That's what I'm saying.
[beat 7] HIRAM: Stand to.
[beat 8] They move. Ottilie closes her bag. Soot slides the bayonet home. Emeka backs from the narrowing, rifle level.
[beat 9] Hiram unhooks the telephone and puts it to his ear. Nothing. He taps the cradle. Nothing.
[beat 10] HIRAM: Line's dead. SOOT: Course it is. OTTILIE: Don't. SOOT: I'm only saying. OTTILIE: Don't.
[beat 11] A single drop of water hits the floor. Another. They all watch it. The echo seems to travel for a long time.
[beat 12] EMEKA: I used to hear my mother singing in the pit at home. HIRAM: Did you? EMEKA: Same note. Over and over. OTTILIE: What was the note? EMEKA: I don't know. I never had a name for it.
[beat 13] Soot laughs, not unkindly. Hiram almost smiles.
[beat 14] The thumps resume overhead, three, then four, then a pause.
[beat 15] HIRAM: We hold. SOOT: Till when? HIRAM: Till we're told. OTTILIE: Told by who? HIRAM: That's not for us to ask.
[beat 16] He hangs up the phone. Folds his arms. The four of them settle in the white tunnel, listening to the mountain breathe.

### SCENE s00816 | INT. CHURCH BELFRY - SNIPER NEST - DAWN
Characters: VASILY PETRENKO, TANISHA GREER, LEO FONTAINE, HANNELORE WEISS, OBINNA ADEKUNLE-REID, JUNE KOWALCZYK
[beat 0] Stone arches. A cracked bell hangs silent. Through the slit, a ruined square below.
[beat 1] LT. VASILY PETRENKO whispers into a field phone. SPC. TANISHA GREER braces a rifle on a sandbag. PVT. LEO FONTAINE feeds a belt into a machine gun. CPL. HANNELORE WEISS hauls up an ammo crate. SGT. OBINNA ADEKUNLE-REID wedges the door with a pew. PVT. JUNE KOWALCZYK clutches a radio.
[beat 2] A shell whistles overhead. The tower shakes.
[beat 3] TANISHA: Contact left! LEO: Where? TANISHA: Left! Your other left!
[beat 4] VASILY: Sergeant, the door! OBINNA: I'm holding it! HANNELORE: They're in the nave!
[beat 5] JUNE: Lieutenant, radio says pull back! VASILY: To where? JUNE: It doesn't say!
[beat 6] A boot hits the door. Wood splinters. Obinna braces both shoulders against it.
[beat 7] OBINNA: Anyone? LEO: Firing!
[beat 8] The machine gun roars. Dust and cordite fill the belfry. Tanisha squeezes the trigger once, twice. A body falls in the square. TANISHA: Down!
[beat 9] Silence. Then bells. The cracked bell, ringing on its own in the blast's echo.
[beat 10] They all stop. Look up. HANNELORE: It still rings.

### SCENE s00817 | INT. CRUISE SHIP "SERENISSIMA" - CASINO CASHIER CAGE - NIGHT
Characters: HENRY GAUTHIER, WOMAN IN FEATHERED MASK, FEATHERED MASK, FINNEGAN MBATHA, ZINNIA
[beat 0] A brass cage with a tiny window, stacks of chips behind it, a rotating security camera. Beyond, the casino floor chimes and flashes.
[beat 1] HENRY GAUTHIER, 50s, cashier in a burgundy vest, counts chips with a practiced thumb. Behind the glass, a WOMAN IN A FEATHERED MASK, 30s, waits in a silver gown, an ornate clutch pressed to her ribs. She taps the counter twice.
[beat 2] WOMAN IN FEATHERED MASK: Cash me out, please. HENRY: Of course, madam. How much?
[beat 3] She slides a rack of plaques through the window. He counts. His eyebrows go up.
[beat 4] HENRY: That is... a great deal, madam. WOMAN IN FEATHERED MASK: It was a lucky night. HENRY: Very lucky. Name for the receipt?
[beat 5] She hesitates. Her clutch shifts.
[beat 6] A muffled cough comes from the hallway behind her. A man in a waiter's jacket is leaning there, FINNEGAN MBATHA, 30s, one hand inside his tray cloth.
[beat 7] ZINNIA: Zinnia Delacroix-Obi. HENRY: Delacroix. Spelled the usual way? ZINNIA: The only way.
[beat 8] He slides a form through. She signs.
[beat 9] Behind her, Finnegan nudges a service cart, rolling it quietly against the cage door, while Henry stacks bills into an envelope and licks the flap. She slips her mask up an inch, scanning the camera in the ceiling, and he steps from the doorway with the tray, the cloth peeling back from a small black pistol.
[beat 10] FINNEGAN: Mr. Gauthier. Don't. Henry freezes mid-lick. The envelope droops.
[beat 11] HENRY: I see. ZINNIA: He's very polite, isn't he? FINNEGAN: I try.
[beat 12] HENRY: Madam, I have a family. ZINNIA: So did the last man.
[beat 13] Henry's hands go up. Finnegan steps in, kicks the cart wide. Zinnia reaches through the window and takes the envelope, then the plaques, then a second tray of cash from under the counter.
[beat 14] The camera swivels toward them. FINNEGAN: Camera.
[beat 15] Zinnia tosses her clutch. It strikes the lens and a puff of grey fills the lens. The red light dies. ZINNIA: Two minutes. FINNEGAN: Quiet, now.
[beat 16] They slip out. Henry sits, slowly, on his stool. Pulls a handkerchief from his vest. Dabs his brow.
[beat 17] Then, from beneath the register, he lifts a very small silver bell and rings it twice.

### SCENE s00818 | INT. FOREVER FRIENDS PET MEMORIAL PARLOR - VIEWING ROOM - DAY
Characters: GWENDOLYN POPPLEWELL, RAYMOND TSOSIE-KANE
[beat 0] Soft lilac walls. A small satin-lined coffin on a stand. Lilies. A framed photo of a hamster named Pickle.
[beat 1] GWENDOLYN POPPLEWELL, 40s, black veil and a pinched face, dabs a handkerchief at dry eyes. RAYMOND TSOSIE-KANE, 30s, in a tie too tight for him, adjusts a floral arrangement without being asked.
[beat 2] RAYMOND: Friends. Family. We gather today to honor Pickle.
[beat 3] GWENDOLYN: Raymond. Nobody's here. RAYMOND: Practice, Mrs. Popplewell. GWENDOLYN: I'm Gwendolyn. RAYMOND: Gwendolyn. Forgive me.
[beat 4] She sniffs. The room is calm. A bell chimes from the hall.
[beat 5] GWENDOLYN: He was a good hamster. RAYMOND: The very best. GWENDOLYN: Did you know him? RAYMOND: Only from the photograph.
[beat 6] GWENDOLYN: Seven hundred dollars for a hamster. RAYMOND: Mm? GWENDOLYN: Nothing.
[beat 7] Raymond lifts the coffin lid to adjust the satin. He stops. Peers in. Gently lowers the lid and clears his throat.
[beat 8] RAYMOND: Mrs. Popplewell. Gwendolyn. How much did you say Pickle weighed? GWENDOLYN: Two ounces. RAYMOND: Right. GWENDOLYN: Why?
[beat 9] Raymond turns the little coffin around. Opens it again. Inside, on the satin, lies a perfectly preserved dinner roll. RAYMOND: Folks, I think we have a clerical error.
[beat 10] Gwendolyn lowers her handkerchief. Stares at the roll.
[beat 11] GWENDOLYN: Oh, thank God. RAYMOND: Pardon? GWENDOLYN: Pickle's in the car.

### SCENE s00819 | INT. BARBERSHOP - GHOST TOWN OF DRY CREEK - NOON
Characters: HAIRCUT, NATHANIEL CROWFOOT, STRANGER, TOMMY LIGHTFOOT, JEDEDIAH, SHERIFF AMOS WHITCOMBE
[beat 0] Dust on every surface. One chair, one mirror. A hand-painted sign in the window reads "SHAVE AND A HAIRCUT, TWO BITS."
[beat 1] NATHANIEL CROWFOOT, 50s, barber, apron over his vest, strops a razor on a leather belt. A STRANGER, 40s, black hat tipped low, sits in the chair under a white sheet. A young boy, TOMMY LIGHTFOOT, 12, sweeps the floor with a broom taller than he is.
[beat 2] NATHANIEL: Close shave? STRANGER: Close.
[beat 3] NATHANIEL: You passing through? STRANGER: Looking for a man.
[beat 4] Nathaniel lathers his brush. The boy stops sweeping.
[beat 5] NATHANIEL: Name? STRANGER: Jedediah Kane.
[beat 6] The brush stops mid-air. Tommy looks at Nathaniel. Nathaniel looks at the mirror, at the stranger's eyes.
[beat 7] NATHANIEL: Never heard of him. JEDEDIAH: That's funny. Folks say he gets his hair cut here. NATHANIEL: Folks say a lot of things.
[beat 8] The bell on the door jingles. SHERIFF AMOS WHITCOMBE, 60s, steps in, hand on his holster. SHERIFF: Nathaniel. Boy. Everyone breathing? NATHANIEL: Barely.
[beat 9] SHERIFF: That's an interesting hat. JEDEDIAH: It keeps the sun off. SHERIFF: There's no sun in here. JEDEDIAH: It keeps my thoughts in.
[beat 10] The sheriff draws. Jedediah flings the sheet and rises from the chair, razor in his hand. Nathaniel catches his wrist. They tangle. The gun fires into the ceiling. Plaster rains.
[beat 11] Tommy dives behind the broom. Nathaniel wrenches the razor free and presses it to Jedediah's throat. The sheriff levels his pistol at both.
[beat 12] SHERIFF: Nathaniel, let him go. NATHANIEL: Which one? SHERIFF: Either.
[beat 13] Beat. Nathaniel lowers the razor. Wipes it on his apron. NATHANIEL: Shave's on the house.

### SCENE s00820 | INT. SALT MINE CURLING HALL, 400 FEET DOWN - NIGHT
Characters: INGRID HALVORSEN, TEODOR BRANICKI, BASH, QADIR, DESTINY OKAFOR-REYES
[beat 0] Lamps hang from the cavern ceiling like drowned moons, and the ice beneath them has a faint pink cast from the mineral in the walls. INGRID HALVORSEN, forties, shoulders wide as a door, crouches at the hog line with her broom across her knees, utterly still.
[beat 1] At the far house, TEODOR BRANICKI, thin and gray at the temples, wipes the same patch of ice for the third time with his sleeve. BASH (BASHIR) QADIR, twenty-two, the youngest of the rink, hugs a thermos he has not opened. His knee jumps against the bench.
[beat 2] TEODOR: Last stone. Weight's yours.
[beat 3] Ingrid does not answer. She picks a hair from the pebble of the stone and flicks it away.
[beat 4] BASH: It's only a league game. INGRID: Then it won't hurt to do it right.
[beat 5] She slides out of the hack. The stone leaves her hand in a long, low whisper, and Bash is on his feet before he knows it, broom already sweeping, then not sweeping, then sweeping again.
[beat 6] The elevator cage groans somewhere above. Boots on the iron stairs.
[beat 7] DESTINY OKAFOR-REYES, sixty, in a parka the color of traffic cones, steps onto the ice apron with a clipboard pressed to her chest. She looks at the stone, then at Ingrid, then at the blank scoreboard.
[beat 8] DESTINY: Shift bell rang an hour ago. Nobody told you?
[beat 9] Teodor lowers his broom. Ingrid keeps her eyes on the stone, which is still traveling, still curling toward the button.
[beat 10] INGRID: Tell me when it stops.

### SCENE s00821 | EXT. PAWS AND PEACE PET CREMATORIUM DRIVE-THRU - DAY
Characters: WALLY PRUITT, KIKI NAKAMURA, DESMOND
[beat 0] A cheerful pastel kiosk with a speaker box and a pull-up window. WALLY PRUITT, fifties, in a polo shirt with a paw-print logo, sits inside with a headset on. KIKI NAKAMURA, twenties, his new trainee, stands behind him holding a clipboard.
[beat 1] He taps the headset. She leans in to watch.
[beat 2] WALLY: Okay, Kiki, first rule. We never say "dead." KIKI: What do we say? WALLY: "Passed on to the big yard."
[beat 3] She writes it down. He presses a button. WALLY: Welcome to Paws and Peace. How can we comfort you today?
[beat 4] The speaker crackles. DESMOND: Yeah, hi. I got a pet. It's, uh, in the car. Back seat. WALLY: I'm so sorry for your loss, sir. May I ask what kind of companion?
[beat 5] DESMOND: A python. Eleven feet.
[beat 6] He freezes. She stops writing. They look at each other.
[beat 7] KIKI: Wally, is that a big yard thing? WALLY: Hush. (into mic) Sir, ah, our standard urn holds up to eighty pounds.
[beat 8] DESMOND: He's got a roommate. She's pretty upset. WALLY: The, uh, the family is grieving?
[beat 9] DESMOND: No. The other python. She's in the car too.
[beat 10] Kiki drops the clipboard. He waves a hand at her to stay calm, then peers through the window at a dusty hatchback idling in the lane.
[beat 11] The hatchback's rear window is a solid wall of coiled scales.
[beat 12] KIKI: Wally, the glass is moving. WALLY: Don't say "moving." DESMOND: Hey, Wally, right? Your tag says Wally. Can you make the window go up? I think she's trying to hug the heater.
[beat 13] He rips off the headset and stands. She backs toward the door. WALLY: Kiki. Kiki! Be a pro. Tell him we will be right out. KIKI: You tell him! WALLY: I am training YOU!
[beat 14] The speaker crackles again. DESMOND: Is this a bad time? I can come back.
[beat 15] Wally and Kiki both shout "No!" at the same moment, then stare at each other, appalled.

### SCENE s00822 | INT. ST. CECILIA'S HOSPITAL - ROOFTOP GREENHOUSE OPERATING SUITE - NIGHT
Characters: MARGUERITE VOSS, NURSE TOBIAS KANE, RESIDENT PRIYA NAIR, HAL BRODERICK, SCRUB TECH JUNE ALVARADO, ANSELM FAIRWEATHER
[beat 0] Rain ticks on glass panels. Ferns crowd the corners of a sterile field under the stars.
[beat 1] DR. MARGUERITE VOSS, fifties, silver braid tucked under her cap, hums as she sutures. Across the table NURSE TOBIAS KANE, calm and broad, passes her instruments before she asks. RESIDENT PRIYA NAIR, twenties, watches the monitor with a small smile.
[beat 2] VOSS: Lovely tissue. Textbook. TOBIAS: Pressure's a rock.
[beat 3] DR. HAL BRODERICK, the anesthesiologist, sixties, sips tea at his station and turns a crossword page. SCRUB TECH JUNE ALVARADO counts sponges aloud, relaxed, almost singing it.
[beat 4] JUNE: Eleven, twelve, thirteen. PRIYA: Fourteen is on the floor. VOSS: Then it's not in the patient. Wonderful.
[beat 5] She ties off the last stitch. Everyone exhales. Tobias reaches for the dressing.
[beat 6] The greenhouse door hisses open. DR. ANSELM FAIRWEATHER, hospital chief of surgery, steps in dripping, his mask on crooked. He does not look at the patient. He looks at Voss, and at the clipboard in his hand.
[beat 7] Broderick's pen stops moving over the crossword. Tobias lowers the dressing, slowly, back to the tray. June stops counting.
[beat 8] ANSELM: Dr. Voss. A word. Outside.
[beat 9] Voss sets down the needle driver, aligns it with the edge of the tray, and does not turn around.

### SCENE s00823 | INT. GARAGE APARTMENT - AFTERNOON
Characters: LUCIANO FERRARI, MARISOL FERRARI, PIP, TOMASZ
[beat 0] A converted garage with a low ceiling and one window the size of a cereal box. Cardboard and plastic bags of hardware cover the floor. A half-built bunk bed frame lies on its side like a patient.
[beat 1] LUCIANO FERRARI, forties, sleeves rolled, kneels over an instruction sheet that has no words, only drawings. His wife MARISOL FERRARI, forties, sits cross-legged holding a hex key and a juice box. Their daughter PIP, nine, sorts bolts into a muffin tin. Their son TOMASZ, fifteen, leans on the doorframe with earbuds in one ear.
[beat 2] LUCIANO: Okay, everybody. Step four. Step four is the ladder. MARISOL: I thought step four was the guard rail. LUCIANO: Step four is the ladder. Step five is the guard rail.
[beat 3] PIP: Papa, there are two step fours.
[beat 4] He turns the sheet over. Then back. LUCIANO: There are two step fours.
[beat 5] MARISOL: Pip, how many bolts do we have of the long kind? PIP: Eleven. The directions say twelve.
[beat 6] TOMASZ: So we're one short, which means we've been doing it wrong the whole time. LUCIANO: Tomasz, go outside and breathe. TOMASZ: I'm literally just standing here.
[beat 7] MARISOL: Tommy, would you hold this end?
[beat 8] He pulls out the earbud and takes the rail. She slides a peg into a hole. It fits with a soft click.
[beat 9] MARISOL: Look at that. LUCIANO: Beginner's luck. PIP: Papa, I heard that. LUCIANO: You were supposed to.
[beat 10] He picks up the long bolt he thought was missing from under the instruction sheet and holds it up like a prize. LUCIANO: Twelve. PIP: Told you it was somewhere. TOMASZ: You said eleven. PIP: Eleven in the tin. Twelve in the universe.
[beat 11] Marisol laughs into her juice box. Luciano tightens the bolt with the key, a careful quarter turn at a time.
[beat 12] LUCIANO: Everyone hold your end. On three. One, two...
[beat 13] The frame lifts. It stands. It wobbles a little and settles.
[beat 14] MARISOL: Well. It's a bed. TOMASZ: It's crooked. LUCIANO: It's a crooked bed. It's ours.
[beat 15] PIP: Who gets the top? TOMASZ: Obviously me. PIP: Obviously not.
[beat 16] MARISOL: We'll flip for it later. Right now, who's hungry? LUCIANO: Dinner is whoever can find the pot with the lid.
[beat 17] Nobody moves. Pip returns to the muffin tin and pushes the bolts around with one finger. PIP: I hope I get the bottom.
[beat 18] Tomasz hears. He says nothing, but he sits on the lower mattress and bounces once, testing it, then pats the top one with his palm as if saying goodnight.
[beat 19] TOMASZ: Fine. I'll take the top. For the exercise. PIP: Thanks, Tommy. TOMASZ: Don't make it weird.
[beat 20] Luciano sets down the key and sits on the floor with his back against the frame, looking at the crooked ceiling. LUCIANO: Marisol. We have a house with a ladder now. MARISOL: We have a house with two step fours. She leans her head on his shoulder. The window light slides a few inches across the floor.

### SCENE s00824 | INT. FERRY TICKET BOOTH, DESERTED PIER - DUSK
Characters: ODALYS PRIETO
[beat 0] A glass box no bigger than a phone booth, its paint flaking in sheets. Fog presses at the windows. ODALYS PRIETO, seventies, wrapped in a green cardigan, sits on a stool amid cardboard boxes marked in marker: LAST DAY.
[beat 1] On the counter, a battered cassette recorder with a masking-tape label. She hesitates, then presses PLAY.
[beat 2] A hiss. A younger woman's voice, warm and slightly breathless, fills the booth. ODALYS: Test, test. Okay. This is Odalys, and it's the first of June, and the little ones are asleep, so I will whisper the schedule.
[beat 3] Odalys closes her eyes. Her hand drifts across the counter and rests on a brass stamp. ODALYS: Seven a.m., the fishermen. Eight, the schoolchildren, mind the puddles. Noon, nobody. Nobody ever, and that's when I read.
[beat 4] The tape hisses. Outside, a gull drops onto the pier rail and watches her.
[beat 5] ODALYS: If anyone ever hears this, I want you to know it was a good job. The best view in the county, and nobody to talk to but the tide.
[beat 6] Odalys smiles, then stops smiling.
[beat 7] She slides the stamp into her cardigan pocket, switches off the lamp, and presses STOP. The silence rings.
[beat 8] ODALYS: It was.
[beat 9] She pulls the shutter down.

### SCENE s00825 | INT. TIDAL STATION KARST-9, CONTROL DECK - NIGHT
Characters: VESNA DRAGOVIC, AMARA OKORO
[beat 0] Emergency red. Sea slams the hull in slow, enormous beats. Consoles flicker.
[beat 1] VESNA DRAGOVIC, 40s, flight engineer, drags a sparking panel off its mount. AMARA OKORO, 30s, station medic, hangs from a ceiling rail with a pressure kit.
[beat 2] VESNA: Hull's breached on four. How long? AMARA: Ninety seconds, maybe. Maybe less.
[beat 3] She hits her harness release and drops. Vesna catches her by the arm, then lets go quickly, as if burned.
[beat 4] VESNA: Don't touch the wet floor. It's live. AMARA: Then why are you standing in it? VESNA: Because she's the only one who can reach the valve.
[beat 5] Which she? Neither answers. They both look at the valve wheel, high on the wall, and then at each other. She waits for the other to move.
[beat 6] AMARA: Breathe. Count. Move. VESNA: Do it!
[beat 7] Amara climbs the rack. Vesna steadies the base, jaw tight.
[beat 8] The lights die. Only the emergency strip shows, a thin red seam.
[beat 9] VESNA: Anyone still on the station, brace! Brace now!
[beat 10] Silence. Water on steel. AMARA: Nobody's here, Vesna. It's just us.
[beat 11] A heavy clunk. The wheel turns. The sea's rhythm slows, then stops. Lights stutter back on. Amara hangs from the wheel, laughing without sound.
[beat 12] VESNA: She did it. I can't believe she did it. AMARA: I'm right here. VESNA: I know.
[beat 13] The wall behind them splits along a seam, and seawater sheets down, blank and cold. They stop laughing.
[beat 14] AMARA: That's six. VESNA: Then we swim.

### SCENE s00826 | INT. STARLIGHT ROLLER RINK - NIGHT
Characters: NEIL, PRATT, MILDRED ASHCROFT, FITZ
[beat 0] A mirror ball turns slowly over a dead floor. Dust lies on the skate rental counter. Somewhere an old organ wheezes a note and stops.
[beat 1] CORNELIUS "NEIL" PRATT, fifties, in a rumpled suit, carries a lantern and a ledger. MILDRED ASHCROFT, sixties, his realtor, follows in a tweed coat with her keys held like a weapon. FITZ, a lean teenager with a flashlight and a tool bag, brings up the rear.
[beat 2] NEIL: Mildred, you said the power was off. MILDRED: It is, Neil. NEIL: Then who is playing the organ? MILDRED: The building settles. It makes noises.
[beat 3] Fitz crouches by the wall and pokes at a fuse box. He whistles through his teeth, a tuneless little line.
[beat 4] FITZ: Mr. Pratt, the box is cold. Dead for years.
[beat 5] All three turn. At the far end of the rink, a pair of skates, white leather, laces tied, sits at the edge of the floor, as if someone has just stepped out of them.
[beat 6] Mildred takes a step back. Neil steps forward and lifts his lantern. Fitz swings his flashlight at the skates and holds it there, the beam very steady.
[beat 7] NEIL: Those weren't there when we came in. MILDRED: Nonsense. They were. FITZ: Mildred, they weren't.
[beat 8] Nobody moves. The mirror ball turns. Spots of light cross their faces, one after another.
[beat 9] The skates slide a few inches toward them across the floor, wheels humming. Neil, Mildred, and Fitz stop breathing together. The wheels go quiet.
[beat 10] MILDRED: Well. We'll note it in the listing. She writes in her notebook, her pen perfectly smooth.
[beat 11] Neil sets down the lantern.
[beat 12] NEIL: Fitz, go and check the doors. FITZ: They're locked, sir. From outside.
[beat 13] The organ plays one low chord. The three of them stay where they are, watching the skates, which do not move again.

### SCENE s00827 | INT. NIGHT BAKERY, BACK KITCHEN - 3 A.M.
Characters: SOLEDAD VEGA, ARJUN MEHTA, BEA LINDGREN
[beat 0] Steel tables dusted white. Proofing racks glow under a single caged bulb. A radio murmurs a late jazz station. Flour hangs in the air like weather.
[beat 1] SOLEDAD VEGA, 30s, forearms floured to the elbow, shapes loaves with the speed of someone who has done it ten thousand times. ARJUN MEHTA, 30s, in a good coat that doesn't belong here, stands at the back door holding a small box he hasn't opened. BEA LINDGREN, 20s, the new apprentice, sits on an upturned crate peeling a clementine, trying to look invisible.
[beat 2] SOLEDAD: Door's open. You're letting the heat out. ARJUN: I wanted to say, I mean, I came to say BEA: I can go. I should go, actually, I have a SOLEDAD: Stay, Bea. ARJUN: Please, Bea, it's fine. It's SOLEDAD: It's not fine. It's three in the morning.
[beat 3] Arjun steps in and shuts the door. He sets the box on the table beside a tray of rolls, and Soledad slides it two inches away from the dough without looking at it. Bea tears the clementine in half and offers him a piece, which he takes automatically, which makes Soledad laugh once through her nose.
[beat 4] ARJUN: I kept the key. I'm sorry. I should've mailed it.
[beat 5] BEA: I'm going to check the oven. SOLEDAD: The oven is fine. BEA: I'm going to check it anyway.
[beat 6] She leaves through the swing door. It flaps twice behind her. The radio drops into a slow saxophone.
[beat 7] ARJUN: You cut your hair. SOLEDAD: Eight months ago. ARJUN: It suits you. SOLEDAD: Don't.
[beat 8] He opens the box. Inside is a brass key on a loop of red thread. He sets it carefully next to the bread, as though it might wake the dough.
[beat 9] She wipes her hands on her apron, one finger at a time, then picks up the key and drops it in the flour bin without looking.
[beat 10] ARJUN: Soledad SOLEDAD: The seven o'clock rush is in four hours. I've got six hundred rolls.
[beat 11] BEA: Oven's fine! SOLEDAD: Told you!
[beat 12] Arjun nods, takes a roll off the tray, eats half of it standing there. Flour dusts his lapel. He lets it.
[beat 13] ARJUN: Still the best thing in the city. SOLEDAD: It's flour and water. ARJUN: It's you.
[beat 14] She takes the other half out of his hand and finishes it herself, chewing slowly, looking at the wall clock.
[beat 15] Then she holds the swing door open for him.

### SCENE s00828 | INT. RENTED BANQUET HALL, AFTER THE WAKE - NIGHT
Characters: DELPHINE ABARA, ROMUALD, GERTIE, NKEM
[beat 0] Folding tables, half-eaten trays of rice and plantain, balloons that nobody wanted. A photograph of a smiling old man leans against a speaker on the stage.
[beat 1] DELPHINE ABARA, forties, sits alone at the head table pulling the tinsel off a centerpiece. Her brother ROMUALD, fifties, enters from the kitchen with a stack of paper plates and a bottle. Their aunt GERTIE, seventies, is asleep upright in a chair by the coat rack. NKEM, Delphine's teenage son, crouches by the door, folding chairs one at a time.
[beat 2] He sets down the plates. She does not look up.
[beat 3] ROMUALD: Your car is still in the lot. The hall wants it moved. DELPHINE: Tell them I'll move it when I'm done. ROMUALD: Done with what?
[beat 4] She holds up a fistful of tinsel. He pours two plastic cups and slides one to her. She pushes it back. He drinks both.
[beat 5] ROMUALD: You gave a good speech. DELPHINE: I read it off a napkin. ROMUALD: That's why it was good.
[beat 6] She laughs, short and ugly. He sits beside her, not too close. Across the room Gertie snores once and settles.
[beat 7] Nkem drops a chair with a clang. Everyone freezes. Gertie opens one eye, looks at all three, and closes it again. NKEM: Sorry.
[beat 8] DELPHINE: Nkem, come here. He walks over, hands in pockets. She takes his chin in her hand, studies him, and lets go. He looks at his shoes.
[beat 9] ROMUALD: Delphine, the will. DELPHINE: Not tonight. ROMUALD: I'm only saying the house is DELPHINE: Romuald. Not tonight.
[beat 10] He raises both hands.
[beat 11] She stands, takes the photograph off the stage, and carries it down the aisle, past Gertie and past Nkem, who steps aside without being asked. Romuald watches her go, then picks up the bottle and follows.
[beat 12] Nkem, left alone, folds the last chair and leans it gently against the wall.
[beat 13] GERTIE: Somebody turn the lights off before they bill us. Nkem does.

### SCENE s00829 | EXT. KEYSTONE FLATS TELEGRAPH OFFICE - DAWN
Characters: SILAS CROWDER, MAUDE TALLCHIEF, EARLY BRANNIGAN, ABEL
[beat 0] White alkali dust runs to the horizon in every direction. The telegraph office is a single plank room squatting on stilts above the salt, its shadow long and blue. A wire hums overhead like something thinking.
[beat 1] SILAS CROWDER, sixty, sheriff, with a mustache gone the color of ash, leans on the porch rail with a tin cup. MAUDE TALLCHIEF, thirties, the telegraph operator, stands at the window in a man's duster, one hand on the sounder key.
[beat 2] SILAS: Maude, how long since the line went quiet? MAUDE: Since midnight, Silas. Whoever cut it did it clean.
[beat 3] Beneath the porch, EARLY BRANNIGAN, nineteen, deputy, and still wearing his Sunday hat, sits cross-legged on the ground sharpening a pencil with a pocketknife. He glances up at the sheriff with the hopeful eyes of a dog. EARLY: Want me to ride out and find the break, Sheriff? SILAS: Not alone, Early.
[beat 4] A voice rolls in from beyond the last fence post, rich and unhurried, a preacher's voice carried on a cold wind. ABEL: Sheriff Crowder! I've come about the wire.
[beat 5] Silas sets down his cup. Maude draws a revolver from the folds of her coat. Early stands so quickly his pencil snaps.
[beat 6] SILAS: Abel Whitcomb. Last I heard you were burying folks in Dry Fork. ABEL: Buried a few. Marry a few. This morning I'm doing neither.
[beat 7] A silhouette appears at the edge of the flat: a man in black walking with great patience, a coil of copper wire over one shoulder. MAUDE: That's my wire. ABEL: It was lying in the road, Miss Tallchief. I figured someone was missing it.
[beat 8] Early lets out a laugh, brittle and unsure, and Maude glares at him. Silas steps down off the porch into the dust.
[beat 9] SILAS: Early. Put your hat straight. EARLY: Yes, Sheriff.
[beat 10] SILAS: Now go inside and ask Maude to send a message. MAUDE: Silas, the line is dead. SILAS: Then we'll send it the old way.
[beat 11] He raises his hand to the sky. The wire above them sings once, a high clean note, and falls silent.

### SCENE s00830 | EXT. DRY CREEK BED - NOON
Characters: JEB HARLAN, CYRUS DOYLE, RUTHIE
[beat 0] Heat. Cicadas. A dead mule.
[beat 1] JEB HARLAN, 40s, crouches behind it, rifle up. Across the gully, CYRUS DOYLE, 40s, flat on his belly in the sage. Both unshaven. Both in gray hats.
[beat 2] RUTHIE: Boys! Y'all dead yet? Jeb flinches. Cyrus doesn't.
[beat 3] JEB: Ruthie, stay in the wagon! RUTHIE: Wagon's on fire!
[beat 4] Silence. Smoke rolls over the ridge.
[beat 5] He stands, then drops. A shot kicks dust off the mule. He fires back. Nothing moves in the sage.
[beat 6] CYRUS: You hit? JEB: No. You? CYRUS: Hell if I know.
[beat 7] He crawls to the lip of the bank. He sees the other one's hat. He grins, ugly.
[beat 8] JEB: That's my hat. CYRUS: It was on the ground.
[beat 9] Another shot. Both duck. The mule groans, then settles.
[beat 10] RUTHIE: Cyrus! He's lying. Jeb never fired a round!
[beat 11] He turns his rifle toward Ruthie's voice. The other one's barrel follows his. They hold like that, sweat running, the smoke thickening.

### SCENE s00831 | INT. MARCHETTI PAWN AND LOAN, BACK ROOM - NIGHT
Characters: LOU MARCHETTI, DETECTIVE IRENE KOWALCZYK, ARTIE
[beat 0] A single green-shaded lamp. Shelves of wristwatches, trumpets, wedding bands in cigar boxes. The shop's front shutters are down, and rain taps the steel.
[beat 1] LOU MARCHETTI, sixties, in suspenders and a rumpled shirt, sits at a rolltop desk counting bills into a drawer. DETECTIVE IRENE KOWALCZYK, forties, trench coat belted tight, stands by a shelf of cameras. She turns one over in her hands as if it interests her.
[beat 2] ARTIE, nineteen, the stock boy, stands in the doorway holding a broom. He has not swept anything.
[beat 3] He glances at the desk. She notices him glance.
[beat 4] KOWALCZYK: Quiet night, Mr. Marchetti. LOU: They're all quiet. I run a quiet place.
[beat 5] She sets down the camera and picks up a pocket watch. She holds it to her ear, then to the light.
[beat 6] KOWALCZYK: Funny. This one's engraved. "To Walter, from Dora, 1951." You buy this last week? LOU: I buy a lot of things. KOWALCZYK: Walter Pinski. He was found in the river on Tuesday.
[beat 7] Lou counts another bill. He puts it in the drawer, closes the drawer, and rests both hands on top of it.
[beat 8] Artie lets the broom slide until the handle taps the floor. Lou looks at him. Artie picks it up again, too fast.
[beat 9] LOU: Artie. Go home. ARTIE: It's raining, Mr. Marchetti. LOU: Go home anyway.
[beat 10] He leaves. The bell over the front door rings once, thin and far away.
[beat 11] She sets the watch gently on the desk in front of Lou and sits down opposite him, unbuttoning her coat. KOWALCZYK: Take your time.
[beat 12] He looks at the watch for a long moment, then pushes it a few inches back toward her.

### SCENE s00832 | INT. COUNTY GENERAL - TRAUMA BAY ONE - NIGHT
Characters: FELIX AMADI, RENATA LINDQVIST
[beat 0] Empty beds, drawn curtains, every monitor lit and waiting. A wall phone buzzes once. Hallway lights flicker.
[beat 1] DR. FELIX AMADI, forties, snaps a gown over his scrubs. DR. RENATA LINDQVIST, fifties, lines up chest tubes on a tray, in order, like silverware.
[beat 2] FELIX: Bus rollover. Twenty-three patients, ETA four minutes. RENATA: Twenty-three. And we have six beds.
[beat 3] She doesn't stop working. He tears open a pack of gauze.
[beat 4] FELIX: Everyone in this bay, listen. Triage at the door. Red tags left, yellow center, green to the cafeteria. RENATA: Green to the cafeteria. We should open a restaurant.
[beat 5] FELIX: Renata, I need you at the door. RENATA: I need you to stop calling it "the door." FELIX: It's a door! RENATA: It's a funnel.
[beat 6] The wall phone buzzes again, urgently. They both reach for it, pull back, and speak at once.
[beat 7] FELIX: Pick it up. RENATA: ^Don't pick it up.
[beat 8] The buzzing continues. They look at the phone, then at each other, then at the empty beds.
[beat 9] Renata answers it with a sharp snap of her wrist. RENATA: Trauma One. Go.
[beat 10] She listens. Her jaw tightens. She holds the receiver out to Felix without a word.

### SCENE s00834 | INT. HOLLOWAY & DRAKE, OPEN-PLAN FLOOR, "SYNERGY POD" - DAY
Characters: BRENT STOLLER, DEIRDRE KOH, QUINCY ABARA, AUGUSTINE VANCE-PELL
[beat 0] A glass cube in the middle of forty identical desks. Beanbags. A whiteboard reading "WINS!!" in six colors. A mini-fridge hums with kombucha. BRENT STOLLER, thirties, vest over a Henley, paces in front of the board holding a ceremonial marker. DEIRDRE KOH, forties, brisk, with a pen behind each ear, sits cross-legged on a beanbag. QUINCY ABARA, twenties, the junior analyst, perches on the edge of a stool, holding a laptop like a shield.
[beat 1] BRENT: Team, great energy. I just want to say, we are crushing Q3. DEIRDRE: We missed Q3. BRENT: We pre-crushed it. In spirit.
[beat 2] Quincy scribbles. Deirdre catches her eye and mouths something. She mouths it back. Neither smiles.
[beat 3] QUINCY: Brent, should I put "pre-crushed" in the deck? BRENT: Absolutely. Bold it. She does. The fridge hums. Everything seems fine.
[beat 4] The glass door slides open. AUGUSTINE VANCE-PELL, sixty, chief executive, silver and enormous in a camel coat, enters with a binder under one arm and a wide, serene smile.
[beat 5] Brent's marker stops moving. Deirdre rises from the beanbag in one smooth motion, like someone leaving a bomb site. Quincy shuts her laptop. AUGUSTINE: Please. Don't stop on my account.
[beat 6] He walks to the whiteboard and reads it, lips moving. Then he turns, and the smile has not changed at all. AUGUSTINE: I have a very short announcement. Who would like to hear it?
[beat 7] Nobody speaks. Deirdre raises her hand, as if at school.

### SCENE s00835 | INT. CARGO FERRY "MARGARITA," CAR DECK - NIGHT
Characters: MIRELA STAN, DOMINIC REYES, SPARROW, TEO KAWAGUCHI, BIG HENRIK, NURIA
[beat 0] Trucks chained in rows. Diesel haze. The engines throb through the floor. MIRELA STAN, 30s, in a dock-worker's vest, leans against a shipping container. She holds a clipboard with no pen. DOMINIC REYES, 40s, leather jacket, arrives from the stairwell with a duffel. SPARROW, 20s, hood up, trails him. TEO KAWAGUCHI, 50s, a ledger clerk with thick glasses, sits on a spare tire with a thermos.
[beat 1] Dominic drops the duffel at Mirela's feet. She does not look down. MIRELA: You're early. DOMINIC: You're late. She smiles with half her mouth. Sparrow shifts weight foot to foot. Teo unscrews the thermos and sips, watching them over the rim.
[beat 2] SPARROW: Can we do this fast? I don't like the water. MIRELA: Nobody likes the water, kid.
[beat 3] She kneels, unzips the duffel, and takes out a brick wrapped in brown paper. He checks his watch. She holds the brick to her ear and shakes it gently, like a melon.
[beat 4] BIG HENRIK, huge, bearded, in a deckhand's slicker, steps out from behind a truck with a flashlight in each fist. Behind him NURIA, 20s, the ship's purser, holds a radio to her mouth.
[beat 5] Henrik clicks both flashlights on. White light hits Mirela, Dominic, Sparrow. Teo does not move, his thermos halfway to his mouth. HENRIK: Evening.
[beat 6] Dominic's hand goes under his jacket. Sparrow bolts for the stairwell. Henrik swings a flashlight like a club and misses. Mirela rolls behind the container, the brick still in her hand. NURIA: Bridge, we have a situation on the car deck.
[beat 7] Teo, calm as stone, screws the thermos shut, takes off his glasses, and wipes them on his sleeve. TEO: Everybody sit down.
[beat 8] Nobody does. A truck alarm starts to shriek. Henrik lunges. Dominic ducks. The flashlight beam sweeps across the ceiling. TEO: I said sit.
[beat 9] He slides a revolver from the thermos bag and sets it on his knee. The shouting stops as if cut by a blade. Henrik lowers the flashlight. Nuria's radio hisses a faraway question.
[beat 10] NURIA: Teo, what are you doing? TEO: Retiring.
[beat 11] He picks up the duffel, slings it over his shoulder, and walks down the aisle between the trucks, past Mirela, past Dominic, past Henrik. Nobody stops him.
[beat 12] The ferry horn blows, long and low.

### SCENE s00836 | INT. HAYDEN PLANETARIUM DOME - NIGHT (BLACKOUT)
Characters: INSPECTOR AGNES TRELAWNEY, PROFESSOR BALTHAZAR OYELARAN, CORMAC, ASTRID VOLKOVA, PUI-LING, JAMAL REYES
[beat 0] The star projector is dead. Only a handful of emergency lights glow along the wall. The dome ceiling is a flat gray void. INSPECTOR AGNES TRELAWNEY, fifties, in a belted raincoat, stands at the center aisle with a torch. PROFESSOR BALTHAZAR OYELARAN, seventies, in a velvet jacket, sits in the front row. CORMAC, a lanky security guard, hovers by the exit. ASTRID VOLKOVA, thirties, the curator, wrings her hands beside the projector console.
[beat 1] AGNES: Who last saw Doctor Pell alive? ASTRID: I did, at nine. He went to calibrate the BALTHAZAR: He was fussing with the Zeiss, as usual. CORMAC: I locked the east door at ten. Nobody came in. AGNES: Nobody went out? CORMAC: Nobody.
[beat 2] Her radio crackles. PUI-LING: Inspector, Sergeant Pui-Ling. We have the body in the sub-basement. Cause of death looks like electrical. AGNES: Understood. Keep the scene sealed.
[beat 3] BALTHAZAR: Electrical? In a planetarium. How apt. ASTRID: Professor, please. BALTHAZAR: Please what? A man is dead, and the stars are out. It's a metaphor, my dear. CORMAC: Sir, it's a crime scene. AGNES: Quiet, all of you.
[beat 4] A door clatters open at the far end of the dome. JAMAL REYES, twenties, in a janitor's coverall, stumbles in with a bucket, blinking at the torchlight. He sees four faces turned toward him and freezes. JAMAL: Sorry. Nobody told me there was a meeting. ASTRID: Jamal, where have you been? JAMAL: Mopping the lobby. The power went out, I thought
[beat 5] AGNES: Mr. Reyes. Put down the bucket. He does. A little water slops onto the floor and spreads across the tiles, catching the emergency light in a thin, bright line.
[beat 6] PUI-LING: Inspector, there's a mop in the sub-basement. Wet.
[beat 7] Agnes looks at Jamal. Jamal looks at the bucket. Cormac steps in front of the exit.

### SCENE s00837 | INT. GRAIN ELEVATOR, TOP FLOOR - NIGHT
Characters: HOLLIS MERCER, RAYMOND TUCK
[beat 0] Wind moans through the slats. Dust drifts in a column of moonlight. Old machinery stands like sleeping animals. HOLLIS MERCER, 50s, a farmer in a canvas jacket, climbs through the floor hatch and holds a lantern high. RAYMOND TUCK, 30s, his nephew, follows, breathing hard. He sets the lantern on a beam. He wipes his hands on his pants and listens.
[beat 1] RAYMOND: Uncle Hollis, I don't like it up here. HOLLIS: It's grain, Ray. It's just grain. RAYMOND: Then why's it moving?
[beat 2] Hollis looks. The grain in the nearest bin shifts in slow ripples, as though breathing. He steps toward it and puts out a hand. Dust sifts around his fingers.
[beat 3] He pulls it back. Raymond grabs his sleeve. RAYMOND: Don't. HOLLIS: Let go.
[beat 4] He shakes him off and leans over the rail. The lantern light sweeps down into the bin.
[beat 5] Something pale shifts under the surface. HOLLIS: Oh, Lord.
[beat 6] He backs away. He bumps into the other man, who yelps and spins, and for a moment they cling to each other, each trying to see over the other's shoulder.
[beat 7] RAYMOND: What is it? Hollis, what is it? HOLLIS: It's Dale Whitby. RAYMOND: Dale's been gone two years. HOLLIS: I know it.
[beat 8] The grain stops moving. The wind drops. From the hatch below, soft and wet, comes a sound like someone clearing his throat. Neither of them answers.
[beat 9] RAYMOND: Hollis. He's behind us.
[beat 10] He drops the lantern. It rolls across the floor, throws wild shadows across the beams, and goes out against a post.

### SCENE s00838 | INT. CAROUSEL FACTORY, PAINTING LOFT - NIGHT
Characters: FOX, MABEL OSEI, KWAME, ISOLDE
[beat 0] Wooden horses hang from the rafters on hooks, half-painted, mouths open. Brass poles in racks. Smell of varnish. FOX, 30s, crew boss, kneels at a floor safe behind a stacked pile of tarps. MABEL OSEI, 50s, safecracker, presses a stethoscope to the dial. KWAME, 20s, wheelman, stands at the window watching the street. ISOLDE, 30s, the inside woman, in a cleaner's smock, holds a mop she does not use.
[beat 1] FOX: Three minutes, people. MABEL: Left. Right. Come on, baby.
[beat 2] KWAME: Cop car. Slow roll. ISOLDE: They check this block every night. FOX: Kwame, lights.
[beat 3] He kills the lamp. Dark, except for a wedge of streetlight on the horses.
[beat 4] MABEL: Two clicks. KWAME: They're stopping. ISOLDE: They're not stopping, they're FOX: Quiet! MABEL: Three clicks. I've got it. I KWAME: They stopped!
[beat 5] Everyone freezes. A flashlight beam crosses a painted horse, pauses on its glass eye, and moves on. Footsteps outside. A radio squawk. Then the car pulls away, tires hissing.
[beat 6] Fox exhales. Kwame laughs once, a cracked bark.
[beat 7] MABEL: Safe's open. ISOLDE: Thank God.
[beat 8] FOX: Grab the bags, we go in ninety.

### SCENE s00839 | INT. NIGHT TRAIN "TRAMONTANA," SLEEPER CORRIDOR - NIGHT
Characters: STRANGER, NOOR HADDAD, LUZIA, EMILIO, BARNABY
[beat 0] Brass fixtures, a narrow carpet, the rattle of rails. Lamplight swings. Every door is closed except one. A STRANGER, thirties, in a gray travel coat, stands outside compartment 7 with his forehead against the glass, watching the dark countryside slide by.
[beat 1] NOOR HADDAD, thirties, comes out of compartment 8 holding a phone to her ear and a paper cup in the other hand. She nearly collides with him. NOOR: Sorry! STRANGER: My fault.
[beat 2] She grins, waves him off, and lifts the phone again. LUZIA: Noor? Are you eating? NOOR: Mãe, I am eating. LUZIA: What are you eating?
[beat 3] Noor looks at her cup. It holds three olives. NOOR: Lunch. LUZIA: It's midnight.
[beat 4] She covers the phone. The stranger is still there, listening, trying not to smile. STRANGER: Is that your mother? NOOR: Everyone's mother. STRANGER: Mine calls me twice a day. It's a record.
[beat 5] NOOR: What's your name, or should I keep calling you "the man who watches trains"? STRANGER: Emilio. NOOR: Noor.
[beat 6] They shake hands, awkward with the cup, and a tiny olive rolls out onto the carpet. Both bend to pick it up and knock heads. EMILIO: Ow. NOOR: Ow!
[beat 7] LUZIA: Noor! What was that noise? NOOR: Nothing, Mãe, a man. LUZIA: Is he handsome?
[beat 8] Noor puts the phone against her chest and Emilio pretends to read the evacuation sign. The train lurches.
[beat 9] The door of compartment 7 slides open and BARNABY, sixty, in a conductor's cap, steps out with a clipboard. BARNABY: Tickets, please. Both of you. Wait. Both of you are in the wrong car.
[beat 10] Noor and Emilio look at each other, then at the tickets they are holding, then at the long corridor. EMILIO: So we're lost. NOOR: Together.
[beat 11] Barnaby clears his throat and stamps both tickets with a firm thump, and neither of them argues.

### SCENE s00840 | INT. FORMER MATTRESS SHOWROOM - ESCAPE ROOM "THE SLEEPLESS VAULT" - DAY
Characters: GRANT PELLEGRINO, WANJIRU KAMAU, FRANCINE DUBOIS
[beat 0] A warehouse of bare walls painted dark purple. A countdown clock glows on a screen: 60:00. Dozens of mattress boxes sit stacked to the ceiling, and a single door has a combination lock on it. GRANT PELLEGRINO, forties, regional manager in a quarter-zip, stands in the center of the room with his arms crossed. WANJIRU KAMAU, thirties, his analyst, sits on a mattress crate holding the instruction card. FRANCINE DUBOIS, fifties, accounts payable, leans against the wall in orthopedic shoes.
[beat 1] He claps his hands once, a sound like a pistol. She does not look up. The other woman does, slowly. GRANT: Okay, team! The clock is ticking! WANJIRU: It's an hour. GRANT: And we'll need every minute of it.
[beat 2] He strides to the lock, tries four numbers, and grunts when it doesn't open. She flips the card over. It says only: "THE CODE IS WHERE YOU SLEEP."
[beat 3] FRANCINE: That's a bed. GRANT: Francine, don't be literal. FRANCINE: It's a literal room.
[beat 4] He rips a lid off a mattress box. Inside: nothing. He tears off another. Then another. Foam peanuts spill across the floor like snow. She watches him with the patience of someone who has been through budget season.
[beat 5] WANJIRU: Grant, maybe we should read the clues first. GRANT: I'm reading them with my hands.
[beat 6] The clock hits 52:00. Wanjiru stands, crosses to the wall, and runs her fingers along a row of numbered pillows. WANJIRU: One to nine. Someone's arranged these. FRANCINE: Count them again.
[beat 7] She does. Her lips move. She stops at six, frowns, lifts pillow six and finds a brass key taped underneath. She holds it up.
[beat 8] Grant lunges. She steps back and his hand closes on air.
[beat 9] GRANT: Give me that. WANJIRU: It's a team game, Grant. GRANT: I'm the team lead. FRANCINE: Then lead.
[beat 10] Nobody speaks. The clock ticks. Grant lowers his hand and looks at the floor, at the peanuts clinging to his shoes. Then at the key, shining in Wanjiru's palm. He drags a hand down his face.
[beat 11] GRANT: Fine. Fine. What do you want to do?
[beat 12] Wanjiru offers the key to Francine, who studies it, turns it over, and tucks it into the pocket of her cardigan.
[beat 13] FRANCINE: First, we eat lunch. GRANT: Lunch? The clock FRANCINE: It's twelve-fifteen. I've missed lunch every Thursday for nine years.
[beat 14] She takes a Tupperware out of her purse, sits on a mattress, and opens it. The smell of curry fills the room. Wanjiru grins and sits beside her. Grant stares, then slowly lowers himself to a crate. She hands him a plastic fork.
[beat 15] The clock drops to 49:00. For a long minute nobody does anything but chew. Then Grant begins to laugh, short, helpless bursts, until he's wiping his eyes with the quarter-zip. She laughs too, quietly, and so does Francine.
[beat 16] GRANT: I've been so tired. WANJIRU: We know.
[beat 17] He pulls off his lanyard and lets it fall onto the mattress. Then he picks it back up, folds it, and puts it in his pocket. Francine hands him a second fork. He takes a bite.
[beat 18] GRANT: This is really good. FRANCINE: It's my mother's.
[beat 19] The clock goes on counting down above their heads, and none of them looks at it.

### SCENE s00841 | INT. MRS. ALDRIDGE'S PORTRAIT STUDIO, PHILADELPHIA - 1867 - DAY
Characters: AUGUSTA, LEOPOLD, BENEDIKT, WILHELMINA, CASIMIR
[beat 0] Skylight, painted backdrops, a brass camera on a tripod. Five people wait in a row of chairs.
[beat 1] AUGUSTA: Do we stand or sit? LEOPOLD: Sit, you goose. We're paying by the plate.
[beat 2] BENEDIKT: Papa says we mustn't smile. Smiling is for children and fools. WILHELMINA: Papa has never been photographed. BENEDIKT: He says it steals the soul. CASIMIR: It steals a dollar and a half, which is worse. LEOPOLD: Casimir, hush.
[beat 3] AUGUSTA: Willa, is my collar straight? WILHELMINA: It is crooked, but the crookedness suits you. AUGUSTA: That is not an answer. CASIMIR: It is the only kind she gives.
[beat 4] BENEDIKT: Does anybody know how long we must hold still? LEOPOLD: Ten seconds. Mrs. Aldridge said so. CASIMIR: I once held still for a whole sermon. WILHELMINA: You fell asleep, Cas. CASIMIR: That is the same thing, only more honest.
[beat 5] AUGUSTA: Leopold, you will not tell Mother we came. LEOPOLD: Of course not. BENEDIKT: She will see the photograph. LEOPOLD: By then it will be too late to be cross. WILHELMINA: And if she cries? LEOPOLD: Then we shall give her a copy to cry on.
[beat 6] AUGUSTA: Hush. Hush, here comes Mrs. Aldridge. CASIMIR: Do not smile. BENEDIKT: I am not smiling.
[beat 7] WILHELMINA: You are all of you smiling. LEOPOLD: Then let us be fools, and have it done.

### SCENE s00842 | INT. GRAND MERIDIAN HOTEL - SUBLEVEL LAUNDRY - NIGHT
Characters: CALLOWAY, SECURITY, SABINE DUMAS, REUBEN OKAFOR, TANSY BRIGHT
[beat 0] Industrial washers thunder in rows. Steam curls along pipes. Carts of white linen stand in the aisles like silent ghosts. CALLOWAY, fifties, a quiet man in a charcoal suit with a hotel badge that says SECURITY, leans on a dryer reading a folded newspaper. SABINE DUMAS, thirties, in a laundry uniform, loads sheets into a washer, never faster than necessary. REUBEN OKAFOR, twenties, a bellhop, sits on a laundry cart eating a sandwich. TANSY BRIGHT, forties, in a conference lanyard, hovers near the stairs.
[beat 1] He turns a page. She slams a washer door. Reuben chews.
[beat 2] TANSY: Excuse me. I think I took a wrong turn. SABINE: Guests aren't allowed down here. TANSY: I know. I'm sorry. I was looking for the ice machine. CALLOWAY: Third floor. TANSY: I'm on the third floor.
[beat 3] Calloway folds his newspaper. Sabine finishes loading and stands straight. Reuben sets down his sandwich.
[beat 4] REUBEN: Sabine, the thing from the Hartley party. SABINE: Not now. REUBEN: He'll want to know where SABINE: Reuben, not now.
[beat 5] He swings off the cart. Calloway takes a step toward Tansy, hands open, friendly. CALLOWAY: Ma'am, I can walk you up. TANSY: That's not necessary. CALLOWAY: I insist.
[beat 6] Tansy turns toward the stairs. Sabine moves to block her. The washers pound on. TANSY: Please move. SABINE: ^Please wait. Two voices, one beat.
[beat 7] Calloway sighs and slides the newspaper into his jacket. CALLOWAY: Tansy Bright. Conference B. You gave a talk on supply chain integrity this afternoon. TANSY: How did you CALLOWAY: We read the program.
[beat 8] She glances from him to Sabine to Reuben. Her hand finds the stair rail. TANSY: I'd like to leave now. REUBEN: Sure. We just want to ask one thing.
[beat 9] SABINE: What did you see in the east elevator this afternoon? TANSY: Nothing. CALLOWAY: That's a very fast answer. TANSY: It's the true one. REUBEN: Ms. Bright, we're not the police. TANSY: That's what worries me.
[beat 10] Calloway nods slowly. He crosses to a washer and pulls the handle. The door swings open, and steam rolls out.
[beat 11] Inside, among the sheets, a conference lanyard hangs from a hook. SABINE: Is that yours?
[beat 12] Tansy looks at her own lanyard. Then at the one in the machine. The numbers match.
[beat 13] TANSY: I don't understand. CALLOWAY: Neither did the last one.
[beat 14] He closes the door. The washers keep running. Nobody moves.

### SCENE s00844 | INT. POLAR STATION HALLEY-9, MEDICAL BAY - NIGHT
Characters: SUNNIVA ERIKSEN, IBRAHIM TARAWNEH, LAKSHMI
[beat 0] A cramped clinic: one exam bed, one monitor, one satellite screen glowing blue on the wall. Wind howls at the walls. DR. SUNNIVA ERIKSEN, 40s, the station physician, stands at the screen with her arms crossed. IBRAHIM TARAWNEH, 30s, a mechanic, sits on the bed with a bandaged hand and a gray face.
[beat 1] SUNNIVA: Dr. Lakshmi, can you hear me? LAKSHMI: I can. Go ahead, Sunniva. Describe the wound. SUNNIVA: Laceration across the palm, six centimeters. Clean edges. He's been bleeding for an hour.
[beat 2] IBRAHIM: It's fine. LAKSHMI: Mr. Tarawneh, I need you to keep your hand elevated. IBRAHIM: It's elevated. SUNNIVA: It's on your knee. IBRAHIM: I'm resting it on my knee.
[beat 3] LAKSHMI: Sunniva, what's his heart rate? SUNNIVA: One-ten. Pressure ninety over sixty. LAKSHMI: That's low for a hand wound. IBRAHIM: I'm cold. SUNNIVA: You're not cold, you're pale.
[beat 4] LAKSHMI: Mr. Tarawneh, how did you cut it? IBRAHIM: Generator. A panel slipped. SUNNIVA: That's not what you told me. IBRAHIM: It's what happened.
[beat 5] LAKSHMI: Ibrahim, I'm going to ask you directly. Did you take anything for the pain? IBRAHIM: No. SUNNIVA: Ibrahim. IBRAHIM: A few of the white ones. Maybe six.
[beat 6] LAKSHMI: Six what? SUNNIVA: Oxycodone. The stock bottle. It's empty. LAKSHMI: The stock bottle held sixty tablets. IBRAHIM: I had a long winter.
[beat 7] SUNNIVA: Ibrahim, how many? IBRAHIM: All of them. Since October.
[beat 8] LAKSHMI: Sunniva, this is no longer a hand injury. SUNNIVA: I know.
[beat 9] IBRAHIM: Please don't tell the crew. LAKSHMI: We will talk about that after we keep you alive.
