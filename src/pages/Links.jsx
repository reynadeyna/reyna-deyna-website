import React, { useEffect, useState } from "react";

const musicLinks = [
  { name: "Nina", url: "" },
  { name: "Bandcamp", url: "http://amzina.bandcamp.com/music" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCaqTCRZmnGOE688ns6NMp5A" },
  { name: "SoulSeek", url: "" },
];

const socialLinks = [
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

<div className="flex items-center justify-center min-h-screen px-4">
  <div className="flex flex-col items-center gap-4 max-w-md mt-20">
    {allLinks.map(({ name, url }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center px-6 py-2 rounded-full text-white text-sm sm:text-base font-semibold border border-white hover:scale-110 transition-all duration-200"
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
