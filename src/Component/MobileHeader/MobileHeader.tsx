import { Link } from "react-router-dom";

const MobileHeader = ({ mobileHeading }: { mobileHeading: string }) => {
    return (
        <div className="mobile-header">
            <Link to="/" className="back-btn">
                <i className="back-icon" aria-hidden="true"></i>
            </Link>
            <h4>{mobileHeading}</h4>
        </div>
    );
};

export default MobileHeader;
