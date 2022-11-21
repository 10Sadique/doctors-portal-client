import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const MyAppointments = () => {
    const { user } = useContext(AuthContext);

    const {
        data: bookings,
        isLoading,
        // refetch,
    } = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async () => {
            try {
                const res = await fetch(
                    `https://doctors-portal-server-ten.vercel.app/bookings?email=${user.email}`,
                    {
                        headers: {
                            authorization: `bearer ${localStorage.getItem(
                                'accessToken'
                            )}`,
                        },
                    }
                );
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        },
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
                            <th>Payment</th>
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
                                <td>
                                    {booking.price && !booking.paid && (
                                        <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button className="btn btn-primary text-white btn-sm">
                                                Pay
                                            </button>
                                        </Link>
                                    )}
                                    {booking.price && booking.paid && (
                                        <span className="text-success">
                                            Paid
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;
