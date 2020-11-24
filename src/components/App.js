import React, { useEffect, useState } from "react";
import "../App.css";
import logo from "../images/logo-rick-morty.png";
import CharactersList from "./CharactersList";
import getDataFromApi from "../services/api";
import Filter from "./Filter";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  // save API data in a state
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  });

  // filter the characters to be painted

  const renderFilteredCharacters = () => {
    let results = characters.filter((character) => {
      return character.name.toUpperCase().includes(filterName.toUpperCase());
    });
    return results;
  };

  // function to save the filter data in the state

  const handleFilterName = (data) => {
    setFilterName(data.value);
  };

  return (
    <div className="App">
      <img src={logo} alt="Rick and Morty logo" />

      <Filter filterName={filterName} handleFilter={handleFilterName} />
      <CharactersList
        characters={renderFilteredCharacters()}
        filter={filterName}
      />
    </div>
  );
};

export default App;
