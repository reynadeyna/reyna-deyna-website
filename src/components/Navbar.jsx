import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="nav">
                {/* <Link to="/" className="site-title">Angelware</Link> */}
                <ul>
                    {/* <li className="active"> */}
                        {/* <Link to="/">Home</Link> */}
                    {/* </li> */}
                    <li className="nav-links">
                        <Link to="/code">Code</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/music">Music</Link>
                    </li>
                </ul>
            </nav>
        </>


    )
}

export default Navbar