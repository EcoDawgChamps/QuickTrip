import { Link } from "react-router-dom";

const FooterItem = ({
    path,
    label
}) => {
    return (
    <div>
        <Link to={path} className={"footer-item"}>
            {label}
        </Link>
    </div>
    )
}

export default FooterItem;