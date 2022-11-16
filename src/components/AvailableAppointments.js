import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import getOptions from '../utils/getOptions';
import AppontmentOption from './AppontmentOption';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ selected }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selected, 'PP');

    // If we set the default value of data then isLoading can be ignored...
    const {
        data: appointmentOptions,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => getOptions(date),
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
                    refetch={refetch}
                />
            )}
        </div>
    );
};

export default AvailableAppointments;
