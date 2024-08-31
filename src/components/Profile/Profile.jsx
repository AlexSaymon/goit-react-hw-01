import s from "./Profile.module.css";

const Profile = ({ name, tag, location, stats, image }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.infoWrapper}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.statsWrapper}>
        <li className={s.item}>
          <span className={s.statsName}>Followers</span>
          <span className={s.statsDescr}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.statsName}>Views</span>
          <span className={s.statsDescr}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.statsName}>Likes</span>
          <span className={s.statsDescr}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
