import React, { useState } from "react";
import MusicOverlay from "./MusicOverlay";

const Links = () => {
  const [musicOpen, setMusicOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-center space-x-6">
        <a
          onClick={() => setMusicOpen(true)}
          className="hover:animate-pulse"
        >
          music
        </a>

        <a
          href="https://tickets.paysera.com/lt/event/reya-proxy"
          target="_blank"
          className="hover:animate-pulse"
    
        >
          tickets
        </a>

        <a
          href="https://tickets.paysera.com/lt/event/reya-proxy"
          target="_blank"
          className="hover:animate-pulse"
        >
          shop
        </a>
      </div>

      <MusicOverlay open={musicOpen} onClose={() => setMusicOpen(false)} />
    </>
  );
};

export default Links;
