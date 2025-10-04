import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import w from "../assets/sun.png";

const buttonStyle = {
  backdropFilter: "blur(25px)",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
  width: "220px",
  padding: "14px 24px",
  fontWeight: 600,
  fontSize: "16px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15), inset 0 -1px 0 rgba(255,255,255,0.08)",
  backgroundColor: "rgba(255,255,255,0.08)",
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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { name: "HOME", to: "/" },
    { name: "DATA", to: "/music" },
    { name: "SHOP", to: "/shop" },
    { name: "ABOUT", to: "/about" },
    { name: "QUERIES", to: "/ama" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-center p-4 z-50">
        <img
          src={w}
          alt="Menu Icon"
          className="cursor-pointer h-20 w-20 mt-8 animate-spin hover:animate-pulse"
          style={{ animationDuration: "6s" }}
          onClick={toggleMenu}
        />
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              style={overlayStyle}
              onClick={closeMenu}
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
              <div className="flex flex-col items-center space-y-6 pointer-events-auto">
                {links.map(({ name, to }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Link
                      to={to}
                      onClick={closeMenu}
                      style={buttonStyle}
                      className="hover:scale-105 active:scale-95"
                    >
                      {name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
