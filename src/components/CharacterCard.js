import React from "react";
import "../App.css";

const CharacterCard = (props) => {
  return (
    //link a la Details con props de CharacterList

    <article className="character-box">
      <img src={props.image} alt={props.name} title={props.name} />
      <h3>{props.name}</h3>
      <p>{props.species}</p>
    </article>
  );
};
export default CharacterCard;
