import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from "@fortawesome/free-solid-svg-icons"

const FooterItem = ({
    path,
    label
}) => {
    return (
        <div className="footer-item">
            <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            <Link to={path} className={"footer-item"}>
                {label}
            </Link>
        </div>
    )
}

export default FooterItem;