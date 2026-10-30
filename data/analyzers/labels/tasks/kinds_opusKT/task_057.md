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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0057.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01911 | EXT. BRIDGE OF BONES, MISTY GORGE - DAWN
Detected names (may be incomplete or contain aliases): SIR GARRICK WYNDHAM-ADEYEMI, HEDDA STORMCALLER-BRAND, TICK, FENWICK
* 1 A ¶ A narrow span of lashed ribs and vertebrae across a chasm.
* 2 A Fog boils below.
* 3 A Ravens circle.
4 A ¶ SIR GARRICK WYNDHAM-ADEYEMI (40s, dented plate armor, a notched longsword) steps onto the bridge.
5 A Behind him, HEDDA STORMCALLER-BRAND (30s, furs, a bow across her back) and the boy TOBIN "TICK" FENWICK (14, oversized helmet, a lantern) wait at the edge.
6 D GARRICK: Stay close.
7 D HEDDA: I always do.
8 D TICK: It creaks.
9 D GARRICK: It's meant to.
10 A ¶ They step out, single file.
* 11 A Ribs groan.
* 12 A A raven lands on a post and croaks.
13 A Hedda draws an arrow.
14 A Tick clutches the lantern.
* 15 A ¶ From beneath the bridge, a long, wet rattle.
* 16 A Everything stops.
* 17 A ¶ The span lurches.
* 18 A Ribs snap loose and tumble into the fog.
19 A Garrick seizes Tick by the collar while Hedda throws her bow across the gap, hooks a post, and hauls herself and the boy forward by the string.
20 A Tick screams, drops the lantern, and scoops it back up.
21 A Garrick hacks at a lashing that has caught his boot, and the bridge sags behind them.
22 A ¶ They freeze, panting.
* 23 A The bridge rocks once, then settles.
24 D TICK: Is it dead?
25 D HEDDA: It was already dead.
26 D GARRICK: It's gone. Move.
27 A ¶ They run across, boots thundering on bone, and leap the final gap to solid ground.
28 A All three collapse, laughing and gasping.

### SCENE s01912 | INT. PET CEMETERY CHAPEL - DAY
Detected names (may be incomplete or contain aliases): CLEM, OKONKWO-PRATT, WINNIE, BARNABY-LEE, AGGIE
* 1 A ¶ Folding chairs, silk flowers, a tiny coffin the size of a shoebox on a velvet-draped table.
* 2 A Organ music from a small speaker.
3 A ¶ REVEREND CLEMENTINE "CLEM" OKONKWO-PRATT (60s, vestments, a voice built for sermons) stands behind the lectern.
4 A In the front row sits WINSTON "WINNIE" BARNABY-LEE (50s, ill-fitting black suit), clutching a handkerchief.
5 A Beside him sits his sister AGATHA "AGGIE" BARNABY-LEE (50s, enormous hat, a casserole dish in her lap).
6 D CLEM: We are gathered here today to honor the life of Biscuit.
7 D WINNIE (sobbing): Biscuit.
8 D AGGIE (sobbing): Biscuit.
9 D CLEM: Biscuit was a hamster of rare character.
10 D WINNIE: She was!
11 D AGGIE: ^He was!
12 A ¶ Clem pauses.
13 A Looks at both.
14 A Winnie blinks at Aggie.
15 D WINNIE: She was a she.
16 D AGGIE: He was a he. I raised him.
17 D WINNIE: I bought her at the pet store. She had the little pink nose.
18 D AGGIE: Winston, that was Biscuit's cousin.
19 D CLEM: Mr. and Ms. Barnaby-Lee. Please.
20 A ¶ She raises both hands.
21 A They subside.
22 A She clears her throat.
23 D CLEM [CONT'D]: Whether Biscuit was male, female, or the subject of a clerical error, we honor the hamster.
24 D WINNIE: Amen.
25 D AGGIE: Amen.
26 D CLEM: Biscuit loved sunflower seeds and the wheel. She ran it for hours.
27 D AGGIE: He ran it for days.
28 D WINNIE: He never!
29 D AGGIE: You just said "he."
30 D WINNIE: Slip of the tongue.
31 D CLEM: Shall we sing?
* 32 A ¶ Organ swells.
33 A Winnie and Aggie sing, badly, in two different keys.
34 A Clem winces but does not stop them.
35 A ¶ At the end, Aggie lifts her casserole dish and sets it on the coffin.
36 D AGGIE: Tuna noodle. Biscuit's favorite.
37 D WINNIE (softly): Hamsters can't eat tuna.
38 D AGGIE: Well, he can now.
39 A ¶ Clem closes her eyes, and, for the first time, smiles.

### SCENE s01913 | INT. SUBURBAN KITCHEN - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): HEIDI KOWALCZYK-MBEKI, PETE, STRANGER, HAMISH OYELOWO-DRUMMOND
* 1 A ¶ Linoleum, a wall calendar, a fridge plastered in drawings.
* 2 A A clock ticks over the stove.
3 A ¶ HEIDI KOWALCZYK-MBEKI (40s, apron over work clothes) stirs a pot.
4 A Her son PETER "PETE" KOWALCZYK-MBEKI (10, grass-stained knees) sits at the table, picking at a scab.
5 D HEIDI: Dinner in ten.
6 D PETE: Mom, I'm hungry.
7 D HEIDI: You're always hungry.
8 D PETE: Because I'm growing.
9 D HEIDI: ^Don't use that on me.
* 10 A ¶ A heavy knock at the front door.
11 A Both freeze.
12 A Heidi looks at the clock.
13 A Pete slides off his chair.
14 D PETE [CONT'D]: I'll get it.
15 D HEIDI: Pete, no.
16 A ¶ He is already gone.
17 A Heidi wipes her hands.
* 18 A The knocking comes again, patient.
19 A Pete's voice drifts from the hall.
20 D PETE [O.S.]: Hi. Who are you?
21 D STRANGER [O.S.]: Hello, young man. Is your mother home?
22 A ¶ Heidi's face tightens.
23 A She puts the wooden spoon on the counter and follows.
24 A ¶ IN THE HALL
25 A ¶ A tall man in a rumpled gray suit, HAMISH OYELOWO-DRUMMOND (50s, soft hat, a manila folder), stands on the doormat, smiling carefully.
26 A Pete peers up at him, curious.
27 D HAMISH: My name is Hamish. I'm from the county adoption office.
28 D HEIDI: We're not adopting.
29 D HAMISH: No, ma'am. But you were adopted, weren't you? In 1988.
30 A ¶ Heidi goes pale.
31 A Pete takes her hand.
32 D HEIDI: Who sent you?
33 D HAMISH: Your sister.
34 D PETE: Mom, I didn't know you had a sister.
35 D HEIDI: Neither did I.
36 A ¶ She steps aside.
37 A Lets him in.

### SCENE s01914 | INT. SKY-FERRY GALLEY, ABOVE THE CLOUDSEA - DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN ZEPHYRA QUILL, FIRST MATE BRANNOCH TAL, PIP SILVERTONGUE, GUNNAR EMBERFIST, DAME OSWYTHA MARROWGATE
* 1 A ¶ Copper pots.
* 2 A Hanging lanterns.
* 3 A A porthole full of pink cloud.
* 4 A The deck tilts gently, then rights itself.
5 A ¶ CAPTAIN ZEPHYRA QUILL (40s, salt-and-pepper braid, brass goggles on her forehead) sits at a long table, a ledger open before her.
6 A Across from her, FIRST MATE BRANNOCH TAL (30s, scarred cheek, rope-burned palms) peels an apple with a dagger.
7 A At the stove, cook PIP SILVERTONGUE (14, flour on her nose) stirs a pot.
8 A And at the head of the table, GUNNAR EMBERFIST (60s, dwarf, forge-blackened apron) hammers a loose rivet with a wrench.
9 D ZEPHYRA: Tally's short again.
10 D BRANNOCH: By how much?
11 D ZEPHYRA: Forty crowns.
12 D GUNNAR: Forty crowns buys a lot of rivets.
13 D PIP: Forty crowns buys a lot of pie.
14 D BRANNOCH: Pip, you ate the last of the pie.
15 D PIP: I did not. Gunnar did.
16 D GUNNAR: I did not!
17 D ZEPHYRA: Nobody ate anything. Pie doesn't vanish on its own.
18 D BRANNOCH: It does on this ship.
19 D GUNNAR: Brannoch, hand me that lantern.
20 D BRANNOCH: Hand it yourself, Gunnar.
21 D PIP: I'll get it!
22 A ¶ Pip scrambles for the lantern.
23 A Gunnar reaches for it too.
24 A They collide.
* 25 A The lantern drops, rolls, and stops against the captain's boot.
26 A She stoops, retrieves it, and sets it on the table without comment.
27 D ZEPHYRA: Pip, bring the soup. Gunnar, mind the rivet. Brannoch, put the dagger away before you lose a finger.
28 D BRANNOCH (sheathing it): Aye, Captain.
29 D PIP: Soup's coming!
30 D GUNNAR: Rivet's holding!
* 31 A ¶ The galley hatch bangs open.
* 32 A A gust of cold air sweeps through.
33 A In the doorway stands DAME OSWYTHA MARROWGATE (70s, imperial blue coat, a cane topped with a silver owl).
34 A She surveys the room.
* 35 A Silence falls.
36 D OSWYTHA: Captain Quill. A word.
37 D ZEPHYRA: Dame Oswytha. You're a long way from the Admiralty.
38 D OSWYTHA: I came by courier. I had a thing to deliver.
39 A ¶ She taps the cane.
* 40 A A small brass tube falls from the owl's beak, rolls across the table, and stops at Zephyra's ledger.
41 D BRANNOCH (low): That's the royal seal.
42 D GUNNAR (lower): I'll kill the pie thief myself.
43 D PIP (lowest): Mother of clouds.
44 A ¶ Zephyra breaks the seal.
45 A Unrolls the scroll.
46 A Reads.
47 A Her face does not change, which is worse.
48 D ZEPHYRA: Pardon.
49 D OSWYTHA: Full. Retroactive. For the forty crowns, and the fifteen before that, and the rest.
50 D BRANNOCH: Captain?
51 D ZEPHYRA: We've been pardoned for smuggling.
52 D GUNNAR: Smuggling?
53 D PIP: We smuggled?
54 D ZEPHYRA: Pip, we've always smuggled.
55 D PIP: I thought it was just cargo.
56 D OSWYTHA: It was both.
57 A ¶ She turns toward the door.
58 A Stops.
59 A Looks over her shoulder.
60 D OSWYTHA [CONT'D]: The Admiralty requests that you stop. The Crown, however, would like to hire you.
61 D ZEPHYRA: For what?
62 D OSWYTHA: Smuggling. Of a different sort.
63 A ¶ Zephyra laughs, short and surprised.
64 A Brannoch whistles.
65 A Gunnar sets down the wrench.
66 A Pip carries the soup to the table, slowly, eyes wide, and for the first time in her short life says nothing at all.
67 D ZEPHYRA: Dame Oswytha, join us for dinner.
68 D OSWYTHA: I thought you'd never ask.
* 69 A ¶ Chairs scrape.
* 70 A The ship tilts.
* 71 A The lanterns swing.

### SCENE s01915 | INT. FUNERAL PARLOR, SIDE ROOM - DAY
Detected names (may be incomplete or contain aliases): VIVIENNE ACHTERBERG-NOLAN, ALISTAIR ACHTERBERG-NOLAN, ROZ, FENTON-ADEKUNLE
* 1 A ¶ Mahogany.
* 2 A A low table of untouched cookies.
* 3 A Through the half-open door: murmurs, organ music, the shuffle of black shoes.
4 A ¶ VIVIENNE ACHTERBERG-NOLAN (40s, black dress, hair coiled) pours tea with surgical care.
5 A Her brother ALISTAIR ACHTERBERG-NOLAN (40s, suit a size too small) paces.
6 A Their aunt, ROSALIND "ROZ" FENTON-ADEKUNLE (70s, cane, pearl choker), sits straight-backed on the sofa.
7 D VIVIENNE: Everyone's here. Even the cousins from Perth.
8 D ALISTAIR: That's a miracle.
9 D ROZ: It's an inheritance.
10 D VIVIENNE: Aunt Roz.
11 D ROZ: I'm only saying what the room is thinking.
12 D ALISTAIR (muttering): The room is thinking about sandwiches.
13 D VIVIENNE: Nobody's thinking about sandwiches.
14 D ALISTAIR: I am.
15 A ¶ He takes a cookie.
16 A Bites.
17 A Chews with his back to them.
18 A Vivienne sets the teapot down.
19 A Her hands are steady, too steady.
20 D VIVIENNE: Alistair.
21 D ALISTAIR: Mm.
22 D VIVIENNE: ^Did you read the will?
23 D ROZ: ^Did you read the will?
24 A ¶ They both stop.
25 A Look at each other.
26 A Roz sips her tea.
27 D ALISTAIR: Not yet.
28 D VIVIENNE: Alistair.
29 D ALISTAIR: I haven't had the heart.
30 D ROZ: Then I'll give you the heart of it, dear. There isn't any money.
* 31 A ¶ Silence.
* 32 A The organ rises through the wall.
33 D VIVIENNE: What?
34 D ROZ: Your father spent it years ago. On the house, on your schooling, on the lawyers. On me.
35 D ALISTAIR: On you?
36 D ROZ: I had a hip.
37 D VIVIENNE (very quietly): He told us it was fine.
38 D ROZ: He told everyone it was fine. It was his only vice.
39 A ¶ Alistair sets down the cookie.
40 A Looks at his sister.
41 A Something passes between them, old and wordless.
42 D ALISTAIR (to himself): Of course. Of course he did.
43 D VIVIENNE: Alistair?
44 D ALISTAIR: I'm going to go and thank everyone for coming.
45 D VIVIENNE: Alone?
46 D ALISTAIR: No. Come with me.
47 A ¶ She nods.
48 A He offers his arm.
49 A She takes it.
50 D ROZ (calling after them): Take a sandwich!
* 51 A ¶ The door closes.
52 A Roz, alone, sets down her cup, and lets her shoulders drop for the first time.

### SCENE s01916 | INT. SAFE HOUSE, TOP FLOOR OF A CLOSED HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE MIRELA VASQUEZ-ODEH, STRANGER, DISPATCH, ANSELM
* 1 A ¶ Plaster dust.
* 2 A A bare bed frame.
* 3 A Window shutters nailed shut.
* 4 A On the floor, a battered radio set squats between two chairs.
5 A ¶ DETECTIVE MIRELA VASQUEZ-ODEH (40s, trench coat, a revolver at her hip) sits in one chair, back to the wall.
6 A Opposite her, a man in a gray suit, STRANGER (50s, ink-stained fingers, a gauze patch on his neck), sits with his hands in his lap.
7 D VASQUEZ-ODEH: You've been very quiet.
8 D STRANGER: You haven't asked me anything.
9 D VASQUEZ-ODEH: I'm asking now. Who are you?
10 D STRANGER: A man who works for the people who want me dead.
11 D VASQUEZ-ODEH: That's not a name.
12 D STRANGER: It's the only name I carry safely.
* 13 A ¶ The radio crackles.
* 14 A A clipped voice breaks through, distorted.
15 D DISPATCH [V.O.]: Unit Four, this is Control. Confirm subject in custody.
16 A ¶ Vasquez-Odeh picks up the handset, eyes on him.
17 D VASQUEZ-ODEH: Control, subject is in custody. Repeat, subject is secure.
18 D DISPATCH [V.O.]: Copy. Transport in twenty. Stand by.
19 A ¶ She sets the handset down.
20 A He watches her do it.
21 D STRANGER: They aren't coming for me. They're coming for you.
22 D VASQUEZ-ODEH: You'd say that.
23 D STRANGER: I'd say it because it's true. Control isn't Control. You've been talking to an empty room for an hour.
24 A ¶ She draws the revolver.
25 A Aims.
26 A He doesn't flinch.
27 D VASQUEZ-ODEH: What's your name?
28 D STRANGER: Anselm Ravindran.
29 A ¶ She lowers the revolver an inch.
30 D VASQUEZ-ODEH: That's the name on the file. The one who was supposed to be dead.
31 D ANSELM: I was. Then I wasn't. Look at the window.
32 A ¶ She keeps the gun level, but her eyes slide to the shutters.
* 33 A A thin line of light moves behind the slats: a flashlight, sweeping.
34 D VASQUEZ-ODEH (whispering): Transport already?
35 D ANSELM: That's not transport.
* 36 A ¶ The door handle turns.
37 A They both rise, each knocking over a chair.
38 A He lunges for the radio.
39 A She lunges for the door.
40 A Their shoulders collide.
* 41 A The radio tumbles; the handset swings on its cord.
42 D DISPATCH [V.O.]: ...Unit Four, report. Unit Four...
43 A ¶ Anselm kills the power.
* 44 A Silence.
* 45 A The doorknob stops turning.
* 46 A Then, from the hall, a soft, regretful click, as of a pistol being cocked.
47 D VASQUEZ-ODEH (barely audible): Window.
48 D ANSELM: Nailed shut.
49 D VASQUEZ-ODEH: Then the ceiling.
50 A ¶ She points to a rotted panel.
51 A He nods.
52 A They climb.

### SCENE s01917 | EXT. SHELLED CHURCHYARD, NORTHERN FRONT - NIGHT
Detected names (may be incomplete or contain aliases): ZEKE, LANDGRAF-OKAFOR, WILLA, PASCOE-DIALLO, CORPORAL TIBOR NAGY-ABERNATHY
* 1 A ¶ Broken headstones.
* 2 A A fallen bell tower.
* 3 A Snow drifts across the graves like ash.
* 4 A Distant artillery drums on the horizon.
5 A ¶ SERGEANT EZEQUIEL "ZEKE" LANDGRAF-OKAFOR (40s, helmet, rifle slung) crouches behind a toppled angel.
6 A Beside him, PRIVATE WILHELMINA "WILLA" PASCOE-DIALLO (19, freckles, radio on her back) shivers.
7 A A few feet away, CORPORAL TIBOR NAGY-ABERNATHY (30s, a medic's armband) tends a wounded boy who lies unmoving in the snow.
8 D ZEKE: Willa, any word from Battalion?
9 D WILLA: Static, Sarge.
10 D ZEKE: Try again.
11 D WILLA: I've tried six times.
12 D ZEKE: Then try seven.
13 A ¶ She tunes the dial, lips pressed white.
14 A Tibor leans over the boy, listening to his chest, then sits back on his heels.
15 D TIBOR: Sarge.
16 D ZEKE: How is he?
17 D TIBOR: He's gone.
18 D ZEKE: How long?
19 D TIBOR: A few minutes. I tried.
20 A ¶ Zeke nods once.
21 A Peels off a glove.
22 A Lays a bare hand on the boy's forehead, as though checking for fever.
23 A Withdraws it.
24 D WILLA: Sarge, who was he?
25 D ZEKE: A kid from Prague. Karel.
26 D WILLA: Did he have anyone?
27 D ZEKE: A mother. I'll write her.
28 D TIBOR: You wrote the last one.
29 D ZEKE: Somebody has to.
* 30 A ¶ A shell lands far off.
* 31 A The ground trembles.
* 32 A Snow shivers from the angel's wings.
33 D WILLA: Sarge, if we're being honest, I don't think Battalion is coming.
34 D ZEKE: You're not wrong.
35 D WILLA: Then why are we here?
36 D ZEKE: Because they told us to hold the churchyard.
37 D TIBOR: And the churchyard is holding.
38 D ZEKE: Barely.
39 A ¶ Willa laughs, short and wet.
40 A Tibor smiles despite himself.
41 A Zeke looks at the broken bell tower, the stained glass scattered across the snow like spilled paint.
42 D ZEKE [CONT'D]: My grandmother used to say: a bell can't be broken. It can only be silenced.
43 D TIBOR: She sounds wise.
44 D ZEKE: She was a terror.
45 D WILLA: Sarge. The radio. I've got something.
46 A ¶ She presses the earpiece to her head.
* 47 A A voice, faint, from the other end of the war.
48 D WILLA (listening, barely breathing): All units, cease fire. I repeat, ceasefire in effect at oh-six-hundred.
49 A ¶ Willa stares at the dial.
50 A Tibor closes his eyes.
51 A Zeke sits down slowly in the snow.
52 D ZEKE: Well, then.
53 D WILLA: Is it over?
54 D ZEKE: For tonight.
55 A ¶ Tibor takes the boy's hand and holds it.
56 A Willa, shaking, unslings the radio and sits beside the Sergeant.
57 A Zeke puts an arm around her.
* 58 A Dawn begins to gray the east.
59 D TIBOR: Sarge. May I?
60 D ZEKE: Go ahead.
61 A ¶ Tibor draws a small prayer book from his pocket and begins to read, in Czech, in a voice too soft to carry beyond the angel.

### SCENE s01918 | INT. GRAND HOTEL LIBRARY, MONTE VERDE - NIGHT
Detected names (may be incomplete or contain aliases): LADY ISABELLA CORVINO-HARTWELL, CORNELIUS BANKOLE-FAIRWEATHER, ANNELIESE VOSSBERG-KANE, BUTLER AUGUSTUS PELLEGRINI-OSEI
* 1 A ¶ Leather armchairs.
* 2 A A fire in a marble hearth.
* 3 A A ladder on a brass rail.
* 4 A Rain on tall windows.
* 5 A A decanter on a silver tray.
6 A ¶ LADY ISABELLA CORVINO-HARTWELL (50s, emerald silk, a cigarette holder) pours two glasses of brandy.
7 A Across the room, MR. CORNELIUS BANKOLE-FAIRWEATHER (60s, tuxedo, white gloves) examines a leatherbound volume.
8 A And by the fire, DR. ANNELIESE VOSSBERG-KANE (40s, plain gray dress, a doctor's bag at her feet) warms her hands.
9 D ISABELLA: Cornelius, you'll tire your eyes.
10 D CORNELIUS: My eyes have survived worse than Boccaccio.
11 D ISABELLA: Anneliese, you must be cold.
12 D ANNELIESE: I am quite well, Lady Corvino.
13 A ¶ Isabella carries a glass across the room and hands it to the doctor.
14 A Anneliese accepts it, sniffs it, and does not drink.
15 D ISABELLA: You don't care for brandy?
16 D ANNELIESE: I care for knowing what's in it.
* 17 A ¶ A pause.
* 18 A The fire pops.
19 A Cornelius shuts his book.
20 D CORNELIUS: Bella, our guest is being cautious.
21 D ISABELLA: Our guest is being rude.
22 D ANNELIESE (setting the glass on the mantel): Our guest is a physician. I've examined enough of your late husband's guests to know the habits of this house.
23 D ISABELLA: How dreadfully dramatic.
24 D ANNELIESE: He died on this carpet, Lady Corvino. Not in his bed.
25 D CORNELIUS: Dr. Vossberg--
26 D ISABELLA: ^Anneliese--
27 A ¶ They speak together, stop, glare at one another.
28 A Anneliese lifts her bag onto the sofa and opens it.
29 D ANNELIESE: I've brought what's left of his glass. The one you didn't wash.
30 A ¶ Isabella's cigarette holder trembles.
31 A Cornelius takes one step toward the doctor, then thinks better of it.
32 D ISABELLA: You have no proof.
33 D ANNELIESE: I have a vial. And a friend at the laboratory in Geneva who owes me a favor.
34 D CORNELIUS: What do you want?
35 D ANNELIESE (quietly): I want to know who poured the first glass.
* 36 A ¶ Silence.
* 37 A Rain.
38 A Isabella walks to the window.
39 A Her reflection stares back, thin and white.
40 A Cornelius studies the floor.
41 A Anneliese closes the bag, snaps it shut.
42 D ISABELLA (to the glass): It was never meant for him.
43 D ANNELIESE: Then who?
44 A ¶ Isabella turns.
45 A She looks, not at the doctor, but at Cornelius.
46 A He does not look up.
47 A His gloved hands close slowly into fists.
48 D CORNELIUS: Bella.
49 D ISABELLA: You told me it was a sleeping draught.
50 D CORNELIUS: It was.
51 D ISABELLA: For him.
52 D CORNELIUS: For him.
53 D ISABELLA: Then why is the doctor here?
54 D CORNELIUS: Because she was always going to be here.
55 A ¶ He lifts his eyes to Anneliese, and there is nothing in them but a long, tired courtesy.
56 D ANNELIESE: Mr. Bankole-Fairweather. Pour yourself a brandy.
57 A ¶ He crosses to the decanter.
58 A Pours with perfect steadiness.
59 A Raises the glass.
60 A Looks at the fire.
61 A Drinks.
62 A The glass slips from his hand and shatters on the marble.
63 D ANNELIESE [CONT'D] (not moving): I told you. I care about what's in it.
64 A ¶ Isabella sinks into an armchair.
* 65 A The fire cracks.
* 66 A A discreet knock.
67 A BUTLER AUGUSTUS PELLEGRINI-OSEI (60s, immaculate, expressionless) enters with a fresh log, sees the shards, sees the body, and sets the log down very gently.
68 D AUGUSTUS: Shall I send for the constable, my lady, or for the undertaker?
69 D ISABELLA (not looking up): Both, Augustus. In that order.

### SCENE s01919 | INT. COMMUNITY POOL LOCKER ROOM - EARLY MORNING
Detected names (may be incomplete or contain aliases): LOLA FERREIRA-OKORO, TARIQ MONTGOMERY-HASSAN, PRIYA DESAI-LUND
* 1 A ¶ Wet tile.
* 2 A Green-tinted mirrors.
* 3 A A bank of dented lockers.
* 4 A A radio plays a pop song through a haze of chlorine.
5 A ¶ LOLA FERREIRA-OKORO (17, towel on her shoulder, hair in a wet braid) sits on a bench, tying a shoe.
6 A TARIQ MONTGOMERY-HASSAN (17, swim team jacket) leans against the lockers, scrolling his phone.
7 A And their friend PRIYA DESAI-LUND (17, goggles pushed up on her head) stands at a mirror, practicing a speech.
8 D PRIYA (to the mirror): Ahem. Fellow students. I stand before you today...
9 D TARIQ: You look like a politician.
10 D PRIYA: That's the idea.
11 D LOLA: You're running for class president?
12 D PRIYA: Treasurer.
13 D TARIQ: Treasurer? Who runs for treasurer?
14 D PRIYA: Someone who wants the budget.
15 D LOLA: She wants the prom budget.
16 D TARIQ: ^She wants the prom budget.
17 D PRIYA: I want a prom that doesn't have a cardboard castle.
18 D LOLA: I loved the castle.
19 D PRIYA: It fell on Mr. Dunphy.
20 D TARIQ: It was a great fall.
21 A ¶ Priya turns from the mirror.
22 A Crosses her arms.
23 D PRIYA: Will you two vote for me or not?
24 D LOLA: Obviously.
25 D TARIQ (muttering): Define "vote."
26 D PRIYA: Tariq.
27 D TARIQ: Fine. Yes. I'll vote for you.
28 D PRIYA: Say it like you mean it.
29 D TARIQ: I'll vote for you, Priya Desai-Lund, future Treasurer of the senior class.
30 D LOLA: Thank you, Tariq.
31 D TARIQ (to the room): Does anyone else need me to affirm anything?
32 D LOLA: Not at the moment.
33 A ¶ Priya claps once, delighted.
* 34 A The radio changes songs.
35 A A locker door bangs somewhere and all three flinch.
36 D PRIYA: Who's there?
* 37 A ¶ No answer.
38 A Tariq edges to the end of the row, peers around the corner.
39 D TARIQ: Nobody. Just the wind.
40 D LOLA: There's no wind in a locker room.
41 D TARIQ: Then it's a ghost.
42 D PRIYA: It's the janitor.
43 D LOLA: It's the castle.
44 A ¶ They laugh, shoving each other toward the exit.
* 45 A The radio hums.
* 46 A The door swings shut.

### SCENE s01920 | INT. ABANDONED GRAIN ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS BRANDT, WREN CALLOWAY, JEB MOSS, INES VALDEZ, CUTTER RAINE, DOC AMBROSE FINCH, DOC
* 1 A ¶ Dust hangs in lantern light.
* 2 A Wind moans through the slats.
* 3 A Sacks of rotted feed are stacked into a crude barricade.
4 A ¶ HOLLIS BRANDT, 50s, county sheriff, grey mustache, crouches behind the sacks with a Winchester.
5 A Beside him, WREN CALLOWAY, 19, deputy, freckled and shaking, thumbs shells into a revolver.
6 D HOLLIS: Count 'em again.
7 D WREN: Same as before. Three on the ladder side.
* 8 A ¶ A shot punches through the slats.
9 A Splinters rain on Hollis's hat.
10 A ¶ At the far wall, JEB MOSS, 40s, a wiry prisoner in irons, grins from a post he's chained to.
11 D JEB: Sheriff, my brother don't miss twice.
12 D HOLLIS: Then quit talking and give him a reason to miss.
13 A ¶ INES VALDEZ, 30s, a rancher's widow in a duster, kneels by the trap door, shotgun across her knees.
14 A She does not look up.
15 D INES: They're cutting the rope below us.
16 D WREN: What rope?
17 D INES: The one holding the stairs, son.
* 18 A ¶ The floor lurches.
19 A Everyone grabs something.
20 A Jeb laughs, rattling his chain.
21 D CUTTER RAINE [O.S.]: Send out Jeb and nobody dies!
22 A ¶ Hollis levels the Winchester at the trap door.
23 D HOLLIS: Cutter, I got six men and a hundred rounds.
24 D CUTTER RAINE [O.S.]: You got four and a lamp.
25 A ¶ Ines racks the shotgun.
26 A Wren swallows.
* 27 A ¶ Boots clatter on the ladder.
* 28 A The trap door flies up.
29 A CUTTER RAINE, 30s, black duster, scarred jaw, rises into the light with both hands out.
30 D CUTTER: Hold your fire. I'm coming up to talk.
31 D HOLLIS: Talk from there.
32 A ¶ Cutter smiles and keeps climbing.
33 A ¶ Behind him, a second figure hauls into view: DOC AMBROSE FINCH, 60s, bald, round spectacles, a medical bag in one hand and a stick of dynamite in the other.
34 D DOC: Evening, all. Nobody move.
35 A ¶ Hollis swings the barrel onto Doc.
36 A Ines swings hers onto Cutter.
37 A Wren points at everything.
38 D JEB: Well, now.
* 39 A ¶ Silence.
* 40 A Wind.
* 41 A The dynamite fuse hisses, lit.

### SCENE s01921 | INT. FERRY SNACK BAR - NIGHT
Detected names (may be incomplete or contain aliases): MAEVE LINDQVIST, DESMOND OKAFOR, GUS TREMBLAY, PRIYA RAMANATHAN, ODALYS FERREIRA
* 1 A ¶ A rolling sea outside the salt-streaked windows.
* 2 A Fluorescent lights buzz.
* 3 A Plastic chairs are bolted to the floor.
4 A ¶ MAEVE LINDQVIST, 30s, rain jacket, clutches a paper cup.
5 A DESMOND OKAFOR, 30s, rumpled suit, stands across the counter from her, a ring box in his fist.
6 D DESMOND: I had a speech.
7 D MAEVE: You always have a speech.
8 A ¶ GUS TREMBLAY, 60s, the snack bar attendant, wipes the counter and pretends to be deaf.
9 D DESMOND: Maeve, the ferry leaves the dock in nine minutes. If you're getting off--
10 D MAEVE: I'm not getting off.
11 D DESMOND: Then why'd you text me?
12 A ¶ PRIYA RAMANATHAN, 20s, Maeve's sister, bursts through the door, soaked, suitcase in tow.
13 D PRIYA: Because she's an idiot, that's why!
14 D MAEVE: Priya!
15 D GUS (to nobody): I'll just be over here.
16 D DESMOND: You told your sister?
17 D PRIYA: She told me everything. The ring, the job in Oslo, the--
18 D MAEVE: Stop talking.
19 D PRIYA: --the fact you cried in a car wash.
20 D MAEVE: It was a very sad car wash!
21 D DESMOND: Wait, Oslo?
* 22 A ¶ The ferry lurches.
23 A Desmond and Maeve grab the counter at the same time.
24 A Their hands land together.
25 A Both freeze.
26 A Priya gasps.
27 A Gus drops his rag.
28 D PRIYA: Oh my God. Kiss her, you coward.
29 D DESMOND: Maeve, are you leaving?
30 D MAEVE: I was asked to. I said no. I just didn't tell you.
31 D GUS: Smart girl.
32 A ¶ ODALYS FERREIRA, 50s, in a captain's cap and a stained apron, shoulders in with a tray of lemon cake.
33 A She stops.
34 D ODALYS: Who ordered the proposal?
35 A ¶ Desmond drops to one knee.
* 36 A The ring box pops open.
* 37 A A huge wave slams the hull, and the lemon cake lands on Priya's suitcase.
38 D DESMOND: Marry me or I throw up, I swear to God.
39 D MAEVE: Yes! Yes, get up!
40 A ¶ Priya shrieks.
41 A Gus applauds.
42 A Odalys snatches the ring box and examines it.
43 D ODALYS: Cheap setting. Good stone.
44 A ¶ Desmond stands.
45 A Maeve grabs his collar.
46 A They kiss as the ship horn blasts.

### SCENE s01922 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): TEO MARCHETTI, LULA BRIGHTWATER, HAMID ZAIDI, ESTELLE VANTERPOOL
* 1 A ¶ A cramped cinderblock room lit by the glow of the projector.
* 2 A The reel clatters.
* 3 A Below, through a small window, a sea of parked cars and a flickering screen.
4 A ¶ TEO MARCHETTI, 16, skinny, in a paper hat from the snack bar, threads film with careful hands.
5 A Behind him, LULA BRIGHTWATER, 16, braids and a denim jacket, sits on an upturned crate, swinging her feet.
6 D LULA: You said your uncle wouldn't be here tonight.
7 D TEO: He isn't. He's in Tulsa.
8 D LULA: Then why are you sweating?
9 D TEO: It's a hundred degrees in here.
10 A ¶ HAMID ZAIDI, 17, Teo's best friend, slouches in the doorway with a bag of popcorn and a smirk.
11 A He has not been invited.
12 D HAMID: Marchetti. Heard you were showing a double feature up here. Me and Lula.
13 D TEO: Nobody said that.
14 D HAMID: Lula said it. At the pool.
15 A ¶ Lula stops swinging her feet.
16 A Teo looks at her.
17 A She looks at the floor.
18 D LULA: I said we might hang out. That's different.
19 D HAMID: It's the same thing, apparently.
20 D TEO: Hamid, go back downstairs.
21 D HAMID: You can't tell me what to do. You're a guy in a paper hat.
22 A ¶ Teo's jaw tightens.
23 A He turns off the second projector and stands, gripping the reel in his fist like something he might throw.
24 D TEO: Say it again.
25 D LULA: Teo, don't.
26 A ¶ MRS. ESTELLE VANTERPOOL, 60s, the theater owner, in a cardigan and orthopedic shoes, appears in the doorway behind Hamid.
27 A She taps a flashlight against her palm.
28 D MRS. VANTERPOOL: Mr. Marchetti. Why is the screen showing a blank sheet?
29 A ¶ Teo drops the reel.
* 30 A It rolls across the floor and stops at her feet.
31 D TEO: It's my fault, Mrs. Vanterpool. All of it.
32 A ¶ She picks it up, studies the three of them, and hands the reel back to Teo.
33 D MRS. VANTERPOOL: Then you can fix it. And your friends can buy their own popcorn.

### SCENE s01923 | EXT. SALT FLAT STAGE RELAY STATION - DAY
Detected names (may be incomplete or contain aliases): AMOS TIBBET, NELL HARGROVE, SOFT, BARRAGAN
* 1 A ¶ White nothing in every direction.
* 2 A A low adobe station with a sagging porch squats in the glare.
* 3 A A water trough.
* 4 A A hitching rail with one tired mule.
5 A ¶ AMOS TIBBET, 60s, stationmaster, bent as a hook, sits on the porch mending a harness.
6 A NELL HARGROVE, 40s, in a dusty traveling coat, stands at the trough holding a battered carpetbag.
7 D AMOS: Stage is late.
8 D NELL: Stage is always late, I'm told.
9 D AMOS: Not this late.
10 A ¶ She dips a cup in the trough, sniffs it, and drinks anyway.
11 D NELL: How long since you've seen anyone?
12 D AMOS: Eleven days. Unless you count the mule.
13 D NELL: I count the mule.
14 A ¶ Amos chuckles, a dry sound like paper tearing.
15 A He sets the harness aside.
16 D AMOS: You headed west?
17 D NELL: I'm headed away.
* 18 A ¶ A dust plume lifts on the horizon.
19 A Amos squints.
20 A Nell shades her eyes.
21 D NELL [CONT'D]: That your stage?
22 D AMOS: That's a man on a horse.
23 A ¶ They watch.
* 24 A The plume grows.
25 A A rider takes shape: YUSUF "SOFT" BARRAGAN, 30s, narrow face, long coat, leading a second horse with an empty saddle.
26 A ¶ He stops at the rail, dismounts slowly, and tips his hat at Amos.
27 A Then at Nell.
28 A Then he walks to the trough, kneels, and splashes his face.
29 D SOFT: Morning.
30 D AMOS: Afternoon.
31 D NELL: Almost evening.
32 D SOFT: That so.
33 A ¶ He drinks.
34 A The three of them are silent.
* 35 A The mule flicks an ear.
36 D AMOS: You're a long way from anywhere, friend.
37 D SOFT: So's everyone out here.
38 D NELL: Whose is the empty horse?
39 D SOFT: Mine, once.
40 A ¶ Nell and Amos exchange a glance.
41 A Soft wipes his face on his sleeve and looks at the sky.
42 D SOFT [CONT'D]: Don't worry. I'm not here for either of you.
43 D AMOS: Good.
44 D NELL: Good.
45 D AMOS: Nobody's ever here for anybody.
46 D NELL: Everybody's here for something.
47 D AMOS: Coffee's on the stove.
48 D SOFT: I'll take it.
49 D NELL: I'll take it too.
50 A ¶ Amos rises, knees cracking, and shuffles inside.
51 A Nell sits on the edge of the porch.
52 A Soft sits at the other end.
53 A Neither speaks.
* 54 A The sun beats down.
55 D AMOS [O.S.]: Cups are chipped!
56 D SOFT: Fine by me.
57 D NELL: Fine by me.
58 A ¶ They both stand and walk toward the door.
59 A They collide in the narrow frame.
60 A Both stop.
61 A Both step back.
62 A Both gesture at the other to go first.
63 D NELL [CONT'D]: After you.
64 D SOFT: After you.
65 A ¶ Amos reappears with three tin cups and a steaming pot.
66 A He looks from one to the other and sighs.
67 D AMOS: Sit. Both of you. Before I lose my patience.
68 A ¶ They sit.
69 A Amos pours.
* 70 A Nobody drinks.
71 D SOFT: Thank you.
72 D NELL: Thank you.
73 D AMOS: Quit that.
* 74 A ¶ The mule brays.
* 75 A In the distance, faint as a thread, the sound of a coach horn.
76 D NELL: That's the stage.
77 D AMOS: Finally.
78 D SOFT: Then I'll be going.
79 D NELL: Then I'll be going too.
80 A ¶ They look at each other.
81 A Neither moves.
* 82 A The horn sounds again, closer.

### SCENE s01924 | INT. LONDON TELEGRAPH OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): LADY CORDELIA ASHWORTH, MISS PHILIPPA GRAY, ALISTAIR HOBB, CONSTABLE JOSIAH DREW
* 1 A ¶ Gas lamps hiss.
* 2 A Brass instruments click on a long oak counter.
* 3 A Rain streaks the high windows.
4 A ¶ LADY CORDELIA ASHWORTH, 40s, black mourning silk, stands at the counter.
5 A She grips a folded paper so hard it crumples.
6 A Behind the counter, MISS PHILIPPA GRAY, 20s, the night clerk, ink on her fingers, watches her with wide eyes.
7 D LADY CORDELIA: I must send it tonight.
8 D MISS GRAY: The line to Calais is down, my lady.
9 D LADY CORDELIA: Then send it by the northern route.
10 D MISS GRAY: There's no northern route after ten.
11 A ¶ She takes a step closer.
12 A She sets the paper on the counter.
13 A She does not let go of it.
14 D LADY CORDELIA: My husband's creditors will be at my door by dawn.
15 D MISS GRAY: I'm sorry for it.
16 A ¶ She pulls the paper away.
17 A She reads it.
18 A Her face changes.
19 D MISS GRAY [CONT'D]: This is addressed to a Mr. Hobb at the Admiralty.
20 D LADY CORDELIA: It is.
* 21 A ¶ The door opens.
* 22 A A gust of wet air.
23 A MR. ALISTAIR HOBB, 50s, stout, bowler hat, an umbrella dripping on the floorboards, steps inside.
24 A He sees them both and stops.
25 D MR. HOBB: Lady Ashworth. I was told I might find you here.
26 D LADY CORDELIA: By whom?
27 D MR. HOBB: By him.
28 A ¶ CONSTABLE JOSIAH DREW, 30s, blue coat, truncheon at his belt, enters behind him and shuts the door.
29 A He leans against it.
30 D CONSTABLE DREW: Evening, ladies.
31 A ¶ She steps back from the counter.
32 A She raises her chin.
33 A The clerk takes a half step behind the brass machines.
34 D MISS GRAY: Constable, this is a public office.
35 D CONSTABLE DREW: And that is a private telegram, miss.
36 A ¶ He holds out a hand.
37 A She hesitates, then places the paper in it.
38 A He unfolds it and reads.
39 D MR. HOBB: It names three of my colleagues.
40 D LADY CORDELIA: It names the ones who took his money.
41 A ¶ She turns away.
42 A She presses her fingers to her lips.
43 A The clerk watches her, then looks at the constable.
44 A He folds the telegram in half.
45 A He pockets it.
46 D CONSTABLE DREW: There was no telegram.
47 D MISS GRAY: There was not.
48 D MR. HOBB: Constable, I must object--
49 D CONSTABLE DREW: Mr. Hobb, it's raining. Go home.
50 A ¶ He opens the door.
51 A Mr. Hobb stands very still, then jams his bowler on and goes out into the dark.

### SCENE s01925 | INT. DRIVE-THROUGH PET CREMATORIUM - DAY
Detected names (may be incomplete or contain aliases): NORBERT FENWICK, INTERCOM VOICE, CASSIUS OYELARAN
* 1 A ¶ A cheerful pastel lobby with a bell on the counter and a drive-up window.
* 2 A A framed poster reads "FOREVER FRIENDS."
3 A ¶ NORBERT FENWICK, 50s, in a lanyard, sits peacefully with a mug of tea and a crossword.
* 4 A ¶ An INTERCOM crackles on the wall.
5 D INTERCOM VOICE [V.O.]: Hello? I'd like to drop off my hamster.
6 D NORBERT: Of course. Pull up to the window and we'll take care of everything.
7 D INTERCOM VOICE [V.O.]: He's very special.
8 D NORBERT: They always are.
9 D INTERCOM VOICE [V.O.]: He's, um, a big hamster.
10 D NORBERT (into intercom): Sir, we do all sizes.
* 11 A ¶ The door bursts open.
12 A CASSIUS OYELARAN, 40s, a rancher's hat and a wheelbarrow, rolls in a limp, truck-sized capybara draped in a bedsheet.
13 D CASSIUS: I couldn't wait in the line.
14 A ¶ Norbert sets down his tea.
15 A He stares at the wheelbarrow.
16 A He stares at the intercom.
17 D NORBERT: Then who's on the intercom?
* 18 A ¶ The intercom crackles.
19 D INTERCOM VOICE [V.O.]: That would be his wife.

### SCENE s01926 | INT. LAUNDROMAT - 2 A.M.
Detected names (may be incomplete or contain aliases): RUBY ACHTERBERG, DOMI, PELLEGRINO, KWABENA ASARE, SHOSHANA BLUM
* 1 A ¶ A buzzing sign: "OPEN 24 HRS."
* 2 A Rows of dryers tumble in sleepy rhythm.
* 3 A The floor is sticky.
* 4 A A TV above the folding table plays infomercials on mute.
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
* 36 A ¶ Silence.
* 37 A A dryer buzzes and the door pops open.
* 38 A A single red sock rolls out and spins to a stop on the tile.
39 A ¶ Ruby picks it up.
40 A She holds it out to Domi.
41 A He takes it.
42 A His hand is shaking.
43 D DOMI: Sorry, Shosh.
44 D SHOSHANA: Sorry, Kwabena. I did steer.
45 D KWABENA: You steered fine.

### SCENE s01927 | INT. SLEEP SHACK MATTRESS SHOWROOM - DAY
Detected names (may be incomplete or contain aliases): LEN HASHIMOTO, MILTON VOSS, PHYLLIS
* 1 A ¶ A beige warehouse of identical beds under cheap track lights.
* 2 A A banner reads "EVERYTHING MUST GO."
* 3 A Soft elevator music plays from a ceiling speaker.
4 A ¶ LEN HASHIMOTO, 40s, salesman, short-sleeved dress shirt and a tie with a stain.
5 A He's laid out across a king-size mattress, eyes closed, arms folded like a pharaoh.
6 A ¶ MILTON VOSS, 60s, the owner, bald, sweater vest, enters from the back office.
7 A He stops at the foot of the bed.
8 D MILTON: Len.
9 D LEN (eyes closed): I'm testing the product.
10 D MILTON: It's ten in the morning.
11 D LEN: It's a firm that doesn't feel firm. That takes research.
12 A ¶ Milton sighs and sits on the next bed.
13 A He bounces once.
* 14 A A spring groans.
* 15 A ¶ The store phone RINGS.
16 A Milton lifts the cordless handset and holds it away from his ear.
* 17 A A tiny, cheerful voice chirps from the speaker.
18 D PHYLLIS [V.O.]: Is this Sleep Shack? I'd like to return the mattress.
19 D MILTON: Of course, Phyllis. Which one?
20 D PHYLLIS [V.O.]: The one you sold me in 1998.
21 A ¶ Milton covers the phone.
22 A Len opens one eye.
23 D LEN: She's calling again?
24 D MILTON: She says it's lumpy.
25 D LEN: It's a bed, Milt. It's supposed to be lumpy. It's an emotional lump.
26 A ¶ Milton uncovers the phone.
27 D MILTON: Phyllis, we have a lifetime guarantee. Bring it in and we'll look at it.
28 D PHYLLIS [V.O.]: I'm calling from the mattress.
* 29 A ¶ Silence.
30 A Len sits up.
31 A Milton stares at the handset.
32 D LEN: Where's she calling from?
33 D MILTON (muted): She says the mattress.
34 D LEN: Tell her we'll send a truck.
35 D MILTON (into phone): We'll send a truck.
36 D PHYLLIS [V.O.]: Please hurry. It's very soft in here.

### SCENE s01928_0 | EXT. BACKYARD - TENT - NIGHT
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A small green tent lit from inside by a flashlight.
* 2 A Crickets.
* 3 A A sprinkler ticks in the neighbor's yard.

### SCENE s01928_1 | INT. TENT - CONTINUOUS
Detected names (may be incomplete or contain aliases): ROZ ABERNATHY, MILO ABERNATHY, CALVIN
1 A ¶ ROZ ABERNATHY, 38, in a bathrobe over scrubs, sits cross-legged on a sleeping bag.
2 A Across from her, MILO ABERNATHY, 8, holds a flashlight under his chin.
* 3 A A cell phone leans against a thermos between them, on speaker.
4 D MILO: Are you sure he can hear us?
5 D ROZ: He can hear us.
6 D CALVIN [V.O.] (over phone, crackling): I can hear you, buddy. The connection's only a little bit bad.
7 D MILO: Dad, it's cold in the tent.
8 D CALVIN [V.O.]: Is it? Over here it's so hot I could fry an egg on my helmet.
9 D ROZ: Calvin.
10 D CALVIN [V.O.]: Sorry. Lieutenant's rules. No jokes about eggs.
11 D MILO: Dad, when are you coming home?
12 D CALVIN [V.O.]: Three more weeks, kiddo. Maybe less.
13 D MILO: Mom said it was five.
14 D ROZ: I said around five.
15 D CALVIN [V.O.]: Your mom's a lawyer about it. She's always right.
16 D ROZ: I'm a nurse.
17 D CALVIN [V.O.]: That too.
18 D MILO: Dad, do you see the same moon?
19 D CALVIN [V.O.]: I think so. Is it the one with the face?
20 D MILO: It's the one with the face.
21 D CALVIN [V.O.]: Then I see it. I'm looking right at it.
22 D ROZ: Milo, tell Dad what you did at school.
23 D MILO: I got a sticker for reading out loud.
24 D CALVIN [V.O.]: What book?
25 D MILO: The one about the bear who can't sleep.
26 D CALVIN [V.O.]: I love that one. Did you do the bear voice?
27 D MILO (low growl): Grrr, I can't sleep.
28 D CALVIN [V.O.]: That's perfect. That's the best bear I ever heard.
29 D ROZ: It's a quarter to ten, baby.
30 D MILO: Five more minutes.
31 D CALVIN [V.O.]: Listen to your mom.
32 D MILO: Okay. Goodnight, Dad.
33 D CALVIN [V.O.]: Goodnight, Milo. Tell the moon I said hello.
34 D MILO: I will.
35 D ROZ: Goodnight, Calvin.
36 D CALVIN [V.O.]: Love you both.
37 D ROZ: Love you.
38 D MILO: Love you.
* 39 A ¶ The line clicks.
* 40 A The flashlight flickers and goes out.

### SCENE s01929 | INT. TAXIDERMY CONVENTION - HOTEL BALLROOM - DAY
Detected names (may be incomplete or contain aliases): PERCIVAL TANG, BIRGITTA LOWE, FRANCO BAPTISTE, HESTER KIMURA, LUDO KARLSSON, TALL WOMAN, ZOFIA
* 1 A ¶ Rows of folding tables display mounted pheasants, a wild boar in a bow tie, and one very surprised-looking badger.
* 2 A A banner overhead reads "STUFFED & PROUD."
3 A ¶ PERCIVAL TANG, 50s, tweed jacket, nametag crooked, stands behind a table with a glass case of owls.
4 A Beside him, BIRGITTA LOWE, 40s, in a lab coat, polishes a fox's eye with a handkerchief.
5 A FRANCO BAPTISTE, 30s, goatee and leather apron, argues with HESTER KIMURA, 60s, a judge with a clipboard, about a moose.
6 A LUDO KARLSSON, 20s, a nervous intern, stacks brochures into leaning towers.
7 A ¶ A TALL WOMAN, 40s, in a black raincoat and sunglasses, stalks down the aisle and stops at the owl case.
8 A She leans in until her nose nearly touches the glass.
9 D TALL WOMAN: Are these real?
10 D PERCIVAL: Madam, every feather is authentic.
11 D TALL WOMAN: That's not what I asked.
12 A ¶ Birgitta and Percival exchange a look.
13 A Hester stops mid-sentence.
14 A Franco keeps arguing with her about the moose.
15 A Ludo knocks over his tower, and brochures scatter.
16 D HESTER: Franco, the antlers are glued on.
17 D FRANCO: They are mounted, not glued.
18 D TALL WOMAN: I'm looking for a stolen owl.
19 D PERCIVAL: We have forty.
20 D TALL WOMAN: This one's white, with a notch in the left wing, named Gerald.
21 A ¶ Birgitta drops her handkerchief.
22 A Percival coughs.
23 A Ludo freezes with a brochure halfway to his mouth.
24 A Franco finally turns from the moose, and Hester follows his gaze to the woman.
25 D BIRGITTA: Gerald?
26 D TALL WOMAN: My late husband's owl.
27 D HESTER: He's taxidermied?
28 D TALL WOMAN: Both of them are.
29 A ¶ Ludo makes a noise like a kettle.
30 A Everyone stares at him.
31 D LUDO: I sold Gerald yesterday. On the internet.
32 D TALL WOMAN: To whom?
33 D LUDO: A man named Dennis.
34 A ¶ The woman removes her sunglasses.
35 A Her eyes are bloodshot and furious.
36 D ZOFIA: I'm Zofia Wrobel. And I'd like to speak to Dennis.
37 D PERCIVAL: Ms. Wrobel, I assure you--
38 D ZOFIA: Percival, I know that you know Dennis.
39 A ¶ Percival lowers his head.
40 A Franco shoves the moose out of the way.
41 A Birgitta quietly unlocks the owl case.
* 42 A Inside, a single white owl with a notched wing glares out at the room.
43 D BIRGITTA: Oh no.
44 D HESTER (writing): Disqualified.

### SCENE s01930 | INT. SPACE ELEVATOR COUNTERWEIGHT STATION - CONTINUOUS
Detected names (may be incomplete or contain aliases): CAPTAIN IRENE VASQUEZ-LU, BODE ADEYEMI, SANJAY KUMARESAN, TAVITA FONOTI
* 1 A ¶ A cylindrical chamber lined with frost-furred cable bundles.
* 2 A Emergency strips pulse amber.
* 3 A Through a cracked viewport, the curve of the Earth drops away, blue and silent.
4 A ¶ CAPTAIN IRENE VASQUEZ-LU, 50s, close-cropped silver hair, hangs in a harness over a open maintenance panel.
5 A BODE ADEYEMI, 30s, a stocky engineer, floats beside her with a spanner.
6 A DR. SANJAY KUMARESAN, 40s, thin, wire glasses, clings to a rail and stares at a handheld readout.
7 A TAVITA FONOTI, 22, a rookie in an oversized pressure suit, wedges himself into a corner.
8 D IRENE: Status.
9 D BODE: Tether strain at ninety-four percent. We're twelve minutes from shear.
10 D IRENE: Doctor?
11 D SANJAY (to the readout): No. No, that's wrong. That cannot be wrong.
12 D IRENE: Doctor Kumaresan.
13 D SANJAY: The oscillation isn't mechanical. It's rhythmic. It's... answering us.
14 D TAVITA: Answering what?
15 D SANJAY: Our own vibrations. Something on the cable is repeating them back, delayed.
16 A ¶ Irene unclips her harness, kicks across the chamber, and grips the rail beside Sanjay.
17 A She reads the numbers over his shoulder.
18 A Bode drops the spanner, which drifts away unnoticed, and swims to the viewport.
19 D BODE: That's impossible. There's no one out there.
20 D IRENE: Everybody, quiet. Listen.
21 A ¶ They go still.
* 22 A The station groans.
* 23 A Under it, faint and regular, three taps.
* 24 A A pause.
* 25 A Three taps.
26 D TAVITA: It's coming from below the panel.
27 D BODE (low): It's a cable creak.
28 D IRENE: It's not a creak, Bode.
29 D SANJAY (muttering): Hypothesis one, resonance. Hypothesis two, a micrometeorite impact pattern. Hypothesis three...
30 A ¶ He trails off.
31 A He does not say hypothesis three.
32 D TAVITA: Captain, permission to open the panel?
33 D IRENE: Negative. Nobody touches it. Bode, can we cut the tether remotely?
34 D BODE: We cut it, the whole counterweight goes. Ten thousand tons falls to the ground.
35 D IRENE: Then we don't cut it.
36 D BODE: We don't have a lot of other options.
* 37 A ¶ Three more taps.
* 38 A Louder.
* 39 A The panel rattles in its frame.
40 D TAVITA: It's trying to get in.
41 D SANJAY: It isn't trying to get in. It's trying to get our attention.
42 D IRENE: Then it has it.
43 A ¶ She pushes off the rail, drifts to the panel, and presses her palm flat against the metal.
* 44 A The taps stop.
* 45 A A long silence.
46 A Bode holds his breath.
* 47 A Sanjay's readout flashes red and then goes blank.
48 D IRENE [CONT'D] (whispering to herself): Come on. Talk to me.
* 49 A ¶ From inside the panel, a single tap.
* 50 A Then another, softer, as if from a hand pressing back.
51 D BODE: Captain, don't.
52 D IRENE: Everyone, strap in. We're opening it.
53 D TAVITA: With respect, Captain, no.
54 D IRENE: Strap in, Tavita.
55 A ¶ Tavita obeys, fingers fumbling at the clasps.
56 A Bode grabs the spanner from the air.
57 A Sanjay seals his visor.
58 D SANJAY (to himself): Please be a cable. Please be a cable.
59 A ¶ Irene fits the spanner to the first bolt.
* 60 A It turns with a groan.
* 61 A The second bolt turns.
* 62 A The panel peels back a hand's width.
* 63 A ¶ A cold blue light spills through the gap.
64 A All four faces turn pale in it.
65 D TAVITA: What is that?
66 D IRENE: Hold your positions.
67 D BODE: I'm holding.
68 D SANJAY: Captain, the readout's back. It says we have forty minutes.
69 D IRENE: It said twelve a minute ago.
70 D SANJAY: It says forty now. Something changed the number.
* 71 A ¶ The blue light brightens.
* 72 A The tapping resumes, slow and calm, like a heartbeat.
73 D IRENE: Then we don't have twelve minutes. We have as long as it wants.

### SCENE s01931 | INT. AUCTION HOUSE VIEWING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NADIA FAIRWEATHER, GRAHAM OSTRANDER, LUCINDA PASCOE, EMEKA ROWE
* 1 A ¶ Velvet ropes.
* 2 A Glass cases of antique clocks, each ticking out of step.
* 3 A A single chandelier left on.
4 A ¶ NADIA FAIRWEATHER, 40s, in a grey cashmere coat, circles a case holding a mantel clock.
5 A GRAHAM OSTRANDER, 50s, the auctioneer, stands at the door with a ring of keys.
6 A LUCINDA PASCOE, 30s, in a catalog-girl blazer, arranges lot cards that are already straight.
7 A EMEKA ROWE, 50s, a security guard, stands by the fire exit with his arms folded.
8 D NADIA: Lot forty-one has a new ticket.
9 D GRAHAM: We reprinted them.
10 D NADIA: Reprinted.
11 A ¶ Graham jingles his keys.
12 A Lucinda straightens a card that doesn't need it.
13 A Emeka looks at the ceiling.
14 D NADIA [CONT'D] (to the room): Does anyone remember what the old ticket said?
* 15 A ¶ Nobody answers.
* 16 A A clock chimes the quarter hour.
* 17 A Another follows, late.
18 D LUCINDA: It said, um, "attributed to."
19 D NADIA: And the new one?
20 D LUCINDA: "Signed."
21 A ¶ Nadia opens her handbag.
22 A She takes out a small brass loupe and bends over the case.
23 A She studies the dial for a long moment.
24 A When she straightens, her face gives away nothing.
25 D NADIA (low, to herself): Twelve years.
26 D GRAHAM: Nadia, it's late. We can discuss it in the morning.
27 D NADIA: I'd rather discuss it now, with Emeka present.
28 A ¶ Emeka unfolds his arms.
29 A Graham's keys stop jingling.
30 D EMEKA: Ma'am.
31 D NADIA: Emeka, what time did the courier leave?
32 D EMEKA: Six forty.
33 D NADIA: And who signed him out?
34 A ¶ Lucinda lets a lot card fall.
35 A She doesn't pick it up.
36 D GRAHAM: That's enough.
37 D NADIA: Is it?
38 A ¶ She slips the loupe back into the handbag and snaps it shut.
* 39 A The sound carries.
40 A She walks the length of the room, her heels clicking in time with no clock, and stops at the door beside Graham.
41 D NADIA [CONT'D]: I'll be bidding on forty-one tomorrow. I suggest the ticket stay as it is.
42 D GRAHAM: Of course.
43 D NADIA: Good night, everyone.
44 A ¶ She goes out.
* 45 A The door closes with a soft click.
46 A For a long while, no one moves.
47 D LUCINDA (barely audible): She knows.
48 D EMEKA: Keep your voice down.
49 D GRAHAM (to himself): Twelve years. Twelve years.

### SCENE s01932 | INT. CANAL LOCK-KEEPER'S COTTAGE - NIGHT
Detected names (may be incomplete or contain aliases): AGNES THORNBURY, MAN, THE STRANGER, JULIAN
* 1 A ¶ 1841.
* 2 A A single room: iron stove, rough table, a rain-black window.
* 3 A The canal sloshes against the lock gates outside.
4 A ¶ AGNES THORNBURY, 40s, widow, plain brown dress, sits at the table peeling a potato.
* 5 A A hard knock at the door.
6 A She sets down the knife, crosses the room, and opens it a crack.
7 A ¶ A MAN, 30s, drenched, hatless, bleeding from one temple, stands in the rain.
8 A He holds a canvas satchel against his chest like a child.
9 D THE STRANGER: Forgive me. My boat has sunk below your lock.
10 D AGNES: Then you'll want the bank, not my door.
11 D THE STRANGER: I'll want a fire, if you've one to spare.
12 A ¶ She considers him.
13 A She steps back.
14 A He enters, dripping, and kneels at the stove.
15 A She locks the door behind him and slides the bolt.
16 A He notices.
17 A He says nothing.
18 D AGNES: Your head.
19 D THE STRANGER: A gate struck me. It's nothing.
20 D AGNES: It is something. Sit.
21 A ¶ He sits.
22 A She takes a rag from a peg, wets it from the kettle, and presses it against his temple.
23 A He flinches, then goes still.
24 A His eyes fix on the satchel in his lap.
25 A Hers do the same.
26 D THE STRANGER: You're kind.
27 D AGNES: I'm careful. There's a difference.
28 D THE STRANGER: Which are you being now?
29 D AGNES: Both.
30 A ¶ He laughs, once, and winces.
31 A She steps back, folds the rag, and crosses to the shelf.
32 A From behind a tin of tea she takes a long hunting knife and lays it on the table between them, blade toward him.
33 D AGNES [CONT'D]: My husband kept that for poachers.
34 D THE STRANGER: Then I am glad not to be one.
35 D AGNES: What's in the satchel?
36 D THE STRANGER: Letters.
37 D AGNES: Whose?
38 D THE STRANGER: My brother's. He drowned in this canal in March. I came to see where.
39 D AGNES: The Haverty boy?
40 D THE STRANGER: You knew him.
41 D AGNES: I pulled him out. I buried him myself.
42 A ¶ The Stranger rises so fast the chair falls over.
43 A Agnes takes up the knife in one smooth motion.
44 A They face each other across the table, breathing hard.
45 D THE STRANGER: Where?
46 D AGNES: Behind the lock, under the willow.
47 D THE STRANGER: Take me there.
48 D AGNES: In this weather?
49 D THE STRANGER: Now.
50 A ¶ She lowers the knife.
51 A Her shoulders drop.
52 A She takes a lantern from the wall and lights it with a taper from the stove.
53 A The Stranger picks up the fallen chair, sets it right, and stands waiting, hat in hand though he has no hat.
54 D AGNES [CONT'D]: What do I call you?
55 D JULIAN: Julian Haverty.
56 D AGNES: Julian. I am Agnes.
57 D JULIAN: I know. He wrote of you.
58 D AGNES: He wrote of me?
59 D JULIAN: Every letter. He loved you.
60 A ¶ Agnes sets down the lantern.
61 A Her hand covers her mouth.
62 A For the first time she looks at the satchel not with suspicion but with grief.
63 D AGNES: He never said.
64 D JULIAN: He meant to.
65 A ¶ She nods.
66 A She picks the lantern up again.
67 A They go out together into the rain.
* 68 A The door swings in the wind.

### SCENE s01933_0 | EXT. FROZEN LAKE - ICE-FISHING HUT - DAY
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A tin-roofed shack no bigger than a garden shed squats on a plain of white ice.
* 2 A Smoke curls from a stovepipe.
* 3 A Beyond it, the lake runs out to a horizon of pale, quiet sky.

### SCENE s01933_1 | INT. ICE-FISHING HUT - CONTINUOUS
Detected names (may be incomplete or contain aliases): NANA PHILOMENA DUBOIS, ARJUN CHAUDHRY, TEDDY LINDGREN, UNCLE SIONE TAUFA, MEI-LING DUBOIS-CHAUDHRY, BEATRIZ
1 A ¶ Six people crowd a space meant for two.
* 2 A A stove glows orange in one corner.
* 3 A Four holes bored in the plank floor reveal black water below.
4 A ¶ NANA PHILOMENA DUBOIS, 70s, sits in a lawn chair in a quilted parka, a fishing line wrapped around her gloved finger like a ring.
5 A Beside her, ARJUN CHAUDHRY, 40s, her son-in-law, tends the stove with the grim pride of a man who has built his first fire.
6 A TEDDY LINDGREN, 9, kneels on an overturned bucket, nose to the water.
7 A UNCLE SIONE TAUFA, 50s, enormous in a down jacket, wedges himself on a cooler, fiddling with a transistor radio.
8 A MEI-LING DUBOIS-CHAUDHRY, 35, hands out thermoses.
9 A And BEATRIZ, 5, lies on her stomach on the plank floor, one mitten dipping toward a hole.
10 D MEI-LING: Beatriz, away from the water.
11 D BEATRIZ: It's looking at me.
12 D NANA PHILOMENA: That is a fish, child. They look at everyone.
13 D UNCLE SIONE: Nana, don't scare her. It could be a very friendly fish.
14 D TEDDY: It's not a fish. It's a muskrat.
15 D ARJUN (from the stove): It can't be a muskrat. They don't live under ice.
16 D TEDDY: This one does.
* 17 A ¶ A tug on Nana's line.
18 A She sits bolt upright.
19 A Everyone stills.
* 20 A The line twitches again.
21 D NANA PHILOMENA: Hush, all of you. Hush.
22 D ARJUN: Philomena, I think you've got something.
23 D MEI-LING: Mama, pull!
24 D UNCLE SIONE: Pull, Nana, pull!
25 A ¶ Nana hauls on the line with both hands.
* 26 A A silver fish the length of her forearm bursts through the hole, flops across the plank, and lands in Beatriz's lap.
27 A Beatriz shrieks.
28 A Teddy dives for it.
29 A Mei-Ling grabs Beatriz.
30 A Arjun knocks over the bucket.
31 A Uncle Sione catches the radio before it hits the stove.
32 D BEATRIZ: It's alive!
33 D TEDDY: It's a pike!
34 D NANA PHILOMENA: It is dinner.
* 35 A ¶ The fish flaps.
36 A Teddy pins it with both hands, grinning.
37 A Arjun kneels beside him, awkward, and takes the pliers from his belt.
38 D ARJUN: Hold still. Hold still, little guy.
39 D MEI-LING: Do you know how to do this?
40 D ARJUN: I watched a video.
41 D UNCLE SIONE: Give me the pliers, brother.
42 A ¶ Arjun surrenders the pliers.
43 A Uncle Sione works the hook free in one practiced twist, then lifts the fish high in the cramped air for everyone to see.
44 A They cheer.
* 45 A The little hut rings with it.

### SCENE s01934 | INT. BELL TOWER - CHURCH - DAY
Detected names (may be incomplete or contain aliases): SERGEANT ILARIO COSTA, WOUNDED SOLDIER, TADEUSZ
* 1 A ¶ 1944.
* 2 A Dust and pigeon droppings.
* 3 A A cracked bronze bell hangs dead overhead.
* 4 A Through an arched opening, a ruined village smokes.
5 A ¶ SERGEANT ILARIO COSTA, 30s, unshaven, rifle across his lap, sits against the wall eating a tin of sardines.
* 6 A Peaceful.
* 7 A Birds sing outside.
* 8 A ¶ A scrape on the stairs.
9 A Costa doesn't look up.
10 A He eases the safety off.
11 A ¶ A WOUNDED SOLDIER, 19, ragged, one arm in a bloodstained sling, climbs into view.
12 A He freezes, hands raised.
13 D WOUNDED SOLDIER: Don't shoot. Please. I'm lost.
14 D COSTA: Which side?
15 D WOUNDED SOLDIER: Yours. I think.
16 D COSTA: You think.
17 A ¶ He lowers the rifle an inch.
18 A The soldier sags against the stair rail, relieved.
19 A Costa offers him the sardine tin.
20 A The soldier takes it, eats with trembling fingers.
21 D COSTA [CONT'D]: Name?
22 D TADEUSZ: Tadeusz Wolak. Polish Second Corps.
23 D COSTA: Where's your unit, Tadeusz?
24 D TADEUSZ (still chewing): Below. Looking for you.
25 A ¶ Costa's face goes flat.
* 26 A Far down the stairwell, boots.
* 27 A Many.
28 D TADEUSZ [CONT'D]: I'm sorry, Sergeant. They said they'd spare my brother.

### SCENE s01935 | EXT. TOLL BRIDGE OVER A MISTY GORGE - DAWN
Detected names (may be incomplete or contain aliases): WYNDRA, SIR OSRIC, THISBE, GRIMBOLD, MARROW
* 1 A ¶ Ropes and rotted planks span a chasm.
* 2 A Mist swallows the far end.
* 3 A A lantern hangs from a crooked post.
4 A ¶ WYNDRA, a sorceress in grey robes, stands at the center of the bridge.
5 A Beside her, SIR OSRIC, an old knight in dented armor, leans on his sword.
6 A THISBE, a young thief with a quick grin, crouches at the rail, picking the lock of a small chest.
7 A GRIMBOLD, a squat troll in a toll collector's cap, blocks the path ahead.
8 A MARROW, a wolf the size of a pony, circles behind him.
9 D GRIMBOLD: Three coins each.
10 A ¶ She reaches into her robe.
11 A He draws his sword a hand's breadth.
12 A She smiles and produces a single silver coin, which she tosses in a high arc over the gorge.
13 A The troll watches it fall.
14 A Marrow lunges.
15 A ¶ Thisbe vaults the rail and kicks the wolf in the ribs.
16 A He yelps.
17 A The troll swings his club and the old knight blocks it with his shield.
* 18 A The planks groan.
19 D OSRIC: Enough! We have no quarrel!
20 D WYNDRA: Put down your weapons.
21 A ¶ She lifts one hand.
* 22 A The mist thickens.
* 23 A The club slows in midair.
24 A Marrow whimpers and sits.
25 A The troll lowers his cap over his eyes.
26 D GRIMBOLD (grumbling): Two coins, then.

### SCENE s01936 | INT. GRAIN SILO - NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN TSAI, KATYA BRANDVOLD, RUFUS DELACOURT, SILAS OKOYE
* 1 A ¶ Dark.
* 2 A A circular concrete shaft.
* 3 A A single flashlight beam jitters over rusted ladders.
4 A ¶ IMOGEN TSAI, 20s, clutches the flashlight.
5 A KATYA BRANDVOLD, 20s, presses against her back.
6 A RUFUS DELACOURT, 30s, kneels at a hatch.
7 A SILAS OKOYE, 40s, leans on his knees and wheezes.
8 D IMOGEN: Did you hear that?
9 D KATYA: Don't say that.
10 D RUFUS: It's the wind.
11 D SILAS: There is no wind in a silo.
12 D KATYA: Then what is it?
13 D IMOGEN: Quiet.
* 14 A ¶ Something drags above them.
* 15 A A slow scrape on concrete.
16 D RUFUS: It's on the ladder.
17 D SILAS: It's on our ladder.
18 D KATYA: Imogen, give me the light.
19 D IMOGEN: No.
20 D KATYA: Give me the light, or I swear to God...
21 D IMOGEN: Katya, stop. If you move, it knows where we are.
22 D SILAS: It already knows.
23 D RUFUS: Then why hasn't it come down?
24 D KATYA: Because it's waiting for one of us to scream.
25 D IMOGEN: I'm not going to scream.
* 26 A ¶ The flashlight flickers out.
* 27 A Somewhere above, a long, patient breath.

### SCENE s01937 | INT. HOSPITAL MRI SUITE - NIGHT
Detected names (may be incomplete or contain aliases): THEODORE ABIODUN, BERNADETTE KOWALSKI
* 1 A ¶ A hum like a held note.
* 2 A The scanner sits dark.
* 3 A A patient's gurney is parked beside it, empty.
* 4 A Rain taps a high window.
5 A ¶ DR. THEODORE ABIODUN, 50s, rubs his eyes at the control desk.
6 A BERNADETTE KOWALSKI, 70s, in a hospital gown and slippers, sits on the edge of a plastic chair.
7 A He notices her only when he turns.
8 A ¶ He rises.
9 A She does not.
10 D THEODORE: Mrs. Kowalski. You're supposed to be upstairs.
11 D BERNADETTE: I couldn't sleep.
12 D THEODORE: You could have rung for a nurse.
13 D BERNADETTE: They told me the scan was clean.
14 D THEODORE: It is.
15 D BERNADETTE: Then why are you here at one in the morning?
16 D THEODORE: I like the quiet.
17 D BERNADETTE: Doctors don't like quiet. They like numbers.
18 A ¶ He pulls a stool close and sits.
19 A Neither speaks for a moment.
20 D THEODORE: Your daughter called.
21 D BERNADETTE: She calls every day.
22 D THEODORE: She asked me to check you were comfortable.
23 D BERNADETTE: She asked you to lie to me.
24 D THEODORE: Mrs. Kowalski.
25 D BERNADETTE: Dr. Abiodun. Do I look like a woman who needs to be handled?
26 A ¶ He considers this.
27 A He lifts a folder from the desk and sets it in her lap.
28 D THEODORE: Fourteen months. Perhaps sixteen. I should have said so this afternoon.
29 D BERNADETTE: You were kind enough not to.
30 D THEODORE: I was a coward.
31 D BERNADETTE: You were both. It's allowed.
32 A ¶ She opens the folder, glances at the images, and closes it.
33 A Her hands rest on top of it, perfectly still.
34 D BERNADETTE [CONT'D]: My husband went in eleven weeks. Fourteen months is a luxury.
35 D THEODORE: I'm sorry.
36 D BERNADETTE: Don't be. Sit with me a while.
37 D THEODORE: I will.
38 D BERNADETTE: Tell me about the quiet.
39 D THEODORE: It's mostly the machine.
40 D BERNADETTE: Then listen to it with me.
* 41 A ¶ The hum swells softly.
42 A They sit side by side, two figures in the blue half-light, as the rain eases.

### SCENE s01938 | EXT. LIFE RAFT - OPEN OCEAN - DAY
Detected names (may be incomplete or contain aliases): ORLA FITZGIBBON, JASPER TOLENTINO, PETRA HALVORSEN
* 1 A ¶ A bright, flat sea.
* 2 A A canopy of orange rubber snaps in the breeze.
* 3 A Three people sit around a pile of ration tins.
4 A ¶ ORLA FITZGIBBON, 30s, sunburned, trims her fingernails with a pocketknife.
5 A JASPER TOLENTINO, 20s, lies back with a hat over his face.
6 A PETRA HALVORSEN, 40s, tends a small fishing line looped over the side.
7 D ORLA: Jasper, you awake?
8 D JASPER (under the hat): No.
9 D ORLA: Petra says we've got water for nine days.
10 D PETRA: Ten, if Jasper stops sweating.
11 D JASPER: I'm not sweating. The sun's sweating.
* 12 A ¶ The sea is calm.
13 A The three of them breathe in the heat.
14 A Petra checks the line.
15 A Orla looks at the horizon and sighs, content.
16 D ORLA: You know, this isn't so bad.
17 D PETRA: I was just thinking the same.
18 D JASPER (sitting up): Me too, honestly.
19 D ORLA: It's almost nice.
20 D PETRA: It's almost nice.
21 A ¶ Petra pulls the line.
* 22 A Something heavy answers.
23 A She grins and heaves.
24 A Orla grabs her waist.
25 A Jasper scrambles to help.
* 26 A A fin breaks the surface.
* 27 A A big one.
* 28 A Then another.
29 D JASPER: Petra, let go.
30 D PETRA: It's a fish!
31 D ORLA: Petra, it's not a fish!
* 32 A ¶ The raft tilts.
* 33 A A dark shape rolls under them, rubbing against the hull.
34 A Orla's grin dies.
35 D PETRA (whispering): Jasper, get the oar.
36 D JASPER: Petra, I'm getting it. Orla, hold the line.
37 D ORLA: I'm holding. I'm holding!
* 38 A ¶ The shape surfaces beside the raft.
39 A A shark's flat, indifferent eye regards them.

### SCENE s01939 | INT. ROLLER RINK - AFTER HOURS
Detected names (may be incomplete or contain aliases): CLEO MARCHAND, BRAM NAKAMURA-COLE, DOT WINTERBOURNE
* 1 A ¶ Dim.
* 2 A A mirror ball turns slowly, throwing pale spots across an empty floor.
* 3 A A jukebox hums at low volume.
4 A ¶ CLEO MARCHAND, 20s, in a staff polo and skates, mops the rink under a single working light.
5 A BRAM NAKAMURA-COLE, 30s, the night manager, counts the register at the snack counter.
6 A DOT WINTERBOURNE, 60s, the cleaner, sweeps popcorn from the carpet by the lockers.
7 D CLEO (to Bram): You hear that?
8 D BRAM: Hear what?
9 D CLEO: Skates. Out on the floor.
10 D BRAM: That's the mop.
11 D CLEO: The mop doesn't have wheels.
12 A ¶ Bram looks up.
13 A Dot stops sweeping.
* 14 A The mirror ball keeps turning.
15 D DOT (to the room): Anybody else still in here, we're closed.
* 16 A ¶ No answer.
* 17 A The jukebox clicks.
* 18 A A song begins that nobody chose, a slow waltz.
19 D BRAM: Dot, did you play that?
20 D DOT: Not me.
21 D CLEO (muttering): Okay. Okay, okay.
22 A ¶ She backs toward the counter, mop held in front of her like a spear.
* 23 A Out on the floor, in the circling light, a single set of wheels rolls by with no one on it.
* 24 A Around the rink.
* 25 A Once.
* 26 A Twice.
27 D BRAM: Nobody panic.
28 D CLEO: I'm not panicking.
29 A ¶ Dot drops the broom.
* 30 A The skates stop in the middle of the floor.
* 31 A They turn, slowly, to face the three of them.
32 D DOT: Go. Go!
33 A ¶ The three scatter.
34 A Cleo vaults the counter.
35 A Bram drops the cash drawer, coins ringing across the tile.
36 A Dot sprints for the lockers, slams the door, and holds it shut.
* 37 A The skates roll toward the counter.
* 38 A The waltz swells.
39 D CLEO (whispering to herself): Please be a prank. Please be a prank.

### SCENE s01940 | INT. DUCKPIN BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): COACH RAY SALAZAR, IMANI PETTIGREW, DMITRI AKSENOV
* 1 A ¶ A dim neighborhood lane.
* 2 A A faded banner reads "STATE FINALS."
* 3 A Scoreboards flicker.
* 4 A A cigarette machine hums beside the shoe counter.
5 A ¶ COACH RAY SALAZAR, 60s, tracksuit, a whistle around his neck, paces behind lane six.
6 A IMANI PETTIGREW, 17, ponytail, chalk on her hands, holds a small black ball.
7 A DMITRI AKSENOV, 18, her anchor, sits on the ball return chewing his thumbnail.
8 D RAY: Pettigrew. Last frame.
9 D IMANI: I know, Coach.
10 D DMITRI: She knows.
11 D RAY: I'm talking to her.
12 D DMITRI: She's right here, Coach. You can talk to both of us.
13 D RAY: Imani, you need a spare.
14 D IMANI: Ray, I need to breathe first.
15 D RAY: Breathe fast.
16 D DMITRI: Don't rush her.
17 D RAY: Dmitri, sit down.
18 D DMITRI: I am sitting down.
19 A ¶ Imani steps to the line.
* 20 A The pin deck waits.
21 A She raises the ball to her chin, closes her eyes, and exhales.
22 D RAY: Eyes open!
23 D IMANI: Coach!
24 D DMITRI: Ray, let her--
25 A ¶ The ball leaves her hand.
* 26 A It rolls straight, slow, and hits the head pin.
* 27 A Seven pins fall.
* 28 A Three stand in a crooked row.
* 29 A ¶ Silence.
* 30 A The pinsetter whirs.
31 A Ray's whistle drops from his mouth.
32 D DMITRI [CONT'D]: Seven. You left three.
33 D RAY: She left three.
34 D IMANI (quietly): I have one more ball.
35 D RAY: You do. And you have me.
36 A ¶ She turns.
37 A Ray places both hands on her shoulders.
38 A Dmitri slides off the ball return and joins them.
39 D DMITRI: Imani, same shot. Corner pin first.
40 D RAY: Don't think. Roll.
41 D IMANI: Both of you stop talking.
42 A ¶ They stop.
43 A She picks up the ball, steps to the line, and releases.
* 44 A The ball curves, kisses the left pin, which tips the middle pin, which topples the right.
* 45 A Ten down.
* 46 A ¶ The alley erupts.
47 A Ray throws his whistle in the air.
48 A Dmitri lifts Imani off the floor.

### SCENE s01941 | INT. SALEM MEETINGHOUSE - EVENING
Detected names (may be incomplete or contain aliases): GOODWIFE TABITHA CROMPTON, EZEKIEL PRUITT
* 1 A ¶ 1692.
* 2 A Bare pine benches.
* 3 A A pulpit.
* 4 A A candle gutters beside a Bible.
5 A ¶ GOODWIFE TABITHA CROMPTON, 50s, plain gray dress and white cap, kneels at the front pew with her eyes closed.
* 6 A A door creaks.
7 A She does not turn.
8 A ¶ EZEKIEL PRUITT, 30s, a young magistrate in a black coat, steps inside and hangs his hat on a peg.
9 D EZEKIEL: Goodwife Crompton.
10 D TABITHA: Magistrate Pruitt.
11 D EZEKIEL: They said you'd be here.
12 D TABITHA: Where else would I be?
13 D EZEKIEL: At home. With the door barred.
14 A ¶ She opens her eyes.
15 A She looks at him, tired.
16 D TABITHA: It's over, then.
17 D EZEKIEL: The governor has pardoned the rest. Your name was the last he signed.
18 A ¶ She bows her head.
19 A He crosses the floor and sits at the end of the bench, a respectful distance away.
* 20 A The candle gutters and steadies.

### SCENE s01942 | INT. RURAL RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): LORENZO BIANCHINI, FAYE OSTROWSKI, IBRAHIM SESAY, GRETA HALLSTROM, MARCELINE
* 1 A ¶ A tin-roofed shack by a cornfield.
* 2 A Foam-padded walls.
* 3 A A glowing "ON AIR" sign.
* 4 A A single microphone on a boom.
5 A ¶ LORENZO BIANCHINI, 50s, in a bathrobe and headphones, leans back in a swivel chair and sips coffee.
6 A Across the booth, FAYE OSTROWSKI, 20s, the board operator, scrolls through requests on a laptop.
7 A IBRAHIM SESAY, 40s, a truck driver, sits on a stool by the door, waiting out the rain.
8 A GRETA HALLSTROM, 60s, the station owner, knits in the corner.
9 D LORENZO (into mic): It's two in the morning, and you're listening to Night Owl Radio. The rain is steady, the corn is quiet, and the phone lines are open.
10 D FAYE (whispering): You're good. Five more minutes and we can close.
11 D IBRAHIM: Can I stay until the rain stops?
12 D GRETA (not looking up): You can stay until the pot runs out.
* 13 A ¶ The phone line rings.
14 A Faye flips a switch.
15 D FAYE: Night Owl, you're on the air.
16 D MARCELINE [V.O.] (over speaker, small, calm): Hello, Lorenzo. It's Marceline.
17 A ¶ Lorenzo's cup stops halfway to his mouth.
18 A Greta's knitting needles go still.
19 D LORENZO: Marceline. Hello.
20 D MARCELINE [V.O.]: I wanted to say thank you for the song last week.
21 D LORENZO: You're welcome.
22 D MARCELINE [V.O.]: I'm calling from the field behind the station. The corn is very tall tonight.
23 A ¶ Faye looks at the window.
24 A Ibrahim stands.
* 25 A Beyond the glass, rain and darkness and the black wall of corn.
26 D FAYE (to Lorenzo, low): That line is internal. There's no one out there.
27 D MARCELINE [V.O.]: Lorenzo, would you play it again?
28 A ¶ Lorenzo sets down the cup.
29 A He looks at Greta.
30 A She nods, ashen.
31 D LORENZO: Of course, Marceline. Anything for you.
32 A ¶ He cues a record.
* 33 A The needle drops.
* 34 A Outside, something taps gently on the glass.

### SCENE s01943 | INT. LUNAR LAVA TUBE - GREENHOUSE - ARTIFICIAL DAY
Detected names (may be incomplete or contain aliases): PALOMA REYNOSO, THE VISITOR, ORIN
* 1 A ¶ A cathedral of black basalt, strung with grow-lamps.
* 2 A Rows of tomatoes and soybeans climb trellises under a violet glow.
* 3 A Condensation drips from a vaulted ceiling.
4 A ¶ DR. PALOMA REYNOSO, 40s, in a canvas apron over a thermal suit, prunes a tomato vine with delicate care.
* 5 A Behind her, an airlock hisses.
6 A ¶ A figure in a worn pressure suit steps through, visor fogged.
7 A It stops three paces inside and stands very still, as if afraid to wake the plants.
8 D PALOMA: You're not on the roster.
9 D THE VISITOR: No. I came on the supply drone.
10 D PALOMA: The drone carries cargo.
11 D THE VISITOR: I was cargo.
12 A ¶ Paloma sets down her shears.
13 A She approaches, slowly, until she can see through the visor to the face behind it: gaunt, unshaven, eyes red.
14 D PALOMA: Take off your helmet.
15 D THE VISITOR: I'd rather not.
16 D PALOMA: Then you can't stay.
17 A ¶ He lifts his hands to the seals.
* 18 A The helmet rotates with a hiss.
19 A He draws a breath of the humid air and closes his eyes.
* 20 A The scent of tomatoes fills the cave.
21 D PALOMA [CONT'D]: Who are you?
22 D THE VISITOR: Orin Feld. Systems tech, Tycho Base. I left four years ago.
23 A ¶ Paloma staggers back against a trellis.
* 24 A The tomatoes sway.
25 D PALOMA: Orin Feld died on the surface. We held a service.
26 D ORIN: I know. I was there. In the back.
27 D PALOMA: You were dead.
28 D ORIN: For a while. It was easier.
29 A ¶ Paloma slaps him.
* 30 A The crack echoes off the basalt.
31 A Orin does not lift a hand.
32 A He just stands, helmet under one arm, cheek reddening.
33 D PALOMA: Four years. Four years, Orin.
34 D ORIN: Paloma--
35 D PALOMA: Dr. Reynoso, to you.
36 A ¶ She turns away, shoulders shaking, and presses her palm to a vine.
* 37 A A tomato drops into her hand.
38 A She stares at it.
39 D ORIN: It's the first one, isn't it?
40 D PALOMA: The first red one. Yes.
41 D ORIN: Eat it.
42 A ¶ She does not move.
43 A He steps forward, takes it gently from her fingers, and bites into it.
* 44 A Juice runs down his chin.
45 A He laughs.
46 A He is crying.
47 D ORIN [CONT'D]: God. I forgot.
48 A ¶ Paloma looks at him.
49 A Slowly, she smiles, and reaches for another.

### SCENE s01944 | EXT. SPARKLE AUTO SPA CAR WASH - NIGHT
Detected names (may be incomplete or contain aliases): VINNIE CASTELLANOS, LUCKY SZYMANSKI, SGT. HAYES, DEE OKPARA
* 1 A ¶ Neon pink.
* 2 A A conveyor belt rumbles through a tunnel of foaming brushes.
* 3 A A dented sedan idles at the entrance, hazards blinking.
4 A ¶ VINNIE CASTELLANOS, 40s, leather jacket, keys in one fist, slams the sedan's trunk.
5 A LUCKY SZYMANSKI, 30s, kneels by the front tire, holding a duffel bag.
* 6 A A police radio on Vinnie's belt crackles.
7 D SGT. HAYES [V.O.] (over radio): All units, shots fired at Third and Maple. Suspects in a gray sedan.
8 D VINNIE (muttering): Too soon.
9 D LUCKY: We gotta go, Vin.
10 D VINNIE: Wait for Dee.
11 D LUCKY: Dee's three minutes late.
12 D VINNIE: She's two minutes late. Don't--
13 A ¶ DEE OKPARA, 30s, black hoodie, running shoes, bursts around the corner of the tunnel with a gym bag clutched to her chest.
14 D DEE: Go, go, go!
15 D LUCKY: You're late!
16 D DEE: I was shot at!
17 D VINNIE: By who?
18 D DEE: By whoever I robbed, Vinnie, who do you think?
19 D SGT. HAYES [V.O.] (over radio): Units responding to Third and Maple. Repeat, gray sedan, plates unknown.
20 A ¶ Vinnie rips the radio off his belt and drops it into the car-wash foam.
21 A Dee dives into the back seat.
22 A Lucky tosses the duffel in after her and slides behind the wheel.
23 D LUCKY: Vin, door!
24 D VINNIE: I'm getting in!
* 25 A ¶ The sedan lurches forward onto the belt.
* 26 A Brushes descend.
* 27 A Water sprays across the windshield.
28 A Inside, three people sit very still, breathing hard, as the car wash whirls around them and a siren grows in the distance.
29 D DEE: This is the worst getaway ever.
30 D LUCKY: It's a very good wash.

### SCENE s01945 | INT. DRAGON'S CAVERN - DENTAL CHAMBER - DAY
Detected names (may be incomplete or contain aliases): IGNATHRAX, MAGISTER ODALRIC PYM, TAMSIN EKE
* 1 A ¶ A vast cavern, hung with sacks of gold and a cracked mirror the size of a barn door.
* 2 A In the center, a throne-sized stone chair, strapped with iron.
* 3 A A huge reptilian jaw rests open on its headrest.
4 A ¶ IGNATHRAX, a dragon the color of old copper, reclines with his lids half shut and a single enormous molar exposed.
5 A Beside him, MAGISTER ODALRIC PYM, 60s, in a leather apron and a headlamp, holds a pair of tongs the length of a broom.
6 A TAMSIN EKE, 20s, his apprentice, hovers at the foot of the chair with a bucket of cold well-water.
7 D ODALRIC: Don't clench.
8 D IGNATHRAX: I am not clenching.
9 D ODALRIC: You are clenching with your entire jaw. Release the jaw.
10 D IGNATHRAX: It is difficult to release a thing one has been clenching since the Third Age.
11 D TAMSIN: Master, the molar's cracked at the root.
12 D ODALRIC: I can see that, Tamsin.
13 D TAMSIN: It's the left one. The one he ate the knight with.
14 D IGNATHRAX: That is a lie. I chewed that knight carefully.
15 D ODALRIC: Be that as it may, the crown has to come out.
16 D IGNATHRAX: Will it hurt?
17 D ODALRIC: Enormously.
18 D IGNATHRAX: Then I will have a drink first.
19 D ODALRIC: You may not have a drink. Your breath ignites.
20 D IGNATHRAX: It is merely a mood.
21 D TAMSIN: Master, he's sweating molten.
22 A ¶ Odalric looks down.
* 23 A A slow rivulet of copper-colored sweat creeps along the stone floor, steaming.
24 A Tamsin pours the bucket over it.
* 25 A A hiss.
* 26 A A cloud of steam.
27 D ODALRIC: Thank you, Tamsin.
28 D IGNATHRAX: I did not ask for this. I merely wished to sleep on my gold.
29 D ODALRIC: And you shall. After the tooth.
30 D IGNATHRAX: Why must it be out?
31 D ODALRIC: Because the infection will spread to the brain, and the brain will then burn the cavern down.
32 D IGNATHRAX (a long pause): That is a fair argument.
33 D ODALRIC: Open wide.
34 D IGNATHRAX: Count to three.
35 D ODALRIC: One.
36 A ¶ He yanks.
* 37 A The tongs come away with a molar the size of a milk churn.
38 A Ignathrax roars; the cavern shakes; gold sacks tumble.
39 A Tamsin dives under the chair.
40 A Odalric holds the tooth aloft in triumph.
41 D IGNATHRAX [CONT'D]: You said three!
42 D ODALRIC: I lied.

### SCENE s01946 | EXT. SWAMP FERRY - NIGHT
Detected names (may be incomplete or contain aliases): MORVAN, HESPER, BRIAR, SABLE, THE DROWNED KING
* 1 A ¶ Black water.
* 2 A Dead trees.
* 3 A A flat barge poled through reeds.
* 4 A One lantern.
5 A ¶ MORVAN, 70s, ferryman, bent, poles in silence.
6 A HESPER, 20s, a cloaked wanderer, sits cross-legged at the prow.
7 A BRIAR, 12, wild-haired, trails a hand in the water.
8 A SABLE, 30s, a hooded archer, keeps watch at the stern.
9 D BRIAR: It's cold.
10 D MORVAN: Pull your hand in.
11 D BRIAR: It's not that cold.
12 D MORVAN: Pull it in.
13 A ¶ Briar sulks.
14 A Sable says nothing.
15 A Hesper does not look up.
* 16 A ¶ A bubble rises beside the barge.
* 17 A Then another.
18 D THE DROWNED KING [O.S.] (from beneath the water, hollow): Ferryman. You've brought me guests.
19 A ¶ Morvan stops poling.
20 A His knuckles whiten.
21 D MORVAN: No guests, Majesty. Just cargo.
22 D THE DROWNED KING [O.S.]: Cargo has hands. I count eight.
23 A ¶ Briar yanks her arm out.
* 24 A Water streams from it, black and thick.
25 A Sable draws an arrow.
26 A Hesper lifts her gaze.
27 D HESPER: Poles, Morvan. Faster.
28 D SABLE: Don't.
29 D THE DROWNED KING [O.S.]: You may go. The child stays.
30 A ¶ Briar clings to Hesper's cloak.
31 A Sable nocks the arrow.
32 A Morvan breathes through his teeth.
33 D MORVAN (low): I never agreed to this.
34 D HESPER: Neither did she.
* 35 A ¶ The barge shudders.
36 A A pale hand grips the gunwale beside Briar.
37 A Then another.
38 A Sable looses the arrow.
* 39 A It sinks without a splash.

### SCENE s01947 | INT. FUNICULAR STATION VAULT - NIGHT
Detected names (may be incomplete or contain aliases): CAMILLE DUVALL, RASHID AL-TAMIMI, SVEN EKLUND, ODESSA RUIZ
* 1 A ¶ A brass-and-marble ticket hall at the foot of an alpine rail line.
* 2 A Behind a hidden panel, the old bank vault gapes open, its steel door scarred by a thermal lance.
* 3 A Dust motes drift in lantern light.
4 A ¶ CAMILLE DUVALL, 40s, tailored black coat, pale and still, sits on an overturned crate with a coil of rope across her knees.
5 A She waits.
6 A A step ahead of her stands RASHID AL-TAMIMI, 50s, shaven head, a surgeon's calm; he is gently lifting a velvet-wrapped ingot from a cart.
7 A SVEN EKLUND, 30s, red-bearded and nervous, kneels beside him, counting bars into a leather duffel.
8 A ODESSA RUIZ, 30s, a lookout with a stopwatch, leans in the archway, tapping her boot.
9 D CAMILLE: Time?
10 D ODESSA: Four minutes to the first car.
11 A ¶ She nods.
12 A She does not move from the crate.
13 D RASHID: Seventeen bars.
14 D SVEN: Eighteen.
15 D RASHID: Count again.
16 A ¶ He does, lips moving.
17 A He shakes his head and adds one more bar to the bag.
* 18 A The duffel sags.
19 A He grunts and drags it toward the archway, where she meets him and takes the other strap.
20 D SVEN: Camille, there were thirty.
21 D CAMILLE: There were thirty. Now there are eighteen, because someone got here first.
22 D RASHID: Who?
23 D CAMILLE: Someone with a key.
* 24 A ¶ Silence.
* 25 A Odessa's stopwatch ticks.
26 A Sven looks at the floor.
27 A Rashid straightens and turns toward the vault, slowly, as if the empty shelves might speak.
28 D ODESSA: Three minutes.
29 D CAMILLE: We take what we have and go.
30 D RASHID: We also look at who knew the plan.
31 A ¶ He stares at Sven.
32 A Sven goes red.
33 A The duffel slides from his hand.
34 D SVEN: I didn't.
35 D CAMILLE: Nobody's accusing you.
36 D RASHID: I am.
37 A ¶ She stands.
38 A She folds the rope.
39 A She sets it in the cart with the same care she gave the rest.
40 D CAMILLE: Rashid, it's a trade. We keep eighteen bars, and the thief keeps twelve. We never speak of it again.
41 D RASHID: And if the thief speaks?
42 D CAMILLE: Then we'll know exactly who it was.
43 A ¶ Odessa clicks the stopwatch.
* 44 A Two minutes.
45 D ODESSA: Time's up.

### SCENE s01948 | INT. MILL OWNER'S PARLOR - NIGHT
Detected names (may be incomplete or contain aliases): JOSEPHINE MBATHA, CYRUS ALDERWICK, CONSTANCE YOON
* 1 A ¶ 1903.
* 2 A A candle.
* 3 A A ledger.
* 4 A A decanter.
5 A ¶ JOSEPHINE MBATHA, 30s, in a plain gray dress, stands before the desk.
6 A CYRUS ALDERWICK, 50s, the owner, writes without looking up.
7 A CONSTANCE YOON, 20s, a weaver, trembles at the door.
8 A ¶ She sets a paper on the ledger.
9 A He reads it.
10 A He sets down the pen.
11 D CYRUS: You'd strike over this?
12 D JOSEPHINE: We'd strike over less.
13 A ¶ She steps forward.
14 A She places her hand over the ledger.
15 A Constance flinches.
16 A He stands.
17 A Josephine does not.
18 D CYRUS: Constance, did you put your name to this?
19 D CONSTANCE: I did, sir.
20 D JOSEPHINE: She did, and so did two hundred others.
21 A ¶ He sags into his chair.
22 A He pours a glass.
23 A He drinks.
24 D CYRUS: Tell your people we'll talk in the morning.
25 A ¶ She nods.
26 A She steps back.
27 A She takes the girl's arm.
28 A Together they go out into the dark corridor.

### SCENE s01949 | INT. OPERATING THEATER 4 - NIGHT
Detected names (may be incomplete or contain aliases): KALANI MAHOE, BEATRIX LUND, TOMASZ WRONA, YARA HADDAD, ANAESTHETIST, ROSA
* 1 A ¶ Cold white light.
* 2 A The steady beep of a monitor.
3 A A patient lies draped on the table, only a rectangle of skin exposed.
4 A ¶ DR. KALANI MAHOE, 50s, surgeon, bends over the field.
5 A BEATRIX LUND, 30s, scrub nurse, passes instruments.
6 A TOMASZ WRONA, 20s, the resident, holds a retractor.
7 A YARA HADDAD, 40s, circulating nurse, stands by the door.
8 A At the head of the table, the ANAESTHETIST, 40s, watches the monitors.
9 D MAHOE: Retractor.
10 D TOMASZ: Got it.
11 D MAHOE (to the room): Everyone with me. We are closing in ten minutes.
12 D ANAESTHETIST: Blood pressure's holding.
13 D BEATRIX: Suture.
14 D MAHOE (to himself): Almost there.
15 A ¶ The anaesthetist glances at the screen, then at the surgeon.
16 A She taps a dial.
17 D ROSA: Kalani, her sats just dropped.
18 D MAHOE: How far?
19 D ROSA: Ninety-one.
20 D TOMASZ: Is that bad?
21 D YARA (from the door): Don't ask.
22 D MAHOE: Rosa, ventilate. Beatrix, hold the sutures.
23 D BEATRIX: Holding.
24 D MAHOE: Tomasz, you can breathe now.
25 A ¶ Tomasz lets out a long breath.
* 26 A The monitor settles.

### SCENE s01950 | INT. FLOODED HOTEL LOBBY - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT ANNEKE DEVRIES, SERGEANT KOFI MENSAH-BOATENG
* 1 A ¶ A grand ruin.
* 2 A Chandeliers hang in black water to the knees.
* 3 A A reception desk rises like an island.
* 4 A Gunfire rumbles far off.
5 A ¶ LIEUTENANT ANNEKE DEVRIES, 30s, helmet cracked, sits on the desk with a bandaged thigh.
6 A SERGEANT KOFI MENSAH-BOATENG, 40s, wades in from the stairs, rifle held high.
7 D KOFI: Upstairs is clear.
8 D ANNEKE: Then sit.
9 A ¶ He climbs onto the desk beside her.
10 A She hands him a canteen.
11 A He drinks, wipes his mouth, hands it back.
12 D ANNEKE [CONT'D]: How many left in the company?
13 D KOFI: Eleven.
14 D ANNEKE: Yesterday we were forty.
15 D KOFI: Yesterday was yesterday.
16 D ANNEKE: Tell me they got out.
17 D KOFI: Some got out.
18 D ANNEKE: Kofi.
19 D KOFI: I won't lie to you, Lieutenant.
20 D ANNEKE: You never do. It's very irritating.
* 21 A ¶ A beam crashes somewhere above.
* 22 A Water ripples across the lobby.
23 A They both flinch, then settle.
24 D ANNEKE [CONT'D]: When this is over, what will you do?
25 D KOFI: Go home. Sit in my mother's kitchen. Eat until I cannot stand.
26 D ANNEKE: That's all?
27 D KOFI: That's a great deal.
28 D ANNEKE: My mother's kitchen burned in the first week.
29 D KOFI: Then you'll come to mine.
30 A ¶ She laughs, a short, cracked sound.
31 A He smiles.
* 32 A Another distant shell.
33 A They both fall silent.
34 D ANNEKE: Kofi. If I don't make it out--
35 D KOFI: You will.
36 D ANNEKE: If I don't.
37 D KOFI: Then I tell your sister you were a terrible card player.
38 D ANNEKE: Tell her I was the worst. She'll believe that.
39 D KOFI: She will.
40 D ANNEKE: Good.
41 A ¶ She leans her head on his shoulder.
42 A He does not move.
43 A They sit in the dark water and listen to the war go quiet.

### SCENE s01951 | INT. PERFUMERY - PARIS - AFTERNOON
Detected names (may be incomplete or contain aliases): ARMAND LAFORGUE, ISIDORE BEAUCAIRE
* 1 A ¶ 1768.
* 2 A A shop of glass and brass.
* 3 A Rows of tiny bottles glow in the amber light.
* 4 A Orange blossom and jasmine hang thick in the air.
5 A ¶ ARMAND LAFORGUE, 50s, the master perfumer, stirs a vial at the counter.
6 A He does not look up.
7 A The bell above the door chimes, and ISIDORE BEAUCAIRE, 40s, a courtier in a powdered wig, steps in, shaking rain from his coat.
8 D ISIDORE: Armand. You look well.
9 D ARMAND: I am not well, Isidore. I am merely alive.
10 A ¶ He sets down the vial.
11 A He pours a measure into a crystal stopper and offers it.
12 A The courtier sniffs, smiles, and hands it back.
13 D ISIDORE: Violet and cedar.
14 D ARMAND: And?
15 D ISIDORE: And something I cannot name.
16 D ARMAND: Bitter almond.
17 A ¶ Isidore's smile dies.
18 A He steps back.
19 A His hand drifts to his coat.
20 A Armand watches it go, then lifts the stopper to his own lips and drinks it down.
21 D ARMAND [CONT'D]: You see? Harmless.
22 A ¶ The courtier stares.
23 A Armand sets the empty stopper on the counter and places both hands flat on the wood.
24 D ARMAND [CONT'D]: The other bottle, however, is in your pocket.
25 A ¶ He lunges across the counter and seizes the wrist.
26 A They struggle among the vials.
* 27 A Glass breaks.
* 28 A The scent of a hundred flowers erupts at once.
29 A Isidore breaks free and runs for the door.
30 A He yanks it open.
31 A Armand sags against the shelves, laughing quietly.

### SCENE s01952 | EXT. RIVERBOAT SAWMILL - DAY
Detected names (may be incomplete or contain aliases): MARSHAL EVANDER COLE, TILDA HASKELL, RAWLINS DUNMORE, JOAQUIN SPARROW
* 1 A ¶ A barge-mounted sawmill moored on a brown river.
* 2 A A huge blade whines through a log.
* 3 A Sawdust drifts like snow.
* 4 A Men shout from the lower deck.
5 A ¶ MARSHAL EVANDER COLE, 40s, dusty badge, stands at the rail with his thumbs in his belt.
6 A TILDA HASKELL, 30s, in a leather apron, feeds logs to the blade.
7 A RAWLINS DUNMORE, 40s, mill foreman, glowers from the catwalk.
8 A Below the saw, JOAQUIN SPARROW, 20s, a wiry deckhand, hauls a rope.
9 D EVANDER: Mr. Dunmore. I'd like a word.
10 D RAWLINS: I'm busy.
11 D EVANDER: So's the river.
12 A ¶ Rawlins comes down the steps, wiping his hands.
13 A Tilda cuts the saw.
* 14 A The silence is sudden.
15 D RAWLINS: What's this about, Marshal?
16 D EVANDER: A dead man, found downstream. Pinned under a log from this barge.
17 D RAWLINS: Accidents happen.
18 D EVANDER: This one had a bullet in him.
19 A ¶ Tilda sets down her lever.
20 A Joaquin lets go of the rope.
21 A Rawlins keeps his hands where Evander can see them.
22 D RAWLINS: I know nothing about it.
23 D EVANDER: Then you won't mind if I look at the log.
24 D RAWLINS: Be my guest.
25 A ¶ He walks to the stack.
26 A Evander follows.
27 A Joaquin darts for the gangplank, but Tilda catches him by the collar and drags him back.
28 A He twists loose and sprints across the deck.
29 A Evander draws his revolver.
30 D EVANDER: Joaquin!
31 D JOAQUIN: It wasn't me!
32 D EVANDER: I never said it was.
33 A ¶ Joaquin stops at the rail.
34 A His shoulders heave.
35 A Rawlins backs away, boots scraping on the planks.
36 D TILDA (quietly): Joaquin, tell him.
37 D JOAQUIN: He made me, Tilda.
38 D RAWLINS: Shut your mouth, boy.
39 D JOAQUIN: He shot Mr. Pell over the lumber contract and made me drag the body to the saw. I didn't want to. I swear I didn't.
40 D RAWLINS: That's a lie.
41 D EVANDER: Is it?
42 D RAWLINS: Marshal, I've run this mill twenty years.
43 D EVANDER: Then twenty years is plenty.
44 A ¶ Rawlins lunges for the gun on his hip.
45 A Evander fires first.
46 A Rawlins spins and falls across a pile of sawdust, clutching his shoulder.
47 A Tilda steps over him, kicks the gun away, and stands there breathing.
48 D TILDA: He's alive.
49 D EVANDER: Good. He can hang proper.
