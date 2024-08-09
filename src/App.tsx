import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LightNavbar from "./components/generalComponents/LightNavbar";
import Home from "./Home";
import About from "./About";
import Footer from "./components/generalComponents/Footer";
import News from "./News";
import Career from "./Career";
import Contactus from "./Contactus";
import AgroPark from "./assets/AgroPark";
function App() {
  return (
    <>
      <BrowserRouter>
        <LightNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/agropark" element={<AgroPark />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
