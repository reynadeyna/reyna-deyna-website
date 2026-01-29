import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { musicLinks } from "../data/musicLinks";

const buttonStyle = {
  backdropFilter: "blur(25px)",            
  borderRadius: "18px",
  // border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
  width: "220px",
  padding: "14px 24px",
  // fontWeight: 600,
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(255,255,255,0.08)",
  transition: "all 0.3s ease",
};

const overlayStyle = {
  backdropFilter: "blur(15px)",              
  backgroundColor: "rgba(255,255,255,0.1)", 
};

const variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const MusicOverlay = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            style={overlayStyle}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-8 pointer-events-none"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center space-y-4 pointer-events-auto">
              {musicLinks.map(({ name, url }, i) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={buttonStyle}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="hover:scale-105 active:scale-95"
                >
                  {name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MusicOverlay;
