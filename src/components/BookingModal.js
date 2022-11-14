import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment; // treatment is appointment options

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patient,
            email,
            phone,
            slot,
        };

        /**
         * @TODO send data to the server and
         * once data is saved then close the modal and
         * show a toast.
         */
        console.log(booking);
        setTreatment(null);
        form.reset();
    };

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
                    <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                        <input
                            type="text"
                            placeholder="Date"
                            className="input input-bordered w-full "
                            value={date}
                            disabled
                        />
                        <select
                            name="slot"
                            className="select select-bordered w-full"
                        >
                            {slots.map((slot, idx) => (
                                <option value={slot} key={idx}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full "
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered w-full "
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
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
