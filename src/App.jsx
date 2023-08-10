import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

import "./styles/components/app.sass"

function App() {

  return (
   <div id="portfolio">
    <div id="gustavo">
        <h1><span>👋</span> hello, i’m</h1>
      <h1>GUSTAVO NASCIMENTO</h1>
    </div>
    <Sidebar />
    <MainContent />
   </div>
  )
}

export default App
