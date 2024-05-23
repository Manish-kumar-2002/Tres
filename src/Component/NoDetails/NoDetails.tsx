import unread from "../../assets/images/unread.png";
import "./NoDetails.scss";
const NoDetails = ({ noDeatilsWrap }: { noDeatilsWrap: string }) => {
    return (
        <div className="no-details-wrap">
            <img src={unread} alt="no-details" />
            <h5>{noDeatilsWrap}</h5>
        </div>
    );
};

export default NoDetails;
