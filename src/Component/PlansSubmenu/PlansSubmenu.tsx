import "./PlansSubmenu.scss";
import { NavLink } from "react-router-dom";

const PlansSubmenu = () => {
    return (
        <div>
            <div className="plan-submenu">
                <ul>
                    <li>
                        <NavLink to="/medical" className="plan-submenu-link">
                            Medical
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/vision" className="plan-submenu-link">
                            Vision
                        </NavLink>
                    </li>{" "}
                    <li>
                        <NavLink to="/dental" className="plan-submenu-link">
                            Dental
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PlansSubmenu;
