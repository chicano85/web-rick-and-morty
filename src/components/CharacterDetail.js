import React from "react";

const CharacterDetail = (props) => {
  return (
    <div>
      <section className="card-details character-details">
        <img src={props.image} alt={props.name} />
        <div>
          <h2>{props.name}</h2>
          <ul>
            <li>Status: {props.status}</li>
            <li>Species: {props.species}</li>
            <li>Origin: {props.origin}</li>
            <li>Episodes: {props.episode.length}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default CharacterDetail;
