import "./ListACarPage.css";
import React from 'react';

const SafetyPage = ({
    setStepNum,
    stepNum
}) => {

    const nextPage = () => {
        setStepNum(stepNum + 1);
    }

    return (
        <div>
            <div>
                <div onClick={nextPage} className={`list-button enabled`}>
                    Safety and Quality Standards
                </div>
            </div>
        </div>
    )
}

export default SafetyPage;