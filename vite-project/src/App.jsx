import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutUs/AboutUs";

function App() {
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutMe />} />
    </Routes>
  </Router>;
}

export default App;
