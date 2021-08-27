import FriendListItem from '../friendListItem/friendListItem';
import style from './friendList.module.css';

function FriendList({ friends }) {
  return (
    <div className={style.conteiner}>
      <ul className={style.friendList}>
        {friends.map(function (friend) {
          return (
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default FriendList;
