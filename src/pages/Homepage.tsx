import CardList from "../components/CardList";
import HeroSearch from "../components/HeroSearch";

function Homepage({
  onSearch,
  SearchTerm,
  filteredProfiles,
  locationOptions,
  educationOptions,
  onLocationChange,
  onEducationChange,
}) {
  //console.log("homepage:", data);
  return (
    <main className=" bg-gray-100">
      <HeroSearch
        onSearch={onSearch}
        searchTerm={SearchTerm}
        locationOptions={locationOptions}
        educationOptions={educationOptions}
        onEducationChange={onEducationChange}
        onLocationChange={onLocationChange}
      />
      <div className="max-w-7xl mx-auto">
        {filteredProfiles && <CardList filteredProfiles={filteredProfiles} />}
      </div>
    </main>
  );
}

export default Homepage;
