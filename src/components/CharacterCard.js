import React from "react";
import "../App.css";

const CharacterCard = (props) => {
  return (
    <article className="character-box">
      <img src={props.image} alt={props.name} title={props.name} />
      <h3>{props.name}</h3>
      <p>{props.species}</p>
    </article>
  );
};
export default CharacterCard;
