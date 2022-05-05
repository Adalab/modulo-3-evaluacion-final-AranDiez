import { useState, useEffect } from 'react';
import '../styles/App.scss';
import getApiData from '../services/moviesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

const App = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('');

  useEffect(() => {
    getApiData().then((dataClean) => {
      setDataMovies(dataClean);
    });
  }, []);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  const handleFilterYear = (value) => {
    setFilterYear(value);
  };
  const movieFilters = dataMovies.filter((item) => {
    return item.title.toLowerCase().includes(filterMovie.toLowerCase());
  });

  const getYear = () => {
    const movieYears = dataMovies.map((movie) => movie.year);
    const uniqueYear = movieYears.filter((year, index) => {
      return movieYears.indexOf(year) === index;
    });
    return uniqueYear;
  };
  return (
    <>
      <Filters
        handleFilterMovie={handleFilterMovie}
        filterMovie={filterMovie}
        handleFilterYear={handleFilterYear}
        years={getYear()}
      />
      <MovieSceneList movies={movieFilters} />
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
// 11 - Ahora hago el filter por year. He creado el componente FilterYear que es hijo de Filters
// 12 - => Filter Year
// 13 - creo una funcion getYear que me permita sacar los años de movieFilters. Creo un array que solo tenga los años
// 14 - para evitar que se repitan los años. guardo en uniqueYears la comparación de si ya esta el año o no (index of). retornamos solo aquellos que no estan en uniqueYear. Se lo mandamos a Filters para mandarlo a Filteryear
// 151 - => FilterYear
//  - ahora tengo que concatenar el filtro de año con el otro para afectar a movieFilters
