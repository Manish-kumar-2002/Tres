import "./InNetworkBenefits.scss";

const InNetworkBenefits = () => {
    return (
        <div className="benefits-wrap">
            <h2 className="network-head">In Network Benefits</h2>
            <div className="sub-benefits-wrap">
                <div className="basic-plans">
                    <div className="individual-plan">
                        <h3 className="head-icon">
                            <i className="icon-individual"></i>Individual Plan
                        </h3>
                        <table className="table-block">
                            <thead>
                                <tr>
                                    <th>Deductible</th>
                                    <th>Out of Pocket Max</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-th="Deductible">$3000</td>
                                    <td data-th="Out of Pocket Max">$5000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="family-plan">
                        <h3 className="head-icon">
                            <i className="icon-family" aria-hidden="true"></i>
                            Family's Plan
                        </h3>
                        <table className="table-block">
                            <thead>
                                <tr>
                                    <th>Deductible</th>
                                    <th>Out of Pocket Max</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-th="Deductible">$7000</td>
                                    <td data-th="Out of Pocket Max">$14000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="basic-cares">
                    <table className="table-secondary">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Primary Care</th>
                                <th>Specialist</th>
                                <th>Urgent Care</th>
                                <th>Emergency Room</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-th="" className="subtitle">
                                    <span>Co-pay</span>
                                </td>
                                <td data-th="Primary Care">$5000</td>
                                <td data-th="Specialist">$5000</td>
                                <td data-th="Urgent Care">$5000</td>
                                <td data-th="Emergency Room">$5000</td>
                            </tr>
                            <tr>
                                <td data-th="" className="subtitle">
                                    <span>Co-insurance</span>
                                </td>
                                <td data-th="Primary Care">$5000</td>
                                <td data-th="Specialist">$5000</td>
                                <td data-th="Urgent Care">$5000</td>
                                <td data-th="Emergency Room">$5000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InNetworkBenefits;
