// import { useState } from "react";
import CardBackground from "../../Component/CardBackground/CardBackground";
import MainCard from "../../Component/MainCard/MainCard";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import "./ContactAdmin.scss";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useWindowSize } from "../../hooks/windowSize";
import { Link } from "react-router-dom";
const ContactAdmin = () => {
    // const [show, setShow] = useState(false);
    const windowSize = useWindowSize();

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div className="contact-admin main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground heading={"Contact Admin"}>
                    <div>card/desktop</div>
                </CardBackground>
            )}
            <MobileHeader mobileHeading={"Contact Admin"} />
            <MainCard>
                <div className="reach-info">
                    <p className="bg-heading">
                        <Link to={""} className="need-assistance">
                            Need Assistance?{" "}
                        </Link>{" "}
                        Reach Out to Admin for Change Requests or Any Issues.
                    </p>
                </div>
                <div className="form-wrap">
                    <Form className="contact-form">
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="form-block mb-4">
                                    <Form.Label htmlFor="full-name">
                                        Full name
                                    </Form.Label>
                                    <Form.Control
                                        id="full-name"
                                        type="text"
                                        placeholder="Enter Your Full Name Here"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="form-block mb-4">
                                    <Form.Label htmlFor="contact-email">
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        id="contact-email"
                                        type="email"
                                        placeholder="Enter Your Email Here"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Request Description</Form.Label>
                                    <Form.Control
                                        className="form-text"
                                        as="textarea"
                                        placeholder="Write Your Message Here"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <button type="submit" className="submit-btn">
                                    Submit
                                </button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </MainCard>
        </div>
    );
};

export default ContactAdmin;
