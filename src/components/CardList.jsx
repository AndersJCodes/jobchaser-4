import ProfileCard from "./ProfileCard";

function CardList({ data, onSearchedProfiles }) {
  console.log("Cardlist:", data);
  return (
    <div className="w-full px-10 pt-10 flex flex-wrap">
      {onSearchedProfiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          id={profile.id}
          imgUrl={profile.imgUrl}
          fullName={profile.fullName}
          education={profile.education}
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
