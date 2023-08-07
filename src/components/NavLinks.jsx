import { Link } from "react-router-dom";


const NavLinks = () => {
  return (
    <div>
        <nav className="nav" data-lenis-prevent>
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
                  A B O U T{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/angelware"
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
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/angelicbeats"
                  className="nav-links"
                >
                  B E A T S<br /> A N G E L I C
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/manifesto"
                  className="nav-links"
                >
                  {" "}
                  M A N I F E S T O  <br />  B I M B O ✧ I N D I G O {" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                  to="/shop"
                  className="nav-links"
                >
                  {" "}
                  S H O P {" "}
                </Link>
              </li>
            </ul>
          </nav>
    </div>
  )
}

export default NavLinks