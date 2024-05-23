import "./HomePage.scss";
import CardBackground from "../../Component/CardBackground/CardBackground";
import Card from "../../Component/card/Card";
// import DetailedBtn from '../../Component/DetailedBtn/DetailedBtn';
import PlanStats from "../../assets/images/plans-stats.png";
import ActiveMember from "../../assets/images/active-member.png";

const HomePage = () => {
    return (
        <div className="dashborad-wrap">
            <CardBackground
                heading={"Welcome!"}
                welcomeMessage={"Your dashboard awaits."}
                adminName={"Welcome, John Smith!"}
            />
            <div className="dashborad-details">
                <Card />
                <div className="member-stats">
                    <div className="cards-mid plans-stats">
                        <h2>Plans</h2>
                        <img
                            src={PlanStats}
                            alt="plan-stats"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="cards-mid active-member-stats">
                        <div className="card-head-wrap">
                            <h2>Active Members</h2>
                            <div className="plans-color-code">
                                <span className="plans-color medical-color">
                                    Medical
                                </span>
                                <span className="plans-color dental-color">
                                    Dental
                                </span>
                                <span className="plans-color vision-color">
                                    Vision
                                </span>
                            </div>
                        </div>
                        <img src={ActiveMember} alt="plan-stats" />
                    </div>
                </div>
                {/* <div className="download-resources">
        <h2>Download Resources</h2>
        <DetailedBtn />
      </div> */}
            </div>
        </div>
    );
};

export default HomePage;
