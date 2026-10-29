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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0006.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01029 | INT. SYNERGY DYNAMICS - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): DARRYL PENHALLOW
* 1 A ¶ Forty identical desks.
* 2 A Forty identical monitors.
* 3 A A banner reads WE ARE FAMILY!
4 A ¶ DARRYL PENHALLOW, 30s, lanyard, tie two sizes too wide, stands bolt upright at his desk.
5 A Eyes wide.
6 A Smiling.
* 7 D DARRYL [V.O.]: This is my third reorg this quarter. I've been promoted twice. I still do the same job.
8 A ¶ He types.
9 A Fast.
10 A Frantic.
11 A Smiling.
* 12 D DARRYL [V.O., CONT'D]: Synergy is not a word. It's a hostage note.
* 13 A ¶ A cheerful intercom chime.
14 A ¶ He grabs a stapler.
15 A Clutches it to his chest.
16 A Smiling.
* 17 D DARRYL [V.O., CONT'D]: Quick wins. Low-hanging fruit. Circle back. Ping me.
18 A ¶ He drops the stapler.
19 A Picks up a mug: WORLD'S OKAYEST EMPLOYEE.
* 20 D DARRYL (to the room, bright): Great job, team!
21 A ¶ No one answers.
* 22 A Forty monitors glow.
* 23 D DARRYL [CONT'D] (muttering): We are so aligned.
24 A ¶ He sips from the empty mug.
25 A Sets it down.
26 A Smiles.

### SCENE s01030 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR MIRELLA STROZZI
* 1 A ¶ A great domed ceiling, plaster cracked like dry riverbed.
* 2 A Rows of reclining seats, all tilted toward a sky that no longer exists.
* 3 A Dust hangs in a single shaft of moonlight from a broken skylight.
4 A ¶ INSPECTOR MIRELLA STROZZI, 50s, charcoal overcoat, white glove on one hand, kneels at the base of the star projector, a black iron dumbbell of a machine.
5 A She sets a small cassette recorder on the floor and presses play.
* 6 D STROZZI [V.O.] (tape, hissing): Entry one. The caretaker was found here, third seat, row nine, facing south. No wound. No struggle. Only the projector, warm to the touch, though power has been cut for eleven years.
7 A ¶ She stops the tape.
8 A Lifts a lens cap.
* 9 A Underneath, a thumbprint in fresh grease.
10 A ¶ Slowly she stands, looks up at the dead dome.
* 11 A The cracks branch like constellations nobody named.
* 12 D STROZZI (softly): Warm.
13 A ¶ She presses record.
14 A Speaks into the recorder.
* 15 D STROZZI [CONT'D]: Entry two. Someone has been drawing the stars back in.
* 16 A ¶ Above her, tiny pinpricks of white chalk dot the plaster.
* 17 A Hundreds.
* 18 A Fresh.
* 19 A ¶ The projector clicks.

### SCENE s01031 | EXT. SUNSET GARDENS RETIREMENT HOME - BOCCE COURT - DAY
Detected names (may be incomplete or contain aliases): BERTIE, MOSCATO, LOU, GENOVESE, HIRO NAKAMURA, DORIS PELLEGRINO, SKIP, TATE
* 1 A ¶ Crushed oyster-shell lane, green benches, a hand-painted banner: LEAGUE FINALS.
* 2 A Folding chairs full of cardigans.
3 A ¶ ALBERTINA "BERTIE" MOSCATO, 80, pearls, steel spine, rolls her wrist like a bishop blessing.
4 A LOU "THE HAMMER" GENOVESE, 82, undershirt, arms like cured hams, glares from the other end.
5 A ¶ Bertie lets fly.
* 6 A The ball skims, kisses the pallino.
7 A Applause.
* 8 D BERTIE: Beat that, Hammer!
* 9 D LOU: I've beaten better, Bertie!
10 A ¶ HIRO NAKAMURA, 78, referee, pressed shirt, kneels with a tape measure.
11 A He measures.
12 A Looks up.
* 13 D HIRO: Bertie leads by half an inch.
14 A ¶ DORIS PELLEGRINO, 75, Lou's partner, sun visor, mutters.
* 15 D DORIS: Half an inch. I've had longer lunches.
16 A ¶ Lou steps to the line.
17 A Spits on his palm.
18 A Rolls.
* 19 A The ball veers left, strikes Bertie's ball, scatters it.
20 A The crowd gasps.
* 21 D LOU: Ha!
* 22 D BERTIE: Cheat!
* 23 D HIRO: Legal. Lou leads.
24 A ¶ ORVILLE "SKIP" TATE, 85, Bertie's partner, wheelchair, a blanket across his knees, rolls up.
* 25 D SKIP: Bertie, you owe me three dollars if you lose.
* 26 D BERTIE: Skip, I never lose.
* 27 D SKIP: Ninety-one losses, Bertie. I counted.
* 28 D BERTIE: Quiet, you old goat.
29 A ¶ She picks up the last ball.
30 A Stares down the court.
* 31 A Quiet descends.
* 32 A A wind chime tinkles.
33 A ¶ She steps.
34 A Swings.
35 A Lets go.
* 36 A ¶ The ball curves, ticks the fence, rolls, and stops dead against the pallino.
* 37 A ¶ Silence.
38 A Then an uproar.
* 39 D DORIS: Hiro, it's wood. Look at the grain!
* 40 D HIRO: Bertie wins.
* 41 D LOU (low): Rematch.
* 42 D BERTIE: Next Sunday, Hammer. Bring your checkbook.

### SCENE s01032 | INT. SUGAR MILL - BOILING FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): JETHRO MALLORY, PILAR ESCOBEDO, HENRIK SOLBERG
* 1 A ¶ A cavernous hall of copper vats, rafters lost in steam.
* 2 A A table has been dragged to the center, a thick plank on two barrels.
* 3 A Folding chairs ring it.
* 4 A Crates of burlap sacks serve as bleachers.
* 5 A Lanterns hang from hooks.
6 A ¶ JETHRO MALLORY, 40s, shirtless under a leather apron, shoulders like sacks of grain, sits at one side of the table.
7 A Across from him, PILAR ESCOBEDO, 20s, rolled sleeves, braid down her back, calm as a tide pool.
8 A ¶ Between them, HENRIK SOLBERG, 60s, referee, rubs his hands in chalk and sets them on top of theirs.
* 9 D HENRIK: Elbows on the pads. Grips locked.
10 A ¶ Jethro grips.
11 A Pilar grips.
12 A Their knuckles whiten.
* 13 D HENRIK [CONT'D]: Ready?
* 14 D JETHRO: Born ready.
* 15 D PILAR: Skip the speech.
* 16 D HENRIK: Go!
17 A ¶ Both tense.
* 18 A The table groans.
19 A A vein rises on Jethro's neck.
20 A Pilar's jaw clenches.
21 A Neither moves.
22 A ¶ The crowd begins a low chant: Jeth-ro.
23 A Jeth-ro.
* 24 D PILAR (through teeth): You sweat a lot.
* 25 D JETHRO: It's a sweaty room.
* 26 D PILAR: Your wife make that apron?
* 27 D JETHRO: My mother.
* 28 D PILAR: She loves you.
* 29 D JETHRO: Shut up.
30 A ¶ Henrik crouches, eyes on the hands.
* 31 A Sweat drips from Jethro's nose onto the plank.
32 A ¶ Pilar shifts her weight.
33 A Her free hand grips the table's edge.
34 A Jethro's arm trembles, a small tremor.
35 A Hers does too.
36 A ¶ They breathe together, in, out.
* 37 D HENRIK: Hold your lines.
38 A ¶ Jethro surges.
39 A His hand pushes hers an inch toward the pad.
40 A The crowd roars.
41 D PILAR (gasping): Not yet.
42 A ¶ She drives back.
43 A His arm straightens.
44 A Equal again.
45 A ¶ Both freeze.
46 A Both stare.
47 A Neither blinks.
* 48 D JETHRO: You're good.
* 49 D PILAR: My father taught me. At a mill like this.
* 50 D JETHRO: Where?
* 51 D PILAR: Matanzas.
* 52 D JETHRO: I had a cousin in Matanzas.
* 53 D PILAR: Everyone does.
54 A ¶ They laugh, tight and brief.
* 55 A The effort cracks it.
56 A ¶ Jethro lunges again.
* 57 A The table skids across the floor.
58 A Henrik leaps clear.
* 59 A Chairs topple.
60 A The crowd scatters back as the barrels shift.
61 A ¶ Pilar twists, wrenches her shoulder, slams the back of his hand toward the pad.
* 62 A It stops an inch from the wood.
63 A Both grunt.
* 64 D HENRIK: Hold! Hold! The table!
65 A ¶ They don't hold.
66 A They are locked.
* 67 A The table tilts.
68 A They tumble together onto the sacks, hands still clasped, wrestling.
69 A ¶ Henrik blows a whistle.
* 70 A No one hears.
* 71 D PILAR (rolling): Pad's behind you!
* 72 D JETHRO: Is not!
* 73 D HENRIK: It is! It's behind you both!
74 A ¶ They tumble over the barrels, bounce against a vat, freeze.
* 75 A Steam hisses.
76 A Their joined hands hover above a sack of raw sugar.
77 A Neither willing to break.
* 78 D PILAR: Truce?
* 79 D JETHRO: Till dawn.
* 80 D PILAR: Dawn's fine.
81 A ¶ They let go together.
82 A Both slump on the sacks, panting.
* 83 D HENRIK (to the crowd): Draw! The match is a draw!
84 A ¶ A cheer, ragged.
85 A Jethro and Pilar lie there staring at the rafters, arms spread, hands shaking.
* 86 D JETHRO: Again?
* 87 D PILAR: Tomorrow.
* 88 D JETHRO: Bring your father.
* 89 D PILAR: He's dead.
* 90 D JETHRO: Then bring his arm.
91 A ¶ Pilar smiles, for the first time.
92 A She sits up and reaches for the table.
* 93 D HENRIK: You people are insane.
94 A ¶ She slams her elbow on the plank.
95 A Jethro hauls himself up and does the same.
96 A The crowd goes silent.
* 97 D HENRIK [CONT'D] (sighing): Ready?

### SCENE s01033 | INT. FUNICULAR CAR - MID-SLOPE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUST MWANGI, SILAS DRAKEFORD, ZOFIA BR, TEN
* 1 A ¶ Stalled.
* 2 A Wooden benches, brass rails.
* 3 A Outside, black pines and a thousand feet of dark.
* 4 A Wind rocks the car on its cable.
5 A ¶ AUGUST MWANGI, 40s, charcoal coat, gloved hands folded, sits very still.
6 A Tall, calm, eyes of a chess player.
7 A ¶ Across from him, SILAS DRAKEFORD, 40s, wet hair, a bruise ripening on his cheekbone, grips a leather briefcase to his chest.
* 8 D SILAS: You pulled the brake.
* 9 D AUGUST: I pulled nothing.
* 10 D SILAS: Then who did?
* 11 D AUGUST: The cable did what cables do.
12 A ¶ Silas shifts.
13 A His hand slides toward his pocket.
14 A August watches it.
* 15 D AUGUST [CONT'D]: Don't.
* 16 D SILAS: I wasn't.
* 17 D AUGUST: Then he wouldn't have said I was.
* 18 D SILAS: Who?
* 19 D AUGUST: You know who.
20 A ¶ Silas swallows.
21 A His eyes dart to the window.
* 22 A Nothing but pine and fog.
* 23 D SILAS: He told you I took it.
* 24 D AUGUST: He told me you were smart. And that smart men carry briefcases.
25 A ¶ Silas laughs, brittle.
26 A He sets the briefcase on his knees.
27 A Clasps it shut.
* 28 A ¶ A scrape.
* 29 A On the roof.
30 A Both men look up.
* 31 D AUGUST [CONT'D]: Deer.
* 32 D SILAS: On a funicular?
* 33 A ¶ Another scrape, heavier.
* 34 A The car sways.
* 35 A ¶ The roof hatch slams open.
36 A A boot drops through.
37 A Then a leg.
38 A Then a woman, ZOFIA BRÅTEN, 30s, climbing gear, ice axe, headlamp blazing.
39 A She lands in a crouch, axe leveled.
* 40 D ZOFIA: Nobody move.
41 A ¶ Both men raise their hands.
42 A She sweeps the light across them, lands on August.
* 43 D ZOFIA [CONT'D]: You. Open the briefcase.
* 44 D AUGUST: It's his.
* 45 D ZOFIA (to Silas): Then you.
46 A ¶ Silas hesitates.
47 A His hand shakes.
48 A He unlatches.
49 A Flips the lid.
* 50 A ¶ Inside, nothing.
* 51 A Foam padding, cut to hold something that's no longer there.
* 52 D ZOFIA [CONT'D]: Where is it?
* 53 D SILAS: I don't know.
54 A ¶ August smiles.
55 A Slowly lowers his hands.
* 56 D AUGUST: He knows.
57 A ¶ He nods at the window.
* 58 A On the glass, a small hand-shaped print.
* 59 A On the outside.
* 60 A ¶ The car lurches.
* 61 A Falls ten feet and catches.
62 A ¶ All three scream.

### SCENE s01034 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): BEATRIX CALLOWAY, NICO ABARA, FENWICK
* 1 A ¶ Glass eyes glitter from every shelf.
* 2 A A stuffed owl, a lynx mid-leap, a badger with a crooked grin.
3 A ¶ BEATRIX CALLOWAY, 50s, magnifier on her forehead, kneels by an open drawer while NICO ABARA, 20s, apprentice, holds the lantern and FENWICK, 70s, owner, stands rigid at the door, fingers twitching, and all three have noticed that the fox on the counter is missing its left eye.
* 4 D BEATRIX: Fenwick, you said nobody came in.
* 5 D FENWICK: Nobody did, Beatrix.
* 6 D NICO: The fox, Mr. Fenwick. Look at the fox.
7 A ¶ Beatrix lifts the animal, turns it, peers into the empty socket, pulls a folded note from inside, and Nico leans in, lantern shaking, while Fenwick edges toward the back door, one hand in his coat.
* 8 D BEATRIX: Stop there, Fenwick.
* 9 D FENWICK: It's a misunderstanding.
* 10 D NICO: It says "the eye is in the owl."
11 A ¶ They all turn.
* 12 A The owl stares back.

### SCENE s01035 | INT. QUARANTINED CRUISE SHIP - GIFT SHOP - NIGHT
Detected names (may be incomplete or contain aliases): RENATA KOVAC, MILES TOBIN, ADEBAYO ROSS, CAPTAIN HALE
* 1 A ¶ Shelves of magnets, snow globes, sunscreen.
* 2 A The registers are dark.
* 3 A Emergency strips light the floor.
* 4 A Through the glass storefront, an empty promenade deck rocks gently at anchor.
5 A ¶ RENATA KOVAC, 40s, ship's purser, hair in a messy bun, uniform jacket unbuttoned, sits behind the counter with a radio on her knee.
6 A MILES TOBIN, 30s, ship's doctor, mask around his chin, leans on a shelf.
7 A ADEBAYO ROSS, 50s, passenger, bathrobe, paper slippers, pretends to read a paperback.
* 8 A ¶ The radio crackles.
* 9 D CAPTAIN HALE [V.O.]: Shop, this is the bridge. Status.
* 10 D RENATA (into radio): Three souls, sir. All calm.
* 11 D CAPTAIN HALE [V.O.]: Keep them there. We've got a boat coming at dawn.
* 12 D RENATA: Understood.
13 A ¶ She sets the radio down.
* 14 A The silence returns.
* 15 D ADEBAYO (to no one): Two weeks on a boat, and the one thing they sell me is snow globes.
* 16 D MILES: You can have mine.
* 17 D ADEBAYO: Does it come with a cure?
* 18 D MILES: It comes with a mild placebo effect.
19 A ¶ Adebayo laughs, then coughs.
20 A Miles straightens, watches him.
* 21 D MILES [CONT'D] (quietly): Sir, how long has that been going?
* 22 D ADEBAYO: It's a tickle.
* 23 D MILES: How long?
* 24 D ADEBAYO: Since Tuesday.
25 A ¶ Renata stiffens.
26 A She slides her hand slowly toward the radio.
* 27 D RENATA (to all): Everyone stay exactly where you are.
* 28 D MILES: Renata.
* 29 D RENATA: Don't.
* 30 D MILES: He's not necessarily--
* 31 D RENATA: You said no one on this deck was symptomatic.
32 A ¶ Miles opens his mouth.
33 A Closes it.
* 34 D ADEBAYO (muttering): I should've stayed in the cabin.
* 35 A ¶ The storefront lights flicker.
* 36 A Outside, a searchlight sweeps the promenade.
* 37 A Then a second.
* 38 A Then a third, from a hull that isn't theirs.
* 39 D RENATA: That's not the dawn boat.
* 40 D MILES: No.
41 A ¶ She lifts the radio.
* 42 D RENATA [CONT'D]: Bridge, we have lights on the promenade.
* 43 A ¶ Static.
* 44 A Nothing.
45 A She tries again.
* 46 D RENATA [CONT'D]: Bridge?
* 47 D CAPTAIN HALE [V.O.] (whispering): Don't open the door. They're not ours.

### SCENE s01036 | INT. THORNQUIST DRESSMAKER'S SHOP - LONDON - DAY (1893)
Detected names (may be incomplete or contain aliases): AGNES THORNQUIST, DELPHINE ARCHAMBAULT, COLONEL ASHBY-GREY, YUSUF HADDAD
* 1 A ¶ Bolts of silk, a cutting table, a brass dummy in half-pinned lilac.
* 2 A Rain at the window.
3 A ¶ AGNES THORNQUIST, 40s, pins in her mouth, kneels to a hem.
4 A DELPHINE ARCHAMBAULT, 20s, in her slip, stands on a footstool, arms out.
5 A Her eyes avoid the mirror.
6 A ¶ COLONEL ASHBY-GREY, 60s, enters in a damp greatcoat.
7 A YUSUF HADDAD, 30s, tailor's apprentice, follows with a tape over his shoulder.
* 8 D ASHBY-GREY: Miss Archambault. Your father sends his regards.
* 9 D DELPHINE: How kind.
10 A ¶ He sets his hat on the cutting table.
11 A Agnes takes the pins from her mouth.
* 12 D AGNES: Colonel. We weren't expecting you.
* 13 D ASHBY-GREY: One doesn't schedule a wedding fitting.
* 14 D AGNES: It's not yet a wedding.
* 15 D ASHBY-GREY: It will be Saturday.
16 A ¶ Delphine's arm drops an inch.
17 A Agnes taps it back up.
* 18 D AGNES: Steady, dear.
19 A ¶ Yusuf unrolls the tape.
20 A Measures the waist.
21 A Says nothing.
22 A His fingers tremble.
* 23 D ASHBY-GREY: Tighter at the bodice. The family insists.
* 24 D AGNES: She'll not breathe.
* 25 D ASHBY-GREY: She'll not need to.
* 26 A ¶ A silence.
* 27 A Rain hits the glass.
28 A ¶ Delphine looks into the mirror for the first time.
29 A At herself.
30 A At Yusuf behind her.
* 31 D DELPHINE: Mr. Haddad. Is the silk imported?
* 32 D YUSUF: From Damascus, miss.
* 33 D DELPHINE: How far is that?
* 34 D YUSUF: Very far.
* 35 D DELPHINE: How long would it take to go?
36 A ¶ Ashby-Grey turns.
37 A His eyes narrow.
* 38 D ASHBY-GREY: Miss Archambault.
* 39 D DELPHINE: Merely curious.
40 A ¶ Agnes rises, sets her pins down, and smooths the bodice.
41 A Her thumb brushes Delphine's wrist.
42 A A pulse passes between them.
43 A Quick, quiet.
* 44 D AGNES (low): I'll let out the seam tonight.
* 45 D ASHBY-GREY: Pardon?
* 46 D AGNES: I said I'll take in the seam tonight.
47 A ¶ Ashby-Grey studies her.
48 A Then Yusuf.
49 A Then the door.
* 50 D ASHBY-GREY: Saturday. Ten sharp.
51 A ¶ He takes his hat and leaves.
* 52 A The bell tinkles.
* 53 A The latch clicks.
54 A ¶ Nobody moves.
55 A Then Delphine steps down off the stool, slow, as if it were a scaffold.

### SCENE s01037 | INT. ROTATING RESTAURANT - TOWER SUMMIT - NIGHT
Detected names (may be incomplete or contain aliases): ROZ KAPLAN, TREVOR DUNN, NEW GIRL, SUNNY
* 1 A ¶ A circular room on a slow turn.
* 2 A The city slides past the windows like a conveyor.
* 3 A White tablecloths, empty chairs, a pianist's bench with no pianist.
4 A ¶ ROZ KAPLAN, 50s, silver bob, red lipstick, sits at a corner table with a blueprint under her wine glass.
5 A Opposite her, TREVOR DUNN, 30s, hotel uniform, nervous hands.
6 A ¶ A NEW GIRL, 20s, denim jacket, backpack, slides into the third chair without being invited.
* 7 D NEW GIRL: Sorry I'm late. The elevator stopped at every floor.
* 8 D ROZ: It's a tourist elevator.
* 9 D NEW GIRL: It was a hostage situation.
* 10 D ROZ: You've got the codes?
* 11 D NEW GIRL: I've got the codes.
* 12 D TREVOR: Who is she?
* 13 D ROZ: Trevor, this is Sunny Lockwood. She's the one I told you about.
* 14 D SUNNY: Nice to meet you. I'm the one with the thumbs.
* 15 D TREVOR: The thumbs?
* 16 D SUNNY: Locksmith's daughter. Four generations of thumbs.
* 17 D ROZ: She's good. She's very good. She's also nineteen.
* 18 D TREVOR: Twenty-one.
* 19 D SUNNY: Twenty. Don't lie for me.
* 20 D ROZ: Let's start. The vault is on sixty-one, under the observation deck. Every ninety minutes the restaurant makes a full revolution. We have exactly four minutes where the north camera faces the wall.
* 21 D TREVOR: Because of the rotation.
* 22 D ROZ: Because of the rotation. Sunny takes the first lock. I take the second. Trevor, you stay at the maitre d' stand and pour wine.
* 23 D TREVOR: I can pour wine.
* 24 D ROZ: You can pour wine badly. That's all anyone expects.
* 25 D SUNNY: What's the haul?
* 26 D ROZ: Eleven million. Bearer bonds. In a briefcase that looks like a briefcase.
* 27 D SUNNY: Eleven's good. What's my cut?
* 28 D ROZ: Two.
* 29 D SUNNY: Three.
* 30 D ROZ: Two and a half.
* 31 D SUNNY: She drives a hard bargain.
* 32 D TREVOR: She who?
* 33 D SUNNY: Roz. It's a figure of speech. I'm talking about Roz.
* 34 D ROZ: I know who you mean.
* 35 D SUNNY: She counts every penny.
* 36 D ROZ: She buys every drink. Shut up and listen.
37 A ¶ Trevor pours wine for no one.
* 38 A The glass fills.
39 A He sets the bottle down too hard.
* 40 D ROZ [CONT'D]: After the second lock, there's a pneumatic tube. Documents only. We use it to send the bonds down to the kitchen.
* 41 D TREVOR: They go down by tube.
* 42 D ROZ: They go down by tube. At the kitchen, Marguerite takes them in a casserole dish.
* 43 D SUNNY: Who's Marguerite?
* 44 D ROZ: My sister.
* 45 D SUNNY: You have a sister?
* 46 D ROZ: Everyone has a sister.
* 47 D TREVOR: I don't.
* 48 D ROZ: Then you're lucky.
* 49 D SUNNY: What about security?
* 50 D ROZ: Two guards. One reads novels. The other sleeps. We tested them for six weeks.
* 51 D SUNNY: Six weeks of watching a man read a novel.
* 52 D ROZ: It was a Dickens.
* 53 D SUNNY: Which?
* 54 D ROZ: Bleak House.
* 55 D SUNNY (laughing): Oh, I like her.
* 56 D TREVOR: Who?
* 57 D SUNNY: Roz. You keep asking.
* 58 D ROZ: Pay attention. Revolution starts at eleven forty. We're in position by eleven thirty. Questions?
* 59 D TREVOR: What if the guard doesn't sleep?
* 60 D ROZ: Then I buy him a drink.
* 61 D SUNNY: What if he doesn't drink?
* 62 D ROZ: Everyone drinks, sweetheart.
* 63 D SUNNY: What if the vault door is a different model?
* 64 D ROZ: It isn't.
* 65 D SUNNY: What if it is?
* 66 D ROZ: Then you'll earn your three.
* 67 D SUNNY (grinning): Three?
* 68 D ROZ: Two and a half. Don't push.
* 69 A ¶ The room turns.
* 70 A The city lights drift past, one landmark after another.
* 71 D TREVOR: It's a little beautiful, actually.
* 72 D ROZ: It's a job, Trevor.
* 73 D TREVOR: Can it be both?
* 74 D ROZ: No.
75 A ¶ Sunny lifts her glass.
76 A Roz clinks it.
77 A Trevor, last, doesn't quite reach.

### SCENE s01038 | INT. FUNERAL HOME - VIEWING ROOM B - DAY
Detected names (may be incomplete or contain aliases): ELOISE FARNSWORTH, CAMILA BRANDAO, DOROTHEA KWAN
* 1 A ¶ Velvet drapes.
* 2 A A casket at the far end, closed, spray of lilies.
* 3 A Folding chairs facing a mahogany table, court reporter's stenotype ticking beside it.
4 A ¶ ELOISE FARNSWORTH, 70s, black gloves, rosary wrapped around one hand, sits very straight.
5 A On her left, CAMILA BRANDAO, 40s, her attorney, legal pad flat.
6 A Across the table, DOROTHEA KWAN, 50s, opposing counsel, reading glasses on a chain.
* 7 D KWAN: Mrs. Farnsworth, when did you last see your husband alive?
* 8 D ELOISE: Tuesday.
* 9 D KWAN: And the will?
10 A ¶ Eloise's rosary clicks once.
* 11 D ELOISE: What about it?
* 12 D KWAN: Did she witness it?
* 13 D BRANDAO: Objection. Who's "she"?
* 14 D KWAN: The nurse.
* 15 D ELOISE: Mrs. Okafor.
* 16 D KWAN: She told us she wasn't present.
17 A ¶ Eloise stares at the casket.
18 A Her fingers work the beads, one, two, three.
* 19 D BRANDAO: Let the record show my client has not been served that statement.
* 20 D KWAN: It's in your folder.
21 A ¶ Brandao flips pages.
22 A Stops.
23 A Her thumb presses a corner of paper until it whitens.
* 24 D ELOISE: I'd like some water.
25 A ¶ Kwan nods to the reporter.
26 A A pitcher is brought.
27 A Eloise's glove shakes as she lifts the cup, then stills.

### SCENE s01039 | INT. SUDS-N-DUDS LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): NADIA BELOV, TUCKER SHAW, MARISOL OYELOWO, WALTER DIBBLE
* 1 A ¶ Humming dryers, orange plastic chairs bolted to the floor, a vending machine selling single-serve detergent.
* 2 A A TV on a bracket plays the weather, muted.
3 A ¶ NADIA BELOV, 40s, scrubs under a parka, feeds quarters into a washer.
4 A Her shoes are still wet.
5 A TUCKER SHAW, 20s, in a hockey jersey, sits on a folding table with a cardboard cup of coffee, scrolling his phone.
6 A MARISOL OYELOWO, 30s, in a hoodie, dumps a bag of towels into the next machine.
* 7 D NADIA: Is this one broken?
* 8 D TUCKER: It eats quarters. But it works.
* 9 D NADIA: Great.
* 10 D MARISOL: Try hitting the side.
11 A ¶ Nadia hits the side.
* 12 A The washer coughs and starts.
* 13 D NADIA: Thanks.
* 14 D MARISOL: Everybody does it.
15 A ¶ Tucker sips.
16 A Looks at the TV.
* 17 A Snow, again.
* 18 D TUCKER: They said it'd stop by nine.
* 19 D MARISOL: They say a lot of things.
* 20 D NADIA: It's ten thirty.
* 21 D TUCKER: Then we're all in this together.
* 22 A ¶ A silence.
* 23 A The dryers hum on.
* 24 A ¶ The door chimes.
25 A WALTER DIBBLE, 80s, in pajama bottoms and a trench coat, shuffles in dragging a laundry bag like a body.
26 A He looks at the three of them, then at the machines, then at the sign.
* 27 D WALTER: Is there a machine that takes dollars?
* 28 D TUCKER: Just the change machine, sir.
* 29 D WALTER: It's out of order.
* 30 D MARISOL: It's been out of order for a year.
* 31 D NADIA: I have quarters.
* 32 D WALTER: I'd pay you back.
* 33 D NADIA: It's fine.
34 A ¶ She counts out eight quarters and hands them over.
35 A He holds them like a collection plate.
* 36 D WALTER: Bless you.
* 37 D TUCKER: You got somewhere to be?
* 38 D WALTER: Only here.
39 A ¶ He loads a machine.
40 A Closes the lid slowly, patiently, as if it were a casket.
41 A Starts it.
* 42 A The drum begins to turn.
* 43 D NADIA: Is your wife--
* 44 D WALTER: She's passed. Last spring. I never learned how.
* 45 D MARISOL: It's not hard.
* 46 D NADIA: It's not hard.
47 A ¶ They say it together, same moment, same tone.
48 A They look at each other.
49 A Smile.
50 A Tucker slides off the table.
* 51 D TUCKER: Hey, Walter. Come sit.
* 52 D WALTER: I'm all right.
* 53 D TUCKER: Come sit anyway.
54 A ¶ Walter hesitates.
55 A Then he takes the plastic chair beside Marisol.
56 A ¶ Nobody speaks.
* 57 A The machines turn.
* 58 A The snow keeps falling on the window.
* 59 A For a while, it's enough.
