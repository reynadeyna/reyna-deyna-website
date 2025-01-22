import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Links from "../components/Links";
import w from "../assets/me.png";


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
      navigate("/delufesto");
    }, 1111);
  };

  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="p-0 w-90 mx-auto mt-10">
          <div className="explore text-center mt-32 ">
            <motion.div
              animate={controls}
              initial={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Link
                to="/delufesto"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick();
                }}
                className="lg:text-2xl"
              >
     Hot like Pheonix
                {/* <img

                  src={w}
                  alt="Menu Icon"
                  className="hover:animate-pulse"
                  style={{
                    // filter: "brightness(0) contrast(1.2) saturate(7)", 
                    // opacity: 0.6,
                    width: "600px",
                    height: "350px",
                  }}

                /> */}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer flex flex-col items-center justify-center mb-3 text-white text-sm">


        <div className=" footer-text flex space-x-2 my-4 p-1">
          <Links />
        </div>

        <h2 className="footer-text-2 text-center text-white">
          Designed and Built by Reyna Deyna
        </h2>

      </div>
    </div>
  );
};

export default Home;
