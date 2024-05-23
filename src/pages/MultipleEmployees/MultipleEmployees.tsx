// import { useState } from "react";
import "./MultipleEmployees.scss";
import { useWindowSize } from "../../hooks/windowSize";
import CardBackground from "../../Component/CardBackground/CardBackground";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import MainCard from "../../Component/MainCard/MainCard";
import StepsProgressBar from "../../Component/StepsProgressBar/StepsProgressBar";
import Form from "react-bootstrap/Form";
import DownloadEmployeeListButton from "../../Component/DownloadEmployeeListButton/DownloadEmployeeListButton";
const MultipleEmployees = () => {
    // const [show, setShow] = useState(false);
    const windowSize = useWindowSize();

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div className="multiple-employee main-container-wrap">
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
                <div className="multiple-upload-wrap">
                    <div className="file-upload-block">
                        <div className="head-btn-align">
                            <h5>Upload Your Employee List</h5>
                            {windowSize[0] > 991 && (
                                <DownloadEmployeeListButton />
                            )}
                        </div>
                        <div className="custom-file-wrap">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label
                                        htmlFor="formFile"
                                        className="custom-file-label"
                                    >
                                        {" "}
                                        <div className="file-label-wrap">
                                            <i
                                                className="upload-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <p>
                                                Drag and Drop Files Here or
                                                Upload Files Here.
                                            </p>
                                        </div>
                                    </Form.Label>
                                    <Form.Control
                                        className="custom-file"
                                        type="file"
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="upload-btn-wrap">
                        <button type="button" className="btn-two">
                            Back
                        </button>
                        <button type="button" className="btn-one">
                            Next
                        </button>
                    </div>
                </div>
                {windowSize[0] < 991 && (
                    <div className="download-list-wrap">
                        <DownloadEmployeeListButton />
                    </div>
                )}
            </MainCard>
        </div>
    );
};

export default MultipleEmployees;
