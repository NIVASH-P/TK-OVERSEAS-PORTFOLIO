import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import Navbar from './components/Navbar/Navbar'
import PreLoader from './components/pre_loader/PreLoader'
import AboutMe from "./components/AboutUs/AboutUs";
import FeaturePage from "./components/Features/FeaturePage"
import ServicePage from './components/Services/ServicePage'

function App() {
  const [loading, isLoading] = React.useState(true)
  setTimeout(()=>{
    isLoading(false)
  }, 2000)
  return (
    <>
      {loading && <PreLoader />}
      {!loading && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preloader" element={<PreLoader />} />
            <Route path="/feature" element={<FeaturePage />}/> 
             <Route path="/aboutus" element={<AboutMe />} />
             <Route path="/services" element={<ServicePage />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App
