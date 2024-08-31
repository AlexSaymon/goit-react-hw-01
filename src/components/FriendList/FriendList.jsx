import FriendListItem from "./FriendListItem";
import FriendsData from "../../FriendList.json";
import s from "./FriendList.module.css";
const FriendList = () => {
  return (
    <div>
      <ul className={s.wrapper}>
        {FriendsData.map((friend) => (
          <li className={s.li} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              status={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
