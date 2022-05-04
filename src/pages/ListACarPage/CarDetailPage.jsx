import { useEffect, useState } from "react";
import "./ListACarPage.css";

const CarDetailPage = ({
    setCarDetails,
    setStepNum,
    stepNum
}) => {

    const [vin, setVin] = useState("");
    const [year, setYear] = useState(0);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [features, setFeatures] = useState("");
    const [capacity, setCapacity] = useState(0);
    const [color, setColor] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        setBtnDisabled(vin === "" || year === 0 || make === "" || model === "" || capacity === 0 || color === "");
    }, [vin, year, make, model, capacity, color])

    const setFinalCarDetails = () => {
        const finalDetails = {
            vin: vin,
            year: year,
            make: make,
            model: model,
            features: features,
            capacity: capacity,
            color: color
        }
        setCarDetails(finalDetails);
        setStepNum(stepNum + 1);
    }

    return (
        <div>
            <div>
                <label htmlFor={"vin"}>VIN</label><br/>
                <input type={"text"} onChange={e => setVin(e.target.value)} id={"vin"}/>
            </div>
            <div>
                <label htmlFor={"year"}>Year</label><br/>
                <input type={"number"} min={1920} max={2022} onChange={e => setYear(e.target.value)} id={"year"}/>
            </div>
            <div>
                <label htmlFor={"make"}>Make</label><br/>
                <input type={"text"} onChange={e => setMake(e.target.value)} id={"make"}/>
            </div>
            <div>
                <label htmlFor={"model"}>Model</label><br/>
                <input type={"text"} onChange={e => setModel(e.target.value)} id={"model"}/>
            </div>
            <div>
                <label htmlFor={"features"}>Features</label><br/>
                <input type={"text"} onChange={e => setFeatures(e.target.value)} id={"features"}/>
            </div>
            <div>
                <label htmlFor={"capacity"}>Capacity</label><br/>
                <input type={"number"} min={1} max={10} onChange={e => setCapacity(e.target.value)} id={"capacity"}/>
            </div>
            <div>
                <label htmlFor={"color"}>Color</label><br/>
                <input type={"text"} onChange={e => setColor(e.target.value)} id={"color"}/>
            </div>
            <div onClick={setFinalCarDetails} disabled={btnDisabled} className={`list-button ${btnDisabled ? "disabled" : "enabled"}`}>
                Car Photos
            </div>
        </div>
    )
}

export default CarDetailPage;