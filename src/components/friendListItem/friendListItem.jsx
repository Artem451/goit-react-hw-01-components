import PropTypes from 'prop-types'
import style from './friendListItem.module.css'

function FriendListItem({
    avatar,
    name,
    isOnline,
    id,
}) {if(isOnline) {
    return (
        <li class={style.item} key = {id}>
            <span class={style.online}></span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>
    )} else {
        return (
            <li class={style.item} key = {id}>
                <span class={style.ofline}></span>
                <img class="avatar" src={avatar} alt={name} width="48" />
                <p class="name">{name}</p>
            </li>
        )
    }
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}

export default FriendListItem