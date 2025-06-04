import React, { useEffect, useState } from "react";

const musicLinks = [
  { name: "Spotify", url: "https://open.spotify.com/artist/5FjWQxZ1HykLpH7KhLWecB" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCaqTCRZmnGOE688ns6NMp5A" },
  { name: "SoundCloud", url: "https://soundcloud.com/amzinaximus" },
  { name: "Nina Protocol", url: "" },
  { name: "Apple Music", url: "https://music.apple.com/lt/artist/am%C5%BEina/1815460900" },
  { name: "Bandcamp", url: "http://amzina.bandcamp.com/music" },
  { name: "Deezer", url: "https://www.deezer.com/en/artist/324081381" },
  { name: "Tidal", url: "https://tidal.com/browse/" },
];

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/amzinaximus/" },
  { name: "BlueSky", url: "https://bsky.app/profile/amzinaximus.bsky.social" },
  { name: "TikTok", url: "https://www.tiktok.com/@amzinaximus" },
  { name: "Tumblr", url: "https://www.tumblr.com/amzinaximus" },
  { name: "GitHub", url: "https://github.com/reynadeyna" },
  { name: "Email", url: "mailto:angel@reynadeyna.com" },
];

const glowStyle = {
  boxShadow: "0 0 10px white, 0 0 20px #ffffffaa, 0 0 40px #ffffff55",
  textShadow: "0 0 6px white, 0 0 12px #ffffffaa",
};

const Links = () => {
  const [showText, setShowText] = useState(true);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(true);
      setTimeout(() => setShowText(false), 6000);
    }, 8000);
  
    return () => clearInterval(interval);
  }, []);

  const allLinks = [...musicLinks, ...socialLinks];

  return (
    <>
      {showText && (
        <div
          className="fixed top-1/2 left-1/2 text-white text-sm sm:text-lg font-bold pointer-events-none select-none"
          style={{
            transform: "translate(-50%, -50%)",
            textShadow: "0 0 10px white, 0 0 20px #ffffffaa",
            animation: "fadeOut 5s forwards",
            zIndex: 50,
          }}
        >
          girl i’m everywhere
        </div>
      )}

      <div className="flex items-center justify-center min-h-screen px-4 bg-stone-700">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mt-20">
          {allLinks.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full text-white text-sm sm:text-base font-semibold border border-white hover:scale-110 transition-all duration-200"
              style={glowStyle}
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeOut {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
          }
        `}
      </style>
    </>
  );
};

export default Links;
