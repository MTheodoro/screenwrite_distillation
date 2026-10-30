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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0006.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pt_seagull_21 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): SORIN, DORN, TREPLIEFF, MEDVIEDENKO, SHAMRAEFF, PAULINA, ARKADINA
1 D SORIN: You are pig-headed! Can’t you see I want to live?
2 D DORN: That is futile. Nature has commanded that every life shall come to an end.
3 D SORIN: You speak like a man who is satiated with life. Your thirst for it is quenched, and so you are calm and indifferent, but even you dread death.
4 D DORN: The fear of death is an animal passion which must be overcome. Only those who believe in a future life and tremble for sins committed, can logically fear death; but you, for one thing, don’t believe in a future life, and for another, you haven’t committed any sins. You have served as a Councillor for twenty-five years, that is all.
5 A ¶ Laughing.
6 D SORIN: Twenty-eight years!
7 A ¶ TREPLIEFF comes in and sits down on a stool at SORIN’S feet.
8 A MASHA fixes her eyes on his face and never once tears them away.
9 D DORN: We are keeping Constantine from his work.
10 D TREPLIEFF: No matter.
* 11 A ¶ A pause.
12 D MEDVIEDENKO: Of all the cities you visited when you were abroad, Doctor, which one did you like the best?
13 D DORN: Genoa.
14 D TREPLIEFF: Why Genoa?
15 D DORN: Because there is such a splendid crowd in its streets. When you leave the hotel in the evening, and throw yourself into the heart of that throng, and move with it without aim or object, swept along, hither and thither, their life seems to be yours, their soul flows into you, and you begin to believe at last in a great world spirit, like the one in your play that Nina Zarietchnaya acted. By the way, where is Nina now? Is she well?
16 D TREPLIEFF: I believe so.
17 D DORN: I hear she has led rather a strange life; what happened?
18 D TREPLIEFF: It is a long story, Doctor.
19 D DORN: Tell it shortly.
* 20 A ¶ A pause.
21 D TREPLIEFF: She ran away from home and joined Trigorin; you know that?
22 D DORN: Yes.
23 D TREPLIEFF: She had a child that died. Trigorin soon tired of her and returned to his former ties, as might have been expected. He had never broken them, indeed, but out of weakness of character had always vacillated between the two. As far as I can make out from what I have heard, Nina’s domestic life has not been altogether a success.
24 D DORN: What about her acting?
25 D TREPLIEFF: I believe she made an even worse failure of that. She made her debut on the stage of the Summer Theatre in Moscow, and afterward made a tour of the country towns. At that time I never let her out of my sight, and wherever she went I followed. She always attempted great and difficult parts, but her delivery was harsh and monotonous, and her gestures heavy and crude. She shrieked and died well at times, but those were but moments.
26 D DORN: Then she really has a talent for acting?
27 D TREPLIEFF: I never could make out. I believe she has. I saw her, but she refused to see me, and her servant would never admit me to her rooms. I appreciated her feelings, and did not insist upon a meeting.
* 28 A ¶ A pause.
29 D TREPLIEFF: What more can I tell you? She sometimes writes to me now that I have come home, such clever, sympathetic letters, full of warm feeling. She never complains, but I can tell that she is profoundly unhappy; not a line but speaks to me of an aching, breaking nerve. She has one strange fancy; she always signs herself “The Sea-gull.” The miller in “Rusalka” called himself “The Crow,” and so she repeats in all her letters that she is a sea-gull. She is here now.
30 D DORN: What do you mean by “here?”
31 D TREPLIEFF: In the village, at the inn. She has been there for five days. I should have gone to see her, but Masha here went, and she refuses to see any one. Some one told me she had been seen wandering in the fields a mile from here yesterday evening.
32 D MEDVIEDENKO: Yes, I saw her. She was walking away from here in the direction of the village. I asked her why she had not been to see us. She said she would come.
33 D TREPLIEFF: But she won’t.
* 34 A ¶ A pause.
35 D TREPLIEFF: Her father and stepmother have disowned her. They have even put watchmen all around their estate to keep her away.
36 A ¶ He goes with the doctor toward the desk.
37 D TREPLIEFF: How easy it is, Doctor, to be a philosopher on paper, and how difficult in real life!
38 D SORIN: She was a beautiful girl. Even the State Councillor himself was in love with her for a time.
39 D DORN: You old Lovelace, you!
40 A ¶ SHAMRAEFF’S laugh is heard.
41 D PAULINA: They are coming back from the station.
42 D TREPLIEFF: Yes, I hear my mother’s voice.
43 A ¶ ARKADINA and TRIGORIN come in, followed by SHAMRAEFF.
44 D SHAMRAEFF: We all grow old and wither, my lady, while you alone, with your light dress, your gay spirits, and your grace, keep the secret of eternal youth.
45 D ARKADINA: You are still trying to turn my head, you tiresome old man.
46 A ¶ To SORIN.

### SCENE pt_seagull_23 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): TRIGORIN, ARKADINA, TREPLIEFF, MASHA, DORN, SHAMRAEFF, PAULINA
1 A ¶ To TRIGORIN.
2 D ARKADINA: When the long autumn evenings descend on us we while away the time here by playing lotto. Look at this old set; we used it when our mother played with us as children. Don’t you want to take a hand in the game with us until supper time?
3 A ¶ She and TRIGORIN sit down at the table.
4 D ARKADINA: It is a monotonous game, but it is all right when one gets used to it.
5 A ¶ She deals three cards to each of the players.
6 A ¶ Looking through the pages of the magazine.
7 D TREPLIEFF: He has read his own story, and hasn’t even cut the pages of mine.
8 A ¶ He lays the magazine on his desk and goes toward the door on the right, stopping as he passes his mother to give her a kiss.
9 D ARKADINA: Won’t you play, Constantine?
10 D TREPLIEFF: No, excuse me please, I don’t feel like it. I am going to take a turn through the rooms.
11 A ¶ He goes out.
12 D MASHA: Are you all ready? I shall begin: twenty-two.
13 D ARKADINA: Here it is.
14 D MASHA: Three.
15 D DORN: Right.
16 D MASHA: Have you put down three? Eight. Eighty-one. Ten.
17 D SHAMRAEFF: Don’t go so fast.
18 D ARKADINA: Could you believe it? I am still dazed by the reception they gave me in Kharkoff.
19 D MASHA: Thirty-four.
* 20 A ¶ The notes of a melancholy waltz are heard.
21 D ARKADINA: The students gave me an ovation; they sent me three baskets of flowers, a wreath, and this thing here.
22 A ¶ She unclasps a brooch from her breast and lays it on the table.
23 D SHAMRAEFF: There is something worth while!
24 D MASHA: Fifty.
25 D DORN: Fifty, did you say?
26 D ARKADINA: I wore a perfectly magnificent dress; I am no fool when it comes to clothes.
27 D PAULINA: Constantine is playing again; the poor boy is sad.
28 D SHAMRAEFF: He has been severely criticised in the papers.
29 D MASHA: Seventy-seven.
30 D ARKADINA: They want to attract attention to him.
31 D TRIGORIN: He doesn’t seem able to make a success, he can’t somehow strike the right note. There is an odd vagueness about his writings that sometimes verges on delirium. He has never created a single living character.
32 D MASHA: Eleven.
33 D ARKADINA: Are you bored, Peter?
* 34 A ¶ A pause.
35 D ARKADINA: He is asleep.
36 D DORN: The Councillor is taking a nap.
37 D MASHA: Seven. Ninety.
38 D TRIGORIN: Do you think I should write if I lived in such a place as this, on the shore of this lake? Never! I should overcome my passion, and give my life up to the catching of fish.
39 D MASHA: Twenty-eight.
40 D TRIGORIN: And if I caught a perch or a bass, what bliss it would be!
41 D DORN: I have great faith in Constantine. I know there is something in him. He thinks in images; his stories are vivid and full of colour, and always affect me deeply. It is only a pity that he has no definite object in view. He creates impressions, and nothing more, and one cannot go far on impressions alone. Are you glad, madam, that you have an author for a son?
42 D ARKADINA: Just think, I have never read anything of his; I never have time.
43 D MASHA: Twenty-six.
44 A ¶ TREPLIEFF comes in quietly and sits down at his table.
45 A ¶ To TRIGORIN.

### SCENE pt_seagull_24 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): SHAMRAEFF, TRIGORIN, MASHA, TREPLIEFF, ARKADINA
1 D SHAMRAEFF: We have something here that belongs to you, sir.
2 D TRIGORIN: What is it?
3 D SHAMRAEFF: You told me to have the sea-gull stuffed that Mr. Constantine killed some time ago.
4 D TRIGORIN: Did I?
5 A ¶ Thoughtfully.
6 D TRIGORIN: I don’t remember.
7 D MASHA: Sixty-one. One.
8 A ¶ TREPLIEFF throws open the window and stands listening.
9 D TREPLIEFF: How dark the night is! I wonder what makes me so restless.
10 D ARKADINA: Shut the window, Constantine, there is a draught here.
11 A ¶ TREPLIEFF shuts the window.
12 D MASHA: Ninety-eight.
13 D TRIGORIN: See, my card is full.
14 A ¶ Gaily.
15 D ARKADINA: Bravo! Bravo!
16 D SHAMRAEFF: Bravo!
17 D ARKADINA: Wherever he goes and whatever he does, that man always has good luck.
18 A ¶ She gets up.
19 D ARKADINA: And now, come to supper. Our renowned guest did not have any dinner to-day. We can continue our game later.
20 A ¶ To her son.
21 D ARKADINA: Come, Constantine, leave your writing and come to supper.
22 D TREPLIEFF: I don’t want anything to eat, mother; I am not hungry.
23 D ARKADINA: As you please.
24 A ¶ She wakes SORIN.
25 D ARKADINA: Come to supper, Peter.
26 A ¶ She takes SHAMRAEFF’S arm.
27 D ARKADINA: Let me tell you about my reception in Kharkoff.
28 A ¶ PAULINA blows out the candles on the table, then she and DORN roll SORIN’S chair out of the room, and all go out through the door on the left, except TREPLIEFF, who is left alone.
29 A TREPLIEFF prepares to write.
30 A He runs his eye over what he has already written.
31 D TREPLIEFF: I have talked a great deal about new forms of art, but I feel myself gradually slipping into the beaten track.
32 A ¶ He reads.
33 D TREPLIEFF: “The placard cried it from the wall--a pale face in a frame of dusky hair”--cried--frame--that is stupid.
34 A ¶ He scratches out what he has written.
35 D TREPLIEFF: I shall begin again from the place where my hero is wakened by the noise of the rain, but what follows must go. This description of a moonlight night is long and stilted. Trigorin has worked out a process of his own, and descriptions are easy for him. He writes that the neck of a broken bottle lying on the bank glittered in the moonlight, and that the shadows lay black under the mill-wheel. There you have a moonlight night before your eyes, but I speak of the shimmering light, the twinkling stars, the distant sounds of a piano melting into the still and scented air, and the result is abominable.
* 36 A ¶ A pause.
37 D TREPLIEFF: The conviction is gradually forcing itself upon me that good literature is not a question of forms new or old, but of ideas that must pour freely from the author’s heart, without his bothering his head about any forms whatsoever.
* 38 A ¶ A knock is heard at the window nearest the table.
39 D TREPLIEFF: What was that?
40 A ¶ He looks out of the window.
41 D TREPLIEFF: I can’t see anything.
42 A ¶ He opens the glass door and looks out into the garden.
43 D TREPLIEFF: I heard some one run down the steps.
44 A ¶ He calls.
45 D TREPLIEFF: Who is there?
46 A ¶ He goes out, and is heard walking quickly along the terrace.
47 A In a few minutes he comes back with NINA ZARIETCHNAYA.
48 D TREPLIEFF: Oh, Nina, Nina!

### SCENE pt_seagull_25 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): NINA, TREPLIEFF
1 A ¶ NINA lays her head on TREPLIEFF’S breast and stifles her sobs.
2 A ¶ Deeply moved.
3 D TREPLIEFF: Nina, Nina! It is you--you! I felt you would come; all day my heart has been aching for you.
4 A ¶ He takes off her hat and cloak.
5 D TREPLIEFF: My darling, my beloved has come back to me! We mustn’t cry, we mustn’t cry.
6 D NINA: There is some one here.
7 D TREPLIEFF: No one is here.
8 D NINA: Lock the door, some one might come.
9 D TREPLIEFF: No one will come in.
10 D NINA: I know your mother is here. Lock the door.
11 A ¶ TREPLIEFF locks the door on the right and comes back to NINA.
12 D TREPLIEFF: There is no lock on that one. I shall put a chair against it.
13 A ¶ He puts an arm-chair against the door.
14 D TREPLIEFF: Don’t be frightened, no one shall come in.
15 A ¶ Gazing intently into his face.
16 D NINA: Let me look at you.
17 A ¶ She looks about her.
18 D NINA: It is warm and comfortable in here. This used to be a sitting-room. Have I changed much?
19 D TREPLIEFF: Yes, you have grown thinner, and your eyes are larger than they were. Nina, it seems so strange to see you! Why didn’t you let me go to you? Why didn’t you come sooner to me? You have been here nearly a week, I know. I have been several times each day to where you live, and have stood like a beggar beneath your window.
20 D NINA: I was afraid you might hate me. I dream every night that you look at me without recognising me. I have been wandering about on the shores of the lake ever since I came back. I have often been near your house, but I have never had the courage to come in. Let us sit down.
21 A ¶ They sit down.
22 D NINA: Let us sit down and talk our hearts out. It is so quiet and warm in here. Do you hear the wind whistling outside? As Turgenieff says, “Happy is he who can sit at night under the roof of his home, who has a warm corner in which to take refuge.” I am a sea-gull--and yet--no.
23 A ¶ She passes her hand across her forehead.
24 D NINA: What was I saying? Oh, yes, Turgenieff. He says, “and God help all houseless wanderers.”
25 A ¶ She sobs.
26 D TREPLIEFF: Nina! You are crying again, Nina!
27 D NINA: It is all right. I shall feel better after this. I have not cried for two years. I went into the garden last night to see if our old theatre were still standing. I see it is. I wept there for the first time in two years, and my heart grew lighter, and my soul saw more clearly again. See, I am not crying now.
28 A ¶ She takes his hand in hers.
29 D NINA: So you are an author now, and I am an actress. We have both been sucked into the whirlpool. My life used to be as happy as a child’s; I used to wake singing in the morning; I loved you and dreamt of fame, and what is the reality? To-morrow morning early I must start for Eltz by train in a third-class carriage, with a lot of peasants, and at Eltz the educated trades-people will pursue me with compliments. It is a rough life.
30 D TREPLIEFF: Why are you going to Eltz?
31 D NINA: I have accepted an engagement there for the winter. It is time for me to go.
32 D TREPLIEFF: Nina, I have cursed you, and hated you, and torn up your photograph, and yet I have known every minute of my life that my heart and soul were yours for ever. To cease from loving you is beyond my power. I have suffered continually from the time I lost you and began to write, and my life has been almost unendurable. My youth was suddenly plucked from me then, and I seem now to have lived in this world for ninety years. I have called out to you, I have kissed the ground you walked on, wherever I looked I have seen your face before my eyes, and the smile that had illumined for me the best years of my life.
33 A ¶ Despairingly.
34 D NINA: Why, why does he talk to me like this?
35 D TREPLIEFF: I am quite alone, unwarmed by any attachment. I am as cold as if I were living in a cave. Whatever I write is dry and gloomy and harsh. Stay here, Nina, I beseech you, or else let me go away with you.
36 A ¶ NINA quickly puts on her coat and hat.
37 D TREPLIEFF: Nina, why do you do that? For God’s sake, Nina!
38 A ¶ He watches her as she dresses.
* 39 A A pause.
40 D NINA: My carriage is at the gate. Do not come out to see me off. I shall find the way alone.
41 A ¶ Weeping.
42 D NINA: Let me have some water.
43 A ¶ TREPLIEFF hands her a glass of water.
44 D TREPLIEFF: Where are you going?
45 D NINA: Back to the village. Is your mother here?
46 D TREPLIEFF: Yes, my uncle fell ill on Thursday, and we telegraphed for her to come.

### SCENE pt_seagull_26 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): NINA, ARKADINA, TRIGORIN, TREPLIEFF, DORN, PAULINA, MASHA, SHAMRAEFF
1 D NINA: Why do you say that you have kissed the ground I walked on? You should kill me rather.
2 A ¶ She bends over the table.
3 D NINA: I am so tired. If I could only rest--rest.
4 A ¶ She raises her head.
5 D NINA: I am a sea-gull--no--no, I am an actress.
6 A ¶ She hears ARKADINA and TRIGORIN laughing in the distance, runs to the door on the left and looks through the keyhole.
7 D NINA: He is there too.
8 A ¶ She goes back to TREPLIEFF.
9 D NINA: Ah, well--no matter. He does not believe in the theatre; he used to laugh at my dreams, so that little by little I became down-hearted and ceased to believe in it too. Then came all the cares of love, the continual anxiety about my little one, so that I soon grew trivial and spiritless, and played my parts without meaning. I never knew what to do with my hands, and I could not walk properly or control my voice. You cannot imagine the state of mind of one who knows as he goes through a play how terribly badly he is acting. I am a sea-gull--no--no, that is not what I meant to say. Do you remember how you shot a seagull once? A man chanced to pass that way and destroyed it out of idleness. That is an idea for a short story, but it is not what I meant to say.
10 A ¶ She passes her hand across her forehead.
11 D NINA: What was I saying? Oh, yes, the stage. I have changed now. Now I am a real actress. I act with joy, with exaltation, I am intoxicated by it, and feel that I am superb. I have been walking and walking, and thinking and thinking, ever since I have been here, and I feel the strength of my spirit growing in me every day. I know now, I understand at last, Constantine, that for us, whether we write or act, it is not the honour and glory of which I have dreamt that is important, it is the strength to endure. One must know how to bear one’s cross, and one must have faith. I believe, and so do not suffer so much, and when I think of my calling I do not fear life.
12 A ¶ Sadly.
13 D TREPLIEFF: You have found your way, you know where you are going, but I am still groping in a chaos of phantoms and dreams, not knowing whom and what end I am serving by it all. I do not believe in anything, and I do not know what my calling is.
14 A ¶ Listening.
15 D NINA: Hush! I must go. Good-bye. When I have become a famous actress you must come and see me. Will you promise to come? But now--
16 A ¶ She takes his hand.
17 D NINA: it is late. I can hardly stand. I am fainting. I am hungry.
18 D TREPLIEFF: Stay, and let me bring you some supper.
19 D NINA: No, no--and don’t come out, I can find the way alone. My carriage is not far away. So she brought him back with her? However, what difference can that make to me? Don’t tell Trigorin anything when you see him. I love him--I love him even more than I used to. It is an idea for a short story. I love him--I love him passionately--I love him to despair. Have you forgotten, Constantine, how pleasant the old times were? What a gay, bright, gentle, pure life we led? How a feeling as sweet and tender as a flower blossomed in our hearts? Do you remember,
20 A ¶ She recites.
21 D NINA: “All men and beasts, lions, eagles, and quails, horned stags, geese, spiders, silent fish that inhabit the waves, starfish from the sea, and creatures invisible to the eye--in one word, life--all, all life, completing the dreary round set before it, has died out at last. A thousand years have passed since the earth last bore a living creature on its breast, and the unhappy moon now lights her lamp in vain. No longer are the cries of storks heard in the meadows, or the drone of beetles in the groves of limes----”
22 A ¶ She embraces TREPLIEFF impetuously and runs out onto the terrace.
* 23 A ¶ After a pause.
24 D TREPLIEFF: It would be a pity if she were seen in the garden. My mother would be distressed.
25 A ¶ He stands for several minutes tearing up his manuscripts and throwing them under the table, then unlocks the door on the right and goes out.
26 A ¶ Trying to force open the door on the left.
27 D DORN: Odd! This door seems to be locked.
28 A ¶ He comes in and puts the chair back in its former place.
29 D DORN: This is like a hurdle race.
30 A ¶ ARKADINA and PAULINA come in, followed by JACOB carrying some bottles; then come MASHA, SHAMRAEFF, and TRIGORIN.
31 D ARKADINA: Put the claret and the beer here, on the table, so that we can drink while we are playing. Sit down, friends.
32 D PAULINA: And bring the tea at once.
33 A ¶ She lights the candles and takes her seat at the card-table.
34 A SHAMRAEFF leads TRIGORIN to the cupboard.
35 D SHAMRAEFF: Here is the stuffed sea-gull I was telling you about.
36 A ¶ He takes the sea-gull out of the cupboard.
37 D SHAMRAEFF: You told me to have it done.
38 A ¶ looking at the bird.
39 D TRIGORIN: I don’t remember a thing about it, not a thing.
* 40 A ¶ A shot is heard.
41 A Every one jumps.
42 A ¶ Frightened.
43 D ARKADINA: What was that?
44 D DORN: Nothing at all; probably one of my medicine bottles has blown up. Don’t worry.
45 A ¶ He goes out through the door on the right, and comes back in a few moments.
46 D DORN: It is as I thought, a flask of ether has exploded.
47 A ¶ He sings.

### SCENE pt_seagull_3 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): PAULINA, DORN, ARKADINA, SORIN, TRIGORIN, SHAMRAEFF, MEDVIEDENKO, TREPLIEFF, NINA
1 A ¶ Sings.
2 A ¶ “Once more I stand before thee.”
3 A ¶ It is only right that artists should be made much of by society and treated differently from, let us say, merchants.
4 A It is a kind of idealism.
5 D PAULINA: When women have loved you and thrown themselves at your head, has that been idealism?
6 A ¶ Shrugging his shoulders.
7 D DORN: I can’t say. There has been a great deal that was admirable in my relations with women. In me they liked, above all, the superior doctor. Ten years ago, you remember, I was the only decent doctor they had in this part of the country--and then, I have always acted like a man of honour.
8 A ¶ Seizes his hand.
9 D PAULINA: Dearest!
10 D DORN: Be quiet! Here they come.
11 A ¶ ARKADINA comes in on SORIN’S arm; also TRIGORIN, SHAMRAEFF, MEDVIEDENKO, and MASHA.
12 D SHAMRAEFF: She acted most beautifully at the Poltava Fair in 1873; she was really magnificent. But tell me, too, where Tchadin the comedian is now? He was inimitable as Rasplueff, better than Sadofski. Where is he now?
13 D ARKADINA: Don’t ask me where all those antediluvians are! I know nothing about them.
14 A ¶ She sits down.
15 A ¶ Sighing.
16 D SHAMRAEFF: Pashka Tchadin! There are none left like him. The stage is not what it was in his time. There were sturdy oaks growing on it then, where now but stumps remain.
17 D DORN: It is true that we have few dazzling geniuses these days, but, on the other hand, the average of acting is much higher.
18 D SHAMRAEFF: I cannot agree with you; however, that is a matter of taste, de gustibus.
19 A ¶ Enter TREPLIEFF from behind the stage.
20 D ARKADINA: When will the play begin, my dear boy?
21 D TREPLIEFF: In a moment. I must ask you to have patience.
22 A ¶ Quoting from Hamlet.
23 D ARKADINA: My son,
24 A ¶ “Thou turn’st mine eyes into my very soul; And there I see such black grained spots As will not leave their tinct.”
* 25 A ¶ A horn is blown behind the stage.
26 D TREPLIEFF: Attention, ladies and gentlemen! The play is about to begin.
* 27 A ¶ A pause.
28 D TREPLIEFF: I shall commence.
29 A ¶ He taps the door with a stick, and speaks in a loud voice.
30 D TREPLIEFF: O, ye time-honoured, ancient mists that drive at night across the surface of this lake, blind you our eyes with sleep, and show us in our dreams that which will be in twice ten thousand years!
31 D SORIN: There won’t be anything in twice ten thousand years.
32 D TREPLIEFF: Then let them now show us that nothingness.
33 D ARKADINA: Yes, let them--we are asleep.
* 34 A ¶ The curtain rises.
* 35 A A vista opens across the lake.
* 36 A The moon hangs low above the horizon and is reflected in the water.
37 A NINA, dressed in white, is seen seated on a great rock.
38 D NINA: All men and beasts, lions, eagles, and quails, horned stags, geese, spiders, silent fish that inhabit the waves, starfish from the sea, and creatures invisible to the eye--in one word, life--all, all life, completing the dreary round imposed upon it, has died out at last. A thousand years have passed since the earth last bore a living creature on her breast, and the unhappy moon now lights her lamp in vain. No longer are the cries of storks heard in the meadows, or the drone of beetles in the groves of limes. All is cold, cold. All is void, void, void. All is terrible, terrible--
* 39 A ¶ A pause.
40 D NINA: The bodies of all living creatures have dropped to dust, and eternal matter has transformed them into stones and water and clouds; but their spirits have flowed together into one, and that great world-soul am I! In me is the spirit of the great Alexander, the spirit of Napoleon, of Caesar, of Shakespeare, and of the tiniest leech that swims. In me the consciousness of man has joined hands with the instinct of the animal; I understand all, all, all, and each life lives again in me.
* 41 A ¶ The will-o-the-wisps flicker out along the lake shore.
42 A ¶ Whispers.
43 D ARKADINA: What decadent rubbish is this?
44 A ¶ Imploringly.
45 D TREPLIEFF: Mother!
46 D NINA: I am alone. Once in a hundred years my lips are opened, my voice echoes mournfully across the desert earth, and no one hears. And you, poor lights of the marsh, you do not hear me. You are engendered at sunset in the putrid mud, and flit wavering about the lake till dawn, unconscious, unreasoning, unwarmed by the breath of life. Satan, father of eternal matter, trembling lest the spark of life should glow in you, has ordered an unceasing movement of the atoms that compose you, and so you shift and change for ever. I, the spirit of the universe, I alone am immutable and eternal.
* 47 A ¶ A pause.
48 D NINA: Like a captive in a dungeon deep and void, I know not where I am, nor what awaits me. One thing only is not hidden from me: in my fierce and obstinate battle with Satan, the source of the forces of matter, I am destined to be victorious in the end. Matter and spirit will then be one at last in glorious harmony, and the reign of freedom will begin on earth. But this can only come to pass by slow degrees, when after countless eons the moon and earth and shining Sirius himself shall fall to dust. Until that hour, oh, horror! horror! horror!
* 49 A ¶ A pause.
* 50 A Two glowing red points are seen shining across the lake.

### SCENE pt_seagull_4 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): NINA, ARKADINA, TREPLIEFF, DORN, PAULINA, SORIN, TRIGORIN, MEDVIEDENKO, MASHA
1 D NINA: Satan, my mighty foe, advances; I see his dread and lurid eyes.
2 D ARKADINA: I smell sulphur. Is that done on purpose?
3 D TREPLIEFF: Yes.
4 D ARKADINA: Oh, I see; that is part of the effect.
5 D TREPLIEFF: Mother!
6 D NINA: He longs for man--
7 A ¶ To DORN.
8 D PAULINA: You have taken off your hat again! Put it on, you will catch cold.
9 D ARKADINA: The doctor has taken off his hat to Satan father of eternal matter--
10 A ¶ Loudly and angrily.
11 D TREPLIEFF: Enough of this! There’s an end to the performance. Down with the curtain!
12 D ARKADINA: Why, what are you so angry about?
13 A ¶ Stamping his foot.
14 D TREPLIEFF: The curtain; down with it!
* 15 A ¶ The curtain falls.
16 D TREPLIEFF: Excuse me, I forgot that only a chosen few might write plays or act them. I have infringed the monopoly. I--I---
17 A ¶ He would like to say more, but waves his hand instead, and goes out to the left.
18 D ARKADINA: What is the matter with him?
19 D SORIN: You should not handle youthful egoism so roughly, sister.
20 D ARKADINA: What did I say to him?
21 D SORIN: You hurt his feelings.
22 D ARKADINA: But he told me himself that this was all in fun, so I treated his play as if it were a comedy.
23 D SORIN: Nevertheless---
24 D ARKADINA: Now it appears that he has produced a masterpiece, if you please! I suppose it was not meant to amuse us at all, but that he arranged the performance and fumigated us with sulphur to demonstrate to us how plays should be written, and what is worth acting. I am tired of him. No one could stand his constant thrusts and sallies. He is a wilful, egotistic boy.
25 D SORIN: He had hoped to give you pleasure.
26 D ARKADINA: Is that so? I notice, though, that he did not choose an ordinary play, but forced his decadent trash on us. I am willing to listen to any raving, so long as it is not meant seriously, but in showing us this, he pretended to be introducing us to a new form of art, and inaugurating a new era. In my opinion, there was nothing new about it, it was simply an exhibition of bad temper.
27 D TRIGORIN: Everybody must write as he feels, and as best he may.
28 D ARKADINA: Let him write as he feels and can, but let him spare me his nonsense.
29 D DORN: Thou art angry, O Jove!
30 D ARKADINA: I am a woman, not Jove.
31 A ¶ She lights a cigarette.
32 D ARKADINA: And I am not angry, I am only sorry to see a young man foolishly wasting his time. I did not mean to hurt him.
33 D MEDVIEDENKO: No one has any ground for separating life from matter, as the spirit may well consist of the union of material atoms.
34 A ¶ Excitedly, to TRIGORIN.
35 D MEDVIEDENKO: Some day you should write a play, and put on the stage the life of a schoolmaster. It is a hard, hard life.
36 D ARKADINA: I agree with you, but do not let us talk about plays or atoms now. This is such a lovely evening. Listen to the singing, friends, how sweet it sounds.
37 D PAULINA: Yes, they are singing across the water.
* 38 A ¶ A pause.
39 A ¶ To TRIGORIN.
40 D ARKADINA: Sit down beside me here. Ten or fifteen years ago we had music and singing on this lake almost all night. There are six houses on its shores. All was noise and laughter and romance then, such romance! The young star and idol of them all in those days was this man here,
41 A ¶ Nods toward DORN.
42 D ARKADINA: Doctor Eugene Dorn. He is fascinating now, but he was irresistible then. But my conscience is beginning to prick me. Why did I hurt my poor boy? I am uneasy about him.
43 A ¶ Loudly.
44 D ARKADINA: Constantine! Constantine!
45 D MASHA: Shall I go and find him?

### SCENE pt_seagull_5 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): ARKADINA, MASHA, NINA, SORIN, DORN, SHAMRAEFF, TRIGORIN
1 D ARKADINA: If you please, my dear.
2 A ¶ Goes off to the left, calling.
3 D MASHA: Mr. Constantine! Oh, Mr. Constantine!
4 A ¶ Comes in from behind the stage.
5 D NINA: I see that the play will never be finished, so now I can go home. Good evening.
6 A ¶ She kisses ARKADINA and PAULINA.
7 D SORIN: Bravo! Bravo!
8 D ARKADINA: Bravo! Bravo! We were quite charmed by your acting. With your looks and such a lovely voice it is a crime for you to hide yourself in the country. You must be very talented. It is your duty to go on the stage, do you hear me?
9 D NINA: It is the dream of my life, which will never come true.
10 D ARKADINA: Who knows? Perhaps it will. But let me present Monsieur Boris Trigorin.
11 D NINA: I am delighted to meet you.
12 A ¶ Embarrassed.
13 D NINA: I have read all your books.
14 A ¶ Drawing NINA down beside her.
15 D ARKADINA: Don’t be afraid of him, dear. He is a simple, good-natured soul, even if he is a celebrity. See, he is embarrassed himself.
16 D DORN: Couldn’t the curtain be raised now? It is depressing to have it down.
17 A ¶ Loudly.
18 D SHAMRAEFF: Jacob, my man! Raise the curtain!
19 A ¶ To TRIGORIN.
20 D NINA: It was a curious play, wasn’t it?
21 D TRIGORIN: Very. I couldn’t understand it at all, but I watched it with the greatest pleasure because you acted with such sincerity, and the setting was beautiful.
* 22 A ¶ A pause.
23 D TRIGORIN: There must be a lot of fish in this lake.
24 D NINA: Yes, there are.
25 D TRIGORIN: I love fishing. I know of nothing pleasanter than to sit on a lake shore in the evening with one’s eyes on a floating cork.
26 D NINA: Why, I should think that for one who has tasted the joys of creation, no other pleasure could exist.
27 D ARKADINA: Don’t talk like that. He always begins to flounder when people say nice things to him.
28 D SHAMRAEFF: I remember when the famous Silva was singing once in the Opera House at Moscow, how delighted we all were when he took the low C. Well, you can imagine our astonishment when one of the church cantors, who happened to be sitting in the gallery, suddenly boomed out: “Bravo, Silva!” a whole octave lower. Like this:
29 A ¶ In a deep bass voice.
30 D SHAMRAEFF: “Bravo, Silva!” The audience was left breathless.
* 31 A ¶ A pause.
32 D DORN: An angel of silence is flying over our heads.
33 D NINA: I must go. Good-bye.
34 D ARKADINA: Where to? Where must you go so early? We shan’t allow it.
35 D NINA: My father is waiting for me.
36 D ARKADINA: How cruel he is, really.
37 A ¶ They kiss each other.
38 D ARKADINA: Then I suppose we can’t keep you, but it is very hard indeed to let you go.
39 D NINA: If you only knew how hard it is for me to leave you all.
40 D ARKADINA: Somebody must see you home, my pet.
41 A ¶ Startled.
42 D NINA: No, no!
43 A ¶ Imploringly.
44 D SORIN: Don’t go!
45 D NINA: I must.

### SCENE pt_seagull_7 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): DORN, MASHA, SORIN, ARKADINA
1 D DORN: Ah, youth, youth!
2 D MASHA: It is always “Youth, youth,” when there is nothing else to be said.
3 A ¶ She takes snuff.
4 A DORN takes the snuff-box out of her hands and flings it into the bushes.
5 D DORN: Don’t do that, it is horrid.
* 6 A ¶ A pause.
7 D DORN: I hear music in the house. I must go in.
8 D MASHA: Wait a moment.
9 D DORN: What do you want?
10 D MASHA: Let me tell you again. I feel like talking.
11 A ¶ She grows more and more excited.
12 D MASHA: I do not love my father, but my heart turns to you. For some reason, I feel with all my soul that you are near to me. Help me! Help me, or I shall do something foolish and mock at my life, and ruin it. I am at the end of my strength.
13 D DORN: What is the matter? How can I help you?
14 D MASHA: I am in agony. No one, no one can imagine how I suffer.
15 A ¶ She lays her head on his shoulder and speaks softly.
16 D MASHA: I love Constantine.
17 D DORN: Oh, how excitable you all are! And how much love there is about this lake of spells!
18 A ¶ Tenderly.
19 D DORN: But what can I do for you, my child? What? What?
* 20 A ¶ The curtain falls.
* 21 A ¶ The lawn in front of SORIN’S house.
* 22 A The house stands in the background, on a broad terrace.
* 23 A The lake, brightly reflecting the rays of the sun, lies to the left.
* 24 A There are flower-beds here and there.
* 25 A It is noon; the day is hot.
26 A ARKADINA, DORN, and MASHA are sitting on a bench on the lawn, in the shade of an old linden.
* 27 A An open book is lying on DORN’S knees .
28 A ¶ To MASHA.
29 D ARKADINA: Come, get up.
30 A ¶ They both get up.
31 D ARKADINA: Stand beside me. You are twenty-two and I am almost twice your age. Tell me, Doctor, which of us is the younger looking?
32 D DORN: You are, of course.
33 D ARKADINA: You see! Now why is it? Because I work; my heart and mind are always busy, whereas you never move off the same spot. You don’t live. It is a maxim of mine never to look into the future. I never admit the thought of old age or death, and just accept what comes to me.
34 D MASHA: I feel as if I had been in the world a thousand years, and I trail my life behind me like an endless scarf. Often I have no desire to live at all. Of course that is foolish. One ought to pull oneself together and shake off such nonsense.
35 A ¶ Sings softly.
36 A ¶ “Tell her, oh flowers--”
37 D ARKADINA: And then I keep myself as correct-looking as an Englishman. I am always well-groomed, as the saying is, and carefully dressed, with my hair neatly arranged. Do you think I should ever permit myself to leave the house half-dressed, with untidy hair? Certainly not! I have kept my looks by never letting myself slump as some women do.
38 A ¶ She puts her arms akimbo, and walks up and down on the lawn.
39 D ARKADINA: See me, tripping on tiptoe like a fifteen-year-old girl.
40 D DORN: I see. Nevertheless, I shall continue my reading.
41 A ¶ He takes up his book.
42 D DORN: Let me see, we had come to the grain-dealer and the rats.
43 D ARKADINA: And the rats. Go on.
44 A ¶ She sits down.
45 D ARKADINA: No, give me the book, it is my turn to read.
46 A ¶ She takes the book and looks for the place.
47 D ARKADINA: And the rats. Ah, here it is.
48 A ¶ She reads.
49 D ARKADINA: “It is as dangerous for society to attract and indulge authors as it is for grain-dealers to raise rats in their granaries. Yet society loves authors. And so, when a woman has found one whom she wishes to make her own, she lays siege to him by indulging and flattering him.” That may be so in France, but it certainly is not so in Russia. We do not carry out a programme like that. With us, a woman is usually head over ears in love with an author before she attempts to lay siege to him. You have an example before your eyes, in me and Trigorin.
50 A ¶ SORIN comes in leaning on a cane, with NINA beside him.
51 A MEDVIEDENKO follows, pushing an arm-chair.
52 A ¶ In a caressing voice, as if speaking to a child.
53 D SORIN: So we are happy now, eh? We are enjoying ourselves to-day, are we? Father and stepmother have gone away to Tver, and we are free for three whole days!

### SCENE pt_seagull_8 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): ARKADINA, NINA, SORIN, MASHA, DORN, MEDVIEDENKO
1 A ¶ Sits down beside ARKADINA, and embraces her.
2 D NINA: I am so happy. I belong to you now.
3 A ¶ Sits down in his arm-chair.
4 D SORIN: She looks lovely to-day.
5 D ARKADINA: Yes, she has put on her prettiest dress, and looks sweet. That was nice of you.
6 A ¶ She kisses NINA.
7 D ARKADINA: But we mustn’t praise her too much; we shall spoil her. Where is Trigorin?
8 D NINA: He is fishing off the wharf.
9 D ARKADINA: I wonder he isn’t bored.
10 A ¶ She begins to read again.
11 D NINA: What are you reading?
12 D ARKADINA: “On the Water,” by Maupassant.
13 A ¶ She reads a few lines to herself.
14 D ARKADINA: But the rest is neither true nor interesting.
15 A ¶ She lays down the book.
16 D ARKADINA: I am uneasy about my son. Tell me, what is the matter with him? Why is he so dull and depressed lately? He spends all his days on the lake, and I scarcely ever see him any more.
17 D MASHA: His heart is heavy.
18 A ¶ Timidly, to NINA.
19 D MASHA: Please recite something from his play.
20 A ¶ Shrugging her shoulders.
21 D NINA: Shall I? Is it so interesting?
22 A ¶ With suppressed rapture.
23 D MASHA: When he recites, his eyes shine and his face grows pale. His voice is beautiful and sad, and he has the ways of a poet.
24 A ¶ SORIN begins to snore.
25 D DORN: Pleasant dreams!
26 D ARKADINA: Peter!
27 D SORIN: Eh?
28 D ARKADINA: Are you asleep?
29 D SORIN: Not a bit of it.
* 30 A ¶ A pause.
31 D ARKADINA: You don’t do a thing for your health, brother, but you really ought to.
32 D DORN: The idea of doing anything for one’s health at sixty-five!
33 D SORIN: One still wants to live at sixty-five.
34 A ¶ Crossly.
35 D DORN: Ho! Take some camomile tea.
36 D ARKADINA: I think a journey to some watering-place would be good for him.
37 D DORN: Why, yes; he might go as well as not.
38 D ARKADINA: You don’t understand.
39 D DORN: There is nothing to understand in this case; it is quite clear.
40 D MEDVIEDENKO: He ought to give up smoking.
41 D SORIN: What nonsense!
* 42 A ¶ A pause.
43 D DORN: No, that is not nonsense. Wine and tobacco destroy the individuality. After a cigar or a glass of vodka you are no longer Peter Sorin, but Peter Sorin plus somebody else. Your ego breaks in two: you begin to think of yourself in the third person.
44 D SORIN: It is easy for you to condemn smoking and drinking; you have known what life is, but what about me? I have served in the Department of Justice for twenty-eight years, but I have never lived, I have never had any experiences. You are satiated with life, and that is why you have an inclination for philosophy, but I want to live, and that is why I drink my wine for dinner and smoke cigars, and all.
45 D DORN: One must take life seriously, and to take a cure at sixty-five and regret that one did not have more pleasure in youth is, forgive my saying so, trifling.

### SCENE pt_superman_0 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): RAMSDEN, THE MAID, OCTAVIUS
1 A ¶ Roebuck Ramsden is in his study, opening the morning letters.
* 2 A The study, handsomely and solidly furnished, proclaims the man of means.
* 3 A Not a speck of dust is visible: it is clear that there are at least two housemaids and a parlormaid downstairs, and a housekeeper upstairs who does not let them spare elbow-grease.
4 A Even the top of Roebuck's head is polished: on a sunshiny day he could heliograph his orders to distant camps by merely nodding.
5 A In no other respect, however, does he suggest the military man.
6 A It is in active civil life that men get his broad air of importance, his dignified expectation of deference, his determinate mouth disarmed and refined since the hour of his success by the withdrawal of opposition and the concession of comfort and precedence and power.
7 A He is more than a highly respectable man: he is marked out as a president of highly respectable men, a chairman among directors, an alderman among councillors, a mayor among aldermen.
8 A Four tufts of iron-grey hair, which will soon be as white as isinglass, and are in other respects not at all unlike it, grow in two symmetrical pairs above his ears and at the angles of his spreading jaws.
9 A He wears a black frock coat, a white waistcoat (it is bright spring weather), and trousers, neither black nor perceptibly blue, of one of those indefinitely mixed hues which the modern clothier has produced to harmonize with the religions of respectable men.
10 A He has not been out of doors yet to-day; so he still wears his slippers, his boots being ready for him on the hearthrug.
11 A Surmising that he has no valet, and seeing that he has no secretary with a shorthand notebook and a typewriter, one meditates on how little our great burgess domesticity has been disturbed by new fashions and methods, or by the enterprise of the railway and hotel companies which sell you a Saturday to Monday of life at Folkestone as a real gentleman for two guineas, first class fares both ways included.
* 12 A ¶ How old is Roebuck?
* 13 A The question is important on the threshold of a drama of ideas; for under such circumstances everything depends on whether his adolescence belonged to the sixties or to the eighties.
14 A He was born, as a matter of fact, in 1839, and was a Unitarian and Free Trader from his boyhood, and an Evolutionist from the publication of the Origin of Species.
15 A Consequently he has always classed himself as an advanced thinker and fearlessly outspoken reformer.
* 16 A ¶ Sitting at his writing table, he has on his right the windows giving on Portland Place.
* 17 A Through these, as through a proscenium, the curious spectator may contemplate his profile as well as the blinds will permit.
* 18 A On his left is the inner wall, with a stately bookcase, and the door not quite in the middle, but somewhat further from him.
* 19 A Against the wall opposite him are two busts on pillars: one, to his left, of John Bright; the other, to his right, of Mr Herbert Spencer.
* 20 A Between them hang an engraved portrait of Richard Cobden; enlarged photographs of Martineau, Huxley, and George Eliot; autotypes of allegories by Mr G.F. Watts (for Roebuck believed in the fine arts with all the earnestness of a man who does not understand them), and an impression of Dupont's engraving of Delaroche's Beaux Artes hemicycle, representing the great men of all ages.
* 21 A On the wall behind him, above the mantelshelf, is a family portrait of impenetrable obscurity.
* 22 A ¶ A chair stands near the writing table for the convenience of business visitors.
* 23 A Two other chairs are against the wall between the busts.
24 A ¶ A parlormaid enters with a visitor's card.
25 A Roebuck takes it, and nods, pleased.
* 26 A Evidently a welcome caller.
27 D RAMSDEN: Show him up.
28 A ¶ The parlormaid goes out and returns with the visitor.
29 D THE MAID: Mr Robinson.
30 A ¶ Mr Robinson is really an uncommonly nice looking young fellow.
31 A He must, one thinks, be the jeune premier; for it is not in reason to suppose that a second such attractive male figure should appear in one story.
32 A The slim shapely frame, the elegant suit of new mourning, the small head and regular features, the pretty little moustache, the frank clear eyes, the wholesome bloom and the youthful complexion, the well brushed glossy hair, not curly, but of fine texture and good dark color, the arch of good nature in the eyebrows, the erect forehead and neatly pointed chin, all announce the man who will love and suffer later on.
33 A And that he will not do so without sympathy is guaranteed by an engaging sincerity and eager modest serviceableness which stamp him as a man of amiable nature.
34 A The moment he appears, Ramsden's face expands into fatherly liking and welcome, an expression which drops into one of decorous grief as the young man approaches him with sorrow in his face as well as in his black clothes.
* 35 A Ramsden seems to know the nature of the bereavement.
36 A As the visitor advances silently to the writing table, the old man rises and shakes his hand across it without a word: a long, affectionate shake which tells the story of a recent sorrow common to both.
37 A ¶ concluding the handshake and cheering up.
38 D RAMSDEN: Well, well, Octavius, it's the common lot. We must all face it someday. Sit down.
39 A ¶ Octavius takes the visitor's chair.
40 A Ramsden replaces himself in his own.
41 D OCTAVIUS: Yes: we must face it, Mr Ramsden. But I owed him a great deal. He did everything for me that my father could have done if he had lived.
42 D RAMSDEN: He had no son of his own, you see.
43 D OCTAVIUS: But he had daughters; and yet he was as good to my sister as to me. And his death was so sudden! I always intended to thank him--to let him know that I had not taken all his care of me as a matter of course, as any boy takes his father's care. But I waited for an opportunity and now he is dead--dropped without a moment's warning. He will never know what I felt.
44 A ¶ He takes out his handkerchief and cries unaffectedly.
45 D RAMSDEN: How do we know that, Octavius? He may know it: we cannot tell. Come! Don't grieve.
46 A ¶ Octavius masters himself and puts up his handkerchief.
47 D RAMSDEN: That's right. Now let me tell you something to console you. The last time I saw him--it was in this very room--he said to me: "Tavy is a generous lad and the soul of honor; and when I see how little consideration other men get from their sons, I realize how much better than a son he's been to me." There! Doesn't that do you good?
48 D OCTAVIUS: Mr Ramsden: he used to say to me that he had met only one man in the world who was the soul of honor, and that was Roebuck Ramsden.
49 D RAMSDEN: Oh, that was his partiality: we were very old friends, you know. But there was something else he used to say about you. I wonder whether I ought to tell you or not!
50 D OCTAVIUS: You know best.
51 D RAMSDEN: It was something about his daughter.
52 A ¶ eagerly.
53 D OCTAVIUS: About Ann! Oh, do tell me that, Mr Ramsden.
54 D RAMSDEN: Well, he said he was glad, after all, you were not his son, because he thought that someday Annie and you--
55 A ¶ Octavius blushes vividly.
56 D RAMSDEN: Well, perhaps I shouldn't have told you. But he was in earnest.
57 D OCTAVIUS: Oh, if only I thought I had a chance! You know, Mr Ramsden, I don't care about money or about what people call position; and I can't bring myself to take an interest in the business of struggling for them. Well, Ann has a most exquisite nature; but she is so accustomed to be in the thick of that sort of thing that she thinks a man's character incomplete if he is not ambitious. She knows that if she married me she would have to reason herself out of being ashamed of me for not being a big success of some kind.
58 A ¶ Getting up and planting himself with his back to the fireplace.
59 D RAMSDEN: Nonsense, my boy, nonsense! You're too modest. What does she know about the real value of men at her age?
60 A ¶ More seriously.
61 D RAMSDEN: Besides, she's a wonderfully dutiful girl. Her father's wish would be sacred to her. Do you know that since she grew up to years of discretion, I don't believe she has ever once given her own wish as a reason for doing anything or not doing it. It's always "Father wishes me to," or "Mother wouldn't like it." It's really almost a fault in her. I have often told her she must learn to think for herself.
62 A ¶ shaking his head.
63 D OCTAVIUS: I couldn't ask her to marry me because her father wished it, Mr Ramsden.
64 D RAMSDEN: Well, perhaps not. No: of course not. I see that. No: you certainly couldn't. But when you win her on your own merits, it will be a great happiness to her to fulfil her father's desire as well as her own. Eh? Come! you'll ask her, won't you?
65 A ¶ with sad gaiety.
66 D OCTAVIUS: At all events I promise you I shall never ask anyone else.
67 D RAMSDEN: Oh, you shan't need to. She'll accept you, my boy--although
68 A ¶ here he suddenly becomes very serious indeed.
69 D RAMSDEN: you have one great drawback.
70 A ¶ anxiously.
71 D OCTAVIUS: What drawback is that, Mr Ramsden? I should rather say which of my many drawbacks?
72 D RAMSDEN: I'll tell you, Octavius.
73 A ¶ He takes from the table a book bound in red cloth.

### SCENE pt_superman_10 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANN, OCTAVIUS, MISS RAMSDEN, TANNER, VIOLET
1 D ANN: Hadn't you better go with her, Tavy?
2 D OCTAVIUS: She won't have me.
3 D MISS RAMSDEN: Of course she won't. She's going straight to that man.
4 D TANNER: As a natural result of her virtuous reception here.
5 A ¶ much troubled.
6 D RAMSDEN: There, Susan! You hear! and there's some truth in it. I wish you could reconcile it with your principles to be a little patient with this poor girl. She's very young; and there's a time for everything.
7 D MISS RAMSDEN: Oh, she will get all the sympathy she wants from the men. I'm surprised at you, Roebuck.
8 D TANNER: So am I, Ramsden, most favorably.
9 A ¶ Violet appears at the door.
10 A She is as impenitent and self-assured a young lady as one would desire to see among the best behaved of her sex.
11 A Her small head and tiny resolute mouth and chin; her haughty crispness of speech and trimness of carriage; the ruthless elegance of her equipment, which includes a very smart hat with a dead bird in it, mark a personality which is as formidable as it is exquisitely pretty.
12 A She is not a siren, like Ann: admiration comes to her without any compulsion or even interest on her part; besides, there is some fun in Ann, but in this woman none, perhaps no mercy either: if anything restrains her, it is intelligence and pride, not compassion.
13 A Her voice might be the voice of a schoolmistress addressing a class of girls who had disgraced themselves, as she proceeds with complete composure and some disgust to say what she has come to say.
14 D VIOLET: I have only looked in to tell Miss Ramsden that she will find her birthday present to me, the filagree bracelet, in the housekeeper's room.
15 D TANNER: Do come in, Violet, and talk to us sensibly.
16 D VIOLET: Thank you: I have had quite enough of the family conversation this morning. So has your mother, Ann: she has gone home crying. But at all events, I have found out what some of my pretended friends are worth. Good bye.
17 D TANNER: No, no: one moment. I have something to say which I beg you to hear.
18 A ¶ She looks at him without the slightest curiosity, but waits, apparently as much to finish getting her glove on as to hear what he has to say.
19 D TANNER: I am altogether on your side in this matter. I congratulate you, with the sincerest respect, on having the courage to do what you have done. You are entirely in the right; and the family is entirely in the wrong.
* 20 A ¶ Sensation.
21 A Ann and Miss Ramsden rise and turn toward the two.
22 A Violet, more surprised than any of the others, forgets her glove, and comes forward into the middle of the room, both puzzled and displeased.
23 A Octavius alone does not move or raise his head; he is overwhelmed with shame.
24 A ¶ pleading to Tanner to be sensible.
25 D ANN: Jack!
26 A ¶ outraged.
27 D MISS RAMSDEN: Well, I must say!
28 A ¶ sharply to Tanner.
29 D VIOLET: Who told you?
30 D TANNER: Why, Ramsden and Tavy of course. Why should they not?
31 D VIOLET: But they don't know.
32 D TANNER: Don't know what?
33 D VIOLET: They don't know that I am in the right, I mean.
34 D TANNER: Oh, they know it in their hearts, though they think themselves bound to blame you by their silly superstitions about morality and propriety and so forth. But I know, and the whole world really knows, though it dare not say so, that you were right to follow your instinct; that vitality and bravery are the greatest qualities a woman can have, and motherhood her solemn initiation into womanhood; and that the fact of your not being legally married matters not one scrap either to your own worth or to our real regard for you.
35 A ¶ flushing with indignation.
36 D VIOLET: Oh! You think me a wicked woman, like the rest. You think I have not only been vile, but that I share your abominable opinions. Miss Ramsden: I have borne your hard words because I knew you would be sorry for them when you found out the truth. But I won't bear such a horrible insult as to be complimented by Jack on being one of the wretches of whom he approves. I have kept my marriage a secret for my husband's sake. But now I claim my right as a married woman not to be insulted.
37 A ¶ raising his head with inexpressible relief.
38 D OCTAVIUS: You are married!
39 D VIOLET: Yes; and I think you might have guessed it. What business had you all to take it for granted that I had no right to wear my wedding ring? Not one of you even asked me: I cannot forget that.
40 A ¶ in ruins.
41 D TANNER: I am utterly crushed. I meant well--I apologize--abjectly apologize.
42 D VIOLET: I hope you will be more careful in future about the things you say. Of course one does not take them seriously. But they are very disagreeable, and rather in bad taste.
43 A ¶ bowing to the storm.
44 D TANNER: I have no defence: I shall know better in future than to take any woman's part. We have all disgraced ourselves in your eyes, I am afraid, except Ann, SHE befriended you. For Ann's sake, forgive us.
45 D VIOLET: Yes: Ann has been very kind; but then Ann knew.
46 D TANNER: Oh!
47 A ¶ stiffly.
48 D MISS RAMSDEN: And who, pray, is the gentleman who does not acknowledge his wife?
49 A ¶ promptly.
50 D VIOLET: That is my business, Miss Ramsden, and not yours. I have my reasons for keeping my marriage a secret for the present.
51 D RAMSDEN: All I can say is that we are extremely sorry, Violet. I am shocked to think of how we have treated you.
52 A ¶ awkwardly.

### SCENE pt_superman_11 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE LEGS, TANNER, THE CHAUFFEUR, OCTAVIUS, STRAKER
* 1 A ¶ On the carriage drive in the park of a country house near Richmond a motor car has broken down.
2 A It stands in front of a clump of trees round which the drive sweeps to the house, which is partly visible through them: indeed Tanner, standing in the drive with the car on his right hand, could get an unobstructed view of the west corner of the house on his left were he not far too much interested in a pair of supine legs in blue serge trousers which protrude from beneath the machine.
3 A He is watching them intently with bent back and hands supported on his knees.
4 A His leathern overcoat and peaked cap proclaim him one of the dismounted passengers.
5 D THE LEGS: Aha! I got him.
6 D TANNER: All right now?
7 D THE LEGS: All right now.
8 A ¶ Tanner stoops and takes the legs by the ankles, drawing their owner forth like a wheelbarrow, walking on his hands, with a hammer in his mouth.
9 A He is a young man in a neat suit of blue serge, clean shaven, dark eyed, square fingered, with short well brushed black hair and rather irregular sceptically turned eyebrows.
10 A When he is manipulating the car his movements are swift and sudden, yet attentive and deliberate.
11 A With Tanner and Tanner's friends his manner is not in the least deferential, but cool and reticent, keeping them quite effectually at a distance whilst giving them no excuse for complaining of him.
12 A Nevertheless he has a vigilant eye on them always, and that, too, rather cynically, like a man who knows the world well from its seamy side.
13 A He speaks slowly and with a touch of sarcasm; and as he does not at all affect the gentleman in his speech, it may be inferred that his smart appearance is a mark of respect to himself and his own class, not to that which employs him.
14 A ¶ He now gets into the car to test his machinery and put his cap and overcoat on again.
15 A Tanner takes off his leather overcoat and pitches it into the car.
16 A The chauffeur (or automobilist or motoreer or whatever England may presently decide to call him) looks round inquiringly in the act of stowing away his hammer.
17 D THE CHAUFFEUR: Had enough of it, eh?
18 D TANNER: I may as well walk to the house and stretch my legs and calm my nerves a little.
19 A ¶ Looking at his watch.
20 D TANNER: I suppose you know that we have come from Hyde Park Corner to Richmond in twenty-one minutes.
21 D THE CHAUFFEUR: I'd have done it under fifteen if I'd had a clear road all the way.
22 D TANNER: Why do you do it? Is it for love of sport or for the fun of terrifying your unfortunate employer?
23 D THE CHAUFFEUR: What are you afraid of?
24 D TANNER: The police, and breaking my neck.
25 D THE CHAUFFEUR: Well, if you like easy going, you can take a bus, you know. It's cheaper. You pay me to save your time and give you the value of your thousand pound car.
26 A ¶ He sits down calmly.
27 D TANNER: I am the slave of that car and of you too. I dream of the accursed thing at night.
28 D THE CHAUFFEUR: You'll get over that. If you're going up to the house, may I ask how long you're goin to stay there? Because if you mean to put in the whole morning talkin to the ladies, I'll put the car in the stables and make myself comfortable. If not, I'll keep the car on the go about here til you come.
29 D TANNER: Better wait here. We shan't be long. There's a young American gentleman, a Mr Malone, who is driving Mr Robinson down in his new American steam car.
30 A ¶ springing up and coming hastily out of the car to Tanner.
31 D THE CHAUFFEUR: American steam car! Wot! racin us down from London!
32 D TANNER: Perhaps they're here already.
33 D THE CHAUFFEUR: If I'd known it!
34 A ¶ with deep reproach.
35 D THE CHAUFFEUR: Why didn't you tell me, Mr Tanner?
36 D TANNER: Because I've been told that this car is capable of 84 miles an hour; and I already know what YOU are capable of when there is a rival car on the road. No, Henry: there are things it is not good for you to know; and this was one of them. However, cheer up: we are going to have a day after your own heart. The American is to take Mr Robinson and his sister and Miss Whitefield. We are to take Miss Rhoda.
37 A ¶ consoled, and musing on another matter.
38 D THE CHAUFFEUR: That's Miss Whitefield's sister, isn't it?
39 D TANNER: Yes.
40 D THE CHAUFFEUR: And Miss Whitefield herself is goin in the other car? Not with you?
41 D TANNER: Why the devil should she come with me? Mr Robinson will be in the other car.
42 A ¶ The Chauffeur looks at Tanner with cool incredulity, and turns to the car, whistling a popular air softly to himself.
43 A Tanner, a little annoyed, is about to pursue the subject when he hears the footsteps of Octavius on the gravel.
44 A Octavius is coming from the house, dressed for motoring, but without his overcoat.
45 D TANNER: We've lost the race, thank Heaven: here's Mr Robinson. Well, Tavy, is the steam car a success?
46 D OCTAVIUS: I think so. We came from Hyde Park Corner here in seventeen minutes.
47 A ¶ The Chauffeur, furious, kicks the car with a groan of vexation.
48 D OCTAVIUS: How long were you?
49 D TANNER: Oh, about three quarters of an hour or so.
50 A ¶ remonstrating.
51 D THE CHAUFFEUR: Now, now, Mr Tanner, come now! We could ha done it easy under fifteen.
52 D TANNER: By the way, let me introduce you. Mr Octavius Robinson: Mr Enry Straker.
53 D STRAKER: Pleased to meet you, sir. Mr Tanner is gittin at you with his Enry Straker, you know. You call it Henery. But I don't mind, bless you.
54 D TANNER: You think it's simply bad taste in me to chaff him, Tavy. But you're wrong. This man takes more trouble to drop his aiches than ever his father did to pick them up. It's a mark of caste to him. I have never met anybody more swollen with the pride of class than Enry is.
55 D STRAKER: Easy, easy! A little moderation, Mr Tanner.
56 D TANNER: A little moderation, Tavy, you observe. You would tell me to draw it mild, But this chap has been educated. What's more, he knows that we haven't. What was that board school of yours, Straker?
57 D STRAKER: Sherbrooke Road.

### SCENE pt_superman_14 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANN, TANNER, RAMSDEN, MRS WHITEFIELD, HECTOR, OCTAVIUS
1 D ANN: You talk so well.
2 D TANNER: Talk! Talk! It means nothing to you but talk. Well, go back to your mother, and help her to poison Rhoda's imagination as she has poisoned yours. It is the tame elephants who enjoy capturing the wild ones.
3 D ANN: I am getting on. Yesterday I was a boa constrictor: to-day I am an elephant.
4 D TANNER: Yes. So pack your trunk and begone; I have no more to say to you.
5 D ANN: You are so utterly unreasonable and impracticable. What can I do?
6 D TANNER: Do! Break your chains. Go your way according to your own conscience and not according to your mother's. Get your mind clean and vigorous; and learn to enjoy a fast ride in a motor car instead of seeing nothing in it but an excuse for a detestable intrigue. Come with me to Marseilles and across to Algiers and to Biskra, at sixty miles an hour. Come right down to the Cape if you like. That will be a Declaration of Independence with a vengeance. You can write a book about it afterwards. That will finish your mother and make a woman of you.
7 A ¶ thoughtfully.
8 D ANN: I don't think there would be any harm in that, Jack. You are my guardian: you stand in my father's place, by his own wish. Nobody could say a word against our travelling together. It would be delightful: thank you a thousand times, Jack. I'll come.
9 A ¶ aghast.
10 D TANNER: You'll come!!!
11 D ANN: Of course.
12 D TANNER: But--
13 A ¶ he stops, utterly appalled; then resumes feebly.
14 D TANNER: No: look here, Ann: if there's no harm in it there's no point in doing it.
15 D ANN: How absurd you are! You don't want to compromise me, do you?
16 D TANNER: Yes: that's the whole sense of my proposal.
17 D ANN: You are talking the greatest nonsense; and you know it. You would never do anything to hurt me.
18 D TANNER: Well, if you don't want to be compromised, don't come.
19 A ¶ with simple earnestness.
20 D ANN: Yes, I will come, Jack, since you wish it. You are my guardian; and think we ought to see more of one another and come to know one another better.
21 A ¶ Gratefully.
22 D ANN: It's very thoughtful and very kind of you, Jack, to offer me this lovely holiday, especially after what I said about Rhoda. You really are good--much better than you think. When do we start?
23 D TANNER: But--
24 A ¶ The conversation is interrupted by the arrival of Mrs Whitefield from the house.
25 A She is accompanied by the American gentleman, and followed by Ramsden and Octavius.
26 A ¶ Hector Malone is an Eastern American; but he is not at all ashamed of his nationality.
27 A This makes English people of fashion think well of him, as of a young fellow who is manly enough to confess to an obvious disadvantage without any attempt to conceal or extenuate it.
28 A They feel that he ought not to be made to suffer for what is clearly not his fault, and make a point of being specially kind to him.
29 A His chivalrous manners to women, and his elevated moral sentiments, being both gratuitous and unusual, strike them as being a little unfortunate; and though they find his vein of easy humor rather amusing when it has ceased to puzzle them (as it does at first), they have had to make him understand that he really must not tell anecdotes unless they are strictly personal and scandalous, and also that oratory is an accomplishment which belongs to a cruder stage of civilization than that in which his migration has landed him.
30 A On these points Hector is not quite convinced: he still thinks that the British are apt to make merits of their stupidities, and to represent their various incapacities as points of good breeding.
31 A English life seems to him to suffer from a lack of edifying rhetoric (which he calls moral tone); English behavior to show a want of respect for womanhood; English pronunciation to fail very vulgarly in tackling such words as world, girl, bird, etc.; English society to be plain spoken to an extent which stretches occasionally to intolerable coarseness; and English intercourse to need enlivening by games and stories and other pastimes; so he does not feel called upon to acquire these defects after taking great paths to cultivate himself in a first rate manner before venturing across the Atlantic.
32 A To this culture he finds English people either totally indifferent as they very commonly are to all culture, or else politely evasive, the truth being that Hector's culture is nothing but a state of saturation with our literary exports of thirty years ago, reimported by him to be unpacked at a moment's notice and hurled at the head of English literature, science and art, at every conversational opportunity.
33 A The dismay set up by these sallies encourages him in his belief that he is helping to educate England.
34 A When he finds people chattering harmlessly about Anatole France and Nietzsche, he devastates them with Matthew Arnold, the Autocrat of the Breakfast Table, and even Macaulay; and as he is devoutly religious at bottom, he first leads the unwary, by humorous irreverences, to wave popular theology out of account in discussing moral questions with him, and then scatters them in confusion by demanding whether the carrying out of his ideals of conduct was not the manifest object of God Almighty in creating honest men and pure women.
35 A The engaging freshness of his personality and the dumbfoundering staleness of his culture make it extremely difficult to decide whether he is worth knowing; for whilst his company is undeniably pleasant and enlivening, there is intellectually nothing new to be got out of him, especially as he despises politics, and is careful not to talk commercial shop, in which department he is probably much in advance of his English capitalist friends.
36 A He gets on best with romantic Christians of the amoristic sect: hence the friendship which has sprung up between him and Octavius.
37 A ¶ In appearance Hector is a neatly built young man of twenty-four, with a short, smartly trimmed black beard, clear, well shaped eyes, and an ingratiating vivacity of expression.
38 A He is, from the fashionable point of view, faultlessly dressed.
39 A As he comes along the drive from the house with Mrs Whitefield he is sedulously making himself agreeable and entertaining, and thereby placing on her slender wit a burden it is unable to bear.
40 A An Englishman would let her alone, accepting boredom and indifference of their common lot; and the poor lady wants to be either let alone or let prattle about the things that interest her.
41 A ¶ Ramsden strolls over to inspect the motor car.
42 A Octavius joins Hector.
43 A ¶ pouncing on her mother joyously.
44 D ANN: Oh, mamma, what do you think! Jack is going to take me to Nice in his motor car. Isn't it lovely? I am the happiest person in London.
45 A ¶ desperately.
46 D TANNER: Mrs Whitefield objects. I am sure she objects. Doesn't she, Ramsden?
47 D RAMSDEN: I should think it very likely indeed.
48 D ANN: You don't object, do you, mother?
49 D MRS WHITEFIELD: I object! Why should I? I think it will do you good, Ann.
50 A ¶ Trotting over to Tanner.
51 D MRS WHITEFIELD: I meant to ask you to take Rhoda out for a run occasionally: she is too much in the house; but it will do when you come back.
52 D TANNER: Abyss beneath abyss of perfidy!
53 A ¶ hastily, to distract attention from this outburst.
54 D ANN: Oh, I forgot: you have not met Mr Malone. Mr Tanner, my guardian: Mr Hector Malone.
55 D HECTOR: Pleased to meet you, Mr Tanner. I should like to suggest an extension of the travelling party to Nice, if I may.
56 D ANN: Oh, we're all coming. That's understood, isn't it?
57 D HECTOR: I also am the modest possessor of a motor car. If Miss Robinson will allow me the privilege of taking her, my car is at her service.
58 D OCTAVIUS: Violet!
* 59 A ¶ General constraint.
60 A ¶ subduedly.

### SCENE pt_superman_17 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): STRAKER, TANNER, THE CHIEF, THE ANARCHIST, MENDOZA, THE MAJORITY, THE ROWDY SOCIAL-DEMOCRAT
1 A ¶ rising to the height of his destiny.
2 D STRAKER: D'y'mean it?
3 D TANNER: I do.
4 D STRAKER: When?
5 D TANNER: Now. Is that machine ready to start?
6 A ¶ quailing.
7 D STRAKER: But you can't--
8 A ¶ cutting him short by getting into the car.
9 D TANNER: Off we go. First to the bank for money; then to my rooms for my kit; then to your rooms for your kit; then break the record from London to Dover or Folkestone; then across the channel and away like mad to Marseilles, Gibraltar, Genoa, any port from which we can sail to a Mahometan country where men are protected from women.
10 D STRAKER: Garn! you're kiddin.
11 A ¶ resolutely.
12 D TANNER: Stay behind then. If you won't come I'll do it alone.
13 A ¶ He starts the motor.
14 A ¶ running after him.
15 D STRAKER: Here! Mister! arf a mo! steady on!
16 A ¶ he scrambles in as the car plunges forward.
* 17 A ¶ Evening in the Sierra Nevada.
* 18 A Rolling slopes of brown, with olive trees instead of apple trees in the cultivated patches, and occasional prickly pears instead of gorse and bracken in the wilds.
* 19 A Higher up, tall stone peaks and precipices, all handsome and distinguished.
* 20 A No wild nature here: rather a most aristocratic mountain landscape made by a fastidious artist-creator.
* 21 A No vulgar profusion of vegetation: even a touch of aridity in the frequent patches of stones: Spanish magnificence and Spanish economy everywhere.
* 22 A ¶ Not very far north of a spot at which the high road over one of the passes crosses a tunnel on the railway from Malaga to Granada, is one of the mountain amphitheatres of the Sierra.
* 23 A Looking at it from the wide end of the horse-shoe, one sees, a little to the right, in the face of the cliff, a romantic cave which is really an abandoned quarry, and towards the left a little hill, commanding a view of the road, which skirts the amphitheatre on the left, maintaining its higher level on embankments and on an occasional stone arch.
24 A On the hill, watching the road, is a man who is either a Spaniard or a Scotchman.
25 A Probably a Spaniard, since he wears the dress of a Spanish goatherd and seems at home in the Sierra Nevada, but very like a Scotchman for all that.
26 A In the hollow, on the slope leading to the quarry-cave, are about a dozen men who, as they recline at their cave round a heap of smouldering white ashes of dead leaf and brushwood, have an air of being conscious of themselves as picturesque scoundrels honoring the Sierra by using it as an effective pictorial background.
27 A As a matter of artistic fact they are not picturesque; and the mountains tolerate them as lions tolerate lice.
28 A An English policeman or Poor Law Guardian would recognize them as a selected band of tramps and ablebodied paupers.
* 29 A ¶ This description of them is not wholly contemptuous.
* 30 A Whoever has intelligently observed the tramp, or visited the ablebodied ward of a workhouse, will admit that our social failures are not all drunkards and weaklings.
31 A Some of them are men who do not fit the class they were born into.
* 32 A Precisely the same qualities that make the educated gentleman an artist may make an uneducated manual laborer an ablebodied pauper.
* 33 A There are men who fall helplessly into the workhouse because they are good for nothing; but there are also men who are there because they are strongminded enough to disregard the social convention (obviously not a disinterested one on the part of the ratepayer) which bids a man live by heavy and badly paid drudgery when he has the alternative of walking into the workhouse, announcing himself as a destitute person, and legally compelling the Guardians to feed, clothe and house him better than he could feed, clothe and house himself without great exertion.
* 34 A When a man who is born a poet refuses a stool in a stockbroker's office, and starves in a garret, spunging on a poor landlady or on his friends and relatives rather than work against his grain; or when a lady, because she is a lady, will face any extremity of parasitic dependence rather than take a situation as cook or parlormaid, we make large allowances for them.
* 35 A To such allowances the ablebodied pauper and his nomadic variant the tramp are equally entitled.
* 36 A ¶ Further, the imaginative man, if his life is to be tolerable to him, must have leisure to tell himself stories, and a position which lends itself to imaginative decoration.
* 37 A The ranks of unskilled labor offer no such positions.
* 38 A We misuse our laborers horribly; and when a man refuses to be misused, we have no right to say that he is refusing honest work.
* 39 A Let us be frank in this matter before we go on with our play; so that we may enjoy it without hypocrisy.
* 40 A If we were reasoning, farsighted people, four fifths of us would go straight to the Guardians for relief, and knock the whole social system to pieces with most beneficial reconstructive results.
* 41 A The reason we do got do this is because we work like bees or ants, by instinct or habit, not reasoning about the matter at all.
* 42 A Therefore when a man comes along who can and does reason, and who, applying the Kantian test to his conduct, can truly say to us, If everybody did as I do, the world would be compelled to reform itself industrially, and abolish slavery and squalor, which exist only because everybody does as you do, let us honor that man and seriously consider the advisability of following his example.
* 43 A Such a man is the able-bodied, able-minded pauper.
* 44 A Were he a gentleman doing his best to get a pension or a sinecure instead of sweeping a crossing, nobody would blame him; for deciding that so long as the alternative lies between living mainly at the expense of the community and allowing the community to live mainly at his, it would be folly to accept what is to him personally the greater of the two evils.
* 45 A ¶ We may therefore contemplate the tramps of the Sierra without prejudice, admitting cheerfully that our objects--briefly, to be gentlemen of fortune--are much the same as theirs, and the difference in our position and methods merely accidental.
* 46 A One or two of them, perhaps, it would be wiser to kill without malice in a friendly and frank manner; for there are bipeds, just as there are quadrupeds, who are too dangerous to be left unchained and unmuzzled; and these cannot fairly expect to have other men's lives wasted in the work of watching them.
* 47 A But as society has not the courage to kill them, and, when it catches them, simply wreaks on them some superstitious expiatory rites of torture and degradation, and than lets them loose with heightened qualifications for mischief, it is just as well that they are at large in the Sierra, and in the hands of a chief who looks as if he might possibly, on provocation, order them to be shot.
48 A ¶ This chief, seated in the centre of the group on a squared block of stone from the quarry, is a tall strong man, with a striking cockatoo nose, glossy black hair, pointed beard, upturned moustache, and a Mephistophelean affectation which is fairly imposing, perhaps because the scenery admits of a larger swagger than Piccadilly, perhaps because of a certain sentimentality in the man which gives him that touch of grace which alone can excuse deliberate picturesqueness.
49 A His eyes and mouth are by no means rascally; he has a fine voice and a ready wit; and whether he is really the strongest man in the party, or not, he looks it.
50 A He is certainly, the best fed, the best dressed, and the best trained.
* 51 A The fact that he speaks English is not unexpected in spite of the Spanish landscape; for with the exception of one man who might be guessed as a bullfighter ruined by drink and one unmistakable Frenchman, they are all cockney or American; therefore, in a land of cloaks and sombreros, they mostly wear seedy overcoats, woollen mufflers, hard hemispherical hats, and dirty brown gloves.
52 A Only a very few dress after their leader, whose broad sombrero with a cock's feather in the band, and voluminous cloak descending to his high boots, are as un-English as possible.
53 A None of them are armed; and the ungloved ones keep their hands in their pockets because it is their national belief that it must be dangerously cold in the open air with the night coming on.
* 54 A (It is as warm an evening as any reasonable man could desire).
* 55 A ¶ Except the bullfighting inebriate there is only one person in the company who looks more than, say, thirty-three.
56 A He is a small man with reddish whiskers, weak eyes, and the anxious look of a small tradesman in difficulties.
57 A He wears the only tall hat visible: it shines in the sunset with the sticky glow of some sixpenny patent hat reviver, often applied and constantly tending to produce a worse state of the original surface than the ruin it was applied to remedy.
58 A He has a collar and cuff of celluloid; and his brown Chesterfield overcoat, with velvet collar, is still presentable.
59 A He is pre-eminently the respectable man of the party, and is certainly over forty, possibly over fifty.
60 A He is the corner man on the leader's right, opposite three men in scarlet ties on his left.
61 A One of these three is the Frenchman.
62 A Of the remaining two, who are both English, one is argumentative, solemn, and obstinate; the other rowdy and mischievous.
63 A ¶ The chief, with a magnificent fling of the end of his cloak across his left shoulder, rises to address them.
64 A The applause which greets him shows that he is a favorite orator.
65 D THE CHIEF: Friends and fellow brigands. I have a proposal to make to this meeting. We have now spent three evenings in discussing the question Have Anarchists or Social-Democrats the most personal courage? We have gone into the principles of Anarchism and Social-Democracy at great length. The cause of Anarchy has been ably represented by our one Anarchist, who doesn't know what Anarchism means
66 A ¶ laughter.
67 D THE CHIEF: --
68 A ¶ rising.
69 D THE ANARCHIST: A point of order, Mendoza--
70 A ¶ forcibly.
71 D MENDOZA: No, by thunder: your last point of order took half an hour. Besides, Anarchists don't believe in order.
72 A ¶ mild, polite but persistent: he is, in fact, the respectable looking elderly man in the celluloid collar and cuffs.
73 D THE ANARCHIST: That is a vulgar error. I can prove--
74 D MENDOZA: Order, order.
75 A ¶ THE OTHERS [shouting] Order, order.
76 A Sit down.
77 A Chair!
78 A Shut up.
79 A ¶ The Anarchist is suppressed.
80 D MENDOZA: On the other hand we have three Social-Democrats among us. They are not on speaking terms; and they have put before us three distinct and incompatible views of Social-Democracy.
81 A ¶ shouting assent.
82 D THE MAJORITY: Hear, hear! So we are. Right.
83 A ¶ smarting under oppression.
84 D THE ROWDY SOCIAL-DEMOCRAT: You ain't no Christian. You're a Sheeny, you are.
85 A ¶ with crushing magnanimity.
86 D MENDOZA: My friend; I am an exception to all rules. It is true that I have the honor to be a Jew; and, when the Zionists need a leader to reassemble our race on its historic soil of Palestine, Mendoza will not be the last to volunteer
87 A ¶ sympathetic applause--hear, hear, etc.
88 D MENDOZA: But I am not a slave to any superstition. I have swallowed all the formulas, even that of Socialism; though, in a sense, once a Socialist, always a Socialist.

### SCENE pt_superman_2 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): TANNER, RAMSDEN, OCTAVIUS
1 D TANNER: You won't get it, my boy, if Ramsden upsets the will.
2 D RAMSDEN: Ha! I see. You have got me in a cleft stick.
3 D TANNER: He leaves me nothing but the charge of Ann's morals, on the ground that I have already more money than is good for me. That shows that he had his wits about him, doesn't it?
4 A ¶ grimly.
5 D RAMSDEN: I admit that.
6 A ¶ rising and coming from his refuge by the wall.
7 D OCTAVIUS: Mr Ramsden: I think you are prejudiced against Jack. He is a man of honor, and incapable of abusing--
8 D TANNER: Don't, Tavy: you'll make me ill. I am not a man of honor: I am a man struck down by a dead hand. Tavy: you must marry her after all and take her off my hands. And I had set my heart on saving you from her!
9 D OCTAVIUS: Oh, Jack, you talk of saving me from my highest happiness.
10 D TANNER: Yes, a lifetime of happiness. If it were only the first half hour's happiness, Tavy, I would buy it for you with my last penny. But a lifetime of happiness! No man alive could bear it: it would be hell on earth.
11 A ¶ violently.
12 D RAMSDEN: Stuff, sir. Talk sense; or else go and waste someone else's time: I have something better to do than listen to your fooleries
13 A ¶ he positively kicks his way to his table and resumes his seat.
14 D TANNER: You hear him, Tavy! Not an idea in his head later than eighteen-sixty. We can't leave Ann with no other guardian to turn to.
15 D RAMSDEN: I am proud of your contempt for my character and opinions, sir. Your own are set forth in that book, I believe.
16 A ¶ eagerly going to the table.
17 D TANNER: What! You've got my book! What do you think of it?
18 D RAMSDEN: Do you suppose I would read such a book, sir?
19 D TANNER: Then why did you buy it?
20 D RAMSDEN: I did not buy it, sir. It has been sent me by some foolish lady who seems to admire your views. I was about to dispose of it when Octavius interrupted me. I shall do so now, with your permission.
21 A ¶ He throws the book into the waste paper basket with such vehemence that Tanner recoils under the impression that it is being thrown at his head.
22 D TANNER: You have no more manners than I have myself. However, that saves ceremony between us.
23 A ¶ He sits down again.
24 D TANNER: What do you intend to do about this will?
25 D OCTAVIUS: May I make a suggestion?
26 D RAMSDEN: Certainly, Octavius.
27 D OCTAVIUS: Aren't we forgetting that Ann herself may have some wishes in this matter?
28 D RAMSDEN: I quite intend that Annie's wishes shall be consulted in every reasonable way. But she is only a woman, and a young and inexperienced woman at that.
29 D TANNER: Ramsden: I begin to pity you.
* 30 A ¶ hotly.
31 D RAMSDEN: I don't want to know how you feel towards me, Mr Tanner.
32 D TANNER: Ann will do just exactly what she likes. And what's more, she'll force us to advise her to do it; and she'll put the blame on us if it turns out badly. So, as Tavy is longing to see her--
33 A ¶ shyly.
34 D OCTAVIUS: I am not, Jack.
35 D TANNER: You lie, Tavy: you are. So let's have her down from the drawing-room and ask her what she intends us to do. Off with you, Tavy, and fetch her.
36 A ¶ Tavy turns to go.
37 D TANNER: And don't be long for the strained relations between myself and Ramsden will make the interval rather painful
38 A ¶ Ramsden compresses his lips, but says nothing--.
39 D OCTAVIUS: Never mind him, Mr Ramsden. He's not serious.
40 A ¶ He goes out.
* 41 A ¶ RAMSDEN [very deliberately] Mr Tanner: you are the most impudent person I have ever met.
42 A ¶ seriously.
43 D TANNER: I know it, Ramsden. Yet even I cannot wholly conquer shame. We live in an atmosphere of shame. We are ashamed of everything that is real about us; ashamed of ourselves, of our relatives, of our incomes, of our accents, of our opinions, of our experience, just as we are ashamed of our naked skins. Good Lord, my dear Ramsden, we are ashamed to walk, ashamed to ride in an omnibus, ashamed to hire a hansom instead of keeping a carriage, ashamed of keeping one horse instead of two and a groom-gardener instead of a coachman and footman. The more things a man is ashamed of, the more respectable he is. Why, you're ashamed to buy my book, ashamed to read it: the only thing you're not ashamed of is to judge me for it without having read it; and even that only means that you're ashamed to have heterodox opinions. Look at the effect I produce because my fairy godmother withheld from me this gift of shame. I have every possible virtue that a man can have except--
44 D RAMSDEN: I am glad you think so well of yourself.
45 D TANNER: All you mean by that is that you think I ought to be ashamed of talking about my virtues. You don't mean that I haven't got them: you know perfectly well that I am as sober and honest a citizen as yourself, as truthful personally, and much more truthful politically and morally.
