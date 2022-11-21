import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const ErrorElement = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('Signed Out');
                navigate('/signin');
            })
            .catch((err) => {
                console.error(err.message);
            });
    };
    return (
        <div>
            <h1 className="text-red-500 text-center py-20">
                Some error occured.
            </h1>
            <p className="text-center text-red-400">
                {error.statusText || error.message}
            </p>
            <p className="text-center text-neutral">
                Please <button onClick={handleSignOut}>Sign Out</button> and
                Sign In again.
            </p>
        </div>
    );
};

export default ErrorElement;
