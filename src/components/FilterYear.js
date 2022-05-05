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
      <label className="" htmlFor="movieSearchYear">
        Year
      </label>
      <select name="movieSearchYear" id="year" onChange={handleYearSearch}>
        <option value="">All</option>
        {renderYears()}
      </select>
    </>
  );
}
export default FilterYear;

// 12 - Me llega handleFilterYear para poder hacer lifting cuando en el select hay un cambio (onChange)
// 15 - Hemos recibido getYear por props. Tenemos que transformar en array de años en un listado de options.m Llamamos a ese array dentro de option
