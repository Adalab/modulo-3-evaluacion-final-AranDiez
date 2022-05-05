import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  return (
    <section className="">
      <form>
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovie={props.filterMovie}
        />
        <FilterYear
          handleFilterYear={props.handleFilterYear}
          years={props.years}
        />
      </form>
    </section>
  );
}
export default Filters;
