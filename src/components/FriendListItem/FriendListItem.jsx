import clsx from "clsx";
import s from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div>
      <img className={s.image} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(s.status, status ? s.isOnline : s.isOffline)}>
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
