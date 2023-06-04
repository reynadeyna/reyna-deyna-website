import Contacts from "../components/Contacts";
import Questions from "../components/Questions";
import { Box, useMediaQuery } from "@mui/material";

const About = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (

        <div className="about-container">
          {/* ABOUT ME CONTAINER */}

          <div className="about-me">
            <p>
              <h1>Hi This is Angelware, </h1>
              in this website youll find code, music, angelic beats
              transforming from Reyna Deyna. I am creating
              electronic pop songs - writing lyrics, producing, performing and
              engineering.
            </p>
            <p>
              Now I am getting back on decks as a DJ and giving some
              psychedelic, ethereal, progressive, trance-like, melodic
              electronic music.
            </p>
            <p>
              I am also composing and creating sound design as Angelic Beats:
              music for meditation and healing, subliminals and affirmations.
            </p>
            <p>
              I was awarded a degree in Sound Engineering and Production.
              Currently I am studying Computer Science and I love to code. I was
              based in Berlin, Los Angeles and Lithuania. The next destination
              is unknown.
            </p>
            <p>
              Before, since 15yo I was a DJ - my early mixes as Rugile and the
              latest as Reyna Deyna are archived on SoundCloud. All the albums
              and performances by Reyna Deyna are still up.
            </p>
            <p>
              I'd love to talk at reynadeyna@protonmail.com. Or, ask me a
              question here:
            </p>
          </div>

          {/* Questions CONTAINER */}

          <div className="question-form">
            <Contacts />
          </div>
          {/* Q&A CONTAINER */}
          <div className="questions-container">
              <Questions />
          </div>
        </div>
  );
};

export default About;
