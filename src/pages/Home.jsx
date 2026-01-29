import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Links from "../components/Links";
import w from "../assets/sun.png";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsClicked(true);
    controls.start({
      scale: 5,
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    });

    setTimeout(() => {
      // navigate("/opening");
      navigate("/about");

    }, 1111);
  };

  return (
    <div className="flex flex-col h-screen overflow-x-hidden">

      <div className="flex flex-grow items-center justify-center h-screen mt-44">
        <div className="p-0 w-90 mx-auto space-y-24">

        <h2 className="footer-text-2 text-center text-gray-300">
              {/* ↑ menu ❘ log ↓ */}


               My memory has become stronger. My body has grown
              thicker, making it tough to move. My nail extensions seem to have
              become a sword. I am actually stronger than a God, you know. What
              are you saying? I am in perfect form.
              <br />
              <br />
                  <br />
              <br />
              I found myself standing somewhere new. I examined my transformed
              body. This world was undoubtedly one of mystique, where the
              limitations of my human form were no longer relevant.
                <br />
              <br />    <br />
              <br />
              In the midst of it all, I felt as though I had crossed the
              threshold of existence. Yet, here I stand, ready to start once more. Voices surround me affirming my return to this mortal coil.
              In that suspended moment, destiny deemed my story unfinished.
              <br />
              <br />
              Shall I reveal the moment?
              <br />
              <br />
            </h2>

          <div className="explore text-center ">

            <motion.div
              animate={controls}
              initial={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Link
                to="/opening"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick();
                }}
                className=""
              >
                <div className="relative">
                  {/* <img
                    src={w}
                    alt="Menu Icon"
                    className="animate-spin object-contain mx-auto spin-counterclockwise"
                    style={{
                      width: "100px",
                      height: "100px",
                      animationDuration: "6s",
                    }}
                  /> */}
                  
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer flex flex-col items-center space-y-4 justify-center text-gray-300">
        
        <div className="footer-text flex">
          <Links />
        </div>

        <h2 className="footer-text-2 text-center">coded by reya proxy</h2>
      </div>
    </div>
  );
};

export default Home;
