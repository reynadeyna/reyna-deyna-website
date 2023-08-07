import { useState } from "react";
import { useMediaQuery, IconButton, Box } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <NavLinks />
      ) : (
        <Box position="fixed" margin="1rem" right="0" zIndex="10">
          <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
        </Box>
      )}

      {/* MOBILE NAV */}

      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          className="nav-mobile"
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
              <Menu
                position="fixed"
                zIndex="10"
                margin="1rem"
                sx={{ fontSize: 40, color: "white" }}
              />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}

          <NavLinks />

        </Box>
      )}
    </>
  );
};

export default Navbar;
