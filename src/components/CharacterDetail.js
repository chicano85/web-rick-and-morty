import React from "react";

const CharacterDetail = (props) => {
  return (
    <div>
      <section className="character-details character">
        <img src={props.image} alt={props.name} />
        <div className="card-details-text">
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
