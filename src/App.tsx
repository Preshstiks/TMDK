import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LightNavbar from "./components/generalComponents/LightNavbar";
import Home from "./Home";
import About from "./About";
import Footer from "./components/generalComponents/Footer";
import News from "./News";
function App() {
  return (
    <>
      <BrowserRouter>
        <LightNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          {/*  <Route path="/career" element={<h1>Career</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
