import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppontmentOption from './AppontmentOption';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import getOptions from '../utils/getOptions';

const AvailableAppointments = ({ selected }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selected, 'PP');

    // If we set the default value of data then isLoading can be ignored...
    const { data: appointmentOptions, isLoading } = useQuery({
        queryKey: 'appointmentOptions',
        queryFn: getOptions,
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-96">
                <progress className="progress progress-primary w-56"></progress>
            </div>
        );
    }

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
