// import { useState } from "react";/
import CardBackground from "../../Component/CardBackground/CardBackground";
import MainCard from "../../Component/MainCard/MainCard";
import MobileHeader from "../../Component/MobileHeader/MobileHeader";
import "./AddEmployee.scss";
import { useWindowSize } from "../../hooks/windowSize";
import EmployeeType from "../../Component/EmployeeType/EmployeeType";
import StepsProgressBar from "../../Component/StepsProgressBar/StepsProgressBar";
const AddEmployee = () => {
    // const [show, setShow] = useState(false);
    const windowSize = useWindowSize();

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div className="add-employee main-container-wrap">
            {windowSize[0] > 767 && (
                <CardBackground
                    heading={"Add Employee"}
                    welcomeMessage={undefined}
                    children={undefined}
                ></CardBackground>
            )}
            <MobileHeader mobileHeading={"Add Employee"} />
            <MainCard>
                <StepsProgressBar />
                <EmployeeType />
            </MainCard>
        </div>
    );
};

export default AddEmployee;
