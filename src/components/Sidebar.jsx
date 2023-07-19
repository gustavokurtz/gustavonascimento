import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";


import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass"



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gustavo Nascimento" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      
    </aside>
  )
}

export default Sidebar