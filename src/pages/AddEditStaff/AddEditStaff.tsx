import "./AddEditStaff.scss";
import { useWindowSize } from "../../hooks/windowSize";
import CardBackground from "../../Component/CardBackground/CardBackground";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import MainCard from "../../Component/MainCard/MainCard";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const AddEditStaff = () => {
    const windowSize = useWindowSize();

    return (
        <div className="add-staff main-container-wrap">
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
                                                        placeholder="Enter First Name Here"
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
                                                        placeholder="Enter Last Name Here"
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
                                                        placeholder="Enter Email Here"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div className="fill-details-wrap">
                                <h5 className="alignfor-checkbox">
                                    Permissions
                                </h5>
                                <Row>
                                    <Col>
                                        <div className="checkbox-align">
                                            <Form.Check
                                                type="checkbox"
                                                id="add-employee"
                                                label="Add Employee"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                id="Edit-employee"
                                                label="Edit Employee"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                id="Delete-employee"
                                                label="Delete Employee"
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                id="Manage-employee"
                                                label="Manage Staff"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="add-staff-btn">
                            <button type="submit" className="submit-btn">
                                Save
                            </button>
                        </div>
                    </Form>
                    <Link to="/manage-staff" className="back-btn-top">
                        <i className="icon-back" aria-hidden="true"></i>Back
                    </Link>
                </MainCard>
            </div>
        </div>
    );
};

export default AddEditStaff;
