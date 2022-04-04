// import user from 'Profile/user';
import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Marker,
  Quantity,
} from 'components/Profile/Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <Marker>Followers</Marker>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Marker>Views</Marker>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Marker>Likes</Marker>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
