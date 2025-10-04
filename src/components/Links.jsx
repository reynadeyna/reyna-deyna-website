import React, { useState } from "react";
import MusicOverlay from "./MusicOverlay";

const Links = () => {
  const [musicOpen, setMusicOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-center space-x-6 decoration-wavy decoration-zinc-300">
        <button
          onClick={() => setMusicOpen(true)}
          className="hover:animate-pulse focus:outline-none"
        >
          MUSIC
        </button>

        <a
          href=""
          target="_blank"
          className="hover:animate-pulse"
          rel="noopener noreferrer"
        >
          TICKETS
        </a>

        <a
          href=""
          target="_blank"
          className="hover:animate-pulse"
          rel="noopener noreferrer"
        >
          SHOP
        </a>
      </div>

      <MusicOverlay open={musicOpen} onClose={() => setMusicOpen(false)} />
    </>
  );
};

export default Links;
