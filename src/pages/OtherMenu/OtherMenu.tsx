import { NavLink } from "react-router-dom";
import MainCard from "../../Component/MainCard/MainCard";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import innerLogo from "../../assets/images/inner-logo.svg";
import "./OtherMenu.scss";
const OtherMenu = () => {
    return (
        <div className="more-options main-container-wrap">
            <MobileHeader mobileHeading={"More Options"} />
            <MainCard>
                <div className="inner-logo-wrap">
                    <img src={innerLogo} alt="" />
                </div>
                <ul className="more-options-nav">
                    <li>
                        <NavLink to="/profile" className="sidebar-link">
                            <i
                                className="profile-show-icon"
                                aria-hidden="true"
                            ></i>
                            My Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-admin" className="sidebar-link">
                            <i className="admin-icon" aria-hidden="true"></i>
                            Contact Admin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/download-docs" className="sidebar-link">
                            <i className="docs-icon" aria-hidden="true"></i>
                            Download Docs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout" className="sidebar-link">
                            <i className="logout-icon" aria-hidden="true"></i>
                            Logout
                        </NavLink>
                    </li>
                </ul>
                <h6>version 1.0</h6>
            </MainCard>
        </div>
    );
};

export default OtherMenu;
