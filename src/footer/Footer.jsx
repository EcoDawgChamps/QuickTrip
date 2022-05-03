import "./footer.css"
import FooterItem from "./FooterItem";

const LABELS = ["Rent", "List", "Trips", "Chat", "Profile"];
const PATHS = ["/", "/listing", "/trips", "/chat", "/profile"];

const Footer = () => {
    return (
        //TODO: Relpace links w appropriate pages
        <div className="footer">
            {LABELS.map((label, i) => {
                return <FooterItem path={PATHS[i]} label={label}/>
            })}
        </div>
    )
}

export default Footer;