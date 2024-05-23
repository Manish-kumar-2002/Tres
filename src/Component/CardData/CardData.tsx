import "./CardData.scss";
const CardData = () => {
    return (
        <div className="card-data-wrap">
            <div className="card-banner">
                <div className="card-box lg-card-box">
                    <div className="card-head">
                        <div className="head-wrp">
                            <h3>John Smith</h3>
                            <p>Medical Insurance Card</p>
                        </div>
                    </div>
                    <div className="data-main-wrp initial-box">
                        <div className="card-content first-card-content">
                            <div className="head-wrp dob">
                                <h3>Date of Birth</h3>
                                <p>Apr, 12 1988</p>
                            </div>
                            <div className="head-wrp effective-date">
                                <h3>Hiring Date</h3>
                                <p>Sep, 04 2022</p>
                            </div>
                            <div className="head-wrp coverage">
                                <h3>Coverage</h3>
                                <p>Family</p>
                            </div>
                            <div className="head-wrp person">
                                <h3>Person</h3>
                                <p>+1</p>
                            </div>
                            <div className="head-wrp grp-no grp-one">
                                <h3>Member Number</h3>
                                <p>ME1331779</p>
                            </div>
                            <div className="head-wrp grp-no grp-two">
                                <h3>Social Security Number</h3>
                                <p>XXX-XX-6543</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardData;
