import spotify from "../assets/media_icons/spotify.svg";
import octocat from "../assets/media_icons/octocat.svg";
import instagram from "../assets/media_icons/instagram.svg";
import tiktok from "../assets/media_icons/tiktok.svg";
import twitter from "../assets/media_icons/twitter.svg";
import youtube from "../assets/media_icons/youtube.svg";
import soundcloud from "../assets/media_icons/soundcloud.svg";
import discord from "../assets/media_icons/discord.svg";
import bandcamp from "../assets/media_icons/bandcamp.svg";
import bluesky from "../assets/media_icons/bluesky.svg";

const Links = () => {
  return (
    <div className="flex flex-wrap space-x-2 gap-2">
      
      <a href="https://github.com/reynadeyna" target="_blank">
        <img src={octocat} className="logo" alt="Github logo" />
      </a>

      <a href="https://discord.gg/QRY43edW" target="_blank">
        <img src={discord} className="logo" alt="Discord logo" />
      </a>

      <a href="https://open.spotify.com/artist/2UwsiwBg4Tu7vszP2WjkjC" target="_blank">
        <img src={spotify} className="logo" alt="Spotify logo" />
      </a>

      <a href="https://reynadeyna.bandcamp.com" target="_blank">
        <img src={bandcamp} className="logo" alt="bandcamp logo" />
      </a>

      {/* <a href="https://www.instagram.com/reynadeyna" target="_blank">
        <img src={instagram} className="logo" alt="Instagram logo" />
      </a> */}

      {/* <a href="https://www.tiktok.com/@reynadeyna" target="_blank">
        <img src={tiktok} className="logo" alt="TikTok logo" />
      </a> */}

      <a href="https://www.youtube.com/reynadeyna" target="_blank">
        <img src={youtube} className="logo" alt="YouTube logo" />
      </a>

      <a href="https://bsky.app/profile/reynadeyna.bsky.social" target="_blank">
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg" className="logo black-svg" alt="bluesky logo" /> */}
        <img src={bluesky} className="logo" alt="Bluesky logo" />
      </a>

      <a href="https://soundcloud.com/reynadeyna" target="_blank">
        <img src={soundcloud} className="logo" alt="SoundCloud logo" />
      </a>




      {/* <a href="https://twitter.com/reynadeyna" target="_blank">
        <img src={twitter} className="logo" alt="twitter logo" />
      </a> */}

    </div>
  );
};

export default Links;
