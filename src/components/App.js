import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import logo from "../images/logo-rick-morty.png";
import CharactersList from "./CharactersList";
import getDataFromApi from "../services/api";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  // save API data in a state

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  });

  // function to save the filter data in the state

  const handleFilter = (data) => {
    setFilterName(data.value);
  };

  // filter the characters to be painted

  const renderCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(filterName.toUpperCase());
  });

  const renderDetails = (props) => {
    const RouteId = props.match.params.id;
    const character = characters.find(
      (character) => character.id === parseInt(RouteId)
    );
    return (
      <>
        <Link to="/">
          <div className="back-button">
            <p>Back</p>
          </div>
        </Link>
        {character ? (
          <CharacterDetail
            id={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            episode={character.episode}
          />
        ) : (
          <p>El personaje que buscas no existe.</p>
        )}
      </>
    );
  };

  return (
    <div className="App">
      <img
        src={logo}
        alt="Rick and Morty logo"
        className="logo"
        title="Rick and Morty logo"
      />
      <Switch>
        <Route exact path="/">
          <Filter filterName={filterName} handleFilter={handleFilter} />
          <CharactersList characters={renderCharacters} filter={filterName} />
        </Route>
        <Route path="/character/:id" render={renderDetails}></Route>
      </Switch>
    </div>
  );
};

export default App;
