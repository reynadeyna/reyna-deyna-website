import About from "./pages/About";
import Music from "./pages/Music";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ama from "./pages/Ama";
import Opening from "./pages/Opening";
import Delufesto from "./pages/Delufesto";
import Links from "./pages/Links";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import w from "./assets/grazy.jpg";
import "./styles.css";

function App() {
  return (
    <>
      <div className="main">
        {/* <video src={w} autoPlay loop playsInline muted /> */}
        <img src={w}
        alt="" className="img-background"
        />
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
            <Route path="/opening" element={<Opening />} />
            <Route path="/delufesto" element={<Delufesto />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
