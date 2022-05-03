import "./ListACarPage.css";

const NUM_STEPS = 6;

const StepBar = ({
    stepNum
}) => {
    let dots = [];
    for(let i = 0; i < NUM_STEPS; i++) {
        let className = "dot";
        if (i === stepNum) {
            className += " filled"
        }
        dots.push(
            <div className={className}/>
        )
    }

    return (
        <div className="step-bar">
            {dots}
        </div>
    )
}

export default StepBar;