import { useState } from "react";

import { Link } from "react-router-dom";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { useWindowSize } from "../../hooks/windowSize";

import CardBackground from "../../Component/CardBackground/CardBackground";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import MainCard from "../../Component/MainCard/MainCard";
import StepsProgressBar from "../../Component/StepsProgressBar/StepsProgressBar";
import NoDetails from "../../Component/NoDetails/NoDetails";
import AddAnotherDependent from "../../Component/AddAnotherDependent/AddAnotherDependent";

import "./SingleEmployee.scss";

const SingleEmployee = () => {
    const windowSize = useWindowSize();
    const [selectedCoverage, setSelectedCoverage] = useState<"1" | "2" | null>(
        null
    );
    const [dependentsCount, setDependentsCount] = useState(1);

    const coverageChangeHandler = (event: any) => {
        const coverage = event.target.value;
        setSelectedCoverage(coverage);
    };

    const dependentsCountChangeHandler = () => {
        setDependentsCount((prev) => prev + 1);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
        setSelectedCoverage(null);
    };
    return (
        <div className="single-employee main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground
                    heading={"Add Employee"}
                    welcomeMessage={undefined}
                    children={undefined}
                ></CardBackground>
            )}
            <MobileHeader mobileHeading={"Add Employee"} />
            <MainCard>
                <StepsProgressBar />
                <p className="bg-heading">
                    You’ve selected one employee. Provide details to proceed:
                </p>
                <div className="global-tab">
                    <Tabs defaultActiveKey="Employee" id="noanim-tab-example">
                        <Tab eventKey="Employee" title="Employee Details">
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
                                                                Select Sex
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
                                                            Social Security
                                                            Number (SSN)
                                                        </Form.Label>
                                                        <Form.Control
                                                            id="SSN"
                                                            type="text"
                                                            placeholder="Enter SSN Here"
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
                                        <button
                                            type="submit"
                                            className="submit-btn"
                                        >
                                            Continue
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        </Tab>
                        <Tab eventKey="Plan" title="Plan Details">
                            <Form onSubmit={submitHandler}>
                                <div className="inner-tab">
                                    <Tabs
                                        defaultActiveKey="Medical"
                                        id="noanim-tab-example"
                                    >
                                        <Tab eventKey="Medical" title="Medical">
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
                                            {selectedCoverage !== null &&
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
                                            <Row>
                                                <Col xs={12}>
                                                    <div className="add-dependent-inner">
                                                        {windowSize[0] > 767 &&
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
                                        </Tab>
                                        <Tab eventKey="Vision" title="Vision">
                                            <NoDetails
                                                noDeatilsWrap={
                                                    "You’ve No Vision Details"
                                                }
                                            />
                                        </Tab>
                                        <Tab eventKey="Dental" title="Dental">
                                            <NoDetails
                                                noDeatilsWrap={
                                                    "You’ve No Dental Details"
                                                }
                                            />
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Form>
                        </Tab>
                    </Tabs>
                    <Link to="/add-employee" className="back-btn-top">
                        <i className="icon-back" aria-hidden="true"></i>Back
                    </Link>
                </div>
            </MainCard>
        </div>
    );
};

export default SingleEmployee;
