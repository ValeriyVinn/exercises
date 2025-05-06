// import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

// import { Profiled } from './Profile.styled';


export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={isOnline ? css.itemOnline : css.itemOffline}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

// FriendListItem.propTypes = {
//   isOnline: PropTypes.bool.isRequired,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };