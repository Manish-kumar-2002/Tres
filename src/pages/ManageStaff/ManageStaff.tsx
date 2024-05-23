import { Modal, Pagination, Table } from "react-bootstrap";
import CardBackground from "../../Component/CardBackground/CardBackground";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import MainCard from "../../Component/MainCard/MainCard";
import { useWindowSize } from "../../hooks/windowSize";
import { useState } from "react";
import "./ManageStaff.scss";
import { Link } from "react-router-dom";

const ManageStaff = () => {
    const [show, setShow] = useState(false);
    const windowSize = useWindowSize();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="manage-staff main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground
                    heading={"Manage Staff"}
                    welcomeMessage={undefined}
                    children={undefined}
                />
            )}
            <MobileHeader mobileHeading={"Manage Staff"} />
            <MainCard>
                <div className="addemployee-btn-wrap">
                    <Link to="/add-staff">
                        <button type="button" className="add-employee-btn">
                            <i className="add-icon"></i>Add Staff
                        </button>
                    </Link>
                </div>
                <div className="table-wrap">
                    <Table responsive bordered striped>
                        <thead className="table-dark">
                            <tr>
                                <th>Full Name</th>
                                <th>Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Monica Smith</td>
                                <td>monica.smith@gmail.com</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <Link to="/view-staff">
                                            {" "}
                                            <i
                                                className="view"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>
                                        <Link to="/add-staff">
                                            <i
                                                className="edit"
                                                aria-hidden="true"
                                            ></i>
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={handleShow}
                                        >
                                            {" "}
                                            <i
                                                className="delete"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
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
            <div className="modal-delete-btn">
                <Modal
                    show={show}
                    onHide={handleClose}
                    className="align-cancel-btn"
                >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <div className="delete-staff">
                            <i className="warning-icon"></i>
                            <h6>Are You Sure?</h6>
                            <p>
                                This action is irreversible and will result in
                                the permanent loss of all your data. Please
                                double-check your decision, as we won't be able
                                to recover your information once the account is
                                deleted.
                            </p>
                            <div className="popup-inner-button">
                                <button type="button" className="btn-one">
                                    Delete
                                </button>
                                <button type="button" className="btn-two">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default ManageStaff;
