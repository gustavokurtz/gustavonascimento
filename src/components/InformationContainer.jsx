import "../styles/components/informationcontainer.sass";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  // Número de telefone do WhatsApp no formato internacional
  const phoneNumber = "+5532999165667"; 
  const Email = "gustavoocontact@gmail.com"

  // URL para o WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          {/* Adicione um hyperlink para o WhatsApp */}
          <a className="hyperLink" href={whatsappURL} target="_blank" rel="noopener noreferrer">
            (32)99916-5667
          </a>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <div>
          <h3>E-mail</h3>
          <p>gustavoocontact@gmail.com</p>
        </div>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Dores de Campos / MG</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
