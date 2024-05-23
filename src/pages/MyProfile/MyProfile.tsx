// import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MyProfile.scss";
import { useWindowSize } from "../../hooks/windowSize";
import CardBackground from "../../Component/CardBackground/CardBackground";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import MainCard from "../../Component/MainCard/MainCard";
import adminProfile from "../../assets/images/person.png";
const MyProfile = () => {
    // const [show, setShow] = useState(false);
    const windowSize = useWindowSize();

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div className="my-profile main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground
                    heading={"My Profile"}
                    welcomeMessage={undefined}
                    children={undefined}
                ></CardBackground>
            )}
            <MobileHeader mobileHeading={"My Profile"} />
            <MainCard>
                <div className="form-wrap">
                    <Form>
                        <Row>
                            <Col xs={12} className="mb-lg-1">
                                <Row className="justify-content-between mb-lg-3 mb-xl-0">
                                    <Col
                                        xs={12}
                                        lg={3}
                                        xl={2}
                                        className="mb-md-3 mb-lg-0 col-manage"
                                    >
                                        <div className="profile-block">
                                            <div className="profile-img2">
                                                <img
                                                    src={adminProfile}
                                                    alt="img"
                                                />
                                            </div>
                                            <label
                                                className="edit-btn"
                                                role="button"
                                                htmlFor="edit-picture"
                                            >
                                                <i
                                                    className="edit-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                Edit Picture
                                            </label>
                                            <input
                                                type="file"
                                                name="edit-picture"
                                                id="edit-picture"
                                                className="edit-picture"
                                            />
                                        </div>
                                    </Col>
                                    <Col
                                        xs={12}
                                        lg={9}
                                        xl={10}
                                        className="col-manage"
                                    >
                                        <Row>
                                            <h5>Basic Details</h5>
                                            <Col xs={12} md={6}>
                                                <Form.Group className="form-block mb-3">
                                                    <Form.Label htmlFor="profile-first-name">
                                                        First Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        id="profile-first-name"
                                                        type="text"
                                                        defaultValue="John"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group className="form-block mb-3">
                                                    <Form.Label htmlFor="profile-last-name">
                                                        Last Name
                                                    </Form.Label>
                                                    <Form.Control
                                                        id="profile-last-name"
                                                        type="text"
                                                        defaultValue="Smith"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group className="form-block mb-3">
                                                    <Form.Label htmlFor="profile-number">
                                                        Phone Number
                                                    </Form.Label>
                                                    <Form.Control
                                                        id="profile-number"
                                                        type="tel"
                                                        defaultValue="+1 - 5852826994"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group className="form-block mb-3">
                                                    <Form.Label htmlFor="profile-email">
                                                        Email
                                                    </Form.Label>
                                                    <Form.Control
                                                        id="profile-email"
                                                        type="email"
                                                        defaultValue="johnsmith@example.com"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12}>
                                <Row className="profile-details-wrap">
                                    <h5>Address Details</h5>
                                    <Col xs={12}>
                                        <Form.Group className="form-block mb-4">
                                            <Form.Label htmlFor="profile-address-1">
                                                Address Line 1
                                            </Form.Label>
                                            <Form.Control
                                                id="profile-address-1"
                                                type="text"
                                                defaultValue="123 Main Street, Belleville Road, St. Stephen Church "
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group className="form-block mb-4">
                                            <Form.Label htmlFor="profile-address-2">
                                                Address Line 2
                                            </Form.Label>
                                            <Form.Control
                                                id="profile-address-2"
                                                type="text"
                                                defaultValue="Street No-4, Apartment 456"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group className="form-block mb-4">
                                            <Form.Label htmlFor="profile-city">
                                                City
                                            </Form.Label>
                                            <Form.Control
                                                id="profile-city"
                                                type="text"
                                                defaultValue="Lucerne Valley"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group className="form-block mb-4">
                                            <Form.Label htmlFor="profile-state">
                                                State
                                            </Form.Label>
                                            <Form.Control
                                                id="profile-state"
                                                type="text"
                                                defaultValue="California"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group className="form-block mb-4">
                                            <Form.Label htmlFor="profile-postal">
                                                Postal Code
                                            </Form.Label>
                                            <Form.Control
                                                id="profile-postal"
                                                type="text"
                                                defaultValue="9001"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group className="form-block mb-4">
                                            <Form.Label htmlFor="profile-country">
                                                Country
                                            </Form.Label>
                                            <Form.Control
                                                id="profile-country"
                                                type="text"
                                                defaultValue="United State"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </MainCard>
        </div>
    );
};

export default MyProfile;
