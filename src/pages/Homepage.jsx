import CardList from "../components/CardList";
import HeroSearch from "../components/HeroSearch";

function Homepage({ data }) {
  //console.log("homepage:", data);
  return (
    <div>
      <HeroSearch />
      {data && <CardList data={data} />}
    </div>
  );
}

export default Homepage;
