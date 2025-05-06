// import PropTypes from 'prop-types';
import css from './Profile.module.css';
// import { css } from '@emotion/react'
// import {
//   Description,
//   Profiled,
//   Avatar,
//   Name,
//   Tag,
//   Location,
//   StatsUl,
//   ListItem,
//   Label,
//   Quantity,
// } from './Profile.styled';

// export const Profile = ({ avatar, tag, username, location, stats }) => {
//   return (
//     <Profiled>
//       <Description>
//         <Avatar src={avatar} alt={username}/>
//         <Name>{username}</Name>
//         <Tag>@{tag}</Tag>
//         <Location>{location}</Location>
//       </Description>
//       <StatsUl>
//         <ListItem>
//           <Label>Followers</Label>
//           <Quantity>{stats.followers}</Quantity>
//         </ListItem>
//         <ListItem>
//           <Label>Views</Label>
//           <Quantity>{stats.views}</Quantity>
//         </ListItem>
//         <ListItem>
//           <Label>Likes</Label>
//           <Quantity>{stats.likes}</Quantity>
//         </ListItem>
//       </StatsUl>
//     </Profiled>
//   );
// };

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.object.isRequired,
// };

export const Profile = ({ avatar, tag, username, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.items}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.items}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.items}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
