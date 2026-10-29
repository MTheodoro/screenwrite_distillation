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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00022.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02052 | INT. ROOFTOP GREENHOUSE RESTAURANT - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI ABERFORTH-KANE, TEODOR VASILEV-OSEI, WAITER, WOMAN
1 A ¶ Candles in jam jars.
2 A Fairy lights.
3 A A single table set for two among rows of tomato plants.
4 A The city glitters beyond the glass.
5 A ¶ NAOMI ABERFORTH-KANE (30s, silk dress, nervous hands) adjusts a fork.
6 A Straightens it.
7 A Looks at the empty chair.
8 A ¶ Footsteps.
9 A TEODOR VASILEV-OSEI (30s, rumpled suit, a bouquet of grocery-store carnations) skids around the corner of a tomato row.
10 D TEODOR: I'm late.
11 D NAOMI: You're eleven minutes late.
12 D TEODOR: Eleven. Not twelve.
13 D NAOMI: Eleven and a half.
14 A ¶ He holds out the carnations.
15 A She stares at them.
16 A Then, helplessly, smiles.
17 A He sits.
18 A They look at each other across the candle.
19 D NAOMI [CONT'D]: You came.
20 D TEODOR: Of course I came.
21 D NAOMI: Last time you didn't.
22 D TEODOR: Last time my mother was in the hospital.
23 D NAOMI: I know. I'm sorry. I just--
24 D TEODOR: No. It's fair.
25 A ¶ She puts her napkin in her lap.
26 A He picks up the menu without opening it.
27 A They both laugh at the same moment, then stop.
28 A ¶ A WAITER in a green apron glides up, notepad ready.
29 A He is very young, very solemn.
30 D WAITER: Good evening. Is this a celebration?
31 D NAOMI: Maybe.
32 D TEODOR: Possibly.
33 D WAITER: I'll bring something special.
34 A ¶ He glides off.
35 A Naomi covers her mouth.
36 A Teodor reaches across and takes her hand.
37 A She lets him.
38 D NAOMI (whispering): He's going to bring us a cake.
39 D TEODOR: He's going to bring us a cake.
40 A ¶ Then Naomi's face changes.
41 A She looks over his shoulder, past the tomato plants, at the stairwell door.
42 D NAOMI [CONT'D]: Teodor.
43 D TEODOR: What?
44 D NAOMI: Don't turn around.
45 A ¶ He turns around.
46 A In the doorway, a WOMAN in a red coat stands very still, a suitcase at her feet.
47 D TEODOR: Marisol.
48 A ¶ The Waiter returns with a tiny cake and a single candle.
49 A He stops, takes in the scene, and quietly sets the cake in the middle of the table.
50 A Nobody touches it.

### SCENE s01493 | INT. COMMUNITY-GARDEN TOOL SHED - NIGHT
Detected names (may be incomplete or contain aliases): NELLIE, OKOYE-PRESCOTT, MARCUS TRAN-ABERNATHY, BRIDGET KILLIAN-ADEYEMI, OLD FELIX BRANDT-NJOKU, AISHA MORENO-VANCE
1 A ¶ A cramped plank shed that smells of manure and linseed oil.
2 A A single bulb on a string.
3 A Rakes in racks.
4 A A calendar from 1998.
5 A ¶ Five neighbors sit on buckets and overturned crates, an emergency meeting in a space not built for five.
6 A ¶ CORNELIA "NELLIE" OKOYE-PRESCOTT (60s, gardening gloves, a loud cardigan) presides on a stool.
7 A Next to her: MARCUS TRAN-ABERNATHY (30s, a clipboard), BRIDGET KILLIAN-ADEYEMI (40s, bags under her eyes), OLD FELIX BRANDT-NJOKU (70s, a pipe unlit in his teeth), and young AISHA MORENO-VANCE (20s, still in her work apron).
8 D NELLIE: The developers close the lot Friday.
9 D MARCUS: They can't. We have the lease.
10 D NELLIE: We had the lease.
11 D MARCUS: Until when?
12 D NELLIE: Until the thirtieth. Yesterday.
13 D BRIDGET: Nobody told us.
14 D NELLIE: The letter was in the mailbox of the man who died in March.
15 D FELIX (around his pipe): That's Hendricks.
16 D BRIDGET: Hendricks is dead, Felix.
17 D FELIX: That's why the letter's late.
18 A ¶ Silence.
19 A The bulb swings a quarter inch.
20 D MARCUS: We can petition.
21 D NELLIE: We have forty-two signatures.
22 D MARCUS: Forty-two is a lot.
23 D NELLIE: It's not enough.
24 D AISHA: How many do we need?
25 D NELLIE: Two hundred.
26 D AISHA: By Friday?
27 D NELLIE: By Friday.
28 D BRIDGET: Then we pick up the pace. Door to door tomorrow.
29 D MARCUS: I have a meeting.
30 D BRIDGET: Cancel it.
31 D MARCUS: I can't.
32 D BRIDGET: Then you're out.
33 D MARCUS: Out of what?
34 D BRIDGET: The garden.
35 A ¶ A pause so cold the bulb seems to dim.
36 A Marcus half rises.
37 A Felix sets his pipe on his knee.
38 A Aisha puts a hand on Marcus's sleeve.
39 A Bridget crosses her arms.
40 A Nellie lifts a rake from the rack and sets it on her lap.
41 D NELLIE: Sit, Marcus.
42 A ¶ He sits.
43 D NELLIE [CONT'D]: Bridget, apologize.
44 D BRIDGET: I will not.
45 D NELLIE: Then explain.
46 D BRIDGET: Hendricks's tomatoes are still in the south bed. He planted them. I water them.
47 D FELIX (gentle): Every day.
48 D BRIDGET: Every day. Because somebody has to. And if they bulldoze it Friday...
49 A ¶ She doesn't finish.
50 A Marcus lowers his clipboard.
51 A Aisha stares at her hands.
52 A Felix lights his pipe, finally, with a slow match, and the shed fills with sweet smoke.
53 D MARCUS: I'll cancel the meeting.
54 D BRIDGET: Thank you.
55 D MARCUS: Don't thank me. I'm taking the south side.
56 D FELIX: Of course you are.

### SCENE s02143 | INT. GOAT YOGA BARN - MORNING
Detected names (may be incomplete or contain aliases): NAMASTE, HORTENSE PLUMB, CLEMENT
1 A ¶ A sun-struck barn with rubber mats on the floor and bleating goats everywhere.
2 A Hand-lettered sign: "NAMASTE, KIDS."
3 A A speakerphone propped on a hay bale.
4 A ¶ HORTENSE PLUMB, 70, purple leggings, silver braid, folded into a perfect downward dog, a goat standing serenely on her lower back.
5 A She has the stillness of a tax auditor and the patience of a glacier.
6 D CLEMENT [V.O.] (speakerphone, tinny): Mother, are you doing yoga with farm animals again?
7 D HORTENSE: It is goat yoga, Clement. The goat is the instructor.
8 D CLEMENT [V.O.] (speakerphone): The goat is standing on you.
9 D HORTENSE: Correct.
10 D CLEMENT [V.O.]: Mother, we have discussed this.
11 D HORTENSE: Clement, we have discussed nothing. You talk and I wait.
12 D CLEMENT [V.O.]: I'm worried about the knees.
13 D HORTENSE: The knees are at peace.
14 A ¶ The goat shifts.
15 A Hortense does not.
16 D CLEMENT [V.O.] (speakerphone): Mother, I'm coming over.
17 D HORTENSE: Clement, no.
18 D CLEMENT [V.O.]: Mother, yes.
19 A ¶ The goat hops off her back.
20 A Hortense unfolds one vertebra at a time, stands, turns to the phone with magnificent calm, and, as she answers, the goat chews the hem of her leggings.
21 D HORTENSE: Then bring a carrot.

### SCENE s01944 | EXT. SPARKLE AUTO SPA CAR WASH - NIGHT
Detected names (may be incomplete or contain aliases): VINNIE CASTELLANOS, LUCKY SZYMANSKI, SGT. HAYES, DEE OKPARA
1 A ¶ Neon pink.
2 A A conveyor belt rumbles through a tunnel of foaming brushes.
3 A A dented sedan idles at the entrance, hazards blinking.
4 A ¶ VINNIE CASTELLANOS, 40s, leather jacket, keys in one fist, slams the sedan's trunk.
5 A LUCKY SZYMANSKI, 30s, kneels by the front tire, holding a duffel bag.
6 A A police radio on Vinnie's belt crackles.
7 D SGT. HAYES [V.O.] (over radio): All units, shots fired at Third and Maple. Suspects in a gray sedan.
8 D VINNIE (muttering): Too soon.
9 D LUCKY: We gotta go, Vin.
10 D VINNIE: Wait for Dee.
11 D LUCKY: Dee's three minutes late.
12 D VINNIE: She's two minutes late. Don't--
13 A ¶ DEE OKPARA, 30s, black hoodie, running shoes, bursts around the corner of the tunnel with a gym bag clutched to her chest.
14 D DEE: Go, go, go!
15 D LUCKY: You're late!
16 D DEE: I was shot at!
17 D VINNIE: By who?
18 D DEE: By whoever I robbed, Vinnie, who do you think?
19 D SGT. HAYES [V.O.] (over radio): Units responding to Third and Maple. Repeat, gray sedan, plates unknown.
20 A ¶ Vinnie rips the radio off his belt and drops it into the car-wash foam.
21 A Dee dives into the back seat.
22 A Lucky tosses the duffel in after her and slides behind the wheel.
23 D LUCKY: Vin, door!
24 D VINNIE: I'm getting in!
25 A ¶ The sedan lurches forward onto the belt.
26 A Brushes descend.
27 A Water sprays across the windshield.
28 A Inside, three people sit very still, breathing hard, as the car wash whirls around them and a siren grows in the distance.
29 D DEE: This is the worst getaway ever.
30 D LUCKY: It's a very good wash.

### SCENE s00357 | INT. WRESTLING GYM - EMPTY LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): COACH ODETTE BRANNIGAN
1 A ¶ A concrete locker room beneath a high school gym.
2 A Rows of dented lockers.
3 A A long bench.
4 A A whiteboard with half-erased plays.
5 A Fluorescent tubes buzz.
6 A A cheap phone sits on the bench, facedown, silent.
7 A ¶ No one is here.
8 A Rain drums on the roof above.
9 A Then footsteps on the stairs.
10 A ¶ COACH ODETTE BRANNIGAN, fifties, enters, shaking water from a whistle lanyard.
11 A She wears a windbreaker with the school's faded crest.
12 A She is soaked and she doesn't care.
13 A She crosses to the bench, picks up the phone, studies it, sets it down.
14 A ¶ The phone buzzes.
15 A She looks at the screen.
16 A She does not answer.
17 A It goes to voicemail.
18 A A recorded voice fills the room.
19 D COACH ODETTE [V.O.] (from voicemail): Hey, Odette. It's you. It's me. Yesterday you. Listen, you're going to want to quit tonight.
20 D ODETTE: Don't.
21 D COACH ODETTE [V.O.] (from voicemail): Don't say "don't." You always say "don't." Just listen.
22 A ¶ She sits on the bench, elbows on knees.
23 D ODETTE: Twenty-six years. Twenty-six years of whistles, of weigh-ins, of boys crying in showers.
24 D COACH ODETTE [V.O.] (from voicemail): Of boys crying in showers.
25 D ODETTE: And what do I get? A losing season. A board meeting. A letter.
26 D COACH ODETTE [V.O.] (from voicemail): The letter said "restructure."
27 D ODETTE: I know what it said. It said, "Thank you for your service, please clear your locker."
28 A ¶ She stands, goes to a locker at the end of the row, spins the dial, opens it.
29 A It is full of ribbons, photographs, a dented trophy.
30 A She takes none of it.
31 D ODETTE [CONT'D]: Eleven state champions. Forty-four all-conference. One kid who made the Olympic trials and cried so hard he forgot his shoes.
32 D COACH ODETTE [V.O.] (from voicemail): He forgot his shoes, Odette. You drove them to Colorado.
33 D ODETTE: Shut up.
34 D COACH ODETTE [V.O.] (from voicemail): You drove eleven hours with a pair of shoes on the passenger seat. And he wrestled barefoot because they were the wrong size.
35 D ODETTE: He still won.
36 D COACH ODETTE [V.O.] (from voicemail): He still won.
37 A ¶ She takes a deep breath.
38 A She closes the locker.
39 A She leans her forehead against it.
40 D ODETTE [CONT'D]: I'm tired.
41 D COACH ODETTE [V.O.] (from voicemail): I know. That's why you recorded this. So that I would say it to you when you were tired enough to hear.
42 D ODETTE: What do I say to them?
43 D COACH ODETTE [V.O.] (from voicemail): Nothing. You just show up. Tomorrow at six. Same as always. Let the board send their letter.
44 D ODETTE: They'll fire me.
45 D COACH ODETTE [V.O.] (from voicemail): Probably.
46 D ODETTE: Then why?
47 D COACH ODETTE [V.O.] (from voicemail): Because the boys will be there at six. And they're waiting for you to say go.
48 A ¶ A pause.
49 A The voicemail ends with a soft beep.
50 A Odette picks up the phone and holds it to her chest for a long moment.
51 A She lays it on the bench.
52 A Then she goes to the whiteboard, picks up a marker, and writes in large block letters: "6 AM."
53 D ODETTE [CONT'D] (to the empty room): Go.
54 A ¶ She turns off the light.

### SCENE s00695 | INT. FONTAINE & BOATENG - BREAK ROOM - MORNING
Detected names (may be incomplete or contain aliases): MARGUERITE FONTAINE, KWAME BOATENG, SLOANE RIDGEWAY, PHIL LINDQVIST, INTERN, DEWEY
1 A ¶ A vending machine hums.
2 A A fruit bowl holds three plastic lemons.
3 A A whiteboard says "CULTURE IS KING" under a doodle of a crown with a frown.
4 A ¶ MARGUERITE FONTAINE, 50s, the managing partner, in a cream suit, pours tea from a silver pot nobody else is allowed to touch.
5 A KWAME BOATENG, 40s, the other partner, in shirtsleeves, leans on the fridge.
6 A SLOANE RIDGEWAY, 30s, head of People & Culture, in athleisure, holds an iPad up like a shield.
7 A PHIL LINDQVIST, 50s, the accountant, sorts sweetener packets by color.
8 A In the doorway, an INTERN, 20s, holds a tray of pastries and wears a lanyard that says "INTERN."
9 D MARGUERITE: Lovely morning.
10 D KWAME: Lovely.
11 D SLOANE: Lovely! We're so aligned.
12 D PHIL (to himself): Pink, yellow, blue.
13 D INTERN: I brought croissants.
14 D MARGUERITE: Of course you did. You're our little sunbeam.
15 A ¶ The Intern sets down the tray.
16 A Everyone takes one.
17 A Everyone chews.
18 A A long, pleasant silence.
19 D KWAME: Marguerite and I wanted to thank you all for your hard work.
20 D SLOANE: Amazing work.
21 D PHIL: Sweetener's low.
22 D MARGUERITE: Phil, your numbers this quarter are impeccable.
23 D PHIL: Are they?
24 D MARGUERITE: Impeccable. Isn't that the word, Kwame?
25 D KWAME: It is.
26 A ¶ The Intern smiles wider.
27 A Sloane taps her iPad.
28 D SLOANE: So, as part of our culture refresh, we'll be transitioning a few roles.
29 D PHIL: Which roles?
30 D KWAME: Phil.
31 D PHIL: Which?
32 D MARGUERITE: Yours, dear.
33 A ¶ Phil sets down the packets.
34 A The Intern's smile slips.
35 D INTERN: I'm sorry, did you say transition?
36 D SLOANE: Offboarding, practically speaking.
37 D INTERN (softly): Mine too?
38 D MARGUERITE: Not at all. You'll be taking Phil's desk.
39 D INTERN: I'm sorry. What's my name?
40 D KWAME: Pardon?
41 D INTERN: You've called me intern for six months. I told you my name on day one.
42 D MARGUERITE: Did you? I'm sure it was lovely.
43 D INTERN: It's Dewey.
44 D DEWEY (CONT'D): Dewey Park. I'm the one who built your billing system.
45 A ¶ Silence.
46 A The fridge clicks.
47 A Phil, still holding a pink packet, looks at Dewey for the first time.
48 D PHIL: He did.
49 D KWAME: We know.
50 D DEWEY: Then you know the system doesn't run without me.
51 D MARGUERITE: We have a plan for that.
52 D DEWEY: Do you.
53 A ¶ He takes off the lanyard.
54 A Sets it on the tray.
55 D DEWEY [CONT'D]: Then enjoy the croissants.

### SCENE s00589 | INT. PAWNSHOP BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): ARLO DUNSMORE, TREVOR PIKE, TALL WOMAN, GWENDOLYN
1 A ¶ Shelves of unclaimed saxophones.
2 A A desk lamp with a green shade.
3 A A safe, half-open.
4 A ¶ ARLO DUNSMORE, 50s, tired eyes, cardigan, sits behind the desk.
5 A TREVOR PIKE, 30s, jittery, in a leather jacket, stands by the safe.
6 A In the doorway: a TALL WOMAN in a long coat, face hidden by a wide-brim hat.
7 D ARLO: Who's she?
8 D TREVOR: She's with me.
9 D ARLO: She's not with you. Look at her.
10 D TALL WOMAN: I'm not with anyone.
11 D ARLO: Then why are you here?
12 D TALL WOMAN: To collect.
13 D TREVOR: Collect what?
14 D TALL WOMAN: What Arlo owes.
15 D ARLO: I owe you nothing.
16 D TREVOR: He doesn't owe anybody. He pays his bills.
17 D TALL WOMAN: Not that bill.
18 A ¶ She removes her hat.
19 A Dark hair, a thin scar through one eyebrow.
20 D TALL WOMAN [CONT'D]: My name is Gwendolyn Marsh.
21 D ARLO: Marsh. Charlie Marsh's girl.
22 D GWENDOLYN: Yes.
23 D TREVOR: Who's Charlie Marsh?
24 D ARLO: Shut up, Trevor.
25 D TREVOR: No, who's Charlie Marsh?
26 D GWENDOLYN: The man he sold out in sixty-eight.
27 D ARLO: I did not sell him out. He ran.
28 D GWENDOLYN: You gave them the address.
29 D TREVOR: Arlo, is that true?
30 D ARLO: It was a long time ago.
31 D GWENDOLYN: He died in a ditch in Ohio.
32 D ARLO: I'm sorry.
33 D GWENDOLYN: You aren't.
34 D TREVOR: Look, lady, whatever this is, we're leaving.
35 D GWENDOLYN: You're leaving?
36 D TREVOR: Yes.
37 A ¶ He grabs a satchel from the safe.
38 A He heads for the door.
39 A She steps aside, easily, and lets him pass.
40 A He stops at the threshold, confused.
41 D TREVOR [CONT'D]: That's it?
42 D GWENDOLYN: It's not you I came for.
43 D ARLO: Trevor, wait.
44 D TREVOR: No. He's yours.
45 A ¶ He disappears.
46 A Footsteps down the stairs.
47 A A door slams.
48 A ¶ Arlo reaches for the desk drawer.
49 A Gwendolyn pulls a revolver from her coat.
50 A Not aiming.
51 A Just showing.
52 D GWENDOLYN: Leave the drawer.
53 D ARLO: It's a bottle.
54 D GWENDOLYN: I know.
55 D ARLO: May I?
56 A ¶ She nods.
57 A He pulls out a bottle of cheap bourbon and two glasses.
58 A Pours.
59 A Slides one across.
60 D ARLO [CONT'D]: To Charlie.
61 D GWENDOLYN: To Charlie.
62 A ¶ They drink.
63 A She sets down the empty glass and, after a moment, the revolver beside it.

### SCENE s00939 | INT. LIGHTHOUSE KEEPER'S COTTAGE, ATTIC - NIGHT
Detected names (may be incomplete or contain aliases): ESME, PAXTON-MBEKI, WILLOW PAXTON-LOWE
1 A ¶ A low attic under slate.
2 A A single round window faces the sea.
3 A Boxes of old photographs, a dressmaker's dummy wearing a faded raincoat, and a rocking horse whose paint has long since worn away at the ears.
4 A ¶ ELSPETH "ESME" PAXTON-MBEKI (70s, white braid down her back, a wool shawl pinned with a brass fish) sits on a trunk with a shoebox on her lap, and her granddaughter, WILLOW PAXTON-LOWE (17, rain-wet hair, her mother's unmistakable chin), kneels on the floor with a flashlight, a photograph, and a magnifying glass, pulling things out of boxes and laying them on the boards in rows.
5 D WILLOW: Gran, who's this one?
6 D ESME: Oh, that's your great-uncle Piet. He drowned on that boat, that one, the one behind him.
7 D WILLOW: He looks happy.
8 D ESME: He was always happy. That's what killed him.
9 A ¶ Willow laughs, then sees her grandmother isn't laughing.
10 A She sets down the photograph and picks up another.
11 A Esme watches her, fingers moving on the shoebox lid, then lifts it and takes out a small tin whistle.
12 D ESME [CONT'D]: Your mother played this. Right here, on this floor, every night until the lamp came on.
13 D WILLOW: She never told me.
14 D ESME: She wouldn't. She thought you'd laugh.
15 D WILLOW: Gran, I wouldn't --
16 D ESME: Shh.
17 A ¶ Esme lifts the whistle and blows a single, thin note.
18 A Willow stares at her, and the note hangs in the cold air.
19 A The lamp in the tower below, far beneath them, swings its great beam across the round window.
20 D WILLOW: Play it again.
21 D ESME: I don't remember the tune.
22 D WILLOW: Play anything.
23 A ¶ Esme closes her eyes, puts the whistle to her lips again, and plays a halting, crooked melody.
24 A Willow, kneeling in a circle of photographs, begins to hum along with her.
25 A Then the whistle breaks into a harsh squeal.
26 A Esme lowers it and laughs, wheezing.
27 A Willow laughs with her, and then, suddenly, she is crying, and she doesn't stop, and she crawls across the floor and puts her head in her grandmother's lap.
28 D WILLOW [CONT'D] (into the shawl): I miss her, Gran.
29 D ESME: I know, my girl. I know.
30 A ¶ The beam passes the window again, and again, and the two of them sit inside it, rocking, in the rhythm of the sea.

### SCENE s00712 | INT. PRECINCT 9 - INTERVIEW ROOM - NIGHT
Detected names (may be incomplete or contain aliases): OFFICER TAMAR HAIM, UNKNOWN MAN, DISPATCH, DESMOND
1 A ¶ Cinderblock.
2 A A table bolted to the floor.
3 A A two-way mirror.
4 A A fluorescent tube with a wasp trapped inside it.
5 A ¶ OFFICER TAMAR HAIM, 30s, in uniform, sits with a legal pad.
6 A Across from her, an UNKNOWN MAN, 40s, in a damp jacket, holds a paper cup he has not drunk from.
7 D TAMAR: Name.
8 D UNKNOWN MAN: You tell me.
9 D TAMAR: That's not how this works.
10 D UNKNOWN MAN: Then I'm waiting.
11 A ¶ A radio on Tamar's shoulder crackles.
12 D DISPATCH [V.O.] (radio): Unit Nine, prints came back on your guy.
13 A ¶ Tamar thumbs the mic.
14 D TAMAR: Go ahead, Dispatch.
15 D DISPATCH [V.O.] (radio): Desmond Pryce. Forty-one. Two priors. Last known address, a storage unit off Route 6.
16 A ¶ She glances at the man.
17 A He keeps his eyes on the table.
18 D TAMAR (to the man): Mr. Pryce.
19 D DESMOND: Don't.
20 D TAMAR: That's your name?
21 D DESMOND: It was my father's.
22 D TAMAR: Mr. Pryce, why are you holding the cup?
23 D DESMOND: Because my hands shake.
24 D DISPATCH [V.O.] (radio): Unit Nine, also, the storage unit's been flagged. Smell reported.
25 A ¶ Desmond sets the cup down very carefully.
26 D TAMAR: What's in unit one-forty?
27 D DESMOND: Nothing you want.
28 D TAMAR: That isn't a no.

### SCENE s02402 | INT. DINING CAR - OVERNIGHT EXPRESS - NIGHT
Detected names (may be incomplete or contain aliases): ELEANOR WHITCOMBE, AUGUSTIN ROCHE, PORTER
1 A ¶ White linen, silver pots, amber lamps.
2 A The train sways.
3 A Dark country slides past the windows.
4 A ¶ ELEANOR WHITCOMBE, fifties, in a grey travelling suit, sits alone at a table for two, a cup of black coffee cooling in front of her.
5 A Across the car, AUGUSTIN ROCHE, sixties, a gaunt gentleman in a dinner jacket, folds his newspaper and approaches.
6 D ROCHE: Madame Whitcombe.
7 D ELEANOR: Monsieur Roche.
8 D ROCHE: I did not expect to find you on this train.
9 D ELEANOR: I did not expect to be found.
10 A ¶ He takes the chair opposite without being asked.
11 A She lets him.
12 D ROCHE: Twenty years.
13 D ELEANOR: Twenty-two.
14 D ROCHE: You haven't changed.
15 D ELEANOR: You have, thank God.
16 A ¶ He smiles.
17 A A PORTER in a white jacket appears at the table's edge with a silver pot.
18 D PORTER: More coffee, madame?
19 D ELEANOR: No. Thank you.
20 D ROCHE: Nothing for me.
21 A ¶ The Porter withdraws.
22 A The train rocks into a curve.
23 D ROCHE [CONT'D]: I kept the letters, you know.
24 D ELEANOR: I burned yours.
25 D ROCHE: I assumed.
26 D ELEANOR: Do not make it sound like a kindness.
27 D ROCHE: It was not meant as one.
28 A ¶ She lifts her cup.
29 A Sets it down.
30 A The lamp flickers.

### SCENE s00388 | INT. MERIDIAN SYNERGY CORP. - BREAK ROOM - DAY
Detected names (may be incomplete or contain aliases): JOURNEY, PHILLIPA, VP, OGDEN, TANVI
1 A ¶ A fluorescent box with a mini-trampoline in the center, installed under a banner: "WELLNESS IS A JOURNEY."
2 A ¶ PHILLIPA, 40s, regional VP, stands on the trampoline in a blazer, bouncing in small, tight, politically correct hops.
3 A OGDEN, 30s, analyst, and TANVI, 20s, intern, watch from either side of the microwave.
4 D PHILLIPA: Team, this is about psychological safety.
5 D OGDEN: Totally.
6 D TANVI: Totally.
7 A ¶ Phillipa bounces.
8 A A button on her blazer pops off and ricochets across the room.
9 A All three track it.
10 A It lands in the coffee.
11 A Nobody breathes.
12 D PHILLIPA: I'd like to hear thoughts.
13 A ¶ OGDEN and Tanvi both open their mouths.
14 A Both close them.
15 A Both look at the coffee.
16 D OGDEN: It's... buoyant.
17 D TANVI: It's very buoyant.
18 A ¶ Phillipa steps off the trampoline.
19 A The three of them scatter in different directions.
20 A The trampoline keeps bouncing slightly, alone.

### SCENE s00339 | INT. ROLLER RINK - FAMILY REUNION - DAY
Detected names (may be incomplete or contain aliases): PEARL WASHINGTON, UNCLE ROY, TAMIKA, JUNIOR, LILIANA
1 A ¶ A wood-floored rink under a mirror ball.
2 A Banner reads "WASHINGTON FAMILY 40TH."
3 A Folding tables of casserole line one wall.
4 A Disco hits thump faintly.
5 A ¶ PEARL WASHINGTON, eighties, in a purple tracksuit, sits on a throne of folding chairs.
6 A UNCLE ROY, sixties, her son, rolls by on rented skates, arms out.
7 A TAMIKA, thirties, Roy's niece, balances a paper plate in one hand and her phone in the other.
8 A JUNIOR, fifteen, hangs on the rail, hoodie up.
9 A LILIANA, six, Tamika's daughter, sits cross-legged on the floor lacing her skates wrong.
10 D PEARL: Roy! Skate like you got sense!
11 D UNCLE ROY: I'm skating, Ma!
12 A ¶ He is not.
13 A He wobbles.
14 A He grabs the rail beside Junior and holds on, grinning.
15 D TAMIKA: Junior, take your hood off.
16 D JUNIOR: It's fine.
17 D TAMIKA: It's your grandmother's birthday.
18 A ¶ Junior pushes the hood back an inch.
19 A Tamika sets her plate in front of Pearl, who pushes it back toward Tamika.
20 D PEARL: That's not my food.
21 D TAMIKA: It's your casserole.
22 D PEARL: Then why is it cold?
23 A ¶ Liliana tugs Tamika's sleeve.
24 D LILIANA: Mama, my skates are on backwards.
25 D TAMIKA: They're on your wrong feet, baby.
26 A ¶ She kneels.
27 A Roy rolls up and lowers himself beside Pearl, and Pearl, without a word, pats his knee twice.
28 A Junior watches this from the rail and lets the hood fall all the way down.

### SCENE s01229 | INT. HARBOUR PILOT STATION - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE INSPECTOR RAKESH MALHOTRA, ANSELM DRUMMOND, HARBOUR CLERK BIRGITTA STRAND
1 A ¶ A cramped prefab office on stilts above a container yard.
2 A Radar sweeps on a small green screen.
3 A A kettle, three mugs, a corkboard of tide tables.
4 A Rain on a tin roof.
5 A ¶ DETECTIVE INSPECTOR RAKESH MALHOTRA (50s, creased raincoat, thorough rather than clever) sits on a plastic chair.
6 A His notebook is open on his knee.
7 A He has been here for two hours.
8 A ¶ Opposite him, harbour pilot ANSELM DRUMMOND (50s, navy jersey, neat grey beard) fills the kettle from a bottle.
9 A His hands are slow and exact.
10 A ¶ At the desk, HARBOUR CLERK BIRGITTA STRAND (20s, headset, laminated lanyard) taps keys on a battered keyboard.
11 A She is crying, but only in the way her throat works.
12 D MALHOTRA: You said you didn't see the container.
13 D DRUMMOND: I said I didn't see it come off the ship.
14 D MALHOTRA: And you didn't see it sit on the quay.
15 D DRUMMOND: It sat on the quay all week. Everyone saw it.
16 D MALHOTRA: Birgitta?
17 D BIRGITTA (not looking up): Container 4471. Customs hold on the fourteenth. Released on the sixteenth.
18 D MALHOTRA: Who released it?
19 D BIRGITTA: The system.
20 D MALHOTRA: The system did that on its own?
21 D BIRGITTA: Somebody clicked something.
22 A ¶ Drummond sets the kettle on its base and flicks the switch.
23 A The element begins to tick.
24 A He folds his arms and leans on the counter.
25 D DRUMMOND: Inspector, I've been piloting ships into this harbour for twenty-six years. I bring in tankers the length of the high street through a channel two hundred feet wide. I do not click things.
26 D MALHOTRA: I'm not saying you did.
27 D DRUMMOND: You are saying something.
28 A ¶ Malhotra turns a page.
29 A The paper rustles.
30 A He reads a line to himself, then looks at the corkboard, where the tide table for the fifteenth has a pencil mark in the margin.
31 D MALHOTRA: Whose handwriting is that?
32 D BIRGITTA (quickly): Mine.
33 D DRUMMOND: Hers.
34 D MALHOTRA: Neither of you looked.
35 A ¶ Birgitta swallows.
36 A Drummond rubs his beard with the back of one hand.
37 A The kettle starts to roar.
38 A Steam beads on the window.
39 D MALHOTRA [CONT'D]: At 2:10 on the fifteenth, a pilot cutter left this station with one man aboard. The log says it went out for a routine inspection of a buoy.
40 D DRUMMOND: It did.
41 D MALHOTRA: The buoy has been missing since March.
42 A ¶ Silence.
43 A The kettle clicks off.
44 A Nobody moves to pour.
45 D BIRGITTA (very quiet): It's my fault.
46 D DRUMMOND: Birgitta.
47 D BIRGITTA: I released the hold. He told me it was paperwork. He said the owners would say thank you.
48 D MALHOTRA: Who?
49 A ¶ She presses her fingers hard against her mouth.
50 A Drummond looks at her for a long time.
51 A The ticking of the cooling kettle fills the room.
52 A Then he sits, heavily, on the stool beside her, and takes her hand off the keyboard, and holds it in both of his.
53 D DRUMMOND: It was me, Inspector.
54 D MALHOTRA: I thought it might be.
55 D DRUMMOND: She was frightened. I told her what to click.
56 D MALHOTRA: That's what she'll say in court, as well?
57 D DRUMMOND: It's what happened.
58 A ¶ Malhotra closes the notebook.
59 A Slides it into his coat.
60 A Stands, bones popping.
61 A He goes to the counter, takes the kettle, and pours three mugs of water over three bare teabags.
62 A He sets the first before Birgitta, the second before Drummond, and holds the third himself.
63 D MALHOTRA: Drink it while it's hot. The car's at the gate. It'll wait.
64 D DRUMMOND: Thank you.
65 D MALHOTRA: Don't thank me yet.
66 A ¶ Drummond lifts the mug.
67 A His hands shake for the first time.
68 A A little tea spills onto the tide table, spreading across the pencil mark in a brown stain.
69 A ¶ Birgitta lays her head on his shoulder.
70 A Outside, a ship's horn sounds, long and low, from beyond the breakwater.
71 A It is the sound of something coming home.
72 T FADE OUT.

### SCENE s00881 | EXT. RIVER CROSSING - FERRY LANDING - DAY
Detected names (may be incomplete or contain aliases): AMOS PIKE, CORA LEIGHTON, SHERIFF WALT DRUMMOND, MIGUEL ARROYO
1 A ¶ A cable-drawn raft waits on a brown river.
2 A A shack.
3 A A hitching rail.
4 A ¶ AMOS PIKE, 40s, ferryman, coils rope on the dock.
5 A He keeps one eye on the road.
6 A ¶ CORA LEIGHTON, 30s, a schoolteacher in a travelling coat, arrives with a trunk and sets it down hard.
7 A She watches him work.
8 D CORA: How much for the crossing?
9 D AMOS: Two bits.
10 A ¶ She pays.
11 A He pockets it without looking.
12 A ¶ Dust rises on the road.
13 A Two riders.
14 A SHERIFF WALT DRUMMOND, 50s, and MIGUEL ARROYO, 20s, in handcuffs, slumped over his saddle.
15 D AMOS [CONT'D]: Morning, Sheriff.
16 D DRUMMOND: Amos.
17 A ¶ He dismounts.
18 A Pulls the prisoner down.
19 A Miguel's lip is split.
20 A He keeps his eyes on the water.
21 D CORA: Is he hurt?
22 D DRUMMOND: Not badly.
23 D CORA: He looks hurt.
24 D DRUMMOND: Ma'am, it ain't your business.
25 A ¶ She turns to Amos.
26 D CORA: Is it?
27 A ¶ Amos looks at the river.
28 A At the raft.
29 A He chews a long moment.
30 D AMOS: Raft only holds four. And a horse.
31 D DRUMMOND: Then we'll make two trips.
32 D AMOS: Then you wait.
33 A ¶ Drummond's jaw tightens.
34 A Miguel lifts his head and meets Cora's eyes.
35 A He mouths something.
36 A She nods, barely.
37 D DRUMMOND: Something to say, boy?
38 A ¶ Miguel shakes his head.
39 A Cora steps between them, calm as a church.
40 D CORA: Sheriff, I'll ride with the prisoner. The ferryman will take the horses first.
41 D DRUMMOND: That wasn't the plan.
42 D CORA: It is now.
43 A ¶ Amos grins at the rope.
44 A Drummond glares.
45 A Then, slowly, he unbuckles his gun belt and hangs it from his saddle horn.
46 D DRUMMOND: Lead on.

### SCENE s02097 | INT. WKRT RADIO STATION - ON-AIR BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): JUNO FAIRWEATHER, TEDDY, PAK, ROSALIE MENDOZA-CLARK, DAVID
1 A ¶ A small studio with foam-padded walls and a console of dials.
2 A A red ON AIR light glows over the glass.
3 A Through the window, a dim control room.
4 A ¶ JUNO FAIRWEATHER, 30s, the late-night host, in headphones and a cardigan, leans toward her microphone.
5 A Across the console sits her producer, THEODORE "TEDDY" PAK, 30s, nervous, holding a clipboard.
6 A On a stool by the door, ROSALIE MENDOZA-CLARK, 20s, a caller who has come in person, clutches a paper cup of coffee.
7 D JUNO (into mic): You're listening to the Midnight Hour. Our next caller is on line two. Hello, line two.
8 D DAVID [V.O.] (over phone): Juno, hi. Long-time listener. I'm calling about someone in the room.
9 A ¶ Juno's eyes flick to Teddy.
10 A Teddy shakes his head, mouthing "no."
11 A Rosalie goes pale.
12 D JUNO (into mic): Is that right.
13 D DAVID [V.O.] (over phone): I want to say something to Rosalie.
14 D ROSALIE (rising): Turn it off.
15 D JUNO: Rosalie.
16 D TEDDY: Juno.
17 A ¶ They speak at the same time.
18 D JUNO: I can't cut a caller on air.
19 D TEDDY: Cut the line, cut the line!
20 A ¶ Rosalie shakes her head and takes a step toward the console.
21 D DAVID [V.O.] (over phone): I was a coward. I'm sorry. Will you marry me?
22 A ¶ Silence.
23 A The red light burns.
24 A Juno slowly slides her headphones off one ear.
25 A Teddy drops the clipboard.
26 A Rosalie stares at the speaker, then bursts into tears and laughter, and takes the microphone from Juno's hands.
27 D ROSALIE (into mic): Ask me in person.

### SCENE s00722 | EXT. SALT-FLAT FERRY LANDING - NOON
Detected names (may be incomplete or contain aliases): DEACON CROWE, BIRDIE PRUETT
1 A ¶ White.
2 A Everything white.
3 A Heat shimmer.
4 A A rotting dock jutting into a lake that dried up a decade ago.
5 A A ferry sits stranded on cracked crust, hull tilted.
6 A ¶ DEACON CROWE, forties, sits on an upturned bucket by the ramp.
7 A Black coat, grey with salt.
8 A Rifle across his knees.
9 A He doesn't aim it.
10 A He just keeps it.
11 A ¶ Hoofbeats, slow.
12 A A shape resolves in the glare.
13 A Rider.
14 A Mule.
15 A ¶ BIRDIE PRUETT, thirties, wide hat, rolled sleeves.
16 A Sunburnt nose.
17 A She dismounts without hurry.
18 A Ties the mule to a piling.
19 A ¶ He watches.
20 A Doesn't rise.
21 D BIRDIE: Deacon.
22 D DEACON: Birdie.
23 A ¶ She takes a canteen off the saddle.
24 A Drinks.
25 A Holds it out.
26 A He considers it.
27 A Takes it.
28 D BIRDIE: You're a long way from anybody.
29 D DEACON: That's the idea.
30 A ¶ She sits on the ramp's edge.
31 A Boots dangling over dry crust.
32 A He caps the canteen, passes it back.
33 A Neither says anything for a while.
34 A ¶ A gull cries.
35 A Where it came from, no one knows.
36 A Both look up.
37 A Both look down again.
38 D DEACON [CONT'D]: They say the lake'll come back.
39 D BIRDIE: They say a lot.
40 A ¶ He grins.
41 A Small.
42 A It leaves quick.
43 A ¶ She pulls a folded paper from her vest.
44 A Turns it over in her fingers.
45 A He sees it.
46 A Eyes narrow.
47 A Rifle shifts a half inch on his knees.
48 A ¶ They both go still.
49 A Wind hushes the dock timbers.
50 D DEACON [CONT'D]: That mine?
51 D BIRDIE: Was yours. It's a telegram now.
52 D DEACON: Who from?
53 D BIRDIE: Your sister. Says come home.
54 D DEACON (flat): Don't have one.
55 D BIRDIE: Then somebody's lying, Deacon.
56 A ¶ He stares at the ferry.
57 A Her eyes stay on him.
58 A The heat hums.
59 A ¶ She unfolds the paper.
60 A Holds it up between them like a card she doesn't want to play.
61 D BIRDIE [CONT'D]: Read it with me.
62 A ¶ He doesn't take it.
63 A He doesn't leave.
64 A ¶ After a long moment he sets the rifle down on the planks.
65 A Slides over on the bucket.
66 A She shifts toward him, paper between them.
67 A They read.
68 D DEACON (low): Hell.
69 D BIRDIE: Yeah.
70 A ¶ Salt glitters.
71 A Neither moves.

### SCENE s02061 | INT. LUNAR DOME GREENHOUSE - STATION NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ZARA ODUYA-LINDQVIST, BARNABY TREMAINE-OKORO, SOLOMON ADEBAYO-KRAUSE, WOMAN
1 A ¶ A glass cathedral of mist.
2 A Rows of dwarf wheat under pale blue lights.
3 A Beyond the dome's curve, a black sky and a blue Earth, small and unconcerned.
4 A ¶ CAPTAIN ZARA ODUYA-LINDQVIST (50s, close-cropped silver hair, a station jacket worn through at the elbows) stands at a central console, one hand flat on the glass, watching a tiny green number tick down.
5 A Her engineer, BARNABY TREMAINE-OKORO (40s, bearded, a spanner in his belt), wrestles with an access panel.
6 A ¶ At a bench, a young botanist, SOLOMON ADEBAYO-KRAUSE (20s, wire-rimmed glasses, a tablet in each hand), sorts seed trays.
7 D ZARA (to nobody): Eleven minutes.
8 D BARNABY: It's eleven minutes to what?
9 D ZARA: To the air scrubbers failing.
10 D SOLOMON: Is that what the alarm was?
11 D ZARA: That is what the alarm is.
12 A ¶ Barnaby pulls the panel loose.
13 A It clangs on the deck.
14 A Blue sparks spit from the wiring beneath.
15 D BARNABY: I can bypass it.
16 D ZARA: How long?
17 D BARNABY: Four minutes.
18 D ZARA: Do it in three.
19 D SOLOMON: Captain, I can do it faster.
20 D BARNABY: Don't touch it, kid.
21 A ¶ Zara and Solomon both turn.
22 A Barnaby's hands are already inside the panel.
23 D BARNABY [CONT'D]: I know what I'm doing.
24 D ZARA: Solomon, the seeds.
25 D SOLOMON: What about them?
26 D ZARA: They go in the airlock. If the scrubbers die, they go with us.
27 D SOLOMON: With us, where?
28 D ZARA: Anywhere.
29 A ¶ Solomon scoops the trays into his arms.
30 A The dome lights flicker.
31 A A siren whoops, then falls silent.
32 A The three of them hold perfectly still, listening to the long hush of the failing air.
33 A ¶ Then a door at the dome's edge clicks open.
34 A A WOMAN in a gray station suit and a respirator steps through, a canister in each hand.
35 A She is breathing hard.
36 D WOMAN (muffled through the mask): I found the leak. Where is the captain?
37 A ¶ Zara raises a hand.
38 A The Woman drops both canisters on the console with a ringing clang, and wrenches off her mask.
39 A Underneath: Zara's own face, twenty years younger.

### SCENE s01251 | INT. BOARDING HOUSE - KITCHEN - MORNING - 1911
Detected names (may be incomplete or contain aliases): ABIGAIL THORNBURY, ROSALIE THORNBURY-LAMB
1 A ¶ A long, low room with a range stove and a scrubbed deal table.
2 A Copper pans hang from a rack.
3 A Rain on the window.
4 A A bowl of apples.
5 A A kettle sings on the hob.
6 A ¶ ABIGAIL THORNBURY (50s, widow, apron over grey wool, hands red from lye) rolls pastry.
7 A She does it without thinking, as her mother did, and her mother's mother: out, turn, out, turn.
8 A ¶ Through the ceiling comes the sound of a bed creaking.
9 A A step.
10 A A pause.
11 A A drawer slides shut.
12 D ROSALIE [O.S.] (from upstairs, muffled): Abigail? Are you there?
13 D ABIGAIL (raising her voice slightly): Where else would I be?
14 D ROSALIE [O.S.]: I can't find my blue hat.
15 D ABIGAIL: It's on the hook in the hall.
16 D ROSALIE [O.S.]: I looked there.
17 D ABIGAIL: Look again.
18 A ¶ A pause.
19 A A longer creak.
20 A Then footsteps, light, down the back stairs.
21 A The kitchen door swings open and ROSALIE THORNBURY-LAMB (50s, younger sister, travelling coat, hat in hand) enters, pink in the cheeks.
22 D ROSALIE: It was on the hook.
23 D ABIGAIL: It's always on the hook.
24 D ROSALIE: I don't know how I missed it.
25 D ABIGAIL: You were looking for a hat. You weren't looking for a hook.
26 A ¶ Rosalie sets the hat down on the table, beside the apples.
27 A She doesn't sit.
28 A Abigail rolls and turns the pastry.
29 D ROSALIE: Is there tea?
30 D ABIGAIL: The kettle's on.
31 A ¶ Rosalie takes two cups from the dresser.
32 A Arranges them, saucers, spoons.
33 A Pours when the kettle shrieks.
34 A She sets Abigail's cup on the table at her elbow and takes her own to the window.
35 D ROSALIE: It's still raining.
36 D ABIGAIL: It's been raining since Michaelmas.
37 D ROSALIE: She'd have hated that. Mother. Always said rain made the apples sour.
38 D ABIGAIL: She said many things.
39 D ROSALIE: She said you'd stay.
40 A ¶ Abigail's hands pause on the pin.
41 A Only for a second.
42 A Then they roll.
43 D ABIGAIL: And she said you'd go. Both are true.
44 D ROSALIE: Are they?
45 D ABIGAIL: Nobody's stopping you.
46 D ROSALIE: I thought you might.
47 D ABIGAIL: I'd be a poor sister to bar a door.
48 A ¶ Rosalie sips her tea.
49 A Her face is turned to the window and the grey light; Abigail's is turned to the table.
50 A Neither sees the other's expression.
51 D ROSALIE: The train is at noon.
52 D ABIGAIL: Then you'll want an early lunch.
53 D ROSALIE: I will.
54 D ABIGAIL: I've an apple pie.
55 D ROSALIE: It's not baked.
56 D ABIGAIL: It will be.
57 A ¶ She lifts a flat circle of pastry and drapes it over a tin.
58 A Trims the edge with a knife in one smooth turn.
59 A Rosalie watches the knife.
60 D ROSALIE: You've always been so good at that.
61 D ABIGAIL: It's the only thing I'm good at.
62 D ROSALIE: That isn't true.
63 D ABIGAIL (drily): Tell me what else, then.
64 D ROSALIE: You were good at being left.
65 A ¶ Abigail's knife stops.
66 A She doesn't look up.
67 D ABIGAIL: That's unkind.
68 D ROSALIE: It's the truth. I mean it kindly.
69 D ABIGAIL: I know you do.
70 A ¶ A long, quiet moment.
71 A The kettle ticks as it cools.
72 A Rosalie crosses, sets down her cup.
73 A Takes an apple from the bowl, then a second, and hands one to Abigail.
74 A They peel in silence, side by side, the skins coming off in two unbroken spirals.
75 D ROSALIE: Yours is longer.
76 D ABIGAIL: It always is.
77 A ¶ She drops her spiral in the bin.
78 A Rosalie keeps hers, curled in her palm like a small snake, a moment longer than she needs to.
79 D ROSALIE: I'll write.
80 D ABIGAIL: You won't.
81 D ROSALIE: I will.
82 D ABIGAIL: Then I'll read it.
83 A ¶ Rosalie smiles.
84 A She sets the peel on the table.
85 A It uncurls slowly and lies there, pale, in the lamplight.
86 T FADE OUT.

### SCENE s01674 | INT. COLD STORAGE WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): RAFA, ZUNIGA, BEATRIX LUND, YUSUF KANDEMIR, OSEI MENSAH, LIV HARTWELL, DOMINIK VOSS
1 A ¶ Frost on steel racks.
2 A Breath fogs.
3 A A forklift sits idle.
4 A ¶ RAFAEL "RAFA" ZUNIGA (40s, crew chief) crouches beside a pallet of frozen tuna.
5 A Earpiece in.
6 A ¶ BEATRIX LUND (30s, safecracker) rolls a case across the floor.
7 A YUSUF KANDEMIR (20s, driver) leans on the forklift, eating an apple.
8 D RAFA: Thirty minutes. Guard rotation is clockwork.
9 D YUSUF: Always is, until it isn't.
10 D BEATRIX: Relax. Nobody's coming.
11 A ¶ Two more shapes move between the racks: OSEI MENSAH (50s, tech) and LIV HARTWELL (30s, inside woman, wearing a warehouse vest).
12 A They set a monitor on a pallet.
13 D OSEI: Cameras loop. Thirty seconds of clean footage, then it resets.
14 D LIV: My badge opens the vault door. After that, it's yours.
15 A ¶ Everybody breathes easier.
16 A Yusuf laughs.
17 A Rafa almost smiles.
18 A ¶ Then the lights snap on.
19 A Full white.
20 A A klaxon wails.
21 A ¶ DOMINIK VOSS (50s, security director, long coat) steps out from behind a rack with a pistol at his side.
22 A Four armed guards fan out behind him.
23 A ¶ Rafa, Beatrix, Yusuf, Osei and Liv freeze.
24 A Nobody moves.
25 D DOMINIK: Evening, everyone. Liv. Thank you for the invitation.
26 A ¶ Liv doesn't look at anyone.
27 A Beatrix lunges at her; Osei catches Beatrix by the arm.
28 A Yusuf drops the apple and bolts.
29 A The guards tackle him against the racks.
30 D RAFA: Liv. What did you do?
31 D LIV: What I had to.
32 A ¶ Dominik raises a hand.
33 A The klaxon stops.
34 A The only sound is Yusuf's ragged breathing and the hum of the freezers.

### SCENE s00315 | INT. ARMORED PARKING GARAGE, P4 - NIGHT
Detected names (may be incomplete or contain aliases): VIC, ODUYA-LINDGREN, ANNA, BRAITHWAITE-NKOSI, REG, ASANTE-HOLM, DEACON TIMOTHY ABARA-VOSS
1 A ¶ Concrete.
2 A Sodium glare.
3 A Four people in a ring around a black sedan with its trunk open.
4 A ¶ VIKTOR "VIC" ODUYA-LINDGREN (40s, tailored coat).
5 A ANNELIESE "ANNA" BRAITHWAITE-NKOSI (30s, gloves).
6 A REGINALD "REG" ASANTE-HOLM (50s, armed).
7 A And the fourth, tied to a chair, a gag around his neck: DEACON TIMOTHY ABARA-VOSS (60s, cufflinks).
8 D VIC: Anna, take the gag off.
9 D ANNA: Vic, he'll shout.
10 D VIC: He won't.
11 D REG: He will.
12 D VIC: Deacon, will you shout?
13 D DEACON (hoarse): No.
14 D ANNA: He's lying.
15 D VIC: He's tired. Tired men don't shout.
16 D DEACON: Please, Victor.
17 D VIC: Don't "please" me. You sold the list.
18 D DEACON: I sold nothing.
19 D REG: We've got the bank record.
20 D DEACON: Then the bank record's wrong.
21 D ANNA: Reg, check his phone.
22 D REG: Already did. Nothing.
23 D ANNA: Nothing doesn't mean innocent.
24 D VIC: No. It means careful.
25 D DEACON: Victor, listen. I wasn't the one.
26 D VIC: Then who?
27 D DEACON (a long beat): Ask her.
28 A ¶ Every head turns toward Anna.
29 A She doesn't flinch.
30 D ANNA: That's a nice try, Deacon.
31 D DEACON: Check her laptop.
32 D REG: Anna.
33 D ANNA: Reg, don't.
34 D VIC: Anna.
35 A ¶ The ring tightens.
36 A In the silence, a distant door clanks open and footsteps echo down the ramp.

### SCENE s00513 | INT. CHEESE AGING CAVE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HONORIA WYNDHAM-LEE, FERMIN OKONKWO-DAHL, MADAME SOLANGE ARQUETTE, ROLLO PINKERTON
1 A ¶ A limestone tunnel hung with lanterns.
2 A Wooden shelves stacked with wheels of cheese, each stamped with a date.
3 A The air is cold, damp, and sharp with ammonia.
4 A Somewhere, water drips.
5 A ¶ INSPECTOR HONORIA WYNDHAM-LEE (50s, tailored overcoat, gloves) walks the aisle with a leather satchel, tapping the wheels with a small silver hammer.
6 A ¶ Behind her trails FERMIN OKONKWO-DAHL (30s, cheesemonger, rubber apron), who holds a lantern high.
7 A Further back, the owner, MADAME SOLANGE ARQUETTE (60s, shawl, a wedge of cheese in her fist), muttering as she chews.
8 A ¶ A fourth figure, ROLLO PINKERTON (40s, apprentice, nervous grin), drifts at the end of the line, tidying shelves nobody asked him to tidy.
9 D HONORIA (to the group): I'll be quick. Where was Monsieur Brisard found?
10 D FERMIN: Between those two racks. Behind the Gruyère.
11 D HONORIA: Face up?
12 D FERMIN: Face down.
13 D HONORIA: In the rind?
14 D FERMIN: In the rind.
15 D SOLANGE (to herself): Forty years I have made this cheese.
16 D HONORIA: Madame Arquette?
17 D SOLANGE: Forty years and never a murder.
18 D HONORIA: We aren't calling it that yet.
19 D SOLANGE: You didn't say "accident."
20 A ¶ Honoria crouches by the rack.
21 A She runs a glove along the wooden slats and holds it to the light: a streak of blue-green mold.
22 D HONORIA: Rollo.
23 D ROLLO: Yes, Inspector?
24 D HONORIA: When did you last wash these shelves?
25 D ROLLO: Tuesday.
26 D HONORIA: This mold is a week old.
27 D ROLLO: I might have missed a spot.
28 D HONORIA: Rollo, did you see Monsieur Brisard on Tuesday?
29 D ROLLO (too fast): No.
30 D FERMIN: You did. You gave him his lunch.
31 D ROLLO: That was Monday.
32 D SOLANGE (muttering): Monday, Tuesday. All the same in a cave.
33 D HONORIA (to the room): Everyone stay where you are. Fermin, the lantern lower. There.
34 A ¶ The light drops.
35 A On the stone floor, almost invisible, a trail of fine white powder leads away down the tunnel.
36 D HONORIA [CONT'D] (quietly): Now that is interesting.

### SCENE s01502 | INT. DEBTORS' PRISON WARD, LONDON - 1788 - NIGHT
Detected names (may be incomplete or contain aliases): EZEKIEL PRIMROSE-ADEBAYO, JEMIMA HARGREAVES-OKORO, SERGEANT MAGNUS FALKENBERG, TOBIAH
1 A ¶ A vaulted brick cell lit by a single tallow candle.
2 A Straw on the stones.
3 A A barred window, a crust of ice on the sill.
4 A Water drips somewhere in the walls.
5 A ¶ Four prisoners share the space.
6 A EZEKIEL PRIMROSE-ADEBAYO (60s, once a draper, now a coat of patches) lies on a plank bed with a ledger on his chest.
7 A The young JEMIMA HARGREAVES-OKORO (20s, ragged dress, hair under a cap) sits by the candle, darning a stocking.
8 A The old soldier SERGEANT MAGNUS FALKENBERG (50s, one leg, a crutch) leans against the wall whittling a spoon.
9 A In the shadows, the child TOBIAH (8, barefoot, a ratty blanket over his shoulders) listens.
10 D EZEKIEL: They say the King is mad again.
11 D MAGNUS: They said so in 'eighty-eight.
12 D EZEKIEL: They said so in 'eighty-seven.
13 D MAGNUS: He'll be mad till he's dead.
14 D JEMIMA: Hush. The boy.
15 D TOBIAH: I'm not asleep.
16 D JEMIMA: You should be.
17 D TOBIAH: It's too cold.
18 A ¶ Magnus sets down the spoon, shuffles on his crutch to the boy, and wraps the blanket tighter, tucking it under the child's heels.
19 A Ezekiel closes the ledger and sits up, grunting.
20 A Jemima bites off her thread and holds the stocking out to Tobiah, who pulls it over a bare foot.
21 A For a moment all four are close in the candlelight, the soldier kneeling, the draper leaning, the girl smiling at the child, and the child staring back at all of them as if memorizing their faces.
22 D MAGNUS: Tomorrow it will be warmer.
23 D TOBIAH: Is that a promise?
24 D MAGNUS: It's a weather report.
25 D TOBIAH: From who?
26 D MAGNUS: From the Almighty. He writes to me.
27 A ¶ Tobiah giggles.
28 A Jemima shakes her head.
29 A Ezekiel lies back down.
30 D EZEKIEL: Then ask Him about the bailiff.

### SCENE s02183 | INT. NEONATAL ICU - NURSES' STATION - 3 A.M.
Detected names (may be incomplete or contain aliases): ELOISE FAURE, NURSE DESMOND ACHEBE, NURSE LUPE TALAKAI, ANIKA VERMA, RESPIRATORY THERAPIST BO LINDGREN, CHAPLAIN MIRIAM GOLD
1 A ¶ Soft monitors.
2 A A mug of cold tea.
3 A Six people around a whiteboard.
4 A ¶ DR. ELOISE FAURE (50s, attending) caps a marker.
5 A NURSE DESMOND ACHEBE (30s) sips his coffee.
6 A NURSE LUPE TALAKAI (40s) scrolls a chart.
7 A DR. ANIKA VERMA (30s, resident) hugs a clipboard.
8 A RESPIRATORY THERAPIST BO LINDGREN (20s) leans on the counter.
9 A CHAPLAIN MIRIAM GOLD (60s) sits quietly in the corner.
10 D FAURE: Okay. Bed six stabilised, bed nine's weaning, bed eleven is the one I'm watching.
11 D ACHEBE: Eleven's sats have been drifting.
12 D TALAKAI: Ninety-one, ninety, ninety-one.
13 D VERMA: That's within range.
14 D FAURE: It's within range for a healthy infant. Not for this one.
15 D LINDGREN: I can bump the flow.
16 D FAURE: Do it. Slowly.
17 D GOLD: The parents asked if they could come in.
18 D FAURE: At four. If nothing changes.
19 D GOLD: They're afraid it will.
20 D FAURE: So am I.
21 A ¶ A pause.
22 A The monitors keep their quiet rhythm.
23 D ACHEBE: Everything looks calm.
24 D TALAKAI: That's what scares me.
25 A ¶ Behind them, a single alarm begins to sound.
26 A Soft, then not.
27 A Bed eleven.

### SCENE s00286 | INT. COLLAPSED PARKING GARAGE, LEVEL P3 - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, RESCUER, BEATRIX
1 A ¶ Dust hangs in the beam of a headlamp.
2 A Concrete slab above, a tilted pillar, an overturned sedan with its radio humming.
3 A ¶ A WOMAN hunches in the gap between slab and floor.
4 A Fifties, parka, scraped palms.
5 A She is wedged tight and breathing carefully.
6 D WOMAN (to herself): Slow in. Slow out.
7 A ¶ The sedan radio crackles.
8 A A voice on a rescue frequency.
9 D RESCUER [V.O.]: Hello? Can anyone hear me? This is Ines Calderon, Urban Rescue Team Four.
10 A ¶ The woman lifts her head.
11 D WOMAN: I hear you.
12 D RESCUER [V.O.]: Ma'am, what's your name?
13 D WOMAN: Beatrix. Beatrix Oyelowo-Marsh.
14 D RESCUER [V.O.]: Beatrix, are you hurt?
15 D BEATRIX: Wrist. Maybe rib. I'm stuck, not bleeding.
16 D RESCUER [V.O.]: Good. We're coming. Stay still.
17 D BEATRIX: I'm not going anywhere.
18 A ¶ She almost laughs.
19 A Dust sifts down onto her shoulders.
20 A She lowers her head onto her arm and watches the beam of her headlamp tremble on the concrete.

### SCENE s00420 | INT. FOG-SIGNAL STATION - LIGHTHOUSE BASE - NIGHT
Detected names (may be incomplete or contain aliases): ORVILLE HASKELL, DELPHINE VOSS, TAMSIN
1 A ¶ A round stone room the size of a chapel, its walls sweating.
2 A A brass foghorn compressor squats in the center like a sleeping animal.
3 A Oil lamps gutter on iron hooks.
4 A Everything smells of kelp and rust.
5 A ¶ ORVILLE HASKELL (60s, gaunt, a keeper's wool coat gone green at the seams) kneels before the compressor with a wrench, his breath smoking.
6 A ¶ MRS. DELPHINE VOSS (50s, widow's black, pearl buttons, a face carved from candle wax) stands in the doorway holding a covered birdcage.
7 D HASKELL: You shouldn't have rowed out in this.
8 D DELPHINE: Neither should you have stayed.
9 A ¶ She sets the cage on a crate.
10 A Something inside shifts and settles.
11 D HASKELL: It stopped knocking an hour ago.
12 D DELPHINE (quietly): Then it has what it wanted.
13 A ¶ A shortwave radio on the shelf crackles.
14 A Haskell flinches, then crosses to it.
15 D TAMSIN [V.O.] (through static): Station Nine, this is Coast Guard Relay. Do you read? Over.
16 A ¶ Haskell thumbs the key.
17 D HASKELL: Relay, Station Nine. Fog is lifting. All quiet here.
18 D TAMSIN [V.O.]: Copy, quiet. Your lamp is out, Mr. Haskell. We show no light from the tower.
19 A ¶ Haskell looks up the spiral stair.
20 A Black.
21 A Delphine lifts the cloth from the birdcage.
22 A Empty.
23 A The little door hangs open.
24 D DELPHINE: Tell her we'll light it at dawn.
25 D HASKELL (into radio): At dawn, Relay. Station Nine out.
26 A ¶ He clicks the radio off.
27 A Far above them, slow and deliberate, something descends one step at a time.
28 D DELPHINE (barely audible): Gentle now. He is only tired.
29 A ¶ Haskell sits on the crate, the wrench loose in his hand, and watches the stair with the patience of a man who has run out of fear.

### SCENE s02173 | EXT. MOUNTAIN MONASTERY COURTYARD - ITALY - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT WALTER PIKE, ZEKE, ROSS, PRIVATE ANTONIO DELUCA, FATHER BENEDIKT, CAPTAIN HELEN MARSH, BELL
1 A ¶ Autumn, 1944.
2 A Mist clings to the cloister stones.
3 A A well in the centre.
4 A A bell with no rope.
5 A ¶ SERGEANT WALTER PIKE (30s, weathered, steady) sits on the well's rim, cleaning a rifle with a rag.
6 A CORPORAL EZEKIEL "ZEKE" ROSS (20s, lanky, bandaged hand) stares at the hills.
7 A PRIVATE ANTONIO DELUCA (19, round-faced, local boy) peels a potato into a helmet.
8 A FATHER BENEDIKT (70s, white beard, patched habit) sweeps the stones.
9 A CAPTAIN HELEN MARSH (30s, army nurse, sleeves rolled) writes in a notebook on an upturned crate.
10 D PIKE: Padre, there's no need for that.
11 D FATHER BENEDIKT: There is always need. The leaves do not respect armies.
12 A ¶ Pike smiles faintly and goes on cleaning.
13 A Zeke drifts over to the well.
14 A Deluca keeps peeling.
15 D ZEKE: Quiet one this morning.
16 D PIKE: The quiet's a favour. Take it.
17 D ZEKE: You think they're coming back?
18 D PIKE: I think the lieutenant said wait. So we wait.
19 D MARSH (not looking up): Walter, tell Ross to stop pacing. It tires the patients.
20 D PIKE: You heard the captain.
21 D ZEKE: I'm not pacing. I'm walking.
22 D MARSH: Then walk where I can't see you.
23 A ¶ Zeke grins, holds up his bandaged hand in surrender, and sits beside Pike.
24 D DELUCA: Sergeant, my mother makes this with garlic. Will the Padre have garlic?
25 D FATHER BENEDIKT: The Padre has one head of garlic. It is for Sundays.
26 D DELUCA: It is Sunday.
27 D FATHER BENEDIKT (a beat): Is it?
28 A ¶ Pike checks his watch.
29 A Shakes it.
30 A Winds it.
31 D PIKE: Might be.
32 A ¶ Father Benedikt sets down the broom and walks toward the kitchen.
33 A Deluca follows with the helmet.
34 D ZEKE: Don't give him all of it, Tony.
35 D DELUCA: I will give him what he asks.
36 D ZEKE (low, to Pike): He thinks we're on holiday.
37 D PIKE: Let him.
38 D MARSH: Walter. Come here a moment.
39 A ¶ Pike sets the rifle on the rim and crosses to her.
40 A She hands him the notebook.
41 D MARSH [CONT'D]: Count them.
42 D PIKE (reading): Eleven. Seven walking.
43 D MARSH: Four can't. I need a truck by tomorrow.
44 D PIKE: There's no truck.
45 D MARSH: Then a mule. A cart. A door and four men.
46 D PIKE: I'll ask the Padre. He knows every shed on this hill.
47 D MARSH: Ask him gently.
48 D PIKE: I'm always gentle.
49 D MARSH: You are always tired. It sounds the same.
50 A ¶ Pike nearly laughs.
51 A He hands back the notebook.
52 A Behind them Zeke has picked up the rifle and is turning it over.
53 D PIKE: Ross.
54 D ZEKE: Just looking.
55 D PIKE: Looking costs nothing. Put it down.
56 A ¶ Zeke sets it down.
57 A Pike and Zeke look at each other, then at the hills, then at nothing.
58 A ¶ A BELL rings once from somewhere far below.
59 A They all stop.
60 A Marsh, Pike, Zeke.
61 A Even Deluca, in the kitchen doorway.
62 D ZEKE [CONT'D]: That's the village.
63 D PIKE: That's a goat with a bell.
64 D DELUCA (from the doorway): It is not a goat. It is Signora Fiore. She rings it when the bread is ready.
65 A ¶ Beat.
66 A Pike exhales.
67 D PIKE: Bread's ready.
68 D MARSH (to everyone): Then let us eat before somebody changes their mind.
69 A ¶ They file toward the kitchen.
70 A Pike last.
71 A He picks up the broom, finishes the corner Father Benedikt left, and follows.

### SCENE s01693 | INT. TRANSIT AUTHORITY LOST-PROPERTY OFFICE - DAY
Detected names (may be incomplete or contain aliases): OPAL REINHARDT, OLDER MAN, AMBROSE
1 A ¶ Shelves of umbrellas, gloves, a prosthetic leg.
2 A Fluorescent tubes.
3 A A counter with a bell.
4 A ¶ OPAL REINHARDT (40s, cardigan, lanyard) sorts a bin of scarves, folding each into a neat square, one at a time, with the slow rhythm of someone who has not slept.
5 A At the counter, an OLDER MAN (70s, flat cap, grocery bag) waits, rocking on his heels, patient, polite, watching her.
6 D OPAL: Be right with you.
7 D OLDER MAN: No rush.
8 A ¶ She finishes the scarf.
9 A Moves to the next.
10 A He glances at the shelves, at the umbrellas, at the leg, and back at her.
11 D OPAL [CONT'D]: What did you lose?
12 D OLDER MAN: A coat.
13 D OPAL: Color?
14 D OLDER MAN: Gray. Wool. My wife's initials in the lining.
15 D OPAL: Date?
16 D OLDER MAN: Fourteenth. On the Number 9.
17 A ¶ She crosses to a rack, runs her fingers along the hangers, and stops at a gray coat.
18 A She lifts it, turns it inside out, finds the stitched letters.
19 A She says nothing for several seconds.
20 D OPAL [CONT'D]: What initials?
21 D OLDER MAN: M.R.
22 A ¶ She lowers the coat onto the counter, smoothing the sleeves.
23 A Her hands tremble.
24 D OPAL: Sir. What's your name?
25 D OLDER MAN: Ambrose Reinhardt.
26 A ¶ She closes her eyes.
27 A Opens them.
28 A Looks at him properly for the first time.
29 A He looks back at her, and something in his posture shifts, softens, as though he has recognized her also.
30 D AMBROSE: Opal?
31 D OPAL: Hello, Dad.
32 A ¶ He takes the coat.
33 A He doesn't put it on.
34 A He holds it against his chest while the bell above the door jingles for someone else entirely.

### SCENE s01528 | INT. LIGHTHOUSE KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): POLLY, ADEYEMI-CROSS, JUNIOR, RADIO
1 A ¶ A storm shakes the shutters.
2 A A radio crackles on the table beside a cold stew.
3 A ¶ LEOPOLDINA "POLLY" ADEYEMI-CROSS, 60s, grips the edge of the sink.
4 A She is looking at nothing.
5 A ¶ Her son JUNIOR, 30s, stands in the doorway with a duffel bag, rain on his shoulders.
6 A He doesn't take another step.
7 D RADIO [V.O.]: Coast guard to Beacon Nine. Polly, do you copy? Over.
8 A ¶ She doesn't answer.
9 A He crosses to the table and lifts the handset.
10 D JUNIOR: It's Junior. She's here.
11 D RADIO [V.O.]: Junior. The Marguerite went down off the point. Your father's boat. We have two survivors. Not him yet. Over.
12 A ¶ He puts it down.
13 A Doesn't release it.
14 A She turns.
15 D POLLY: Say it.
16 D JUNIOR: Mama.
17 D POLLY: Say what they said.
18 D JUNIOR: Not him yet.
19 A ¶ She hurls the stew bowl at the wall.
20 A It shatters.
21 A He flinches but does not move.
22 A ¶ She slumps into a chair, breathing hard.
23 A He kneels before her.
24 A Takes her hands.
25 D POLLY: Don't you dare.
26 D JUNIOR: Mama, I'm here.
27 D POLLY (small): Light the lamp.
28 A ¶ He nods.
29 A Rises, crosses to the stairs.
30 A She watches him go up into the dark.
