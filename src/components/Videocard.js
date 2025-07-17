import React, { useState } from "react";

const Videocard = (props) => {
  const [vids, setVids] = useState([
    {
      id: 1,
      src: "./johny.png",
      alt: "Johnny Drille pics",
      title: "Johnny Drille - Start all over(Johnny's room live)",
      c_name0: "Johnny Drille",
      c_name: "989K views. 6 years ago",
      url: "http://www.youtube.com/embed/WtX4YutzwVM",
      category: "Music",
    },
    {
      id: 2,
      src: "./Logo512.png",
      alt: "React logo",
      title: "Learn React for free",
      c_name0: "React Js Channel",
      c_name: "2.3M views. 2 years ago",
      url: "http://www.youtube.com/embed/Rh3tobg7hEo",
      category: "React",
    },

    {
      id: 3,
      src: "./oga.png",
      alt: "comedy",
      title: "Lasisi Elenu Comedy| Laugh non-stop",
      c_name0: "Comedy Tv",
      c_name: "200k views. 2 months ago",
      url: "http://www.youtube.com/embed/eV9XSks3XUc",
      category: "Comedy",
    },

    {
      id: 4,
      src: "./billie.png",
      alt: "Billie pics",
      title: "Billie Elish",
      c_name0: "Billie fan page",
      c_name: "3.2M views. 4 years ago",
      url: "http://www.youtube.com/embed/fOAIrUZbOwo",
      category: "Music",
    },

    {
      id: 5,
      src: "./unchanging.png",
      alt: "God wants to hear from you",
      title: "Our God is everlasting",
      c_name0: "Gods word ministries",
      c_name: "3M views. 6 Years ago",
      url: "http://www.youtube.com/embed/LjAY_CsrSE0",
      category: "Word",
    },

    {
      id: 6,
      src: "./manchester.png",
      alt: "man utd",
      title: "Manchester United Vs Ipswich Town|Premier League 2024/25",
      c_name0: "Manchester United Tv",
      c_name: "300k views. 5 days ago",
      url: "http://www.youtube.com/embed/AopzVGO2HK8",
      category: "Premier league",
    },

    {
      id: 7,
      src: "./Burnalife.png",
      alt: "Burna boy",
      title: "Burna Boy- More life",
      c_name0: "Burna Boy",
      c_name: "2M views. 2 years ago",
      url: "http://www.youtube.com/embed/dXeOBkKdiAg",
      category: "Burna",
    },

    {
      id: 8,
      src: "./Temshigher.png",
      alt: "Tems pics",
      title: "Tems-Higher",
      c_name0: "Tems baby fan club",
      c_name: "867k views. 16 weeks ago",
      url: "http://www.youtube.com/embed/Qa1IaUywiO8",
      category: "Music",
    },

    {
      id: 9,
      src: "./lamar.png",
      alt: "kendrick pics",
      title: "Kendrick Lamar Ft Sza",
      c_name0: "Kendrick page",
      c_name: "5M views. 1 year ago",
      url: "http://www.youtube.com/embed/OdMjVm_Aitg",
      category: "Music",
    },

    {
      id: 10,
      src: "./oxlade.png",
      alt: "boy ox",
      title: "Oxlade ",
      c_name0: "Oxlade page",
      c_name: "378views. 3 years ago",
      url: "http://www.youtube.com/embed/yzvDyh0DOIY",
      category: "Music",
    },

    {
      id: 11,
      src: "./woli.png",
      alt: "woli Agba",
      title: "Woli Agba Comedy",
      c_name0: "Woli Agba community Tv",
      c_name: "6 months ago",
      url: "http://www.youtube.com/embed/8JU59HZAkXY",
      category: "Comedy",
    },

    {
      id: 12,
      src: "./blues.png",
      alt: "Blues",
      title: "Cool Blues",
      c_name0: "Country Songs",
      c_name: "456k views. 5 days ago",
      url: "http://www.youtube.com/embed/AmLQ_GuM0WA",
      category: "Music",
    },

    {
      id: 13,
      src: "./spurs.png",
      alt: "COYS",
      title: "Spurs Football",
      c_name0: "Spurs Fc",
      c_name: "4M Views. 5 days ago",
      url: "http://www.youtube.com/embed/TxM_Yils07Y",
      category: "Premier league",
    },

    {
      id: 14,
      src: "./kelvinsim.png",
      alt: "kelvin Sim",
      title: "Kelvin Simm super voice",
      c_name0: "The Voice",
      c_name: "800k views. 4 years ago",
      url: "http://www.youtube.com/embed/FBP8svorBV0",
      category: "Audition",
    },

    {
      id: 15,
      src: "./brainjotter.png",
      alt: "Brainjotter comedy",
      title: "Brainjotter comedy",
      c_name0: "Brainjotter Tv",
      c_name: "500k views. 2 weeks ago",
      url: "http://www.youtube.com/embed/bGVuxTK8vAE",
      category: "Comedy",
    },

    {
      id: 16,
      src: "./masego.png",
      alt: "Masego",
      title: "Music Central",
      c_name0: "Vibe Tv",
      c_name: "430k views. 6 months ago",
      url: "http://www.youtube.com/embed/szQdvAzGNwE",
      category: "Music",
    },

    {
      id: 17,
      src: "./python.png",
      alt: "learn python",
      title: "Free Programming courses",
      c_name0: "Python channel",
      c_name: "2M views. 3 years ago",
      url: "http://www.youtube.com/embed/_uQrJ0TkZlc",
      category: "Programming",
    },

    {
      id: 18,
      src: "./liverpool.png",
      alt: "Liverpool",
      title: "Highlights: Liverpool Vs Newcastle Utd| Premier League",
      c_name0: "Liverpool Fc",
      c_name: "600k views. 5 days ago",
      url: "http://www.youtube.com/embed/Q04rP16Y4dg",
      category: "Premier league",
    },

    {
      id: 19,
      src: "./havoc.png",
      alt: "comedy Tv",
      title: "Netflix Shows",
      c_name0: "Comedy Tv",
      c_name: "300k views. 2 weeks ago",
      url: "http://www.youtube.com/embed/HAQfDRvrU0s",
      category: "Comedy",
    },

    {
      id: 20,
      src: "./comedy.png",
      alt: "Shank",
      title: "Shank comedy- Surviving the streets of UK",
      c_name0: "Shank Comics",
      c_name: "1.5M views. 9 Months ago",
      url: "http://www.youtube.com/embed/VVMQJIK9tJk",
      category: "Comedy",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const categories = [
    "All",
    "Music",
    "React",
    "Comedy",
    "Premier league",
    "Burna",
    "Word",
    "Programming",
    "Audition",
  ];

  const filteredVids =
    selectedCategory === "All"
      ? vids
      : vids.filter((video) => video.category === selectedCategory);
      const visibleVideos = filteredVids.slice(0, visibleCount);
      const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 5);               // Show 5 more videos
      };
  return (
    <div className="roll">
      <div className="categoryButtons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`categoryButton ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="videoCards">
        {visibleVideos.map((video) => (
          <div className="videoCard" key={video.id}>
            <iframe
              style={{ width: "295px", height: "162px" }}
              src={video.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="channelDetails">
              <h5>{video.title}</h5>
              <p className="c_name0">{video.c_name0}</p>
              <p className="c_name">{video.c_name}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < filteredVids.length && (
        <button className="showMoreBtn" onClick={handleShowMore}>
        Show More
        </button>
      )}
    </div>
  );
};

export default Videocard;
