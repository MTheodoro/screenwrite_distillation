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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0011.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01080 | INT. MUNICIPAL ARBITRATION ROOM - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR SALAZAR-KIM, LAWYER DEWITT PIKE, YUSUPOVA
* 1 A ¶ Fake wood paneling.
* 2 A A humming vending machine in the corner.
* 3 A A conference table too big for the room.
4 A ¶ ARBITRATOR SALAZAR-KIM, 50s, bifocals, reads a file.
5 A Across from her sit LAWYER DEWITT PIKE, 40s, tie clip shaped like a gavel, and CLIENT MRS. YUSUPOVA, 70s, handbag on her lap.
6 A Pike clicks a pen.
7 A Mrs. Yusupova stares at the vending machine.
8 A Salazar-Kim turns a page, Pike clicks again, and Mrs. Yusupova opens her handbag, closes it, opens it.
* 9 D SALAZAR-KIM: Mr. Pike, your client claims the landlord shut off her heat for three winters.
* 10 D PIKE: Correct.
* 11 D SALAZAR-KIM: Mrs. Yusupova, is that accurate?
* 12 D MRS. YUSUPOVA: Cold. Always cold. I wear coat in kitchen.
* 13 D SALAZAR-KIM: And the landlord, Mr. Brandt, says he was never notified.
* 14 D PIKE: We have eleven letters.
* 15 D SALAZAR-KIM: Sent how?
* 16 D PIKE: Certified mail.
* 17 D MRS. YUSUPOVA: Also I knock his door. Many times.
* 18 D SALAZAR-KIM: Did he answer?
* 19 D MRS. YUSUPOVA: Once. He gave me blanket.
* 20 D PIKE: Your Honor, that's not relevant.
* 21 D SALAZAR-KIM: I'm an arbitrator, Mr. Pike. Not a Your Honor. And I'd like to hear about the blanket.
* 22 D MRS. YUSUPOVA: Gray. Scratchy. Smell like dog.
* 23 D SALAZAR-KIM (writing): Gray, scratchy, smelled like dog.
* 24 D PIKE: We'd ask for restitution of nine thousand dollars.
* 25 D SALAZAR-KIM: And the blanket?
* 26 D MRS. YUSUPOVA: Keep. Is warm.

### SCENE s01081 | INT. BACK ROOM OF A TAXIDERMY SHOP - NIGHT
Detected names (may be incomplete or contain aliases): ROCCO, VANTI, SAL MAROUNI, LENA FISHBACH, TIMOTHY BLACKWOOD-ADE
* 1 A ¶ Glass eyes.
* 2 A Stuffed owls.
* 3 A A badger mid-snarl.
* 4 A A card table with four chairs and one bare bulb.
5 A ¶ ROCCO "THE BOOKKEEPER" VANTI, 50s, rolled sleeves, counts cash into neat stacks.
6 A SAL MAROUNI, 30s, tracksuit, bounces a knee.
7 A LENA FISHBACH, 40s, wire glasses, watches the door.
8 A TIMOTHY BLACKWOOD-ADE, 20s, nervous, holds a duffel bag in his lap.
* 9 D ROCCO: Eighty. Eighty-five. Ninety.
* 10 D SAL: Where's the rest?
* 11 D ROCCO: Counting, Sal.
* 12 D LENA: Timothy, put the bag on the table.
* 13 D TIMOTHY: It's fine here.
* 14 D SAL: Put it on the table.
* 15 D TIMOTHY: I said it's fine.
* 16 D LENA: Why are you sweating?
* 17 D TIMOTHY: It's hot.
* 18 D SAL: It's a taxidermy shop in November.
* 19 D TIMOTHY: The badger gives off heat.
* 20 D ROCCO (not looking up): Ninety-five. A hundred.
21 A ¶ Lena shifts her chair.
* 22 A A floorboard creaks somewhere above them.
23 A Timothy flinches.
* 24 D SAL: Who else is here?
* 25 D TIMOTHY: Nobody.
26 D LENA: There's a second floor?
* 27 D ROCCO: Storage.
28 D SAL: Check it.
* 29 D LENA: I'll check it.
* 30 D ROCCO: Sit down, Lena.
* 31 D LENA: Rocco, there's something up there.
* 32 D ROCCO: It's a possum. Frank keeps one on a branch.
* 33 D SAL: Dead?
* 34 D ROCCO: Obviously dead.
* 35 A ¶ The ceiling creaks again.
36 A All four look up.
* 37 A The bulb sways.
* 38 A A shadow slides across the badger's snout.
* 39 D TIMOTHY: That didn't sound dead.
* 40 D LENA: That sounded like a person.
* 41 D SAL: Give me the bag.
* 42 D TIMOTHY: No.
* 43 D SAL: Give me the bag, Timothy.
* 44 D TIMOTHY: I can't.
* 45 D ROCCO (slowly setting down the money): Why not?
* 46 D TIMOTHY: Because it's not the money.
* 47 A ¶ Silence.
* 48 A The bulb swings.
49 A Sal's hand drifts toward his jacket.
50 A Lena eases her chair back.
* 51 D LENA: Then what is it?
* 52 D TIMOTHY: I didn't have a choice. They said bring it or --
* 53 D ROCCO: Who said?
* 54 D TIMOTHY: The man upstairs.
* 55 A ¶ The ceiling groans.
56 A Footsteps cross to the top of the stairs.
57 A A silhouette fills the doorway above.
58 A Boots descend one step at a time.
* 59 D SAL (whispering): Rocco.
* 60 D ROCCO: Everybody stay calm.
* 61 D LENA: I'm calm.
* 62 D SAL: I'm not calm.
* 63 D TIMOTHY: He said don't run.
64 A ¶ The boots reach the bottom stair.
65 A A hand reaches out and flicks off the bulb.
* 66 A Dark.
* 67 A Glass eyes gleam in the red glow of an exit sign.
* 68 D ROCCO (a hush): Nobody move.

### SCENE s01082 | INT. MINIATURE GOLF CLUBHOUSE - A PIRATE SHIP FOUNDERED IN PLASTER - DAY
Detected names (may be incomplete or contain aliases): BARNABY QUINCE, ODALYS FERREIRA-LAWSON, PARROT, CHILD
* 1 A ¶ A clubhouse built like a shipwreck.
* 2 A Fiberglass barnacles.
* 3 A A parrot animatronic that squawks on a timer.
* 4 A Scorecards pinned to a mast.
* 5 A The windows overlook a windmill hole where nobody is playing.
6 A ¶ BARNABY QUINCE, 50s, tour-guide's moustache, pirate hat two sizes small, sits behind the counter practicing a speech to the empty room.
7 A Beside the register, ODALYS FERREIRA-LAWSON, 20s, mini-golf league champion, rolls a putter along the floorboards, bored.
* 8 D BARNABY (to the room): Ahoy, ye mighty putters! Today we face the Kraken's Revenge, hole eighteen, par three...
* 9 D ODALYS: Nobody is here, Barnaby.
* 10 D BARNABY (muttering to himself): Practice makes plunder.
* 11 D ODALYS: You say that to the parrot, too.
* 12 D BARNABY: The parrot's a good listener.
13 A ¶ The parrot squawks on cue.
* 14 D PARROT [V.O.]: Pieces of eight! Pieces of eight!
* 15 D BARNABY: See?
* 16 D ODALYS: It's on a loop.
17 A ¶ She sinks a putt into a coffee cup.
18 A Barnaby claps.
19 A She bows.
* 20 D BARNABY: Ladies and gentlemen --
* 21 D ODALYS: There's no ladies and gentlemen.
* 22 D BARNABY: Ladies and gentleman.
* 23 D ODALYS: Gentleperson.
* 24 D BARNABY (delighted): Gentleperson! Excellent.
* 25 A ¶ The door chimes.
26 A A family of six enters in matching shirts.
27 A They fill the clubhouse with sunburn and noise.
28 A Barnaby leaps up, hat tilting.
* 29 D BARNABY [CONT'D] (grandly, to all): Welcome, brave souls! Who dares challenge the Kraken?
30 A ¶ A small child points at Odalys.
* 31 D CHILD: She's got a golf stick!
* 32 D ODALYS (to the child): It's a putter.
* 33 D BARNABY (to the child): It's a cutlass, my boy.
34 A ¶ They speak at once.
* 35 D BARNABY [CONT'D]: Eighteen holes of peril!
* 36 D ODALYS: ^Eighteen holes of boredom.
* 37 D BARNABY (hissing): Odalys.
* 38 D ODALYS (whispering back): What? It's honest.
39 A ¶ The family cheers anyway.
40 A Barnaby sweeps the hat off, bows with a flourish.
* 41 A The hat tips off his head, rolls across the floor, and stops at the child's feet.
42 A The child puts it on.
* 43 D BARNABY (quietly, to himself): Well, that's a first.
* 44 D ODALYS (to him, under her breath): Don't get used to it. You'll want it back.
45 A ¶ Barnaby hands out putters.
46 A Odalys slides the scorecards across the counter.
47 A The parrot squawks.
* 48 D PARROT [V.O.]: Pieces of eight!
* 49 D ODALYS (deadpan): And a mutiny.

### SCENE s01083 | INT. WIZARD'S LIBRARY - THE ROOM OF TURNING SHELVES - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIVIST THESSALY MOORE, KESTREL DONOVAN-ABIOLA, VOICE, RAVEN-HEADED STRANGER, SCRIBE
* 1 A ¶ Shelves rotate on slow brass gears.
* 2 A Books drift between them on their own.
* 3 A A fire burns in a hearth with no chimney.
* 4 A Candles hover.
5 A ¶ ARCHIVIST THESSALY MOORE, 40s, ink-stained sleeves, spectacles on a cord, kneels at a lectern, copying a rune.
6 A Beside her, apprentice KESTREL DONOVAN-ABIOLA, 16, holds a lantern.
7 A Both ignore the voice murmuring through the walls.
* 8 D VOICE [V.O.] (from the stone itself): Found you.
9 A ¶ Thessaly's quill stops.
10 A Kestrel steps closer to her.
* 11 D KESTREL: Was that the library?
* 12 D THESSALY: The library doesn't speak.
* 13 D VOICE [V.O.]: Oh, but I do. Thessaly Moore. You took something that is mine.
* 14 D THESSALY (not looking up): I borrowed a book.
* 15 D VOICE [V.O.]: A book. Yes. Open to the last page and read me what it says.
16 A ¶ Kestrel pulls a leather volume from the shelf.
* 17 A It is warm in her hands.
18 A She flips to the last page.
* 19 D KESTREL (reading): "Whoever opens this book wakes the one who wrote it."
* 20 D THESSALY: Put it back. Slowly.
21 A ¶ Kestrel reaches.
* 22 A The shelf rotates away from her.
* 23 A The book will not return to its slot.
24 D VOICE [V.O.]: Do not trouble yourself. I am already awake.
* 25 A ¶ The candles gutter.
* 26 A In the center of the room, the air thickens.
27 A A tall figure forms in a coat of gray feathers.
28 A A RAVEN-HEADED STRANGER, calm, hands clasped.
29 A Its beak glints.
* 30 D RAVEN-HEADED STRANGER: Good evening. I am the Scribe.
* 31 D THESSALY: I know who you are.
* 32 D SCRIBE: Then you know why I came.
33 A ¶ Kestrel edges behind the lectern.
34 A Thessaly rises, quill still in hand.
* 35 D THESSALY: The pages were never yours. They belonged to the kingdom.
* 36 D SCRIBE: I wrote the kingdom. Every war. Every winter. Every funeral. It is all mine.
* 37 D KESTREL (quietly): Thessaly, his shadow is moving wrong.
* 38 A ¶ It is.
39 A The shadow on the floor writes in the air, slow letters curling in black smoke.
* 40 D THESSALY: Don't read it.
* 41 D KESTREL: I can't help it.
42 A ¶ She reads.
43 A Her eyes widen.
* 44 D KESTREL [CONT'D]: It says my name.
* 45 D SCRIBE: Kestrel Donovan-Abiola. Born in the ninth year of the drought. Died in the eleventh page of tonight.
* 46 D THESSALY (stepping between them): Then turn the page.
* 47 D SCRIBE: I would, if you could stop me.
48 A ¶ Thessaly raises the quill.
* 49 A The tip ignites white.
50 A She draws a line across the air.
* 51 A A bright barrier of light slices the room.
52 A ¶ The Scribe flinches.
* 53 A Feathers scatter.
* 54 D SCRIBE [CONT'D] (a hiss): That ink is older than I am.
* 55 D THESSALY: Good. It remembers you.
* 56 A ¶ The shelves spin faster.
* 57 A The book in Kestrel's hands flares gold.
58 A She slams it shut.
59 A The Scribe shrieks.
* 60 D SCRIBE: Give it back!
* 61 D KESTREL (holding it close): No.
* 62 A ¶ The hearth fire roars.
* 63 A The room tilts.
* 64 A Candles fall like stars.
* 65 D SCRIBE [V.O.] (already fading): Then I will wait. Stories do.
66 A ¶ The figure dissolves into black ink that runs down the wall and soaks into the stone.
* 67 A The shelves slow.
* 68 A The candles steady.
* 69 A ¶ Silence.
70 A Thessaly lowers her quill, trembling.
71 A Kestrel lets out a breath.
* 72 D KESTREL: Is it over?
* 73 D THESSALY: Not while the book is open.
74 A ¶ Kestrel looks down.
* 75 A The cover is warm.
* 76 A Something inside it beats.

### SCENE s01084 | INT. DRAINED SWIMMING POOL - COMMUNITY CENTER - DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE CASSIUS RHEE, FORENSIC TECH BELINDA OSEI, CAPTAIN VOSS, DOLORES AMADI
* 1 A ¶ Cracked blue tile.
* 2 A A dry deep end littered with leaves.
* 3 A Floodlights on stands.
* 4 A Yellow tape across the diving board.
5 A ¶ DETECTIVE CASSIUS RHEE, 40s, rain jacket, notebook, crouches at the bottom of the deep end beside a chalk outline.
6 A FORENSIC TECH BELINDA OSEI, 30s, white suit, kneels with a camera.
* 7 A A tarp covers something near the drain.
* 8 D RHEE: Time of death?
* 9 D OSEI: Medical examiner says midnight. Give or take.
* 10 D RHEE: Who drained the pool?
* 11 D OSEI: Nobody. It's been empty since August.
* 12 D RHEE: Then how did she end up down here?
* 13 D OSEI: She fell. Or she was pushed.
14 A ¶ He steps over the chalk.
15 A Lifts the tarp with a pen.
* 16 A Underneath, a single red high-heeled shoe.
* 17 D RHEE: Where's the other?
* 18 D OSEI: Haven't found it.
* 19 A ¶ A phone rings.
* 20 A Rhee's.
21 A He answers.
* 22 D CAPTAIN VOSS [V.O.] (tinny, over the phone): Rhee. Anything?
* 23 D RHEE: A shoe, Captain. Just a shoe.
* 24 D CAPTAIN VOSS [V.O.]: There's a witness on her way down. Janitor. Says she saw something.
* 25 D RHEE: Copy.
26 A ¶ He hangs up.
* 27 A Footsteps on the stairs.
28 A A figure descends: MS. DOLORES AMADI, 60s, janitor's apron, mop in hand like a staff.
29 A She stops at the pool edge.
* 30 D DOLORES: Detective?
* 31 D RHEE: Ms. Amadi. Come down.
32 A ¶ She picks her way down the shallow-end steps, mop first.
* 33 D DOLORES: I saw a man. By the diving board. Very tall. Very quiet.
* 34 D OSEI: What was he wearing?
* 35 D DOLORES: Gray. A long coat. Like a priest.
* 36 D RHEE: Did he see you?
* 37 D DOLORES: No. But he left something.
38 A ¶ She reaches into her apron pocket.
39 A Pulls out the second red shoe, wrapped in a plastic bag.
40 A Rhee and Osei exchange a look.
* 41 D OSEI: You touched it?
* 42 D DOLORES: I wore gloves.
* 43 D RHEE (taking it): Thank you.
* 44 A ¶ A clang from the diving board.
45 A All three whip around.
* 46 A The tape trembles.
47 A A silhouette stands at the top of the board, backlit by dawn.
* 48 D RHEE [CONT'D] (low): Police! Stay where you are!
49 A ¶ The silhouette leaps.
50 A Rhee lunges.
51 A Osei drops the camera.
52 A Dolores raises the mop.
* 53 A They collide at the lip of the deep end in a tangle of arms, mop handle and raincoat.
* 54 A ¶ A bright flash from Osei's camera bursts across the tile.
55 A The man scrambles up the stairs.
56 A Rhee and Dolores sprawl together.
57 A Osei pulls herself up.
* 58 D OSEI: He's gone!
* 59 D RHEE (breathing hard): Not far.
60 A ¶ Dolores sits, hand on her chest, mop still clutched.
* 61 D DOLORES: Detective. I think I know that coat.

### SCENE s01085 | INT. NIGHT LAUNDROMAT - 2 A.M.
Detected names (may be incomplete or contain aliases): IMOGEN LAU, SULEIMAN BAH
* 1 A ¶ Buzzing tubes.
* 2 A Twelve machines, all but two idle.
* 3 A A vending machine glows.
* 4 A Rain at the glass.
* 5 A Lint in the corners like snow.
6 A ¶ IMOGEN LAU, 30s, scrubs under a trench coat, sits on a folding table.
7 A Boots swinging.
* 8 A A paperback open and unread.
* 9 A Her dryer turns a single blue sock.
10 A ¶ SULEIMAN BAH, 30s, tall, soft cardigan, loads a washer.
11 A Careful with each shirt.
12 A He folds one before he puts it in.
* 13 A ¶ Silence.
14 A ¶ Her eyes flick to him.
15 A His hands pause on a collar.
16 A Resume.
* 17 D IMOGEN: You fold before you wash.
* 18 D SULEIMAN: Habit.
* 19 D IMOGEN: Strange habit.
* 20 D SULEIMAN: Strange hours.
21 A ¶ She turns a page she hasn't read.
22 A He shuts the washer.
23 A Coins.
* 24 A Click.
* 25 A Water starts.
* 26 D IMOGEN: You come here often?
* 27 D SULEIMAN: Tuesdays.
* 28 D IMOGEN: It's Thursday.
29 A ¶ He looks at the dryer.
30 A At the single blue sock.
* 31 D SULEIMAN: Missed a Tuesday.
32 A ¶ She nods.
33 A Watches the sock tumble.
34 A He leans against the washer.
35 A Not too close.
36 A Not far.
* 37 D IMOGEN: Night shift?
* 38 D SULEIMAN: Nurse. You?
* 39 D IMOGEN: Same.
* 40 D SULEIMAN: Which floor?
* 41 D IMOGEN: Fourth.
* 42 D SULEIMAN: Third.
* 43 A ¶ A beat.
* 44 A The washer sloshes.
* 45 A The vending machine hums.
46 A She taps her book.
* 47 D IMOGEN: We've never met.
* 48 D SULEIMAN: We passed on the stairs. Once.
* 49 D IMOGEN: Did we?
* 50 D SULEIMAN: You had a croissant.
51 A ¶ She almost smiles.
52 A Hides it with the book.
53 A He picks a coin from his palm and rolls it across his knuckles.
* 54 D IMOGEN: That was a bad day.
* 55 D SULEIMAN: It was a good croissant.
* 56 A ¶ The dryer buzzes.
57 A She hops down.
58 A Opens it.
59 A Pulls out the sock.
60 A Looks at it.
61 A At him.
* 62 D IMOGEN: Don't suppose you've lost one.
63 A ¶ He reaches into his cardigan pocket.
64 A Pulls out a blue sock.
* 65 A The match.
66 A ¶ They hold the two socks side by side.
67 A Neither says anything.
* 68 D IMOGEN [CONT'D]: Tuesday?
* 69 D SULEIMAN: Tuesday.
70 A ¶ She sets her sock in his palm.
71 A Their fingers do not touch.
72 A Almost.
73 A She picks up her book and walks out into the rain without her coat.

### SCENE s01086 | INT. BOWLING ALLEY - LANE 12 - FINAL FRAME - NIGHT
Detected names (may be incomplete or contain aliases): DRY CREEK LANES, COACH MURIEL TAPIA, DESHAWN, PRITCHETT, ANNIKA BERGSTROM-ODUYA, HANK WILLOUGHBY, PRESTON LI
* 1 A ¶ Neon pins.
* 2 A Sticky carpet.
* 3 A A trophy case.
* 4 A The league championship banner: DRY CREEK LANES - TUESDAY NIGHT FINALS.
5 A A crowd packs the seats behind the rail, sweating, silent.
6 A ¶ COACH MURIEL TAPIA, 60s, windbreaker, clipboard, paces behind the scorers' table.
7 A Next to her, DESHAWN "THE HAMMER" PRITCHETT, 30s, in a team polo, chalks his fingers, rolling his shoulders.
8 A At the lane, ANNIKA BERGSTROM-ODUYA, 20s, ponytail, holds her ball against her chest.
9 A Opposite them on the other bench, rival captain HANK WILLOUGHBY, 50s, red bowling shirt, smirks and cracks his knuckles.
10 A At the scoring console, young scorekeeper PRESTON LI, 17, headset on, watches the monitor.
* 11 D MURIEL: Ten pins. That's all she needs.
* 12 D DESHAWN: She's got ice in her veins.
* 13 D MURIEL: She's got a ball in her hands. Pray it's the right one.
14 A ¶ Annika steps up to the approach.
15 A Breathes.
16 A Stares at the head pin.
17 A The crowd hushes.
18 A Hank leans forward, grinning.
19 A Preston grips his headset.
* 20 D ANNIKA (under her breath): Spare. Just spare.
21 A ¶ She takes four steps.
22 A Swings.
23 A Releases.
* 24 A The ball tears down the lane, hooks left, a streak of black.
* 25 A It slams the pocket.
* 26 A Pins scatter.
* 27 A Nine fall.
* 28 A One wobbles.
* 29 A Stands.
30 A ¶ The crowd groans.
31 A Hank punches the air.
* 32 D HANK: Told you she'd choke!
* 33 D DESHAWN: Sit down, Hank.
* 34 D HANK: Make me.
35 A ¶ Muriel puts a hand on Deshawn's chest.
36 A He holds.
37 A Annika walks back, staring at the single pin.
* 38 D PRESTON [V.O.] (over the PA, shaky): Attention, bowlers. Lane twelve. Tenth frame. One ball remaining. Annika Bergstrom-Oduya needs the spare for the title.
* 39 D MURIEL (low): Annie. Look at me.
* 40 D ANNIKA: I'm looking.
* 41 D MURIEL: That pin has been waiting thirty years for someone to knock it down.
* 42 D ANNIKA: It's been waiting for me.
* 43 D MURIEL: It's been waiting for all of us.
44 A ¶ Deshawn offers a towel.
45 A She wipes her hands.
46 A Hands it back.
47 A Steps up again.
48 A The crowd leans in.
49 A Hank folds his arms, jaw tight.
50 A ¶ She sets her feet.
51 A Looks at the pin.
52 A Takes the four steps again.
53 A Releases.
* 54 A ¶ The ball rolls slower this time.
* 55 A Gentle.
* 56 A A curve so slight it barely bends.
* 57 A It kisses the last pin at the edge.
* 58 A The pin spins.
* 59 A Tilts.
* 60 A Falls.
* 61 A ¶ For one second, nothing.
62 A Then the whole alley erupts.
63 A Muriel throws her clipboard in the air.
64 A Deshawn lifts Annika off the floor.
65 A Preston screams into his headset.
66 A Hank sits with his arms still folded.
* 67 D MURIEL [CONT'D]: That's a title!
* 68 D DESHAWN: That's a Tuesday!
69 A ¶ Annika laughs and cries at once, still held aloft.
70 A Hank rises, walks over, offers a hand across the rail.
* 71 D HANK: Good game.
* 72 D ANNIKA (shaking it): Thanks, Hank.
* 73 D HANK: Next year, I'm bringing the red ball.
* 74 D ANNIKA: Bring two.

### SCENE s01087 | EXT. CANAL LOCK - LOWER BASIN - DUSK
Detected names (may be incomplete or contain aliases): LOCKKEEPER HOSEA DRUMMOND, CLEMENTINE DRUMMOND, CAPTAIN EZEKIEL ARDEN, MADAME PERPETUA ARDEN, OFFICER
* 1 A ¶ 1824.
* 2 A A narrow barge squeezed in a stone lock.
* 3 A Water churns.
* 4 A Lanterns swing on posts.
* 5 A Ropes creak.
6 A ¶ LOCKKEEPER HOSEA DRUMMOND, 50s, broad, in a tarred coat, cranks the sluice.
7 A His daughter CLEMENTINE DRUMMOND, 12, perches on the gate beam with a coil of rope.
8 A At the stern of the barge, CAPTAIN EZEKIEL ARDEN, 40s, tall hat, cane, looks displeased.
9 A His wife, MADAME PERPETUA ARDEN, 40s, silk veil, grips the rail, glaring at the churning water and murmuring to the horses on the towpath.
* 10 D HOSEA: Steady now. She'll rise.
* 11 D EZEKIEL: You said twenty minutes.
* 12 D HOSEA: I said it'd be about twenty.
* 13 D CLEMENTINE: It's been twenty-two, sir.
* 14 D EZEKIEL: Impertinent child.
* 15 D CLEMENTINE: Accurate child.
16 A ¶ Perpetua lifts her veil.
17 A Stares at Clementine.
18 A A flicker of amusement she smothers at once.
* 19 D PERPETUA: Ezekiel. Let the man work.
* 20 D EZEKIEL: I have a train to meet.
* 21 D HOSEA: No train this side of Wickham.
* 22 D EZEKIEL: There is a train.
* 23 D HOSEA: There's a promise of one.
* 24 A ¶ The water surges.
* 25 A The barge shudders and lifts.
* 26 A A rope snaps.
* 27 A The barge yaws toward the wall.
28 A Clementine scrambles along the beam, grabs the loose end, hauls with both hands.
29 A Hosea spins the crank backward.
30 A Ezekiel stumbles, cane clattering.
31 A Perpetua clutches the rail and shouts at the horses.
32 A They back and the barge straightens.
* 33 D OFFICER [V.O.] (from the towpath, distant): You there! In the lock! Halt in the Crown's name!
34 A ¶ Everyone freezes.
* 35 A Water keeps rising.
36 A Hosea looks at the bank.
* 37 A Four men in coats at the far lamp.
* 38 A A constable's whistle.
* 39 D EZEKIEL (quietly, not at all arrogant now): Hosea. Open the upper gate.
* 40 D HOSEA: Sir?
* 41 D EZEKIEL: Open it. Now.
* 42 D CLEMENTINE: Papa?
43 A ¶ Hosea looks at Ezekiel.
44 A At Perpetua, pale.
45 A At Clementine.
46 A He sets his jaw.
47 A Cranks the upper sluice.
* 48 A The gate groans open.
* 49 D HOSEA: Hold on to something.
* 50 A ¶ The water roars.
* 51 A The barge shoots forward into the dark channel, taking the lantern light with it, and the officers' shouts vanish behind.
