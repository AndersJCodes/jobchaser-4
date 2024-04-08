import CardList from "../components/CardList";
import HeroSearch from "../components/HeroSearch";

function Homepage({ onSearch, SearchTerm, onSearchedProfiles }) {
  //console.log("homepage:", data);
  return (
    <main className=" bg-gray-100">
      <HeroSearch onSearch={onSearch} searchTerm={SearchTerm} />
      <div className="max-w-7xl mx-auto">
        {onSearchedProfiles && (
          <CardList onSearchedProfiles={onSearchedProfiles} />
        )}
      </div>
    </main>
  );
}

export default Homepage;
