import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="nav">
                <ul>
                    <li className="active">
                        <Link to="/about" className="nav-links"> A B O U T </Link>
                    </li>
                    <li>
                        <Link to="/code" className="nav-links"> C O D 3 </Link>
                    </li>
                    <li>
                        <Link to="/music" className="nav-links"> M U S I C </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar