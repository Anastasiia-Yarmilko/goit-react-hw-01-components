import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./defaultImage.png";
// import users from "./user.json";


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
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
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
    location: "The whole world"
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,

};

console.log(Profile);

export default Profile;