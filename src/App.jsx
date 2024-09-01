import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import userData from "./userData.json";
import FriendsData from "./FriendList.json";
import TransactionList from "./components/TransactionList/TransactionList";
import TransactionData from "./TransactionList.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={FriendsData} />

      <TransactionList transaction={TransactionData} />
    </>
  );
};

export default App;
