import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user.email);
    const location = useLocation();

    if (isAdmin && user) {
        return children;
    }

    if (isAdminLoading || loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <progress className="w-56 progress progress-primary"></progress>
            </div>
        );
    }

    return <Navigate to={`/`} state={{ from: location }} replace />;
};

export default AdminRoute;
