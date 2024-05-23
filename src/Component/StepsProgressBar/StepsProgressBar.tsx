import ProgressBar from "react-bootstrap/ProgressBar";
import "./StepsProgressBar.scss";
const StepsProgressBar = () => {
    return (
        <div className="progress-bar-wrap">
            <div className="steps-wrap">
                <div className="steps-block">
                    <span className="steps-show active">Step 1</span>
                    <span className="steps-show">Step 2</span>
                </div>
                <div className="steps-count ">
                    Step <span className="count-bar">1</span> of{" "}
                    <span className="count-bar">2</span>{" "}
                </div>
            </div>
            <ProgressBar now={60} />
        </div>
    );
};

export default StepsProgressBar;
