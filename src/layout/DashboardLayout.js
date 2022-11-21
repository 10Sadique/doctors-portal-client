import React, { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user.email);

    return (
        <div>
            <div className="shadow-sm">
                <Navbar />
            </div>
            {/* SideNav */}
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="dashboard-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="p-4 menu w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to={`/dashboard`}>My Appointments</Link>
                        </li>
                        {isAdmin && (
                            <>
                                <li>
                                    <Link to={`/dashboard/users`}>
                                        All Users
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/dashboard/addDoctor`}>
                                        Add Doctors
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/dashboard/manageDoctors`}>
                                        Manage Doctors
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default DashboardLayout;
