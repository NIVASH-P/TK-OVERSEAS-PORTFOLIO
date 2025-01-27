import React from "react"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./components/Home/HomePage"
import Navbar from "./components/Navbar/Navbar"
import FeaturePage from "./components/Features/FeaturePage"

function App() {
  return(
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/feature" element={<FeaturePage />}/>
        </Routes>
    </Router>
  )
}

export default App