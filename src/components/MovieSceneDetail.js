import { Link } from 'react-router-dom';
import '../styles/MovieSceneDetail.scss';
function MovieSceneDetail(props) {
  return (
    <>
      <section className="main__section2">
        <img
          className="main__section2--img"
          alt={props.movie.movie}
          src={props.movie.poster}
        />
        <div className="main__section2--details">
          <h2>{props.movie.title}</h2>
          <p>"{props.movie.full_line}"</p>
          <p>{props.movie.director}</p>
          <a
            className="main__section2--audio"
            href={props.movie.audio}
            target="_blank"
          >
            AUDIO
          </a>
        </div>
      </section>
      <Link to="/" className="main__section2--back">
        Back to list
      </Link>
    </>
  );
}
export default MovieSceneDetail;

// 28 - Hago la base para que le llegue la pelicula concreta por props
