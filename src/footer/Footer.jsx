import React from 'react';
import "./footer.css"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faCar, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

import Paper from '@mui/material/Paper';


// const navigate = useNavigate();
const [value, setValue] = "listing";

const handleChange = (event, newValue) => {
    // navigate(`/${newValue}`);
    setValue(newValue);
};

const Footer = () => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={handleChange}
                className="footer"
            >
                <BottomNavigationAction label="Rent" value="" component={Link} to="/" icon={<FontAwesomeIcon icon={faKey}></FontAwesomeIcon>} />
                <BottomNavigationAction label="List" value="listing" component={Link} to="/listing" icon={<FontAwesomeIcon icon={faCar}></FontAwesomeIcon>} />
                <BottomNavigationAction label="Trips" value="trips" component={Link} to="/trips" icon={<FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>} />
                <BottomNavigationAction label="Profile" value="profile" component={Link} to="/profile" icon={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>} />
            </BottomNavigation>
        </Paper>
    )
}

export default Footer;