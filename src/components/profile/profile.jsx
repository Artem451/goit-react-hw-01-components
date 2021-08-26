import PropTypes from 'prop-types'
import style from './profile.module.css'

function SocialCard ({name, tag, location, avatar, stats}) {
  return ( 
    <div class={style.conteiner}>
      <div class={style.profile}>
        <div class={style.description}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            class="avatar"
            width = '120'
          />
          <p class="name">{name}</p>
          <p class="tag">@{tag}</p>
          <p class="location">{location}</p>
        </div>

        <ul class={style.stats}>
          <li class={style.statListItem}>
            <span class="label">Followers</span>
            <span class="quantity">{stats.followers} </span>
          </li>
          <li className={style.statListItem}>
            <span class="label">Views</span>
            <span class="quantity">{stats.views}</span>
          </li>
          <li className={style.statListItem}>
            <span class="label">Likes</span>
            <span class="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
    ) 
  }

  SocialCard.propTypes = {
    name: PropTypes.string, 
    tag: PropTypes.string, 
    location: PropTypes.string, 
    avatar: PropTypes.string, 
    stats: PropTypes.object,
  }

export default SocialCard