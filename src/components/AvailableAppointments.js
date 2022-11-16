import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppontmentOption from './AppontmentOption';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ selected }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const date = format(selected, 'PP');

    useEffect(() => {
        fetch(`http://localhost:5000/appointmentOptions`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setAppointmentOptions(data);
            });
    }, []);

    return (
        <div>
            <h1 className="text-center font-bold text-primary text-xl">
                Available Appointments on {format(selected, 'PP')}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
                {appointmentOptions.map((option) => (
                    <AppontmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    />
                ))}
            </div>
            {treatment && (
                <BookingModal
                    setTreatment={setTreatment}
                    date={date}
                    treatment={treatment}
                />
            )}
        </div>
    );
};

export default AvailableAppointments;
