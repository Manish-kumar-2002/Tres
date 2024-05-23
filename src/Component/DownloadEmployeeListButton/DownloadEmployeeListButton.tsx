import "./DownloadEmployeeListButton.scss";
const DownloadEmployeeListButton = () => {
    return (
        <div className="download-employee-list">
            <button type="button" className="btn-two">
                <i className="download-icon" aria-hidden="true"></i>Download
                Employee List
            </button>
        </div>
    );
};

export default DownloadEmployeeListButton;
