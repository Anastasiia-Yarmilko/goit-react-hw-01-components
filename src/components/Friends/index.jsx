import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../Profile/defaultImage.png";
import './index.css';

const FriendList = ({ friends }) => (
    <ul class="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) =>(
        <li class="item" key={id}>
                {isOnline === true
                    ? <span class="status online"></span>
                    : <span class="status offline"></span>}
                <img class="avatar" src={avatar} alt={name} width="48px" />
                <p class="name">{name}</p>
        </li>
        ))}
    </ul>
);

FriendList.defaultProps = {
    avatar: defaultImage,
    name: "Incognito",
    isOnline: true,
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};

export default FriendList;