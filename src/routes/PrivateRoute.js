import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children;
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <button className="btn btn-primary loading">loading</button>
            </div>
        );
    }

    return <Navigate to={`/signin`} state={{ from: location }} replace />;
};

export default PrivateRoute;
