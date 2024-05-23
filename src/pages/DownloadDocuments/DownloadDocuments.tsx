import { Table } from "react-bootstrap";
import "./DownloadDocuments.scss";
import MainCard from "../../Component/MainCard/MainCard";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import CardBackground from "../../Component/CardBackground/CardBackground";
// import { useState } from "react";
import { useWindowSize } from "../../hooks/windowSize";
const DownloadDocuments = () => {
    // const [show, setShow] = useState(false);
    const windowSize = useWindowSize();

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div className="download-document-wrap main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground
                    heading={"Download Documents"}
                    welcomeMessage={undefined}
                    children={undefined}
                ></CardBackground>
            )}
            <MobileHeader mobileHeading={"Manage Employees"} />
            <MainCard>
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
                <div className="table-wrap">
                    <Table bordered striped>
                        <thead className="table-dark">
                            <tr>
                                <th>File Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Vestibulum elementum felis in nisi dapibus,
                                    eget commodo elit convallis.
                                </td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Nam vel turpis eu nunc lobortis ornare.</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Cras cursus gravida pharetraulla non leo
                                    mauris. Integer.
                                </td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Suspendisse sollicitudin lacus odio, non
                                    sollicitudin.
                                </td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Cras cursus gravida pharetraulla non leo
                                    mauris. Integer.
                                </td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Nam vel turpis eu nunc lobortis ornare.</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Vestibulum elementum felis in nisi dapibus,
                                    eget commodo elit convallis.
                                </td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Suspendisse sollicitudin lacus odio, non
                                    sollicitudin.
                                </td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Cras cursus gravida pharetraulla non leo
                                    mauris. Integer.
                                </td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Nam vel turpis eu nunc lobortis ornare.</td>
                                <td>
                                    <div className="edit-btn-wrap">
                                        <i
                                            className="download"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </MainCard>
        </div>
    );
};

export default DownloadDocuments;
