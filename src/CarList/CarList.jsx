import CarListItem from "./CarListItem";
import "./car-list.css";
import React, { useEffect, useState } from 'react';
import { RandomPicture } from 'random-picture/dist';

const CarList = ({
    id
}) => {
    const [res, setRes] = useState([]);
    const [srcURLs, setsrcURLs] = useState([]);
    useEffect(() => {
        const UPLOAD_URL = `http://localhost:3100/api/cars?numCars=10${id !== "" ? `&userID=${id}` : ""}`;
        fetch(UPLOAD_URL)
            .then(r => r.json())
            .then(data =>setRes(data));
        let urls = [];
        for (let i = 0; i < 3; i++) {
            RandomPicture().then(p => p.url).then(url => urls.push(url))
        }
        setsrcURLs(urls);
    }, []);

    console.log(srcURLs);

    return (
        <div className="car-list">
            {res.map((item, i) => { return <CarListItem car={item} srcURL={srcURLs[Math.floor(Math.random() * 3)]} key={i} /> })}
        </div>
    )
}

export default CarList;