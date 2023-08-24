import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import "aos/dist/aos.css"
import AOS from "aos"
import React, { useEffect } from 'react';

import "./styles/components/app.sass"

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-out-sine',
    });
  });



  return (
   <div id="portfolio">
    <div data-aos="fade-down" data-aos-delay="400" id="gustavo">
        <h1><span>👋</span> hello, i’m</h1>
      <h1>GUSTAVO NASCIMENTO</h1>
    </div>
    <Sidebar />
    <MainContent />
   </div>
  )
}

export default App
