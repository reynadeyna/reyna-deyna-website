import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Links from "../components/Links";

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
          <div className="explore text-center mt-20">
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
                <img
                  src="/Icon2.svg"
                  alt="Menu Icon"
                  style={{
                    filter: "brightness(0) invert(1)",
                    opacity: 0.7,
                    width: "13rem",
                    height: "13rem",
                  }}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer flex flex-col items-center justify-center mb-3">
        <h2 className="footer-text text-center">
          Designed and built by Angelware
        </h2>

        <div className="flex space-x-2 my-2 p-1">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Home;
