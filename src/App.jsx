import "./App.css";
import heroImage from "./assets/hero.png";

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
        image={heroImage}
        description="Computer Science student interested in Java, React, Python and software development."
      />

    </div>
  );
}

export default App;
