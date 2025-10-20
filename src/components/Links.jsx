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
          MUSIC
        </a>

        <a
          href="https://tickets.paysera.com/lt/event/reya-proxy"
          target="_blank"
          className="hover:animate-pulse"
    
        >
          TICKETS
        </a>

        <a
          href="https://tickets.paysera.com/lt/event/reya-proxy"
          target="_blank"
          className="hover:animate-pulse"
        >
          SHOP
        </a>
      </div>

      <MusicOverlay open={musicOpen} onClose={() => setMusicOpen(false)} />
    </>
  );
};

export default Links;
