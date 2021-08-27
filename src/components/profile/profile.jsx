import PropTypes from 'prop-types';
import style from './profile.module.css';

function SocialCard({ name, tag, location, avatar, stats }) {
  return (
    <div className={style.conteiner}>
      <div className={style.profile}>
        <div className={style.description}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            className="avatar"
            width="120"
          />
          <p className="name">{name}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className={style.stats}>
          <li className={style.statListItem}>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers} </span>
          </li>
          <li className={style.statListItem}>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li className={style.statListItem}>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

SocialCard.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default SocialCard;
