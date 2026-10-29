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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00029.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05191 | INT. HOLLOWAY KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): DENISE HOLLOWAY, GAIL PRUITT, RAJ MEHTA
1 A ¶ Pitch black.
2 A A candle FLARES to life.
3 A Behind it DENISE HOLLOWAY, 40s, holds a lighter and a very large frozen turkey in the crook of one arm.
4 A At the island GAIL PRUITT, 50s, her sister-in-law, squints at a dead tablet.
5 A The fridge hums its last breath and stops.
6 D DENISE: Okay. Nobody panic. The turkey has eleven hours of cold left in it.
7 D GAIL: It's a bird Denise not a battery.
8 A ¶ CLOSE ON the oven clock.
9 A Blinking nothing.
10 A Dead.
11 A ¶ ANGLE ON the back door.
12 A It opens and DR. RAJ MEHTA, 50s, neighbour and a gastroenterologist, steps in holding a head torch and a casserole dish he has clearly been carrying out of habit.
13 D RAJ: Whole street is out. Transformer. I've triaged the Hendersons they're stable but the Hendersons are always stable.
14 D DENISE: Raj you can't just walk in.
15 D RAJ: Door was open. Clinically speaking that's an invitation.
16 A ¶ Gail stands to hug Denise and knocks the candle which tips toward a stack of the takeaway menus and Denise lunges with the turkey while Raj swings the torch beam across the room catching the cat on top of the cupboard and the cat leaps and lands in the sink and the tap goes off like a gun because the pressure pump has died.
17 A ¶ WE SEE the flame lick the first menu.
18 D DENISE: Fire fire fire
19 D GAIL: Smother it!
20 D DENISE: With what
21 A ¶ Gail points at the turkey.
22 A Denise looks at the turkey.
23 A Raj is already pouring the casserole's sauce over the flame, which hisses out.
24 A Silence.
25 A Smoke curls.
26 D DENISE [CONT'D]: That was lasagne.
27 D RAJ: It was a sacrifice.
28 A ¶ INSERT - the charred menu, "Golden Wok" still legible.
29 A ¶ BACK TO SCENE
30 A ¶ Gail sits heavily.
31 A Denise sits beside her.
32 A Raj stays standing, torch under his chin like a campfire storyteller.
33 D DENISE: She said she'd call about Christmas.
34 D GAIL: I was going to say that. ^ DENISE Also thanks for the lasagne.
35 D RAJ (to the dark): Seventeen years of practice and I have never once saved a menu.
36 A ¶ The lights come ON.
37 A Fridge shudders.
38 A Oven clock flashes 12:00.
39 A They all look up at it like a miracle.
40 D GAIL: Well.
41 D DENISE: Well.
42 A ¶ The turkey, forgotten, slides out of her arm and hits the floor with a THUD.

### SCENE s05192 | EXT. DUSTY MAIN STREET - DAY
Detected names (may be incomplete or contain aliases): COAL, PIKE, JUNIPER, CORBIN, SAM
1 A ¶ Sun-bleached false-front buildings.
2 A Handmade signs: NO COAL, NO FUTURE.
3 A A crowd of thirty blocks the doors of the Territorial Mining Bureau.
4 A A waiter on the saloon porch watches with a tray of untouched beer.
5 A Two teenagers on a hitching rail film it all on a phone.
6 A A mule brays.
7 A ¶ Sheriff Amos Pike, 50s, weathered, tin star, wide stance, stands on the steps.
8 A Beside him Deputy Lucy Ferris, 20s, nervous, thumbs hooked in her belt.
9 A ¶ At the front of the crowd, Juniper Reyes, 30s, sun-browned, in a canvas duster painted with a dying river.
10 A Next to Juniper, Sam, early 20s, they/them, buzzcut and bandanna, holding the end of a chain that runs through the Bureau's door handles.
11 A Behind them an old rancher, Walt Dunmore, 60s, hat in hands, and Corbin Hale, 40s, in an expensive suit, mine agent, sweating through his collar.
12 D PIKE: Break it up. Ten seconds.
13 D JUNIPER: You don't have ten seconds of water left in this county, Sheriff.
14 D CORBIN: Arrest them. All of them.
15 D SAM: Come try.
16 A ¶ Ferris steps forward.
17 A Walt grabs her arm, she shakes him loose, Corbin shoves Walt, and then Juniper and Corbin go at each other, fists and hats, while the crowd roars and the teenagers whoop.
18 A Sam hauls the chain tight.
19 A Pike fires into the air.
20 A ¶ BANG.
21 A ¶ They all freeze.
22 A The mule stops braying.
23 A The waiter drops the tray.
24 D PIKE: Now.
25 A ¶ Quiet.
26 A Sam lets the chain go slack.
27 A Juniper wipes blood from a lip and laughs.
28 D JUNIPER: He means it.
29 A ¶ The crowd scatters, slow, defeated, then regroups across the street.
30 A Sam sits in the dirt.
31 A They look at the sky.
32 D SAM: Still no rain.

### SCENE s05193 | EXT. CITY HALL PLAZA - DAY
Detected names (may be incomplete or contain aliases): GORDON, TERRENCE
1 A ¶ A climate march, mid-afternoon.
2 A Banners.
3 A Drums.
4 A A hundred people sitting in a slow circle on the stone.
5 A Overhead, a sky the colour of old dishwater.
6 A ¶ A kid in a polar bear costume walks a cardboard iceberg through the crowd.
7 A A woman with a stroller hands out oat milk.
8 A A dog in a tiny "Fossil Free" vest sniffs the leg of a bench.
9 A ¶ On the bench: Terrence Bell, 40s, rumpled trench coat, a protest sign under his arm that says nothing at all.
10 A Blank cardboard.
11 A ¶ A man sits down beside him.
12 A Gordon Achebe, 50s, expensive jacket pretending to be cheap.
13 A He holds a thermos.
14 A ¶ Neither looks at the other.
15 D GORDON: Nice turnout.
16 D TERRENCE: Good cover.
17 D GORDON: That's what it's for.
18 A ¶ Terrence tilts the sign so the back is visible.
19 A A taped floor plan of the building behind them.
20 A Gordon glances, looks away.
21 D GORDON [CONT'D]: You added the east stairwell.
22 D TERRENCE: It's the only one without a sensor.
23 D GORDON: I heard they installed one last week.
24 D TERRENCE: You heard wrong. He lied to you.
25 D GORDON: Who?
26 D TERRENCE: The contractor.
27 A ¶ A drum line starts up.
28 A The crowd chants something about carbon.
29 A A child shrieks with delight.
30 D GORDON: He's my cousin.
31 D TERRENCE: Then he lied to you. Family does.
32 A ¶ A pause.
33 A Gordon unscrews the thermos.
34 A Pours.
35 A Offers a cup.
36 A Terrence takes it.
37 D GORDON: It's tea.
38 D TERRENCE: I know. I can smell the cardamom.
39 D GORDON: My wife's.
40 D TERRENCE: She know what you're doing?
41 D GORDON: She thinks I'm at a rally.
42 D TERRENCE: You are at a rally.
43 D GORDON: Fair.
44 A ¶ The polar bear kid walks by.
45 A Terrence nods at him.
46 A The kid nods back, very seriously.
47 D TERRENCE: You ever think about how many people here actually believe it?
48 D GORDON: All of them.
49 D TERRENCE: All of them.
50 D GORDON: That's why they sit like that. It's a thing you can only do if you believe.
51 D TERRENCE: And us?
52 D GORDON: We believe in a safe in a basement on the fourth floor.
53 A ¶ Terrence laughs, quietly, into the cup.
54 A ¶ The dog trots over, sits at their feet, looks up.
55 A Gordon breaks a biscuit from his pocket in half.
56 A Gives half to the dog.
57 A Eats the other.
58 D GORDON [CONT'D]: Nine o'clock.
59 D TERRENCE: Nine.
60 D GORDON: Mayor's dinner. Everyone with a badge will be at it.
61 D TERRENCE: And the protesters?
62 D GORDON: Still sitting. They'll sit until midnight.
63 D TERRENCE: Good people.
64 D GORDON: Good enough to be useful.
65 A ¶ Terrence says nothing.
66 A He looks at the circle of bodies on the stone.
67 A He looks at his blank sign.
68 A ¶ This is the last time they will speak before the building.
69 D TERRENCE: You'll take the stairwell.
70 D GORDON: You'll take the elevator.
71 D TERRENCE: It's loud.
72 D GORDON: That's the point.
73 A ¶ A woman with a megaphone climbs onto a plinth.
74 A The crowd quiets.
75 A She begins to read names of drowned towns.
76 A ¶ They listen.
77 A Both of them.
78 A Longer than they planned to.
79 A ¶ Gordon stands.
80 A Screws the lid on the thermos.
81 A Pats Terrence's shoulder, once, a stranger's courtesy.
82 D GORDON [CONT'D]: Don't be late.
83 D TERRENCE: I'm never late.
84 A ¶ Gordon walks into the crowd.
85 A A teenager hands him a flyer.
86 A He takes it.
87 A Folds it.
88 A Pockets it.
89 A ¶ Terrence stays on the bench.
90 A Turns the sign face out.
91 A Blank.
92 A Holds it up with everyone else.
93 A ¶ The woman reads on.

### SCENE s05194 | EXT. FISHING BOAT "MARGARET JEAN" - DAWN
Detected names (may be incomplete or contain aliases): NELL, TOBY, ROSALIND, OWEN
1 A ¶ grey. flat. the engine ticking over.
2 A ¶ NELL, 30s, sits on a bait crate scrolling a phone.
3 A Her phone.
4 A No signal.
5 A Her brother TOBY, 30s, coils rope by the winch while their mother ROSALIND, 60s, leans in the wheelhouse door with a mug, and their dad's old deckhand, a man in a yellow slicker none of them have met before, stands at the rail.
6 A ¶ Silence.
7 D NELL: so who's he again
8 D TOBY: dad's guy. from before.
9 D ROSALIND: Nobody calls me back about the boat, and then somebody turns up.
10 D STRANGER: I'm just here for the nets. Don't mind me.
11 A ¶ Rain.
12 A Light.
13 A Then more of it.
14 D NELL: we're not selling by the way
15 D TOBY: no one said selling
16 D NELL: mum said selling
17 D ROSALIND: I said "if".
18 A ¶ Toby drops the rope, Nell stands, Rosalind sets down her mug on the winch and the stranger takes one step back, all of them tense in the little space between the net and the rail and the thing nobody's saying.
19 A ¶ Nothing.
20 D STRANGER: Look, I'm Owen. Owen Pruett. Your dad hired me in 'ninety-eight. He'd want me here.
21 D OWEN: He told me if it came to it I should tell you where he hid the deed.
22 D NELL: what deed
23 D TOBY: there's a deed?
24 D ROSALIND: Oh for God's sake, Owen.
25 A ¶ Her phone.
26 A Dead.
27 A ¶ Gulls.
28 A A wave slaps the hull.
29 A Nobody moves.
30 D NELL (quiet): where
31 D OWEN: Under the third plank. Forward locker.
32 A ¶ Toby looks at Nell.
33 A Nell looks at Rosalind.
34 A Rosalind looks at the water.
35 A ¶ Engine.
36 A Rain.
37 D TOBY (low): we'll check later
38 D NELL: yeah. later.

### SCENE s05195_0 | INT. IRON TEMPLE GYM - NIGHT
Detected names (may be incomplete or contain aliases): MO
1 A ¶ Empty.
2 A Dim emergency lights.
3 A Rows of dead treadmills.
4 A A neon sign above the juice bar flickers: NO PAIN NO GAIN.
5 A ¶ A door SLAMS somewhere deep inside the building.
6 A Footsteps.
7 A Then a figure comes through the locker room entrance in a black hoodie and gym bag, moving fast.
8 A ¶ Mo, 30s, wiry, nervous hands.
9 A He drops the bag onto a bench and unzips it.
10 A Inside: a stethoscope, a tablet, a roll of thermal paper, an old key on a lanyard.
11 A ¶ He taps the tablet.
12 A A blue glow lights his face.
13 A A text appears on screen:
14 A ¶ ON TABLET: "Kip's on the door.
15 A Kim's got the cameras.
16 A You've got 4 minutes."
17 D MO (to himself): Kip. Kim. Kip. Kim. Why do they both sound the same.
18 A ¶ He pockets the key.
19 A Crosses to the front desk, where a night janitor in headphones mops the floor, oblivious, humming.
20 A Mo ducks behind a rack of kettlebells.
21 A The janitor sways closer, closer, then turns away.
22 D MO [CONT'D] (whispering): Good. Go. Go home.
23 A ¶ The janitor stops.
24 A Takes off one earphone.
25 A Mo freezes.
26 A A phone BUZZES somewhere.
27 A The janitor answers it, laughs, wanders toward the back office, still talking.
28 A ¶ Mo exhales.
29 A Moves.
30 A ¶ At the back of the gym he finds the glass trophy case.
31 A Inside: a small gold dumbbell, "1987 Regional Powerlifting Champion."
32 A He reads the plaque and laughs once.
33 D MO [CONT'D]: Big Dave's dumbbell. Unbelievable.
34 A ¶ He takes out the old key.
35 A Slides it into the lock.
36 A It does not turn.
37 A He tries again.
38 A Nothing.
39 D MO [CONT'D]: Come on come on come on
40 A ¶ His thumb catches.
41 A The lock CLICKS.
42 A The glass door swings open.
43 A ¶ He lifts the dumbbell carefully.
44 A It's heavier than it looks.
45 A He weighs it in his hand, looking at it the way a man looks at the thing that is about to change his life.
46 A ¶ The tablet BUZZES again.
47 A He glances.
48 A ¶ ON TABLET: "Kip says there's a guy outside.
49 A Big.
50 A Beard.
51 A Holding a coffee."
52 D MO [CONT'D] (a whisper): Big Dave.
53 A ¶ He shoves the dumbbell into the bag.
54 A Zips it.
55 A Looks around for an exit.
56 A The front is out.
57 A The side door is alarmed.
58 A The only way is through the pool area, and past the janitor, who has begun to sing along to whatever is in his headphones.
59 A ¶ Mo crouches.
60 A Creeps along the wall of treadmills.
61 A A treadmill SCREAMS to life as he brushes the start button, belt spinning, display lights flashing.
62 A He slaps the stop button.
63 A It keeps going.
64 D MO [CONT'D]: No no no no.
65 A ¶ The janitor stops singing.
66 A Footsteps approach from the back office.
67 A Mo dives behind the juice bar, hugging the bag.
68 A The janitor appears, scratches his head at the roaring treadmill, and hits the emergency stop with the flat of his hand.
69 A Silence.
70 A ¶ The janitor mutters something in Spanish, puts his earphone back in, and goes back to mopping.
71 A ¶ Mo breathes.
72 A Counts to ten.
73 A Then slides out from behind the bar and makes for the pool doors, the bag bumping his hip.
74 A ¶ At the pool doors he hesitates.
75 A Through the glass: a figure in the water, swimming slow laps in the dark.
76 A A woman, silver cap, goggles.
77 A She doesn't look up.
78 A Mo slips past on the tile, one hand on the wall.
79 A ¶ He reaches the fire door.
80 A Presses the bar.
81 A It opens without a sound.
82 A ¶ The alarm does not go off.
83 D MO [CONT'D] (realising): Kim.
84 A ¶ He steps out into the cold.
85 A The door CLOSES softly behind him.

### SCENE s05195_1 | EXT. GYM PARKING LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): MO
1 A ¶ A blue van idles.
2 A Its back door slides open.
3 A Inside, nothing but darkness and the red glow of a cigarette.
4 A ¶ Mo throws the bag in.
5 A Climbs after.
6 D MO: Go.
7 A ¶ The van pulls away.
8 A In the window of the gym, the neon sign flickers once and dies.

### SCENE s05197 | EXT. CRAB BOAT "SECOND WIND" - MORNING
Detected names (may be incomplete or contain aliases): LEON, HOODIE GUY, MUM, LEO, HANNAH
1 A ¶ flat sea. gulls. a thermos steaming on the gunwale.
2 A ¶ THE WOMAN, 30s, in a borrowed oilskin two sizes too big, sits on a coil of line holding her phone out over the water like a fishing rod.
3 A LEON, 30s, at the wheel, pretends not to watch her.
4 A HOODIE GUY, 20s, sits on the hatch cover with his hood up eating a cold sausage roll.
5 D LEON: you wont get signal out there either
6 D THE WOMAN: Worth a try
7 A ¶ Her phone BUZZES.
8 A She jumps.
9 A Looks at the screen.
10 A Lifts it.
11 D THE WOMAN [CONT'D] (into phone): Hi mum
12 D MUM [V.O.] (tinny): Where ARE you. Your dad said you went off with a fisherman
13 D THE WOMAN: Its a boat trip Mum. Its fine.
14 D MUM [V.O.]: Is he nice
15 D THE WOMAN: He's a, hes got a boat
16 D MUM [V.O.]: That's not an answer
17 A ¶ Leon turns the wheel half a degree.
18 A The boat leans.
19 A Hoodie Guy lifts his hood back and looks at her, then at Leon, then at the sausage roll.
20 D HOODIE GUY: She's got her mum on speaker
21 D LEON: Shes not on speaker Leo
22 D THE WOMAN: Its Leo.
23 D LEON: Yeah Leo. He's my nephew. Leo, not Leon. Obviously.
24 D LEO (shrugging): Everyone gets it wrong.
25 D MUM [V.O.]: Who's Leo
26 D THE WOMAN: Nobody Mum bye
27 A ¶ She ends the call.
28 A Silence.
29 A The engine thrums.
30 D THE WOMAN [CONT'D]: Im Hannah by the way. You never asked.
31 D LEON: I didnt want to rush it
32 D HANNAH: You rushed the boat
33 D LEON: The boat was an emergency
34 D HANNAH: I was on the pier for ten minutes and you said and I quote get in
35 D LEON (smiling at the horizon): And you did.
36 D HANNAH (simultaneously, mouth full): ^ LEO Get a room.
37 A ¶ Hannah throws a glove at Leo.
38 A He catches it.
39 A Leon laughs and the boat rolls once, and Hannah steadies herself on his arm.
40 A She doesn't take her hand away.
41 A ¶ Gulls.

### SCENE s05198_0 | INT. NEW BEGINNINGS FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): BRENDA OKONKWO, ELLIOT VANCE, MARA FELDMAN, BRAD FELDMAN, BRETT FELDMAN
1 A ¶ Soft jazz.
2 A Beige everything.
3 A A fish tank with one very depressed fish.
4 A Applause-ready bright.
5 A A wall of baby photos.
6 A ¶ Behind the front desk, BRENDA OKONKWO, 50s, receptionist, queen of the clipboard.
7 A At the coffee machine, DR. ELLIOT VANCE, 40s, handsome in a way that costs money.
8 A On the couch, MARA FELDMAN, 30s, nervous, holding a stack of forms, and next to her, her husband BRAD FELDMAN, 30s, who doesn't look up from his phone.
9 A ¶ Enter BRETT FELDMAN, 30s, in a suit that doesn't fit, with a bouquet.
10 D BRETT: Honey! I came as soon as I could!
11 A ¶ Everyone turns.
12 A Brad looks up.
13 A Mara looks at Brad.
14 A Brad looks at Brett.
15 A Brett looks at the bouquet, then at Mara.
16 D BRENDA (deadpan): Well. That's a lot of husbands.
17 D MARA: Brett is Brad's brother.
18 D BRETT: I'm the fun one.
19 D BRAD: He is not the fun one.
20 D DR. VANCE (reading a clipboard): Mrs. Feldman? We're ready for you.
21 D MARA: Both of them can come?
22 D DR. VANCE (smiling too widely): Of course. The more the merrier.
23 A ¶ Mara stands.
24 A Brad stands.
25 A Brett stands.
26 A They all move toward the door, then all stop, because Brenda is holding up a hand.
27 D BRENDA: Just the one husband, hon.
28 D BRAD: I'll go.
29 D BRETT: I'll go.
30 D MARA: I'm going. Alone.
31 D DR. VANCE (brightly): Excellent.
32 A ¶ Mara exits through the inner door.
33 A Dr. Vance follows.
34 A It closes.
35 A Brad and Brett stand in silence.
36 A The fish blows a bubble.
37 D BRAD: Why are you here?
38 D BRETT: Mom said you needed support.
39 D BRAD: Mom said that?
40 D BRETT: She said you looked "fragile."
41 D BRENDA (not looking up): He does.
42 A ¶ ON PHONE: Brad's screen lights.
43 A A text from an unknown number.
44 A ¶ ON PHONE: "dont let him in the room. hes not who u think."
45 D BRAD (reading, pale): Oh.
46 D BRETT: What?
47 D BRAD: Nothing. Spam.
48 D BRETT: Let me see.
49 D BRAD: No.
50 D BRETT: Brad.
51 A ¶ They grapple for the phone, Brett lunges, Brad ducks, the bouquet goes flying and lands in the fish tank.
52 A The fish, for the first time, looks interested.
53 D BRENDA (sighs): That's a four-hundred-dollar fish.

### SCENE s05198_1 | INT. NEW BEGINNINGS FERTILITY CLINIC - EXAM ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): MARA, DR. VANCE, BRAD, BRETT, BRENDA
1 A ¶ Mara on the table, paper gown.
2 A Dr. Vance snaps on gloves, humming.
3 A On the counter, a vial with a handwritten label.
4 A She squints at it.
5 D MARA: That says Feldman.
6 D DR. VANCE: It does.
7 D MARA: Which Feldman?
8 D DR. VANCE (gently): The one who's paying.
9 A ¶ A pause.
10 A Mara sits up.
11 D MARA: Doctor, which one is it?
12 D DR. VANCE (his smile never moves): Does it matter?
13 A ¶ The lights flicker.
14 A Out in the waiting room, the fish tank bubbles.
15 A Brenda, alone at her desk, quietly locks the front door.
16 A ¶ This is the last time anyone will ask that question.
17 A ¶ Brad and Brett burst through the inner door, panting, the soggy bouquet still in Brett's hand.
18 D BRAD: Mara, don't let him
19 D BRETT: Honey, it's not what
20 D DR. VANCE (overlapping): Gentlemen, please, this is a sterile environment.
21 D MARA (overlapping): Which of you?
22 D BRAD (overlapping): It wasn't me!
23 D BRETT (overlapping): It was supposed to be a gift!
24 A ¶ Mara looks at one, then the other, then at the vial, then at Dr. Vance, who has quietly slipped a hand into his coat pocket.
25 A A cold gleam of metal.
26 D DR. VANCE: Everyone stay very calm.
27 D BRENDA [O.S.] (through the door): Doctor, your two o'clock is here!
28 D DR. VANCE (without turning): Reschedule her.
29 D BRENDA [O.S.]: She says she's the police.
30 A ¶ Everyone freezes.
31 A Dr. Vance's smile finally falls off his face.
32 A Brett holds up the soggy bouquet like a white flag.
33 D BRETT (whispering): Can I go now?

### SCENE s05199 | INT. NGUYEN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): KIT, JO
1 A ¶ Dark.
2 A A phone flashlight swings across the room and lands on a fridge covered in magnets.
3 A A neighbor's dog BARKS outside.
4 A Through the window, two teenagers on a trampoline in the next yard use their phones as lanterns, shrieking with laughter.
5 A ¶ Kit, 40s, pyjama bottoms and a "World's Okayest Coach" mug, stumbles in and sets down a laptop on the counter.
6 A It's at 4 percent.
7 A Behind him Jo, 40s, his wife, in a team fleece, carries a stack of whiteboards under one arm and a bag of frozen peas under the other.
8 A ¶ The laptop lights up.
9 A Slack, glowing, on screen.
10 A ¶ ON SCREEN: #coaches-all - Marcus: "Anyone got the lineup for Saturday? lights are out here too lol"
11 A ¶ ON SCREEN: #coaches-all - Priya: "Kit?? you're on the sheet"
12 A ¶ He winces.
13 A Taps a key.
14 A The screen dims.
15 D KIT: Battery saver. Battery saver.
16 D JO: You said you'd print it.
17 D KIT: The printer needs power. It's literally in the name.
18 A ¶ She slaps the peas onto the counter, sets down the boards, and starts scribbling in the dark with a marker that doesn't work.
19 A He holds the phone light over her shoulder while she draws Xs and Os and arrows pointing off the edge of the board.
20 A He frowns, she frowns, and the dog outside barks again, and the teenagers on the trampoline shout something about a penalty.
21 D JO: Left wing's a problem.
22 D KIT: Left wing's a Tuesday problem. It's a Saturday problem now.
23 A ¶ She turns, glares, and holds out the marker.
24 A He takes it.
25 A Tries it on the board.
26 A Nothing.
27 A Shakes it.
28 A Tries again.
29 A Nothing.
30 D JO: Give it here.
31 A ¶ She snatches it back.
32 A Bites the cap.
33 A Presses hard.
34 A A faint grey line appears, then a clean black one, bold as a gunshot.
35 D JO [CONT'D]: There.
36 D KIT: You intimidated a marker.
37 D JO: It knows who's in charge.
38 A ¶ The laptop blinks.
39 A 2 percent.
40 A ¶ ON SCREEN: #coaches-all - Marcus: "ok we're going with 4-4-2 unless someone objects"
41 A ¶ ON SCREEN: #coaches-all - Priya: "Kit?? last chance"
42 A ¶ Kit lunges.
43 A Jo lunges.
44 A Their hands collide on the keyboard and the machine makes a tiny, dying chirp.
45 A ¶ ON SCREEN: #coaches-all - Kit: "4-3-3 left wing Danny, subs on at 60"
46 A ¶ Send.
47 A The screen goes black.
48 A ¶ Silence.
49 A The darkness settles.
50 A Even the dog stops.
51 D KIT: Was that right?
52 D JO: No.
53 A ¶ He laughs.
54 A She laughs.
55 A The fridge shudders on, the overhead light blinks to life, and every magnet on the door sings a little as the compressor catches.
56 A ¶ They squint at each other in the sudden brightness.
57 A He's holding the marker.
58 A She's holding the peas.
59 D KIT: Dinner?
60 D JO: Peas.
61 D KIT: Peas.
