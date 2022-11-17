import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import getBookingsByEmail from '../utils/getBookingsByEmail';

const MyAppointments = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;

    const {
        data: bookings,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['bookings', email],
        queryFn: () => getBookingsByEmail(email),
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-96">
                <progress className="w-56 progress progress-primary"></progress>
            </div>
        );
    }

    return (
        <div className="px-10 py-10 lg:py-14">
            <h1 className="mb-10 text-2xl text-neutral">My Appointments</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, i) => (
                            <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;
