import React from "react";
import CharacterCard from "./CharacterCard";

const CharactersList = (props) => {
  // pasar el código a JSX
  // pasar props a CharacterCard
  const characterList = props.Characters.map((character) => {
    return (
      <li className="character-item" key={character.id}>
        <CharacterCard
          id={character.id}
          image={character.image}
          name={character.name}
          species={character.species}
        />
      </li>
    );
  });

  return (
    <section>
      <ul className="character-list">{characterList}</ul>
    </section>
  );
};

export default CharactersList;
