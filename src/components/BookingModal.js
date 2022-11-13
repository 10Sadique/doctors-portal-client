import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment; // treatment is appointment options
    return (
        <>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className="mt-5 space-y-3">
                        <input
                            type="text"
                            placeholder="Date"
                            className="input input-bordered w-full "
                            value={date}
                            disabled
                        />
                        <select className="select select-bordered w-full">
                            {slots.map((slot, idx) => (
                                <option key={idx}>{slot}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full "
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered w-full "
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full "
                        />
                        <button type="submit" className="btn w-full">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
