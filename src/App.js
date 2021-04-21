import "./App.css";
import Profile from "./components/Profile";
import user from "./user.json";


// import "./json/user.json";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.followers}
        views={user.views}
        likes={user.likes}
      />
    </div>
  );
}

export default App;
