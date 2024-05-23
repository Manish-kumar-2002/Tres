import { ReactNode } from "react";

type PropType = {
    heading: string;
    welcomeMessage?: string;
    children?: ReactNode;
    adminName?: string;
};

const CardBackground = ({
    heading,
    welcomeMessage,
    children,
    adminName,
}: PropType) => {
    return (
        <div className="top-banner">
            <div className="message-wrap">
                <h1>{heading}</h1>
                <span className="welcome-msg">{welcomeMessage}</span>
                <span className="name-admin">{adminName}</span>
            </div>
            {children}
        </div>
    );
};

export default CardBackground;
