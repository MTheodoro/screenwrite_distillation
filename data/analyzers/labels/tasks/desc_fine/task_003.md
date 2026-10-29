You refine labels for screenplay scenes. Each item already has a coarse label; pick the ONE best fine label
from the options listed for it (copy the option text exactly).

For each scene write one JSON object:
{"scene_id": "...", "place": "<fine>", "atmos": ["<fine for each coarse atmos, same order>"],
 "beats": ["<fine for beat 0>", "<fine for beat 1>", ...],
 "chars": {"<NAME>": {"role": "<fine>", "traits": ["<fine for each coarse trait, same order>"]}}}

Write all scenes as JSON Lines (one object per line) to /home/user/screenwrite-analyzers/data/analyzers/labels/desc_fine/part_s00083.jsonl with the Write tool. No other text in the file.
Include every scene below. Reply only with "done N".

## Scenes

### SCENE s00083 | INT. OPERA HOUSE INFIRMARY - EVENING
Characters: SERGEANT BRONISLAW KRAJEWSKI, LIEUTENANT SIPHO MBEKI, NURSE FIONNUALA DOYLE, THE BOY, ILARIO
[beat 0] The stalls have been torn out and replaced with rows of iron cots. Gilt cherubs look down over bandaged men. Through a blown-out window, a wintry sky the color of ash.
[beat 1] SERGEANT BRONISLAW KRAJEWSKI (40s, thick moustache, arm in a sling) sits on the edge of a cot, mending a boot by lantern light. LIEUTENANT SIPHO MBEKI (30s, upright, clean spectacles) writes a letter on a drum case. NURSE FIONNUALA DOYLE (30s, red hair under a veil, sleeves rolled) kneels to change a dressing.
[beat 2] A small figure sits cross-legged on the stage, back to them, a boy in a coat too big, watching the dust fall through the light. Nobody has asked him a thing.
[beat 3] KRAJEWSKI: That one has not spoken since the bridge. MBEKI: Perhaps he has nothing to say. DOYLE: He ate. That is something.
[beat 4] THE BOY: It was mine.
[beat 5] They all stop. The boy does not move. Doyle stands. DOYLE: What was yours, love? THE BOY: The bread. You gave it to the other man. I only wanted to know why.
[beat 6] Krajewski lowers the boot. Mbeki sets down his pen. MBEKI: What is your name, young man? THE BOY: Ilario. MBEKI: Ilario. A good name. Mine is Sipho. ILARIO: What does it mean? MBEKI: Gift.
[beat 7] Ilario studies him. His eyes are very old. ILARIO: Then why does everyone here look as if they've lost one?
[beat 8] Doyle sits on the stage beside him. Krajewski clears his throat, puts down the boot, and stands, one hand on his sling. KRAJEWSKI: Ilario. Come, eat with us.
[beat 9] Ilario hesitates. Then he rises and walks to the cot, small and dignified. Krajewski tears the last of his own bread and hands him half. Mbeki sets aside the letter and pours three cups of water.
PLACE (institution): courtroom | hospital ward | police precinct | interrogation room | classroom | church | prison | library | government office
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 5 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 6 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 7 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 8 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 9 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
CHAR SERGEANT BRONISLAW KRAJEWSKI ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR SERGEANT BRONISLAW KRAJEWSKI TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR SERGEANT BRONISLAW KRAJEWSKI TRAIT (kind): kind | compassionate | considerate | patient with others | thoughtful | tender | forgiving | selfless | polite
CHAR LIEUTENANT SIPHO MBEKI ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR LIEUTENANT SIPHO MBEKI TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR LIEUTENANT SIPHO MBEKI TRAIT (kind): kind | compassionate | considerate | patient with others | thoughtful | tender | forgiving | selfless | polite
CHAR NURSE FIONNUALA DOYLE ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR NURSE FIONNUALA DOYLE TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR NURSE FIONNUALA DOYLE TRAIT (kind): kind | compassionate | considerate | patient with others | thoughtful | tender | forgiving | selfless | polite
CHAR THE BOY ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR THE BOY TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful
CHAR THE BOY TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR ILARIO ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR ILARIO TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful
CHAR ILARIO TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed

### SCENE s00084 | INT. DECOMMISSIONED PLANETARIUM - CORPORATE RETREAT - DAY
Characters: LORRAINE FAIRWEATHER, GIDEON OKPARA, MIKA TANAKA-BELL, SEBASTIAN VOGT, CFO, PERPETUA ALVAREZ, HR
[beat 0] A great hollow dome, peeling and blue, its star projector slumped like a dead insect in the center of the floor. Folding chairs form a circle beneath a painted Milky Way. A banner reads TEAM ASCENT.
[beat 1] LORRAINE FAIRWEATHER (50s, facilitator, silk scarf, voice made of honey) stands beside an easel. GIDEON OKPARA (40s, sales director, ironed jeans) slouches on a chair, ankle on knee. MIKA TANAKA-BELL (late 20s, analyst, sweating through a blazer) clutches a coffee. SEBASTIAN VOGT (60s, CFO, wire spectacles) sits as if posing for a portrait. PERPETUA ALVAREZ (30s, HR, lanyard, tight smile) guards the exit.
[beat 2] She uncaps a marker and draws a star on the easel. LORRAINE: Gideon. What is the one word that describes your role? GIDEON: Closer. LORRAINE: Mika? MIKA: Um. Fine? LORRAINE: Be bolder, Mika. MIKA: Fine... ly bolder?
[beat 3] Sebastian removes his spectacles and polishes them. SEBASTIAN: Lorraine, when does the feedback session begin? LORRAINE: That is the session, Sebastian. SEBASTIAN: Ah. Perpetua taps her watch. Nobody notices.
[beat 4] LORRAINE: Now. Each of you will name the person on your left and say one true thing. Mika turns toward Gideon. Gideon turns toward Sebastian. Sebastian turns toward Perpetua. Perpetua turns toward Lorraine, who, in turn, faces Mika. The circle closes.
[beat 5] GIDEON: Sebastian. You sign my expenses without reading them. SEBASTIAN: Perpetua. You have been planning your resignation for eleven weeks. PERPETUA: Lorraine. This planetarium has no heat. LORRAINE: Mika. You are the best of us.
[beat 6] Mika bursts into tears, then into laughter. Gideon cracks first. Then Sebastian, a dry wheeze. Perpetua covers her mouth. Even Lorraine drops her marker. The dome picks up their noise and throws it back, a hundred times larger, until they are laughing at the stars.
[beat 7] MIKA: Gideon, I think I love you all. GIDEON: Careful, Mika. That's how they get you.
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (dreamy): dreamy | surreal | hazy | magical | whimsical | otherworldly | hypnotic | lyrical | wistful
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 4 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 7 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
CHAR LORRAINE FAIRWEATHER ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR LORRAINE FAIRWEATHER TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR LORRAINE FAIRWEATHER TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR GIDEON OKPARA ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR GIDEON OKPARA TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR GIDEON OKPARA TRAIT (arrogant): arrogant | smug | condescending | vain | entitled | pompous | superior | boastful | self-important
CHAR MIKA TANAKA-BELL ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR MIKA TANAKA-BELL TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR MIKA TANAKA-BELL TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR SEBASTIAN VOGT ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR SEBASTIAN VOGT TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR SEBASTIAN VOGT TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR PERPETUA ALVAREZ ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR PERPETUA ALVAREZ TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR PERPETUA ALVAREZ TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00085 | INT. CAROUSEL WORKSHOP - NIGHT
Characters: KALINDA RUSSO, OSCAR TREMBLAY, MOSES BELLAMY
[beat 0] Painted horses hang from chains. Gilded poles. A calliope under a tarp. Dust in lamplight.
[beat 1] KALINDA RUSSO (30s, black jumpsuit, tool roll) crouches at a floor panel. OSCAR TREMBLAY (50s, ex-clockmaker, magnifier on one eye) holds a flashlight steady. MOSES BELLAMY (20s, lookout, earbud) hovers by the door.
[beat 2] KALINDA: Pry bar. Oscar hands it over. She slides the bar under the panel. Wood groans. A compartment opens. Inside, a velvet satchel. OSCAR: There she is.
[beat 3] MOSES: Guys. Headlights. Both freeze. A white beam sweeps the window, slides across the horses, and passes on. KALINDA: Keep breathing. MOSES: I am breathing! OSCAR: Quietly.
[beat 4] Kalinda lifts the satchel. Weighs it in her palm. Frowns. KALINDA: Light. OSCAR: What? KALINDA: It's too light.
[beat 5] She opens it. Inside lies a single brass key and a note. Oscar reads over her shoulder. OSCAR: "Try the horse." KALINDA: ^"Try the third horse." They speak the same line at the same instant. Moses stares from one to the other. MOSES: What third horse?
[beat 6] All three turn. Above them, a carousel horse with a chipped blue mane. Kalinda climbs onto the platform. Oscar follows. Moses bolts after.
[beat 7] They gather around the animal, and she turns the key in a hidden lock at the saddle. The belly pops open. Gold coins pour into her arms.
[beat 8] A siren starts up outside. MOSES: Oh no. OSCAR: Oh yes.
[beat 9] They scatter. Moses dives under the calliope tarp. Oscar slides behind a stack of poles. Kalinda leaps from the platform, hugging the coins, and vanishes between two rows of horses as the doors burst open.
PLACE (industrial): warehouse | factory floor | docks | mine | power plant | scrapyard | hangar | loading bay | boiler room
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 7 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 8 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
BEAT 9 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
CHAR KALINDA RUSSO ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR KALINDA RUSSO TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR KALINDA RUSSO TRAIT (confident): confident | self-assured | bold | cocky | poised | brash | commanding | unflappable | swaggering
CHAR OSCAR TREMBLAY ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR OSCAR TREMBLAY TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR OSCAR TREMBLAY TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR MOSES BELLAMY ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR MOSES BELLAMY TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR MOSES BELLAMY TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive

### SCENE s00086 | INT. FERRY GALLEY - NIGHT
Characters: ESTELLE MARCHAND, ARTHUR PENHALLOW, TILDA VANCE
[beat 0] A cramped galley below decks, steel counters and swinging pots. The boat creaks. A single porthole shows black water.
[beat 1] ESTELLE MARCHAND (50s, elegant, wearing her good coat in a kitchen) sits at the narrow table, stirring a cup of cold tea. ARTHUR PENHALLOW (60s, ship's cook, apron, forearms like rope) stands at the stove with his back to her, ladling soup.
[beat 2] ESTELLE: You might have told me. ARTHUR: I would have. ESTELLE: When? ARTHUR: When it was true. She sets the spoon down. He stirs the pot. The ferry rocks. ESTELLE: It has been true for a year. ARTHUR: It has been possible for a year. ESTELLE: Arthur. ARTHUR: Estelle.
[beat 3] The galley door swings open. TILDA VANCE (20s, deckhand, oilskin, red hands) comes in with a bucket and stops short. TILDA: Sorry. I can come back. ARTHUR: Stay. You'll want soup. ESTELLE: Do stay, dear. We were only discussing the weather. TILDA: It's bad out. ARTHUR: It is. ESTELLE: It's worse in here.
[beat 4] Tilda looks from one to the other. She sets down the bucket. TILDA: Should I-- ARTHUR: Take a bowl. ESTELLE: Take two. TILDA: Okay.
[beat 5] ARTHUR: You could have written. ESTELLE: You could have answered. TILDA: This is really good soup.
[beat 6] Arthur and Estelle turn together and look at her. Tilda sets down the spoon. TILDA: I'll just-- ARTHUR: Eat. ESTELLE: Eat, child.
[beat 7] She does. The ferry groans in the swell, and somewhere above them a horn sounds, long and low, for a harbor they cannot see.
PLACE (transit): airport | train station | subway platform | bus terminal | hotel lobby | ferry terminal | border checkpoint | motel | rest stop
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 4 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 5 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 6 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR ESTELLE MARCHAND ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR ESTELLE MARCHAND TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR ESTELLE MARCHAND TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR ARTHUR PENHALLOW ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR ARTHUR PENHALLOW TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR ARTHUR PENHALLOW TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR TILDA VANCE ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR TILDA VANCE TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR TILDA VANCE TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed

### SCENE s00087 | INT. HYPERBARIC CHAMBER - NIGHT
Characters: NAOMI ESCOBEDO, PAUL ZIELINSKI, TECH ARDEN FLETCHER, CHARGE NURSE BIRGITTA
[beat 0] Steel hull. Porthole glass. Pipes that shudder as pressure climbs.
[beat 1] DR. NAOMI ESCOBEDO (40s, scrubs, calm eyes) adjusts a valve while PAUL ZIELINSKI (60s, diver, wrapped in a thin blanket) stares at the gauge and TECH ARDEN FLETCHER (20s, headset, ponytail) logs numbers on a clipboard beyond the porthole, tapping the glass whenever the needle moves.
[beat 2] CHARGE NURSE BIRGITTA: Chamber, status? NAOMI: Two atmospheres. Holding.
[beat 3] PAUL: Twice the weight on my chest. Same as the day I surfaced too fast. NAOMI: You came up in eleven minutes. Nobody does that and walks. PAUL: I walked. NAOMI: You crawled. I read the report. PAUL: I don't remember crawling. NAOMI: You will tomorrow. PAUL: Will I. NAOMI: That's what we do here.
[beat 4] BIRGITTA: Doctor, ten minutes remaining. NAOMI: Copy.
PLACE (institution): courtroom | hospital ward | police precinct | interrogation room | classroom | church | prison | library | government office
ATMOS (claustrophobic): claustrophobic | suffocating | trapped | cramped | oppressive | airless | boxed-in | pressurized | confined
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 4 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
CHAR NAOMI ESCOBEDO ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR NAOMI ESCOBEDO TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR NAOMI ESCOBEDO TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR PAUL ZIELINSKI ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR PAUL ZIELINSKI TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR PAUL ZIELINSKI TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR TECH ARDEN FLETCHER ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR TECH ARDEN FLETCHER TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR TECH ARDEN FLETCHER TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR CHARGE NURSE BIRGITTA ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR CHARGE NURSE BIRGITTA TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR CHARGE NURSE BIRGITTA TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00088 | EXT. WHALE-RIB BRIDGE TOLLHOUSE - DUSK
Characters: BRYNMOR ASHDOWN, TALLIS WREN
[beat 0] A bridge arches across a canyon of drifting violet fog. Its span is made of the ribs of some ancient leviathan, bleached bone-white and lashed together with silver rope. At its near end stands a crooked tollhouse of driftwood and green glass, a single lantern burning in its window.
[beat 1] BRYNMOR ASHDOWN (60s, weathered, long grey coat, a ring of keys at his belt) sits on the tollhouse step, whittling. A kettle hisses on a tiny stove at his feet. The fog below breathes in and out like a sleeping animal.
[beat 2] Far down the bridge, a figure appears, a shape resolving from the mist, leaning on a staff. TALLIS WREN (30s, pilgrim's cloak, boots patched with cloth) walks slowly, the bone ringing softly under each step. He reaches the step and stops. He does not look at Brynmor's face.
[beat 3] TALLIS: Is this the toll? BRYNMOR: It is a toll. TALLIS: What does he ask? BRYNMOR: A true thing. Not a large one.
[beat 4] Tallis lowers his hood. His beard is young, his eyes tired. He considers. TALLIS: I am afraid I will not finish. BRYNMOR: Finish what? TALLIS: Anything.
[beat 5] Brynmor puts down the knife. He pours tea into two tin cups, his hands slow and steady, and hands one up. BRYNMOR: That will do. TALLIS: It was not much. BRYNMOR: It was true. He is not greedy.
[beat 6] Tallis takes the cup. The steam drifts between them. Behind them the fog sighs, and one of the ribs hums a long, low note in the rising wind. TALLIS: How many cross? BRYNMOR: Fewer than cross back.
[beat 7] Tallis drinks. His eyes close. When he opens them, the lantern has brightened, and the far end of the bridge, which was dark, shows one small light.
[beat 8] BRYNMOR: Go on. He is waiting. He is not so fierce. TALLIS: Thank you. BRYNMOR: Mind the fourth rib. It sings when it is lonely.
PLACE (nature): forest | beach | field | mountain | desert | lake or river | garden or park | cave | snowfield
ATMOS (dreamy): dreamy | surreal | hazy | magical | whimsical | otherworldly | hypnotic | lyrical | wistful
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (arrives): arrives | bursts in | slips in | returns | is introduced | makes an entrance | shows up unannounced | is ushered in | drifts in
BEAT 3 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 4 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 5 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
CHAR BRYNMOR ASHDOWN ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR BRYNMOR ASHDOWN TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR BRYNMOR ASHDOWN TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR TALLIS WREN ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR TALLIS WREN TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR TALLIS WREN TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful

### SCENE s00090 | INT. COUNTY HOSPITAL - POLIO WARD - NIGHT
Characters: ALISTAIR VANCE-HOLLOWAY, NURSE BERNADETTE OKONJO, THEODORA LINDQUIST, CASPER WU, CHAPLAIN AUGUSTUS DELACROIX-BENNETT
[beat 0] Iron lungs line the room like a row of steel whales. Green light. A ceiling fan turns slowly. A radio murmurs a dance tune from a distant city.
[beat 1] DR. ALISTAIR VANCE-HOLLOWAY (50s, tall, courteous, bow tie loosened) pauses at the foot of a bed with a chart. NURSE BERNADETTE OKONJO (40s, starched cap, quick hands) adjusts a dial on the nearest machine. MRS. THEODORA LINDQUIST (60s, wool coat, handbag in both hands) sits very straight on a visitor's chair. CASPER WU (20s, medical student, borrowed white coat) stands by the door, taking notes. CHAPLAIN AUGUSTUS DELACROIX-BENNETT (70s, soft voice, stole around his neck) kneels in prayer at a bedside.
[beat 2] He reads the chart a long time. Mrs. Lindquist watches him. Nurse Okonjo does not. MRS. LINDQUIST: He seems comfortable. DR. VANCE-HOLLOWAY: He is resting. MRS. LINDQUIST: That is not the same thing. DR. VANCE-HOLLOWAY: No. It is not. She nods, grateful for the honesty. He closes the chart.
[beat 3] CASPER: Doctor, the pressure reading on bed six-- DR. VANCE-HOLLOWAY: Later, Mr. Wu. CASPER: Yes, sir.
[beat 4] Okonjo crosses to the window. The blinds are drawn. She tugs a cord and the slats rise. Moonlight spills onto the machine, silvering the boy inside, who sleeps with his mouth a little open. NURSE OKONJO: His color is better. MRS. LINDQUIST: Is it? NURSE OKONJO: Pink in the cheeks.
[beat 5] Dr. Vance-Holloway steps closer. He lifts the boy's wrist. A long moment. DR. VANCE-HOLLOWAY: Nurse. The oxygen. NURSE OKONJO: Already, Doctor.
[beat 6] She is turning a valve. He does not say what she did, and she does not say what she saw. Casper looks from one to the other, understanding nothing, then too much.
[beat 7] CASPER: Doctor? DR. VANCE-HOLLOWAY: Fetch the Chaplain. CASPER: He's here. DR. VANCE-HOLLOWAY: Then bring him. Casper crosses the room. The Chaplain looks up from his prayer before he arrives. CHAPLAIN DELACROIX-BENNETT: I know.
[beat 8] He rises, creaking, and takes Mrs. Lindquist's hand. She stares at it without understanding. Then the radio gives a bright trumpet note, and Mrs. Lindquist rises, breath catching, and lets the handbag fall. MRS. LINDQUIST: No. DR. VANCE-HOLLOWAY: Mrs. Lindquist. MRS. LINDQUIST: He was pink. She said he was pink. NURSE OKONJO: He was, ma'am.
[beat 9] Mrs. Lindquist crosses to the bed. Puts a hand on the cold steel. The machine wheezes its steady wheeze, pushing air into a chest that no longer asks. DR. VANCE-HOLLOWAY: I am so sorry.
[beat 10] She does not turn. Nobody speaks. In the corner, the radio plays on, a waltz, cheerful and absurd. Nurse Okonjo crosses and switches it off, and the silence that follows is the loudest thing in the ward.
PLACE (institution): courtroom | hospital ward | police precinct | interrogation room | classroom | church | prison | library | government office
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 4 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 5 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 8 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 9 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 10 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
CHAR ALISTAIR VANCE-HOLLOWAY ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR ALISTAIR VANCE-HOLLOWAY TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR ALISTAIR VANCE-HOLLOWAY TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR THEODORA LINDQUIST ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR THEODORA LINDQUIST TRAIT (desperate): desperate | frantic | pleading | cornered | reckless | pressured | at wit's end | grasping | despairing
CHAR THEODORA LINDQUIST TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful
CHAR NURSE BERNADETTE OKONJO ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR NURSE BERNADETTE OKONJO TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR NURSE BERNADETTE OKONJO TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR CASPER WU ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR CASPER WU TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR CASPER WU TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR CHAPLAIN AUGUSTUS DELACROIX-BENNETT ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR CHAPLAIN AUGUSTUS DELACROIX-BENNETT TRAIT (kind): kind | compassionate | considerate | patient with others | thoughtful | tender | forgiving | selfless | polite
CHAR CHAPLAIN AUGUSTUS DELACROIX-BENNETT TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic

### SCENE s00091 | INT. PARKED VAN OUTSIDE BELL FOUNDRY - NIGHT
Characters: ZELDA, MURALI
[beat 0] ZELDA: You're humming. MURALI: I'm not. ZELDA: You are. It's the thing from the radio. MURALI: It's a lullaby.
[beat 1] ZELDA: Whose? MURALI: Mine. My mother's. Don't. ZELDA: I didn't say anything. MURALI: You were about to.
[beat 2] ZELDA: I was about to say it's nice. MURALI: It isn't nice. It's a song about a goat. ZELDA: Is it a good goat? MURALI: He dies. ZELDA: Ah. MURALI: Everybody dies in the second verse. ZELDA: That's a heavy lullaby. MURALI: We were a heavy family. ZELDA: And you cope by humming in a van outside a bell foundry.
[beat 3] MURALI: Four more minutes. ZELDA: Four more minutes. MURALI: Then we go in. ZELDA: Then we go in. MURALI: And you stop asking questions. ZELDA: Never.
PLACE (vehicle): car | truck or van | taxi | bus | train car | boat | plane cabin | cockpit | ambulance or police car
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 1 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 2 (mocks): mocks | taunts | belittles | humiliates | provokes | insults | patronizes | needles | dismisses
BEAT 3 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
CHAR ZELDA ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR ZELDA TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR ZELDA TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR MURALI ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR MURALI TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful
CHAR MURALI TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained

### SCENE s00092 | INT. LUNAR GREENHOUSE - ARTIFICIAL NIGHT
Characters: IMOGEN VASQUEZ-LEE, ANTON BERGSTROM
[beat 0] A vast pressurized dome of hydroponic trays under violet grow-lamps. Rows of tomato vines climb strings toward the glass. Beyond the dome, the grey regolith and a hard, bright Earth.
[beat 1] IMOGEN VASQUEZ-LEE (40s, station botanist, rolled sleeves, soil under her nails) kneels between two trays with a pair of pruning shears. She is slight and quick, her hair held by a pencil. ANTON BERGSTROM (50s, systems engineer, thick glasses, a tablet always in hand) stands at the far end checking the irrigation readouts, wearing a sweater with a hole in one elbow.
[beat 2] Both are very tired. Neither says so.
[beat 3] ANTON: Pump three is running hot. IMOGEN: Tell it to calm down. ANTON: It doesn't take advice. IMOGEN: Neither do the tomatoes.
[beat 4] She snips a withered leaf. Drops it in a bucket. Anton taps the tablet. The lamps pulse a half-second slower. ANTON: That's the fourth flicker today. IMOGEN: I counted six. ANTON: You counted the ones I didn't.
[beat 5] She stands, stretches her back, and wanders down the row toward him, trailing a hand through the leaves. IMOGEN: Do you ever hear them? ANTON: The plants? IMOGEN: The stems. When the lamps come on. A kind of ticking. ANTON: That's the heat. IMOGEN: I know it's the heat.
[beat 6] They stand a moment in the violet light. ANTON: Imogen. IMOGEN: Yes. ANTON: You've been in here eighteen hours. IMOGEN: They don't water themselves. ANTON: Actually, they do. That's my entire job. She laughs, a short cough of a sound. He nearly smiles.
[beat 7] The lights shudder. Both look up. A distant thud rolls through the dome, a bolt shaken loose in the airlock. The vines sway, then settle. The tablet in Anton's hand goes dark, and so does the row of lamps. For three heartbeats there is only the white wash of Earthlight on the leaves. IMOGEN: Don't move. ANTON: I wasn't going to.
[beat 8] The lamps flare back to life one by one. Imogen exhales. Anton wipes his glasses on the hole in his sweater. They look at each other, then at the trays, and then both go back to work without another word, side by side, snipping and tapping in the purple dark.
[beat 9] ANTON: Pump three. IMOGEN: Go. He crosses to a panel and thumps it with the heel of his hand. A pump coughs. Water begins to run.
[beat 10] Imogen reaches out and touches a ripening tomato. It is perfectly, impossibly red. IMOGEN: Anton. ANTON: Mm. IMOGEN: Come and see.
[beat 11] He walks over. She plucks the fruit, wipes it on her sleeve, and hands it to him. He looks at it for a long time. Then he takes a bite, and the juice runs down his chin, and neither of them says a word.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (dreamy): dreamy | surreal | hazy | magical | whimsical | otherworldly | hypnotic | lyrical | wistful
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 3 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 4 (mocks): mocks | taunts | belittles | humiliates | provokes | insults | patronizes | needles | dismisses
BEAT 5 (searches): searches | investigates | snoops | rummages | tracks | looks for | examines | questions witnesses | scans the room
BEAT 6 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 8 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 9 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 10 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 11 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
CHAR IMOGEN VASQUEZ-LEE ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR IMOGEN VASQUEZ-LEE TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR IMOGEN VASQUEZ-LEE TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR ANTON BERGSTROM ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR ANTON BERGSTROM TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR ANTON BERGSTROM TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00093 | INT. BIRTHDAY PARTY BACKYARD - DAY
Characters: WALDO PIMM, BERNICE PLUMMER-ASANTE
[beat 0] Balloons. Folding tables. A bouncy castle deflating in the corner. Forty children, screaming.
[beat 1] WALDO PIMM (40s, sequined vest, top hat, rabbit in a cage) stands on a milk crate, juggling three oranges. One slips. He catches it with his chin. WALDO: Ladies and gentlemen! The Great Waldo!
[beat 2] A child screams. Another cries. A third throws cake. WALDO: Sixty dollars. Sixty dollars. Sixty dollars.
[beat 3] He pulls a scarf from his sleeve. It keeps coming. Yards of it. He tugs. Tugs. Out comes a second scarf, then a third, tied together, and finally a live parakeet that flies straight over the fence. WALDO: That was Gerald.
[beat 4] A woman's voice calls from the gate. BERNICE PLUMMER-ASANTE (70s, sunhat, enormous handbag) pushes through, waving a rolled newspaper at Waldo, who ducks. The rabbit escapes its cage, hops across the lawn, and disappears under the cake table. Bernice swings and misses. Waldo vaults the crate, a child grabs his cape, and the three of them end up in a heap beside the bouncy castle, the castle sighing down on top of them.
[beat 5] BERNICE: You owe me for the parakeet! WALDO: He's a free spirit!
PLACE (venue): theater | stadium | nightclub | ballroom | casino | concert hall | gym | museum gallery | funeral home
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
ATMOS (festive): festive | celebratory | joyful | lively | playful | boisterous | euphoric | giddy | warm-hearted
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 2 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 3 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
CHAR WALDO PIMM ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR WALDO PIMM TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR WALDO PIMM TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR BERNICE PLUMMER-ASANTE ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR BERNICE PLUMMER-ASANTE TRAIT (angry): angry | furious | seething | hot-headed | resentful | bitter | volatile | irritable | vengeful
CHAR BERNICE PLUMMER-ASANTE TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan

### SCENE s00094 | EXT. ROOFTOP APIARY - GOLDEN HOUR
Characters: AMARA OKEKE, THEO BALASUBRAMANIAN, GRANDMOTHER NNEKA
[beat 0] Hives like pastel filing cabinets. Bees drift over the city skyline. A string of bulbs sways overhead.
[beat 1] AMARA OKEKE (30s, veil pushed back, honey on her wrist) lifts a frame heavy with comb. THEO BALASUBRAMANIAN (30s, borrowed veil, delighted) stands too close, holding a smoker he has not lit.
[beat 2] AMARA: Step back. THEO: I'm fine. AMARA: You're stepping on the queen's door. THEO: I'm sorry, Your Majesty.
[beat 3] She laughs. He lights the smoker. A white plume. AMARA: Gently. THEO: Always.
[beat 4] The stairwell door bangs. GRANDMOTHER NNEKA (80s, floral housecoat, cane, a shopping bag) hobbles onto the roof. NNEKA: Amara! AMARA: Mama? THEO: Hello, ma'am. NNEKA: Who is the boy? AMARA: It's Theo, Mama. I told you. NNEKA: You told me Thursday. THEO: Today is Thursday. NNEKA: Then I am on time.
[beat 5] She sets the bag on a hive. Amara lunges to catch it. AMARA: Mama! Not there. NNEKA: It's only plantains. THEO: They'll love the plantains. NNEKA: They better. Come, boy. Eat.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (dreamy): dreamy | surreal | hazy | magical | whimsical | otherworldly | hypnotic | lyrical | wistful
ATMOS (festive): festive | celebratory | joyful | lively | playful | boisterous | euphoric | giddy | warm-hearted
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
CHAR AMARA OKEKE ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR AMARA OKEKE TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR AMARA OKEKE TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR THEO BALASUBRAMANIAN ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR THEO BALASUBRAMANIAN TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR THEO BALASUBRAMANIAN TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR GRANDMOTHER NNEKA ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR GRANDMOTHER NNEKA TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR GRANDMOTHER NNEKA TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive

### SCENE s00095 | INT. DEAD MAN'S TACKLE SHOP - BACK ROOM - DAY
Characters: GLORIA ESPINOSA-WRAY, RAUL
[beat 0] Rods in racks. Tins of lures. A calendar from 2009. Dust motes in a shaft of window light.
[beat 1] GLORIA ESPINOSA-WRAY (60s, widow's black, silver bun) sits on an upturned bucket, a shoebox in her lap. Her son RAUL (30s, work shirt, wedding ring turned the wrong way) stands at the workbench, sorting reels into a crate. Neither speaks.
[beat 2] He lifts a reel. Examines it. Sets it down. RAUL: This one's good. GLORIA: Your father cursed that one. RAUL: He cursed all of them. GLORIA: He cursed them gently. Raul almost laughs. He doesn't.
[beat 3] RAUL: I can have the shop listed by Friday. GLORIA: Do what you want. RAUL: It's your shop. GLORIA: It was his shop. RAUL: Ma.
[beat 4] GLORIA: You didn't come. RAUL: I came to the funeral. GLORIA: You didn't come in March. RAUL: I was working. GLORIA: He asked. RAUL: I know he asked. GLORIA: He asked every day. RAUL: And I said I'd come. GLORIA: And you said you'd come.
[beat 5] A drip from the ceiling. A bucket catches it. Gloria lifts a photograph from the box. A boy on a pier, grinning with a fish too big for him. GLORIA: Look.
[beat 6] He doesn't. RAUL: I don't want to. GLORIA: You were eight. RAUL: I remember. GLORIA: He kept it in the register. Under the tray. RAUL: That's stupid. GLORIA: It's what he did. RAUL: He'd have let me know. If it mattered. GLORIA: He did let you know. Every day. By asking.
[beat 7] Raul grips the bench. The knuckles go white. A reel falls from the crate and rolls across the floor. RAUL: You think I don't know that? GLORIA ^You think I don't know what you think? Their voices overlap and collide. They stop.
[beat 8] Gloria sets down the photograph. GLORIA: Sit. RAUL: I'm fine. GLORIA: Sit. He sits on a crate. Hands between his knees.
[beat 9] RAUL: I was scared. GLORIA: Of what? RAUL: Of seeing him small. GLORIA: He wasn't small. RAUL: He was. Ma. In the photos you sent, he was. GLORIA: He was still your father. RAUL: That's the thing. GLORIA: What? RAUL: I wanted him to stay the one with the fish. GLORIA: Oh, Raul.
[beat 10] He bends forward, forehead on his fists. Gloria sets the box aside, crosses the room in her slow black shoes, and rests a hand on the back of his neck, the way you steady a young horse. The drip falls into the bucket, steady as a clock.
[beat 11] RAUL: I should've come. GLORIA: Yes. RAUL: That's it? Yes? GLORIA: You want me to say it was fine? RAUL: I want you to say something. GLORIA: Help me pack the rods.
[beat 12] He wipes his face on his sleeve. Stands. Takes one end of the long rod rack. She takes the other. They carry it out into the light, not looking at each other, the way people do who have finally said enough.
PLACE (shop): store | market | pharmacy | pawn shop | bookstore | gas station | bakery | boutique | convenience store
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 3 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 7 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 8 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 9 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 10 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 11 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 12 (leaves): leaves | storms out | slips away | walks out on | is sent away | excuses themself | is escorted out | abandons | exits quietly
CHAR GLORIA ESPINOSA-WRAY ROLE (mediator): mediator | peacemaker | go-between | translator | diplomat | referee | counselor | voice of reason | arbiter | therapist | facilitator | family glue | bridge | fixer between sides | broker | conciliator | advisor | moderator | witness for both | calming presence | neutral party | negotiator for others | matchmaker | guide | elder sage
CHAR GLORIA ESPINOSA-WRAY TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR GLORIA ESPINOSA-WRAY TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR RAUL ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR RAUL TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful
CHAR RAUL TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative

### SCENE s00096 | INT. DEEP-SEA HABITAT "THRESHOLD" - MAIN CABIN - NIGHT CYCLE
Characters: NADIRA SHARIFOVA, PETRUS VAN DER LINDE, QUILL
[beat 0] A curved steel cylinder lined with cables, plastic crates, and pipe. Portholes the size of dinner plates show nothing but black water. A single red emergency lamp pulses at the far bulkhead.
[beat 1] NADIRA SHARIFOVA (40s, habitat commander, close-cropped hair, a mug that reads WORLD'S OKAYEST BOSS) stands at the central console. PETRUS VAN DER LINDE (50s, pressure technician, ginger beard gone grey at the chin) kneels beside an open floor panel, a wrench in each hand. QUILL (20s, oceanographer, real name Quillon Adeyemi, dreadlocks tied up in a net) bends over a bank of sonar monitors, headphones around his neck.
[beat 2] NADIRA: Eyes up, everyone. Status report. PETRUS: Seal four is weeping. QUILL: Sonar's reading something big. NADIRA: How big? QUILL: Bigger than us.
[beat 3] Nadira sets down her mug. NADIRA: Define "something." QUILL: It's moving. Slowly. Circling. PETRUS: Not today. Not today. Not today.
[beat 4] He tightens a bolt. A thin jet of water hisses at his wrist, and he curses and clamps a hand over it. Nadira drops beside him and slaps a patch over the leak. NADIRA: Hold it. PETRUS: I am holding it. NADIRA: Hold it harder.
[beat 5] The emergency lamp pulses faster. Quill removes his headphones, puts them back on, and removes them again. QUILL: It's gone. NADIRA: Gone where? QUILL: Just gone. Vanished off the screen.
[beat 6] The hull shudders. A deep, resonant note rolls through the walls, like a cello string the size of a whale. Everyone freezes. Dust drifts from the ceiling. Petrus lets go of the patch, and it holds. PETRUS: That was no engine. QUILL: That was a song. NADIRA: Nobody panic.
[beat 7] She looks at the nearest porthole. A vast, pale eye slides past the glass, unblinking, then drifts into the dark. QUILL: That's a sperm whale. PETRUS: It's enormous. NADIRA: Of course it is.
[beat 8] She retrieves her mug and takes a long, slow sip. Her hand shakes only a little.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (claustrophobic): claustrophobic | suffocating | trapped | cramped | oppressive | airless | boxed-in | pressurized | confined
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 3 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 4 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 8 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR NADIRA SHARIFOVA ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR NADIRA SHARIFOVA TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR NADIRA SHARIFOVA TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR PETRUS VAN DER LINDE ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR PETRUS VAN DER LINDE TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR PETRUS VAN DER LINDE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR QUILL ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR QUILL TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR QUILL TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless

### SCENE s00097 | INT. RETROFITTED SCHOOL BUS BRIDAL SHOP - DAY
Characters: PHILOMENA TRASK, GWENDOLYN OSEI-MARTINSEN, LUCIEN FAURE, IMANI REYNOLDS, BARTHOLOMEW FINCH, AUNT CORDELIA
[beat 0] A yellow school bus gutted and rebuilt as a boutique: tulle hung from the luggage racks, chandeliers swaying from the ceiling, a three-way mirror bolted where the driver's seat used to be. Sunlight falls through the stop-sign window in a red octagon on the floor.
[beat 1] PHILOMENA TRASK (30s, bride, hair half-pinned, bare feet) stands on a milk crate in a billowing gown. GWENDOLYN OSEI-MARTINSEN (60s, shop owner, pins in her mouth, measuring tape like a stole) kneels at the hem. LUCIEN FAURE (30s, best man, tuxedo jacket over jeans) lounges on a bench seat eating a muffin. IMANI REYNOLDS (20s, maid of honor, phone in hand) paces the aisle. BARTHOLOMEW FINCH (70s, bus driver, still in uniform, newspaper) sits at the wheel, pretending to read.
[beat 2] GWENDOLYN: Arms up. PHILOMENA: They are up. GWENDOLYN: Up like you mean it.
[beat 3] Philomena raises her arms. The dress gapes. Imani gasps. IMANI: It's too big! LUCIEN: It's perfect. Imani and Philomena speak together. IMANI: It's not perfect! PHILOMENA: ^I love it!
[beat 4] They stop. Look at each other. Imani's phone rings. She answers, thumb flying. AUNT CORDELIA: Is she in the dress? I want a photo. Don't let her cry. She'll cry. PHILOMENA: I'm not crying. AUNT CORDELIA: Is she crying? IMANI: A little. PHILOMENA: I'm not!
[beat 5] She is. Gwendolyn stands, spits the pins into her palm, and wipes the bride's cheek with the measuring tape. GWENDOLYN: Hush, child.
[beat 6] Bartholomew lowers the newspaper. BARTHOLOMEW: Are we leaving, or what? GWENDOLYN: We are fitting a bride! BARTHOLOMEW: Fitting a bride in a bus. My mother would never.
[beat 7] Lucien licks muffin from his thumb. LUCIEN: Phil, honestly. You look like a lighthouse. PHILOMENA: That's not a compliment. LUCIEN: It is where I'm from.
[beat 8] Everything seems fine. The chandeliers tinkle. The sun burns the floor. Philomena steps off the crate and walks the aisle, the gown dragging behind her like a wake.
[beat 9] Then the bus lurches. The engine coughs and catches. Bartholomew is leaning on the wheel, and one foot is flat on the accelerator. BARTHOLOMEW: Hold on.
[beat 10] Everyone stumbles. The bus rolls forward. Gwendolyn grabs a rack. Imani drops the phone. Lucien's muffin lands in Philomena's veil. The bus rolls through the garage doors and into the street, a wedding on wheels, tulle streaming out the windows like a flag. AUNT CORDELIA: Hello? Is the bus moving?
PLACE (shop): store | market | pharmacy | pawn shop | bookstore | gas station | bakery | boutique | convenience store
ATMOS (festive): festive | celebratory | joyful | lively | playful | boisterous | euphoric | giddy | warm-hearted
ATMOS (chaotic): chaotic | frantic | riotous | panicked | explosive | hectic | messy | loud | disorienting
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (comforts): comforts | reassures | consoles | calms | tends to | embraces | encourages | forgives | steadies
BEAT 6 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 7 (jokes): jokes with | teases | banters with | lightens the mood for | pranks | plays with | charms | amuses | riffs with
BEAT 8 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 9 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
BEAT 10 (flees): flees | runs | escapes | bolts | retreats | hides from | evades | scrambles away | slips out
CHAR PHILOMENA TRASK ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR PHILOMENA TRASK TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR PHILOMENA TRASK TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR GWENDOLYN OSEI-MARTINSEN ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR GWENDOLYN OSEI-MARTINSEN TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR GWENDOLYN OSEI-MARTINSEN TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR LUCIEN FAURE ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR LUCIEN FAURE TRAIT (playful): playful | mischievous | teasing | flirtatious | whimsical | goofy | spirited | cheeky | carefree
CHAR LUCIEN FAURE TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR IMANI REYNOLDS ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR IMANI REYNOLDS TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR IMANI REYNOLDS TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR BARTHOLOMEW FINCH ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR BARTHOLOMEW FINCH TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR BARTHOLOMEW FINCH TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR AUNT CORDELIA ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR AUNT CORDELIA TRAIT (impulsive): impulsive | rash | hasty | erratic | spontaneous | wild | unpredictable | careless | explosive
CHAR AUNT CORDELIA TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan

### SCENE s00098 | INT. MATTRESS WAREHOUSE - MAILROOM - DAY
Characters: THE INTERN, PRUDENCE KALLIS, ANDRZEJ NOWICKI-FAYE, ROSCOE
[beat 0] Stacks of boxed queens and kings reach the rafters. A conveyor rattles. Fluorescent light buzzes over steel shelving.
[beat 1] THE INTERN (19, stiff new polo, name tag blank) stands in the doorway holding a manila envelope like a live fish. MS. PRUDENCE KALLIS (50s, cardigan, reading glasses on a beaded chain) sorts parcels at the counter. ANDRZEJ NOWICKI-FAYE (40s, forklift gloves tucked in his belt) sits on a pallet, eating a sandwich in precise bites. Nobody speaks. The conveyor rattles.
[beat 2] THE INTERN: Um. Hi. I was told to report here. PRUDENCE: By whom? THE INTERN: A man in a tie. PRUDENCE: They all wear ties.
[beat 3] She does not look up. Andrzej chews. The Intern steps into the room and sets the envelope on the counter. THE INTERN: It says to give you this.
[beat 4] Prudence slits it open with a letter opener. Reads. Her mouth thins. PRUDENCE: Roscoe. THE INTERN: Sorry? PRUDENCE: It says here your name is Roscoe. ROSCOE: Oh. Yes. Roscoe. Hi. ANDRZEJ: Roscoe. PRUDENCE: Roscoe, welcome to the mailroom.
[beat 5] ROSCOE: Thanks. What do I do? PRUDENCE: You stand. ROSCOE: Stand? ANDRZEJ: You stand. You wait. You deliver nothing. ROSCOE: That's it? PRUDENCE: Seventeen years, and that is the entire job.
[beat 6] Andrzej folds his sandwich paper into a perfect square. Prudence slides the envelope into a drawer already full of identical ones. Roscoe adjusts his name tag, which still says nothing. The conveyor rattles on.
[beat 7] ROSCOE: Is there a handbook? ANDRZEJ: There's a mattress. He points. In the corner, between two stacks of boxes, a single twin bed made up with a grey blanket. A small nest of mail beside it. ROSCOE: Does someone sleep here? PRUDENCE: Not tonight.
PLACE (workplace): office | newsroom | laboratory | workshop | studio | conference room | farm | construction site | server room
ATMOS (sterile): sterile | clinical | cold | corporate | bureaucratic | impersonal | antiseptic | formal | detached
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 5 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 6 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 7 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
CHAR THE INTERN ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR THE INTERN TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR THE INTERN TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR PRUDENCE KALLIS ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR PRUDENCE KALLIS TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR PRUDENCE KALLIS TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR ANDRZEJ NOWICKI-FAYE ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR ANDRZEJ NOWICKI-FAYE TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR ANDRZEJ NOWICKI-FAYE TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR ROSCOE ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR ROSCOE TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR ROSCOE TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed

### SCENE s00099 | INT. NIGHT TRAIN - SLEEPER COMPARTMENT - NIGHT
Characters: CLEMENCE ARDOIN, SULEIMAN HADDAD
[beat 0] A narrow cabin of dark wood and brass. Two bunks. A lamp swings with the rails. Rain slides sideways down the window.
[beat 1] CLEMENCE ARDOIN (30s, wool coat, hair undone) sits on the lower bunk with her shoes still on. SULEIMAN HADDAD (30s, travel-worn suit, a single suitcase) stands at the window with his back to her. He does not turn. She watches the back of his neck. He watches the dark.
[beat 2] CLEMENCE: You could have taken another car. SULEIMAN: There was no other car. CLEMENCE: There's always another car. SULEIMAN: Not at two in the morning. CLEMENCE: You didn't ask. SULEIMAN: Neither did you.
[beat 3] The rails clack. She smooths her skirt. He loosens his tie, pulls it off, folds it once, twice, and tucks it in his pocket.
[beat 4] CLEMENCE: Tell me why you came. SULEIMAN: I told you. CLEMENCE: You told me a story about a conference. SULEIMAN: It was a good conference. CLEMENCE: In Lyon. Where I live. SULEIMAN: It's a big city. CLEMENCE: Suleiman. SULEIMAN: Clemence.
[beat 5] CLEMENCE: Say it. SULEIMAN: I got on the wrong train. CLEMENCE: You got on the right one. SULEIMAN: That's worse. CLEMENCE: Yes.
[beat 6] He finally turns. The lamp lights half his face. She is already standing. They are closer than either planned.
[beat 7] SULEIMAN: Six years. CLEMENCE: Seven in March. SULEIMAN: You counted. CLEMENCE: You didn't? SULEIMAN: Every day. CLEMENCE: Then why is this the first time? SULEIMAN: Because you would have said no. CLEMENCE: I might have said yes. SULEIMAN: Might. CLEMENCE: Might.
[beat 8] The train screams around a curve and throws her against his chest. He catches her. Neither lets go. CLEMENCE: That was an accident. SULEIMAN: I know. CLEMENCE: I'm not sorry. SULEIMAN: Neither am I.
[beat 9] She slaps him, hard, across the cheek. He doesn't flinch. She slaps him again, and then she is crying, and then she is holding onto his lapels, and he says her name into her hair, again and again, as the rain beats on the glass and the train carries them toward a station neither of them knows.
PLACE (vehicle): car | truck or van | taxi | bus | train car | boat | plane cabin | cockpit | ambulance or police car
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
ATMOS (claustrophobic): claustrophobic | suffocating | trapped | cramped | oppressive | airless | boxed-in | pressurized | confined
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (hides): hides | conceals something | ducks out of sight | pockets evidence | covers up | keeps a secret | lies low | masks a feeling | plays dead
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 6 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 7 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 8 (bonds): bonds with | reconnects with | confides in | shares a moment with | flirts with | trusts | reminisces with | thanks | teams up with
BEAT 9 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
CHAR CLEMENCE ARDOIN ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR CLEMENCE ARDOIN TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR CLEMENCE ARDOIN TRAIT (sad): sad | grieving | heartbroken | melancholy | tearful | mournful | downcast | wistful | regretful
CHAR SULEIMAN HADDAD ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR SULEIMAN HADDAD TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR SULEIMAN HADDAD TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle

### SCENE s00100 | INT. FARMHOUSE KITCHEN - AUCTION DAY
Characters: IVO LANDRY, PETRA SZABO, DOLORES NKRUMAH, ANSELM WHITFIELD, KIRSTEN BJORNSEN
[beat 0] Oilcloth on the table. Ladder-back chairs. A wall clock that ran slow for fifty years. Outside, through the screen door, trucks and auctioneer chatter in the yard.
[beat 1] Five siblings crowd the room. IVO LANDRY (50s, eldest, Sunday jacket, no tie) stands at the counter packing a box of cutlery. PETRA SZABO (40s, nurse's clogs, keys in a fist) leans on the sink, arms crossed. DOLORES NKRUMAH (late 30s, silk blouse, phone face-down on the table) sits in their mother's chair. ANSELM WHITFIELD (30s, work boots, farm cap) rolls a pencil between his fingers by the stove. KIRSTEN BJORNSEN (20s, youngest, bare feet, a cardboard box in her arms) hovers in the doorway to the hall.
[beat 2] IVO: The clock goes to me. PETRA: It goes to whoever's here. ANSELM: I'm here. DOLORES: I'm here too. IVO: You're on your phone. DOLORES: I'm on my phone in the chair.
[beat 3] Anselm sets the pencil on the table. Dolores picks it up and sets it back where it was. Petra jingles her keys. Ivo wraps a fork in newspaper, then another, working quickly, like a man counting something.
[beat 4] KIRSTEN: I took the quilt. PETRA: Which quilt? KIRSTEN: The blue one. IVO: That's Ma's quilt. KIRSTEN: She told me. ANSELM: When? KIRSTEN: In March. DOLORES: Of course she told you. PETRA: That's not fair. DOLORES: I didn't say it was fair.
[beat 5] Kirsten shifts the box. Under the lid, a corner of blue appears. Ivo sees it. Looks away. A truck engine roars past the screen door and fades. Ivo puts down the fork and lowers himself, slowly, onto the last free chair.
[beat 6] IVO: The clock goes to whoever winds it. PETRA: Nobody winds it. ANSELM: I wind it.
[beat 7] Silence. Dolores lifts her head, surprised. Anselm picks the pencil up again, rolls it between finger and thumb. Petra's hand loosens on the keys, and Kirsten sets the box on the table and, with the care of someone handling an egg, unfolds the quilt. She lays it over the oilcloth. The five of them look at it, a field of faded blue squares.
[beat 8] DOLORES: That's the barn. ANSELM: That's the pump house. PETRA: That's the pump house, Ivo. IVO: That's the barn.
[beat 9] Nobody argues. Outside the auctioneer cries a number, and another, and the clock on the wall, for no reason, ticks once and falls silent.
PLACE (home): kitchen | living room | bedroom | bathroom | apartment | family house | attic or basement | porch or yard | garage
ATMOS (bleak): bleak | desolate | grim | hopeless | mournful | somber | melancholic | funereal | barren
ATMOS (intimate): intimate | tender | romantic | confessional | close | private | vulnerable | sensual | gentle
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 4 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (confesses): confesses to | apologizes to | admits guilt to | opens up to | breaks down to | unburdens to | owns up to | begs forgiveness from | comes clean to
BEAT 7 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 8 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 9 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR IVO LANDRY ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR IVO LANDRY TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR IVO LANDRY TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR PETRA SZABO ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR PETRA SZABO TRAIT (angry): angry | furious | seething | hot-headed | resentful | bitter | volatile | irritable | vengeful
CHAR PETRA SZABO TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR DOLORES NKRUMAH ROLE (comic): comic relief | joker | fool | clown | oddball | eccentric | deadpan wit | klutz | gossip | blowhard | prankster | chatterbox | cynic with jokes | awkward friend | drunk | flirt | showoff | smart aleck | goofball | straight man | trickster | comic foil | charming rogue | mischief maker | class clown
CHAR DOLORES NKRUMAH TRAIT (sarcastic): sarcastic | dry | cynical | biting | wry | snarky | acerbic | mocking | deadpan
CHAR DOLORES NKRUMAH TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR ANSELM WHITFIELD ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR ANSELM WHITFIELD TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR ANSELM WHITFIELD TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR KIRSTEN BJORNSEN ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR KIRSTEN BJORNSEN TRAIT (hopeful): hopeful | optimistic | idealistic | eager | excited | dreamy | trusting | encouraged | starry-eyed
CHAR KIRSTEN BJORNSEN TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless

### SCENE s00101 | INT. RADIO STATION BROADCAST BOOTH - NIGHT
Characters: OSWALD FERRIS-MBEKI, LAVINIA CRUZ-HOLLANDER, DEREK PUTNAM-ADEBAYO, MARGUERITE LACROIX, HAZEL OKONKWO-DREW, NIGEL STRAND, VOICE, AIR
[beat 0] A glass-walled booth lined with egg-crate foam. Dials, faders, a microphone on a swan neck. Beyond the glass, a dim studio and a bank of dead windows. A red ON AIR sign glows above the door.
[beat 1] Six people sit around a small round table in the booth, hands flat on the wood. A single candle burns in the center. OSWALD FERRIS-MBEKI (60s, station manager, cardigan, pipe unlit) presides. LAVINIA CRUZ-HOLLANDER (40s, medium, shawl, silver rings on every finger) closes her eyes. DEREK PUTNAM-ADEBAYO (30s, sound engineer, headphones round his neck) rests a hand on the mixing board. MARGUERITE LACROIX (70s, retired host, silk scarf, oxygen tank) watches the flame. HAZEL OKONKWO-DREW (20s, intern, notebook) writes furiously. NIGEL STRAND (50s, owner's lawyer, damp raincoat) stares at the exit.
[beat 2] LAVINIA: We are here to hear what was never aired. OSWALD: Hush, everyone. NIGEL: This is absurd. MARGUERITE: Let her work, dear.
[beat 3] The candle flame bows. Derek glances at the board. Every needle is dead. DEREK: Nothing's powered. HAZEL: That's what I wrote. LAVINIA: He is close. A man with a heavy voice. He says...
[beat 4] A crackle on the monitor speaker. VOICE: ...ten minutes to air.
[beat 5] Oswald drops his pipe. Marguerite covers her mouth. Derek leans toward the board. Nigel pushes his chair back. NIGEL: That's a recording. Someone's playing a tape. DEREK: There's no tape. Nothing's plugged in. VOICE: ...cut the lights, Marguerite.
[beat 6] Marguerite is staring at the speaker. Her hand shakes. The oxygen tank hisses. MARGUERITE: That is Vincent. OSWALD: Vincent is dead, Marguerite. MARGUERITE: Thirty years. VOICE: ...tell them what you did.
[beat 7] Lavinia's eyes fly open. She is not looking at the speaker. She is looking at Nigel. LAVINIA: It's you. NIGEL: I beg your pardon? LAVINIA: He is saying your name. NIGEL: He is not. VOICE: ...Nigel.
[beat 8] Nigel slams a palm onto the table. The candle gutters. The ON AIR sign flashes. Hazel scribbles. Derek lunges for the board. Oswald stands, knocking over his chair. The whole booth goes black.
[beat 9] In the dark, a single click. A match is lit. Marguerite's face floats above the flame, calm, steady, ancient. MARGUERITE: Sit down, Mr. Strand. NIGEL: Please. MARGUERITE: Vincent kept very good notes.
[beat 10] She holds up a small cassette. The match burns her finger. She doesn't flinch. In the glow, five faces stare at the sixth, who is no longer looking at the exit at all.
PLACE (workplace): office | newsroom | laboratory | workshop | studio | conference room | farm | construction site | server room
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 5 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 6 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 7 (accuses): accuses | blames | implicates | points the finger at | charges | exposes | condemns | suspects | turns on
BEAT 8 (attacks): attacks | strikes | grabs | shoves | ambushes | fights | wrestles | shoots at | lunges at
BEAT 9 (persuades): persuades | convinces | pitches to | bargains with | negotiates with | recruits | seduces | flatters | talks down
BEAT 10 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
CHAR OSWALD FERRIS-MBEKI ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR OSWALD FERRIS-MBEKI TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR OSWALD FERRIS-MBEKI TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR LAVINIA CRUZ-HOLLANDER ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR LAVINIA CRUZ-HOLLANDER TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR LAVINIA CRUZ-HOLLANDER TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR DEREK PUTNAM-ADEBAYO ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR DEREK PUTNAM-ADEBAYO TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR DEREK PUTNAM-ADEBAYO TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR MARGUERITE LACROIX ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR MARGUERITE LACROIX TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR MARGUERITE LACROIX TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR HAZEL OKONKWO-DREW ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR HAZEL OKONKWO-DREW TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR HAZEL OKONKWO-DREW TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR NIGEL STRAND ROLE (opposes): antagonist | obstacle | rival | gatekeeper | skeptic | interrogator | bully | enforcer | competitor | critic | tempter | deceiver | saboteur | villain | jilted partner | accuser | nemesis | blocker | naysayer | manipulator | threat | prosecutor | warden | stalker | predator
CHAR NIGEL STRAND TRAIT (secretive): secretive | evasive | guarded | cagey | mysterious | shifty | closed-off | cryptic | private
CHAR NIGEL STRAND TRAIT (defiant): defiant | rebellious | stubborn | insolent | unyielding | proud | contrary | headstrong | combative
CHAR VOICE ROLE (drives): protagonist | instigator | leader | planner | seeker | investigator | pursuer | dreamer | hero of the moment | decision maker | rebel | newcomer with an agenda | negotiator | schemer | truth-teller | rescuer | challenger | catalyst | storyteller | host | captain | detective | quester | fixer | initiator
CHAR VOICE TRAIT (manipulative): manipulative | scheming | cunning | deceitful | sly | two-faced | charming liar | slippery | exploitative
CHAR VOICE TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved

### SCENE s00102 | INT. FLOODED LIMESTONE CAVE - DAY
Characters: JOSEFINA LARRAZABAL, TOMASZ EKWUEME, MADELEINE PRICE-ODUYA, RUBEN HAKIMI, GUNNAR SIGURDSSON
[beat 0] A low chamber, water to the waist. Headlamps stab the dark. Stalactites drip. Somewhere ahead, a pulse of water echoes.
[beat 1] Five climbers wade in a line. JOSEFINA LARRAZABAL (30s, expedition lead, braid) pushes ahead, rope coiled over one shoulder. TOMASZ EKWUEME (40s, doctor, glasses fogged) follows with a medical bag held above his head. MADELEINE PRICE-ODUYA (20s, geologist, hardhat) tests the wall with a hammer. RUBEN HAKIMI (30s, photographer, camera in a dry bag) stumbles. GUNNAR SIGURDSSON (50s, veteran caver, quiet, grey beard) brings up the rear, a hand on the rope, counting steps.
[beat 2] JOSEFINA: Water's rising. GUNNAR: Not rising. Rain upstairs. RUBEN: Is that better? GUNNAR: It's the same.
[beat 3] Madeleine taps the wall. A hollow note answers. She tilts her head and taps again. MADELEINE: It's thin here. TOMASZ: How thin? MADELEINE: Thin enough that he should not lean on it.
[beat 4] Ruben, who has been leaning, pulls back. The wall gives a long groan. Josefina swings around, grabs Ruben's collar, and drags him forward as a slab of limestone sheers off and drops into the water behind them. A wave slaps all five. Gunnar yanks Tomasz upright, Tomasz clutches his bag, Madeleine drops her hammer, and Josefina shoves Ruben against the far wall and shouts for them all to move. JOSEFINA: Go! Go! Go!
[beat 5] They surge down the passage. The rope jerks tight. Gunnar, last in line, counts steps, and when he reaches thirty, he stops. The water behind them has gone still. GUNNAR: That's the worst of it. JOSEFINA: You're sure? GUNNAR: No. But it sounds like it.
[beat 6] Tomasz lets out a laugh that is half a sob. Ruben clutches his camera. Madeleine fishes her hammer from the water and wipes it on her sleeve.
[beat 7] JOSEFINA: Everyone count off. TOMASZ: One. MADELEINE: Two. RUBEN: Three. GUNNAR: Four. JOSEFINA: Five. Good. We keep moving.
PLACE (nature): forest | beach | field | mountain | desert | lake or river | garden or park | cave | snowfield
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (claustrophobic): claustrophobic | suffocating | trapped | cramped | oppressive | airless | boxed-in | pressurized | confined
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (works): works | cooks | cleans | repairs something | drives | prepares | packs | writes | goes through routine
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (discovers): discovers | finds a clue | realizes | notices | uncovers | stumbles on | recognizes | pieces it together | catches
BEAT 4 (defends): defends | protects | shields | stands up for | justifies themself to | denies to | pushes back on | holds the line against | covers for
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 7 (decides): decides | commits | makes a plan | chooses | refuses | gives an order | resigns | accepts | changes course
CHAR JOSEFINA LARRAZABAL ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR JOSEFINA LARRAZABAL TRAIT (determined): determined | driven | resolute | focused | relentless | ambitious | single-minded | tenacious | steely
CHAR JOSEFINA LARRAZABAL TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR TOMASZ EKWUEME ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR TOMASZ EKWUEME TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR TOMASZ EKWUEME TRAIT (warm): warm | affectionate | friendly | welcoming | generous | big-hearted | nurturing | sincere | gentle
CHAR MADELEINE PRICE-ODUYA ROLE (observer): bystander | witness | eavesdropper | spectator | silent partner | background presence | chorus | onlooker | lurker | voyeur | listener | guard on duty | clerk | waiter | driver | passerby | customer | neighbor | audience | assistant | secretary | attendant | receptionist | crowd member | stranger
CHAR MADELEINE PRICE-ODUYA TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR MADELEINE PRICE-ODUYA TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR RUBEN HAKIMI ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR RUBEN HAKIMI TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR RUBEN HAKIMI TRAIT (frightened): frightened | terrified | scared | shaken | paralyzed | trembling | horrified | spooked | intimidated
CHAR GUNNAR SIGURDSSON ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR GUNNAR SIGURDSSON TRAIT (calm): calm | composed | steady | patient | serene | level-headed | unhurried | measured | stoic
CHAR GUNNAR SIGURDSSON TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant

### SCENE s00103 | INT. CATHEDRAL BELL TOWER OBSERVATION POST - DAY
Characters: CAPTAIN HENRY ABERNETHY-LOWE, CORPORAL TOMMASO RICCI, PRIVATE ELIJAH STONE-BARNES, RADIO OPERATOR
[beat 0] A cramped stone chamber beneath the bells. Narrow arrow-slit windows. Sandbags stacked against the wall. A field telephone on a plank, a pair of binoculars on a nail.
[beat 1] CAPTAIN HENRY ABERNETHY-LOWE stands at the east slit, field glasses at his eyes. He is tall, spare, and impeccable, his uniform pressed even in the dust. CORPORAL TOMMASO RICCI sits on an ammunition crate, a rifle across his knees, cleaning it with a rag. PRIVATE ELIJAH STONE-BARNES, barely nineteen, huddles by the stairwell door, a mug of tea cold in his hands.
[beat 2] The captain lowers the glasses. He does not turn. ABERNETHY-LOWE: Anything? RICCI: Nothing, sir. ABERNETHY-LOWE: Then keep looking. Ricci nods, not looking up. The private watches the captain, who watches the horizon. A great quiet fills the tower.
[beat 3] RADIO OPERATOR: Eagle's Nest, this is Baker Two. Report. Abernethy-Lowe crosses the floor, lifts the receiver, and holds it with two fingers. ABERNETHY-LOWE: Baker Two, Eagle's Nest. Position quiet. No movement. RADIO OPERATOR: Understood. Command wants a sweep of the north road at sixteen hundred. ABERNETHY-LOWE: Acknowledged. He hangs up. Stands very still, his hand lingering on the receiver.
[beat 4] Elijah sets down the mug. ELIJAH: Sir? ABERNETHY-LOWE: Private. ELIJAH: Is it true what they say about the bells? ABERNETHY-LOWE: What do they say? ELIJAH: That they ring on their own before an attack. Ricci snorts, rubbing the rifle. The captain turns, finally, and studies the boy. ABERNETHY-LOWE: They ring when the wind is wrong. That's all. ELIJAH: Then why do you keep checking?
[beat 5] The captain does not answer. A long pause. High above, in the dark of the belfry, a single bell hums, a faint, shivering note, not a ring, not yet.
[beat 6] Ricci puts down the rifle. Abernethy-Lowe lifts his glasses. Elijah stands. They all look at the arrow-slit, where the afternoon light has gone a strange, pale gold. RICCI: Wind. ABERNETHY-LOWE: Wind.
[beat 7] The bell hums again. This time, it rings.
PLACE (other): spaceship | bunker | dreamscape | ruins | laboratory of the future | underwater | abstract space | limbo | unknown location
ATMOS (tense): tense | suspenseful | charged | uneasy | nervy | simmering | taut | watchful | on edge
ATMOS (eerie): eerie | uncanny | haunted | ominous | spectral | foreboding | unsettling | creepy | ghostly
BEAT 0 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 1 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 2 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 3 (reveals): reveals | drops a bombshell on | shows | unmasks | lets slip to | breaks news to | comes clean to | exposes a secret to | presents evidence to
BEAT 4 (confronts): confronts | interrogates | corners | calls out | challenges | stares down | demands answers from | presses | faces off with
BEAT 5 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
BEAT 6 (deflects): deflects | dodges | changes the subject on | stonewalls | brushes off | evades | stalls | shrugs off | plays dumb with
BEAT 7 (observes): watches | listens to | waits | spies on | studies | eavesdrops on | keeps watch | hesitates | takes it in
CHAR CAPTAIN HENRY ABERNETHY-LOWE ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR CAPTAIN HENRY ABERNETHY-LOWE TRAIT (authoritative): authoritative | domineering | bossy | strict | imperious | decisive | controlling | stern | officious
CHAR CAPTAIN HENRY ABERNETHY-LOWE TRAIT (weary): weary | tired | jaded | resigned | burnt out | world-weary | defeated | listless | drained
CHAR CORPORAL TOMMASO RICCI ROLE (ally): ally | best friend | sidekick | partner | confidant | supporter | accomplice | protector | lookout | helper | co-conspirator | loyal friend | teammate | love interest | sibling ally | devoted parent | wingman | backup | second in command | nurse | medic | messenger | fan | follower | loyal servant
CHAR CORPORAL TOMMASO RICCI TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR CORPORAL TOMMASO RICCI TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
CHAR PRIVATE ELIJAH STONE-BARNES ROLE (vulnerable): victim | hostage | patient | child | suspect | outsider | grieving | injured | lost soul | prisoner | dependent | refugee | addict | elderly | witness under pressure | scapegoat | runaway | orphan | abandoned partner | confused newcomer | frightened bystander | debtor | sick | betrayed | cornered
CHAR PRIVATE ELIJAH STONE-BARNES TRAIT (nervous): nervous | jittery | anxious | fidgety | flustered | panicky | skittish | stammering | restless
CHAR PRIVATE ELIJAH STONE-BARNES TRAIT (curious): curious | inquisitive | nosy | probing | observant | fascinated | eager to learn | investigative | wide-eyed
CHAR RADIO OPERATOR ROLE (authority): boss | parent | judge | officer | commander | teacher | doctor | official | elder | landlord | priest | chief | warden | captain in charge | king or queen | mentor | coach | manager | director | superior officer | matriarch | patriarch | headmaster | inspector | magistrate
CHAR RADIO OPERATOR TRAIT (cold): cold | aloof | detached | icy | distant | unfeeling | calculating | clinical | reserved
CHAR RADIO OPERATOR TRAIT (cautious): cautious | careful | wary | hesitant | suspicious | prudent | paranoid | tentative | vigilant
