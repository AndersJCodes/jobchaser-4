import { ReactElement } from "react";
import CardList from "../components/CardList";
import HeroSearch from "../components/HeroSearch";
import { Profile } from "../types/types";

interface HomePageProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
  filteredProfiles: Profile[]; // Assuming Profile is a defined type somewhere in your project
  locationOptions: string[];
  educationOptions: string[];
  onEducationChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onLocationChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Homepage({
  onSearch,
  searchTerm,
  filteredProfiles,
  locationOptions,
  educationOptions,
  onLocationChange,
  onEducationChange,
}: HomePageProps): ReactElement {
  //console.log("homepage:", data);
  return (
    <main className=" bg-gray-100">
      <HeroSearch
        onSearch={onSearch}
        searchTerm={searchTerm}
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
