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
      navigate("/opening");
    }, 1111);
  };

  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="p-0 w-90 mx-auto mt-44">
          <div className="explore text-center mt-32 ">
            <h2 className="footer-text-2 text-center text-gray-300">
              explore both symbols
            </h2>

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
                className="lg:text-2xl"
              >
                <div className="relative  mt-32 ">
                  <img
                    src={w}
                    alt="Menu Icon"
                    className="animate-spin object-contain mx-auto spin-counterclockwise"
                    style={{
                      width: "100px",
                      height: "100px",
                      animationDuration: "6s",
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer flex flex-col items-center space-y-4 justify-center text-gray-300 mt-11">
        <div className="footer-text flex">
          <Links />
        </div>

        <h2 className="footer-text-2 text-center">coded by amzina</h2>
      </div>
    </div>
  );
};

export default Home;
