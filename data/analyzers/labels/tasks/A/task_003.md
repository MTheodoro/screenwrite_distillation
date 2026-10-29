You are an experienced script supervisor annotating scenes for a continuity database. Work carefully, line by line.

## What to label

Each scene is given as numbered units. `A` = one sentence of action/description text (¶ marks the
first sentence of a paragraph). `D` = one dialogue block, shown as `NAME [extensions] (parenthetical): text`.

Produce one JSON object per scene:

{
  "scene_id": "<id>",
  "cast": {"<every character name variant used in the scene>": "<canonical name>", ...},
  "beats": [<unit numbers that START a beat, ascending; the first non-heading unit always starts one>],
  "lines": {
    "<n>": {"t": "A"|"D"|"S", "who": ["<canonical>", ...], "emo": {"<canonical>": ["<emotion>", <0-1>]}, "c": <0-1>},   // for A units
    "<n>": {"to": ["<canonical>"|"ALL"|"SELF"|"NONE", ...], "emo": ["<emotion>", <0-1>], "c": <0-1>}                     // for D units
  }
}

Rules:
- cast: map EVERY name variant (cue names, CAPS introductions, aliases like STRANGER -> INGRID once named,
  DET. RUIZ / RUIZ) to one canonical name per real person. Unnamed extras get a short canonical (e.g. "GUARD").
- Every A and D unit must appear in "lines" (skip the heading and transitions).
- A units, field t: "A" = a character does something (acts, moves, speaks-without-cue, reacts);
  "D" = a character is described (appearance, introduction, state) ; "S" = no character: setting, objects, sound,
  atmosphere. who = the character(s) performing the action or being described, as canonical names; empty for "S".
  Use several names only when they genuinely act jointly ("They fight", "Both freeze"). Resolve every pronoun.
  If the actor is a crowd or someone not in the cast, use "OTHER".
- D units: to = who the line is addressed to. "ALL" = the group, "SELF" = muttered/thinking aloud,
  "NONE" = no listener (e.g. pure voice-over narration). A phone/radio listener counts as a character.
- emo: emotion actually conveyed by the line's text, subtext, parenthetical or behaviour - not guessed from the
  plot. One of: neutral, joy, sadness, anger, fear, surprise, disgust, affection, with intensity 0-1
  (neutral -> 0-0.2). For A units give emo only for characters whose emotion the sentence shows; otherwise {}.
- c = your confidence that who/to is right (0-1). Be honest: ambiguous pronouns deserve low confidence.
- beats: a beat is the smallest unit in which something dramatically changes - an action, a reaction, a shift
  in tactic, a reveal, an entrance. A beat may be dialogue only, action only, or mixed, and may split an action
  paragraph. Typical beats are 1-8 units long.


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05081.json
### SCENE s05081 | INT. SELF-STORAGE FACILITY - UNIT 214 - NIGHT
Detected names (may be incomplete or contain aliases): TICKS, VESPER, OKAFOR, DEL
1 A ¶ A roll-up door, half raised.
2 A Cold light leaks under it.
3 A Somewhere down the corridor a vent TICKS, TICKS, stops, and the silence after it is worse, and VESPER crouches at a stack of boxes while OKAFOR holds a flashlight on a padlock and DEL stands at the door with his back to them, listening to the building.
4 D VESPER (sets down the bolt cutters, slow): Okafor. Light.
5 D OKAFOR (steadies the beam, whispers): It's on, Vesper. It's on.
6 D DEL (without turning): Something moved on the stairs.
7 D VESPER (freezes mid-reach): Del, it's a pipe. Say it's a pipe.
8 D DEL (a long pause): Okafor, kill the light.
9 D OKAFOR (clicks it off): 
10 A ¶ Dark.
11 D DEL (barely breathing): Nobody move.
12 D VESPER (a whisper, close to a laugh): We're not.
13 A ¶ Far down the hall, a door SHUTS.
14 A Soft.
15 A Careful.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05118_0.json
### SCENE s05118_0 | INT. HAPPY PAWS VET CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): AIDEN, SASHA, MARLON
1 A ¶ CLOSE ON a keypad.
2 A A gloved finger types four numbers.
3 A A light turns green.
4 A CLICK.
5 A ¶ The front door swings open.
6 A The clinic is dark and empty, except for the soft glow of a fish tank and a sleeping beagle in a cage.
7 A ¶ AIDEN, 20s, in a black hoodie, leads the way.
8 A Behind them comes SASHA, 20s, they/them, carrying a duffel bag, and MARLON, 30s, nervous, carrying a flashlight that he keeps pointing at his own face.
9 D AIDEN (whispering): Marlon, the light.
10 D MARLON: Sorry. Sorry.
11 A ¶ WE SEE the three of them cross the waiting room.
12 A Aiden checks a hand-drawn map.
13 A Sasha stops at the fish tank and taps the glass, and Marlon trips on a chew toy that SQUEAKS loudly, and the beagle lifts its head, and all three freeze.
14 A ¶ ANGLE ON the beagle.
15 A It looks at them.
16 A It yawns.
17 A It goes back to sleep.
18 D SASHA: They're not even mad.
19 D AIDEN: Good. The safe is in Dr. Okafor's office. Down the hall, second door.
20 D MARLON: Why would a vet clinic have a safe?
21 D AIDEN: Because Okafor keeps the old man's ring in it. The one worth sixty thousand dollars.
22 D SASHA: You mean the ring he's been telling everyone is his dead wife's.
23 D AIDEN: Which it isn't. He bought it from the jeweler's two weeks after she left him. I have the receipt.
24 D MARLON: So we're not stealing it. We're, like, returning it.
25 D SASHA: To who?
26 D MARLON: To the universe.
27 D SASHA: That is the worst plan I have ever heard, and I helped build the plan.
28 D AIDEN: Shh. Both of you.
29 A ¶ They move down the hall.
30 A Aiden pushes a door open, and Sasha slips inside.
31 A Marlon waits at the threshold with the flashlight pointing at the floor like a good boy.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05126.json
### SCENE s05126 | EXT. THE MARGARET ANN - NORTH SEA - DAY
Detected names (may be incomplete or contain aliases): SAL, JEN, MO, RO, BIG DAVE
1 A ¶ Grey water.
2 A Grey sky.
3 A Gulls.
4 A ¶ A restored 1890s sailing smack, brown sails patched, bobbing hard.
5 A The crew wear wool jerseys and oilskins of the period, a living-history charter for tourists.
6 A ¶ SAL, 60, skipper, white beard, stands at the tiller.
7 A Weather in every wrinkle.
8 A ¶ JEN, 25, pulls a net hand over hand.
9 A MO, 19, coils rope badly.
10 A ¶ Between them, near the mast, a WOMAN sits on an upturned crate.
11 A Mid-30s.
12 A A city coat, no oilskin.
13 A Dry shoes.
14 A She watches the horizon like she's counting something.
15 A ¶ Spray.
16 D JEN (to Mo): Not like that. Over, under.
17 D MO: That's what I did.
18 D JEN: It's not.
19 A ¶ Mo tries again.
20 A Worse.
21 D SAL: Leave him, Jen. Sea'll teach him.
22 D JEN: Sea'll drown him.
23 D SAL: Same lesson.
24 A ¶ The Woman almost smiles.
25 A ¶ Wind.
26 A Canvas SNAPS.
27 D SAL [CONT'D] (to the Woman): You'll want to move, miss. Boom's coming round.
28 D THE WOMAN: I'm fine.
29 D SAL: You're not.
30 A ¶ She doesn't move.
31 A ¶ Silence.
32 A ¶ A gull.
33 A Then another.
34 A ¶ The boom swings.
35 A Fast.
36 A ¶ Jen dives.
37 A Catches the Woman by the collar.
38 A They roll across the deck.
39 A ¶ The boom sails over, an inch above.
40 A ¶ Quiet.
41 A Everyone breathing.
42 D JEN (shaking): Are you out of your mind?
43 D THE WOMAN (flat): Probably.
44 A ¶ Sal lashes the boom.
45 A Hard hands, hard face.
46 D SAL: What's your name, miss?
47 D THE WOMAN: Ro.
48 D SAL: Rosalind?
49 D RO: Just Ro.
50 D MO (staring): You weren't scared.
51 D RO: I was.
52 A ¶ Another engine, from behind the fog.
53 A ¶ Out of the mist comes a harbour patrol launch.
54 A At the rail, BIG DAVE, 50s, enormous in a yellow slicker, peaked cap, a clipboard in a fist like a shovel.
55 D BIG DAVE (through a megaphone): Margaret Ann! Permit check!
56 D SAL (muttering): Of course.
57 A ¶ Big Dave looks across the water.
58 A Finds Ro.
59 A His expression softens.
60 D BIG DAVE (not on the megaphone): Rosalind. Your mother's been calling the harbour all morning.
61 A ¶ Ro closes her eyes.
62 D JEN (to Ro, quietly): Your mother?
63 D RO: I wanted to see where she grew up.
64 A ¶ Mo goes back to his rope.
65 A Over, under.
66 A Right this time.
67 A ¶ Rain begins.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05034.json
### SCENE s05034 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): NARRATOR, LORETTA, DEV, PRIYA, OSWALD, THE TALL MAN, DRIPPING YELLOW SLICKER
1 A ¶ Fluorescent light, a dozen washers turning slow, lukewarm steam on the windows.
2 A Four people wait out their cycles.
3 D NARRATOR [V.O.]: This is the last time they will all be in the same room, though none of them knows it yet.
4 D LORETTA (folding a pillowcase, humming): My mother said never wash a dead man's shirts. I said, Ma, they're only shirts.
5 D DEV (not looking up from his phone, thumbing a message): Cheap soap makes more suds. Doesn't make it clean.
6 D PRIYA (holding a hot towel to her cheek, watching the door): Who's the guy outside? He's been standing by the bins for twenty minutes.
7 D OSWALD (stirring a paper cup of coffee, shrugging): Waiting on a dryer, probably. Everybody waits on something.
8 A ¶ The bell over the door jingles.
9 A A TALL MAN IN A DRIPPING YELLOW SLICKER steps in, carrying a laundry bag that is much too heavy and much too still.
10 D NARRATOR [V.O.]: Calm lasts exactly as long as the first drip hitting the tile.
11 D THE TALL MAN (setting the bag down gently, smiling): Evening. Any machines free? I've a bit of a mess to wash.
12 A ¶ The bag shifts.
13 A Nobody says a word.
14 A Every washer in the room stops spinning at once.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05171_0.json
### SCENE s05171_0 | EXT. CIVIC PLAZA - CLIMATE MARCH - DAY
Detected names (may be incomplete or contain aliases): RENA, BEA, PROTESTERS
1 A ¶ A river of cardboard signs.
2 A Drums.
3 A A bullhorn SQUEALS and dies.
4 D RENA [V.O.]: Three thousand people, one bank across the square, and nobody looking at the loading dock. That's the whole trick. Be loud somewhere else.
5 A ¶ RENA (30s, green vest, laminated MARSHAL badge) walks against the crowd, while BEA (20s, same vest, clipboard) cuts through the PROTESTERS ahead of her, a backpack riding high on her shoulders, and above them both a banner reading THERE IS NO PLANET B snaps in the wind as a helicopter's rotor THUMPS somewhere over the glass towers.
6 D PROTESTERS (chanting): Pay for it! Pay for it! Pay for it!
7 A ¶ Rena catches up.
8 A Bea doesn't slow.
9 D RENA: You're early.
10 D BEA: You're late. She said two-ten.
11 D RENA: She said two-fifteen.
12 D BEA: She said whatever gets us paid.
13 A ¶ A cardboard polar bear bobs between them.
14 A Bea ducks it.
15 A Rena doesn't.
16 D RENA [V.O.]: Bea never trusted a plan she didn't write. Which was fair. She wrote this one.
17 A ¶ A whistle SHRIEKS.
18 A Police on bikes line the east side of the plaza.
19 A Bea steers Rena by the elbow toward the alley behind the bank.
20 D BEA: Badge.
21 D RENA: On.
22 D BEA: Truck?
23 D RENA: Ten minutes out. She's driving.
24 A ¶ Bea stops short.
25 A Stares at her.
26 D BEA: She's driving? She said she'd be here.
27 D RENA: She's here. I mean she's close. She's in the truck. Bea, she's fine.
28 D PROTESTERS (chanting, louder): Pay for it! Pay for it!
29 A ¶ A speaker on the stage starts a speech.
30 A The crowd ROARS.
31 A Bea uses the noise and cracks the service gate with a bolt cutter.
32 A The lock CLANKS onto the pavement.
33 D BEA: Then she's late and she's here. Pick one.
34 D RENA [V.O.]: Forty seconds to the dock. Four minutes inside. Everybody on that square would remember the speech and nobody the van.
35 A ¶ They slip through.
36 A The gate CLANGS shut behind them.
37 A The chanting drops to a muffled pulse.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05049.json
### SCENE s05049 | EXT. DUSTY CROSSROADS - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): BRISKET, INSIDE, SADIE KROLL, CLETUS, MARSHAL REEVES, JOLENE
1 A ¶ A weathered truck painted "BEANS & BRISKET - SINCE YESTERDAY" squats in the sun.
2 A Heat shimmers.
3 A A line of two teenagers in cowboy hats waits at the window while a mangy dog sleeps under the awning.
4 A ¶ INSIDE, SADIE KROLL, 40s, cook, jaw like a knuckle, slaps patties on the flat-top.
5 A Her brother-in-law CLETUS, 50s, leans on the counter pretending to count money.
6 A At the window, a stranger in a long duster, MARSHAL REEVES, 60s, sets down his hat.
7 A And in the corner, her teenage niece JOLENE, 17, wipes a spoon and watches everything.
8 A ¶ CLOSE ON Reeves's badge, half hidden under the duster.
9 D REEVES: Two plates. And a word with Cletus.
10 D CLETUS (laughing too loud): Marshal! Long way from town.
11 D SADIE (not turning from the grill): He's not here for beans, Cletus.
12 A ¶ The dog LIFTS its head.
13 A A screen door SLAMS in the distance.
14 D REEVES (quietly): Where's the payroll box, Cletus?
15 A ¶ ANGLE ON Jolene's hand sliding a cleaver off the shelf.
16 D JOLENE: Uncle Cletus, he's got a warrant folded in his boot.
17 D CLETUS (whispering): Jolene, put that down.
18 D SADIE (spinning around with a spatula held like a pistol): Nobody's cutting anybody. Marshal, sit. Eat. Then we'll talk.
19 D REEVES (tipping his hat back, almost smiling): Sadie, you've never once made it easy.
20 A ¶ BACK TO SCENE: the two teenagers bolt, the dog barks, a plate of brisket hits the dirt, and somewhere in the truck a timer DINGS.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05030.json
### SCENE s05030 | INT. DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, TEO
1 A ¶ Rain drums on the corrugated roof.
2 A Somewhere a forklift beeps, backing up, backing up, never arriving.
3 A ¶ Sodium light buzzes over the sorting belt.
4 A Parcels slide past, unclaimed.
5 A ¶ He stands at the belt with a scanner, eighteen, new vest still creased.
6 A She watches him from the mezzanine stairs and does not come down.
7 D THE WOMAN: Seven weeks. That's what the last kid lasted. Seven weeks, and he cried in the van park like it was a funeral. You want to know what I told him?
8 D TEO (beat): Not really.
9 D THE WOMAN: I told him the belt doesn't care. That's the whole job. It doesn't care that your mother's sick, or that you wanted to be a drummer, or that you're clever. It just keeps coming, and the only thing you get to decide is whether you flinch.
10 A ¶ Water finds a gap in the roof and ticks into a bucket.
11 A Nobody has emptied the bucket in a long time.
12 A ¶ He lifts a parcel, scans it, sets it down.
13 A His hands are shaking.
14 A He does it again anyway.
15 D TEO: You didn't say your name.
16 D THE WOMAN (beat): Marguerite. Nobody uses it. Scan the next one.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05145.json
### SCENE s05145 | INT. RIVERSIDE BANQUET HALL - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, GWEN, ASH
1 A ¶ Streamers.
2 A Half-eaten cake.
3 A A DJ booth abandoned mid-song.
4 A The last guests have gone.
5 A Two people remain.
6 A ¶ Gwen, 30s, in a bridesmaid dress and one shoe, drags a folding chair into the middle of the floor and drops onto it like she's been shot.
7 D GWEN: Best. Wedding. Ever.
8 A ¶ The side door SLAMS open.
9 A Ash, 30s, they/them, enters in a velvet blazer, holding a tray of leftover champagne flutes like a waiter at a very strange restaurant.
10 D ASH: You did not say that during the toast.
11 D GWEN: During the toast I was holding in a sneeze and a sob.
12 D ASH (setting down the tray): Same thing, honestly.
13 A ¶ Gwen grabs a flute.
14 A Ash takes one.
15 A They clink.
16 A Neither drinks.
17 D GWEN: Okay. Real talk. Did you see the groom's uncle?
18 D ASH: The one who made the toast to "his many wives"?
19 D GWEN: He has one wife.
20 D ASH: Then he's very ambitious.
21 A ¶ Gwen cracks up.
22 A Ash pretends not to be pleased.
23 D GWEN: You're good at this, you know that? Making people feel like they're not at a funeral.
24 D ASH: They are at a funeral. It's just a really good one.
25 A ¶ The overhead speaker CRACKLES.
26 A A distant voice, faint and metallic, comes through the PA.
27 D DJ [V.O.] (over speaker): Hey, uh, last song's still queued up. Should I play it?
28 D GWEN (to the ceiling): What song?
29 D DJ [V.O.]: It's, uh... it's labeled "DO NOT PLAY."
30 A ¶ Gwen and Ash exchange a look.
31 D ASH: Obviously play it.
32 D GWEN: Ash, no.
33 D ASH: Gwen. Yes.
34 A ¶ The speakers hum.
35 A A single piano note.
36 A Another.
37 A Then a voice, a woman's voice, soft, singing in a language neither of them knows.
38 A ¶ The room goes still.
39 A The streamers stop swaying.
40 A The candles on the tables light themselves, one by one, in a perfect ring around the dance floor.
41 D GWEN (whispering): Please tell me that's the DJ's idea of a joke.
42 D ASH (not joking): The DJ left at ten.
43 D DJ [V.O.] (over speaker, shaking): Guys... I'm still in the booth. I didn't press anything.
44 A ¶ The door at the end of the hall SWINGS open on its own.
45 A A figure in a long pale dress stands there, face hidden, hands folded in front like a bride.
46 D GWEN (small): Is that... is that Priya's grandmother?
47 D ASH: Priya's grandmother died in March.
48 D GWEN: So that's a no.
49 A ¶ The figure takes one step.
50 A The candles all lean toward it.
51 D ASH (very calm): Okay. New plan.
52 D GWEN: I love a new plan.
53 D ASH: We run.
54 D GWEN: Oh, I love that plan.
55 A ¶ They bolt for the exit together.
56 A The side door SLAMS shut behind them.
57 A The song swells.
58 A ¶ The figure lifts its veil.
59 A ¶ Underneath, grinning, is the DJ.
60 D DJ (lowering the headset): Gotcha.
61 D DJ [V.O., CONT'D] (over speaker, offended): Hey! That's my line.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05014.json
### SCENE s05014 | INT. LUMEN NAIL BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): NORA, THE WOMAN, VIVIAN, THE TWINS, DEV, ILSA
1 A ¶ The salon smells of acetone and jasmine, and under that of something else, something nobody in the room has named yet; the dryers hum in a steady chord, the television above the pedicure chairs plays a cooking show on mute, and at the third station a woman in a grey hoodie sits with both hands flat on the table as though she were waiting for them to be read.
2 D NORA (filing, not looking up): Any plans for the weekend, hon?
3 D THE WOMAN (voice flat, eyes on the window): Not really. Maybe visit my sister. She lives out past the reservoir.
4 D NORA (brightly): Oh that's nice. Family is everything.
5 D THE WOMAN (beat): Is it.
6 A ¶ Nora glances up.
7 A Behind the counter, VIVIAN rings up a customer, tucking a stray lock behind her ear, and at the far chair THE TWINS, identical in matching pink smocks, murmur to each other in a rhythm too even to be conversation.
8 D THE TWINS (together, softly): Do you smell it? Do you smell it?
9 D VIVIAN (not turning, counting change): Girls, enough with the perfume jokes.
10 D THE TWINS (together): Not perfume.
11 D NORA (forcing a laugh): They get like this when it rains. Ignore them.
12 D THE WOMAN (finally looking at Nora): It's not raining.
13 A ¶ A silence.
14 A The cooking show on the television flickers, goes to static, comes back.
15 A In the corner, DEV the new tech, who has been sweeping the same square of floor for ten minutes, stops.
16 D DEV (low, to Vivian): The wifi's dropped again. And the card reader. Everything just--
17 D VIVIAN (sharply, not turning): Dev. Floor.
18 D DEV (obeying, quieter): Sorry. Sorry.
19 D NORA (trying again, painting a clear coat): So, what do you do, hon? For work?
20 D THE WOMAN (a thin smile): I count things. How many people, how many exits. How long the lights stay on.
21 D NORA (her brush stilling): That's a strange job.
22 D THE WOMAN (beat): It's a strange week.
23 A ¶ The Twins stop murmuring.
24 A Both rise from their chairs at the same instant, smocks rustling, and the room tilts toward them.
25 D THE TWINS (together, calm): She is early.
26 D VIVIAN (finally turning, color draining): Who is early?
27 D THE TWINS (together, pointing at the hoodie): Her. She was not supposed to come until Thursday.
28 D NORA (whispering, to the woman): Hon, what are they talking about?
29 D THE WOMAN (pushing back her hood to reveal pale, almost translucent skin): My name is Ilsa. And I am so sorry. I wanted one last manicure before the end.
30 D DEV (dropping the broom): The end of what?
31 D ILSA (rising, her hands beginning to glow faintly under the dryer lamps): Of this. All of it. They said you'd want to know.
32 D VIVIAN (very quiet): Nobody here asked.
33 D ILSA (gently): Nobody ever does.
34 A ¶ The television goes black.
35 A Every dryer in the salon stops at once, and in the sudden quiet a single drop of polish falls from Nora's brush and rings against the tabletop like a bell.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05105.json
### SCENE s05105 | INT. HOLLOWAY FERTILITY CLINIC - CONSULT ROOM - DAY
Detected names (may be incomplete or contain aliases): DR. HAQ, DANA, WES
1 A ¶ ON CAMERA: handheld, a crew of one.
2 A A consult room, beige, a poster of a cross-section nobody asked for.
3 A Dana, 30s, sits on the exam bench with a paper gown over her jeans, thumbs hovering over her phone.
4 A Dr. Imran Haq, 50s, tablet in hand, takes the stool in front of her.
5 D DR. HAQ: Dana, before we start, you're fine with the camera?
6 D DANA: Wes thinks it's a bad idea. Wes thinks everything is a bad idea this month.
7 D DR. HAQ: Understood. We can stop at any point.
8 A ¶ Dana's phone buzzes.
9 A We see the screen.
10 A ¶ ON PHONE: where r u
11 A ¶ ON PHONE: is it done yet
12 A ¶ ON PHONE: call me
13 D DANA: He's in the parking lot. He wouldn't come in.
14 D DR. HAQ: Would you like to call him?
15 D DANA (beat): Put him on speaker. Maybe he'll listen to you.
16 A ¶ She dials.
17 A It rings twice.
18 D WES [V.O.]: Hey. Hey. Is the doctor there? Can he hear me?
19 D DR. HAQ: I can hear you, Wes. I'm going to share the results with Dana, and I'd like you to hear them too.
20 D WES [V.O.]: Fine. Just say it fast.
21 D DR. HAQ: The third cycle did not take. I'm sorry.
22 D DANA: It's fine.
23 D WES [V.O.]: It's not fine, Dana.
24 D DANA (smiling, brittle): It's fine, Wes.
25 A ¶ Dr. Haq glances at the camera, then away.
26 D DR. HAQ: There is a fourth option. A different protocol. But you should know the odds are lower, and the cost is not small, and I would never push you either way.
27 D DANA: You're not pushing.
28 D WES [V.O.]: You are pushing, though, kind of, I mean the whole place is a push.
29 D DANA: Wes, I'm going to hang up now.
30 D DR. HAQ: Dana, take a moment.
31 D DANA: I don't need a moment. I need him to stop talking.
32 D WES [V.O.]: I'm just saying we already spent
33 D DANA: I know what we spent.
34 A ¶ She ends the call.
35 A Silence.
36 A The poster hums its bright pink hum.
37 A Dana looks into the lens for the first time.
38 D DANA [CONT'D]: You can put that in the film.
39 D DR. HAQ: Let's talk about the fourth option.
40 D DANA: Okay.
41 A ¶ Her phone buzzes once more.
42 A She does not look.
43 A A new message sits on the dark screen.
44 A ¶ ON PHONE: sorry. im coming in
