import "./Dental.scss";
// import { useState } from "react";
import CardBackground from "../../../Component/CardBackground/CardBackground";
import MobileHeader from "../../../Component/MobileHeader/MobileHeader";
import PlansSubmenu from "../../../Component/PlansSubmenu/PlansSubmenu";
import { useWindowSize } from "../../../hooks/windowSize";
import MainCard from "../../../Component/MainCard/MainCard";
import NoDetails from "../../../Component/NoDetails/NoDetails";
const Dental = () => {
    // const [show, setShow] = useState(false);
    const windowSize = useWindowSize();

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
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
                <NoDetails noDeatilsWrap={"No Dental Plans Assigned"} />
            </MainCard>
        </div>
    );
};

export default Dental;
