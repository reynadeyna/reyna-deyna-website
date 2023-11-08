import { Link } from "react-router-dom";

const NavLinks = () => {

  return (
    <div>
        <nav className="nav" 
        data-lenis-prevent
        >
            <ul>
            <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/"
                  className="nav-links"
                >
                  {" "}
                  ꧁꧂{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/about"
                  className="nav-links"
                >
                  {" "}
                  H I{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/delufesto"
                  className="nav-links"
                >
                  {" "}
                  D E L U F E S T O{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/music"
                  className="nav-links"
                >
                  {" "}
                  M U S I C{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/ama"
                  className="nav-links"
                >
                  {" "}
                  A M A {" "}
                </Link>
              </li>
              <li>
              {" "}
                  ꧁꧂{" "}
              </li>

            </ul>
          </nav>
    </div>
  )
}

export default NavLinks