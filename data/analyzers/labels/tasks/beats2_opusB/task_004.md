You segment screenplay scenes into DRAMATIC BEATS for a screenwriting tool (timeline, mood track, outline).

A dramatic beat is one exchange of action and reaction around a single intention: a character pursues something with
one tactic, and the beat ends when the tactic, the power balance, the subject or the situation changes (a reveal, an
entrance or exit, a decision, a turn in the argument, a new attempt after a failure). Scenes usually have 3-8 beats;
a short scene can have 1-2, a long one up to ~12.
- A beat usually spans SEVERAL paragraphs and dialogue blocks. Do NOT start a beat at every paragraph or speaker change.
- Keep the setup (setting and introductions before anything is at stake) inside the first beat unless it is long
  and self-contained.
- A beat may start in the middle of an action paragraph if the turn happens there.

For each beat give:
- "start": unit number where it starts (the first content unit starts beat 1)
- "type": the coarse beat type and "fine": the best phrase for it, from this list (coarse: [fine phrases]):
  arrives: ["arrives", "bursts in", "slips in", "returns", "is introduced", "makes an entrance", "shows up unannounced", "is ushered in", "drifts in"]
  leaves: ["leaves", "storms out", "slips away", "walks out on", "is sent away", "excuses themself", "is escorted out", "abandons", "exits quietly"]
  confronts: ["confronts", "interrogates", "corners", "calls out", "challenges", "stares down", "demands answers from", "presses", "faces off with"]
  accuses: ["accuses", "blames", "implicates", "points the finger at", "charges", "exposes", "condemns", "suspects", "turns on"]
  threatens: ["threatens", "intimidates", "warns", "blackmails", "issues an ultimatum to", "menaces", "holds at gunpoint", "coerces", "looms over"]
  attacks: ["attacks", "strikes", "grabs", "shoves", "ambushes", "fights", "wrestles", "shoots at", "lunges at"]
  defends: ["defends", "protects", "shields", "stands up for", "justifies themself to", "denies to", "pushes back on", "holds the line against", "covers for"]
  flees: ["flees", "runs", "escapes", "bolts", "retreats", "hides from", "evades", "scrambles away", "slips out"]
  hides: ["hides", "conceals something", "ducks out of sight", "pockets evidence", "covers up", "keeps a secret", "lies low", "masks a feeling", "plays dead"]
  searches: ["searches", "investigates", "snoops", "rummages", "tracks", "looks for", "examines", "questions witnesses", "scans the room"]
  discovers: ["discovers", "finds a clue", "realizes", "notices", "uncovers", "stumbles on", "recognizes", "pieces it together", "catches"]
  reveals: ["reveals", "drops a bombshell on", "shows", "unmasks", "lets slip to", "breaks news to", "comes clean to", "exposes a secret to", "presents evidence to"]
  confesses: ["confesses to", "apologizes to", "admits guilt to", "opens up to", "breaks down to", "unburdens to", "owns up to", "begs forgiveness from", "comes clean to"]
  lies: ["lies to", "deceives", "bluffs", "covers a story for", "misleads", "feigns innocence to", "plays along with", "cons", "fakes it with"]
  deflects: ["deflects", "dodges", "changes the subject on", "stonewalls", "brushes off", "evades", "stalls", "shrugs off", "plays dumb with"]
  persuades: ["persuades", "convinces", "pitches to", "bargains with", "negotiates with", "recruits", "seduces", "flatters", "talks down"]
  pleads: ["pleads with", "begs", "appeals to", "asks for help from", "implores", "bargains for mercy with", "pleads innocence to", "calls for", "prays"]
  comforts: ["comforts", "reassures", "consoles", "calms", "tends to", "embraces", "encourages", "forgives", "steadies"]
  bonds: ["bonds with", "reconnects with", "confides in", "shares a moment with", "flirts with", "trusts", "reminisces with", "thanks", "teams up with"]
  jokes: ["jokes with", "teases", "banters with", "lightens the mood for", "pranks", "plays with", "charms", "amuses", "riffs with"]
  mocks: ["mocks", "taunts", "belittles", "humiliates", "provokes", "insults", "patronizes", "needles", "dismisses"]
  decides: ["decides", "commits", "makes a plan", "chooses", "refuses", "gives an order", "resigns", "accepts", "changes course"]
  observes: ["watches", "listens to", "waits", "spies on", "studies", "eavesdrops on", "keeps watch", "hesitates", "takes it in"]
  works: ["works", "cooks", "cleans", "repairs something", "drives", "prepares", "packs", "writes", "goes through routine"]
- "actor": the character driving the beat (cue name) or null; "target": who it is aimed at, or null
- "mood": the TONE of the beat as an audience feels it, one of: calm, tender, playful, joyful, hopeful, awkward, melancholy, grief, tense, suspense, ominous, fear, hostile, chaotic, triumphant, bittersweet
- "intensity": 1 (faint) to 5 (overwhelming)
- "summary": 6-15 words, present tense, what happens in the beat (names, no quotes)

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusB/group_07004.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pd_sisters_1 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANDREY, MASHA, VERSHININ, IRINA, TUZENBACH
1 D ANDREY: You can come to-morrow and fetch these documents.... Go along....
2 A ¶ Pause.
3 D ANDREY: He’s gone.
4 A ¶ A ring.
5 D ANDREY: Yes, yes....
6 A ¶ Stretches himself and slowly goes into his own room.
7 A ¶ Behind the scene the nurse is singing a lullaby to the child.
8 A MASHA and VERSHININ come in.
9 A While they talk, a maidservant lights candles and a lamp.
10 D MASHA: I don’t know.
11 A ¶ Pause.
12 D MASHA: I don’t know. Of course, habit counts for a great deal. After father’s death, for instance, it took us a long time to get used to the absence of orderlies. But, apart from habit, it seems to me in all fairness that, however it may be in other towns, the best and most-educated people are army men.
13 D VERSHININ: I’m thirsty. I should like some tea.
14 A ¶ Glancing at her watch.
15 D MASHA: They’ll bring some soon. I was given in marriage when I was eighteen, and I was afraid of my husband because he was a teacher and I’d only just left school. He then seemed to me frightfully wise and learned and important. And now, unfortunately, that has changed.
16 D VERSHININ: Yes... yes.
17 D MASHA: I don’t speak of my husband, I’ve grown used to him, but civilians in general are so often coarse, impolite, uneducated. Their rudeness offends me, it angers me. I suffer when I see that a man isn’t quite sufficiently refined, or delicate, or polite. I simply suffer agonies when I happen to be among schoolmasters, my husband’s colleagues.
18 D VERSHININ: Yes.... It seems to me that civilians and army men are equally interesting, in this town, at any rate. It’s all the same! If you listen to a member of the local intelligentsia, whether to civilian or military, he will tell you that he’s sick of his wife, sick of his house, sick of his estate, sick of his horses.... We Russians are extremely gifted in the direction of thinking on an exalted plane, but, tell me, why do we aim so low in real life? Why?
19 D MASHA: Why?
20 D VERSHININ: Why is a Russian sick of his children, sick of his wife? And why are his wife and children sick of him?
21 D MASHA: You’re a little downhearted to-day.
22 D VERSHININ: Perhaps I am. I haven’t had any dinner, I’ve had nothing since the morning. My daughter is a little unwell, and when my girls are ill, I get very anxious and my conscience tortures me because they have such a mother. Oh, if you had seen her to-day! What a trivial personality! We began quarrelling at seven in the morning and at nine I slammed the door and went out.
23 A ¶ Pause.
24 D VERSHININ: I never speak of her, it’s strange that I bear my complaints to you alone.
25 A ¶ Kisses her hand.
26 D VERSHININ: Don’t be angry with me. I haven’t anybody but you, nobody at all....
27 A ¶ Pause.
28 D MASHA: What a noise in the oven. Just before father’s death there was a noise in the pipe, just like that.
29 D VERSHININ: Are you superstitious?
30 D MASHA: Yes.
31 D VERSHININ: That’s strange.
32 A ¶ Kisses her hand.
33 D VERSHININ: You are a splendid, wonderful woman. Splendid, wonderful! It is dark here, but I see your sparkling eyes.
34 A ¶ Sits on another chair.
35 D MASHA: There is more light here.
36 D VERSHININ: I love you, love you, love you... I love your eyes, your movements, I dream of them.... Splendid, wonderful woman!
37 A ¶ Laughing.
38 D MASHA: When you talk to me like that, I laugh; I don’t know why, for I’m afraid. Don’t repeat it, please....
39 A ¶ In an undertone.
40 D MASHA: No, go on, it’s all the same to me....
41 A ¶ Covers her face with her hands.
42 D MASHA: Somebody’s coming, let’s talk about something else.
43 A ¶ IRINA and TUZENBACH come in through the dining-room.
44 D TUZENBACH: My surname is really triple. I am called Baron Tuzenbach-Krone-Altschauer, but I am Russian and Orthodox, the same as you. There is very little German left in me, unless perhaps it is the patience and the obstinacy with which I bore you. I see you home every night.
45 D IRINA: How tired I am!
46 D TUZENBACH: And I’ll come to the telegraph office to see you home every day for ten or twenty years, until you drive me away.
47 A ¶ He sees MASHA and VERSHININ; joyfully.

### SCENE s01082 | INT. MINIATURE GOLF CLUBHOUSE - A PIRATE SHIP FOUNDERED IN PLASTER - DAY
Detected names (may be incomplete or contain aliases): BARNABY QUINCE, ODALYS FERREIRA-LAWSON, PARROT, CHILD
1 A ¶ A clubhouse built like a shipwreck.
2 A Fiberglass barnacles.
3 A A parrot animatronic that squawks on a timer.
4 A Scorecards pinned to a mast.
5 A The windows overlook a windmill hole where nobody is playing.
6 A ¶ BARNABY QUINCE, 50s, tour-guide's moustache, pirate hat two sizes small, sits behind the counter practicing a speech to the empty room.
7 A Beside the register, ODALYS FERREIRA-LAWSON, 20s, mini-golf league champion, rolls a putter along the floorboards, bored.
8 D BARNABY (to the room): Ahoy, ye mighty putters! Today we face the Kraken's Revenge, hole eighteen, par three...
9 D ODALYS: Nobody is here, Barnaby.
10 D BARNABY (muttering to himself): Practice makes plunder.
11 D ODALYS: You say that to the parrot, too.
12 D BARNABY: The parrot's a good listener.
13 A ¶ The parrot squawks on cue.
14 D PARROT [V.O.]: Pieces of eight! Pieces of eight!
15 D BARNABY: See?
16 D ODALYS: It's on a loop.
17 A ¶ She sinks a putt into a coffee cup.
18 A Barnaby claps.
19 A She bows.
20 D BARNABY: Ladies and gentlemen --
21 D ODALYS: There's no ladies and gentlemen.
22 D BARNABY: Ladies and gentleman.
23 D ODALYS: Gentleperson.
24 D BARNABY (delighted): Gentleperson! Excellent.
25 A ¶ The door chimes.
26 A A family of six enters in matching shirts.
27 A They fill the clubhouse with sunburn and noise.
28 A Barnaby leaps up, hat tilting.
29 D BARNABY [CONT'D] (grandly, to all): Welcome, brave souls! Who dares challenge the Kraken?
30 A ¶ A small child points at Odalys.
31 D CHILD: She's got a golf stick!
32 D ODALYS (to the child): It's a putter.
33 D BARNABY (to the child): It's a cutlass, my boy.
34 A ¶ They speak at once.
35 D BARNABY [CONT'D]: Eighteen holes of peril!
36 D ODALYS: ^Eighteen holes of boredom.
37 D BARNABY (hissing): Odalys.
38 D ODALYS (whispering back): What? It's honest.
39 A ¶ The family cheers anyway.
40 A Barnaby sweeps the hat off, bows with a flourish.
41 A The hat tips off his head, rolls across the floor, and stops at the child's feet.
42 A The child puts it on.
43 D BARNABY (quietly, to himself): Well, that's a first.
44 D ODALYS (to him, under her breath): Don't get used to it. You'll want it back.
45 A ¶ Barnaby hands out putters.
46 A Odalys slides the scorecards across the counter.
47 A The parrot squawks.
48 D PARROT [V.O.]: Pieces of eight!
49 D ODALYS (deadpan): And a mutiny.

### SCENE s01097 | INT. CURLING CLUB - BAR - NIGHT
Detected names (may be incomplete or contain aliases): RAGS, ENGSTROM, TOBY, ADEKUNLE, LOLO, BEAUMONT
1 A ¶ Wood paneling.
2 A A dartboard.
3 A Brooms hung on pegs.
4 A Through the frosted glass, the ice gleams under floodlights.
5 A ¶ SKIP RAGNHILD "RAGS" ENGSTROM, 40s, tweed vest, nurses a ginger ale.
6 A Her third, TOBIAS "TOBY" ADEKUNLE, 30s, still in his team sweater, picks at a bowl of peanuts.
7 A Their lead, ELOISE "LOLO" BEAUMONT, 20s, shoes off, feet on a stool, scrolls her phone.
8 D RAGS: Lolo, put the phone down.
9 D LOLO: It's the final scores.
10 D RAGS: We lost.
11 D LOLO: By one stone.
12 D TOBY: By one stone, Rags. One.
13 D RAGS: Don't you start, Toby.
14 D TOBY: I'm just saying, if you'd called the hammer on the ninth end --
15 D RAGS: I called the hammer.
16 D TOBY: You called it late.
17 A ¶ Rags slams her glass on the bar.
18 A Lolo drops the phone.
19 A Toby freezes mid-peanut.
20 D RAGS: I called it when the ice told me to.
21 D LOLO: Rags, the ice doesn't talk.
22 D RAGS: It does if you listen.
23 A ¶ A silence.
24 A Toby slowly crunches a peanut.
25 A Lolo picks up her phone, slides it into her pocket.
26 A Rags unclenches her fist.
27 D RAGS [CONT'D] (quieter): We did well, Lolo.
28 D LOLO: We did.
29 D TOBY: We did great, Rags.
30 D RAGS: Don't suck up, Toby.
31 D TOBY: I'm sucking up with respect.
32 A ¶ Rags almost smiles.
33 A Lifts her glass.
34 D RAGS: To the ninth end.
35 D LOLO: To the ninth end.
36 D TOBY: To the hammer.
37 A ¶ They clink.
38 A Beyond the glass, the Zamboni hums across the ice, erasing everything.

### SCENE s01111 | INT. SURPRISE PARTY - APARTMENT LIVING ROOM - DARK - EVENING
Detected names (may be incomplete or contain aliases): BEA, LINDQVIST-ADE, COLM FITZGIBBON, ROZ, PELLEGRINO-OKON, YOSHIRO BAPTISTE, TIBBY, MORROW, DELIVERY GUY, ALL
1 A ¶ Balloons.
2 A A banner.
3 A A cake with too many candles.
4 A Five adults crouch behind furniture, whispering, trying not to giggle.
5 A ¶ BEATRIX "BEA" LINDQVIST-ADE, 40s, behind the couch with a noisemaker.
6 A COLM FITZGIBBON, 30s, behind the armchair holding a camera.
7 A ROSALIND "ROZ" PELLEGRINO-OKON, 50s, under the dining table with the cake.
8 A YOSHIRO BAPTISTE, 20s, crouched by the door, finger on the lights.
9 A And TIBERIUS "TIBBY" MORROW, 60s, hidden inside the coat closet.
10 D BEA (whispering): She's coming up the stairs.
11 D COLM (whispering): How do you know?
12 D BEA: I hear her keys.
13 D ROZ: She's got the wrong keys.
14 D YOSHIRO: Shh!
15 A ¶ The doorknob rattles.
16 A All five freeze.
17 A A key scrapes and fails.
18 A Another.
19 A A third.
20 D TIBBY (from the closet): Is it her?
21 D BEA: Quiet!
22 A ¶ The door swings open.
23 A A silhouette in the hall: a stranger in a delivery uniform, holding a pizza box.
24 D DELIVERY GUY: Uh. Hello?
25 A ¶ Yoshiro flips the lights.
26 A Everyone leaps up.
27 D ALL: Surprise!
28 A ¶ Roz pitches the cake into the air.
29 A Colm's flash goes off.
30 A Bea blows the noisemaker in the Delivery Guy's face.
31 A He yelps, the pizza flies, the cake lands on Tibby as he tumbles out of the closet.
32 A ¶ Silence.
33 A Frosting drips from Tibby's nose.
34 A The Delivery Guy stares at them all.
35 D DELIVERY GUY [CONT'D]: ...Does anyone here order a large pepperoni?
36 D BEA (weakly): Wrong apartment?
37 D DELIVERY GUY: Apparently.
38 A ¶ Tibby licks frosting from his lip.
39 D TIBBY: Well. I'll take the pizza.

### SCENE s00013 | EXT. SALT FLATS - ABANDONED EVAPORATION WORKS - DAY
Detected names (may be incomplete or contain aliases): SILAS WHITTAKER, CONNIE, REYES
1 A ¶ A white plain stretches to a white sky.
2 A Rotting wooden vats lie in rows like open coffins.
3 A Heat shimmers off the crust.
4 A ¶ SILAS WHITTAKER (50s, gray beard, duster bleached by sun) kneels beside a dead horse.
5 A He runs one hand along its neck and says nothing.
6 A ¶ Behind him, a shadow lengthens.
7 A He doesn't turn.
8 A ¶ CONSTANCE "CONNIE" REYES (30s, wide-brimmed hat, rifle across her back) stands twenty feet away on the crust.
9 A She holds a canteen by its strap.
10 D CONNIE: That your horse?
11 D SILAS: Was.
12 D CONNIE: Looks like the salt got her.
13 D SILAS: Looks like a bullet got her.
14 A ¶ She walks closer.
15 A Stops short of arm's reach.
16 A He rises, brushing his knees, and finally turns.
17 A His eyes go to the canteen.
18 A Hers go to his holster.
19 D CONNIE: I'll trade you water for a name.
20 D SILAS: I'd trade you a name for a mule.
21 D CONNIE: I don't have a mule.
22 D SILAS: Then you don't have a name worth the water.
23 A ¶ She almost smiles.
24 A He almost doesn't.
25 A The wind pulls at her hat brim.
26 A She tilts the canteen.
27 A Water slaps against the metal, loud in the silence.
28 D SILAS [CONT'D]: Don't wave that around.
29 D CONNIE: It's mine to wave.
30 A ¶ He takes a step.
31 A She does not move.
32 A He takes another.
33 A Her hand drifts back to the rifle sling.
34 D SILAS: Easy.
35 D CONNIE: You first.
36 A ¶ They stand with the dead horse between them and the white sky above.
37 A Neither one blinks.
38 D SILAS: You work for Dutch Halloran?
39 D CONNIE: Never heard of him.
40 D SILAS: That's a lie, and you tell it badly.
41 D CONNIE: Then I'm in good company.
42 A ¶ He nods slowly.
43 A Looks off toward a ridge on the horizon, a thin dark line.
44 D SILAS: He's coming, you know. He's got six men and a Gatling gun on a wagon.
45 D CONNIE: I know.
46 D SILAS: Then why are you standing here?
47 A ¶ She uncaps the canteen.
48 A Drinks.
49 A Wipes her mouth with the back of her wrist.
50 A Holds it out to him at arm's length, the way one offers food to a dog.
51 D CONNIE: Same reason as you.
52 A ¶ He takes it.
53 A Drinks long.
54 A The water runs down his beard.
55 A He hands it back.
56 D SILAS: He killed my brother.
57 D CONNIE: He killed my husband.
58 D SILAS: He burned my ranch.
59 D CONNIE: He took my land.
60 A ¶ They speak at once, the words overlapping, neither stopping for the other.
61 D SILAS: I came out here to die. ^ CONNIE I came out here to finish it.
62 A ¶ A beat.
63 A They look at each other, really look, for the first time.
64 D SILAS: Can you shoot that thing?
65 D CONNIE: Better than you can shoot that.
66 A ¶ He glances at his holster.
67 A Almost laughs.
68 D SILAS: What's your plan?
69 A ¶ She points past him at the nearest vat, a long wooden trough sunk in the crust.
70 D CONNIE: Wagon comes down the old cart road. Wheels sink in the brine. Horses panic.
71 D SILAS: And the Gatling?
72 D CONNIE: Pointed at the sky, if the wagon tips.
73 A ¶ He studies the vats.
74 A The road.
75 A The ridge.
76 A The long, long distance.
77 D SILAS: That's a lot of ifs.
78 D CONNIE: You got a better one?
79 A ¶ He doesn't.
80 A He pulls the revolver from his holster and checks the cylinder.
81 A Three rounds.
82 A He sighs.
83 D SILAS: Hand me a few.
84 A ¶ She digs in her coat.
85 A Pours a small handful of cartridges into his palm.
86 A He loads them one by one.
87 A ¶ On the ridge, a plume of dust rises.
88 A A glint of brass.
89 A The faint creak of wheels.
90 D CONNIE: Time to pick a vat.
91 A ¶ She walks away toward the trough.
92 A He lingers over the dead horse for one last moment, touches its mane, and follows.

### SCENE s01023 | INT. CRAB CANNERY - NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): PAULINA RUSSO, DESMOND WALCOTT, GUS, HAND
1 A ¶ Steel tables.
2 A Hoses.
3 A Steam rising from vats.
4 A Fluorescents buzz.
5 A Everything smells of brine and bleach.
6 A ¶ PAULINA RUSSO, 40s, shift lead, hairnet, white rubber boots, sprays down a conveyor belt.
7 A DESMOND WALCOTT, 20s, headphones around his neck, stacks crates.
8 A GUS, 60s, Paulina's oldest hand, wheels a pallet jack.
9 A ¶ The line is stopped.
10 A A quiet kind of peace.
11 D PAULINA (to all): Ten minutes, everybody. Breaker's being cranky.
12 D DESMOND: It's always cranky.
13 D PAULINA: Then it's consistent.
14 A ¶ Gus parks the jack.
15 A Eases onto an upturned bucket.
16 A Pulls a sandwich from his apron.
17 D GUS (to himself): Thirty-one years. Never once got used to the cold.
18 A ¶ Desmond laughs.
19 A Pulls a phone from his pocket.
20 D DESMOND: Gus, you want to see my niece? She just learned to whistle.
21 D GUS: Sure.
22 A ¶ Desmond shows him the screen.
23 A Gus squints.
24 A Smiles.
25 A The first real smile of the night.
26 A ¶ Paulina checks her clipboard.
27 A Hums.
28 A The steam curls around her.
29 D PAULINA (under her breath): Two cases short. Where did you go, little guys.
30 A ¶ From the live tank behind the line, a soft tap.
31 A Glass on glass.
32 A ¶ Nobody notices.
33 A The humming continues.
34 D DESMOND: She's three. She calls everything "doggy."
35 D GUS: Smart kid.
36 A ¶ Tap.
37 A Tap.
38 A Tap.
39 A Slower.
40 A ¶ Paulina looks up.
41 A The tank, a long glass rectangle of dark water, hides in the shadow beyond the last light.
42 D PAULINA (to Desmond): Did you top up the tank?
43 D DESMOND: Friday.
44 D PAULINA: Then who's tapping?
45 D DESMOND: Pipes. They knock.
46 A ¶ Gus has stopped chewing.
47 A He stares at the tank.
48 D GUS (quietly): Paulina.
49 D PAULINA: What?
50 D GUS: There's no water moving.
51 A ¶ She follows his gaze.
52 A The surface is perfectly flat.
53 A Black.
54 A Nothing disturbs it.
55 A ¶ Tap.
56 A ¶ The sound comes from inside.
57 D PAULINA (to herself): Okay. Okay.
58 A ¶ She walks toward the tank.
59 A Boots squelching.
60 A Desmond rises.
61 A Gus doesn't.
62 D PAULINA [CONT'D] (over her shoulder): Both of you, stay there.
63 A ¶ She reaches the glass.
64 A Wipes the condensation with her sleeve.
65 A ¶ Pressed against the inside of the glass is a HAND.
66 A A human hand.
67 A Pale, wrinkled, fingers splayed.
68 A ¶ Paulina stumbles back.
69 A Her clipboard clatters.
70 A ¶ Under the surface, a face drifts up.
71 A Eyes open.
72 A Wearing a hairnet.
73 A ¶ It's Gus's face.
74 A ¶ Paulina turns.
75 A Gus is still on his bucket.
76 A He lifts his sandwich.
77 A Smiles.
78 A Too wide.
79 D GUS: Ten minutes, you said.
80 A ¶ Desmond's phone slips from his hand.
81 A The screen lights the floor.
82 A The breaker clunks.
83 A ¶ All the fluorescents go out.

### SCENE s01088 | EXT. MANGROVE SWAMP - TIDAL FLAT - DAWN
Detected names (may be incomplete or contain aliases): BEE, CALLOWAY, BRAM OKONJO, CAPTAIN HALVARD SKOGLUND
1 A ¶ Roots like fingers.
2 A Grey mud.
3 A A capsized skiff on its side.
4 A Mosquitos in clouds.
5 A ¶ BIANCA "BEE" CALLOWAY, 30s, torn shirt, drags a water jug through the mud.
6 A BRAM OKONJO, 40s, one boot missing, limps behind her.
7 A Between them, a bundled shape on a stretcher of branches: CAPTAIN HALVARD SKOGLUND, 60s, eyes closed.
8 D BEE: Bram. Pull.
9 D BRAM: I'm pulling.
10 D BEE: You're limping.
11 D BRAM: I'm limping and pulling.
12 A ¶ She stops.
13 A Wipes her face.
14 A Squats by the captain.
15 A Puts two fingers at his neck.
16 D BEE: Cap. Cap, you in there?
17 A ¶ He stirs.
18 A Mumbles.
19 A Doesn't wake.
20 D BRAM: Tide's turning.
21 D BEE: I can see.
22 D BRAM: We have maybe ten minutes before the flat goes under.
23 A ¶ She stands.
24 A Looks at the skiff.
25 A Looks at the horizon where a thin line of silver crawls toward them.
26 D BEE: Leave the jug.
27 D BRAM: That's our water.
28 D BEE: And that's his life. Choose.
29 A ¶ Bram stares at her.
30 A Drops the jug.
31 A It sinks into the mud with a slow burp.
32 A He grabs the stretcher.
33 A She grabs the other end.
34 A They lift.
35 A They stumble.
36 A A root catches Bram's foot; he falls.
37 A The stretcher tilts.
38 A The captain groans.
39 D BEE [CONT'D]: Bram!
40 D BRAM: Go on without me.
41 D BEE: Not a chance.
42 A ¶ She sets the stretcher down.
43 A Hauls him up by the belt.
44 A He leans on her.
45 A Their breath rasps.
46 D BRAM: Bee. If I --
47 D BEE: You're not going to.
48 D BRAM: If I do.
49 D BEE: Don't.
50 A ¶ The silver line is closer.
51 A The mud begins to glisten.
52 A A bird shrieks from the roots.
53 D CAPTAIN HALVARD (eyes still shut): Boys. Girls. Hold your horses.
54 D BEE: Cap!
55 D CAPTAIN HALVARD: I can walk.
56 D BRAM: You can't.
57 D CAPTAIN HALVARD: I can crawl. Let me.
58 A ¶ He pushes himself off the stretcher.
59 A Falls to hands and knees.
60 A Starts to crawl.
61 A Bee and Bram watch him go, mud to the elbows.
62 D BEE (quiet): Stubborn old man.
63 D BRAM: He taught us.
64 A ¶ They follow.
65 A The water laps their ankles.
66 A The roots rise ahead like a gate.

### SCENE s01105 | EXT. BOMBED-OUT CINEMA - ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT FIONNUALA BRADY-ESCOBAR, SERGEANT IKENNA ABARA, JAMSHID TAVAKOLI
1 A ¶ Half a marquee hangs by its cables.
2 A The facade is gone; the screen stands bare and cracked like a tooth.
3 A Smoke drifts across a starless sky.
4 A Below, a city of broken lamps.
5 A ¶ LIEUTENANT FIONNUALA BRADY-ESCOBAR, 30s, short dark hair, torn sleeve, crouches behind a ventilation stack with a scoped rifle across her knees.
6 A The scar on her cheek catches the glow of distant fires.
7 A Beside her, SERGEANT IKENNA ABARA, 40s, thick-armed, bleeds slowly from a bandage on his thigh.
8 A Further back, behind a toppled projector, huddles a civilian in a grease-stained coat: MR. JAMSHID TAVAKOLI, 60s, a projectionist, spectacles cracked.
9 A ¶ She lifts the scope.
10 A He presses a hand to the bandage.
11 D IKENNA: Anything?
12 D FIONNUALA: Two on the street. One on the balcony opposite.
13 D IKENNA: Ours?
14 D FIONNUALA: No.
15 A ¶ She doesn't move.
16 A The balcony light flickers.
17 A Mr. Tavakoli shifts and a piece of masonry falls from the projector.
18 A She flinches.
19 A Ikenna grabs her sleeve.
20 D IKENNA: Easy.
21 D FIONNUALA: He's making noise.
22 D IKENNA: He's old.
23 D FIONNUALA: He's loud.
24 A ¶ Tavakoli raises both hands, a gesture of apology.
25 A She exhales.
26 A Lowers the rifle an inch.
27 D MR. TAVAKOLI (whispering): I show films here thirty years. I know every board in this roof.
28 D FIONNUALA: Then tell me which ones creak.
29 D MR. TAVAKOLI: All of them. Except those.
30 A ¶ He points to a line of beams near the edge, bare against the sky.
31 D FIONNUALA: Can we reach them?
32 D MR. TAVAKOLI: If you crawl.
33 A ¶ She nods at Ikenna.
34 A He grimaces, rolls onto his stomach, begins to inch toward the beams.
35 A Blood darkens the roof where he passes.
36 A ¶ She watches him go.
37 A Then, quietly, she pulls the old man close and speaks in his ear.
38 D FIONNUALA: When he reaches the end, you follow. Do not stop.
39 D MR. TAVAKOLI: And you?
40 D FIONNUALA: I stay.
41 A ¶ He starts to protest.
42 A Her eyes silence him.
43 A A distant shell whistles in.
44 A They duck.
45 A The projectionist clings to the screen's iron frame.
46 A ¶ Ikenna reaches the beams.
47 A Raises one hand: the signal.
48 A Tavakoli crawls after him, gray hair dusted white with plaster.
49 A ¶ Fionnuala rises into a crouch.
50 A Raises the rifle.
51 A The balcony light flares.
52 A She takes aim.
53 A ¶ Below, in the bare screen's reflection, a thousand flickers of fire wink like frames of a lost film.

### SCENE s01039 | INT. SUDS-N-DUDS LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): NADIA BELOV, TUCKER SHAW, MARISOL OYELOWO, WALTER DIBBLE
1 A ¶ Humming dryers, orange plastic chairs bolted to the floor, a vending machine selling single-serve detergent.
2 A A TV on a bracket plays the weather, muted.
3 A ¶ NADIA BELOV, 40s, scrubs under a parka, feeds quarters into a washer.
4 A Her shoes are still wet.
5 A TUCKER SHAW, 20s, in a hockey jersey, sits on a folding table with a cardboard cup of coffee, scrolling his phone.
6 A MARISOL OYELOWO, 30s, in a hoodie, dumps a bag of towels into the next machine.
7 D NADIA: Is this one broken?
8 D TUCKER: It eats quarters. But it works.
9 D NADIA: Great.
10 D MARISOL: Try hitting the side.
11 A ¶ Nadia hits the side.
12 A The washer coughs and starts.
13 D NADIA: Thanks.
14 D MARISOL: Everybody does it.
15 A ¶ Tucker sips.
16 A Looks at the TV.
17 A Snow, again.
18 D TUCKER: They said it'd stop by nine.
19 D MARISOL: They say a lot of things.
20 D NADIA: It's ten thirty.
21 D TUCKER: Then we're all in this together.
22 A ¶ A silence.
23 A The dryers hum on.
24 A ¶ The door chimes.
25 A WALTER DIBBLE, 80s, in pajama bottoms and a trench coat, shuffles in dragging a laundry bag like a body.
26 A He looks at the three of them, then at the machines, then at the sign.
27 D WALTER: Is there a machine that takes dollars?
28 D TUCKER: Just the change machine, sir.
29 D WALTER: It's out of order.
30 D MARISOL: It's been out of order for a year.
31 D NADIA: I have quarters.
32 D WALTER: I'd pay you back.
33 D NADIA: It's fine.
34 A ¶ She counts out eight quarters and hands them over.
35 A He holds them like a collection plate.
36 D WALTER: Bless you.
37 D TUCKER: You got somewhere to be?
38 D WALTER: Only here.
39 A ¶ He loads a machine.
40 A Closes the lid slowly, patiently, as if it were a casket.
41 A Starts it.
42 A The drum begins to turn.
43 D NADIA: Is your wife--
44 D WALTER: She's passed. Last spring. I never learned how.
45 D MARISOL: It's not hard.
46 D NADIA: It's not hard.
47 A ¶ They say it together, same moment, same tone.
48 A They look at each other.
49 A Smile.
50 A Tucker slides off the table.
51 D TUCKER: Hey, Walter. Come sit.
52 D WALTER: I'm all right.
53 D TUCKER: Come sit anyway.
54 A ¶ Walter hesitates.
55 A Then he takes the plastic chair beside Marisol.
56 A ¶ Nobody speaks.
57 A The machines turn.
58 A The snow keeps falling on the window.
59 A For a while, it's enough.

### SCENE s01112 | EXT. ICE-CAVE MOUTH - GLACIER - DAWN
Detected names (may be incomplete or contain aliases): NADIA, VOLKOV-ASANTE, NAT, BELL-TAKAHASHI, DESMOND OKONKWO-PARR
1 A ¶ A blue gash in a field of white.
2 A Wind scours the snow into long ripples.
3 A Three tiny figures stand at the lip of a frozen lake, backs to the cave.
4 A ¶ NADEZHDA "NADIA" VOLKOV-ASANTE, 40s, orange parka, iced eyelashes, drags a sled carrying a sleeping bag.
5 A Next to her, IGNATIUS "NAT" BELL-TAKAHASHI, 30s, hood drawn, gloves split at the fingertips, winds a rope around his waist.
6 A Dragging up the rear, DESMOND OKONKWO-PARR, 20s, lagging, hobbles on one swollen ankle.
7 D NADIA: Rest stop. Ten minutes.
8 D NAT: We don't have ten.
9 D NADIA: We have what we have.
10 A ¶ She drops the sled's handle.
11 A He kneels, checking the knot on the sleeping bag, while Desmond lowers himself onto his pack.
12 A Nat pulls out a thermos, takes a swallow, hands it to Desmond.
13 A Desmond drinks, hands it to Nadia, who sips and stares across the frozen lake at a ridge of dark rock.
14 D NADIA [CONT'D]: That's the pass.
15 D NAT: How far?
16 D NADIA: Six kilometers. Maybe seven.
17 D DESMOND (quietly): I can walk.
18 D NAT: You can't.
19 D DESMOND: I can crawl.
20 D NADIA: Nobody's crawling.
21 A ¶ She stands, tightens the sled's strap.
22 A Nat rises, unwinds the rope, ties one end to the sled and the other to Desmond's pack.
23 A Desmond opens his mouth to protest.
24 A Nat holds up a hand.
25 D NAT: You're the anchor. Don't argue.
26 D DESMOND: That's backwards.
27 D NAT: Humor me.
28 A ¶ Wind gusts, whipping powder across their faces.
29 A Nadia pulls up her hood, turns toward the pass, and leans into the haul line.
30 A The sled lurches.
31 A Nat falls in beside her.
32 A Desmond, tethered, drags his foot.
33 A ¶ They walk.
34 A No one speaks.
35 A Their shadows lengthen across the ice.

### SCENE s01118 | INT. LIGHTHOUSE KEEPER'S LOG ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR GWENDOLYN ADEBAYO-HARTWELL, HARBORMASTER
1 A ¶ Cramped.
2 A A circular desk.
3 A Ship's barometer, brass lamp, rows of leather-bound logbooks.
4 A Fog presses on the window.
5 A The foghorn sounds every ninety seconds.
6 A ¶ INSPECTOR GWENDOLYN ADEBAYO-HARTWELL, 50s, oilskin coat dripping on the planks, sits at the desk with a lamp and a stack of logbooks.
7 A She flips pages with a gloved hand, jots notes in a pocket pad, taps a pen against her teeth.
8 A The foghorn sounds.
9 A She does not flinch.
10 D GWENDOLYN (to the room): October ninth. "Light functioning. Visibility poor." October tenth. "Light functioning. Visibility poor." October eleventh.
11 A ¶ She stops.
12 A Runs a finger over the ink.
13 D GWENDOLYN [CONT'D]: "Light functioning. Visibility poor. Mr. Pellew did not return."
14 A ¶ She flips back.
15 A Forward.
16 A Back again.
17 D GWENDOLYN [CONT'D]: Three entries, same handwriting. Same ink. Same hour. But the first two were written by a man who is alive, and the third by a man who isn't.
18 A ¶ She lifts the lamp and holds the page to the flame.
19 A Behind the ink, faint, a second line shows through, written in a different hand and scratched out.
20 D GWENDOLYN [CONT'D] (reading, softly): "He did not fall."
21 A ¶ Her radio crackles on the desk.
22 A She snatches it up.
23 D HARBORMASTER [V.O.] (over the radio): Inspector? You got anything yet?
24 D GWENDOLYN: I have a log that lies, Harbormaster. And a keeper who's missing.
25 D HARBORMASTER [V.O.]: Pellew's boat washed up on the rocks. Empty.
26 D GWENDOLYN: Was the lamp lit?
27 D HARBORMASTER [V.O.]: Aye. All night.
28 D GWENDOLYN: Who lit it?
29 D HARBORMASTER [V.O.]: You tell me, Inspector. You're the one in the tower.
30 A ¶ She sets the radio down.
31 A The foghorn sounds.
32 A A floorboard above her creaks.
33 A She looks at the ceiling, at the spiral stair, and then at the pen in her hand.
34 A ¶ She rises, slips the log into her coat, and climbs.

### SCENE s01069 | EXT. AUTO SALVAGE YARD - CAR CRUSHER BAY - NIGHT
Detected names (may be incomplete or contain aliases): MAN, WOMAN, KID, NINA, ELI
1 A ¶ Towers of flattened cars.
2 A A hydraulic crusher squats at the end of a gravel lane, its steel jaws open like a mouth.
3 A A sodium lamp buzzes on a pole.
4 A ¶ A MAN in a dark jacket, 40s, slams the trunk of a black sedan shut.
5 A He wipes his hands on his pants.
6 A From the passenger side, a WOMAN in a leather coat, 30s, hurries around the car, hugging herself.
7 A ¶ At the office window, a KID, 17, in a hoodie, watches from behind a curtain.
8 A ¶ The man opens the sedan's back door.
9 A A heavy gym bag sits on the seat.
10 D WOMAN: Did you check the plates?
11 D MAN: Twice.
12 D WOMAN: Did you check the plates again?
13 D MAN: Nina. They're clean.
14 D WOMAN (softly): Don't say my name.
15 D MAN: Who's going to hear?
16 A ¶ She nods toward the office.
17 A The Kid has vanished from the window.
18 D MAN [CONT'D]: That's Terrence's nephew. He doesn't count.
19 D NINA: Everyone counts.
20 A ¶ The man hauls out the gym bag.
21 A It lands on the gravel with a clink.
22 A ¶ The office door opens.
23 A The Kid steps out, hands in pockets, walking slow.
24 D KID: You guys need the crusher?
25 D MAN: Yeah. For the sedan.
26 D KID: Papers?
27 D NINA: No papers.
28 D KID: No papers, no crusher. That's Terrence's rule.
29 D MAN: Terrence is a friend.
30 D KID: Terrence is in Phoenix.
31 A ¶ The man smiles, shows teeth.
32 A He steps closer.
33 A The Kid doesn't step back.
34 D MAN: Kid. What's your name?
35 D KID: Eli.
36 D MAN: Eli. Listen to me. A man left this car here. It's got to go.
37 D ELI: Then he can come back and fill out a form.
38 D NINA: Eli, we're running behind.
39 D ELI: Then you should've been on time.
40 A ¶ The man lunges, grabs Eli by the hoodie.
41 A Eli drops his phone, kicks the man's shin, and twists free.
42 A The man staggers into the sedan's open door.
43 A Nina grabs the gym bag and swings it into the man's back.
44 A All three go down in the gravel, tangled.
45 A ¶ Eli scrambles to the crusher's control panel.
46 A Slaps a lever.
47 A The jaws groan and begin to close.
48 D NINA: Eli! Don't!
49 D ELI (shouting): You said no papers!
50 A ¶ The man rolls away.
51 A The jaws descend on the sedan with a scream of metal.
52 A The gym bag, caught half under the door, is dragged in.
53 A ¶ Nina stares, mouth open.
54 A The man gets up slowly, face bleeding.
55 D MAN (to Eli, hoarse): You have any idea what was in that bag?
56 D ELI (dead calm): Terrence's rules.
57 A ¶ The crusher bottoms out.
58 A Glass bursts.
59 A A cloud of dust and loose banknotes swirls up through the sodium light, drifting down like snow.

### SCENE pd_sisters_2 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): KULIGIN, TUZENBACH, IRINA, CHEBUTIKIN, VERSHININ
1 D KULIGIN: Speaking’s a bit difficult, eh, Ivan Romanovitch!
2 A ¶ Pats him on the shoulder.
3 D KULIGIN: Good man! In vino veritas , the ancients used to say.
4 D TUZENBACH: They keep on asking me to get up a concert in aid of the sufferers.
5 D IRINA: As if one could do anything....
6 D TUZENBACH: It might be arranged, if necessary. In my opinion Maria Sergeyevna is an excellent pianist.
7 D KULIGIN: Yes, excellent!
8 D IRINA: She’s forgotten everything. She hasn’t played for three years... or four.
9 D TUZENBACH: In this town absolutely nobody understands music, not a soul except myself, but I do understand it, and assure you on my word of honour that Maria Sergeyevna plays excellently, almost with genius.
10 D KULIGIN: You are right, Baron, I’m awfully fond of Masha. She’s very fine.
11 D TUZENBACH: To be able to play so admirably and to realize at the same time that nobody, nobody can understand you!
12 A ¶ Sighs.
13 D KULIGIN: Yes.... But will it be quite all right for her to take part in a concert?
14 A ¶ Pause.
15 D KULIGIN: You see, I don’t know anything about it. Perhaps it will even be all to the good. Although I must admit that our Director is a good man, a very good man even, a very clever man, still he has such views.... Of course it isn’t his business but still, if you wish it, perhaps I’d better talk to him.
16 A ¶ CHEBUTIKIN takes a porcelain clock into his hands and examines it.
17 D VERSHININ: I got so dirty while the fire was on, I don’t look like anybody on earth.
18 A ¶ Pause.
19 D VERSHININ: Yesterday I happened to hear, casually, that they want to transfer our brigade to some distant place. Some said to Poland, others, to Chita.
20 D TUZENBACH: I heard so, too. Well, if it is so, the town will be quite empty.
21 D IRINA: And we’ll go away, too!
22 A ¶ Drops the clock which breaks to pieces.
23 D CHEBUTIKIN: To smithereens!
24 A ¶ A pause; everybody is pained and confused.
25 A ¶ Gathering up the pieces.
26 D KULIGIN: To smash such a valuable object--oh, Ivan Romanovitch, Ivan Romanovitch! A very bad mark for your misbehaviour!
27 D IRINA: That clock used to belong to our mother.
28 D CHEBUTIKIN: Perhaps.... To your mother, your mother. Perhaps I didn’t break it; it only looks as if I broke it. Perhaps we only think that we exist, when really we don’t. I don’t know anything, nobody knows anything.
29 A ¶ At the door.
30 D CHEBUTIKIN: What are you looking at? Natasha has a little romance with Protopopov, and you don’t see it.... There you sit and see nothing, and Natasha has a little romance with Protopovov....
31 A ¶ Sings.
32 D CHEBUTIKIN: Won’t you please accept this date....
33 A ¶ Exit.
34 D VERSHININ: Yes.
35 A ¶ Laughs.
36 D VERSHININ: How strange everything really is!
37 A ¶ Pause.
38 D VERSHININ: When the fire broke out, I hurried off home; when I get there I see the house is whole, uninjured, and in no danger, but my two girls are standing by the door in just their underclothes, their mother isn’t there, the crowd is excited, horses and dogs are running about, and the girls’ faces are so agitated, terrified, beseeching, and I don’t know what else. My heart was pained when I saw those faces. My God, I thought, what these girls will have to put up with if they live long! I caught them up and ran, and still kept on thinking the one thing: what they will have to live through in this world!
39 A ¶ Fire-alarm; a pause.
40 D VERSHININ: I come here and find their mother shouting and angry.
41 A ¶ MASHA enters with a pillow and sits on the sofa.
42 D VERSHININ: And when my girls were standing by the door in just their underclothes, and the street was red from the fire, there was a dreadful noise, and I thought that something of the sort used to happen many years ago when an enemy made a sudden attack, and looted, and burned.... And at the same time what a difference there really is between the present and the past! And when a little more time has gone by, in two or three hundred years perhaps, people will look at our present life with just the same fear, and the same contempt, and the whole past will seem clumsy and dull, and very uncomfortable, and strange. Oh, indeed, what a life there will be, what a life!
43 A ¶ Laughs.
44 D VERSHININ: Forgive me, I’ve dropped into philosophy again. Please let me continue. I do awfully want to philosophize, it’s just how I feel at present.
45 A ¶ Pause.

### SCENE pd_earnest_1 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): JACK, GWENDOLEN, LADY BRACKNELL
1 D JACK: You really love me, Gwendolen?
2 D GWENDOLEN: Passionately!
3 D JACK: Darling! You don’t know how happy you’ve made me.
4 D GWENDOLEN: My own Ernest!
5 D JACK: But you don’t really mean to say that you couldn’t love me if my name wasn’t Ernest?
6 D GWENDOLEN: But your name is Ernest.
7 D JACK: Yes, I know it is. But supposing it was something else? Do you mean to say you couldn’t love me then?
8 A ¶ Glibly.
9 D GWENDOLEN: Ah! that is clearly a metaphysical speculation, and like most metaphysical speculations has very little reference at all to the actual facts of real life, as we know them.
10 D JACK: Personally, darling, to speak quite candidly, I don’t much care about the name of Ernest . . . I don’t think the name suits me at all.
11 D GWENDOLEN: It suits you perfectly. It is a divine name. It has a music of its own. It produces vibrations.
12 D JACK: Well, really, Gwendolen, I must say that I think there are lots of other much nicer names. I think Jack, for instance, a charming name.
13 D GWENDOLEN: Jack? . . . No, there is very little music in the name Jack, if any at all, indeed. It does not thrill. It produces absolutely no vibrations . . . I have known several Jacks, and they all, without exception, were more than usually plain. Besides, Jack is a notorious domesticity for John! And I pity any woman who is married to a man called John. She would probably never be allowed to know the entrancing pleasure of a single moment’s solitude. The only really safe name is Ernest.
14 D JACK: Gwendolen, I must get christened at once—I mean we must get married at once. There is no time to be lost.
15 D GWENDOLEN: Married, Mr. Worthing?
16 A ¶ Astounded.
17 D JACK: Well . . . surely. You know that I love you, and you led me to believe, Miss Fairfax, that you were not absolutely indifferent to me.
18 D GWENDOLEN: I adore you. But you haven’t proposed to me yet. Nothing has been said at all about marriage. The subject has not even been touched on.
19 D JACK: Well . . . may I propose to you now?
20 D GWENDOLEN: I think it would be an admirable opportunity. And to spare you any possible disappointment, Mr. Worthing, I think it only fair to tell you quite frankly before-hand that I am fully determined to accept you.
21 D JACK: Gwendolen!
22 D GWENDOLEN: Yes, Mr. Worthing, what have you got to say to me?
23 D JACK: You know what I have got to say to you.
24 D GWENDOLEN: Yes, but you don’t say it.
25 D JACK: Gwendolen, will you marry me?
26 A ¶ Goes on his knees.
27 D GWENDOLEN: Of course I will, darling. How long you have been about it! I am afraid you have had very little experience in how to propose.
28 D JACK: My own one, I have never loved any one in the world but you.
29 D GWENDOLEN: Yes, but men often propose for practice. I know my brother Gerald does. All my girl-friends tell me so. What wonderfully blue eyes you have, Ernest! They are quite, quite, blue. I hope you will always look at me just like that, especially when there are other people present.
30 A ¶ Enter Lady Bracknell.
31 D LADY BRACKNELL: Mr. Worthing! Rise, sir, from this semi-recumbent posture. It is most indecorous.
32 D GWENDOLEN: Mamma!
33 A ¶ He tries to rise; she restrains him.
34 D GWENDOLEN: I must beg you to retire. This is no place for you. Besides, Mr. Worthing has not quite finished yet.
35 D LADY BRACKNELL: Finished what, may I ask?
36 D GWENDOLEN: I am engaged to Mr. Worthing, mamma.
37 A ¶ They rise together.
38 D LADY BRACKNELL: Pardon me, you are not engaged to any one. When you do become engaged to some one, I, or your father, should his health permit him, will inform you of the fact. An engagement should come on a young girl as a surprise, pleasant or unpleasant, as the case may be. It is hardly a matter that she could be allowed to arrange for herself . . . And now I have a few questions to put to you, Mr. Worthing. While I am making these inquiries, you, Gwendolen, will wait for me below in the carriage.
39 A ¶ Reproachfully.
40 D GWENDOLEN: Mamma!
41 D LADY BRACKNELL: In the carriage, Gwendolen!
42 A ¶ Gwendolen goes to the door.
43 A She and Jack blow kisses to each other behind Lady Bracknell’s back.
44 A Lady Bracknell looks vaguely about as if she could not understand what the noise was.
45 A Finally turns round.
46 D LADY BRACKNELL: Gwendolen, the carriage!
47 D GWENDOLEN: Yes, mamma.
48 A ¶ Goes out, looking back at Jack.

### SCENE s01037 | INT. ROTATING RESTAURANT - TOWER SUMMIT - NIGHT
Detected names (may be incomplete or contain aliases): ROZ KAPLAN, TREVOR DUNN, NEW GIRL, SUNNY
1 A ¶ A circular room on a slow turn.
2 A The city slides past the windows like a conveyor.
3 A White tablecloths, empty chairs, a pianist's bench with no pianist.
4 A ¶ ROZ KAPLAN, 50s, silver bob, red lipstick, sits at a corner table with a blueprint under her wine glass.
5 A Opposite her, TREVOR DUNN, 30s, hotel uniform, nervous hands.
6 A ¶ A NEW GIRL, 20s, denim jacket, backpack, slides into the third chair without being invited.
7 D NEW GIRL: Sorry I'm late. The elevator stopped at every floor.
8 D ROZ: It's a tourist elevator.
9 D NEW GIRL: It was a hostage situation.
10 D ROZ: You've got the codes?
11 D NEW GIRL: I've got the codes.
12 D TREVOR: Who is she?
13 D ROZ: Trevor, this is Sunny Lockwood. She's the one I told you about.
14 D SUNNY: Nice to meet you. I'm the one with the thumbs.
15 D TREVOR: The thumbs?
16 D SUNNY: Locksmith's daughter. Four generations of thumbs.
17 D ROZ: She's good. She's very good. She's also nineteen.
18 D TREVOR: Twenty-one.
19 D SUNNY: Twenty. Don't lie for me.
20 D ROZ: Let's start. The vault is on sixty-one, under the observation deck. Every ninety minutes the restaurant makes a full revolution. We have exactly four minutes where the north camera faces the wall.
21 D TREVOR: Because of the rotation.
22 D ROZ: Because of the rotation. Sunny takes the first lock. I take the second. Trevor, you stay at the maitre d' stand and pour wine.
23 D TREVOR: I can pour wine.
24 D ROZ: You can pour wine badly. That's all anyone expects.
25 D SUNNY: What's the haul?
26 D ROZ: Eleven million. Bearer bonds. In a briefcase that looks like a briefcase.
27 D SUNNY: Eleven's good. What's my cut?
28 D ROZ: Two.
29 D SUNNY: Three.
30 D ROZ: Two and a half.
31 D SUNNY: She drives a hard bargain.
32 D TREVOR: She who?
33 D SUNNY: Roz. It's a figure of speech. I'm talking about Roz.
34 D ROZ: I know who you mean.
35 D SUNNY: She counts every penny.
36 D ROZ: She buys every drink. Shut up and listen.
37 A ¶ Trevor pours wine for no one.
38 A The glass fills.
39 A He sets the bottle down too hard.
40 D ROZ [CONT'D]: After the second lock, there's a pneumatic tube. Documents only. We use it to send the bonds down to the kitchen.
41 D TREVOR: They go down by tube.
42 D ROZ: They go down by tube. At the kitchen, Marguerite takes them in a casserole dish.
43 D SUNNY: Who's Marguerite?
44 D ROZ: My sister.
45 D SUNNY: You have a sister?
46 D ROZ: Everyone has a sister.
47 D TREVOR: I don't.
48 D ROZ: Then you're lucky.
49 D SUNNY: What about security?
50 D ROZ: Two guards. One reads novels. The other sleeps. We tested them for six weeks.
51 D SUNNY: Six weeks of watching a man read a novel.
52 D ROZ: It was a Dickens.
53 D SUNNY: Which?
54 D ROZ: Bleak House.
55 D SUNNY (laughing): Oh, I like her.
56 D TREVOR: Who?
57 D SUNNY: Roz. You keep asking.
58 D ROZ: Pay attention. Revolution starts at eleven forty. We're in position by eleven thirty. Questions?
59 D TREVOR: What if the guard doesn't sleep?
60 D ROZ: Then I buy him a drink.
61 D SUNNY: What if he doesn't drink?
62 D ROZ: Everyone drinks, sweetheart.
63 D SUNNY: What if the vault door is a different model?
64 D ROZ: It isn't.
65 D SUNNY: What if it is?
66 D ROZ: Then you'll earn your three.
67 D SUNNY (grinning): Three?
68 D ROZ: Two and a half. Don't push.
69 A ¶ The room turns.
70 A The city lights drift past, one landmark after another.
71 D TREVOR: It's a little beautiful, actually.
72 D ROZ: It's a job, Trevor.
73 D TREVOR: Can it be both?
74 D ROZ: No.
75 A ¶ Sunny lifts her glass.
76 A Roz clinks it.
77 A Trevor, last, doesn't quite reach.

### SCENE s00017 | EXT. HOT-AIR BALLOON BASKET - 400 FEET UP - DAY
Detected names (may be incomplete or contain aliases): GLORIA PENDERGAST, WINNIE OKONKWO-HART
1 A ¶ A wicker box.
2 A A burner.
3 A A county fair shrunk to a quilt far below.
4 A ¶ GLORIA PENDERGAST (60s, sun visor, clipboard) stands at one wall.
5 A Beside her, WINNIE OKONKWO-HART (20s, borrowed sweater, white knuckles on the rope).
6 A ¶ Gloria cups her hands and bellows over the side.
7 D GLORIA: Welcome, everyone! Enjoy the view!
8 A ¶ Nobody below hears.
9 A A cow looks up.
10 D WINNIE: Why are we shouting?
11 D GLORIA: Tradition.
12 A ¶ Winnie closes her eyes.
13 A The basket tilts.
14 A She opens them.
15 D WINNIE (to herself): Don't look down. Don't look down.
16 A ¶ Gloria taps her clipboard, squints at a dial, and mutters.
17 D GLORIA (to herself): Pilot never said it'd do that.
18 D WINNIE: Do what?
19 D GLORIA: Nothing. Everybody smile for the camera!
20 A ¶ There is no camera.
21 A Winnie slowly forces a smile anyway.
22 A Gloria hands her the clipboard.
23 D GLORIA [CONT'D]: Hold this. And whatever you do, don't let go of her.
24 D WINNIE: Of who?
25 A ¶ Gloria points at the burner.
26 A It hisses.

### SCENE s01071 | INT. LAMPLIGHTER'S WORKSHOP - DAWN
Detected names (may be incomplete or contain aliases): ADELAIDE PRYCE, TOBIAS WREN, BOY
1 A ¶ 1887.
2 A London.
3 A Brass tools.
4 A Oil cans.
5 A A cold stove.
6 A ¶ MRS. ADELAIDE PRYCE, 60s, black bombazine, stands in the doorway.
7 A Does not sit.
8 A Gloves stay on.
9 A ¶ Across the bench: TOBIAS WREN, 60s, lamplighter.
10 A Wick scissors in hand.
11 A He trims nothing.
12 A ¶ Silence.
13 A A kettle ticks as it cools.
14 D ADELAIDE: You kept the shop.
15 D TOBIAS: Rent's paid.
16 A ¶ She touches a lamp on the shelf.
17 A Dusts her glove on it.
18 A Studies the smear.
19 D ADELAIDE: Not by much, I'd say.
20 A ¶ He sets the scissors down.
21 A Picks them up again.
22 D TOBIAS: You came a long way.
23 D ADELAIDE: The cab was warm.
24 A ¶ A bell clangs in the street.
25 A A boy's voice, muffled through the wall.
26 D BOY [O.S.]: Lamps, Mr. Wren! Gas is on at Fenchurch!
27 A ¶ Tobias does not turn.
28 A Adelaide watches him not turn.
29 D ADELAIDE: Your boy?
30 D TOBIAS: Hired.
31 D ADELAIDE: He shouts like his mother.
32 A ¶ Tobias's jaw works.
33 A He crosses to the stove.
34 A Opens it.
35 A Closes it.
36 A Nothing inside.
37 D TOBIAS: Tea?
38 D ADELAIDE: No.
39 A ¶ She sits.
40 A Finally.
41 A The chair creaks.
42 A He looks at the chair, then at her gloves.
43 D TOBIAS: Take those off. You'll boil.
44 D ADELAIDE: It's November.
45 D TOBIAS: Still.
46 A ¶ A long beat.
47 A She pulls one finger loose.
48 A Stops.
49 A Pushes it back.
50 D ADELAIDE: I said what I came to say. In the letter.
51 D TOBIAS: I burned the letter.
52 D ADELAIDE: Then you know.
53 D TOBIAS: I know.
54 A ¶ The boy shouts again, further off.
55 A Fainter.
56 D BOY [O.S.]: Lamps!
57 A ¶ Adelaide rises.
58 A Smooths her skirt twice.
59 A Crosses to the door.
60 A Stops with her back to him.
61 D ADELAIDE: Light one for me. On Fenchurch.
62 D TOBIAS: It's lit.
63 D ADELAIDE: Then light it again.
64 A ¶ She leaves.
65 A The bell over the door swings.
66 A Tobias takes down the dusty lamp.
67 A Wipes the smear with his sleeve.
68 A Carefully.

### SCENE s00005 | INT. FUNICULAR CAR - ALPINE CLIMB - NIGHT
Detected names (may be incomplete or contain aliases): SABINE LACROIX, TEO, BIANCHI, THE MAN IN GRAY, OPERATOR, HALVARD
1 A ¶ A glass cabin crawls up a mountain in the dark, a cable humming overhead and the lights of a casino resort burning at the summit like a held breath.
2 A ¶ SABINE LACROIX (30s, black gloves, a champagne flute she hasn't touched) sits with her back to the glass.
3 A Across from her TEODORO "TEO" BIANCHI (40s, bow tie loose, a briefcase cuffed to his wrist) stares at the floor.
4 A A figure in a gray coat leans in the corner, face lost in the shadow of a hat: THE MAN IN GRAY.
5 A ¶ From a speaker above the door, a bored VOICE of the operator drones through the static.
6 D OPERATOR [V.O.]: Next stop, Summit Station. Please remain seated until the car has come to a complete halt.
7 D SABINE: Fourteen minutes. The vault door cycles at the quarter hour. Teo takes the case through the service lift, I take the lobby, and our friend in gray makes the cameras blink.
8 D TEO: You say that like it's simple.
9 D SABINE: It is simple. It's only terrifying.
10 D THE MAN IN GRAY: My cameras blink for ninety seconds. Not ninety-one.
11 D SABINE: Then we move in eighty.
12 D TEO: And if the guard on the service lift is the new one? The one who doesn't take bribes?
13 D SABINE: Then Teo recites the wine list until he cries.
14 D TEO: That is not funny.
15 D THE MAN IN GRAY: Halvard.
16 D SABINE: What?
17 D HALVARD: My name. If we're doing this, you should have it. Halvard.
18 D SABINE: Halvard. Fine. Eighty seconds, Halvard.
19 D OPERATOR [V.O.]: Summit Station in one minute.
20 D TEO: One minute.
21 D SABINE: Breathe, Teo.
22 D HALVARD: Gloves on.

### SCENE s01117 | INT. FARMHOUSE KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): BABCIA, KOWALCZYK-EZE, FELIX DELACROIX-ADEYEMI
1 A ¶ A big scarred table.
2 A Copper pots on hooks.
3 A A wood stove ticking.
4 A Through the window, mist lies low over a field of frosted stubble.
5 A ¶ GRANDMOTHER AGNIESZKA "BABCIA" KOWALCZYK-EZE, 70s, in a faded housedress, stands at the stove stirring a pot of porridge.
6 A Her grandson FELIX DELACROIX-ADEYEMI, 11, sits at the table in pajamas, chin on his folded arms.
7 A He watches her back with the stubborn patience of a boy who has a question.
8 D FELIX: Babcia.
9 D BABCIA: Hm.
10 D FELIX: Why did Mama leave?
11 A ¶ Babcia's spoon stops.
12 A Resumes.
13 A She doesn't turn.
14 A Steam curls around her shoulders.
15 A She adds a pinch of salt, tastes, adds another.
16 D BABCIA: Eat first.
17 D FELIX: I'm not hungry.
18 D BABCIA: You will be.
19 A ¶ She ladles porridge into a chipped bowl.
20 A Brings it to the table.
21 A Sets it before him with a spoon.
22 A Smooths his hair with one flour-dusted hand.
23 A He leans into it, then catches himself and pulls away.
24 A She sits across from him with a groan, folds her hands.
25 D BABCIA [CONT'D]: Your mother wanted a different life.
26 D FELIX: Different from what?
27 D BABCIA: From this.
28 A ¶ She gestures at the kitchen, the stove, the window.
29 A Felix looks at each in turn.
30 A He picks up the spoon and stirs the porridge without eating.
31 D FELIX: Is it that bad?
32 D BABCIA: Not to me.
33 D FELIX: Is it bad to you?
34 D BABCIA (a long pause): No, Felix. It is not bad.
35 A ¶ He eats a bite.
36 A Then another.
37 A She watches.
38 A The stove ticks.
39 A A rooster crows somewhere in the mist.
40 D FELIX: Babcia?
41 D BABCIA: Yes, my little bird?
42 D FELIX: Will she come back?
43 A ¶ Babcia reaches across the table and covers his hand with her own.
44 A Her knuckles are swollen, her skin like old paper.
45 A He turns his palm up and holds on.
46 D BABCIA: Every spring the swallows go away, and every spring they return. Nobody tells them to. They only remember where the barn is.
47 D FELIX: That's not an answer.
48 D BABCIA: No. It isn't.
49 A ¶ She smiles, tired and tender.
50 A He smiles back, small.
51 A Outside, the mist begins to lift, and the first gold light touches the frost.

### SCENE s00006 | EXT. TORTOISE MARKET - GIANT SHELL - DAWN
Detected names (may be incomplete or contain aliases): MAEVE THORNWICK, KIT, DOMINIC ASHFORD, LADY ISOLDE, OLD PERRIN
1 A ¶ A colossal tortoise, patient as a hill, plods across a salt flat.
2 A On its domed shell, a market of striped awnings and lanterns sways to each slow step.
3 A ¶ Five merchants cluster at the crest.
4 A MAEVE THORNWICK (50s, spice-seller, apron stained saffron).
5 A Her apprentice KIT (teens, wiry, a pouch of glass beads).
6 A Rival glassblower DOMINIC ASHFORD (40s, sooty, barrel-chested).
7 A Cloth-weaver LADY ISOLDE (60s, veil of spun silver).
8 A And the market's crier, OLD PERRIN (80s, a hand bell).
9 A ¶ The ground trembles.
10 A The tortoise slows.
11 D MAEVE (to everyone): Hold your wares! She's stopping!
12 D PERRIN (ringing the bell): Stopping! Stopping!
13 D KIT (to Maeve): Is she sick?
14 D MAEVE: She's listening. Quiet now.
15 D DOMINIC (muttering): Last time she stopped, we lost half the lanterns.
16 D ISOLDE (to Dominic): Then keep your mouth shut, and perhaps we keep the other half.
17 D DOMINIC (to himself): Old witch.
18 D ISOLDE: I heard that.
19 A ¶ A deep groan rolls through the shell.
20 A Crates slide.
21 A A lantern shatters.
22 D PERRIN (to everyone, louder): Brace! Brace!
23 D KIT (to himself): Don't fall, don't fall, don't fall.
24 D MAEVE: Everyone, hands on the rails! Now!
25 A ¶ The tortoise rises on its legs, lifting the whole market toward the sky.

### SCENE s01050 | INT. CAR WASH TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS FERRERA
1 A ¶ Dark.
2 A Foam sluices over the windshield.
3 A Spinning brushes.
4 A Sodium light bleeds through soap in slow orange waves.
5 A ¶ ODALYS FERRERA, 40s, sits behind the wheel of a dented sedan, both hands on ten and two.
6 A Funeral dress.
7 A Hair still pinned.
8 D ODALYS [V.O.]: Forty-one years. He never once washed the car.
9 A ¶ The brushes slap the roof.
10 A She doesn't flinch.
11 D ODALYS [V.O., CONT'D]: Said it would just get dirty again.
12 A ¶ She switches off the radio.
13 A The tunnel roars.
14 D ODALYS [V.O., CONT'D]: So I let it.
15 A ¶ Rinse arches fire.
16 A Water drums the glass.
17 A She leans her forehead on the wheel.
18 D ODALYS [V.O., CONT'D]: Now I'm paying six dollars to sit in here.
19 A ¶ The dryer blasts.
20 A The car shudders.
21 A She starts laughing.
22 A Then she stops.
23 A ¶ She puts the car in drive.
24 A Rolls into the light.

### SCENE s01114 | INT. HOSPITAL STAIRWELL - LANDING BETWEEN FLOORS - 3 A.M.
Detected names (may be incomplete or contain aliases): ANSELMO KWAKU-REYNOLDS, OPERATOR
1 A ¶ Concrete steps.
2 A A humming exit sign.
3 A A window onto a dark parking structure.
4 A A vending machine glows at the landing.
5 A ¶ DR. ANSELMO KWAKU-REYNOLDS, 40s, scrubs, paper hat crumpled in his fist, sits on the steps with his head against the wall.
6 A A phone rests on his knee, speaker on.
7 D OPERATOR [V.O.] (distant, tired): Cardiology to Dr. Kwaku-Reynolds. Please call extension four-four-one-two.
8 D ANSELMO (to the phone): I'm on a break.
9 D OPERATOR [V.O.]: Doctor, they said it's urgent.
10 D ANSELMO: It's always urgent.
11 A ¶ He turns the phone face down on the step.
12 A The voice continues in muffled bursts.
13 A He lets it.
14 D ANSELMO [CONT'D] (to himself, steady): Forty-one patients on the unit. Three discharges at eight. Two transfers at noon. One bed that nobody gets until I sign off on a chart I haven't finished. And I'm sitting on a stair.
15 A ¶ He laughs, quietly.
16 A Wipes a hand over his face.
17 D ANSELMO [CONT'D]: When I was a student, an old attending told me: "A doctor is a man who fixes what he can and carries what he can't." I thought it was poetry.
18 A ¶ A pause.
19 A The vending machine hums.
20 D ANSELMO [CONT'D]: It's a weight limit.
21 A ¶ He stands, brushes off his scrubs, flattens the paper hat, puts it on.
22 A Picks up the phone.
23 D ANSELMO [CONT'D] (into the phone): This is Kwaku-Reynolds. Coming up.
24 D OPERATOR [V.O.]: Thank you, Doctor.
25 A ¶ He pockets the phone and climbs.

### SCENE s01073 | INT. COUNTY COURTHOUSE - LOADING DOCK - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY NADIA BRENNAN, ATTORNEY ELI MORROW, JUDGE OKONKWO-REYES, DEPUTY HALE
1 A ¶ Concrete.
2 A Rolling carts.
3 A Evidence boxes stacked to the ceiling.
4 A A freight elevator groans.
5 A ¶ ATTORNEY NADIA BRENNAN, 30s, sharp suit, sneakers, drags a box off a cart.
6 A ATTORNEY ELI MORROW, 50s, rumpled, waits with a clipboard.
7 A Opposing counsel.
8 A Neither smiles.
9 D ELI: You're late.
10 D NADIA: Your clerk lost the key.
11 D ELI: She never loses keys.
12 D NADIA: She lost this one.
13 A ¶ She pops the lid.
14 A Inside: a ledger, water-stained.
15 A Eli goes still.
16 D ELI: That's not on the inventory.
17 D NADIA: It is now.
18 A ¶ JUDGE OKONKWO-REYES, 60s, robe over a windbreaker, appears at the elevator door.
19 A Cigarette unlit between her fingers.
20 A Nadia and Eli straighten.
21 D JUDGE OKONKWO-REYES: Counselors. Tell me why a sealed ledger is sitting on a dock.
22 D ELI: Your Honor, she tampered with a chain of custody.
23 D NADIA: He moved it. I found it.
24 D JUDGE OKONKWO-REYES: She found it. He moved it. Wonderful.
25 A ¶ Eli lunges for the ledger.
26 A Nadia jerks it away.
27 A Boxes topple.
28 A A bailiff, DEPUTY HALE, 20s, bursts in from the stairwell, hand on holster.
29 D DEPUTY HALE: Freeze! Everybody!
30 A ¶ All three freeze.
31 A Eli with one hand out.
32 A Nadia clutching the ledger.
33 A The Judge, calm, lights her cigarette.
34 D JUDGE OKONKWO-REYES: Deputy. Stand down. They're lawyers. They only bite on the record.
35 A ¶ Hale lowers his hand.
36 A Exhales.
37 D JUDGE OKONKWO-REYES [CONT'D]: Give me the ledger. Both of you. My chambers, ten minutes.
38 A ¶ Nadia hands it over.
39 A Eli sags against a cart.
40 D ELI: She'll bury us.
41 D NADIA: Not her. She's deciding who gets to dig.
42 A ¶ The elevator doors close on the Judge.
43 A Deputy Hale picks up a fallen box.
44 A Sets it carefully back on the stack.
