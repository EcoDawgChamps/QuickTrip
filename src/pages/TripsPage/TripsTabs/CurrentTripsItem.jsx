import React from 'react';
import "../trips-page.css";
const CurrentTripsItem = ({
    rental
}) => {
    return (
        <div className="car-list-item">
            <div className="car-list-item-text">
                <div>
                    {`${rental.carData.year} ${rental.carData.make} ${rental.carData.model}`}
                </div>
                <div className='text-description'>
                    {"3 days left"}
                </div>
            </div>
            <div className="car-image">
                <img alt={"tesla model x from unsplash.com"} src={"https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGF8ZW58MHx8MHx8&w=1000&q=80"} />
            </div>
        </div>
    )
}

export default CurrentTripsItem;