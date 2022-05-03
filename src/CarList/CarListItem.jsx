import "./car-list.css";
const CarListItem = ({
    id
}) => {
    return (
        <div className="car-list-item">
            <div>
                <div>
                    <div>{"Tesla Model X 2016"}</div>
                    <div>{"4.7 * (22 Trips)"}</div>
                </div>
                <div>
                    <div>{"$115/day"}</div>
                </div>
            </div>
            <div className="car-image">
                <img alt={"tesla model x from unsplash.com"} src={"https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGF8ZW58MHx8MHx8&w=1000&q=80"} />
            </div>
        </div>
    )
}

export default CarListItem;