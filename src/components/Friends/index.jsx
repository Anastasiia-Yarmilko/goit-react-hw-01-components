import React from "react";
// import PropTypes from "prop-types";
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

export default FriendList;