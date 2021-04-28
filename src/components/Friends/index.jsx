import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../Profile/defaultImage.png";
import './index.css';

const FriendList = ({ friends }) => (
    <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) =>(
        <li className="item" key={id}>
                {isOnline === true
                    ? <span className="status online"></span>
                    : <span className="status offline"></span>}
                <img className="avatar" src={avatar} alt={name} width="48px" />
                <p className="name">{name}</p>
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
    id: PropTypes.number,
};

export default FriendList;