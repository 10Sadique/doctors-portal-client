import { createBrowserRouter } from 'react-router-dom';
import AddDoctor from '../components/AddDoctor';
import AllUsers from '../components/AllUsers';
import ErrorElement from '../components/ErrorElement';
import ManageDoctors from '../components/ManageDoctors';
import MyAppointments from '../components/MyAppointments';
import Payment from '../components/Payment';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import AppointmentPage from '../pages/AppointmentPage';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import SingUpPage from '../pages/SingUpPage';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/signin', element: <SignInPage /> },
            { path: '/signup', element: <SingUpPage /> },
            { path: '/appointment', element: <AppointmentPage /> },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        errorElement: <ErrorElement />,
        children: [
            { path: '/dashboard', element: <MyAppointments /> },
            {
                path: '/dashboard/users',
                element: (
                    <AdminRoute>
                        <AllUsers />
                    </AdminRoute>
                ),
            },
            {
                path: '/dashboard/addDoctor',
                element: (
                    <AdminRoute>
                        <AddDoctor />
                    </AdminRoute>
                ),
            },
            {
                path: '/dashboard/manageDoctors',
                element: (
                    <AdminRoute>
                        <ManageDoctors />
                    </AdminRoute>
                ),
            },
            {
                path: '/dashboard/payment/:id',
                element: (
                    <AdminRoute>
                        <Payment />
                    </AdminRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/bookings/${params.id}`),
            },
        ],
    },
]);
