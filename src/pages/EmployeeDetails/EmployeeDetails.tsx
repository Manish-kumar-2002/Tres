import "./EmployeeDetails.scss";
import { useWindowSize } from "../../hooks/windowSize";
import CardBackground from "../../Component/CardBackground/CardBackground";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import MainCard from "../../Component/MainCard/MainCard";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import NoDetails from "../../Component/NoDetails/NoDetails";
import AddAnotherDependent from "../../Component/AddAnotherDependent/AddAnotherDependent";
import { Link } from "react-router-dom";
import CardData from "../../Component/CardData/CardData";
import ProviderNetworks from "../../Component/ProviderNetworks/ProviderNetworks";
import { useState } from "react";
type Mode = "view" | "add";
const EmployeeDetails = () => {
    const windowSize = useWindowSize();
    const [selectedCoverage, setSelectedCoverage] = useState<"1" | "2" | null>(
        null
    );
    const [mode, setMode] = useState<Mode>("view");
    const [dependentsCount, setDependentsCount] = useState(1);

    const modeChangeHandler = () => {
        setMode((prev) => {
            if (prev === "view") {
                return "add";
            }
            return "view";
        });
    };

    const coverageChangeHandler = (event: any) => {
        const coverage = event.target.value;
        setSelectedCoverage(coverage);
    };

    const dependentsCountChangeHandler = () => {
        setDependentsCount((prev) => prev + 1);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
        setMode("view");
        setSelectedCoverage(null);
    };

    return (
        <div className="employee-details main-container-wrap">
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
                    <Tabs defaultActiveKey="Employee" id="noanim-tab-example">
                        <Tab eventKey="Employee" title="Employee Details">
                            <div className="fill-details-wrap">
                                <div className="employee-details-btn">
                                    <h5>Basic Details</h5>
                                    {windowSize[0] > 991 && (
                                        <button
                                            type="button"
                                            className="btn-two"
                                        >
                                            <i
                                                className="download-icon"
                                                aria-hidden="true"
                                            ></i>
                                            Download ID Card
                                        </button>
                                    )}
                                </div>
                                <div className="carddata-details">
                                    <CardData />

                                    <div className="carddata-basic-info">
                                        <div className="carddata-plan-wrap">
                                            <div className="carddata-plan-primary">
                                                <h3>Name</h3>
                                                <span className="sub-head">
                                                    John Smith
                                                </span>
                                            </div>
                                            <div className="carddata-plan-primary">
                                                <h3>Date of Birth</h3>
                                                <span className="sub-head">
                                                    Apr, 12 1988
                                                </span>
                                            </div>
                                            <div className="carddata-plan-primary">
                                                <h3>Sex Orientation</h3>
                                                <span className="sub-head">
                                                    Male
                                                </span>
                                            </div>
                                            <div className="carddata-plan-primary">
                                                <h3>Employee Code</h3>
                                                <span className="sub-head">
                                                    E-100911
                                                </span>
                                            </div>
                                            <div className="carddata-plan-primary">
                                                <h3>
                                                    Social Security No. (SSN)
                                                </h3>
                                                <span className="sub-head">
                                                    098-76-6543
                                                </span>
                                            </div>

                                            <div className="carddata-plan-primary">
                                                <h3>Member No.</h3>
                                                <span className="sub-head">
                                                    ME1331779
                                                </span>
                                            </div>
                                            <div className="carddata-plan-primary">
                                                <h3>Hiring Date</h3>
                                                <span className="sub-head">
                                                    Sep, 04 2022
                                                </span>
                                            </div>
                                            <div className="carddata-plan-primary">
                                                <h3>Termination Date</h3>
                                                <span className="sub-head">
                                                    ---
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="employee-contact-details full-details-wrap">
                                <div className="carddata-basic-info">
                                    <h2>Contact Details</h2>
                                    <div className="carddata-plan-wrap">
                                        <div className="carddata-plan-primary">
                                            <h3>Email</h3>
                                            <span className="sub-head">
                                                johnsmith@example.com
                                            </span>
                                        </div>
                                        <div className="carddata-plan-primary">
                                            <h3>Home No.</h3>
                                            <span className="sub-head">
                                                +1 (222) 222-5522
                                            </span>
                                        </div>
                                        <div className="carddata-plan-primary">
                                            <h3>Phone No.</h3>
                                            <span className="sub-head">
                                                +1 (222) 222-5522
                                            </span>
                                        </div>
                                        <div className="carddata-plan-primary">
                                            <h3>Work No.</h3>
                                            <span className="sub-head">
                                                +1 (222) 222-5522
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="employee-address-details full-details-wrap">
                                <div className="carddata-basic-info">
                                    <h2>Address Details</h2>
                                    <div className="carddata-plan-wrap">
                                        <div className="carddata-plan-primary">
                                            <h3>Address Line 1</h3>
                                            <span className="sub-head">
                                                123 Main Street, Belleville
                                                Road, St. Stephen Church
                                            </span>
                                        </div>
                                        <div className="carddata-plan-primary">
                                            <h3>Address Line 2</h3>
                                            <span className="sub-head">
                                                Street No-4, Apartment 456
                                            </span>
                                        </div>
                                        <div className="carddata-plan-primary">
                                            <h3>City</h3>
                                            <span className="sub-head">
                                                Lucerne Valley
                                            </span>
                                        </div>
                                        <div className="carddata-plan-primary">
                                            <h3>State</h3>
                                            <span className="sub-head">
                                                California
                                            </span>
                                        </div>
                                        <div className="carddata-plan-primary">
                                            <h3>Postal Code</h3>
                                            <span className="sub-head">
                                                9001
                                            </span>
                                        </div>

                                        <div className="carddata-plan-primary">
                                            <h3>Country</h3>
                                            <span className="sub-head">
                                                United State
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {windowSize[0] < 991 && (
                                <div className="edit-btn-mob">
                                    <Link
                                        to="/add-employee-details"
                                        className=" btn-one"
                                    >
                                        <i
                                            className="edit-icon"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Edit Details
                                    </Link>
                                </div>
                            )}
                        </Tab>
                        <Tab eventKey="Plan" title="Plan Details">
                            <Form onSubmit={submitHandler}>
                                <div className="inner-tab">
                                    <Tabs
                                        defaultActiveKey="Medical"
                                        id="noanim-tab-example"
                                    >
                                        <Tab eventKey="Medical" title="Medical">
                                            <div className="plan-basic-info-wrap full-details-wrap">
                                                <div className="carddata-basic-info">
                                                    <h2>Plan Details</h2>
                                                    <div className="carddata-plan-wrap">
                                                        <div className="carddata-plan-primary">
                                                            <h3>Plan Name</h3>
                                                            <span className="sub-head">
                                                                IHP Basic SOB PY
                                                            </span>
                                                        </div>
                                                        <div className="carddata-plan-primary">
                                                            <h3>Plan ID</h3>
                                                            <span className="sub-head">
                                                                MVPB
                                                            </span>
                                                        </div>
                                                        <div className="carddata-plan-primary">
                                                            <h3>Group No.</h3>
                                                            <span className="sub-head">
                                                                102236
                                                            </span>
                                                        </div>
                                                        <div className="carddata-plan-primary">
                                                            <h3>
                                                                Provider
                                                                Networks
                                                            </h3>
                                                            <span className="sub-head">
                                                                PHCS, Cigna
                                                            </span>
                                                        </div>
                                                        <div className="carddata-plan-primary">
                                                            <h3>
                                                                Coverage Tier
                                                            </h3>
                                                            <span className="sub-head">
                                                                Family
                                                            </span>
                                                        </div>

                                                        <div className="carddata-plan-primary">
                                                            <h3>
                                                                Effective Date
                                                            </h3>
                                                            <span className="sub-head">
                                                                Feb, 01 2024
                                                            </span>
                                                        </div>
                                                        <div className="carddata-plan-primary">
                                                            <h3>
                                                                Termination Date
                                                            </h3>
                                                            <span className="sub-head">
                                                                ---
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {windowSize[0] < 767 && (
                                                <ProviderNetworks />
                                            )}
                                            <div className="member-details-wrap">
                                                <div className="member-basic-info">
                                                    <h2>Member Details</h2>
                                                    <div className="member-plan-wrap">
                                                        <div className="member-plan-info">
                                                            <div className="plan-primary">
                                                                <h3 className="heading">
                                                                    Name
                                                                </h3>
                                                                <span className="sub-head heading">
                                                                    John Smith
                                                                </span>
                                                            </div>
                                                            <div className="plan-secondary">
                                                                <h3>
                                                                    Member No.
                                                                </h3>
                                                                <span className="sub-head">
                                                                    ME1331779
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="member-plan-info">
                                                            <div className="plan-primary">
                                                                <h3>
                                                                    Social
                                                                    Security No.
                                                                    (SSN)
                                                                </h3>
                                                                <span className="sub-head">
                                                                    098-76-6543
                                                                </span>
                                                            </div>
                                                            <div className="plan-secondary">
                                                                <h3>
                                                                    Date of
                                                                    Birth
                                                                </h3>
                                                                <span className="sub-head">
                                                                    Jul, 24 1978
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="member-plan-info">
                                                            <div className="plan-primary">
                                                                <h3>Sex</h3>
                                                                <span className="sub-head">
                                                                    Male
                                                                </span>
                                                            </div>
                                                            <div className="plan-secondary">
                                                                <h3>
                                                                    Relationship
                                                                </h3>
                                                                <span className="sub-head">
                                                                    Self
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="member-details-wrap spouse-child-wrap">
                                                <h2>Dependents</h2>
                                                <div className="inner-tab">
                                                    <Tabs
                                                        defaultActiveKey="Spouse"
                                                        id="noanim-tab-example"
                                                    >
                                                        <Tab
                                                            eventKey="Spouse"
                                                            title="Spouse"
                                                        >
                                                            <div className="member-basic-info">
                                                                <div className="member-plan-wrap">
                                                                    <div className="member-plan-info">
                                                                        <div className="plan-primary">
                                                                            <h3 className="heading">
                                                                                Name
                                                                            </h3>
                                                                            <span className="sub-head heading">
                                                                                Veronica
                                                                                Smith
                                                                            </span>
                                                                        </div>
                                                                        <div className="plan-secondary">
                                                                            <h3>
                                                                                Member
                                                                                No.
                                                                            </h3>
                                                                            <span className="sub-head">
                                                                                ME1331779
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="member-plan-info">
                                                                        <div className="plan-primary">
                                                                            <h3>
                                                                                Social
                                                                                Security
                                                                                No.
                                                                                (SSN)
                                                                            </h3>
                                                                            <span className="sub-head">
                                                                                098-76-6543
                                                                            </span>
                                                                        </div>
                                                                        <div className="plan-secondary">
                                                                            <h3>
                                                                                Date
                                                                                of
                                                                                Birth
                                                                            </h3>
                                                                            <span className="sub-head">
                                                                                Jul,
                                                                                24
                                                                                1978
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="member-plan-info">
                                                                        <div className="plan-primary">
                                                                            <h3>
                                                                                Sex
                                                                            </h3>
                                                                            <span className="sub-head">
                                                                                Female
                                                                            </span>
                                                                        </div>
                                                                        <div className="plan-secondary">
                                                                            <h3>
                                                                                Relationship
                                                                            </h3>
                                                                            <span className="sub-head">
                                                                                Self
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Tab>
                                                        <Tab
                                                            eventKey="Child"
                                                            title="Child"
                                                        >
                                                            <div className="member-details-wrap">
                                                                <div className="member-basic-info">
                                                                    <div className="member-plan-wrap">
                                                                        <div className="member-plan-info">
                                                                            <div className="plan-primary">
                                                                                <h3 className="heading">
                                                                                    Name
                                                                                </h3>
                                                                                <span className="sub-head heading">
                                                                                    Alice
                                                                                    Smith
                                                                                </span>
                                                                            </div>
                                                                            <div className="plan-secondary">
                                                                                <h3>
                                                                                    Member
                                                                                    No.
                                                                                </h3>
                                                                                <span className="sub-head">
                                                                                    ME1331779
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="member-plan-info">
                                                                            <div className="plan-primary">
                                                                                <h3>
                                                                                    Social
                                                                                    Security
                                                                                    No.
                                                                                    (SSN)
                                                                                </h3>
                                                                                <span className="sub-head">
                                                                                    098-76-6543
                                                                                </span>
                                                                            </div>
                                                                            <div className="plan-secondary">
                                                                                <h3>
                                                                                    Date
                                                                                    of
                                                                                    Birth
                                                                                </h3>
                                                                                <span className="sub-head">
                                                                                    Jul,
                                                                                    24
                                                                                    1978
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="member-plan-info">
                                                                            <div className="plan-primary">
                                                                                <h3>
                                                                                    Sex
                                                                                </h3>
                                                                                <span className="sub-head">
                                                                                    Male
                                                                                </span>
                                                                            </div>
                                                                            <div className="plan-secondary">
                                                                                <h3>
                                                                                    Relationship
                                                                                </h3>
                                                                                <span className="sub-head">
                                                                                    Self
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Tab>
                                                    </Tabs>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Vision" title="Vision">
                                            <NoDetails
                                                noDeatilsWrap={
                                                    "Group Has No Vision Plan"
                                                }
                                            />
                                        </Tab>
                                        <Tab eventKey="Dental" title="Dental">
                                            {mode === "view" ? (
                                                <>
                                                    <div className="select-plan-btn">
                                                        <button
                                                            type="button"
                                                            className="btn-two"
                                                            onClick={
                                                                modeChangeHandler
                                                            }
                                                        >
                                                            <i
                                                                className="add-icon"
                                                                aria-hidden="true"
                                                            ></i>{" "}
                                                            Select Plan
                                                        </button>
                                                    </div>
                                                    <NoDetails
                                                        noDeatilsWrap={
                                                            "No Dental Plan Selected For This Employee"
                                                        }
                                                    />
                                                </>
                                            ) : (
                                                <div className="fill-details-wrap">
                                                    <Row>
                                                        <Col>
                                                            <Row>
                                                                <Col lg={6}>
                                                                    <Form.Group className="form-block mb-3">
                                                                        <Form.Label htmlFor="select-plan">
                                                                            Select
                                                                            Plan
                                                                        </Form.Label>
                                                                        <Form.Select
                                                                            id="select-plan"
                                                                            aria-label="Default select example"
                                                                        >
                                                                            <option>
                                                                                Select
                                                                                Plan
                                                                            </option>
                                                                            <option value="male">
                                                                                Select
                                                                                Plan
                                                                                1
                                                                            </option>
                                                                            <option value="female">
                                                                                Select
                                                                                Plan
                                                                                2
                                                                            </option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col lg={6}>
                                                                    <Form.Group className="form-block mb-3">
                                                                        <Form.Label htmlFor="select-coverage">
                                                                            Select
                                                                            Coverage
                                                                            Tier
                                                                        </Form.Label>
                                                                        <Form.Select
                                                                            id="select-coverage"
                                                                            aria-label="Default select example"
                                                                            onChange={
                                                                                coverageChangeHandler
                                                                            }
                                                                        >
                                                                            <option>
                                                                                Select
                                                                                Coverage
                                                                                Tier
                                                                            </option>
                                                                            <option value="1">
                                                                                Employee
                                                                                +
                                                                                Spouse
                                                                            </option>
                                                                            <option value="2">
                                                                                Select
                                                                                Coverage
                                                                                Tier
                                                                                2
                                                                            </option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={6}>
                                                                    <Form.Group className="form-block mb-3">
                                                                        <Form.Label htmlFor="effective-date">
                                                                            Effective
                                                                            Date
                                                                        </Form.Label>
                                                                        <Form.Control
                                                                            id="effective-date"
                                                                            type="date"
                                                                            placeholder="Enter Effective Date"
                                                                        />
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            )}
                                            {mode !== "view" &&
                                                selectedCoverage !== null &&
                                                Array(dependentsCount)
                                                    .fill(0)
                                                    .map((item, index) => {
                                                        console.log(item);
                                                        return (
                                                            <div
                                                                className="fill-details-wrap"
                                                                key={index}
                                                            >
                                                                <div className="btn-heading">
                                                                    <h5>
                                                                        Add
                                                                        Dependent
                                                                    </h5>
                                                                    {windowSize[0] <
                                                                        767 && (
                                                                        <AddAnotherDependent
                                                                            onClick={
                                                                                dependentsCountChangeHandler
                                                                            }
                                                                        />
                                                                    )}
                                                                </div>
                                                                <Row>
                                                                    <Col>
                                                                        <Row>
                                                                            <Col
                                                                                lg={
                                                                                    6
                                                                                }
                                                                            >
                                                                                <Form.Group className="form-block mb-3">
                                                                                    <Form.Label htmlFor="first-name">
                                                                                        First
                                                                                        Name
                                                                                    </Form.Label>
                                                                                    <Form.Control
                                                                                        id="first-name"
                                                                                        type="text"
                                                                                        placeholder="Enter First Name Here"
                                                                                    />
                                                                                </Form.Group>
                                                                            </Col>
                                                                            <Col
                                                                                lg={
                                                                                    6
                                                                                }
                                                                            >
                                                                                <Form.Group className="form-block mb-3">
                                                                                    <Form.Label htmlFor="last-name">
                                                                                        Last
                                                                                        Name
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
                                                                            <Col
                                                                                lg={
                                                                                    6
                                                                                }
                                                                            >
                                                                                <Form.Group className="form-block mb-3">
                                                                                    <Form.Label htmlFor="date-of-birth">
                                                                                        Date
                                                                                        of
                                                                                        Birth
                                                                                    </Form.Label>
                                                                                    <Form.Control
                                                                                        id="date-of-birth"
                                                                                        type="text"
                                                                                        placeholder="Enter DOB Here"
                                                                                    />
                                                                                </Form.Group>
                                                                            </Col>
                                                                            <Col
                                                                                lg={
                                                                                    6
                                                                                }
                                                                            >
                                                                                <Form.Group className="form-block mb-3">
                                                                                    <Form.Label htmlFor="sex-orientation">
                                                                                        Sex
                                                                                        Orientation
                                                                                    </Form.Label>
                                                                                    <Form.Select
                                                                                        id="sex-orientation"
                                                                                        aria-label="Default select example"
                                                                                    >
                                                                                        <option>
                                                                                            Select
                                                                                            Sex
                                                                                            Orientation
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
                                                                            <Col
                                                                                lg={
                                                                                    6
                                                                                }
                                                                            >
                                                                                <Form.Group className="form-block mb-3">
                                                                                    <Form.Label htmlFor="relationship">
                                                                                        Relationship
                                                                                    </Form.Label>
                                                                                    <Form.Select
                                                                                        id="relationship"
                                                                                        aria-label="Default select example"
                                                                                    >
                                                                                        <option>
                                                                                            Select
                                                                                            Relationship
                                                                                        </option>
                                                                                        <option value="married">
                                                                                            Married
                                                                                        </option>
                                                                                        <option value="unmarried">
                                                                                            Unmarried
                                                                                        </option>
                                                                                    </Form.Select>
                                                                                </Form.Group>
                                                                            </Col>
                                                                            <Col
                                                                                lg={
                                                                                    6
                                                                                }
                                                                            >
                                                                                <Form.Group className="form-block mb-3">
                                                                                    <Form.Label htmlFor="SSN">
                                                                                        Social
                                                                                        Security
                                                                                        Number
                                                                                        (SSN)
                                                                                    </Form.Label>
                                                                                    <Form.Control
                                                                                        id="SSN"
                                                                                        type="text"
                                                                                        placeholder="Enter SSN Here"
                                                                                    />
                                                                                </Form.Group>
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        );
                                                    })}
                                            {mode != "view" && (
                                                <Row>
                                                    <Col xs={12}>
                                                        <div className="add-dependent-inner">
                                                            {windowSize[0] >
                                                                767 &&
                                                                selectedCoverage !==
                                                                    null && (
                                                                    <AddAnotherDependent
                                                                        onClick={
                                                                            dependentsCountChangeHandler
                                                                        }
                                                                    />
                                                                )}
                                                            <button
                                                                type="submit"
                                                                className="submit-btn"
                                                            >
                                                                Save
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            )}
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Form>
                        </Tab>
                    </Tabs>
                    <div className="back-btn-top">
                        {windowSize[0] > 991 && (
                            <Link
                                to="/add-employee-details"
                                className="btn-two"
                            >
                                <i className="edit-icon"></i> Edit Details
                            </Link>
                        )}
                        <Link to="/employee" className="back-btn">
                            <i className="icon-back" aria-hidden="true"></i>Back
                        </Link>
                    </div>
                </div>
            </MainCard>
        </div>
    );
};

export default EmployeeDetails;
