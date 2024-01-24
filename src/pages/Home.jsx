import { Link } from "react-router-dom";
import Links from "../components/Links";

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="p-0 w-90 mx-auto">
          <div className="widget text-center mt-20">
            <Link to="/delufesto" className="lg:text-2xl">
              <h1>Greetings, Angel</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer flex flex-col items-center justify-center mb-3">
        <h2 className="footer-text text-center">Designed and built by Angelware</h2>

        <div className="flex space-x-2 my-2 p-1">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Home;
