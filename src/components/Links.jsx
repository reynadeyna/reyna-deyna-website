import spotify from "../assets/media_icons/spotify.svg";
import octocat from "../assets/media_icons/octocat.svg";
import instagram from "../assets/media_icons/instagram.svg";
import tiktok from "../assets/media_icons/tiktok.svg";
import twitter from "../assets/media_icons/twitter.svg";
import youtube from "../assets/media_icons/youtube.svg";

const Links = () => {
  return (
    <div>
      {/* LINKS CONTAINER */}

      <div className="links-container">
        <a href="https://spotify.com" target="_blank">
          <img src={spotify} className="logo" alt="Spotify logo" />
        </a>
        <a href="https://github.com/angelware10110" target="_blank">
          <img src={octocat} className="logo" alt="Github logo" />
        </a>
        <a href="https://github.com/angelware10110" target="_blank">
          <img src={instagram} className="logo" alt="Instagram logo" />
        </a>
        <a href="https://github.com/angelware10110" target="_blank">
          <img src={tiktok} className="logo" alt="TikTok logo" />
        </a>
        <a href="https://github.com/angelware10110" target="_blank">
          <img src={youtube} className="logo" alt="YouTube logo" />
        </a>
        <a href="https://github.com/angelware10110" target="_blank">
          <img src={twitter} className="logo" alt="Twitter logo" />
        </a>
      </div>
    </div>
  );
};

export default Links;
