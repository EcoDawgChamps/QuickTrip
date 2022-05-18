import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ProfileButton = ({
    path,
    label,
    icon
}) => {
    return (
        <Link to={path} className="profile-button">
            <div>
                {icon}
                {label}
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="profile-arrow-icon"></FontAwesomeIcon>
        </Link>
    )
}

export default ProfileButton;