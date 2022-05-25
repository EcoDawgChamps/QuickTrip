import React, { useEffect, useState } from 'react';
import CurrentTripsItem from './CurrentTripsItem';

const CurrentTripsTab = () => {
    const [tripData, setTripData] = useState([]);
    let results = [];
    for (let i = 0; i < 5; i++) {
        results[i] = i;
    }

    useEffect(() => {
        fetch(`http://localhost:3100/api/rentals?userID=6285c996e7a5bdb967e1f0db`)
            .then(res => res.json())
            .then(async data => {
                const moddedData = await Promise.all(data.map(async item => {
                    const UPLOAD_URL = `http://localhost:3100/api/cars?carID=${item.carID}`;
                    let res = await fetch(UPLOAD_URL);
                    item.carData = await res.json();
                    return item;
                }));
                setTripData(moddedData);
            })
            .catch(err => console.log(err))
    }, [])

    console.log(tripData);
    return (
        <div className='current-car-list'>
            {tripData.map(rental => { return <CurrentTripsItem rental={rental} /> })}
        </div>
    )
}

export default CurrentTripsTab;