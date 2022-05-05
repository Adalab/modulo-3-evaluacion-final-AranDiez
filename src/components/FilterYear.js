import '../styles/FilterYear.scss';

function FilterYear(props) {
  const handleYearSearch = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  const renderYears = () => {
    return props.years.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };
  return (
    <>
      <div className="main__form--year">
        <label className="main__form--movieLabelYear" htmlFor="movieSearchYear">
          Year
        </label>
        <select
          className="main__form--movieInputYear"
          name="movieSearchYear"
          id="year"
          onChange={handleYearSearch}
        >
          <option className="main__form--movieOptYear" value="">
            All
          </option>
          {renderYears()}
        </select>
      </div>
    </>
  );
}
export default FilterYear;

// 12 - Me llega handleFilterYear para poder hacer lifting cuando en el select hay un cambio (onChange)
// 15 - Hemos recibido getYear por props. Tenemos que transformar en array de años en un listado de options.m Llamamos a ese array dentro de option
