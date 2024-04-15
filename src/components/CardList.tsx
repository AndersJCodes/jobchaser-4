import ProfileCard from "./ProfileCard";
import { Profile, FilteredProfiles } from "../types/types";

function CardList({ filteredProfiles }: FilteredProfiles) {
  if (!filteredProfiles) return;

  console.log(filteredProfiles);

  return (
    <div className="w-full px-10 pt-10 flex flex-wrap">
      {filteredProfiles.map((profile: Profile) => (
        <ProfileCard
          key={profile.id}
          id={profile.id}
          imgUrl={profile.imgUrl}
          fullName={profile.fullName}
          education={profile.education}
          location={profile.location}
          description={profile.description}
          skills={profile.skills}
          linkedin={profile.linkedin}
          github={profile.github}
        />
      ))}
    </div>
  );
}

export default CardList;
