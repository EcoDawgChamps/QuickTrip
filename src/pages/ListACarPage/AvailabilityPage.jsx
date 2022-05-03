import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./ListACarPage.css";

const AvailabilityPage = ({
    setAvailability,
    setStepNum,
    stepNum
}) => {

    const [dateRange, setDateRange] = useState([]);
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        setBtnDisabled(dateRange.length != 2);
    }, [dateRange]);

    const setFinalAvailability = () => {
        setAvailability(dateRange);
        setStepNum(stepNum + 1);
    }

    return (
        <div className="cal-container">
            <Calendar selectRange={true} onChange={setDateRange} />

            <div onClick={setFinalAvailability} disabled={btnDisabled} className={`list-button ${btnDisabled ? "disabled" : "enabled"}`}>
                Car Details
            </div>
        </div>
    )
}

export default AvailabilityPage;