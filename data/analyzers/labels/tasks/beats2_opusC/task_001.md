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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusC/group_13001.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pd_sisters_5 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHARLOTTA, LUBOV ANDREYEVNA, VARYA, PISCHIN, TROFIMOV, YASHA
1 D CHARLOTTA: Ein, zwei, drei .
2 A ¶ She quickly lifts up the shawl, which is hanging down.
3 A ANYA is standing behind it; she bows and runs to her mother, hugs her and runs back to the drawing-room amid general applause.
4 A ¶ Applauds.
5 D LUBOV: Bravo, bravo!
6 D CHARLOTTA: Once again! Ein, zwei, drei !
7 A ¶ Lifts the shawl.
8 A VARYA stands behind it and bows.
9 A ¶ Astonished.
10 D PISCHIN: Think of that, now.
11 D CHARLOTTA: The end!
12 A ¶ Throws the shawl at PISCHIN, curtseys and runs into the drawing-room.
13 A ¶ Runs after her.
14 D PISCHIN: Little wretch.... What? Would you?
15 A ¶ Exit.
16 D LUBOV: Leonid hasn’t come yet. I don’t understand what he’s doing so long in town! Everything must be over by now. The estate must be sold; or, if the sale never came off, then why does he stay so long?
17 A ¶ Tries to soothe her.
18 D VARYA: Uncle has bought it. I’m certain of it.
19 A ¶ Sarcastically.
20 D TROFIMOV: Oh, yes!
21 D VARYA: Grandmother sent him her authority for him to buy it in her name and transfer the debt to her. She’s doing it for Anya. And I’m certain that God will help us and uncle will buy it.
22 D LUBOV: Grandmother sent fifteen thousand roubles from Yaroslav to buy the property in her name--she won’t trust us--and that wasn’t even enough to pay the interest.
23 A ¶ Covers her face with her hands.
24 D LUBOV: My fate will be settled to-day, my fate....
25 A ¶ Teasing VARYA.
26 D TROFIMOV: Madame Lopakhin!
27 A ¶ Angry.
28 D VARYA: Eternal student! He’s already been expelled twice from the university.
29 D LUBOV: Why are you getting angry, Varya? He’s teasing you about Lopakhin, well what of it? You can marry Lopakhin if you want to, he’s a good, interesting man.... You needn’t if you don’t want to; nobody wants to force you against your will, my darling.
30 D VARYA: I do look at the matter seriously, little mother, to be quite frank. He’s a good man, and I like him.
31 D LUBOV: Then marry him. I don’t understand what you’re waiting for.
32 D VARYA: I can’t propose to him myself, little mother. People have been talking about him to me for two years now, but he either says nothing, or jokes about it. I understand. He’s getting rich, he’s busy, he can’t bother about me. If I had some money, even a little, even only a hundred roubles, I’d throw up everything and go away. I’d go into a convent.
33 D TROFIMOV: How nice!
34 A ¶ To TROFIMOV.
35 D VARYA: A student ought to have sense!
36 A ¶ Gently, in tears.
37 D VARYA: How ugly you are now, Peter, how old you’ve grown!
38 A ¶ To LUBOV ANDREYEVNA, no longer crying.
39 D VARYA: But I can’t go on without working, little mother. I want to be doing something every minute.
40 A ¶ Enter YASHA.
41 A ¶ Nearly laughing.
42 D YASHA: Epikhodov’s broken a billiard cue!
43 A ¶ Exit.
44 D VARYA: Why is Epikhodov here? Who said he could play billiards? I don’t understand these people.
45 A ¶ Exit.
46 D LUBOV: Don’t tease her, Peter, you see that she’s quite unhappy without that.
47 D TROFIMOV: She takes too much on herself, she keeps on interfering in other people’s business. The whole summer she’s given no peace to me or to Anya, she’s afraid we’ll have a romance all to ourselves. What has it to do with her? As if I’d ever given her grounds to believe I’d stoop to such vulgarity! We are above love.

### SCENE s01048 | INT. KRVX 91.3 FM - RURAL RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): DEE-DEE HARGROVE, ROLAND TIBBETTS, CAL PINKERTON, CALLER
1 A ¶ A cinderblock studio in a cornfield.
2 A Foam-padded walls, a mixing board with taped-over knobs, a window onto the black field.
3 A A red ON AIR light burns.
4 A ¶ DEE-DEE HARGROVE, 40s, headphones, cardigan, a thermos of tea, sits at the console.
5 A She speaks into the mic in the voice of a lifelong friend.
6 D DEE-DEE: That was Patsy Cline, and you're listening to Night Owls on KRVX. Four a.m. in Calloway County. Roads are clear and the corn is quiet.
7 A ¶ She flicks a switch.
8 A Music slides in.
9 A She leans back.
10 A ¶ ROLAND TIBBETTS, 60s, station engineer, in coveralls, enters with a toolbox and a flashlight.
11 A He sets the box down next to a cabinet of cables.
12 D ROLAND: Transmitter's running hot again.
13 D DEE-DEE: Is it going to melt?
14 D ROLAND: Not tonight.
15 D DEE-DEE: Then let it be.
16 A ¶ He snorts.
17 A Sits on a stool.
18 A Unwraps a sandwich.
19 A ¶ CAL PINKERTON, 20s, intern, lanky, sleepy, shuffles in with an armful of CDs and drops them on the console.
20 A He yawns.
21 D CAL: Request line's been quiet. Except one.
22 D DEE-DEE: Who?
23 D CAL: Doesn't give a name.
24 A ¶ The studio phone blinks.
25 A Dee-Dee pushes a button.
26 A Her mic opens to the caller, softly.
27 D DEE-DEE: KRVX, you're on the air.
28 A ¶ A pause.
29 A Static, then a thin voice, dry as paper.
30 D CALLER [V.O.]: Hello. I'd like to hear "Wild Horses."
31 D DEE-DEE: Of course. Is it for someone?
32 D CALLER [V.O.]: For the three of you.
33 A ¶ Dee-Dee looks up.
34 A Roland stops chewing.
35 A Cal looks at the window.
36 D DEE-DEE: That's very kind. May I ask your name?
37 D CALLER [V.O.]: You can see me.
38 A ¶ Out in the black field, a single flashlight clicks on.
39 A It points toward the studio.
40 A It does not move.
41 A ¶ Cal steps to the glass.
42 A Roland stands, sandwich forgotten.
43 A Dee-Dee keeps her voice steady.
44 D DEE-DEE [CONT'D] (into mic): Here's that request, folks.
45 A ¶ She slides the fader.
46 A The song begins.
47 A In the field, the flashlight goes out.

### SCENE s01063 | INT. MUSEUM OF CLOCKS - GREAT HALL - NIGHT
Detected names (may be incomplete or contain aliases): SERAPHINA VOSS, BARTHOLOMEW QUILL, KENJI AOKI, DESPINA ARVANITIS, LOOKOUT
1 A ¶ A hundred timepieces, each telling a different hour.
2 A Grandfather cases line the walls like sentries.
3 A Pendulums swing out of rhythm, ticks overlapping in a thin, endless rain.
4 A At the center, under a glass dome, a gilded astronomical clock the size of a carriage glitters, its planets frozen mid-orbit.
5 A ¶ Five minutes to midnight.
6 A The building is dark, sleeping.
7 A ¶ In the shadow of a long-case clock, four figures crouch like cats.
8 A ¶ SERAPHINA VOSS, 40s, in black from throat to ankle, headlamp dimmed to a red coin, leads.
9 A At her shoulder, BARTHOLOMEW QUILL, 60s, silk scarf, gloved fingers unscrewing the cover plate of a wall panel.
10 A KENJI AOKI, 20s, in a catering uniform with a pocketed screwdriver, carries a coil of fiber cable.
11 A DESPINA ARVANITIS, 30s, enormous eyes, a stethoscope hanging from her neck, taps a glass case with the delicacy of a safecracker.
12 A ¶ A small radio crackles from Seraphina's belt.
13 D LOOKOUT [V.O.] (whispering): Guard's on the east stairs. Two minutes.
14 D SERAPHINA (low): Understood.
15 D BARTHOLOMEW: Panel's open.
16 D KENJI: Wires are color-coded.
17 D BARTHOLOMEW: Ignore the colors. Follow the dust.
18 D KENJI: Why?
19 D BARTHOLOMEW: The ones that move are the ones they trust.
20 A ¶ Kenji nods.
21 A Pinches a wire.
22 A Clips it.
23 D DESPINA: Seraphina. The dome has a second lock.
24 D SERAPHINA: Meaning?
25 D DESPINA: Meaning it listens.
26 A ¶ She presses the stethoscope to the glass.
27 A Closes her eyes.
28 A Her whole body bends toward the sound.
29 A ¶ Tick, tick, tick, tick.
30 D DESPINA [CONT'D] (whispering): It's counting. Three seconds to a click.
31 D BARTHOLOMEW: Can you match it?
32 D DESPINA: I can try.
33 A ¶ She slides a slim tool beneath the dome's rim.
34 A Waits.
35 A A pendulum on the east wall swings out.
36 A Another answers.
37 A ¶ Tick.
38 A Click.
39 A A pin falls.
40 D LOOKOUT [V.O.]: One minute. He's at the landing.
41 D SERAPHINA: Go.
42 A ¶ Despina lifts the dome.
43 A Slow, trembling.
44 A It rises on invisible springs, a hush of glass.
45 A The planets of the clock gleam, close enough to touch.
46 A ¶ Kenji slides a velvet bag under the gilded sun and eases it free.
47 A The gears whisper once.
48 A Then still.
49 D BARTHOLOMEW (hushed): It's heavier than it looks.
50 D KENJI: They always are.
51 D LOOKOUT [V.O.]: Thirty seconds!
52 D SERAPHINA: Seal it. Back to the wall.
53 A ¶ They snap the dome back down.
54 A The pin settles.
55 A The clock gleams behind its glass, minus one small golden sun.
56 A ¶ Somewhere in the hall, a bell tolls.
57 A Midnight.
58 A Every clock in the museum begins to strike, a hundred chimes, a hundred hours, clamor and swell.
59 A ¶ The four crouch, hands over ears, as the hall rings around them like a cathedral.
60 A The guard's footsteps, if any, are drowned entirely.
61 D KENJI (laughing, shouting): That's the best alarm I ever heard!
62 D SERAPHINA: Quiet!
63 A ¶ The last chime fades.
64 A Silence, then a single tick, then a hundred.
65 D LOOKOUT [V.O.]: He's gone to the west wing. You're clear.
66 A ¶ Bartholomew exhales.
67 A Despina leans on the long-case clock, trembling and grinning.
68 A Kenji laughs without sound.
69 A Seraphina lets go of the radio.
70 D SERAPHINA: Walk. Don't run. Let's go home.

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

### SCENE pd_dollhouse_2 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE CHILDREN, NORA, MAID, HELMER
1 D THE CHILDREN: . Mother, the stranger man has gone out through the gate.
2 D NORA: Yes, dears, I know. But, don’t tell anyone about the stranger man. Do you hear? Not even papa.
3 D CHILDREN: No, mother; but will you come and play again?
4 D NORA: No, no,—not now.
5 D CHILDREN: But, mother, you promised us.
6 D NORA: Yes, but I can’t now. Run away in; I have such a lot to do. Run away in, my sweet little darlings.
7 A ¶ She gets them into the room by degrees and shuts the door on them; then sits down on the sofa, takes up a piece of needlework and sews a few stitches, but soon stops.
8 D NORA: No!
9 A ¶ Throws down the work, gets up, goes to the hall door and calls out.
10 D NORA: Helen! bring the Tree in.
11 A ¶ Goes to the table on the left, opens a drawer, and stops again.
12 D NORA: No, no! it is quite impossible!
13 A ¶ coming in with the Tree.
14 D MAID: . Where shall I put it, ma’am?
15 D NORA: Here, in the middle of the floor.
16 D MAID: Shall I get you anything else?
17 D NORA: No, thank you. I have all I want.
18 A ¶ Exit MAID.
19 A ¶ begins dressing the tree.
20 D NORA: . A candle here-and flowers here—The horrible man! It’s all nonsense—there’s nothing wrong. The tree shall be splendid! I will do everything I can think of to please you, Torvald!—I will sing for you, dance for you—
21 A ¶ HELMER comes in with some papers under his arm.
22 D NORA: Oh! are you back already?
23 D HELMER: Yes. Has anyone been here?
24 D NORA: Here? No.
25 D HELMER: That is strange. I saw Krogstad going out of the gate.
26 D NORA: Did you? Oh yes, I forgot, Krogstad was here for a moment.
27 D HELMER: Nora, I can see from your manner that he has been here begging you to say a good word for him.
28 D NORA: Yes.
29 D HELMER: And you were to appear to do it of your own accord; you were to conceal from me the fact of his having been here; didn’t he beg that of you too?
30 D NORA: Yes, Torvald, but—
31 D HELMER: Nora, Nora, and you would be a party to that sort of thing? To have any talk with a man like that, and give him any sort of promise? And to tell me a lie into the bargain?
32 D NORA: A lie—?
33 D HELMER: Didn’t you tell me no one had been here?
34 A ¶ Shakes his finger at her.
35 D HELMER: My little songbird must never do that again. A songbird must have a clean beak to chirp with—no false notes!
36 A ¶ Puts his arm round her waist.
37 D HELMER: That is so, isn’t it? Yes, I am sure it is.
38 A ¶ Lets her go.
39 D HELMER: We will say no more about it.
40 A ¶ Sits down by the stove.
41 D HELMER: How warm and snug it is here!
42 A ¶ Turns over his papers.
43 A ¶ after a short pause, during which she busies herself with the Christmas Tree.
44 D NORA: Torvald!
45 D HELMER: Yes.

### SCENE s00019 | INT. MUSHROOM FARM - GROWING TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): MAGNUS LINDGREN, ZUZU, KOWALCZYK, ABIOLA ADEBAYO-CLARK, STRANGER
1 A ¶ A mile of dark.
2 A Wet concrete.
3 A Shelves of pale caps stacked to the ceiling, glowing faintly under purple grow-lights.
4 A The air is thick with spores and damp rot.
5 A ¶ Four flashlight beams cut the gloom.
6 A ¶ MAGNUS LINDGREN (50s, farm foreman, a ring of keys, a limp) walks point.
7 A Behind him, ZUZANNA "ZUZU" KOWALCZYK (20s, seasonal picker, hairnet, boots too big) clutches a bucket.
8 A Then ABIOLA ADEBAYO-CLARK (30s, state inspector, clipboard, mask pulled under her chin).
9 A Last of all, a STRANGER (30s, soaked jacket, no ID, a duffel strapped across his back) who joined them at the gate.
10 A ¶ Something drips.
11 A Something shifts.
12 D MAGNUS: Stay close. Don't touch the shelves.
13 D ABIOLA: Why not?
14 D MAGNUS: Contamination.
15 A ¶ She scribbles on her clipboard.
16 A He doesn't watch her do it.
17 A ¶ Zuzu stops.
18 A Her light has found a shelf where the caps are wrong.
19 A Taller.
20 A Gray-veined.
21 A Their gills pulse, slow, like breathing.
22 D ZUZU: Mr. Lindgren.
23 D MAGNUS: Keep walking.
24 D ZUZU: They're moving.
25 D MAGNUS: They're not.
26 A ¶ He walks on.
27 A She doesn't.
28 A The Stranger steps up beside her and lowers his light until it falls on the cap nearest them.
29 A It leans toward the beam.
30 A Just slightly.
31 A Then away.
32 D STRANGER: They don't like the light.
33 D ZUZU: Who are you?
34 A ¶ He doesn't answer.
35 A Behind them, Abiola's pen scratches, stops, scratches again.
36 D ABIOLA: Foreman. Your water logs don't match the humidity readings.
37 D MAGNUS: I'll fix it.
38 D ABIOLA: Not a fix. A discrepancy.
39 D MAGNUS: I said I'll fix it.
40 A ¶ He is walking faster.
41 A Keys jangling.
42 A The tunnel bends.
43 A The grow-lights dim in the curve and the shelves close in on both sides.
44 A ¶ Zuzu hurries to catch up, nearly stumbling.
45 A Her flashlight beam wobbles over a patch of floor.
46 A Something lies there, wrapped in a hairnet.
47 A A boot.
48 A Half a boot.
49 A ¶ She stops.
50 A Her mouth opens, closes.
51 D ZUZU (whisper): Abiola.
52 D ABIOLA: Hm?
53 D ZUZU: Look at the floor.
54 A ¶ Abiola looks.
55 A Her pen stops mid-word.
56 D ABIOLA: Mr. Lindgren. What is that.
57 A ¶ Magnus has turned.
58 A He holds his light on the boot, then on Zuzu, and for a moment nobody says anything at all.
59 D MAGNUS: Previous picker. Quit last week.
60 D ABIOLA: Quit without his boot?
61 D MAGNUS: People are strange.
62 A ¶ The Stranger takes one slow step backward.
63 A His duffel scrapes a shelf.
64 A A cap bends toward him.
65 D STRANGER (low): Don't move.
66 A ¶ Everyone freezes.
67 A The dripping stops.
68 A The glow from the shelves swells, then settles, like a held breath released.
69 A ¶ Then: a rustle, far down the tunnel.
70 A Many small sounds.
71 A Soft as a hand on silk.
72 D ZUZU (barely audible): What is that?
73 A ¶ The Stranger looks at Magnus.
74 A Magnus looks at his keys.
75 D STRANGER: He knows.
76 D MAGNUS: I don't.
77 D STRANGER: Then why did you lock the gate behind us?
78 A ¶ Abiola turns to Magnus slowly.
79 A Her clipboard lowers.
80 D ABIOLA: Mr. Lindgren.
81 D MAGNUS: It's protocol.
82 D ABIOLA: It's a lie.
83 A ¶ The rustling is closer.
84 A Zuzu's bucket tips and spills a hundred pale caps onto the concrete.
85 A They quiver.
86 D ZUZU: Please. Please just open the gate.
87 A ¶ Magnus pulls the ring of keys from his belt, holds them out in his shaking hand.
88 D MAGNUS: I can't. They're not for the gate. They're for the door at the other end.
89 D STRANGER: What's at the other end?
90 A ¶ Magnus finally lifts his eyes.
91 D MAGNUS: The reason it's quiet now.
92 A ¶ The rustling stops.
93 A The grow-lights flicker.
94 A A single cap, dead center on the floor, begins to rise.
95 A ¶ Zuzu exhales.
96 A And the Stranger, slowly, unslings the duffel, unzips it, and takes out a small steel canister with a red valve.
97 D STRANGER: Then we go the other way.

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

### SCENE s01051 | INT. HOLLOWAY CIDER MILL - PRESS ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNIPER HOLLOWAY, RHYS DOYLE, BEATA NOWAK, COLM, OLUWASEUN ADEYEMI
1 A ¶ A long timber barn that smells of fermenting apples and wet wood.
2 A Wooden presses with iron screws, barrels stacked to the rafters.
3 A A lantern on a hook sways in a draft nobody can find.
4 A Bees drowse in the beams, drunk on sugar, their hum a low drone.
5 A ¶ JUNIPER HOLLOWAY, 50s, mill owner, apron stained russet to the elbows, ladles pulp into a cloth.
6 A Her braid is thick as a rope.
7 A ¶ RHYS DOYLE, 30s, hired hand, leans on a broom and doesn't sweep.
8 A BEATA NOWAK, 60s, Juniper's sister, sits on an upturned crate peeling an apple in one unbroken ribbon.
9 A COLM, 20s, the grandson, perches on a barrel with a harmonica he isn't playing.
10 A OLUWASEUN ADEYEMI, 40s, the buyer from the city, in a camel coat that doesn't belong here, taps a clipboard.
11 D JUNIPER (to the room): Last press of the season. Then we can all go home.
12 D RHYS: Or stay.
13 D BEATA: No one's staying.
14 D OLUWASEUN: I do need a count by midnight.
15 D JUNIPER: You'll have it.
16 A ¶ She turns the screw.
17 A Juice runs into a trough, amber and slow.
18 A The sound is oddly soft.
19 D COLM: It sounds like someone breathing.
20 D BEATA: It's the cider, Colm.
21 D COLM: Not the cider. Under it.
22 A ¶ They go still.
23 A The juice drips.
24 A The bees hum.
25 A And beneath it all, a slow, wet inhale.
26 A Then an exhale.
27 D RHYS (muttering): Pipes.
28 D JUNIPER: There are no pipes in the press room.
29 D OLUWASEUN: Is there a basement?
30 A ¶ Juniper and Beata exchange a look so quick it's nearly nothing.
31 D BEATA: No basement.
32 D JUNIPER: We don't dig here.
33 D OLUWASEUN: Why not?
34 D JUNIPER: The ground doesn't like it.
35 A ¶ Oluwaseun smiles, thinks it a joke.
36 A Nobody smiles back.
37 A ¶ The lantern swings.
38 A Its light crosses Rhys's face, Beata's hands, Colm's eyes, Juniper's braid.
39 A The hum of bees thickens.
40 A ¶ Juniper lifts a ladle to her lips.
41 A Tastes.
42 A Her face doesn't change.
43 D JUNIPER [CONT'D] (to Colm): Put your harmonica down, love.
44 D COLM: I wasn't--
45 D JUNIPER: Now.
46 A ¶ He sets it on the barrel.
47 A It rolls an inch.
48 A Stops.
49 A ¶ Beata stops peeling.
50 A The ribbon of apple skin hangs, quivering, in her fingers.
51 D BEATA (softly): It's early.
52 D JUNIPER: It's early.
53 D OLUWASEUN: What is?
54 A ¶ The breathing quickens.
55 A The barrel under Colm shudders.
56 A The staves bulge, as if something inside is leaning out.
57 A ¶ All five freeze.
58 A The bees fall silent in the rafters.
59 A ¶ Then, in one motion, Rhys drops the broom, Beata drops the apple, Colm scrambles off the barrel, Oluwaseun stumbles backward over the trough, and Juniper turns calmly, takes a mallet from a hook, and faces the barrel as if she'd been expecting it since March.
60 D JUNIPER [CONT'D] (to all): Out. Quiet. Don't run.
61 A ¶ They go.
62 A Slowly.
63 A Colm last, looking back.
64 A ¶ Juniper steps to the barrel.
65 A Raises the mallet.
66 A Waits.
67 A ¶ The staves creak.
68 A The breath hitches.
69 A Waits with her.

### SCENE s01067 | INT. VICTORIAN ICE HOUSE - ESTATE GROUNDS - EVENING (1887)
Detected names (may be incomplete or contain aliases): ABIGAIL FENWICK-HALE, TOBIAS RUSK, STRANGER, RUPERT
1 A ¶ A brick dome half-sunk in the earth.
2 A Blocks of ice stacked in straw, sawdust floor, a sharp cold that smells of wet stone.
3 A A lantern hangs from a hook.
4 A Breath clouds in the light.
5 A ¶ ABIGAIL FENWICK-HALE, 30s, housekeeper, shawl over her shoulders, counts blocks with a slate.
6 A TOBIAS RUSK, 50s, groundskeeper, canvas coat, sits on a crate, whittling.
7 A A STRANGER, 40s, in a good coat and muddy boots, stands near the entrance holding a bowler hat.
8 D ABIGAIL (to both): Forty-two blocks. Enough for the garden party.
9 D TOBIAS: Forty-two's plenty.
10 D ABIGAIL: You'll want to turn the straw before the guests arrive.
11 D TOBIAS: I'll do it, Miss Abigail.
12 A ¶ The Stranger clears his throat.
13 D STRANGER: Forgive me. I'm looking for the master of the house.
14 D TOBIAS: He's up at the manor, sir.
15 D STRANGER: I tried the door. Nobody answered.
16 D ABIGAIL: The door is closed after four.
17 D STRANGER: So I discovered.
18 D ABIGAIL: And you are?
19 D STRANGER: A friend of the family.
20 D TOBIAS (under his breath): Never seen him.
21 D ABIGAIL: Which family?
22 D STRANGER: The Ashworths.
23 A ¶ Tobias stops whittling.
24 A The shavings fall.
25 D ABIGAIL: The Ashworths left in March.
26 D STRANGER: Did they? I hadn't heard. I'm afraid I've been abroad.
27 D ABIGAIL: Where abroad?
28 D STRANGER: Calcutta.
29 D ABIGAIL: That's a long way to come for an empty house.
30 D STRANGER: I came for the cold.
31 D ABIGAIL: Pardon?
32 D STRANGER: The ice house. They kept something here, once. A sealed tin.
33 D TOBIAS: Nothing's here but ice, sir.
34 D STRANGER: Of course. I only wished to be certain.
35 A ¶ He turns his hat in his hands.
36 A Raises his eyes.
37 D STRANGER [CONT'D]: My name is Rupert Ashworth. I was supposed to have inherited.
38 A ¶ Abigail's slate slips from her fingers and clatters on the floor.
39 A Tobias rises, knife in hand.
40 D ABIGAIL: Mr. Rupert died in the Punjab. We had the letter.
41 D RUPERT: Reports of my death were premature.
42 D TOBIAS (to Abigail): Miss, I'd stand behind me.
43 A ¶ She doesn't move.
44 A The lantern flickers.
45 D RUPERT: I only want the tin.
46 D ABIGAIL (to the cold air): God help us.
47 D RUPERT: I'd settle for that, too.
48 A ¶ He smiles.
49 A A thin, apologetic, tired smile.
50 A Behind him, the ice house door creaks in the wind, and all three turn to look at it.

### SCENE pd_sisters_3 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANFISA, VERSHININ, IRINA, OLGA, MASHA
1 A ¶ Kisses her.
2 D ANFISA: Well, little girl, here I am, still alive! Still alive! In the High School, together with little Olga, in her official apartments... so the Lord has appointed for my old age. Sinful woman that I am, I’ve never lived like that in my life before.... A large flat, government property, and I’ve a whole room and bed to myself. All government property. I wake up at nights and, oh God, and Holy Mother, there isn’t a happier person than I!
3 A ¶ Looks at his watch.
4 D VERSHININ: We are going soon, Olga Sergeyevna. It’s time for me to go.
5 A ¶ Pause.
6 D VERSHININ: I wish you every... every.... Where’s Maria Sergeyevna?
7 D IRINA: She’s somewhere in the garden. I’ll go and look for her.
8 D VERSHININ: If you’ll be so kind. I haven’t time.
9 D ANFISA: I’ll go and look, too.
10 A ¶ Shouts.
11 D ANFISA: Little Masha, co-ee!
12 A ¶ Goes out with IRINA down into the garden.
13 D ANFISA: Co-ee, co-ee!
14 D VERSHININ: Everything comes to an end. And so we, too, must part.
15 A ¶ Looks at his watch.
16 D VERSHININ: The town gave us a sort of farewell breakfast, we had champagne to drink and the mayor made a speech, and I ate and listened, but my soul was here all the time....
17 A ¶ Looks round the garden.
18 D VERSHININ: I’m so used to you now.
19 D OLGA: Shall we ever meet again?
20 D VERSHININ: Probably not.
21 A ¶ Pause.
22 D VERSHININ: My wife and both my daughters will stay here another two months. If anything happens, or if anything has to be done...
23 D OLGA: Yes, yes, of course. You need not worry.
24 A ¶ Pause.
25 D OLGA: To-morrow there won’t be a single soldier left in the town, it will all be a memory, and, of course, for us a new life will begin....
26 A ¶ Pause.
27 D OLGA: None of our plans are coming right. I didn’t want to be a head-mistress, but they made me one, all the same. It means there’s no chance of Moscow....
28 D VERSHININ: Well... thank you for everything. Forgive me if I’ve... I’ve said such an awful lot--forgive me for that too, don’t think badly of me.
29 A ¶ Wipes her eyes.
30 D OLGA: Why isn’t Masha coming...
31 D VERSHININ: What else can I say in parting? Can I philosophize about anything?
32 A ¶ Laughs.
33 D VERSHININ: Life is heavy. To many of us it seems dull and hopeless, but still, it must be acknowledged that it is getting lighter and clearer, and it seems that the time is not far off when it will be quite clear.
34 A ¶ Looks at his watch.
35 D VERSHININ: It’s time I went! Mankind used to be absorbed in wars, and all its existence was filled with campaigns, attacks, defeats, now we’ve outlived all that, leaving after us a great waste place, which there is nothing to fill with at present; but mankind is looking for something, and will certainly find it. Oh, if it only happened more quickly.
36 A ¶ Pause.
37 D VERSHININ: If only education could be added to industry, and industry to education.
38 A ¶ Looks at his watch.
39 D VERSHININ: It’s time I went....
40 D OLGA: Here she comes.
41 A ¶ Enter MASHA.
42 D VERSHININ: I came to say good-bye....
43 A ¶ OLGA steps aside a little, so as not to be in their way.
44 A ¶ Looking him in the face.
45 D MASHA: Good-bye.

### SCENE pd_dollhouse_0 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): NORA, PORTER, MAID, HELMER
1 A ¶ [SCENE.—A room furnished comfortably and tastefully, but not extravagantly.
2 A At the back, a door to the right leads to the entrance-hall, another to the left leads to Helmer’s study.
3 A Between the doors stands a piano.
4 A In the middle of the left-hand wall is a door, and beyond it a window.
5 A Near the window are a round table, arm-chairs and a small sofa.
6 A In the right-hand wall, at the farther end, another door; and on the same side, nearer the footlights, a stove, two easy chairs and a rocking-chair; between the stove and the door, a small table.
7 A Engravings on the walls; a cabinet with china and other small objects; a small book-case with well-bound books.
8 A The floors are carpeted, and a fire burns in the stove.
9 A It is winter.
10 A ¶ A bell rings in the hall; shortly afterwards the door is heard to open.
11 A Enter NORA, humming a tune and in high spirits.
12 A She is in outdoor dress and carries a number of parcels; these she lays on the table to the right.
13 A She leaves the outer door open after her, and through it is seen a PORTER who is carrying a Christmas Tree and a basket, which he gives to the MAID who has opened the door.]
14 D NORA: Hide the Christmas Tree carefully, Helen. Be sure the children do not see it until this evening, when it is dressed.
15 A ¶ To the PORTER, taking out her purse.
16 D NORA: How much?
17 D PORTER: Sixpence.
18 D NORA: There is a shilling. No, keep the change.
19 A ¶ The PORTER thanks her, and goes out.
20 A NORA shuts the door.
21 A She is laughing to herself, as she takes off her hat and coat.
22 A She takes a packet of macaroons from her pocket and eats one or two; then goes cautiously to her husband’s door and listens.
23 D NORA: Yes, he is in.
24 A ¶ Still humming, she goes to the table on the right.
25 A ¶ calls out from his room.
26 D HELMER: . Is that my little lark twittering out there?
27 A ¶ busy opening some of the parcels.
28 D NORA: . Yes, it is!
29 D HELMER: Is it my little squirrel bustling about?
30 D NORA: Yes!
31 D HELMER: When did my squirrel come home?
32 D NORA: Just now.
33 A ¶ Puts the bag of macaroons into her pocket and wipes her mouth.
34 D NORA: Come in here, Torvald, and see what I have bought.
35 D HELMER: Don’t disturb me.
36 A ¶ A little later, he opens the door and looks into the room, pen in hand.
37 D HELMER: Bought, did you say? All these things? Has my little spendthrift been wasting money again?
38 D NORA: Yes but, Torvald, this year we really can let ourselves go a little. This is the first Christmas that we have not needed to economise.
39 D HELMER: Still, you know, we can’t spend money recklessly.
40 D NORA: Yes, Torvald, we may be a wee bit more reckless now, mayn’t we? Just a tiny wee bit! You are going to have a big salary and earn lots and lots of money.
41 D HELMER: Yes, after the New Year; but then it will be a whole quarter before the salary is due.
42 D NORA: Pooh! we can borrow until then.
43 D HELMER: Nora!
44 A ¶ Goes up to her and takes her playfully by the ear.
45 D HELMER: The same little featherhead! Suppose, now, that I borrowed fifty pounds today, and you spent it all in the Christmas week, and then on New Year’s Eve a slate fell on my head and killed me, and—
46 A ¶ putting her hands over his mouth.
47 D NORA: . Oh! don’t say such horrid things.
48 D HELMER: Still, suppose that happened,—what then?
49 D NORA: If that were to happen, I don’t suppose I should care whether I owed money or not.
50 D HELMER: Yes, but what about the people who had lent it?
51 D NORA: They? Who would bother about them? I should not know who they were.
52 D HELMER: That is like a woman! But seriously, Nora, you know what I think about that. No debt, no borrowing. There can be no freedom or beauty about a home life that depends on borrowing and debt. We two have kept bravely on the straight road so far, and we will go on the same way for the short time longer that there need be any struggle.
53 A ¶ moving towards the stove.
54 D NORA: . As you please, Torvald.
55 A ¶ following her.
56 D HELMER: . Come, come, my little skylark must not droop her wings. What is this! Is my little squirrel out of temper?
57 A ¶ Taking out his purse.
58 D HELMER: Nora, what do you think I have got here?
59 A ¶ turning round quickly.

### SCENE s01093 | INT. DRIVE-IN PROJECTION BOOTH - TWILIGHT
Detected names (may be incomplete or contain aliases): PEGGY LOUISE WALDROP, TUCKER WALDROP, ABERNATHY
1 A ¶ A cramped booth over an empty lot.
2 A Film canisters.
3 A A coffee can of cigarette butts.
4 A Through the small window, rows of silent cars waiting in the dusk.
5 A ¶ PEGGY LOUISE WALDROP, 17, in a pressed uniform, threads a reel with practiced fingers while her younger brother TUCKER WALDROP, 12, sits on a stool kicking his heels, a comic book on his knee.
6 A Between them, MR. ABERNATHY, 60s, the theater owner, in a short-sleeved shirt and bow tie, checks his pocket watch, taps the projector's housing, and sets a thermos by the door.
7 D MR. ABERNATHY: Seven forty. Start her at eight sharp.
8 D PEGGY: Yes, sir.
9 D MR. ABERNATHY: And Peggy, no repeats of last week.
10 D PEGGY: It wasn't my fault, sir. The reel was upside down.
11 D MR. ABERNATHY: Mm.
12 A ¶ He nods, pats Tucker on the head, and leaves.
13 A His footsteps fade down the iron stairs.
14 A Tucker turns a page.
15 A Peggy finishes lacing the film and flips a switch.
16 A The lamp hums warm.
17 D TUCKER: Is he gone?
18 D PEGGY: He's gone.
19 D TUCKER: Good.
20 A ¶ He slides the comic book aside and pulls a rumpled envelope from his shirt.
21 A Hands it up without looking at her.
22 A Peggy takes it.
23 A Turns it over.
24 A Her name in his careful block capitals.
25 D PEGGY: What's this?
26 D TUCKER: Open it.
27 A ¶ She does.
28 A Inside, a ticket stub and a folded strip of paper.
29 A She unfolds it.
30 A Her breath catches.
31 D TUCKER [CONT'D]: They called the house. About the scholarship.
32 D PEGGY: Tucker.
33 D TUCKER: You got in.
34 A ¶ She sits down hard on the other stool.
35 A Reads the strip again.
36 A Her thumb pauses over the signature at the bottom.
37 A ¶ Down in the lot, the cars dim their lights.
38 A A horn toots, impatient.
39 A Tucker watches her face.
40 D PEGGY (quietly): Don't tell Dad.
41 D TUCKER: He already knows.
42 D PEGGY: What?
43 D TUCKER: He read it first. Then he put it back.
44 A ¶ She stares at him.
45 A Then at the window, where the first car's headlights flick on and off in a signal.
46 A She wipes her eyes with the back of her wrist.
47 A Stands.
48 A Presses the switch.
49 A ¶ The projector clatters to life.
50 A A beam cuts across the lot and lands on the screen: a bright gold title card.
51 D PEGGY [CONT'D] (not looking at him): Hand me the next reel.
52 A ¶ Tucker slides it across.
53 A His fingers brush hers.
54 A She takes it, careful, and sets it beside the first.

### SCENE s01090 | EXT. ORCHARD BEHIND A CLOSED CANNERY - LATE SUMMER AFTERNOON
Detected names (may be incomplete or contain aliases): NELL, THEO, DUNNING
1 A ¶ Pears hang heavy on the branches.
2 A Wasps drone over fallen fruit.
3 A Beyond the trees, a corrugated roof rusts under a pale sky.
4 A ¶ NELL, 15, sits with her back against a trunk, knees drawn up.
5 A She has a transistor radio in her lap, tuned to nothing.
6 A A paper sack of pears lies beside her.
7 A Dust on her shoes.
8 A A bruise yellowing on one shin.
9 A ¶ She bites a pear.
10 A Chews.
11 A Does not taste it.
12 A ¶ A twig snaps.
13 A She looks up.
14 A A boy has stepped from between the trees, hands in his pockets.
15 A THEO, 16, tall and awkward, wearing his older brother's jacket.
16 A He stops ten paces away.
17 A ¶ He studies her.
18 A She studies the pear.
19 D THEO: You're on the Dunnings' side.
20 D NELL: Is there a side?
21 A ¶ He shrugs.
22 A Scuffs a pear into the grass with his toe.
23 A She watches the movement and then the dirt.
24 D THEO: They said you left.
25 D NELL: They said a lot.
26 A ¶ He nods slowly.
27 A She offers him a pear without looking up.
28 A He crosses, takes it, sits a careful distance away.
29 A They eat in silence.
30 A A wasp circles his hand.
31 A He lets it.
32 D THEO: My brother's gone. Since June.
33 A ¶ She says nothing.
34 A Turns the dial on the radio.
35 A Static swells, then a thin fragment of a song.
36 A She holds still, listening.
37 A He leans in a little.
38 A The song fades.
39 D THEO [CONT'D]: That was a good one.
40 D NELL: It always is. Then it goes.
41 A ¶ He half-smiles.
42 A She turns the dial again.
43 A Nothing.
44 A She sets the radio on the grass between them.
45 A ¶ A screen door bangs somewhere beyond the trees.
46 A A woman's voice calls a name that is not hers.
47 A Nell's shoulders rise.
48 A Theo watches them rise.
49 D THEO [CONT'D]: That's for you?
50 D NELL: That's for a girl I was.
51 A ¶ He nods as if this makes sense.
52 A Stands.
53 A Offers his hand.
54 A She looks at it for a long moment.
55 A Then takes it.
56 A He pulls her up.
57 A They let go at the same time.
58 A ¶ At the edge of the orchard, an older figure steps out: MRS. DUNNING, 50s, apron, arms folded.
59 A She stops when she sees them both.
60 A Her face softens.
61 A Hardens.
62 A Softens again.
63 A ¶ Nell straightens.
64 A Theo steps half a pace in front of her.
65 A Mrs. Dunning looks at his jacket, at the radio on the grass, at the pear core in Nell's hand.
66 A ¶ She turns and walks back toward the house.
67 A Leaves the door open behind her.
68 A ¶ Nell picks up the radio.
69 A Theo picks up the sack of pears.
70 A They follow, ten paces apart, then five.

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

### SCENE s01026 | INT. GENERATION SHIP "TERRAPIN" - HYDROPONIC LAUNDRY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ISADORA VOSS, KOJI TANABE, AMARA OKELLO, TERRAPIN, PELL
1 A ¶ A warm, humid hold.
2 A Rows of lettuce racks climb the walls under violet grow-lamps.
3 A In the center, three washing drums turn, slow and patient.
4 A ¶ CAPTAIN ISADORA VOSS, 50s, silver braid, sleeves rolled, folds a coverall with military precision.
5 A Across from her, KOJI TANABE, 30s, engineer, grease on his cuffs, sits on a drum and stares at a handheld.
6 A ¶ DR. AMARA OKELLO, 40s, ship's physician, enters with a cart of sheets.
7 D AMARA: Captain. The night cycle is half over. You should rest.
8 D VOSS: I rest when the laundry is done.
9 D AMARA: It never is.
10 D VOSS: That's the beauty of it.
11 A ¶ Koji glances up.
12 A Back down.
13 D KOJI: Captain, I'm getting a drift on the aft coolant. Point two percent.
14 D VOSS: Over what?
15 D KOJI: Forty days.
16 D VOSS: Fix it.
17 D KOJI: I have. Three times.
18 A ¶ Voss sets the coverall down.
19 A Looks at him properly.
20 D VOSS: Then it's not drift.
21 D KOJI: No, ma'am.
22 A ¶ A soft chime.
23 A From the ceiling grille:
24 D TERRAPIN [V.O.]: Attention. Compartment seven pressure variance detected. Corrective action in progress.
25 D VOSS: Terrapin, which compartment is seven?
26 D TERRAPIN [V.O.]: The nursery.
27 A ¶ A beat.
28 A Amara's hand tightens on the cart.
29 D AMARA: How much variance?
30 D TERRAPIN [V.O.]: Point four kilopascals. Within tolerance.
31 D KOJI: Tolerance is point five.
32 D VOSS: Meaning we're one bad hour from not being within it.
33 A ¶ PELL, 19, galley apprentice, barefoot, slides in clutching a mop like a rifle.
34 D PELL: Captain! Somebody's in the cold lock. Banging on the inside.
35 D VOSS: Nobody's in the cold lock.
36 D PELL: I heard it.
37 D TERRAPIN [V.O.]: Cold lock occupancy: zero.
38 D PELL: Then why's it hitting back?
39 A ¶ The room goes still.
40 A Even the drums seem to slow.
41 A ¶ Then, faintly, from the far end of the hold: knock.
42 A Knock.
43 A Knock.
44 A A pause.
45 A Knock.
46 D AMARA: That's the code.
47 D VOSS: What code?
48 D AMARA: The medical one. Three, pause, one. Emergency.
49 D KOJI: Nobody's logged to the lock.
50 D VOSS: Terrapin, open the cold lock.
51 D TERRAPIN [V.O.]: Unable. Door sealed by order of Captain Voss.
52 D VOSS: I gave no such order.
53 D TERRAPIN [V.O.]: Issued four hundred days ago.
54 A ¶ Voss and Koji turn to look at each other.
55 A They speak at once.
56 D VOSS: Cancel the seal.
57 D KOJI: Cancel the seal!
58 D AMARA: Cancel the seal now!
59 D PELL (to nobody): I'm gonna throw up.
60 D TERRAPIN [V.O.]: Cancel denied. Reason: crew safety.
61 A ¶ The knocking quickens.
62 A Frantic.
63 A The cold lock door begins to frost over from the outside.
64 A ¶ Voss grabs a wrench off Koji's belt.
65 A Runs.
66 A The others follow.
67 A The drums turn on, spinning white sheets in empty light.

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

### SCENE s01064 | EXT. THE GLASS BRIDGE OF AETHERMERE - DAWN
Detected names (may be incomplete or contain aliases): QUEEN IDRISSA, SIR BALTHAZAR, FINNEGAN, MORGANA
1 A ¶ A span of living crystal between two floating islands, fog beneath it, bells ringing somewhere unseen.
2 A ¶ QUEEN IDRISSA, tall and crowned in silver thorns, stands at the middle of the bridge.
3 A Behind her, SIR BALTHAZAR, white-bearded, in bronze plate, grips a staff that hums with blue light.
4 A Before her, a ragged young WANDERER named FINNEGAN carries nothing but a cracked lute.
5 D IDRISSA: You trespass, minstrel.
6 D FINNEGAN: I'm only crossing.
7 D BALTHAZAR: Cross to what?
8 D FINNEGAN: To the far island. My brother's there.
9 D IDRISSA: There is no brother.
10 D BALTHAZAR: There is no brother.
11 A ¶ A third figure strides out of the fog: MORGANA, a woman in green, hair full of leaves, a bow slung across her back.
12 A She holds up a hand.
13 D MORGANA: Lower your staff, Balthazar. He speaks true.
14 D BALTHAZAR: How would you know?
15 D MORGANA: Because the brother is me.
16 A ¶ Finnegan drops the lute.
17 A It rings on the crystal.
18 A The bridge begins to hum.

### SCENE s01028 | INT. DERELICT ORBITAL STATION - OBSERVATION RING - CONTINUOUS
Detected names (may be incomplete or contain aliases): ORSOLYA, TAVI
1 A ¶ Frost on the viewport.
2 A Beyond it, a gas giant fills the sky, banded and indifferent.
3 A Emergency lights pulse amber.
4 A ¶ ORSOLYA, 40s, scavenger's patched suit, helmet clipped to her hip, drifts along a handrail.
5 A TAVI, 20s, tool belt too big for him, follows with a lantern.
6 A ¶ She stops.
7 A Taps the wall.
8 A Listens.
9 D ORSOLYA (to the empty ring): Anyone aboard. We're salvage. We mean no harm.
10 A ¶ Silence.
11 A Frost ticks on the glass.
12 D TAVI: Maybe just--
13 A ¶ She raises a hand.
14 A He stops.
15 D ORSOLYA (again, louder): Anyone aboard.
16 A ¶ A pause.
17 A Nothing.
18 A She nods once, as if she expected nothing.
19 A ¶ She opens a wall panel.
20 A Wiring shredded.
21 A Burned.
22 D ORSOLYA [CONT'D] (muttering): Not an accident.
23 D TAVI: What?
24 D ORSOLYA: Nothing. Hold the light.
25 A ¶ He holds it.
26 A His hand trembles.
27 A The beam shakes across the wires.
28 A ¶ She notices.
29 A Says nothing.
30 A Takes the lantern from him.
31 A Hands him a screwdriver instead.
32 D ORSOLYA [CONT'D]: Twelve screws. Take the plate off.
33 A ¶ He works.
34 A Slowly.
35 A His eyes keep sliding to the viewport.
36 A ¶ A thud rolls through the ring.
37 A Metal on metal, somewhere aft.
38 A ¶ Both freeze.
39 D TAVI: That was close.
40 D ORSOLYA: That was far.
41 D TAVI: It sounded close.
42 D ORSOLYA: Far things sound close in a hull.
43 A ¶ She doesn't sound sure.
44 A Her thumb strokes the edge of the lantern.
45 A ¶ The thud again.
46 A Louder.
47 A Then a long scrape.
48 A ¶ Tavi drops the screwdriver.
49 A It floats, tumbling.
50 D ORSOLYA [CONT'D] (to the ring, calm): Everyone stay where you are. This is a recovery crew. We're leaving in five minutes.
51 D TAVI: There's no one here.
52 D ORSOLYA: I know.
53 A ¶ She grabs his sleeve.
54 A Tows him toward the airlock.
55 A Her grip is gentle.
56 A Too gentle.
57 A ¶ They reach the hatch.
58 A She spins the wheel.
59 A It opens onto the cold, bright tunnel of their own ship.
60 A ¶ She pushes him through first.
61 D TAVI (over his shoulder): You okay?
62 D ORSOLYA: Fine.
63 A ¶ She follows.
64 A Looks back once.
65 A The ring is quiet, amber, still.
66 A ¶ Then, from the dark, one more knock.
67 A Small.
68 A Almost polite.
69 A ¶ She seals the hatch.
70 D ORSOLYA [CONT'D] (to herself): Five minutes.
71 A ¶ She doesn't move for a long time.
72 A Tavi picks up the lantern and sets it between them, lighting both their faces.

### SCENE s01031 | EXT. SUNSET GARDENS RETIREMENT HOME - BOCCE COURT - DAY
Detected names (may be incomplete or contain aliases): BERTIE, MOSCATO, LOU, GENOVESE, HIRO NAKAMURA, DORIS PELLEGRINO, SKIP, TATE
1 A ¶ Crushed oyster-shell lane, green benches, a hand-painted banner: LEAGUE FINALS.
2 A Folding chairs full of cardigans.
3 A ¶ ALBERTINA "BERTIE" MOSCATO, 80, pearls, steel spine, rolls her wrist like a bishop blessing.
4 A LOU "THE HAMMER" GENOVESE, 82, undershirt, arms like cured hams, glares from the other end.
5 A ¶ Bertie lets fly.
6 A The ball skims, kisses the pallino.
7 A Applause.
8 D BERTIE: Beat that, Hammer!
9 D LOU: I've beaten better, Bertie!
10 A ¶ HIRO NAKAMURA, 78, referee, pressed shirt, kneels with a tape measure.
11 A He measures.
12 A Looks up.
13 D HIRO: Bertie leads by half an inch.
14 A ¶ DORIS PELLEGRINO, 75, Lou's partner, sun visor, mutters.
15 D DORIS: Half an inch. I've had longer lunches.
16 A ¶ Lou steps to the line.
17 A Spits on his palm.
18 A Rolls.
19 A The ball veers left, strikes Bertie's ball, scatters it.
20 A The crowd gasps.
21 D LOU: Ha!
22 D BERTIE: Cheat!
23 D HIRO: Legal. Lou leads.
24 A ¶ ORVILLE "SKIP" TATE, 85, Bertie's partner, wheelchair, a blanket across his knees, rolls up.
25 D SKIP: Bertie, you owe me three dollars if you lose.
26 D BERTIE: Skip, I never lose.
27 D SKIP: Ninety-one losses, Bertie. I counted.
28 D BERTIE: Quiet, you old goat.
29 A ¶ She picks up the last ball.
30 A Stares down the court.
31 A Quiet descends.
32 A A wind chime tinkles.
33 A ¶ She steps.
34 A Swings.
35 A Lets go.
36 A ¶ The ball curves, ticks the fence, rolls, and stops dead against the pallino.
37 A ¶ Silence.
38 A Then an uproar.
39 D DORIS: Hiro, it's wood. Look at the grain!
40 D HIRO: Bertie wins.
41 D LOU (low): Rematch.
42 D BERTIE: Next Sunday, Hammer. Bring your checkbook.

### SCENE s00009 | INT. GRAIN ELEVATOR - ROLLER DERBY TRACK - NIGHT
Detected names (may be incomplete or contain aliases): BRUISE, CASTILLO, TAMARA GRAY-OYELARAN, DOT KWIATKOWSKI, JONAS FELD
1 A ¶ A concrete silo floor, converted.
2 A Oval track taped on the slab, plywood bleachers, one hanging bulb per corner.
3 A Dust floats in the beams.
4 A ¶ The Harvest Hellcats are down nine in the final jam.
5 A Their jammer, MARISOL "BRUISE" CASTILLO (20s, shaved sides, mouthguard dangling), sits on the infield bench lacing her skates tight enough to hurt.
6 A ¶ Beside her, team captain TAMARA GRAY-OYELARAN (30s, tall, eye-black, taped wrist) watches the clock.
7 A Across the track, rival jammer DOT KWIATKOWSKI (40s, braids, quiet) stretches her calf, never looking over.
8 A ¶ Referee JONAS FELD (50s, striped shirt, whistle in his teeth) walks the track, checking the lines.
9 A ¶ Tamara watches Bruise.
10 A Bruise watches the floor.
11 A ¶ The clock reads 1:14.
12 D TAMARA: Left side. Don't force it.
13 D BRUISE: I wasn't going to.
14 D TAMARA: You were.
15 D BRUISE: I'm fine.
16 A ¶ Tamara slaps the bench between them.
17 A Once.
18 A Bruise nods without lifting her head.
19 A ¶ Jonas blows a short whistle.
20 A Skaters line up.
21 A Bruise stands.
22 A Dot stands.
23 A Neither looks at the other.
24 D JONAS: Jammers to the line.
25 D TAMARA (to Bruise): Four points a lap. That's all.
26 D BRUISE: I know.
27 D TAMARA: Then go.
28 A ¶ Bruise rolls to the starting line.
29 D DOT (to Bruise): You're limping.
30 D BRUISE (to Dot): You're old.
31 D DOT (to Bruise): I'm patient.
32 D BRUISE (to Dot): You're slow.
33 A ¶ Jonas raises his whistle.
34 D TAMARA: Do not watch her feet.
35 D BRUISE: Whose feet?
36 D DOT: Mine.
37 A ¶ Beat.
38 A The grain-elevator echo carries it.
39 D JONAS: Quiet on the line.
40 D TAMARA: It's a three-lap jam, Bruise.
41 D BRUISE: I said I know.
42 D DOT: Give her a minute. She's praying.
43 D BRUISE: I'm not praying.
44 D DOT: You're moving your lips.
45 D BRUISE: I'm counting.
46 D TAMARA: She counts like her mother.
47 D BRUISE: Leave my mother out of it.
48 D BRUISE: Just blow it already.
49 D DOT: Just blow it already.
50 D JONAS: Last warning. Hush.
51 A ¶ Bruise rolls her shoulders.
52 A Dot rolls hers.
53 A Their eyes finally meet.
54 A Two seconds.
55 A Three.
56 A ¶ Jonas lifts the whistle.
57 A A cold quiet drops over the whole silo.
58 A ¶ The whistle shrieks.
