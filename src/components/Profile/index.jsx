import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./defaultImage.png";
import './index.css';


const Profile = ({ name, tag, location, avatar, followers, views, likes }) => (
    <div className="profile" key={name}>
        <div className="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                className="avatar"
            />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li className="stats-item">
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li className="stats-item">
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li className="stats-item">
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
    avatar: defaultImage,
    name: "Incognito",
    tag: "Incognito",
    location: "The whole world",
    followers: 0,
    views: 0,
    likes: 0,
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Profile;