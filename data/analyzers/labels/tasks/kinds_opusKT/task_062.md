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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0062.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02089 | INT. SMALL CLAIMS COURT - LIVESTOCK BARN, COUNTY FAIRGROUNDS - DAY
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE BEAUMONT-LEE, CLERK, WINNIFRED TOLLIVER, ARCHIE, SPENCE, DOROTHEA WEBB, TRUMAN OKONKWO
* 1 A ¶ A long barn with sawdust floors and a raised dais built from hay pallets.
* 2 A A flag, a gavel, a laminated seal.
* 3 A Pens along the walls hold sleepy goats.
* 4 A The air smells of hay and floor wax.
5 A ¶ JUDGE HORTENSE BEAUMONT-LEE, 60s, in a robe over denim, presides from behind a folding table.
6 A To her left sits the CLERK, WINNIFRED TOLLIVER, 50s, with a stack of forms and a cowbell in lieu of a bailiff's staff.
7 A At the plaintiff's table: ARCHIBALD "ARCHIE" SPENCE, 40s, a farmer in clean overalls.
8 A At the defendant's: DOROTHEA WEBB, 40s, a beekeeper in a veil pushed back.
* 9 A Between them stands a crate that buzzes faintly.
10 D JUDGE HORTENSE: This court is in session. Mr. Spence, you allege that Ms. Webb's bees ate your clover.
11 D ARCHIE: Not ate, Your Honor. Used.
12 D JUDGE HORTENSE: Used.
13 D ARCHIE: Eight acres. Every blossom. They didn't pay.
14 D DOROTHEA (muttering): Bees don't carry cash.
15 D JUDGE HORTENSE: Ms. Webb, I heard that.
16 D DOROTHEA: It was meant for the record.
17 D WINNIFRED (to the room): Please silence your phones and your livestock.
18 A ¶ In the front row sits TRUMAN OKONKWO, 70s, a fairground vendor in a paper hat, eating a corn dog.
19 D TRUMAN (to the gallery): This is better than the pie contest.
* 20 A ¶ A goat bleats.
21 A Everyone looks at it.
22 A The Judge sighs and taps her gavel.
23 D JUDGE HORTENSE: Mr. Spence. What do you want?
24 D ARCHIE: Honey.
25 D JUDGE HORTENSE: Ms. Webb. What do you say?
26 D DOROTHEA: I say he's welcome to a jar.
27 D JUDGE HORTENSE: Done. Next case.
* 28 A ¶ The crate buzzes louder.
29 A Winnifred rings the cowbell.

### SCENE s02090 | INT. GOLD STANDARD PAWN - DAY
Detected names (may be incomplete or contain aliases): IGNATIUS KOWAL, DETECTIVE NASRIN FARHADI, MAUREEN PELL, YOUNG MAN, TREY, DISPATCH
* 1 A ¶ A narrow shop crammed floor to ceiling: guitars on hooks, a glass case of watches, power tools in rows, a stuffed marlin over the register.
* 2 A A buzzer on the door.
* 3 A Dusty light.
4 A ¶ IGNATIUS KOWAL, 60s, owner, bald and bespectacled, sits behind the counter with a jeweler's loupe.
5 A DETECTIVE NASRIN FARHADI, 40s, in a wrinkled blazer, leans on the glass case with a notebook.
6 A At a rack of coats, MAUREEN PELL, 50s, a regular, sorts through winter jackets she has no intention of buying.
* 7 A ¶ The buzzer sounds.
8 A A YOUNG MAN, 20s, in a hooded sweatshirt, hurries in with a pillowcase.
9 A He sees the detective and stops.
10 D YOUNG MAN: I'll come back.
11 D IGNATIUS: You'll stay. Everybody stays at Gold Standard.
12 A ¶ The young man hesitates.
13 A Ignatius lowers the loupe.
14 A The detective does not move, but her eyes follow him.
15 D IGNATIUS [CONT'D]: That's Trey Mackenzie. His mother is Maureen's cousin.
16 D MAUREEN: Second cousin.
17 D TREY (to the floor): I just want to pawn this.
18 D DETECTIVE FARHADI: What is it?
19 D TREY: A... lamp.
20 D IGNATIUS: Put it on the counter, Trey.
21 A ¶ Trey sets the pillowcase down.
22 A Ignatius opens it, peers in, and sighs.
* 23 A A radio on the shelf crackles.
24 D DISPATCH [O.S.] (over radio): All units, burglary on Delmar Street, possible suspect on foot, gray hoodie.
* 25 A ¶ Nobody speaks.
26 A Trey's hand drifts toward the pillowcase.
27 A Detective Farhadi closes her notebook.
28 D DETECTIVE FARHADI: Trey, how about we take a walk?

### SCENE s02091 | INT. ST. CASIMIR CHURCH BASEMENT - BINGO NIGHT
Detected names (may be incomplete or contain aliases): LORETTA BEAUCHAMP, ELIJAH STONE, PHILOMENA OKPARA, DENNIS HALVERSEN
* 1 A ¶ Long tables, paper plates, a ball cage in the corner.
2 A Four people at a table near the stage, daubers beside their cards.
3 A ¶ LORETTA BEAUCHAMP, 70s, ELIJAH STONE, 40s, PHILOMENA OKPARA, 60s, and DENNIS HALVERSEN, 50s, sit with their cards between them.
4 D LORETTA: You moved my dauber.
5 D ELIJAH: I did not.
6 D LORETTA: It was by the napkin. Now it's by your elbow.
7 D ELIJAH: Because you put it in my lane.
8 D PHILOMENA: There are no lanes.
9 D DENNIS: There are lanes.
10 D PHILOMENA: Dennis, it's bingo.
11 D DENNIS: It's bingo with lanes.
12 D ELIJAH: I won't be shamed over a dauber.
13 D LORETTA: No one is shaming. I'm observing.
14 D PHILOMENA: You are doing the thing you do.
15 D LORETTA: What thing?
16 D PHILOMENA: The thing where you pretend you're not angry and you are.
17 D LORETTA: I am not angry.
18 D DENNIS: Your hand is shaking.
19 D LORETTA: It's a cold basement.
20 D ELIJAH: It's seventy-two degrees.
21 D LORETTA: It's a cold basement in my heart.
22 D PHILOMENA: Oh, for the love of God.
23 D ELIJAH: Loretta, what is this about?
24 D LORETTA: It's not about the dauber.
25 D DENNIS: We know.
26 D LORETTA: It's about Tuesday.
27 D ELIJAH: What happened Tuesday?
28 D LORETTA: You know what happened.
29 D ELIJAH: I truly don't.
30 D PHILOMENA: He truly doesn't.
31 D LORETTA: You told Father Anselm I'd been spreading rumors.
32 D ELIJAH: I said you'd been mentioning things.
33 D LORETTA: "Mentioning."
34 D ELIJAH: That's a gentler word than "spreading."
35 D LORETTA: It's a word with a knife in it.
36 D PHILOMENA: Loretta. Did you tell people about the roof fund?
37 D LORETTA: I did not tell people. I told a few people.
38 D DENNIS: How many is a few?
39 D LORETTA: Eleven.
40 D ELIJAH: Eleven.
41 D LORETTA: It's a church. Eleven is a small number.
42 D PHILOMENA: It's a congregation of forty.
43 D LORETTA: Well. They were the right eleven.
44 D DENNIS: And what did you say?
45 D LORETTA: That the roof fund had four thousand dollars less than the books said.
46 D ELIJAH: It had four thousand dollars less than the books said because of the boiler.
47 D LORETTA: The boiler was a separate line item.
48 D ELIJAH: It was not.
49 D LORETTA: It's right there in the ledger.
50 D ELIJAH: Whose ledger?
51 D LORETTA: Yours.
52 D PHILOMENA: Elijah. Is it in your ledger?
53 D ELIJAH (after a long pause): There was a clerical error.
54 D DENNIS: Ah.
55 D LORETTA: A clerical error.
56 D ELIJAH: Which I was going to correct.
57 D LORETTA: When?
58 D ELIJAH: After the Christmas pageant.
59 D PHILOMENA: That's ten months.
60 D ELIJAH: I've been very busy.
61 D LORETTA: You were too busy to correct a clerical error but not too busy to tell Father Anselm I was mentioning.
62 D ELIJAH: Loretta, I'm sorry.
63 D LORETTA: Say it again.
64 D ELIJAH: I'm sorry.
65 D LORETTA: Once more with feeling.
66 D ELIJAH: I'm sorry, Loretta. I was embarrassed. I panicked. It was a small panic.
67 D LORETTA: It was a small panic with a large consequence.
68 D DENNIS: He's apologized.
69 D PHILOMENA: Twice.
70 D LORETTA (slowly): Well.
71 D ELIJAH: Well.
72 D LORETTA: You may have your lane.
73 D ELIJAH: Thank you.
74 D PHILOMENA: Can we please play?
75 D DENNIS: I'm in. Whoever calls the first number.
76 D ELIJAH: B-nine.
77 D LORETTA: Mine.
78 D PHILOMENA: That was fast.
79 D LORETTA: I've been waiting a long time.

### SCENE s02092 | EXT. GASLIT ALLEY - LONDON - NIGHT (1881)
Detected names (may be incomplete or contain aliases): TOBY ASHWORTH, FINNEGAN, CONSTABLE QUILL
* 1 A ¶ Fog swallows the lamps.
* 2 A Wet cobbles.
* 3 A Somewhere a dog howls.
4 A ¶ TOBY ASHWORTH, 12, a lamplighter's boy, balances on a ladder against a post, poking his long pole at a stubborn flame.
5 A MRS. FINNEGAN, 60s, a flower seller with a basket, hurries past, head down.
6 A Neither sees the third figure until it steps out of the fog: CONSTABLE QUILL, 30s, in a caped coat, whistle between his teeth.
7 D QUILL: You there. Boy.
8 A ¶ Toby fumbles.
* 9 A The pole slips.
* 10 A The lamp blazes and the three of them are suddenly lit, a tableau.
11 A Mrs. Finnegan stops.
12 A Quill stops.
13 A Toby holds the ladder with both hands.
14 D QUILL [CONT'D]: Have you seen a woman in a green shawl?
15 D TOBY (too quickly): No, sir.
* 16 A ¶ Mrs. Finnegan's basket tips.
* 17 A Violets spill.
18 A She and Toby both lunge for them, and Quill grabs her arm.
* 19 A The ladder tilts.
20 A Toby clings to the post and kicks free.
* 21 A The constable's whistle falls from his teeth.
* 22 A A green shawl peeks out from under the flowers.
23 D MRS. FINNEGAN (a whisper): Run.
24 A ¶ Toby drops from the ladder and bolts.
25 A Mrs. Finnegan hurls her basket at the constable.
* 26 A Violets fly.
27 A Quill stumbles back.
28 A All three vanish into the fog in three directions.

### SCENE s02093 | INT. STARLITE LANES - SHOE COUNTER - 3 A.M.
Detected names (may be incomplete or contain aliases): LEANDRA CHO, DOBRYNIN
* 1 A ¶ The bowling alley is empty and dim, only the pin machines still thumping in the back lanes.
* 2 A Rows of rental shoes in cubbies.
* 3 A A cash register with a taped-up drawer.
* 4 A On the wall, a faded poster of a dancing pin.
5 A ¶ LEANDRA CHO, 17, in a red vest too big for her, sits on a stool behind the counter, doing homework she is not doing.
6 A Across from her, MR. DOBRYNIN, 60s, the night manager, in a cardigan, polishes a bowling shoe with a rag, slowly, as if there were nothing else in the world.
7 D MR. DOBRYNIN: You're early tonight.
8 D LEANDRA: I'm always early.
9 D MR. DOBRYNIN: Not by two hours.
10 D LEANDRA: Couldn't sleep.
11 D MR. DOBRYNIN: Mm.
12 A ¶ He holds the shoe to the light, finds a speck, rubs it.
13 A She turns a page of her textbook.
14 A Neither looks at the other.
15 D LEANDRA: Mr. Dobrynin, can I ask you something?
16 D MR. DOBRYNIN: You can ask.
17 D LEANDRA: Did you always work here?
18 D MR. DOBRYNIN: Thirty-one years.
19 D LEANDRA: Before that?
20 D MR. DOBRYNIN: Before that I was a bus driver.
21 D LEANDRA: Why'd you quit?
22 D MR. DOBRYNIN: I didn't like the people.
23 D LEANDRA: And you like these people?
24 D MR. DOBRYNIN: These people are going somewhere very slowly. A bus is going somewhere on a schedule. I prefer slowly.
25 D LEANDRA: That's kind of sad.
26 D MR. DOBRYNIN: Is it?
27 D LEANDRA: They just roll a ball and it hits things.
28 D MR. DOBRYNIN: And then they roll another one.
29 D LEANDRA: And it hits less.
30 D MR. DOBRYNIN: And then they go home.
31 A ¶ She smiles.
32 A It is a small, private smile.
33 D LEANDRA: My dad used to bring me here.
34 D MR. DOBRYNIN: Did he?
35 D LEANDRA: Sundays. He'd get me the cheese fries and the shoes in size one.
36 D MR. DOBRYNIN: I remember.
37 D LEANDRA: You don't.
38 D MR. DOBRYNIN: Gray carpet jacket. Smoked a pipe outside.
39 D LEANDRA (quietly): He did.
40 D MR. DOBRYNIN: Gave me a dollar every time. Said it was for the shoes.
41 D LEANDRA: It was always for the shoes.
42 D MR. DOBRYNIN: He was a generous man.
43 D LEANDRA: He was a man who left.
44 D MR. DOBRYNIN: Both things.
45 A ¶ She picks at the corner of her textbook.
46 A He sets down the shoe, takes another.
47 D LEANDRA: What do you say to someone who's mad at someone who's gone?
48 D MR. DOBRYNIN: You don't say anything. You hand them a pair of shoes.
49 D LEANDRA: That's not an answer.
50 D MR. DOBRYNIN: It's the only one I have.
51 D LEANDRA: Size what?
52 D MR. DOBRYNIN: You tell me.
53 D LEANDRA: Seven.
54 D MR. DOBRYNIN: Lane twelve is open.
55 D LEANDRA: It's three in the morning.
56 D MR. DOBRYNIN: The pins don't know.
57 A ¶ She looks at him.
58 A He looks at the shoe.
59 A After a moment she slides off the stool and walks to the cubbies, finds a seven, and holds it up.
60 D LEANDRA: These?
61 D MR. DOBRYNIN: Those are fine.
62 D LEANDRA: Will you come?
63 D MR. DOBRYNIN: I have to polish.
64 D LEANDRA: Mr. Dobrynin.
65 D MR. DOBRYNIN (a long breath): One frame.
66 A ¶ He sets down the rag.
67 A She is already pulling on the shoes.
68 D LEANDRA: You'll hate how bad I am.
69 D MR. DOBRYNIN: I've seen worse.
70 D LEANDRA: Who?
71 D MR. DOBRYNIN: Your father.
72 A ¶ She laughs, a real laugh this time, wet at the edges, and grabs the stool, steadying herself.
73 A Mr. Dobrynin comes around the counter in his socks, shoes in one hand, and the two of them walk together down the dark carpet toward Lane Twelve.

### SCENE s02094 | INT. CAPSIZED TRAWLER - AIR POCKET - NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN TAVARES, PILAR PERRAULT
* 1 A ¶ A black, upside-down cabin, the floor now the ceiling.
* 2 A Water slaps a foot below.
* 3 A A single glow stick floats in a bucket, lighting the underside of everything green.
* 4 A A handheld radio is wedged in a bunk frame.
5 A ¶ IMOGEN TAVARES, 40s, hangs from the rail by one arm, soaked, her other hand clamped around the radio.
6 A She breathes in ragged pulls.
7 D IMOGEN: Pilar. Pilar, come in.
8 D PILAR [O.S.] (over radio): I'm here.
9 D IMOGEN: Where?
10 D PILAR [O.S.] (over radio): Engine room. The hatch is jammed.
11 D IMOGEN: How much air?
12 D PILAR [O.S.] (over radio): Enough for a conversation.
13 D IMOGEN: Don't joke.
14 D PILAR [O.S.] (over radio): I'm not.
* 15 A ¶ A beat.
* 16 A Water slaps.
17 A Imogen lowers herself down, wading chest-deep toward a bulkhead door, the radio held above her head.
18 D IMOGEN: I'm coming.
19 D PILAR [O.S.] (over radio): You can't swim that.
20 D IMOGEN: Watch me.
21 A ¶ She dives.
* 22 A The glow stick bobs.
* 23 A A thump.
* 24 A A muffled scream.
* 25 A The radio clicks.
26 D PILAR [O.S.] (over radio): Imogen?
27 A ¶ The bulkhead door bursts open and PILAR PERRAULT, 30s, surges through in a gush of water, gasping, hair plastered to her face.
28 A Imogen is behind her, one fist knotted in her collar.
29 A They slam against the wall, tangled, coughing, clutching each other, then shove apart.
30 D PILAR: You left the hatch open.
31 D IMOGEN: I left you alive.

### SCENE s02095 | INT. CHURCH BELL TOWER - OBSERVATION POST - DAY (1944)
Detected names (may be incomplete or contain aliases): SERGEANT AUGUSTINE MBEKI, CORPORAL WILHELMINA DAHL, PRIVATE ANSELMO OKRZEJA
* 1 A ¶ A cramped stone chamber at the top of a ruined bell tower.
* 2 A The great bell is gone, its beam splintered.
* 3 A Sunlight and dust pour through a shell hole in the east wall.
* 4 A Sandbags ring a rough table covered with maps, a field telephone, and a pair of binoculars on a leather strap.
5 A ¶ SERGEANT AUGUSTINE MBEKI, 40s, lean and weathered, a helmet tilted back, studies the valley through the shell hole with the binoculars.
6 A CORPORAL WILHELMINA DAHL, 20s, a signaler, sits cross-legged on the floor, a radio headset around her neck, cleaning a rifle.
7 A PRIVATE ANSELMO OKRZEJA, 19, freckled, anxious, hugs a canteen against his chest in the corner.
* 8 A ¶ Nobody talks.
* 9 A The wind moves a corner of the map.
* 10 A Far below, a dog barks once and is silent.
11 D MBEKI (to the room): Movement on the south road. Two trucks. Maybe three.
12 D DAHL: Ours or theirs?
13 D MBEKI: Can't tell yet.
14 D DAHL (muttering): They're all gray at this distance.
15 A ¶ She sets the rifle across her knees and reaches for the field telephone.
16 A Okrzeja stands too quickly and bumps the table.
17 A The binoculars slide and Mbeki catches them against his chest without looking.
18 D OKRZEJA: Sorry, Sergeant.
19 D MBEKI: Sit down, Private. Drink your water.
20 D OKRZEJA: It's empty.
21 D MBEKI: Then hold it.
22 A ¶ Okrzeja sits.
23 A He holds the canteen against his chest like a child holds a doll.
24 A Mbeki lowers the binoculars and rubs the bridge of his nose.
25 D DAHL (into the phone): Post Seven to Battalion. Do you copy?
* 26 A ¶ The phone crackles.
* 27 A Nothing.
28 A She tries again, tapping the cradle.
29 D DAHL [CONT'D]: Line's dead.
30 D MBEKI: Try the radio.
31 D DAHL: Radio is on a different battery.
32 D MBEKI: Then change the battery.
33 D DAHL: We don't have another battery.
34 A ¶ Mbeki sets the binoculars down.
35 A For the first time, he looks tired.
36 A He takes a cigarette out of his breast pocket, looks at it, puts it back.
37 D MBEKI: All right. Everyone listen.
38 A ¶ Dahl and Okrzeja turn.
39 D MBEKI [CONT'D]: If those trucks are ours, they'll stop at the crossroads and unload. If they're theirs, they'll come straight up. We will know in ten minutes. Until then, we do nothing.
40 D OKRZEJA: Nothing?
41 D MBEKI: We sit. We breathe. We stay quiet.
42 D OKRZEJA (whispering): And if they're theirs?
43 D MBEKI: Then we start doing something.
44 A ¶ Dahl wipes her hands on her trousers, checks the bolt on her rifle, and moves to the shell hole beside the sergeant.
45 A Okrzeja crawls forward on hands and knees and wedges himself on the other side.
46 A The three of them look out together, shoulder to shoulder, at the winding white road.
* 47 A ¶ Dust rises.
* 48 A A truck appears around the bend, then another.
* 49 A They crawl along the ridge at walking pace.
50 D DAHL: Sergeant, can you read the markings?
51 D MBEKI: Not yet.
52 D OKRZEJA: Is that a flag?
53 D MBEKI: It's a tarp.
* 54 A ¶ The lead truck slows at the crossroads.
* 55 A The second slows behind it.
* 56 A For a long moment everything is still.
* 57 A The engines idle.
58 A Then, from the back of the lead truck, a figure jumps down and waves a green cloth over his head.
59 D MBEKI [CONT'D] (exhaling): Green.
60 D DAHL: Ours.
61 D OKRZEJA: Oh, thank God.
62 A ¶ Mbeki lowers the binoculars.
63 A Dahl lets her head sag against the sandbag.
64 A Okrzeja laughs, a wet, hiccupping laugh, and puts the empty canteen to his lips.
65 A He tips it back, remembers it is empty, and laughs again.
66 D MBEKI: Corporal. Hang up the phone.
67 D DAHL: It was dead, Sergeant.
68 D MBEKI: I know. Hang it up anyway.
69 A ¶ She does.
70 A Mbeki steps back from the hole, lights the cigarette this time, and lets the smoke curl up through the broken ceiling.
* 71 A A hawk drifts across the sun.
* 72 A The wind picks up the corner of the map again, and nobody bothers to hold it down.
73 D DAHL (softly, to herself): Two more days.
74 D OKRZEJA: What?
75 D DAHL: Nothing. I'm counting.

### SCENE s02096 | INT. COLD-STORAGE FILM VAULT - NIGHT
Detected names (may be incomplete or contain aliases): CELESTINE ADEYEMI-BROOKS, GRAHAM TOLLIVER
* 1 A ¶ A refrigerated concrete room lined with steel shelves, each stacked with canisters of nitrate film.
* 2 A Breath fogs.
* 3 A Frost rimes the door seal.
* 4 A A single overhead panel hums.
* 5 A At the far end, a locked steel cabinet marked ARCHIVE REEL 14.
6 A ¶ CELESTINE ADEYEMI-BROOKS, 30s, in a thermal jacket and surgical gloves, kneels at the cabinet with a pick set.
7 A Beside her, GRAHAM TOLLIVER, 50s, in a parka two sizes too big, holds a flashlight and an empty duffel.
8 A Neither has spoken for some time.
9 A ¶ She works the pick.
* 10 A A click.
* 11 A Another.
12 A She pauses, blows on her fingers, and resumes.
13 A He shifts the flashlight to his other hand.
14 D CELESTINE: Hold it steady.
15 D GRAHAM: I am.
16 D CELESTINE: It's shaking.
17 D GRAHAM: It's cold.
18 A ¶ She says nothing.
* 19 A The pick turns.
* 20 A Something inside the cabinet gives with a soft, definite clunk.
21 A She lifts the latch and swings the door wide.
* 22 A Inside lie a dozen flat tin canisters, labeled in faded ink.
23 D GRAHAM [CONT'D]: That's it?
24 D CELESTINE: That's it.
25 D GRAHAM: I thought it would be bigger.
26 D CELESTINE: It's film.
27 A ¶ She lifts the first canister, reads the label, sets it in the duffel.
28 A He lifts the second.
29 A They work in silence, passing each tin hand to hand.
* 30 A Frost crackles underfoot.
31 D GRAHAM: You know what's on these?
32 D CELESTINE: I know what the buyer told me.
33 D GRAHAM: That's not what I asked.
34 D CELESTINE: Then no.
35 D GRAHAM: Nineteen thirty-four. A premiere in Lisbon. Eleven minutes no one has seen since.
36 D CELESTINE: Eleven minutes isn't worth four hundred thousand.
37 D GRAHAM: It is if it's the right eleven minutes.
38 A ¶ She stops.
39 A Looks at him.
40 A He doesn't meet her eyes.
41 D CELESTINE: You've seen it.
42 D GRAHAM: No.
43 D CELESTINE: You know someone who has.
44 D GRAHAM: My father projected it once.
45 D CELESTINE: Where?
46 D GRAHAM: A basement. Nineteen seventy-one. He said it was the best thing he ever saw and the worst thing he ever did.
47 D CELESTINE: What was on it?
48 D GRAHAM: He never said.
49 A ¶ She picks up the next canister.
50 A Her hands are steady.
51 A His flashlight beam trembles on the label.
52 D CELESTINE: We should go.
53 D GRAHAM: Yes.
54 A ¶ They fill the duffel to the top.
55 A She zips it.
56 A He takes the straps and swings it onto his shoulder.
57 A They stand facing each other in the frozen light.
58 D CELESTINE: Graham.
59 D GRAHAM: Hm?
60 D CELESTINE: If we watch it, we can't unwatch it.
61 D GRAHAM: I know.
62 D CELESTINE: If we don't, we'll wonder.
63 D GRAHAM: I know that too.
64 A ¶ She nods.
65 A She takes the flashlight from him, switches it off, and the vault goes dark except for the humming panel.
66 A Then she switches the flashlight back on.
67 D CELESTINE: Fourteen minutes to the van.
68 D GRAHAM: Is that enough time?
69 D CELESTINE: Not for the film.
70 A ¶ She turns toward the door.
71 A He follows.
* 72 A The frost closes around them, and the cabinet behind them hangs open, empty, glinting.

### SCENE s02097 | INT. WKRT RADIO STATION - ON-AIR BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): JUNO FAIRWEATHER, TEDDY, PAK, ROSALIE MENDOZA-CLARK, DAVID
* 1 A ¶ A small studio with foam-padded walls and a console of dials.
* 2 A A red ON AIR light glows over the glass.
* 3 A Through the window, a dim control room.
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
* 22 A ¶ Silence.
* 23 A The red light burns.
24 A Juno slowly slides her headphones off one ear.
25 A Teddy drops the clipboard.
26 A Rosalie stares at the speaker, then bursts into tears and laughter, and takes the microphone from Juno's hands.
27 D ROSALIE (into mic): Ask me in person.

### SCENE s02098 | INT. SLUMBERLAND MATTRESS OUTLET - WAREHOUSE FLOOR - DAY
Detected names (may be incomplete or contain aliases): HARLAN PEARCE, PAULETTE NWOSU
* 1 A ¶ A vast showroom of beds in neat rows under fluorescent light.
* 2 A Banners scream CLEARANCE and EVERYTHING MUST GO.
* 3 A A loop of cheerful synth music plays overhead.
* 4 A Price tags dangle from pillow-top corners.
* 5 A No customers.
6 A ¶ HARLAN PEARCE, 40s, area manager, in a short-sleeved dress shirt with a tie clip, strides down an aisle with a clipboard held like a shield.
7 A He stops at a king-size bed.
8 A He prods the mattress with two fingers.
* 9 A It sighs.
10 D HARLAN (to himself): Three sales. Three. In a week.
11 A ¶ He drags a hand across a stack of throw pillows, scattering them.
12 A He walks to the far end of the row, turns, and walks back.
13 A He picks a pillow off the floor, looks at it, throws it down again.
* 14 A ¶ The front doors hiss.
15 A PAULETTE NWOSU, 30s, a sales associate, her name tag crooked, a tablet clutched to her chest, hurries in with a lanyard around her neck and stops when she sees him.
16 D PAULETTE: You're here early.
17 D HARLAN: I've been here since five.
18 D PAULETTE: Doing what?
19 D HARLAN: Counting.
20 D PAULETTE: Counting what?
21 D HARLAN: Failures of imagination. This is one.
22 A ¶ He slaps the mattress.
23 A Paulette sets her tablet on a nightstand.
24 D PAULETTE: That's a Dreamcloud Elite.
25 D HARLAN: I know what it is.
26 D PAULETTE: Mr. Pearce, are you okay?
27 D HARLAN: I'm sweating.
28 D PAULETTE: I noticed.
29 D HARLAN: That's not sweat. That's ambition.
30 A ¶ She glances around the empty aisles.
* 31 A Far away, the synth music loops back to its first bar.
32 D HARLAN [CONT'D]: Regional wants forty percent growth.
33 D PAULETTE: By when?
34 D HARLAN: Friday.
35 D PAULETTE: That's three days.
36 D HARLAN: Yes, Paulette, I know how days work.
37 D PAULETTE: I'm only saying it's not realistic.
38 D HARLAN: Realistic is for people who sell chairs.
39 D PAULETTE: You don't mean that.
40 D HARLAN: I mean it with my entire heart.
41 A ¶ Paulette tilts her head.
42 A She walks to a twin mattress, sits on it, and crosses her legs.
* 43 A The springs creak.
44 D PAULETTE: Can I tell you what I think?
45 D HARLAN: No.
46 D PAULETTE: I think nobody comes in because the music is depressing.
47 D HARLAN: The music is upbeat.
48 D PAULETTE: The music is a hostage video.
49 D HARLAN: The music was chosen by a focus group.
50 D PAULETTE: The focus group needs to sleep.
51 A ¶ Harlan stops.
52 A He stares at her.
53 A Something passes over his face: anger, then surprise, then a tiny crack of humor, quickly squashed.
54 D HARLAN: You are on thin ice.
55 D PAULETTE: I'm on a twin.
56 A ¶ He lowers himself onto the king-size bed opposite her.
57 A He sits stiffly at the edge, then, helplessly, lies back.
* 58 A His shoes stay on the floor.
* 59 A His tie clip catches the light.
60 A Paulette stays where she is, legs crossed, watching the ceiling with him.
61 D HARLAN (to the ceiling): Eight months I've been afraid to say it.
62 D PAULETTE: Say what?
63 D HARLAN: That the music is a hostage video.
64 D PAULETTE: You can say it now.
65 D HARLAN: It's a hostage video.
66 D PAULETTE: Feels better, doesn't it?
67 D HARLAN: It feels like the beginning of something terrible.
68 D PAULETTE: Or something quiet.
69 A ¶ He sits up.
70 A He unclips his tie clip and sets it on the nightstand, as one sets down a gun.
71 D HARLAN: Paulette. Find the remote for the sound system.
72 D PAULETTE: It's in the office.
73 D HARLAN: Get it.
74 A ¶ She hurries off, her footsteps echoing between the beds.
75 A Harlan stays where he is, elbows on his knees, staring at the floor.
* 76 A In the distance a drawer slides open and slams shut.
77 A Paulette returns at a trot, holding a black remote in both hands.
78 D PAULETTE: Here.
79 D HARLAN: Press the red one.
80 D PAULETTE: Are you sure?
81 D HARLAN: Press it.
82 A ¶ She does.
* 83 A The synth music cuts out mid-note.
* 84 A The warehouse is suddenly silent, vast, and peaceful.
85 A They sit on their separate mattresses in the long fluorescent hush.
86 A Neither speaks.
87 D PAULETTE (softly): So what do we do now?
88 D HARLAN: We wait.
89 D PAULETTE: For what?
90 D HARLAN: For someone to come in and be bored.
91 A ¶ She smiles.
92 A He almost does.
* 93 A Somewhere, a pallet jack rattles past a far loading dock.
* 94 A The price tags on the pillow-tops stir in the air conditioning, and no one sells anyone anything.

### SCENE s02099 | INT. USED BOOKSTORE - POETRY ROOM - EVENING
Detected names (may be incomplete or contain aliases): MIC, POETRY, MARISOL VEGA-RHODES, ELIAS THORNBURY
* 1 A ¶ A narrow room at the back of a sprawling shop, shelves bowed with paperbacks.
* 2 A A podium, a lamp, and fifteen folding chairs, most of them empty.
* 3 A A handwritten sign: OPEN MIC - POETRY - 7 PM.
4 A ¶ MARISOL VEGA-RHODES, 30s, in a green coat, stands at the podium with a folded page.
5 A In the front row, alone, sits ELIAS THORNBURY, 30s, a bookseller in an apron, holding a pencil he has forgotten to use.
6 D MARISOL (to the room): Thank you all for coming.
* 7 A ¶ There is no one else.
8 A She looks at the empty chairs.
9 A She smiles at them anyway.
10 D MARISOL [CONT'D]: This is called "Interlibrary Loan."
11 A ¶ She unfolds the page.
12 A Elias leans forward.
13 D MARISOL [CONT'D] (reading): I borrowed you from a stranger's shelf and kept you longer than I should. The due date came, the due date went, and still I read you like a wood.
14 A ¶ Elias's pencil stops.
15 A She reads the next stanza quietly, glancing at him once, twice.
16 D MARISOL [CONT'D] (reading): You were stamped by someone else, in blue. Their name is smudged, their initials blurred. I'd like to think they'd understand how long I held on to the word.
17 A ¶ She finishes.
18 A Folds the page.
* 19 A A silence.
20 A Elias claps, slowly, three times.
21 D ELIAS: That was good.
22 D MARISOL: Thank you.
23 D ELIAS: Is it about a book?
24 D MARISOL: It might be.
25 D ELIAS: It sounds like it's about a person.
26 D MARISOL: It might be that too.
27 A ¶ He stands.
28 A Crosses the aisle.
29 A Stops three feet from the podium.
30 D ELIAS: Can I ask who?
31 D MARISOL: You can ask.
32 D ELIAS: Who?
33 D MARISOL: You work here, don't you?
34 D ELIAS: Yes.
35 D MARISOL: Then you should check your records. I've had a copy of "Collected Neruda" out for two years.
36 D ELIAS: We don't lend books.
37 D MARISOL: I know.
38 A ¶ He looks at her.
39 A She looks at the empty chairs, then at him.
40 D ELIAS (quietly): Marisol.
41 D MARISOL: Elias.
42 D ELIAS: It's a used bookstore.
43 D MARISOL: Yes.
44 D ELIAS: You're not supposed to give them back.
45 D MARISOL: I never meant to.
46 A ¶ He takes the pencil from behind his ear and puts it in his apron pocket.
47 A He reaches out, and she lets him take the page.
48 A He unfolds it, reads the last line, and folds it again.
49 D ELIAS: I close at nine.
50 D MARISOL: I know.
51 D ELIAS: I'm not busy at nine.
52 D MARISOL: Neither am I.
53 A ¶ He tucks the poem into his apron.
54 A She steps down from the podium.
55 A Together they turn off the lamp and leave fifteen chairs in the dark.

### SCENE s02100 | EXT. TREEHOUSE - BACKYARD - NIGHT
Detected names (may be incomplete or contain aliases): COLM DOYLE, ROSIE, GRANNY MAUDE
* 1 A ¶ Rain drums on a sheet-metal roof.
* 2 A A lantern swings from a rafter.
3 A The treehouse is just big enough for three, and today it holds all of them: COLM DOYLE, 40s, in a damp raincoat, bent double under the low ceiling; ROSIE, 8, in pajamas and a rain slicker, clutching a stuffed heron; and GRANNY MAUDE, 70s, who somehow climbed the rope ladder and sits on an upturned bucket knitting.
4 D COLM: The storm will pass.
5 D ROSIE: You said that an hour ago.
6 D COLM: It's a very big storm.
* 7 A ¶ Thunder cracks.
8 A Rosie ducks and burrows into Maude's cardigan.
9 A Maude does not look up from her needles.
10 D MAUDE: Rosemary. Sit up. The heron wants air.
11 D ROSIE: He's scared.
12 D MAUDE: He's a heron. He's seen worse.
13 A ¶ Colm checks his phone.
* 14 A No signal.
15 A He pockets it and crouches by the door.
16 D COLM: We should go in.
17 D ROSIE: No!
18 D COLM: It's flooding the lawn.
19 D ROSIE: You said we'd sleep out here. You promised.
20 D COLM: I promised dry.
* 21 A ¶ Wind hammers the roof.
* 22 A A branch bangs the wall.
23 A The lantern swings, and Maude and Colm both reach for it at once, their hands closing on the same handle.
24 A Rosie giggles.
25 A Colm lets go.
26 A Maude hangs the lantern back on its hook.
27 D MAUDE: Colm. Sit.
28 A ¶ He sits.
* 29 A The floor tilts a degree.
30 A All three lean the same way and stop.
31 D MAUDE [CONT'D]: When your father built this, he said it'd survive anything.
32 D COLM: He was building it for me.
33 D MAUDE: He built it for himself and told you it was for you.
34 A ¶ Colm laughs, a short surprised breath.
35 A Rosie looks between them.
36 D ROSIE: Was it scary then?
37 D COLM: Not once he was in it.
* 38 A ¶ Another crack.
* 39 A The roof rattles.
* 40 A The treehouse sways.
41 A A loud creak, and the whole structure shudders, and Colm throws an arm across Rosie as Maude plants both feet.
* 42 A A long moment.
* 43 A The wood settles.
* 44 A The rain eases to a patter.
45 D ROSIE (muffled in his coat): We're still here.
46 D MAUDE: Of course we are.
47 A ¶ Colm lets out a breath.
48 A He kisses the top of Rosie's head.
49 A Maude counts a row of stitches.
* 50 A The heron's beak pokes out of Rosie's slicker.

### SCENE s02101 | INT. FUNICULAR STATION - HOLDING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR MALCOLM TREVENNA, DESIREE LACROIX-ODUYA, SERGEANT BRANWELL KUTTNER, VIOLETA SANDOVAL-GRAY
* 1 A ¶ A tiled waiting room at the top of a cable railway, converted overnight into a police holding space.
* 2 A A bench, a radiator, a vending machine with an out-of-order sign.
* 3 A Cable machinery groans through the wall.
4 A ¶ INSPECTOR MALCOLM TREVENNA, 50s, sits on the bench with a thermos.
5 A Across from him, a handcuffed prisoner, DESIREE LACROIX-ODUYA, 30s, sits upright and calm, her coat folded in her lap.
6 A A uniformed sergeant, SERGEANT BRANWELL KUTTNER, 40s, leans on the doorframe, arms folded.
7 D TREVENNA: You can drop the act now.
8 D DESIREE: Which act is that?
9 D TREVENNA: The one where you don't know why you're here.
10 D DESIREE: I know exactly why I'm here.
11 D TREVENNA: Then say it.
12 D DESIREE: You saw a woman leave a building with a bag.
13 D TREVENNA: A bag containing sixty thousand pounds.
14 D DESIREE: A bag containing sixty thousand pounds of someone else's money. I carried it. I did not take it.
15 D TREVENNA: Distinction without difference.
16 D DESIREE: Then arrest the bag.
17 D KUTTNER: Inspector, she's baiting you.
18 D TREVENNA: I'm aware, Sergeant.
19 D DESIREE: Is the funicular running?
20 D TREVENNA: It's midnight.
21 D DESIREE: So there's no way down.
22 D TREVENNA: There's the road.
23 D DESIREE: Which you closed.
24 D TREVENNA: Which we closed.
25 D DESIREE: You don't have a car.
26 D TREVENNA: We have a Sergeant.
27 D DESIREE: Who has a car?
28 D KUTTNER: Who has a bicycle.
29 D DESIREE: I see.
* 30 A ¶ A door opens with a gust of cold air.
31 A VIOLETA SANDOVAL-GRAY, 60s, a silver-haired woman in a camel coat, enters carrying a briefcase.
32 A She sets it on the bench and unclasps it with a flourish.
33 D VIOLETA: Good evening, gentlemen. I'm Ms. Lacroix-Oduya's solicitor. Release her.
34 D TREVENNA: On what grounds?
35 D VIOLETA: On the grounds that I have the receipt.
36 D TREVENNA: What receipt?
37 D VIOLETA: For the sixty thousand pounds. From a registered charity. Signed this afternoon.
38 D TREVENNA: That's a forgery.
39 D VIOLETA: It is notarized.
40 D TREVENNA: By whom?
41 D VIOLETA: By me.
42 D DESIREE (softly): Oh, Violeta.
43 D VIOLETA: Hush, dear.
44 D TREVENNA: This is absurd.
45 D VIOLETA: Inspector, would you rather be absurd or wrong?
46 D KUTTNER (low): Sir, she has a point.
47 D TREVENNA: Sergeant, which side are you on?
48 D KUTTNER: The side with the bicycle.
* 49 A ¶ A long silence.
50 A Trevenna looks at the receipt, at the briefcase, at the radiator.
51 A He sighs.
52 A He unlocks the cuffs.
53 D TREVENNA: Take her. Go.
54 D DESIREE: Thank you, Inspector.
55 D TREVENNA: Don't thank me. Take the road.
56 D VIOLETA: We will.
57 D DESIREE: Goodnight, Sergeant.
58 D KUTTNER: Mind the ice.

### SCENE s02102 | INT. HOUSEBOAT - GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, VOICE, AUGUSTO
* 1 A ¶ A narrow houseboat kitchen on a quiet canal.
* 2 A Copper pans, a ticking clock, a window onto black water and the yellow smear of a distant bridge lamp.
* 3 A Everything is neat.
* 4 A A table is set for one: a bowl of soup, a heel of bread, a folded napkin.
5 A ¶ A WOMAN, 40s, in a gray cardigan, sits down to eat.
6 A Her hair is combed.
7 A Her posture is perfect.
8 A She tears the bread and dips it.
9 A She eats like someone who has practiced being unhurried.
* 10 A ¶ A phone rings on the wall.
* 11 A A rotary phone, cream colored, with a long coiled cord.
12 A She lets it ring twice, wipes her fingers on the napkin, and answers.
13 D WOMAN: Hello.
14 D VOICE [V.O.] (over phone): It's me.
15 D WOMAN: I know.
16 D VOICE [V.O.] (over phone): Are you alone?
17 D WOMAN: I'm having soup.
18 D VOICE [V.O.] (over phone): That's not what I asked.
19 D WOMAN: It's what you get.
* 20 A ¶ A boat horn sounds far down the canal.
21 A She turns the phone cord around her finger.
22 D VOICE [V.O.] (over phone): I'm at the lock. Twenty minutes.
23 D WOMAN: It's a long way to the lock.
24 D VOICE [V.O.] (over phone): I have the car.
25 D WOMAN: You have a car. Good for you.
26 D VOICE [V.O.] (over phone): Don't be like this.
27 D WOMAN: Like what?
28 D VOICE [V.O.] (over phone): Calm.
29 D WOMAN: It's soup. You can be calm over soup.
30 A ¶ She carries the phone to the table, stretching the cord to its limit, and sits.
31 A She lifts the spoon.
32 D WOMAN [CONT'D]: Augusto. Is that you?
33 D VOICE [V.O.] (over phone): Who else would it be?
34 D WOMAN: You never say your name.
35 D AUGUSTO [V.O.] (over phone): I thought you'd know.
36 D WOMAN: I do. I just wanted to hear it.
* 37 A ¶ A pause on the line.
* 38 A Water laps the hull.
39 A Her free hand slides under the table.
40 A We see it open a drawer and close around the grip of a revolver, a small black thing, cold and neat.
41 A Her face does not change.
42 D AUGUSTO [V.O.] (over phone): I'm sorry about Thursday.
43 D WOMAN: So am I.
44 D AUGUSTO [V.O.] (over phone): We can fix it.
45 D WOMAN: Of course we can.
46 A ¶ She eats a spoonful of soup, swallows, dabs her lips.
* 47 A The revolver stays in her lap, out of sight.
48 D AUGUSTO [V.O.] (over phone): Ten minutes.
49 D WOMAN: I'll leave the light on.
50 A ¶ She hangs up.
51 A Sits there a long moment, looking at the black window.
* 52 A Her reflection looks back.
53 A Then she lifts the napkin, folds it into a perfect square, sets the gun in her lap, and waits.

### SCENE s02103 | INT. FENCING SALLE - FORMER TRAM DEPOT - NIGHT
Detected names (may be incomplete or contain aliases): KONSTANTIN VESELY, YOUNG FENCER, FENCING MASTER, ODALYS PRIEUR, JOSEPHAT
* 1 A ¶ A long iron hall where trams once slept.
* 2 A Rails still run through the floor, buffed by a century of boots.
* 3 A Under the arched glass roof, two strips of copper mesh glow in pools of light.
* 4 A A scoreboard ticks.
* 5 A Benches line the walls, empty except for the shadows of rafters.
6 A ¶ TWO FENCERS in white face each other across the strip, masked, guards up.
7 A The taller, KONSTANTIN VESELY, 30s, slow-moving and heavy-shouldered, a champion past his prime, shifts his weight and the floor creaks.
8 A The other, a YOUNG FENCER, 20s, light as a cat, a rival with nothing to lose, bounces on the balls of his feet.
9 A Between them at the strip's edge, a FENCING MASTER named ODALYS PRIEUR, 50s, in a gray blazer and black armband, raises one hand.
10 D ODALYS: En garde.
11 A ¶ They crouch.
* 12 A Blades touch, a thin chime.
13 D ODALYS [CONT'D]: Prêts?
* 14 A ¶ Nobody answers.
15 A She lowers her hand.
16 D ODALYS [CONT'D]: Allez.
17 A ¶ The young fencer lunges.
18 A Konstantin parries, a flash of steel, and ripostes.
* 19 A The young man's mask jerks.
* 20 A A green light flares on the scoreboard.
21 A Odalys raises her hand again.
22 D ODALYS [CONT'D]: Touché. One to Vesely.
23 A ¶ The young fencer steps back, shaking his head.
24 A He rolls his wrist.
25 A Konstantin does not celebrate.
26 A He tilts his blade, studying its tip, and when he looks up he sees the younger man's eyes through the mesh, hard and bright.
27 A ¶ They go again.
* 28 A Steel on steel.
29 A The younger man attacks high, low, high, and Konstantin yields ground until his heel hits the rail in the floor and he stumbles.
* 30 A A hit to the chest.
* 31 A A red light.
32 A The young fencer tears off his mask, sweat flying, face flushed.
33 D YOUNG FENCER: That was mine.
34 D ODALYS: It was, Mr. Banda.
35 D KONSTANTIN (from behind the mask): You dragged your foot.
36 D JOSEPHAT: I did not.
37 D KONSTANTIN: You did.
38 D ODALYS: Gentlemen.
39 D JOSEPHAT: He's lying.
40 D KONSTANTIN: I'm tired of lying. I'm saying you dragged your foot.
41 A ¶ Odalys steps between them.
42 A She looks from one to the other.
43 A Konstantin removes his mask and the man beneath is sallow, damp, forty-two years old.
44 A He rubs his eyes with the heel of his glove.
45 D KONSTANTIN [CONT'D]: My knee is shot. I'll admit that.
46 D JOSEPHAT: Then retire.
47 D KONSTANTIN: I will, when I lose.
48 D JOSEPHAT: You're losing.
49 D KONSTANTIN: Not yet.
50 D ODALYS: Take your marks.
51 A ¶ They don the masks.
52 A Take their places.
* 53 A Behind them the glass roof ticks with cooling air.
* 54 A The scoreboard reads four-all.
55 D ODALYS [CONT'D]: Final touch. En garde.
56 A ¶ Konstantin sets his feet.
57 A Josephat drops into a crouch.
* 58 A For a moment the hall is so quiet that the clock can be heard turning inside the scoreboard.
59 D ODALYS [CONT'D]: Allez.
60 A ¶ They explode.
* 61 A Steel sings.
62 A Josephat feints low, Konstantin ignores it, steps through, and his blade whips across Josephat's forearm in a curl so fast the eye can't follow.
* 63 A The green light flares.
64 A Josephat freezes, mouth open.
65 A Konstantin lowers his foil.
66 D ODALYS [CONT'D]: Touché. Vesely wins.
* 67 A ¶ Silence.
68 A Then Josephat tears his mask off and hurls it across the strip.
* 69 A It skids to a stop against a bench.
70 A He stands with his chest heaving, his hand at his arm.
71 D JOSEPHAT (to himself): No. No.
72 D KONSTANTIN: Shake my hand.
73 D JOSEPHAT: Not tonight.
74 D KONSTANTIN: Then tomorrow.
75 A ¶ Konstantin pulls off his own mask.
76 A His face is gray with exhaustion.
77 A He holds out his glove.
78 A Josephat looks at it.
79 A Then, slowly, deliberately, he takes it, and squeezes hard.
80 A Konstantin winces.
81 A Neither lets go.
82 D ODALYS: That is enough.
83 A ¶ They release.
84 A Konstantin flexes his hand.
85 A Josephat turns and walks down the long iron hall, his boots ringing on the tram rails.

### SCENE s02104 | INT. GRAIN SILO - BASE LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): DEVAKI RAMANATHAN, HARISH, MAGPIE, LONGSTREET, THADDEUS BELL
* 1 A ¶ A concrete cylinder, ninety feet of dark above.
* 2 A Dust hangs in the flashlight beams.
* 3 A A rusted auger runs up the wall like a spine.
* 4 A Underfoot, a drift of old grain crunches.
5 A ¶ FOUR TEENAGERS stand in a loose ring: DEVAKI RAMANATHAN, 17, in a puffer jacket, a camcorder on her shoulder; her brother HARISH, 15, with a flashlight in each fist; MARGUERITE "MAGPIE" LONGSTREET, 16, in a leather jacket with a patch on the sleeve; and THADDEUS BELL, 17, in a school letterman's jacket, shivering.
6 D HARISH (to the group): Okay. We're in. Can we go now?
7 D MAGPIE: We just got here.
8 D THADDEUS: There's a rule. You stay until midnight.
9 D DEVAKI (muttering): There's no rule.
10 D MAGPIE: There's always a rule.
* 11 A ¶ A noise comes from above: a slow, scraping drag, like something heavy pulled across a floor.
12 A The four of them tilt their heads back together, flashlights swinging up to catch only dust.
13 D HARISH: It's the wind.
14 D THADDEUS: There's no wind.
15 D DEVAKI (quietly, into the camcorder): Note the time. Eleven forty-one. Strange sounds in the silo.
* 16 A ¶ The scraping stops.
* 17 A The silence that follows is worse.
18 A Thaddeus laughs, brittle.
19 A Magpie takes a step toward the ladder at the wall, puts a hand on the cold rung, and the whole silo hums with a faint metallic ring.
20 D MAGPIE: Don't touch the ladder.
21 D DEVAKI: I'm not touching it.
22 D MAGPIE: I was telling myself.
* 23 A ¶ Dust sifts down from above.
24 A Harish switches off one flashlight.
25 A Thaddeus scoots closer to Devaki.
26 A She keeps the camera trained on the dark, steady, her breath fogging.
27 A Magpie stays at the ladder, jaw clenched.
28 A Harish clicks the second flashlight on and off, on and off.
29 D HARISH (whispering): Stop it.
30 D DEVAKI: I'm not doing anything.
31 D HARISH: Not you. Him.
32 A ¶ He points the flashlight at Thaddeus.
33 A Thaddeus is looking up, mouth open, face washed white, and he points too.
* 34 A ¶ Above them, high on the curved wall, something shifts.
* 35 A A long pale shape.
* 36 A Folded limbs, a head tilted wrong, hanging in the shadow.
* 37 A It does not move again.
38 D THADDEUS (a whisper): That's a person.
39 D MAGPIE: That's not a person.
40 D DEVAKI (into the camcorder): It's not moving.
41 D HARISH: Everyone, back to the door. Slowly.
42 A ¶ They begin to back away, all four, hands out, flashlights trembling, the grain crunching underfoot with each step.
43 A Devaki keeps filming, walking backwards, and trips.
* 44 A The camcorder falls.
* 45 A The light on it swings wildly across the wall.
* 46 A ¶ For one half-second it catches the shape.
47 A It is not hanging.
48 A It is crouching.
49 A Its head has turned.
50 D THADDEUS: Run.
51 A ¶ They scatter.

### SCENE s02105 | INT. GRAND OPERA HOUSE - STAGE - REHEARSAL DAY
Detected names (may be incomplete or contain aliases): ILARIA BONACCORSI, GASTON FEUERSTEIN, NKEM OKONJO-DREW, BRYNMOR LLOYD-PRICE, ADELHEID MARQUARDT
* 1 A ¶ An empty stage in work light.
* 2 A Painted flats of a Venetian canal lean against the wall.
* 3 A A grand piano sits center stage, its lid propped.
* 4 A High above, a chandelier is wrapped in plastic like a pinata.
5 A ¶ ILARIA BONACCORSI, 40s, the pianist, plays a slow arpeggio.
6 A At the lip of the stage, a conductor, GASTON FEUERSTEIN, 60s, taps his baton on the music stand.
7 A In the wings, a stagehand, NKEM OKONJO-DREW, 30s, adjusts a rope.
8 A In the pit, a violinist, BRYNMOR LLOYD-PRICE, 20s, tunes, and a soprano, ADELHEID MARQUARDT, 30s, in a rehearsal robe, hums to herself in a corner.
* 9 A ¶ Nobody speaks.
* 10 A The arpeggio rolls.
11 A Gaston raises an eyebrow, and Ilaria stops, and the silence fills the hall.
12 A Brynmor slips out of the pit and into the wings, and Nkem passes him a coil of rope without looking.
* 13 A ¶ Above them the chandelier creaks.
14 A Everyone looks up.
* 15 A The chain is slipping.
* 16 A A link clicks.
17 A Adelheid steps back from her corner.
18 A Nkem drops the rope.
19 A Ilaria slams the piano lid shut and Gaston dives for the music stand, and all five scramble toward the wings as the chandelier lurches, swings, and hangs, quivering, by a single thread of steel.
* 20 A ¶ For a moment nobody breathes.
21 A Then Adelheid begins to laugh.

### SCENE s02106 | EXT. ROADSIDE FRUIT STAND - DAY
Detected names (may be incomplete or contain aliases): HONESTY BOX, BAG, GRACIELA HUNT, BASTIAN, MAN, OTIS WREN
* 1 A ¶ A plywood shed on a gravel shoulder.
* 2 A Crates of peaches.
* 3 A A hand-painted sign: HONESTY BOX - $3 A BAG.
* 4 A Heat shimmers off the highway.
5 A ¶ GRACIELA HUNT, 50s, in a straw hat, arranges peaches in a pyramid.
6 A Her nephew BASTIAN, 20s, sits on an upturned crate, eating a peach and watching the road.
* 7 A A dusty pickup rolls up and stops.
8 A ¶ A MAN in a cowboy hat steps out.
9 A This is OTIS WREN, 40s.
10 A He nods at them, picks up a bag, and counts out three singles.
11 A He drops them into the tin box.
12 D OTIS: Thank you kindly.
13 D GRACIELA: Peaches are good this year.
14 D OTIS: They look it.
15 A ¶ Bastian stops chewing.
16 A Graciela straightens a peach that did not need straightening.
17 A Otis fishes a fourth dollar from his wallet and lays it beside the tin.
18 D OTIS [CONT'D]: For the bag.
19 D GRACIELA: Bags are free.
20 D OTIS: Then for the view.
21 A ¶ He climbs into the pickup.
* 22 A The engine turns.
23 A Graciela watches the tailgate recede until the road shimmers it away.
24 A Then she opens the tin, counts the bills, and counts them again.
25 D BASTIAN: It's all there?
26 D GRACIELA: It's four dollars.
27 D BASTIAN: It's three.
28 D GRACIELA: It's four.
29 A ¶ She slides the extra dollar into her apron.
30 A Bastian bites the peach.

### SCENE s02107 | INT. STILT CLINIC - EXAM ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NURSE ADWOA FOSU-LANGLEY, DR. KWAN
* 1 A ¶ A rural clinic built on pilings over a flooded delta.
* 2 A One lamp, one cot, one oxygen cylinder.
* 3 A Rain hammers the tin roof.
* 4 A Through the slats, brown water slides past.
5 A ¶ NURSE ADWOA FOSU-LANGLEY, 30s, kneels by the cot, a stethoscope hooked in her ears.
6 A On the cot lies an unconscious child, eight, breathing in shallow sips.
* 7 A Beside the cot, a satellite phone on speaker, its antenna angled out the window.
8 D ADWOA (into the phone): Doctor, he's at eighty-two percent. His lips are blue.
9 D DR. KWAN [V.O.] (over phone): How long since the last dose?
10 D ADWOA: Forty minutes.
11 D DR. KWAN [V.O.] (over phone): Give him another.
12 D ADWOA: It's the last vial.
13 D DR. KWAN [V.O.] (over phone): Then it's the last vial.
14 A ¶ Adwoa loads a syringe with trembling hands.
15 A She glances at the child, then at the phone, then back at the syringe.
16 A She finds a vein on the small wrist.
17 D ADWOA: Doctor Kwan, she's not breathing deep enough.
18 D DR. KWAN [V.O.] (over phone): Who isn't? You or the boy?
19 D ADWOA: The boy. And I've got no one to hold him.
20 D DR. KWAN [V.O.] (over phone): Then you hold him. She can't see you through a phone, so tell me what you see.
21 A ¶ Adwoa takes the child's hand in both of hers and kneels on the wet planks.
22 A She pushes the plunger.
23 D DR. KWAN [V.O.] (over phone): Watch his chest.
24 D ADWOA: It's rising.
25 D DR. KWAN [V.O.] (over phone): Eighty-five?
26 D ADWOA: Eighty-seven.
27 A ¶ Adwoa sits back and rests her forehead against the cot.
* 28 A Rain drums on.

### SCENE s02108 | INT. FIELD HOSPITAL - STADIUM CONCOURSE - NIGHT
Detected names (may be incomplete or contain aliases): ANSELM OYELARAN-PRICE, KIRSTEN VANTERPOOL, NURSE BEATRIZ HAMMOND-LU, JUDE FAIRCLOUGH
* 1 A ¶ A concrete concourse beneath the stands, lined with cots.
* 2 A Overhead, emergency lights flicker.
* 3 A A banner for a long-ago soccer final hangs askew.
* 4 A Medics weave between rows.
5 A ¶ DR. ANSELM OYELARAN-PRICE, 50s, in scrubs and a headlamp, bends over a patient.
6 A Across from him, DR. KIRSTEN VANTERPOOL, 40s, snaps off a pair of gloves.
7 A NURSE BEATRIZ HAMMOND-LU, 30s, holds an IV bag aloft like a torch.
8 A A paramedic, JUDE FAIRCLOUGH, 20s, enters pushing an empty gurney.
9 D ANSELM (to Kirsten): We lost the monitor.
10 D KIRSTEN (to Beatriz): Can you bag him?
11 D BEATRIZ: Already am.
12 D ANSELM: Pressure?
13 D KIRSTEN: Falling.
14 D BEATRIZ: He's gone gray.
15 D ANSELM: Start compressions.
16 D KIRSTEN: I've got them.
17 D ANSELM: On three.
18 D KIRSTEN: One.
19 D ANSELM: Two.
20 D BEATRIZ: Three.
21 D JUDE (arriving): What do you need?
22 D ANSELM: Epi, one milligram.
23 D JUDE: Here.
24 D KIRSTEN: Push it.
25 D ANSELM: Pushing.
26 D BEATRIZ: Rhythm?
27 D KIRSTEN: Nothing.
28 D ANSELM: Again.
29 D KIRSTEN: Clear.
30 D JUDE: Clear!
* 31 A ¶ A pause.
* 32 A Then a beep, hesitant, weak.
* 33 A Then another.
34 D BEATRIZ: We've got something.
35 D ANSELM: Pulse?
36 D KIRSTEN: Thready, but there.
37 D ANSELM: Good. Good.
38 D JUDE: Where does he go?
39 D ANSELM: Intensive section. Row four.
40 D KIRSTEN: I'll take him.
41 D ANSELM: No. You'll sit.
42 D KIRSTEN: I'm fine.
43 D ANSELM: You haven't sat in nine hours.
44 D KIRSTEN: Neither have you.
45 D BEATRIZ: Both of you, sit.
46 D ANSELM: We're fine.
47 D KIRSTEN: We're fine.
48 A ¶ Beatriz glares at them.
49 A They sit.

### SCENE s02109 | INT. FERRY GALLEY - DEPOSITION - NIGHT
Detected names (may be incomplete or contain aliases): ATTORNEY PRUDENCE KALINOWSKI-BAKER, ATTORNEY THEODORIC MWANGI-FOX, WITNESS, HORATIO BLYTHE, JUDGE OKAFOR-NIELSEN
* 1 A ¶ A cramped steel galley converted into a deposition room.
* 2 A A long table, a court reporter's machine, a pitcher of water.
* 3 A Porthole windows reveal black sea.
* 4 A The ferry rocks gently, and the water in the pitcher slops.
5 A ¶ ATTORNEY PRUDENCE KALINOWSKI-BAKER, 40s, sharp-featured, in a charcoal suit, sits at the head with a legal pad.
6 A Opposite, ATTORNEY THEODORIC MWANGI-FOX, 50s, rumpled, a pen behind each ear, flips pages.
7 A Between them, the WITNESS, HORATIO BLYTHE, 60s, a ship's purser in a stained uniform, sits with hands clasped.
* 8 A A court reporter's machine sits unattended, recording on its own.
* 9 A ¶ A speakerphone in the center of the table crackles.
10 D JUDGE OKAFOR-NIELSEN [V.O.] (over speakerphone): Counsel, state your appearances for the record.
11 D PRUDENCE: Prudence Kalinowski-Baker for the plaintiff.
12 D THEODORIC: Theodoric Mwangi-Fox for the defendant.
13 D JUDGE OKAFOR-NIELSEN [V.O.] (over speakerphone): The witness is sworn?
14 D HORATIO: I am, Your Honor.
15 D JUDGE OKAFOR-NIELSEN [V.O.] (over speakerphone): Proceed.
16 D PRUDENCE: Mr. Blythe, on the night of March ninth, where were you?
17 D HORATIO: In the purser's office.
18 D PRUDENCE: Alone?
19 D HORATIO: No.
20 D THEODORIC: Objection. Vague.
21 D PRUDENCE: Who was with you?
22 D THEODORIC: Objection. Compound.
* 23 A ¶ The speakerphone hisses.
24 D JUDGE OKAFOR-NIELSEN [V.O.] (over speakerphone): Counsel, one at a time.
25 D PRUDENCE: Withdrawn. Mr. Blythe, who was in the office?
26 D HORATIO: The first mate. Mr. Voss.
27 D PRUDENCE: And what were you discussing?
28 D HORATIO: The manifest.
29 D THEODORIC: Objection. Calls for hearsay.
30 D JUDGE OKAFOR-NIELSEN [V.O.] (over speakerphone): Overruled. It's a deposition.
* 31 A ¶ The ferry lurches.
* 32 A The water in the pitcher sloshes.
33 A Horatio grips the table.
34 A Prudence waits it out, pen poised.
35 D PRUDENCE: Mr. Blythe, did the manifest list the crates?
36 D HORATIO: It did not.

### SCENE s02110 | INT. GENERATION SHIP "HALCYON REACH" - HYDROPONICS DECK - SHIP'S MORNING
Detected names (may be incomplete or contain aliases): ENGINEER BRIGITTE OSEI-HARTMANN, CAPTAIN LUCIUS ABARA-DELACROIX
* 1 A ¶ Terraced racks of lettuce and bean vines under violet grow lights.
* 2 A Pipes tick with circulating water.
* 3 A The air is humid and green.
* 4 A A worn path through the leaves leads to a bench at the center, where two cups of tea sit untouched.
5 A ¶ ENGINEER BRIGITTE OSEI-HARTMANN, 50s, in a patched coverall, walks the path with a tablet, checking the nutrient lines.
6 A She hums a little tune, off-key.
7 A She pauses at a tomato plant, pinches a leaf, and smells it.
8 D BRIGITTE (to herself): Hello, my beauty.
9 A ¶ She continues down the row.
10 A Ahead, on the bench, sits CAPTAIN LUCIUS ABARA-DELACROIX, 60s, in a pressed uniform, hat in his lap, gazing at the vines.
11 A He looks well.
12 A He looks rested.
13 D BRIGITTE [CONT'D]: Captain. You're up early.
14 D LUCIUS: The ship's morning is whenever I say it is.
15 D BRIGITTE: That's what the manual says?
16 D LUCIUS: That's what the manual means.
17 A ¶ She sits beside him and picks up a cup.
18 A He doesn't move to take his own.
19 A For a moment they watch the water drip from a pipe overhead.
* 20 A Somewhere a fan turns.
21 D BRIGITTE: It's quiet.
22 D LUCIUS: It's always quiet.
23 D BRIGITTE: Not like this.
24 D LUCIUS: No?
25 D BRIGITTE: There's usually the sound of people.
26 D LUCIUS (mildly): You don't hear the people?
27 A ¶ She tilts her head.
28 A She listens.
* 29 A Nothing but the fans and the drip.
30 A She sets her cup down and glances at the tablet.
31 D BRIGITTE: Captain, my readings show the crew quarters on Deck Four are empty.
32 D LUCIUS: They're at breakfast.
33 D BRIGITTE: The mess hall is empty too.
34 D LUCIUS: Then they're on shift.
35 D BRIGITTE: The bridge is empty.
36 D LUCIUS (a long beat): Is it?
37 A ¶ She stands.
38 A She turns in a slow circle, staring at the racks.
39 A She raises her voice, projecting into the green.
40 D BRIGITTE (to the deck): Hello? Anyone down here? Anyone?
* 41 A ¶ Nothing.
* 42 A Only the drip.
43 A She looks at Lucius, who is still smiling that mild, restful smile.
44 D BRIGITTE [CONT'D] (muttering): Think. Think, Brigitte.
45 A ¶ She taps the tablet, scrolls, swipes.
46 A Her face drains.
47 D BRIGITTE [CONT'D]: Captain. The log says we dropped our last colonist forty years ago.
48 D LUCIUS: Did it?
49 D BRIGITTE: It says we landed.
50 D LUCIUS: We did.
51 D BRIGITTE: Then why are we still moving?
52 D LUCIUS (gently): Are we?
53 A ¶ She looks up.
* 54 A Through the transparent ceiling of the hydroponics dome, the stars are fixed, motionless.
* 55 A Not streaking.
* 56 A Not drifting.
* 57 A Just there, a clean field of cold points.
58 D BRIGITTE: We stopped.
59 D LUCIUS: We stopped, Brigitte. A long time ago.
60 D BRIGITTE: And no one told me.
61 D LUCIUS: No one was left to.
62 A ¶ She sits down again, hard.
* 63 A The tablet slips from her fingers and clatters on the bench.
64 A She stares at her own hands.
65 D BRIGITTE: How long have I been tending these?
66 D LUCIUS: Long enough for the tomatoes to forget the dark.
67 D BRIGITTE: Am I... am I the only one?
68 D LUCIUS: You were the best of us. You kept the garden.
69 D BRIGITTE: And you?
70 D LUCIUS: I keep the ship.
71 A ¶ She looks at him properly, and for the first time sees the translucence at the edge of his sleeve, the way the grow lights pass faintly through his hat.
72 D BRIGITTE (a whisper): Oh.
73 D LUCIUS: Yes.
74 D BRIGITTE: You've been dead a while.
75 D LUCIUS: Thirty-one years. I didn't want to frighten you.
76 A ¶ She laughs.
77 A It cracks.
78 A She wipes her eyes.
79 D BRIGITTE: You're a terrible captain.
80 D LUCIUS: I'm a very patient one.
81 A ¶ She picks up her cold tea and drinks.
82 A They sit side by side, the engineer and the captain, in the violet light of the last garden.
83 D BRIGITTE: What happens now?
84 D LUCIUS: Now? You finish your tea.
85 D BRIGITTE: And after?
86 D LUCIUS: After, we see.
87 A ¶ She nods.
88 A She takes another sip.
* 89 A The vines rustle, though no air moves.

### SCENE s02111 | INT. ALPINE HUT - MORNING
Detected names (may be incomplete or contain aliases): VASILIKI KOUROS, TIBOR HAL, SZ, JACARANDA FENTON-MBEKI, GUS, CALDER
* 1 A ¶ A one-room stone refuge at the edge of a glacier.
* 2 A Pine rafters, a cast-iron stove, and four bunks in a row.
* 3 A Frost on the inside of the window.
* 4 A Sunlight, sudden and blazing, pours through it onto a table laid with oatmeal and tin mugs.
5 A ¶ Four climbers have just woken.
6 A VASILIKI KOUROS, 30s, wiry and sun-darkened, stirs the pot with a wooden spoon.
7 A TIBOR HALÁSZ, 50s, gray-bearded, gaunt, laces his boots with slow concentration.
8 A The youngest, JACARANDA FENTON-MBEKI, 19, a rope bag over her shoulder, stands at the window, grinning at the sky.
9 A AUGUSTINE "GUS" CALDER, 40s, their guide, sits on a bunk, back to the wall, oddly still.
* 10 A ¶ The mountain outside is flawless.
* 11 A Not a cloud.
* 12 A Every ridge cut sharp as glass against the blue.
13 D JACARANDA (whispering with delight): Look at it.
14 D VASILIKI: I'm looking.
15 A ¶ They eat.
* 16 A Spoons clink.
* 17 A The stove ticks.
* 18 A For a long minute it is perfect: the quiet pleasure of being alive.
19 A Only Gus does not eat.
20 A He is watching the window with the expression of a man reading a letter he does not want to finish.
21 D TIBOR: Gus. Eat.
22 D GUS: In a minute.
23 A ¶ He rises, crosses to the window, and presses his palm to the glass.
* 24 A Far away, on the western horizon, a faint white line has drawn itself across the blue, thin as a hair, and it is growing.

### SCENE s02112 | INT. CHEESEWORKS HEADQUARTERS - ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): INTERN, GUEST, NADEZHDA FAIRBANKS, BART, OKONKWO-REYES, WINNIE TRAN, PERCIVAL STONE, HOLLOWELL, FRANCESCA
* 1 A ¶ A glass elevator lined with laminated posters of cheddar wheels.
* 2 A A speaker plays soft jazz.
* 3 A Six employees stand shoulder to shoulder, each holding a coffee cup.
4 A ¶ An INTERN, 20s, with a lanyard that reads GUEST, holds a clipboard.
5 A NADEZHDA FAIRBANKS, 40s, VP of Curds, adjusts her blazer.
6 A BARTHOLOMEW "BART" OKONKWO-REYES, 50s, Director of Rind, stares at the ceiling.
7 A Beside them, WINNIE TRAN, 30s, and PERCIVAL STONE, 30s, the Brie Brothers, share a single earbud.
8 A The sixth, MR. HOLLOWELL, 60s, the CEO, holds a golden wedge of cheese like a clutch purse.
* 9 A ¶ The doors close.
* 10 A The elevator does not move.
11 D NADEZHDA: Floor six, please.
12 D BART: Floor six, please.
13 D NADEZHDA (to the intern): Press six.
14 D INTERN: I did.
15 D WINNIE: It's stuck.
16 D PERCIVAL: It's thinking.
17 D MR. HOLLOWELL: Everyone stay calm. The cheese is not in danger.
* 18 A ¶ The lights flicker.
* 19 A Nobody breathes.
20 A The intern takes a half step back and presses herself against a poster of gouda.
* 21 A The jazz cuts out.
22 D MR. HOLLOWELL: Who are you, young lady?
23 D INTERN: My name is Francesca. I've been an intern for three days.
24 D MR. HOLLOWELL: Francesca. Do you know how to fix an elevator?
25 D FRANCESCA: No, sir. I know how to fill out a form.
26 D MR. HOLLOWELL: Then fill it out.
27 A ¶ She opens the clipboard.
28 A Winnie and Percival hold up the earbud between them, and a tiny song leaks out.

### SCENE s02113 | INT. HILLTOP OBSERVATORY - DOME - NIGHT
Detected names (may be incomplete or contain aliases): NOELLE FAIRCHILD-ABARA, WILFRED OYELOLA-GRAY, PROFESSOR IOLANTHE VASQUEZ-KIM, MARCUS
* 1 A ¶ A great white dome, its slit open to a scatter of stars.
* 2 A The telescope rises through the center like the barrel of a cathedral organ.
* 3 A A spiral stair, a brass gantry, a desk strewn with charts.
* 4 A A radiator ticks.
* 5 A Wind sighs through the slit.
6 A ¶ NOELLE FAIRCHILD-ABARA, 30s, in a thick sweater and fingerless gloves, leans against the telescope pier, arms wrapped around herself.
7 A Her wedding ring is gone.
8 A A pale band marks the finger where it used to be.
9 A On the gantry above her, WILFRED OYELOLA-GRAY, 30s, a postdoc, adjusts a mirror, whistling quietly.
10 A Behind them both, at the foot of the stair, sits PROFESSOR IOLANTHE VASQUEZ-KIM, 70s, in a wheelchair with a shawl over her knees, a thermos in her lap, grading papers by flashlight.
11 D NOELLE (to the dark): He's late.
12 D WILFRED: He's always late.
13 D NOELLE: He said eight.
14 D WILFRED: He said eight o'clock, one of those eights.
15 D IOLANTHE (not looking up): Eight o'clock the way he says it is a state of mind.
16 A ¶ Noelle laughs, once, then bites it off.
17 A She pulls her sleeves down over her hands.
* 18 A A phone buzzes in her pocket.
19 A She pulls it out, reads the screen, and her face hardens.
20 A She walks to the desk, props the phone against a stack of star charts, and presses the speaker.
21 D MARCUS [V.O.] (over phone): Noelle? I'm so sorry, I got held up.
22 D NOELLE: Where are you?
23 D MARCUS [V.O.] (over phone): The airport. The flight's delayed.
24 D NOELLE: Which airport?
25 D MARCUS [V.O.] (over phone): What do you mean?
26 D NOELLE: Marcus, there are three. Which one?
* 27 A ¶ A pause on the line.
28 A Wilfred stops whistling.
29 A Iolanthe lowers her flashlight.
30 A Marcus draws a breath and exhales it.
31 D MARCUS [V.O.] (over phone): I'm not at the airport.
32 D NOELLE: No.
33 D MARCUS [V.O.] (over phone): I'm at the house.
34 D NOELLE: Which house?
35 D MARCUS [V.O.] (over phone): Hers.
* 36 A ¶ The silence in the dome is enormous.
37 A Wilfred climbs down from the gantry rung by rung.
38 A Noelle does not move.
39 A She stares at the phone as if she expected it to say something else.
* 40 A The radiator ticks.
* 41 A The wind sighs through the slit in the roof, and a single star drifts into the frame of the telescope eyepiece unobserved.
42 D NOELLE: You asked me to come here tonight.
43 D MARCUS [V.O.] (over phone): I know.
44 D NOELLE: You said you wanted to show me something.
45 D MARCUS [V.O.] (over phone): I did. I do. I was going to.
46 D NOELLE: You were going to propose a toast to the comet.
47 D MARCUS [V.O.] (over phone): Noelle...
48 D NOELLE: No. Say it plainly.
49 D MARCUS [V.O.] (over phone): I can't do it anymore. I'm sorry. I should have told you before you drove all the way up.
50 D NOELLE: Twelve years.
51 D MARCUS [V.O.] (over phone): I know.
52 D NOELLE: And you couldn't tell me to my face.
53 D MARCUS [V.O.] (over phone): I thought it would be kinder.
54 D NOELLE: It would have been kinder to tell me in the car, in the kitchen, in the dark. Anywhere but a place where we once watched the sky open up.
55 D MARCUS [V.O.] (over phone): I know. I'm sorry.
56 A ¶ She says nothing.
57 A She stares at the phone.
58 A After a moment she reaches out and presses the button that ends the call.
* 59 A The screen goes dark.
* 60 A The dome is very still.
61 A ¶ Wilfred picks up a blanket from the gantry rail and drapes it over her shoulders.
62 A Iolanthe wheels herself forward, one slow push at a time, until her chair bumps the leg of the desk.
63 A She unscrews the thermos and pours something steaming into the cap.
64 D IOLANTHE: Drink.
65 D NOELLE: What is it?
66 D IOLANTHE: Coffee and something worse.
67 A ¶ Noelle takes the cap and drinks.
68 A She coughs.
69 A Iolanthe nods, satisfied.
70 D IOLANTHE [CONT'D]: My husband left me for a bassoonist in 1979.
71 D NOELLE: What did you do?
72 D IOLANTHE: I discovered two asteroids and named one after his mother.
73 D WILFRED (softly): Professor.
74 D IOLANTHE: It's a very ugly asteroid.
75 A ¶ Noelle laughs, helplessly, with tears in her eyes.
76 A Wilfred steps to the console and flips a switch.
* 77 A The great dome begins to turn.
* 78 A The slit sweeps past the horizon and across the Milky Way, and the telescope swings after it with a deep, patient rumble.
79 D WILFRED: Come see.
80 D NOELLE: See what?
81 D WILFRED: Something that isn't going anywhere.
82 A ¶ She wipes her face.
83 A She climbs the stair, one step at a time, the blanket trailing behind her, and puts her eye to the lens.
84 A A long breath.
* 85 A The stars fill her sight.

### SCENE s02114 | INT. ECOLE DU SILENCE - MIME ACADEMY - REHEARSAL HALL - DAY
Detected names (may be incomplete or contain aliases): SILENCE, FELIX ODENKIRK, PROFESSOR GIOVANNA BIANCHI-NNAMDI, CAPED MAN, ESCOBAR
* 1 A ¶ A mirrored studio with a barre along one wall.
* 2 A Chalk marks on the floor.
* 3 A A cardboard sign taped to the door reads: SILENCE, PLEASE.
* 4 A SERIOUSLY.
5 A ¶ FELIX ODENKIRK, 30s, in a striped shirt, white-gloved, painted white-faced, stands in a glass box that does not exist.
6 A His hands slide along invisible walls.
7 A His mouth hangs open in fear.
8 A A line of sweat cuts through the greasepaint.
9 A ¶ He pushes at the wall.
10 A He pushes harder.
11 A He leans his whole weight on it, then slumps in defeat and wipes his brow.
12 A ¶ PROFESSOR GIOVANNA BIANCHI-NNAMDI, 50s, enters from the wings in a black leotard and a beret, carrying a stopwatch.
13 A She holds up one finger.
14 A Felix freezes.
15 A She taps the stopwatch and circles him with a critical eye.
16 D GIOVANNA (whispering): You are not trapped.
17 D FELIX (whispering back): I thought that's the point.
18 D GIOVANNA: You are trapped in a box. But you are not afraid. You are bored.
19 D FELIX (whispering): I've been in here for forty minutes.
20 D GIOVANNA: That is what bored looks like.
21 A ¶ She reaches into her pocket, takes out a banana, and hands it to him.
22 A He examines it, bewildered.
23 A She makes the shape of a phone with her hand, holds it to her ear, and nods meaningfully.
24 A Felix peels the banana and holds it to his ear.
25 D FELIX (into the banana, whispering): Hello? Yes, this is Felix.
26 D GIOVANNA (shaking her head): No. Silently.
27 D FELIX (in a normal voice): How can I speak silently?
28 D GIOVANNA: Shhh!
29 A ¶ She presses a finger to his lips.
30 A He freezes.
31 A She steps back, folds her arms, and stares at him with utter disappointment.
* 32 A A door opens at the far end of the hall.
33 A A new figure, short and round in a brilliant red cape and a feathered cap, bursts in at a run.
34 A This is a CAPED MAN, 60s, with a waxed mustache and the bearing of a retired emperor.
35 A He stops dead when he sees the banana.
36 D CAPED MAN (booming): Who has brought fruit into my hall?
37 A ¶ Giovanna and Felix flinch together.
38 A Felix hides the banana behind his back.
39 A Giovanna puts her hands over her mouth.
40 D CAPED MAN [CONT'D] (thundering): Speak!
41 D FELIX (very small): You told us not to speak.
42 D GIOVANNA (whispering): Maestro Escobar, please, he is only a student.
43 D ESCOBAR: Silence, young man!
44 D FELIX (silent): 
45 A ¶ Escobar glares.
46 A Giovanna backs toward the barre.
47 A Felix mimes zipping his lips and pulls an invisible key from his pocket.
48 A He tosses it over his shoulder.
49 A Escobar watches it fly.
50 A He flares his nostrils, stomps three steps, plucks the banana from Felix's hand, and sniffs it with narrowed eyes.
51 D ESCOBAR [CONT'D] (softer): Ripe.
52 D GIOVANNA (whispering): Maestro, it was a teaching tool.
53 D ESCOBAR: Banana is not a tool. Banana is an emotion.
54 A ¶ He peels it with theatrical care.
55 A He takes a bite, closes his eyes, and chews with an expression of sublime serenity.
56 A Felix mimes applause with his gloved hands, all pantomime, no sound.
57 A Giovanna copies him.
58 A Escobar opens one eye.
59 D ESCOBAR [CONT'D] (to Felix): You. Young man. What is your name?
60 D FELIX: Felix.
61 D ESCOBAR: Felix, you have the soul of a cabbage.
62 D FELIX: Thank you.
63 D ESCOBAR: It was not a compliment.
64 D FELIX (in a small voice): I know.
65 D ESCOBAR: But I admire your honesty. You will be in my box tomorrow.
66 D FELIX: Which box?
67 D ESCOBAR: The real box.
68 A ¶ Giovanna stifles a gasp.
69 A Escobar finishes the banana and holds the peel aloft, then lets it fall, and the three of them watch it drift to the floor.
* 70 A A pause.
71 A In the profound quiet, Felix makes the smallest sound, a cough.
72 D ESCOBAR [CONT'D] (whispering): Shhh!
73 D GIOVANNA (whispering): Shhh!
74 A ¶ Felix presses both hands to his mouth, eyes wide.
* 75 A The mirrors multiply the three of them, their white gloves and wide eyes receding into infinity.
* 76 A Nobody makes a sound.
* 77 A A stopwatch ticks.

### SCENE s02115 | INT. TUNA AUCTION HALL - PREDAWN
Detected names (may be incomplete or contain aliases): STRANGER, TAKUMI SHINODA-REYES, OSEI QUAYSON-LEE, ANDERS, MIREILLE BOUCHARD-WU, KENJI FLORES-ADE
* 1 A ¶ A cavernous refrigerated hall of wet concrete, fluorescent tubes, and rows of giant frozen tuna laid on pallets like torpedoes.
* 2 A Men in rubber boots drag hooks.
* 3 A Breath smokes.
* 4 A Prices are shouted in clipped dialect.
5 A ¶ A STRANGER, 30s, in a rented parka and expensive shoes, picks his way down an aisle between the fish.
6 A He keeps glancing at a paper in his hand.
7 A Behind a stack of crates, an old broker named TAKUMI SHINODA-REYES, 60s, watches him with a cigarette dangling from his lip.
8 D TAKUMI: Looking for something, friend?
9 D STRANGER: A man named Osei.
10 D TAKUMI: There are forty Oseis here.
11 D STRANGER: This one owes my employer.
12 D TAKUMI: They all do.
13 A ¶ Takumi lights the cigarette, then points the burning tip toward a corner.
14 A There, hunched over a pallet, a heavyset man in an orange apron prods a tuna with a gaff.
15 A OSEI QUAYSON-LEE, 40s, doesn't look up.
16 D STRANGER (to Osei): Mr. Quayson-Lee.
17 D OSEI: Who's asking?
18 D STRANGER: My name is Anders.
19 D OSEI: That's a name, not an answer.
20 D ANDERS: I work for Mr. Pruitt.
21 A ¶ At the name, Osei's gaff stops.
22 A Takumi drops his cigarette.
23 A A woman in a fish-market smock, MIREILLE BOUCHARD-WU, 40s, appears from behind the pallet with a clipboard and a calculator.
24 A She stops, looks at Anders, then at Osei.
25 D MIREILLE (low): Osei. Who is this?
26 D OSEI: A friend of Pruitt's.
27 D ANDERS: I'd say colleague.
28 D MIREILLE: Pruitt's dead.
29 D ANDERS: He was. Until Thursday.
* 30 A ¶ A cold silence.
* 31 A Another auctioneer starts a call in the distance, a sing-song of numbers.
* 32 A The fluorescent tubes buzz.
33 A Osei sets down the gaff.
34 A His hand drifts toward his apron pocket, and Anders sees it.
35 D ANDERS [CONT'D]: Don't.
36 D OSEI: It's a sandwich.
37 D MIREILLE: It's a sandwich.
38 A ¶ Osei draws out a foil-wrapped sandwich and holds it up like a flag.
* 39 A The tension breaks.
40 A Takumi laughs, a harsh cough of a laugh.
41 A Anders lowers the hand he had raised to his own coat.
42 D ANDERS: Fine. Mr. Pruitt wants his money by Friday.
43 D OSEI: Pruitt can have his money Friday, if the tuna sells.
44 D ANDERS: The tuna will sell.
45 D MIREILLE: Then Friday.
* 46 A ¶ An engine roars behind them.
47 A A forklift lurches around a stack of crates with a skinny kid at the wheel, KENJI FLORES-ADE, 20s, headphones on, eyes on his phone.
48 A He sees the group and slams the brakes.
* 49 A The forklift slews, and a pallet of frozen tuna tilts off its forks toward Anders.
50 D KENJI: Look out!
51 A ¶ Anders dives.
* 52 A The pallet crashes down inches from his shoes, and a hundred-pound fish skids across the concrete and fetches up against Takumi's boot.
53 D TAKUMI (deadpan): Auction's open.
54 A ¶ Anders lies on the wet floor, staring at the ceiling.
55 A Osei offers him half the sandwich.

### SCENE s02116 | INT. CAROUSEL FACTORY - PAINTING FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): OTTILIE HARGROVE-DIAZ, ELDRIDGE PASCAL, CORDELIA MAKINDE-FOX, CHILD
* 1 A ¶ A cavernous workshop where wooden horses hang from ceiling hooks in rows, half-painted, their eyes blank.
* 2 A Paint cans line the walls.
* 3 A Dust sheets cover a half-built carousel platform at the center.
* 4 A One work lamp burns.
* 5 A Rain taps the skylights.
6 A ¶ OTTILIE HARGROVE-DIAZ, 30s, a restorer in an apron with a headlamp, kneels beside a wooden pony, brushing gold leaf onto its mane.
7 A Her assistant ELDRIDGE PASCAL, 20s, in headphones, sands a carved saddle at a bench across the floor.
8 A At the far end, by the loading door, stands CORDELIA MAKINDE-FOX, 60s, the factory's owner, in a fur collar, holding a cardboard box.
* 9 A ¶ A music-box tune starts up, thin and tinkling.
10 A Ottilie stops brushing.
11 A Eldridge slides one headphone off.
12 D ELDRIDGE: Did you hear that?
13 D OTTILIE: It's the box.
14 D ELDRIDGE: The box is on the shelf.
15 A ¶ They look.
* 16 A Across the floor, in the dark, the sound continues, a slow waltz in a minor key.
17 A Cordelia clutches her collar and tucks the cardboard box against her chest.
18 D CORDELIA (calling): Ottilie. Turn that off.
19 D OTTILIE: It's not mine.
20 D CORDELIA: Everything here is mine.
* 21 A ¶ The tune slows.
* 22 A A note drops out.
* 23 A Then another.
* 24 A Then the carousel platform in the center of the floor shudders, and the dust sheet slides off to reveal the half-built horses on their poles.
* 25 A Without anyone touching them, they begin to rise and fall.
26 D ELDRIDGE: That's not plugged in.
27 D OTTILIE: Eldridge, back away from the wall.
28 A ¶ Ottilie rises.
* 29 A She sets the brush on the pony's back, and as her hand leaves it the wooden head turns toward her an inch, grain creaking.
30 A Eldridge yelps and drops the saddle.
31 A Cordelia steps back until her shoulders hit the loading door and cannot find the latch in the dark.
32 A Ottilie walks toward the carousel, slowly, hands out, one boot in front of the other.
33 D OTTILIE [CONT'D] (whispering): Hello?
* 34 A ¶ The music stops.
* 35 A The horses stop mid-motion, frozen at different heights.
* 36 A The silence presses down.
* 37 A Then a child's voice drifts down from the rafters, tiny and singsong.
38 D CHILD [O.S.]: Round and round and round we go.
* 39 A ¶ Nobody moves.
40 A Cordelia lets out a long, shaking breath.
41 D CORDELIA (whispering): That's what she used to say.
42 D OTTILIE: Who?
43 D CORDELIA: My daughter. The summer she...
44 A ¶ She cannot finish.
45 A Eldridge crosses the floor in a crouch to stand at Ottilie's elbow.
46 D ELDRIDGE (whispering): Do we leave?
47 D OTTILIE (whispering): I don't think it wants us to leave.
48 D CHILD [O.S.]: Won't you ride?
* 49 A ¶ A beat.
* 50 A Then the lamp dies.
* 51 A In the dark, a single horse starts to turn on its pole, and the whole platform begins to spin, slowly, then faster, then faster still, and the air fills with the shriek of old gears and the rising notes of a waltz.
52 D CORDELIA (screaming): Make it stop!
53 A ¶ Ottilie lunges for the master switch on the wall, finds it by touch, and slams it down.
* 54 A The carousel groans.
* 55 A The music winds down in a long, falling chord.
* 56 A The horses sag on their poles.
* 57 A Silence.
* 58 A ¶ Then a flicker, a click, and the work lamp surges back on.
* 59 A ¶ The platform is empty.
* 60 A The horses hang still.
* 61 A At the center, where the dust sheet lay, sits a small wooden horse nobody had seen before, freshly painted, white and gold, and one of its eyes is open.
62 D ELDRIDGE (a whimper): Ottilie.
63 D OTTILIE: I see it.
64 D CHILD [O.S.] (giggling): You're it.
* 65 A ¶ The lamp bursts.
* 66 A Dark.
* 67 A A long scream.

### SCENE s02117 | INT. COUNTY JAIL - ATTORNEY VISITING BOOTH - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY ROSALINDA FAIRWEATHER-KIM, ERNESTINE VOSS-ADEBAYO
* 1 A ¶ A narrow cinderblock booth split by a thick pane of scratched glass.
* 2 A A steel counter on either side, a black wall phone on each.
* 3 A Fluorescent hum.
* 4 A A clock on the wall behind the prisoner's side reads 2:14.
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

### SCENE s02118 | INT. DENTAL CAR - MOBILE CLINIC TRAIN - NIGHT
Detected names (may be incomplete or contain aliases): PERPETUA ACHTERBERG-NWOSU, MARISOL TEAGUE-ROY, WOMAN, DESMOND, DR. ACHTERBERG, MRS. OKONKWO-BELL
* 1 A ¶ A converted railway carriage fitted with a reclining dental chair, a tray of instruments, and a hanging lamp.
* 2 A Rails clatter below.
* 3 A A window frames the black countryside.
* 4 A Through it, scattered farm lights wink by.
5 A ¶ DR. PERPETUA ACHTERBERG-NWOSU, 50s, in surgical mask and visor, leans over a patient in the chair.
6 A Her hygienist, MARISOL TEAGUE-ROY, 30s, holds the suction.
7 A In the corner, the patient's mother, a WOMAN in a gray coat, clutches a purse.
8 A The patient, a small boy named DESMOND, 7, grips the armrests, eyes squeezed shut.
9 D DR. ACHTERBERG: Open wide for me, Desmond.
10 D DESMOND (muffled): Is it going to hurt?
11 D DR. ACHTERBERG: It's going to pinch. Pinch is not hurt.
12 D DESMOND: It's hurt with a nicer name.
13 D DR. ACHTERBERG: You're very smart.
14 D MARISOL: Suction ready.
15 D DR. ACHTERBERG: Thank you. She says it's ready, you hear that?
16 D DESMOND: I heard.
* 17 A ¶ The train rounds a bend.
18 A The instrument tray slides and Marisol catches it with one hand.
19 D WOMAN: Is it a cavity?
20 D DR. ACHTERBERG: Two. And a baby tooth that's refusing to leave.
21 D WOMAN: My husband had one like that.
22 D DR. ACHTERBERG: Refusing to leave?
23 D WOMAN: Don't get me started.
24 D MARISOL: Doctor, she's slid a note under the door. The conductor's.
25 D DR. ACHTERBERG: Tell her I'm elbow-deep in a seven-year-old.
26 D MARISOL: It says it's urgent.
27 D DR. ACHTERBERG: It's always urgent. Hold his jaw.
28 D MARISOL: Holding.
29 A ¶ Dr. Achterberg crosses to the door, picks the note off the floor, and reads it.
30 A She returns with her mask pulled down.
31 D DR. ACHTERBERG [CONT'D]: Marisol, finish up. Mrs. Okonkwo-Bell, I'll need you in the next carriage.
32 D WOMAN: Why?
33 D DR. ACHTERBERG: The note says your husband is on this train.
* 34 A ¶ A silence.
35 A The boy opens one eye.
36 D DESMOND: Mom? Is Dad here?
37 D MRS. OKONKWO-BELL (very still): No.
38 D DR. ACHTERBERG: Then we have a problem.
39 D MRS. OKONKWO-BELL: Doctor, I haven't seen him in three years.
40 D DR. ACHTERBERG: He bought a ticket in your name.
41 D MRS. OKONKWO-BELL: That's impossible.
42 A ¶ Marisol removes the suction.
43 A Desmond sits up.
44 A The woman in the gray coat stands, clutching her purse, and faces the door.

### SCENE s02119 | INT. CABLE CAR - HIGH ALPINE SPAN - NIGHT
Detected names (may be incomplete or contain aliases): LENA VASSILIOU, MILOS FERRANTE-OKORO
* 1 A ¶ A glass gondola hanging motionless over a black gorge.
* 2 A Two benches face each other.
* 3 A The cable creaks.
* 4 A Wind howls.
* 5 A A single emergency lamp glows orange.
6 A ¶ LENA VASSILIOU, 30s, in a wool coat, sits on the downhill bench, one hand gripping the rail, the other pressed flat on a leather briefcase in her lap.
7 A Across from her sits MILOS FERRANTE-OKORO, 40s, in an overcoat, knees bouncing, a thin smile on his face.
8 A ¶ Neither has spoken since the car stopped.
9 A Lena stares at the cable.
10 A Milos stares at the briefcase.
11 D MILOS: It's a long way down, Lena.
12 D LENA: I know how far it is, Milos.
13 A ¶ He reaches for the briefcase.
14 A She pulls it back.
15 A He stops with his hand halfway, and then leans back with elaborate calm and crosses his legs.
* 16 A The gondola sways.
17 A Lena shifts her grip.
* 18 A A button on his coat catches the lamp and flashes.
19 A Milos looks out the window, hums three bars of something, and glances at her again.
20 A Lena watches his hands.
21 A His fingers drum on his knee, one, two, one, two.
22 A She counts the beat.
23 D LENA [CONT'D]: They'll restart the motor soon.
24 D MILOS: They'll restart it when I tell them.
25 D LENA: You can't tell them from here.
26 D MILOS: Can't I?
27 A ¶ He lifts his sleeve and taps his watch.
* 28 A A tiny red light blinks on its face.
29 A Lena goes still.
30 D LENA: How long?
31 D MILOS: Ten minutes, Lena.
32 D LENA: Then you'd better take the case.
33 A ¶ She lifts it and holds it out across the gap.
34 A Milos looks at it for a long time, then at her, then at the case.
35 A He does not take it.

### SCENE s02120 | INT. DROWNED BELL TOWER - BENEATH BLACKMERE LAKE - NIGHT
Detected names (may be incomplete or contain aliases): ORIN VESK, KESTREL AMBROSE, TUPPENNY, LAKE-WIFE
* 1 A ¶ Air pocket in the belfry.
* 2 A Green light.
* 3 A Water slapping the stairs.
4 A ¶ ORIN VESK, 60, salt-white beard, saws at the bell rope with a fishing knife.
5 A KESTREL AMBROSE, 20s, bandaged hands, hauls a sack of silver up the last dry step, TUPPENNY, 9, barefoot and bone-pale, hugs the bronze clapper and hums, and the stair they stood on a breath ago slides under the black water.
6 D KESTREL: Leave the silver, Orin.
7 D ORIN: Leave it and she follows us up.
8 D TUPPENNY: She follows us anyway.
9 D LAKE-WIFE [O.S.]: Give me back my bell, little thief.
10 D KESTREL: Sweetest voice I ever heard for a drowning.
11 D ORIN: Don't answer her.
12 D KESTREL: I wasn't going to.
13 D ORIN: You were.
14 D ORIN: Cut the rope!
15 D KESTREL: Ring the bell!
* 16 A ¶ The bell booms once.
* 17 A The water shudders, flattens, goes glass.
18 A ¶ Orin drops the knife.
19 A Kestrel lets go of the sack.
20 A Tuppenny stops humming.

### SCENE s02121 | EXT. COUNTY FAIR - FERRIS WHEEL, TOP GONDOLA - DUSK
Detected names (may be incomplete or contain aliases): DELPHINE OKAFOR, ZURI, BIBI, PAPA EMEKA, HANK
* 1 A ¶ The wheel has stopped.
* 2 A Forty feet up.
* 3 A The gondola rocks.
* 4 A Far below, a corn dog stand glows.
5 A ¶ DELPHINE OKAFOR, 40s, nurse's scrubs under a cardigan, grips the safety bar.
6 A Across from her sit her daughters, ZURI, 14, braces and a cracked phone, and BIBI, 6, tiger face paint half smeared.
7 A Beside Delphine sits her father, PAPA EMEKA, 70s, Sunday hat, calm as stone.
8 D ZURI: Mom, we've been stuck for twenty minutes.
9 D DELPHINE: I know, Zuri. Stay in your seat.
10 D BIBI: Zuri's phone is shaking.
11 D ZURI: My hand is shaking, Bibi. The phone is fine.
12 D PAPA EMEKA: Bibi, come sit by Papa. Look at the lights, not the ground.
13 D BIBI: I want to look at the ground.
14 D DELPHINE: Bibi. Seat.
* 15 A ¶ The gondola sways.
16 A Zuri grabs Bibi's wrist.
17 A She pulls her close and she squeezes back hard.
18 D HANK [O.S.] (over the loudspeaker): Folks, generator tripped. Sit tight, we're rebooting.
19 D ZURI: Rebooting? Papa, he said rebooting.
20 D PAPA EMEKA: Zuri, I once rode a lorry across the Niger with no brakes. We will be fine.
21 D BIBI: Did Papa really do that, Mom?
22 D DELPHINE: Ask him when we are on the ground, baby.
23 D PAPA EMEKA: Delphine, take my hat. Your hands need something to hold.
24 A ¶ Delphine takes the hat.
25 A Turns it in her fingers.
26 D DELPHINE: Thank you, Papa.
* 27 A ¶ The wheel lurches.
28 A Everyone freezes.
* 29 A It holds.
30 D ZURI: Bibi, don't look down.
31 D BIBI: I'm looking at you, Zuri.
32 D HANK [O.S.] (over the loudspeaker): Almost there, Okafors!
33 D DELPHINE: He knows our name.
34 D PAPA EMEKA: Small town. Everybody knows everybody.

### SCENE s02122 | INT. BELL FOUNDRY - OCCUPIED TOWN - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT WOJCIECH NOWAK, CORPORAL ESTELLE ROUSSEAU, PRIVATE ANDERS HAUGEN
* 1 A ¶ A cathedral of soot.
* 2 A Cold casting pits.
* 3 A Molds like sleeping giants.
* 4 A Moonlight through broken skylights.
* 5 A ¶ Silence.
6 A ¶ SERGEANT WOJCIECH NOWAK, 40, boots wrapped in sacking, crouches by the great furnace door.
7 A Rifle low.
8 A Grey in his stubble.
9 A ¶ CORPORAL ESTELLE ROUSSEAU, 25, radio operator, frost on her eyelashes.
10 A Headset on.
11 A Pistol in her fist.
12 A ¶ PRIVATE ANDERS HAUGEN, 19, freckled, too tall for the crouch.
13 A He keeps swallowing.
* 14 A ¶ Wind.
* 15 A A loose chain taps a bell.
* 16 A Tick.
* 17 A Tick.
18 D NOWAK (whisper): Count them again.
19 D ROUSSEAU: Same as before. Six trucks. Engines off.
20 D HAUGEN: Why would they park here?
21 D NOWAK: Because they think we're dead.
22 A ¶ Nowak lifts two fingers.
23 A Haugen creeps to the window.
24 A Rousseau tunes the dial.
* 25 A Static.
* 26 A ¶ A boot crunches glass outside.
* 27 A Close.
28 A ¶ All three stop breathing.
29 D HAUGEN (barely audible): Sergeant.
30 D NOWAK: I hear it.
31 A ¶ A flashlight beam sweeps the molds.
* 32 A It stops on Haugen's shadow.
33 D ROUSSEAU (mouthing): Don't. Move.
* 34 A ¶ The beam holds.
* 35 A Holds.
* 36 A Moves on.
37 A ¶ Haugen exhales.
* 38 A Too loud.
* 39 A The chain stops tapping.
* 40 A ¶ Outside, doors slam.
* 41 A Engines cough alive.
42 D NOWAK: They know.
43 D ROUSSEAU: Radio's dead. No one is coming.
44 D NOWAK: Then we make noise before they do.
45 A ¶ He pulls a satchel charge from his pack.
46 A Looks at the great bell hanging above the furnace.
47 D HAUGEN: Sergeant, the bell. Everyone will hear.
48 D NOWAK: That's the idea.
49 A ¶ He slings the charge over the bell's crown.
50 A Lights the fuse.
51 A ¶ Rousseau and Haugen are already running.
52 A ¶ The foundry doors burst inward.
53 A Flashlights stab.
* 54 A ¶ The charge goes off.
* 55 A The bell shrieks.
* 56 A Fire floods the dark.

### SCENE s02123 | INT. MERIDIAN LOGISTICS - WELLNESS NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): GWEN, PRATT, TOBIAS LINDQVIST
* 1 A ¶ Six egg-shaped pods.
* 2 A Ambient whale music.
* 3 A A laminated sign reads "SYNERGY RECHARGE: 15 MIN MAX."
4 A ¶ GWENDOLYN "GWEN" PRATT, 40s, lanyard, tired eyes, sits on a pod with a laptop.
5 A TOBIAS LINDQVIST, 30s, quarter-zip, enters carrying a kombucha.
6 D TOBIAS: Gwen. Didn't know anyone used these.
7 D GWEN: I'm not napping. I'm hiding.
8 D TOBIAS: Same. Can I hide here too?
9 D GWEN: Pod four is warmer.
10 A ¶ He sits in pod four.
11 A Sips his kombucha.
12 D TOBIAS: Is the all-hands still at three?
13 D GWEN: It moved to four. Then back to three. Then it became a "pre-sync."
14 D TOBIAS: What do we pre-sync?
15 D GWEN: The post-sync.
16 D TOBIAS: Right.
* 17 A ¶ Beat.
* 18 A The whale music swells.
19 D TOBIAS [CONT'D]: Gwennie, did you read the memo about the memo?
20 D GWEN: I summarized it. Toby, it said please stop using the word "deliverable."
21 D TOBIAS: I'll circle back on that.
22 D GWEN: That's the word we're not supposed to say.
23 D TOBIAS: Which one?
24 D GWEN: All of them.
25 A ¶ He nods.
26 A Lies back in the pod.
27 A Closes his eyes.
28 D TOBIAS: Wake me at three.
29 D GWEN: It's three.
30 D TOBIAS: Wake me at four.
