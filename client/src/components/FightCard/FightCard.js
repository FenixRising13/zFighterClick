import React from "react";
import "./FightCard.css";

const FightCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
    </div>
  </div>
);

export default FightCard;
