import { useMediaQuery, Box } from "@mui/material";
import Links from "../components/Links";
import { Link } from "react-router-dom";


const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <>
    <div className="page-container">

      <h1>GREETINGS ANGEL</h1>
      <h3>follow to the external source or stay here with me</h3>


      {/* DESKTOP HOME */}

      {isNonMobileScreens ? (
        <Links />
      ) : (
        <Box></Box>
      )}

      {!isNonMobileScreens && (
        <Box>

          <Links />

          <h3>or stay here with me</h3>



          <div className="home-nav-links-container">

            <ul>
            
              <li>
                <Link
                  to="/delufesto"
                  className="home-nav-link"
                >
                  {" "}
                  DELUFESTO{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="home-nav-link"
                >
                  {" "}
                  HI{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/music"
                  className="home-nav-link"
                >
                  {" "}
                  MUSIC{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/ama"
                  className="home-nav-link"
                >
                  {" "}
                  AMA{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="home-nav-link"
                >
                  {" "}
                  ꧁꧂{" "}
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
