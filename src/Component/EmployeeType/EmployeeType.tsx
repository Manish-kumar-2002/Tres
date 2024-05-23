import { Link } from "react-router-dom";
import "./EmployeeType.scss";

const EmployeeType = () => {
    return (
        <div className="employee-type">
            <div className="employee-head">
                <h2 className="bg-heading">
                    Select the number of employees you wish to add:
                </h2>
                <Link to="/employee">
                    <button type="button" className="back-btn">
                        <i className="icon-back" aria-hidden="true"></i>
                    </button>
                </Link>
            </div>

            <div className="employees-wrap">
                <Link to="/single-employee" className="employee-info">
                    <span className="employee-icon">
                        <i className="icon-single" aria-hidden="true"></i>
                    </span>
                    <h3>Single Employee</h3>
                    <p>Want to add single employee?</p>
                </Link>
                <Link to="/multiple-employee" className="employee-info">
                    <span className="employee-icon">
                        <i className="icon-multiple" aria-hidden="true"></i>
                    </span>
                    <h3>Multiple Employees</h3>
                    <p>Want to add multiple employees?</p>
                </Link>
            </div>
        </div>
    );
};

export default EmployeeType;
