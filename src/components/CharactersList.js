import React from "react";
import CharacterCard from "./CharacterCard";

const CharactersList = (props) => {
  console.log(props);
  const characterList = props.characters.map((character) => {
    return (
      <li className="character-item" key={character.id}>
        <CharacterCard
          id={character.id}
          image={character.image}
          name={character.name}
          species={character.species}
          gender={character.gender}
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
