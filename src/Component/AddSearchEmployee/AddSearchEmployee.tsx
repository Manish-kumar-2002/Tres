import { Link } from "react-router-dom";
// import "./AddSearchEmployee.scss";

const AddSearchEmployee = () => {
    return (
        <div>
            <div className="search-block">
                <input
                    type="text"
                    className="search-control"
                    name="Search"
                    placeholder="Search by employee name"
                />
                <i
                    role="button"
                    tabIndex={0}
                    className="Search-icon"
                    aria-label="search button"
                    aria-hidden="true"
                ></i>
            </div>
            <div className="addemployee-btn-wrap">
                <Link
                    to="/add-employee"
                    role="button"
                    className="add-employee-btn"
                >
                    <i className="add-icon" aria-hidden="true"></i>Add Employee
                </Link>

                <button type="button" className="import-export-btn">
                    <i
                        className="import-icon export-icon"
                        aria-hidden="true"
                    ></i>
                    Export
                </button>
            </div>
        </div>
    );
};

export default AddSearchEmployee;
