import ProfileCard from "../components/ProfileCard";

function Homepage(data) {
  return (
    <div>
      <h1>Homepage</h1>
      <ProfileCard data={data} />
    </div>
  );
}

export default Homepage;
