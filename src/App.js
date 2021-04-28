import "./App.css";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/Friends";
import TransactionHistory from "./components/Transactions";
import user from "./json/user.json";
import statisticalData from "./json/statistical-data.json";
import friends from "./json/friends.json";
import items from "./json/transactions.json";

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
        stats={statisticalData}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={items}
      />
    </div>
  );
}

export default App;
