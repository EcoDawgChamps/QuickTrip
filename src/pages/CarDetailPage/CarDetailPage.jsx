import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';


const CarDetailPage = () => {
    const params = useParams();
    const id = params.listingId;
    const [carData, setCarData] = useState({});
    const [carFeatures, setCarFeatures] = useState("");
    const [dateRange, setDateRange] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const CAR_INFO_URL = `http://localhost:3100/api/cars?carID=${id}`;
        fetch(CAR_INFO_URL).then(res => res.json()).then(data => {
            setCarData(data);
            setCarFeatures(data.features.join(", "));
            const USER_INFO_URL = `http://localhost:3100/api/users?userID=${data.owner}`;
            fetch(USER_INFO_URL).then(res => res.json()).then(data => {
                setUserInfo(data);
            }).catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }, []);

    console.log(userInfo);
    return (
        <>
            <h1>{`${carData.year} ${carData.make} ${carData.model}`}</h1>
            <div>{`4.7* (22 trips)`}</div>
            <div>{`$115/day`}</div>
            <p>{carFeatures}</p>
            <Calendar selectRange={true} onChange={setDateRange} />
            <h2>{`Hosted by`}</h2>
            <div>{`${userInfo.firstName} ${userInfo.lastName}`}</div>
        </>
    )
}

export default CarDetailPage;