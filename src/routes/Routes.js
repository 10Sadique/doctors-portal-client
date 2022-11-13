import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import AppointmentPage from '../pages/AppointmentPage';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import SingUpPage from '../pages/SingUpPage';

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
]);
