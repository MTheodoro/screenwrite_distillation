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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0132.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01019 | INT. HOUSEBOAT KITCHEN - THUNDERSTORM - NIGHT
Detected names (may be incomplete or contain aliases): BERNADETTE, WILLEM, JASPER, ARLO
* 1 A ¶ A narrow galley that rocks with each swell of the canal.
* 2 A Copper pots hang from hooks and sway like slow bells.
* 3 A A kettle sits cold on a gas ring.
* 4 A Rain hammers the roof.
* 5 A The lights have gone out, and a single oil lamp throws a trembling circle across the table.
6 A ¶ BERNADETTE (70s, silver braid, wool shawl, hands knotted with arthritis) sits at the head of the table with a ball of yarn and two needles she is not using.
7 A Her grandson WILLEM (30s, damp suit jacket, briefcase at his feet) sits across, rigid, his coat still buttoned.
8 A His son JASPER (6, pajamas under a rain slicker, a flashlight he keeps switching on and off) kneels on the bench, his nose against the glass.
* 9 A ¶ The boat lurches.
* 10 A A pot swings and clangs against a hook.
11 A Jasper yelps and flicks his flashlight on, pointing it straight at his father's face.
12 A Willem lifts a hand to block the beam.
13 A She watches them both over the rims of her glasses and says nothing.
* 14 A ¶ The old landline on the wall rings.
* 15 A A shrill, antique double-bell.
16 A Nobody moves.
* 17 A It rings again.
18 A She puts down the yarn, eases from the table, shuffles across the swaying floor, and takes the receiver in a hand that trembles only slightly.
19 D BERNADETTE: Yes?
20 D ARLO [V.O.] (over phone, crackling, jovial): Bernie? It's Arlo. I've been calling for an hour.
21 D BERNADETTE: The storm took the lines.
22 D ARLO [V.O.]: And the electric?
23 D BERNADETTE: Gone.
24 D ARLO [V.O.]: Is the boy there? Is Willem there?
25 A ¶ She glances back.
26 A Willem has risen halfway from his chair, his jaw working.
27 A Jasper has twisted around, the flashlight gripped in both small fists.
28 A She turns back and lowers her voice.
29 D BERNADETTE: They're here.
30 D ARLO [V.O.]: Tell Willem I said...
* 31 A ¶ The line crackles.
32 A She holds the receiver away from her ear, then back.
33 D ARLO [V.O., CONT'D]: ...said I was sorry about the will.
34 D BERNADETTE: You can tell him yourself.
35 D ARLO [V.O.]: Bernie, put him on.
36 A ¶ She holds out the receiver.
37 A Willem crosses the cabin in three strides, snatches it from her hand, and sets it to his ear.
38 A Jasper switches off the flashlight.
* 39 A The oil lamp gutters.
* 40 A The boat tilts and rights itself.
41 D WILLEM (into phone, tight): Uncle Arlo. You have some nerve.
42 D ARLO [V.O.]: Willem, listen to me.
43 D WILLEM: No. You listen.
44 A ¶ He turns his back to the room.
45 A His shoulders rise, and for a long moment he says nothing at all.
46 A Bernadette returns to her chair and picks up her knitting.
47 A Jasper slides off the bench and crawls under the table, curling up at his great-grandmother's feet, where the flashlight, switched back on, paints a small yellow moon on the floor.
48 D WILLEM [CONT'D] (quiet, dangerous): Say that again.
49 A ¶ She doesn't look up.
50 A Her needles begin to click.

### SCENE s01020 | INT. FORMER BOWLING ALLEY - EVIDENCE ANNEX - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE OKONKWO, HALVARD PEDERSEN, TECH, KOWALCZYK, OFFICER TRAN, LENNOX, BASHIR
* 1 A ¶ Lane 12 is a ghost of itself.
* 2 A Waxed maple, gutters stacked with cardboard banker's boxes.
* 3 A Overhead, a dead scoreboard still reads HOME 114 / GUEST 98.
4 A ¶ DET. ADAEZE OKONKWO, 40s, rain-wet trench coat, reading glasses pushed up into close-cropped hair, walks the lane like she owns the lease.
5 A ¶ At the ball return sits SGT. HALVARD PEDERSEN, 60, heavy, a thermos between his knees, pretending not to be asleep.
6 D OKONKWO: Who signed the boxes out?
7 D PEDERSEN: Nobody. That's the problem.
8 A ¶ A TECH in a paper suit kneels at the far end, photographing a box lid with a ring light.
9 A Young, narrow shoulders, earbuds in one ear only.
10 D OKONKWO: You. What's your name?
11 D TECH: Just Tech tonight. Ask the lab.
12 A ¶ She moves on.
13 A Doesn't push.
14 A ¶ By the shoe-rental counter, MRS. KOWALCZYK, 70s, cardigan buttoned wrong, clutches a handbag like a flotation device.
15 A She owned this alley for thirty years.
16 D MRS. KOWALCZYK: Strike night was Thursdays. Forty-one lanes of noise. Now listen to it.
* 17 A ¶ Silence.
* 18 A A compressor hums somewhere.
19 D OKONKWO: Ma'am, did you give anyone a key?
20 D MRS. KOWALCZYK: The city has my keys. The city has everything.
21 D PEDERSEN (into thermos): Ain't that the truth.
22 A ¶ OFFICER TRAN, 20s, stiff, enters from the lobby with a clipboard.
23 A He stops at the edge of the lane, unsure if he's allowed to step on it.
24 D OFFICER TRAN: Detective. Gate log's clean. Last entry, six forty p.m. Someone named Lennox.
25 D OKONKWO: First name?
26 D OFFICER TRAN: Just Lennox.
* 27 A ¶ Behind a stack of boxes, a cough.
28 A Everyone looks.
29 A ¶ LENNOX, 50s, gray ponytail, security lanyard, stands up slowly from where he's been sitting on a crate, hands visible and empty.
30 D LENNOX: I'm the night man. I was in the office.
31 D OKONKWO: Mr. Lennox. You've been in the building the whole time.
32 D LENNOX: It's a warm building.
33 A ¶ The Tech glances up, finally pulls the earbud out.
34 D TECH: Bashir. It's Bashir. Since you asked.
35 D OKONKWO: Thank you, Bashir.
36 D BASHIR: Box nineteen has been opened. Seal's cut clean. Razor, not a knife.
37 D OKONKWO: How do you know?
38 D BASHIR: Edge doesn't tear. I do this for a living.
39 A ¶ Okonkwo takes off her glasses.
40 A Folds them.
41 A Looks at Lennox for a long, unhurried moment.
42 D OKONKWO: Walk me through the office, Mr. Lennox.
43 D LENNOX: Sure.
44 A ¶ He doesn't move.
45 A Neither does she.
46 D PEDERSEN: I'll get the coffee.
47 A ¶ He doesn't move either.
48 D BASHIR: Light's good here, if anyone wants to take their time.
49 A ¶ Okonkwo sits down on the foul line, crosses her legs, and waits.

### SCENE s01021 | INT. LIGHTHOUSE LAMP ROOM - DAWN
Detected names (may be incomplete or contain aliases): IGNACIO, WREN
* 1 A ¶ Salt-streaked glass.
* 2 A A Fresnel lens the size of a bus shelter, still turning.
* 3 A Slow.
* 4 A Heavy.
5 A ¶ IGNACIO, 30s, keeper's wool sweater, kneels at the brass base with an oilcan.
6 A Hands black with grease.
7 A ¶ He hums.
8 A Off-key.
9 A Pleased with himself.
* 10 A ¶ The hatch bangs.
11 A ¶ He freezes.
12 A Listens.
* 13 A ¶ Boots on iron stairs.
* 14 A Coming up.
15 D IGNACIO (muttering): Supply boat's not till Friday.
* 16 A ¶ The hatch lifts.
* 17 A A suitcase thumps onto the floor.
18 A ¶ WREN, 30s, soaked to the bone, red scarf plastered to her neck, hauls herself up.
19 A Breathing hard.
20 A Grinning hard.
21 A ¶ He stands.
22 A Oilcan still in hand.
23 D IGNACIO [CONT'D]: No.
24 D WREN: Hello to you too.
25 D IGNACIO: You can't be here.
26 D WREN: I rowed.
27 D IGNACIO: You rowed. Eleven miles.
28 D WREN: Nine. I cut the corner.
29 A ¶ He sets the can down.
30 A Carefully.
31 A Like it might go off.
32 A ¶ She drops her bag.
33 A Wrings out the scarf.
* 34 A Water pools on the floor.
35 D IGNACIO: You wrote that you were done.
36 D WREN: I wrote a lot of things.
37 D IGNACIO: You wrote one letter. Four lines.
38 D WREN: It was a good four lines.
39 A ¶ He turns away.
40 A Faces the lens.
* 41 A It sweeps past, throwing fractured light across his face.
42 A ¶ She watches.
43 A Doesn't close the gap.
44 D WREN [CONT'D]: You kept the light on.
45 D IGNACIO: It's a lighthouse.
46 D WREN: You kept it polished.
47 D IGNACIO: It's my job.
48 D WREN (softly): Ignacio.
49 A ¶ He doesn't answer.
50 A His shoulders drop an inch.
51 A ¶ She crosses to the rail.
* 52 A Rain ticks against the glass.
* 53 A Far below, the sea is a gray animal, restless.
54 D WREN [CONT'D]: I almost didn't make it. The boat took water by the rocks.
55 D IGNACIO: You could have drowned.
56 D WREN: I know.
57 D IGNACIO: You could have drowned, and I'd have been up here. Oiling a gear.
58 A ¶ She turns.
59 A Their eyes meet.
60 A Held.
61 D WREN: Say it, then.
62 D IGNACIO: Say what?
63 D WREN: Whatever you've been rehearsing.
* 64 A ¶ A beat.
65 A He shakes his head.
66 A A small, defeated laugh.
67 D IGNACIO: It was better yesterday.
68 D WREN: Try me.
69 D IGNACIO: I missed you.
70 D WREN: I missed you.
71 A ¶ They say it on top of each other.
72 A Neither stops.
73 D IGNACIO: I was angry. I'm still angry.
74 D WREN: I was scared. I'm still scared.
75 A ¶ They stop.
76 A Both laugh.
77 A Short.
78 A Wet.
79 D IGNACIO: You're dripping on my floor.
80 D WREN: You're welcome.
81 A ¶ He picks up a towel from a hook.
82 A Tosses it.
83 A She catches it one-handed.
84 A ¶ She dries her face.
85 A Her hands.
86 A She's slowing down.
87 D WREN [CONT'D]: Is there tea?
88 D IGNACIO: There's a kettle.
89 D WREN: That's not what I asked.
90 D IGNACIO: There's a kettle and a tin that might be tea.
91 D WREN: Might be.
92 D IGNACIO: It's been there since March.
93 D WREN: Brave.
94 A ¶ He crosses to the hatch.
95 A Stops.
96 A Looks down the shaft.
97 D IGNACIO: Stairs are slick. Come on.
98 D WREN: Is that an invitation?
99 D IGNACIO: It's a warning.
100 A ¶ She smiles.
101 A Picks up her suitcase.
102 A He takes it from her before she can protest.
103 A ¶ They descend.
104 A His head vanishes first.
105 A Then hers.
* 106 A ¶ The lens keeps turning.
* 107 A Light sweeps the empty room.

### SCENE s01022 | INT. MILLBROOK TELEPHONE EXCHANGE - NIGHT (1924)
Detected names (may be incomplete or contain aliases): MABEL PRZYBYLSKI, STRANGER, CROWE, ABERNATHY, TOBY, SHERIFF DUNMORE
* 1 A ¶ A small room above the feed store.
* 2 A A cord switchboard with a hundred brass jacks.
* 3 A A kerosene lamp backs up a weak electric bulb.
4 A ¶ MABEL PRZYBYLSKI, 20s, headset over pinned-up hair, plugs and unplugs cords with practiced speed.
5 A She is alone and likes it that way.
* 6 A ¶ A buzz.
* 7 A A light on the board.
8 A She plugs in.
9 D MABEL: Number, please.
10 A ¶ She listens.
11 A Pulls the cord.
12 A Connects another.
* 13 A The room breathes.
* 14 A ¶ Boots on the stairs.
* 15 A The door opens without a knock.
16 A ¶ A STRANGER in a long coat, hat low, rain on his shoulders.
17 A He carries a leather satchel.
18 D MABEL [CONT'D]: We're closed to the public, sir.
19 D STRANGER: I need the line to Harrisburg.
20 D MABEL: That's the long-distance trunk. Company use only.
21 D STRANGER: It's urgent.
22 D MABEL: Everything is, at this hour.
* 23 A ¶ A new buzz.
* 24 A Another light.
25 A She ignores it.
26 D STRANGER: My name is Elias Crowe. I'm with the state railway board.
27 D MABEL: You have a paper that says so?
28 A ¶ He opens the satchel.
29 A Pulls out an envelope.
30 A She takes it, reads it by the lamp.
31 A Her face tightens.
32 D CROWE: It is in order.
33 D MABEL: It's a telegram form. Anyone can fill one out.
34 D CROWE: Then call the manager.
35 A ¶ She hesitates.
36 A Pulls a cord.
37 A Cranks a handle.
38 D MABEL (into headset): Mr. Abernathy? Sorry to wake you. There's a gentleman here.
* 39 A ¶ The earpiece crackles.
40 A A thin, irritable voice leaks into the room.
41 D ABERNATHY [V.O.]: At this hour? Is the building on fire?
42 D MABEL: No, sir. A man from the railway board.
43 D ABERNATHY [V.O.]: Tell him to come in the morning.
44 D CROWE (leaning toward her): Tell him it concerns the six-ten freight.
45 A ¶ Mabel's eyes flick up.
46 A She repeats it.
* 47 A ¶ A long silence on the line.
48 A Then Abernathy, quieter.
49 D ABERNATHY [V.O.]: Put him through. And Mabel. Plug in the sheriff's line too.
50 D MABEL: Sir?
51 D ABERNATHY [V.O.]: Do it.
52 A ¶ She obeys.
53 A Her hands are not quite steady now.
* 54 A ¶ The door opens again.
55 A TOBY, 12, the messenger boy, cap too big, bursts in dripping and out of breath.
56 D TOBY: Miss Mabel! Somebody cut the wire at the Calder bridge. Pa says the whole east line's dead.
57 A ¶ Crowe straightens.
58 A Mabel looks from the boy to the stranger.
59 D MABEL: Mr. Crowe. How did you know about the freight?
60 D CROWE: I don't know anything about wires.
61 D TOBY: Then why's your satchel got a coil of copper in it?
62 A ¶ Everyone looks.
* 63 A A bright loop of wire pokes out of the satchel.
* 64 A ¶ The board buzzes.
* 65 A Light after light.
* 66 A The sheriff's line clicks live.
67 D SHERIFF DUNMORE [V.O.]: Millbrook exchange. Dunmore. Who's there with you, Miss Przybylski?
68 A ¶ Mabel's hand rests on the key.
69 A She looks at Crowe.
70 A Crowe looks at the door.
71 D MABEL: Stay where you are, Mr. Crowe. Toby, lock that door.
72 D TOBY: Yes, ma'am.
* 73 A ¶ The bolt slides home.
* 74 A The lamp flickers.
* 75 A The board keeps buzzing.

### SCENE s01023 | INT. CRAB CANNERY - NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): PAULINA RUSSO, DESMOND WALCOTT, GUS, HAND
* 1 A ¶ Steel tables.
* 2 A Hoses.
* 3 A Steam rising from vats.
* 4 A Fluorescents buzz.
* 5 A Everything smells of brine and bleach.
6 A ¶ PAULINA RUSSO, 40s, shift lead, hairnet, white rubber boots, sprays down a conveyor belt.
7 A DESMOND WALCOTT, 20s, headphones around his neck, stacks crates.
8 A GUS, 60s, Paulina's oldest hand, wheels a pallet jack.
* 9 A ¶ The line is stopped.
* 10 A A quiet kind of peace.
11 D PAULINA (to all): Ten minutes, everybody. Breaker's being cranky.
12 D DESMOND: It's always cranky.
13 D PAULINA: Then it's consistent.
14 A ¶ Gus parks the jack.
15 A Eases onto an upturned bucket.
16 A Pulls a sandwich from his apron.
17 D GUS (to himself): Thirty-one years. Never once got used to the cold.
18 A ¶ Desmond laughs.
19 A Pulls a phone from his pocket.
20 D DESMOND: Gus, you want to see my niece? She just learned to whistle.
21 D GUS: Sure.
22 A ¶ Desmond shows him the screen.
23 A Gus squints.
24 A Smiles.
25 A The first real smile of the night.
26 A ¶ Paulina checks her clipboard.
27 A Hums.
* 28 A The steam curls around her.
29 D PAULINA (under her breath): Two cases short. Where did you go, little guys.
* 30 A ¶ From the live tank behind the line, a soft tap.
* 31 A Glass on glass.
* 32 A ¶ Nobody notices.
* 33 A The humming continues.
34 D DESMOND: She's three. She calls everything "doggy."
35 D GUS: Smart kid.
* 36 A ¶ Tap.
* 37 A Tap.
* 38 A Tap.
* 39 A Slower.
40 A ¶ Paulina looks up.
* 41 A The tank, a long glass rectangle of dark water, hides in the shadow beyond the last light.
42 D PAULINA (to Desmond): Did you top up the tank?
43 D DESMOND: Friday.
44 D PAULINA: Then who's tapping?
45 D DESMOND: Pipes. They knock.
46 A ¶ Gus has stopped chewing.
47 A He stares at the tank.
48 D GUS (quietly): Paulina.
49 D PAULINA: What?
50 D GUS: There's no water moving.
51 A ¶ She follows his gaze.
* 52 A The surface is perfectly flat.
* 53 A Black.
* 54 A Nothing disturbs it.
* 55 A ¶ Tap.
* 56 A ¶ The sound comes from inside.
57 D PAULINA (to herself): Okay. Okay.
58 A ¶ She walks toward the tank.
59 A Boots squelching.
60 A Desmond rises.
61 A Gus doesn't.
62 D PAULINA [CONT'D] (over her shoulder): Both of you, stay there.
63 A ¶ She reaches the glass.
64 A Wipes the condensation with her sleeve.
* 65 A ¶ Pressed against the inside of the glass is a HAND.
* 66 A A human hand.
* 67 A Pale, wrinkled, fingers splayed.
68 A ¶ Paulina stumbles back.
69 A Her clipboard clatters.
70 A ¶ Under the surface, a face drifts up.
* 71 A Eyes open.
* 72 A Wearing a hairnet.
* 73 A ¶ It's Gus's face.
74 A ¶ Paulina turns.
75 A Gus is still on his bucket.
76 A He lifts his sandwich.
77 A Smiles.
78 A Too wide.
79 D GUS: Ten minutes, you said.
80 A ¶ Desmond's phone slips from his hand.
* 81 A The screen lights the floor.
* 82 A The breaker clunks.
* 83 A ¶ All the fluorescents go out.

### SCENE s01024 | INT. SMALL CLAIMS COURTROOM - FORMER SKATING RINK - DAY
Detected names (may be incomplete or contain aliases): JUDGE MARGUERITE VANCE, FELIX OYELARAN, SOLVEIG HARTMANN
* 1 A ¶ Bleachers for gallery.
* 2 A Judge's bench on a rink-side Zamboni platform.
* 3 A Painted lines still on the floor.
4 A ¶ JUDGE MARGUERITE VANCE, 60s, reading glasses, gavel in a fist.
5 A FELIX OYELARAN, 30s, sharp suit, stands at the plaintiff's mark.
6 A SOLVEIG HARTMANN, 40s, hands folded, at the defendant's.
7 D VANCE: Counselor, the exhibit.
8 D OYELARAN: Your Honor, my client's contract clearly states--
9 D HARTMANN: Objection. Contract was never signed.
10 D VANCE: Ms. Hartmann, let him finish.
11 D HARTMANN: He's misstating the--
12 D OYELARAN: I have it right here, page four--
13 D VANCE: Both of you.
14 A ¶ Oyelaran waves the paper.
15 A Hartmann steps toward him.
16 A Vance raises the gavel.
17 D HARTMANN: It's a forgery, Judge. He knows it.
18 D OYELARAN: That is a slander, and you know it.
19 D VANCE: Order!
20 D HARTMANN: Ask him who typed it!
21 D OYELARAN: Ask her why she hid the original!
* 22 A ¶ The gavel cracks.
* 23 A Once.
* 24 A Twice.
* 25 A A third time, splintering the handle.
26 D VANCE: Sit. Down.
27 A ¶ They sit.
* 28 A Silence.
* 29 A A skate guard coughs in the bleachers.

### SCENE s01025 | INT. STEAMSHIP "MARIGOLD" - LOST AND FOUND OFFICE - DAY
Detected names (may be incomplete or contain aliases): FITCH, BARNABY PLUMLEY, ALOYSIUS FENN, HORTENSE VANDERWELL, NELL
* 1 A ¶ A narrow room below decks, shelves of forgotten hats, umbrellas, a single ukulele.
* 2 A A porthole shows slow gray swells.
3 A ¶ MR. FITCH, 50s, round spectacles, ledger in hand, presides behind a brass-railed counter.
4 A He is pleased with the order of the universe.
* 5 A ¶ The door opens.
6 A BARNABY PLUMLEY, 40s, tweed, mustache like a pushbroom, enters with the confidence of a man who has never been refused.
7 A Behind him, ALOYSIUS FENN, 40s, also in tweed, also mustached, but nervous.
8 D FITCH: Gentlemen. Something lost?
9 D BARNABY: A trunk. Brown, brass corners, initialed B.P.
10 D ALOYSIUS: Or A.F. It's our trunk.
11 D FITCH: Two sets of initials?
12 D BARNABY: We travel together.
13 D ALOYSIUS: Not that way.
14 D FITCH: I did not suggest a way.
15 A ¶ Fitch opens the ledger.
16 A Runs a finger down the page.
17 D FITCH [CONT'D]: Brown trunk, brass corners. Found on Deck C, yesterday.
18 D BARNABY: That's the one.
19 D FITCH: Did it contain anything unusual?
20 D BARNABY: Shirts.
21 D ALOYSIUS: And the Mortimer papers.
22 D BARNABY (sharp): Shirts.
23 D FITCH: Papers, you said?
24 D ALOYSIUS: Shirts and papers. Mostly shirts.
25 A ¶ Fitch produces a trunk from beneath the counter.
26 A Sets it down with ceremony.
27 A Unlatches it.
* 28 A ¶ Inside: shirts.
* 29 A Neatly folded.
* 30 A One small leather folio.
31 D FITCH [CONT'D]: Shirts. And a folio marked "Mortimer."
32 D BARNABY: Yes. Splendid. We'll take it.
33 D FITCH: I'll need a signature.
34 D ALOYSIUS: Of course.
35 A ¶ Fitch slides a form across.
36 A Barnaby reaches.
37 A Aloysius reaches.
38 A Their hands collide on the pen.
39 D BARNABY: After you.
40 D ALOYSIUS: No, you.
41 D BARNABY: I insist.
42 D ALOYSIUS: Then I insist more.
* 43 A ¶ The door swings open again.
44 A HORTENSE VANDERWELL, 60s, fur stole in the tropics, enters with NELL, 9, in a sailor dress, clutching a stuffed walrus.
45 D HORTENSE: Mr. Fitch! My daughter lost Sir Reginald!
46 D NELL: He's right here, Grandmother.
47 D HORTENSE: Then what are we doing here?
48 D NELL: You said we'd get ice cream.
49 D HORTENSE: Ah. So I did.
50 A ¶ Fitch clears his throat.
51 D FITCH: Madam, as you can see, I am engaged with two gentlemen.
52 D HORTENSE: Two? I see one and a half.
53 D BARNABY: I beg your pardon.
54 D HORTENSE: Is the other one a ghost?
55 D ALOYSIUS: I am quite solid, madam.
56 D HORTENSE: So was my late husband. Look where it got him.
* 57 A ¶ Silence.
58 A Fitch polishes his spectacles.
59 D FITCH: Nell, was it? What lost thing do you seek?
60 D NELL: Nothing. Grandmother told me to say we were looking for something so she could meet the two men with the matching mustaches.
61 D HORTENSE: Nell!
62 D NELL: You did.
63 D HORTENSE (to Barnaby): Children invent the most extraordinary things.
64 D BARNABY: Madam, we are not available for introductions.
65 D ALOYSIUS: We are engaged.
66 D BARNABY: To other people!
67 D ALOYSIUS: Women!
68 D HORTENSE: How very modern.
69 D FITCH: Might I suggest we resolve the trunk?
70 D BARNABY: Yes. The trunk.
71 D ALOYSIUS: Please.
72 A ¶ Fitch taps the folio.
73 D FITCH: There is a problem, gentlemen.
74 D BARNABY: Which is?
75 D FITCH: This folio does not contain papers. It contains a deed.
76 D ALOYSIUS: Barnaby.
77 D BARNABY: Don't.
78 D FITCH: To the Marigold.
79 D HORTENSE: The ship?
80 D FITCH: The ship. It appears that one of you, or perhaps both, has been selling it for some weeks, to various purchasers, on the open sea.
81 D NELL: Can you sell a boat while you're on it?
82 D HORTENSE: Apparently, dear. Apparently you can.
83 A ¶ Barnaby and Aloysius look at each other.
84 A Then at the door.
85 D BARNABY: After you.
86 D ALOYSIUS: No, you.
87 A ¶ They bolt together, wedged in the doorway.
88 A Fitch rings a brass bell.
* 89 A Somewhere above, a whistle blows.
90 D NELL: Grandmother, can we still get ice cream?
91 D HORTENSE: Child, we are going to buy the ship.

### SCENE s01026 | INT. GENERATION SHIP "TERRAPIN" - HYDROPONIC LAUNDRY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ISADORA VOSS, KOJI TANABE, AMARA OKELLO, TERRAPIN, PELL
* 1 A ¶ A warm, humid hold.
* 2 A Rows of lettuce racks climb the walls under violet grow-lamps.
* 3 A In the center, three washing drums turn, slow and patient.
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
* 22 A ¶ A soft chime.
* 23 A From the ceiling grille:
24 D TERRAPIN [V.O.]: Attention. Compartment seven pressure variance detected. Corrective action in progress.
25 D VOSS: Terrapin, which compartment is seven?
26 D TERRAPIN [V.O.]: The nursery.
* 27 A ¶ A beat.
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
* 39 A ¶ The room goes still.
* 40 A Even the drums seem to slow.
* 41 A ¶ Then, faintly, from the far end of the hold: knock.
* 42 A Knock.
* 43 A Knock.
* 44 A A pause.
* 45 A Knock.
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
* 62 A Frantic.
* 63 A The cold lock door begins to frost over from the outside.
64 A ¶ Voss grabs a wrench off Koji's belt.
65 A Runs.
66 A The others follow.
* 67 A The drums turn on, spinning white sheets in empty light.

### SCENE s01027 | INT. STARLITE ROLLER RINK - SIX A.M.
Detected names (may be incomplete or contain aliases): DEZI ALVARADO, BOY, JUNIOR, FAIRWEATHER
* 1 A ¶ Carpet-walled, smelling of floor wax and old nacho cheese.
* 2 A A disco ball turns without light, a silent planet.
* 3 A The maple floor is empty and gleaming like a frozen lake.
4 A ¶ DEZI ALVARADO, 15, sits on the bench in secondhand skates, laces undone.
5 A Hoodie sleeves swallow her hands.
6 A She has been crying and has recently stopped.
7 A ¶ A figure leans against the snack counter.
8 A A BOY in a faded letterman jacket, tall, thin as a coat rack, a toothpick rolling in his mouth.
9 A He watches her without moving.
10 D BOY: You've got two left feet.
11 D DEZI: I've got one left foot and one broken heart.
12 D BOY: Which is worse?
13 D DEZI: Depends who you ask.
14 A ¶ She stands, wobbles, grabs the rail.
15 A He doesn't help.
16 A A kindness, of a kind.
17 D BOY [CONT'D]: They're saying you took your mother's car.
18 D DEZI: Borrowed.
19 D BOY: Without asking.
20 D DEZI: She was asleep.
21 D BOY: Dezi.
22 A ¶ She looks at him sharply.
23 A He shrugs, almost apologetic.
24 D BOY [CONT'D]: My name's Junior, by the way. Since you're not going to ask.
25 D JUNIOR [CONT'D]: Everyone calls me Junior. My dad's Junior too. Nobody knows who the first one was.
26 D DEZI: That's the saddest thing I've heard all week.
27 D JUNIOR: It's been a long week?
28 D DEZI: Rough.
29 A ¶ She pushes off the rail.
30 A Rolls two feet.
31 A Wavers.
32 A Falls.
33 A Hard.
34 A Sits on the floor with her palms flat.
35 A ¶ For a moment, she isn't sure if she's going to scream or laugh.
36 A ¶ She does both.
37 A ¶ The sound ricochets off the carpeted walls.
38 A Junior flinches, then, slowly, grins.
39 A He steps onto the floor in his sneakers and slides to her.
40 D JUNIOR [CONT'D]: That's it. Get it out.
41 D DEZI: I hate everyone.
42 D JUNIOR: Me too.
43 D DEZI: I hate my mother.
44 D JUNIOR: Mine's all right. But I hate my dad.
45 D DEZI: I don't hate her. I just wanted to drive somewhere nobody knew.
46 D JUNIOR: And you ended up at a roller rink.
47 D DEZI: It was the only thing open.
* 48 A ¶ The lights come on.
* 49 A All at once, bright as an operating room.
* 50 A The disco ball catches a beam and sprays confetti across the walls.
51 A ¶ MS. FAIRWEATHER, 60s, rink manager, a cardigan embroidered with tiny skates, comes through the swinging doors with a ring of keys and a coffee thermos.
52 A She stops dead.
53 D MS. FAIRWEATHER: We don't open for four hours.
54 D JUNIOR: Morning, Ms. Fairweather.
55 D MS. FAIRWEATHER: Junior. You are not supposed to be here. Neither is she. Whoever she is.
56 D DEZI: Dezi.
57 D MS. FAIRWEATHER: Dezi. Well. Are you hurt?
58 D DEZI: No.
59 D MS. FAIRWEATHER: Good. Skates off. Both of you. There's a pot of coffee in the back and a patched-up phone. Call your mother.
60 A ¶ Dezi looks at Junior.
61 A He lifts one shoulder.
62 A Almost a smile.
63 A ¶ She begins to unlace.

### SCENE s01028 | INT. DERELICT ORBITAL STATION - OBSERVATION RING - CONTINUOUS
Detected names (may be incomplete or contain aliases): ORSOLYA, TAVI
* 1 A ¶ Frost on the viewport.
* 2 A Beyond it, a gas giant fills the sky, banded and indifferent.
* 3 A Emergency lights pulse amber.
4 A ¶ ORSOLYA, 40s, scavenger's patched suit, helmet clipped to her hip, drifts along a handrail.
5 A TAVI, 20s, tool belt too big for him, follows with a lantern.
6 A ¶ She stops.
7 A Taps the wall.
8 A Listens.
9 D ORSOLYA (to the empty ring): Anyone aboard. We're salvage. We mean no harm.
* 10 A ¶ Silence.
* 11 A Frost ticks on the glass.
12 D TAVI: Maybe just--
13 A ¶ She raises a hand.
14 A He stops.
15 D ORSOLYA (again, louder): Anyone aboard.
* 16 A ¶ A pause.
* 17 A Nothing.
18 A She nods once, as if she expected nothing.
19 A ¶ She opens a wall panel.
* 20 A Wiring shredded.
* 21 A Burned.
22 D ORSOLYA [CONT'D] (muttering): Not an accident.
23 D TAVI: What?
24 D ORSOLYA: Nothing. Hold the light.
25 A ¶ He holds it.
26 A His hand trembles.
* 27 A The beam shakes across the wires.
28 A ¶ She notices.
29 A Says nothing.
30 A Takes the lantern from him.
31 A Hands him a screwdriver instead.
32 D ORSOLYA [CONT'D]: Twelve screws. Take the plate off.
33 A ¶ He works.
* 34 A Slowly.
35 A His eyes keep sliding to the viewport.
* 36 A ¶ A thud rolls through the ring.
* 37 A Metal on metal, somewhere aft.
38 A ¶ Both freeze.
39 D TAVI: That was close.
40 D ORSOLYA: That was far.
41 D TAVI: It sounded close.
42 D ORSOLYA: Far things sound close in a hull.
43 A ¶ She doesn't sound sure.
44 A Her thumb strokes the edge of the lantern.
* 45 A ¶ The thud again.
* 46 A Louder.
* 47 A Then a long scrape.
48 A ¶ Tavi drops the screwdriver.
* 49 A It floats, tumbling.
50 D ORSOLYA [CONT'D] (to the ring, calm): Everyone stay where you are. This is a recovery crew. We're leaving in five minutes.
51 D TAVI: There's no one here.
52 D ORSOLYA: I know.
53 A ¶ She grabs his sleeve.
54 A Tows him toward the airlock.
55 A Her grip is gentle.
56 A Too gentle.
57 A ¶ They reach the hatch.
58 A She spins the wheel.
* 59 A It opens onto the cold, bright tunnel of their own ship.
60 A ¶ She pushes him through first.
61 D TAVI (over his shoulder): You okay?
62 D ORSOLYA: Fine.
63 A ¶ She follows.
64 A Looks back once.
* 65 A The ring is quiet, amber, still.
* 66 A ¶ Then, from the dark, one more knock.
* 67 A Small.
* 68 A Almost polite.
69 A ¶ She seals the hatch.
70 D ORSOLYA [CONT'D] (to herself): Five minutes.
71 A ¶ She doesn't move for a long time.
72 A Tavi picks up the lantern and sets it between them, lighting both their faces.

### SCENE s01029 | INT. SYNERGY DYNAMICS - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): DARRYL PENHALLOW
* 1 A ¶ Forty identical desks.
* 2 A Forty identical monitors.
* 3 A A banner reads WE ARE FAMILY!
4 A ¶ DARRYL PENHALLOW, 30s, lanyard, tie two sizes too wide, stands bolt upright at his desk.
5 A Eyes wide.
6 A Smiling.
7 D DARRYL [V.O.]: This is my third reorg this quarter. I've been promoted twice. I still do the same job.
8 A ¶ He types.
9 A Fast.
10 A Frantic.
11 A Smiling.
12 D DARRYL [V.O., CONT'D]: Synergy is not a word. It's a hostage note.
* 13 A ¶ A cheerful intercom chime.
14 A ¶ He grabs a stapler.
15 A Clutches it to his chest.
16 A Smiling.
17 D DARRYL [V.O., CONT'D]: Quick wins. Low-hanging fruit. Circle back. Ping me.
18 A ¶ He drops the stapler.
19 A Picks up a mug: WORLD'S OKAYEST EMPLOYEE.
20 D DARRYL (to the room, bright): Great job, team!
* 21 A ¶ No one answers.
* 22 A Forty monitors glow.
23 D DARRYL [CONT'D] (muttering): We are so aligned.
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
6 D STROZZI [V.O.] (tape, hissing): Entry one. The caretaker was found here, third seat, row nine, facing south. No wound. No struggle. Only the projector, warm to the touch, though power has been cut for eleven years.
7 A ¶ She stops the tape.
8 A Lifts a lens cap.
* 9 A Underneath, a thumbprint in fresh grease.
10 A ¶ Slowly she stands, looks up at the dead dome.
* 11 A The cracks branch like constellations nobody named.
12 D STROZZI (softly): Warm.
13 A ¶ She presses record.
14 A Speaks into the recorder.
15 D STROZZI [CONT'D]: Entry two. Someone has been drawing the stars back in.
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
6 A The ball skims, kisses the pallino.
* 7 A Applause.
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
* 20 A The crowd gasps.
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
* 31 A Quiet descends.
* 32 A A wind chime tinkles.
33 A ¶ She steps.
34 A Swings.
35 A Lets go.
* 36 A ¶ The ball curves, ticks the fence, rolls, and stops dead against the pallino.
* 37 A ¶ Silence.
* 38 A Then an uproar.
39 D DORIS: Hiro, it's wood. Look at the grain!
40 D HIRO: Bertie wins.
41 D LOU (low): Rematch.
42 D BERTIE: Next Sunday, Hammer. Bring your checkbook.

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
9 D HENRIK: Elbows on the pads. Grips locked.
10 A ¶ Jethro grips.
11 A Pilar grips.
12 A Their knuckles whiten.
13 D HENRIK [CONT'D]: Ready?
14 D JETHRO: Born ready.
15 D PILAR: Skip the speech.
16 D HENRIK: Go!
17 A ¶ Both tense.
* 18 A The table groans.
19 A A vein rises on Jethro's neck.
20 A Pilar's jaw clenches.
21 A Neither moves.
22 A ¶ The crowd begins a low chant: Jeth-ro.
* 23 A Jeth-ro.
24 D PILAR (through teeth): You sweat a lot.
25 D JETHRO: It's a sweaty room.
26 D PILAR: Your wife make that apron?
27 D JETHRO: My mother.
28 D PILAR: She loves you.
29 D JETHRO: Shut up.
30 A ¶ Henrik crouches, eyes on the hands.
* 31 A Sweat drips from Jethro's nose onto the plank.
32 A ¶ Pilar shifts her weight.
33 A Her free hand grips the table's edge.
34 A Jethro's arm trembles, a small tremor.
35 A Hers does too.
36 A ¶ They breathe together, in, out.
37 D HENRIK: Hold your lines.
38 A ¶ Jethro surges.
39 A His hand pushes hers an inch toward the pad.
* 40 A The crowd roars.
41 D PILAR (gasping): Not yet.
42 A ¶ She drives back.
43 A His arm straightens.
* 44 A Equal again.
45 A ¶ Both freeze.
46 A Both stare.
47 A Neither blinks.
48 D JETHRO: You're good.
49 D PILAR: My father taught me. At a mill like this.
50 D JETHRO: Where?
51 D PILAR: Matanzas.
52 D JETHRO: I had a cousin in Matanzas.
53 D PILAR: Everyone does.
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
64 D HENRIK: Hold! Hold! The table!
65 A ¶ They don't hold.
66 A They are locked.
* 67 A The table tilts.
68 A They tumble together onto the sacks, hands still clasped, wrestling.
69 A ¶ Henrik blows a whistle.
* 70 A No one hears.
71 D PILAR (rolling): Pad's behind you!
72 D JETHRO: Is not!
73 D HENRIK: It is! It's behind you both!
74 A ¶ They tumble over the barrels, bounce against a vat, freeze.
* 75 A Steam hisses.
76 A Their joined hands hover above a sack of raw sugar.
77 A Neither willing to break.
78 D PILAR: Truce?
79 D JETHRO: Till dawn.
80 D PILAR: Dawn's fine.
81 A ¶ They let go together.
82 A Both slump on the sacks, panting.
83 D HENRIK (to the crowd): Draw! The match is a draw!
* 84 A ¶ A cheer, ragged.
85 A Jethro and Pilar lie there staring at the rafters, arms spread, hands shaking.
86 D JETHRO: Again?
87 D PILAR: Tomorrow.
88 D JETHRO: Bring your father.
89 D PILAR: He's dead.
90 D JETHRO: Then bring his arm.
91 A ¶ Pilar smiles, for the first time.
92 A She sits up and reaches for the table.
93 D HENRIK: You people are insane.
94 A ¶ She slams her elbow on the plank.
95 A Jethro hauls himself up and does the same.
* 96 A The crowd goes silent.
97 D HENRIK [CONT'D] (sighing): Ready?

### SCENE s01033 | INT. FUNICULAR CAR - MID-SLOPE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUST MWANGI, SILAS DRAKEFORD, ZOFIA BR, TEN
* 1 A ¶ Stalled.
* 2 A Wooden benches, brass rails.
* 3 A Outside, black pines and a thousand feet of dark.
* 4 A Wind rocks the car on its cable.
5 A ¶ AUGUST MWANGI, 40s, charcoal coat, gloved hands folded, sits very still.
6 A Tall, calm, eyes of a chess player.
7 A ¶ Across from him, SILAS DRAKEFORD, 40s, wet hair, a bruise ripening on his cheekbone, grips a leather briefcase to his chest.
8 D SILAS: You pulled the brake.
9 D AUGUST: I pulled nothing.
10 D SILAS: Then who did?
11 D AUGUST: The cable did what cables do.
12 A ¶ Silas shifts.
13 A His hand slides toward his pocket.
14 A August watches it.
15 D AUGUST [CONT'D]: Don't.
16 D SILAS: I wasn't.
17 D AUGUST: Then he wouldn't have said I was.
18 D SILAS: Who?
19 D AUGUST: You know who.
20 A ¶ Silas swallows.
21 A His eyes dart to the window.
* 22 A Nothing but pine and fog.
23 D SILAS: He told you I took it.
24 D AUGUST: He told me you were smart. And that smart men carry briefcases.
25 A ¶ Silas laughs, brittle.
26 A He sets the briefcase on his knees.
27 A Clasps it shut.
* 28 A ¶ A scrape.
* 29 A On the roof.
30 A Both men look up.
31 D AUGUST [CONT'D]: Deer.
32 D SILAS: On a funicular?
* 33 A ¶ Another scrape, heavier.
* 34 A The car sways.
* 35 A ¶ The roof hatch slams open.
* 36 A A boot drops through.
* 37 A Then a leg.
38 A Then a woman, ZOFIA BRÅTEN, 30s, climbing gear, ice axe, headlamp blazing.
39 A She lands in a crouch, axe leveled.
40 D ZOFIA: Nobody move.
41 A ¶ Both men raise their hands.
42 A She sweeps the light across them, lands on August.
43 D ZOFIA [CONT'D]: You. Open the briefcase.
44 D AUGUST: It's his.
45 D ZOFIA (to Silas): Then you.
46 A ¶ Silas hesitates.
47 A His hand shakes.
48 A He unlatches.
49 A Flips the lid.
* 50 A ¶ Inside, nothing.
* 51 A Foam padding, cut to hold something that's no longer there.
52 D ZOFIA [CONT'D]: Where is it?
53 D SILAS: I don't know.
54 A ¶ August smiles.
55 A Slowly lowers his hands.
56 D AUGUST: He knows.
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
4 D BEATRIX: Fenwick, you said nobody came in.
5 D FENWICK: Nobody did, Beatrix.
6 D NICO: The fox, Mr. Fenwick. Look at the fox.
7 A ¶ Beatrix lifts the animal, turns it, peers into the empty socket, pulls a folded note from inside, and Nico leans in, lantern shaking, while Fenwick edges toward the back door, one hand in his coat.
8 D BEATRIX: Stop there, Fenwick.
9 D FENWICK: It's a misunderstanding.
10 D NICO: It says "the eye is in the owl."
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
9 D CAPTAIN HALE [V.O.]: Shop, this is the bridge. Status.
10 D RENATA (into radio): Three souls, sir. All calm.
11 D CAPTAIN HALE [V.O.]: Keep them there. We've got a boat coming at dawn.
12 D RENATA: Understood.
13 A ¶ She sets the radio down.
* 14 A The silence returns.
15 D ADEBAYO (to no one): Two weeks on a boat, and the one thing they sell me is snow globes.
16 D MILES: You can have mine.
17 D ADEBAYO: Does it come with a cure?
18 D MILES: It comes with a mild placebo effect.
19 A ¶ Adebayo laughs, then coughs.
20 A Miles straightens, watches him.
21 D MILES [CONT'D] (quietly): Sir, how long has that been going?
22 D ADEBAYO: It's a tickle.
23 D MILES: How long?
24 D ADEBAYO: Since Tuesday.
25 A ¶ Renata stiffens.
26 A She slides her hand slowly toward the radio.
27 D RENATA (to all): Everyone stay exactly where you are.
28 D MILES: Renata.
29 D RENATA: Don't.
30 D MILES: He's not necessarily--
31 D RENATA: You said no one on this deck was symptomatic.
32 A ¶ Miles opens his mouth.
33 A Closes it.
34 D ADEBAYO (muttering): I should've stayed in the cabin.
* 35 A ¶ The storefront lights flicker.
* 36 A Outside, a searchlight sweeps the promenade.
* 37 A Then a second.
* 38 A Then a third, from a hull that isn't theirs.
39 D RENATA: That's not the dawn boat.
40 D MILES: No.
41 A ¶ She lifts the radio.
42 D RENATA [CONT'D]: Bridge, we have lights on the promenade.
* 43 A ¶ Static.
* 44 A Nothing.
45 A She tries again.
46 D RENATA [CONT'D]: Bridge?
47 D CAPTAIN HALE [V.O.] (whispering): Don't open the door. They're not ours.

### SCENE s01036 | INT. THORNQUIST DRESSMAKER'S SHOP - LONDON - DAY (1893)
Detected names (may be incomplete or contain aliases): AGNES THORNQUIST, DELPHINE ARCHAMBAULT, COLONEL ASHBY-GREY, YUSUF HADDAD
* 1 A ¶ Bolts of silk, a cutting table, a brass dummy in half-pinned lilac.
* 2 A Rain at the window.
3 A ¶ AGNES THORNQUIST, 40s, pins in her mouth, kneels to a hem.
4 A DELPHINE ARCHAMBAULT, 20s, in her slip, stands on a footstool, arms out.
5 A Her eyes avoid the mirror.
6 A ¶ COLONEL ASHBY-GREY, 60s, enters in a damp greatcoat.
7 A YUSUF HADDAD, 30s, tailor's apprentice, follows with a tape over his shoulder.
8 D ASHBY-GREY: Miss Archambault. Your father sends his regards.
9 D DELPHINE: How kind.
10 A ¶ He sets his hat on the cutting table.
11 A Agnes takes the pins from her mouth.
12 D AGNES: Colonel. We weren't expecting you.
13 D ASHBY-GREY: One doesn't schedule a wedding fitting.
14 D AGNES: It's not yet a wedding.
15 D ASHBY-GREY: It will be Saturday.
16 A ¶ Delphine's arm drops an inch.
17 A Agnes taps it back up.
18 D AGNES: Steady, dear.
19 A ¶ Yusuf unrolls the tape.
20 A Measures the waist.
21 A Says nothing.
22 A His fingers tremble.
23 D ASHBY-GREY: Tighter at the bodice. The family insists.
24 D AGNES: She'll not breathe.
25 D ASHBY-GREY: She'll not need to.
* 26 A ¶ A silence.
* 27 A Rain hits the glass.
28 A ¶ Delphine looks into the mirror for the first time.
29 A At herself.
30 A At Yusuf behind her.
31 D DELPHINE: Mr. Haddad. Is the silk imported?
32 D YUSUF: From Damascus, miss.
33 D DELPHINE: How far is that?
34 D YUSUF: Very far.
35 D DELPHINE: How long would it take to go?
36 A ¶ Ashby-Grey turns.
37 A His eyes narrow.
38 D ASHBY-GREY: Miss Archambault.
39 D DELPHINE: Merely curious.
40 A ¶ Agnes rises, sets her pins down, and smooths the bodice.
41 A Her thumb brushes Delphine's wrist.
42 A A pulse passes between them.
* 43 A Quick, quiet.
44 D AGNES (low): I'll let out the seam tonight.
45 D ASHBY-GREY: Pardon?
46 D AGNES: I said I'll take in the seam tonight.
47 A ¶ Ashby-Grey studies her.
48 A Then Yusuf.
* 49 A Then the door.
50 D ASHBY-GREY: Saturday. Ten sharp.
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
7 D NEW GIRL: Sorry I'm late. The elevator stopped at every floor.
8 D ROZ: It's a tourist elevator.
9 D NEW GIRL: It was a hostage situation.
10 D ROZ: You've got the codes?
11 D NEW GIRL: I've got the codes.
12 D TREVOR: Who is she?
13 D ROZ: Trevor, this is Sunny Lockwood. She's the one I told you about.
14 D SUNNY: Nice to meet you. I'm the one with the thumbs.
15 D TREVOR: The thumbs?
16 D SUNNY: Locksmith's daughter. Four generations of thumbs.
17 D ROZ: She's good. She's very good. She's also nineteen.
18 D TREVOR: Twenty-one.
19 D SUNNY: Twenty. Don't lie for me.
20 D ROZ: Let's start. The vault is on sixty-one, under the observation deck. Every ninety minutes the restaurant makes a full revolution. We have exactly four minutes where the north camera faces the wall.
21 D TREVOR: Because of the rotation.
22 D ROZ: Because of the rotation. Sunny takes the first lock. I take the second. Trevor, you stay at the maitre d' stand and pour wine.
23 D TREVOR: I can pour wine.
24 D ROZ: You can pour wine badly. That's all anyone expects.
25 D SUNNY: What's the haul?
26 D ROZ: Eleven million. Bearer bonds. In a briefcase that looks like a briefcase.
27 D SUNNY: Eleven's good. What's my cut?
28 D ROZ: Two.
29 D SUNNY: Three.
30 D ROZ: Two and a half.
31 D SUNNY: She drives a hard bargain.
32 D TREVOR: She who?
33 D SUNNY: Roz. It's a figure of speech. I'm talking about Roz.
34 D ROZ: I know who you mean.
35 D SUNNY: She counts every penny.
36 D ROZ: She buys every drink. Shut up and listen.
37 A ¶ Trevor pours wine for no one.
* 38 A The glass fills.
39 A He sets the bottle down too hard.
40 D ROZ [CONT'D]: After the second lock, there's a pneumatic tube. Documents only. We use it to send the bonds down to the kitchen.
41 D TREVOR: They go down by tube.
42 D ROZ: They go down by tube. At the kitchen, Marguerite takes them in a casserole dish.
43 D SUNNY: Who's Marguerite?
44 D ROZ: My sister.
45 D SUNNY: You have a sister?
46 D ROZ: Everyone has a sister.
47 D TREVOR: I don't.
48 D ROZ: Then you're lucky.
49 D SUNNY: What about security?
50 D ROZ: Two guards. One reads novels. The other sleeps. We tested them for six weeks.
51 D SUNNY: Six weeks of watching a man read a novel.
52 D ROZ: It was a Dickens.
53 D SUNNY: Which?
54 D ROZ: Bleak House.
55 D SUNNY (laughing): Oh, I like her.
56 D TREVOR: Who?
57 D SUNNY: Roz. You keep asking.
58 D ROZ: Pay attention. Revolution starts at eleven forty. We're in position by eleven thirty. Questions?
59 D TREVOR: What if the guard doesn't sleep?
60 D ROZ: Then I buy him a drink.
61 D SUNNY: What if he doesn't drink?
62 D ROZ: Everyone drinks, sweetheart.
63 D SUNNY: What if the vault door is a different model?
64 D ROZ: It isn't.
65 D SUNNY: What if it is?
66 D ROZ: Then you'll earn your three.
67 D SUNNY (grinning): Three?
68 D ROZ: Two and a half. Don't push.
* 69 A ¶ The room turns.
* 70 A The city lights drift past, one landmark after another.
71 D TREVOR: It's a little beautiful, actually.
72 D ROZ: It's a job, Trevor.
73 D TREVOR: Can it be both?
74 D ROZ: No.
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
7 D KWAN: Mrs. Farnsworth, when did you last see your husband alive?
8 D ELOISE: Tuesday.
9 D KWAN: And the will?
10 A ¶ Eloise's rosary clicks once.
11 D ELOISE: What about it?
12 D KWAN: Did she witness it?
13 D BRANDAO: Objection. Who's "she"?
14 D KWAN: The nurse.
15 D ELOISE: Mrs. Okafor.
16 D KWAN: She told us she wasn't present.
17 A ¶ Eloise stares at the casket.
18 A Her fingers work the beads, one, two, three.
19 D BRANDAO: Let the record show my client has not been served that statement.
20 D KWAN: It's in your folder.
21 A ¶ Brandao flips pages.
22 A Stops.
23 A Her thumb presses a corner of paper until it whitens.
24 D ELOISE: I'd like some water.
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
7 D NADIA: Is this one broken?
8 D TUCKER: It eats quarters. But it works.
9 D NADIA: Great.
10 D MARISOL: Try hitting the side.
11 A ¶ Nadia hits the side.
* 12 A The washer coughs and starts.
13 D NADIA: Thanks.
14 D MARISOL: Everybody does it.
15 A ¶ Tucker sips.
16 A Looks at the TV.
* 17 A Snow, again.
18 D TUCKER: They said it'd stop by nine.
19 D MARISOL: They say a lot of things.
20 D NADIA: It's ten thirty.
21 D TUCKER: Then we're all in this together.
* 22 A ¶ A silence.
* 23 A The dryers hum on.
* 24 A ¶ The door chimes.
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
* 42 A The drum begins to turn.
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
* 57 A The machines turn.
* 58 A The snow keeps falling on the window.
* 59 A For a while, it's enough.

### SCENE s01040 | INT. TERMINATOR GREENHOUSE - TIDALLY LOCKED WORLD - TWILIGHT
Detected names (may be incomplete or contain aliases): ILSA VANTONGEREN, BRAM, QUILLON, SEPHORA
* 1 A ¶ A long glass nave on the border between day and night.
* 2 A To the east, a white-hot sun hangs unmoving.
* 3 A To the west, black sky and frozen plains.
* 4 A Inside, tomato vines climb silver wires, heavy with fruit.
5 A ¶ ILSA VANTONGEREN, 50s, botanist, hair wrapped in a faded scarf, kneels among the roots.
6 A She hums as she works, one hand cupping a green fruit like a held breath.
7 A ¶ BRAM, 20s, her apprentice, stands behind her.
8 A He holds a tablet and stares at it as if it had insulted him.
9 D BRAM: Ilsa. The heat sink is at ninety-four.
10 D ILSA: Ninety-four of what?
11 D BRAM: Percent.
12 A ¶ She rises slowly.
13 A Her knees crack.
14 A She doesn't look at the tablet.
15 A She looks at the glass.
16 D ILSA: It was ninety-one an hour ago.
17 D BRAM: I know.
18 D ILSA: Then why are you telling me like it's news?
19 A ¶ He swallows.
20 A He pockets the tablet.
21 A ¶ QUILLON, 30s, the colony's engineer, jogs down the nave, boots clanging on the grating.
22 A He is out of breath, face slick, goggles pushed up on his forehead.
23 D QUILLON: Ilsa! Bram! The shade array's jammed.
24 D ILSA: Jammed how?
25 D QUILLON: It won't rotate. The motor's seized.
26 D BRAM: Because of the heat?
27 D QUILLON: Because of a bolt. Someone put a bolt in the gear.
28 D ILSA: Someone?
29 D QUILLON: Or something.
30 A ¶ Dr. Sephora Oyama's voice crackles from a speaker in the roof.
31 D SEPHORA [V.O.]: Greenhouse, this is Medical. We have a patient with heat stroke in the corridor. Is anyone free to--
32 D ILSA (cutting in): We're busy.
33 D BRAM (over her): Send Quillon!
34 D QUILLON (over Bram): I can't, I'm needed here!
35 D SEPHORA [V.O.]: Please. She's asking for you, Ilsa.
36 A ¶ Ilsa stops.
37 A Her hand falls from the tomato.
* 38 A The vines rustle, as if the plants were leaning to listen.
39 D ILSA: Who is?
40 D SEPHORA [V.O.]: Your daughter.
41 A ¶ She turns to the glass.
42 A Stares at the white sun.
43 A Her shoulders fall, then straighten.
44 D ILSA: Bram. Take the tomatoes. All of them. Into the cold room.
45 D BRAM: All of them?
46 D ILSA: All. Quillon, fix the array. I don't care if you have to swing from it.
47 D QUILLON: And you?
48 D ILSA: I'm going to my daughter.
49 A ¶ She is already running.
50 A Her scarf comes loose and trails behind her like a flag.
51 A ¶ Bram watches her go.
52 A Quillon grabs his arm.
53 D QUILLON [CONT'D]: Come on. We've got maybe ten minutes.
54 D BRAM: Before what?
55 D QUILLON: Before the glass starts cracking.
56 A ¶ He is already moving.
57 A Bram scrambles after, arms full of fruit, tomatoes bouncing and rolling across the floor.

### SCENE s01041 | INT. ICE-FISHING SHANTY - LAKE SUPERIOR - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS MCINTYRE, MARGOT LEBLANC, TEDDY ORLOV, BRIGID FALLON, ANSEL
* 1 A ¶ A plywood box on a frozen lake, six by eight, glowing orange from a propane heater.
* 2 A Four holes drilled in the floor, four lines dropped into black water.
* 3 A Thermoses, a deck of cards, a battered radio playing country music.
4 A ¶ HOLLIS MCINTYRE, 50s, flannel, beard iced at the tips, sits on an overturned bucket.
5 A MARGOT LEBLANC, 40s, wool cap, jigs her rod in slow circles.
6 A TEDDY ORLOV, 12, her nephew, in an oversized snowmobile suit, stares into his hole.
7 A BRIGID FALLON, 30s, newcomer, borrowed boots, holds a cup of cocoa with both hands.
8 A ANSEL, 70s, Hollis's father, dozes by the door.
9 D HOLLIS: Coldest night of the year, they said.
10 D MARGOT: Warmest, if you're lucky.
11 D BRIGID: Do they bite when it's like this?
12 D HOLLIS: They bite when they feel like it.
13 D TEDDY: I got one!
14 A ¶ All four turn.
15 A Teddy's line goes taut.
16 A He heaves.
17 D MARGOT: Easy, kiddo!
18 D HOLLIS: Let him fight!
* 19 A ¶ The rod bends nearly double.
* 20 A Ice creaks.
* 21 A Then the line goes slack.
22 A Teddy tumbles back, laughing.
23 D TEDDY: It got away!
24 D BRIGID: That's the best part.
25 A ¶ She sips.
26 A Settles.
* 27 A The heater hisses.
28 A Ansel snores.
29 D MARGOT: I love this. The quiet.
30 D HOLLIS: It's not that quiet.
31 D MARGOT: It's quiet enough.
* 32 A ¶ For a minute, no one speaks.
* 33 A The radio plays a slow song.
* 34 A Snow ticks on the roof.
35 D BRIGID: Does the lake ever talk?
36 D HOLLIS: Talk?
37 D BRIGID: The ice. It was making a noise earlier. Like a groan.
38 D MARGOT: It does that. Expansion.
39 D HOLLIS: It's the cold working through it.
* 40 A ¶ The groan comes again.
* 41 A Longer, lower.
42 A Teddy leans closer to the hole.
43 D TEDDY: It sounds like a person.
44 D MARGOT: Teddy.
45 D TEDDY: Like someone humming.
46 D HOLLIS: Don't be silly.
47 D MARGOT: Don't be silly.
48 A ¶ They've said it at the same time, same flat tone.
49 A They look at each other and neither smiles.
* 50 A ¶ The humming continues.
* 51 A Not the radio.
* 52 A From under the floor.
53 A ¶ Ansel's eyes open.
54 D ANSEL (whispering): Nobody put your hand in the hole.
55 D BRIGID: What?
56 D ANSEL: Don't. Please.
57 A ¶ Teddy's fingers are already at the edge of the water.
58 A ¶ From the black circle, a pale hand rises, slow, almost tender.
59 A It takes Teddy's mitten between two fingers, holds it, as if checking the size.
* 60 A ¶ The heater goes out.

### SCENE s01042 | INT. COMMUNITY CENTER LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): COACH RUTHANNE PIKE, ZEKE, DOM, MEI-LING, COACH
* 1 A ¶ Dented lockers, wet benches, a whiteboard with a half-erased play.
* 2 A The fluorescent tubes buzz.
3 A ¶ COACH RUTHANNE PIKE, 50s, whistle around her neck, paces the length of the room.
4 A ZEKE, 20s, taped wrists, sits head down.
5 A DOM, 30s, pulls on a jersey.
6 A MEI-LING, 20s, goalie, rocks on her toes.
7 D COACH (to all): Third period. We're down two.
8 D ZEKE: We're down three.
9 D COACH: Down two. The ref owes us one.
10 D DOM: He owes us two.
11 D MEI-LING (muttering): Ref owes us a kidney.
12 D COACH: Zeke, look at me. Look up.
13 A ¶ He lifts his head.
14 D COACH [CONT'D]: You're the fastest man on this ice.
15 D ZEKE: My knee.
16 D COACH: Your knee's fine.
17 D DOM: Coach, the knee isn't fine.
18 D COACH: Dom, tie your skates.
19 D DOM: They're tied.
20 D COACH: Tie them again.
21 A ¶ Mei-Ling punches her pads, twice.
* 22 A The sound is a heartbeat.
23 D MEI-LING: Nobody gets past me. Not one.
24 D COACH: That's what I like to hear.
* 25 A ¶ The horn sounds down the hall.
26 A They rise as one.
27 A Zeke limps, then doesn't.

### SCENE s01043 | INT. ASSAY OFFICE - GOLD RUSH TOWN - DAY (1851)
Detected names (may be incomplete or contain aliases): THADDEUS WHIT, CORNELIA BASS
* 1 A ¶ A plank room, one window grimed with dust, a counter scarred by a thousand scales.
* 2 A Weighing pans, crucibles, a brass balance under glass.
3 A ¶ THADDEUS WHIT, 50s, spectacles, black sleeve garters, presides behind the counter.
4 A His fingers are stained yellow from nitric acid.
* 5 A ¶ The door bangs.
6 A CORNELIA BASS, 30s, trousers and a man's hat, strides in.
7 A Dust to her knees.
8 A A leather pouch swings from her belt.
9 D THADDEUS: We close in ten minutes, madam.
10 D CORNELIA: Then I'll be quick.
11 A ¶ She drops the pouch on the counter.
* 12 A It thuds.
13 D THADDEUS: What have you got?
14 D CORNELIA: Color.
15 A ¶ He unties the cord.
16 A Pours.
* 17 A Dull yellow dust pools on a sheet of paper.
18 A ¶ He pinches some.
19 A Rolls it between his fingers.
20 A Holds it to the light.
21 D THADDEUS: Where was this panned?
22 D CORNELIA: Dry Creek.
23 D THADDEUS: Dry Creek has been dry for a year.
24 D CORNELIA: That's why it's called Dry Creek.
25 A ¶ He gives her a thin smile.
26 A Reaches for a vial.
27 D THADDEUS: A drop of acid. For the test.
28 D CORNELIA: Go on.
29 A ¶ He doses the metal.
* 30 A It stays bright.
31 A He nods.
32 D THADDEUS: It's good.
33 D CORNELIA: I know.
34 D THADDEUS: Twelve dollars an ounce.
35 D CORNELIA: Twenty.
36 D THADDEUS: Fourteen.
37 D CORNELIA: Seventeen and the sack.
38 D THADDEUS: Done.
39 A ¶ He weighs it.
40 A Writes a slip.
41 A Counts bills from a strongbox.
42 A Slides them over.
43 A She doesn't count them.
44 D CORNELIA: You'll be here tomorrow?
45 D THADDEUS: Every day but Sunday.
46 D CORNELIA: Good. I'll bring more.
47 D THADDEUS: Madam, if I may. A woman alone in these hills--
48 D CORNELIA: I'm not alone.
49 D THADDEUS: Your husband?
50 D CORNELIA: My claim. A hundred yards of dirt. And a rifle.
51 D THADDEUS: Ah.
52 A ¶ She tips her hat.
53 A Heads for the door.
54 A Stops with her hand on the latch.
55 D CORNELIA [CONT'D]: Mr. Whit.
56 D THADDEUS: Yes?
57 D CORNELIA: You tested my gold with acid.
58 D THADDEUS: Standard practice.
59 D CORNELIA: And you held it to the light.
60 D THADDEUS: Also standard.
61 D CORNELIA: But you never looked at the weight.
62 A ¶ Thaddeus freezes.
63 A The pen drops from his fingers.
64 D CORNELIA [CONT'D]: That scale tilts two grains left. I've been watching it for three weeks.
65 D THADDEUS: It's properly calibrated.
66 D CORNELIA: It's not.
67 D THADDEUS: I'll ask you to leave.
68 D CORNELIA: You'll ask me nothing.
69 A ¶ She turns back.
70 A Her hand slips beneath her coat.
71 D THADDEUS: Madam.
72 D CORNELIA: Open the strongbox.
73 D THADDEUS: This is robbery.
74 D CORNELIA: It's restitution.
75 A ¶ He doesn't move.
* 76 A The clock ticks.
* 77 A Dust drifts through the light.
78 D THADDEUS: There's four hundred dollars.
79 D CORNELIA: There's four thousand. Under the false bottom.
80 A ¶ Thaddeus goes white.
81 A He kneels, trembling, lifts the strongbox's lining.
82 D THADDEUS: How?
83 D CORNELIA: I used to keep books in Sacramento.
84 A ¶ He lays a bundle on the counter.
85 A Then another.
86 A She slides them into her pouch.
87 D CORNELIA [CONT'D] (over his words): We never met.
88 D THADDEUS: We never met.
89 A ¶ They say it together.
90 A She smiles.
91 A He doesn't.
92 A ¶ She leaves.
* 93 A The door clacks shut.
* 94 A The bell above it jingles for a long time.

### SCENE s01044 | INT. LIBRARY OF MOTHS - THE HOLLOW TOWER - NIGHT
Detected names (may be incomplete or contain aliases): ORRIN, SABLE, TAMSIN, VESPER
* 1 A ¶ Shelves rise into darkness, thick with bound ledgers.
* 2 A Pale moths cover every spine, their wings turning the pages by themselves.
3 A ¶ ORRIN, a young knight in dented mail, steps through the arch, sword half-drawn.
4 A At his side, SABLE, a thief with a hooded cloak and a crooked smile, carries a lantern whose flame burns blue.
5 D ORRIN: Quiet. They sleep.
6 D SABLE: They're moths, Orrin. They don't sleep.
7 A ¶ TAMSIN, a girl of twelve in an apprentice's smock, scurries from behind a shelf, arms full of scrolls, and nearly collides with them.
8 A All three freeze.
9 D TAMSIN: You are not supposed to be here.
10 D SABLE: No one is.
* 11 A ¶ The moths lift in a silent cloud.
12 A Orrin's sword rings free.
13 A Sable ducks, Tamsin shrieks, scrolls scatter, and the three tumble together into the center aisle, tangled in cloak and chain.
* 14 A ¶ A hush falls.
15 A ¶ VESPER, tall and thin, robed in gray, steps from between the shelves.
16 A Her face is a smooth mask of bone-white silk.
17 A She raises one hand.
* 18 A The moths settle.
19 D VESPER: The Archivist welcomes you. Now put down the lantern.

### SCENE s01045 | INT. GOAT YOGA STUDIO - MORNING
Detected names (may be incomplete or contain aliases): CLAUDETTE FONTENOT, LEONARD PRICE, MAMA ROSE
* 1 A ¶ A converted barn.
* 2 A Bamboo mats in neat rows, string lights, a chalkboard reading "Namaste Baa-ck."
3 A Six goats wander the floor, bored, chewing yoga straps.
4 A ¶ CLAUDETTE FONTENOT, 40s, instructor, flowing linen, sits cross-legged on a mat with a phone propped against her water bottle.
5 A LEONARD PRICE, 50s, her only student, a stockbroker in too-tight spandex, attempts a downward dog.
6 D LEONARD: Claudette, one of them is eating my sock.
7 D CLAUDETTE: That's Beyonce. She loves attention.
8 D LEONARD: It's attention with teeth.
9 D CLAUDETTE: Breathe, Leonard. In through the nose.
10 A ¶ He breathes.
11 A Beyonce chews.
12 A He breathes again.
* 13 A ¶ The phone rings.
* 14 A A photo of an elderly woman in a floppy hat.
* 15 A MAMA ROSE.
16 D CLAUDETTE [CONT'D]: Sorry. I have to take this.
17 A ¶ She answers on speaker.
18 D MAMA ROSE [V.O.]: Claudette! Are you on the goat farm again?
19 D CLAUDETTE: It's a studio, Mama.
20 D MAMA ROSE [V.O.]: Is it the goat that eats the shoes?
21 D LEONARD (under his breath): That's the one.
22 D MAMA ROSE [V.O.]: Who's that? A man? Are you seeing a man?
23 D CLAUDETTE: It's a client, Mama.
24 D MAMA ROSE [V.O.]: He sounds fat.
25 D LEONARD: I'm in a very difficult pose.
26 D MAMA ROSE [V.O.]: Claudette, I need you to come home. The faucet is leaking again.
27 D CLAUDETTE: I'll call a plumber.
28 D MAMA ROSE [V.O.]: Plumbers are thieves.
29 D CLAUDETTE: Mama, I love you. I have to teach.
30 D MAMA ROSE [V.O.]: Is the goat singing? I hear a goat singing.
31 A ¶ On cue, Beyonce bleats, triumphant.
32 D CLAUDETTE (to Leonard): She's proud of you.
33 D LEONARD: I'll be sure to thank her.
34 D CLAUDETTE: Goodbye, Mama.
35 A ¶ She hangs up.
36 A Smooths her linen.
37 A Resettles.
38 D CLAUDETTE [CONT'D]: Where were we?
39 D LEONARD: Paying for this.
40 D CLAUDETTE: Right. Warrior One.

### SCENE s01046 | INT. VOSSBERG & CRANE - EXECUTIVE NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE ADEYEMI, MALCOLM VOSSBERG
* 1 A ¶ Six sleek pods, each shaped like a lacquered egg.
* 2 A Soft ambient chimes.
* 3 A A sign on the wall: REST IS RESULTS.
4 A ¶ PRUDENCE ADEYEMI, 40s, in a pressed navy suit, stands outside pod three.
5 A She has been standing there a long time.
6 A Her phone is in her hand, screen dark.
7 A ¶ MALCOLM VOSSBERG, 50s, in shirtsleeves, tie loosened to a politician's disarray, emerges from pod four rubbing his eyes.
8 A He sees her.
9 A He smiles.
10 A He is not surprised.
11 D MALCOLM: Prudence. I thought you'd gone home.
12 D PRUDENCE: I did.
13 D MALCOLM: Then you came back.
14 D PRUDENCE: For my coat.
15 A ¶ She doesn't move toward the coat rack.
16 A He does.
17 A He lifts her coat off a hook, holds it out.
18 A She takes it.
19 A Doesn't put it on.
20 D MALCOLM: Rough week.
21 D PRUDENCE: It's Thursday.
22 D MALCOLM: Rough Thursday.
23 A ¶ He adjusts a pod's dial.
* 24 A The chimes change key.
25 D MALCOLM [CONT'D]: The numbers will be fine. They always are.
26 D PRUDENCE: Are they?
27 D MALCOLM: You doubt me?
28 D PRUDENCE: I doubt the spreadsheet.
29 D MALCOLM: It's your spreadsheet.
30 D PRUDENCE: It's the one you rewrote.
* 31 A ¶ Silence.
* 32 A The chimes continue.
* 33 A A faint hiss of oxygen from the pods.
34 D MALCOLM: I thought you'd appreciate the efficiency.
35 D PRUDENCE: Efficiency.
36 D MALCOLM: Streamlining.
37 A ¶ Prudence folds her coat over her arm.
38 A Folds it a second time.
39 A Smooths it flat with both hands, too carefully.
40 D PRUDENCE: I'll be in my office.
41 D MALCOLM: You were just leaving.
42 D PRUDENCE: I changed my mind.
43 A ¶ He nods.
44 A Looks at the pod.
45 A Looks at her.
46 D MALCOLM: Sleep on it. That's what these are for.
47 A ¶ She turns, walks to the door.
48 A Pauses with one hand on the frame.
49 D PRUDENCE: Do you sleep in there?
50 D MALCOLM: Every day.
51 D PRUDENCE: And dream?
52 D MALCOLM: Never.
53 D PRUDENCE: That's what I thought.
54 A ¶ She leaves.
55 A He watches the door close, then climbs back into pod four and seals the lid.

### SCENE s01047 | EXT. SALT FLAT - ABANDONED STAGECOACH - HIGH NOON
Detected names (may be incomplete or contain aliases): MARSHAL CULLEN BRODERICK, DUTCH, LUPE VARGAS
* 1 A ¶ White to the horizon.
* 2 A Heat shimmer bends the sky.
* 3 A A stagecoach tilts on a broken axle, one wheel cocked in the crust.
4 A ¶ MARSHAL CULLEN BRODERICK, 50s, tin star, dust-gray duster, steps down from the coach, rifle across his arm, while behind him DUTCH, a lean outlaw in manacles, shuffles toward the shade, and LUPE VARGAS, 30s, the driver, slaps her hat against her knee, checks the horses, and mutters at the broken wheel, all three of them squinting at a dark speck on the horizon that keeps growing.
5 D CULLEN (to the others): Nobody run. There's nowhere to run to.
6 D DUTCH (low, to Cullen): Marshal, take these off me. If that's riders, I can shoot.
7 D CULLEN: No.
8 D LUPE (to herself): Three days. Three goddamn days of salt.
9 D CULLEN: Lupe. Water.
10 A ¶ She tosses him a canteen.
11 A He drinks, passes it to Dutch.
12 A Dutch drinks, passes it back.
* 13 A The speck becomes a rider.
14 D DUTCH: That's a lone horse.
15 D CULLEN: Could be a lone man.
16 D LUPE: Could be a mirage.
17 A ¶ The rider slows.
18 A Stops a hundred yards out.
19 A Raises a white cloth.
20 A Waves it.
21 A ¶ Cullen lowers the rifle.
22 A Dutch exhales.
23 A Lupe pulls her hat down.

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
