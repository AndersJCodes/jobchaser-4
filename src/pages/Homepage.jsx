import CardList from "../components/CardList";
import HeroSearch from "../components/HeroSearch";

function Homepage({ data, onSearch, SearchTerm, onSearchedProfiles }) {
  //console.log("homepage:", data);
  return (
    <main className=" bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <HeroSearch onsearch={onSearch} searchTerm={SearchTerm} />
        {data && (
          <CardList data={data} onSearchedProfiles={onSearchedProfiles} />
        )}
      </div>
    </main>
  );
}

export default Homepage;
