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
  { name: "GitHub", url: "https://github.com/reynadeyna" },
  { name: "Email", url: "https://github.com/reynadeyna" },
];

const glowStyle = {
  textShadow: "0 0 4px rgba(255, 255, 255, 0.6), 0 0 8px rgba(255, 255, 255, 0.4)",
};

const Links = () => {
  return (
    <div className="flex items-center justify-center min-h-screen pt-28 px-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center gap-8">
          {musicLinks.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white transition hover:scale-105"
              style={glowStyle}
            >
              {name}
            </a>
          ))}

          <div className="flex flex-wrap justify-center gap-4 pt-20">
            {socialLinks.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white transition hover:scale-105"
                style={glowStyle}

              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
