You refine labels for screenplay scenes. Each item already has a coarse label; pick the ONE best fine label
from the options listed for it (copy the option text exactly).

For each scene write one JSON object:
{"scene_id": "...", "place": "<fine>", "atmos": ["<fine for each coarse atmos, same order>"],
 "beats": ["<fine for beat 0>", "<fine for beat 1>", ...],
 "chars": {"<NAME>": {"role": "<fine>", "traits": ["<fine for each coarse trait, same order>"]}}}

Write all scenes as JSON Lines (one object per line) to /home/user/screenwrite-analyzers/data/analyzers/labels/desc_fine/part_s00230.jsonl with the Write tool. No other text in the file.
Include every scene below. Reply only with "done N".

## Scenes

### SCENE s00230 | INT. BACK ROOM, FISH MARKET - PRE-DAWN
Characters: SAL KNIFE, BIANCHINI, RENZO, DETECTIVE MARISELA OYELOWO-KANE, GRETCHEN VOLKOV, DOMINGO, TAVARES
[beat 0] Crushed ice. Crates of mackerel. A bare bulb swings overhead. SALVATORE "SAL THE KNIFE" BIANCHINI (50s, rubber apron, scarred knuckles) counts cash into a fish crate. His nephew, LORENZO "RENZO" BIANCHINI (20s, nervous, wet cuffs), holds the lid. At a steel table, DETECTIVE MARISELA OYELOWO-KANE (40s, trench coat, notebook) sits perfectly still. Across from her, the bookkeeper, GRETCHEN VOLKOV (50s, cardigan, reading glasses on a cord), sorts receipts. By the freezer door, a hulking enforcer called DOMINGO "THE HAMMER" TAVARES (30s, tailored suit under a slicker) watches the others.
[beat 1] SAL: Renzo, keep your hands where I see them. RENZO: They're on the lid, Uncle Sal. SAL: Then keep them there.
[beat 2] GRETCHEN: Your numbers don't add, Salvatore. SAL: Gretchen, my numbers always add. GRETCHEN: Not this month. She holds up a receipt. Sal squints at it. The bulb swings. Shadows slide across everyone.
[beat 3] MARISELA: Mr. Bianchini, I'd like to know where your nephew was Tuesday night. SAL: Detective, he was here. Gutting cod. Ask the cod. MARISELA: I'm asking you.
[beat 4] DOMINGO: Boss, she's wearing a wire.
[beat 5] Marisela and Sal both look at Gretchen. Gretchen blinks, then at Marisela. Domingo reaches for his pocket. Renzo lets go of the lid and it slams.
[beat 6] She goes for the door. He goes for her. Gretchen throws the receipts, a blizzard of paper. Marisela dives behind the crates. Sal pulls a gutting knife and Domingo draws a pistol. RENZO: Nobody shoot! Nobody shoot!
[beat 7] A long frozen beat. Paper settles like snow. DOMINGO: She's not wired. It's the bookkeeper. GRETCHEN: I don't wear wires, Mr. Tavares. I wear cardigans.
[beat 8] She peels the cardigan open. Nothing underneath but a blouse. Sal lowers the knife. Domingo lowers the gun.
[beat 9] SAL: Then who's talking to the police?
[beat 10] Everyone turns slowly to Renzo. RENZO: Uncle Sal. I can explain. SAL: Of course you can, Renzo.
[beat 11] He puts the knife down. Picks up a mackerel instead. Weighs it. SAL: But first, you gut the fish.
PLACE (shop): store | market | pharmacy | pawn shop | bookstore | gas station | bakery | boutique | convenience store
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (gritty): gritty | seedy | grimy | dangerous | rough | lawless | sordid | raw | violent
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 2 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 3 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 4 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 5 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 6 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 7 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 8 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 9 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 10 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 11 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
CHAR SAL KNIFE ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR SAL KNIFE TRAIT (angry): angry | furious | seething | hot-headed | resentful | bitter | volatile | irritable | vengeful
CHAR SAL KNIFE TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR RENZO ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR RENZO TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR RENZO TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR DETECTIVE MARISELA OYELOWO-KANE ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR DETECTIVE MARISELA OYELOWO-KANE TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR DETECTIVE MARISELA OYELOWO-KANE TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR GRETCHEN VOLKOV ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR GRETCHEN VOLKOV TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR GRETCHEN VOLKOV TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR DOMINGO ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR DOMINGO TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR DOMINGO TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious

### SCENE s00231 | INT. TAXIDERMY SHOP BACK OFFICE - NIGHT
Characters: CONSTANCE BELLWETHER-OKAFOR, INSPECTOR ARTHUR LINDQVIST, ELLIOTT FAIRWEATHER-NGUYEN
[beat 0] Glass eyes in drawers. A stuffed heron on the filing cabinet. A desk lamp. CONSTANCE BELLWETHER-OKAFOR (50s, shop owner, tweed) sits behind the desk. Across from her, INSPECTOR ARTHUR LINDQVIST (60s, bowler hat on his knee) leans forward.
[beat 1] INSPECTOR LINDQVIST: Miss Bellwether-Okafor, the dead man was your partner. CONSTANCE: He was, Inspector. INSPECTOR LINDQVIST: And you were the last to see him. CONSTANCE: I locked up at six. He was alive then. INSPECTOR LINDQVIST: Alive and in a temper, the clerk says. CONSTANCE: He was always in a temper.
[beat 2] INSPECTOR LINDQVIST: About what? CONSTANCE: The heron. INSPECTOR LINDQVIST: The heron. CONSTANCE: He wanted to sell it. I did not. INSPECTOR LINDQVIST: To whom? CONSTANCE: A collector. A man who pays in cash. INSPECTOR LINDQVIST: Name? CONSTANCE: He never gave one. INSPECTOR LINDQVIST: Convenient. CONSTANCE: For him, perhaps. Not for me.
[beat 3] INSPECTOR LINDQVIST: Do you own a revolver, madam? CONSTANCE: I own a skinning knife and a very good sense of humor. INSPECTOR LINDQVIST: The first I've seen. The second I'm waiting for. CONSTANCE: Then you will wait a long time.
[beat 4] He taps his hat. She straightens a pen. The heron stares at both.
[beat 5] INSPECTOR LINDQVIST: Tell me about the safe. CONSTANCE: There is no safe. INSPECTOR LINDQVIST: There is a safe-shaped hole in your wall. CONSTANCE: Is there? INSPECTOR LINDQVIST: Behind the heron. CONSTANCE: I never look behind the heron. INSPECTOR LINDQVIST: Perhaps you should.
[beat 6] The door opens. A tall young man steps in, soaked, a package under his arm. ELLIOTT FAIRWEATHER-NGUYEN (20s, delivery boy, cap dripping) stops. He looks from one to the other.
[beat 7] ELLIOTT: Sorry. Parcel for Mr. Pennington. CONSTANCE: Mr. Pennington is dead. ELLIOTT: Oh. Then who signs? INSPECTOR LINDQVIST: I will. What is it?
[beat 8] ELLIOTT: Don't know. It's ticking. Inspector Lindqvist and Constance look at each other. Then at the parcel. Then at the heron.
[beat 9] CONSTANCE: Put it down gently, young man. ELLIOTT: Is it going to-- INSPECTOR LINDQVIST: It's going to be fine. Probably.
[beat 10] Elliott lowers the parcel onto the desk. The ticking stops. Silence.
[beat 11] Constance lifts the lid. Inside, a brass pocket watch and a note. CONSTANCE: "Look behind the heron. Signed, Pennington."
[beat 12] INSPECTOR LINDQVIST: He's been dead since six. CONSTANCE: He mailed it at five.
[beat 13] Elliott takes off his dripping cap. ELLIOTT: Should I go? INSPECTOR LINDQVIST: No. Stand by the heron. Both of you.
[beat 14] They turn toward the bird. It stares back, patient.
PLACE (shop): store | market | pharmacy | pawn shop | bookstore | gas station | bakery | boutique | convenience store
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 2 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 3 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 4 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 5 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 8 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 9 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 10 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 11 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 12 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 13 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 14 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR CONSTANCE BELLWETHER-OKAFOR ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR CONSTANCE BELLWETHER-OKAFOR TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR CONSTANCE BELLWETHER-OKAFOR TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR INSPECTOR ARTHUR LINDQVIST ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR INSPECTOR ARTHUR LINDQVIST TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR INSPECTOR ARTHUR LINDQVIST TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR ELLIOTT FAIRWEATHER-NGUYEN ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR ELLIOTT FAIRWEATHER-NGUYEN TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR ELLIOTT FAIRWEATHER-NGUYEN TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated

### SCENE s00232 | EXT. FROZEN RIVER GORGE - DUSK
Characters: WILHELMINA OSEI-STRAND, TOMAS BRENNAN-ADEYEMI
[beat 0] A slot of black rock, ice-glazed. Wind scours the canyon floor. Snow hisses along the ridge like sand. At the bottom, half under an overhang, a collapsed tent: orange nylon sagging under a week of drift. Beside it, a dead stove and a rope tied to nothing. DR. WILHELMINA OSEI-STRAND (40s, glaciologist, frostbitten cheeks, a parka two sizes too big) crouches beside her younger colleague, TOMAS BRENNAN-ADEYEMI (20s, field assistant, one boot missing), who sits propped against the rock with his eyes half open.
[beat 1] WILHELMINA: Talk to me. Count backward from ten. TOMAS: Ten. Nine. WILHELMINA: Keep going. TOMAS: Eight. Tired.
[beat 2] She tucks her scarf around his throat. Stands. Cups her mouth toward the ridge. WILHELMINA: Anyone! Anyone up there!
[beat 3] Only the wind answers. She lowers her hands. Mutters, barely audible. WILHELMINA: Okay. Okay. Think. Fire. Heat. Water.
[beat 4] She digs through the wreck of the tent and finds a single flare, cracked at the base. She weighs it in her glove.
[beat 5] WILHELMINA: We've got one shot. When I say, close your eyes. TOMAS: Why? WILHELMINA: Because I'm going to try to be a lighthouse.
[beat 6] She strikes. The flare sputters, catches. Red light floods the walls of the gorge, and the falling snow turns to rubies.
[beat 7] Far above, a faint, answering glow.
PLACE (nature): forest | beach | field | mountain | desert | lake or river | garden or park | cave | snowfield
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 2 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 3 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 4 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 5 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
CHAR DR. WILHELMINA OSEI-STRAND ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR DR. WILHELMINA OSEI-STRAND TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR DR. WILHELMINA OSEI-STRAND TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR TOMAS BRENNAN-ADEYEMI ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR TOMAS BRENNAN-ADEYEMI TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR TOMAS BRENNAN-ADEYEMI TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained

### SCENE s00233 | INT. LAUNDRY ROOM OF A GRAND HOTEL - NIGHT
Characters: EULALIE FONTENOT-RAMASWAMY, JULIAN FONTENOT
[beat 0] Steam pipes and canvas carts. A long ironing table with a single white shirt stretched over it. MRS. EULALIE FONTENOT-RAMASWAMY (60s, head housekeeper, starched apron, silver hair pinned flat) presses the shirt with a heavy iron. Her motions are slow and exact. Her son, JULIAN FONTENOT (30s, tuxedo, bow tie undone) stands across the table. He holds a champagne flute like it's something he's been told to carry.
[beat 1] JULIAN: Mother. EULALIE: Julian. JULIAN: The reception started an hour ago. EULALIE: I know. I heard the music. She turns the shirt. Irons the cuff. He watches the iron, not her.
[beat 2] JULIAN: You promised you'd come. EULALIE: I'm here. In the building. JULIAN: That's not the same. EULALIE: It's close. The iron hisses. Steam rolls between them.
[beat 3] JULIAN: Mr. Whitcombe asked about you. EULALIE: Did he. JULIAN: He wants to thank you. EULALIE: I've been thanked. JULIAN: By whom? EULALIE: By the shirts.
[beat 4] He sets the flute down. Takes a cloth from the cart and begins to fold it into a square. It's the wrong size. He folds it again.
[beat 5] JULIAN: They're announcing the engagement. EULALIE: Yes. JULIAN: Sophie's parents are here. EULALIE: I've seen their luggage. Very nice leather. JULIAN: Mother. EULALIE: Julian.
[beat 6] She sets the iron upright. Looks at the shirt. Finally at him. EULALIE: Your collar is crooked.
[beat 7] He lifts his hands to fix it. They shake. She walks around the table, takes the two ends of the bow tie from him, and ties it without a word. Her fingers are quick and steady. His are not.
[beat 8] JULIAN: I thought you'd be angry. EULALIE: I am ironing, Julian. Don't mistake it.
[beat 9] She tugs the knot straight. Smooths his lapels with both palms. EULALIE: Go. They'll want you for the toast.
[beat 10] JULIAN: Come with me. EULALIE: In this apron? JULIAN: Yes.
[beat 11] She looks at the apron. At her hands. At the white shirt, still warm on the board.
[beat 12] EULALIE: Give me ten minutes. JULIAN: You'll come? EULALIE: Ten minutes.
[beat 13] He nods. Picks up his flute. Leaves it. Picks up the folded cloth instead and puts it in her hand.
[beat 14] He goes. She stands holding the cloth.
[beat 15] Then she takes off the apron, and folds it, and lays it on the board where the shirt had been.
PLACE (workplace): office | newsroom | laboratory | workshop | studio | conference room | farm | construction site | server room
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
ATMOS (claustrophobic): claustrophobic | suffocating | trapped | cramped | oppressive | airless | boxed-in | pressurized | confined
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 2 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 3 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 4 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 7 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 8 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 9 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 10 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 11 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 12 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 13 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
BEAT 14 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
BEAT 15 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
CHAR MRS. EULALIE FONTENOT-RAMASWAMY ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR MRS. EULALIE FONTENOT-RAMASWAMY TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR MRS. EULALIE FONTENOT-RAMASWAMY TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR JULIAN FONTENOT ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR JULIAN FONTENOT TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR JULIAN FONTENOT TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful

### SCENE s00234 | EXT. SHELLED FARMHOUSE COURTYARD, NORMANDY - DAWN
Characters: ZEKE, MATTHIAS-ODUYA, PRIVATE COLM BRANNIGAN-VOSS, RAFA, DELGADO-HOLM
[beat 0] Mist. Broken tile. A dead cow on its side, bloated. Three soldiers crouch behind a collapsed wall. SERGEANT EZEKIEL "ZEKE" MATTHIAS-ODUYA (30s, helmet netted, chewing nothing) peers over the stones. Beside him, PRIVATE COLM BRANNIGAN-VOSS (19, rifle too big, freckles) breathes through his mouth. Behind them, CORPORAL RAFAELA "RAFA" DELGADO-HOLM (20s, radio on her back, steady hands) checks her sidearm.
[beat 1] ZEKE: Quiet. Too quiet. COLM: You say that every time, Sarge. ZEKE: It's true every time.
[beat 2] RAFA: Barn's clear. House is clear. Nothing on the ridge. ZEKE: Then why's the cow dead? RAFA: Shell. ZEKE: Which shell? COLM: Ours? ZEKE: Maybe.
[beat 3] A bird lands on the cow. Pecks. Leaves.
[beat 4] COLM: Corporal Delgado-Holm. Can I ask something? RAFA: Rafa. Just Rafa. COLM: Rafa. Why's the radio quiet? RAFA: Because nobody's talking. COLM: That's what I mean.
[beat 5] ZEKE: Brannigan. Eyes front. COLM: Yes, Sarge.
[beat 6] They wait. A droplet of mist rolls from Zeke's helmet and hits the mud.
[beat 7] RAFA: Sarge. Door. The farmhouse door, which was shut, is now ajar. A hand-width.
[beat 8] ZEKE: Colm. Left. Rafa. Right. On three. COLM: One. RAFA: Two. They rise together, rifles up.
[beat 9] The door swings wide. Out steps a goat. Then a second goat. A third.
[beat 10] The squad stares. The goats stare back. COLM: Sarge. Was that the thing? ZEKE: That was the thing. RAFA: I'm going to be sick.
[beat 11] She laughs, covering her mouth. Colm sinks down, giggling. Zeke slumps against the wall, shoulders shaking.
[beat 12] A whistle in the sky. Rising. They all stop laughing at once.
[beat 13] ZEKE: Down! They scatter. The first shell lands in the barn. The wall behind them heaves. The goats bolt in three directions. Dust and straw rain over three helmets.
[beat 14] Rafa pulls Colm flat. Zeke crawls over both of them. ZEKE: Rafa! Radio! RAFA: It's dead! ZEKE: Then pray! COLM: To who? ZEKE: The goats!
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 5 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 8 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 9 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 10 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 11 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 12 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 13 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 14 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
CHAR ZEKE ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR ZEKE TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR ZEKE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR PRIVATE COLM BRANNIGAN-VOSS ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR PRIVATE COLM BRANNIGAN-VOSS TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR PRIVATE COLM BRANNIGAN-VOSS TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR RAFA ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR RAFA TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR RAFA TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic

### SCENE s00235 | INT. RADIO DUGOUT, WESTERN FRONT - NIGHT
Characters: LIEUTENANT PHILIPPE ARMAND-DOGBE, RADIO, STRANGER, ALOIS
[beat 0] A timber box dug into clay. A single candle. A field set with a cracked dial. LIEUTENANT PHILIPPE ARMAND-DOGBE (20s, mud to the eyebrows, a hole in his left sleeve) crouches over the headset, writing coordinates with a stub of pencil.
[beat 1] Static. Then a faint, courteous voice. RADIO: Dugout Seven, this is Battalion. Report. PHILIPPE: Battalion, Dugout Seven. Quiet night. Nothing to report. RADIO: Copy. Stay warm, Seven. PHILIPPE: Will do.
[beat 2] He releases the key. Stares at the candle. The flame is steady. Too steady. For a long moment the whole dugout seems to hold still.
[beat 3] A scrape at the entrance. The blanket curtain moves. A figure ducks in. A boy in a muddy overcoat with no insignia, holding a tin cup of tea. He is perhaps sixteen. He wears no helmet, only a thin smile.
[beat 4] PHILIPPE: Who are you?
[beat 5] The boy sets the cup down in front of him. STRANGER: Tea, sir. Compliments of the other side. Philippe doesn't breathe. The pencil rolls off the table.
[beat 6] STRANGER: They've been listening since Tuesday. PHILIPPE: And you came to tell me? STRANGER: I came to say they've changed the plan.
[beat 7] He crosses to the radio, turns the dial one click, and Battalion's voice fades to nothing. Another voice takes its place, in another language, bright and brisk.
[beat 8] The boy meets Philippe's eyes. Now he has a name. ALOIS: My name is Alois, sir. I'd drink the tea.
[beat 9] Philippe picks up the cup. His hand does not shake. He drinks.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 2 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 8 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 9 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
CHAR LIEUTENANT PHILIPPE ARMAND-DOGBE ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR LIEUTENANT PHILIPPE ARMAND-DOGBE TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR LIEUTENANT PHILIPPE ARMAND-DOGBE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR RADIO ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR RADIO TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR RADIO TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR STRANGER ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR STRANGER TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR STRANGER TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR ALOIS ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR ALOIS TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR ALOIS TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative

### SCENE s00236 | INT. SMALL-TOWN PET FUNERAL PARLOR - DAY
Characters: BEA, LANGSTROM-OYELEYE, GERRY, POTTS, HECTOR MWENDA-ABERNATHY, DENNIS
[beat 0] Pastel walls. Little urns on velvet shelves. A framed poster: "Every Goodbye Deserves Dignity." BEATRIX "BEA" LANGSTROM-OYELEYE (40s, funeral director, black pencil skirt, too-bright lipstick) stands at a small oak lectern with a sleeping ferret in a tiny casket beside her. Seated in the front row, in folding chairs: GERALDINE "GERRY" POTTS (60s, widowed, tissue in fist) and her brother-in-law HECTOR MWENDA-ABERNATHY (60s, loud tie, sunglasses on indoors).
[beat 1] BEA: Friends. We are gathered to honor Nibbles. GERRY: Oh, Nibbles. HECTOR: He was a good ferret. BEA: He was.
[beat 2] HECTOR: Smelled like a gym bag. GERRY: Hector! HECTOR: I'm saying it with love. BEA: Perhaps we could hold the anecdotes until the reception. HECTOR: I'm just saying he bit the mailman. GERRY: He bit the mailman once. HECTOR: Four times. GERRY: Twice. HECTOR: Four. I counted.
[beat 3] BEA: Let us bow our heads. They do. A pause.
[beat 4] A phone rings, tinny, from Hector's pocket. HECTOR: Not now, Dennis. DENNIS: Hector, did you tell her about the hamster?
[beat 5] GERRY: What hamster? HECTOR: Dennis, I'm at a funeral! DENNIS: Whose? BEA: Nibbles's. DENNIS: Oh no. He was a good ferret! HECTOR: That's what I said! GERRY: Hector, what hamster? HECTOR: Nothing! A rumor! BEA: Ladies, gentlemen, caller, please--
[beat 6] The casket lid pops open. Nibbles sits up, yawns, stretches.
[beat 7] Silence in every key. GERRY: He's alive. HECTOR: He was asleep. BEA: It happens. DENNIS: What happens? Did he come back?
[beat 8] Hector hangs up. Gerry scoops the ferret into her arms and sobs with joy. GERRY: My boy! My Nibbles!
[beat 9] BEA: I'll prepare a refund. HECTOR: Keep the flowers.
[beat 10] Nibbles bites Bea. She yelps. Hector nods, satisfied. HECTOR: Four times.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
ATMOS (sterile): sterile | clinical | cold | corporate | bureaucratic | impersonal | antiseptic | formal | detached
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 2 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 5 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 8 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 9 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 10 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
CHAR BEA ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR BEA TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR BEA TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR GERRY ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR GERRY TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful
CHAR GERRY TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR HECTOR MWENDA-ABERNATHY ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR HECTOR MWENDA-ABERNATHY TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR HECTOR MWENDA-ABERNATHY TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR DENNIS ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR DENNIS TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR DENNIS TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle

### SCENE s00237 | INT. SINKING FISHING TRAWLER, WHEELHOUSE - NIGHT
Characters: CAPTAIN RUTH ABERNATHY-KOMA, BASTIEN LEFEBVRE-ADEOLA, MAEVE ONWUACHI-DRUMM, COAST GUARD
[beat 0] Water ankle-deep and rising. A lantern swings from the ceiling. Waves slam the hull. CAPTAIN RUTH ABERNATHY-KOMA (50s, oilskins, grey braid) grips the wheel. Her knuckles are white. Beside her, deckhand BASTIEN LEFEBVRE-ADEOLA (20s, hood, cut lip) bails with a plastic bucket. At the radio, first mate MAEVE ONWUACHI-DRUMM (30s, hands taped, glasses fogged) clutches the handset.
[beat 1] MAEVE: Mayday, mayday, this is trawler Gallant Heron, taking water, request assistance. COAST GUARD: Gallant Heron, say again your position. MAEVE: Forty-one north, sixty-eight west! Forty-one north!
[beat 2] BASTIEN: How much time? RUTH: Twenty minutes. BASTIEN: That's not time. That's a prayer.
[beat 3] COAST GUARD: ...ant Heron... one hour... response... MAEVE: One hour! We don't have one hour!
[beat 4] RUTH: Maeve. Give me the mic. MAEVE: They can't hear-- RUTH: Give it to me!
[beat 5] Maeve hands it over. A wave rocks the boat. The lantern swings.
[beat 6] RUTH: Coast Guard, this is Ruth Abernathy. Last transmission. We are abandoning ship in ten minutes. Three souls. Please mark our position.
[beat 7] BASTIEN: Abandoning to what? RUTH: The raft. BASTIEN: The raft's been in the shed since March. RUTH: Then it's had a long rest.
[beat 8] MAEVE: Captain, the pump's dead! BASTIEN: I'm bailing! RUTH: Bail faster!
[beat 9] COAST GUARD: ...Heron... flare... fire flare... MAEVE: Flare! Where's the flare? BASTIEN: Port locker! MAEVE: It's underwater! RUTH: Then swim!
[beat 10] Maeve dives into the dark water pooled in the corner. Surfaces gasping. A bright orange flare in her fist. MAEVE: Got it!
[beat 11] RUTH: Up top! Go!
[beat 12] They push through the hatch. The sea comes at them in sheets. Wind grabs the flare, strikes it. Red fire stabs the sky.
[beat 13] Far off, a searchlight swings. Bastien whoops. BASTIEN: They see us! They see us!
[beat 14] RUTH: Slow down, Ruth. Don't thank anyone yet.
[beat 15] The hull groans. A wave lifts them. The searchlight finds their faces.
PLACE (vehicle): car | truck or van | taxi | bus | train car | boat | plane cabin | cockpit | ambulance or police car
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 2 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 3 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 4 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 5 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 6 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 7 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 8 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 9 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 10 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 11 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 12 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 13 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 14 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 15 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR CAPTAIN RUTH ABERNATHY-KOMA ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR CAPTAIN RUTH ABERNATHY-KOMA TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR CAPTAIN RUTH ABERNATHY-KOMA TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR BASTIEN LEFEBVRE-ADEOLA ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR BASTIEN LEFEBVRE-ADEOLA TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR BASTIEN LEFEBVRE-ADEOLA TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR MAEVE ONWUACHI-DRUMM ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR MAEVE ONWUACHI-DRUMM TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR MAEVE ONWUACHI-DRUMM TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR COAST GUARD ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR COAST GUARD TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR COAST GUARD TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00238 | EXT. COMMUNITY POOL, DIVING PLATFORM - LATE AFTERNOON
Characters: PETE, ADEYEMI-LANDRY, BEANPOLE, OKONJO, SUNITA MARCHETTI-DAS, CASPIAN FROST-NKEMELU, ROSALIND, GWENDOLYN TARASOVA
[beat 0] Chlorine light, gold on blue. The ten-meter platform stands over the water like a lighthouse in swim trunks. Six teenagers cluster at the top, bare feet on warm concrete. PERPETUA "PETE" ADEYEMI-LANDRY, 16, tall and laconic, stretches her calves against the rail. She does not look down. BRIAN "BEANPOLE" OKONJO, 15, adjusts his goggles for the fifth time, lips moving as he rehearses a joke he will never tell. SUNITA MARCHETTI-DAS, 16, ponytail wet, picks at a nail. CASPIAN FROST-NKEMELU, 17, shirtless, tries very hard to look relaxed. The twins ROSALIND and GWENDOLYN TARASOVA, 15, share a towel and a single earbud each. Wind moves the surface of the pool like a hand smoothing a bedsheet.
[beat 1] PETE: Who's first? BEANPOLE: Not me. SUNITA: Not me. CASPIAN: I'll go. PETE: You said that last week. CASPIAN: And last week I almost did.
[beat 2] The twins exchange a look. Take the earbuds out in unison. ROSALIND: We'll go together. GWENDOLYN: We'll go together. ^
[beat 3] They step to the edge, hands linked. Neither speaks. Below, a lifeguard whistles a lazy tune.
[beat 4] SUNITA: Wait. Wait. Don't. ROSALIND: Why? GWENDOLYN: Why? SUNITA: Because after this, it's September.
[beat 5] Silence. Even the wind seems to pause. She says it quietly. They hear it anyway.
[beat 6] Pete finally looks down. Her face softens. She sits on the edge of the platform, legs swinging into the sky. PETE: Then let's make it a good one.
[beat 7] Caspian sits beside her. Beanpole joins them, goggles fogged. Sunita comes last, close enough that their shoulders touch.
[beat 8] The twins look at each other once more. Then, together, they jump.
[beat 9] The splash is distant and silver. The others lean over to watch the ripples spread outward, ring after ring, until they reach the walls.
[beat 10] BEANPOLE: Okay. Now me.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 2 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 7 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 8 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 9 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 10 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
CHAR PETE ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR PETE TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR PETE TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR BEANPOLE ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR BEANPOLE TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR BEANPOLE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR SUNITA MARCHETTI-DAS ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR SUNITA MARCHETTI-DAS TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful
CHAR SUNITA MARCHETTI-DAS TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR CASPIAN FROST-NKEMELU ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR CASPIAN FROST-NKEMELU TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR CASPIAN FROST-NKEMELU TRAIT (kind): kind | compassionate | considerate | patient with others | thoughtful | tender | forgiving | selfless | polite
CHAR ROSALIND ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR ROSALIND TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR ROSALIND TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR GWENDOLYN TARASOVA ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR GWENDOLYN TARASOVA TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR GWENDOLYN TARASOVA TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated

### SCENE s00239 | EXT. BRIDGE OF BONES OVER THE GREY GORGE - DAWN
Characters: AELFWYN THORNBURY, GRIM, OKORO-SHALE, THISTLE-WREN, BROTHER CASSIAN VELLACOTT
[beat 0] A bridge strung between two cliffs, built from the ribs of some long-dead leviathan. Fog fills the gorge below. Mountain wind pulls at cloaks. A party of four stands at the near end. AELFWYN THORNBURY (30s, ranger, bow across her back, scar through one eyebrow) tests the first rib with her boot. GRIMBALD "GRIM" OKORO-SHALE (50s, dwarf-born, braided beard, iron-shod staff) leans on the staff and glares at the fog. THISTLE-WREN (late teens, half-fey, hair like dandelion down) hops from foot to foot, humming. BROTHER CASSIAN VELLACOTT (40s, wandering monk, wooden prayer beads, travel-worn robe) kneels briefly, touches the stone, rises.
[beat 1] AELFWYN: We cross single file. Spacing of three paces. Anyone who stumbles, the others hold. GRIM: Three paces. As if the fog will respect it.
[beat 2] THISTLE-WREN: It will! I asked it nicely! AELFWYN: Thistle, you don't ask fog. THISTLE-WREN: That's why it listens.
[beat 3] CASSIAN: The ribs are old. Older than the oldest prayer I know. AELFWYN: Will they hold? CASSIAN: They have so far.
[beat 4] Aelfwyn nods. Steps out onto the bridge. The bone creaks, then settles. She takes three paces and stops. Grim follows. Thistle-Wren follows Grim, humming louder. Cassian takes the rear, counting his beads.
[beat 5] Halfway across, a gust slams the bridge sideways. The party freezes. Thistle-Wren grabs Grim's belt. Grim drops his staff to the rib to steady himself. Aelfwyn kneels, one hand on the bone, the other signaling Cassian to hold. The fog thickens until none of them can see more than an arm's length ahead.
[beat 6] GRIM: Idiot dwarf. Never trust a bridge made of something that died. CASSIAN: Everyone, breathe. Let the wind pass through you. THISTLE-WREN: I'm trying! My lungs are very small!
[beat 7] AELFWYN: Quiet, all of you. Listen. They listen.
[beat 8] Far below, in the white, something large exhales. THISTLE-WREN: It's the leviathan. GRIM: It's dead. THISTLE-WREN: Its ghost isn't. CASSIAN: Then we cross as guests.
[beat 9] The wind drops. The fog parts for a moment, revealing the far side: a cairn, a green slope, a thin road winding into pines.
[beat 10] AELFWYN: Move. Now. Quick and quiet.
[beat 11] They run, three paces apart, bone ringing under their boots like a xylophone of the dead. Thistle-Wren giggles. Grim wheezes. Cassian's beads clack. Aelfwyn counts, lips tight.
[beat 12] They reach the far cliff and tumble onto grass. Grim lies flat, staring at the sky. GRIM: Never again. THISTLE-WREN: We have to cross back. GRIM: I'll sleep here.
[beat 13] Behind them, the bridge sighs and sways. The fog closes over it like a lid.
[beat 14] CASSIAN: We should keep moving. The road is long. AELFWYN: Up, old friend. He takes it. She hauls him upright. The four stand in a row, looking down the road.
[beat 15] THISTLE-WREN: Where does it go? AELFWYN: Wherever we go.
[beat 16] They start walking. The wind follows at their heels, gentle now, almost apologetic.
PLACE (nature): forest | beach | field | mountain | desert | lake or river | garden or park | cave | snowfield
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
ATMOS (dreamy): dreamy | surreal | hazy | magical | whimsical | otherworldly | hypnotic | lyrical | wistful
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 2 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 5 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 6 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 7 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 8 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 9 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 10 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 11 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 12 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 13 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 14 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 15 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 16 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
CHAR AELFWYN THORNBURY ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR AELFWYN THORNBURY TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR AELFWYN THORNBURY TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR GRIM ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR GRIM TRAIT (angry): angry | furious | seething | hot-headed | resentful | bitter | volatile | irritable | vengeful
CHAR GRIM TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR THISTLE-WREN ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR THISTLE-WREN TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR THISTLE-WREN TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR BROTHER CASSIAN VELLACOTT ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR BROTHER CASSIAN VELLACOTT TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR BROTHER CASSIAN VELLACOTT TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle

### SCENE s00240 | INT. OFFICE PARK CONFERENCE ROOM "SERENITY" - MORNING
Characters: GARETH PLUMLEY-ADEBAYO, IFE, KALUZA-BRENNER, DEZ, MACALLISTER-TRAN, PRUDENCE LOCKHART-OSEI, WALLY, ZIELINSKI-MAHMOUD, HETTY, VASQUEZ-LINDGREN
[beat 0] Glass walls. A whiteboard reading "Q3 SYNERGY LEVERAGE." A bowl of fruit nobody touches. Six employees sit around a long table. GARETH PLUMLEY-ADEBAYO (40s, regional vice president, loud socks) stands at the head, marker raised. IFEOMA "IFE" KALUZA-BRENNER (30s, product lead) types without looking at the keyboard. DESMOND "DEZ" MACALLISTER-TRAN (20s, intern, over-ironed shirt) holds a notebook like a hymnal. PRUDENCE LOCKHART-OSEI (50s, compliance, red glasses) keeps her palms flat on the table. WALTER "WALLY" ZIELINSKI-MAHMOUD (60s, facilities, tool belt) sits slightly apart, eating an apple. HENRIETTA "HETTY" VASQUEZ-LINDGREN (30s, accountant) stares at the clock.
[beat 1] GARETH: Okay, team. Quick check-in. Ife, how are we feeling? IFE: Aligned. GARETH: Love that. Dez? DEZ: Also aligned, sir. GARETH: Call me Gareth. DEZ: Yes, Mr. Plumley-Adebayo. GARETH: Gareth. DEZ: Gareth, sir.
[beat 2] PRUDENCE: Gareth, before we go further, I have to note that the budget memo is unsigned. GARETH: Prudence, Prudence, Prudence. PRUDENCE: That's my name. GARETH: It will be signed. HETTY: By whom? GARETH: By... us.
[beat 3] WALLY: Nobody signs anything in this building. I've been here thirty years. GARETH: Wally, great energy. WALLY: It's an apple.
[beat 4] IFE: Gareth, the numbers-- GARETH: The numbers are flexible, Ife. HETTY: Gareth, the numbers are literally negative three million. GARETH: Hetty, what a strong, powerful negative.
[beat 5] A beat. The room hums. Dez writes "powerful negative" in his notebook and underlines it.
[beat 6] PRUDENCE: Gareth, this is a legal exposure. GARETH: Team, let's pivot to appreciation.
[beat 7] He claps. Nobody joins. Walter finishes his apple. Places the core on the table, precisely in the center of the whiteboard's reflection.
[beat 8] WALLY: I'll tell you what I appreciate. The sprinklers work.
[beat 9] He takes a lighter from his tool belt and holds it under the smoke detector.
[beat 10] The sprinklers burst. Water pours over six faces. Gareth stands at the head, marker raised, dripping.
[beat 11] GARETH: Great. This is great.
PLACE (workplace): office | newsroom | laboratory | workshop | studio | conference room | farm | construction site | server room
ATMOS (sterile): sterile | clinical | cold | corporate | bureaucratic | impersonal | antiseptic | formal | detached
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 4 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 9 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 10 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 11 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR GARETH PLUMLEY-ADEBAYO ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR GARETH PLUMLEY-ADEBAYO TRAIT (arrogant): arrogant | smug | condescending | vain | entitled | pompous | superior | boastful | self-important
CHAR GARETH PLUMLEY-ADEBAYO TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR IFE ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR IFE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR IFE TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR DEZ ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR DEZ TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR DEZ TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR PRUDENCE LOCKHART-OSEI ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR PRUDENCE LOCKHART-OSEI TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR PRUDENCE LOCKHART-OSEI TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR WALLY ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR WALLY TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR WALLY TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR HETTY ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR HETTY TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR HETTY TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely

### SCENE s00241 | INT. PRIVATE LIBRARY OF A COUNTRY HOUSE - NIGHT
Characters: SIR AUGUSTUS FERRIDAY-OKONKWO, LADY PHILOMENA FERRIDAY, BARNABY CHATTERJEE-WHITLOCK, SAMUEL OKAFOR-LYNCH
[beat 0] Firelight. Leather spines. A storm throwing rain at the leaded windows. Four people sit in wing chairs around a low table: a decanter, a deck of cards, a bowl of walnuts. SIR AUGUSTUS FERRIDAY-OKONKWO (70s, silver mustache, velvet jacket) holds a glass of port and a closed fan of cards. His niece LADY PHILOMENA FERRIDAY (30s, emerald gown, pearl choker) taps a walnut against the table. Their guest DR. BARNABY CHATTERJEE-WHITLOCK (50s, rumpled tweed, wire glasses) studies his hand. The butler, MR. SAMUEL OKAFOR-LYNCH (60s, impeccable, immaculately still), stands behind the fireplace. Thunder rolls. The cards are placed one by one.
[beat 1] SIR AUGUSTUS: Your play, Doctor. DR. CHATTERJEE-WHITLOCK: Patience, Sir Augustus. He lays a card. Smiles faintly.
[beat 2] PHILOMENA: You're stalling. DR. CHATTERJEE-WHITLOCK: I'm thinking. PHILOMENA: Same thing.
[beat 3] SIR AUGUSTUS: Samuel, more port. MR. OKAFOR-LYNCH: Of course, Sir Augustus. He glides forward, fills the glass, glides back. The fire pops.
[beat 4] PHILOMENA: Uncle, the will. SIR AUGUSTUS: Not tonight. PHILOMENA: You said tonight. SIR AUGUSTUS: I said some night. DR. CHATTERJEE-WHITLOCK: It's a sensitive subject, my dear. PHILOMENA: It's my inheritance. SIR AUGUSTUS: It's mine until I'm dead.
[beat 5] Another thunderclap. The lights flicker. The room dips to gold, then to near-black. A glass shatters. Someone gasps.
[beat 6] The lights return. Sir Augustus is slumped in his chair, one hand clutching the arm, the other still gripping the port. His mustache is wet. His eyes are open. He does not breathe.
[beat 7] Philomenna rises first, knocking the walnut bowl over. Chatterjee-Whitlock is already at the old man's side with two fingers on the throat. Okafor-Lynch has not moved from the fireplace.
[beat 8] PHILOMENA: Uncle? DR. CHATTERJEE-WHITLOCK: He's gone. PHILOMENA: That's not possible. He was just talking. DR. CHATTERJEE-WHITLOCK: It happens quickly.
[beat 9] She looks at the decanter. At the butler. At the doctor. She picks up the port, sniffs it.
[beat 10] PHILOMENA: Bitter almond. DR. CHATTERJEE-WHITLOCK: Philomena, don't touch--
[beat 11] PHILOMENA: Samuel poured it. MR. OKAFOR-LYNCH: Madam, I poured what Sir Augustus requested. PHILOMENA: You poured it twice. MR. OKAFOR-LYNCH: Once for the glass. Once for his health.
[beat 12] She lunges at him. He doesn't flinch. The doctor catches her arm. Chatterjee-Whitlock holds her back as she strains, trembling, at the butler.
[beat 13] PHILOMENA: You killed him! MR. OKAFOR-LYNCH: Madam, I loved him for forty years.
[beat 14] The storm breaks. Rain hammers the glass. For the first time, Okafor-Lynch's composure cracks.
[beat 15] He reaches into his waistcoat and withdraws a folded paper. MR. OKAFOR-LYNCH: He wrote this himself, this afternoon. It names the poison. And the man who put it in the decanter.
[beat 16] He hands it to the doctor. The doctor reads. His face drains of color.
[beat 17] DR. CHATTERJEE-WHITLOCK: I didn't-- He steps back. Philomena stares at him. The fire collapses into embers.
PLACE (home): kitchen | living room | bedroom | bathroom | apartment | family house | attic or basement | porch or yard | garage
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 2 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 3 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 4 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 9 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 10 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 11 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 12 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 13 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 14 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 15 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 16 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 17 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
CHAR SIR AUGUSTUS FERRIDAY-OKONKWO ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR SIR AUGUSTUS FERRIDAY-OKONKWO TRAIT (arrogant): arrogant | smug | condescending | vain | entitled | pompous | superior | boastful | self-important
CHAR SIR AUGUSTUS FERRIDAY-OKONKWO TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR LADY PHILOMENA FERRIDAY ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR LADY PHILOMENA FERRIDAY TRAIT (desperate): desperate | frantic | pleading | cornered | reckless | pressured | at wit's end | grasping | despairing
CHAR LADY PHILOMENA FERRIDAY TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR BARNABY CHATTERJEE-WHITLOCK ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR BARNABY CHATTERJEE-WHITLOCK TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR BARNABY CHATTERJEE-WHITLOCK TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR SAMUEL OKAFOR-LYNCH ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR SAMUEL OKAFOR-LYNCH TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR SAMUEL OKAFOR-LYNCH TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private

### SCENE s00242 | EXT. LIFEBOAT ADRIFT, SOUTHERN OCEAN - NOON
Characters: CAPTAIN ISOLDE VANDERHOEK-MWAMBA, ENSIGN REMY LAFAYETTE-OSUNDE, MAGS, ODELL-PRZYBYLSKI
[beat 0] A grey swell. A hull the colour of old teeth. The sun a dull coin behind cloud. Three figures crowd the boat. CAPTAIN ISOLDE VANDERHOEK-MWAMBA (50s, cracked lips, officer's cap tied under her chin) sits at the tiller, jaw tight. Across from her, ENSIGN REMY LAFAYETTE-OSUNDE (20s, one arm in a makeshift sling, blistered nose) holds a half-empty water tin in his good hand. In the bow, the ship's cook, MARGUERITE "MAGS" ODELL-PRZYBYLSKI (60s, apron still on, salt in her eyebrows), stares at the horizon with her chin on her knees.
[beat 1] REMY: Captain, the ration. ISOLDE: Two sips. Each. REMY: Last night it was three. ISOLDE: Last night I thought we'd be rescued by today.
[beat 2] MAGS: That's what I thought yesterday. REMY: Mags, don't. MAGS: I'm only saying.
[beat 3] ISOLDE: Pass the tin. Remy hands it over. She takes a sip, wipes her mouth, passes it on. Mags takes hers without looking.
[beat 4] MAGS: Captain, how long do you give us? ISOLDE: I don't give things. MAGS: How long do you think? ISOLDE: Three days. Four if the rain comes. REMY: And if it doesn't? ISOLDE: Then we'll know.
[beat 5] Silence. The swell lifts them, lowers them.
[beat 6] MAGS: There. REMY: Where? MAGS: There! A light!
[beat 7] Remy scrambles up, rocking the boat. Isolde grabs the gunwale. A speck of white glints on the horizon.
[beat 8] REMY: Ship. It's a ship. ISOLDE: It's a glare. REMY: It's moving! MAGS: It's moving!
[beat 9] ISOLDE: It's a gull. The speck rises, banks, and becomes a seabird, wheeling above the waves. It cries once and flies away from them.
[beat 10] Remy sinks back. Mags laughs, a cracked little sound. Then she cries, then she laughs again.
[beat 11] ISOLDE: Mags. MAGS: I know.
[beat 12] ISOLDE: Pass the tin. MAGS: It's empty. ISOLDE: Pass it anyway.
PLACE (vehicle): car | truck or van | taxi | bus | train car | boat | plane cabin | cockpit | ambulance or police car
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 4 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 9 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 10 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 11 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 12 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
CHAR CAPTAIN ISOLDE VANDERHOEK-MWAMBA ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR CAPTAIN ISOLDE VANDERHOEK-MWAMBA TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR CAPTAIN ISOLDE VANDERHOEK-MWAMBA TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR ENSIGN REMY LAFAYETTE-OSUNDE ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR ENSIGN REMY LAFAYETTE-OSUNDE TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR ENSIGN REMY LAFAYETTE-OSUNDE TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR MAGS ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR MAGS TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR MAGS TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful

### SCENE s00243 | INT. FAMILY KITCHEN, SUBURBAN HOUSE - EVENING
Characters: GRANDMOTHER ODETTE ABERNATHY-KWAME, DERRICK ABERNATHY, PRIYA RAGHAVAN-ABERNATHY, JUNE
[beat 0] Steam on the windows. A turkey, half-carved. Mismatched chairs around a table crammed with side dishes. GRANDMOTHER ODETTE ABERNATHY-KWAME (70s, cardigan, unshakable) sits at the head, fork poised. Her son DERRICK ABERNATHY (40s, rolled sleeves, carving knife) stands over the bird. His wife PRIYA RAGHAVAN-ABERNATHY (40s, apron, flour on her cheek) refills the gravy boat. Their teenager JUNIPER "JUNE" ABERNATHY (16, black nail polish, phone face down) slouches in her chair. Their youngest, MILO ABERNATHY (7, napkin tucked in his collar), kicks the table leg.
[beat 1] ODETTE: Derrick, the breast is for guests. DERRICK: Mother, we are the guests.
[beat 2] PRIYA: Derrick, the potatoes. DERRICK: Which potatoes? PRIYA: The mashed ones. JUNE: The ones I made. ^
[beat 3] ODETTE: June, put your phone away. JUNE: It's face down. ODETTE: It's still there.
[beat 4] MILO: Can I have a roll? PRIYA: Say please. MILO: Please roll.
[beat 5] DERRICK: Okay, everyone, a toast. Silence. Glasses are raised. Odette's is not. DERRICK: To family. To love. To the people at this table.
[beat 6] PRIYA: To the person who bought the wine. DERRICK: That was me. PRIYA: It was me. DERRICK: It was a joint purchase. JUNE: It was a Costco purchase. MILO: I like Costco.
[beat 7] ODETTE: Milo, eat. MILO: I'm waiting for the toast to be over. DERRICK: It's over.
[beat 8] MILO: Then why is Grandma not drinking? All heads turn to Odette. She holds her glass, then sets it down carefully.
[beat 9] ODETTE: Because I have news. DERRICK: Mother? PRIYA: Odette?
[beat 10] ODETTE: I sold the house.
[beat 11] Silence. A gravy boat drips. Milo drops his roll. JUNE: Wow.
[beat 12] DERRICK: Mother, you can't-- ODETTE: I already did. PRIYA: Let her finish.
[beat 13] ODETTE: I'm moving to Lisbon. In March.
[beat 14] MILO: Is that far? ODETTE: Very. MILO: Can I come? ODETTE: Eat your roll first.
[beat 15] Derrick sits slowly. Priya hands him the potatoes. He takes a spoonful, stares at it, and laughs once.
PLACE (home): kitchen | living room | bedroom | bathroom | apartment | family house | attic or basement | porch or yard | garage
ATMOS (cozy): cozy | homely | nostalgic | comforting | domestic | snug | familiar | sweet | wholesome
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 4 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 5 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 6 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 7 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 8 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 9 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 10 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 11 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 12 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 13 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 14 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 15 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR GRANDMOTHER ODETTE ABERNATHY-KWAME ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR GRANDMOTHER ODETTE ABERNATHY-KWAME TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR GRANDMOTHER ODETTE ABERNATHY-KWAME TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR DERRICK ABERNATHY ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR DERRICK ABERNATHY TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR DERRICK ABERNATHY TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR PRIYA RAGHAVAN-ABERNATHY ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR PRIYA RAGHAVAN-ABERNATHY TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR PRIYA RAGHAVAN-ABERNATHY TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR JUNE ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR JUNE TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR JUNE TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained

### SCENE s00244 | INT. ST. CLEMENT'S HOSPITAL, TRAUMA BAY THREE - NIGHT
Characters: ANWEN OKOYE-FITZGERALD, NURSE TADEUSZ MBEKI-LORENZ, PRIYANKA HALVORSEN-NWOSU, DISPATCH
[beat 0] Overhead lights. Monitors beep. A body on a gurney under blue drapes. DR. ANWEN OKOYE-FITZGERALD (40s, surgeon, scrubs, mask pulled down) works at the bedside. Beside her, NURSE TADEUSZ MBEKI-LORENZ (30s, calm, gloved) hands her a clamp. At the foot of the gurney, RESIDENT DR. PRIYANKA HALVORSEN-NWOSU (20s, new, eyes huge) watches, clipboard clutched. On the wall, a speaker crackles.
[beat 1] DISPATCH: Trauma Three, ETA on the second unit, four minutes. ANWEN: Copy. We're stable.
[beat 2] TADEUSZ: Pressure's dropping. ANWEN: Fluids? TADEUSZ: Wide open.
[beat 3] ANWEN: Priyanka, what's your call? PRIYANKA: Um. Blood? ANWEN: Correct. Type? PRIYANKA: O negative. Universal. ANWEN: Go get four units. PRIYANKA: Right now? ANWEN: Yesterday.
[beat 4] Priyanka bolts through the door. Tadeusz watches her go.
[beat 5] TADEUSZ: She'll be fine. ANWEN: They all say that. TADEUSZ: She will be.
[beat 6] ANWEN: Pressure. TADEUSZ: Eighty over fifty. ANWEN: Pulse? TADEUSZ: One-thirty. ANWEN: Pack it. Pack it, pack it.
[beat 7] He packs. She presses. The monitor rises, falters, steadies.
[beat 8] DISPATCH: Trauma Three, update. Second unit is reporting a child on board. Pediatric trauma, eight years old. Anwen and Tadeusz exchange a look.
[beat 9] ANWEN: Open Bay Four. TADEUSZ: Dr. Okoye-Fitzgerald, we're short. ANWEN: Then call Reyes in from the cafeteria. TADEUSZ: She's off. ANWEN: Call her anyway.
[beat 10] He is already dialing.
[beat 11] The door bursts open. Priyanka, breathless, carries a cooler of blood bags. PRIYANKA: Four units, O negative.
[beat 12] ANWEN: Good. Hang two. Then you're with me in Four. PRIYANKA: The child? ANWEN: The child.
[beat 13] Priyanka stares. Then she sets down the cooler, rolls up her sleeves, and nods once.
[beat 14] ANWEN: You'll be fine. PRIYANKA: They all say that.
[beat 15] Anwen almost smiles. Pulls up her mask. Out the door.
PLACE (institution): courtroom | hospital ward | police precinct | interrogation room | classroom | church | prison | library | government office
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 4 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
BEAT 5 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 6 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 7 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 8 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 9 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 10 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 11 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 12 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 13 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 14 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 15 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
CHAR ANWEN OKOYE-FITZGERALD ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR ANWEN OKOYE-FITZGERALD TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR ANWEN OKOYE-FITZGERALD TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR NURSE TADEUSZ MBEKI-LORENZ ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR NURSE TADEUSZ MBEKI-LORENZ TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR NURSE TADEUSZ MBEKI-LORENZ TRAIT (kind): kind | compassionate | considerate | patient with others | thoughtful | tender | forgiving | selfless | polite
CHAR PRIYANKA HALVORSEN-NWOSU ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR PRIYANKA HALVORSEN-NWOSU TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR PRIYANKA HALVORSEN-NWOSU TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR DISPATCH ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR DISPATCH TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR DISPATCH TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00245 | INT. GLASSBLOWER'S FURNACE ROOM, VENICE - NIGHT, 1743
Characters: MASTER ZORZI CAMPOSAMPIERO, ISABELLA MOLIN-OKAFOR
[beat 0] Orange glow. Pipes and pontils on racks. Heat that bends the air. MASTER ZORZI CAMPOSAMPIERO (60s, leather apron, burn-scarred forearms) shapes a molten bulb at the furnace mouth. Slow turn. Slow breath.
[beat 1] The door opens. Rain. ISABELLA DA MOLIN-OKAFOR (30s, travelling cloak, a velvet bag pulled tight against her chest) stands dripping.
[beat 2] ZORZI: Closed. ISABELLA: I know. ZORZI: Then why are you here?
[beat 3] ISABELLA: The Council sends their regards. He stops turning. The glass sags. He rights it.
[beat 4] ZORZI: Tell the Council I have nothing to say. ISABELLA: They'd like the formula. ZORZI: They'd like the moon.
[beat 5] She crosses to the bench. Sets the velvet bag down. It clinks. ISABELLA: This is yours. ZORZI: What is it? ISABELLA: A sample. Of what you made last winter.
[beat 6] He glances at the bag. Then at her.
[beat 7] ZORZI: You stole it. ISABELLA: I borrowed it. ZORZI: From my own workshop.
[beat 8] ISABELLA: From your apprentice. His jaw works. The furnace roars. Her cloak steams.
[beat 9] ZORZI: Giacomo. ISABELLA: He's very young. ZORZI: He's a fool. ISABELLA: He's frightened.
[beat 10] Zorzi sets down the pipe. Turns. Picks up the long iron tongs. ISABELLA: Master Zorzi.
[beat 11] ZORZI: Open the bag.
[beat 12] She does. Inside: a glass bird, translucent blue, wings spread. She lifts it into the glow. It flickers like a pulse.
[beat 13] ISABELLA: The Council thinks it's witchcraft. ZORZI: It's chemistry. ISABELLA: They'll burn the shop. ZORZI: They'll burn me first.
[beat 14] She sets the bird on the bench.
[beat 15] ISABELLA: I could leave it here. Tell them you destroyed it. ZORZI: And Giacomo? ISABELLA: Gone to Padua.
[beat 16] Zorzi laughs, short, ugly. He lifts the tongs, steps toward her. She doesn't move. He raises the iron, and the bird glitters between them.
[beat 17] With one stroke, he smashes it. Blue shards fly. Isabella flinches. Zorzi and Isabella both stand in the sudden silence, glass sparks drifting like fireflies.
[beat 18] ZORZI: Tell the Council it's ash. ISABELLA: They'll want proof. ZORZI: Then bring them the furnace.
[beat 19] He turns back to the fire. After a long moment she picks up a single shard, slips it into her cloak, and goes out into the rain.
PLACE (industrial): warehouse | factory floor | docks | mine | power plant | scrapyard | hangar | loading bay | boiler room
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (gritty): gritty | seedy | grimy | dangerous | rough | lawless | sordid | raw | violent
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 8 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 9 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 10 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 11 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 12 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 13 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 14 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 15 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 16 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 17 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 18 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
CHAR MASTER ZORZI CAMPOSAMPIERO ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR MASTER ZORZI CAMPOSAMPIERO TRAIT (angry): angry | furious | seething | hot-headed | resentful | bitter | volatile | irritable | vengeful
CHAR MASTER ZORZI CAMPOSAMPIERO TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR ISABELLA MOLIN-OKAFOR ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR ISABELLA MOLIN-OKAFOR TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR ISABELLA MOLIN-OKAFOR TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private

### SCENE s00246 | INT. CLOCKMAKER'S SHOP, BACK ROOM - NIGHT
Characters: MARGOT, ILLINGWORTH-BASSEY, VICTOR OKONKWO-REYES, DEL, ARMSTRONG-KATZ, SOL, QUILLFEATHER, ALISTAIR PEMBERTON-SHAW
[beat 0] Dozens of clocks ticking out of step. A vault door, ajar. Four thieves crowd the doorway in dark clothes. MARGOT "THE MOUSE" ILLINGWORTH-BASSEY (40s, crew leader) holds a stopwatch. VICTOR OKONKWO-REYES (30s, safecracker) presses a stethoscope to the vault. DELPHINE "DEL" ARMSTRONG-KATZ (20s, driver) shifts on her feet. SOLOMON "SOL" QUILLFEATHER (50s, lookout, bowler hat) peers through the shutters.
[beat 1] MARGOT: Ninety seconds. Everyone know their job? SOL: I watch. DEL: I drive. VICTOR: I listen.
[beat 2] MARGOT: Good. Victor, tumblers. VICTOR: Come on, you old beauty.
[beat 3] A click. Another. The door swings wide.
[beat 4] Inside: velvet cases, empty. MARGOT: Empty. VICTOR: Empty? DEL: Margot-- MARGOT: Quiet.
[beat 5] Every clock in the shop strikes midnight at once. A cacophony of chimes.
[beat 6] A figure steps out from between the grandfather clocks: ALISTAIR PEMBERTON-SHAW (60s, nightshirt, shotgun, mildly annoyed). ALISTAIR: Evening. I moved it Tuesday.
[beat 7] The crew freezes. Sol removes his bowler hat. SOL: Tuesday? ALISTAIR: Tuesday. MARGOT: Of course it was Tuesday.
[beat 8] Alistair lowers the shotgun, sighs. ALISTAIR: There's tea. Stay for tea.
PLACE (shop): store | market | pharmacy | pawn shop | bookstore | gas station | bakery | boutique | convenience store
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 2 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 3 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 4 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 5 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 8 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
CHAR MARGOT ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR MARGOT TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR MARGOT TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR VICTOR OKONKWO-REYES ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR VICTOR OKONKWO-REYES TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR VICTOR OKONKWO-REYES TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR DEL ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR DEL TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR DEL TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR SOL ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR SOL TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR SOL TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR ALISTAIR PEMBERTON-SHAW ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR ALISTAIR PEMBERTON-SHAW TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR ALISTAIR PEMBERTON-SHAW TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic

### SCENE s00247 | INT. VILLAGE SCHOOLHOUSE KITCHEN, KARAKORAM FOOTHILLS - EARLY MORNING
Characters: GRANDMOTHER ZAINAB QURESHI-ABBASOV, FARIDA QURESHI, SAMINA QURESHI, TIMUR QURESHI, LAILA, ELIAS HARTMANN-DOGAN
[beat 0] Mud-brick walls. A copper kettle. Pale light through a slit window, catching flour in the air like small stars. Five members of one family move around a low table. Bread is being made. GRANDMOTHER ZAINAB QURESHI-ABBASOV (80s, headscarf the color of dried apricots) kneads dough with enormous patience. Her daughter-in-law FARIDA QURESHI (50s, sleeves rolled) shapes loaves, one hand quick on the dough, one hand on the baby wrapped at her back. Her granddaughter SAMINA QURESHI (17, exam papers poking from her satchel) lays out clay plates. Her grandson TIMUR QURESHI (12, ink on his fingers) feeds the clay oven with dry twigs. Her youngest, a girl of six called LAILA, lingers at the door, watching her feet.
[beat 1] ZAINAB: Samina, the salt. Samina brings it. Zainab pinches some, crushes it between her fingers, adds it to the dough.
[beat 2] TIMUR: The oven's ready, Dadi. ZAINAB: Is it? Show me. He holds out his palm to the oven mouth. Holds it there. Yanks it back. ZAINAB: Ready.
[beat 3] Farida slides the first loaf onto the paddle. The smell rises, warm and sweet.
[beat 4] Laila steps in. LAILA: Can I help? FARIDA: Of course. She hands Laila a small ball of dough. Laila kneads it clumsily.
[beat 5] A knock at the door. Everyone looks up.
[beat 6] A stranger steps in, shaking snow from his shoulders: MR. ELIAS HARTMANN-DOGAN (40s, regional inspector, leather satchel, wet boots), blinking in the warm light. ELIAS: Forgive me. I'm looking for the headmistress. SAMINA: That's my mother.
[beat 7] FARIDA: Mr. Hartmann-Dogan. We did not expect you until Thursday. ELIAS: The road was clear. ZAINAB: The road is never clear. ELIAS: It was today.
[beat 8] Zainab studies him a long moment. Then cuts a heel of bread, hands it to him. ZAINAB: Eat first. Papers later.
[beat 9] He bites. His shoulders drop.
[beat 10] ELIAS: This is extraordinary. SAMINA: It's Dadi's. ZAINAB: It is everyone's.
[beat 11] The baby coos. Laila giggles. Timur feeds the oven another twig. The kettle begins, finally, to sing.
PLACE (home): kitchen | living room | bedroom | bathroom | apartment | family house | attic or basement | porch or yard | garage
ATMOS (calm): calm | peaceful | quiet | serene | lazy | contemplative | unhurried | hushed | still
ATMOS (cozy): cozy | homely | nostalgic | comforting | domestic | snug | familiar | sweet | wholesome
BEAT 0 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 1 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 4 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 5 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 8 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 9 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 10 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 11 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR GRANDMOTHER ZAINAB QURESHI-ABBASOV ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR GRANDMOTHER ZAINAB QURESHI-ABBASOV TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR GRANDMOTHER ZAINAB QURESHI-ABBASOV TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR FARIDA QURESHI ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR FARIDA QURESHI TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR FARIDA QURESHI TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR SAMINA QURESHI ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR SAMINA QURESHI TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR SAMINA QURESHI TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR TIMUR QURESHI ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR TIMUR QURESHI TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR TIMUR QURESHI TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR LAILA ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR LAILA TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR LAILA TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR ELIAS HARTMANN-DOGAN ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR ELIAS HARTMANN-DOGAN TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR ELIAS HARTMANN-DOGAN TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained

### SCENE s00248 | INT. ABANDONED CARNIVAL FUNHOUSE - NIGHT
Characters: MARI, ENGELBRECHT-OJO, TREVOR KAPOOR-LINDSTROM, WINNIE, BAPTISTE-HOLLOWAY, CHILD
[beat 0] Cracked mirrors. Painted clown faces peeling off plywood. A rusted carousel horse hangs from a wire. Wind whistles through broken boards. Three friends pick through the dark with flashlights. MARISOL "MARI" ENGELBRECHT-OJO (20s, hoodie, nervous laugh) leads. She points her beam down a narrow corridor lined with warped glass. TREVOR KAPOOR-LINDSTROM (20s, camera on a strap, bravado) follows, filming. WINIFRED "WINNIE" BAPTISTE-HOLLOWAY (20s, backpack, serious) brings up the rear, checking a paper map.
[beat 1] TREVOR: Okay, so, this is the Hall of Mirrors. Day one of the haunted-places series. Say hi, Mari. MARI: Hi. TREVOR: Say hi, Winnie. WINNIE: I'm reading.
[beat 2] TREVOR: Reading what? WINNIE: The map. It says there's an exit through the carousel. MARI: Then why are we in the funhouse? TREVOR: Content. WINNIE: Idiot. TREVOR: Be nice. I'm broadcasting.
[beat 3] MARI: Hold on. Trevor. TREVOR: What? MARI: There's three of us. TREVOR: Yes. MARI: In the mirror there's four.
[beat 4] They stop. Mari points. In a cracked panel, three flashlight beams. And a fourth, steady, a pale light that doesn't match any of them.
[beat 5] WINNIE: It's a reflection. MARI: Of what? TREVOR: Whoa, whoa. Everyone breathe.
[beat 6] They turn in a slow circle. The fourth light is gone. The mirror shows only themselves. TREVOR: Cool. That was cool.
[beat 7] WINNIE: We leave. Now. MARI: Yes. Yes. Let's go.
[beat 8] They back down the corridor, shoulder to shoulder. A laugh echoes. Not theirs. Light and high, a child's.
[beat 9] They sprint. Boots clatter. A mirror shatters, then another, one after another, as if a hand were sweeping through.
[beat 10] Trevor drops the camera. It spins on the floor, filming the ceiling. Winnie grabs Mari's wrist. Mari grabs Trevor's collar. They crash through a painted door into the carousel hall.
[beat 11] The carousel horses are all turned to face them. TREVOR: No. MARI: Don't move. WINNIE: Don't look.
[beat 12] The music box starts. Slow, wheezing.
[beat 13] MARI: Winnie, the map. The exit. WINNIE: Behind the red horse. MARI: Which is the red horse?
[beat 14] They all look. Twenty horses. Eighteen are white. One is black. One is red.
[beat 15] The red horse blinks.
[beat 16] They scream. In unison. A single voice that rattles the roof.
[beat 17] Then the music stops, as though a hand had pressed it silent.
[beat 18] A voice, close, warm, from just behind the three of them. CHILD: You came back.
[beat 19] Mari whips around. Nobody there. MARI: We've never been here. CHILD: You came back.
[beat 20] Trevor drops to his knees, scooping the camera. Its red light blinks. TREVOR: Please. Please. We'll leave. We'll never--
[beat 21] The voice laughs. CHILD: Say it again. TREVOR: We'll leave. CHILD: Say it with love.
[beat 22] WINNIE: No. She stands. She faces the dark where the voice is. Raises her flashlight, and aims it at the red horse. WINNIE: We're not saying anything. We're leaving. You can have the funhouse.
[beat 23] Silence. The wind stops.
[beat 24] Then the red horse, slowly, turns its head away.
[beat 25] WINNIE: Walk. Don't run. They walk. Past the horses. Past the dead ticket booth. Past the gate.
[beat 26] Behind them, the music box begins again. Soft. Almost happy.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 4 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 8 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 9 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 10 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 11 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 12 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 13 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 14 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 15 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 16 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 17 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 18 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 19 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 20 (pleads): pleads with | begs | appeals to | asks for help from | implores | bargains for mercy with | pleads innocence to | calls for | prays
BEAT 21 (threatens): threatens | intimidates | warns | blackmails | issues an ultimatum to | menaces | holds at gunpoint | coerces | looms over
BEAT 22 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 23 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 24 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 25 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 26 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR MARI ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR MARI TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR MARI TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR TREVOR KAPOOR-LINDSTROM ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR TREVOR KAPOOR-LINDSTROM TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR TREVOR KAPOOR-LINDSTROM TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR WINNIE ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR WINNIE TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR WINNIE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR CHILD ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR CHILD TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative
CHAR CHILD TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree

### SCENE s00249 | EXT. HIGH PLATEAU, BURNED FOREST - DAWN
Characters: STRANGER, TALL MAN, WOMAN, ELIO
[beat 0] Black trunks. Ash like grey snow. A crippled pickup with its hood up. A man sits on its bumper, bandaging his hand. Another stands at the tree line, binoculars up. A third crouches by the tailgate, counting cans.
[beat 1] STRANGER: We can't stay. TALL MAN: We can't leave. STRANGER: We don't have fuel. TALL MAN: We have legs.
[beat 2] WOMAN: We have four cans of beans and no opener. STRANGER: Then we use the knife. WOMAN: It's your knife. STRANGER: I know whose knife it is.
[beat 3] The tall man lowers the binoculars. TALL MAN: Smoke. East ridge. WOMAN: How far? TALL MAN: Six miles. STRANGER: It could be anyone. TALL MAN: It could be the fire again. WOMAN: It could be help. STRANGER: It could be them.
[beat 4] A silence. They look at each other.
[beat 5] WOMAN: You never told us your name. STRANGER: Elio. WOMAN: Elio what? ELIO: Just Elio.
[beat 6] TALL MAN: Okay, Just Elio. Here's what we do. ELIO: We split. WOMAN: We stay together. ^ TALL MAN: We go together, east, now!
[beat 7] A hiss in the trees. All three freeze. Branches crack. A shape moves in the ash, low and fast.
[beat 8] ELIO: Run! The truck door slams. The woman dives. The tall man fires. A burst of gunshot echoes across the burned plateau, and the pale smoke rises, higher, higher.
PLACE (nature): forest | beach | field | mountain | desert | lake or river | garden or park | cave | snowfield
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 2 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 5 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 6 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 7 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 8 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
CHAR STRANGER ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR STRANGER TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR STRANGER TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR TALL MAN ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR TALL MAN TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR TALL MAN TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR WOMAN ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR WOMAN TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR WOMAN TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR ELIO ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR ELIO TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR ELIO TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
