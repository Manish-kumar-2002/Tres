// import { useState } from "react";
import "./ViewStaff.scss";
import { useWindowSize } from "../../hooks/windowSize";
import CardBackground from "../../Component/CardBackground/CardBackground";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import MainCard from "../../Component/MainCard/MainCard";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const ViewStaff = () => {
    // const [show, setShow] = useState(false);
    const windowSize = useWindowSize();

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div className="view-staff main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground heading={"Staff Details"}></CardBackground>
            )}
            <MobileHeader mobileHeading={"Add Staff"} />
            <div className="back-btn-align">
                <MainCard>
                    <Form>
                        <div className="add-staff-wrap">
                            <div className="fill-details-wrap">
                                <h5>Basic Information</h5>
                                <Row>
                                    <Col>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group className="form-block mb-3">
                                                    <Form.Label htmlFor="first-name">
                                                        First Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        id="first-name"
                                                        type="text"
                                                        defaultValue="Monica"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="form-block mb-3">
                                                    <Form.Label htmlFor="last-name">
                                                        Last Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        id="last-name"
                                                        type="text"
                                                        defaultValue="Smith"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group className="form-block mb-3">
                                                    <Form.Label htmlFor="email">
                                                        Email
                                                    </Form.Label>
                                                    <Form.Control
                                                        id="email"
                                                        type="email"
                                                        defaultValue="monicasmithn@example.com"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div className="fill-details-wrap">
                                <h5>Permissions</h5>
                                <Row>
                                    <Col>
                                        <div className="checkbox-align">
                                            <Form.Check
                                                type="checkbox"
                                                id="add-employee"
                                                label="Add Employee"
                                                checked
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                id="Edit-employee"
                                                label="Edit Employee"
                                                checked
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                id="Delete-employee"
                                                label="Delete Employee"
                                                disabled
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                id="Manage-employee"
                                                label="Manage Staff"
                                                disabled
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        {windowSize[0] < 991 && (
                            <div className="add-staff-btn">
                                <Link to="/add-staff" className="submit-btn">
                                    <i
                                        className="edit-icon"
                                        aria-hidden="true"
                                    ></i>{" "}
                                    Edit Details
                                </Link>
                            </div>
                        )}
                    </Form>
                    <div className="back-btn-top">
                        {windowSize[0] > 991 && (
                            <Link to="/add-staff" className="btn-two">
                                <i className="edit-icon" aria-hidden="true"></i>{" "}
                                Edit Details
                            </Link>
                        )}
                        <Link to="/manage-staff" className="back-btn">
                            <i className="icon-back" aria-hidden="true"></i>Back
                        </Link>
                    </div>
                </MainCard>
            </div>
        </div>
    );
};

export default ViewStaff;
