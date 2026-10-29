You refine labels for screenplay scenes. Each item already has a coarse label; pick the ONE best fine label
from the options listed for it (copy the option text exactly).

For each scene write one JSON object:
{"scene_id": "...", "place": "<fine>", "atmos": ["<fine for each coarse atmos, same order>"],
 "beats": ["<fine for beat 0>", "<fine for beat 1>", ...],
 "chars": {"<NAME>": {"role": "<fine>", "traits": ["<fine for each coarse trait, same order>"]}}}

Write all scenes as JSON Lines (one object per line) to /home/user/screenwrite-analyzers/data/analyzers/labels/desc_fine/part_s00270.jsonl with the Write tool. No other text in the file.
Include every scene below. Reply only with "done N".

## Scenes

### SCENE s00270 | INT. ROLLER RINK SNACK BAR - CLOSING TIME
Characters: IMANI VOSS, TEODOR LIND, GRANDMA PEARL, DEZ, ACHTERBERG, DJ, CLEO
[beat 0] A cramped counter under a flickering neon sign. The popcorn machine ticks as it cools. Mirror-ball light crawls over a floor of scuffed maple. Rental skates hang in crooked rows. IMANI VOSS (30s, braids pinned up, rink-staff polo two sizes big) wipes the counter in slow circles. She has been wiping the same spot for a while. TEODOR LIND (30s, rangy, wool coat, skate laces knotted round one wrist) stands at the far end holding a paper boat of cold fries.
[beat 1] IMANI: We close in five. TEODOR: I know. I'm eating. Imani nods. Keeps wiping.
[beat 2] GRANDMA PEARL (70s, tiny, sequined cardigan, terrifyingly good on skates) glides up to the counter and raps it twice with a knuckle. PEARL: Two cocoas. One for me, one for the man who's about to say something. TEODOR: I wasn't going to. PEARL: That's what I'm afraid of.
[beat 3] DESMOND "DEZ" ACHTERBERG (20s, gangly, headset askew) leans out of the DJ booth and cups a hand to his mouth. DEZ: Last song! Anybody left, last song!
[beat 4] CLEO (teens, braces, rental skates on the wrong feet) wobbles in from the rink, grabs the counter, and lets go of it again at once.
[beat 5] Imani and Teodor both reach to steady her. Their hands meet on Cleo's sleeve. Both pull back. Cleo sits down on the floor.
[beat 6] CLEO: I'm fine. IMANI: You're on the floor. CLEO: Fine on the floor.
[beat 7] Pearl slides two cocoas across. Teodor takes his and does not drink it.
[beat 8] TEODOR: I drove four hours. IMANI: Nobody asked you to. TEODOR: You did. In March. IMANI: In March I was talking.
[beat 9] Pearl turns her cocoa a quarter turn on the counter, in no hurry. PEARL: Up, sweetheart. This part's boring. Cleo scrambles up. Pearl steers her toward the rink by the elbow, and the two of them roll away.
[beat 10] Dez cuts the music. The room hums. The mirror ball keeps turning without a song.
[beat 11] IMANI: Teo. TEODOR: Imani. They speak at the same moment. IMANI: I should have called. TEODOR: I should have stayed.
[beat 12] Neither laughs. Imani folds the rag into a square.
[beat 13] IMANI: It's a long drive back. TEODOR: It is.
[beat 14] He sets the fries down and picks them up again. Imani reaches under the counter and hands him a napkin. TEODOR: Thanks.
[beat 15] IMANI: Go on. I have to lock up.
[beat 16] He nods. At the door he stops, and she does not look up.
[beat 17] Dez flips the house lights on, and the whole rink goes flat and bright.
[beat 18] CLEO: Are we allowed to keep the skates? DEZ: No!
[beat 19] Teodor pushes the door open and the cold comes in.
PLACE (bar_restaurant): bar | diner | restaurant | cafe | pub | nightclub bar | food truck | hotel bar | restaurant kitchen
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 2 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 3 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 4 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 8 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 9 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 10 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 11 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 12 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 13 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 14 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 15 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 16 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
BEAT 17 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 18 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 19 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
CHAR IMANI VOSS ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR IMANI VOSS TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR IMANI VOSS TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR TEODOR LIND ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR TEODOR LIND TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful
CHAR TEODOR LIND TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR GRANDMA PEARL ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR GRANDMA PEARL TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR GRANDMA PEARL TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR DEZ ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR DEZ TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR DEZ TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR CLEO ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR CLEO TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR CLEO TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless

### SCENE s00271 | INT. SALT MINE ELEVATOR HOIST HOUSE - DAY
Characters: GUS, TREVINO, LUCKY, MARROW, DEPUTY WENDELL OKORO, REVEREND ISAIAH CALLOWAY-BRANT
[beat 0] Brine-crusted timbers. A cable drum. One lantern. Wind through the slats. SHERIFF AUGUSTINE "GUS" TREVINO (50s, gray mustache, bad knee) sits on an upturned crate. Rifle across his lap. Waiting. Across from him, hands tied to the cable rail: LUCINDA "LUCKY" MARROW (30s, sun-cracked lips, torn duster). Smiling. Always smiling. Behind her, in the doorway: DEPUTY WENDELL OKORO (20s, borrowed hat, pale). Counting something on his fingers.
[beat 1] Gus checks his watch. Puts it away.
[beat 2] GUS: Noon. Should be noon. LUCKY: Time moves slow in a salt mine. GUS: Didn't ask you.
[beat 3] Silence. A drip somewhere. The cable drum creaks.
[beat 4] WENDELL: Sheriff. The train's late. GUS: I can hear that. Wendell shifts his weight. The floorboards complain.
[beat 5] LUCKY: Your boy's nervous. GUS: My boy's fine. WENDELL: I'm fine.
[beat 6] He isn't. His hand rests on his holster. Slides off. Rests again.
[beat 7] Gus rises. Knee pops. He walks to the slat window. Looks out at white flats and nothing.
[beat 8] GUS: Nobody moves till the whistle. WENDELL: Yes sir. LUCKY: Hear that? Nobody moves.
[beat 9] She tugs the rope. Testing. Gus turns. GUS: Quit that. LUCKY: Quit what? GUS: You know what.
[beat 10] She lets the rope go slack. Smile widens.
[beat 11] A fourth figure fills the doorway behind Wendell. Quiet. Boots on salt. REVEREND ISAIAH CALLOWAY-BRANT (60s, black frock, spectacles, a Bible under one arm). Dust on his shoulders. He tips his hat.
[beat 12] CALLOWAY-BRANT: Gentlemen. Lady.
[beat 13] Wendell spins. Hand on the gun this time. WENDELL: Who in hell are you?
[beat 14] CALLOWAY-BRANT: A man looking for water. GUS: No water here. Only salt. CALLOWAY-BRANT: So I see.
[beat 15] He steps in. Slow. Eyes drifting to Lucky. To the rope. To the rifle.
[beat 16] LUCKY: Morning, Reverend.
[beat 17] Gus looks at her. Looks at the preacher. GUS: You two acquainted? CALLOWAY-BRANT: No. LUCKY: Never met.
[beat 18] Too fast. Both.
[beat 19] Gus raises the rifle. Not at anyone. Just up. GUS: Damn.
[beat 20] A distant whistle. Long. Low.
[beat 21] WENDELL: That's the train. GUS: Everybody stay put.
[beat 22] Calloway-Brant sets the Bible on the crate. Unhurried. CALLOWAY-BRANT: Sheriff, I'd sit down. GUS: I'll stand. CALLOWAY-BRANT: Then stand well.
[beat 23] He opens the Bible. Hollowed out. A short-barreled pistol.
[beat 24] Wendell draws. Late.
[beat 25] The pistol barks. Wendell spins. Drops.
[beat 26] Gus fires. Splinters from the doorframe. Calloway-Brant is already moving, crashing sideways into the lantern.
[beat 27] Dark. Then fire. The lantern oil catches the dry timber.
[beat 28] LUCKY: Cut me loose, Gus! Cut me loose! GUS: Not a chance.
[beat 29] Flames climb the wall. Smoke rolls. Calloway-Brant is a shadow behind the cable drum. CALLOWAY-BRANT: Last chance, Sheriff! GUS: Come take it!
[beat 30] Gus fires at the drum. Sparks. The cable snaps free and whips across the room, slashing the rope at Lucky's wrists.
[beat 31] She is loose. She grins. LUCKY: Thank you kindly.
[beat 32] She snatches Wendell's fallen gun. Gus swings the rifle on her.
[beat 33] They freeze. Three guns. Three people. Fire roaring.
[beat 34] WENDELL: Don't. None of them moves.
[beat 35] The roof timbers groan. A beam drops between them in a shower of sparks.
[beat 36] They scatter.
PLACE (industrial): warehouse | factory floor | docks | mine | power plant | scrapyard | hangar | loading bay | boiler room
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 5 (mocks): mocks | taunts | belittles | humiliates | provokes | insults | patronizes | needles | dismisses
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 9 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 10 (mocks): mocks | taunts | belittles | humiliates | provokes | insults | patronizes | needles | dismisses
BEAT 11 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 12 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 13 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 14 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 15 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 16 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 17 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 18 (lies): lies to | deceives | bluffs | covers a story for | misleads | feigns innocence to | plays along with | cons | fakes it with
BEAT 19 (lies): lies to | deceives | bluffs | covers a story for | misleads | feigns innocence to | plays along with | cons | fakes it with
BEAT 20 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 21 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 22 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 23 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 24 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 25 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 26 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 27 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 28 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 29 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 30 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 31 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 32 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 33 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 34 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 35 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 36 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
CHAR GUS ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR GUS TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR GUS TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR LUCKY ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR LUCKY TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative
CHAR LUCKY TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR WENDELL ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR WENDELL TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR WENDELL TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR REVEREND ISAIAH CALLOWAY-BRANT ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR REVEREND ISAIAH CALLOWAY-BRANT TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative
CHAR REVEREND ISAIAH CALLOWAY-BRANT TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic

### SCENE s00272 | INT. MUNICIPAL SWAN-BOAT BOATHOUSE - EVENING
Characters: BARNABY QUILL, ODALYS FERREIRA-NNAMDI, PETE, LAZAR
[beat 0] A cathedral of damp wood. Eleven fiberglass swans, enormous and faintly smug, are moored nose to tail in the dark water, each wearing the faded expression of a creature that has been pedaled by thousands of children and has forgiven none of them. BARNABY QUILL (50s, municipal windbreaker, a lanyard heavy with keys that open nothing important) stands on the dock with a clipboard held like a hymnal. He is counting swans for the third time and arriving at a different number each time. ODALYS FERREIRA-NNAMDI (40s, wet-weather poncho, hair in a hopeful bun) climbs out of a swan with the dignity of a woman leaving a courtroom.
[beat 1] ODALYS: It's twelve. BARNABY: It's eleven. ODALYS: The inventory says twelve. BARNABY: The inventory also says the pond is a lake.
[beat 2] Behind them, a third voice drifts from the rafters. PETRU "PETE" LAZAR (20s, cheerful, harness, a flashlight in his teeth) dangles above the water, retrieving a pennant. PETE: Thith ith the one. ODALYS: Pete, take the flashlight out of your mouth.
[beat 3] Pete spits the flashlight into his palm. It bounces off a swan's head and sinks.
[beat 4] BARNABY: That was a municipal flashlight. PETE: It was my flashlight. ODALYS: It was Barnaby's flashlight. BARNABY: It was a flashlight in the general sense.
[beat 5] PETE: Can I come down now? ODALYS: No. BARNABY: Yes.
[beat 6] ODALYS: No, because if he comes down we'll have to talk about the swan. BARNABY: We are talking about the swan. PETE: Which swan? ODALYS: The twelfth. PETE: There's a twelfth? BARNABY: There is not a twelfth.
[beat 7] ODALYS: Barnaby, I rode it. For twenty minutes. It has a steering problem and a name. BARNABY: What name? ODALYS: Gerald. PETE: Gerald's a good name.
[beat 8] BARNABY: Pete, you are suspended in the air by one strap and I need you to stop having opinions. PETE: I've had opinions the whole time, though. ODALYS: He's had opinions since March.
[beat 9] BARNABY: In March I told you both the swans were not to be named. ODALYS: You named the swans. BARNABY: I named ONE swan. Lucille. Out of respect. PETE: Lucille's on the left. ODALYS: Lucille is the one we sank in August. BARNABY: Lucille is resting.
[beat 10] A long silence. Water slaps the pilings. A swan, somewhere, knocks against the dock with a hollow note.
[beat 11] ODALYS: Barnaby, there are twelve swans. BARNABY: I know. PETE: So who's got Gerald?
[beat 12] Barnaby lets the clipboard drop. It floats. All three of them watch it drift away across the dark water toward the far swan, which has, impossibly, begun to turn its head.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (festive): festive | celebratory | joyful | lively | playful | boisterous | euphoric | giddy | warm-hearted
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 5 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 6 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 7 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 8 (mocks): mocks | taunts | belittles | humiliates | provokes | insults | patronizes | needles | dismisses
BEAT 9 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 10 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 11 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 12 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR BARNABY QUILL ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR BARNABY QUILL TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR BARNABY QUILL TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR ODALYS FERREIRA-NNAMDI ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR ODALYS FERREIRA-NNAMDI TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR ODALYS FERREIRA-NNAMDI TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR PETE ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR PETE TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR PETE TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR LAZAR ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR LAZAR TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR LAZAR TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle

### SCENE s00273 | INT. CAR WASH TUNNEL - NIGHT
Characters: KAVEH RAZMI, SOL, DUARTE, TOBIAS WREN
[beat 0] Brushes idle. Soap drips. Three cars' worth of silence. KAVEH RAZMI (40s, wet suit jacket) crouches behind a spinning mitter curtain, gun low. He is breathing hard. Across the bay, MARISOL "SOL" DUARTE (30s, mechanic's coveralls) holds a wrench like a club. A speaker crackles overhead, then goes dead.
[beat 1] KAVEH: Sol. Put it down. SOL: You first, Kav.
[beat 2] They speak at once. KAVEH: I didn't take it. SOL: You didn't take it.
[beat 3] Sol laughs once. Short. Dead. SOL: Four years.
[beat 4] A third silhouette steps through the exit light. TOBIAS WREN (60s, dry, immaculate raincoat). TOBIAS: Evening, both.
[beat 5] Kaveh's gun drifts toward Tobias. Sol's wrench stays on Kaveh. TOBIAS: Nobody here's leaving angry. Which is the point.
[beat 6] He sets a thin black case on the wet floor and slides it forward.
[beat 7] Sol drops the wrench. It rings. Kaveh lowers the gun.
PLACE (industrial): warehouse | factory floor | docks | mine | power plant | scrapyard | hangar | loading bay | boiler room
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (gritty): gritty | seedy | grimy | dangerous | rough | lawless | sordid | raw | violent
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 5 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 6 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 7 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
CHAR KAVEH RAZMI ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR KAVEH RAZMI TRAIT (angry): angry | furious | seething | hot-headed | resentful | bitter | volatile | irritable | vengeful
CHAR KAVEH RAZMI TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR SOL ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR SOL TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR SOL TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR TOBIAS WREN ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR TOBIAS WREN TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR TOBIAS WREN TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic

### SCENE s00274 | INT. LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Characters: HELGA STRAND, ARNE STRAND, MAREN STRAND, THEO STRAND, CAPTAIN BASIL YEBOAH-KARLSSON, RADIO
[beat 0] Storm outside. Sea slamming rock. A kerosene lamp. A shortwave radio on the table, buzzing. HELGA STRAND (60s, oilskin, iron-gray braid) stands at the stove. Stirring. Not looking up. At the table: her son, ARNE STRAND (30s, damp wool sweater, a bandage across one hand). He stares at the radio. Their daughter-in-law, MAREN STRAND (30s, pregnant, hands wrapped around a cup) watches Arne watch the radio. On the stairs, listening: THEO STRAND (10, pajamas, bare feet). He has been told to sleep. By the window: CAPTAIN BASIL YEBOAH-KARLSSON (50s, drenched, sou'wester in hand). A stranger. Dripping onto the floorboards.
[beat 1] The radio hisses. RADIO: Coast Guard to lighthouse. Come in. Nobody moves. Helga stirs.
[beat 2] RADIO: Coast Guard to lighthouse. We have your vessel's mayday. Repeat. Come in.
[beat 3] Arne rises. Chair scrapes. Maren catches his wrist.
[beat 4] MAREN: Don't. ARNE: Maren. MAREN: You say one word to them and it's over. ARNE: It's already over.
[beat 5] Helga sets the spoon down. Turns. HELGA: Sit.
[beat 6] Arne sits. Maren lets go.
[beat 7] Basil steps from the window. Water pooling around his boots. BASIL: They'll keep calling. HELGA: Let them. BASIL: My crew is in that water.
[beat 8] HELGA: Your crew is dead, Captain.
[beat 9] Silence. The radio crackles. RADIO: Lighthouse. Acknowledge. Over.
[beat 10] Theo sits on the bottom stair. Pulls his knees up. THEO: Daddy? ARNE: Go to bed. THEO: Who's talking? MAREN: The radio, love. Go on. Theo doesn't go.
[beat 11] Basil crosses the room in three strides and picks up the microphone. Arne is up again. Helga steps between them. The three of them stand locked, a breath apart, Maren half-risen behind with one hand on her belly, Theo gripping the banister.
[beat 12] BASIL: Let me answer. HELGA: Put it down. BASIL: They'll send a boat. ARNE: They'll send a boat for us. BASIL: For all of us.
[beat 13] HELGA: For him. She nods at Arne. Basil looks. Looks at the bandage. At the rope burn climbing the wrist.
[beat 14] BASIL: You cut the line. Arne says nothing. BASIL: You cut our line.
[beat 15] ARNE: The reef would have taken the lighthouse. BASIL: The reef took forty men! ARNE: I was trying to save my family!
[beat 16] Maren covers her mouth. Theo starts to cry without sound.
[beat 17] RADIO: Lighthouse, we have a visual on your lamp. Repeat, we have a visual. Hold position.
[beat 18] Basil lets the microphone drop. It swings on its cord, clicking against the table leg.
[beat 19] Helga takes it. Presses the key. HELGA: This is Helga Strand. Lighthouse is secure. A pause. Static.
[beat 20] RADIO: Copy, ma'am. Any survivors?
[beat 21] Everyone looks at Basil. Basil stares at the floor. At the pool of seawater spreading around his boots. At the small bare feet on the stairs. He looks up. BASIL: One.
[beat 22] Helga lowers the microphone. Arne puts his face in his bandaged hand. Maren crosses to him and doesn't touch him.
[beat 23] Wind hits the tower. The lamp above them sweeps its beam across the window, turning, turning, turning.
PLACE (home): kitchen | living room | bedroom | bathroom | apartment | family house | attic or basement | porch or yard | garage
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 8 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 9 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 10 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 11 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 12 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 13 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 14 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 15 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 16 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 17 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 18 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
BEAT 19 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 20 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 21 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 22 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 23 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR HELGA STRAND ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR HELGA STRAND TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR HELGA STRAND TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR ARNE STRAND ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR ARNE STRAND TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR ARNE STRAND TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR MAREN STRAND ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR MAREN STRAND TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR MAREN STRAND TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR THEO STRAND ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR THEO STRAND TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR THEO STRAND TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR CAPTAIN BASIL YEBOAH-KARLSSON ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR CAPTAIN BASIL YEBOAH-KARLSSON TRAIT (angry): angry | furious | seething | hot-headed | resentful | bitter | volatile | irritable | vengeful
CHAR CAPTAIN BASIL YEBOAH-KARLSSON TRAIT (desperate): desperate | frantic | pleading | cornered | reckless | pressured | at wit's end | grasping | despairing
CHAR RADIO ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR RADIO TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR RADIO TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved

### SCENE s00275 | INT. MINIATURE GOLF WINDMILL - DAY
Characters: GRETCHEN POLLARD, WALDO POLLARD, TEENAGE ATTENDANT RUSS OYELARAN, LITTLE MIRABEL
[beat 0] The big concrete windmill at hole eighteen. Blades turning slowly. A tunnel through its base. GRETCHEN POLLARD (50s, visor, scorecard in teeth) is wedged halfway into the tunnel on her stomach. Her husband WALDO POLLARD (50s, bucket hat) holds her ankles. TEENAGE ATTENDANT RUSS OYELARAN (17, name tag, vest) arrives with a rake. LITTLE MIRABEL (8, glitter sneakers) watches from the green, club trailing.
[beat 1] RUSS: Ma'am, you can't go in there. GRETCHEN: My ball's in there! WALDO: She means it.
[beat 2] The blades turn. A blade clips Waldo's hat. He ducks.
[beat 3] Gretchen shoots out of the tunnel, ball in hand, and the two of them tumble into Russ. All three go down in a heap. The rake clatters.
[beat 4] MIRABEL: Is that a hole in one? RUSS: No.
[beat 5] Gretchen holds up the ball like a trophy.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (festive): festive | celebratory | joyful | lively | playful | boisterous | euphoric | giddy | warm-hearted
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 3 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 4 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
CHAR GRETCHEN POLLARD ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR GRETCHEN POLLARD TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR GRETCHEN POLLARD TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR WALDO POLLARD ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR WALDO POLLARD TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR WALDO POLLARD TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR TEENAGE ATTENDANT RUSS OYELARAN ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR TEENAGE ATTENDANT RUSS OYELARAN TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR TEENAGE ATTENDANT RUSS OYELARAN TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR LITTLE MIRABEL ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR LITTLE MIRABEL TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR LITTLE MIRABEL TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree

### SCENE s00276 | EXT. FLOODED RICE PADDY - DAWN
Characters: LIEUTENANT NADIA VASSILIOU, SERGEANT FIONN MCALLISTER-DUBE, CORPORAL AMARA TSEGAYE, POLDO, RINCON
[beat 0] Mist. Brown water to the knees. A broken dike. Frogs. Four soldiers in a skirmish line. Slogging. LIEUTENANT NADIA VASSILIOU (30s, helmet strap loose) in the lead. Compass in her fist. SERGEANT FIONN MCALLISTER-DUBE (40s, radio on his back) behind her. CORPORAL AMARA TSEGAYE (20s, rifle high, eyes wide) third. PRIVATE LEOPOLDO "POLDO" RINCON (19, glasses taped at the hinge) last.
[beat 1] NADIA: Spacing. Ten feet. They spread. Water sloshes. POLDO: Ten feet. Ten feet. Ten feet.
[beat 2] A frog leaps. Amara jerks the rifle. Fionn grabs the barrel. FIONN: Easy. AMARA: Sorry.
[beat 3] They go on. The mist shifts.
[beat 4] Metal glints ahead. A crouched shape. A helmet. Then another.
[beat 5] Nadia raises a fist. Everyone stops.
[beat 6] A crack. Water jumps near Poldo. NADIA: Down!
[beat 7] Nadia and Amara dive left. Fionn and Poldo dive right. A machine gun opens up, stitching the paddy. FIONN: Stay low! Stay LOW!
[beat 8] Poldo lifts his head. Gets a mouthful of mud. POLDO: Okay. Okay okay okay.
[beat 9] AMARA: Where is it? NADIA: Treeline. Eleven o'clock.
[beat 10] She crawls to Fionn. He is on the radio. His lips move. Static only. FIONN: Dead. NADIA: Try again. He tries. Nothing.
[beat 11] The firing stops. Hard silence. Frogs begin again.
[beat 12] Nadia peers over the dike. She stares. Her shoulders drop.
[beat 13] NADIA: Hold fire. AMARA: Ma'am? NADIA: Hold. Fire.
[beat 14] Across the paddy, the "helmets" are scarecrows. Two straw men in rusted pots. A third machine gun sits on a bamboo tripod, tied to a clapper that bangs in the breeze.
[beat 15] Fionn lets out a breath that turns into a laugh. Amara puts her forehead on her rifle. Poldo sits straight up out of the water, soaked to the chin.
[beat 16] POLDO: It's a bird scarer. NADIA: It's a bird scarer.
[beat 17] She pulls her wet hat off and wrings it. Amara and Poldo stand together, shaking, and slap each other on the shoulder, hard, both laughing.
[beat 18] FIONN: Will you tell them she did the compass right? NADIA: Tell them yourself. She's your lieutenant.
[beat 19] Fionn looks at Nadia. She looks at him. A beat, and neither can say which of them was the "she" meant. FIONN: Aye.
[beat 20] They start across the paddy.
PLACE (nature): forest | beach | field | mountain | desert | lake or river | garden or park | cave | snowfield
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 5 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 6 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 7 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 8 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 9 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 10 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 11 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 12 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 13 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 14 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 15 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 16 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 17 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 18 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 19 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 20 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
CHAR LIEUTENANT NADIA VASSILIOU ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR LIEUTENANT NADIA VASSILIOU TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR LIEUTENANT NADIA VASSILIOU TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR SERGEANT FIONN MCALLISTER-DUBE ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR SERGEANT FIONN MCALLISTER-DUBE TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR SERGEANT FIONN MCALLISTER-DUBE TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR CORPORAL AMARA TSEGAYE ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR CORPORAL AMARA TSEGAYE TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR CORPORAL AMARA TSEGAYE TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR POLDO ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR POLDO TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR POLDO TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree

### SCENE s00277 | INT. BONDED WAREHOUSE - CHEESE AGING CAVE - NIGHT
Characters: DOLLY, PRITCHARD-ABARA, CASIMIR VOLKOV, LEFTY, BATISTE, INSPECTOR HOLLIS TANAKA-REED, PEPPER NAKAMURA-OSEI
[beat 0] Rows of wheels stacked to the ceiling. Cold. Ammonia and rind. A woman in a hairnet, DOLORES "DOLLY" PRITCHARD-ABARA (50s), runs a finger along a shelf. She doesn't look at the two men by the door. A man in a good suit, CASIMIR VOLKOV (40s), checks his cuffs. He is early. He hates being early. The second man, LENNOX "LEFTY" BATISTE (30s, work gloves, one sleeve rolled), leans on a hand truck. He taps it.
[beat 1] She lifts a wheel. Turns it. Sniffs.
[beat 2] LEFTY: It's the right one. DOLLY: We'll see.
[beat 3] She sets it down. Wipes her hands on her apron. He watches her hands.
[beat 4] A fourth figure comes down the aisle: INSPECTOR HOLLIS TANAKA-REED (50s, county badge on a belt clip). Slow. Wheezing from the cold. She stops three rows away. HOLLIS: Evening.
[beat 5] Nobody answers. She nods at the shelves. HOLLIS: Lot of inventory. DOLLY: It's a big cave.
[beat 6] Hollis smiles. Moves closer. Casimir shifts his weight. He glances at Lefty. Lefty looks at the floor.
[beat 7] HOLLIS: Mind if I look at the paperwork? DOLLY: Back office. HOLLIS: I'd rather look here.
[beat 8] She waits. Dolly hands over a clipboard. She flips pages. Doesn't read them.
[beat 9] HOLLIS: Funny. These numbers line up exactly. DOLLY: We keep good books. HOLLIS: Nobody keeps books this good.
[beat 10] She sets the clipboard on a wheel. Casimir steps forward. Lefty's hand tightens on the truck.
[beat 11] A fifth voice, from the dark behind the last row. PEPPER: Everybody just stay where you are.
[beat 12] Out of the dark: PEPPER NAKAMURA-OSEI (20s, the night cleaner, mop bucket, calm). A pistol in her yellow glove. She points at no one in particular. At the room.
[beat 13] PEPPER: Mrs. Pritchard, you said you'd be gone by ten. Dolly doesn't blink. She looks at the wheel Hollis is leaning on.
[beat 14] Hollis sees it. Straightens. Takes her hand off the cheese.
[beat 15] Lefty lets go of the hand truck. It rolls a foot. Stops. Casimir smooths his tie.
[beat 16] The compressor kicks on. A long, low hum.
[beat 17] Pepper lowers the pistol. PEPPER: It's cold in here.
[beat 18] Dolly takes off her apron. Folds it. Sets it on the shelf. She nods once to Hollis, who nods back.
[beat 19] They walk out together. The two men follow. Pepper stays, looking at the wheels, the mop bucket at her feet.
PLACE (industrial): warehouse | factory floor | docks | mine | power plant | scrapyard | hangar | loading bay | boiler room
ATMOS (cozy): cozy | homely | nostalgic | comforting | domestic | snug | familiar | sweet | wholesome
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 8 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 9 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 10 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 11 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 12 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 13 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 14 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 15 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 16 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 17 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 18 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 19 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR DOLLY ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR DOLLY TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR DOLLY TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR CASIMIR VOLKOV ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR CASIMIR VOLKOV TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR CASIMIR VOLKOV TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR LEFTY ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR LEFTY TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR LEFTY TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR INSPECTOR HOLLIS TANAKA-REED ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR INSPECTOR HOLLIS TANAKA-REED TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR INSPECTOR HOLLIS TANAKA-REED TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR PEPPER ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR PEPPER TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR PEPPER TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely

### SCENE s00278 | INT. ABANDONED PLANETARIUM - NIGHT
Characters: EVELYN HARGROVE, THE MAN, AMBROSE
[beat 0] A great dome of cracked plaster. Rows of tilting seats like rotted teeth. At the center, a Zeiss star projector, shrouded like a sleeping beast.
[beat 1] A flashlight beam wanders across the dome. Behind it: EVELYN HARGROVE (30s, wool coat, camera bag), picking her way down the aisle. EVELYN: Hello? The caretaker said the doors were unlocked.
[beat 2] Her voice dies in the plaster. She reaches the projector. Lays a hand on its cover.
[beat 3] A SOUND. Soft. Behind her. A seat creaking back.
[beat 4] She spins the light. A MAN sits in the third row. Gray suit. Hands folded. Smiling pleasantly.
[beat 5] THE MAN: Ten minutes early. Punctual people are rare. EVELYN: I didn't see you come in. THE MAN: I didn't come in.
[beat 6] She laughs, nervous, and glances at the exit. Still there. Still far.
[beat 7] EVELYN: Are you the caretaker? THE MAN: I look after the stars. Is that the same?
[beat 8] She lowers the light. EVELYN: I'm here to photograph the dome. For the historical society. THE MAN: Of course.
[beat 9] He stands. Slowly.
[beat 10] His shadow does not move with him. EVELYN: Oh.
[beat 11] THE MAN: Don't be frightened. I only want you to look up. EVELYN: No. THE MAN: Please.
[beat 12] The projector SHUDDERS under its cover. A hum rises from the machine. A thin line of light cuts from under the cloth.
[beat 13] EVELYN: Who are you? THE MAN: Ambrose Lyle. Chief astronomer. Nineteen thirty-one.
[beat 14] He smiles, and the plaster above them goes black, then bursts with ten thousand stars. EVELYN: Please.
[beat 15] AMBROSE: Look up, Miss Hargrove.
[beat 16] She doesn't want to. She does. The stars begin to move toward her.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
ATMOS (dreamy): dreamy | surreal | hazy | magical | whimsical | otherworldly | hypnotic | lyrical | wistful
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 2 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 3 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 4 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 8 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 9 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 10 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 11 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 12 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 13 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 14 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 15 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 16 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR EVELYN HARGROVE ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR EVELYN HARGROVE TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR EVELYN HARGROVE TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR THE MAN ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR THE MAN TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative
CHAR THE MAN TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR AMBROSE ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR AMBROSE TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR AMBROSE TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative

### SCENE s00279 | INT. GREENHOUSE CONSERVATORY - NIGHT
Characters: DOCTOR PRUDENCE ACHEBE, LORD ALISTAIR PENHALLOW-NG, TALLY, BRIGHTWATER, OSWIN OKONKWO-FRY, GRANDE DAME ESMERALDA VANCE, DEV, MARLOWE
[beat 0] Glass walls beaded with condensation. Orchids hang like trapped moths. At the center, a wrought-iron table, a half-eaten fig tart, and a toppled chair. Six people stand around the table. In the chair's place lies the body of the host, a velvet cloak over his chest. Nobody has touched him. DOCTOR PRUDENCE ACHEBE (50s, tailored green suit) kneels. Fingertips at his throat. LORD ALISTAIR PENHALLOW-NG (60s, monocle, flushed) stands rigid, a champagne flute shaking in his hand. MISS TALLULAH "TALLY" BRIGHTWATER (20s, flapper beads) grips the back of a chair. MR. OSWIN OKONKWO-FRY (40s, butler's tails) holds the door. GRANDE DAME ESMERALDA VANCE (70s, black lace, cane) watches all of them. Standing apart, by the orchids: INSPECTOR DEVRAJ "DEV" MARLOWE (40s, rumpled raincoat, soaked).
[beat 1] DEV: No one leaves. TALLY: Dev, darling, you can't hold us. DEV: Miss Brightwater, I can hold you till breakfast.
[beat 2] ESMERALDA: Oswin, lock the door. OSWIN: Already done, madam.
[beat 3] Everyone turns to look at Oswin. Oswin looks at the key in his hand. Doctor Achebe stands. Lord Alistair steps back into an orchid. The flute shatters.
[beat 4] Tally and Dev lunge for the same loose thread of cloak. Oswin bolts for the door. Esmeralda's cane cracks down on his wrist. Alistair collapses into a chair. The doctor catches the key mid-air.
[beat 5] ACHEBE: The tart.
[beat 6] Every head turns to the fig tart. One slice missing. A silver fork beside it, tines green.
[beat 7] DEV: Who cut the tart? Silence. Condensation drips from the glass roof.
[beat 8] ESMERALDA: I did, Inspector.
PLACE (home): kitchen | living room | bedroom | bathroom | apartment | family house | attic or basement | porch or yard | garage
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (claustrophobic): claustrophobic | suffocating | trapped | cramped | oppressive | airless | boxed-in | pressurized | confined
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 8 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
CHAR DOCTOR PRUDENCE ACHEBE ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR DOCTOR PRUDENCE ACHEBE TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR DOCTOR PRUDENCE ACHEBE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR LORD ALISTAIR PENHALLOW-NG ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR LORD ALISTAIR PENHALLOW-NG TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR LORD ALISTAIR PENHALLOW-NG TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR TALLY ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR TALLY TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR TALLY TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR OSWIN OKONKWO-FRY ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR OSWIN OKONKWO-FRY TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR OSWIN OKONKWO-FRY TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR GRANDE DAME ESMERALDA VANCE ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR GRANDE DAME ESMERALDA VANCE TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative
CHAR GRANDE DAME ESMERALDA VANCE TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR DEV ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR DEV TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR DEV TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan

### SCENE s00280 | EXT. DRIFTING ICE FLOE, ARCTIC INLET - DAY
Characters: FIGURE, HANNE, SKJOLD, STATION
[beat 0] A white plain under a white sky. A scatter of gear: a collapsed tent, a sled, a battered handheld radio. Wind pushes snow in thin ribbons across the surface. A FIGURE in a red parka kneels over a camp stove, back to us. Small. Methodical.
[beat 1] The figure turns. HANNELORE "HANNE" SKJOLD (40s, glacier goggles pushed up, frostbitten cheeks, a field biologist's patience in her face) pours melted water into a tin cup. She drinks. Looks at the horizon. HANNE: Day nine.
[beat 2] She sets down the cup. Picks up the radio. Thumbs it. HANNE: Station, this is Skjold. Do you copy?
[beat 3] Static. She waits. Counts to thirty. Tries again. HANNE: Station, this is Skjold. Floe drift continues northeast. Rations, six days. Morale, fine. She almost smiles at that last word.
[beat 4] Static, then a thin voice, far away. STATION: ...Skjold, copy... say again... Hanne grips the radio. HANNE: Station, I read you. Position unchanged. I am not in distress. STATION: ...hold... helicopter... three days... HANNE: Understood. Three days.
[beat 5] She lowers the radio. Doesn't celebrate. Doesn't sag. Reaches for a notebook and a pencil stub.
[beat 6] The camera finds the page. A tally of marks, nine neat strokes. She adds a tenth. Under the tally, in block letters: DON'T LOSE THE PENCIL. HANNE: Don't lose the pencil. She tucks the pencil behind her ear. Looks out at the ice, and the ice looks back, patient and enormous.
[beat 7] A low groan rolls under the floe. A thin crack runs a few meters away and stops. SKJOLD: Not yet, thank you.
[beat 8] She zips the radio into her parka and starts to repack the sled.
PLACE (nature): forest | beach | field | mountain | desert | lake or river | garden or park | cave | snowfield
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 8 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
CHAR HANNE ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR HANNE TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR HANNE TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR SKJOLD ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR SKJOLD TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR SKJOLD TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR STATION ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR STATION TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR STATION TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00281 | INT. NATURAL HISTORY MUSEUM - WHALE HALL - NIGHT
Characters: ZOFIA KRAWCZYK-ADEYEMI, TRIX, OKAFOR-LINDQVIST, MIRIAM SOLOMON-BEAUCHAMP
[beat 0] A blue whale skeleton hangs from the ceiling. Moonlight through skylights makes its ribs look like a ship's hull. Three figures at the base of a display case. Black clothes, soft shoes. ZOFIA KRAWCZYK-ADEYEMI (40s) kneels at the lock, picks in her teeth. Patient. Her hands barely move. TRISTAN "TRIX" OKAFOR-LINDQVIST (20s) holds a flashlight with a red filter and a stopwatch. His knee bounces. MIRIAM SOLOMON-BEAUCHAMP (60s, silver bob) stands at the rail, arms folded, watching the doors.
[beat 1] TRIX: Ninety seconds. Zofia doesn't answer. The lock clicks. She sets down the picks.
[beat 2] Inside the case: a fossil egg the size of a football, on a velvet cradle.
[beat 3] Trix reaches. Miriam's hand closes on his sleeve. He stops. MIRIAM: Gloves.
[beat 4] He pulls on gloves. His fingers are wet. They slide. Zofia takes his hands, wipes them on her shirt, helps him.
[beat 5] She lifts the egg. Weighs it. Hands it to Miriam.
[beat 6] Miriam holds it a moment too long. Her thumb strokes the shell. TRIX: Miriam. MIRIAM: I know. She wraps it in a blanket and passes it to Trix. He cradles it against his chest like a baby.
[beat 7] A SOUND. Footsteps on the mezzanine. A flashlight sweeps the hall. Three freeze. Trix stops breathing. The light crosses the whale. The ribs. The case. It settles on the empty velvet.
[beat 8] Silence. Then the light moves on. The footsteps fade toward the east wing.
[beat 9] Zofia lets out a breath. Trix is shaking so hard the egg rattles in its blanket. She steadies it with both hands. ZOFIA: Walk.
[beat 10] They walk. Under the whale. Past the stuffed elk. Toward the loading dock.
[beat 11] At the door, Miriam stops. Looks back at the empty case. At the whale. MIRIAM: Seventy years. ZOFIA: Move.
[beat 12] Miriam turns. Follows.
PLACE (institution): courtroom | hospital ward | police precinct | interrogation room | classroom | church | prison | library | government office
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 2 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 3 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 4 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 5 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 6 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 9 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 10 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 11 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 12 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 13 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR ZOFIA KRAWCZYK-ADEYEMI ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR ZOFIA KRAWCZYK-ADEYEMI TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR ZOFIA KRAWCZYK-ADEYEMI TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR TRIX ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR TRIX TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR TRIX TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR MIRIAM SOLOMON-BEAUCHAMP ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR MIRIAM SOLOMON-BEAUCHAMP TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR MIRIAM SOLOMON-BEAUCHAMP TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful

### SCENE s00282 | INT. GENERATION SHIP "TERNARY LANTERN" - HYDROPONIC SPINE - SHIP NIGHT
Characters: JUNO ABARA-WESTLUND, COMMANDER ISADORA FENN-KATSURAGI
[beat 0] A cylindrical corridor lined with trays of silver-leafed lettuce, each rotating slowly toward an artificial sun that is, tonight, a pale and dying amber. JUNO ABARA-WESTLUND (30s, botanist, gloves stained green) kneels at a leaking pipe. Beside her, an old gardener's robot of brass and canvas has stopped mid-sentence.
[beat 1] A second woman steps from the airlock: COMMANDER ISADORA FENN-KATSURAGI (50s, uniform pressed, hair cropped). She looks at the pipe. Looks at the amber light.
[beat 2] ISADORA: How long has the sun been failing? JUNO: Eleven hours. I filed it. ISADORA: I read the file. She did not say eleven. JUNO: She said eight. She was wrong. I corrected her.
[beat 3] She holds up a wrench. Her hand shakes, and it is not fear. It is the long fury of a woman who has been right in a ship that does not want her to be.
[beat 4] Isadora's eyes narrow. She takes a step closer, and the lettuce trays lean toward her like a congregation. ISADORA: You rewrote the commander's log. JUNO: I corrected it. ISADORA: Without permission. JUNO: Without waiting for her to die first.
[beat 5] The amber light stutters. The pipe hisses. Neither woman looks at it.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR JUNO ABARA-WESTLUND ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR JUNO ABARA-WESTLUND TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR JUNO ABARA-WESTLUND TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR COMMANDER ISADORA FENN-KATSURAGI ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR COMMANDER ISADORA FENN-KATSURAGI TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR COMMANDER ISADORA FENN-KATSURAGI TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved

### SCENE s00283 | INT. FAMILY MINIVAN - DRIVE-THROUGH BREAKFAST LANE - MORNING
Characters: ROLAND ESPINOZA-HART, NEELAM ESPINOZA-HART, TAMSIN, FELIX
[beat 0] Rain on the windshield. Four people. One bag of hash browns that has already been opened. He is at the wheel, shouting into the speaker box while checking the mirror, the clock, and his phone all at once. His name is ROLAND ESPINOZA-HART (40s, tie half-knotted). She is in the passenger seat, shouting over him to the speaker box, with a coffee in one hand and a sleeping bag stuffed under her arm. This is NEELAM ESPINOZA-HART (40s, hospital scrubs). In the back, a girl of twelve, TAMSIN, kicks the seat. A boy of seven, FELIX, is standing on the seat, pressing his nose to the glass.
[beat 1] A sibling war has broken out over the hash browns. They each have one hand in the bag and one hand on the other's face.
[beat 2] Roland reaches back without looking and swats at both. Neelam reaches back, too, and her coffee spills down Roland's sleeve. He yelps. Tamsin shrieks. Felix falls off the seat onto the floor, still holding the bag.
[beat 3] ROLAND: Two number threes! NEELAM: Three! TAMSIN: He's eating mine! FELIX: It's MY bag! ROLAND: Everybody stop!
[beat 4] Nobody stops. The speaker box crackles. The car behind them honks. NEELAM: Roland, move up. ROLAND: I'm moving!
[beat 5] He is not moving. He is reaching for a napkin. Felix's foot is on the horn. The honk goes long. Neelam lunges for the foot. Tamsin grabs the napkin.
[beat 6] Roland swerves a half inch and hits the speaker post. The speaker box goes silent. All four freeze, mid-motion, a family in tableau.
[beat 7] Then everyone starts again.
PLACE (vehicle): car | truck or van | taxi | bus | train car | boat | plane cabin | cockpit | ambulance or police car
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
ATMOS (cozy): cozy | homely | nostalgic | comforting | domestic | snug | familiar | sweet | wholesome
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 3 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 4 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 5 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 6 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR ROLAND ESPINOZA-HART ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR ROLAND ESPINOZA-HART TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR ROLAND ESPINOZA-HART TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR NEELAM ESPINOZA-HART ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR NEELAM ESPINOZA-HART TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR NEELAM ESPINOZA-HART TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR TAMSIN ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR TAMSIN TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR TAMSIN TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR FELIX ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR FELIX TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR FELIX TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive

### SCENE s00284 | INT. PEST-CONTROL TRAINING SEMINAR - HOTEL BALLROOM - DAY
Characters: HUMPHREY, BRANDYWINE-OYELOWO, PRIZZY, DELACROIX-NAKASHIMA
[beat 0] Folding chairs. A projector screen with a photograph of a cockroach the size of a thumb. A tray of lukewarm danishes. Two chairs are occupied. AUGUSTUS "HUMPHREY" BRANDYWINE-OYELOWO (50s, rumpled blazer, lanyard) is trying to open a danish with the ferocity of a man defusing a bomb. In the next chair, PRISCILLA "PRIZZY" DELACROIX-NAKASHIMA (30s, crisp polo, notebook) is writing in a hand so neat it looks typeset. At the front, nobody. The presenter has not arrived. The cockroach on the screen stares at the room with enormous composure.
[beat 1] HUMPHREY: Prizzy, I think we've been had. PRIZZY: Humphrey, we paid for the seminar. HUMPHREY: We paid for a seminar. We didn't pay for an absence. PRIZZY: I'm sure he's coming. HUMPHREY: It's been forty minutes. I've eaten two danishes. I have regrets. PRIZZY: Regrets, he says.
[beat 2] A pause. Humphrey looks at the screen. At the cockroach. HUMPHREY: That's a lot of bug. PRIZZY: That's an American cockroach. HUMPHREY: Is it? It looks Greek. PRIZZY: Humphrey. HUMPHREY: It's got the look. Stately. Doomed.
[beat 3] Prizzy puts down her pen. Humphrey takes a bite of danish. HUMPHREY: Anyone? The empty room does not answer. A fluorescent tube buzzes.
[beat 4] PRIZZY: I could present. HUMPHREY: You could. PRIZZY: I know all the slides. I've seen the deck. HUMPHREY: You have the deck? PRIZZY: It's on my laptop. HUMPHREY: Prizzy, that's the bravest thing anyone's said since the continental breakfast.
[beat 5] She stands. Smooths her polo. Walks to the front. Plugs in the cable. The projector flickers, then flares to life with a new slide: a diagram of a roach's digestive tract.
[beat 6] PRIZZY: Good morning, everyone. HUMPHREY: Oh, this is going to be good. Prizzy clears her throat, takes a breath.
[beat 7] The door at the back bangs in the wind, and nobody comes in. Humphrey slumps. Prizzy continues, regardless. PRIZZY: We're in the middle of a seminar. HUMPHREY: Prizzy, let the draft in. It might be the roaches.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
ATMOS (sterile): sterile | clinical | cold | corporate | bureaucratic | impersonal | antiseptic | formal | detached
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 3 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 4 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 5 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR HUMPHREY ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR HUMPHREY TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR HUMPHREY TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR PRIZZY ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR PRIZZY TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR PRIZZY TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00285 | INT. DRIVE-IN THEATER PROJECTION BOOTH - NIGHT
Characters: DOCTOR MARGUERITE OYELARAN-STACK, PADDY, GALLAGHER-NWOSU, SHERIFF HOLCOMB JABLONSKI, JUNIPER PARK-MBEKI, SAUL, ODETTE ABERNATHY-VOSS, MRS. ABERNATHY
[beat 0] A cramped concrete box above the snack bar. Two projectors, dusty. A shelf of film cans. One small window overlooking a lot of weeds and a blank screen leaning in the dark. Six people crowd the booth. Rain drums the roof. A lantern sits on an overturned can, throwing their shadows huge. DOCTOR MARGUERITE OYELARAN-STACK (50s, medical bag, cardigan) kneels by a figure lying on the floor under a coat. The coat covers the face of PATRICK "PADDY" GALLAGHER-NWOSU (30s, projectionist), who is not moving. SHERIFF HOLCOMB JABLONSKI (60s, rain slicker, flashlight) stands at the door, back to the wall, watching the stairs. TWO TEENAGERS huddle by the window. They are JUNIPER PARK-MBEKI (16, letterman jacket) and her brother SAUL (17, headphones around his neck, shaking). By the film shelf, an old woman, MRS. ODETTE ABERNATHY-VOSS (70s, shawl, a thermos clutched like a talisman).
[beat 1] MARGUERITE: He's gone. SAUL: He can't be. JUNIPER: Saul, don't. MRS. ABERNATHY: He was fine at the second reel.
[beat 2] HOLCOMB: Everybody quiet. They fall quiet. Rain. And below the rain, a slow scrape on the stairs. Something dragging.
[beat 3] SAUL: That's him. MARGUERITE: He's right there, Saul. SAUL: Then who's on the stairs? JUNIPER: Oh God. MRS. ABERNATHY: Don't say His name. Not in here.
[beat 4] HOLCOMB: Lock the door. JUNIPER: There's no lock! SAUL: Use the can! Use a film can! MARGUERITE: Hold on, hold on, everyone-- HOLCOMB: Get back from the door! SAUL: It's coming up! JUNIPER: Saul, shut UP!
[beat 5] MRS. ABERNATHY: It wants the projector! They all stop. Look at her. MRS. ABERNATHY: It always wants the projector.
[beat 6] The scrape reaches the top of the stairs. Stops. The lantern flame leans toward the door, as if drawn. HOLCOMB: Nothing there. Nothing there.
[beat 7] Something knocks. Three times. Soft. Almost polite. SAUL: Don't open it. MARGUERITE: Nobody's opening it.
[beat 8] The door handle turns. JUNIPER: It's locked, right? Tell me it's locked. HOLCOMB: There's no lock, I said!
[beat 9] The door swings in. Empty landing. Wet footprints on the concrete, leading in.
[beat 10] The footprints lead to Paddy's body. The coat slides slowly off his face. MARGUERITE: No pulse. I checked. I checked.
[beat 11] Paddy's eyes open. White. Wet. He looks at the projectors. PADDY: Roll it.
[beat 12] Every projector in the booth clatters to life by itself. Light erupts against the blank screen outside, and a figure of the sheriff, thirty feet tall, begins to move across it.
[beat 13] Holcomb looks over his shoulder at the window. At himself on the screen. He raises his flashlight. HOLCOMB: That's not me.
[beat 14] On the screen, the giant Holcomb turns and looks into the booth.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
ATMOS (claustrophobic): claustrophobic | suffocating | trapped | cramped | oppressive | airless | boxed-in | pressurized | confined
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 2 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 3 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 4 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 8 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 9 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 10 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 11 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 12 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 13 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 14 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR DOCTOR MARGUERITE OYELARAN-STACK ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR DOCTOR MARGUERITE OYELARAN-STACK TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR DOCTOR MARGUERITE OYELARAN-STACK TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR PADDY ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR PADDY TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR PADDY TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR SHERIFF HOLCOMB JABLONSKI ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR SHERIFF HOLCOMB JABLONSKI TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR SHERIFF HOLCOMB JABLONSKI TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR JUNIPER ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR JUNIPER TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR JUNIPER TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR SAUL ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR SAUL TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR SAUL TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR MRS. ABERNATHY ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR MRS. ABERNATHY TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR MRS. ABERNATHY TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic

### SCENE s00286 | INT. COLLAPSED PARKING GARAGE, LEVEL P3 - NIGHT
Characters: WOMAN, RESCUER, BEATRIX
[beat 0] Dust hangs in the beam of a headlamp. Concrete slab above, a tilted pillar, an overturned sedan with its radio humming. A WOMAN hunches in the gap between slab and floor. Fifties, parka, scraped palms. She is wedged tight and breathing carefully. WOMAN: Slow in. Slow out.
[beat 1] The sedan radio crackles. A voice on a rescue frequency. RESCUER: Hello? Can anyone hear me? This is Ines Calderon, Urban Rescue Team Four.
[beat 2] The woman lifts her head. WOMAN: I hear you. RESCUER: Ma'am, what's your name? WOMAN: Beatrix. Beatrix Oyelowo-Marsh. RESCUER: Beatrix, are you hurt? BEATRIX: Wrist. Maybe rib. I'm stuck, not bleeding. RESCUER: Good. We're coming. Stay still. BEATRIX: I'm not going anywhere.
[beat 3] She almost laughs. Dust sifts down onto her shoulders. She lowers her head onto her arm and watches the beam of her headlamp tremble on the concrete.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (claustrophobic): claustrophobic | suffocating | trapped | cramped | oppressive | airless | boxed-in | pressurized | confined
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR BEATRIX ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR BEATRIX TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR BEATRIX TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR RESCUER ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR RESCUER TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR RESCUER TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle

### SCENE s00287 | EXT. RAILROAD WATER TOWER PLATFORM - DAY
Characters: WOMAN, ROSIE, HARTWELL-BANDA, ELIJAH TOBIAS CORNWALL, JED, OKONJO, PERALES-WINTERS, CORNELIUS DUNLEAVY-KEITA
[beat 0] A prairie town reduced to a siding, a tank on stilts, and one plank platform baking in the sun. A dog sleeps in the shade of a barrel. A WOMAN sits on a crate, shelling peas into a pan. ROSALIND "ROSIE" HARTWELL-BANDA (40s, calico dress, wide-brimmed hat). Calm. Too calm. An old man whittles a spoon on the steps. ELIJAH TOBIAS CORNWALL (70s, white beard, suspenders). A boy of twelve pumps the handle of the well. JEDEDIAH "JED" OKONJO (12, oversized boots). A young cowhand leans against the post, hat low. He chews a straw. SANTIAGO "SANTI" PERALES-WINTERS (20s, spurs, easy grin).
[beat 1] At the far end, a rider. A stranger on a gray horse. He reins in. Climbs down slow. His name is CORNELIUS DUNLEAVY-KEITA (50s, long coat, dusty). He nods to them all.
[beat 2] CORNELIUS: Afternoon. ROSIE: Afternoon. She keeps shelling. He ties the horse. Walks up the steps. Elijah scoots his boots out of the way.
[beat 3] CORNELIUS: Train due? ELIJAH: Four o'clock. CORNELIUS: That's a ways. ELIJAH: Hot day for waiting. Cornelius smiles. Takes off his hat and wipes his brow. Santi drops the straw. Picks up a new one.
[beat 4] CORNELIUS: That your boy at the pump? ROSIE: He's everybody's boy. Cornelius nods. Watches Jed work the handle. The water gushes into a trough.
[beat 5] JED: Mister, you want some? CORNELIUS: I'd be obliged. Jed fills a tin cup. Hands it up. Cornelius drinks. Slowly. Hands it back.
[beat 6] CORNELIUS: Peas. ROSIE: Peas. CORNELIUS: I always liked them.
[beat 7] She finally looks up. Meets his eye. ROSIE: Not these.
[beat 8] Cornelius lowers his hand. Santi straightens from the post. Elijah sets the knife on his knee. Jed backs away from the pump. CORNELIUS: Ah.
[beat 9] Rosie reaches into the pan. Under the peas, a revolver. She lifts it, calm as a woman lifting a teacup. ROSIE: Walk back to your horse. He does not move. ROSIE: Now, Mr. Dunleavy.
[beat 10] He turns. Takes the steps one at a time. Reaches the gray. Swings up. The dog lifts its head.
[beat 11] CORNELIUS: Tell the boy to keep pumping. He rides out.
[beat 12] Rosie sets the revolver back in the peas. Jed lets out a sob and sits right down in the dust.
PLACE (transit): airport | train station | subway platform | bus terminal | hotel lobby | ferry terminal | border checkpoint | motel | rest stop
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 5 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 8 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 9 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 10 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 11 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
BEAT 12 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
CHAR ROSIE ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR ROSIE TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR ROSIE TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR ELIJAH TOBIAS CORNWALL ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR ELIJAH TOBIAS CORNWALL TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR ELIJAH TOBIAS CORNWALL TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR JED ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR JED TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR JED TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR PERALES-WINTERS ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR PERALES-WINTERS TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR PERALES-WINTERS TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR CORNELIUS DUNLEAVY-KEITA ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR CORNELIUS DUNLEAVY-KEITA TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative
CHAR CORNELIUS DUNLEAVY-KEITA TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic

### SCENE s00288 | EXT. CHERRY ORCHARD IN BLOSSOM - DAY
Characters: LAZARUS BARNABY-OKORO, HEZ, ARRINGTON-CHEN, PRUDENCE LOWELL-ADEYEMI
[beat 0] Pink petals on the wind. A weathered fence. A stone farmhouse with the shutters closed. Two men sit on the porch. LAZARUS BARNABY-OKORO (50s, shirtsleeves, suspenders, sharp eyes) whittles. Slow strokes. HEZEKIAH "HEZ" ARRINGTON-CHEN (60s, white mustache, bad leg stretched out) fans himself with a hat. A mockingbird sings. Petals fall.
[beat 1] HEZ: Pretty. LAZARUS: Pretty. Silence.
[beat 2] HEZ: Used to hate cherries. LAZARUS: You never said. HEZ: Didn't have to. He fans himself. Lazarus sets down the knife.
[beat 3] LAZARUS: Hez. HEZ: Mm. LAZARUS: Eleven years. HEZ: Twelve in August. LAZARUS: Twelve. Hez nods. A petal lands on his boot. He brushes it off.
[beat 4] HEZ: You ever think she'd come back? LAZARUS: No. HEZ: Me neither.
[beat 5] A quiet. The mockingbird stops. The wind drops. The orchard holds its breath. HEZ: Funny how the birds go quiet. LAZARUS: Mm. HEZ: Before weather. LAZARUS: Before something.
[beat 6] Lazarus rises. Walks to the porch rail. Looks down the lane.
[beat 7] Dust, far off. One rider. Coming slow. LAZARUS: Company.
[beat 8] Hez struggles up. Takes his hat. Stands beside him. They watch together.
[beat 9] The rider reaches the gate. Stops. A woman. Black dress, black hat, a rifle across the saddle. She dismounts. Her name is PRUDENCE LOWELL-ADEYEMI (40s, dust-streaked, hard-eyed). She walks to the porch. Stops at the bottom step.
[beat 10] PRUDENCE: Lazarus. LAZARUS: Prudence. PRUDENCE: Hezekiah. HEZ: Ma'am. She lets the rifle hang.
[beat 11] PRUDENCE: You thought I was dead. LAZARUS: We hoped. PRUDENCE: That's honest. HEZ: Pru, we can talk-- PRUDENCE: We talked. Twelve years ago. On this porch.
[beat 12] She climbs one step. PRUDENCE: You said you'd sell the land and split it. LAZARUS: We did. PRUDENCE: You said you'd send my share. LAZARUS: It never-- PRUDENCE: It never came.
[beat 13] Lazarus and Hez exchange a look. Hez's hand drifts toward his hat. HEZ: Pru, I don't know what you think--
[beat 14] PRUDENCE: I think the orchard is mine. Petals swirl. Lazarus's hand goes still on the rail.
[beat 15] LAZARUS: It's mine, Pru. I paid. PRUDENCE: With what? Silence. She climbs another step. PRUDENCE: With my share. LAZARUS: Pru.
[beat 16] PRUDENCE: I'm not here to kill you. HEZ: Thank God. PRUDENCE: I'm here to sit.
[beat 17] She climbs the last step. Looks at the empty chair. Sits. Lays the rifle across her knees.
[beat 18] PRUDENCE: Pour me a drink, Hez. Hez stares at her. Slowly reaches for the jug. Pours. His hand trembles. She takes the cup.
[beat 19] She drinks. Sets it down. PRUDENCE: Now. Tell me about the cherries.
[beat 20] Lazarus turns from the rail. Sits. Picks up the knife. Doesn't whittle. Just holds it. LAZARUS: They bloom early here. PRUDENCE: I remember.
[beat 21] The mockingbird starts again, slowly. A petal falls on the rifle barrel. None of them moves to brush it off.
PLACE (nature): forest | beach | field | mountain | desert | lake or river | garden or park | cave | snowfield
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 9 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 10 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 11 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 12 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 13 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 14 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 15 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 16 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 17 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 18 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 19 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 20 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR LAZARUS ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR LAZARUS TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR LAZARUS TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR HEZ ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR HEZ TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR HEZ TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR PRUDENCE LOWELL-ADEYEMI ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR PRUDENCE LOWELL-ADEYEMI TRAIT (angry): angry | furious | seething | hot-headed | resentful | bitter | volatile | irritable | vengeful
CHAR PRUDENCE LOWELL-ADEYEMI TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely

### SCENE s00289 | INT. FLOWER WHOLESALER COLD ROOM - PRE-DAWN
Characters: PHIL, ADEWALE-STRAND, RAFI, KOWALCZYK-MENSAH, DESI, LINDGREN-OKAFOR
[beat 0] Buckets of roses. Fog from the compressor. A caged bulb. Three people in refrigerated coats stand around a steel table. A blueprint under their elbows. A thermos steaming. PHILOMENA "PHIL" ADEWALE-STRAND (50s, reading glasses) taps the blueprint with a pencil. RAFAEL "RAFI" KOWALCZYK-MENSAH (30s, tattooed forearm) stirs coffee with a pen. DESIREE "DESI" LINDGREN-OKAFOR (20s, headphones round neck) chews a rose petal.
[beat 1] PHIL: The armored van arrives at six. RAFI: Six-ten. DESI: Six-oh-five. PHIL: Six. RAFI: It's always late. DESI: Not on Thursdays. PHIL: It's Thursday. RAFI: It's a flower truck on Thursdays. DESI: They deliver the same floor. PHIL: They deliver at the same dock. RAFI: Different dock. DESI: Same dock, different door.
[beat 2] PHIL: Children. They stop. Rafi sips. Desi shrugs.
[beat 3] PHIL: Same dock. Same door. We hide in the roses. RAFI: In the roses. DESI: Thorns? PHIL: Dethorned. DESI: Oh.
[beat 4] RAFI: Desi. DESI: Rafi. They say each other's name together. Rafi grins. Desi flicks the petal at him. It lands on the blueprint.
[beat 5] PHIL: Five-forty. Positions. She folds the blueprint. Slides it into her coat. Rafi screws the lid on the thermos. Desi pulls her headphones up.
[beat 6] The compressor shudders. The light flickers once, then steadies.
PLACE (industrial): warehouse | factory floor | docks | mine | power plant | scrapyard | hangar | loading bay | boiler room
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (claustrophobic): claustrophobic | suffocating | trapped | cramped | oppressive | airless | boxed-in | pressurized | confined
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 4 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 5 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR PHIL ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR PHIL TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR PHIL TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR RAFI ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR RAFI TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR RAFI TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR DESI ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR DESI TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR DESI TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
