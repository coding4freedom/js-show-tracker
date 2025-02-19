
import { Link } from 'react-router-dom';
import Theme from "./Theme";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Theme />
            <Link to="/">
                <span>HOME</span>
            </Link>
        </div>
    )
}

export default NavBar;