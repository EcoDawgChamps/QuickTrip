import React from 'react';
import { useNavigate } from "react-router-dom";
import uploadCarData from './utils/uploadCarData'
import "./ListACarPage.css";

const EndPage = ({
    setStepNum,
    address,
    availability,
    carDetails,
    carPhotos
}) => {
    console.log(address, availability, carDetails, carPhotos);
    const navigate = useNavigate()
    const UPLOAD_URL = `http://localhost:3100/api/cars`;
    const nextPage = () => {
        const body = {
            owner: "6285c996e7a5bdb967e1f0db",
            year: carDetails.year,
            color: carDetails.color,
            vin: carDetails.vin,
            capacity: carDetails.capacity,
            location: address,
            features: carDetails.feature,
            make: carDetails.make,
            model: carDetails.model
        }
        uploadCarData(UPLOAD_URL, body).then(res => console.log(res.json())).catch(err => console.log(err));
        setStepNum(0);
        navigate("/listing");
    }

    return (
        <div>
            <div>
                <div onClick={nextPage} className={`list-button enabled`}>
                    Finished
                </div>
            </div>
        </div>
    )
}

export default EndPage;