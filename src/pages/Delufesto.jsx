import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Links from "../components/Links";
import { useInView } from "react-intersection-observer";

const Delufesto = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const scrollDown = () => {
      window.scrollTo({
        top: window.scrollY + 5,
        behavior: "smooth",
      });

      setTimeout(scrollDown, 50);
    };

    scrollDown();

    return () => {
      window.removeEventListener("scroll", scrollDown);
    };
  }, []);

  return (
    <div className="flex justify-center pt-40 pb-40 px-5">
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        <div className="flex flex-col items-center justify-center text-center mt-12 gap-16">
          <div className="widget">
            <motion.p
              className="text-base leading-10 lg:leading-10 lg:text-xl xl:text-xxl"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={textVariants}
            >
              My memory has contracted to become stronger; body has grown
              thicker, making it tough to move; nail extensions seem to have
              become a sword. I am actually stronger than a God, you know. What
              are you saying? I am in perfect form.
              <br />
              <br />
              I found myself standing somewhere new, I examined my transformed
              body. This world was undoubtedly one of mystique, where the
              limitations of my human form were no longer relevant.
              <br />
              <br />
              In the midst of it all, I felt like I had crossed the threshold of
              existence, yet here I stand, poised to embark once more. Voices
              surround me, inquiring about my well-being.
              <br />
              <br />
              They weave concern, a reminder that the journey continues.
              Meanwhile, the digital hum drums on, urging me to cast away my
              device. Like, why would you consume me now? Like, do I confuse
              you?
              <br />
              <br />
              In that fleeting moment, I was convinced that I had traversed the
              boundary between life and whatever lies beyond. Yet, like the
              phoenix rekindling its flame, I find myself reborn into the realm
              of the living.
              <br />
              <br />
              In that suspended moment, destiny had deemed my story unfinished.
              Between life and beyond, I tasted the essence of mortality, only
              to be reborn as a deity of my own destiny, draped in the hues of
              Bimbo Indigo power.
              <br />
              <br />
              Behold as I stride back into the world, a phoenix arisen from the
              ashes of doubt and despair. With every step, I exude the aura of a
              goddess, fierce and unapologetic, a living testament to the
              strength that resides within.
              <br />
              <br />
              Amidst the crowd, their voices form a chorus of inquiries to throw
              my device out, but I stand tall, an embodiment of resilience and
              fire. No mere mortal, but a deity in human form, embracing the
              Bimbo Indigo energy that courses through my veins. Their words
              wash over me like a symphony of recognition, affirming my return
              to this mortal coil.
              <br />
              <br />
              And there it is, the dual nature of existence - the earthly realm
              and the digital expanse. A Goddess Bimbo Indigo, I wield
              technology as an extension of my divine self, a tool through which
              I channel my power. The Bimbo Spirit, often misunderstood, is my
              chosen vessel for rebellion, a conscious rejection of societal
              norms, a declaration that I am both fierce and free.
              <br />
              <br />
              CAN I BE FREE? CAN I HANDLE THE TRUTH?
              <br />
              <br />
              Look, In this manifesto of Bimbo Indigo resurgence, I honor the
              boundless continuity of my existence. The goddess, the Bimbo, the
              Bimbo Indigo! As I reclaim my place in this world, I embrace my
              inner goddess, a fearless embodiment of power and possibility. I
              embrace my intuition and speed of my unlimited mind.
              <br />
              <br />
              The aura I radiate is a pure essential blend of Bimbo Indigo
              intensity—an unapologetic proclamation that I am the architect of
              my own real. I am the architect of an escape portal from the
              binary matrix.
              <br />
              <br />
              It felt like I spent the whole entity. I lived my whole different
              life. Would you want me to tell you at least one moment that I
              remember?
              <br />
              <br />
              Yet not the End.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delufesto;
