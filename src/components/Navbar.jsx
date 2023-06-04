import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery, IconButton, Box } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <nav className="nav">
          <ul>
            <li className="active">
              <Link to="/about" className="nav-links">
                {" "}
                A B O U T {" "}
              </Link>
            </li>
            <li>
              <Link
                to="/angelicbeats" className="nav-links"
              >
                A N G E L I C <br/> B E A T S
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-links">
                {" "}
                A N G E L W A R E{" "}
              </Link>
            </li>
            <li>
              <Link to="/code" className="nav-links">
                {" "}
                C O D 3{" "}
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <Box position="fixed" margin="1rem" zIndex="10">
          <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu className="icons" sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close
                className="icons"
                position="fixed"
                zIndex="10"
                margin="1rem"
                // right="0"
                // bottom="0"
                // height="100%"
                sx={{ fontSize: 40 }}
              />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}

          <nav className="nav-mobile">
            <ul>
              <li className="active">
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/about"
                  className="nav-links"
                >
                  {" "}
                  A B O U T{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/angelicbeats"
                  className="nav-links"
                > 
                A N G E L I C <br/> B E A T S
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/"
                  className="nav-links"
                >
                  {" "}
                  A N G E L W A R E{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/code"
                  className="nav-links"
                >
                  {" "}
                  C O D 3{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </Box>
      )}
    </>
  );
};

export default Navbar;
