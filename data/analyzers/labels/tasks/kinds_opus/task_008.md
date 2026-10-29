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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0008.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

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
* 11 D JUNIPER (to the room): Last press of the season. Then we can all go home.
* 12 D RHYS: Or stay.
* 13 D BEATA: No one's staying.
* 14 D OLUWASEUN: I do need a count by midnight.
* 15 D JUNIPER: You'll have it.
16 A ¶ She turns the screw.
* 17 A Juice runs into a trough, amber and slow.
* 18 A The sound is oddly soft.
* 19 D COLM: It sounds like someone breathing.
* 20 D BEATA: It's the cider, Colm.
* 21 D COLM: Not the cider. Under it.
22 A ¶ They go still.
* 23 A The juice drips.
* 24 A The bees hum.
* 25 A And beneath it all, a slow, wet inhale.
* 26 A Then an exhale.
* 27 D RHYS (muttering): Pipes.
* 28 D JUNIPER: There are no pipes in the press room.
* 29 D OLUWASEUN: Is there a basement?
30 A ¶ Juniper and Beata exchange a look so quick it's nearly nothing.
* 31 D BEATA: No basement.
* 32 D JUNIPER: We don't dig here.
* 33 D OLUWASEUN: Why not?
* 34 D JUNIPER: The ground doesn't like it.
35 A ¶ Oluwaseun smiles, thinks it a joke.
36 A Nobody smiles back.
* 37 A ¶ The lantern swings.
* 38 A Its light crosses Rhys's face, Beata's hands, Colm's eyes, Juniper's braid.
* 39 A The hum of bees thickens.
40 A ¶ Juniper lifts a ladle to her lips.
41 A Tastes.
42 A Her face doesn't change.
* 43 D JUNIPER [CONT'D] (to Colm): Put your harmonica down, love.
* 44 D COLM: I wasn't--
* 45 D JUNIPER: Now.
46 A ¶ He sets it on the barrel.
* 47 A It rolls an inch.
* 48 A Stops.
49 A ¶ Beata stops peeling.
50 A The ribbon of apple skin hangs, quivering, in her fingers.
* 51 D BEATA (softly): It's early.
* 52 D JUNIPER: It's early.
* 53 D OLUWASEUN: What is?
* 54 A ¶ The breathing quickens.
* 55 A The barrel under Colm shudders.
* 56 A The staves bulge, as if something inside is leaning out.
57 A ¶ All five freeze.
* 58 A The bees fall silent in the rafters.
59 A ¶ Then, in one motion, Rhys drops the broom, Beata drops the apple, Colm scrambles off the barrel, Oluwaseun stumbles backward over the trough, and Juniper turns calmly, takes a mallet from a hook, and faces the barrel as if she'd been expecting it since March.
60 D JUNIPER [CONT'D] (to all): Out. Quiet. Don't run.
61 A ¶ They go.
62 A Slowly.
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
* 13 D TAMARA [V.O.] (recording): Day four hundred and twelve. All systems nominal. Crew morale: fine.
14 A ¶ She stops the playback.
15 A Her thumb stays on the button.
16 A ¶ She opens a locker.
17 A Takes out a small paper photograph, creased.
18 A Holds it to the light.
19 A Puts it back without looking.
20 A ¶ She types again.
* 21 A Another chime.
* 22 D TAMARA [V.O., CONT'D] (recording): Day four hundred and thirteen. All systems nominal. Crew morale: fine.
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
* 34 D TAMARA: Day four hundred and fourteen.
35 A ¶ A long pause.
* 36 D TAMARA [CONT'D]: All systems nominal.
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
* 9 D EDMUND: Mark it. Eleven forty.
* 10 D VERA: Marked.
* 11 D ALF (muttering): That's no Spitfire.
* 12 A ¶ The field telephone rings.
13 A Edmund snatches it.
* 14 D EDMUND: Post Seven.
* 15 D CONTROL [V.O.]: Post Seven, this is Control. Report.
* 16 D EDMUND: Nothing yet. Heard them over the canal.
* 17 D CONTROL [V.O.]: Hold position. Fire watch at the gasworks says they're dropping flares.
* 18 D EDMUND: Flares.
* 19 D CONTROL [V.O.]: Prepare for incendiaries.
20 A ¶ He hangs up.
21 A Looks at Vera and Alf.
* 22 D EDMUND [CONT'D]: Right. Helmets on. Buckets by the door.
23 A ¶ Vera sets down her cocoa.
24 A Alf rises, joints cracking.
* 25 D VERA: Mr. Hartley, shouldn't we stay below?
* 26 D EDMUND: Not for incendiaries.
* 27 D ALF: You'll want sand, not water.
* 28 D EDMUND: I know my business, Alf.
* 29 D ALF: Nobody said you didn't.
* 30 A ¶ A distant thud.
* 31 A Dust shivers from the ceiling.
* 32 A ¶ The phone rings again.
33 A Edmund picks up.
* 34 D CONTROL [V.O.]: Post Seven. Strike on the Albert Road. Third house from the corner.
35 A ¶ Edmund goes pale.
* 36 D EDMUND: That's my shop.
* 37 D CONTROL [V.O.]: Say again?
* 38 D EDMUND: That's my shop. That's my daughter's flat above it.
* 39 D CONTROL [V.O.]: Warden Hartley, stay at your post.
40 A ¶ He puts the phone down very carefully.
41 A Takes off his helmet.
42 A Puts it back on, tighter.
* 43 D VERA: Mr. Hartley--
* 44 D EDMUND: Vera. Take the register. Alf, you're with me.
* 45 D ALF: Aye.
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
12 A The bathroom.
* 13 A Empty tub.
14 A Under the bed.
* 15 A Dust, a lost sock.
16 A ¶ She sits on the edge of the bed and takes a small tape recorder from her bag.
17 A She presses RECORD.
* 18 D WOMAN (into recorder): Test. Test.
19 A ¶ She stops.
20 A Plays it back.
* 21 A Her own voice, tinny.
* 22 D WOMAN [V.O.] (tape): Test. Test.
23 A ¶ She nods.
24 A Records again.
* 25 D WOMAN: Day one. Motel off Route 9. Nobody followed me. I think.
26 A ¶ She stops the tape.
27 A Looks at the phone on the nightstand.
* 28 A Beige, rotary, curly cord.
29 A She picks up the receiver.
* 30 A Dial tone.
31 A She sets it back.
32 A ¶ She rewinds.
33 A Hits PLAY.
* 34 D WOMAN [V.O.] (tape): Day one. Motel off Route 9. Nobody followed me. I think.
* 35 A ¶ Then, after her recorded voice, the same voice again, lower, almost tender, saying words she never spoke:
* 36 D WOMAN [V.O.] (tape, whispering): I'm in the room.
37 A ¶ She freezes.
* 38 A The tape continues to hiss.
39 A ¶ She hits STOP.
40 A Her thumb shakes.
41 A She rewinds again, plays it again.
* 42 A The extra line is gone.
* 43 A Only the first.
* 44 D WOMAN (quietly): Okay.
45 A ¶ She sets the recorder on the dresser.
46 A Takes off her coat.
47 A Hangs it on the doorknob.
* 48 A A key tag drops from the pocket and clatters to the floor.
49 A She picks it up.
* 50 A The tag is stamped in hand-scratched letters: PROPERTY OF LENA MARSH.
51 A ¶ She turns it over, turns it back.
* 52 D LENA (to herself): Right. Right. I'm Lena.
53 A ¶ She says it as if reminding herself.
54 A She says it again.
* 55 D LENA [CONT'D]: Lena Marsh. Thirty-four. Dental hygienist. Born in Duluth.
56 A ¶ She reaches for the lamp.
57 A Clicks it off.
* 58 A The room is almost black.
* 59 A A glow leaks around the curtain edge.
* 60 A ¶ On the dresser, the recorder clicks on by itself.
* 61 A The tape reels turn.
* 62 D LENA [CONT'D]: No.
* 63 D LENA [V.O.] (tape): Lena.
64 A ¶ She backs against the wall.
* 65 D LENA: That's my voice.
* 66 D LENA [V.O.] (tape): You taped me yesterday. In the car.
* 67 D LENA: I wasn't in a car yesterday.
* 68 D LENA [V.O.] (tape): No. But you will be.
69 A ¶ She lunges.
70 A Grabs the recorder.
71 A Rips the cassette out.
72 A Throws it across the room.
* 73 A It hits the TV and cracks.
* 74 A ¶ Silence.
* 75 A Rain.
76 A Breath.
77 A ¶ She slides down the wall until she's sitting on the floor.
78 A She hugs her knees.
* 79 A ¶ From the bathroom: a click.
* 80 A A drip.
* 81 A Another click.
* 82 D LENA [CONT'D] (whispering): Please.
* 83 A ¶ The bathroom light snaps on by itself.
* 84 A A thin line of yellow slides under the door.
* 85 D LENA [CONT'D] (barely audible): Please don't.
* 86 A ¶ The doorknob turns on its own.
87 A ¶ She crawls to the bed.
88 A Under it.
* 89 A Dust, the lost sock.
90 A Her own hand finds the cracked cassette.
* 91 A ¶ The bathroom door creaks.
* 92 D LENA [V.O.] (from the cracked cassette, gentle): Day two.
93 A ¶ She presses the cassette to her chest.
94 A Doesn't breathe.
* 95 A ¶ The bathroom light hums.
* 96 A The cassette hisses against her chest.
* 97 D LENA [V.O., CONT'D]: Nobody followed me.
* 98 D LENA (a thread of voice): I know.
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
* 9 D PHILOMENA: You never come on Sundays anymore.
* 10 D ARTUR: I come on Sundays, Ma.
* 11 D PHILOMENA: You come on the Sundays you remember.
* 12 D ARTUR: That's most of them.
* 13 D PHILOMENA: Most. Hmph.
14 A ¶ She tastes the sauce.
15 A Adds salt.
16 A Stirs.
* 17 D SOLEDAD: It smells good, Nonna.
* 18 D PHILOMENA: It smells like your grandfather's lies.
* 19 D SOLEDAD: What?
* 20 D PHILOMENA: He swore he could cook. He burned water.
* 21 D ARTUR: Ma, not today.
* 22 D PHILOMENA: Why not today?
* 23 D ARTUR: Because.
* 24 D PHILOMENA: Because what?
* 25 D ARTUR: Because it's Sunday.
26 A ¶ She snorts.
27 A Taps the spoon on the pot.
* 28 D PHILOMENA: You think I don't know why you've brought the child.
* 29 D ARTUR: Soledad's here because she wanted to see you.
* 30 D SOLEDAD: I did.
* 31 D PHILOMENA: You came to hold my hand while Arturo tells me something he has been practicing in the car.
* 32 D ARTUR: Ma.
* 33 D PHILOMENA: Tell me.
34 A ¶ Artur sets the knife down.
35 A Wipes his fingers.
* 36 A Looks at his daughter, who looks at her phone, pretending not to hear.
* 37 D ARTUR: The doctor called.
* 38 D PHILOMENA: Which doctor?
* 39 D ARTUR: The one with the results. For the house.
* 40 D PHILOMENA: The house is not sick.
* 41 D ARTUR: The house is not sick, Ma. You are.
* 42 A ¶ The clock ticks.
* 43 A The sauce pops.
44 A Philomena does not turn.
* 45 D PHILOMENA: I know that.
* 46 D ARTUR: You know?
* 47 D PHILOMENA: I am eighty. I have buried a husband, two brothers, and a dog named Salvatore. I know what a cough means.
* 48 D SOLEDAD: Nonna?
* 49 D PHILOMENA: Hush, cara.
* 50 D ARTUR: They want to put you somewhere. Just for a little while. Somewhere with nurses.
* 51 D PHILOMENA: Somewhere with nurses.
* 52 D ARTUR: Not forever.
* 53 D PHILOMENA: They never say forever. They say a little while.
* 54 D ARTUR: I didn't want to.
* 55 D PHILOMENA: You didn't want to tell me, or you didn't want to put me in a place?
* 56 D ARTUR: Both.
57 A ¶ She turns now.
58 A Her face is wet.
59 A It isn't steam.
60 A She wipes it on her sleeve.
* 61 D PHILOMENA: Sit with me. Both of you.
62 A ¶ They sit.
63 A She lifts the pot, spoons a bowl, sets it before Soledad.
* 64 D PHILOMENA [CONT'D]: Eat. It gets cold.
* 65 D SOLEDAD: I'm not hungry.
* 66 D PHILOMENA: You'll be hungry in a month. When I'm not here to feed you.
67 A ¶ She says it lightly.
68 A A joke.
69 A Nobody laughs.
* 70 D ARTUR: Ma. Please.
* 71 D PHILOMENA: Arturo. Your father's recipe. It's in the drawer, under the knives. Never in a book. I wrote it on the back of an electric bill.
* 72 D ARTUR: I know.
* 73 D PHILOMENA: You do not know. You think there is a secret ingredient. There isn't. There is only a woman standing here at four o'clock every Sunday for fifty-eight years.
74 A ¶ She sits.
75 A Folds her hands.
* 76 D PHILOMENA [CONT'D]: That's the ingredient. Now eat.
77 A ¶ Soledad takes a spoonful.
78 A Her face crumples.
79 A She keeps eating.
80 A ¶ Artur reaches across the lemons and takes his mother's hand.
81 A It is small and knotted and warm.
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
* 10 D DUCHESS: Gentlemen. Miss Pearl. We are assembled.
* 11 D BONES: We've been assembled for an hour.
* 12 D DUCHESS: And now we are in session.
* 13 D LAVALLE: Is that a legal term?
* 14 D DUCHESS: It's a theatrical one.
* 15 D SLIM: The count is simple. Four million, in unmarked bills, locked in the carousel's center column. The man who stored it was a bad carpenter and a worse liar.
* 16 D PEARL: Which column? There's six.
* 17 D SLIM: The one that doesn't turn.
* 18 D LAVALLE: They all turn.
* 19 D SLIM: Not that one. I've watched it for three weeks.
* 20 D BONES: Thank God somebody watched something.
* 21 D PEARL: How do we get in?
* 22 D DUCHESS: The same way everyone gets in anywhere. We pretend we belong.
* 23 D LAVALLE: In a closed amusement park.
* 24 D DUCHESS: In a closed amusement park, at night, with permits.
* 25 D SLIM: Are the permits real?
* 26 D DUCHESS: Mr. Pollard, nothing is real. That's the pleasure of the business.
* 27 D BONES: Who's driving?
* 28 D DUCHESS: Pearl.
* 29 D PEARL: I thought I was the lock.
* 30 D DUCHESS: You are both. We are a small company.
* 31 D PEARL (grinning): Then I want a bigger cut.
* 32 D DUCHESS: You'll have a bigger bow.
* 33 D LAVALLE: Are we agreed on the split?
* 34 D SLIM: Equal shares. Five ways.
* 35 D BONES: Six.
* 36 D DUCHESS: Six?
* 37 D BONES: There's a sixth share in Mr. Lavalle's ledger. Somebody we've never met.
* 38 A ¶ Silence.
* 39 A The carousel lamps flicker.
40 A Slim turns the ledger toward the light.
41 A Pearl stops spinning the pick.
* 42 D DUCHESS (very softly): Mr. Lavalle. You told me nobody else knew.
* 43 D LAVALLE (polishing): I told you what you needed to hear.
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
* 9 D ISMAIL: Bed six, no change.
* 10 D BRONWEN: Bed six, no change.
* 11 D ISMAIL: Bed nine?
* 12 D LINH: Temp is ninety-nine point one.
* 13 D ISMAIL: Fine. Leave it.
* 14 D LINH: I was going to.
* 15 D TOBIAS: Do we have more mop heads?
* 16 D BRONWEN: Closet, port side.
* 17 D TOBIAS: Port is?
* 18 D BRONWEN: Left.
* 19 D TOBIAS: Thanks.
* 20 A ¶ The barge shifts.
* 21 A A low groan runs through the hull.
22 A Nobody reacts.
* 23 A The IV pole sways against its bungee.
* 24 D MRS. WRAY: Doctor.
* 25 D ISMAIL: Yes, Mrs. Wray.
* 26 D MRS. WRAY: Is it always so slow at night?
* 27 D ISMAIL: Usually it's slower.
* 28 D MRS. WRAY: Then I'm in luck.
* 29 D ISMAIL: Are you in pain?
* 30 D MRS. WRAY: Only boredom.
* 31 D LINH (through crackers): I can read you something.
* 32 D MRS. WRAY: What have you got?
* 33 D LINH: The back of the cracker box.
* 34 D MRS. WRAY: Go ahead.
* 35 D LINH: "Made with whole grains. Best before March."
* 36 D MRS. WRAY: Beautiful.
37 A ¶ Bronwen stifles a laugh.
38 A Ismail glances over his glasses, almost smiles.
* 39 D TOBIAS: Dr. Karimi, should I do the starboard side next?
* 40 D ISMAIL: If you like.
* 41 D TOBIAS: I do like.
* 42 D ISMAIL: Then carry on.
* 43 A ¶ The barge's horn sounds, low and soft, a note across water.
* 44 D BRONWEN: That's Calder Landing.
* 45 D ISMAIL: We dock in an hour.
* 46 D LINH: Do we get shore leave?
* 47 D ISMAIL: We get paperwork.
* 48 D LINH: Same thing.
* 49 D ISMAIL: Dr. Thai.
* 50 D LINH: Sorry.
51 A ¶ Mrs. Wray settles into her pillow.
52 A Her eyes close.
* 53 A A pulse monitor beeps in a slow, steady tick.
54 A ¶ Bronwen adjusts the blanket across her knees.
55 A Tucks it neat.
* 56 D BRONWEN (softly): Sleep well.
* 57 D MRS. WRAY (eyes closed): Everything's fine?
* 58 D BRONWEN: Everything's fine.
59 A ¶ She turns off the flashlight.
* 60 A The ward falls into amber, quiet, familiar dark.

### SCENE s01058 | INT. BARBERSHOP - SAGUARO FLATS - AFTERNOON
Detected names (may be incomplete or contain aliases): COLTER BANKS, MAGDALENA REYES
* 1 A ¶ One chair, one mirror, one spittoon.
* 2 A Sun lances through the front window.
* 3 A A fly drones against the glass.
4 A ¶ COLTER BANKS, 40s, barber, sleeves rolled, strops a razor.
5 A In the chair, MAGDALENA REYES, 30s, trail dust on her coat, a gun belt buckled low, lies back with a hot towel on her face.
* 6 D COLTER: Haircut or shave?
* 7 D MAGDALENA (muffled): Shave.
* 8 D COLTER: You've got no beard, ma'am.
* 9 D MAGDALENA: Then it'll be quick.
10 A ¶ He chuckles.
11 A Lifts the towel.
12 A Her eyes are closed.
13 A She doesn't smile.
* 14 D COLTER [CONT'D]: Nice town, isn't it?
* 15 D MAGDALENA: Quiet.
* 16 D COLTER: Quiet's good for business.
* 17 D MAGDALENA: Not for yours.
* 18 D COLTER: I don't need a crowd. Just a few regulars.
* 19 D MAGDALENA: Like Sheriff Haynes.
20 A ¶ His strop stops mid-stroke.
* 21 D COLTER: You know the sheriff?
* 22 D MAGDALENA: I know his boots. They're on your wall. Left side, behind the broom.
23 A ¶ Colter's eyes flick to the corner.
* 24 A A pair of polished boots, neat, side by side, dusty at the toes.
* 25 D COLTER: Left them here weeks ago. Said he'd be back.
* 26 D MAGDALENA: He won't.
* 27 D COLTER: Is that a fact.
* 28 D MAGDALENA: It's a fact, Colter.
29 A ¶ He sets the razor on the counter.
30 A Picks up a comb.
31 A Combs her hair with sudden care.
* 32 D COLTER: I never told you my name.
* 33 D MAGDALENA: It's on the window.
* 34 D COLTER: Right.
35 A ¶ He combs.
36 A She waits.
* 37 A The fly buzzes.
* 38 A Out in the street, a dog barks, stops.
* 39 D COLTER [CONT'D]: Is there something I should know?
* 40 D MAGDALENA: I'm going to ask you a question, and I want you to answer it honestly.
* 41 D COLTER: All right.
* 42 D MAGDALENA: Where's the sheriff?
* 43 D COLTER: Out of town.
* 44 D MAGDALENA: Where?
* 45 D COLTER: Does it matter?
* 46 D MAGDALENA: It's my brother who sent him.
47 A ¶ Colter's hand stops on her scalp.
48 A The comb freezes.
* 49 D COLTER: Your brother?
* 50 D MAGDALENA: Santiago Reyes. Brown horse. Left ear notched.
* 51 D COLTER: I don't--
* 52 D MAGDALENA: Sheriff Haynes rode out of here with him and his saddlebags and came back with only the horse.
53 A ¶ Colter steps away from the chair.
54 A She opens her eyes.
55 A Calm.
56 A Cold.
* 57 D COLTER: Ma'am, I'm only a barber.
* 58 D MAGDALENA: You're a man with a bad shave and a good alibi.
* 59 D COLTER: I don't understand.
* 60 D MAGDALENA: Look in the mirror.
61 A ¶ He does.
* 62 A Behind him, in the glass, the front door has quietly opened.
63 A A pair of boots on the threshold.
* 64 A The sheriff's, or the same cut.
* 65 D MAGDALENA [CONT'D] (without turning): Close the door, Colter. Sit down.
66 A ¶ He sits.
67 A His hands are shaking.
68 A She rises, rolls her sleeves, and takes the razor from the counter.
69 A Tests the edge with her thumb.
* 70 D MAGDALENA [CONT'D]: Now. Let's have that talk.
