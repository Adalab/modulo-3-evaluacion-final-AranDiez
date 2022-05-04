import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getApiData from '../services/moviesApi';
import MovieSceneList from './MovieSceneList';

const App = () => {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    getApiData().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, []);
  return (
    <>
      <MovieSceneList movies={dataMovies} />
    </>
  );
};

export default App;

// 1- moviesApi.js
// 2- importo el array obtenido de la api (getApiData)
// 3 - Comienzo a hacer la petición al servidor cuando carga la página. Los guardo en la variable dataMovies.
// 4 - Necesito useEffect para que haga la petición al iniciar página.
// 5 - Creo el componente MovieSceneList para la lista de pelis y MovieSceneItem para cada peli
// 6 - MovieSceneList
