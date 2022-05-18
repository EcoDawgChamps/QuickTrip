import React from 'react';
import { useEffect, useState } from "react";
import AddressPage from "./AddressPage";
import AvailabilityPage from "./AvailabilityPage";
import CarDetailPage from "./CarDetailPage";
import EndPage from "./EndPage";
import "./ListACarPage.css";
import PhotosUploadPage from "./PhotosUploadPage";
import SafetyPage from "./SafetyPage";
import StepBar from "./StepBar";

const ListACarPage = () => {
    const [stepNum, setStepNum] = useState(0);
    const [address, setAddress] = useState("");
    const [availability, setAvailability] = useState("");
    const [carDetails, setCarDetails] = useState({});
    const [carPhotos, setCarPhotos] = useState([]);
    const [page, setPage] = useState("");

    useEffect(() => {
        switch (stepNum) {
            case 0:
                setPage(<AddressPage setAddress={setAddress} setStepNum={setStepNum} stepNum={stepNum} />);
                break;
            case 1:
                setPage(<AvailabilityPage setAvailability={setAvailability} setStepNum={setStepNum} stepNum={stepNum} />);
                break;
            case 2:
                setPage(<CarDetailPage setCarDetails={setCarDetails} setStepNum={setStepNum} stepNum={stepNum} />);
                break;
            case 3:
                setPage(<PhotosUploadPage setPhotos={setCarPhotos} setStepNum={setStepNum} stepNum={stepNum} />);
                break;
            case 4:
                setPage(<SafetyPage setStepNum={setStepNum} stepNum={stepNum} />);
                break;
            case 5:
                setPage(<EndPage setStepNum={setStepNum} />)
                break;
            default:
                setPage(<>Something Broke</>);
                break;
        }
    }, [stepNum]);

    return (
        <div>
            {page}
            <StepBar stepNum={stepNum} />
        </div>
    )
}

export default ListACarPage;