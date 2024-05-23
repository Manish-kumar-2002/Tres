import "./AddEmployeeDetails.scss";
import { useWindowSize } from "../../hooks/windowSize";
import CardBackground from "../../Component/CardBackground/CardBackground";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import MainCard from "../../Component/MainCard/MainCard";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const AddEmployeeDetails = () => {
    const windowSize = useWindowSize();
    return (
        <div className="add-employee-details main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground
                    heading={"Employee Details"}
                    welcomeMessage={undefined}
                    children={undefined}
                ></CardBackground>
            )}
            <MobileHeader mobileHeading={"Employee Details"} />
            <MainCard>
                <div className="global-tab">
                    <Form>
                        <div className="fill-details-wrap">
                            <h5>Basic Details</h5>
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
                                                <Form.Label htmlFor="date-of-birth">
                                                    Date of Birth
                                                </Form.Label>
                                                <Form.Control
                                                    id="date-of-birth"
                                                    type="text"
                                                    placeholder="Enter DOB Here"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-block mb-3">
                                                <Form.Label htmlFor="sex-orientation">
                                                    Sex Orientation
                                                </Form.Label>
                                                <Form.Select
                                                    id="sex-orientation"
                                                    aria-label="Default select example"
                                                >
                                                    <option>
                                                        Select Sex Orientation
                                                    </option>
                                                    <option value="male">
                                                        Male
                                                    </option>
                                                    <option value="female">
                                                        Female
                                                    </option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="form-block mb-3">
                                                <Form.Label htmlFor="employee-code">
                                                    Employee Code
                                                </Form.Label>
                                                <Form.Control
                                                    id="employee-code"
                                                    type="text"
                                                    placeholder="Enter Employee Code Here"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-block mb-3">
                                                <Form.Label htmlFor="SSN">
                                                    Social Security Number (SSN)
                                                </Form.Label>
                                                <Form.Control
                                                    id="SSN"
                                                    type="text"
                                                    defaultValue="XXX-XX-6543"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="form-block mb-3">
                                                <Form.Label htmlFor="hiring-date">
                                                    Hiring Date
                                                </Form.Label>
                                                <Form.Control
                                                    id="hiring-date"
                                                    type="date"
                                                    placeholder="Sep, 04 2022"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-block mb-3">
                                                <Form.Label htmlFor="member-number">
                                                    Member Number
                                                </Form.Label>
                                                <Form.Control
                                                    id="member-number"
                                                    type="text"
                                                    defaultValue="ME1331779"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="form-block mb-3">
                                                <Form.Label htmlFor="termination-date">
                                                    Termination Date
                                                </Form.Label>
                                                <Form.Control
                                                    id="termination-date"
                                                    type="date"
                                                    placeholder="Sep, 04 2022"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <div className="fill-details-wrap">
                            <h5>Contact Details</h5>
                            <Row>
                                <Col>
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
                                        <Col lg={6}>
                                            <Form.Group className="form-block mb-3">
                                                <Form.Label htmlFor="home-number">
                                                    Home Number
                                                </Form.Label>
                                                <Form.Control
                                                    id="home-number"
                                                    type="text"
                                                    placeholder="Enter Last Name Here"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="form-block mb-3">
                                                <Form.Label htmlFor="phone">
                                                    Phone Number
                                                </Form.Label>
                                                <Form.Control
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="Enter Phone Number Here"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-block mb-3">
                                                <Form.Label htmlFor="work">
                                                    Work Number
                                                </Form.Label>
                                                <Form.Control
                                                    id="work"
                                                    type="text"
                                                    placeholder="Enter Work Number Here"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <div className="fill-details-wrap">
                            <h5>Address Details</h5>
                            <Row>
                                <Col lg={12}>
                                    <Form.Group className="form-block mb-4">
                                        <Form.Label htmlFor="profile-address-1">
                                            Address Line 1
                                        </Form.Label>
                                        <Form.Control
                                            id="profile-address-1"
                                            type="text"
                                            placeholder="Enter Address Here"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={12}>
                                    <Form.Group className="form-block mb-4">
                                        <Form.Label htmlFor="profile-address-2">
                                            Address Line 2
                                        </Form.Label>
                                        <Form.Control
                                            id="profile-address-2"
                                            type="text"
                                            placeholder="Enter Address Here"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="form-block mb-4">
                                        <Form.Label htmlFor="profile-city">
                                            City
                                        </Form.Label>
                                        <Form.Control
                                            id="profile-city"
                                            type="text"
                                            placeholder="Enter City Here"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="form-block mb-4">
                                        <Form.Label htmlFor="profile-state">
                                            State
                                        </Form.Label>
                                        <Form.Control
                                            id="profile-state"
                                            type="text"
                                            placeholder="Enter State Here"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="form-block mb-4">
                                        <Form.Label htmlFor="profile-postal">
                                            Postal Code
                                        </Form.Label>
                                        <Form.Control
                                            id="profile-postal"
                                            type="text"
                                            placeholder="Enter Postal Code Here"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="form-block mb-4">
                                        <Form.Label htmlFor="profile-country">
                                            Country
                                        </Form.Label>
                                        <Form.Control
                                            id="profile-country"
                                            type="text"
                                            placeholder="Enter Country Here"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col xs={12}>
                                <button type="submit" className="submit-btn">
                                    Save
                                </button>
                            </Col>
                        </Row>
                    </Form>
                    <Link to="/employee" className="back-btn-top">
                        <i className="icon-back" aria-hidden="true"></i>Back
                    </Link>
                </div>
            </MainCard>
        </div>
    );
};

export default AddEmployeeDetails;
