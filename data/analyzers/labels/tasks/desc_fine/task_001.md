You refine labels for screenplay scenes. Each item already has a coarse label; pick the ONE best fine label
from the options listed for it (copy the option text exactly).

For each scene write one JSON object:
{"scene_id": "...", "place": "<fine>", "atmos": ["<fine for each coarse atmos, same order>"],
 "beats": ["<fine for beat 0>", "<fine for beat 1>", ...],
 "chars": {"<NAME>": {"role": "<fine>", "traits": ["<fine for each coarse trait, same order>"]}}}

Write all scenes as JSON Lines (one object per line) to /home/user/screenwrite-analyzers/data/analyzers/labels/desc_fine/part_s00040.jsonl with the Write tool. No other text in the file.
Include every scene below. Reply only with "done N".

## Scenes

### SCENE s00040 | INT. BOWLING ALLEY SNACK COUNTER - AFTERNOON
Characters: PIP, NAKASHIMA, WALTER GRUNDY-BELL, OTIS, CARMELA, CORRADO PELLEGRINO
[beat 0] A sleepy league day. The pins clatter in the distance like a slow applause. Five people share a booth built for four. PRISCILLA "PIP" NAKASHIMA (30s, team captain, sunburnt nose) stirs a milkshake with great concentration. Next to her, her husband WALTER GRUNDY-BELL (30s, wearing a shirt that says BOWL OR DIE) eats nachos one chip at a time. Across the table, her brother OTIS (20s, hoodie, headphones) stares into his phone. Squeezed at the end are the Pellegrinos: elderly twins CARMELA and CORRADO PELLEGRINO (70s, matching cardigans), who have been bowling together since the Truman administration.
[beat 1] PIP: Walter, you promised you'd bowl a hundred. WALTER: I bowled ninety-eight, Pip. PIP: That's two short. WALTER: It was a very good ninety-eight. OTIS: It was a gutter and a prayer.
[beat 2] CARMELA: Corrado, pass the salt. CORRADO: Carmela, you don't need salt. CARMELA: I need what I need.
[beat 3] Corrado slides the shaker across the table.
[beat 4] Carmela and Walter both reach for it at the same time and knock the nachos into Pip's lap. All five freeze.
[beat 5] PIP: Walter. WALTER: I'll get napkins.
[beat 6] CORRADO: Carmela, you did that. CARMELA: I did not.
[beat 7] Otis finally lifts his eyes from the phone, examines the carnage, and returns to the screen without a word.
[beat 8] Pip dabs cheese from her knee and takes a slow, controlled sip of milkshake. PIP: Next frame, Walter. Hundred or nothing.
PLACE (bar_restaurant): bar | diner | restaurant | cafe | pub | nightclub bar | food truck | hotel bar | restaurant kitchen
ATMOS (cozy): cozy | homely | nostalgic | comforting | domestic | snug | familiar | sweet | wholesome
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 4 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 5 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 6 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
CHAR PIP ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR PIP TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR PIP TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR WALTER GRUNDY-BELL ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR WALTER GRUNDY-BELL TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR WALTER GRUNDY-BELL TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR OTIS ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR OTIS TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR OTIS TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR CARMELA ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR CARMELA TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR CARMELA TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR CORRADO PELLEGRINO ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR CORRADO PELLEGRINO TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR CORRADO PELLEGRINO TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic

### SCENE s00041 | INT. COMPETITIVE PIE-BAKING TENT, COUNTY FAIR - DAY
Characters: AGGIE, LINDQUIST-REYES, LONNIE BIGGS, MEI-LING ARROYO, SIGMUND PRATT, DOROTHEA, DELPHINE VASQUEZ-MOORE, JUDGE
[beat 0] Rows of folding tables. Flour hangs in sunbeams like pollen. A banner reads: 87TH ANNUAL PIE CHAMPIONSHIP. A judge's gavel sits next to a bell. Six contestants stand behind their pies in tight, silent ranks. AGATHA "AGGIE" LINDQUIST-REYES (60s, blue ribbon pinned to apron, jaw set) polishes a lattice crust with a pastry brush. Beside her, LONNIE BIGGS (40s, sweating through a chef's coat, flour on his eyebrows) arranges cherries with tweezers. At the next station, the young prodigy MEI-LING ARROYO (16, braids, calm as a monk) lets her pie rest. Behind them, SIGMUND PRATT (70s, bolo tie, hands tremble) hums a hymn. At the end of the row, twin sisters DOROTHEA and DELPHINE VASQUEZ-MOORE (50s, identical aprons, identical glares) tap the same rhythm on their tables.
[beat 1] A JUDGE in a straw boater strolls the line, clipboard in hand. He stops at Aggie.
[beat 2] JUDGE: Mrs. Lindquist-Reyes. Third time in the final. Nervous? AGGIE: Never.
[beat 3] Her brush twitches. Lonnie watches it twitch.
[beat 4] JUDGE: And you, young man? LONNIE: Oh, I'm great. Great! Totally relaxed!
[beat 5] A cherry rolls off his tweezers and across the table. He does not move. Everyone watches it roll. It stops against Mei-Ling's pie.
[beat 6] She regards it, then flicks it back to him with one finger.
[beat 7] The judge raises his bell.
[beat 8] DOROTHEA: ^Don't you dare. DELPHINE: ^Don't you dare. The twins speak as one, to each other. Neither blinks.
[beat 9] The judge rings the bell.
[beat 10] All six lift their forks like swords. The tent goes still. Sigmund's hymn gets louder, then stops mid-note.
[beat 11] The judge cuts into Aggie's pie. Steam rises. He takes a bite. Chews. His face reveals nothing.
[beat 12] JUDGE: Hm.
[beat 13] Aggie's brush finally falls from her hand.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (festive): festive | celebratory | joyful | lively | playful | boisterous | euphoric | giddy | warm-hearted
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 7 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 8 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 9 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 10 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 11 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 12 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 13 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR AGGIE ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR AGGIE TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR AGGIE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR LONNIE BIGGS ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR LONNIE BIGGS TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR LONNIE BIGGS TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR MEI-LING ARROYO ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR MEI-LING ARROYO TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR MEI-LING ARROYO TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR DOROTHEA ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR DOROTHEA TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR DOROTHEA TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR DELPHINE VASQUEZ-MOORE ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR DELPHINE VASQUEZ-MOORE TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR DELPHINE VASQUEZ-MOORE TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR JUDGE ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR JUDGE TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR JUDGE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00042 | INT. FARMHOUSE DINING ROOM, WHEAT HARVEST SUPPER - NIGHT
Characters: GRANDFATHER IVAR HALVORSEN, ARNE HALVORSEN, GUNHILD, ASTRID, LEIF, RAMON BEAUMONT-CRUZ
[beat 0] A long pine table sags under platters of ham, corn, and pickled beets. Kerosene lamps. Outside, combines idle in the dark, still warm. Six people sit shoulder to shoulder, and nobody has touched the food. At the head of the table sits GRANDFATHER IVAR HALVORSEN (80s, overalls pressed for the occasion, a hearing aid whistling softly). His son ARNE HALVORSEN (50s, sunburnt neck, silent) cuts bread with great deliberation. Arne's wife GUNHILD (50s, hair pinned too tight) refills a water glass that is already full. Across from them their daughter ASTRID (20s, city shoes, suitcase by the door) stares at her plate. Beside her sits her younger brother LEIF (15, braces, a bruise under one eye), and at the foot of the table, farmhand RAMON BEAUMONT-CRUZ (30s, borrowed shirt, hat in lap) looks anywhere but at the family.
[beat 1] Arne finishes slicing. The knife stays in his hand.
[beat 2] ARNE: Pass the beets. Astrid passes the beets. Her fingers shake.
[beat 3] Gunhild reaches, touches her daughter's wrist, and pulls back as if burned.
[beat 4] IVAR: What's that? ARNE: Nothing, Pa.
[beat 5] IVAR: What's she doing here? ARNE: Eating supper.
[beat 6] Leif knocks over the salt. Nobody moves to clean it. Ramon sets his hat on the table, then takes it back, then folds it in his lap again.
[beat 7] ASTRID: I'm only here for the night. ARNE: The night is long.
[beat 8] He lays the knife on the cloth. It points directly at her. She looks at it. Then at him.
[beat 9] Then she picks up her fork and, very carefully, begins to eat.
PLACE (home): kitchen | living room | bedroom | bathroom | apartment | family house | attic or basement | porch or yard | garage
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 3 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 8 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 9 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
CHAR GRANDFATHER IVAR HALVORSEN ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR GRANDFATHER IVAR HALVORSEN TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR GRANDFATHER IVAR HALVORSEN TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR ARNE HALVORSEN ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR ARNE HALVORSEN TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR ARNE HALVORSEN TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR GUNHILD ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR GUNHILD TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR GUNHILD TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR ASTRID ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR ASTRID TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR ASTRID TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR LEIF ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR LEIF TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR LEIF TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR RAMON BEAUMONT-CRUZ ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR RAMON BEAUMONT-CRUZ TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR RAMON BEAUMONT-CRUZ TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless

### SCENE s00043 | INT. CURLING CLUB LOUNGE, SECOND-FLOOR VIEWING GLASS - EVENING
Characters: HADLEY BRANTFORD, ABDULLAH FARRUKH, WINNIE, SOLBERG, ARCHIE, TWOMBLY, DISPATCH
[beat 0] The rink below glows blue-white. Granite stones glide silently across ice. A scoreboard reads END 9 / TIED 4-4. The lounge is a warm cave of wood paneling, trophies, and a single fan whirring pointlessly. HADLEY BRANTFORD (40s, team skip, wool sweater, thermos of something stronger than tea) leans on the railing. Behind her, on a leather couch, her teammates ABDULLAH FARRUKH (30s, sweeper, ice-burned cheeks) and WINIFRED "WINNIE" SOLBERG (20s, rookie, ponytail, quivering) sit with their brooms across their laps. At the bar, a retired champion, ARCHIBALD "ARCHIE" TWOMBLY (70s, cardigan, commentator headset around his neck), polishes a glass.
[beat 1] HADLEY: Winnie, your delivery. WINNIE: I know. HADLEY: You pulled it left in the eighth. WINNIE: I know. HADLEY: It's all right to know. I'd just like you to fix it.
[beat 2] ABDULLAH: She's got it, Hadley. HADLEY: Does she? WINNIE: I've got it.
[beat 3] HADLEY: Then say it with your whole face. WINNIE: I have got it. HADLEY: Better.
[beat 4] ARCHIE: Back in '71, I threw the last stone with a broken wrist. ABDULLAH: We know, Archie. ARCHIE: Won, too. HADLEY: Everyone's very proud of Archie.
[beat 5] A bell rings below. The teams are called to the ice. Winnie rises first. Abdullah follows, and Hadley screws the cap onto her thermos.
[beat 6] ARCHIE: This is Archie Twombly, live from the Glenmore Club. The last end is about to begin.
[beat 7] Hadley, muttering to herself, does not turn around. HADLEY: Don't blow it, Brantford.
[beat 8] A phone buzzes on the bar. Archie answers. DISPATCH: Archie? It's the broadcast truck. We've lost your feed. Is the skip ready? ARCHIE: She's ready. They're all ready.
[beat 9] Hadley stops at the stairs. She looks down at the ice, pale and shining.
[beat 10] HADLEY: Winnie. Whatever happens, you throw the last one. WINNIE: Me? Hadley, no. HADLEY: You. It's what you were born for. ABDULLAH: She's right. WINNIE: Okay. Okay.
[beat 11] They file down the stairs. Archie watches through the glass as three small figures step onto the ice.
[beat 12] DISPATCH: Archie, we're back. Go ahead. ARCHIE: And here they come.
[beat 13] He lifts a glass to the window and sets it down untouched.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (festive): festive | celebratory | joyful | lively | playful | boisterous | euphoric | giddy | warm-hearted
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 3 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 4 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 5 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 9 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 10 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 11 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 12 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 13 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR HADLEY BRANTFORD ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR HADLEY BRANTFORD TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR HADLEY BRANTFORD TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR ABDULLAH FARRUKH ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR ABDULLAH FARRUKH TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR ABDULLAH FARRUKH TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR WINNIE ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR WINNIE TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR WINNIE TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR ARCHIE ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR ARCHIE TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR ARCHIE TRAIT (confident): confident | self-assured | bold | cocky | poised | brash | commanding | unflappable | swaggering
CHAR DISPATCH ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR DISPATCH TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR DISPATCH TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved

### SCENE s00044 | INT. FAMILY MINIVAN, DRIVE-THRU CAR WASH - DAY
Characters: LORETTA PEMBERTON-SHAH, HAROLD PEMBERTON, ZINNIA
[beat 0] Soap foam crawls across the windshield. Brushes thump and swish. Inside, the world is a muffled aquarium. LORETTA PEMBERTON-SHAH (40s, driver, rings clacking against the wheel) keeps both hands at ten and two. In the passenger seat sits her father, HAROLD PEMBERTON (70s, flat cap, silent for forty miles). In the back, her daughter ZINNIA (14, earbuds in, knees up) watches the brushes beat the glass.
[beat 1] The conveyor tugs the van forward. A giant mitt of foam slaps the roof.
[beat 2] LORETTA: You didn't have to come. HAROLD: I wanted to. LORETTA: You hate car washes. HAROLD: I hate being left behind more.
[beat 3] Zinnia pulls out one earbud. ZINNIA: Who left who?
[beat 4] Loretta and Harold look at each other. Neither speaks. The brushes whump against the doors.
[beat 5] LORETTA: ^Nobody left anybody. HAROLD: ^Nobody left anybody.
[beat 6] Zinnia raises both eyebrows and puts the earbud back.
[beat 7] The conveyor slows. A rinse arch sprays them white.
[beat 8] In the sudden silence, Loretta lets go of the wheel for the first time all day and presses her fingers into her eyes.
[beat 9] Harold reaches over and, with enormous awkwardness, pats her knee twice.
[beat 10] HAROLD: Your mother liked this part. LORETTA: The foam. HAROLD: The foam.
[beat 11] The dryers blast.
[beat 12] Zinnia leans forward between the seats and rests her chin on the headrest, close to both of them. Sunlight breaks through the last of the water. Loretta turns on the wipers.
PLACE (vehicle): car | truck or van | taxi | bus | train car | boat | plane cabin | cockpit | ambulance or police car
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 4 (hides): hides | conceals something | ducks out of sight | pockets evidence | covers up | keeps a secret | lies low | masks a feeling | plays dead
BEAT 5 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 6 (mocks): mocks | taunts | belittles | humiliates | provokes | insults | patronizes | needles | dismisses
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (hides): hides | conceals something | ducks out of sight | pockets evidence | covers up | keeps a secret | lies low | masks a feeling | plays dead
BEAT 9 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 10 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 11 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 12 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
CHAR LORETTA PEMBERTON-SHAH ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR LORETTA PEMBERTON-SHAH TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR LORETTA PEMBERTON-SHAH TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful
CHAR HAROLD PEMBERTON ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR HAROLD PEMBERTON TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR HAROLD PEMBERTON TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR ZINNIA ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR ZINNIA TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR ZINNIA TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed

### SCENE s00045 | INT. ORBITAL HYDROPONICS BAY, STATION KESTREL - CONTINUOUS
Characters: COMMANDER INGRID SORENSEN-AKINTOLA, FELIX OYELARAN-DUBOIS, MARISOL TRAN, UNIT FOUR, CASIMIR OKONKWO-BLYTHE, ORION
[beat 0] Racks of lettuce under violet light. Pipes sweat. A hum like a slow pulse. The floor is a grid, the ceiling a curve. COMMANDER INGRID SORENSEN-AKINTOLA (50s, gray crop, crisp jumpsuit) walks the aisle with a tablet. Behind her trails botanist FELIX OYELARAN-DUBOIS (30s, goggles pushed up, hands green to the wrist). At a bench, engineer MARISOL TRAN (30s, ponytail, wrench in hand) tightens a valve. In the far corner, a robot technician, UNIT FOUR (a squat maintenance drone with a cheerful chirp), polishes a lens. The newest arrival is medic CASIMIR OKONKWO-BLYTHE (40s, trim beard), who leans in the hatchway.
[beat 1] INGRID: Status report, everyone. Now. FELIX: Lettuce is thriving. MARISOL: Valve's holding. UNIT FOUR: Beep. All systems nominal. CASIMIR: Medically, I'm bored. INGRID: That's what I like to hear.
[beat 2] A low metallic thud echoes from the water tank behind the racks. All five turn.
[beat 3] FELIX: That's not supposed to happen. MARISOL: Of course it is.
[beat 4] Ingrid raises a hand. Silence.
[beat 5] Another thud, closer. The lights dim a fraction. Unit Four chirps and rolls backward.
[beat 6] INGRID: Felix, Marisol, check the tank. Casimir, with me. FELIX: ^Yes, Commander. MARISOL: ^Yes, Commander.
[beat 7] They reply in unison and split. Felix and Marisol creep toward the tank. Ingrid and Casimir circle the racks opposite, tablet and medkit held like weapons.
[beat 8] Behind the tank, a fat grey cat, ORION, sits atop a coil of hose, licking one paw. It meows.
[beat 9] Everyone stops. Felix laughs first, a startled bark. Marisol sags against the rack. Ingrid pinches the bridge of her nose.
[beat 10] INGRID: Who smuggled a cat onto my station?
[beat 11] Unit Four rolls up and nuzzles the cat's head with a mechanical arm. UNIT FOUR: Beep. New crew member detected.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 5 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 6 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 7 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 8 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 9 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 10 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 11 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
CHAR COMMANDER INGRID SORENSEN-AKINTOLA ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR COMMANDER INGRID SORENSEN-AKINTOLA TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR COMMANDER INGRID SORENSEN-AKINTOLA TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR FELIX OYELARAN-DUBOIS ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR FELIX OYELARAN-DUBOIS TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR FELIX OYELARAN-DUBOIS TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR MARISOL TRAN ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR MARISOL TRAN TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR MARISOL TRAN TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR UNIT FOUR ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR UNIT FOUR TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR UNIT FOUR TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR CASIMIR OKONKWO-BLYTHE ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR CASIMIR OKONKWO-BLYTHE TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR CASIMIR OKONKWO-BLYTHE TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR ORION ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR ORION TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR ORION TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree

### SCENE s00046 | EXT. SHELLED FARMHOUSE ROOF, ARDENNES - DAWN
Characters: GENE, BRODSKY, PRIVATE LOUIS TRUDEAU-PARK, SERGEANT MARGUERITE OYELOWO
[beat 0] Snow dusts the broken tiles. Beyond the ridge, the thud of far guns. CORPORAL EUGENE "GENE" BRODSKY (20s, frozen mustache) crouches behind a chimney with binoculars. Beside him, PRIVATE LOUIS TRUDEAU-PARK (19, baby-faced, rifle hugged) shivers. A few yards away, SERGEANT MARGUERITE OYELOWO (30s, tough, her helmet dented) sits against a beam, tying a rag around her wrist.
[beat 1] She tightens it with her teeth. He lowers the binoculars.
[beat 2] GENE: Sarge, I count six. OYELOWO: Count again. GENE: Eight. OYELOWO: Better.
[beat 3] TRUDEAU-PARK: Is it true what they say? About the Tigers? OYELOWO: Louis, eat your biscuit. TRUDEAU-PARK: I'm not hungry. OYELOWO: I didn't ask.
[beat 4] He opens the biscuit tin. His fingers are blue.
[beat 5] She reaches over and, without a word, tucks his scarf tighter.
[beat 6] GENE: They're moving.
[beat 7] She rises on one knee and takes the binoculars. Her jaw hardens.
[beat 8] OYELOWO: Gene, wire the others. Louis, with me.
[beat 9] They slide down the roof toward the ladder.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 4 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 5 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 9 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
CHAR GENE ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR GENE TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR GENE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR PRIVATE LOUIS TRUDEAU-PARK ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR PRIVATE LOUIS TRUDEAU-PARK TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR PRIVATE LOUIS TRUDEAU-PARK TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR SERGEANT MARGUERITE OYELOWO ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR SERGEANT MARGUERITE OYELOWO TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR SERGEANT MARGUERITE OYELOWO TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00047 | INT. OPERA HOUSE COAT CHECK ROOM - NIGHT
Characters: SERAPHINA DUMONT, STRANGER, LADY CORDELIA ASHBY-FORSYTHE, DELACROIX-WEST
[beat 0] Racks of furs and top hats in the dim glow of a single bulb. A velvet curtain divides the room from the lobby, where an aria swells, muffled. SERAPHINA DUMONT (30s, ruby evening gown, a claim ticket pinched between gloved fingers) presses a hat check into the hand of the attendant, a skinny youth with oversized cufflinks. Behind her, a tall figure in a doorman's coat keeps watch at the curtain: this is the STRANGER, handsome, impassive, a scar through one brow. In the corner, an older woman in a fur stole examines the rack, LADY CORDELIA ASHBY-FORSYTHE (60s, diamonds heavy at her throat).
[beat 1] The attendant fetches a coat. The stranger glances at Lady Cordelia, who has turned her back.
[beat 2] Seraphina slips a small silver key into the coat's lining while the attendant shakes out the sleeve, and the stranger, noticing her motion, slides smoothly between them and the curtain.
[beat 3] STRANGER: Madame, your coat. SERAPHINA: Thank you.
[beat 4] LADY CORDELIA: Is that the Dumont girl? SERAPHINA: Lady Cordelia. How lovely.
[beat 5] The attendant, flustered, drops a scarf. Seraphina and the stranger both bend to catch it and their hands collide.
[beat 6] They look at each other, and in that look, a plan changes.
[beat 7] LADY CORDELIA: I do hope you're not leaving before the second act. SERAPHINA: Never.
[beat 8] The aria hits its high note. As the room shakes, the stranger lifts the stole from Lady Cordelia's shoulders and, in the same breath, passes it to Seraphina, who drapes it over her arm like a waiter's towel.
[beat 9] LADY CORDELIA: My stole! STRANGER: I believe it was mislaid, Madame.
[beat 10] Seraphina hands it back with an apologetic smile, but one diamond is gone from the hem. The stranger's coat pocket rattles softly as he steps aside to let her pass.
[beat 11] Seraphina swans through the curtain. The stranger, whom the attendant addresses as MR. DELACROIX-WEST, follows without a backward glance.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (festive): festive | celebratory | joyful | lively | playful | boisterous | euphoric | giddy | warm-hearted
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (hides): hides | conceals something | ducks out of sight | pockets evidence | covers up | keeps a secret | lies low | masks a feeling | plays dead
BEAT 3 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 6 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 7 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 8 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 9 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 10 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 11 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
CHAR SERAPHINA DUMONT ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR SERAPHINA DUMONT TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative
CHAR SERAPHINA DUMONT TRAIT (confident): confident | self-assured | bold | cocky | poised | brash | commanding | unflappable | swaggering
CHAR STRANGER ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR STRANGER TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR STRANGER TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR LADY CORDELIA ASHBY-FORSYTHE ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR LADY CORDELIA ASHBY-FORSYTHE TRAIT (arrogant): arrogant | smug | condescending | vain | entitled | pompous | superior | boastful | self-important
CHAR LADY CORDELIA ASHBY-FORSYTHE TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved

### SCENE s00048 | INT. ROOFTOP GREENHOUSE, LAUNDROMAT BUILDING - DUSK
Characters: MIRIAM STOLZ-AGYEMAN, WENDELL, TOVA, CASPIAN DRUMMOND
[beat 0] Cracked glass panes. Tomato vines grown wild. A rusted fan turns without wind. Laundry lines sag with sheets, still dripping. MIRIAM STOLZ-AGYEMAN (60s, silver bun, gardening gloves) trims a vine. Her son WENDELL (30s, work boots, tie loosened) sits on an upturned bucket. His wife TOVA (30s, pregnant, hand on her belly) leans in the doorway. Their neighbor, old CASPIAN DRUMMOND (80s, oxygen tank, tiny sunhat), dozes in a lawn chair.
[beat 1] MIRIAM: Landlord says we have until Friday. WENDELL: Mom. MIRIAM: Friday. That's four days.
[beat 2] TOVA: We'll find another roof. MIRIAM: Another roof won't have these.
[beat 3] She holds up a tomato, ripe and enormous. Wendell looks at it, then at his wife.
[beat 4] CASPIAN: Beefsteak. MIRIAM: Cranberry heirloom. CASPIAN: Beefsteak.
[beat 5] Miriam sighs and places the tomato in Tova's hand. Tova weighs it, smiling. TOVA: It's heavy.
[beat 6] WENDELL: Mom, you can't carry this up the stairs forever. MIRIAM: Watch me.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 2 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 3 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 4 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 5 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 6 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
CHAR MIRIAM STOLZ-AGYEMAN ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR MIRIAM STOLZ-AGYEMAN TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR MIRIAM STOLZ-AGYEMAN TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR WENDELL ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR WENDELL TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR WENDELL TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR TOVA ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR TOVA TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR TOVA TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR CASPIAN DRUMMOND ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR CASPIAN DRUMMOND TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR CASPIAN DRUMMOND TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan

### SCENE s00049 | EXT. CLIFFSIDE STAIRCASE OF THE WIND TEMPLE - DAWN
Characters: ALDRIC VANTERPOOL, THESSALY, SORREL IRONBARK, BARNABUS GLIMMERWICK
[beat 0] Ten thousand steps, hewn into rock. Prayer flags snap. Clouds boil below. ALDRIC VANTERPOOL (30s, battered armor, scabbard empty) climbs, panting. Behind him, a hooded girl, THESSALY (teen, silver eyes, bare feet) hops step to step like a goat. Further down, burly SORREL IRONBARK (40s, axe on back, braided beard) hauls himself up, wheezing. Last comes the old wizard BARNABUS GLIMMERWICK (80s, crooked staff, patched robes), who rests on every third step.
[beat 1] ALDRIC: Barnabus, hurry! BARNABUS: I am a wizard, not a mountain goat! THESSALY: I'm a mountain goat. SORREL: Gods, the stairs.
[beat 2] Thessaly stops at a landing. Above, a stone gate, and between its pillars, a shimmering curtain of wind. She puts out her hand. It ripples.
[beat 3] THESSALY: It's open. ALDRIC: Is it safe? THESSALY: No. SORREL: Good. I dislike safe.
[beat 4] Barnabus catches up, bent double. BARNABUS: Aldric, listen. When we cross, the Wind Warden will ask each of us one question. ALDRIC: What question? BARNABUS: What we fear most.
[beat 5] SORREL: ^That's easy. THESSALY: ^That's easy. They answer together, then glare at each other.
[beat 6] ALDRIC: Sorrel? SORREL: Being forgotten.
[beat 7] ALDRIC: Thessaly? THESSALY: Being found.
[beat 8] Aldric draws a breath. Wind howls through the gate. He steps toward it, hand on the empty scabbard.
[beat 9] ALDRIC: Then we go together.
PLACE (nature): forest | beach | field | mountain | desert | lake or river | garden or park | cave | snowfield
ATMOS (dreamy): dreamy | surreal | hazy | magical | whimsical | otherworldly | hypnotic | lyrical | wistful
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 5 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 6 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 7 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 8 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 9 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
CHAR ALDRIC VANTERPOOL ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR ALDRIC VANTERPOOL TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR ALDRIC VANTERPOOL TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR THESSALY ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR THESSALY TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR THESSALY TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR SORREL IRONBARK ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR SORREL IRONBARK TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR SORREL IRONBARK TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR BARNABUS GLIMMERWICK ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR BARNABUS GLIMMERWICK TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR BARNABUS GLIMMERWICK TRAIT (kind): kind | compassionate | considerate | patient with others | thoughtful | tender | forgiving | selfless | polite

### SCENE s00050 | INT. NIGHT BUS, MIDWEST HIGHWAY - NIGHT
Characters: CELESTE ARMITAGE-NOLAN, DOM, ACHEBE, DRIVER
[beat 0] Half-lit aisle. Rows of sleeping strangers. The engine drones like a long exhale. Rain streaks the windows. CELESTE ARMITAGE-NOLAN (30s, red scarf, paperback open on her knee) sits halfway back. Across the aisle, DOMINIC "DOM" ACHEBE (30s, rumpled suit, cold coffee) has been staring at her book for twenty minutes.
[beat 1] He finally leans over. DOM: Is it any good? CELESTE: It's a murder mystery. DOM: Does everyone die? CELESTE: Mostly. DOM: Sounds restful.
[beat 2] She laughs, quietly, despite herself.
[beat 3] The bus hits a pothole and the whole cabin lurches. Her book slides to the floor.
[beat 4] Dom retrieves it and hands it back. Their fingers touch.
[beat 5] DRIVER: Folks, we're pulling into Dubuque for a ten-minute break. Stretch your legs. Don't wander. CELESTE: Don't wander, he says. DOM: Where would I go?
[beat 6] He stands. The bus brakes hiss.
[beat 7] Celeste rises too, and they collide in the narrow aisle. CELESTE: Sorry. DOM: No, I'm sorry.
[beat 8] CELESTE: I'm Celeste. DOM: Dom.
[beat 9] They shake hands, lingering.
[beat 10] DRIVER: Anybody traveling to Chicago, I'll be holding the bus for exactly ten minutes. Not eleven.
[beat 11] DOM: Chicago. CELESTE: Me too.
[beat 12] He looks at her, hope in his face. DOM: Then I guess we have eleven hours.
[beat 13] She picks up her book. CELESTE: Then you'd better tell me who did it.
PLACE (vehicle): car | truck or van | taxi | bus | train car | boat | plane cabin | cockpit | ambulance or police car
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 2 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
BEAT 7 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 8 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 9 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 10 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 11 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 12 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 13 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
CHAR CELESTE ARMITAGE-NOLAN ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR CELESTE ARMITAGE-NOLAN TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR CELESTE ARMITAGE-NOLAN TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR DOM ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR DOM TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR DOM TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR DRIVER ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR DRIVER TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR DRIVER TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00051 | INT. AMATEUR THEATER GREEN ROOM - NIGHT
Characters: THEODORA, ALCOTT-WELLS, BILLIE, FAIRCHILD, ALOYSIUS PENDERGAST-MWANGI, GWENDOLINE POPE, ARCHIE, TREMAINE, RODERICK SPARROW-LUND
[beat 0] Costumes hang in clouds. Powder, hairspray, a half-eaten sandwich. A speaker on the wall hisses with the thin sound of an audience settling. THEODORA "TEDDY" ALCOTT-WELLS (50s, tragedy mask on her forehead) stands at the mirror adjusting a Roman toga. Behind her, her understudy WILHELMINA "BILLIE" FAIRCHILD (20s, script clutched like a rosary) mouths lines to herself. Across the room, the director ALOYSIUS PENDERGAST-MWANGI (60s, cravat, velvet jacket) wrings his hands. At the costume rack, wardrobe mistress GWENDOLINE POPE (40s, pins in her mouth) hems a cape. Beside her sit the leading men: ARCHIBALD "ARCHIE" TREMAINE (30s, a laurel wreath), and RODERICK SPARROW-LUND (40s, a plastic sword).
[beat 1] THEODORA: She's late. Where is she? ALOYSIUS: Who? THEODORA: Calpurnia. The lead. ALOYSIUS: She's in the lavatory. THEODORA: She's been in the lavatory for forty minutes.
[beat 2] ARCHIE: Maybe she fell in. RODERICK: That's not funny, Archie. ARCHIE: It's a little funny.
[beat 3] GWENDOLINE: Hold still, Teddy. THEODORA: I am still.
[beat 4] BILLIE: Mr. Pendergast-Mwangi, I know her lines. ALOYSIUS: Darling, you are an understudy. BILLIE: I'm a good understudy. RODERICK: She really is, Aloysius. ARCHIE: She did the balcony scene in her sleep last week. ALOYSIUS: Because that is an excellent use of sleep.
[beat 5] The speaker hisses louder: the house lights dim, applause rises.
[beat 6] THEODORA: Aloysius, she's not coming. ALOYSIUS: She will. THEODORA: She will not.
[beat 7] GWENDOLINE: She will if I go and get her.
[beat 8] She spits the pins into her palm and marches out.
[beat 9] ARCHIE: Billie, you're up. BILLIE: Me? RODERICK: Take the wreath.
[beat 10] Archie lifts the wreath off his own head and lowers it onto hers.
[beat 11] She stares into the mirror. Her hands stop shaking.
[beat 12] Gwendoline sails back in, towing a tearful woman in a bathrobe. GWENDOLINE: Here she is.
[beat 13] Billie and the woman in the bathrobe look at each other, and Billie hands back the wreath without a word.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 3 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 4 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 7 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 8 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
BEAT 9 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 10 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 11 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 12 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 13 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
CHAR THEODORA ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR THEODORA TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR THEODORA TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR ALOYSIUS PENDERGAST-MWANGI ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR ALOYSIUS PENDERGAST-MWANGI TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR ALOYSIUS PENDERGAST-MWANGI TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR BILLIE ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR BILLIE TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR BILLIE TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR ARCHIE ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR ARCHIE TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR ARCHIE TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR RODERICK SPARROW-LUND ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR RODERICK SPARROW-LUND TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR RODERICK SPARROW-LUND TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR GWENDOLINE POPE ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR GWENDOLINE POPE TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR GWENDOLINE POPE TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle

### SCENE s00052 | INT. COURTROOM, MARITIME LAW DIVISION - DAY
Characters: JUDGE HORTENSE ABELARD-OKONKWO, PERCIVAL GRIMSDYKE, BEATRIX NAKAMURA-FLYNN
[beat 0] Dark oak. Brass fittings. A model of a container ship sits on the evidence table, its cranes frozen mid-lift. Salt-water stains the carpet near the jury box, a leak the clerk has long stopped noticing. JUDGE HORTENSE ABELARD-OKONKWO (60s, half-moon glasses, voice like creaking rope) presides. At the plaintiff's table stands attorney PERCIVAL GRIMSDYKE (50s, pinstripe, cane) with a thick binder. Across the aisle, defense counsel BEATRIX NAKAMURA-FLYNN (40s, severe bun, red pen) leans casually on her chair.
[beat 1] JUDGE ABELARD-OKONKWO: Mr. Grimsdyke, you may proceed with your closing. GRIMSDYKE: Thank you, Your Honor.
[beat 2] He rises slowly, leaning on the cane. He addresses the empty jury box as though it were full.
[beat 3] GRIMSDYKE: Ladies and gentlemen, this case is about a ship. It is also about a promise. NAKAMURA-FLYNN: It's about a bill of lading. GRIMSDYKE: The Meridian Star sailed from Rotterdam with four thousand containers. Four thousand promises. Not one was delivered intact.
[beat 4] JUDGE ABELARD-OKONKWO: Mr. Grimsdyke, I hope you're going somewhere with this. GRIMSDYKE: Yes, Your Honor.
[beat 5] He lifts the model ship from the table and turns it in his hands.
[beat 6] GRIMSDYKE: My client alleges that Ms. Nakamura-Flynn's client knowingly loaded cargo in violation of Article Nine.
[beat 7] NAKAMURA-FLYNN: Objection. Speculation. JUDGE ABELARD-OKONKWO: Sustained. Rephrase.
[beat 8] GRIMSDYKE: My client alleges that the knowledge was there. NAKAMURA-FLYNN: Objection. Still speculation.
[beat 9] JUDGE ABELARD-OKONKWO: Overruled. I'm curious.
[beat 10] Nakamura-Flynn sits, tapping her pen. GRIMSDYKE: Finally.
[beat 11] He sets the model down gently. It tips on its stand, a crane snaps off, and the sound ricochets around the silent room.
[beat 12] GRIMSDYKE: Four thousand promises, ladies and gentlemen. And a clerk who never fixed the leak.
[beat 13] JUDGE ABELARD-OKONKWO: Mr. Grimsdyke. GRIMSDYKE: Your Honor? JUDGE ABELARD-OKONKWO: That's enough.
[beat 14] He bows, retrieves his cane, and sits.
[beat 15] Nakamura-Flynn rises, buttons her jacket, and walks calmly to the evidence table. She picks up the broken crane and weighs it in her palm.
[beat 16] NAKAMURA-FLYNN: Your Honor, my learned friend has just proven my case. JUDGE ABELARD-OKONKWO: Do enlighten us.
[beat 17] NAKAMURA-FLYNN: A crane cannot be loaded wrong. It can only be broken. And broken things get insured.
[beat 18] Grimsdyke closes his eyes. The judge exhales through her nose, and removes her glasses.
[beat 19] JUDGE ABELARD-OKONKWO: We will recess for lunch.
PLACE (institution): courtroom | hospital ward | police precinct | interrogation room | classroom | church | prison | library | government office
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (sterile): sterile | clinical | cold | corporate | bureaucratic | impersonal | antiseptic | formal | detached
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 3 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 6 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 7 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 8 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 9 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 10 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 11 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 12 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 13 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 14 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 15 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 16 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 17 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 18 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 19 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
CHAR JUDGE HORTENSE ABELARD-OKONKWO ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR JUDGE HORTENSE ABELARD-OKONKWO TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR JUDGE HORTENSE ABELARD-OKONKWO TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR PERCIVAL GRIMSDYKE ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR PERCIVAL GRIMSDYKE TRAIT (arrogant): arrogant | smug | condescending | vain | entitled | pompous | superior | boastful | self-important
CHAR PERCIVAL GRIMSDYKE TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR BEATRIX NAKAMURA-FLYNN ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR BEATRIX NAKAMURA-FLYNN TRAIT (confident): confident | self-assured | bold | cocky | poised | brash | commanding | unflappable | swaggering
CHAR BEATRIX NAKAMURA-FLYNN TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan

### SCENE s00053 | INT. OPEN-PLAN OFFICE, SYNERGY HOLDINGS - DAY
Characters: RAY, FENNIMORE-SALAZAR, DELPHINE OKAFOR-LUND, INTERN QUENTIN BOSCH
[beat 0] Cubicles. Motivational posters. A broken ficus. A whiteboard reads: PIVOT TO JOY. RAYMOND "RAY" FENNIMORE-SALAZAR (40s, vice president of Vibes, a lanyard of lanyards) claps his hands. DELPHINE OKAFOR-LUND (30s, tired, double-fisted coffee) watches from her desk. Next to her sits INTERN QUENTIN BOSCH (20s, tie from a high school dance).
[beat 1] RAY: Team! Quick sync. DELPHINE: It's four-fifty-nine. RAY: Perfect time for a sync! QUENTIN: He means a meeting. RAY: A circle-back! A deep dive! A moment of alignment! DELPHINE: It's a Friday. RAY: Friday is the new Monday.
[beat 2] He draws a giant circle on the whiteboard, then another, then a third. Delphine and Quentin stare, appalled.
[beat 3] RAY: Who can tell me what this means? QUENTIN: ^Three circles. DELPHINE: ^Three circles.
[beat 4] They say it together. Ray points at them both, delighted.
[beat 5] RAY: Exactly! The Triple Loop!
[beat 6] DELPHINE: Ray. RAY: Yes? DELPHINE: I'm going home. RAY: Is that a no on the loop?
[beat 7] She gathers her bag. Quentin, loyal, stays seated.
[beat 8] QUENTIN: I like the loop, Ray. Ray beams.
[beat 9] Delphine pauses in the doorway. DELPHINE: Quentin. Run.
PLACE (workplace): office | newsroom | laboratory | workshop | studio | conference room | farm | construction site | server room
ATMOS (sterile): sterile | clinical | cold | corporate | bureaucratic | impersonal | antiseptic | formal | detached
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 2 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 3 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 4 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 5 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 6 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 9 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
CHAR RAY ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR RAY TRAIT (arrogant): arrogant | smug | condescending | vain | entitled | pompous | superior | boastful | self-important
CHAR RAY TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR DELPHINE OKAFOR-LUND ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR DELPHINE OKAFOR-LUND TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR DELPHINE OKAFOR-LUND TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR INTERN QUENTIN BOSCH ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR INTERN QUENTIN BOSCH TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR INTERN QUENTIN BOSCH TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle

### SCENE s00054 | EXT. DUST-CHOKED TRADING POST, HIGH PLAINS - AFTERNOON
Characters: SALT, NAILS, SPARROW, CROWFOOT, POSTMISTRESS CLEMENTINE VANDERMEER, SHERIFF AUGUSTINE BELL, WILLET FAIRBANKS
[beat 0] A sagging porch. A horse trough green with scum. Wind pushes tumbleweeds past hitching posts that have not held a horse in weeks. A hand-painted sign reads: SALT - NAILS - SOULS. ELIJAH "SPARROW" CROWFOOT (30s, braided hair, buckskin vest) leans on a porch rail, whittling. Inside the doorway sits POSTMISTRESS CLEMENTINE VANDERMEER (60s, gingham, shotgun across her lap) with a ledger. A rider approaches: SHERIFF AUGUSTINE BELL (40s, moustache, sweat-stained hat), trailed by a young deputy, WILLET FAIRBANKS (18, gun belt too big for his hips).
[beat 1] Bell dismounts and strides to the porch. Willet slides off his horse, trips over a stirrup, rights himself, and follows, one hand on his holster.
[beat 2] BELL: Sparrow. SPARROW: Sheriff.
[beat 3] BELL: You were seen near the Henderson place. SPARROW: Lot of people were near the Henderson place.
[beat 4] CLEMENTINE: Gus, that boy was at my counter all morning. BELL: Was he? CLEMENTINE: Bought nails.
[beat 5] BELL: How many?
[beat 6] CLEMENTINE: Enough for a coffin.
[beat 7] A cold quiet. Sparrow continues to whittle. Willet licks his lips.
[beat 8] WILLET: Sheriff, should I-- BELL: No.
[beat 9] Sparrow finishes the carving and holds it up: a tiny wooden bird. He sets it on the rail between them.
[beat 10] SPARROW: I didn't kill him. BELL: No one said you did.
[beat 11] SPARROW: Then why's the boy sweating?
[beat 12] Everyone looks at Willet. He blanches. WILLET: It's hot.
[beat 13] CLEMENTINE: ^It's ninety degrees. BELL: ^It's ninety degrees.
[beat 14] They speak together, and Bell shoots her a look. She shrugs, rocks the shotgun on her lap, and says nothing more.
[beat 15] Sparrow slides the bird toward Willet.
[beat 16] The boy stares at it, shaking, and as Bell turns to him, the wind drops. Even the tumbleweeds stop rolling.
PLACE (shop): store | market | pharmacy | pawn shop | bookstore | gas station | bakery | boutique | convenience store
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 4 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 5 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 9 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 10 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 11 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 12 (lies): lies to | deceives | bluffs | covers a story for | misleads | feigns innocence to | plays along with | cons | fakes it with
BEAT 13 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 14 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 15 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 16 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR SPARROW ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR SPARROW TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR SPARROW TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR SHERIFF AUGUSTINE BELL ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR SHERIFF AUGUSTINE BELL TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR SHERIFF AUGUSTINE BELL TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR POSTMISTRESS CLEMENTINE VANDERMEER ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR POSTMISTRESS CLEMENTINE VANDERMEER TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR POSTMISTRESS CLEMENTINE VANDERMEER TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR WILLET FAIRBANKS ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR WILLET FAIRBANKS TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR WILLET FAIRBANKS TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated

### SCENE s00055 | INT. UNDERGROUND PARKING STRUCTURE, LEVEL P4 - NIGHT
Characters: DETECTIVE IGNACIO PALAZZO-MENSAH, COLLETTE ARMSTRONG-DUBOIS, INFORMANT, BRIDGET QUILLFEATHER, DETECTIVE MARCUS OYELARAN-STROUD, SOPHRONIA HALLIWELL
[beat 0] Concrete columns. Dripping pipes. Fluorescent tubes that buzz and flicker. Oil stains like ink blots. At the far end, a stairwell door hangs ajar. DETECTIVE IGNACIO PALAZZO-MENSAH (40s, trench coat, a limp, a gun held low) slips between two parked sedans. Behind him, FBI analyst COLLETTE ARMSTRONG-DUBOIS (30s, ballistic vest over a cardigan) clutches a laptop. In the shadows, a figure in a gray hoodie crouches: the INFORMANT, BRIDGET QUILLFEATHER (20s, nervous eyes, pale as paper). A ways off, DETECTIVE MARCUS OYELARAN-STROUD (50s, radio at his collar) circles the perimeter, and in a car at the exit ramp, driver SOPHRONIA HALLIWELL (30s, headset, steady) watches the mirror.
[beat 1] IGNACIO: Bridget, where's the package? BRIDGET: Level three. In the van.
[beat 2] COLLETTE: Level three isn't on the schematic. BRIDGET: It's not on anything.
[beat 3] MARCUS: All units, hold positions.
[beat 4] A steel door clangs somewhere. Everyone freezes. A distant engine idles. Headlights sweep across the pillars and swing away.
[beat 5] IGNACIO: Easy.
[beat 6] Collette types something silent. Bridget wipes her sweaty palms on her knees.
[beat 7] SOPHRONIA: Exit ramp clear. For now.
[beat 8] BRIDGET: They'll see the lights. IGNACIO: They already know we're here. BRIDGET: Then why--
[beat 9] A gunshot cracks across the garage. A windshield bursts.
[beat 10] Ignacio shoves Bridget flat. Collette dives behind a column, laptop sliding across the concrete. Marcus sprints toward the sound. Sophronia guns the engine and the car leaps forward.
[beat 11] Another shot. Another. The echoes pile on each other until the whole structure rings like a struck bell.
[beat 12] MARCUS: Contact! North ramp!
[beat 13] IGNACIO: Get her out! COLLETTE: What about you? IGNACIO: Go!
[beat 14] Collette grabs Bridget's hand and they run for the stairwell, ducking low between sedans.
[beat 15] Ignacio rises, fires twice, and ducks.
[beat 16] SOPHRONIA: Marcus, Ignacio, I'm coming around.
[beat 17] Her car shrieks around a column and slams to a stop in front of Collette and Bridget. The back door flies open. SOPHRONIA: Get in!
[beat 18] They pile into the back seat. Ignacio sprints, vaults the hood, and drops into the front. Marcus dives in last.
[beat 19] The car lurches forward as bullets rake the trunk. MARCUS: Drive! SOPHRONIA: I am driving!
[beat 20] The car roars up the ramp and out into the rain.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (gritty): gritty | seedy | grimy | dangerous | rough | lawless | sordid | raw | violent
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 4 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 5 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 6 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 9 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 10 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 11 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 12 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 13 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 14 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 15 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 16 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 17 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 18 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 19 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 20 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
CHAR DETECTIVE IGNACIO PALAZZO-MENSAH ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR DETECTIVE IGNACIO PALAZZO-MENSAH TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR DETECTIVE IGNACIO PALAZZO-MENSAH TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR FBI ANALYST COLLETTE ARMSTRONG-DUBOIS ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR FBI ANALYST COLLETTE ARMSTRONG-DUBOIS TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR FBI ANALYST COLLETTE ARMSTRONG-DUBOIS TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR BRIDGET QUILLFEATHER ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR BRIDGET QUILLFEATHER TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR BRIDGET QUILLFEATHER TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR DETECTIVE MARCUS OYELARAN-STROUD ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR DETECTIVE MARCUS OYELARAN-STROUD TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR DETECTIVE MARCUS OYELARAN-STROUD TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR SOPHRONIA HALLIWELL ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR SOPHRONIA HALLIWELL TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR SOPHRONIA HALLIWELL TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely

### SCENE s00056 | INT. FUNERAL PARLOR BACK OFFICE - NIGHT
Characters: LARRY, PIETRZAK, VERONICA CHEN-ADEYEMI, MILO, TOBIAS WREN, CALLER
[beat 0] Wood paneling. Lilies in a vase. A desk lamp turned low. A phone sits on the blotter like a sleeping animal. LAWRENCE "LARRY" PIETRZAK (50s, undertaker's black suit, tie loosened) counts bills at the desk. In the armchair sits his partner, VERONICA CHEN-ADEYEMI (40s, perfect posture, gloves on). On the sofa, a boy, MILO (teen, school blazer), turns an unlit candle over in his hands. At the window stands a figure, silent, looking out at the parking lot: TOBIAS WREN (30s, long coat).
[beat 1] The phone rings. Veronica lifts her eyes. Larry stops counting.
[beat 2] LARRY: Leave it. VERONICA: It's the fourth time.
[beat 3] Larry's thumb works the edge of the bills. Milo sets the candle down.
[beat 4] MILO: Should I-- LARRY: No.
[beat 5] The phone rings. Rings. Rings.
[beat 6] Wren turns from the window, watches the receiver, and picks it up without speaking. He listens. A thin voice crackles through.
[beat 7] CALLER: Is the arrangement still on for tomorrow?
[beat 8] Wren looks at Larry. Larry nods once.
[beat 9] WREN: It is.
[beat 10] He hangs up.
[beat 11] Veronica unfolds her gloved hands, and, for the first time, Larry meets Milo's eyes.
PLACE (workplace): office | newsroom | laboratory | workshop | studio | conference room | farm | construction site | server room
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 3 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 4 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 7 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 8 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 9 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 10 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 11 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
CHAR LARRY ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR LARRY TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR LARRY TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR VERONICA CHEN-ADEYEMI ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR VERONICA CHEN-ADEYEMI TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR VERONICA CHEN-ADEYEMI TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative
CHAR MILO ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR MILO TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR MILO TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR TOBIAS WREN ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR TOBIAS WREN TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative
CHAR TOBIAS WREN TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR CALLER ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR CALLER TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR CALLER TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained

### SCENE s00057 | EXT. ICE-LOCKED RIVER BARGE, ARCTIC - DAWN
Characters: ASTRID BJORNSDOTTIR-NKEMELU, DMITRI KOWALCZYK-ROSS, TOMAS, ISABELLA VERRIDGE-LIM, OKSANA PETRENKO-ABARA
[beat 0] A flat iron barge, locked in white. Its hull creaks. Wind blows ice-dust sideways. A tarp stretched between two crates makes a miserable shelter. Five figures huddle inside it. ASTRID BJORNSDOTTIR-NKEMELU (40s, fur hood, frost-rimmed eyebrows) pours the last of the tea into a tin cup. Next to her, her brother-in-law DMITRI KOWALCZYK-ROSS (50s, giant gloves) feeds a dying camp stove. On the far side, a young couple, TOMAS and ISABELLA VERRIDGE-LIM (20s each, tangled together under one blanket), whisper. At the tarp's mouth, their guide, OKSANA PETRENKO-ABARA (30s, rifle slung, compass in hand), squints at the horizon.
[beat 1] ASTRID: How long? OKSANA: The ice should break by noon. DMITRI: It's been noon for three days.
[beat 2] TOMAS: You okay? ISABELLA: I'm fine. TOMAS: You're shivering. ISABELLA: So are you.
[beat 3] ASTRID: Dmitri, give her your gloves. DMITRI: She has gloves. ASTRID: Not good ones.
[beat 4] Dmitri strips off the enormous gloves and tosses them to Isabella, who catches them against her chest. ISABELLA: Thank you. DMITRI: Don't mention it.
[beat 5] OKSANA: Quiet. All of you.
[beat 6] A deep crack booms from under the barge. The whole deck shudders. Dmitri curses.
[beat 7] Astrid grabs the tin cup before it spills, but Tomas and Isabella, tangled in the blanket, roll toward the gap and Oksana lunges to haul them back from the edge.
[beat 8] OKSANA: Back! Away from the rail!
[beat 9] TOMAS: What is it? OKSANA: The river's moving. DMITRI: Moving? The river's frozen. OKSANA: Not anymore.
[beat 10] The barge tilts, a slow, enormous lean. They scramble over crates. Ice groans like a living thing.
[beat 11] Water, black and glassy, opens in a long line beside the hull.
[beat 12] ASTRID: Everyone to the stern!
[beat 13] They stumble across the tilting deck, Dmitri carrying the stove, Tomas pulling Isabella, Oksana covering the rear. Astrid reaches the stern first and throws a rope to the ice beyond.
[beat 14] Then the barge rights itself with a thunderous slap, and the lean is gone. Ice-dust swirls.
[beat 15] The river, free now, carries them forward.
[beat 16] DMITRI: Noon. OKSANA: Told you.
PLACE (nature): forest | beach | field | mountain | desert | lake or river | garden or park | cave | snowfield
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 3 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 4 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 5 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 8 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 9 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 10 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 11 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 12 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 13 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 14 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 15 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
BEAT 16 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
CHAR ASTRID BJORNSDOTTIR-NKEMELU ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR ASTRID BJORNSDOTTIR-NKEMELU TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR ASTRID BJORNSDOTTIR-NKEMELU TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR OKSANA PETRENKO-ABARA ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR OKSANA PETRENKO-ABARA TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR OKSANA PETRENKO-ABARA TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR DMITRI KOWALCZYK-ROSS ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR DMITRI KOWALCZYK-ROSS TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR DMITRI KOWALCZYK-ROSS TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR TOMAS ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR TOMAS TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR TOMAS TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR ISABELLA VERRIDGE-LIM ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR ISABELLA VERRIDGE-LIM TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR ISABELLA VERRIDGE-LIM TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained

### SCENE s00058 | INT. COMPANY BREAK ROOM, INNOVATEX CORP - DAY
Characters: GLORIA BANKOLE-VANCE, COLIN DRUMMOND-PARK, SHANTELLE OKONJO-REID
[beat 0] Beige walls. A coffee machine with a handwritten sign: DO NOT USE. A bulletin board layered with expired memos. The microwave hums. A mini fridge stickered with passive-aggressive notes. GLORIA BANKOLE-VANCE (50s, shoulder pads, mug reading WORLD'S OKAYEST BOSS) refills her mug from a thermos she brought herself. Across the table sits COLIN DRUMMOND-PARK (20s, new hire, ironed shirt). At the sink, SHANTELLE OKONJO-REID (30s, hoodie, headphones) scrubs a mug that isn't hers.
[beat 1] GLORIA: Colin, welcome to the family. COLIN: Thank you, Gloria. GLORIA: We do synergy here. COLIN: Great.
[beat 2] GLORIA: We also do Fridays. COLIN: Fridays?
[beat 3] SHANTELLE: She means cake. GLORIA: I mean team-building. SHANTELLE: It's cake.
[beat 4] Gloria beams. Colin tries to look as though he understands.
PLACE (workplace): office | newsroom | laboratory | workshop | studio | conference room | farm | construction site | server room
ATMOS (sterile): sterile | clinical | cold | corporate | bureaucratic | impersonal | antiseptic | formal | detached
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 2 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 3 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 4 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR GLORIA BANKOLE-VANCE ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR GLORIA BANKOLE-VANCE TRAIT (arrogant): arrogant | smug | condescending | vain | entitled | pompous | superior | boastful | self-important
CHAR GLORIA BANKOLE-VANCE TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR COLIN DRUMMOND-PARK ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR COLIN DRUMMOND-PARK TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR COLIN DRUMMOND-PARK TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR SHANTELLE OKONJO-REID ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR SHANTELLE OKONJO-REID TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR SHANTELLE OKONJO-REID TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained

### SCENE s00059 | INT. PET STORE, REPTILE SECTION - DAY
Characters: BARN, OKAFOR-LINDGREN, JUNIPER VASQUEZ-ABARA, EZEKIEL PRUITT-HALE, DESDEMONA KILLINGSWORTH, TIBBY, MOREAU-WELLS
[beat 0] Heat lamps. Terrariums. A sign: PLEASE DO NOT KNOCK ON GLASS. The air smells of mealworms. BARNABY "BARN" OKAFOR-LINDGREN (30s, apron, name tag crooked) restocks crickets. His coworker JUNIPER VASQUEZ-ABARA (20s, pink hair, bandaged thumb) leans on the counter. A customer, MR. EZEKIEL PRUITT-HALE (70s, tweed cap, binocular case), peers into a tank. At the back door, the manager, DESDEMONA KILLINGSWORTH (40s, clipboard, cheerful menace), rattles keys. And behind the register, a nervous newcomer, TIBERIUS "TIBBY" MOREAU-WELLS (teen, first shift, sweating through his shirt), tries to look busy.
[beat 1] BARN: Juniper, where's the iguana? JUNIPER: In his tank. BARN: Which tank? JUNIPER: The big one.
[beat 2] BARN: That one's empty. JUNIPER: Oh.
[beat 3] They look at each other. Both turn toward Mr. Pruitt-Hale, who is still peering into the empty tank.
[beat 4] EZEKIEL: Fascinating. Where's the lizard?
[beat 5] TIBBY: He's resting!
[beat 6] DESDEMONA: Tibby, don't lie to the customer. TIBBY: I'm not lying! I'm hopeful!
[beat 7] EZEKIEL: Young man, I've bought four geckos from this store. I know when a tank is vacant.
[beat 8] BARN: Sir, it's a rare species. EZEKIEL: Camouflaged? JUNIPER: Extremely.
[beat 9] A thump from the ceiling. All five look up.
[beat 10] A long green tail hangs from a ceiling tile, swaying gently.
[beat 11] Tibby faints into the cricket display.
[beat 12] Desdemona sighs and heads for a ladder.
PLACE (shop): store | market | pharmacy | pawn shop | bookstore | gas station | bakery | boutique | convenience store
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (lies): lies to | deceives | bluffs | covers a story for | misleads | feigns innocence to | plays along with | cons | fakes it with
BEAT 6 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 7 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 8 (lies): lies to | deceives | bluffs | covers a story for | misleads | feigns innocence to | plays along with | cons | fakes it with
BEAT 9 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 10 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 11 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 12 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
CHAR BARN ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR BARN TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR BARN TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR JUNIPER ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR JUNIPER TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR JUNIPER TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR EZEKIEL PRUITT-HALE ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR EZEKIEL PRUITT-HALE TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR EZEKIEL PRUITT-HALE TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR DESDEMONA KILLINGSWORTH ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR DESDEMONA KILLINGSWORTH TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR DESDEMONA KILLINGSWORTH TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR TIBBY ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR TIBBY TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR TIBBY TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
