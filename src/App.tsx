import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LightNavbar from "./components/generalComponents/LightNavbar";
import Home from "./Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <LightNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<h1>About</h1>} />
        <Route path="/news" element={<h1>News</h1>} />
        <Route path="/career" element={<h1>Career</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
