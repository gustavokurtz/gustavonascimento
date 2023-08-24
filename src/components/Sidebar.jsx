import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";


import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass"



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img data-aos="fade-right" src={Avatar} alt="Gustavo Nascimento" />
      
      <SocialNetworks />
      <InformationContainer />
      
    </aside>
  )
}

export default Sidebar