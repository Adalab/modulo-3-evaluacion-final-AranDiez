import { Link } from 'react-router-dom';
import '../styles/MovieSceneDetail.scss';
function MovieSceneDetail(props) {
  console.log(props);
  return (
    <section>
      {/* <img className="img" alt={props.movie.movie} src={props.movie.poster} />
      <h2>{props.movie.title}</h2>
      <p>"{props.movie.full_line}"</p>
      <p>{props.movie.director}</p>
      <p>{props.movie.audio}</p> */}
      <p>Holi</p>
      <Link to="/" className="main__section2--back">
        Back to list
      </Link>
    </section>
  );
}
export default MovieSceneDetail;

// 28 - Hago la base para que le llegue la pelicula concreta por props
