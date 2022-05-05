import MovieSceneItem from './MovieSceneItem';
import '../styles/MovieSceneList.scss';

function MovieSceneList(props) {
  const moviesElements = props.movies.map((movie) => {
    return (
      <li key={movie.id} className="li">
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <section>
      <ul>{moviesElements}</ul>
    </section>
  );
}
export default MovieSceneList;

// 6 - Esta funcion hace un return de el ul con los li de MovieSceneItem dentro.
// Necesitamos la lista de peliculas. Se ha mandado a traves de props llamada movies. Hacemos un map para transformarlo en un array de li
// moviesElements es mi array generado con el map. es un array de li. Le paso por props cada uno de los objetos a MovieSceneItem (movie)
