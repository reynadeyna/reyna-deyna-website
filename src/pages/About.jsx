import Contacts from "../components/Contacts";
import Questions from "../components/Questions";
import { Box, useMediaQuery } from "@mui/material";

const About = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <div className="page-container">
      {/* ABOUT ME CONTAINER */}

      <h1>
        Hi, <br /> This is Angelware{" "}
      </h1>
      <h3>✧✧✧</h3>

      <div class="widget-container">
        <div className="matrix-widget">
          <h2>
            I created this website to gather my created assets in one place.
            Here you will find my music, dj mixes, sound works, coded projects,
            and bimbo indigo manifesto. Web is being updated.
          </h2>
        </div>
        <div className="widget">
          <h3>
            I am creating electronic pop songs - writing lyrics, producing,
            performing and engineering. Now I am getting back on decks as a DJ
            and giving some psychedelic, ethereal, progressive, trance-like,
            melodic electronic music. Now I am getting back on decks as a DJ
            and giving some psychedelic, ethereal, progressive, trance-like,
            melodic electronic music. Now I am getting back on decks as a DJ
            and giving some psychedelic, ethereal, progressive, trance-like,
            melodic electronic music.
          </h3>
        </div>

        <div className="widget">
          <h3>
            I am also composing and creating sound design as Angelic Beats:
            music for meditation and healing, subliminals and affirmations. I
            deeply understand the significance of sound in our lives,
            recognizing its remarkable ability to heal, uplift, and connect us
            on a profound level. By creating every piece, I embark on a journey
            of sonic exploration, carefully selecting frequencies that resonate
            with the essence of healing and transformation. By harnessing the
            subtle nuances of different tones and textures, I aim to evoke a
            desired emotional response. I believe in Solar Punk futuristic 
            human setting.
          </h3>
        </div>

        <div className="widget">
          <h3>
            I was awarded a degree in Sound Engineering and Production.
            Currently I am studying Computer Science and I love to code. I was
            based in Berlin, Los Angeles and Lithuania. The next destination is
            unknown. I was awarded a degree in Sound Engineering and Production.
            Currently I am studying Computer Science and I love to code. I was
            based in Berlin, Los Angeles and Lithuania. The next destination is
            unknown.
          </h3>
        </div>

        <div className="widget">
          <h3>
            Transforming from Reyna Deyna. Before, since 15yo I was a DJ - my
            early mixes as Rugile and the latest as Reyna Deyna are archived on
            SoundCloud. All the albums and performances by Reyna Deyna are still
            up.
          </h3>
        </div>

        <div className="widget">
          <h3>
            I'd love to talk at neo@angelware.xyz Or, ask me a question here:
          </h3>
        </div>

        {/* Questions CONTAINER */}

        <div className="widget">
          <div className="question-form">
            <Contacts />
          </div>
        </div>

        {/* Q&A CONTAINER */}
        <div className="widget">
          <div className="questions-container">
            <Questions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
