import CardList from "../components/CardList";
import HeroSearch from "../components/HeroSearch";

function Homepage({ onSearch, SearchTerm, onSearchedProfiles }) {
  //console.log("homepage:", data);
  return (
    <main className=" bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <HeroSearch onsearch={onSearch} searchTerm={SearchTerm} />
        {onSearchedProfiles && (
          <CardList onSearchedProfiles={onSearchedProfiles} />
        )}
      </div>
    </main>
  );
}

export default Homepage;
