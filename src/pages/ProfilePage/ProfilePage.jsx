import React from 'react';
import { Link } from "react-router-dom";
import "./profile-page.css";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProfileButton from './ProfileButton';
import { faUserGroup, faCreditCard, faNotesMedical, faBell, faLock, faGear, faArrowRightFromBracket, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfilePage = () => {
    const LABELS = ["Friends", "Payment Methods", "Insurance", "Notifications", "Change password", "Account Settings", "Sign out"];
    // TO-DO: Replace with actual pages in PATHS
    const PATHS = ["/account-settings", "/account-settings", "/account-settings", "/account-settings", "/account-settings", "/account-settings", "/account-settings"];
    const ICONS = [
        <FontAwesomeIcon icon={faUserGroup} className="profile-icon-button"></FontAwesomeIcon>,
        <FontAwesomeIcon icon={faCreditCard} className="profile-icon-button"></FontAwesomeIcon>,
        <FontAwesomeIcon icon={faNotesMedical} className="profile-icon-button"></FontAwesomeIcon>,
        <FontAwesomeIcon icon={faBell} className="profile-icon-button"></FontAwesomeIcon>,
        <FontAwesomeIcon icon={faLock} className="profile-icon-button"></FontAwesomeIcon>,
        <FontAwesomeIcon icon={faGear} className="profile-icon-button"></FontAwesomeIcon>,
        <FontAwesomeIcon icon={faRightFromBracket} className="profile-icon-button"></FontAwesomeIcon>
    ];

    return (
        <div>
            <div className="header-main">
                Profile
            </div>
            <div className="profile-content">
                <div className="profile-pic">

                </div>
                <div className="profile-name">
                    {"Carla Smith"}
                </div>
            </div>
            <div className="profile-content">
                {LABELS.map((label, i) => {
                    return <ProfileButton path={PATHS[i]} label={label} icon={ICONS[i]} />
                })}
            </div>
        </div>

    )
}

export default ProfilePage;