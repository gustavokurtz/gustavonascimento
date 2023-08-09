import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiNodejs,
  } from "react-icons/di";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "node", name: "", icon: <DiNodejs /> },
    { id: "js", name: "", icon: <DiJsBadge /> },
    { id: "react", name: "", icon: <DiReact /> },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
              
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;