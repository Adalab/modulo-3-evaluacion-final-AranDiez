import FilterMovie from './FilterMovie';

function Filters(props) {
  return (
    <section className="">
      <form>
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovie={props.filterMovie}
        />
      </form>
    </section>
  );
}
export default Filters;
