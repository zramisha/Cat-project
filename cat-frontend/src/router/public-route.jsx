import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../hooks/useAuth';

const PublicRoute = ({children}) => {
    const isLoggedIn  = useAuth();
    const location = useLocation();
    
    if (isLoggedIn) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default PublicRoute;