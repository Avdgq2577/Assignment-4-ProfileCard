import "./App.css";

function ProfileCard(props) {
  return (
    <div className="profile-card">

      <img
        src={props.image}
        alt={props.name}
        className="profile-image"
      />

      <h2>{props.name}</h2>

      <p>{props.description}</p>

    </div>
  );
}

function App() {
  return (
    <div className="app">

      <h1>Profile Card</h1>

      <ProfileCard
        name="Avadhoot"
        image="./assets/hero.png"
        description="Computer Science student interested in Java, React, Python and software development."
      />

    </div>
  );
}

export default App;
