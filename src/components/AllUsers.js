import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';

const AllUsers = () => {
    const url = `http://localhost:5000/users`;
    const { logOut } = useContext(AuthContext);
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        },
    });

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Successfully made admin');
                    refetch();
                } else {
                    localStorage.removeItem('accessToken');
                    logOut()
                        .then(() => {
                            console.log('Token expired');
                        })
                        .catch((err) => console.log(err));
                }
            });
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-96">
                <progress className="w-56 progress progress-primary"></progress>
            </div>
        );
    }

    return (
        <div className="px-10 py-10 lg:py-14">
            <h1 className="mb-10 text-2xl text-neutral">All Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl no.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Adimn</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        disabled={user.role === 'admin'}
                                        onClick={() =>
                                            handleMakeAdmin(user._id)
                                        }
                                        className="btn btn-primary btn-sm"
                                    >
                                        Make Admin
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-error btn-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
