import profileImg from "../../assets/images/profile.png";

const profile = () => {
    return (
        <div className="profile-wrap">
            <div className="main-profile">
                <span className="profile-img">
                    <img src={profileImg} alt="profile-img" />
                </span>
                <div className="profile-name">
                    <span className="show-name">Integrity Home</span>
                    <span className="show-name">Healthcare of Hudson</span>
                </div>
            </div>
        </div>
    );
};

export default profile;
