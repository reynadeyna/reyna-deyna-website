import React from "react";

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
  { name: "Pinterest", url: "https://www.pinterest.com/amzinaximus/_pins/" },
  { name: "GitHub", url: "https://github.com/reynadeyna" },
  { name: "Email", url: "mailto:angel@reynadeyna.com" },
];

const glowStyle = {
  boxShadow:
    "0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.7)",
  textShadow:
    "0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(255, 255, 255, 0.8)",
};

const Links = () => {
  const allLinks = [...musicLinks, ...socialLinks];

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-stone-700">
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mt-20">
        {allLinks.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-white text-sm font-medium border border-white hover:scale-110 transition-all"
            style={glowStyle}
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Links;
