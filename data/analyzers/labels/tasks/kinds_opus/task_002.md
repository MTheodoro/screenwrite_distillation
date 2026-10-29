You classify screenplay action lines that have NO character as their agent, for a writing tool.
Every line in the script must belong somewhere, so each marked line (`*`) gets exactly one kind:

- `setting`  : the place, scenery, light, weather, time of day, what a space looks/sounds like as a whole
               ("A cramped kitchen.", "Rain hammers the windows.", "Dawn over the harbor.", "Silence.")
- `event`    : something happens or an object/sound/vehicle/machine acts, with no character doing it
               ("The phone rings.", "A car backfires outside.", "Cash.", "The door swings shut.", "A light blinks.")
- `extra`    : done by people or creatures who are NOT characters of the scene (unnamed passers-by, a crowd that
               is not in the names list, an animal, a monster) ("A waiter passes.", "Two women lean on its bumper.")
- `camera`   : shot, edit or on-screen-text directions ("CLOSE ON the letter.", "We see...", "INSERT - phone",
               "SUPER: 1999", "Back to scene.", "INTERCUT", "Time cut.")
- `abstract` : narration, reflection, commentary, theme, time passing, things that are not visible action
               ("Some wounds never close.", "Years pass.", "This is the last time they will speak.")
- `character`: actually done by / describing a character in the names list (the marking was wrong). Then also give
               the name(s).

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block. Only `*` lines need a label;
the rest is context.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0002.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pd_sisters_4 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): TROFIMOV, LUBOV ANDREYEVNA, VARYA, GAEV, PISCHIN, YASHA
1 A ¶ Enter TROFIMOV in a worn student uniform and spectacles.
* 2 D LUBOV: What a marvellous garden! White masses of flowers, the blue sky....
* 3 D TROFIMOV: Lubov Andreyevna!
4 A ¶ She looks round at him.
* 5 D TROFIMOV: I only want to show myself, and I’ll go away.
6 A ¶ Kisses her hand warmly.
* 7 D TROFIMOV: I was told to wait till the morning, but I didn’t have the patience.
8 A ¶ LUBOV ANDREYEVNA looks surprised.
9 A ¶ Crying.
* 10 D VARYA: It’s Peter Trofimov.
* 11 D TROFIMOV: Peter Trofimov, once the tutor of your Grisha.... Have I changed so much?
12 A ¶ LUBOV ANDREYEVNA embraces him and cries softly.
13 A ¶ Confused.
* 14 D GAEV: That’s enough, that’s enough, Luba.
15 A ¶ Weeps.
* 16 D VARYA: But I told you, Peter, to wait till to-morrow.
* 17 D LUBOV: My Grisha... my boy... Grisha... my son.
* 18 D VARYA: What are we to do, little mother? It’s the will of God.
19 A ¶ Softly, through his tears.
* 20 D TROFIMOV: It’s all right, it’s all right.
21 A ¶ Still weeping.
* 22 D LUBOV: My boy’s dead; he was drowned. Why? Why, my friend?
23 A ¶ Softly.
* 24 D LUBOV: Anya’s asleep in there. I am speaking so loudly, making such a noise.... Well, Peter? What’s made you look so bad? Why have you grown so old?
* 25 D TROFIMOV: In the train an old woman called me a decayed gentleman.
* 26 D LUBOV: You were quite a boy then, a nice little student, and now your hair is not at all thick and you wear spectacles. Are you really still a student?
* 27 A ¶ Goes to the door.
* 28 D TROFIMOV: I suppose I shall always be a student.
29 A ¶ Kisses her brother, then VARYA.
* 30 D LUBOV: Well, let’s go to bed.... And you’ve grown older, Leonid.
31 A ¶ Follows her.
* 32 D PISCHIN: Yes, we’ve got to go to bed.... Oh, my gout! I’ll stay the night here. If only, Lubov Andreyevna, my dear, you could get me 240 roubles to-morrow morning--
* 33 D GAEV: Still the same story.
* 34 D PISCHIN: Two hundred and forty roubles... to pay the interest on the mortgage.
* 35 D LUBOV: I haven’t any money, dear man.
* 36 D PISCHIN: I’ll give it back... it’s a small sum....
* 37 D LUBOV: Well, then, Leonid will give it to you.... Let him have it, Leonid.
* 38 D GAEV: By all means; hold out your hand.
* 39 D LUBOV: Why not? He wants it; he’ll give it back.
40 A ¶ LUBOV ANDREYEVNA, TROFIMOV, PISCHIN, and FIERS go out.
41 A GAEV, VARYA, and YASHA remain.
* 42 D GAEV: My sister hasn’t lost the habit of throwing money about.
43 A ¶ To YASHA.
* 44 D GAEV: Stand off, do; you smell of poultry.
45 A ¶ Grins.
* 46 D YASHA: You are just the same as ever, Leonid Andreyevitch.

### SCENE pd_sisters_5 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHARLOTTA, LUBOV ANDREYEVNA, VARYA, PISCHIN, TROFIMOV, YASHA
* 1 D CHARLOTTA: Ein, zwei, drei .
2 A ¶ She quickly lifts up the shawl, which is hanging down.
3 A ANYA is standing behind it; she bows and runs to her mother, hugs her and runs back to the drawing-room amid general applause.
4 A ¶ Applauds.
* 5 D LUBOV: Bravo, bravo!
* 6 D CHARLOTTA: Once again! Ein, zwei, drei !
7 A ¶ Lifts the shawl.
8 A VARYA stands behind it and bows.
9 A ¶ Astonished.
* 10 D PISCHIN: Think of that, now.
* 11 D CHARLOTTA: The end!
12 A ¶ Throws the shawl at PISCHIN, curtseys and runs into the drawing-room.
13 A ¶ Runs after her.
* 14 D PISCHIN: Little wretch.... What? Would you?
15 A ¶ Exit.
* 16 D LUBOV: Leonid hasn’t come yet. I don’t understand what he’s doing so long in town! Everything must be over by now. The estate must be sold; or, if the sale never came off, then why does he stay so long?
17 A ¶ Tries to soothe her.
* 18 D VARYA: Uncle has bought it. I’m certain of it.
19 A ¶ Sarcastically.
* 20 D TROFIMOV: Oh, yes!
* 21 D VARYA: Grandmother sent him her authority for him to buy it in her name and transfer the debt to her. She’s doing it for Anya. And I’m certain that God will help us and uncle will buy it.
* 22 D LUBOV: Grandmother sent fifteen thousand roubles from Yaroslav to buy the property in her name--she won’t trust us--and that wasn’t even enough to pay the interest.
23 A ¶ Covers her face with her hands.
* 24 D LUBOV: My fate will be settled to-day, my fate....
25 A ¶ Teasing VARYA.
* 26 D TROFIMOV: Madame Lopakhin!
27 A ¶ Angry.
* 28 D VARYA: Eternal student! He’s already been expelled twice from the university.
* 29 D LUBOV: Why are you getting angry, Varya? He’s teasing you about Lopakhin, well what of it? You can marry Lopakhin if you want to, he’s a good, interesting man.... You needn’t if you don’t want to; nobody wants to force you against your will, my darling.
* 30 D VARYA: I do look at the matter seriously, little mother, to be quite frank. He’s a good man, and I like him.
* 31 D LUBOV: Then marry him. I don’t understand what you’re waiting for.
* 32 D VARYA: I can’t propose to him myself, little mother. People have been talking about him to me for two years now, but he either says nothing, or jokes about it. I understand. He’s getting rich, he’s busy, he can’t bother about me. If I had some money, even a little, even only a hundred roubles, I’d throw up everything and go away. I’d go into a convent.
* 33 D TROFIMOV: How nice!
34 A ¶ To TROFIMOV.
* 35 D VARYA: A student ought to have sense!
36 A ¶ Gently, in tears.
* 37 D VARYA: How ugly you are now, Peter, how old you’ve grown!
38 A ¶ To LUBOV ANDREYEVNA, no longer crying.
* 39 D VARYA: But I can’t go on without working, little mother. I want to be doing something every minute.
40 A ¶ Enter YASHA.
41 A ¶ Nearly laughing.
* 42 D YASHA: Epikhodov’s broken a billiard cue!
43 A ¶ Exit.
* 44 D VARYA: Why is Epikhodov here? Who said he could play billiards? I don’t understand these people.
45 A ¶ Exit.
* 46 D LUBOV: Don’t tease her, Peter, you see that she’s quite unhappy without that.
* 47 D TROFIMOV: She takes too much on herself, she keeps on interfering in other people’s business. The whole summer she’s given no peace to me or to Anya, she’s afraid we’ll have a romance all to ourselves. What has it to do with her? As if I’d ever given her grounds to believe I’d stoop to such vulgarity! We are above love.

### SCENE pd_sisters_6 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): LOPAKHIN, VARYA, TROFIMOV, GAEV, LUBOV ANDREYEVNA, ANYA, CHARLOTTA, ANYA’S VOICE, TROFIMOV’S VOICE, FIERS
1 A ¶ Drags an umbrella out of a bundle, and seems to be waving it about.
2 A LOPAKHIN appears to be frightened.
* 3 D VARYA: What are you doing?... I never thought...
* 4 D TROFIMOV: Come along, let’s take our seats... it’s time! The train will be in directly.
* 5 D VARYA: Peter, here they are, your goloshes, by that trunk.
6 A ¶ In tears.
* 7 D VARYA: And how old and dirty they are....
8 A ¶ Putting them on.
* 9 D TROFIMOV: Come on!
10 A ¶ Deeply moved, nearly crying.
* 11 D GAEV: The train... the station.... Cross in the middle, a white double in the corner....
* 12 D LUBOV: Let’s go!
* 13 D LOPAKHIN: Are you all here? There’s nobody else?
14 A ¶ Locks the side-door on the left.
* 15 D LOPAKHIN: There’s a lot of things in there. I must lock them up. Come!
* 16 D ANYA: Good-bye, home! Good-bye, old life!
* 17 D TROFIMOV: Welcome, new life!
18 A ¶ Exit with ANYA.
19 A ¶ VARYA looks round the room and goes out slowly.
20 A YASHA and CHARLOTTA, with her little dog, go out.
* 21 D LOPAKHIN: Till the spring, then! Come on... till we meet again!
22 A ¶ Exit.
23 A ¶ LUBOV ANDREYEVNA and GAEV are left alone.
24 A They might almost have been waiting for that.
25 A They fall into each other’s arms and sob restrainedly and quietly, fearing that somebody might hear them.
26 A ¶ In despair.
* 27 D GAEV: My sister, my sister....
* 28 D LUBOV: My dear, my gentle, beautiful orchard! My life, my youth, my happiness, good-bye! Good-bye!
29 A ¶ Gaily.
* 30 D ANYA’S VOICE: Mother!
31 A ¶ Gaily, excited.
* 32 D TROFIMOV’S VOICE: Coo-ee!
* 33 D LUBOV: To look at the walls and the windows for the last time.... My dead mother used to like to walk about this room....
* 34 D GAEV: My sister, my sister!
* 35 D ANYA’S VOICE: Mother!
* 36 D TROFIMOV’S VOICE: Coo-ee!
* 37 D LUBOV: We’re coming!
38 A ¶ They go out.
* 39 A ¶ The stage is empty.
* 40 A The sound of keys being turned in the locks is heard, and then the noise of the carriages going away.
* 41 A It is quiet.
* 42 A Then the sound of an axe against the trees is heard in the silence sadly and by itself.
* 43 A Steps are heard.
44 A FIERS comes in from the door on the right.
45 A He is dressed as usual, in a short jacket and white waistcoat; slippers on his feet.
46 A He is ill.
47 A He goes to the door and tries the handle.
* 48 D FIERS: It’s locked. They’ve gone away.
49 A ¶ Sits on a sofa.
* 50 D FIERS: They’ve forgotten about me.... Never mind, I’ll sit here.... And Leonid Andreyevitch will have gone in a light overcoat instead of putting on his fur coat....
51 A ¶ Sighs anxiously.
* 52 D FIERS: I didn’t see.... Oh, these young people!
53 A ¶ Mumbles something that cannot be understood.
* 54 D FIERS: Life’s gone on as if I’d never lived.
55 A ¶ Lying down.
* 56 D FIERS: I’ll lie down.... You’ve no strength left in you, nothing left at all.... Oh, you... bungler!
57 A ¶ He lies without moving.
* 58 A The distant sound is heard, as if from the sky, of a breaking string, dying away sadly.
* 59 A Silence follows it, and only the sound is heard, some way away in the orchard, of the axe falling on the trees.

### SCENE s00000 | INT. DRAINED ROLLER RINK - TEMPORARY COUNTY COURTROOM - DAY
Detected names (may be incomplete or contain aliases): ADAEZE OKAFOR, LEV BRANDT, JUDGE HOLLIS TRAN, CLERK
* 1 A ¶ A roller rink.
* 2 A Maple floor, warped by flood.
* 3 A Disco ball still hangs over the bench, wrapped in bubble wrap.
* 4 A ¶ Folding tables.
* 5 A Folding chairs.
* 6 A A flag on a mic stand.
* 7 A ¶ Courthouse is under repair.
* 8 A Justice is here instead.
9 A ¶ ADAEZE OKAFOR (40s, sharp navy suit, sneakers under the table, reading glasses pushed into cropped grey hair) stands at the defense table.
10 A Alone.
* 11 A Her client's chair is empty.
12 A ¶ Across the aisle: LEV BRANDT (50s, heavy, rumpled, a pastry crumb on his tie) shuffles exhibits.
13 A Calm.
14 A Too calm.
15 A ¶ On a raised DJ booth, now a bench: JUDGE HOLLIS TRAN (60s, silver braid over one shoulder, half-moon spectacles, a thermos of tea).
16 A She taps a gavel made from a skate wheel and a dowel.
* 17 A ¶ Rink speakers hiss.
* 18 D JUDGE TRAN: Back on the record.
* 19 D LEV: Your Honor, the People are ready.
* 20 D ADAEZE: The defense is not.
* 21 D JUDGE TRAN: Counsel, your client is late.
* 22 D ADAEZE: My client is in a hospital.
* 23 D LEV: Convenient.
* 24 D ADAEZE: Say that again.
* 25 D LEV: I said, convenient.
* 26 D JUDGE TRAN: Mr. Brandt.
* 27 D LEV: It is, Judge. Day three of trial. Day three of a medical emergency.
* 28 D ADAEZE: He had a seizure on the stairs.
* 29 D LEV: Which stairs?
* 30 D ADAEZE: The stairs of this building. The one with the leak.
* 31 A ¶ A drip.
* 32 A Somewhere.
* 33 A Plink.
* 34 A Plink.
35 A ¶ Everyone listens.
* 36 D JUDGE TRAN: I have a doctor's note?
* 37 D ADAEZE: I filed it at seven.
* 38 D LEV: I never received it.
* 39 D ADAEZE: I emailed you.
* 40 D LEV: My inbox says otherwise.
* 41 D ADAEZE: Your inbox says a lot of things.
* 42 D JUDGE TRAN: Enough.
* 43 A ¶ Silence.
* 44 A The disco ball turns a quarter inch in a draft.
45 A ¶ Lev smiles.
46 A Opens a folder.
47 A Slides one page onto the table.
* 48 D LEV: Then the People move to proceed in absentia.
* 49 D ADAEZE: Objection.
* 50 D JUDGE TRAN: Basis?
* 51 D ADAEZE: Every basis.
* 52 D LEV: She can't list one.
* 53 D ADAEZE: Sixth Amendment. Confrontation. Presence. Counsel of choice.
* 54 D LEV: He waived presence on Monday.
* 55 D ADAEZE: He did not.
* 56 D LEV: Page four of the waiver.
57 A ¶ Adaeze freezes.
58 A Hands go to her own stack.
59 A Flips.
60 A Flips.
* 61 D JUDGE TRAN: Ms. Okafor?
62 D ADAEZE: Page four.
63 A ¶ She finds it.
64 A Reads.
65 A Her jaw sets.
* 66 A ¶ A signature.
* 67 A Her client's.
* 68 A Dated Monday.
* 69 D ADAEZE [CONT'D]: That is not his hand.
* 70 D LEV: It is his hand.
* 71 D ADAEZE: He signs with a loop. This has no loop.
* 72 D LEV: People change.
* 73 D ADAEZE: Not in a week.
* 74 D JUDGE TRAN: Counsel, approach.
75 A ¶ They do.
* 76 A Skates of silence.
77 A Their shoes squeak on the maple.
* 78 D JUDGE TRAN [CONT'D] (low): Mr. Brandt. Where did you get this?
* 79 D LEV (low): From the clerk.
* 80 D ADAEZE (low): Which clerk?
* 81 D LEV: The one who works here.
* 82 D ADAEZE: There are four.
* 83 D LEV: The one with the lanyard.
* 84 D ADAEZE: They all have lanyards!
* 85 D JUDGE TRAN: Lower your voice.
* 86 D ADAEZE (hissing): You forged it.
* 87 D LEV: Careful.
* 88 D ADAEZE: Or you let someone forge it. Same thing.
* 89 D LEV: That is slander, counselor.
* 90 D JUDGE TRAN: Stop. Both of you.
* 91 A ¶ Beat.
* 92 A The drip: plink.
93 A ¶ Judge Tran lifts the page toward the light.
94 A Tilts it.
95 A Squints.
96 A ¶ Her thumb rubs the signature.
* 97 A Black comes away.
* 98 A Wet.
99 A ¶ She holds the thumb up for them to see.
* 100 D JUDGE TRAN [CONT'D]: Ink's still wet.
101 A ¶ Lev's smile dies.
* 102 D LEV: Your Honor, that's - that can't -
* 103 D ADAEZE: Monday, you said.
* 104 D LEV: The photocopier smears.
* 105 D JUDGE TRAN: It is a pen, Mr. Brandt. A felt-tip. Not a copier.
* 106 D LEV: I can explain.
* 107 D ADAEZE: Please. Do.
* 108 D LEV: It was a... a re-signing. For the file.
* 109 D JUDGE TRAN: By whom?
110 A ¶ Lev opens his mouth.
111 A Closes it.
* 112 A ¶ Behind him, the rink doors swing open.
* 113 A Wind.
114 A A clerk in a lanyard stands there, small, pale, holding a felt-tip pen like a dropped weapon.
115 D CLERK [O.S.]: I'm sorry. He said it was routine.
116 A ¶ Nobody moves.
* 117 D JUDGE TRAN (quiet): Mr. Brandt. Sit down.
118 A ¶ Lev sits.
119 A Slowly.
* 120 A His chair squeaks on the maple.
* 121 D ADAEZE: Your Honor, the defense moves for dismissal with prejudice.
* 122 D JUDGE TRAN: Granted.
123 A ¶ The skate-wheel gavel.
* 124 A One tap.
* 125 A Echo, bright against the rafters.
126 A ¶ Adaeze exhales.
127 A Takes off her glasses.
128 A Rubs her eyes.
* 129 D ADAEZE (to herself): Sneakers. Best decision I made all week.
130 A ¶ Judge Tran pours tea.
* 131 A Steam curls in the cold.
* 132 D JUDGE TRAN: Court is adjourned. Somebody turn that ball off.
* 133 A ¶ The disco ball stops turning.

### SCENE s00001 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VEGA, WOMAN, STRANGER, INGRID
* 1 A ¶ Glass eyes in jars.
* 2 A A fox half-stuffed on the bench.
* 3 A Rain on a skylight.
4 A ¶ ODALYS VEGA (30s, rain-soaked trench coat, badge on her belt) stands in the doorway.
5 A At the bench, a WOMAN in a leather apron sews a pheasant's wing.
6 A Her back is turned.
* 7 D ODALYS: Evening. Sorry about the hour.
* 8 D STRANGER: Kettle's on. Sit.
9 A ¶ Odalys sits on a stool.
10 A Looks at the fox.
* 11 A The fox looks back.
* 12 D ODALYS: I'm looking into a break-in at the museum. Friday night.
* 13 D STRANGER: Terrible. They never lock the back.
* 14 D ODALYS: That's what the guard said. Funny, because he said she never left the bench that night either.
* 15 D STRANGER: Who?
* 16 D ODALYS: Nobody. Your name?
17 A ¶ The woman turns.
18 A Warm face.
19 A Needle in her teeth.
* 20 D STRANGER: Ingrid.
21 A ¶ She sets down the wing.
* 22 A On the shelf behind her: a small brass key tag.
* 23 A MUSEUM - REAR.
* 24 D INGRID: Does she take sugar, your guard?
25 A ¶ Odalys stands.
26 A Her hand drifts to her belt.
27 A Ingrid smiles.
* 28 D ODALYS: Ingrid. Put the needle down.

### SCENE s00002 | INT. DROWNED CATHEDRAL - BEEKEEPERS' LIBRARY - DUSK
Detected names (may be incomplete or contain aliases): TAMSIN HALE, BRAM, PIP, POLLY, SERAPH VANE
* 1 A ¶ Knee-deep green water fills the nave.
* 2 A Shelves of wax-sealed books rise like reefs from it, and bees drift between the pillars in slow gold ribbons.
3 A ¶ TAMSIN HALE (20s, barefoot, hair tied with twine) wades along a shelf, tracing spines with two fingers.
4 A Behind her, old BRAM (70s, white beard stained with honey) skims comb into a bucket.
5 A Beside the font, twin girls PIP and POLLY (10, identical, freckled) float paper boats made of recipe pages.
* 6 D TAMSIN: This one hums.
* 7 D BRAM: They all hum. Leave it be.
* 8 D POLLY: Pip says the roof is thinking again.
* 9 D PIP: I said it was dreaming.
* 10 A ¶ High above, a pane of old glass lets in the last amber light.
* 11 A The bees rise toward it, then settle.
12 A ¶ A figure pushes through the west door, shaking water from a long coat of feathers: SERAPH VANE (40s, tall, ink on her lips, a lantern with no flame).
13 A She stops, hearing the hum.
14 A Smiles faintly.
* 15 D SERAPH: Is the keeper in?
* 16 D BRAM: The keeper is always in. He's just slow.
17 A ¶ Tamsin slides the humming book back into its place.
* 18 A The bees go quiet.

### SCENE s00003 | INT. SALT MINE CURLING HALL - NIGHT
Detected names (may be incomplete or contain aliases): DEZ, PRATT, INEZ MOREAU, ABEBE TESFAYE, FOREMAN GUS HALVERSEN
* 1 A ¶ A long gallery cut from white rock, lit by work lamps on cable.
* 2 A Painted lanes run down the salt floor.
* 3 A At the far end, a faded house.
* 4 A ¶ The Deepwater Miners are down two ends in the final.
* 5 A Their last stone is about to go.
6 A ¶ COACH DESMOND "DEZ" PRATT (50s, windbreaker, stopwatch on a lanyard) paces behind the hogline.
7 A Skip INEZ MOREAU (30s, braided, taped knuckles) crouches in the house with her broom flat on the ice, calling the line.
* 8 A At the hack, lead ABEBE TESFAYE (20s, rangy, headband) slides out of his delivery, the stone rumbling off, while Dez mouths numbers and Inez sweeps nothing, waiting.
* 9 A The stone curls, hesitates, and dies a foot short of the button.
10 A ¶ Nobody speaks.
* 11 A Salt dust drifts in the lamplight.
* 12 D DEZ: That's the game.
* 13 D INEZ: It's not. We have one more.
* 14 D DEZ: We had one more.
* 15 D ABEBE: I pulled it. My fault.
* 16 D INEZ: Your slide was fine. The ice was heavy.
* 17 A ¶ Boots on the stairs.
18 A A man in a hard hat and reflective vest comes down the gallery, carrying a clipboard: FOREMAN GUS HALVERSEN (60s, soot in his creases, no smile).
19 A Dez straightens.
20 A Inez rises.
21 A Abebe stands the broom against the wall and wipes his palms on his knees.
* 22 D GUS: Shift change in ten. You've got to clear the lane.
* 23 D DEZ: Gus, we're mid-final.
* 24 D GUS: You were mid-final.
* 25 D INEZ: Give us the end. Please.
26 A ¶ Gus looks at the stone, at the button, at the scoreboard.
27 A Taps his pencil on the clipboard.
* 28 D GUS: One stone. Then you're out.
* 29 D DEZ: Thank you.
* 30 D GUS: Don't. Just throw it.
31 A ¶ Abebe picks up the stone.
32 A His hands shake.
33 A Inez crosses to him and takes the handle for a second, then lets go.
* 34 D INEZ (softly): Breathe out when you let go.
* 35 D ABEBE: I know.
* 36 D INEZ: I know you know.
37 A ¶ He slides.
* 38 A It's a clean release.
* 39 A The stone goes long, slow, tired.
* 40 A It touches nothing.
* 41 A ¶ The work lamps hum.
42 A Gus checks his watch.

### SCENE s00004 | INT. RIVERBOAT CASINO - PRIVATE DINING SALON - NIGHT
Detected names (may be incomplete or contain aliases): HORACE VANDERMEER, NEELY, ABBOTT, MILES KOWALCZYK
* 1 A ¶ Red velvet.
* 2 A Brass lamps.
* 3 A A paddle wheel churns beyond the portholes, and the whole room sways with the current.
* 4 A ¶ A long table set for three, with a court reporter's absence conspicuous.
5 A At its head sits HORACE VANDERMEER (50s, silver temples, a gray double-breasted suit, a fountain pen he never uncaps).
6 A He is the attorney for the plaintiff.
7 A ¶ Across from him, CORNELIUS "NEELY" ABBOTT (60s, ruddy, a carnation in his lapel, a glass of bourbon sweating at his elbow).
8 A The witness.
9 A Genial.
10 A Rich.
11 A ¶ At the foot of the table, MILES KOWALCZYK (30s, lean, perfect posture, a fresh haircut) arranges his notes.
12 A He represents Abbott.
* 13 A ¶ A deposition, held on a boat so no one can serve a subpoena in the wrong county.
* 14 D HORACE: We'll keep this informal, Mr. Abbott.
* 15 D NEELY: Neely. Everyone calls me Neely.
* 16 D MILES: Mr. Abbott will answer to his name.
* 17 D NEELY: Miles, relax. We're among friends.
* 18 D HORACE: Are we?
* 19 D NEELY: I hope so.
20 A ¶ Horace smiles.
21 A Uncaps nothing.
22 A Turns a page.
* 23 D HORACE: You've owned the Gilded Heron for how long?
* 24 D NEELY: Eleven years. Since my father passed.
* 25 D MILES: Objection. Relevance.
* 26 D HORACE: It's a deposition, Mr. Kowalczyk. Objections are noted, not ruled upon.
* 27 D MILES: Noted, then.
* 28 D NEELY: Let him ask. I've nothing to hide.
29 A ¶ A waiter pours coffee, withdraws.
* 30 A The paddle wheel thuds.
* 31 A Glasses shiver.
* 32 D HORACE: And the vessel carries how many guests on a Friday?
* 33 D NEELY: Three hundred, maybe three-fifty.
* 34 D HORACE: Sprinklers?
* 35 D NEELY: Of course.
* 36 D HORACE: Inspected?
* 37 D NEELY: Every year.
* 38 D MILES: Mr. Abbott, you needn't elaborate.
* 39 D NEELY: He's only asking about the boat.
* 40 D HORACE: Only about the boat.
41 A ¶ He turns another page.
42 A Pleasant.
43 A Unhurried.
44 A He might be reading a menu.
* 45 D HORACE [CONT'D]: Wonderful. Then let's talk about the fire.
46 A ¶ Neely's glass stops halfway to his lips.
* 47 D NEELY: Which fire?
* 48 D HORACE: The one in the engine room, August third.
* 49 D NEELY: That was minor.
* 50 D MILES: Mr. Abbott -
* 51 D NEELY: - a small electrical matter. The crew handled it.
* 52 D HORACE: The crew locked it.
* 53 D NEELY: I don't follow.
* 54 D HORACE: The engine room door. Locked from the outside. Eleven men inside.
* 55 D MILES: Objection! He's testifying.
* 56 D HORACE: He is, in fact, answering. Mr. Abbott?
* 57 D NEELY (too fast): That door sticks. It's old.
* 58 D HORACE: It sticks from the outside only?
* 59 D NEELY: It - I wouldn't know.
* 60 D HORACE: You signed the work order.
* 61 D NEELY: My signature is on a great many things.
* 62 D HORACE: This one is dated July thirtieth. Replace latch with exterior bolt. Reason given: theft prevention.
* 63 A ¶ Silence.
64 A Miles stops writing.
* 65 A The boat creaks.
* 66 D MILES: Where did you get that?
* 67 D HORACE: From the contractor's invoice file. Delivered this morning, with a very nervous apology.
* 68 D NEELY: He's lying.
* 69 D HORACE: He's dead, Mr. Abbott. Since Tuesday. His widow brought the file.
70 A ¶ Neely sets down the glass.
71 A It trembles against the saucer.
* 72 D NEELY: Miles. Say something.
* 73 D MILES: I'd like a recess.
* 74 D HORACE: We are on a river, Mr. Kowalczyk. Where would you recess to?
* 75 D MILES: The deck.
* 76 D HORACE: Of course.
77 A ¶ Miles stands, then sits again.
78 A He looks at Neely.
79 A Neely won't look at anyone.
* 80 D NEELY (quietly): It was supposed to be empty.
* 81 D MILES: Neely, don't -
* 82 D NEELY: The insurance man said the engine room would be empty at night.
* 83 D HORACE: And the eleven?
* 84 D NEELY: They weren't on the schedule.
85 A ¶ Horace finally uncaps the fountain pen.
86 A Writes one line.
* 87 A The nib scratches.
* 88 A Loud.
* 89 D HORACE: That will do for today.
90 A ¶ He caps the pen.
* 91 A The paddle wheel thuds.
* 92 A The lamps sway.
