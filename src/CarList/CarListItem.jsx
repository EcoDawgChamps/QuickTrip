import "./car-list.css";
import React from "react";
import { Link } from "react-router-dom";
const CarListItem = ({
    car,
    srcURL
}) => {

    return (
        <Link to={`/${car._id}`} className="car-list-item">
            <div className="car-list-item-text">
                <div>
                    <div>{`${car.year} ${car.make} ${car.model}`}</div>
                    <div>{"4.7 * (22 Trips)"}</div>
                </div>
                <div>
                    <div>{"$115/day"}</div>
                </div>
            </div>
            <div className="car-image">
                <img alt={"tesla model x from unsplash.com"} src={srcURL} />
            </div>
        </Link>
    )
}

export default CarListItem;