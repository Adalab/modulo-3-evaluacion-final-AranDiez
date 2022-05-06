const getApiData = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie, index) => {
        return {
          id: index,
          poster: movie.poster,
          title: movie.movie,
          full_line: movie.full_line,
          year: movie.year,
          director: movie.director,
          audio: movie.audio,
        };
      });
      return dataClean;
    });
};
export default getApiData;

// 1 - Traigo los datos de la API. Lo convierto en json porque la API de da un string. Los limpio para quedarme con las propiedades que me interesan usando un map. dataClean es mi array de peliculas.
