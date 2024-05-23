const FilterBy = () => {
    return (
        <div>
            <div className="clear-filter">
                <div className="filter-header">
                    <span className="filter-title">Filter By:</span>
                    <span
                        className="clear-filter-btn"
                        tabIndex={0}
                        role="button"
                    >
                        Clear All Filters
                    </span>
                </div>
                <div className="filter-control-wrap">
                    <div className="plan-type-wrap">
                        <label
                            htmlFor="plan type"
                            className="filter-control-label"
                        >
                            Plan Type
                        </label>
                        <select>
                            <option value="" selected tabIndex={0}>
                                Select Plan Type
                            </option>
                            <option value="someOption">One Plan</option>
                            <option value="otherOption">Two Plan</option>
                        </select>
                    </div>
                    <div className="plan-id-wrap">
                        <label
                            htmlFor="plan type"
                            className="filter-control-label"
                        >
                            Plan ID
                        </label>
                        <select>
                            <option value="" selected>
                                Select Plan{" "}
                            </option>
                            <option value="someOption">One Plan</option>
                            <option value="otherOption">Two Plan</option>
                        </select>
                    </div>
                </div>
                <span className="clear-filter-btn" tabIndex={0} role="button">
                    Clear All Filters
                </span>
            </div>
            <div className="filter-btn-wrap">
                <button type="button" className="btn-apply" aria-label="Close">
                    Apply
                </button>
                <button type="button" className="btn-cancel" aria-label="Close">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default FilterBy;
