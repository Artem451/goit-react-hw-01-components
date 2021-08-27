import PropTypes from 'prop-types';
import style from './friendListItem.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={style.item} key={id}>
      <span className={isOnline ? style.online : style.ofline}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
