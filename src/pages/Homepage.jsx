import CardList from "../components/CardList";

function Homepage({ data }) {
  return (
    <div>
      <h1>Homepage</h1>
      <CardList data={data} />
    </div>
  );
}

export default Homepage;
