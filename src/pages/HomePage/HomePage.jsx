import CarList from "../../CarList/CarList";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home">
            <div className="car-list-home">
                <CarList />    
            </div>
            
        </div>
    )
}

export default HomePage;