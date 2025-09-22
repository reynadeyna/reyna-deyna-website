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
    <div className="flex flex-wrap justify-center space-x-6  decoration-wavy decoration-zinc-300  ">


      <a
        href=""
        target="_blank"
        className="hover:animate-pulse"
      >
        {" "}
        MUSIC
      </a>

      <a
        href=""
        target="_blank"
        className="hover:animate-pulse"
      >
        {" "}
        TICKETS
      </a>

      <a
        href=""
        target="_blank"
        className="hover:animate-pulse"
      >
        {" "}
        SHOP
      </a>


    </div>
  );
};

export default Links;
