import "../styles/components/informationcontainer.sass";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  // Número de telefone do WhatsApp no formato internacional
  const phoneNumber = "+5532999165667";

  // URL para o WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  // URL para abrir o Google Maps com a localização da sua cidade
  const googleMapsURL = "https://www.google.com/maps/place/Dores+de+Campos,+MG";

  // URL para o Gmail com o endereço de e-mail preenchido
  const gmailURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=gustavoocontact@gmail.com`;

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
          <a className="hyperLink" href={gmailURL} target="_blank" rel="noopener noreferrer">
            gustavoocontact@gmail.com
          </a>
          </div>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          {/* Adicione um hyperlink para o Google Maps */}
          <a className="hyperLink" href={googleMapsURL} target="_blank" rel="noopener noreferrer">
            Dores de Campos / MG
          </a>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
