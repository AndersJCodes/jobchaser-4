import CardList from "../components/CardList";
import HeroSearch from "../components/HeroSearch";

function Homepage({ data }) {
  //console.log("homepage:", data);
  return (
    <main className=" bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <HeroSearch />
        {data && <CardList data={data} />}
      </div>
    </main>
  );
}

export default Homepage;
