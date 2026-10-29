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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00014.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00844 | INT. POLAR STATION HALLEY-9, MEDICAL BAY - NIGHT
Detected names (may be incomplete or contain aliases): SUNNIVA ERIKSEN, IBRAHIM TARAWNEH, LAKSHMI
1 A ¶ A cramped clinic: one exam bed, one monitor, one satellite screen glowing blue on the wall.
2 A Wind howls at the walls.
3 A ¶ DR. SUNNIVA ERIKSEN, 40s, the station physician, stands at the screen with her arms crossed.
4 A IBRAHIM TARAWNEH, 30s, a mechanic, sits on the bed with a bandaged hand and a gray face.
5 D SUNNIVA: Dr. Lakshmi, can you hear me?
6 D LAKSHMI [V.O.]: I can. Go ahead, Sunniva. Describe the wound.
7 D SUNNIVA: Laceration across the palm, six centimeters. Clean edges. He's been bleeding for an hour.
8 D IBRAHIM: It's fine.
9 D LAKSHMI [V.O.]: Mr. Tarawneh, I need you to keep your hand elevated.
10 D IBRAHIM: It's elevated.
11 D SUNNIVA: It's on your knee.
12 D IBRAHIM: I'm resting it on my knee.
13 D LAKSHMI [V.O.]: Sunniva, what's his heart rate?
14 D SUNNIVA: One-ten. Pressure ninety over sixty.
15 D LAKSHMI [V.O.]: That's low for a hand wound.
16 D IBRAHIM: I'm cold.
17 D SUNNIVA: You're not cold, you're pale.
18 D LAKSHMI [V.O.]: Mr. Tarawneh, how did you cut it?
19 D IBRAHIM: Generator. A panel slipped.
20 D SUNNIVA: That's not what you told me.
21 D IBRAHIM: It's what happened.
22 D LAKSHMI [V.O.]: Ibrahim, I'm going to ask you directly. Did you take anything for the pain?
23 D IBRAHIM: No.
24 D SUNNIVA: Ibrahim.
25 D IBRAHIM: A few of the white ones. Maybe six.
26 D LAKSHMI [V.O.]: Six what?
27 D SUNNIVA: Oxycodone. The stock bottle. It's empty.
28 D LAKSHMI [V.O.]: The stock bottle held sixty tablets.
29 D IBRAHIM: I had a long winter.
30 D SUNNIVA: Ibrahim, how many?
31 D IBRAHIM: All of them. Since October.
32 D LAKSHMI [V.O.]: Sunniva, this is no longer a hand injury.
33 D SUNNIVA: I know.
34 D IBRAHIM: Please don't tell the crew.
35 D LAKSHMI [V.O.]: We will talk about that after we keep you alive.

### SCENE s02163 | INT. BOMBED CONVENT HOSPITAL - CELLAR - NIGHT
Detected names (may be incomplete or contain aliases): NURSE ODETTE BRANDT, CAPTAIN ZELDA MOSS
1 A ¶ 1944.
2 A A low stone cellar.
3 A Candle stubs.
4 A A cot, a bucket, a stack of crates marked with red crosses.
5 A Plaster dust rains gently with each distant explosion.
6 A A water pipe drips in the dark.
7 A ¶ NURSE ODETTE BRANDT, 30s, apron torn at the hem, bandages wrapped around her wrists like bracelets, kneels on the flagstones sorting what little remains of the pharmacy.
8 A Across from her, wedged against a barrel, sits CAPTAIN ZELDA MOSS, 30s, in an officer's tunic stiff with dried mud, one boot off, one leg propped and bound with a splint made from a broom handle.
9 A ¶ Nobody has spoken for a long time.
10 D ODETTE: I have four morphine ampoules left.
11 D ZELDA: Save them.
12 D ODETTE: For whom?
13 D ZELDA: For the ones who can still be saved.
14 D ODETTE: She asked for water an hour ago. And she hasn't said anything since.
15 D ZELDA: Who?
16 D ODETTE: The girl on the third cot.
17 D ZELDA: I'm not talking about her.
18 D ODETTE: I know.
19 D ZELDA: Then why bring her up?
20 D ODETTE: Because she is the only one who is still here to be saved.
21 A ¶ Zelda's mouth twitches.
22 A She looks at the splinted leg.
23 D ZELDA: Is it broken?
24 D ODETTE: The bone is cracked. Not through.
25 D ZELDA: So I can walk.
26 D ODETTE: She can walk.
27 D ZELDA: I said "I."
28 D ODETTE: Sorry. I meant you.
29 A ¶ A shell lands close.
30 A Dust falls from the vault in a long, soft sheet.
31 A The candles gutter.
32 A Odette covers the crates with her body.
33 A Zelda puts her hand over her eyes.
34 A The shudder passes.
35 D ZELDA: That was ours.
36 D ODETTE: How can you tell?
37 D ZELDA: The whistle goes down at the end.
38 D ODETTE: What does that mean?
39 D ZELDA: It means somebody on our side thinks we are already dead.
40 D ODETTE: Then they will walk the line tomorrow.
41 D ZELDA: If there is a tomorrow.
42 D ODETTE: There will be.
43 D ZELDA: You say that to every patient.
44 D ODETTE: I say it to myself.
45 A ¶ Zelda laughs.
46 A A short, bitter sound.
47 A She lets her head fall back against the barrel.
48 D ZELDA: Do you have a family?
49 D ODETTE: A sister, in Lyon.
50 D ZELDA: I had a brother in Leeds.
51 D ODETTE: Had?
52 D ZELDA: Have. I think.
53 A ¶ Silence.
54 A The pipe drips.
55 A Odette picks up a vial.
56 A Reads the label.
57 A Puts it down.
58 D ODETTE: I'm going to give you one.
59 D ZELDA: No.
60 D ODETTE: Captain.
61 D ZELDA: I said no, Nurse.
62 D ODETTE: She said no. Is that right?
63 D ZELDA: She means me.
64 D ODETTE: Then I'll obey her.
65 A ¶ Zelda snorts.
66 A Odette stays where she is.
67 A A long beat.
68 A Above them, boots on the broken floor.
69 A Voices.
70 A A rifle butt knocks the cellar door.
71 A ¶ Both women look up.
72 A Zelda reaches for a pistol on the crate.
73 A Odette puts her hand over Zelda's.
74 D ODETTE [CONT'D]: Wait.
75 D ZELDA: Wait for what?
76 D ODETTE: For a word.
77 A ¶ The door bursts.
78 A A man's voice in English, loud and cracking.
79 D ZELDA (a whisper): That's one of ours.
80 D ODETTE: Then say it.
81 A ¶ Zelda draws breath, gathers herself, and shouts up the stairs in a hoarse, cracked voice.
82 D ZELDA: Down here! We are down here!
83 A ¶ The boots thunder toward them.
84 A Odette picks up the ampoule and, very slowly, tucks it back in the crate.
85 A Then she begins to cry, softly, without sound.

### SCENE s02117 | INT. COUNTY JAIL - ATTORNEY VISITING BOOTH - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY ROSALINDA FAIRWEATHER-KIM, ERNESTINE VOSS-ADEBAYO
1 A ¶ A narrow cinderblock booth split by a thick pane of scratched glass.
2 A A steel counter on either side, a black wall phone on each.
3 A Fluorescent hum.
4 A A clock on the wall behind the prisoner's side reads 2:14.
5 A ¶ ATTORNEY ROSALINDA FAIRWEATHER-KIM, 40s, in a navy suit with a legal pad open on the counter, sits on a bolted stool.
6 A Across the glass sits her client, ERNESTINE VOSS-ADEBAYO, 60s, in an orange jumpsuit, hands folded, back straight as a rail.
7 A They each hold a receiver.
8 D ROSALINDA (into phone): You look tired.
9 D ERNESTINE [V.O.] (over phone): I'm sixty-three. I look tired.
10 D ROSALINDA: Did they feed you?
11 D ERNESTINE [V.O.] (over phone): A sandwich. I won't characterize it.
12 D ROSALINDA: Ernestine, I need you to listen.
13 D ERNESTINE [V.O.] (over phone): I'm listening.
14 D ROSALINDA: The prosecutor offered a plea.
15 D ERNESTINE [V.O.] (over phone): No.
16 D ROSALINDA: You haven't heard it.
17 D ERNESTINE [V.O.] (over phone): I've heard the word plea. That's enough.
18 D ROSALINDA: Five years. Instead of fifteen.
19 D ERNESTINE [V.O.] (over phone): I did not take the money.
20 D ROSALINDA: I know.
21 D ERNESTINE [V.O.] (over phone): Then why should I say I did?
22 D ROSALINDA: Because a jury might say you did.
23 D ERNESTINE [V.O.] (over phone): Let them.
24 D ROSALINDA: They've got the ledger. They've got your signature on it.
25 D ERNESTINE [V.O.] (over phone): My signature on a forged ledger.
26 D ROSALINDA: We don't have proof of forged.
27 D ERNESTINE [V.O.] (over phone): Then find it.
28 D ROSALINDA: I have been looking for six months.
29 D ERNESTINE [V.O.] (over phone): Look harder.
30 D ROSALINDA (a long breath): Ernestine. I need you to understand what fifteen years means.
31 D ERNESTINE [V.O.] (over phone): I'll be seventy-eight.
32 D ROSALINDA: Yes.
33 D ERNESTINE [V.O.] (over phone): And if I plead, I'll be sixty-eight, with a record, and everyone in the church will whisper.
34 D ROSALINDA: That's one way to see it.
35 D ERNESTINE [V.O.] (over phone): It is the way I see it.
36 A ¶ She smooths the front of her jumpsuit, once, with the flat of her hand.
37 A Across the glass, the lawyer watches the gesture, then lowers her pen.
38 D ROSALINDA: All right. Then we go to trial.
39 D ERNESTINE [V.O.] (over phone): Thank you.
40 D ROSALINDA: Don't thank me yet. I haven't won.
41 D ERNESTINE [V.O.] (over phone): You haven't lost either.

### SCENE s00370 | INT. GRAIN BARGE "MARIE LOUISE" - GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): HALVARD KROGH, INGRID, TOBY, BRONWEN PELL, KNOCK, STRANGER, OSKAR
1 A ¶ A narrow cabin frozen into the river ice.
2 A A cast-iron stove ticks.
3 A Frost feathers the porthole.
4 A ¶ HALVARD KROGH, 60, barge captain, bearded, patient hands, ladles thin soup into tin bowls.
5 A His daughter INGRID, 30, wrapped in a army blanket, counts crackers into piles on the table.
6 A ¶ TOBY, 10, Ingrid's son, sits cross-legged on the bunk, tracing a face in the frost on the glass.
7 A ¶ BRONWEN PELL, 70, a retired schoolteacher with a deaf ear and a sharp one, knits something that is clearly never going to be finished.
8 D HALVARD: Eight days. The ice master said ten at most.
9 D INGRID: He also said the thaw would come on the first.
10 D BRONWEN (too loud): What was that?
11 D INGRID: Nothing, Mrs. Pell.
12 D TOBY: Grandpa, the stove's quiet.
13 D HALVARD: It's saving its strength.
14 A ¶ A calm settles.
15 A The soup steams.
16 A Even the wind seems to have gone to bed.
17 A Ingrid slides a cracker pile toward her son and he slides it back.
18 D INGRID: Eat, Toby.
19 D TOBY: You first.
20 A ¶ A KNOCK on the hull.
21 A Three slow raps.
22 A Everyone stops.
23 A ¶ Halvard sets down the ladle.
24 A He takes a boat hook from the wall and opens the hatch.
25 A Snow blows in.
26 A ¶ A man stands on the ice, hatless, rimed white, a canvas sack over one shoulder.
27 A This is the STRANGER, 40s, soft-spoken, smiling with the lower half of his face only.
28 D STRANGER: Forgive me. I saw your smoke from the north bank. I walked a long way.
29 D HALVARD: Nobody walks that ice. It's rotten past the channel buoy.
30 D STRANGER: Then I walked carefully.
31 A ¶ Halvard weighs him, then steps back.
32 A The stranger climbs down and sits where he is told, nearest the stove.
33 D INGRID: What's your name?
34 D STRANGER: Oskar. Oskar Venn.
35 D BRONWEN: Venn? I taught a Venn. Little boy, wet cough, always drew boats.
36 D OSKAR: Not me, I'm afraid.
37 D HALVARD: Ingrid. Soup.
38 A ¶ Ingrid hands Oskar a bowl.
39 A He holds it with both hands and does not drink.
40 D OSKAR: Is it only the four of you?
41 D HALVARD: Does it matter?
42 D OSKAR: Only in the way that counting matters.
43 D TOBY: We're not four. There's Gunnar.
44 D INGRID: Toby.
45 D TOBY: He's under the deck.
46 A ¶ Silence.
47 A Halvard looks at his daughter.
48 A She looks at the floor.
49 D OSKAR: Under the deck.
50 D HALVARD: My deckhand. He went through the ice on the third day, going for the line. We brought him back. We have not been able to take him ashore.
51 D OSKAR: I'm sorry.
52 D HALVARD: You're not.
53 D OSKAR: No. I'm not. I'm relieved. I won't have to explain myself to a man who's still looking for his friend.
54 D BRONWEN (very loud): What did he say?
55 D HALVARD: Mr. Venn, tell me why you walked out here.
56 D OSKAR: There were nine of us on the grain wharf at the start. We drew straws for who walked the river. The others are sleeping in a warehouse with the doors chained. I did not draw a short straw, Captain. I drew the only straw that said the barge had food.
57 D INGRID: Who told you we had food?
58 D OSKAR: The man who sold you the flour, three weeks ago. He sold it to us as well. He kept a ledger of every boat that bought from him, and every boat that did not leave before the freeze.
59 D HALVARD: You're from the company.
60 D OSKAR: I'm from the harbor. The company is a letter on the door. Nobody's coming for this barge, Captain. Not on the first. Not on the tenth. They wrote you off the day the ice closed, and the river has been kind to them by taking you quietly.
61 D TOBY: Mom?
62 D INGRID: Hush.
63 D OSKAR: I have bread in this sack. And salt. And a lantern, which is how I found you. I came to trade.
64 D HALVARD: Trade what?
65 D OSKAR: Passage. There is a way across that holds. I walked it. I can take two more tonight, three if the child is small and nobody argues.
66 D BRONWEN: Two?
67 D OSKAR: Three.
68 A ¶ Halvard lowers the boat hook.
69 A Ingrid stands.
70 A The stove pops, loud as a shot, and nobody looks at it.
71 D INGRID: Three of five.
72 D OSKAR: Three of five. I did not draw the numbers.
73 A ¶ Halvard slowly turns to the hatch, reaches for the lantern, and blows it out.
74 A The galley falls dark but for the red slot of the stove.
75 D HALVARD: Then you will wait for morning, Mr. Venn. And in the morning, you will show me this way across. Alone.
76 D OSKAR (softly): That is not the arrangement.
77 A ¶ In the dark, the sound of a knife leaving a sheath.
78 A It is not Halvard's.

### SCENE s01926 | INT. LAUNDROMAT - 2 A.M.
Detected names (may be incomplete or contain aliases): RUBY ACHTERBERG, DOMI, PELLEGRINO, KWABENA ASARE, SHOSHANA BLUM
1 A ¶ A buzzing sign: "OPEN 24 HRS."
2 A Rows of dryers tumble in sleepy rhythm.
3 A The floor is sticky.
4 A A TV above the folding table plays infomercials on mute.
5 A ¶ RUBY ACHTERBERG, 17, in an oversized hoodie, sits on a dryer, legs dangling, eating gummy worms.
6 A Across from her, DOMINIC "DOMI" PELLEGRINO, 17, stands guard over a laundry bag.
7 D RUBY: Domi, you've been folding that sock for ten minutes.
8 D DOMI: It's a delicate operation.
9 A ¶ KWABENA ASARE, 18, a lanky skateboarder with a broken wrist in a cast, slips through the door, board under his good arm.
10 A SHOSHANA BLUM, 17, in a prom dress and combat boots, follows two steps behind.
11 D KWABENA: Look who's still alive.
12 D DOMI: Kwabena. You're supposed to be at the hospital.
13 D KWABENA: Hospital's boring. Shoshana drove.
14 D SHOSHANA: I did not drive. I steered. Your skateboard did the rest.
15 D RUBY: She means she dragged him on it.
16 D SHOSHANA: Ruby, you're not helping.
17 A ¶ Domi drops the sock.
18 A He walks up to Shoshana, close.
19 D DOMI: Why are you wearing a prom dress at two a.m.?
20 D SHOSHANA: Because someone asked me and then left me at the punch bowl.
21 A ¶ Ruby slides off the dryer.
22 A Kwabena looks at his shoes.
23 D RUBY: Kwabena. Tell me you did not.
24 D KWABENA: I got a call about the cast, okay? I had to go!
25 D SHOSHANA: You told me it was an emergency. It was a cast.
26 D DOMI: You left her at prom for a cast?
27 D KWABENA: It hurt, Domi!
28 A ¶ Domi shoves Kwabena.
29 A Kwabena stumbles into a dryer and drops the board.
30 A Ruby grabs Domi's arm.
31 A Shoshana kicks the board away.
32 D RUBY: Enough! All of you!
33 D SHOSHANA: Ruby, let him hit me. I want to know what it feels like.
34 D DOMI: I'm not hitting you!
35 D KWABENA: Then why are you shouting?
36 A ¶ Silence.
37 A A dryer buzzes and the door pops open.
38 A A single red sock rolls out and spins to a stop on the tile.
39 A ¶ Ruby picks it up.
40 A She holds it out to Domi.
41 A He takes it.
42 A His hand is shaking.
43 D DOMI: Sorry, Shosh.
44 D SHOSHANA: Sorry, Kwabena. I did steer.
45 D KWABENA: You steered fine.

### SCENE s01355 | INT. SALOON DURING A THUNDERSTORM - NIGHT
Detected names (may be incomplete or contain aliases): BARN, COLE, SUNNY WELLS, REVEREND THOMAS GRIGG, MERCEDES SOTO, JED, PIKE
1 A ¶ Lamplight.
2 A Rain drumming on the tin roof.
3 A Poker chips.
4 A A cracked mirror behind the bar.
5 A ¶ BARNABY "BARN" COLE, 40s, bartender, polishes a glass.
6 A SUNNY WELLS, 20s, deals cards in the corner.
7 A REVEREND THOMAS GRIGG, 60s, nurses a whiskey.
8 A MERCEDES SOTO, 30s, in a duster, sits alone, a rifle across her knees.
9 A Two cowhands, JED and PIKE, 20s, play with Sunny.
10 D JED: Barn, another round.
11 D BARN: Jed, you're drunk.
12 D JED: I'm thirsty.
13 D PIKE: Same thing, Jed.
14 D REVEREND GRIGG: Gentlemen, the Lord watches.
15 D JED: The Lord can watch me pay.
16 A ¶ Mercedes lifts her head.
17 A She watches Jed's hand.
18 A Jed's hand moves to his gun.
19 D MERCEDES: Jed Hawkins.
20 D JED: Who's asking?
21 D MERCEDES: Mercedes Soto. You killed my brother in Tucson.
22 A ¶ Silence.
23 A Lightning.
24 A Pike pushes back from the table.
25 A Sunny drops the deck.
26 A Barn slowly sets down the glass.
27 D BARN: Ma'am. Not in my bar.
28 D MERCEDES: Barn, step aside.
29 A ¶ Jed draws.
30 A Mercedes fires first.
31 A Jed drops, clutching his arm.
32 A Pike dives behind the table.
33 A Sunny scrambles under it.
34 A The Reverend crosses himself and kneels.
35 D BARN: Everybody stay down!
36 D REVEREND GRIGG: Lord, forgive us!
37 A ¶ Mercedes stands over Jed, rifle on his chest.
38 A Thunder shakes the roof.
39 D JED (through his teeth): He pulled first.
40 D MERCEDES: My brother never pulled first in his life.
41 A ¶ Barn raises his hands.
42 A Pike peeks up.
43 A Sunny crawls out.
44 A The Reverend rises and walks to Jed's side, kneels.
45 D REVEREND GRIGG: Miss Soto, let me tend him.
46 D MERCEDES: Reverend, he's yours.
47 A ¶ She lowers the rifle, turns, and walks out into the rain.

### SCENE s02271 | EXT. MISSOURI RIVER FERRY LANDING - DUSK
Detected names (may be incomplete or contain aliases): HOLLIS CRANE, PERPETUA VANCE, ELIAS TWOCROWS
1 A ¶ A flat-bottomed ferry is chained to a cottonwood stump, rocking on brown water the width of a county.
2 A The sky has gone the colour of a bruise.
3 A ¶ HOLLIS CRANE, lean and sun-cured, leans on the ferry rail.
4 A He wears a gun he has not touched in nine years.
5 A He watches the far bank without blinking.
6 A ¶ A woman stands at the ramp with a carpetbag in each hand.
7 A PERPETUA VANCE, forty, black mourning dress, hat pinned hard.
8 A She sets down one bag.
9 A She keeps the other.
10 D PERPETUA: You're the ferryman.
11 D HOLLIS: Was.
12 A ¶ He spits over the rail.
13 A The brown water takes it without comment.
14 D PERPETUA: Then who is.
15 D HOLLIS: Nobody. River's closed since the Tuesday flood. Company let us all go.
16 A ¶ She looks at the chain.
17 A She looks at him.
18 A She says nothing, which is its own kind of answer.
19 A ¶ She lifts the second bag and sets it on the plank between them.
20 A The latch is open a finger's width.
21 A Inside, the blued steel of a revolver catches the last light.
22 D HOLLIS [CONT'D] (quiet): Ma'am.
23 D PERPETUA: My husband crossed here a week ago. The man who took his fare. I'd like a word.
24 A ¶ A shout rolls over the water from the far bank, flattened by distance.
25 D ELIAS TWOCROWS [O.S.] (hailing): Hollis! Is that her? Is that the widow?
26 A ¶ He does not turn.
27 A His jaw works.
28 A The hand that rests on the rail begins, very slowly, to slide toward his hip.
29 D PERPETUA: Who is that?
30 D HOLLIS: My brother.
31 D ELIAS TWOCROWS [O.S.] (nearer, a rifle bolt clacking): Don't let her on the boat, Hollis!
32 A ¶ She steps onto the ferry.
33 A The planks complain.
34 A She puts her hand on the bag.
35 D PERPETUA: Then it was you who took the fare.
36 D HOLLIS: I took it for him.
37 A ¶ He draws.
38 A She draws.
39 A A crack splits the dusk, then another, and the cottonwood stump fountains bark.
40 A The chain snaps and the ferry lurches free, spinning into the current with the two of them still standing, still firing, on its drifting deck.

### SCENE s02333 | INT. AGING CAVE - ALPINE CHEESE VAULT - NIGHT
Detected names (may be incomplete or contain aliases): VESNA, DMITRI, KOFI
1 A ¶ Stone walls, sweating.
2 A Wheels of cheese stacked to the vaulted ceiling, wooden shelves groaning.
3 A Humidity gauge on a post.
4 A Temperature: 11 C.
5 A ¶ VESNA, 30s, in a hairnet and black coverall, drops from a ventilation shaft onto a shelf.
6 A Lands soft.
7 A Gloved hands to the stone.
8 A ¶ DMITRI, 40s, big for a safecracker, follows.
9 A His shoe slips on a wheel.
10 A It rolls.
11 A He catches it against his chest and holds very still.
12 D VESNA (whispering): You are a disaster.
13 D DMITRI: It's slippery.
14 D KOFI [V.O.] (over earpiece, crackling): Talk to me. Where are you?
15 D VESNA (touching her ear): Inside. Cave three.
16 D KOFI [V.O.]: Camera sweep in forty seconds. Left aisle. Don't breathe.
17 A ¶ Vesna waves Dmitri forward.
18 A They creep along the wall.
19 A At the far end stands a steel cabinet with a keypad.
20 A Dmitri sets down the cheese, wipes his hands, and presses his ear to the door as if listening to a heartbeat.
21 A Vesna scans the ceiling for the camera, counting on her fingers.
22 D KOFI [V.O., CONT'D]: Twenty seconds.
23 D DMITRI (whispering): Is nineteen digits.
24 D VESNA: It's always nineteen digits.
25 D KOFI [V.O.]: Ten.
26 A ¶ The camera swings toward them.
27 A Dmitri throws himself between two stacks of cheese.
28 A Vesna dives behind a ladder.
29 A The lens sweeps the aisle, pauses, moves on.
30 A ¶ Vesna exhales.
31 A Dmitri's arm trembles from holding the wheel above him.
32 D DMITRI: Can I put it down?
33 D VESNA: No.
34 D KOFI [V.O.]: Alarm's armed. You have ninety seconds before the guard rotates.
35 A ¶ Dmitri finally sets the cheese on the shelf.
36 A Cracks his knuckles.
37 A Starts the code.
38 A The keypad chirps, red, red, green.
39 A He glances at Vesna.
40 A She glances back.
41 A Behind them, soft footsteps echo in the passage.
42 A Vesna's eyes go wide.
43 D VESNA (whispering): That's not the guard.
44 D KOFI [V.O.]: Say again?
45 A ¶ The cabinet clicks open.
46 A Inside, a single wheel of cheese, wrapped in gold foil.
47 D DMITRI: That's it?
48 D VESNA: That's forty thousand euros of cheese.
49 D DMITRI: It's a little small.
50 A ¶ Footsteps closer.
51 A Vesna grabs the wheel.
52 A Dmitri grabs her sleeve.
53 A They bolt for the shaft.

### SCENE s02258 | INT. HIGH SCHOOL GYM - LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): WHITLOCK, DRE, KENZIE, SAL, MOOKIE, ILYA, ALL
1 A ¶ Cinderblock walls painted maroon.
2 A Benches bolted to the floor.
3 A A whiteboard with X's and O's smeared into gray.
4 A ¶ COACH BARNABY "BARN" WHITLOCK, fifties, a whistle around his neck and a clipboard under his arm, paces.
5 A DRE, seventeen, the point guard.
6 A KENZIE, sixteen, a power forward, ties her sneakers.
7 A SAL, eighteen, a center, towel over his head.
8 A MOOKIE, fifteen, the smallest, bounces a ball.
9 A ILYA, seventeen, a transfer, stares at his hands.
10 D COACH WHITLOCK (to the room): Listen up. Fourth quarter, eight points down. This is the league final. Eight points, four minutes.
11 D DRE: We can do eight.
12 D KENZIE: We've done more.
13 D SAL (muffled under the towel): We have not.
14 D COACH WHITLOCK: Sal, towel off your head.
15 D SAL: Yes, Coach.
16 D COACH WHITLOCK: Mookie, put the ball down.
17 D MOOKIE: Sorry, Coach.
18 A ¶ He doesn't put it down.
19 A Whitlock glares.
20 A Mookie tucks it under his arm.
21 D COACH WHITLOCK: Dre, you bring it up fast. Kenzie, set the screen. Sal, roll to the rim. Ilya.
22 D ILYA: Yes, Coach?
23 D COACH WHITLOCK: You're the corner shooter.
24 D ILYA: I missed my last four.
25 D COACH WHITLOCK: You'll hit the next one.
26 D ILYA (to himself): I don't know.
27 D KENZIE (to Ilya): You will. Don't think.
28 D COACH WHITLOCK: That's right. Don't think. Shoot.
29 A ¶ A pounding at the door.
30 A A buzzer blares in the gym beyond.
31 D COACH WHITLOCK: That's two minutes! Up!
32 A ¶ The team rises as one.
33 A Dre slaps Sal's shoulder.
34 A Kenzie punches Ilya's arm, gently.
35 A Mookie scrambles onto a bench and, for a moment, stands taller than anyone.
36 D MOOKIE: We got this!
37 D COACH WHITLOCK (drily): Get off the bench, Mookie.
38 A ¶ Mookie hops down.
39 A They form a circle, hands in the middle.
40 D DRE: One, two, three.
41 D ALL: Go!
42 A ¶ They file out.
43 A Whitlock watches them go, then glances at the whiteboard and wipes it clean with his sleeve.
44 D COACH WHITLOCK [CONT'D] (muttering): Eight points. Four minutes. Please.

### SCENE s01283 | INT. CARGO SHIP SICK BAY - NIGHT
Detected names (may be incomplete or contain aliases): REUBEN ABARA, FELIX
1 A ¶ A steel cabin the size of a closet.
2 A A table bolted to the floor.
3 A Storm light flickers.
4 A The hull groans.
5 A ¶ DR. REUBEN ABARA, 40s, a ship's physician in a bloody apron, presses a pad to the wound in an unconscious sailor's side.
6 A The ship pitches.
7 A Instruments skid across the tray.
8 A He pins them with an elbow, clamps a vessel with his free hand, and wipes his brow on his shoulder.
9 A ¶ An intercom speaker crackles on the wall.
10 D FELIX [V.O.] (crackling): Sick bay, bridge. Doc, how is he?
11 A ¶ Reuben leans toward the speaker without lifting his hands.
12 D REUBEN: Bleeding. Lung's punctured. I need him on a ventilator and you've given me a bicycle pump.
13 D FELIX [V.O.]: Nearest port is eleven hours.
14 D REUBEN: He doesn't have eleven hours, Felix.
15 D FELIX [V.O.]: I know. I'm the second mate. I'm the one who found him.
16 A ¶ Static.
17 A Reuben reaches for a long needle and a loop of tubing.
18 A A wave slams the hull.
19 A The lamp swings.
20 A Reuben shields the wound with his body, then straightens, blood on his forearm, and steadies the table with his knee.
21 D REUBEN: Felix. Can you hold her steady?
22 D FELIX [V.O.]: She's a cargo ship in a gale. She'll do what she wants.
23 D REUBEN: Then pray.
24 D FELIX [V.O.]: Doc, I haven't prayed since '09.
25 D REUBEN: Start.
26 A ¶ He slides the needle between the ribs.
27 A A wet hiss of air.
28 A Colour floods the sailor's face.
29 A He breathes, deep and even.
30 D FELIX [V.O.]: Doc? Doc, I heard that. Is he...
31 D REUBEN: He's breathing.
32 A ¶ A long silence on the line.
33 A Then, thin and cracked, a laugh.
34 D FELIX [V.O.]: Good. Good. I'll tell the captain.
35 A ¶ Reuben slumps against the bulkhead.
36 A Slides down it until he sits on the deck, hands loose between his knees, blood drying on his cuffs.
37 D REUBEN (to himself): Eleven hours.
38 D FELIX [V.O.]: Doc?
39 D REUBEN: Nothing. Keep her steady, Felix.

### SCENE s02388 | INT. HOUSEBOAT GALLEY - THANKSGIVING - DUSK
Detected names (may be incomplete or contain aliases): GRAN ODALYS BEAUCHAMP, KEZIAH, PAVEL, EZRA
1 A ¶ A narrow kitchen the length of a railway carriage, every surface gleaming with small domestic order.
2 A Condensation clouds the porthole.
3 A Outside, lake water slaps the hull in the failing light.
4 A A turkey rests under foil on the counter, steaming faintly.
5 A ¶ GRAN ODALYS BEAUCHAMP, seventy, sits at the end of the fold-down table with a crocheted shawl across her knees.
6 A Her daughter KEZIAH, forties, moves between stove and sink with the quick, precise gestures of someone who has done this a hundred times.
7 A Her husband PAVEL, forties, stands in the doorway with a bottle of wine, unsure where to put it, and at the table's other end EZRA, twelve, folds a paper napkin into a series of increasingly elaborate boats.
8 A ¶ She says nothing.
9 A He says nothing.
10 A The kettle begins to whistle.
11 D KEZIAH (to the room): Everyone sit. It's almost ready.
12 D PAVEL: I'll pour.
13 D KEZIAH: You'll pour after grace.
14 D PAVEL: I can pour before grace.
15 A ¶ She shoots him a look.
16 A He sets the bottle down and sits.
17 A Ezra's boat tips on its side.
18 A He rights it.
19 D GRAN ODALYS: Ezra, darling. Come sit by me.
20 D EZRA: I'm fine here.
21 D GRAN ODALYS: Come sit by me.
22 A ¶ He slides along the bench.
23 A She pats his knee.
24 A For a moment, nobody breathes, and the water laps and the kettle shrieks and Keziah moves it off the flame without looking.
25 D KEZIAH (muttering to herself): Don't. Don't. Don't.
26 A ¶ She carries the turkey to the table, slides it into place, and unwraps the foil.
27 A Steam rises over their faces.
28 A Pavel clears his throat.
29 D PAVEL: It looks wonderful.
30 D GRAN ODALYS: It looks like the one from nineteen eighty-eight.
31 D KEZIAH: Mother.
32 D GRAN ODALYS: I'm saying it's lovely.
33 A ¶ She lifts her glass of water.
34 A Looks at each of them in turn.
35 A Her gaze stops on Keziah.
36 D GRAN ODALYS [CONT'D] (to everyone): I have something to tell you all.
37 A ¶ Ezra stops folding.
38 A Pavel sits very still.
39 A Keziah grips the carving knife.
40 D GRAN ODALYS [CONT'D] (to Keziah): I sold the house.
41 D KEZIAH (a whisper): Mother.
42 D GRAN ODALYS: And I'm moving onto this boat.
43 A ¶ Silence.
44 A The water slaps.
45 A The turkey steams.
46 A Ezra lets go of the napkin and it unfolds on the table.

### SCENE s00029 | INT. AIR TRAFFIC CONTROL TOWER, SMALL REGIONAL AIRPORT - NIGHT
Detected names (may be incomplete or contain aliases): OZZIE, FAIRWEATHER, PRU, MARTIN ESPERANZA, JUNE TAKAHASHI, PILOT
1 A ¶ A glass-walled octagon above a dark runway.
2 A Radar scope glows green.
3 A A cold cup of coffee sits beside a ham sandwich with one bite out of it.
4 A ¶ OSWALD "OZZIE" FAIRWEATHER (60s, headset, cardigan) sits at the console, steady and unhurried.
5 A Next to him stands his granddaughter, PRUDENCE "PRU" FAIRWEATHER (17, school uniform, backpack), holding a notebook.
6 A She is supposed to be doing homework.
7 A She is not.
8 A ¶ Two others fill the cramped room.
9 A One is MARTIN ESPERANZA (30s, shift supervisor, tie loosened), who hovers over the radar.
10 A The other is a trainee, JUNE TAKAHASHI (19, apron over uniform, nervous), who clutches a clipboard.
11 D OZZIE: Pru, if you're going to watch, watch properly. Come around here.
12 D PRU: Grandpa, I'm fine.
13 D OZZIE: Come on.
14 A ¶ She steps beside him.
15 A He nods to the scope.
16 D OZZIE [CONT'D]: That blip is a Cessna. November-Four-Two-Seven. See how she drifts?
17 D PRU: Why?
18 D OZZIE: Crosswind. He's fighting it.
19 A ¶ Pru leans closer.
20 A Her breath fogs the glass.
21 D PILOT [V.O.] (over radio, crackling): Tower, Cessna Four-Two-Seven, ten miles out, requesting landing.
22 A ¶ Ozzie squeezes the mic.
23 D OZZIE (into radio): Four-Two-Seven, Tower, runway two-seven, wind two-six-zero at eighteen gusting twenty-five. Say your fuel state.
24 D PILOT [V.O.] (over radio): Tower, Four-Two-Seven, thirty minutes of fuel. We're good.
25 D MARTIN (muttering): Thirty minutes. In that wind.
26 D JUNE: Should I call the fire crew?
27 D MARTIN: Not yet.
28 A ¶ Ozzie hands the headset to Pru.
29 D PRU: Grandpa, no.
30 D OZZIE: Just say what I say. "Four-Two-Seven, cleared to land."
31 A ¶ She hesitates, then pulls the headset on.
32 A Her voice shakes.
33 D PRU (into radio): Four-Two-Seven, cleared to land.
34 D PILOT [V.O.] (over radio): Cleared to land, Four-Two-Seven. Who's this? You sound young.
35 D PRU: Um. I'm... training.
36 D PILOT [V.O.] (over radio): Good job, trainee. See you on the ground.
37 A ¶ Pru stares at her grandfather, wide-eyed.
38 A He chuckles and pats her shoulder.
39 D OZZIE: Eyes on the scope, Pru. That's the whole job.
40 A ¶ Below them, tiny landing lights wobble through the dark, steadying, lowering.
41 A They all watch it touch down.

### SCENE s00175 | INT. MUNICIPAL CLOCK TOWER - MECHANISM ROOM - DAY
Detected names (may be incomplete or contain aliases): ARTHUR PENROSE-LIND, MIRIAM VOSS, DEZ, OYELOWO, CALLUM BRIGHT
1 A ¶ A cramped stone chamber crowded with brass gears the size of cartwheels.
2 A A pendulum swings slowly behind a wire cage.
3 A Dust floats in the shafts of light from a narrow slit window.
4 A The ticking is steady, enormous, almost restful.
5 A ¶ ARTHUR PENROSE-LIND, 60s, silver mustache, tweed jacket, kneels over a toolbox with the unhurried air of a man being paid by the hour.
6 A His partner MIRIAM VOSS, 50s, sharp-eyed and gray-braided, sits on an upturned bucket with a ledger on her knee.
7 A DESMOND "DEZ" OYELOWO, 30s, in a maintenance jumpsuit, oils a gear with a long-spouted can while keeping one ear on the stairwell.
8 A Perched on the stairs, a nervous teenager, CALLUM BRIGHT, 17, holds a walkie-talkie he has not been asked to use.
9 D ARTHUR: Fine work, Dez. The old girl's never sounded better.
10 D DEZ: She hasn't been oiled since Truman.
11 D MIRIAM (not looking up): The bank vault is directly below the east face. Four feet of brick, then the floor.
12 D ARTHUR: And the pendulum shaft goes down how far?
13 D MIRIAM: Right to the ceiling of the vault annex. Nobody ever sealed it.
14 A ¶ Arthur nods, pulls a coil of rope from the toolbox, and measures it against his arm.
15 A Dez sets down the oil can and checks the cage latch.
16 A Callum shifts on the step.
17 A The walkie-talkie crackles with static, and he fumbles it to silence.
18 D CALLUM: Sorry.
19 D ARTHUR: Nothing to be sorry for, lad. Nothing at all.
20 D MIRIAM: Thursday, then. After the noon chime, before the council tour.
21 D DEZ: The council tour is at one.
22 D MIRIAM: Then we have forty minutes. Plenty.
23 A ¶ The clock gathers itself and strikes the quarter hour.
24 A The gears turn.
25 A Nobody flinches.

### SCENE s01505_0 | INT. GRAND HOTEL LOBBY, SNOWED IN - NIGHT
Detected names (may be incomplete or contain aliases): RAYMOND, EUDORA, ELMER
1 A ¶ A cavernous lobby of marble and brass.
2 A A grand staircase.
3 A A dead fireplace.
4 A Snow piled against the revolving door.
5 A Candles in saucers on every table.
6 A ¶ Six people occupy the room.
7 A They have not yet spoken to one another.
8 A ¶ DETECTIVE RAYMOND OKONKWO-HAYES.
9 A 50s.
10 A Rumpled.
11 A Smokes unlit cigarettes.
12 A ¶ LADY EUDORA PEMBERTON-ASANTE.
13 A 70s.
14 A Pearls.
15 A A cane with a silver head.
16 A ¶ PROFESSOR ISIDORE KOWALSKI-BRIGHT.
17 A 60s.
18 A Tweed.
19 A Spectacles on a chain.
20 A ¶ MISS CALLISTA DEVEREAUX-ADEYEMI.
21 A 30s.
22 A Evening gown.
23 A Scarlet lipstick.
24 A ¶ DOCTOR SAMUEL NAKAMURA-OKORO.
25 A 40s.
26 A Medical bag at his feet.
27 A ¶ THE DESK CLERK, ELMER FINNEGAN-LUU.
28 A 20s.
29 A Terrified.
30 A ¶ A scream cuts through the lobby, from upstairs.
31 A Everyone freezes.
32 A A door slams.
33 D RAYMOND: Nobody move.
34 D EUDORA: I wasn't going to.
35 D RAYMOND: Clerk. Who's on the third floor?
36 D ELMER: Mr. Delacroix, sir. Room 312.
37 D RAYMOND: Key.
38 A ¶ Elmer fumbles under the desk.
39 A Slides a brass key across the counter.
40 A Raymond snatches it and bounds up the stairs.
41 A The others stand frozen, until Samuel grabs his bag and follows.
42 A Callista watches him go, sets down her glass, and races after, leaving Eudora and Isidore alone with the clerk.

### SCENE s00433 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): FRANCISCO MEDRANO, NINA VOLKOVA, ROLAND BECK
1 A ¶ Concrete and sodium light.
2 A One car left, a black sedan with its trunk open.
3 A FRANCISCO MEDRANO (40s, courier jacket) and NINA VOLKOVA (30s, trench coat) stand on either side of it.
4 A Between them, a leather satchel on the floor.
5 D FRANCISCO: You said alone.
6 D NINA: I am alone.
7 A ¶ A footstep echoes.
8 A Both turn.
9 A ROLAND BECK (50s, hands in pockets) steps out from behind a pillar.
10 D ROLAND: Not quite.
11 D FRANCISCO: You're early.
12 D NINA: You're late. Hand it over.
13 D ROLAND: Both of you, calm down.
14 D FRANCISCO: He's got a gun.
15 D NINA: I know he's got a gun.
16 A ¶ She lunges for the satchel.
17 A He lunges for her wrist.
18 A They collide and go down, the satchel skidding across the concrete.
19 A Roland steps forward and plants a boot on it.
20 D ROLAND: That's enough. Both of you, up.
21 A ¶ They rise slowly, breathing hard.
22 A Roland picks up the satchel and weighs it in his hand.
23 A Then he tosses it back at Francisco, and walks away.
24 D NINA (staring after him): What was that?
25 A ¶ Francisco unzips the satchel.
26 A Inside, it is empty.

### SCENE s01156 | INT. WITCH'S TOWER - TOP CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): WITCH IOLANTHE
1 A ¶ A round room of grey stone, windows shuttered against a gale.
2 A Shelves of jars, bundled herbs, an iron cauldron cold on its hook.
3 A A single candle in a bottle.
4 A On a table, a roll of parchment sealed with black wax.
5 A ¶ WITCH IOLANTHE (70s, long white hair, moth-eaten shawl, bare feet) lowers herself onto a stool by the table.
6 A She stares at the parchment for a long time.
7 A She doesn't touch it.
8 D IOLANTHE (to herself): Well. Don't be a coward.
9 A ¶ She cracks the seal with her thumbnail.
10 A The wax pops loose.
11 A The parchment unrolls itself like a tongue.
12 A A small silver bell falls out and rings once on the stone.
13 A ¶ She picks up the parchment.
14 A Her lips move as she reads, and then a voice, her own, young and clear, speaks from the page.
15 D IOLANTHE [V.O.] (reading, her younger voice): "Dear Iolanthe, if you are reading this, the winter was long, and I am afraid I am not coming back. I left the tower to you because no one else could climb it."
16 A ¶ Iolanthe sets the parchment on her knee.
17 A She laughs, short and dry.
18 D IOLANTHE [CONT'D]: You always had a flair for drama.
19 A ¶ She goes to the shutter and cracks it.
20 A Wind rushes in, sending the candle flame dancing.
21 A Beyond the glass the black sea of the forest tosses below.
22 D IOLANTHE [V.O., CONT'D] (reading): "The cauldron needs oil. The raven eats only on Thursdays. And do not, whatever you do, open the third door."
23 A ¶ Iolanthe frowns.
24 A She looks at the iron door in the far wall.
25 A It has been boarded over, rusted, nails bent.
26 D IOLANTHE (muttering): Third door. Third door.
27 A ¶ She crosses the room.
28 A Presses her palm against the wood.
29 A Cold.
30 A She exhales, takes the bell from the floor, and sets it on a shelf where it catches the candlelight.
31 D IOLANTHE [V.O., CONT'D] (reading, softer): "But if you must, then know that I have not left you alone. Ring the bell three times, and let the room answer."
32 A ¶ Iolanthe lifts the bell.
33 A Studies it.
34 A She glances at the boarded door.
35 D IOLANTHE: Absolutely not.
36 A ¶ She sets the bell down.
37 A The wind knocks at the shutter.
38 A She closes it, latching it with a firm hand, and returns to the stool.
39 A The parchment is still open on her knee.
40 A One last line glows at the bottom, in her own handwriting.
41 D IOLANTHE [V.O., CONT'D] (reading, very gently): "I am only asking you to be brave once."
42 A ¶ Iolanthe's shoulders drop.
43 A For a while she sits, breathing.
44 A Then she rises, goes to the shelf, picks up the bell, and holds it out at arm's length.
45 D IOLANTHE: Fine.
46 A ¶ She rings it once.
47 A Twice.
48 A Her hand shakes.
49 A She lowers it for the third.
50 A ¶ She rings it.
51 A ¶ Behind her the nails in the boarded door begin to slide out, one by one, ringing on the stone.
52 A She doesn't turn around.
53 A She sets the bell down on the table, picks up the candle in its bottle, and walks toward the door.

### SCENE s01375_0 | INT. LAMPLIGHTERS' GUILD - COPPER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CORNELIUS AGNEW, TOBIAS HALE
1 A ¶ 1887.
2 A Gas London.
3 A A narrow workshop lined with lamp-heads, brass keys, and tin oil cans.
4 A A single jet burns low over a scarred table.
5 A ¶ CORNELIUS AGNEW, 70, stooped, spectacles on a cord, polishes a lamp-glass with a rag.
6 A He does it too slowly.
7 A He has all night.
8 A ¶ The door opens.
9 A Cold fog drifts in.
10 A ¶ TOBIAS HALE, 28, wet through, bowler in hand, ink-stained cuffs, enters.
11 A He looks around like a man who has been here before.
12 D TOBIAS: Mr. Agnew.
13 D CORNELIUS: You're late.
14 D TOBIAS: The omnibus broke an axle.
15 D CORNELIUS: I said ten o'clock.
16 D TOBIAS: It is ten o'clock.
17 A ¶ Cornelius lifts the glass to the jet.
18 A Squints through it.
19 D CORNELIUS: Quarter past, by my reckoning.
20 A ¶ Tobias lets that sit.
21 A Hangs his hat on a hook.
22 A Doesn't sit.
23 D TOBIAS: You asked me here.
24 D CORNELIUS: I did.
25 D TOBIAS: You said it was about the Pettigrew matter.
26 D CORNELIUS: It is.
27 A ¶ He sets the glass down.
28 A Lifts another.
29 A Starts again.
30 A ¶ A long beat.
31 A A long, patient beat.
32 D TOBIAS: Mr. Agnew, I have an editor waiting on copy.
33 D CORNELIUS: Let him wait.
34 D TOBIAS: I can't.
35 D CORNELIUS: You can. It's an extraordinary thing, waiting. You'd be surprised what a man will say when you let him.
36 D TOBIAS: Is that what this is?
37 D CORNELIUS: I'm an old man. I'm only polishing.
38 A ¶ Tobias crosses to the table.
39 A Looks at the lamp-glass.
40 A At the old man's hands, trembling slightly.
41 D TOBIAS: Eleven lamps went dark on Marlow Street the night Pettigrew died.
42 D CORNELIUS: Eleven.
43 D TOBIAS: Someone put them out.
44 D CORNELIUS: The wind.
45 D TOBIAS: There was no wind.
46 A ¶ Cornelius puts down the rag.
47 A Takes off his spectacles.
48 A Folds them.
49 D CORNELIUS: You've done your homework.
50 D TOBIAS: I've done nothing yet.
51 D CORNELIUS: Then you'll want to sit.
52 A ¶ Tobias stays standing.
53 A Cornelius shrugs and lowers himself onto a stool, bones cracking.
54 D CORNELIUS [CONT'D]: I was told to do it. By a man in a good coat. He paid me forty sovereigns.
55 D TOBIAS: Who?
56 D CORNELIUS: I don't know his name.
57 D TOBIAS: Would you know his face?
58 D CORNELIUS: I'd know his coat.
59 A ¶ Tobias takes out a notebook.
60 A Writes.
61 A The pencil scratches loud in the quiet.
62 D TOBIAS: Why are you telling me?
63 D CORNELIUS: Because I've lit those lamps for fifty-one years. And I put out eleven in one night so a man could be killed in the dark.
64 A ¶ He looks up.
65 A His eyes are wet and clear.
66 D CORNELIUS [CONT'D]: That's a hard thing to polish off.
67 A ¶ Tobias stops writing.
68 A Looks at him a while.
69 D TOBIAS: They'll hang you.
70 D CORNELIUS: Probably.
71 D TOBIAS: I should say I won't print it.
72 D CORNELIUS: But you will.
73 D TOBIAS: I will.
74 D CORNELIUS: Good lad.
75 A ¶ Somewhere in the fog outside, a church bell tolls the half hour.
76 D TOBIAS (quiet): I'm sorry.
77 D CORNELIUS (quiet): Don't be.
78 A ¶ They speak at the same time.
79 D TOBIAS: You could run.
80 D CORNELIUS: ^ I'd like to finish my round.
81 A ¶ They both stop.
82 A The jet hisses.
83 A Tobias lowers the pencil.
84 D TOBIAS: Your round.
85 D CORNELIUS: Marlow Street. Eleven lamps. I put them out. I'd like to put them back.
86 A ¶ Tobias puts the notebook in his pocket.
87 A Takes his hat from the hook.
88 D TOBIAS: I'll walk with you.
89 D CORNELIUS: You'll get wet.
90 D TOBIAS: I'm already wet.
91 A ¶ Cornelius almost smiles.
92 A Rises with effort.
93 A Collects a long brass pole from the corner, a hooked key hanging from its tip.
94 A ¶ He blows out the jet on the way past.
95 A They walk out together into the fog.

### SCENE s02164 | INT. GOLDEN MIC KARAOKE - PRIVATE BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): NOLA FINCH, ARTHUR BELL, SIMONE RAYE, HUGO MARTEL, KIRA BELL
1 A ¶ Velvet seats.
2 A Disco lights.
3 A A screen scrolling lyrics.
4 A Five people crowd a booth built for four.
5 A ¶ NOLA FINCH, 30s, sequins.
6 A ARTHUR BELL, 30s, a sensible sweater.
7 A SIMONE RAYE, 30s, bridesmaid in a silver dress.
8 A HUGO MARTEL, 40s, shirt open at the collar.
9 A KIRA BELL, 20s, Arthur's sister, gripping the mic.
10 D KIRA (into the mic, off-key): ...and I will always love you...
11 A ¶ She finishes.
12 A They clap.
13 A Nola leans toward Arthur.
14 A He leans toward her.
15 A She tucks her hair behind her ear.
16 A He looks away.
17 A She looks at Simone.
18 A Simone smiles and looks at Hugo.
19 A He raises his glass.
20 D NOLA: Arthur, that was a lovely toast earlier.
21 D ARTHUR: Thank you.
22 D NOLA: You said you've never been happier than tonight.
23 D ARTHUR: I meant it.
24 D NOLA: Me too.
25 D SIMONE: Aw.
26 D HUGO: Cheers.
27 D KIRA: Nola. Arthur. Would you two go up and sing the last one?
28 D NOLA: Oh, we couldn't.
29 D ARTHUR: We really couldn't.
30 D KIRA: You have to. It's tradition.
31 D HUGO: Nola, there is something I need to say first.
32 D NOLA: Hugo?
33 D HUGO: Arthur is not the man you think he is.
34 D ARTHUR: Hugo.
35 D HUGO: Seven years ago he proposed to me.
36 D NOLA: What?
37 D SIMONE: He did?
38 D HUGO: In this same booth.
39 A ¶ Nobody breathes.
40 A The lyrics keep scrolling.

### SCENE s01318 | INT. FARMHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): GRANDMA PEARL HOLLOWAY, WALT, LORNA, DANNY, ROSIE
1 A ¶ A cluttered, sunlit room.
2 A Pancakes on a griddle.
3 A Crayons and bills on the table.
4 A A dog's water bowl by the door.
5 A ¶ GRANDMA PEARL HOLLOWAY, 70s, in a floral apron, flips pancakes with the economy of long practice.
6 A Her husband WALT, 70s, in suspenders, reads the paper at the head of the table and does not look up.
7 A ¶ Their daughter LORNA, 40s, in scrubs, pours coffee into a travel mug while she packs a lunch.
8 A Her son DANNY, 12, shovels cereal.
9 A His younger sister ROSIE, 7, draws a horse on the back of a utility bill, tongue out.
10 D PEARL: Danny, chew.
11 D DANNY: I am chewing.
12 D LORNA: Danny, chew with your mouth closed.
13 D DANNY: I am!
14 A ¶ Rosie holds up her drawing.
15 A Danny snatches it.
16 A Lorna lunges across the table to catch the cereal bowl before it tips, and Walt, without lowering the paper, hooks the sugar bowl out of range with one finger.
17 A Pearl slides a pancake onto Rosie's plate, flips another onto Danny's, and kisses Lorna's cheek on the way past.
18 A The dog barks once at the window.
19 A Nobody looks.
20 D ROSIE: It's a horse.
21 D DANNY: It's a potato with legs.
22 D WALT (from behind the paper): It's a very good potato.
23 D ROSIE: Grandpa!
24 D PEARL: Walter, put the paper down.
25 D WALT: In a minute.
26 D PEARL: Walter.
27 A ¶ He folds the paper.
28 A Looks at them over his glasses.
29 A They all stare.
30 D WALT: What?
31 D LORNA (laughing): Nothing, Dad.

### SCENE s02470 | INT. CABLE-CAR SUMMIT STATION - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INGRID VOSS, KOFI OSEI, HALVORSEN, BASHIR NAZARI, LENKA DROZD
1 A ¶ Wind hums in the cables.
2 A Frost on the glass.
3 A A space heater ticks.
4 A ¶ INGRID VOSS, 50s, station operator, grey braid, both hands around a steel thermos.
5 A She watches a bank of monitors.
6 A ¶ KOFI OSEI, 20s, apprentice mechanic, grease on his cuffs, sits on a crate eating crackers.
7 A ¶ Quiet.
8 A Too quiet.
9 D KOFI: Last car's late.
10 D INGRID: Snow on the line.
11 D KOFI: You said that an hour ago.
12 D INGRID: It was snowing an hour ago.
13 A ¶ He laughs.
14 A She doesn't.
15 A ¶ On the monitor: a single gondola, CAR 7, crawling up through the dark.
16 D KOFI [CONT'D]: One passenger?
17 D INGRID: One ticket. Cash.
18 A ¶ Kofi crunches a cracker.
19 A Brushes crumbs off his knee.
20 D KOFI: Who rides up at midnight?
21 D INGRID: Someone who wants the view.
22 A ¶ The radio on the desk CRACKLES.
23 D HALVORSEN [V.O.] (over radio, thin): Base to summit. Ingrid, you there?
24 A ¶ Ingrid thumbs the key.
25 D INGRID: Go ahead, Halvorsen.
26 D HALVORSEN [V.O.]: Quick check. You got Car 7 on your board?
27 D INGRID: Coming up now.
28 A ¶ Silence on the line.
29 A Static.
30 A Too long.
31 D HALVORSEN [V.O.]: Ingrid. Car 7 is in the depot.
32 A ¶ Kofi stops chewing.
33 D INGRID: Say again.
34 D HALVORSEN [V.O.]: Seven's parked. Locked out since six. I'm looking at it.
35 A ¶ Ingrid's eyes go to the monitor.
36 A The car climbs.
37 A Closer.
38 D KOFI: Then what is that?
39 D INGRID: Kill the lights.
40 D KOFI: What?
41 D INGRID: Kill them.
42 A ¶ He slaps the wall switch.
43 A Dark.
44 A Only the monitors glow.
45 A ¶ Bolt of cold air.
46 A The stairwell door at the back, open an inch.
47 A It was shut.
48 A ¶ Kofi sees it.
49 A Freezes.
50 D KOFI (whispering): Somebody's already up here.
51 A ¶ A gloved hand pushes the door wide.
52 A ¶ BASHIR NAZARI, 30s, ski jacket, no skis, steps in.
53 A Calm hands.
54 A Wet boots.
55 A A ticket stub between two fingers.
56 D BASHIR: Evening.
57 D INGRID: You came up the service stairs.
58 D BASHIR: Eleven hundred steps. I like the exercise.
59 D KOFI: Then who's in the car?
60 D BASHIR: Ah.
61 A ¶ He checks his watch.
62 D BASHIR [CONT'D]: That'll be Lenka.
63 A ¶ The glass behind them shudders.
64 A Car 7 slams into the dock.
65 A Doors hiss open.
66 A ¶ LENKA DROZD, 40s, shaved head, black coveralls, a coil of cable ties over one shoulder, steps out of the empty-looking cabin.
67 A Unhurried.
68 D LENKA: Sorry. Traffic.
69 A ¶ Ingrid backs against the desk.
70 A Her hand finds the radio.
71 D INGRID (low, to the radio): Halvorsen. Don't send anyone.
72 D HALVORSEN [V.O.] (tight): Already sent. Two minutes.
73 D LENKA: No. It's four. Your cable's cold.
74 A ¶ She smiles at Kofi.
75 D LENKA [CONT'D]: Crackers. Good. Long night.
76 A ¶ Bashir locks the stairwell door.
77 A Click.
78 A ¶ Ingrid lifts the thermos.
79 A Sets it down.
80 A Slowly.
81 D INGRID: What do you want?
82 D BASHIR: The ledger.
83 D INGRID: There is no ledger.
84 D BASHIR: Ingrid. Your husband said you'd say that.
85 A ¶ Her face doesn't move.
86 A Kofi looks at her.
87 D KOFI: Husband?
88 A ¶ Wind drops.
89 A The heater ticks.
90 A The cable above them goes still.

### SCENE s00977 | INT. LIGHTHOUSE GALLEY - POTLUCK NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND, EDMUND, CHIKA, DMITRI, BEA, AUNT FENELLA
1 A ¶ A cramped round kitchen at the base of a lighthouse.
2 A Casserole dishes crowd every surface.
3 A A foghorn blares every ten seconds.
4 A ¶ ROSALIND (60s, apron, vengeful smile) guards a bundt cake.
5 A EDMUND (60s, golf shirt) carves a ham.
6 A CHIKA (30s, nose ring, crisp linen) pours wine.
7 A DMITRI (40s, ponytail, guitar case) leans on the counter.
8 A BEA (20s, headphones around neck) scrolls her phone.
9 D ROSALIND: I'm only saying that some of us brought homemade.
10 D EDMUND: Rosalind, it's the same casserole you brought to the last four potlucks.
11 D ROSALIND: It's a family recipe.
12 D CHIKA: It's from a can.
13 D DMITRI: Cream of mushroom. I smelled it in the parking lot.
14 D BEA: Aunt Rosalind, are you aware you're yelling?
15 D ROSALIND: I am explaining.
16 D EDMUND: Over the foghorn.
17 D ROSALIND: Because I'm tired of being the villain in this lighthouse!
18 D CHIKA: Nobody said villain.
19 D DMITRI: I said cannibal. The cake looks human.
20 D ROSALIND: It's a bundt!
21 D EDMUND: Honey, put the knife down.
22 D ROSALIND: This is a cake server!
23 D BEA: It's honestly a very sharp cake server.
24 A ¶ The door bangs open.
25 A AUNT FENELLA (80s, fur stole, cane held like a spear) sweeps in, trailing mist.
26 A Everyone stops.
27 D AUNT FENELLA: I'm told someone has been slandering my casserole.
28 D ROSALIND: Your casserole?
29 D AUNT FENELLA: Cream of mushroom, 1974. I invented it at this very counter.
30 D EDMUND: Nobody told us that.
31 D CHIKA: Why would anyone tell us that?
32 D DMITRI: Because they're afraid of her.
33 D AUNT FENELLA: Quite right.
34 D BEA: I'm getting cake.
35 D ROSALIND (whispering): Nobody touch the cake.

### SCENE s01152 | INT. FARMHOUSE KITCHEN - HARVEST NIGHT
Detected names (may be incomplete or contain aliases): OLEKSANDR, MIREILLE, TEDDY, ROSA, AUGUSTINE, KIERAN, ^ROSA
1 A ¶ A long pine table crowded with cornbread, pickled beets, and a pot of paprika stew.
2 A Oil lamps burn though the electricity works.
3 A Through the open window, the throb of a combine in the field, working late.
4 A ¶ OLEKSANDR (70s, white moustache, suspenders) sits at the head of the table, carving bread with a knife older than his children.
5 A His wife MIREILLE (60s, floured apron, silver braid) ladles stew into mismatched bowls.
6 A Their son TEDDY (40s, city jacket, gold watch) sits restlessly to the right, thumbing his phone under the table.
7 A His sister ROSA (30s, work gloves tucked into her belt, sunburned neck) leans against the stove with her arms folded.
8 A At the far end, AUGUSTINE (20s, neighbor boy, cap in his hands) waits to be told where to sit.
9 A And in the corner, perched on a milking stool, KIERAN (10, the grandson, scabbed knees, a jar of fireflies) holds the jar in both hands and watches everyone.
10 A ¶ Mireille sets a bowl in front of Teddy.
11 A He looks at it as if it were an invoice.
12 D OLEKSANDR: Eat.
13 D TEDDY: I'm not hungry.
14 D ROSA: You haven't been hungry in this house in fifteen years.
15 D TEDDY (quietly, to her): Don't start.
16 D OLEKSANDR (at the same time): Teddy, we have guests.
17 D ^ROSA (at the same time): Somebody has to start.
18 A ¶ Mireille puts the ladle down with a clink.
19 A Augustine edges toward a chair and pretends to be fascinated by the wallpaper.
20 A Kieran lifts his jar of fireflies to the lamp.
21 D ROSA [CONT'D]: The bank called about the loan again.
22 D TEDDY: I know.
23 D ROSA: You know?
24 D TEDDY: I'm the one who signed it.
25 A ¶ Oleksandr's knife stops in the bread.
26 A Mireille touches the edge of her apron.
27 A Nobody speaks.
28 A The combine in the field coughs and goes quiet.
29 A Kieran's fireflies blink.
30 D OLEKSANDR: You signed?
31 D TEDDY: For the combine. Papa, I did it for the harvest.
32 D OLEKSANDR: You put the land on that paper.
33 D TEDDY: It's a bridge loan. We pay it off in March.
34 D ROSA (low): If the wheat sells.
35 D TEDDY: It will sell.
36 D ROSA: Hail came through Tuesday. Forty acres flattened.
37 D TEDDY: Why am I only hearing about this now?
38 D ROSA: Because you only come when there's something to sign.
39 A ¶ Teddy shoves his chair back.
40 A Oleksandr raises one hand.
41 A The room freezes: Rosa with her arms locked, Teddy half-risen, Mireille clutching the ladle, Augustine wide-eyed in the lamplight, Kieran cradling his glowing jar.
42 D OLEKSANDR: Sit down.
43 A ¶ Teddy sits.
44 A Oleksandr lays the knife across the loaf, wipes his hands on his trousers, and rises, slow, using the table's edge.
45 A He crosses to the window and stands looking out into the dark.
46 D OLEKSANDR [CONT'D]: My father lost this land in forty-six. My brother and I won it back with our hands. It was never ours. It was a loan from the weather.
47 D MIREILLE: Oleksandr.
48 D OLEKSANDR: Let me say it. If the bank takes it, the bank takes it. I'm not afraid of a letter.
49 D ROSA: Papa...
50 D OLEKSANDR: What I am afraid of is this. A table where nobody tells the truth until the harvest is in.
51 A ¶ He turns.
52 A His eyes find Kieran's.
53 D OLEKSANDR [CONT'D]: Boy. What is in your jar?
54 D KIERAN: Fireflies, Dedo.
55 D OLEKSANDR: How many?
56 D KIERAN: Eleven.
57 D OLEKSANDR: Are they happy?
58 D KIERAN (considering): They glow when they're scared.
59 A ¶ A silence.
60 A Then Mireille begins to laugh, hand over her mouth, and then Rosa, and then, unwillingly, Teddy.
61 A Augustine, relieved, sits at last.
62 A Oleksandr crosses back to the table, takes Teddy by the shoulder, and sits beside him.
63 D OLEKSANDR: Eat, my son. Tomorrow we count the wheat that's left.
64 A ¶ Teddy lifts his spoon.
65 A Kieran sets his jar on the table.
66 A In the glow of eleven small lights, the family eats.

### SCENE s00963 | EXT. TREETOP MARKET, CANOPY OF THE WHISPERING WOOD - NOON
Detected names (may be incomplete or contain aliases): QUILLON FERNWHISTLE, BRAMBLE OAKENSHIELD-DIOP, TILLY WREN-ABAYOMI
1 A ¶ Rope bridges.
2 A Hanging stalls.
3 A Lanterns strung between giant branches.
4 A The market floats above the forest floor in green light.
5 A ¶ QUILLON FERNWHISTLE (any age, mossy beard, one ear pointed) hawks charms from a swaying stall.
6 D QUILLON: Lucky bones! Lucky bones!
7 A ¶ BRAMBLE OAKENSHIELD-DIOP (30s, scarred forearm, an enormous axe on her back) pushes through the crowd, scanning every stall.
8 A ¶ TILLY WREN-ABAYOMI (10, bare feet, a satchel too big for her) hops beside her, eating a honeyed fig.
9 D BRAMBLE: Stay close, Tilly.
10 D TILLY: I am close.
11 D BRAMBLE: Closer.
12 D QUILLON: Warrior-lady! Lucky bones for the child?
13 D BRAMBLE: No.
14 D QUILLON: Protection charms, then. Very cheap.
15 D BRAMBLE: I said no.
16 A ¶ Tilly tugs Bramble's sleeve.
17 A She points.
18 A At the far end of the bridge, a tall figure in a hooded cloak has stopped dead among the shoppers, looking directly at them.
19 D TILLY: Bramble.
20 D BRAMBLE: I see him.
21 D QUILLON (suddenly pale): You'll want those bones after all.
22 A ¶ The figure raises his head.
23 A Beneath the hood, no face: only a smooth plane of dark bark.
24 D BRAMBLE: Run.
25 A ¶ They bolt.
26 A The crowd parts.
27 A Behind them the hooded figure walks, calmly, as the ropes of the bridge begin to creak, then snap, one by one.
28 D TILLY (laughing, terrified): Bramble, he's chasing us!
29 D BRAMBLE: I noticed!
30 A ¶ Quillon grabs a lantern, a bundle of bones, and scrambles up the nearest branch.
31 A The bridge drops.
32 A Bramble leaps, catches a rope, hauls Tilly up beside her, and swings them both onto a platform of woven vines.
33 A ¶ They land in a heap, gasping, safe.
34 A Below, the hooded figure stands at the broken end of the bridge, looking up.
35 A Then it turns and walks away through empty air, and the forest swallows it.
36 D TILLY: Do you think he'll come back?
37 D BRAMBLE: Everything comes back.
38 D QUILLON (from above): Lucky bones, anyone?

### SCENE s00791 | INT. HOTEL BALLROOM - AFTER THE WEDDING - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, CATALINA
1 A ¶ Folding chairs askew.
2 A A deflated balloon arch.
3 A Half-eaten cake under a plastic dome.
4 A Streamers on the floor like cut ribbon.
5 A The chandelier still burns, as if nobody has told it.
6 A ¶ Nothing moves.
7 A A clock ticks.
8 A ¶ A side door opens.
9 A Heels on parquet.
10 A ¶ A WOMAN in a green evening dress, 50s, steps in, shoes in hand.
11 A Mascara tracked down one cheek.
12 A She surveys the wreckage and her mouth tightens.
13 A ¶ She crosses to the head table.
14 A Finds a tape recorder among the centerpieces, the kind guests were meant to speak into.
15 A She lifts it.
16 A Examines it.
17 A Presses record.
18 D WOMAN: Testing. One, two.
19 A ¶ She stops.
20 A Rewinds.
21 A Plays back.
22 D WOMAN [V.O.] (recorded, faint): Testing. One, two.
23 A ¶ She nods.
24 A Records again.
25 D WOMAN [CONT'D]: This is Catalina Rousseau-Mbeki, mother of the groom. I would like to say something I didn't say at the toast.
26 A ¶ She stops.
27 A Her jaw works.
28 A She sits on the edge of the stage.
29 D CATALINA: I'm sorry I wore green. I was told it wasn't hers.
30 A ¶ She lowers the recorder to her lap.
31 A Looks at the cake.
32 A Rewinds.
33 A Plays the last of it.
34 D CATALINA [V.O.] (recorded): I'm sorry I wore green.
35 A ¶ A phone rings in her purse.
36 A She lets it ring.
37 A It rings again.
38 D CATALINA (to the ceiling): Not tonight.
39 A ¶ The phone stops.
40 A She raises the recorder.
41 D CATALINA [CONT'D] (to the tape): He looked happy. That's all. Remember that. He looked happy.
42 A ¶ She sets the recorder on the stage, still running.
43 A Picks up her shoes.
44 A Crosses to the exit.
45 A At the door, she turns off the chandelier switch.
46 A ¶ Darkness.
47 A A tiny red light glows on the stage.
