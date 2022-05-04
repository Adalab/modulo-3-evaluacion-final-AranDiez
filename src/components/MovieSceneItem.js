import '../styles/MovieSceneItem.scss';

function MovieSceneItem(props) {
  return (
    <section>
      <img className="img" alt={props.movie.movie} src={props.movie.poster} />
      <h2>
        {props.movie.title} - {props.movie.year}
      </h2>
      <p>{props.movie.full_line}</p>
    </section>
  );
}
export default MovieSceneItem;
