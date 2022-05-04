import { useNavigate } from "react-router-dom";
import "./ListACarPage.css";

const EndPage = ({
    setStepNum
}) => {

    const navigate = useNavigate()

    const nextPage = () => {
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