import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
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
                    <ul className="p-4 bg-gray-100 menu w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to={`/dashboard`}>My Appointments</Link>
                        </li>
                        <li>
                            <Link to={`/dashboard/users`}>All Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
