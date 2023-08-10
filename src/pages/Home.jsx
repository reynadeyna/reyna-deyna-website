import { useMediaQuery, Box } from "@mui/material";
import Links from "../components/Links";
import { Link } from "react-router-dom";


const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <>
    <div className="page-container">

      <h1>ANGELWARE</h1>


      {/* DESKTOP HOME */}

      {isNonMobileScreens ? (
        <Links />
      ) : (
        <Box></Box>
      )}

      {!isNonMobileScreens && (
        <Box>

          <Links />

          <div className="home-nav-links-container">
            <ul>
              <li>
                <Link
                  to="/about"
                  className="home-nav-link"
                >
                  {" "}
                  ABOUT & AMA{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/angelware"
                  className="home-nav-link"
                >
                  {" "}
                  ANGELWARE{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/code"
                  className="home-nav-link"
                >
                  {" "}
                  COD3{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/angelicbeats"
                  className="home-nav-link"
                >
                  ANGELIC<br />BEATS
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="home-nav-link"
                >
                  {" "}
                  SHOP{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/manifesto"
                  className="home-nav-link"
                >
                  {" "}
                  BIMBO✧INDIGO<br />MANIFESTO{" "}
                </Link>
              </li>
            </ul>

          </div>

        </Box>
      )}
      </div>
    </>
  );
};

export default Home;
