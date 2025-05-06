// import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

// import { Profiled } from './Profile.styled';


export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ),
// };
