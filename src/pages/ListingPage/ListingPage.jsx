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
                Car Listings
            </div>
            <div className="car-list-listing">
                <CarList />
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