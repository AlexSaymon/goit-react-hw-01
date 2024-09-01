import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={s.wrapper}>
        {friends.map((friend) => (
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
