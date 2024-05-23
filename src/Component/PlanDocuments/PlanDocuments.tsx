import "./PlanDocuments.scss";

const PlanDocuments = () => {
    return (
        <div className="plan-documents">
            <h2>Plan Documents</h2>
            <div className="documents-wrap">
                <div className="document-files">
                    <span className="sub-head">SOB File</span>
                    <button
                        type="button"
                        aria-label="sob file download"
                        className="icon-download"
                    ></button>
                </div>
                <div className="document-files">
                    <span className="sub-head">SBC File</span>
                    <button
                        type="button"
                        aria-label="sbc file download"
                        className="icon-download"
                    ></button>
                </div>
                <div className="document-files">
                    <span className="sub-head">SBC File</span>
                    <button
                        type="button"
                        aria-label="sbc file download"
                        className="icon-download"
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default PlanDocuments;
