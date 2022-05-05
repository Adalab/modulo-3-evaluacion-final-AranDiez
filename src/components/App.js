import { useState, useEffect } from 'react';
import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import getApiData from '../services/moviesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';
import ls from '../services/localStorage';
import '../styles/App.scss';

const App = () => {
  const [dataMovies, setDataMovies] = useState(ls.get('movies', []));
  const [filterMovie, setFilterMovie] = useState(ls.get('filterMovie', ''));
  const [filterYears, setFilterYears] = useState(ls.get('filterYears', ''));

  useEffect(() => {
    if (dataMovies.length === 0) {
      getApiData().then((dataClean) => {
        setDataMovies(dataClean);
      });
    }
  }, []);

  useEffect(() => {
    ls.set('movies', dataMovies);
    ls.set('filterMovie', filterMovie);
    ls.set('filterYears', filterYears);
  }, [dataMovies, filterMovie, filterYears]);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  const handleFilterYear = (value) => {
    setFilterYears(value);
  };

  const movieFilters = dataMovies
    .filter((item) => {
      return item.title.toLowerCase().includes(filterMovie.toLowerCase());
    })
    .filter((item) => {
      if (filterYears.length === 0) {
        return true;
      } else {
        return filterYears.includes(item.year);
      }
    });

  const getYear = () => {
    const movieYears = dataMovies.map((movie) => movie.year);
    const uniqueYear = movieYears.filter((year, index) => {
      return movieYears.indexOf(year) === index;
    });
    return uniqueYear;
  };
  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = dataMovies.find((movie) => movie.id === movieId);

  return (
    <>
      <h1 className="main__title">Owen Wilson WOW</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleFilterMovie={handleFilterMovie}
                filterMovie={filterMovie}
                handleFilterYear={handleFilterYear}
                years={getYear()}
              />
              <MovieSceneList movies={movieFilters} />
            </>
          }
        />
        <Route
          path="/movie/:movieId"
          element={<MovieSceneDetail user={movieFound} />}
        />
      </Routes>
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
// 15 - => FilterYear
// 16 - ahora tengo que concatenar el filtro de año con el otro para afectar a movieFilters
// 17 - creamos filterYear como array vacio. creo handleFilterYear y es la encargada de modificar la variable de estado (filterYear) que contenga los años por los que quiero filtrar
// 18 - uso un spread para decir que meta lo que habia mas lo que se manda
// 19 - hago un condicional que diga que si la longitud es 0 que nos return all (true). Si no, es que hay algo guardado, return los años que tengan incluido el año seleccionado.
// 20 - hacemos routes para poder clickar en cada peli y que salga en pantalla completa. He creado MovieSceneDetail
// 21 - instalo router dom. tenemos que importar routes (define el listado de routes) y matchPath y useLocation para coger datos de las rutas que estoy manejando
// 22 - => MovieSceneDetail
// 23 - hago el componente de routes. Dentro meto el path / y en su element va lo que tenia hasta ahora (componente filters y movieScenlist)
// 24 - hago la segunda ruta (que es variable) para MovieSceneDetail
// 25 - MovieSceneDetail necesita props que hagan referencia a la pelicula a pintar. Hay que sacarlo de la URL. Hay que usar matchPath y useLocation
// 26 - gestiono local storage. Hago archivo.js y lo importo arriba
// 27 - cambio useEffect para que compruebe si hay algo en local storage antes de todo
