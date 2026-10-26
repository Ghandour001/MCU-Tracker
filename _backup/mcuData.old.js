// Backup of original mcuData before saga/group hierarchy and Legacy Era movies
const mcuData = [
            {
                phase: "Phase 1",
                title: "Avengers Assembled",
                movies: [
                    { id: "im1", title: "Iron Man", year: "2008", duration: "2h 6m", imdb: "7.9", poster: wikiBase + "Iron_Man_(2008_film)_poster.jpg" + wikiEnd },
                    { id: "ih", title: "The Incredible Hulk", year: "2008", duration: "1h 52m", imdb: "6.6", poster: wikiBase + "The_Incredible_Hulk_(film)_poster.jpg" + wikiEnd },
                    { id: "im2", title: "Iron Man 2", year: "2010", duration: "2h 4m", imdb: "6.9", poster: wikiBase + "Iron_Man_2_poster.jpg" + wikiEnd },
                    { id: "th1", title: "Thor", year: "2011", duration: "1h 55m", imdb: "7.0", poster: wikiBase + "Thor_(film)_poster.jpg" + wikiEnd },
                    { id: "ca1", title: "Captain America: The First Avenger", year: "2011", duration: "2h 4m", imdb: "6.9", poster: wikiBase + "Captain_America_The_First_Avenger_poster.jpg" + wikiEnd },
                    { id: "av1", title: "The Avengers", year: "2012", duration: "2h 23m", imdb: "8.0", poster: wikiBase + "The_Avengers_(2012_film)_poster.jpg" + wikiEnd }
                ]
            },
            {
                phase: "Phase 2",
                title: "Age of Miracles",
                movies: [
                    { id: "im3", title: "Iron Man 3", year: "2013", duration: "2h 10m", imdb: "7.1", poster: wikiBase + "Iron_Man_3_poster.jpg" + wikiEnd },
                    { id: "th2", title: "Thor: The Dark World", year: "2013", duration: "1h 52m", imdb: "6.8", poster: wikiBase + "Thor_The_Dark_World_poster.jpg" + wikiEnd },
                    { id: "ca2", title: "Captain America: The Winter Soldier", year: "2014", duration: "2h 16m", imdb: "7.8", poster: wikiBase + "Captain_America_The_Winter_Soldier_poster.jpg" + wikiEnd },
                    { id: "gotg1", title: "Guardians of the Galaxy", year: "2014", duration: "2h 1m", imdb: "8.0", poster: wikiBase + "Guardians_of_the_Galaxy_(film)_poster.jpg" + wikiEnd },
                    { id: "av2", title: "Avengers: Age of Ultron", year: "2015", duration: "2h 21m", imdb: "7.3", poster: wikiBase + "Avengers_Age_of_Ultron_poster.jpg" + wikiEnd },
                    { id: "am1", title: "Ant-Man", year: "2015", duration: "1h 57m", imdb: "7.3", poster: wikiBase + "Ant-Man_(film)_poster.jpg" + wikiEnd }
                ]
            },
            {
                phase: "Phase 3",
                title: "The Infinity War",
                movies: [
                    { id: "ca3", title: "Captain America: Civil War", year: "2016", duration: "2h 27m", imdb: "7.8", poster: wikiBase + "Captain_America_Civil_War_poster.jpg" + wikiEnd },
                    { id: "ds1", title: "Doctor Strange", year: "2016", duration: "1h 55m", imdb: "7.5", poster: wikiBase + "Doctor_Strange_(2016_film)_poster.jpg" + wikiEnd },
                    { id: "gotg2", title: "Guardians of the Galaxy Vol. 2", year: "2017", duration: "2h 16m", imdb: "7.6", poster: wikiBase + "Guardians_of_the_Galaxy_Vol._2_poster.jpg" + wikiEnd },
                    { id: "sm1", title: "Spider-Man: Homecoming", year: "2017", duration: "2h 13m", imdb: "7.4", poster: wikiBase + "Spider-Man_Homecoming_poster.jpg" + wikiEnd },
                    { id: "th3", title: "Thor: Ragnarok", year: "2017", duration: "2h 10m", imdb: "7.9", poster: wikiBase + "Thor_Ragnarok_poster.jpg" + wikiEnd },
                    { id: "bp1", title: "Black Panther", year: "2018", duration: "2h 14m", imdb: "7.3", poster: wikiBase + "Black_Panther_(film)_poster.jpg" + wikiEnd },
                    { id: "av3", title: "Avengers: Infinity War", year: "2018", duration: "2h 29m", imdb: "8.4", poster: wikiBase + "Avengers_Infinity_War_poster.jpg" + wikiEnd },
                    { id: "am2", title: "Ant-Man and the Wasp", year: "2018", duration: "1h 58m", imdb: "7.0", poster: wikiBase + "Ant-Man_and_the_Wasp_poster.jpg" + wikiEnd },
                    { id: "cm1", title: "Captain Marvel", year: "2019", duration: "2h 3m", imdb: "6.8", poster: wikiBase + "Captain_Marvel_(film)_poster.jpg" + wikiEnd },
                    { id: "av4", title: "Avengers: Endgame", year: "2019", duration: "3h 1m", imdb: "8.4", poster: wikiBase + "Avengers_Endgame_poster.jpg" + wikiEnd },
                    { id: "sm2", title: "Spider-Man: Far From Home", year: "2019", duration: "2h 9m", imdb: "7.4", poster: wikiBase + "Spider-Man_Far_From_Home_poster.jpg" + wikiEnd }
                ]
            },
            {
                phase: "Phase 4",
                title: "A New Universe",
                movies: [
                    { id: "bw", title: "Black Widow", year: "2021", duration: "2h 14m", imdb: "6.7", poster: wikiBase + "Black_Widow_(2021_film)_poster.jpg" + wikiEnd },
                    { id: "sc", title: "Shang-Chi and the Legend of the Ten Rings", year: "2021", duration: "2h 12m", imdb: "7.4", poster: wikiBase + "Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg" + wikiEnd },
                    { id: "et", title: "Eternals", year: "2021", duration: "2h 36m", imdb: "6.3", poster: wikiBase + "Eternals_(film)_poster.jpeg" + wikiEnd },
                    { id: "sm3", title: "Spider-Man: No Way Home", year: "2021", duration: "2h 28m", imdb: "8.2", poster: wikiBase + "Spider-Man_No_Way_Home_poster.jpg" + wikiEnd },
                    { id: "ds2", title: "Doctor Strange in the Multiverse of Madness", year: "2022", duration: "2h 6m", imdb: "6.9", poster: wikiBase + "Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg" + wikiEnd },
                    { id: "th4", title: "Thor: Love and Thunder", year: "2022", duration: "1h 59m", imdb: "6.2", poster: wikiBase + "Thor_Love_and_Thunder_poster.jpeg" + wikiEnd },
                    { id: "gotghs", title: "The Guardians of The Galaxy Holiday Special", year: "2022", duration: "42m", imdb: "6.9", poster: wikiBase + "The_Guardians_of_the_Galaxy_Holiday_Special_poster.jpg" + wikiEnd },
                    { id: "bp2", title: "Black Panther: Wakanda Forever", year: "2022", duration: "2h 41m", imdb: "6.7", poster: wikiBase + "Black_Panther_Wakanda_Forever_poster.jpg" + wikiEnd }
                ]
            },
            {
                phase: "Phase 5",
                title: "The Multiverse Saga Begins",
                movies: [
                    { id: "am3", title: "Ant-Man and the Wasp: Quantumania", year: "2023", duration: "2h 4m", imdb: "6.1", poster: wikiBase + "Ant-Man_and_the_Wasp_Quantumania_poster.jpg" + wikiEnd },
                    { id: "gotg3", title: "Guardians of the Galaxy Vol. 3", year: "2023", duration: "2h 30m", imdb: "7.9", poster: wikiBase + "Guardians_of_the_Galaxy_Vol._3_poster.jpg" + wikiEnd },
                    { id: "tm", title: "The Marvels", year: "2023", duration: "1h 45m", imdb: "5.5", poster: wikiBase + "The_Marvels_poster.jpg" + wikiEnd },
                    { id: "dw", title: "Deadpool & Wolverine", year: "2024", duration: "2h 8m", imdb: "8.0", poster: wikiBase + "Deadpool_%26_Wolverine_poster.jpg" + wikiEnd },
                    { id: "ca4", title: "Captain America: Brave New World", year: "2025", duration: "1h 58m", imdb: "5.7", poster: wikiBase + "Captain_America_Brave_New_World_poster.jpg" + wikiEnd },
                    { id: "tb", title: "Thunderbolts*", year: "2025", duration: "2h 7m", imdb: "7.1", poster: wikiBase + "Thunderbolts*_poster.jpg" + wikiEnd }
                ]
            },
            {
                phase: "Phase 6",
                title: "Climax of the Multiverse",
                movies: [
                    { id: "ff", title: "The Fantastic Four: First Steps", year: "2025", duration: "1h 54m", imdb: "6.8", poster: wikiBase + "The_Fantastic_Four_First_Steps_poster.jpg" + wikiEnd },
                    { id: "sm4", title: "Spider-Man: Brand New Day", year: "2026", duration: "2h 25m", imdb: "8.2", poster: wikiBase + "Spider-Man_Brand_New_Day_poster.jpg" + wikiEnd },
                    { id: "av5", title: "Avengers: Doomsday", year: "2026", duration: "TBD", imdb: "N/A", poster: wikiBase + "Avengers_Doomsday_poster.jpg" + wikiEnd },
                    { id: "av6", title: "Avengers: Secret Wars", year: "2027", duration: "TBD", imdb: "N/A", poster: "" }
                ]
            },
            {
                phase: "Future",
                title: "Upcoming Projects",
                movies: [
                    { id: "bp3", title: "Black Panther 3", year: "2028", duration: "TBD", imdb: "N/A", poster: "" },
                    { id: "aw", title: "Armor Wars", year: "TBD", duration: "TBD", imdb: "N/A", poster: "" },
                    { id: "bl", title: "Blade", year: "TBD", duration: "TBD", imdb: "N/A", poster: "" },
                    { id: "sc2", title: "Untitled Shang-Chi Sequel", year: "TBD", duration: "TBD", imdb: "N/A", poster: "" },
                    { id: "xm", title: "Untitled X-Men Film", year: "TBD", duration: "TBD", imdb: "N/A", poster: "" }
                ]
            }
        ];

        // 💡 تم تغيير let لـ var عشان فايربيز يقدر يقرأ المتغير
