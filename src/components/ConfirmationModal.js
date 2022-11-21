import React from 'react';

const ConfirmationModal = ({
    doctor,
    title,
    message,
    closeModal,
    handleDelete,
}) => {
    return (
        <div>
            <input
                type="checkbox"
                id="confirmation-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => handleDelete(doctor._id)}
                            htmlFor="confirmation-modal"
                            className="btn"
                        >
                            Remove
                        </label>
                        <button onClick={closeModal} className="btn btn-error">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
