import {MigrationInterface, QueryRunner} from "typeorm";

export class MovieMigration21611495204088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,217.13,67,'',false,'Les chevaliers du fiel dynamitent 2019','https://image.tmdb.org/t/p/w300/oh6AZL0nnQdnz8bazoDzTAVVHfB.jpg','[]','',4.9,4);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,211.619,22,'A lone scientist in the Arctic races to contact a crew of astronauts returning home to a mysterious global catastrophe.',false,'The Midnight Sky','https://image.tmdb.org/t/p/w300/gUQoXmTXz530YUs5QTQ1fqmuGLV.jpg','[{\"id\":18\,\"name\":\"Drama\"}\,{\"id\":878\,\"name\":\"Science Fiction\"}]','2020-12-10',5.9,966);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,209.045,79,'David Cuevas is a family man who works as a gangland tax collector for high ranking Los Angeles gang members. He makes collections across the city with his partner Creeper making sure people pay up or will see retaliation. An old threat returns to Los Angeles that puts everything David loves in harm’s way.',false,'The Tax Collector','https://image.tmdb.org/t/p/w300/3eg0kGC2Xh0vhydJHO37Sp4cmMt.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":80\,\"name\":\"Crime\"}\,{\"id\":18\,\"name\":\"Drama\"}]','2020-08-07',5.8,227);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,206.129,62,'A tale of horror and fantasy\, ripe with suspense\, and an urgent metaphor of Guatemalan recent history and its unhealed political wounds.',false,'La Llorona','https://image.tmdb.org/t/p/w300/yVsINl4Aa9vvQ9lE2LF77qNj7AP.jpg','[{\"id\":53\,\"name\":\"Thriller\"}\,{\"id\":27\,\"name\":\"Horror\"}\,{\"id\":18\,\"name\":\"Drama\"}]','2020-01-22',6.1,119);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,205.254,29,'When Santa crash-lands in the junkyard on Christmas Eve\, Hank\, Trash Truck and their animal friends all have a hand in rescuing the holiday for everyone.',false,'A Trash Truck Christmas','https://image.tmdb.org/t/p/w300/2kWVSZfK9gbbNQD93Qwi8VvYjlB.jpg','[{\"id\":16\,\"name\":\"Animation\"}\,{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":10751\,\"name\":\"Family\"}]','2020-12-11',6.2,24);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,204.668,48,'Boruto is the son of the 7th Hokage Naruto who completely rejects his father. Behind this\, he has feelings of wanting to surpass Naruto\, who is respected as a hero. He ends up meeting his father''s friend Sasuke\, and requests to become... his apprentice!? The curtain on the story of the new generation written by Masashi Kishimoto rises!',false,'BORUTO -NARUTO THE MOVIE-','https://image.tmdb.org/t/p/w300/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":35\,\"name\":\"Comedy\"}\,{\"id\":16\,\"name\":\"Animation\"}]','2015-08-07',7.7,679);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,203.468,51,'A young and unskilled fairy godmother that ventures out on her own to prove her worth by tracking down a young girl whose request for help was ignored. What she discovers is that the girl has now become a grown woman in need of something very different than a \"prince charming.\"',false,'Godmothered','https://image.tmdb.org/t/p/w300/80tDCErk6ymHS7YfvqJcbnnTtqa.jpg','[{\"id\":10751\,\"name\":\"Family\"}\,{\"id\":14\,\"name\":\"Fantasy\"}\,{\"id\":35\,\"name\":\"Comedy\"}]','2020-12-04',7.1,296);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,203.014,7,'Phineas and Ferb travel across the galaxy to rescue their older sister Candace\, who has been abducted by aliens and taken to a utopia in a far-off planet\, free of her pesky little brothers.',false,'Phineas and Ferb The Movie: Candace Against the Universe','https://image.tmdb.org/t/p/w300/n6hptKS7Y0ZjkYwbqKOK3jz9XAC.jpg','[{\"id\":16\,\"name\":\"Animation\"}\,{\"id\":878\,\"name\":\"Science Fiction\"}\,{\"id\":35\,\"name\":\"Comedy\"}\,{\"id\":10402\,\"name\":\"Music\"}\,{\"id\":10751\,\"name\":\"Family\"}\,{\"id\":12\,\"name\":\"Adventure\"}]','2020-08-28',7.6,198);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,201.92,92,'Columbus\, Tallahassee\, Wichita\, and Little Rock move to the American heartland as they face off against evolved zombies\, fellow survivors\, and the growing pains of the snarky makeshift family.',false,'Zombieland: Double Tap','https://image.tmdb.org/t/p/w300/dtRbVsUb5O12WWO54SRpiMtHKC0.jpg','[{\"id\":27\,\"name\":\"Horror\"}\,{\"id\":28\,\"name\":\"Action\"}\,{\"id\":35\,\"name\":\"Comedy\"}]','2019-10-09',7,3299);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,193.193,22,'It is not strange that the Demon Lord''s forces fear the Crimson Demons\, the clan from which Megumin and Yunyun originate. Even if the Demon Lord''s generals attack their village\, the Crimson Demons can just easily brush them off with their supreme mastery of advanced and overpowered magic.  When Yunyun receives a seemingly serious letter regarding a potential disaster coming to her hometown\, she immediately informs Kazuma Satou and the rest of his party. After a series of wacky misunderstandings\, it turns out to be a mere prank by her fellow demon who wants to be an author. Even so\, Megumin becomes worried about her family and sets out toward the Crimson Demons'' village with the gang.  There\, Kazuma and the others decide to sightsee the wonders of Megumin''s birthplace. However\, they soon come to realize that the nonsense threat they received might have been more than just a joke.',false,'この素晴らしい世界に祝福を！紅伝説','https://image.tmdb.org/t/p/w300/j73LuQcA21KvkVFcroWWMN8tTJv.jpg','[{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":35\,\"name\":\"Comedy\"}\,{\"id\":16\,\"name\":\"Animation\"}\,{\"id\":14\,\"name\":\"Fantasy\"}]','2019-08-30',8.5,210);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,192.73,56,'Tessa Young is a dedicated student\, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college\, Tessa''s guarded world opens up when she meets Hardin Scott\, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life.',false,'After','https://image.tmdb.org/t/p/w300/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg','[{\"id\":10749\,\"name\":\"Romance\"}\,{\"id\":18\,\"name\":\"Drama\"}]','2019-04-11',7.1,5698);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,192.613,57,'A group of high-school kids set out to play a Halloween prank at an abandoned house\, but once they enter they become victims of a demonic witch who has set her wrath upon them.',false,'House of the Witch','https://image.tmdb.org/t/p/w300/cg6xjZOnGsYYqC7SH3o8oJV9Vr1.jpg','[{\"id\":27\,\"name\":\"Horror\"}]','2017-10-07',4.5,82);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,192.607,98,'American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference\, the laws of physics\, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.',false,'Ford v Ferrari','https://image.tmdb.org/t/p/w300/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg','[{\"id\":36\,\"name\":\"History\"}\,{\"id\":18\,\"name\":\"Drama\"}]','2019-11-13',8,4147);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,190.161,87,'Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters\, including the mighty Godzilla\, who collides with Mothra\, Rodan\, and his ultimate nemesis\, the three-headed King Ghidorah. When these ancient super-species\, thought to be mere myths\, rise again\, they all vie for supremacy\, leaving humanity''s very existence hanging in the balance.',false,'Godzilla: King of the Monsters','https://image.tmdb.org/t/p/w300/mzOHg7Q5q9yUmY0b9Esu8Qe6Nnm.jpg','[{\"id\":878\,\"name\":\"Science Fiction\"}\,{\"id\":28\,\"name\":\"Action\"}]','2019-05-29',6.5,3285);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,185.157,35,'Neighbors in a block wake one morning to find they have been sealed inside their apartments. Can they work together to find out why? Or will they destroy each other in their fight to escape?',false,'Containment','https://image.tmdb.org/t/p/w300/jMyudM6LM9VfIsR8ZRghlSpAdfv.jpg','[{\"id\":27\,\"name\":\"Horror\"}\,{\"id\":878\,\"name\":\"Science Fiction\"}\,{\"id\":53\,\"name\":\"Thriller\"}]','2015-07-09',5.3,71);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,183.378,81,'Two years after the events of the Fourth Great Ninja War\, the moon that Hagoromo Otsutsuki created long ago to seal away the Gedo Statue begins to descend towards the world\, threatening to become a meteor that would destroy everything on impact. Amidst this crisis\, a direct descendant of Kaguya Otsutsuki named Toneri Otsutsuki attempts to kidnap Hinata Hyuga but ends up abducting her younger sister Hanabi. Naruto and his allies now mount a rescue mission before finding themselves embroiled in a final battle to decide the fate of everything.',false,'The Last: Naruto the Movie','https://image.tmdb.org/t/p/w300/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":10749\,\"name\":\"Romance\"}\,{\"id\":16\,\"name\":\"Animation\"}]','2014-12-06',7.8,830);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,182.025,30,'Decades after Sarah Connor prevented Judgment Day\, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind\, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.',false,'Terminator: Dark Fate','https://image.tmdb.org/t/p/w300/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":878\,\"name\":\"Science Fiction\"}]','2019-10-23',6.6,3184);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,180.33,64,'After a group of teens from a small Midwestern town begin to mysteriously disappear\, the locals believe it is the work of an urban legend known as The Empty Man. As a retired cop investigates and struggles to make sense of the stories\, he discovers a horrific secret that puts his life—and the lives of those close to him—in grave danger.',false,'The Empty Man','https://image.tmdb.org/t/p/w300/ukUS2Qh4SxrwYdSk0fvDsI61dqB.jpg','[{\"id\":80\,\"name\":\"Crime\"}\,{\"id\":18\,\"name\":\"Drama\"}\,{\"id\":27\,\"name\":\"Horror\"}]','2020-10-22',6.7,53);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,176.66,2,'A boy is given the ability to become an adult superhero in times of need with a single magic word.',false,'Shazam!','https://image.tmdb.org/t/p/w300/xnopI5Xtky18MPhK40cZAGAOVeV.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":35\,\"name\":\"Comedy\"}\,{\"id\":14\,\"name\":\"Fantasy\"}]','2019-03-29',7.1,6017);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,174.157,13,'All unemployed\, Ki-taek''s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.',false,'기생충','https://image.tmdb.org/t/p/w300/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg','[{\"id\":35\,\"name\":\"Comedy\"}\,{\"id\":53\,\"name\":\"Thriller\"}\,{\"id\":18\,\"name\":\"Drama\"}]','2019-05-30',8.5,10417);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,173.388,11,'After Porn Ends 2 picks up where its predecessor left off and not only turns back the clock to meet the oldest living stars in adult film''s history\, but goes in depth with some of Its most current retirees and juxtaposes their experiences in a life after porn. Delving deeper into society''s ongoing stigmas of race\, misogyny\, and the reality of decreasing opportunities for these former VHS box cover stars. For some\, their careers in adult entertainment is accepted proudly and without regret. In fact\, it seems to have proven to be the pathway to their current happiness and inner peace. For others\, however\, a career in porn has proven to be a conduit to certain despair as they struggle to find a way to bury their past and emerge with a new career or calling.',false,'After Porn Ends 2','https://image.tmdb.org/t/p/w300/rfItXrtDGILwsCdmgVxX79phFuI.jpg','[{\"id\":99\,\"name\":\"Documentary\"}]','2017-03-28',5.1,137);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,170.363,45,'A struggling family\, already on the verge of disintegration\, faces new challenges that will test their faith in God and each other.',false,'Finding Grace','https://image.tmdb.org/t/p/w300/d7LKwASjH0rgbSIz0eqUbzHZWe3.jpg','[{\"id\":18\,\"name\":\"Drama\"}]','2020-04-21',6.1,9);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,169.891,87,'When Grizz\, Panda\, and Ice Bear''s love of food trucks and viral videos get out of hand\, the brothers are chased away from their home and embark on a trip to Canada\, where they can live in peace.',false,'We Bare Bears: The Movie','https://image.tmdb.org/t/p/w300/kPzcvxBwt7kEISB9O4jJEuBn72t.jpg','[{\"id\":10751\,\"name\":\"Family\"}\,{\"id\":16\,\"name\":\"Animation\"}\,{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":35\,\"name\":\"Comedy\"}\,{\"id\":10770\,\"name\":\"TV Movie\"}]','2020-06-30',7.8,597);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,169.559,51,'In 1980s Italy\, a relationship begins between seventeen-year-old teenage Elio and the older adult man hired as his father''s research assistant.',false,'Call Me by Your Name','https://image.tmdb.org/t/p/w300/tcNniniS4rfqrLH0oORikJfnIwY.jpg','[{\"id\":10749\,\"name\":\"Romance\"}\,{\"id\":18\,\"name\":\"Drama\"}]','2017-09-01',8.3,8562);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,166.279,47,'When Alita awakens with no memory of who she is in a future world she does not recognize\, she is taken in by Ido\, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.',false,'Alita: Battle Angel','https://image.tmdb.org/t/p/w300/xRWht48C2V8XNfzvPehyClOvDni.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":878\,\"name\":\"Science Fiction\"}\,{\"id\":12\,\"name\":\"Adventure\"}]','2019-01-31',7.1,6134);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,162.833,39,'Lara Jean and Peter have just taken their romance from pretend to officially real when another recipient of one of her love letters enters the picture.',false,'To All the Boys: P.S. I Still Love You','https://image.tmdb.org/t/p/w300/maib5VlmEqp5xlN8lptnBSftp2o.jpg','[{\"id\":10749\,\"name\":\"Romance\"}]','2020-02-12',6.9,1674);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,161.621,48,'27 years after overcoming the malevolent supernatural entity Pennywise\, the former members of the Losers'' Club\, who have grown up and moved away from Derry\, are brought back together by a devastating phone call.',false,'It Chapter Two','https://image.tmdb.org/t/p/w300/zfE0R94v1E8cuKAerbskfD3VfUt.jpg','[{\"id\":27\,\"name\":\"Horror\"}\,{\"id\":14\,\"name\":\"Fantasy\"}]','2019-09-04',6.9,5603);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,160.837,12,'After getting hired to probe a suspicious death in the small town of Wander\, a mentally unstable private investigator becomes convinced the case is linked to the same ''conspiracy cover up'' that caused the death of his daughter.',false,'Wander','https://image.tmdb.org/t/p/w300/2AwPvNHphpZBJDqjZKVuMAbvS0v.jpg','[{\"id\":53\,\"name\":\"Thriller\"}\,{\"id\":80\,\"name\":\"Crime\"}\,{\"id\":9648\,\"name\":\"Mystery\"}]','2020-12-04',5,94);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,160.112,27,'In a sleepy town\, one man\, a wannabe horror film director is about to have his life and the world he knows change forever. Finally\, he gets the big break he has been waiting a lifetime for\, but its not Hollywood knocking on his door.',false,'Fat Ass Zombies','https://image.tmdb.org/t/p/w300/btrers8SNujMJhxjLvjh7AJpN3T.jpg','[{\"id\":27\,\"name\":\"Horror\"}\,{\"id\":35\,\"name\":\"Comedy\"}]','2020-02-18',4.7,32);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,159.769,69,'After fighting his demons for decades\, John Rambo now lives in peace on his family ranch in Arizona\, but his rest is interrupted when Gabriela\, the granddaughter of his housekeeper María\, disappears after crossing the border into Mexico to meet her biological father. Rambo\, who has become a true father figure for Gabriela over the years\, undertakes a desperate and dangerous journey to find her.',false,'Rambo: Last Blood','https://image.tmdb.org/t/p/w300/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":53\,\"name\":\"Thriller\"}\,{\"id\":18\,\"name\":\"Drama\"}]','2019-09-19',6.4,2394);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,158.463,93,'Harry Potter has lived under the stairs at his aunt and uncle''s house his whole life. But on his 11th birthday\, he learns he''s a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school''s kindly headmaster\, Harry uncovers the truth about his parents'' deaths -- and about the villain who''s to blame.',false,'Harry Potter and the Philosopher''s Stone','https://image.tmdb.org/t/p/w300/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg','[{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":14\,\"name\":\"Fantasy\"}]','2001-11-16',7.9,19370);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,156.093,3,'A deep sea submersible pilot revisits his past fears in the Mariana Trench\, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.',false,'The Meg','https://image.tmdb.org/t/p/w300/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":878\,\"name\":\"Science Fiction\"}\,{\"id\":27\,\"name\":\"Horror\"}]','2018-08-09',6.1,4861);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,155.011,13,'Dr. Emma Collins and her team are spending their third summer on the island of Little Happy studying the effect of climate change on the great white sharks who come to the nearby nursery every year to give birth. Along with the last two inhabitants of this former fishing village\, their peaceful life is disrupted when a \"scientific\" team led by her ex-boyfriend and marine biologist Richard show up looking for three bull sharks who we soon learn aren''t just any bull sharks.',false,'Deep Blue Sea 3','https://image.tmdb.org/t/p/w300/bKthjUmxjHjvJK8FktFfQdmwP12.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":27\,\"name\":\"Horror\"}\,{\"id\":878\,\"name\":\"Science Fiction\"}]','2020-07-28',6.1,299);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,154.499,88,'Sam is a teenage royal rebel\, second in line to the throne of the kingdom of Illyria. Just as her disinterest in the royal way of life is at an all-time high\, she discovers she has super-human abilities and is invited to join a secret society of similar extraordinary second-born royals charged with keeping the world safe.',false,'Secret Society of Second Born Royals','https://image.tmdb.org/t/p/w300/xOmGTJtBgRVSAF4S5dZEUqHqyy5.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":35\,\"name\":\"Comedy\"}\,{\"id\":14\,\"name\":\"Fantasy\"}]','2020-07-17',6.8,298);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,152.449,43,'In this animated musical\, a girl builds a rocket ship and blasts off\, hoping to meet a mythical moon goddess.',false,'Over the Moon','https://image.tmdb.org/t/p/w300/lQfdytwN7eh0tXWjIiMceFdBBvD.jpg','[{\"id\":16\,\"name\":\"Animation\"}\,{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":10751\,\"name\":\"Family\"}\,{\"id\":14\,\"name\":\"Fantasy\"}]','2020-10-16',7.5,656);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,152.115,85,'Nory and her best friend Reina enter the Sage Academy for Magical Studies\, where Nory’s unconventional powers land her in a class for those with wonky\, or “upside-down\,” magic. Undaunted\, Nory sets out to prove that that upside-down magic can be just as powerful as right-side-up.',false,'Upside-Down Magic','https://image.tmdb.org/t/p/w300/h9vTJ78h0SASYUxg4jV0AQ00oF2.jpg','[{\"id\":10751\,\"name\":\"Family\"}\,{\"id\":14\,\"name\":\"Fantasy\"}\,{\"id\":10770\,\"name\":\"TV Movie\"}]','2020-07-31',7.8,105);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,150.965,4,'Elsa\, Anna\, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.',false,'Frozen II','https://image.tmdb.org/t/p/w300/qXsndsv3WOoxszmdlvTWeY688eK.jpg','[{\"id\":16\,\"name\":\"Animation\"}\,{\"id\":10751\,\"name\":\"Family\"}\,{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":35\,\"name\":\"Comedy\"}\,{\"id\":14\,\"name\":\"Fantasy\"}]','2019-11-20',7.3,6898);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,149.989,12,'In Fujisawa\, Sakuta Azusagawa is in his second year of high school. Blissful days with his girlfriend and upperclassman\, Mai Sakurajima\, are interrupted by the appearance of his first crush\, Shoko Makinohara.',false,'青春ブタ野郎はゆめみる少女の夢を見ない','https://image.tmdb.org/t/p/w300/7Ai8vNEv4zEveh12JViGikoVPVV.jpg','[{\"id\":16\,\"name\":\"Animation\"}\,{\"id\":35\,\"name\":\"Comedy\"}\,{\"id\":10749\,\"name\":\"Romance\"}\,{\"id\":18\,\"name\":\"Drama\"}\,{\"id\":14\,\"name\":\"Fantasy\"}]','2019-06-15',8.6,204);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,149.417,82,'Every six years\, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat\, the fate of the planet and mankind hangs in the balance.',false,'Jiu Jitsu','https://image.tmdb.org/t/p/w300/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":14\,\"name\":\"Fantasy\"}\,{\"id\":878\,\"name\":\"Science Fiction\"}]','2020-11-20',5.3,256);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,147.598,4,'Carrie White is a lonely and painfully shy teenage girl with telekinetic powers who is slowly pushed to the edge of insanity by frequent bullying from both classmates at her school\, and her own religious\, but abusive\, mother.',false,'Carrie','https://image.tmdb.org/t/p/w300/knjeEeeyIwDkUtZwDfJOcUIuNdB.jpg','[{\"id\":10770\,\"name\":\"TV Movie\"}\,{\"id\":18\,\"name\":\"Drama\"}\,{\"id\":27\,\"name\":\"Horror\"}]','2002-11-04',6.1,276);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,147.53,12,'Tenth and penultimate installment of the Fast and Furious franchise.',false,'Fast & Furious 10','https://image.tmdb.org/t/p/w300/2DyEk84XnbJEdPlGF43crxfdtHH.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":53\,\"name\":\"Thriller\"}]',NULL,0,0);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,147.491,75,'When a 12-year-old boy goes missing\, lead investigator Greg Harper struggles to balance the pressure of the investigation and troubles with his wife\, Jackie. Facing a recent affair\, great strain is put on the family that slowly gnaws away at Jackie''s grip on reality. But after a malicious presence manifests itself in their home and puts their son\, Connor\, in mortal danger\, the cold\, hard truth about evil in the Harper household is finally uncovered.',false,'I See You','https://image.tmdb.org/t/p/w300/2LwamrHAmxqEHsT9JViFJxT08Ek.jpg','[{\"id\":53\,\"name\":\"Thriller\"}\,{\"id\":9648\,\"name\":\"Mystery\"}\,{\"id\":27\,\"name\":\"Horror\"}]','2019-09-11',6.6,330);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,146.568,78,'Ariana Grande takes the stage in London for her Sweetener World Tour and shares a behind-the-scenes look at her life in rehearsal and on the road.',false,'ariana grande: excuse me\, i love you','https://image.tmdb.org/t/p/w300/nm10ajNVkKwwyf8VFPkZnr93GbC.jpg','[{\"id\":10402\,\"name\":\"Music\"}\,{\"id\":99\,\"name\":\"Documentary\"}]','2020-12-21',8.4,186);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,146.355,12,'When the creator of a popular video game system dies\, a virtual contest is created to compete for his fortune.',false,'Ready Player One','https://image.tmdb.org/t/p/w300/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg','[{\"id\":878\,\"name\":\"Science Fiction\"}\,{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":28\,\"name\":\"Action\"}]','2018-03-28',7.6,10792);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,145.863,27,'J.J. Abrams and Paramount Pictures have announced they’ll be turning the critically acclaimed Japanese anime Your Name into a live-action film.',false,'Your Name','https://image.tmdb.org/t/p/w300null','[{\"id\":18\,\"name\":\"Drama\"}\,{\"id\":14\,\"name\":\"Fantasy\"}\,{\"id\":10749\,\"name\":\"Romance\"}]',NULL,0,0);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,145.286,80,'A grieving British girl unravels her murdered mother''s secrets connected to a South African witch doctor''s curse. She wants to put an end to this haunting hex by traveling to South Africa\, but instead it casts her deeper into sinister depths.',false,'Heks','https://image.tmdb.org/t/p/w300/xPS25WUeanHcG4ubc7ZAm2Sg4M3.jpg','[{\"id\":27\,\"name\":\"Horror\"}\,{\"id\":18\,\"name\":\"Drama\"}]','2020-12-15',6.8,5);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,144.362,19,'Remake of 1943 movie based on Eric Knight''s book\, \"Lassie Come Home\"',false,'Lassie - Eine abenteuerliche Reise','https://image.tmdb.org/t/p/w300/82yxvnYtgeRzsq5f9USlrFJI05s.jpg','[{\"id\":18\,\"name\":\"Drama\"}\,{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":10751\,\"name\":\"Family\"}]','2020-02-20',7,37);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,143.526,95,'Harry starts his fourth year at Hogwarts\, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks\, awaiting his chance to destroy Harry and all that he stands for.',false,'Harry Potter and the Goblet of Fire','https://image.tmdb.org/t/p/w300/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg','[{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":14\,\"name\":\"Fantasy\"}\,{\"id\":10751\,\"name\":\"Family\"}]','2005-11-16',7.8,14866);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,141.677,83,'After 7 year old Eden is kidnapped during an home invasion\, single father Dane Hunte takes matters into his own hands\, while Detective Fini\, leading the investigation\, unravels the mystery surrounding the unusual crime.',false,'Abducted','https://image.tmdb.org/t/p/w300/7gO1UDcMQStMTCoun2a1I7Mjzcw.jpg','[{\"id\":28\,\"name\":\"Action\"}\,{\"id\":80\,\"name\":\"Crime\"}\,{\"id\":18\,\"name\":\"Drama\"}]','2018-02-21',6.5,11);
INSERT INTO movie (wish_list, popularity, price, overview, adult, original_title, poster, genres, release_date, vote_average, vote_count) VALUES (false,140.633,36,'After suffering a plane crash on a mysterious island\, a young man embarks on an epic journey through forests\, deserts and mountains trying to escape the shadow of a huge dark spirit.',false,'Away','https://image.tmdb.org/t/p/w300/c59eplVELdwrUfGBUAZVin3HfaL.jpg','[{\"id\":16\,\"name\":\"Animation\"}\,{\"id\":12\,\"name\":\"Adventure\"}\,{\"id\":14\,\"name\":\"Fantasy\"}]','2019-11-15',6,29);
        `)
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
