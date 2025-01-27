import React from "react"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./components/Home/HomePage"
import Navbar from "./components/Navbar/Navbar"

function App() {
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
}

export default App