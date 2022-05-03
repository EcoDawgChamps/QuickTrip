import { Link } from "react-router-dom";
import CarList from "../../CarList/CarList"
import "./listing-page.css"

const ListingPage = () => {
    return (
        <div>
            <div className="car-list-listing">
                <CarList />
            </div>
            <Link to={"/list-a-car"}>
            <div className="fab">

            </div>
            </Link>

        </div>

    )
}

export default ListingPage;