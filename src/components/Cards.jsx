import React from "react";
import "./Cards.scss";

function Cards({ properties }) {
  return (
    <div className="card_container">
      <div className="card_wrapper">
        {properties.map((property) => (
          <div key={property.id} className="card">
            <img src={property.cover} alt={property.title} />
            <div className="card_text_overlay">
              <p>{property.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
