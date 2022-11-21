import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from './ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const url = 'https://doctors-portal-server-ten.vercel.app/doctors';
    const {
        data: doctors,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                });
                const data = await res.json();
                return data;
            } catch (err) {
                console.log(err);
            }
        },
    });

    const handleDelete = (id) => {
        const url = `https://doctors-portal-server-ten.vercel.app/doctors/${id}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success('Doctor successfully removed!');
                    refetch();
                }
            });
    };

    const closeModal = () => {
        setDeletingDoctor(null);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-96">
                <progress className="progress progress-primary w-56"></progress>
            </div>
        );
    }

    return (
        <div className="px-10 py-10 lg:py-14">
            <h1 className="mb-10 text-2xl text-neutral">Manage Doctors</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Sl no.</th>
                        <th>Avatar</th>
                        <th>Doctor Name</th>
                        <th>Email</th>
                        <th>Specilty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, i) => (
                        <tr key={doctor._id}>
                            <td>{i + 1}</td>
                            <td>
                                <img
                                    className="w-10 h-10 object-cover rounded-full"
                                    src={doctor.imageURL}
                                    alt=""
                                />
                            </td>
                            <td>{doctor.name}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.specilty}</td>
                            <td>
                                <label
                                    htmlFor="confirmation-modal"
                                    onClick={() => setDeletingDoctor(doctor)}
                                    className="btn btn-error btn-sm"
                                >
                                    Remove
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {deletingDoctor && (
                <ConfirmationModal
                    title={`Are yor sure you want to remove doctor?`}
                    message={`If yor remove ${deletingDoctor.name}, it cannot be undone.`}
                    closeModal={closeModal}
                    doctor={deletingDoctor}
                    handleDelete={handleDelete}
                />
            )}
        </div>
    );
};

export default ManageDoctors;
