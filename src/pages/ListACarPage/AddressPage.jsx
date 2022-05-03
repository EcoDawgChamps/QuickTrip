import { useEffect, useState } from "react";
import "./ListACarPage.css";

const AddressPage = ({
    setAddress,
    setStepNum,
    stepNum
}) => {
    const [btnEnabled, setBtnEnabled] = useState(false);
    const [addressLineOne, setAddressLineOne] = useState("");
    const [addressLineTwo, setAddressLineTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");

    const setFullAddress = () => {
        const fullAddress = `${addressLineOne} ${addressLineTwo} ${city} ${state} ${zipcode}`;
        setAddress(fullAddress);
        setStepNum(stepNum + 1);
    }

    useEffect(() => {
        if (addressLineOne !== "" && city !== "" && state !== "" && zipcode !== "") {
            setBtnEnabled(true);
        } else {
            setBtnEnabled(false);
        }
    }, [addressLineOne, city, state, zipcode])

    return (
        <div className="address-page">
            <div>
                <label htmlFor={"address"}>Address Line 1</label><br/>
                <input type={"text"} onChange={e => setAddressLineOne(e.target.value)} id={"address"}/>
            </div>
            <div>
                <label htmlFor={"address2"}>Address Line 2 (Optional)</label><br/>
                <input type={"text"} onChange={e => setAddressLineTwo(e.target.value)} id={"address2"}/>
            </div>
            <div>
                <label htmlFor={"city"}>City</label><br/>
                <input type={"text"} onChange={e => setCity(e.target.value)} id={"city"}/>
            </div>
            <div>
                <label htmlFor={"state"}>State</label><br/>
                <input type={"text"} onChange={e => setState(e.target.value)} id={"state"}/>
            </div>
            <div>
                <label htmlFor={"zipcode"}>Zipcode</label><br/>
                <input type={"text"} onChange={e => setZipcode(e.target.value)} id={"zipcode"}/>
            </div>
            <div onClick={setFullAddress} disabled={!btnEnabled} className={`list-button ${btnEnabled ? "enabled" : "disabled"}`}>
                CarAvailability
            </div>
        </div>
    )
}

export default AddressPage;