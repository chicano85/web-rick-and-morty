import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

// Props of CharacterList and link to details card

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <article className="character">
        <img src={props.image} alt={props.name} title={props.name} />
        <h3>{props.name}</h3>
        <p>{props.species}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
