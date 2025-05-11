import { Link } from "react-router";
import "./Navbar.css";

export default function Navbar({ user }) {
    return (<>
        <div className="navbar navbar-container">
            <nav className="nav-wrapper">
                {/* <div className="macrozen-title">MacroZen</div> */}
                <Link to="/" className="macrozen-title">MacroZen</Link>
            </nav>
        </div>
    </>);
}