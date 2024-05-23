import { ReactNode } from "react";

const MainCard = ({ children }: { children: ReactNode }) => {
    return <div className="main-card">{children}</div>;
};

export default MainCard;
