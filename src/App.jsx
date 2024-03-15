import React, {useEffect} from 'react'
import Navbar from "./Navbar"
import Kontakt from "./Kontakt"
import Home from "./Home"
import Portfolio from "./Portfolio"
import {Route, Routes} from "react-router-dom"
import Footer from "./Footer"
import Brev from "./Brev"
import Erfarenheter from "./Erfarenheter"
import Utbildningar from "./Utbildningar"
import Modal from './Modal'

function App() {
  

  return (
    
      <div className="App">
      <Navbar />
      <Modal/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/portfolio" element = {<Portfolio/>}/>
          <Route path="/kontakt" element = {<Kontakt/>}/>
          <Route path="/brev" element = {<Brev/>}/>
          <Route path="/erfarenheter" element = {<Erfarenheter/>}/>
          <Route path="/utbildningar" element = {<Utbildningar/>}/>
        </Routes>
      <Footer />
      </div>
    
  )
}

export default App
