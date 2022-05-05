import '../styles/FilterMovie.scss';

function FilterMovie(props) {
  const handleMovieSearch = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <>
      <div className="main__form--movie">
        <label className="main__form--movieLabel" htmlFor="movieSearch">
          Movie
          <input
            className="main__form--movieInput"
            type="text"
            name="movieSearch"
            value={props.filterMovie}
            onChange={handleMovieSearch}
            placeholder="Movie title..."
          />
        </label>
      </div>
    </>
  );
}
export default FilterMovie;

// 9 - Recogemos el valor del input y mostramos solo a las peliculas que cumplen con esa condicion
// Creo un onchange y hago un lifting para cambiar la variable de estado setFilterMovie. Lo hago con la funcion setFilterMovie que me viene por props para hacer lifting
