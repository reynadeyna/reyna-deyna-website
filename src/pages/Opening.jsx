import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Links from "../components/Links";
import { useInView } from "react-intersection-observer";

const Opening = () => {
  return (
    <div className="flex justify-center pt-40 pb-40 px-5">
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        <div className="flex flex-col items-center justify-center text-center mt-12 gap-16">
          <div className="widget">
            <p className="text-xs leading-7">
     
         My memory has become stronger. My body has grown
              thicker, making it tough to move. My nail extensions seem to have
              become a sword. I am actually stronger than a God, you know. What
              are you saying? I am in perfect form.
              <br />
              <br />
              I found myself standing somewhere new. I examined my transformed
              body. This world was undoubtedly one of mystique, where the
              limitations of my human form were no longer relevant.
              <br />
              <br />
              In the midst of it all, I felt as though I had crossed the
              threshold of existence. Yet, here I stand, ready to start once more. Voices surround me affirming my return to this mortal coil.
              In that suspended moment, destiny deemed my story unfinished.
              <br />
              <br />
              Shall I reveal the moment?
              <br />
              <br />
              <a
                href="/delufesto"
                className="relative text-white underline decoration-wavy decoration-zinc-300  "
              >
                {/* <span
                  className="relative animate-ping"
                  style={{
                    animationDuration: "3s",              
                    animationTimingFunction: "ease-in",  
                    transform: "scaleY(2)",                
                    display: "inline-block",
                  }}
                > */}
                READ BIMBO INDIGO MANIFESTO HERE
                {/* </span> */}
              </a>
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
