import { NavLink } from "react-router-dom";

const MobileSidebar = () => {
    return (
        <div className="mobile-sidebar">
            <ul className="mobile-nav">
                <li>
                    <NavLink to="/homepage" className="sidebar-link">
                        <i className="dashborad-icon" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/employee" className="sidebar-link">
                        <i className="employees-icon" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/manage-staff" className="sidebar-link">
                        <i className="staff-icon" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/medical" className="sidebar-link">
                        <i className="plans-icon" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/othermenu" className="sidebar-link">
                        <i className="three-dots-icon" aria-hidden="true"></i>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MobileSidebar;
