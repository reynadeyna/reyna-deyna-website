import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar text-white p-4 fixed w-full top-0 flex justify-center">
        <img
          src="/Icon2.svg"
          alt="Menu Icon"
          className={`cursor-pointer z-40 h-20 w-20 mt-8 transform transition-transform ${
            menuOpen ? "rotate-45" : "rotate-0"
          } animate-spin ${
            menuOpen ? "animate-pulse" : ""
          } hover:translate-x-2 hover:translate-y-2`}
          onClick={toggleMenu}
          style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
        />
      </nav>

      {/* Overlay content */}
      <div
        className={`fixed inset-0 bg-black opacity-70 z-40 ${
          menuOpen ? "" : "hidden"
        }`}
        onClick={closeMenu}
      ></div>
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center ${
          menuOpen ? "" : "hidden"
        }`}
      >
        <div className=" p-8 w-full h-full flex items-center justify-center">
          <ul className="flex flex-col items-center gap-20 ">
            <li className="text-white border rounded-full px-16 py-2">
              <Link onClick={closeMenu} to="/" className="text-white">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li className="text-white border rounded-full px-16 py-2">
              <Link onClick={closeMenu} to="/about" className="text-white">
                About
              </Link>
            </li>
            <li className="text-white border rounded-full px-10 py-2">
              <Link onClick={closeMenu} to="/delufesto" className="text-white">
                Delufesto
              </Link>
            </li>
            <li className="text-white border rounded-full px-16 py-2">
              <Link onClick={closeMenu} to="/music" className="text-white">
                Music
              </Link>
            </li>
            <li className="text-white border rounded-full px-14 py-2">
              <Link onClick={closeMenu} to="/ama" className="text-white">
                Ask me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
