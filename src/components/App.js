import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getApiData from '../services/moviesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

const App = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');

  useEffect(() => {
    getApiData().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, []);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  const movieFilters = dataMovies.filter((movie) => {
    return movie.movie.toLowerCase().includes(filterMovie.toLowerCase());
  });
  return (
    <>
      <Filters handleFilterMovie={handleFilterMovie} />
      <MovieSceneList movies={dataMovies} />
    </>
  );
};

export default App;

// 1- => moviesApi.js
// 2- importo el array obtenido de la api (getApiData)
// 3 - Comienzo a hacer la petición al servidor cuando carga la página. Los guardo en la variable dataMovies.
// 4 - Necesito useEffect para que haga la petición al iniciar página.
// 5 - Creo el componente MovieSceneList para la lista de pelis y MovieSceneItem para cada peli
// 6 - =>  MovieSceneList (pintar li)
// 7 - He creado filters.js para gestionar filtros
// 8 - Creamos una variable de estado donde yo filtro por pelicula. Se modifica cuando escribe en el input la usuaria
// 9 - => FilterMovie
// 10 - userlist es quien pinta, necesitamos mandarle los datos ya filtrados. Creamos la constante movieFilters y ahi haremos los filters.
