import spotify from "../assets/media_icons/spotify.svg";
import octocat from "../assets/media_icons/octocat.svg";
import instagram from "../assets/media_icons/instagram.svg";
import tiktok from "../assets/media_icons/tiktok.svg";
import x from "../assets/media_icons/x.svg";
import youtube from "../assets/media_icons/youtube.svg";
import soundcloud from "../assets/media_icons/soundcloud.svg";
import discord from "../assets/media_icons/discord.svg";

const Links = () => {
  return (
    <div>
      {/* LINKS CONTAINER */}

      <div className="links-container">
        <a href="https://spotify.com" target="_blank">
          <img src={spotify} className="logo" alt="Spotify logo" />
        </a>
        <a href="https://github.com/4ng3lw4r3" target="_blank">
          <img src={octocat} className="logo" alt="Github logo" />
        </a>
        <a href="https://www.instagram.com/4ng3lw4r3" target="_blank">
          <img src={instagram} className="logo" alt="Instagram logo" />
        </a>
        <a href="https://www.tiktok.com/@4ng3lw4r3" target="_blank">
          <img src={tiktok} className="logo" alt="TikTok logo" />
        </a>

        <a href="https://soundcloud.com/4ng3lw4r3" target="_blank">
          <img src={soundcloud} className="logo" alt="SoundCloud logo" />
        </a>
        <a href="https://soundcloud.com/4ng3lw4r3" target="_blank">
          <img src={discord} className="logo" alt="Discord logo" />
        </a>
        <a href="https://www.youtube.com/@4ng3lw4r3" target="_blank">
          <img src={youtube} className="logo" alt="YouTube logo" />
        </a>
        <a href="https://twitter.com/4ng3lw4r3" target="_blank">
          <img src={x} className="logo" alt="X logo" />
        </a>
      </div>
    </div>
  );
};

export default Links;
