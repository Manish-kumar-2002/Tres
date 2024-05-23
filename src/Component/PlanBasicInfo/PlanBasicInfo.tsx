import "./PlanBasicInfo.scss";

const PlanBasicInfo = () => {
    return (
        <div className="basic-info">
            <h2>Plan Basic Info</h2>
            <div className="plan-wrap">
                <div className="plan-info">
                    <div className="plan-primary">
                        <h3>Plan Name</h3>
                        <span className="sub-head">IHP Basic SOB PY</span>
                    </div>
                    <div className="plan-secondary">
                        <h3>Plan ID</h3>
                        <span className="sub-head">MVPB</span>
                    </div>
                </div>
                <div className="plan-info">
                    <div className="plan-primary">
                        <h3>TPA</h3>
                        <span className="sub-head">S&S Health</span>
                    </div>
                    <div className="plan-secondary">
                        <h3>Group No.</h3>
                        <span className="sub-head">102236</span>
                    </div>
                </div>
                <div className="plan-info">
                    <div className="plan-primary">
                        <h3>Start Date</h3>
                        <span className="sub-head">Sep, 01 2024</span>
                    </div>
                    <div className="plan-secondary">
                        <h3>End Date</h3>
                        <span className="sub-head">Jan, 31 2025</span>
                    </div>
                </div>
                <div className="plan-info">
                    <div className="plan-secondary">
                        <h3>Waiting Period</h3>
                        <span className="sub-head">90 Days</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanBasicInfo;
