import { NavLink, useLocation } from "react-router-dom";
import Profile from "../../Component/profile/Profile";
import { useEffect, useState } from "react";

const Sidebar = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [isSubRouteActive, setIsSubRouteActive] = useState(false);
    const pathname = useLocation().pathname;

    useEffect(() => {
        console.log("pathname", pathname);
        if (
            pathname === "/medical" ||
            pathname === "/dental" ||
            pathname === "/vision"
        ) {
            setIsSubRouteActive(true);
        } else {
            setIsSubRouteActive(false);
        }
    }, [pathname]);

    const toggleMenuHandler = () => {
        setShowSubMenu((prev) => !prev);
    };
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="top-sidebar">
                    <Profile />

                    <ul className="navigation-menu">
                        <li>
                            <NavLink to="/homepage" className="sidebar-link">
                                <i
                                    className="dashborad-icon"
                                    aria-hidden="true"
                                ></i>
                                Dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/employee" className="sidebar-link">
                                <i
                                    className="employees-icon"
                                    aria-hidden="true"
                                ></i>
                                Manage Employees
                            </NavLink>
                        </li>

                        <li>
                            <button
                                type="button"
                                onClick={toggleMenuHandler}
                                className={`sidebar-link sidebar-link-toggle ${
                                    isSubRouteActive ? "active" : ""
                                }`}
                            >
                                <i
                                    className="plans-icon"
                                    aria-hidden="true"
                                ></i>
                                Plans
                                <i
                                    className={`dropdown-icon ${
                                        showSubMenu ? "active" : ""
                                    }`}
                                ></i>
                            </button>
                            {showSubMenu && (
                                <ul className="submenu">
                                    <li>
                                        <NavLink
                                            to="/medical"
                                            className="submenu-link"
                                        >
                                            <i
                                                className="employees-icon"
                                                aria-hidden="true"
                                            ></i>
                                            Medical
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/vision"
                                            className="submenu-link"
                                        >
                                            <i
                                                className="employees-icon"
                                                aria-hidden="true"
                                            ></i>
                                            Vision
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/dental"
                                            className="submenu-link"
                                        >
                                            <i
                                                className="employees-icon"
                                                aria-hidden="true"
                                            ></i>
                                            Dental
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <NavLink
                                to="/download-docs"
                                className="sidebar-link"
                            >
                                <i className="docs-icon" aria-hidden="true"></i>
                                Download Docs
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/notifications"
                                className="sidebar-link"
                            >
                                <i
                                    className="notifications-icon"
                                    aria-hidden="true"
                                ></i>
                                Notifications
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/manage-staff"
                                className="sidebar-link"
                            >
                                <i
                                    className="staff-icon"
                                    aria-hidden="true"
                                ></i>
                                Manage Staff
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact-admin"
                                className="sidebar-link"
                            >
                                <i
                                    className="admin-icon"
                                    aria-hidden="true"
                                ></i>
                                Contact Admin
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="down-sidebar">
                    <NavLink to="/profile" className="submenu-link">
                        <i className="profile-show-icon" aria-hidden="true"></i>
                        My Profile
                    </NavLink>
                    <NavLink to="/logout" className="submenu-link">
                        <i className="logout-icon" aria-hidden="true"></i>Logout
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
