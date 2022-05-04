import FilterMovie from './FilterMovie';

function Filters(props) {
  return (
    <section className="">
      <form>
        <FilterMovie handleFilterMovie={props.handleFilterMovie} />
      </form>
    </section>
  );
}
export default Filters;
