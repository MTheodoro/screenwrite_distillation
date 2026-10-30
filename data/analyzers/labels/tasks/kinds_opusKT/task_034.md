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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0034.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01048 | INT. KRVX 91.3 FM - RURAL RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): DEE-DEE HARGROVE, ROLAND TIBBETTS, CAL PINKERTON, CALLER
* 1 A ¶ A cinderblock studio in a cornfield.
* 2 A Foam-padded walls, a mixing board with taped-over knobs, a window onto the black field.
* 3 A A red ON AIR light burns.
4 A ¶ DEE-DEE HARGROVE, 40s, headphones, cardigan, a thermos of tea, sits at the console.
5 A She speaks into the mic in the voice of a lifelong friend.
6 D DEE-DEE: That was Patsy Cline, and you're listening to Night Owls on KRVX. Four a.m. in Calloway County. Roads are clear and the corn is quiet.
7 A ¶ She flicks a switch.
* 8 A Music slides in.
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
* 24 A ¶ The studio phone blinks.
25 A Dee-Dee pushes a button.
26 A Her mic opens to the caller, softly.
27 D DEE-DEE: KRVX, you're on the air.
* 28 A ¶ A pause.
* 29 A Static, then a thin voice, dry as paper.
30 D CALLER [V.O.]: Hello. I'd like to hear "Wild Horses."
31 D DEE-DEE: Of course. Is it for someone?
32 D CALLER [V.O.]: For the three of you.
33 A ¶ Dee-Dee looks up.
34 A Roland stops chewing.
35 A Cal looks at the window.
36 D DEE-DEE: That's very kind. May I ask your name?
37 D CALLER [V.O.]: You can see me.
38 A ¶ Out in the black field, a single flashlight clicks on.
* 39 A It points toward the studio.
* 40 A It does not move.
41 A ¶ Cal steps to the glass.
42 A Roland stands, sandwich forgotten.
43 A Dee-Dee keeps her voice steady.
44 D DEE-DEE [CONT'D] (into mic): Here's that request, folks.
45 A ¶ She slides the fader.
* 46 A The song begins.
* 47 A In the field, the flashlight goes out.

### SCENE s01049 | INT. JURY ROOM - FLOODLIT TENT - NIGHT
Detected names (may be incomplete or contain aliases): GLORIA ACHTERBERG, DEEZ, PRUITT, MIN-JUN HAN
* 1 A ¶ A federal courthouse flattened by a hurricane, so the court sits in a canvas tent on the parking lot.
* 2 A Folding table, plastic chairs, a single fan.
* 3 A Generator thrum outside.
* 4 A Rain on the roof.
5 A ¶ GLORIA ACHTERBERG, 60s, foreperson, cardigan, a stack of index cards in front of her.
6 A DWAYNE "DEEZ" PRUITT, 30s, ball cap, sits arms crossed.
7 A MIN-JUN HAN, 40s, nurse, kneads her temples.
8 D GLORIA (to the room): Let's take another vote. All in favor of conviction.
9 A ¶ Deez doesn't raise his hand.
10 A Min-Jun hesitates.
11 A Gloria raises hers.
12 D GLORIA [CONT'D]: One.
13 D MIN-JUN: Gloria, I'm not sure--
14 D GLORIA: You said yesterday you were.
15 D MIN-JUN: I said I leaned.
16 D DEEZ: I never leaned.
17 D GLORIA: Deez, with respect, you haven't opened your mouth in two days.
18 D DEEZ: I'm saving it.
19 D GLORIA: For what?
20 D DEEZ: For when it matters.
21 A ¶ He stands.
* 22 A The chair scrapes.
23 A He crosses to a pitcher, pours water, drinks.
24 A Then, without warning, he slams the cup down.
25 D DEEZ [CONT'D] (to himself): Twelve men on a bench and none of them looked at the kid.
26 D MIN-JUN: Deez?
27 D DEEZ: You heard me.
28 D GLORIA: We are not here to rehash the trial.
29 D DEEZ: Gloria, he's nineteen. He had a record of one parking ticket.
30 D GLORIA: He had a gun.
31 D DEEZ: He had a toy.
32 D GLORIA: The witness said it was real.
33 D DEEZ: The witness was a hundred yards away in the dark.
34 A ¶ Min-Jun rises, steps between them, hands out.
35 D MIN-JUN: Stop. Both of you.
36 D DEEZ: She keeps calling it a verdict. It's a guess.
37 D GLORIA: You think I haven't been losing sleep?
38 D DEEZ: I think you made up your mind on day one.
39 A ¶ Gloria slaps her cards down.
* 40 A They fan across the table.
41 A Deez knocks them to the floor with the back of his hand.
42 A Min-Jun snatches one before it's lost.
43 D MIN-JUN: Enough! We have to be unanimous!
44 D DEEZ: Then we're not leaving this tent.
45 D GLORIA (very quiet): Then we're not leaving.
* 46 A ¶ The generator coughs.
* 47 A The lights flicker.
48 A All three look up.
* 49 A The fan slows to a stop.
50 A ¶ In the dark, no one moves.

### SCENE s01050 | INT. CAR WASH TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS FERRERA
* 1 A ¶ Dark.
* 2 A Foam sluices over the windshield.
* 3 A Spinning brushes.
* 4 A Sodium light bleeds through soap in slow orange waves.
5 A ¶ ODALYS FERRERA, 40s, sits behind the wheel of a dented sedan, both hands on ten and two.
6 A Funeral dress.
7 A Hair still pinned.
8 D ODALYS [V.O.]: Forty-one years. He never once washed the car.
* 9 A ¶ The brushes slap the roof.
10 A She doesn't flinch.
11 D ODALYS [V.O., CONT'D]: Said it would just get dirty again.
12 A ¶ She switches off the radio.
* 13 A The tunnel roars.
14 D ODALYS [V.O., CONT'D]: So I let it.
* 15 A ¶ Rinse arches fire.
* 16 A Water drums the glass.
17 A She leans her forehead on the wheel.
18 D ODALYS [V.O., CONT'D]: Now I'm paying six dollars to sit in here.
* 19 A ¶ The dryer blasts.
* 20 A The car shudders.
21 A She starts laughing.
22 A Then she stops.
23 A ¶ She puts the car in drive.
24 A Rolls into the light.

### SCENE s01051 | INT. HOLLOWAY CIDER MILL - PRESS ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNIPER HOLLOWAY, RHYS DOYLE, BEATA NOWAK, COLM, OLUWASEUN ADEYEMI
* 1 A ¶ A long timber barn that smells of fermenting apples and wet wood.
* 2 A Wooden presses with iron screws, barrels stacked to the rafters.
* 3 A A lantern on a hook sways in a draft nobody can find.
* 4 A Bees drowse in the beams, drunk on sugar, their hum a low drone.
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
* 17 A Juice runs into a trough, amber and slow.
* 18 A The sound is oddly soft.
19 D COLM: It sounds like someone breathing.
20 D BEATA: It's the cider, Colm.
21 D COLM: Not the cider. Under it.
22 A ¶ They go still.
* 23 A The juice drips.
* 24 A The bees hum.
* 25 A And beneath it all, a slow, wet inhale.
* 26 A Then an exhale.
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
* 37 A ¶ The lantern swings.
* 38 A Its light crosses Rhys's face, Beata's hands, Colm's eyes, Juniper's braid.
* 39 A The hum of bees thickens.
40 A ¶ Juniper lifts a ladle to her lips.
41 A Tastes.
42 A Her face doesn't change.
43 D JUNIPER [CONT'D] (to Colm): Put your harmonica down, love.
44 D COLM: I wasn't--
45 D JUNIPER: Now.
46 A ¶ He sets it on the barrel.
* 47 A It rolls an inch.
* 48 A Stops.
49 A ¶ Beata stops peeling.
50 A The ribbon of apple skin hangs, quivering, in her fingers.
51 D BEATA (softly): It's early.
52 D JUNIPER: It's early.
53 D OLUWASEUN: What is?
* 54 A ¶ The breathing quickens.
* 55 A The barrel under Colm shudders.
* 56 A The staves bulge, as if something inside is leaning out.
57 A ¶ All five freeze.
* 58 A The bees fall silent in the rafters.
59 A ¶ Then, in one motion, Rhys drops the broom, Beata drops the apple, Colm scrambles off the barrel, Oluwaseun stumbles backward over the trough, and Juniper turns calmly, takes a mallet from a hook, and faces the barrel as if she'd been expecting it since March.
60 D JUNIPER [CONT'D] (to all): Out. Quiet. Don't run.
61 A ¶ They go.
* 62 A Slowly.
63 A Colm last, looking back.
64 A ¶ Juniper steps to the barrel.
65 A Raises the mallet.
66 A Waits.
* 67 A ¶ The staves creak.
* 68 A The breath hitches.
69 A Waits with her.

### SCENE s01052 | INT. DEEP-SPACE SURVEY CAPSULE - SLEEP CYCLE
Detected names (may be incomplete or contain aliases): TAMARA OSEI
* 1 A ¶ A tube the size of a van.
* 2 A Cramped.
* 3 A Every surface a panel or a cabinet.
* 4 A A single porthole shows a pinhole star field, motionless.
5 A ¶ TAMARA OSEI, 40s, floats in a sleeping bag strapped to the wall.
6 A Her eyes are open.
7 A She hasn't slept.
8 A ¶ She unzips.
9 A Drifts to the console.
10 A Types a command with one finger.
* 11 A ¶ A soft chime.
* 12 A A woman's recorded voice, calm, from the speaker.
13 D TAMARA [V.O.] (recording): Day four hundred and twelve. All systems nominal. Crew morale: fine.
14 A ¶ She stops the playback.
15 A Her thumb stays on the button.
16 A ¶ She opens a locker.
17 A Takes out a small paper photograph, creased.
18 A Holds it to the light.
19 A Puts it back without looking.
20 A ¶ She types again.
* 21 A Another chime.
22 D TAMARA [V.O., CONT'D] (recording): Day four hundred and thirteen. All systems nominal. Crew morale: fine.
23 A ¶ She plays it again.
24 A And again.
* 25 A Same words, same tone, same breath in the same place.
26 A ¶ She sets the recorder down.
* 27 A It spins slowly, tumbling in the air.
28 A ¶ She presses her palm flat to the porthole.
* 29 A The glass is cold.
30 A Her breath fogs it.
31 A ¶ She wipes it with her sleeve.
* 32 A The stars come back.
33 A ¶ She presses record.
34 D TAMARA: Day four hundred and fourteen.
* 35 A ¶ A long pause.
36 D TAMARA [CONT'D]: All systems nominal.
37 A ¶ She doesn't say the rest.
38 A She turns the recorder off and floats there, hand still against the glass.

### SCENE s01053 | INT. AIR RAID WARDEN POST - SCHOOLYARD SHELTER - NIGHT (1941)
Detected names (may be incomplete or contain aliases): EDMUND HARTLEY, VERA PLUMMER, ALF DOBSON, CONTROL
* 1 A ¶ A concrete box dug under a playground.
* 2 A A hurricane lamp, a field telephone, a rack of tin helmets, sandbags to the ceiling.
* 3 A Muffled drone overhead.
4 A ¶ EDMUND HARTLEY, 50s, grocer by day, warden by night, white helmet, rests his hand on the phone.
5 A VERA PLUMMER, 20s, volunteer, clipboard and bicycle clips, sits on a crate with a mug of cocoa.
6 A ALF DOBSON, 60s, retired railwayman, hums a hymn to himself.
* 7 A ¶ The drone grows.
8 A Edmund glances at the ceiling.
9 D EDMUND: Mark it. Eleven forty.
10 D VERA: Marked.
11 D ALF (muttering): That's no Spitfire.
* 12 A ¶ The field telephone rings.
13 A Edmund snatches it.
14 D EDMUND: Post Seven.
15 D CONTROL [V.O.]: Post Seven, this is Control. Report.
16 D EDMUND: Nothing yet. Heard them over the canal.
17 D CONTROL [V.O.]: Hold position. Fire watch at the gasworks says they're dropping flares.
18 D EDMUND: Flares.
19 D CONTROL [V.O.]: Prepare for incendiaries.
20 A ¶ He hangs up.
21 A Looks at Vera and Alf.
22 D EDMUND [CONT'D]: Right. Helmets on. Buckets by the door.
23 A ¶ Vera sets down her cocoa.
24 A Alf rises, joints cracking.
25 D VERA: Mr. Hartley, shouldn't we stay below?
26 D EDMUND: Not for incendiaries.
27 D ALF: You'll want sand, not water.
28 D EDMUND: I know my business, Alf.
29 D ALF: Nobody said you didn't.
* 30 A ¶ A distant thud.
* 31 A Dust shivers from the ceiling.
* 32 A ¶ The phone rings again.
33 A Edmund picks up.
34 D CONTROL [V.O.]: Post Seven. Strike on the Albert Road. Third house from the corner.
35 A ¶ Edmund goes pale.
36 D EDMUND: That's my shop.
37 D CONTROL [V.O.]: Say again?
38 D EDMUND: That's my shop. That's my daughter's flat above it.
39 D CONTROL [V.O.]: Warden Hartley, stay at your post.
40 A ¶ He puts the phone down very carefully.
41 A Takes off his helmet.
42 A Puts it back on, tighter.
43 D VERA: Mr. Hartley--
44 D EDMUND: Vera. Take the register. Alf, you're with me.
45 D ALF: Aye.
46 D EDMUND: We're going up.
47 A ¶ He opens the door.
* 48 A Night, red and roaring, floods in.

### SCENE s01054 | INT. ROADSIDE MOTEL - ROOM 9 - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, PROPERTY LENA MARSH
* 1 A ¶ Pink bedspread.
* 2 A Wood-paneled walls.
* 3 A A TV bolted to the dresser, off.
* 4 A A lamp with a torn shade.
* 5 A Rain taps the window like fingertips.
6 A ¶ A WOMAN, 30s, wet raincoat, dark circles under her eyes, locks the door.
7 A Slides the chain.
8 A Pulls the curtains shut.
9 A She is alone, and she's checking the room the way a person checks who has already been surprised once.
10 A ¶ She opens the closet.
* 11 A Empty hangers.
* 12 A The bathroom.
* 13 A Empty tub.
* 14 A Under the bed.
* 15 A Dust, a lost sock.
16 A ¶ She sits on the edge of the bed and takes a small tape recorder from her bag.
17 A She presses RECORD.
18 D WOMAN (into recorder): Test. Test.
19 A ¶ She stops.
20 A Plays it back.
* 21 A Her own voice, tinny.
22 D WOMAN [V.O.] (tape): Test. Test.
23 A ¶ She nods.
24 A Records again.
25 D WOMAN: Day one. Motel off Route 9. Nobody followed me. I think.
26 A ¶ She stops the tape.
27 A Looks at the phone on the nightstand.
* 28 A Beige, rotary, curly cord.
29 A She picks up the receiver.
* 30 A Dial tone.
31 A She sets it back.
32 A ¶ She rewinds.
33 A Hits PLAY.
34 D WOMAN [V.O.] (tape): Day one. Motel off Route 9. Nobody followed me. I think.
* 35 A ¶ Then, after her recorded voice, the same voice again, lower, almost tender, saying words she never spoke:
36 D WOMAN [V.O.] (tape, whispering): I'm in the room.
37 A ¶ She freezes.
* 38 A The tape continues to hiss.
39 A ¶ She hits STOP.
40 A Her thumb shakes.
41 A She rewinds again, plays it again.
* 42 A The extra line is gone.
* 43 A Only the first.
44 D WOMAN (quietly): Okay.
45 A ¶ She sets the recorder on the dresser.
46 A Takes off her coat.
47 A Hangs it on the doorknob.
* 48 A A key tag drops from the pocket and clatters to the floor.
49 A She picks it up.
* 50 A The tag is stamped in hand-scratched letters: PROPERTY OF LENA MARSH.
51 A ¶ She turns it over, turns it back.
52 D LENA (to herself): Right. Right. I'm Lena.
53 A ¶ She says it as if reminding herself.
54 A She says it again.
55 D LENA [CONT'D]: Lena Marsh. Thirty-four. Dental hygienist. Born in Duluth.
56 A ¶ She reaches for the lamp.
57 A Clicks it off.
* 58 A The room is almost black.
* 59 A A glow leaks around the curtain edge.
* 60 A ¶ On the dresser, the recorder clicks on by itself.
* 61 A The tape reels turn.
62 D LENA [CONT'D]: No.
63 D LENA [V.O.] (tape): Lena.
64 A ¶ She backs against the wall.
65 D LENA: That's my voice.
66 D LENA [V.O.] (tape): You taped me yesterday. In the car.
67 D LENA: I wasn't in a car yesterday.
68 D LENA [V.O.] (tape): No. But you will be.
69 A ¶ She lunges.
70 A Grabs the recorder.
71 A Rips the cassette out.
72 A Throws it across the room.
* 73 A It hits the TV and cracks.
* 74 A ¶ Silence.
* 75 A Rain.
* 76 A Breath.
77 A ¶ She slides down the wall until she's sitting on the floor.
78 A She hugs her knees.
* 79 A ¶ From the bathroom: a click.
* 80 A A drip.
* 81 A Another click.
82 D LENA [CONT'D] (whispering): Please.
* 83 A ¶ The bathroom light snaps on by itself.
* 84 A A thin line of yellow slides under the door.
85 D LENA [CONT'D] (barely audible): Please don't.
* 86 A ¶ The doorknob turns on its own.
87 A ¶ She crawls to the bed.
88 A Under it.
* 89 A Dust, the lost sock.
90 A Her own hand finds the cracked cassette.
* 91 A ¶ The bathroom door creaks.
92 D LENA [V.O.] (from the cracked cassette, gentle): Day two.
93 A ¶ She presses the cassette to her chest.
94 A Doesn't breathe.
* 95 A ¶ The bathroom light hums.
* 96 A The cassette hisses against her chest.
97 D LENA [V.O., CONT'D]: Nobody followed me.
98 D LENA (a thread of voice): I know.
* 99 A ¶ The lamp clicks on.

### SCENE s01055 | INT. PHILOMENA'S KITCHEN - SUNDAY AFTERNOON
Detected names (may be incomplete or contain aliases): PHILOMENA ROSSETTI, ARTUR ROSSETTI, SOLEDAD
* 1 A ¶ A kitchen from another decade.
* 2 A Yellow linoleum, a table with a plastic cloth printed with lemons, a clock shaped like a rooster.
* 3 A On the stove, a pot of sauce simmers, spitting.
* 4 A Steam beads the windowpanes.
5 A ¶ PHILOMENA ROSSETTI, 80, sleeves pushed to the elbows, hair in a hairnet, stirs.
6 A Her hands are knotted like old rope.
7 A At the table, ARTUR ROSSETTI, 50s, her son, in a church shirt, slices bread with surgical care.
8 A His daughter SOLEDAD, 16, sits cross-legged on a chair, eyes on her phone, headphones around her neck.
9 D PHILOMENA: You never come on Sundays anymore.
10 D ARTUR: I come on Sundays, Ma.
11 D PHILOMENA: You come on the Sundays you remember.
12 D ARTUR: That's most of them.
13 D PHILOMENA: Most. Hmph.
14 A ¶ She tastes the sauce.
15 A Adds salt.
16 A Stirs.
17 D SOLEDAD: It smells good, Nonna.
18 D PHILOMENA: It smells like your grandfather's lies.
19 D SOLEDAD: What?
20 D PHILOMENA: He swore he could cook. He burned water.
21 D ARTUR: Ma, not today.
22 D PHILOMENA: Why not today?
23 D ARTUR: Because.
24 D PHILOMENA: Because what?
25 D ARTUR: Because it's Sunday.
26 A ¶ She snorts.
27 A Taps the spoon on the pot.
28 D PHILOMENA: You think I don't know why you've brought the child.
29 D ARTUR: Soledad's here because she wanted to see you.
30 D SOLEDAD: I did.
31 D PHILOMENA: You came to hold my hand while Arturo tells me something he has been practicing in the car.
32 D ARTUR: Ma.
33 D PHILOMENA: Tell me.
34 A ¶ Artur sets the knife down.
35 A Wipes his fingers.
36 A Looks at his daughter, who looks at her phone, pretending not to hear.
37 D ARTUR: The doctor called.
38 D PHILOMENA: Which doctor?
39 D ARTUR: The one with the results. For the house.
40 D PHILOMENA: The house is not sick.
41 D ARTUR: The house is not sick, Ma. You are.
* 42 A ¶ The clock ticks.
* 43 A The sauce pops.
44 A Philomena does not turn.
45 D PHILOMENA: I know that.
46 D ARTUR: You know?
47 D PHILOMENA: I am eighty. I have buried a husband, two brothers, and a dog named Salvatore. I know what a cough means.
48 D SOLEDAD: Nonna?
49 D PHILOMENA: Hush, cara.
50 D ARTUR: They want to put you somewhere. Just for a little while. Somewhere with nurses.
51 D PHILOMENA: Somewhere with nurses.
52 D ARTUR: Not forever.
53 D PHILOMENA: They never say forever. They say a little while.
54 D ARTUR: I didn't want to.
55 D PHILOMENA: You didn't want to tell me, or you didn't want to put me in a place?
56 D ARTUR: Both.
57 A ¶ She turns now.
58 A Her face is wet.
* 59 A It isn't steam.
60 A She wipes it on her sleeve.
61 D PHILOMENA: Sit with me. Both of you.
62 A ¶ They sit.
63 A She lifts the pot, spoons a bowl, sets it before Soledad.
64 D PHILOMENA [CONT'D]: Eat. It gets cold.
65 D SOLEDAD: I'm not hungry.
66 D PHILOMENA: You'll be hungry in a month. When I'm not here to feed you.
67 A ¶ She says it lightly.
* 68 A A joke.
69 A Nobody laughs.
70 D ARTUR: Ma. Please.
71 D PHILOMENA: Arturo. Your father's recipe. It's in the drawer, under the knives. Never in a book. I wrote it on the back of an electric bill.
72 D ARTUR: I know.
73 D PHILOMENA: You do not know. You think there is a secret ingredient. There isn't. There is only a woman standing here at four o'clock every Sunday for fifty-eight years.
74 A ¶ She sits.
75 A Folds her hands.
76 D PHILOMENA [CONT'D]: That's the ingredient. Now eat.
77 A ¶ Soledad takes a spoonful.
78 A Her face crumples.
79 A She keeps eating.
80 A ¶ Artur reaches across the lemons and takes his mother's hand.
* 81 A It is small and knotted and warm.
* 82 A ¶ The rooster clock ticks.
* 83 A On the stove, the sauce goes on simmering.

### SCENE s01056 | INT. SHUTTERED CAROUSEL PAVILION - ABANDONED AMUSEMENT PARK - NIGHT
Detected names (may be incomplete or contain aliases): DUCHESS, LAVALLE, BONES, SLIM POLLARD, PEARL
* 1 A ¶ Painted horses frozen mid-gallop, their gilt chipped.
* 2 A A pipe organ sags in the center.
* 3 A The roof leaks silver light.
4 A Five figures sit on the platform's edge, boots dangling.
5 A ¶ DUCHESS, 60s, tiny and elegant in a mink collar, taps a cane against a brass pole.
6 A MR. LAVALLE, 50s, dapper, pocket square, polishes a pair of rimless glasses.
7 A BONES, 30s, long and gaunt, sprawls across a bench seat with a thermos of coffee.
8 A SLIM POLLARD, 40s, round as a barrel, sits with a ledger on his knee.
9 A PEARL, 20s, the youngest, in a leather jacket with too many zippers, spins a lock-pick between her fingers.
10 D DUCHESS: Gentlemen. Miss Pearl. We are assembled.
11 D BONES: We've been assembled for an hour.
12 D DUCHESS: And now we are in session.
13 D LAVALLE: Is that a legal term?
14 D DUCHESS: It's a theatrical one.
15 D SLIM: The count is simple. Four million, in unmarked bills, locked in the carousel's center column. The man who stored it was a bad carpenter and a worse liar.
16 D PEARL: Which column? There's six.
17 D SLIM: The one that doesn't turn.
18 D LAVALLE: They all turn.
19 D SLIM: Not that one. I've watched it for three weeks.
20 D BONES: Thank God somebody watched something.
21 D PEARL: How do we get in?
22 D DUCHESS: The same way everyone gets in anywhere. We pretend we belong.
23 D LAVALLE: In a closed amusement park.
24 D DUCHESS: In a closed amusement park, at night, with permits.
25 D SLIM: Are the permits real?
26 D DUCHESS: Mr. Pollard, nothing is real. That's the pleasure of the business.
27 D BONES: Who's driving?
28 D DUCHESS: Pearl.
29 D PEARL: I thought I was the lock.
30 D DUCHESS: You are both. We are a small company.
31 D PEARL (grinning): Then I want a bigger cut.
32 D DUCHESS: You'll have a bigger bow.
33 D LAVALLE: Are we agreed on the split?
34 D SLIM: Equal shares. Five ways.
35 D BONES: Six.
36 D DUCHESS: Six?
37 D BONES: There's a sixth share in Mr. Lavalle's ledger. Somebody we've never met.
* 38 A ¶ Silence.
* 39 A The carousel lamps flicker.
40 A Slim turns the ledger toward the light.
41 A Pearl stops spinning the pick.
42 D DUCHESS (very softly): Mr. Lavalle. You told me nobody else knew.
43 D LAVALLE (polishing): I told you what you needed to hear.
44 A ¶ He puts on his glasses.

### SCENE s01057 | INT. HOSPITAL BARGE "MERCY ELEANOR" - WARD DECK - NIGHT
Detected names (may be incomplete or contain aliases): ISMAIL KARIMI, NURSE BRONWEN ACKERLEY, ORDERLY TOBIAS FINCH, LINH THAI, ODETTA WRAY
* 1 A ¶ A converted river freighter.
* 2 A Twelve cots on a steel deck, curtains on ceiling rails, an IV pole tied to a pillar with bungee cord.
* 3 A Through round portholes, the lights of a riverbank town drift by.
4 A ¶ DR. ISMAIL KARIMI, 50s, rumpled scrubs, reading glasses hanging from one ear, signs a chart at a card table nailed to the floor.
5 A NURSE BRONWEN ACKERLEY, 40s, tall, silver braid, checks an IV bag with a flashlight.
6 A ORDERLY TOBIAS FINCH, 20s, headphones around his neck, mops in lazy circles.
7 A DR. LINH THAI, 30s, resident, sits cross-legged on a cot, stethoscope draped, eating crackers from a sleeve.
8 A And at the end of the row, MRS. ODETTA WRAY, 70s, the only patient awake, sits up in a cot with a blanket over her knees.
9 D ISMAIL: Bed six, no change.
10 D BRONWEN: Bed six, no change.
11 D ISMAIL: Bed nine?
12 D LINH: Temp is ninety-nine point one.
13 D ISMAIL: Fine. Leave it.
14 D LINH: I was going to.
15 D TOBIAS: Do we have more mop heads?
16 D BRONWEN: Closet, port side.
17 D TOBIAS: Port is?
18 D BRONWEN: Left.
19 D TOBIAS: Thanks.
* 20 A ¶ The barge shifts.
* 21 A A low groan runs through the hull.
22 A Nobody reacts.
* 23 A The IV pole sways against its bungee.
24 D MRS. WRAY: Doctor.
25 D ISMAIL: Yes, Mrs. Wray.
26 D MRS. WRAY: Is it always so slow at night?
27 D ISMAIL: Usually it's slower.
28 D MRS. WRAY: Then I'm in luck.
29 D ISMAIL: Are you in pain?
30 D MRS. WRAY: Only boredom.
31 D LINH (through crackers): I can read you something.
32 D MRS. WRAY: What have you got?
33 D LINH: The back of the cracker box.
34 D MRS. WRAY: Go ahead.
35 D LINH: "Made with whole grains. Best before March."
36 D MRS. WRAY: Beautiful.
37 A ¶ Bronwen stifles a laugh.
38 A Ismail glances over his glasses, almost smiles.
39 D TOBIAS: Dr. Karimi, should I do the starboard side next?
40 D ISMAIL: If you like.
41 D TOBIAS: I do like.
42 D ISMAIL: Then carry on.
* 43 A ¶ The barge's horn sounds, low and soft, a note across water.
44 D BRONWEN: That's Calder Landing.
45 D ISMAIL: We dock in an hour.
46 D LINH: Do we get shore leave?
47 D ISMAIL: We get paperwork.
48 D LINH: Same thing.
49 D ISMAIL: Dr. Thai.
50 D LINH: Sorry.
51 A ¶ Mrs. Wray settles into her pillow.
52 A Her eyes close.
* 53 A A pulse monitor beeps in a slow, steady tick.
54 A ¶ Bronwen adjusts the blanket across her knees.
55 A Tucks it neat.
56 D BRONWEN (softly): Sleep well.
57 D MRS. WRAY (eyes closed): Everything's fine?
58 D BRONWEN: Everything's fine.
59 A ¶ She turns off the flashlight.
* 60 A The ward falls into amber, quiet, familiar dark.

### SCENE s01058 | INT. BARBERSHOP - SAGUARO FLATS - AFTERNOON
Detected names (may be incomplete or contain aliases): COLTER BANKS, MAGDALENA REYES
* 1 A ¶ One chair, one mirror, one spittoon.
* 2 A Sun lances through the front window.
* 3 A A fly drones against the glass.
4 A ¶ COLTER BANKS, 40s, barber, sleeves rolled, strops a razor.
5 A In the chair, MAGDALENA REYES, 30s, trail dust on her coat, a gun belt buckled low, lies back with a hot towel on her face.
6 D COLTER: Haircut or shave?
7 D MAGDALENA (muffled): Shave.
8 D COLTER: You've got no beard, ma'am.
9 D MAGDALENA: Then it'll be quick.
10 A ¶ He chuckles.
11 A Lifts the towel.
12 A Her eyes are closed.
13 A She doesn't smile.
14 D COLTER [CONT'D]: Nice town, isn't it?
15 D MAGDALENA: Quiet.
16 D COLTER: Quiet's good for business.
17 D MAGDALENA: Not for yours.
18 D COLTER: I don't need a crowd. Just a few regulars.
19 D MAGDALENA: Like Sheriff Haynes.
20 A ¶ His strop stops mid-stroke.
21 D COLTER: You know the sheriff?
22 D MAGDALENA: I know his boots. They're on your wall. Left side, behind the broom.
23 A ¶ Colter's eyes flick to the corner.
* 24 A A pair of polished boots, neat, side by side, dusty at the toes.
25 D COLTER: Left them here weeks ago. Said he'd be back.
26 D MAGDALENA: He won't.
27 D COLTER: Is that a fact.
28 D MAGDALENA: It's a fact, Colter.
29 A ¶ He sets the razor on the counter.
30 A Picks up a comb.
31 A Combs her hair with sudden care.
32 D COLTER: I never told you my name.
33 D MAGDALENA: It's on the window.
34 D COLTER: Right.
35 A ¶ He combs.
36 A She waits.
* 37 A The fly buzzes.
* 38 A Out in the street, a dog barks, stops.
39 D COLTER [CONT'D]: Is there something I should know?
40 D MAGDALENA: I'm going to ask you a question, and I want you to answer it honestly.
41 D COLTER: All right.
42 D MAGDALENA: Where's the sheriff?
43 D COLTER: Out of town.
44 D MAGDALENA: Where?
45 D COLTER: Does it matter?
46 D MAGDALENA: It's my brother who sent him.
47 A ¶ Colter's hand stops on her scalp.
* 48 A The comb freezes.
49 D COLTER: Your brother?
50 D MAGDALENA: Santiago Reyes. Brown horse. Left ear notched.
51 D COLTER: I don't--
52 D MAGDALENA: Sheriff Haynes rode out of here with him and his saddlebags and came back with only the horse.
53 A ¶ Colter steps away from the chair.
54 A She opens her eyes.
55 A Calm.
56 A Cold.
57 D COLTER: Ma'am, I'm only a barber.
58 D MAGDALENA: You're a man with a bad shave and a good alibi.
59 D COLTER: I don't understand.
60 D MAGDALENA: Look in the mirror.
61 A ¶ He does.
* 62 A Behind him, in the glass, the front door has quietly opened.
* 63 A A pair of boots on the threshold.
* 64 A The sheriff's, or the same cut.
65 D MAGDALENA [CONT'D] (without turning): Close the door, Colter. Sit down.
66 A ¶ He sits.
67 A His hands are shaking.
68 A She rises, rolls her sleeves, and takes the razor from the counter.
69 A Tests the edge with her thumb.
70 D MAGDALENA [CONT'D]: Now. Let's have that talk.

### SCENE s01059 | INT. LOGGING CAMP MESS HALL - ARBITRATION HEARING - DAY
Detected names (may be incomplete or contain aliases): PETRA ILLES, REGINALD TOLLIVER, OTTOLINE FRYE, CLERK, ABIODUN SHOLA
* 1 A ¶ Long pine tables pushed into a U. Axes on hooks.
* 2 A Snow outside the windows.
* 3 A A coffee urn steams in the corner.
4 A ¶ PETRA ILLES, 40s, plaid jacket over blazer, stands at the head of the U. REGINALD TOLLIVER, 50s, three-piece suit, sits opposite her with his hands steepled.
5 A OTTOLINE FRYE, 60s, the foreman, sits in the witness chair, a rifle-green parka zipped to her chin.
6 D PETRA: Ms. Frye. Who signed off on the timber survey?
7 D OTTOLINE: I did.
8 D PETRA: Did you walk the ridge?
9 D OTTOLINE: Not myself.
10 D PETRA: Then how?
11 D REGINALD: Objection. Foundation.
12 D PETRA: She's the foreman.
13 D REGINALD: She's not a surveyor.
14 D OTTOLINE: I know a tree when I see one.
15 D PETRA: Did you see this one?
16 D OTTOLINE: I saw the stump.
17 D PETRA: And the stump said?
18 D REGINALD: Objection!
* 19 A ¶ The door bangs.
20 A A CLERK, 20s, snow on his hat, hurries in with a folder, ducking as though the rafters were low.
21 A ABIODUN SHOLA, per the badge on his coat.
22 A Everyone looks.
23 D ABIODUN: Sorry. Sorry. Urgent filing.
24 D PETRA: Mr. Shola, we're in session.
25 D ABIODUN: It's about the ridge.
26 D REGINALD: Whose side is this?
27 D ABIODUN: Yours, I think. Or hers.
28 A ¶ He slaps the folder on the table between them.
29 A Petra and Reginald reach for it.
30 D PETRA: Give me that.
31 D REGINALD: Give me that.
32 A ¶ They stop.
33 A Both draw back.
34 A Ottoline takes the folder, opens it.
35 A Reads.
36 D OTTOLINE (slowly): That ridge was never ours.
* 37 A ¶ The mess hall goes quiet.
* 38 A Even the coffee urn seems to stop bubbling.

### SCENE s01060 | INT. LUNAR AGRICULTURAL DOME - CAFETERIA - DAY CYCLE
Detected names (may be incomplete or contain aliases): HALCYON PRYCE, TEODORO FALCONE, CHIOMA UDOH, NADEEM ROUSSEAU, COMMANDER BENEDIKT STONE
* 1 A ¶ A circular canteen under a clear shell.
* 2 A Earth hangs in the sky like a blue marble.
* 3 A Long tables of recycled plastic, trays of steaming something.
* 4 A A hum of pumps from beneath the floor.
5 A ¶ DR. HALCYON PRYCE, 50s, lead agronomist, white coat over coveralls, sits at a central table stirring something green with a spork.
6 A Across from her, TEODORO FALCONE, 40s, mechanic, grease under his nails, eats a protein bar with no pleasure.
7 A CHIOMA UDOH, 30s, hydroponics tech, tablet propped against a water pouch, scrolls a spreadsheet.
8 D HALCYON: Do you taste that?
9 D TEODORO: It's lunch.
10 D HALCYON: It's kale. Mostly.
11 D TEODORO: It's mostly lunch.
12 D CHIOMA: Cycle three yield is down four percent.
13 D HALCYON: Down from what?
14 D CHIOMA: From the last harvest.
15 D HALCYON: That's not a number. That's a mood.
16 D CHIOMA: Four percent is a number.
17 D HALCYON: It depends on who's counting.
18 D TEODORO: I'm counting calories. Mine are low.
19 D HALCYON: Teodoro, you've been quiet this week.
20 D TEODORO: I'm always quiet.
21 D HALCYON: Quiet-quiet or worried-quiet?
22 D TEODORO: Pump seven is making a sound.
23 D HALCYON: What kind of sound?
24 D TEODORO: A mean one.
25 D CHIOMA: Mean how?
26 D TEODORO: Like a dog that hasn't decided yet.
27 D HALCYON: Have you filed a ticket?
28 D TEODORO: I filed three. Maintenance said "scheduled."
29 D HALCYON: When?
30 D TEODORO: Spring.
31 D HALCYON: It's October.
32 D TEODORO: I'm aware.
33 A ¶ A figure appears at the cafeteria entrance.
34 A NADEEM ROUSSEAU, 20s, intern, lanky, glasses sliding down his nose, balances a tray with the posture of someone who has never carried a tray.
35 A He scans the room and heads toward them.
36 D NADEEM: Is this seat taken?
37 D HALCYON: Sit.
38 D NADEEM: Thank you, Doctor.
39 D HALCYON: Halcyon. Dr. is for formal complaints.
40 D NADEEM: Halcyon. Okay.
41 A ¶ He sits.
42 A Opens his mouth.
43 A Closes it.
44 A Opens it again.
45 D NADEEM [CONT'D]: Sorry. I'm new. Today's my second day.
46 D TEODORO: You'll get used to the food.
47 D NADEEM: Is it always this beige?
48 D CHIOMA: Only on days that end in Y.
49 D NADEEM: What do you do here?
50 D CHIOMA: I keep the plants alive. Teodoro keeps the plants' water alive. Halcyon keeps all of us alive.
51 D HALCYON: Aspirationally.
52 D NADEEM: That's a lot of alive.
53 D HALCYON: On a rock with no air, it's the only job.
54 D NADEEM: I read about the bio-loop in school. Water, nutrients, light. Every molecule counted.
55 D HALCYON: And?
56 D NADEEM: It's more beautiful in a textbook.
57 D HALCYON: It's less beautiful in a textbook. The textbook doesn't smell.
58 D TEODORO (muttering): Pump seven.
59 D NADEEM: Sorry?
60 D CHIOMA: Don't. He'll tell you for an hour.
61 D TEODORO: It's a good story.
62 D CHIOMA: It's a pump.
63 D TEODORO: It's a pump with a personality.
64 D NADEEM: I like pumps.
65 D TEODORO (looking up): Kid, you're hired.
66 D HALCYON: He's already hired.
67 D TEODORO: Then you're promoted.
68 D NADEEM: To what?
69 D TEODORO: To the person who gets to listen.
70 D CHIOMA: Good luck.
71 A ¶ COMMANDER BENEDIKT STONE, 60s, dome administrator, cane tapping, pauses at the end of their table with a tray of nothing but coffee.
72 D BENEDIKT: Dr. Pryce. Mr. Falcone. Is this the new hire?
73 D NADEEM: Yes, sir.
74 D BENEDIKT: Welcome to the Moon. Try not to break it.
75 A ¶ He moves on.
76 A Nadeem laughs, uncertain.
77 A He picks up his spork and tastes the green stuff.
78 A His face does something complicated.
79 D NADEEM: That's really kale.
80 D HALCYON: Told you.
81 A ¶ They eat.
* 82 A Pumps hum below.
* 83 A Overhead, Earth turns slowly, blue and white and very far away.

### SCENE s01061 | INT. NORTHWIND LOGISTICS - ESCAPE ROOM "THE VAULT OF SYNERGY" - DAY
Detected names (may be incomplete or contain aliases): DIRECTOR GREGOR HALVORSEN, PRIYA NAIR, TODD BEXLEY, BEATRICE KOWALSKI, HR, MARCUS ELLIOT, DELILAH OKONJO
* 1 A ¶ A windowless basement fitted as a movie-set bank.
* 2 A Brass safe doors, laser-beam strips of red tape, a ticking digital clock above the mantel: 59:12.
3 A ¶ Six employees in matching fleece vests stand in a ring around a locked chest.
* 4 A Lanyards.
* 5 A Name tags.
* 6 A Forced smiles.
7 A ¶ DIRECTOR GREGOR HALVORSEN, 50s, bald, a vest zipped to the chin, claps once.
8 D GREGOR: Team! Remember. There's no "I" in--
9 A ¶ PRIYA NAIR, 30s, accountant, glances at her watch.
10 D PRIYA: We've got fifty-eight minutes.
11 D GREGOR: Alignment is a journey.
12 A ¶ TODD BEXLEY, 40s, sales, taps the chest.
13 D TODD: It's a padlock. Four digits.
14 D GREGOR: Who has the clue?
15 A ¶ BEATRICE KOWALSKI, 60s, HR, lifts a laminated card with a trembling hand.
16 D BEATRICE: "The date of our greatest quarter."
17 D TODD: That's every quarter.
18 D GREGOR: Todd.
19 D TODD: I'm saying, it's every quarter.
20 A ¶ MARCUS ELLIOT, 20s, junior analyst, stares at the clock.
21 D MARCUS: Fifty-six minutes.
22 D GREGOR: Marcus, please. We don't count down. We count up.
23 A ¶ Marcus nods.
24 A Counts nothing.
25 A His left eye twitches.
26 A ¶ DELILAH OKONJO, 40s, procurement, stands with her arms crossed, in the corner.
27 D DELILAH: It's seventeen forty-two.
28 D GREGOR: Is that a guess?
29 D DELILAH: It's on the whiteboard behind you.
30 A ¶ They all turn.
* 31 A A whiteboard reads: FOUNDED 1742.
32 A Gregor's smile fixes in place.
33 D GREGOR: Great catch, Delilah.
34 A ¶ Priya enters the code.
* 35 A The padlock clicks.
* 36 A The chest opens.
* 37 A Inside, a single laminated card: CONGRATULATIONS.
* 38 A PLEASE COMPLETE THE SURVEY.
39 A ¶ Nobody speaks.
40 A Todd picks up the card, turns it over.
41 D TODD: There's a QR code.
42 D BEATRICE: Of course there is.
* 43 A ¶ They stand there, six fleece vests in a basement, while the clock beeps.
* 44 A 54:03.
* 45 A 54:02.

### SCENE s01062 | INT. STRANDED COACH BUS - 3 A.M.
Detected names (may be incomplete or contain aliases): NAOMI PRESCOTT, EMERY LUND
* 1 A ¶ A long-distance bus at the roadside, hazard lights ticking amber against a field of black.
* 2 A Rows of reclining seats, empty.
* 3 A A fine layer of frost on the inner windows.
* 4 A The driver's seat is vacant, door gaping open to the night.
5 A ¶ NAOMI PRESCOTT, 30s, parka and wool cap, sits in the third row from the back with a paperback she isn't reading.
6 A Across the aisle, EMERY LUND, 20s, headphones, hoodie, bounces one knee.
7 A ¶ Neither has spoken for twenty minutes.
8 D EMERY (to the bus, loud): Hello? Anyone else on here?
* 9 A ¶ Silence.
* 10 A Hazards tick.
11 D NAOMI: There's nobody else.
12 D EMERY: Right.
13 D NAOMI: The driver stepped out for the radio.
14 D EMERY: That was an hour ago.
15 D NAOMI: Forty minutes.
16 D EMERY (muttering): Felt like an hour.
17 A ¶ She pulls the headphones down around her neck.
18 A Naomi turns a page.
19 A Doesn't read it.
* 20 A The bus creaks, settling on its springs.
21 D EMERY [CONT'D]: Did you hear that?
22 D NAOMI: Hear what?
23 D EMERY: Like tapping.
24 D NAOMI: It's the cold.
25 D EMERY: It's not the cold.
26 D NAOMI: It's the cold.
* 27 A ¶ Tap.
* 28 A Tap.
* 29 A Tap-tap.
30 A ¶ Both sit very still.
* 31 A The sound comes from somewhere in the back of the bus.
* 32 A Not the engine.
* 33 A Not the heater.
* 34 A Something closer, patient.
35 D EMERY: It's in the luggage rack.
36 D NAOMI: Don't.
37 D EMERY: Someone left a bag.
38 D NAOMI: Emery.
39 D EMERY: I'm going to look.
40 A ¶ She stands.
41 A Naomi stands too, in the same moment, then sits back down, and then stands again.
42 A They both end up in the aisle, and the bus sways, and neither wants to take the first step.
43 D EMERY [CONT'D] (to Naomi, whispering): You first.
44 D NAOMI (to the bus): Whoever's there, we know you're in there.
45 D EMERY: Whoever's there, we know you're in there.
46 A ¶ They say it at the same time.
47 A They look at each other.
48 D NAOMI: Stop that.
49 D EMERY: You stop.
* 50 A ¶ The tapping stops.
* 51 A Instead, a soft, wet noise, like a hand pulled slowly out of mud.
* 52 A ¶ The overhead luggage rack shudders.
* 53 A A zipper rasps.
* 54 A A black duffel bag unzips by itself, one slow tooth at a time.
55 A ¶ Naomi clutches the seat.
56 A Emery clutches Naomi's arm.
57 A They back up the aisle together, step for step, until they hit the rear emergency door.
58 D NAOMI [CONT'D] (whispering): Open it.
59 D EMERY: It's locked.
60 D NAOMI: Open it!
61 D EMERY: It's a lever! It's on the floor!
62 A ¶ She drops.
63 A Gropes under the seat.
64 A Naomi keeps her eyes on the duffel.
* 65 A The zipper rasps another inch.
66 D EMERY [CONT'D] (to herself): Come on. Come on.
* 67 A ¶ Something pale slides out of the bag.
* 68 A Fingers, knuckled and long.
* 69 A They curl around the edge of the rack.
70 D NAOMI (very low): Emery. Pull it. Now.
71 A ¶ Emery pulls.
* 72 A The emergency door swings out with a clatter, and cold air slams into the bus.
* 73 A The hazards tick.
* 74 A The fingers withdraw.
75 D EMERY: Go! Go!
76 A ¶ Naomi shoves her out the door, tumbles after.
77 A They land in the gravel on their hands and knees, gasping.
* 78 A ¶ Behind them, the bus sits glowing amber, silent.
* 79 A The duffel, lying on the aisle floor, is zipped shut again.
80 D NAOMI (panting): Don't look back.
81 D EMERY: I'm not.
82 D NAOMI: Good.
83 A ¶ They crawl away from the road.
84 A Neither looks.
* 85 A Both hear it: the soft tap of a hand on the glass.

### SCENE s01063 | INT. MUSEUM OF CLOCKS - GREAT HALL - NIGHT
Detected names (may be incomplete or contain aliases): SERAPHINA VOSS, BARTHOLOMEW QUILL, KENJI AOKI, DESPINA ARVANITIS, LOOKOUT
* 1 A ¶ A hundred timepieces, each telling a different hour.
* 2 A Grandfather cases line the walls like sentries.
* 3 A Pendulums swing out of rhythm, ticks overlapping in a thin, endless rain.
* 4 A At the center, under a glass dome, a gilded astronomical clock the size of a carriage glitters, its planets frozen mid-orbit.
* 5 A ¶ Five minutes to midnight.
* 6 A The building is dark, sleeping.
7 A ¶ In the shadow of a long-case clock, four figures crouch like cats.
8 A ¶ SERAPHINA VOSS, 40s, in black from throat to ankle, headlamp dimmed to a red coin, leads.
9 A At her shoulder, BARTHOLOMEW QUILL, 60s, silk scarf, gloved fingers unscrewing the cover plate of a wall panel.
10 A KENJI AOKI, 20s, in a catering uniform with a pocketed screwdriver, carries a coil of fiber cable.
11 A DESPINA ARVANITIS, 30s, enormous eyes, a stethoscope hanging from her neck, taps a glass case with the delicacy of a safecracker.
* 12 A ¶ A small radio crackles from Seraphina's belt.
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
* 29 A ¶ Tick, tick, tick, tick.
30 D DESPINA [CONT'D] (whispering): It's counting. Three seconds to a click.
31 D BARTHOLOMEW: Can you match it?
32 D DESPINA: I can try.
33 A ¶ She slides a slim tool beneath the dome's rim.
34 A Waits.
* 35 A A pendulum on the east wall swings out.
* 36 A Another answers.
* 37 A ¶ Tick.
* 38 A Click.
* 39 A A pin falls.
40 D LOOKOUT [V.O.]: One minute. He's at the landing.
41 D SERAPHINA: Go.
42 A ¶ Despina lifts the dome.
43 A Slow, trembling.
* 44 A It rises on invisible springs, a hush of glass.
* 45 A The planets of the clock gleam, close enough to touch.
46 A ¶ Kenji slides a velvet bag under the gilded sun and eases it free.
* 47 A The gears whisper once.
* 48 A Then still.
49 D BARTHOLOMEW (hushed): It's heavier than it looks.
50 D KENJI: They always are.
51 D LOOKOUT [V.O.]: Thirty seconds!
52 D SERAPHINA: Seal it. Back to the wall.
53 A ¶ They snap the dome back down.
* 54 A The pin settles.
* 55 A The clock gleams behind its glass, minus one small golden sun.
* 56 A ¶ Somewhere in the hall, a bell tolls.
* 57 A Midnight.
* 58 A Every clock in the museum begins to strike, a hundred chimes, a hundred hours, clamor and swell.
59 A ¶ The four crouch, hands over ears, as the hall rings around them like a cathedral.
* 60 A The guard's footsteps, if any, are drowned entirely.
61 D KENJI (laughing, shouting): That's the best alarm I ever heard!
62 D SERAPHINA: Quiet!
* 63 A ¶ The last chime fades.
* 64 A Silence, then a single tick, then a hundred.
65 D LOOKOUT [V.O.]: He's gone to the west wing. You're clear.
66 A ¶ Bartholomew exhales.
67 A Despina leans on the long-case clock, trembling and grinning.
68 A Kenji laughs without sound.
69 A Seraphina lets go of the radio.
70 D SERAPHINA: Walk. Don't run. Let's go home.

### SCENE s01064 | EXT. THE GLASS BRIDGE OF AETHERMERE - DAWN
Detected names (may be incomplete or contain aliases): QUEEN IDRISSA, SIR BALTHAZAR, FINNEGAN, MORGANA
* 1 A ¶ A span of living crystal between two floating islands, fog beneath it, bells ringing somewhere unseen.
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
* 17 A It rings on the crystal.
* 18 A The bridge begins to hum.

### SCENE s01065 | INT. HOUSING COURT - COURTROOM 3 - MORNING
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE ABBOTT-LUND, LANDLORD DEXTER OLUYEMI, TENANT MARISELA QUINTANILLA, CORNELIUS PRATT
* 1 A ¶ A cramped courtroom with a leaking ceiling tile and a plastic bucket underneath.
* 2 A A worn carpet, three rows of benches, a flag on a crooked pole.
3 A ¶ JUDGE HORTENSE ABBOTT-LUND, 60s, reading glasses perched on a long nose, peers over the bench.
4 A LANDLORD DEXTER OLUYEMI, 40s, cufflinks, signet ring, stands at one table.
5 A TENANT MARISELA QUINTANILLA, 30s, in her work uniform from a bakery, flour still on one sleeve, stands at the other.
6 A Beside her, ATTY.
7 A CORNELIUS PRATT, 50s, a threadbare suit, a briefcase with a broken clasp.
8 D ABBOTT-LUND: Mr. Oluyemi, you've served notice?
9 D DEXTER: Yes, Your Honor.
10 D ABBOTT-LUND: Mr. Pratt, you dispute it?
11 D PRATT: We do, Your Honor. My client wasn't informed of the rent increase.
12 D DEXTER: It was posted in the lobby.
13 D MARISELA: There's no lobby. There's a hallway.
14 D DEXTER: Same thing.
15 D MARISELA: There's a hallway with a broken light. I can't read in the dark.
16 D ABBOTT-LUND: Ms. Quintanilla, please address me.
17 D MARISELA: Sorry, Judge.
18 D ABBOTT-LUND: Mr. Pratt, any further objection?
19 D PRATT: Only that Mr. Oluyemi has been collecting rent for a unit that doesn't have a working stove for six months.
20 D DEXTER: I replaced the stove.
21 D MARISELA: With a hot plate.
22 D ABBOTT-LUND: That's enough.
* 23 A ¶ The bucket under the ceiling tile pings with a single drop.

### SCENE s01066 | EXT. ARCTIC ICE SHELF - LIFE RAFT CAMP - DAY
Detected names (may be incomplete or contain aliases): JOSEPHINE TALLCHIEF, DARIUS OKAFOR, BERNADETTE LACROIX, RESCUE ONE
* 1 A ¶ A bright white world.
* 2 A A yellow raft hauled up on a floe, a tarp strung from poles, a single seal-oil stove.
* 3 A Wind sighs.
4 A ¶ JOSEPHINE TALLCHIEF, 30s, parka hood trimmed with fur, kneels at the stove and stirs a pot.
5 A DARIUS OKAFOR, 40s, frostbitten cheeks, sits against the raft with a rifle.
6 A BERNADETTE LACROIX, 20s, in a red survival suit, stands at the edge of the floe with a radio.
7 D BERNADETTE (into radio): Rescue One, this is the Meridian. Do you copy?
* 8 A ¶ The radio hisses.
9 D RESCUE ONE [V.O.] (garbled): ...Meridian... position... say again...
10 D BERNADETTE: We're at seventy-eight north.
11 D RESCUE ONE [V.O.]: ...hold... coming...
12 A ¶ She grins.
13 A Turns to the others.
14 D BERNADETTE [CONT'D]: They're coming!
15 D JOSEPHINE: How long?
16 D BERNADETTE: Two hours!
17 D DARIUS (rising): Two hours. We can make two hours.
* 18 A ¶ The floe groans.
* 19 A A crack zigzags across the ice between them.
20 A Josephine and Darius lunge for the raft as the floe splits, and Bernadette leaps across the gap, landing hard in Josephine's arms.
21 A All three tumble into the raft as the ice shelf shifts and a second crack opens right where the stove had been.
22 D JOSEPHINE: Cut the line!
23 D DARIUS: Cut the line!
24 A ¶ Bernadette hacks the rope.
* 25 A The raft slides free.
26 A The three huddle.
* 27 A The stove sinks into black water.
28 D RESCUE ONE [V.O.] (clear now): Meridian, we have you. Stay put.

### SCENE s01067 | INT. VICTORIAN ICE HOUSE - ESTATE GROUNDS - EVENING (1887)
Detected names (may be incomplete or contain aliases): ABIGAIL FENWICK-HALE, TOBIAS RUSK, STRANGER, RUPERT
* 1 A ¶ A brick dome half-sunk in the earth.
* 2 A Blocks of ice stacked in straw, sawdust floor, a sharp cold that smells of wet stone.
* 3 A A lantern hangs from a hook.
* 4 A Breath clouds in the light.
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
* 24 A The shavings fall.
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
* 44 A The lantern flickers.
45 D RUPERT: I only want the tin.
46 D ABIGAIL (to the cold air): God help us.
47 D RUPERT: I'd settle for that, too.
48 A ¶ He smiles.
49 A A thin, apologetic, tired smile.
50 A Behind him, the ice house door creaks in the wind, and all three turn to look at it.

### SCENE s01068 | INT. DANCE MARATHON HALL - NIGHT (1932)
Detected names (may be incomplete or contain aliases): EVELYN PRATT, JACK HOLLISTER
* 1 A ¶ A cavernous ballroom, plank floor, paper streamers gone limp.
* 2 A Hour 487.
* 3 A A banner reads LAST COUPLE STANDING WINS $1,000.
* 4 A The couples have gone to their cots.
* 5 A A gramophone scratches out one slow waltz to an empty floor.
6 A ¶ EVELYN PRATT, 20s, in a tattered satin dress, shoes in her hand, sways alone in the middle of the boards.
7 A Eyes closed.
8 D EVELYN (to the empty hall): Anybody got a cigarette?
* 9 A ¶ No answer.
* 10 A Gramophone crackle.
11 D EVELYN [CONT'D] (muttering): Four hundred eighty-seven hours. And the only thing that moves is the record.
* 12 A ¶ A cot creaks in the shadows.
* 13 A A match flares.
14 A JACK HOLLISTER, 20s, in a wilted white shirt, pushes himself off a bench and shuffles into the light, a cigarette between his lips.
15 D JACK: Here.
16 A ¶ He offers it.
17 A She takes a drag.
18 A Gives it back.
19 D EVELYN: Thanks. You were sleeping.
20 D JACK: I was resting my eyes.
21 D EVELYN: In a dance marathon.
22 D JACK: It's called pacing.
23 A ¶ She laughs.
24 A It wakes him a little.
25 A He sets the cigarette on the edge of the gramophone and holds out one hand.
26 D JACK [CONT'D]: Fifteen minutes left on the clock.
27 D EVELYN: Then dance with me.
28 D JACK: I thought you'd never ask.
29 A ¶ She drops her shoes.
30 A Takes his hand.
31 A They begin to turn, slow, a little off the beat.
32 D EVELYN: If we win, what will you do with a thousand dollars?
33 D JACK: Buy a hat.
34 D EVELYN: That's all?
35 D JACK: A nice hat.
36 D EVELYN: And me?
37 D JACK: You'd get a better hat.
38 A ¶ They both begin to say the same line.
39 D EVELYN: I'd dance another four hundred hours for you.
40 D JACK: I'd dance another four hundred hours for you.
41 A ¶ They stop.
42 A Both startled.
43 A Then, softly, they laugh.
44 D EVELYN [CONT'D]: Don't promise. Just hold on.
45 A ¶ He holds her.
* 46 A The gramophone skips and keeps going.

### SCENE s01069 | EXT. AUTO SALVAGE YARD - CAR CRUSHER BAY - NIGHT
Detected names (may be incomplete or contain aliases): MAN, WOMAN, KID, NINA, ELI
* 1 A ¶ Towers of flattened cars.
* 2 A A hydraulic crusher squats at the end of a gravel lane, its steel jaws open like a mouth.
* 3 A A sodium lamp buzzes on a pole.
4 A ¶ A MAN in a dark jacket, 40s, slams the trunk of a black sedan shut.
5 A He wipes his hands on his pants.
6 A From the passenger side, a WOMAN in a leather coat, 30s, hurries around the car, hugging herself.
7 A ¶ At the office window, a KID, 17, in a hoodie, watches from behind a curtain.
8 A ¶ The man opens the sedan's back door.
* 9 A A heavy gym bag sits on the seat.
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
* 21 A It lands on the gravel with a clink.
* 22 A ¶ The office door opens.
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
* 47 A The jaws groan and begin to close.
48 D NINA: Eli! Don't!
49 D ELI (shouting): You said no papers!
50 A ¶ The man rolls away.
* 51 A The jaws descend on the sedan with a scream of metal.
* 52 A The gym bag, caught half under the door, is dragged in.
53 A ¶ Nina stares, mouth open.
54 A The man gets up slowly, face bleeding.
55 D MAN (to Eli, hoarse): You have any idea what was in that bag?
56 D ELI (dead calm): Terrence's rules.
* 57 A ¶ The crusher bottoms out.
* 58 A Glass bursts.
* 59 A A cloud of dust and loose banknotes swirls up through the sodium light, drifting down like snow.

### SCENE s01070 | INT. FLOODED RICE MILL - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT OKAFOR, CORPORAL HALVORSEN, PRIVATE LIN, STRANGER, TEODOR
* 1 A ¶ Knee-deep brown water.
* 2 A Sacks float like dead cattle.
3 A SERGEANT OKAFOR, 40s, scarred jaw, holds a lantern low.
4 A CORPORAL HALVORSEN, 20s, freckled, covers the door with a rifle.
5 A PRIVATE LIN, 19, thin, shivers beside a radio set.
6 A ¶ A man in a farmer's coat wades out of the dark.
7 A Hands up.
8 A STRANGER, 50s, mud to the waist.
9 D STRANGER: Don't shoot. I live here.
10 D OKAFOR: Nobody lives here. Name.
11 D STRANGER: Teodor. Teodor Vasko. The mill is my brother's.
12 A ¶ Halvorsen steps closer.
13 A Lin keeps her eyes on the radio.
14 D HALVORSEN: Sarge, he came from the north bank. That's their side.
15 D TEODOR: The bridge is gone. I swam.
* 16 A ¶ Distant engines.
17 A Okafor kills the lantern.
* 18 A Dark.
19 D OKAFOR (whispering): Lin. Radio. Now.
20 D LIN: Static, Sergeant. Only static.
* 21 A ¶ The engines grow louder.
22 A Halvorsen cocks the rifle.

### SCENE s01071 | INT. LAMPLIGHTER'S WORKSHOP - DAWN
Detected names (may be incomplete or contain aliases): ADELAIDE PRYCE, TOBIAS WREN, BOY
* 1 A ¶ 1887.
* 2 A London.
* 3 A Brass tools.
* 4 A Oil cans.
* 5 A A cold stove.
6 A ¶ MRS. ADELAIDE PRYCE, 60s, black bombazine, stands in the doorway.
7 A Does not sit.
8 A Gloves stay on.
9 A ¶ Across the bench: TOBIAS WREN, 60s, lamplighter.
10 A Wick scissors in hand.
11 A He trims nothing.
* 12 A ¶ Silence.
* 13 A A kettle ticks as it cools.
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
* 24 A ¶ A bell clangs in the street.
* 25 A A boy's voice, muffled through the wall.
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
* 36 A Nothing inside.
37 D TOBIAS: Tea?
38 D ADELAIDE: No.
39 A ¶ She sits.
40 A Finally.
* 41 A The chair creaks.
42 A He looks at the chair, then at her gloves.
43 D TOBIAS: Take those off. You'll boil.
44 D ADELAIDE: It's November.
45 D TOBIAS: Still.
* 46 A ¶ A long beat.
47 A She pulls one finger loose.
48 A Stops.
49 A Pushes it back.
50 D ADELAIDE: I said what I came to say. In the letter.
51 D TOBIAS: I burned the letter.
52 D ADELAIDE: Then you know.
53 D TOBIAS: I know.
* 54 A ¶ The boy shouts again, further off.
* 55 A Fainter.
56 D BOY [O.S.]: Lamps!
57 A ¶ Adelaide rises.
58 A Smooths her skirt twice.
59 A Crosses to the door.
60 A Stops with her back to him.
61 D ADELAIDE: Light one for me. On Fenchurch.
62 D TOBIAS: It's lit.
63 D ADELAIDE: Then light it again.
64 A ¶ She leaves.
* 65 A The bell over the door swings.
66 A Tobias takes down the dusty lamp.
67 A Wipes the smear with his sleeve.
68 A Carefully.

### SCENE s01072 | INT. MAINTENANCE CRAWLSPACE ABOVE CUBICLE FARM - DAY
Detected names (may be incomplete or contain aliases): RENATA KOWALCZYK, INTERCOM
* 1 A ¶ Ductwork.
* 2 A Dust.
* 3 A A folding chair wedged between pipes.
* 4 A A thermos.
* 5 A A lunch bag labeled "DO NOT TOUCH."
6 A ¶ RENATA KOWALCZYK, 40s, lanyard, cardigan, eats a sandwich.
7 A Content.
* 8 A A small desk fan hums.
* 9 A ¶ Through the vent grate below: the office.
* 10 A Fluorescent hum.
* 11 A Keyboards.
12 D INTERCOM [V.O.]: Good afternoon, team. A reminder that the quarterly synergy audit begins at three.
13 A ¶ Renata chews.
14 A Nods.
15 A Pours tea.
16 D INTERCOM [V.O., CONT'D]: Auditors will be reviewing all workstations. Including unoccupied ones.
17 A ¶ She stops chewing.
18 D INTERCOM [V.O., CONT'D]: Employee Kowalczyk's desk has been unoccupied for eleven months. Please report to Facilities.
19 A ¶ Renata sets down the sandwich.
20 A Looks through the grate.
* 21 A Her empty cubicle.
* 22 A A dead plant.
* 23 A Her nameplate.
* 24 A ¶ A flashlight beam sweeps the crawlspace behind her.
25 D RENATA (whispering): Oh, no.

### SCENE s01073 | INT. COUNTY COURTHOUSE - LOADING DOCK - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY NADIA BRENNAN, ATTORNEY ELI MORROW, JUDGE OKONKWO-REYES, DEPUTY HALE
* 1 A ¶ Concrete.
* 2 A Rolling carts.
* 3 A Evidence boxes stacked to the ceiling.
* 4 A A freight elevator groans.
5 A ¶ ATTORNEY NADIA BRENNAN, 30s, sharp suit, sneakers, drags a box off a cart.
6 A ATTORNEY ELI MORROW, 50s, rumpled, waits with a clipboard.
7 A Opposing counsel.
8 A Neither smiles.
9 D ELI: You're late.
10 D NADIA: Your clerk lost the key.
11 D ELI: She never loses keys.
12 D NADIA: She lost this one.
13 A ¶ She pops the lid.
* 14 A Inside: a ledger, water-stained.
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
* 27 A Boxes topple.
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
* 42 A ¶ The elevator doors close on the Judge.
43 A Deputy Hale picks up a fallen box.
44 A Sets it carefully back on the stack.

### SCENE s01074 | INT. OFFICE SUPPLY CLOSET WITH A BIRTHDAY PARTY - DAY
Detected names (may be incomplete or contain aliases): GLORIA PETROSYAN, DEZ, ADEYEMI, PRIYA NAIR, TALL MAN, BERTRAM, MAILROOM KID
* 1 A ¶ A closet turned party room.
* 2 A Paper streamers.
* 3 A A sheet cake on a filing box.
* 4 A Fluorescent hum.
* 5 A A banner: HAPPY 5TH ANNIVERSARY OF THE REORG.
6 A ¶ GLORIA PETROSYAN, 50s, regional manager, lanyard heavy with badges, cuts cake into identical squares.
7 A DESMOND "DEZ" ADEYEMI, 30s, tie loosened, scrolls his phone.
8 A PRIYA NAIR, 20s, intern, holds a stack of paper plates like a shield.
9 A ¶ A TALL MAN in a gray suit leans in the doorway.
10 A Clipboard.
11 A No smile.
* 12 A Nobody knows him.
13 D GLORIA: Cake?
14 D DEZ: I'm good.
15 D PRIYA: I'll take his. If he's not.
16 D GLORIA: Take two.
17 A ¶ Priya takes two.
18 A Eats one standing.
19 A Dez keeps scrolling.
20 D TALL MAN: Is this the Q3 alignment huddle?
21 D GLORIA: It's cake.
22 D TALL MAN: But is it a huddle?
23 D DEZ (muttering): Everything's a huddle.
24 D PRIYA: Is that bad?
25 D DEZ: It's Tuesday.
26 A ¶ The Tall Man writes something.
27 A Gloria slides a square toward him.
28 A He doesn't take it.
29 D GLORIA: You're with Compliance?
30 D TALL MAN: Efficiency.
31 D DEZ: Same floor as Compliance.
32 D TALL MAN: Different elevator.
33 A ¶ Priya laughs.
34 A Stops.
35 A Looks at Gloria.
36 A Gloria is not laughing.
37 D GLORIA: Name?
38 D TALL MAN: Hollis. Bertram Hollis.
39 D GLORIA: Mr. Hollis. Cake?
40 D BERTRAM (softening): Fine. A small one.
41 A ¶ She hands him a plate.
42 A He eats.
43 A Chews slowly.
44 A Dez finally pockets his phone.
45 D DEZ: So what's being made efficient?
46 D BERTRAM: Closets.
47 D PRIYA: This closet?
48 D BERTRAM: Any closet.
49 A ¶ Gloria and Dez trade a look.
50 A Priya stuffs the second square in her mouth whole.
51 D GLORIA: We use this one.
52 D BERTRAM: For parties.
53 D GLORIA: For morale.
54 D BERTRAM: Morale isn't a line item.
55 D DEZ: Neither is you.
* 56 A ¶ Silence.
57 A Priya swallows.
58 A Bertram caps his pen, uncaps it.
59 D BERTRAM: I'll note the cake.
60 D GLORIA: Note the frosting. It's lemon.
61 D BERTRAM: Lemon.
62 D PRIYA: Lemon's her mother's recipe.
63 D GLORIA: It's not.
64 D PRIYA: Oh.
* 65 A ¶ The door swings.
* 66 A A cart of toner cartridges rolls in, pushed by nobody visible.
67 A Everyone steps back.
* 68 A The cart bumps the cake box.
* 69 A Cake wobbles.
70 A ¶ All four grab at the box.
71 A Dez catches the front corner.
72 A Priya the back.
73 A Gloria the cake.
74 A Bertram the banner.
* 75 A Everything holds.
76 A ¶ They stand like that.
77 A Breathing.
78 D DEZ: Nobody say anything.
79 D BERTRAM: I wasn't going to.
80 D GLORIA: Mr. Hollis, you're holding a banner.
81 D BERTRAM: So I am.
82 A ¶ He doesn't let go.
83 A Neither does anyone else.
* 84 A The fluorescent hum fills the closet.
85 D PRIYA: Is this the huddle?
86 D BERTRAM (dry): Yes.
87 D GLORIA: Then I'd say alignment is achieved.
88 A ¶ Dez snorts.
89 A Priya giggles.
90 A Bertram, against his will, almost smiles.
* 91 A The cart's wheel squeaks once, and a tiny voice calls from behind the toner.
92 D MAILROOM KID [O.S.]: Sorry! Sorry. Is that Gloria's closet?
93 D GLORIA (calling): It's everyone's closet.
94 D MAILROOM KID [O.S.]: Cool. Also there's cake?
95 A ¶ Gloria hands Priya the knife.
96 D GLORIA: Cut another.

### SCENE s01075 | EXT. HANGING BRIDGE OF SPIDERSILK - ABOVE THE MOONLIT CHASM - NIGHT
Detected names (may be incomplete or contain aliases): QUEEN ISOLDE VANTERRE, MORVAN UNMADE, ROYAL HERALD
* 1 A ¶ Wind howls.
* 2 A A bridge of woven silver thread spans a bottomless gorge.
* 3 A Far below, pale lights drift like fallen stars.
4 A ¶ QUEEN ISOLDE VANTERRE, 40s, crowned in antlers of white bone, grips the rail.
5 A Her cloak snaps in the gale.
6 A Opposite her, at the far end of the span: MORVAN THE UNMADE, ageless, a figure of black smoke and one burning eye.
7 D QUEEN ISOLDE: You have no claim on this valley.
8 D MORVAN (echoing, from everywhere): The valley has no claim on you, and yet you bleed for it.
9 A ¶ She steps onto the bridge.
* 10 A Threads hum beneath her boots.
11 D QUEEN ISOLDE: Go back to your cold hollow, Morvan.
12 D MORVAN: Come and make me.
* 13 A ¶ A horn sounds from the castle far behind her.
14 A Isolde does not turn.
* 15 A Smoke rolls along the silver strands.
16 D ROYAL HERALD [V.O.] (distant, over the wind): Majesty! The east wall has fallen! Return at once!
17 D QUEEN ISOLDE (calling back): Hold the gate!
18 A ¶ She draws a pale sword from her belt.
* 19 A It blazes white.
20 A Morvan lifts a hand; the smoke thickens into a spear of shadow.
21 D MORVAN: You cannot be in two places, little queen.
22 D QUEEN ISOLDE: I am not in two places. I am here.
23 A ¶ She runs.
* 24 A The bridge sways.
* 25 A The spear hurls.
26 A Her blade meets it in a burst of light, and the gorge rings like a bell.
27 D MORVAN: Then fall here.
28 D QUEEN ISOLDE: Not while a thread holds.
29 A ¶ She drives forward.
30 A Smoke breaks around her.
* 31 A The silver strands blaze.
32 A Morvan roars.
* 33 A ¶ The wind does not let up.

### SCENE s01076 | INT. HOTEL BALLROOM - STACKED CHAIRS AFTER A CONFERENCE - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE DELACROIX-OYELARAN, THADDEUS BECK
* 1 A ¶ Chairs stacked in towers.
* 2 A A banner reading SYNERGY SUMMIT sags from one corner.
* 3 A Two coffee urns, empty.
4 A One man, one woman, one table.
5 A ¶ MARGUERITE DELACROIX-OYELARAN, 50s, VP of Culture.
6 A Reading glasses on a chain.
7 A THADDEUS BECK, 30s, regional trainer, name tag still on.
8 A She sits.
9 A He stands.
10 D MARGUERITE: Sit, Thaddeus.
11 D THADDEUS: I'd rather stand.
12 D MARGUERITE: That's what people say before they're fired.
13 D THADDEUS: Am I being fired?
14 D MARGUERITE: No. You're being promoted. Which is worse.
15 D THADDEUS: Okay.
16 D MARGUERITE: You'll lead the new Innovation Pod. Eight people. No budget.
17 D THADDEUS: That's not a promotion.
18 D MARGUERITE: It has a title.
19 D THADDEUS: What title?
20 D MARGUERITE: Chief Pod Officer.
21 D THADDEUS: That's a joke.
22 D MARGUERITE: It's on the org chart. I printed it.
23 D THADDEUS: Marguerite.
24 D MARGUERITE: I know.
25 D THADDEUS: Last month you cut my team in half. You said "lean."
26 D MARGUERITE: It was lean.
27 D THADDEUS: You said "family."
28 D MARGUERITE: We are a family.
29 D THADDEUS: Families don't send a calendar invite for a funeral.
30 D MARGUERITE: Thaddeus.
31 D THADDEUS: They sent me an invite. For my own mentor's funeral. Titled "Farewell Sync."
32 D MARGUERITE: That was an unfortunate template.
33 D THADDEUS: It had a Zoom link.
34 D MARGUERITE: Lower your voice.
35 D THADDEUS: The room is empty!
36 D MARGUERITE: The walls are not.
37 D THADDEUS: I trained four hundred people today. About "psychological safety." Four hundred. I held their hands.
38 D MARGUERITE: And they loved you.
39 D THADDEUS: They're also being laid off.
40 D MARGUERITE: You knew that.
41 D THADDEUS: I found out at lunch. From a vending machine receipt. Somebody's severance code was on it.
42 D MARGUERITE: That's an IT problem.
43 D THADDEUS: No. That's a me problem. I smiled at them. I handed out lanyards. With their termination dates printed on the back.
44 D MARGUERITE (quietly): Thaddeus.
45 D THADDEUS: I'm done. Chief Pod Officer. I'm done.
46 D MARGUERITE: You can't quit. You haven't vested.
47 D THADDEUS: Watch me.
48 A ¶ He rips off his name tag and slaps it on the table.
49 A She stares at it a long moment.
50 D MARGUERITE: That's a two-hundred-dollar badge.
51 D THADDEUS: Put it on the budget I don't have.

### SCENE s01077 | EXT. SALT FLATS - ABANDONED RAILWAY SIDING - DAWN
Detected names (may be incomplete or contain aliases): MAJOR ALEKSANDRA VOSS, LIEUTENANT RAFAEL OROZCO
* 1 A ¶ Glare off the white crust.
* 2 A A rusting locomotive sits on a rail that leads nowhere.
* 3 A Smoke on the horizon.
4 A ¶ MAJOR ALEKSANDRA VOSS, 40s, field coat, a bandage across her palm, crouches by the engine's wheel.
5 A Beside her, LIEUTENANT RAFAEL OROZCO, 20s, pale and sunburned, scans the horizon with binoculars.
6 A ¶ She wipes grit from a map.
7 A He lowers the glasses.
8 D OROZCO: Dust on the east road, Major.
9 D VOSS: How much?
10 D OROZCO: A lot.
11 A ¶ She stands.
12 A Squints.
13 A Unfolds the map across the locomotive's flank.
14 D VOSS: Armor, then. Or trucks. We'll know in a minute.
15 A ¶ He doesn't move.
16 A She looks at him.
17 A He is gripping the binoculars hard.
18 D VOSS [CONT'D]: Lieutenant.
19 D OROZCO: Ma'am.
20 D VOSS: Breathe.
21 A ¶ He does.
22 A She takes the glasses from his hands, raises them.
23 A Her jaw sets.
24 D OROZCO: It's trucks?
25 D VOSS: It's both.
26 A ¶ She hands the binoculars back.
27 A He looks again.
28 A Lowers them slowly.
29 D OROZCO: We could hole up in the engine.
30 D VOSS: It's a coffin with a smokestack.
31 A ¶ He nods.
32 A He stares at the rails.
33 A She folds the map, tucks it into her coat, pulls out a small mirror.
34 D OROZCO: What's that for?
35 D VOSS: Signal. If anyone is still listening on that ridge.
36 A ¶ He watches her angle the mirror to the sun.
* 37 A A flash.
* 38 A Another.
* 39 A Another.
40 A She waits.
41 A He waits.
* 42 A Nothing answers.
43 D OROZCO: Ma'am. If nobody is there?
44 D VOSS: Then we signal anyway.
45 A ¶ She flashes again.
* 46 A The dust cloud swells on the road.
47 A He pulls his rifle from his shoulder.
48 A She puts her hand on the barrel.
49 A Gently.
50 A He looks at her.
51 D VOSS [CONT'D]: Not yet.
52 A ¶ He lowers it.
* 53 A The sun climbs higher.
* 54 A Far off, an engine note rises, like a long breath drawn.
55 A ¶ She keeps flashing the mirror.
56 A He starts to count under his breath.

### SCENE s01078 | INT. SKATING RINK CONCESSION STAND - AFTERNOON
Detected names (may be incomplete or contain aliases): JUNE, ABARA, DANNY KOSTOPOULOS, MR. PRUITT
* 1 A ¶ 1989.
* 2 A Faded posters of rollerskates.
* 3 A A disco ball turns slowly over empty hardwood.
* 4 A The popcorn machine hums.
* 5 A Behind the counter, a cluttered shelf of mismatched rental skates.
6 A ¶ JUNIPER "JUNE" ABARA, 16, braids and a Walkman, counts quarters into a cash drawer.
7 A She is the only one working.
8 A Her mouth moves silently with whatever she hears.
* 9 A ¶ The front door chimes.
10 A DANNY KOSTOPOULOS, 17, enters.
11 A Letterman jacket too big for him.
12 A He carries a gym bag.
13 D DANNY: Hey. Is the big room open?
14 D JUNE (pulling off a headphone): Not till four.
15 D DANNY: I'll wait.
16 D JUNE: Suit yourself.
17 A ¶ He sits on a stool.
18 A Taps the counter.
19 A Pretends not to look at her.
20 A She pretends not to notice.
21 D DANNY: Do you work here, like, always?
22 D JUNE: Saturdays. And school nights. And whenever Mr. Pruitt forgets to pay somebody else.
23 D DANNY: That sounds rough.
24 D JUNE: It's okay. I get free popcorn.
25 A ¶ She slides a small bag across the counter.
26 A He takes it.
27 D DANNY: Thanks.
28 D JUNE: Don't tell Pruitt.
29 D DANNY: Wouldn't.
30 A ¶ They sit in friendly quiet.
* 31 A The disco ball turns.
* 32 A A speaker crackles overhead.
33 D MR. PRUITT [V.O.] (over the PA): June, did you restock the nacho cheese?
34 D JUNE (calling up at the ceiling): Yes, Mr. Pruitt!
35 D MR. PRUITT [V.O.]: Good girl.
36 A ¶ June rolls her eyes.
37 A Danny almost laughs.
38 A He pulls a folded paper from his jacket.
39 D DANNY: Can I ask you something? Not weird.
40 D JUNE: That's how weird questions start.
41 D DANNY: It's about my sister.
42 D JUNE: Okay.
43 A ¶ He unfolds the paper.
* 44 A A flyer.
* 45 A A missing-person flyer, photocopied crooked.
* 46 A A girl's face, braids like June's.
47 D DANNY: She worked here. Last summer.
48 A ¶ June stops counting quarters.
49 D JUNE: Rosalind.
50 D DANNY: You knew her?
51 D JUNE: I took her shifts. When she left.
52 D DANNY: She didn't leave. She --
53 A ¶ He cuts himself off.
54 A June closes the cash drawer.
55 A Very slowly.
56 D JUNE: Danny. Mr. Pruitt keeps a locked room. Behind the skate lockers.
57 D DANNY: What's in it?
58 D JUNE: I don't know. But Rosalind's jacket is hanging on the door.
59 A ¶ Danny stares at her.
* 60 A The popcorn machine hums.
* 61 A The disco ball spins across his face.
62 D DANNY: Show me.
63 D JUNE: Not now.
64 D DANNY: Why not?
65 D MR. PRUITT [V.O.] (over the PA, cheerful): Folks, we're opening the big room early today. Skate on in!
* 66 A ¶ The doors at the far end of the rink swing open.
* 67 A Light floods the floor.
68 D JUNE: That's why.
69 A ¶ She reaches under the counter.
70 A Pulls out a ring of keys.
71 A Presses them into his palm.
72 D JUNE [CONT'D]: Four o'clock. When the music's loud. The brass one.
73 D DANNY (barely a whisper): Thank you.
74 D JUNE: Don't thank me yet.
75 A ¶ Danny pockets the keys.
76 A Picks up his gym bag.
* 77 A Skaters spill through the far doors.
78 A June puts on her Walkman and turns back to the register, calm as a clock.
79 A ¶ The disco ball catches Danny's face one last time as he walks into the crowd.

### SCENE s01079_0 | INT. LIGHTHOUSE KEEPER'S COTTAGE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): TAMSIN HOLLOWAY, RADIO
* 1 A ¶ A storm presses at the windows.
* 2 A A single oil lamp.
* 3 A A cracked radio on the sill.
* 4 A Bread dough rises under a damp cloth.
5 A ¶ TAMSIN HOLLOWAY, 15, wool sweater, sleeves pushed up, kneads at the table.
6 A She is alone.
7 A She talks to the dough.
8 D TAMSIN: You'll be fine. You're a good loaf. Don't listen to the wind.
* 9 A ¶ The radio hisses.
10 A She wipes her hands on her apron and turns the dial.
11 D RADIO [V.O.] (crackling): ...coast guard advises all small craft... gale force... off Marrow Point...
12 A ¶ She turns it up.
13 A Frowns.
14 D TAMSIN: That's us.
15 A ¶ She checks the clock.
* 16 A 9:40.
17 A Pulls on a coat.
18 A Picks up the lamp.
19 D TAMSIN [CONT'D]: Dad said stay inside. Dad also said the light never fails.
20 A ¶ She opens the back door.
* 21 A Wind slams it wide.
22 A She shoves it closed, hard, then tries again, shoulder first.

### SCENE s01079_1 | EXT. LIGHTHOUSE STAIRS - CONTINUOUS
Detected names (may be incomplete or contain aliases): TAMSIN, RADIO, ELIAS MARRIOT
* 1 A ¶ Narrow iron steps spiral up into the dark.
2 A Tamsin climbs, lamp swinging.
3 D TAMSIN [CONT'D] (to herself): Seventy-two steps. Seventy-two. Don't count the missing one.
* 4 A ¶ Halfway up, the radio in her coat pocket crackles.
5 A She stops.
6 A Pulls it out.
7 D RADIO [V.O.] (faint): Keeper, come in. Keeper Holloway, do you read?
8 D TAMSIN: It's Tamsin. Dad's in town. The boat didn't come back.
9 D RADIO [V.O.] (pause, static): Understood. How is your light?
10 D TAMSIN: Dark. I'm going up.
* 11 A ¶ At the top, the lantern room.
* 12 A A hulking brass mechanism, silent.
* 13 A Salt crusts the glass.
14 A And at the far side, crouched in the shadow:
15 A ¶ An old man in an oilskin coat.
16 A ELIAS MARRIOT, 70s, beard like seaweed.
17 A His hands tremble over a half-broken gear.
18 D TAMSIN [CONT'D] (freezing): Who are you?
19 D ELIAS: Don't be frightened. I came to fix it.
20 D TAMSIN: Nobody fixes it but us.
21 D ELIAS: Your father asked me. Years ago. Said if the light ever failed.
22 D TAMSIN: He never told me about you.
23 D ELIAS: He wouldn't.
24 A ¶ Elias lifts the gear in both hands.
* 25 A It gleams, wet with oil.
26 A Tamsin sets the lamp down on the floor and kneels beside him.
27 D TAMSIN: Show me.
28 D ELIAS: Hold it steady.
29 A ¶ She does.
30 A He threads a bolt.
* 31 A The mechanism groans.
* 32 A Wind howls at the glass.
33 D RADIO [V.O.]: Keeper, I have a trawler off Marrow Point. They need your beam.
34 D TAMSIN (shouting at the radio): Ten minutes!
35 A ¶ Elias turns the final bolt.
* 36 A The gear catches.
* 37 A A great shuddering sweep of light cuts out across the black water.
38 A ¶ Tamsin laughs, breathless.
39 A Elias smiles, slow and tired.
40 D TAMSIN [CONT'D]: Seventy-two steps.
41 D ELIAS: Seventy-three. You forgot the one you made.
42 A ¶ She looks out at the beam, wide and white, finding the sea.

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
9 D SALAZAR-KIM: Mr. Pike, your client claims the landlord shut off her heat for three winters.
10 D PIKE: Correct.
11 D SALAZAR-KIM: Mrs. Yusupova, is that accurate?
12 D MRS. YUSUPOVA: Cold. Always cold. I wear coat in kitchen.
13 D SALAZAR-KIM: And the landlord, Mr. Brandt, says he was never notified.
14 D PIKE: We have eleven letters.
15 D SALAZAR-KIM: Sent how?
16 D PIKE: Certified mail.
17 D MRS. YUSUPOVA: Also I knock his door. Many times.
18 D SALAZAR-KIM: Did he answer?
19 D MRS. YUSUPOVA: Once. He gave me blanket.
20 D PIKE: Your Honor, that's not relevant.
21 D SALAZAR-KIM: I'm an arbitrator, Mr. Pike. Not a Your Honor. And I'd like to hear about the blanket.
22 D MRS. YUSUPOVA: Gray. Scratchy. Smell like dog.
23 D SALAZAR-KIM (writing): Gray, scratchy, smelled like dog.
24 D PIKE: We'd ask for restitution of nine thousand dollars.
25 D SALAZAR-KIM: And the blanket?
26 D MRS. YUSUPOVA: Keep. Is warm.

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
9 D ROCCO: Eighty. Eighty-five. Ninety.
10 D SAL: Where's the rest?
11 D ROCCO: Counting, Sal.
12 D LENA: Timothy, put the bag on the table.
13 D TIMOTHY: It's fine here.
14 D SAL: Put it on the table.
15 D TIMOTHY: I said it's fine.
16 D LENA: Why are you sweating?
17 D TIMOTHY: It's hot.
18 D SAL: It's a taxidermy shop in November.
19 D TIMOTHY: The badger gives off heat.
20 D ROCCO (not looking up): Ninety-five. A hundred.
21 A ¶ Lena shifts her chair.
* 22 A A floorboard creaks somewhere above them.
23 A Timothy flinches.
24 D SAL: Who else is here?
25 D TIMOTHY: Nobody.
26 D LENA: There's a second floor?
27 D ROCCO: Storage.
28 D SAL: Check it.
29 D LENA: I'll check it.
30 D ROCCO: Sit down, Lena.
31 D LENA: Rocco, there's something up there.
32 D ROCCO: It's a possum. Frank keeps one on a branch.
33 D SAL: Dead?
34 D ROCCO: Obviously dead.
* 35 A ¶ The ceiling creaks again.
36 A All four look up.
* 37 A The bulb sways.
* 38 A A shadow slides across the badger's snout.
39 D TIMOTHY: That didn't sound dead.
40 D LENA: That sounded like a person.
41 D SAL: Give me the bag.
42 D TIMOTHY: No.
43 D SAL: Give me the bag, Timothy.
44 D TIMOTHY: I can't.
45 D ROCCO (slowly setting down the money): Why not?
46 D TIMOTHY: Because it's not the money.
* 47 A ¶ Silence.
* 48 A The bulb swings.
49 A Sal's hand drifts toward his jacket.
50 A Lena eases her chair back.
51 D LENA: Then what is it?
52 D TIMOTHY: I didn't have a choice. They said bring it or --
53 D ROCCO: Who said?
54 D TIMOTHY: The man upstairs.
* 55 A ¶ The ceiling groans.
56 A Footsteps cross to the top of the stairs.
57 A A silhouette fills the doorway above.
58 A Boots descend one step at a time.
59 D SAL (whispering): Rocco.
60 D ROCCO: Everybody stay calm.
61 D LENA: I'm calm.
62 D SAL: I'm not calm.
63 D TIMOTHY: He said don't run.
64 A ¶ The boots reach the bottom stair.
65 A A hand reaches out and flicks off the bulb.
* 66 A Dark.
* 67 A Glass eyes gleam in the red glow of an exit sign.
68 D ROCCO (a hush): Nobody move.
