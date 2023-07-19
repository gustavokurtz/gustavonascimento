import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

import "./styles/components/app.sass"

function App() {

  return (
   <div id="portfolio">
    <div id="gustavo">
      <h1>Gustavo Nascimento</h1>
    </div>
    <Sidebar />
    <MainContent />
   </div>
  )
}

export default App
