import React, { Fragment, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('Signed Out');
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    const navItems = (
        <Fragment>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'text-primary' : ''
                    }
                    to={`/`}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'text-primary' : ''
                    }
                    to={`/appointment`}
                >
                    Appointment
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'text-primary' : ''
                    }
                    to={`/about`}
                >
                    About
                </NavLink>
            </li>
            {user && (
                <Fragment>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-primary' : ''
                            }
                            to={`/dashboard`}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </li>
                </Fragment>
            )}

            {!user && (
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-primary' : ''
                        }
                        to={`/signin`}
                    >
                        Sign In
                    </NavLink>
                </li>
            )}
        </Fragment>
    );
    return (
        <div className="max-w-[1200px] mx-auto px-6 navbar bg-base-100">
            <div className="w-full navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>

                    <ul
                        tabIndex={1}
                        className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link
                    to={`/`}
                    className="text-xl font-bold normal-case btn btn-ghost"
                >
                    Doctors Portal
                </Link>
            </div>
            <div className="hidden navbar-end lg:flex">
                <ul className="p-0 font-semibold menu menu-horizontal">
                    {navItems}
                </ul>
            </div>
            <label
                htmlFor="dashboard-drawer"
                tabIndex={2}
                className="btn btn-ghost lg:hidden"
            >
                <Bars3Icon className="w-8 h-8 text-black" />
            </label>
        </div>
    );
};

export default Navbar;
