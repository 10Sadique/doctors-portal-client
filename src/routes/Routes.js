import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import AppointmentPage from '../pages/AppointmentPage';
import Dashboard from '../pages/Dashboard';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import SingUpPage from '../pages/SingUpPage';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
        children: [{ path: '/dashboard', element: <Dashboard /> }],
    },
]);
