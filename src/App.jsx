import About from "./pages/About";
import Music from "./pages/Music";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ama from "./pages/Ama";
import Delufesto from "./pages/Delufesto";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import w from "./assets/WebVideo1111.mp4";
import "./styles.css";

function App() {
  return (
    <>
      <div className="main">
        <video src={w} autoPlay loop playsInline muted />
        <div className="overlay"></div>
      </div>

      <div className="content">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ama" element={<Ama />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/delufesto" element={<Delufesto />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
