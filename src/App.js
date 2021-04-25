import "./App.css";
import Profile from "./components/Profile";
import user from "./json/user.json";
import data from "./json/statistical-data.json";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        data={data}
      />
    </div>
  );
}

export default App;
