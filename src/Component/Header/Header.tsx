import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/logo.png";
import Sidebar from "../Sidebar/Sidebar";
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo" aria-label="Tres Employer Logo">
                    <img src={mainLogo} alt="logo" />
                </Link>
                <a href="#" className="help-btn" aria-label="Help Button">
                    <i className="qustion-icon" aria-hidden="true"></i> Help
                </a>
                <div className="profile-mob-wrap">
                    <Link
                        to="/notifications"
                        className="notification-btn"
                        aria-label="Notification Button"
                    >
                        <i className="notification-icon" aria-hidden="true"></i>
                    </Link>
                    <a
                        href="#"
                        className="profile-show"
                        aria-label="Notification Button"
                    >
                        <i className="profile-icon" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div
                className={
                    "false" ? "mobile-sidebar" : "mobile-sidebar show-sidebar"
                }
            >
                <Sidebar />
            </div>
        </header>
    );
};

export default Header;
