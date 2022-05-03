import CarListItem from "./CarListItem";
import "./car-list.css";

const CarList = () => {
    let results = [];
    for (let i = 0; i < 20; i++) {
        results[i] = i;
    }

    return (
        <div className="car-list">
            {results.map(item => {return <CarListItem id={item}/>})}
        </div>
    )
}

export default CarList;