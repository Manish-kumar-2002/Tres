import { Modal, Pagination, Table } from "react-bootstrap";
import CardBackground from "../../Component/CardBackground/CardBackground";
import MainCard from "../../Component/MainCard/MainCard";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import { useState } from "react";
import AddSearchEmployee from "../../Component/AddSearchEmployee/AddSearchEmployee";
import FilterBy from "../../Component/FilterBy/FilterBy";
import { useWindowSize } from "../../hooks/windowSize";
import { Link } from "react-router-dom";
// import "./ManageEmployee.scss";

const ManageEmployee = () => {
    const [show, setShow] = useState(false);
    const windowSize = useWindowSize();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="manage-employee-block main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground heading={"Manage Employees"}>
                    <div>card/desktop</div>
                </CardBackground>
            )}
            <MobileHeader mobileHeading={"Manage Employees"} />
            <MainCard>
                <div className="searchbar-wrap">
                    <AddSearchEmployee />
                </div>

                <div className="add-filters">
                    <div className="plans-color-code">
                        <span className="plans-color medical-color">
                            Medical
                        </span>
                        <span className="plans-color dental-color">Dental</span>
                        <span className="plans-color vision-color">Vision</span>
                    </div>
                    <div className="filter-popup-btn">
                        <button
                            type="button"
                            className="filter-btn"
                            onClick={handleShow}
                        >
                            Filter By
                        </button>
                    </div>
                    {windowSize[0] > 991 && <FilterBy />}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            {windowSize[0] < 991 && <FilterBy />}
                        </Modal.Body>
                    </Modal>
                </div>

                <div className="table-wrap">
                    <Table responsive bordered striped>
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Employee ID</th>
                                <th>Plans</th>
                                <th>Member No.</th>
                                <th>Full Name</th>
                                <th>Hiring Date</th>
                                <th>Coverage Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>E-100911</td>
                                <td>
                                    <div className="plan-tag-wrap">
                                        <span className="plan-tag medical">
                                            MVPB
                                        </span>
                                        <span className="plan-tag dental">
                                            MVPB
                                        </span>
                                        <span className="plan-tag vision">
                                            MVPB
                                        </span>
                                    </div>
                                </td>
                                <td>ME1331779</td>
                                <td>Monica Smith</td>
                                <td>Sep, 04 2022</td>
                                <td>FAM</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/employee-details">
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-employee-details">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>E-100911</td>
                                <td>
                                    <div className="plan-tag-wrap">
                                        <span className="plan-tag medical">
                                            MVPB
                                        </span>
                                        <span className="plan-tag dental">
                                            MVPB
                                        </span>
                                        <span className="plan-tag vision">
                                            MVPB
                                        </span>
                                    </div>
                                </td>
                                <td>ME1331779</td>
                                <td>Monica Smith</td>
                                <td>Sep, 04 2022</td>
                                <td>FAM</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/employee-details">
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-employee-details">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>E-100911</td>
                                <td>
                                    <div className="plan-tag-wrap">
                                        <span className="plan-tag medical">
                                            MVPB
                                        </span>
                                        <span className="plan-tag dental">
                                            MVPB
                                        </span>
                                        <span className="plan-tag vision">
                                            MVPB
                                        </span>
                                    </div>
                                </td>
                                <td>ME1331779</td>
                                <td>Monica Smith</td>
                                <td>Sep, 04 2022</td>
                                <td>FAM</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/employee-details">
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-employee-details">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>E-100911</td>
                                <td>
                                    <div className="plan-tag-wrap">
                                        <span className="plan-tag medical">
                                            MVPB
                                        </span>
                                        <span className="plan-tag dental">
                                            MVPB
                                        </span>
                                        <span className="plan-tag vision">
                                            MVPB
                                        </span>
                                    </div>
                                </td>
                                <td>ME1331779</td>
                                <td>Monica Smith</td>
                                <td>Sep, 04 2022</td>
                                <td>FAM</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/employee-details">
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-employee-details">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>E-100911</td>
                                <td>
                                    <div className="plan-tag-wrap">
                                        <span className="plan-tag medical">
                                            MVPB
                                        </span>
                                        <span className="plan-tag dental">
                                            MVPB
                                        </span>
                                        <span className="plan-tag vision">
                                            MVPB
                                        </span>
                                    </div>
                                </td>
                                <td>ME1331779</td>
                                <td>Monica Smith</td>
                                <td>Sep, 04 2022</td>
                                <td>FAM</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/employee-details">
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-employee-details">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>06</td>
                                <td>E-100911</td>
                                <td>
                                    <div className="plan-tag-wrap">
                                        <span className="plan-tag medical">
                                            MVPB
                                        </span>
                                        <span className="plan-tag dental">
                                            MVPB
                                        </span>
                                        <span className="plan-tag vision">
                                            MVPB
                                        </span>
                                    </div>
                                </td>
                                <td>ME1331779</td>
                                <td>Monica Smith</td>
                                <td>Sep, 04 2022</td>
                                <td>FAM</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/employee-details">
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-employee-details">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>07</td>
                                <td>E-100911</td>
                                <td>
                                    <div className="plan-tag-wrap">
                                        <span className="plan-tag medical">
                                            MVPB
                                        </span>
                                        <span className="plan-tag dental">
                                            MVPB
                                        </span>
                                        <span className="plan-tag vision">
                                            MVPB
                                        </span>
                                    </div>
                                </td>
                                <td>ME1331779</td>
                                <td>Monica Smith</td>
                                <td>Sep, 04 2022</td>
                                <td>FAM</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/employee-details">
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-employee-details">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>08</td>
                                <td>E-100911</td>
                                <td>
                                    <div className="plan-tag-wrap">
                                        <span className="plan-tag medical">
                                            MVPB
                                        </span>
                                        <span className="plan-tag dental">
                                            MVPB
                                        </span>
                                        <span className="plan-tag vision">
                                            MVPB
                                        </span>
                                    </div>
                                </td>
                                <td>ME1331779</td>
                                <td>Monica Smith</td>
                                <td>Sep, 04 2022</td>
                                <td>FAM</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/employee-details">
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-employee-details">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>09</td>
                                <td>E-100911</td>
                                <td>
                                    <div className="plan-tag-wrap">
                                        <span className="plan-tag medical">
                                            MVPB
                                        </span>
                                        <span className="plan-tag dental">
                                            MVPB
                                        </span>
                                        <span className="plan-tag vision">
                                            MVPB
                                        </span>
                                    </div>
                                </td>
                                <td>ME1331779</td>
                                <td>Monica Smith</td>
                                <td>Sep, 04 2022</td>
                                <td>FAM</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/employee-details">
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-employee-details">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>E-100911</td>
                                <td>
                                    <div className="plan-tag-wrap">
                                        <span className="plan-tag medical">
                                            MVPB
                                        </span>
                                        <span className="plan-tag dental">
                                            MVPB
                                        </span>
                                        <span className="plan-tag vision">
                                            MVPB
                                        </span>
                                    </div>
                                </td>
                                <td>ME1331779</td>
                                <td>Monica Smith</td>
                                <td>Sep, 04 2022</td>
                                <td>FAM</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/employee-details">
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-employee-details">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="table-show-entries">
                    <div className="show-entries">
                        <span></span>
                        <div className="show-entries-wrap">
                            <label
                                htmlFor="entries"
                                className="filter-control-label"
                            >
                                Show Entries
                            </label>
                            <select tabIndex={0}>
                                <option value="5" tabIndex={0} role="button">
                                    5
                                </option>
                                <option value="10" tabIndex={0} role="button">
                                    10
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="pagination-wrap">
                        <Pagination>
                            {/* <Pagination.Prev /> */}
                            <Pagination.Item className="active-link">
                                {1}
                            </Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Next />
                        </Pagination>
                    </div>
                </div>
            </MainCard>
        </div>
    );
};

export default ManageEmployee;
