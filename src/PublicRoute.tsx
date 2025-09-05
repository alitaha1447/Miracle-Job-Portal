import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAppSelector } from './app/store'

const PublicRoute: React.FC = () => {
    const { user } = useAppSelector((s) => s.auth);
    console.log(user)
    // If logged in, block access to auth pages
    return !user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoute