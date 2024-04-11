import ProfileCard from "./ProfileCard";
import { Profile, OnSearchedProfiles } from "../types/types";

function CardList({ onSearchedProfiles }: OnSearchedProfiles) {
  return (
    <div className="w-full px-10 pt-10 flex flex-wrap">
      {onSearchedProfiles.map((profile: Profile) => (
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
