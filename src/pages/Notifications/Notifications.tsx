// import { useState } from "react";
import "./Notifications.scss";
import CardBackground from "../../Component/CardBackground/CardBackground";
import MainCard from "../../Component/MainCard/MainCard";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import { useWindowSize } from "../../hooks/windowSize";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoDetails from "../../Component/NoDetails/NoDetails";

const Notifications = () => {
    // const [show, setShow] = useState(false);
    const windowSize = useWindowSize();

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div className="notification-wrap main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground
                    heading={"Notifications"}
                    welcomeMessage={undefined}
                    children={undefined}
                ></CardBackground>
            )}
            <MobileHeader mobileHeading={"Notifications"} />
            <MainCard>
                <div className="notification-search">
                    <div className="search-block">
                        <input
                            type="text"
                            className="search-control"
                            name="Search"
                            placeholder="Search..."
                        />
                        <i
                            role="button"
                            tabIndex={0}
                            className="Search-icon"
                            aria-label="search button"
                            aria-hidden="true"
                        ></i>
                    </div>
                    {windowSize[0] > 991 && (
                        <button className={"btn-one"}>Mark All As Read</button>
                    )}
                </div>
                <div className="notification">
                    <Tabs defaultActiveKey="All" id="noanim-tab-example">
                        <Tab eventKey="All" title="All">
                            <div className="notification-tab-heading">
                                <h6> All Notifications</h6>
                                {windowSize[0] < 991 && (
                                    <button className={"btn-notification"}>
                                        Mark All As Read
                                    </button>
                                )}
                            </div>
                            <div className="tab-wrap">
                                <div className="news-notification">
                                    <Row className="details-wrap unread-news">
                                        <Col xs={2} xl={1}>
                                            <div className="news-icon-wrap">
                                                <i
                                                    className="news-icon"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </Col>
                                        <Col xs={10} xl={11}>
                                            <Row className="notification-panel">
                                                <Col xs={12} lg={4} xl={3}>
                                                    <div className="tag-wrap">
                                                        <span className="date">
                                                            Nov, 26 2024
                                                        </span>
                                                        <span className="tag">
                                                            new
                                                        </span>
                                                    </div>
                                                </Col>
                                                <Col xs={12} lg={8} xl={9}>
                                                    <div className="news-block">
                                                        <h3>
                                                            Sed posuere tortor
                                                            ut fermentum
                                                            egestas.
                                                            Pellentesque in
                                                            finibus leo. Integer
                                                            feugiat iaculis
                                                            magna
                                                        </h3>
                                                        <p>
                                                            a efficitur massa
                                                            condimentum ac.
                                                            Aenean vel elementum
                                                            dolor. Nam vitae
                                                            massa sapien.{" "}
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="news-notification">
                                    <Row className="details-wrap unread-news">
                                        <Col xs={2} xl={1}>
                                            <div className="news-icon-wrap">
                                                <i
                                                    className="news-icon"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </Col>
                                        <Col xs={10} xl={11}>
                                            <Row className="notification-panel">
                                                <Col xs={12} lg={4} xl={3}>
                                                    <div className="tag-wrap">
                                                        <span className="date">
                                                            Nov, 26 2024
                                                        </span>
                                                        <span className="tag">
                                                            new
                                                        </span>
                                                    </div>
                                                </Col>
                                                <Col xs={12} lg={8} xl={9}>
                                                    <div className="news-block">
                                                        <h3>
                                                            Cras ornare libero
                                                            at metus consequat
                                                            ornare. Proin nunc
                                                            risus, porttitor sit
                                                            amet mollis in,
                                                        </h3>
                                                        <p>
                                                            a efficitur massa
                                                            condimentum ac.
                                                            Aenean vel elementum
                                                            dolor. Nam vitae
                                                            massa sapien. Fusce
                                                            odio mi, hendrerit
                                                            eu finibus sed,
                                                            mattis sed nulla.
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="news-notification">
                                    <Row className="details-wrap unread-news">
                                        <Col xs={2} xl={1}>
                                            <div className="news-icon-wrap">
                                                <i
                                                    className="news-icon"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </Col>
                                        <Col xs={10} xl={11}>
                                            <Row className="notification-panel">
                                                <Col xs={12} lg={4} xl={3}>
                                                    <div className="tag-wrap">
                                                        <span className="date">
                                                            Nov, 26 2024
                                                        </span>
                                                    </div>
                                                </Col>
                                                <Col xs={12} lg={8} xl={9}>
                                                    <div className="news-block">
                                                        <h3>
                                                            Pellentesque non
                                                            nunc eu urna
                                                            lobortis interdum
                                                            nec ut velit.
                                                        </h3>
                                                        <p>
                                                            a efficitur massa
                                                            condimentum ac.
                                                            Aenean vel elementum
                                                            dolor.
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="news-notification">
                                    <Row className="details-wrap">
                                        <Col xs={2} xl={1}>
                                            <div className="news-icon-wrap">
                                                <i
                                                    className="news-icon"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </Col>
                                        <Col xs={10} xl={11}>
                                            <Row className="notification-panel">
                                                <Col xs={12} lg={4} xl={3}>
                                                    <div className="tag-wrap">
                                                        <span className="date">
                                                            Nov, 26 2024
                                                        </span>
                                                    </div>
                                                </Col>
                                                <Col xs={12} lg={8} xl={9}>
                                                    <div className="news-block">
                                                        <h3>
                                                            Sed posuere tortor
                                                            ut fermentum
                                                            egestas.
                                                            Pellentesque in
                                                            finibus leo. Integer
                                                            feugiat iaculis
                                                            magna
                                                        </h3>
                                                        <p>
                                                            a efficitur massa
                                                            condimentum ac.
                                                            Aenean vel elementum
                                                            dolor. Nam vitae
                                                            massa sapien. Fusce
                                                            odio mi, hendrerit
                                                            eu finibus sed,
                                                            mattis sed nulla.
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="New" title="New">
                            <div className="notification-tab-heading">
                                <h6> New Notifications</h6>
                                {windowSize[0] < 991 && (
                                    <button className={"btn-notification"}>
                                        Mark All As Read
                                    </button>
                                )}
                            </div>
                            <div className="tab-wrap ">
                                <div className="news-notification">
                                    <Row className="details-wrap">
                                        <Col xs={2} xl={1}>
                                            <div className="news-icon-wrap">
                                                <i
                                                    className="news-icon"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </Col>
                                        <Col xs={10} xl={11}>
                                            <Row className="notification-panel">
                                                <Col xs={12} lg={4} xl={3}>
                                                    <div className="tag-wrap">
                                                        <span className="date">
                                                            Nov, 26 2024
                                                        </span>
                                                        <span className="tag">
                                                            new
                                                        </span>
                                                    </div>
                                                </Col>
                                                <Col xs={12} lg={8} xl={9}>
                                                    <div className="news-block">
                                                        <h3>
                                                            Sed posuere tortor
                                                            ut fermentum
                                                            egestas.
                                                            Pellentesque in
                                                            finibus leo. Integer
                                                            feugiat iaculis
                                                            magna
                                                        </h3>
                                                        <p>
                                                            a efficitur massa
                                                            condimentum ac.
                                                            Aenean vel elementum
                                                            dolor. Nam vitae
                                                            massa sapien. Fusce
                                                            odio mi, hendrerit
                                                            eu finibus sed,
                                                            mattis sed nulla.
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="news-notification">
                                    <Row className="details-wrap">
                                        <Col xs={2} xl={1}>
                                            <div className="news-icon-wrap">
                                                <i
                                                    className="news-icon"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </Col>
                                        <Col xs={10} xl={11}>
                                            <Row className="notification-panel">
                                                <Col xs={12} lg={4} xl={3}>
                                                    <div className="tag-wrap">
                                                        <span className="date">
                                                            Nov, 26 2024
                                                        </span>
                                                        <span className="tag">
                                                            new
                                                        </span>
                                                    </div>
                                                </Col>
                                                <Col xs={12} lg={8} xl={9}>
                                                    <div className="news-block">
                                                        <h3>
                                                            Cras ornare libero
                                                            at metus consequat
                                                            ornare. Proin nunc
                                                            risus, porttitor sit
                                                            amet mollis in,
                                                        </h3>
                                                        <p>
                                                            a efficitur massa
                                                            condimentum ac.
                                                            Aenean vel elementum
                                                            dolor. Nam vitae
                                                            massa sapien. Fusce
                                                            odio mi, hendrerit
                                                            eu finibus sed,
                                                            mattis sed nulla.
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Unread" title="Unread">
                            <div className="notification-tab-heading">
                                <h6> Unread Notifications</h6>
                                {windowSize[0] < 991 && (
                                    <button className={"btn-notification"}>
                                        Mark All As Read
                                    </button>
                                )}
                            </div>
                            <NoDetails
                                noDeatilsWrap={
                                    "You’ve No Notifications To Read"
                                }
                            />
                        </Tab>
                    </Tabs>
                </div>
            </MainCard>
        </div>
    );
};

export default Notifications;
[];
