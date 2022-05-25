import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';
import './CarDetailPage.css'
import uploadCarData from '../ListACarPage/utils/uploadCarData';

const CarDetailPage = () => {
    const params = useParams();
    const id = params.listingId;
    const [carData, setCarData] = useState({});
    const [carFeatures, setCarFeatures] = useState("");
    const [dateRange, setDateRange] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [btnDisabled, setBtnDisabled] = useState(true);

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

    useEffect(() => {
        setBtnDisabled(dateRange.length !== 2);
    }, [dateRange]);

    useEffect(() => {
        console.log(dateRange)
    }, [dateRange]);

    const reserveVehicleHandler = () => {
        const body = {
            renterID: "6285c996e7a5bdb967e1f0db",
            carID: id,
            startDate: dateRange[0],
            endDate: dateRange[1]
        }
        console.log(body);
        uploadCarData(`http://localhost:3100/api/rentals`, body);
    }

    console.log(userInfo);
    return (
        <>
            <h1>{`${carData.year} ${carData.make} ${carData.model}`}</h1>
            <div>{`4.7* (22 trips)`}</div>
            <div>{`$115/day`}</div>
            <p>{carFeatures}</p>
            <Calendar selectRange={true} onChange={setDateRange} />
            <div className='host'>
                <h2>{`Hosted by`}</h2>
                <div>{`${userInfo.firstName} ${userInfo.lastName}`}</div>
            </div>

            {
            userInfo._id !== `6285c996e7a5bdb967e1f0db` 
            ? 
                <button className={`${btnDisabled ? `disabled` : `enabled`} detail-button`} onClick={reserveVehicleHandler} disabled={btnDisabled}>
                    {`Reserve vehicle`}
                </button> 
            :
                <button className={`enabled detail-button`}>
                    {`Edit Vehicle`}
                </button>
            }

        </>
    )
}

export default CarDetailPage;