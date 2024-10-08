import React, { useState } from "react";
import './Collapse.scss';
import collapseimg from "../images/arrow-icon.svg";

// Composant Collapse
export default function Collapse({ data, containerStyle }) {
  // Un seul état pour chaque section de collapse (comme l'ancien code)
  const [openIndex, setOpenIndex] = useState(null);

  // Fonction pour basculer l'état d'une section
  const toggleSection = (index) => {
    // Si la section est déjà ouverte, on la ferme, sinon on l'ouvre
    if (openIndex === index) {
      setOpenIndex(null); // Fermer si déjà ouvert
    } else {
      setOpenIndex(index); // Ouvrir la section sélectionnée
    }
  };

  return (
    <div className="collapse-container" style={containerStyle}>
      {data.map((item, index) => (
        <div key={index} className="collapse-section">
          <div
            className="section-header"
            onClick={() => toggleSection(index)}
          >
            <h3>{item.title}</h3>
            <img
              className={`colapse-img ${openIndex === index ? "rotate" : ""}`}
              src={collapseimg}
              alt="flèche d'indication de la collapse"
            />
          </div>
          {/* Afficher le contenu uniquement si la section est ouverte */}
          {openIndex === index && (
            <div className="section-content">
              <p>{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}