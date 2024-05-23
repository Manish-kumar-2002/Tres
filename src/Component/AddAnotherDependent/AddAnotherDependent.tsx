import "./AddAnotherDependent.scss";

type PropType = {
    onClick: () => void;
};
const AddAnotherDependent = ({ onClick }: PropType) => {
    return (
        <div className="add-dependent">
            <button
                type="button"
                className="add-depandent-btn"
                onClick={onClick}
            >
                <i className="add-icon" aria-hidden="true"></i>Add Another
                Dependent
            </button>
        </div>
    );
};

export default AddAnotherDependent;
