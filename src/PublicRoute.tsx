import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAppSelector } from './app/store'

const PublicRoute: React.FC = () => {
    // console.log('PublicRoute rendered');
    const { user } = useAppSelector((state) => state.auth);

    // console.log(user)
    // If NOT logged in → allow access to login/register pages
    if (!user) {
        return <Outlet />;
    }

    // If logged in → redirect based on userType
    switch (user.userType) {
        case "Student":
            return <Navigate to="/student-dashboard" replace />;
        case "Company":
            return <Navigate to="/" replace />;
        case "College":
            return <Navigate to="/college-dashboard" replace />;
        default:
            return <Navigate to="/" replace />; // fallback
    }
};

export default PublicRoute