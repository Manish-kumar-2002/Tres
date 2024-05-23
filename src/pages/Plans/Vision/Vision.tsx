import "./Vision.scss";
// import { useState } from "react";
import CardBackground from "../../../Component/CardBackground/CardBackground";
import MobileHeader from "../../../Component/MobileHeader/MobileHeader";
import PlansSubmenu from "../../../Component/PlansSubmenu/PlansSubmenu";
import { useWindowSize } from "../../../hooks/windowSize";
import MainCard from "../../../Component/MainCard/MainCard";
import PlanBasicInfo from "../../../Component/PlanBasicInfo/PlanBasicInfo";
import PlanDocuments from "../../../Component/PlanDocuments/PlanDocuments";
import InNetworkBenefits from "../../../Component/InNetworkBenefits/InNetworkBenefits";
import ProviderNetworks from "../../../Component/ProviderNetworks/ProviderNetworks";
import { Tab, Tabs } from "react-bootstrap";

const Vision = () => {
    const windowSize = useWindowSize();

    return (
        <div className="plans-wrap main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground
                    heading={"Plans"}
                    welcomeMessage={undefined}
                    children={undefined}
                ></CardBackground>
            )}
            <MobileHeader mobileHeading={"Plans"} />
            <MainCard>
                {windowSize[0] < 767 && <PlansSubmenu />}

                <div className="inner-tab">
                    <Tabs defaultActiveKey="SOB" id="noanim-tab-example">
                        <Tab eventKey="SOB" title="IHP Basic SOB PY">
                            <div className="plan-basic-info-wrap">
                                <PlanBasicInfo />
                                {windowSize[0] > 767 && <PlanDocuments />}
                            </div>
                            {windowSize[0] < 767 && <ProviderNetworks />}
                            <div className="provide-network">
                                <InNetworkBenefits />
                                <InNetworkBenefits />
                            </div>
                            {windowSize[0] < 767 && <PlanDocuments />}
                        </Tab>
                    </Tabs>
                </div>
            </MainCard>
        </div>
    );
};

export default Vision;
