import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function AdminCheck () {
	const { user } = useSelector((state) => state.auth);

	if (!user || user.roleId !== 2) {
		return <Navigate to={'/'} replace />;
	}

	return <Outlet />;
};

export default AdminCheck;
