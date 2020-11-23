import React, { useEffect, useState } from "react";
import "../App.css";
import getDataFromApi from "../services/api";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // guardar en el estado los datos de la api
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  });
  return <div className="App">hola mundo</div>;
};

export default App;
