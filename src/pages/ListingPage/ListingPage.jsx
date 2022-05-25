import React from 'react';
import { Link } from "react-router-dom";
import CarList from "../../CarList/CarList"
import "./listing-page.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const ListingPage = () => {
    return (
        <div>
            <div className='list-header-main'>
                My Listings
            </div>
            <div className="car-list-listing">
                <CarList id={"6285c996e7a5bdb967e1f0db"}/>
            </div>
            <Link to={"/list-a-car"}>
                <div className="fab">
                    <FontAwesomeIcon icon={faPlus} color="white" size="2x"></FontAwesomeIcon>
                </div>
            </Link>

        </div>

    )
}

export default ListingPage;