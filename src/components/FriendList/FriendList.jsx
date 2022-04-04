import FriendListItem from 'components/FriendList/FriendListItem';
import PropTypes from 'prop-types';
import { Card } from 'components/FriendList/FriendList.styled';


const FriendList = ({friends}) => {
    return (
        <Card>
            {friends.map(({ id, avatar, name, isOnline }) => (
            
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            
            ))}

        </Card> 
        
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
        
    }))
};

export default FriendList;