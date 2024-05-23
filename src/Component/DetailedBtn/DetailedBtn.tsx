import { useState } from "react";
const DetailedBtn = () => {
    const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    console.log(show);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="btn-wrap">
                <button
                    type="button"
                    className="btn-details"
                    onClick={handleShow}
                >
                    <i className="download-icon" aria-hidden="true"></i>Download
                    Document
                </button>
            </div>
            {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="resources-wrap">
            
          </div>
        </Modal.Body>
        
      </Modal> */}
        </div>
    );
};

export default DetailedBtn;
