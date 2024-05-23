import networkOneImg from "../../assets/images/CIGNA.svg";
import "./ProviderNetworks.scss";
import networkTwoImg from "../../assets/images/PHCS.svg";
const ProviderNetworks = () => {
    return (
        <div className="provider-networks">
            <h2>Provider Networks</h2>
            <div className="networks-wrap">
                <div className="networks-show">
                    <div className="networks-img">
                        <img src={networkOneImg} alt="networkOneImg" />
                    </div>
                    <div className="networks-name">CIGNA</div>
                </div>
                <div className="networks-show">
                    <div className="networks-img">
                        <img src={networkTwoImg} alt="networkTwoImg" />
                    </div>
                    <div className="networks-name">PHCS</div>
                </div>
            </div>
        </div>
    );
};

export default ProviderNetworks;
