
import React from 'react';
import CurrentTripsItem from './CurrentTripsItem';

const CurrentTripsTab = () => {
    let results = [];
    for (let i = 0; i < 5; i++) {
        results[i] = i;
    }

    return (
        <div className='current-car-list'>
            {results.map(item => { return <CurrentTripsItem id={item} /> })}
        </div>
    )
}

export default CurrentTripsTab;