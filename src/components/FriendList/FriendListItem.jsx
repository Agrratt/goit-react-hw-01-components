import PropTypes from "prop-types";
import { Item, Status, Avatar, Name } from 'components/FriendList/FriendList.styled';
import { FaCircle } from "react-icons/fa";

const FriendItem = ({ avatar, name, isOnline }) => {
    return (
        <Item>
            <Status eventType={isOnline}>
                <FaCircle />
            </Status>
            
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </Item>
        
    )
};

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

export default FriendItem;